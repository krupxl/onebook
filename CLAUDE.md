# The Common Code: Project Brief

This file is the standing brief for this project. Read it in full at the start of every session and follow it. If anything here conflicts with a request, stop and ask before acting.

---

## 1. What this project is

**Aim**
To draft a universal code of conduct, structured like a constitution, built only from principles of behaviour that the world's traditions affirm in their own texts; and to keep a register of conduct questions where the texts differ, to be examined through scholarship, evidence and reasoning so the shared code can grow over time.

**What it is not**
- It is not a religion and does not ask anyone to believe anything.
- It does not decide which tradition is right or wrong.
- It does not make claims about God, the soul, the afterlife or the nature of reality.
- It does not replace, rewrite or overrule any scripture.

**The working hypothesis**
Every disagreement between the traditions on matters of conduct can be reduced, through textual study, evidence and logic, until no irreducible differences remain. The project tests this hypothesis honestly. If it turns out to be false, the precise list of irreducible questions is itself a valuable result. Do not bend findings to make the hypothesis look true.

---

## 2. Settled decisions (do not change without asking)

1. **Conduct only.** Every article is about how to act, never about what to believe.
2. **Texts are the test of agreement.** Agreement is established by what the traditions' texts teach, not by surveys, opinions or modern practice.
3. **Unanimity.** An article enters the Code only if all thirteen traditions clearly teach it.
4. **A floor, not a ceiling.** Each article states the minimum every tradition asks. Traditions may ask more of their own followers; the Code never asks more than the common floor.
5. **Offered, not imposed.** The Code belongs to no one and is open to challenge by anyone with evidence and reason.
6. **Plain language.** Anyone, of any faith or none, aged around 12 and up, must be able to read it.
7. **UK English** throughout. Never use em dashes; use commas, colons, full stops or brackets instead.

---

## 3. The thirteen traditions

Always list them in this fixed order. It is roughly chronological by origin and is a convention only, never a ranking.

1. Hinduism
2. Judaism
3. Zoroastrianism
4. Buddhism
5. Jainism
6. Confucianism
7. Taoism
8. Stoicism
9. Christianity
10. Islam
11. Sikhism
12. Bahá'í Faith
13. Secular humanism

---

## 4. Source corpus

Each tradition's evidence comes from a defined corpus in two tiers.

- **Tier 1, primary:** core scripture or founding texts.
- **Tier 2, authoritative:** major traditional commentary or texts the tradition itself treats as authoritative.

Tier 2 may support or clarify; it may not be the *only* evidence unless the tradition genuinely treats it as primary. Record the tier for every citation.

Proposed starting corpus (confirm, refine and record the final version in `sources/corpus.md`, with reasons for any change):

| Tradition | Tier 1 | Tier 2 |
|---|---|---|
| Hinduism | Vedas, Upanishads, Bhagavad Gita | Mahabharata, Ramayana, Dharmashastras (e.g. Manusmriti, flagged as contested), Tirukkural if justified |
| Judaism | Tanakh | Mishnah, Talmud |
| Zoroastrianism | Avesta (especially the Gathas) | Pahlavi texts (Denkard, Dadestan-i Denig) |
| Buddhism | Pali Canon (Sutta Pitaka incl. Dhammapada, Vinaya) | Major Mahayana sutras, Udanavarga |
| Jainism | Agamas (e.g. Acaranga Sutra) | Tattvartha Sutra |
| Confucianism | Analects, Mencius | Great Learning, Doctrine of the Mean, Classic of Filial Piety |
| Taoism | Tao Te Ching, Zhuangzi | Treatise on Response and Retribution (Taishang Ganying Pian) |
| Stoicism | Epictetus (Discourses, Enchiridion), Marcus Aurelius (Meditations), Seneca (Letters) | Musonius Rufus |
| Christianity | Bible (Old and New Testaments) | Early creeds and Church Fathers only where needed |
| Islam | Qur'an | Sahih hadith (Bukhari, Muslim), Forty Hadith of an-Nawawi |
| Sikhism | Guru Granth Sahib | Sikh Rehat Maryada |
| Bahá'í Faith | Kitáb-i-Aqdas, Hidden Words, Kitáb-i-Íqán | Gleanings, other authorised writings |
| Secular humanism | Amsterdam Declaration (2022), Humanist Manifestos I to III | Secular Humanist Declaration (1980) |

