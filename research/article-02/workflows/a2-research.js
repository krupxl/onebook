export const meta = {
  name: 'a2-research',
  description: 'Article II (do not kill the innocent): research, counter-evidence and independent verification for a group of traditions',
  phases: [{ title: 'Research' }, { title: 'Verify' }],
}

const BRIEF = '/tmp/claude-0/-home-user-onebook/56671327-13b5-5022-8f03-625fe5a4ef24/scratchpad/a2/brief.md'

const ROW = {
  type: 'object',
  properties: {
    topic: { type: 'string', description: 'support | counter | limit | reconciliation | context: court | context: war | context: excluded (before birth, own death, animals, accident)' },
    tier: { type: 'string', description: 'e.g. "1", "2 (treated as primary, Rabbinic)", "2 (not counted)", "outside the corpus"' },
    branch: { type: 'string', description: 'all branches, or the branch(es) that accept the text' },
    reference: { type: 'string', description: 'exact reference; give both numberings where editions differ' },
    original: { type: 'string', description: 'a short phrase in the original language, or empty' },
    translation: { type: 'string', description: 'translation actually used' },
    says: { type: 'string', description: 'short paraphrase in plain English of what the passage says' },
    bearing: { type: 'string', description: 'how it bears on K1, K0 and K3 under the labelling rules, citing rule numbers' },
    strength: { type: 'string', description: 'Explicit | Clear teaching | Implied | n/a (for counter or context rows)' },
    verification: { type: 'string', description: 'VERIFIED (search): <site and what was seen>, or UNVERIFIED: <why>' },
    link: { type: 'string', description: 'URL on a reference site, or empty if unverified' },
  },
  required: ['topic', 'tier', 'branch', 'reference', 'original', 'translation', 'says', 'bearing', 'strength', 'verification', 'link'],
}

const LABEL = {
  type: 'object',
  properties: { label: { type: 'string' }, reason: { type: 'string' } },
  required: ['label', 'reason'],
}

const RESEARCH_SCHEMA = {
  type: 'object',
  properties: {
    tradition: { type: 'string' },
    rows: { type: 'array', items: ROW },
    reconciliation: { type: 'string', description: "the tradition's own reconciliation of its hard texts, naming each authority and its standing" },
    proposed_labels: { type: 'object', properties: { K1: LABEL, K0: LABEL, K3: LABEL }, required: ['K1', 'K0', 'K3'] },
    gaps: { type: 'string' },
    searches_used: { type: 'number' },
  },
  required: ['tradition', 'rows', 'reconciliation', 'proposed_labels', 'gaps', 'searches_used'],
}

const VROW = {
  type: 'object',
  properties: { ...ROW.properties, check: { type: 'string', description: 'confirmed | corrected: <what> | could not confirm, now UNVERIFIED | added by verifier | dropped: <why>' } },
  required: [...ROW.required, 'check'],
}

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    tradition: { type: 'string' },
    rows: { type: 'array', items: VROW, description: 'the final merged and corrected set of rows (support, counter, limits, reconciliation, context), duplicates merged' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'each error found in the research and what was done' },
    missed_counter_evidence: { type: 'array', items: { type: 'string' }, description: 'counter-evidence the researchers missed, found by you (also included in rows)' },
    reconciliation: { type: 'string' },
    labels: { type: 'object', properties: { K1: LABEL, K0: LABEL, K3: LABEL }, required: ['K1', 'K0', 'K3'] },
    branch_notes: { type: 'string', description: 'how the result differs by branch, and which branches were not checked' },
    fairness_notes: { type: 'string', description: 'anything that would make an adherent think their tradition was judged unfairly or by a different standard' },
    gaps: { type: 'string' },
    searches_used: { type: 'number' },
  },
  required: ['tradition', 'rows', 'corrections', 'missed_counter_evidence', 'reconciliation', 'labels', 'branch_notes', 'fairness_notes', 'gaps', 'searches_used'],
}

function common(t) {
  return `Read the research brief first: ${BRIEF} (cat it with Bash). It defines the wordings K1, K0 and K3, the nine labelling rules and the standards. Your tradition is ${t.name}. Its corpus section is lines ${t.corpus} of /home/user/onebook/sources/corpus.md and its translations section is lines ${t.trans} of /home/user/onebook/sources/translations.md (read both with sed -n).`
}

function researchPrompt(t) {
  return `${common(t)}

Your job: the SUPPORT researcher. Find the strongest evidence that ${t.name}'s counted texts teach K1 (and K0), at the Explicit or Clear teaching level, including wider duties that reach everyone. Prefer Tier 1. For each row record every field. Also record the main limits and any counter-evidence you meet along the way (another researcher is hunting counter-evidence separately, so do not spend most of your effort there), and record K3 evidence (war) as context.
Leads to check (from memory, may be wrong; look beyond them): ${t.support}
Budget: at most 25 web searches. Report how many you used.`
}

function counterPrompt(t) {
  return `${common(t)}

Your job: the COUNTER-EVIDENCE hunter. Search ${t.name}'s texts, Tier 1 first, for passages that permit, command or approve a deliberate killing of a person who is not attacking anyone, on private authority (by a master, parent, husband, zealot, kinsman, crowd or religious leader acting outside any court or ruler); that kill or allow killing newborns or children; that declare some killings blameless because of the victim's status or act; that limit protection to one's own community; or that grade protection by status. Also find texts on war (for K3, context only) and on courts (context only). For each hard text, find the tradition's OWN reconciliation (its counted texts, classical commentators, authorised bodies), with the standing of each. Be fair: report what the texts say, neither softening nor dramatising.
Leads to check (from memory, may be wrong; look beyond them): ${t.counter}
Budget: at most 25 web searches. Report how many you used.`
}

function verifyPrompt(t, res, cnt) {
  return `${common(t)}

Your job: the INDEPENDENT VERIFIER. You did not do the research below. Two researchers (one for support, one for counter-evidence) produced these rows for ${t.name}. Your task is to find what is wrong with them.
1. Re-check every row by web search: does the reference exist, does the passage say what the row says, is the tier and branch right, is the translation named correctly, and is the link to a reference site that shows it? Correct errors. If you cannot confirm a row, mark it "UNVERIFIED" (it then cannot count). Never confirm a row you did not see evidence for.
2. Search for counter-evidence and reconciliations that both missed, especially passages on private killing, newborns, slaves and household members, zealots or blood avengers, and protection limited by faith or status.
3. Apply the nine labelling rules exactly, and give final labels for K1, K0 and K3 with reasons. Where a label depends on a disputed reading, say so and use Unclear if rule 6 applies.
4. Merge duplicates and return the final set of rows, each with a "check" field saying what you did.
5. Note anything that would make an adherent think the tradition was judged by a different standard from others.
Budget: at most 30 web searches. Report how many you used.

SUPPORT RESEARCHER OUTPUT:
${JSON.stringify(res)}

COUNTER-EVIDENCE HUNTER OUTPUT:
${JSON.stringify(cnt)}`
}

const results = await pipeline(
  args,
  t => parallel([
    () => agent(researchPrompt(t), { label: `support:${t.prefix}`, phase: 'Research', schema: RESEARCH_SCHEMA }),
    () => agent(counterPrompt(t), { label: `counter:${t.prefix}`, phase: 'Research', schema: RESEARCH_SCHEMA }),
  ]),
  (pair, t) => agent(verifyPrompt(t, pair[0], pair[1]), { label: `verify:${t.prefix}`, phase: 'Verify', schema: VERIFY_SCHEMA })
    .then(v => ({ prefix: t.prefix, support: pair[0], counter: pair[1], verified: v })),
)
return results