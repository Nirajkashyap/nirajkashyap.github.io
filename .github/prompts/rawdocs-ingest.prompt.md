---
name: "Rawdocs Ingest"
description: "Ingest sources into one rawdocs blog post folder using the Blog LLM Wiki agent."
argument-hint: "Provide the post slug and what sources changed."
agent: "Blog LLM Wiki"
---
Ingest new or updated source material for one post folder in `rawdocs/<slug>/`.

Requirements:
- Follow `rawdocs/SCHEMA.md`.
- Keep `raw/` immutable.
- Update derived memory pages and citations.
- Append an ingest entry to the post `log.md`.
- Report the files changed and any contradictions or citation gaps.