**Translations.** For each tradition, record in `sources/translations.md` which translation(s) are used, prefer public-domain or freely accessible ones, and note where translation choice materially changes meaning.

**Verification sources.** Use freely accessible reference sites to check every citation, for example: Sefaria (Jewish texts), Quran.com and Sunnah.com (Islam), SuttaCentral (Pali Canon), ctext.org (Chinese classics), SearchGurbani (Guru Granth Sahib), bahai.org/library (Bahá'í), sacred-texts.com (many traditions), Humanists International (humanist declarations).

---

## 5. Evidence standard

This is the most important section. The Code is only as trustworthy as its citations.

**Every citation must record:**
- Tradition and tier
- Text and exact reference (book, chapter and verse; sutra number; section; or page)
- Translation used
- A short paraphrase of what it teaches, in your own words
- Strength rating (see below)
- Verification status: `VERIFIED` (checked against a source, with link) or `UNVERIFIED`

**Strength ratings:**
- **Explicit:** the text directly states the principle.
- **Clear teaching:** taught unmistakably through a story, saying, example or principle, even if not phrased as a rule.
- **Implied:** can be argued for, but is not plainly taught.

Only **Explicit** and **Clear teaching** count towards unanimity. Implied evidence is recorded but does not count.

Some traditions teach through rules (Judaism, Islam), others through sayings, stories and character (Taoism, Confucianism, Stoicism). "Clear teaching" exists so that teaching style does not become an unfair veto. Do not abuse it to manufacture agreement.

**Hard rules:**
- **Never invent or guess a reference.** If you cannot verify it, mark it `UNVERIFIED`, and it does not count.
- **Search for counter-evidence**, not just support. For every article, actively look for passages in each tradition that contradict or limit the principle, and record them.
- **No cherry-picking.** If a tradition contains passages for and against, show both and explain how the tradition itself reconciles them, citing its own authorities.
- **Copyright.** Prefer public-domain translations. Keep any direct quotation short; paraphrase otherwise. Quoting the original language (Hebrew, Arabic, Sanskrit, Pali, Classical Chinese, Gurmukhi, etc.) briefly alongside a reference is encouraged.

---

## 6. The method (run this for every candidate principle)

1. **Candidate.** Take one principle from `candidates.md`.
2. **Reduce to the floor.** Rephrase it at the minimum level every tradition could plausibly require. Example: traditions disagree about whether to drink alcohol, but agree on the floor "do not let intoxication lead you to harm others or yourself".
3. **Gather evidence.** Find the strongest support in each of the thirteen traditions, following Section 5.
4. **Gather counter-evidence.** Search each tradition for contradictions or limits.
5. **Verdict.**
   - **Admitted:** Explicit or Clear teaching in all thirteen, verified, with no core contradiction. Draft the article.
   - **Register:** one or more traditions fail. Try a lower floor first (back to step 2). If no workable floor exists, open a Register entry.
   - **Rejected:** not a conduct principle, or out of scope.
6. **Draft.** Write the article using the template in Section 8.
7. **Independent check.** Launch a separate subagent that has not seen your reasoning. Give it only the finished article file and ask it to verify every citation against the sources, try to find counter-evidence you missed, and flag any wording that favours one tradition. Record its findings and resolve every issue before marking the article complete.
8. **Log.** Update `CHANGELOG.md` and `HYPOTHESIS.md`, then commit.

---

## 7. Register of Open Questions

Every conduct question where the texts differ gets its own file in `register/`. Each entry must:

- State the question neutrally.
- Set out each tradition's position, with citations to the same standard as Section 5, in a way its own adherents would recognise as fair.
- **Decompose** the disagreement into parts, tagging each:
  - **Textual:** what the texts actually say or mean. Resolved by scholarship, original languages, context.
  - **Empirical:** a claim about the world. Resolved by science and evidence.
  - **Logical:** internal consistency. Resolved by reasoning, including whether a tradition's own stated principles imply something.
  - **Axiomatic:** a foundational premise or value. Can be isolated and stated precisely, possibly not proven.
- Record what has been resolved, what remains, and the next concrete research step.
- Propose any candidate floor that might eventually move it into the Code.

Never declare a winner between traditions. The goal is to narrow the disagreement, not to judge it.

---

## 8. Templates

### Article template (`code/articles/article-NN-short-name.md`)

```
# Article [Roman numeral]: [Short title]

**The Article**
[One sentence. Plain English.]

**Why**
[Two to four sentences explaining the reason in terms anyone can accept.]

**The floor**
What this requires: [...]
What this does not require: [what is left to each tradition and conscience]

**Evidence**
| # | Tradition | Tier | Source and reference | Translation | What it teaches | Strength | Verified |
|---|---|---|---|---|---|---|---|
| 1 | Hinduism | ... | ... | ... | ... | ... | link |
... (all thirteen, in fixed order)

**Counter-evidence considered**
[Each passage found that seems to cut against the article, and how it was resolved.]

**Independent check**
[Summary of the subagent's findings and how each was addressed.]

**Status:** Admitted | Version 1.0 | [date]
```

### Register template (`register/q-NNN-short-name.md`)

```
# Open Question [NNN]: [Neutral question]

**Positions**
[Each tradition's position with citations.]

**Decomposition**
| Part | Type | Status | Notes |
|---|---|---|---|

**Candidate floor (if any)**

**Next research step**

**Status:** Open | [date]
```

---

## 9. Repository structure

```
CLAUDE.md                   this brief
README.md                   short public introduction
METHOD.md                   public version of Sections 4 to 7, so anyone can check the work
HYPOTHESIS.md               running tally: articles admitted, questions open, parts resolved by type, axiomatic residue
CHANGELOG.md                versioned history of every change
candidates.md               list of candidate principles and their status
code/
  preamble.md
  articles/
  freedoms-of-conscience.md what the Code deliberately leaves to each person and tradition
register/
sources/
  corpus.md
  translations.md
```

---

## 10. Approved Preamble

Write this to `code/preamble.md` exactly as below.

> **Preamble**
>
> Every person alive was born without choosing to be, into a world they did not make, among people they did not pick.
>
> We speak different languages. We have followed different teachers. We pray in different ways, or not at all. Yet when we look closely at the books our traditions hold most dear, we find they ask much the same of us when it comes to how we treat one another.
>
> This Code gathers that common ground in one place.
>
> It is built only from what the texts themselves teach. An article belongs here only if it is found in every one of these traditions: Hinduism, Judaism, Zoroastrianism, Buddhism, Jainism, Confucianism, Taoism, Stoicism, Christianity, Islam, Sikhism, the Bahá'í Faith and secular humanism. Where they agree, we write it down. Where they differ, we do not choose between them. We record the question openly and keep studying it.
>
> This Code is not a religion. It does not ask you to believe anything about God, the soul or what comes after death. It replaces no scripture and overrules no faith.
>
> It sets a floor, not a ceiling. It describes the least that every tradition asks of us. Each person and each community remains free to ask more of themselves.
>
> It is offered, not imposed. It belongs to no nation, people or institution. Anyone may read it, anyone may question it, and anyone who brings evidence and good reason may help improve it.
>
> We write it in the hope that people who will never share a creed might still share a conscience, and that those who come after us inherit a world a little kinder than the one we were given.

---

## 11. Seed candidates

Start `candidates.md` with these, then add any others you find recurring across the traditions (aim for 20 to 30 in total). Each needs reducing to its floor before testing.

- Treat others as you would want to be treated (Golden Rule)
- Do not kill the innocent
- Do not steal
- Speak the truth; do not deceive
- Keep your promises
- Protect the vulnerable, the stranger and the guest
- Honour and care for your parents and elders
- Be generous to those in need
- Master your anger and your ego
- Forgive
- Be fair and just in your dealings
- Be grateful
- Practise moderation; do not let intoxication or excess lead you to harm
- Care for the earth and do not waste
- Do not cause unnecessary suffering to living beings

---

## 12. Writing style

- Short sentences. Common words. Reading age around 12.
- No jargon from any single tradition in article text. Tradition-specific terms belong only in the evidence tables, with a brief gloss.
- Neutral vocabulary: avoid words that carry one tradition's framing (e.g. "sin", "karma", "commandment") in the Code itself.
- UK English. No em dashes, ever.

---

## 13. Working rules for each session

- Work on **one article or one Register entry at a time**.
- **Stop for human review** after each article is complete. Do not start the next one until told to.
- Ask before changing anything in Section 2.
- Use git. Commit after each completed step with a clear message.
- When you are uncertain, say so in the file rather than smoothing it over. Honest gaps are better than false confidence.
