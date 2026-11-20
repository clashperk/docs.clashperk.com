---
description: "Setup automatic logs for the clan. Options for /setup clan-logs in ClashPerk, the Clash of Clans bot for Discord."
---

# /setup clan-logs

Setup automatic logs for the clan.

{% hint style="info" %}
For setup steps and examples, read [Clan, War and Capital Logs](../../../features/logs.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `clan` | Text | Select the clan to setup logs. |
| `action` | Text | What logs to enable or disable.<details><summary>View Options</summary>`Enable`, `Disable`</details> |
| `channel` | Channel | Channel to send updates to (defaults to the current channel) |
| `color` | Text | Hex color code for the embed (for donation log, clan games, last seen, etc) |
| `ping_role` | Role | Ping this role in the logs (only for town hall upgrade log) |

## Related commands

* [/setup buttons](buttons.md): Setup buttons for the server.
* [/setup clan](clan.md): Link/unlink clans to the server or channels.
* [/setup clan-embed](clan-embed.md): Enable/disable clan embed on the server or add/remove clans.
* [/setup events](events.md): Setup automatic events for the server.
* [/setup list](list.md): List all enabled features and clans.
* [/setup server-logs](server-logs.md): Setup automatic logs for the server.

