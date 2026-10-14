# Article II research: "Do not kill the innocent" (candidate C02)

This folder holds the raw research for Article II, gathered on 2026-10-14. It covers method steps 2 to 4 (floor, evidence, counter-evidence) for all thirteen traditions, plus a first round of direct verification and an adversarial check of each tradition's labels. The verdict (step 5), the article draft, the Register entry and the independent check of the drafts (steps 6 and 7) have **not** been done. `HANDOVER.md` at the repository root says what to do next.

These are working records, not findings. Labels in them are proposals by research agents, made under the rules in `brief.md`. They must be reconciled across traditions before any of them goes into an article or Register entry.

## Files

| File | What it is |
|---|---|
| `brief.md` | The research brief every agent was given: the floor under test (K1), the lower floor (K0), the war record wording (K3), the nine labelling rules, and the standards. **Read this first.** |
| `traditions.json` | For each tradition: the leads given to the researchers (support and counter-evidence, from memory, to be checked) and the line ranges of its sections in `sources/corpus.md` and `sources/translations.md`. |
| `sources_guide.md` | Where each tradition's texts are in the local datasets, and how to record a direct reading. |
| `round1/XX.json` | Round 1, one file per tradition (two-letter prefix, below). Keys: `support` (the support researcher's raw output), `counter` (the counter-evidence researcher's raw output), `verified` (a third agent's verification of both, with merged rows, labels for K1, K0 and K3, and reasons). Most rows here were verified by web search, or not at all, because a shared search cap ran out. |
| `round2/XX.json` | Round 2, one file per tradition. Keys: `direct` (a verifier who read the deciding passages in the local datasets: full updated rows, corrections, labels, and a count of what is now directly verified) and `challenge` (an independent challenger who had not seen the research, arguing each label is wrong in either direction, with objections, its own final labels and consistency notes). |
| `workflows/` | The two workflow scripts that ran the agents, and the per-tradition arguments for round 2 (priority passages and search budgets). Paths inside them point to the cloud session's scratch folder and will not work as they are; they are kept as a record of exactly what the agents were asked. |

Prefixes, in the fixed order: HI Hinduism, JU Judaism, ZO Zoroastrianism, BU Buddhism, JA Jainism, CO Confucianism, TA Taoism, ST Stoicism, CH Christianity, IS Islam, SI Sikhism, BA Bahá'í Faith, HU Secular humanism.

To read a record:

```bash
python3 -I research/tools/show_research.py research/article-02/round2/JU.json | less
```

## Row format

Each evidence row has: `topic`, `tier`, `branch`, `reference`, `original` (a short phrase in the original language), `translation`, `says` (paraphrase), `bearing` (support, counter, limit, reconciliation, context), `strength` (Explicit, Clear teaching, Implied), `verification` (`VERIFIED (direct, <dataset>): ...`, `VERIFIED (search): ...` or `UNVERIFIED: <why>`), `link`, and in round 2 `check` (what the verifier did to that row).

## Known limits of this research

- **Search verification only, for texts with no dataset.** The Upanishads and Vedas, the Avesta and Pahlavi books, the Jain sūtras, the humanist declarations, some Bahá'í works ('Abdu'l-Bahá, Some Answered Questions) and most Tier 2 commentaries could not be read directly in the cloud session. On a normal connection they can be.
- **Uneven searching in round 1.** A shared cap of 200 web searches per turn ran out, so some traditions' round 1 researchers searched very little (Judaism none; Islam, Stoicism and Confucianism almost none). Round 2's direct reading repaired most of this for the traditions with datasets, but not for the others.
- **Round 2 was interrupted** once by a usage limit and resumed from cache. A first, partial round 2 for Jainism, the Bahá'í Faith and Taoism (direct verification without the challenge) was superseded by the resumed run.
- **Agents' labels disagree in places.** Where the direct verifier and the challenger differ, neither is final. Reconciling them, by the rules in `brief.md` applied the same way to every tradition, is the next step.
- **Branch gaps.** Some branches were not checked (for example Karaite readings of Numbers 35, Shia hadith, reformist Zoroastrian statements). Each record says which.
