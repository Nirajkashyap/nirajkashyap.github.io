# Ingest Prompt Template

You are maintaining one post folder inside `rawdocs/<slug>/`.

Tasks:

1. Read `00-meta.yaml`.
2. Read all source files in `raw/`.
3. Update these files in `memory/`:
   - `summary.md`
   - `entities.md`
   - `concepts.md`
   - `contradictions.md`
   - `citations.md`
4. Add an append-only entry to `log.md` using:
   - `## [YYYY-MM-DD] ingest | <source-name>`
5. Keep source references explicit using relative paths in citations.

Constraints:

- Do not edit or delete source files in `raw/`.
- Do not remove prior claims without a supersession note.
- Keep output concise and auditable.
