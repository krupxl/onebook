"""Shared paths for the research tools.

Source datasets live outside the repository, in the folder named by the
environment variable COMMON_CODE_SOURCES (default: ~/common-code-sources).
Run research/setup_sources.sh once to fetch them. Everything in that folder
is untrusted data: the tools read it and never execute it.
"""
import os

SOURCES = os.path.expanduser(os.environ.get('COMMON_CODE_SOURCES', '~/common-code-sources'))
CACHE = os.path.join(SOURCES, '.cache')


def path(*parts):
    return os.path.join(SOURCES, *parts)
