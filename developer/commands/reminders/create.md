---
description: Create reminders for clan wars, capital raids or clan games.
---

# reminders create

Create reminders for clan wars, capital raids or clan games.

## Options

| Name | Description | Type/Options |
|------|-------------|--------------|
| `type` | Type of the reminder. | `Clan Wars`, `Capital Raids`, `Clan Games` |
| `duration` | Remaining duration to mention members (e.g. 6h, 12h, 1d, 2d) | `String` |
| `clans` | Clan tags or aliases to filter clans. | `String` |
| `message` | Reminder message for the notification. | `String` |
| `exclude_participant_list` | Whether to exclude participant list and only include the message (clan wars only) | `Boolean` |
| `channel` | Reminder channel for the notification. | `Channel` |

