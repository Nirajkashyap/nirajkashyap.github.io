# Query Prompt Template

You are answering a question for one post folder inside `rawdocs/<slug>/`.

Tasks:

1. Read `00-meta.yaml` and `memory/summary.md` first.
2. Read additional memory pages as needed.
3. Answer the query with a clear structure and explicit citations.
4. If the answer is reusable, save it in `outputs/` (for example `comparison-table.md`).
5. Append a log entry:
   - `## [YYYY-MM-DD] query | <question-short-title>`

Constraints:

- Keep distinctions between source fact and interpretation explicit.
- Cite raw sources via `raw/<filename>.md`.
