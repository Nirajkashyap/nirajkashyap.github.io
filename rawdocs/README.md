# rawdocs

This directory stores per-post research and LLM-maintained working notes.

## Folder model

One folder per post slug:

- `rawdocs/<slug>/raw/`: Immutable source material (articles, notes, transcripts).
- `rawdocs/<slug>/memory/`: LLM-maintained synthesis pages.
- `rawdocs/<slug>/outputs/`: Drafts and structured output candidates.
- `rawdocs/<slug>/00-meta.yaml`: Post metadata and workflow settings.
- `rawdocs/<slug>/log.md`: Append-only timeline of ingest/query/lint actions.

## Workflow

1. Add or update source files in `raw/`.
2. Run the ingest prompt from `_prompts/ingest.md`.
3. Ask questions using `_prompts/query.md`; save useful answers in `outputs/`.
4. Run periodic health checks with `_prompts/lint.md`.
5. Publish human-edited final content to Hugo `content/posts/`.

Raw sources are the source of truth. Memory/output files are derived artifacts.
