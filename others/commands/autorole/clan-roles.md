---
description: "Manage automatic role management for clan roles. Options for /autorole clan-roles in ClashPerk, the Clash of Clans bot for Discord."
---

# /autorole clan-roles

Manage automatic role management for clan roles.

{% hint style="info" %}
For setup steps and examples, read [Auto Roles for Clan Role, Town Hall and League](../../../features/auto-role.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `clans` | Text | Clan tags or aliases to filter clans. |
| `leader_role` | Role | The Leader role. |
| `co_leader_role` | Role | The Co-Leader role. |
| `elder_role` | Role | The Elder role. |
| `member_role` | Role | The Member role (below Elder) |
| `everyone_role` | Role | Clan role for everyone in the clan. |
| `only_verified` | Text | Roles will be given to the verified players only. (API token verification is required) |

## Related commands

* [/autorole builder-hall](builder-hall.md): Manage automatic Builder Hall roles.
* [/autorole builder-leagues](builder-leagues.md): Set builder base league roles.
* [/autorole config](config.md): Manage automatic roles settings.
* [/autorole disable](disable.md): Disable automatic clan roles.
* [/autorole eos-push](eos-push.md): Set end of season push roles.
* [/autorole family](family.md): Set family roles.
* [/autorole leagues](leagues.md): Manage automatic role management for leagues.
* [/autorole list](list.md): List all auto roles and settings.
* [/autorole refresh](refresh.md): Refresh roles manually.
* [/autorole town-hall](town-hall.md): Manage automatic role management for town hall levels.
* [/autorole wars](wars.md): Set automatic war roles.

