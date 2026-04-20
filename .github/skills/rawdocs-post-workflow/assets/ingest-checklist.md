# Ingest Checklist

1. Read `rawdocs/SCHEMA.md`.
2. Read `rawdocs/<slug>/00-meta.yaml`.
3. Read all new or relevant files in `rawdocs/<slug>/raw/`.
4. Update these derived files as needed:
   - `memory/summary.md`
   - `memory/entities.md`
   - `memory/concepts.md`
   - `memory/contradictions.md`
   - `memory/citations.md`
5. Append a log entry using `## [YYYY-MM-DD] ingest | <source-name>`.
6. Keep source references explicit via `raw/<filename>.md`.

Do not modify files in `raw/`.