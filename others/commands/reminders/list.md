---
description: "List all war reminders for clan wars, capital raids or clan games. Options for /reminders list in ClashPerk, the Clash of Clans bot for Discord."
---

# /reminders list

List all war reminders for clan wars, capital raids or clan games.

{% hint style="info" %}
For setup steps and examples, read [War, Raid and Clan Games Reminders](../../../features/reminders.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `type` | Text | Type of the reminder.<details><summary>View Options</summary>`Clan Wars`, `Capital Raids`, `Clan Games`</details> |
| `compact_list` | True or False | Show a compact list of the reminders and disable ephemeral. |
| `clans` | Text | Clan tags or aliases to filter clans. |
| `channel` | Channel | Reminder channel for the notification. |
| `reminder_id` | Text | List a reminder by ID (do /reminders list to get the ID) |

## Related commands

* [/reminders config](config.md): Create an instant reminder to notify members.
* [/reminders create](create.md): Create reminders for clan wars, capital raids or clan games.
* [/reminders delete](delete.md): Delete a reminder by ID (do /reminders list to get the ID)
* [/reminders edit](edit.md): Edit a reminder by ID (do /reminders list to get the ID)
* [/reminders now](now.md): Create an instant reminder to notify members.

