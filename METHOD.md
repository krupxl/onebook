# Method

This page explains how the Common Code is built, so that anyone can check the work. It is a public, plain-English version of the rules the project follows. If you find a place where the work does not follow these rules, please say so.

---

## 1. The thirteen traditions

The Code draws on thirteen traditions. They are always listed in this order:

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

The order is roughly the order in which the traditions began. It is a convention only. It is not a ranking.

---

## 2. Which texts count as evidence

Agreement is tested by what the traditions' own texts teach. It is not tested by surveys, by opinions, or by what people happen to do today.

For each tradition we fix a list of texts in advance, in two tiers:

- **Tier 1 (primary):** the core scripture or founding texts.
- **Tier 2 (authoritative):** major traditional commentary, or texts that the tradition itself treats as carrying authority.

Tier 2 texts may support or explain what Tier 1 says. A Tier 2 text may not be the *only* evidence for a tradition, unless that tradition genuinely treats the text as primary. Every citation records its tier, so you can see which kind of evidence it is.

Some traditions have branches that accept different texts. A text that one major branch rejects cannot, on its own, show what the whole tradition teaches. It counts only if a text the other branch accepts teaches the same thing. This rule was reviewed on 13 October 2026, while testing the first article, and kept as written; the reasons are in [`sources/corpus.md`](sources/corpus.md).

The full list for each tradition, and the reasons for it, are in [`sources/corpus.md`](sources/corpus.md).

### Translations

Most of these texts were not written in English. For each tradition we record which English translation we use in [`sources/translations.md`](sources/translations.md). We prefer translations that are in the public domain, or at least free to read online, so that anyone can check them. Where the choice of translation changes the meaning of a passage, we say so. We also give short phrases in the original language (Hebrew, Arabic, Sanskrit, Pali, Classical Chinese, Gurmukhi and so on) where that helps.

---

## 3. The evidence standard

The Code is only as trustworthy as its citations. This is the most important part of the method.

### What every citation records

| Field | What it means |
|---|---|
| Tradition and tier | Which tradition, and whether the text is Tier 1 or Tier 2 |
| Source and reference | The text and the exact place in it: book, chapter and verse; sutra number; section; or page |
| Translation | Which translation was used |
| What it teaches | A short summary in our own words |
| Strength | How directly the text teaches the principle (see below) |
| Verified | Whether the reference has been checked against a source, with a link |

### How strong is the evidence?

Each citation gets one of three ratings.

- **Explicit.** The text states the principle directly.
- **Clear teaching.** The text teaches the principle unmistakably, through a story, a saying, an example or a wider principle, even though it is not worded as a rule.
- **Implied.** Someone could argue that the text supports the principle, but the text does not plainly teach it.

**Only Explicit and Clear teaching count.** Implied evidence is written down, so that readers can see it, but it does not count towards agreement.

**Wider rules.** A text can teach a principle by teaching a wider one that includes it. For example, "harm no one" includes "do not harm anyone in a way you would not want to be harmed yourself", because whoever keeps the first also keeps the second. Such a text counts towards the narrower principle, at the strength with which it teaches the wider one, and is marked "wider rule" in the evidence table. The wider rule must reach everyone the principle reaches: a duty owed only to some people does not count for a principle owed to all. (Confirmed by the project lead on 13 October 2026, while testing the first article.)

Why have a "Clear teaching" rating at all? Because traditions teach in different ways. Some, such as Judaism and Islam, often teach through rules. Others, such as Taoism, Confucianism and Stoicism, often teach through sayings, stories and examples of good character. A tradition should not be counted as disagreeing just because it does not write in rules. But "Clear teaching" must not be stretched to make agreement appear where there is none.

### How citations are checked

