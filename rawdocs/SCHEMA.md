# Rawdocs Schema

Use this schema as operating rules for any LLM agent working in `rawdocs/`.

## Core rules

- Treat `rawdocs/<slug>/raw/` as immutable source of truth.
- Never delete or overwrite source facts in memory without noting why in `log.md`.
- Keep all major claims traceable in `memory/citations.md`.
- Prefer additive edits and explicit supersession notes.

## Required files per post folder

- `00-meta.yaml`
- `log.md`
- `memory/summary.md`
- `memory/entities.md`
- `memory/concepts.md`
- `memory/contradictions.md`
- `memory/open-questions.md`
- `memory/citations.md`

## Operation contract

### Ingest

- Read newly added `raw/*` files.
- Update memory files for summary, entities, concepts, and contradictions.
- Append a log entry with timestamp and changed files.

### Query

- Read `00-meta.yaml`, `memory/summary.md`, and relevant memory pages first.
- Produce answer with citations to raw source files.
- If answer is reusable, save to `outputs/` and log it.

### Lint

Check for:

- Contradictions not reflected in `memory/contradictions.md`.
- Claims in summary with missing citations.
- Orphan concepts or entities not cross-linked.
- Stale conclusions after new source ingestion.

## Log format

Use heading format:

`## [YYYY-MM-DD] <operation> | <short-title>`

Operations: `ingest`, `query`, `lint`, `publish`.
