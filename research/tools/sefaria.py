"""Look up and fetch texts from Sefaria's public export (storage.googleapis.com/sefaria-export).

Usage (run with python3 -I from this folder):
  python3 -I sefaria.py find "<title substring>" [English|Hebrew]
  python3 -I sefaria.py get "<exact title>" <English|Hebrew> "<version substring>" <ref>

Refs: Tanakh 20:13 (whole chapter: 20); Mishnah 4:5; Talmud daf and segment 31a:5 (whole daf: 31a).
Useful versions: Tanakh English "JPS 1917"; Talmud English "William Davidson".
Needs: $COMMON_CODE_SOURCES/sefaria-export/books.json (from research/setup_sources.sh).
Fetched texts are cached under $COMMON_CODE_SOURCES/.cache/sefaria and never executed.
"""
import json, sys, os, re, urllib.parse, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import path, CACHE

BOOKS = path('sefaria-export', 'books.json')
SCACHE = os.path.join(CACHE, 'sefaria')


def books():
    return json.load(open(BOOKS))['books']


def find(sub, lang=None):
    for b in books():
        if sub.lower() in b['title'].lower() and (lang is None or b['language'].lower() == lang.lower()):
            print(b['title'], '|', b['language'], '|', b['versionTitle'], '|', b['categories'])


def fetch(url):
    os.makedirs(SCACHE, exist_ok=True)
    fn = os.path.join(SCACHE, re.sub(r'[^A-Za-z0-9._-]', '_', urllib.parse.unquote(url.split('/sefaria-export/')[1]))[-180:])
    if not os.path.exists(fn):
        subprocess.run(['curl', '-sS', '-m', '90', '-o', fn, url], check=True)
    return fn, json.load(open(fn))


def clean(s):
    s = re.sub(r'<i class="footnote">.*?</i>', '', s)
    s = re.sub(r'<sup[^>]*>.*?</sup>', '', s)
    return re.sub(r'<[^>]+>', '', s)


def get(title, lang, ver, ref):
    cands = [b for b in books() if b['title'] == title and b['language'].lower() == lang.lower() and ver.lower() in b['versionTitle'].lower()]
    if not cands:
        print('NO MATCH')
        return
    b = cands[0]
    fn, d = fetch(b['json_url'])
    print('VERSION:', b['versionTitle'])
    print('URL:', b['json_url'])
    node = d['text']
    for p in ref.split(':'):
        if isinstance(node, dict):
            node = node.get(p, node.get(p.capitalize(), ''))
            continue
        m = re.match(r'^(\d+)([ab])?$', p)
        if m and m.group(2):
            idx = (int(m.group(1)) - 1) * 2 + (0 if m.group(2) == 'a' else 1)
        else:
            idx = int(p) - 1
        node = node[idx] if idx < len(node) else ''
    if isinstance(node, list):
        for i, x in enumerate(node, 1):
            print(f'[{i}]', clean(x) if isinstance(x, str) else json.dumps(x)[:500])
    else:
        print(clean(node) if isinstance(node, str) else json.dumps(node)[:2000])


if __name__ == '__main__':
    if sys.argv[1] == 'find':
        find(sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else None)
    else:
        get(*sys.argv[2:6])
