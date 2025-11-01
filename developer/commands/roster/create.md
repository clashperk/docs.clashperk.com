---
description: Create a roster
---

# roster create

Create a roster

## Options

| Name | Description | Type/Options |
|------|-------------|--------------|
| `clan` | Clan of the roster | `String` |
| `name` | Name of the roster | `String` |
| `category` | Category of the roster | `CWL`, `WAR`, `E-SPORTS`, `TROPHY` |
| `import_members` | Whether to import members from the clan | `Boolean` |
| `allow_unlinked` | Whether to allow unlinked members | `Boolean` |
| `max_members` | Roster size | `Integer` |
| `max_accounts_per_user` | Max accounts per user | `Integer` |
| `min_town_hall` | Minimum Town Hall level | `Integer` |
| `max_town_hall` | Maximum Town Hall level | `Integer` |
| `min_hero_level` | Minimum combined Hero level | `Integer` |
| `roster_role` | Roster role | `Role` |
| `sort_by` | Sorting order of the roster member list | `Player Name`, `Discord Name`, `Discord Username`, `Town Hall Level`, `Hero Levels`, `TH + Hero Levels`, `Clan Name`, `Signup Time`, `Trophies`, `Leagues` |
| `start_time` | Roster start time (YYYY-MM-DD HH:mm, in 24 hours format) | `String` |
| `end_time` | Roster end time (YYYY-MM-DD HH:mm, in 24 hours format) | `String` |
| `timezone` | Search timezone by city or country (e.g. London, Singapore, India, Sydney) | `String` |
| `allow_group_selection` | Whether to allow members to select group | `Boolean` |
| `allow_multi_signup` | Whether to allow multiple roster signups | `Boolean` |
| `use_clan_alias` | Whether to use clan alias in the roster (created by /alias command) | `Boolean` |
| `roster_image_url` | Image to be used in the roster embed | `String` |
| `color_code` | Hex color code of the roster embed | `String` |

