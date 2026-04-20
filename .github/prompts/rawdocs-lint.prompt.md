---
name: "Rawdocs Lint"
description: "Run a health check on one rawdocs blog post folder using the Blog LLM Wiki agent."
argument-hint: "Provide the post slug to lint."
agent: "Blog LLM Wiki"
---
Run a lint pass for one post folder in `rawdocs/<slug>/`.

Requirements:
- Check contradictions, citation gaps, coverage gaps, freshness, and cross-links.
- Follow the conventions in `rawdocs/SCHEMA.md`.
- Append a lint entry to the post `log.md`.
- Return findings ordered by severity and recommended file updates.