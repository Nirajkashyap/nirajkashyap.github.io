# Project Guidelines

## Workflow Boundaries

- Use `rawdocs/` as the research workspace for per-post LLM Wiki work.
- Treat `rawdocs/<slug>/raw/` as immutable source of truth.
- Treat `rawdocs/<slug>/memory/` and `rawdocs/<slug>/outputs/` as derived artifacts that must stay auditable.
- Publish final human-edited posts to `content/posts/`.
- Treat `docs/` as generated Hugo output unless the task is explicitly about generated artifacts.

## Required Conventions

- Follow the operating rules in `rawdocs/SCHEMA.md` for any work inside `rawdocs/`.
- Preserve append-only behavior in each post `log.md`.
- Keep major claims traceable through `memory/citations.md`.
- Prefer updating the existing per-post structure over inventing one-off files or workflows.

## Repo Notes

- This repository is a Hugo blog with `publishDir` set to `docs`.
- Repo-specific Copilot customizations belong under `.github/`, not under the `themes/PaperMod` submodule.