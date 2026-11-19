---
description: "Create a player flag to mark the player as banned or flagged. Options for /flag create in ClashPerk, the Clash of Clans bot for Discord."
---

# /flag create

Create a player flag to mark the player as banned or flagged.

{% hint style="info" %}
For setup steps and examples, read [Flags (Ban/Strike)](../../../features/flags-ban-strike.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `flag_type` | Text | The type of the flag (ban or strike)<details><summary>View Options</summary>`Ban`, `Strike`</details> |
| `player` | Text | The tag of a player to flag. |
| `reason` | Text | Reason for the flag. |
| `dm_user` | True or False | Whether to DM the user about the flag |
| `flag_expiry_days` | Whole number | Flag expiry days (auto deletes the flag) |
| `flag_impact` | Whole number | Number of flags this should count as |

## Related commands

* [/flag delete](delete.md): Delete a player flag.
* [/flag list](list.md): List all player flags.

