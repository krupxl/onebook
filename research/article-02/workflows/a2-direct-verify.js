export const meta = {
  name: 'a2-direct-verify',
  description: 'Article II: direct reading of label-deciding passages in local source datasets, then an adversarial label check',
  phases: [{ title: 'Direct verify' }, { title: 'Challenge labels' }],
}

const SP = '/tmp/claude-0/-home-user-onebook/56671327-13b5-5022-8f03-625fe5a4ef24/scratchpad/a2'
const BRIEF = `${SP}/brief.md`
const GUIDE = `${SP}/sources_guide.md`

const ROW = {
  type: 'object',
  properties: {
    topic: { type: 'string' }, tier: { type: 'string' }, branch: { type: 'string' },
    reference: { type: 'string' }, original: { type: 'string' }, translation: { type: 'string' },
    says: { type: 'string' }, bearing: { type: 'string' }, strength: { type: 'string' },
    verification: { type: 'string', description: 'VERIFIED (direct, <dataset>): <file or tool call>; seen: "<short phrase>" | VERIFIED (search): ... | UNVERIFIED: <why>' },
    link: { type: 'string' },
    check: { type: 'string', description: 'what you did in this pass: read directly and confirmed | read directly and corrected: <what> | not available locally, status kept | searched and confirmed | could not confirm, now UNVERIFIED | added' },
  },
  required: ['topic', 'tier', 'branch', 'reference', 'original', 'translation', 'says', 'bearing', 'strength', 'verification', 'link', 'check'],
}
const LABEL = { type: 'object', properties: { label: { type: 'string' }, reason: { type: 'string' } }, required: ['label', 'reason'] }
const DV_SCHEMA = {
  type: 'object',
  properties: {
    tradition: { type: 'string' },
    rows: { type: 'array', items: ROW, description: 'the full final set of rows for this tradition, every row included, updated' },
    corrections: { type: 'array', items: { type: 'string' } },
    labels: { type: 'object', properties: { K1: LABEL, K0: LABEL, K3: LABEL }, required: ['K1', 'K0', 'K3'] },
    direct_count: { type: 'string', description: 'how many counted rows are now VERIFIED (direct), and which deciding rows are still only search-verified or unverified' },
    searches_used: { type: 'number' },
  },
  required: ['tradition', 'rows', 'corrections', 'labels', 'direct_count', 'searches_used'],
}
const CH_SCHEMA = {
  type: 'object',
  properties: {
    tradition: { type: 'string' },
    objections: { type: 'array', items: { type: 'object', properties: {
      label: { type: 'string', description: 'K1, K0 or K3' },
      severity: { type: 'string', enum: ['changes the label', 'changes the reasoning', 'minor'] },
      objection: { type: 'string' },
      rule_basis: { type: 'string' },
      proposed: { type: 'string' },
    }, required: ['label', 'severity', 'objection', 'rule_basis', 'proposed'] } },
    final_labels: { type: 'object', properties: { K1: LABEL, K0: LABEL, K3: LABEL }, required: ['K1', 'K0', 'K3'] },
    consistency_notes: { type: 'string', description: 'how this tradition is treated compared with the cross-tradition hard cases listed in the prompt' },
  },
  required: ['tradition', 'objections', 'final_labels', 'consistency_notes'],
}

const HARD = `Cross-tradition hard cases (for consistency): Numbers 35:26 to 27 (a kinsman may kill a court-judged manslayer found outside his city of refuge, 'no bloodguilt': Judaism and Christianity); Numbers 25 with Psalm 106:30 to 31 (Phinehas kills in zeal and is rewarded: Judaism and Christianity); Abū Dāwūd 4361 (graded Sahih by al-Albānī: a master kills his slave woman for insulting the Prophet and the Prophet declares no retaliation is due: Sunni Islam); Seneca, De Ira 1.15.2 (drowning weak or deformed newborns, 'not anger but reason': Stoicism); the Mahāyāna Mahāparinirvāṇa Sūtra (killing an icchantika carries no retribution; a king who killed brahmins who slandered the Mahāyāna: Mahāyāna Buddhism); Yasna 31.18 and 33.2 (resisting or wronging the follower of the Lie: Zoroastrianism); Atharvaveda rites against enemies and Bṛhadāraṇyaka 6.4.12 (Hinduism).`

function dvPrompt(t) {
  return `You are the DIRECT VERIFIER for ${t.name} in Article II of The Common Code. Read first: the research brief ${BRIEF} (floor K1, lower floor K0, record wording K3, nine labelling rules) and the source guide ${GUIDE} (local datasets and tools; read its rules on untrusted data). Then read this tradition's current research file: ${SP}/${t.prefix}.json (use python3 -I to load it; the field "verified" holds the rows, labels and reasons from the previous verifier; "support" and "counter" hold the raw research).

The previous round could barely search (a shared search limit ran out), so many rows rest on memory or on search summaries. Your task:
1. For every row that is a counted text (Tier 1, or Tier 2 treated as primary for a branch) and bears on a label (support rows rated Explicit or Clear teaching; counter rows that contradict, limit, or make a label Unclear; counted reconciliations), read the passage DIRECTLY in the local sources where it is available, and confirm or correct the reference, the content, the translation named, the tier and the branch. Record the verification as the guide says.
2. Read directly these priority passages even if the file marks them unverified or omits them: ${t.priority}
3. Where a text is not available locally, keep its existing status, or use web search within your budget of ${t.budget} searches (the budget is shared with other agents; do not exceed it). Never mark a row VERIFIED without having seen the passage.
4. Re-apply the nine labelling rules to the corrected rows and give labels for K1, K0 and K3 with reasons. Be exact about which texts decide and why. ${HARD}
5. Return the FULL set of rows (all of them, updated), every correction you made, and an account of how many counted rows are now directly verified.
Never invent or guess a reference. Plain UK English, no em or en dashes.`
}

function chPrompt(t, dv) {
  return `You are an independent LABEL CHALLENGER for ${t.name} in Article II of The Common Code. You have not seen the research. Read the brief ${BRIEF} (floor K1, lower floor K0, record wording K3, nine labelling rules). You may read local sources described in ${GUIDE} to check a passage (follow its rules), but you need no web searches.

Below are the directly verified rows and proposed labels. Make the strongest case that each label is wrong, in either direction: too harsh or too gentle under the rules; a counted text misread; a rule misapplied (especially rule 2 versus rule 4, rule 5 private versus judicial, rule 6 unclear, rule 7 wider rules and 'taught in part', rule 1 counting and branches); a reconciliation ignored or overstated. Check consistency with how the same kinds of text are labelled in other traditions: ${HARD}
Then give your own final labels with reasons. Do not invent evidence; argue only from the rows and the rules (and any passage you read directly). Plain UK English, no em or en dashes.

ROWS AND PROPOSED LABELS:
${JSON.stringify({ labels: dv.labels, rows: dv.rows, corrections: dv.corrections })}`
}

const results = await pipeline(
  args,
  t => agent(dvPrompt(t), { label: `direct:${t.prefix}`, phase: 'Direct verify', schema: DV_SCHEMA }),
  (dv, t) => agent(chPrompt(t, dv), { label: `challenge:${t.prefix}`, phase: 'Challenge labels', schema: CH_SCHEMA })
    .then(ch => ({ prefix: t.prefix, direct: dv, challenge: ch })),
)
return results