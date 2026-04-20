---
name: rawdocs-post-workflow
description: 'Maintain a per-blog rawdocs llm-wiki workflow. Use for blog post research, per-post ingest, memory page updates, citations, query synthesis, lint passes, and Hugo draft preparation.'
argument-hint: 'Provide the post slug and the operation, such as ingest, query, lint, or bootstrap.'
user-invocable: true
---

# Rawdocs Post Workflow

Use this skill when working on one blog post folder under `rawdocs/<slug>/`.

## When To Use

- Ingest new source material into a post workspace.
- Update memory pages and citations for one post slug.
- Generate reusable outputs from research.
- Run a health check over a post's research state.
- Prepare a Hugo draft from the per-post wiki.

## Procedure

1. Read `rawdocs/SCHEMA.md` and the target `rawdocs/<slug>/00-meta.yaml`.
2. Choose the operation: ingest, query, lint, or bootstrap.
3. Follow the matching checklist asset:
   - [Ingest checklist](./assets/ingest-checklist.md)
   - [Query checklist](./assets/query-checklist.md)
   - [Lint checklist](./assets/lint-checklist.md)
   - [Bootstrap checklist](./assets/bootstrap-checklist.md)
4. Preserve citations and append-only log entries.
5. Keep `raw/` immutable and treat `content/posts/` as the publish target.

## Required Files Per Slug

- `00-meta.yaml`
- `log.md`
- `memory/summary.md`
- `memory/entities.md`
- `memory/concepts.md`
- `memory/contradictions.md`
- `memory/open-questions.md`
- `memory/citations.md`

## Success Criteria

- Raw sources remain unchanged.
- Updated claims are traceable in `memory/citations.md`.
- Log entries use the `## [YYYY-MM-DD] operation | short-title` format.
- Outputs are reusable and consistent with the target post metadata.