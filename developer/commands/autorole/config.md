---
description: Manage automatic roles settings.
---

# autorole config

Manage automatic roles settings.

## Options

| Name | Description | Type/Options |
|------|-------------|--------------|
| `auto_update_roles` | Whether to update roles automatically. | [`Yes`, `No`] |
| `role_removal_delays` | Whether to delay the removal of roles. | [`Off`, `1h`, `2h`, `4h`, `6h`, `8h`, `12h`, `18h`, `24h`, `36h`, `48h`, `72h`, `7d`, `12d`] |
| `role_addition_delays` | Whether to delay the addition of roles. | [`Off`, `1h`, `2h`, `4h`, `6h`, `8h`, `12h`, `18h`, `24h`] |
| `delay_exclusion_roles` | Roles that are excluded from delays. | [`Town Hall Roles`, `Builder Hall Roles`, `League Roles`, `Builder League Roles`, `Guest Role`] |
| `always_force_refresh_roles` | Whether to enforce role refresh for individual users by default. | `Boolean` |
| `allow_not_linked` | Whether to allow not linked players to get roles. | `Boolean` |
| `verified_only_clan_roles` | Whether to grant clans roles to verified players only. | [`Yes`, `No`] |

