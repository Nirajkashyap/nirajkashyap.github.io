# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio and blog site for Niraj Kashyap, built with [Hugo](https://gohugo.io/) using the `hugo-book` theme (git submodule). The compiled site publishes to `docs/`, served by GitHub Pages from the `master` branch.

## Common Commands

```sh
# Start local dev server (includes draft posts)
hugo server -D

# Build for production (outputs to docs/)
hugo build

# Create a new blog post
hugo new posts/my-post-title.md

# Create a new docs page
hugo new docs/section-name/page-title.md

# Run with the hugobook theme reference config (docs-oriented layout)
hugo server -D --config themeRef/hugobook.theme.hugo.yaml
```

**Deployment:** No active CI/CD — the workflow in `.github/workflows/deployworkflow.yml` is entirely commented out. After `hugo build`, commit the updated `docs/` directory and push to `master`. GitHub Pages serves from `docs/`.

## Architecture

### Config

- `hugo.yaml` — active site config. `BookSection: posts` shows the posts section in the left sidebar. Key params: `gtmID` for GTM, `BookSearch`, `BookToC`.
- `themeRef/` — reference configs not used in production builds: `hugobook.theme.hugo.yaml` switches the sidebar to docs; `papermod.theme.hugo.yaml` is an alternate theme config.
- `HugoHelp.md` — local Hugo reference notes.

### Content

- `content/_index.md` — landing page. Uses `layout: landing`; all structured data (heroTitle, skills, workExperience, socialProfiles, certifications) lives in its front matter, not a separate data file.
- `content/posts/` — blog posts.
- `content/docs/` — documentation sections, each a subdirectory with `_index.md` and individual pages.

### Theme and Layouts

- `themes/hugo-book` — git submodule ([alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book)). Do not edit files inside `themes/`.
- `layouts/baseof.html` — overrides the theme base template; adds GTM injection hooks and custom CSS for social icon sizing.
- `layouts/404.html` — custom 404 page.
- `layouts/partials/docs/inject/head.html` — injects GTM `<script>` (reads `gtmID` from site params).
- `layouts/partials/docs/inject/body.html` — injects GTM `<noscript>` fallback.

### Archetypes

- `archetypes/posts.md` — template for new posts.
- `archetypes/docs.md` — template for new docs pages (includes hugo-book front matter flags: `bookFlatSection`, `bookHidden`, etc.).

### Static Assets

- `static/favicon_io/` — favicon files referenced in `hugo.yaml` (`BookFavicon`, `BookLogo`, `images`).
- `static/profile.jpeg` — profile photo used on the landing page.

## Wiki (Obsidian Knowledge Base)

The wiki lives inside this repo at `wiki-vault/` and is tracked in git alongside the site.

- `wiki-vault/` — Obsidian vault. Categories: `concepts/`, `entities/`, `skills/`, `references/`, `synthesis/`, `journal/`, `projects/`. Staging area in `_raw/`, snapshots in `_archives/`.
- `wikis/` — source documents directory (fed into wiki ingest).
- `.env` — sets `OBSIDIAN_VAULT_PATH` and `OBSIDIAN_SOURCES_DIR`; read by all wiki skills.

Skills from `.agents/skills/` (mirrored in `.claude/skills/`) implement the wiki pipeline. `skills-lock.json` tracks installed skill versions. Key slash commands:

| Skill | Purpose |
|---|---|
| `/wiki-setup` | Initialize vault structure |
| `/wiki-status` | Show ingestion delta |
| `/wiki-ingest` | Distill sources into wiki pages |
| `/wiki-query` | Search and retrieve knowledge |
| `/claude-history-ingest` | Mine past Claude conversations |
| `/ingest-url` | Fetch and ingest a URL |
| `/cross-linker` | Add missing `[[wikilinks]]` |
| `/wiki-lint` | Audit for broken links / inconsistencies |

## Front Matter Conventions

**Posts** (`content/posts/*.md`):
```yaml
title: 'Post Title'
date: '2026-01-01T00:00:00+05:30'
tags: ["tag1", "tag2"]
author: ["Niraj Kashyap"]
bookToC: true
draft: false
description: "Short description."
canonicalURL: "https://nirajkashyap.github.io/posts/post-slug"
```

**Docs** (`content/docs/**/*.md`):
```yaml
title: "Page Title"
weight: 1   # controls sidebar ordering
bookCollapseSection: false
```
