---
name: "Rawdocs Query"
description: "Answer a research question against one rawdocs blog post folder using the Blog LLM Wiki agent."
argument-hint: "Provide the post slug and the question to answer."
agent: "Blog LLM Wiki"
---
Answer a research question for one post folder in `rawdocs/<slug>/`.

Requirements:
- Read the post metadata and relevant memory pages first.
- Distinguish source facts from interpretation.
- Cite raw source files.
- Save reusable results into `outputs/` when appropriate.
- Append a query entry to the post `log.md`.