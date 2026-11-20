---
description: "Edit a roster. Options for /roster edit in ClashPerk, the Clash of Clans bot for Discord."
---

# /roster edit

Edit a roster.

{% hint style="info" %}
For setup steps and examples, read [CWL and War Rosters](../../../features/rosters/README.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `roster` | Text | Select a roster to edit |
| `name` | Text | Name of the roster |
| `category` | Text | Category of the roster<details><summary>View Options</summary>`CWL`, `WAR`, `E-SPORTS`, `TROPHY`</details> |
| `clan` | Text | Clan of the roster |
| `allow_unlinked` | True or False | Whether to allow unlinked members |
| `max_members` | Whole number | Roster size |
| `max_accounts_per_user` | Whole number | Max accounts per user |
| `min_town_hall` | Whole number | Minimum Town Hall level |
| `max_town_hall` | Whole number | Maximum Town Hall level |
| `min_hero_level` | Whole number | Minimum combined Hero level |
| `roster_role` | Role | Roster role |
| `sort_by` | Text | Sorting order of the roster member list<details><summary>View Options</summary>`Player Name`, `Discord Name`, `Discord Username`, `Town Hall Level`, `Hero Levels`, `TH + Hero Levels`, `Clan Name`, `Signup Time`, `Trophies`, `Leagues`</details> |
| `delete_role` | True or False | Whether to delete the roster role |
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
| `log_channel` | Channel | Channel to log roster changes |
| `delete_log_channel` | True or False | Whether to delete the log channel |

## Related commands

* [/roster clone](clone.md): Clone a roster to create a new one.
* [/roster create](create.md): Create a roster.
* [/roster delete](delete.md): Permanently delete a roster.
* [/roster groups create](groups-create.md): Create a group.
* [/roster groups modify](groups-modify.md): Modify or delete a group.
* [/roster list](list.md): Search rosters or list all rosters and groups.
* [/roster manage](manage.md): Add or remove users or change their group or roster.
* [/roster ping](ping.md): Ping members in the roster.
* [/roster post](post.md): Post a roster to signup or view members.

