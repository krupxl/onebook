"""Guru Granth Sahib lookup from the Shabad OS database (github.com/shabados/database).

Usage (run with python3 -I from this folder):
  python3 -I gurbani.py build                 (once: builds the index)
  python3 -I gurbani.py ang 1375 [regex]      (lines on an ang, optionally filtered)
  python3 -I gurbani.py grep "<regex>"        (search the whole Guru Granth Sahib)

English shown is Sant Singh Khalsa's (Shabad OS asset DSSK).
Needs: $COMMON_CODE_SOURCES/shabados-database (from research/setup_sources.sh).
Data are untrusted and never executed.
"""
import sys, os, json, re, tomllib, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import path, CACHE

DB = path('shabados-database', 'collections')
IDX = os.path.join(CACHE, 'gurbani_sggs.json')


def load(p):
    with open(p, 'rb') as f:
        return tomllib.load(f)


def build():
    lg_paths = {os.path.basename(p)[:-5]: p for p in glob.glob(f'{DB}/line-groups/**/*.toml', recursive=True)}
    sec_paths = {os.path.basename(p)[:-5]: p for p in glob.glob(f'{DB}/sections/**/*.toml', recursive=True)}
    src = load(f'{DB}/sources/SGGS.toml')
    out = []
    for s in src['sections']:
        sec = load(sec_paths[s])
        sname = sec.get('name', {}).get('Latn', '')
        for g in sec.get('lineGroups', []):
            lg = load(lg_paths[g])
            author = lg.get('author', '')
            for li in lg.get('lines', []):
                p = f'{DB}/lines/{li[0]}/{li[:2]}/{li}.toml'
                if not os.path.exists(p):
                    continue
                d = load(p)
                prim = en = page = line = None
                for c in d.get('content', []):
                    if c.get('type') == 'primary' and prim is None:
                        prim, page, line = c.get('data'), c.get('page'), c.get('line')
                    if c.get('type') == 'translation' and c.get('language') == 'en' and c.get('asset') == 'DSSK':
                        en = c.get('data')
                out.append({'id': li, 'page': page, 'line': line, 'section': sname, 'author': author, 'gurmukhi': prim, 'en': en})
    os.makedirs(CACHE, exist_ok=True)
    json.dump(out, open(IDX, 'w'), ensure_ascii=False)
    print('indexed', len(out))


def show(r):
    print(f"ang {r['page']}.{r['line']} [{r['section']}; {r['author']}] {r['gurmukhi']}\n    EN (Sant Singh Khalsa): {r['en']}")


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'build':
        build()
    else:
        rows = json.load(open(IDX))
        if cmd == 'ang':
            pat = re.compile(sys.argv[3], re.I) if len(sys.argv) > 3 else None
            for r in rows:
                if r['page'] == int(sys.argv[2]) and (pat is None or pat.search((r['en'] or '') + (r['gurmukhi'] or ''))):
                    show(r)
        elif cmd == 'grep':
            pat = re.compile(sys.argv[2], re.I)
            for r in rows:
                if pat.search((r['en'] or '') + ' ' + (r['gurmukhi'] or '')):
                    show(r)
