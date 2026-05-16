# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio and blog site for Niraj Kashyap, built with [Hugo](https://gohugo.io/) using the `hugo-book` theme (git submodule). The compiled site is published to the `docs/` directory, which is served by GitHub Pages from the `master` branch.

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

**Deployment:** There is no CI/CD pipeline active. After running `hugo build`, commit the updated `docs/` directory and push to `master`. GitHub Pages serves from `docs/`.

## Architecture

### Config

- `hugo.yaml` — active site config. `BookSection: posts` means the left sidebar shows the posts section by default.
- `themeRef/` — reference configs for alternate layouts (not used for production builds). `hugobook.theme.hugo.yaml` sets `BookSection: docs` to show the docs section in the sidebar instead.

### Content

- `content/_index.md` — landing page. Uses `layout: landing` and heavy front matter (heroTitle, skills, workExperience, socialProfiles, certifications) to drive the page. All structured data for the landing page lives here, not in a separate data file.
- `content/posts/` — blog posts. Frontmatter should include `tags`, `description`, `canonicalURL`, `author`, `bookToC`, and `draft`.
- `content/docs/` — documentation sections. Each section is a subdirectory with `_index.md` and individual `.md` pages.

### Theme and Layouts

- `themes/hugo-book` — git submodule pointing to [alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book). Do not edit files inside `themes/`.
- `layouts/baseof.html` — overrides the theme's base template to add GTM script injection hooks and custom CSS for social icons.
- `layouts/partials/docs/inject/head.html` — injects Google Tag Manager `<script>` (reads `gtmID` from site params).
- `layouts/partials/docs/inject/body.html` — injects GTM `<noscript>` fallback.

### Archetypes

- `archetypes/posts.md` — template for new posts (title, date).
- `archetypes/docs.md` — template for new docs pages (title, weight, and hugo-book-specific front matter flags like `bookFlatSection`, `bookHidden`, etc.).

### Static Assets

- `static/favicon_io/` — favicon files referenced in `hugo.yaml` (`BookFavicon`, `BookLogo`, `images`).
- `static/profile.jpeg` — profile photo used on the landing page.

## Wiki Skills (Obsidian Knowledge Base)

33 skills from [Ar9av/obsidian-wiki](https://github.com/Ar9av/obsidian-wiki) are installed in `.agents/skills/` and available as slash commands. They implement an LLM-maintained Obsidian vault that acts as a compounding knowledge base alongside this Hugo site.

**Getting started — run in order:**
1. `/wiki-setup` — initialize the vault directory, `.env`, and `index.md`/`log.md`/`hot.md` special files
2. `/wiki-status` — check what sources are available to ingest
3. `/wiki-ingest` — distill documents into interconnected wiki pages
4. `/claude-history-ingest` — mine past Claude conversations into the wiki

**Key skills:**

| Skill | Purpose |
|---|---|
| `/wiki-query` | Search and retrieve knowledge from the vault |
| `/ingest-url` | Fetch and ingest a URL into the wiki |
| `/obsidian-wiki-ingest` | Import from an existing Obsidian vault |
| `/wiki-research` | Deep-research a topic and write wiki pages |
| `/wiki-update` | Update existing pages with new information |
| `/wiki-digest` | Generate a summary digest of recent activity |
| `/wiki-lint` | Check wiki for broken links and inconsistencies |
| `/wiki-dedup` | Merge duplicate pages |
| `/cross-linker` | Add missing `[[wikilinks]]` between pages |
| `/llm-wiki` | Explains the three-layer architecture (theory skill) |

**Config:** The skills read `OBSIDIAN_VAULT_PATH` and `OBSIDIAN_SOURCES_DIR` from a `.env` file at the repo root (created by `/wiki-setup`). The vault is a separate directory from this Hugo repo — typically `~/Documents/obsidian-wiki-vault`.

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
