# Lint Prompt Template

You are performing a health check for one post folder inside `rawdocs/<slug>/`.

Checks:

1. Contradictions: identify unresolved conflicts across memory files.
2. Citation gaps: identify claims without source references.
3. Coverage gaps: entities/concepts mentioned but not documented.
4. Freshness: stale conclusions after latest ingests.
5. Link quality: pages that are isolated and should be cross-linked.

Output format:

- Findings by severity: high, medium, low.
- Suggested file edits.
- Suggested next source acquisitions.

Log update:

- Append `## [YYYY-MM-DD] lint | health-check` in `log.md`.
