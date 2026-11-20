---
description: "Create reminders for clan wars, capital raids or clan games. Options for /reminders create in ClashPerk, the Clash of Clans bot for Discord."
---

# /reminders create

Create reminders for clan wars, capital raids or clan games.

{% hint style="info" %}
For setup steps and examples, read [War, Raid and Clan Games Reminders](../../../features/reminders.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `type` | Text | Type of the reminder.<details><summary>View Options</summary>`Clan Wars`, `Capital Raids`, `Clan Games`</details> |
| `duration` | Text | Remaining duration to mention members (e.g. 6h, 12h, 1d, 2d) |
| `clans` | Text | Clan tags or aliases to filter clans. |
| `message` | Text | Reminder message for the notification. |
| `exclude_participant_list` | True or False | Whether to exclude participant list and only include the message (clan wars only) |
| `channel` | Channel | Reminder channel for the notification. |

## Related commands

* [/reminders config](config.md): Create an instant reminder to notify members.
* [/reminders delete](delete.md): Delete a reminder by ID (do /reminders list to get the ID)
* [/reminders edit](edit.md): Edit a reminder by ID (do /reminders list to get the ID)
* [/reminders list](list.md): List all war reminders for clan wars, capital raids or clan games.
* [/reminders now](now.md): Create an instant reminder to notify members.

