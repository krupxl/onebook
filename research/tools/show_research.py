"""Print a readable view of one tradition's research file for Article II.

Usage: python3 -I show_research.py ../article-02/round1/JU.json      (research and first verification)
       python3 -I show_research.py ../article-02/round2/JU.json      (direct verification and label challenge)
"""
import json, sys

def rows_view(rows):
    for i, row in enumerate(rows, 1):
        print(f"  [{i}] {row.get('topic')} | Tier {row.get('tier')} | {row.get('branch')} | {row.get('reference')}")
        print(f"      SAYS: {row.get('says')}")
        print(f"      BEARING: {row.get('bearing')} | STRENGTH: {row.get('strength')}")
        print(f"      VERIFIED: {row.get('verification')} | {row.get('link')} | CHECK: {row.get('check', '')}")

d = json.load(open(sys.argv[1]))
if 'verified' in d:          # round 1
    v = d['verified']
    print('#####', v['tradition'], '(round 1: research, counter-evidence, first verification)')
    for k in ('K1', 'K0', 'K3'):
        print(f"{k}: {v['labels'][k]['label']}\n    {v['labels'][k]['reason']}")
    print('BRANCHES:', v['branch_notes']); print('FAIRNESS:', v['fairness_notes'])
    print('RECONCILIATION:', v['reconciliation']); print('GAPS:', v['gaps'])
    rows_view(v['rows'])
elif 'direct' in d:          # round 2
    dv = d['direct']
    print('#####', dv['tradition'], '(round 2: direct verification)')
    for k in ('K1', 'K0', 'K3'):
        print(f"{k}: {dv['labels'][k]['label']}\n    {dv['labels'][k]['reason']}")
    print('DIRECT COUNT:', dv['direct_count'])
    print('CORRECTIONS:'); [print('  -', c) for c in dv['corrections']]
    ch = d.get('challenge')
    if ch:
        print('CHALLENGE, final labels:')
        for k in ('K1', 'K0', 'K3'):
            print(f"  {k}: {ch['final_labels'][k]['label']}\n      {ch['final_labels'][k]['reason']}")
        for o in ch['objections']:
            print(f"  - [{o['label']}, {o['severity']}] {o['objection']} -> {o['proposed']}")
        print('CONSISTENCY:', ch['consistency_notes'])
    else:
        print('CHALLENGE: not run (see research/article-02/README.md)')
    rows_view(dv['rows'])
