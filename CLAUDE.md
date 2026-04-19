# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official documentation site for **ClashPerk**, a Discord bot for Clash of Clans clan management. It is a GitBook-hosted documentation repository — there is no build system, test suite, or compilation step. Content is pure Markdown with GitBook-specific syntax.

## Generating Developer Command Docs

The `index.js` script auto-generates all documentation under `developer/commands/` by fetching the live command definitions from the main ClashPerk bot repository:

```bash
node index.js
```

This fetches `commands_export.json` from `https://raw.githubusercontent.com/clashperk/clashperk/refs/heads/main/scripts/assets/commands_export.json`, writes one Markdown file per command, and regenerates `developer/commands/SUMMARY.md`. **Do not manually edit files in `developer/commands/`** — they will be overwritten on the next run.

## Content Structure

- **`SUMMARY.md`** — GitBook table of contents; must be updated when adding or removing pages
- **`docs.json`** — Structured documentation configuration for GitBook API/integration
- **`README.md`** — Site welcome page
- **`overview/`** — Onboarding guides (getting set up, linking accounts)
- **`features/`** — End-user feature documentation (rosters, auto-role, logs, etc.)
- **`others/`** — Admin features (bot manager, whitelist, autocomplete)
- **`developer/commands/`** — Auto-generated command reference (do not edit manually)
- **`.gitbook/assets/`** — Images and icons used in pages

## GitBook Conventions

Pages use YAML frontmatter with `description` and optionally `icon` fields:

```markdown
---
description: Short description shown in navigation
icon: optional-gitbook-icon-name
---
```

Cross-page references use GitBook's content-ref syntax:

```markdown
{% content-ref url="relative/path.md" %}
[link text](relative/path.md)
{% endcontent-ref %}
```

When adding a new page, add a corresponding entry to **`SUMMARY.md`** (and `docs.json` if it belongs in a structured group) — GitBook derives its navigation from these files.
