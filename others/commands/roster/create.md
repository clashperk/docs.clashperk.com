---
description: "Create a roster. Options for /roster create in ClashPerk, the Clash of Clans bot for Discord."
---

# /roster create

Create a roster.

{% hint style="info" %}
For setup steps and examples, read [CWL and War Rosters](../../../features/rosters/README.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `clan` | Text | Clan of the roster |
| `name` | Text | Name of the roster |
| `category` | Text | Category of the roster<details><summary>View Options</summary>`CWL`, `WAR`, `E-SPORTS`, `TROPHY`</details> |
| `import_members` | True or False | Whether to import members from the clan |
| `allow_unlinked` | True or False | Whether to allow unlinked members |
| `max_members` | Whole number | Roster size |
| `max_accounts_per_user` | Whole number | Max accounts per user |
| `min_town_hall` | Whole number | Minimum Town Hall level |
| `max_town_hall` | Whole number | Maximum Town Hall level |
| `min_hero_level` | Whole number | Minimum combined Hero level |
| `roster_role` | Role | Roster role |
| `sort_by` | Text | Sorting order of the roster member list<details><summary>View Options</summary>`Player Name`, `Discord Name`, `Discord Username`, `Town Hall Level`, `Hero Levels`, `TH + Hero Levels`, `Clan Name`, `Signup Time`, `Trophies`, `Leagues`</details> |
| `start_time` | Text | Roster start time (YYYY-MM-DD HH:mm, in 24 hours format) |
| `end_time` | Text | Roster end time (YYYY-MM-DD HH:mm, in 24 hours format) |
| `timezone` | Text | Search timezone by city or country (e.g. London, Singapore, India, Sydney) |
| `allow_group_selection` | True or False | Whether to allow members to select group |
| `require_group_selection` | True or False | Whether to require members to select group |
| `group_selection_text` | Text | Custom text shown to members when they select a roster group |
| `allow_multi_signup` | True or False | Whether to allow multiple roster signups |
| `use_clan_alias` | True or False | Whether to use clan alias in the roster (created by /alias command) |
| `roster_image_url` | Text | Image to be used in the roster embed |
| `color_code` | Text | Hex color code of the roster embed |

## Related commands

* [/roster clone](clone.md): Clone a roster to create a new one.
* [/roster delete](delete.md): Permanently delete a roster.
* [/roster edit](edit.md): Edit a roster.
* [/roster groups create](groups-create.md): Create a group.
* [/roster groups modify](groups-modify.md): Modify or delete a group.
* [/roster list](list.md): Search rosters or list all rosters and groups.
* [/roster manage](manage.md): Add or remove users or change their group or roster.
* [/roster ping](ping.md): Ping members in the roster.
* [/roster post](post.md): Post a roster to signup or view members.

