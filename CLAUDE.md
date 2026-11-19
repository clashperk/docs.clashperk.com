# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official documentation site for **ClashPerk**, a Discord bot for Clash of Clans clan management. It is a GitBook-hosted documentation repository — there is no build system, test suite, or compilation step. Content is pure Markdown with GitBook-specific syntax.

## Generating Developer Command Docs

The `index.js` script auto-generates all documentation under `others/commands/` by fetching the live command definitions from the main ClashPerk bot repository:

```bash
node index.js
```

This fetches `commands_export.json` from the bot repo (`clashperk/clashperk-bot`, `main`) and writes:

- one page per command: description, a guide hint, options with types, and related commands in the same group
- each group's `README.md` (intro from `GROUPS`, kept `layout` frontmatter) and the commands hub `others/commands/README.md`
- the commands block of the root `SUMMARY.md`

`SKIP` lists commands that get no page (owner-only or replaced). `GUIDES` maps a command or group to its feature guide, and the guide's title comes from its `SUMMARY.md` label. When you add a command group, add its intro to `GROUPS`. **Do not manually edit files in `others/commands/`**: they are overwritten on the next run.

## Content Structure

- **`SUMMARY.md`** — GitBook table of contents (the single source of nav); must be updated when adding or removing pages
- **`README.md`** — Site welcome page
- **`overview/`** — Onboarding guides (getting set up, linking accounts)
- **`features/`** — End-user feature documentation (rosters, auto-role, logs, etc.)
- **`others/`** — Admin features (bot manager, whitelist, autocomplete)
- **`others/commands/`** — Auto-generated command reference (do not edit manually)
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

When adding a new page, add a corresponding entry to **`SUMMARY.md`** — GitBook derives its navigation from that file.