A citation is marked **VERIFIED** only when its reference number and its content have been checked against a named, freely available reference source, and a link to that source is given. Examples of such sources are Sefaria (Jewish texts), Quran.com and Sunnah.com (Islam), SuttaCentral (the Pali Canon), ctext.org (Chinese classics), SearchGurbani (the Guru Granth Sahib), bahai.org/library (Bahá'í writings), sacred-texts.com (many traditions) and Humanists International (humanist declarations).

The verification column also says *how* the check was made:

- **VERIFIED (direct):** the passage was read on the linked page, or read in full in the reference site's own published data or a named open dataset of the same translation (section 9, decision 12).
- **VERIFIED (search):** the passage, with its reference, was confirmed through web search results drawn from the linked page, but the page itself was not opened and read in full. This is a weaker check. Entries marked this way should be re-checked by direct reading when possible.
- **UNVERIFIED:** the reference could not be confirmed. An unverified citation does not count, however likely it seems.

"VERIFIED (search)" is accepted for drafts, for research and for the Register. **An article can be admitted to the Code only when every counted citation in its evidence table is VERIFIED (direct).** (Decided 2026-10-13; see section 9.)

If a reference is numbered differently in different editions (for example, the Mahabharata, Seneca's letters or the verses of some scriptures), both numbers are given.

### Rules that are never broken

1. **Never invent or guess a reference.** If it cannot be checked, it is marked UNVERIFIED and does not count.
2. **Look for evidence against, not only for.** For every principle, we search each tradition for passages that seem to contradict or limit it, and we record what we find.
3. **No cherry-picking.** If a tradition has passages on both sides, we show both, and we explain how the tradition itself reconciles them, citing its own authorities.
4. **Respect copyright.** We prefer public-domain translations. We keep direct quotations short and otherwise put things in our own words.

---

## 4. How a principle is tested

Every candidate principle goes through the same eight steps.

1. **Pick a candidate.** Take one principle from the list in [`candidates.md`](candidates.md).
2. **Find the floor.** Reword the principle at the lowest level that every tradition could plausibly require. For example, traditions disagree about whether to drink alcohol at all, but they may all agree on the floor "do not let intoxication lead you to harm others or yourself".
3. **Gather evidence.** Find the strongest support in each of the thirteen traditions, following the evidence standard above.
4. **Gather counter-evidence.** Search each tradition for passages that contradict or limit the principle.
5. **Reach a verdict.** There are three possible outcomes.
   - **Admitted:** every one of the thirteen traditions teaches the floor at the Explicit or Clear teaching level, every counted citation is verified, and nothing in any tradition contradicts the core of the principle. The principle becomes an article.
   - **Register:** one or more traditions do not meet the standard. First we try a lower floor (back to step 2). If no workable floor can be found, the question goes into the Register of Open Questions.
   - **Rejected:** the candidate is not about conduct, or is outside the project's scope.
6. **Draft the article.** Each article has: one plain sentence; a short "why"; a statement of what the floor requires and what it does not require; a table of evidence for all thirteen traditions; the counter-evidence considered; the results of the independent check; and its status, version and date.
7. **Independent check.** A separate reviewer, who has not seen the reasoning behind the draft, is given only the finished article. The reviewer checks every citation against the sources, looks for counter-evidence that was missed, and flags any wording that favours one tradition over another. Every issue raised is recorded and resolved before the article is marked complete.
8. **Record it.** The changelog and the hypothesis tally are updated, and the change is saved with a clear description.

After each article, work stops for human review before the next one begins.

---

## 5. The Register of Open Questions

When the traditions' texts differ on a question of conduct, the Code does not choose a side. The question goes into the Register, in the `register/` folder, one file per question.

Each Register entry:

1. **States the question neutrally**, in words that do not favour any answer.
2. **Sets out each tradition's position**, with citations to the same standard as articles, in a way that the tradition's own followers would recognise as fair.
3. **Breaks the disagreement into parts**, and labels each part as one of four types:
   - **Textual:** about what the texts actually say or mean. This can be worked on through scholarship, the original languages and the context of a passage.
   - **Empirical:** about a fact in the world. This can be worked on through science and evidence.
   - **Logical:** about whether a position is consistent with itself, including whether a tradition's own stated principles lead to a particular conclusion. This can be worked on through careful reasoning.
   - **Axiomatic:** about a basic starting value or premise. This can be isolated and stated precisely, even if it cannot be proven.
4. **Records progress:** what has been resolved, what remains, and the next concrete research step.
5. **Proposes a candidate floor**, if there is one that might one day move the question into the Code.

The aim is to narrow each disagreement, never to declare a winner between traditions.

**How a tradition's later authorities are used.** When an article is tested, a tradition's later authorities never outweigh a counted text that contradicts the article: they are shown as the tradition's own reconciliation, but the label stands. In the Register, they matter more. A Logical part can be marked resolved for a tradition (or for one of its branches) when an authority that the tradition or branch itself treats as binding has reasoned from the tradition's own principles to the conclusion in question. Whether a principle resolved in this way may then enter the Code would be a change to the settled rule that texts are the test of agreement, and only the project lead can make that change. It has not been made. (Decided 2026-10-13; see section 9.)

---

## 6. The hypothesis being tested

The project tests a working hypothesis: that every disagreement between the traditions on conduct can be narrowed, through study of the texts, evidence and logic, until nothing irreducible is left.

This may be false. If it is, the exact list of questions that cannot be narrowed further is itself a valuable result. The running tally is kept in [`HYPOTHESIS.md`](HYPOTHESIS.md). Findings are never bent to make the hypothesis look true.

---

## 7. How the Code is written

- Short sentences and common words, readable by anyone aged around 12 and up.
- No terms that belong to a single tradition in the text of an article. Such terms appear only in the evidence tables, with a short explanation.
- Neutral words. We avoid words that carry one tradition's framing, such as "sin", "karma" or "commandment".
- UK English spelling and punctuation.

---

## 8. How to challenge the work

The Code belongs to no one and is open to challenge by anyone with evidence and good reason. If you think a citation is wrong, a translation is unfair, a passage has been missed, a rating is too generous or too harsh, or an article asks more than a tradition really asks, please raise it with the reference and your reasoning. Every change is recorded in [`CHANGELOG.md`](CHANGELOG.md).

---

## 9. Decisions on method made so far

On 13 October 2026, while the first article was being tested, the project lead decided some questions and left the rest to the project's judgement. The decisions below were made on that basis. Each gives its reason, and the project lead may revisit any of them. None changes the settled decisions in the project brief (its Section 2), and none was made to rescue or sink an article: where a decision could have changed a tradition's result in the first article, this says so.

1. **The tier and branch rules stay as written** (decision D1 on Article I). A Tier 2 text that only one major branch treats as primary does not show what the whole tradition teaches, unless a text the other branch accepts teaches the same thing. Reasons are in [`sources/corpus.md`](sources/corpus.md).
2. **A wider duty counts** (decision D3). A text teaching "harm no one" teaches any narrower duty not to harm that it includes, provided it reaches everyone the narrower duty reaches (section 3).
3. **What a branch is.** A branch is a living part of a tradition that has its own accepted body of texts and is treated as one of the tradition's main divisions in standard reference works, whatever its size. Karaite Judaism is a branch. Historical schools with no separate living community today (for example Han to Tang classical learning in Confucianism) are not branches; their texts may be shown as context. *Effect on Article I: none; Karaite readings of the relevant verses are to be checked.*
4. **What "treated as primary" means.** A Tier 2 text is treated as primary only where the tradition itself places it with its primary scripture, not below it. So the writings of ʿAbdu'l-Bahá are treated as primary (Bahá'ís hold them to be part of their sacred text). The Mahabharata is not, despite its very high standing, because Hindu tradition's own rule ranks it, as remembered tradition (*smṛti*), below revealed scripture (*śruti*). The Five Classics stay in Tier 2 for Confucianism. Nor are the Pahlavi books, even for the traditionalist branch of Zoroastrianism, which holds them as the authoritative interpretation of scripture but not as revelation. *Effect on Article I: none on the verdict. As first recorded, this decision said it matched how texts were already counted; the independent check of Register entry Q-002 found that this was not so for the Pahlavi books, which `sources/corpus.md` had counted as primary-level for traditionalists. Applying the decision to them leaves Article I's result for Zoroastrianism unchanged (not met), and changes one result in the households annex (Zoroastrianism, owning people: now silent in counted texts).*
5. **Hadith outside Bukhārī and Muslim.** A hadith from the other Sunni collections counts as part of the Sunnah, and so as treated as primary for Sunni Islam, when it is graded sound (*ṣaḥīḥ*) or good (*ḥasan*, including *ḥasan ṣaḥīḥ*) by a recognised hadith scholar and the grading is recorded. Sunni legal theory accepts such hadith as evidence. The branch rule applies: a Sunni-graded hadith speaks for Shia Islam only if a Shia source or the Qur'an teaches the same. *Effect on Article I: none; Qur'an 4:34 already decided the result to which Abū Dāwūd 495 is relevant.*
6. **Verification.** "VERIFIED (search)" is accepted for drafts, research and the Register, but an article can be admitted only when every counted citation in its evidence table has been read directly (section 3). Reason: the project's trustworthiness rests on its citations, and a search result is a weaker check than reading the page.
7. **Later authorities** count as the tradition's own reconciliation when an article is tested, and as evidence for Logical parts in the Register, but never outweigh a contradicting counted text (section 5).
8. **Narrowing by an authorised interpreter.** A verified ruling of a body that `sources/corpus.md` lists as authorised to interpret a tradition's texts (so far, only the Universal House of Justice for the Bahá'í Faith) may make a result *unclear* when it narrows what a counted text teaches. It never makes a result *contradicted* or *taught* on its own.
9. **"By plain reference."** A general clause reaches a practice by plain reference when the practice, by definition, denies what the clause guarantees, and the tradition's counted texts nowhere accept the practice. A clause guaranteeing every person's legal freedom and autonomy therefore reaches slavery (secular humanism). A clause on the common origin of all people does not (it is Implied evidence only).
10. **Households and slavery** (decision D2). The article's floor covers households, and its wording there is the lowest of the three tested: *no cruelty* (do not injure, torment, starve, overwork or humiliate anyone in your power), with "injure" meaning harm beyond moderate physical correction. Owning people, physical punishment of those in one's care, and sexual relations without consent with someone in one's power go to the Register as an open question ([Q-002](register/q-002-households-and-slavery.md)). Reason: an article states the minimum every tradition asks (the brief's settled decision 4, and step 2 of the method); the other two wordings ask more, and most traditions' counted texts either contradict them or are silent.
11. **The five changes to the source texts** made before any article was tested (marked in bold in [`sources/corpus.md`](sources/corpus.md)) are approved, for the reasons recorded there.
12. **Direct reading through published datasets** (decided 2026-10-14, while testing the second article). The reference sites themselves cannot be opened from the working environment, but several publish their texts as open data that can be read there: Sefaria (its public export), SuttaCentral (bilara-data), CBETA (the Taishō canon in XML), the Kanseki Repository (Chinese classics), Perseus and The Latin Library (Greek and Latin), and Shabad OS (the Guru Granth Sahib); and named open datasets of public-domain or authorised translations (the King James and Douay-Rheims Bibles; the Qur'an in Arabic, Pickthall and Sahih International; the hadith collections of Sunnah.com with their grades; the authorised English of the Bahá'í writings; the Bhagavad Gita with its classical commentaries). Reading a passage in full in these files counts as **VERIFIED (direct)**, recorded with the dataset's name and the file read; the row's link still points to the reference site's page for the passage. *Reason:* the file is the reference site's own text, or the same public-domain or authorised translation, read in full, which is what direct reading requires; only the means of delivery differs. Where the dataset is a third party's copy rather than the reference site's own, the row says so, and any discrepancy found later reopens the row.
