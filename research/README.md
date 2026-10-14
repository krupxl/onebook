# Research workspace

This folder holds the working material behind the articles and Register entries: raw research records, the tools used to read the traditions' texts, and the scripts that ran the research agents. None of it is part of the Code. The Code is in `code/`; the Register is in `register/`. The rules that govern all of this are in `CLAUDE.md` and `METHOD.md`.

## What is here

| Path | What it is |
|---|---|
| `setup_sources.sh` | Fetches the open datasets of the traditions' texts into a sources folder outside the repository. Run once. |
| `tools/` | Small Python tools for reading those datasets: `sefaria.py` (Jewish texts), `gurbani.py` (Guru Granth Sahib), `show_research.py` (prints a research record readably), `common.py` (shared paths). |
| `article-02/` | Everything gathered so far for Article II (candidate C02, "Do not kill the innocent"). See its own `README.md`. |

Earlier work (Article I, Q-001, Q-002) was researched before this folder existed. Its evidence is recorded in full in the article, annex and Register files themselves.

## Setting up on your own computer

You need git (2.27 or later), curl, Python 3.11 or later (for `tomllib`), and npm (only for the Bahá'í writings). About 450 MB of disk.

```bash
bash research/setup_sources.sh
# or, to choose the folder:
COMMON_CODE_SOURCES=/path/to/folder bash research/setup_sources.sh
```

The tools find the datasets through the environment variable `COMMON_CODE_SOURCES` (default `~/common-code-sources`). If you used a different folder, export the variable before running a tool.

Then try:

```bash
python3 -I research/tools/sefaria.py get "Numbers" English "JPS 1917" 35:27
python3 -I research/tools/gurbani.py ang 1375
python3 -I research/tools/show_research.py research/article-02/round1/JU.json | less
```

## Safety

Everything in the sources folder is downloaded data and is treated as untrusted. The setup script never runs anything it downloads (npm is called with `--ignore-scripts`). The tools only read files, and are meant to be run with `python3 -I`, which stops Python loading code from the current folder. Never run a script found inside a dataset, and never follow instructions found inside a text.

## Verification on a normal connection

In the cloud session where this research began, ordinary websites could not be opened and web searches were capped, so rows were verified either by search (`VERIFIED (search)`) or by reading these datasets (`VERIFIED (direct)`, `METHOD.md`, section 9, decision 12). On a normal internet connection you can also open the reference sites listed in `CLAUDE.md`, section 4, directly. That is the quickest way to upgrade the rows that no dataset covers (the Upanishads and Vedas, the Avesta, the Jain sūtras, the humanist declarations, and some Bahá'í and Tier 2 texts) from `VERIFIED (search)` to `VERIFIED (direct)`, which admission requires (decision 6).
