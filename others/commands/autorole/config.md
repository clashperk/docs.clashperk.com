---
description: "Manage automatic roles settings. Options for /autorole config in ClashPerk, the Clash of Clans bot for Discord."
---

# /autorole config

Manage automatic roles settings.

{% hint style="info" %}
For setup steps and examples, read [Auto Roles for Clan Role, Town Hall and League](../../../features/auto-role.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `auto_update_roles` | Text | Whether to update roles automatically. |
| `role_removal_delays` | Text | Whether to delay the removal of roles.<details><summary>View Options</summary>`Off`, `1h`, `2h`, `4h`, `6h`, `8h`, `12h`, `18h`, `24h`, `36h`, `48h`, `72h`, `7d`, `12d`</details> |
| `role_addition_delays` | Text | Whether to delay the addition of roles.<details><summary>View Options</summary>`Off`, `1h`, `2h`, `4h`, `6h`, `8h`, `12h`, `18h`, `24h`</details> |
| `delay_exclusion_roles` | Text | Roles that are excluded from delays.<details><summary>View Options</summary>`Town Hall Roles`, `Builder Hall Roles`, `League Roles`, `Builder League Roles`, `Guest Role`</details> |
| `always_force_refresh_roles` | True or False | Whether to enforce role refresh for individual users by default. |
| `allow_not_linked` | True or False | Whether to allow not linked players to get roles. |
| `verified_only_clan_roles` | Text | Whether to grant clans roles to verified players only. |

## Related commands

* [/autorole builder-hall](builder-hall.md): Manage automatic Builder Hall roles.
* [/autorole builder-leagues](builder-leagues.md): Set builder base league roles.
* [/autorole clan-roles](clan-roles.md): Manage automatic role management for clan roles.
* [/autorole disable](disable.md): Disable automatic clan roles.
* [/autorole eos-push](eos-push.md): Set end of season push roles.
* [/autorole family](family.md): Set family roles.
* [/autorole leagues](leagues.md): Manage automatic role management for leagues.
* [/autorole list](list.md): List all auto roles and settings.
* [/autorole refresh](refresh.md): Refresh roles manually.
* [/autorole town-hall](town-hall.md): Manage automatic role management for town hall levels.
* [/autorole wars](wars.md): Set automatic war roles.

