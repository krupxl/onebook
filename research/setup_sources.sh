#!/usr/bin/env bash
# Fetch the open datasets used to read the traditions' texts directly.
#
# Usage:  bash research/setup_sources.sh            (into ~/common-code-sources)
#         COMMON_CODE_SOURCES=/some/folder bash research/setup_sources.sh
#
# Needs: git (2.27 or later, for sparse partial clones), curl, python3, and npm
# (only for the Baha'i writings). About 450 MB of disk, most of it the Gita data.
#
# Everything fetched is treated as untrusted data. This script only downloads
# and unpacks files: it never runs anything it downloads (npm is called with
# --ignore-scripts, and nothing inside a clone is executed). The research tools
# read these files with `python3 -I` and never execute them.
#
# Safe to run again: existing clones are left alone (delete a folder to refetch).

set -euo pipefail

SRC="${COMMON_CODE_SOURCES:-$HOME/common-code-sources}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p "$SRC/.cache"
echo "Sources folder: $SRC"

# clone NAME URL BRANCH [sparse paths...]
# Shallow, blob-less clone; with paths, a sparse checkout of just those paths.
clone() {
  local name="$1" url="$2" branch="$3"; shift 3
  local dir="$SRC/$name"
  if [ -d "$dir/.git" ]; then echo "  have $name"; return; fi
  echo "  cloning $name"
  if [ "$#" -gt 0 ]; then
    git clone -q --depth 1 --filter=blob:none --no-checkout --branch "$branch" "$url" "$dir"
    git -C "$dir" sparse-checkout set --no-cone "$@"
    git -C "$dir" checkout -q "$branch"
  else
    git clone -q --depth 1 --filter=blob:none --branch "$branch" "$url" "$dir"
  fi
}

echo "Judaism and Christianity (Old Testament): Sefaria's export index"
# Only books.json is checked out; texts are fetched on demand by tools/sefaria.py
# from storage.googleapis.com/sefaria-export and cached in $SRC/.cache/sefaria.
clone sefaria-export https://github.com/Sefaria/Sefaria-Export master /books.json

echo "Christianity: KJV, KJV with Apocrypha, Douay-Rheims"
clone bible_databases https://github.com/scrollmapper/bible_databases master \
  /formats/json/KJV.json /formats/json/KJVA.json /formats/json/DRC.json

echo "Islam: Qur'an (Arabic, Pickthall, Sahih International) and hadith with grades"
clone quran-api https://github.com/fawazahmed0/quran-api 1 \
  /editions/ara-quransimple.json /editions/eng-mohammedmarmadu.json \
  /editions/eng-ummmuhammad.json /info.json
clone hadith-api https://github.com/fawazahmed0/hadith-api 1 \
  /editions/eng-bukhari.json /editions/eng-muslim.json /editions/eng-abudawud.json \
  /editions/ara-bukhari.json /editions/ara-muslim.json /editions/ara-abudawud.json \
  /info.json /editions.json

echo "Buddhism: Pali Canon with Sujato and Brahmali (SuttaCentral's own data)"
clone bilara-data https://github.com/suttacentral/bilara-data published \
  /root/pli/ms/sutta/ /root/pli/ms/vinaya/ \
  /translation/en/sujato/sutta/ /translation/en/brahmali/vinaya/

echo "Buddhism: Chinese canon (CBETA Taisho XML), only the texts used so far"
mkdir -p "$SRC/cbeta"
for t in T02n0099 T04n0210 T09n0272 T11n0345 T12n0345 T12n0346 T12n0374 T12n0375 \
         T22n1428 T23n1442 T24n1484 T29n1558 T30n1579 T30n1581 T32n1656 \
         T37n1764 T38n1767 T40n1811 T40n1813; do
  vol="${t%%n*}"   # T12n0374 -> T12
  f="$SRC/cbeta/$t.xml"
  [ -s "$f" ] && continue
  echo "  $t"
  curl -fsS -m 300 -o "$f" "https://raw.githubusercontent.com/cbeta-org/xml-p5/master/T/$vol/$t.xml" \
    || echo "  WARNING: could not fetch $t (check the path in cbeta-org/xml-p5)"
done

echo "Confucianism and Taoism: Kanripo (Analects, Mencius, Laozi, Zhuangzi)"
clone kanripo-KR1h0004 https://github.com/kanripo/KR1h0004 master
clone kanripo-KR1h0001 https://github.com/kanripo/KR1h0001 master
clone kanripo-KR5c0057 https://github.com/kanripo/KR5c0057 master
clone kanripo-KR5c0126 https://github.com/kanripo/KR5c0126 master

echo "Stoicism: Seneca (Latin Library via CLTK; Perseus), Epictetus and Marcus Aurelius (Perseus)"
clone lat_text_latin_library https://github.com/cltk/lat_text_latin_library master /sen/
clone canonical-latinLit https://github.com/PerseusDL/canonical-latinLit master \
  /data/phi1017/phi013/ /data/phi1017/phi014/ /data/phi1017/phi015/
clone canonical-greekLit https://github.com/PerseusDL/canonical-greekLit master \
  /data/tlg0557/ /data/tlg0562/

echo "Sikhism: Shabad OS database (Guru Granth Sahib with Sant Singh Khalsa's English)"
clone shabados-database https://github.com/shabados/database main \
  /collections/lines/ /collections/sources/ /collections/assets/ \
  /collections/authors/ /collections/sections/ /collections/line-groups/

echo "Hinduism: Bhagavad Gita with translations and commentaries (bhagavadgita.io data)"
clone gita https://github.com/gita/gita main /data/

echo "Baha'i Faith: bahaiwritings 0.44.2 (JSON copy of the authorised English)"
if [ ! -d "$SRC/bahaiwritings/package" ]; then
  if command -v npm >/dev/null 2>&1; then
    mkdir -p "$SRC/bahaiwritings"
    ( cd "$SRC/bahaiwritings" && npm pack bahaiwritings@0.44.2 --ignore-scripts --silent >/dev/null \
      && tar -xzf bahaiwritings-0.44.2.tgz --no-same-owner )
  else
    echo "  WARNING: npm not found; skipping the Baha'i writings"
  fi
else
  echo "  have bahaiwritings"
fi

echo "Building the Guru Granth Sahib index (reads the Shabad OS files; takes a minute)"
python3 -I "$HERE/tools/gurbani.py" build

echo
echo "Done. Sources are in $SRC"
echo "Next: read research/README.md, then research/article-02/sources_guide.md"
