---
description: Create a player flag to mark the player as banned or flagged.
---

# flag create

Create a player flag to mark the player as banned or flagged.

## Options

| Name | Description | Type/Options |
|------|-------------|--------------|
| `flag_type` | The type of the flag (ban or strike) | `Ban`, `Strike` |
| `player` | The tag of a player to flag. | `String` |
| `reason` | Reason for the flag. | `String` |
| `flag_expiry_days` | Flag expiry days (auto deletes the flag) | `Integer` |
| `flag_impact` | Number of flags this should count as | `Integer` |

