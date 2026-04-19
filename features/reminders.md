---
description: Automatically ping members when time is running out for Clan Wars, Capital Raids, or Clan Games.
icon: bell
---

# Reminders

Reminders automatically notify members in a Discord channel when there is limited time left in an event. You can set up multiple reminders per event type, each at a different time threshold.

Supported event types:

* **Clan Wars** — ping members who haven't used all attacks before war ends
* **Capital Raids** — ping members who haven't used all raid attacks before the weekend closes
* **Clan Games** — ping members who haven't reached a points threshold before clan games ends

***

### Create a Reminder

<mark style="color:blue;">**/reminders create**</mark> <mark style="color:purple;">**type:**</mark> `Clan Wars` <mark style="color:purple;">**duration:**</mark> `6h` <mark style="color:purple;">**clans:**</mark> `#CLAN_TAG` <mark style="color:purple;">**channel:**</mark> `#channel`

| Option | Description |
|--------|-------------|
| `type` | `Clan Wars`, `Capital Raids`, or `Clan Games` |
| `duration` | Time remaining when the ping fires — e.g. `1h`, `6h`, `12h`, `1d`, `48h`. Use `0h` to fire at war end, `48h` to fire at war start. Must be a multiple of 15 minutes; max `48h`. |
| `clans` | Clan tags or aliases to target (leave blank for all clans) |
| `message` | Custom message included in the reminder notification |
| `channel` | Channel to post the reminder in (defaults to current channel) |
| `exclude_participant_list` | *(Clan Wars only)* Send only the message without listing missing attackers |

{% hint style="info" %}
You can create multiple reminders for the same event at different durations (e.g. 12h and 2h remaining).

**Special durations for Clan Wars:**
* `48h` — fires when the war starts (preparation day begins)
* `24h` — fires when the battle day starts
* `0h` — fires exactly when the war ends

At `0h`, `24h`, and `48h` the participant list is hidden automatically — only your custom message is sent.
{% endhint %}

***

### List Reminders

<mark style="color:blue;">**/reminders list**</mark> <mark style="color:purple;">**type:**</mark> `Clan Wars`

Shows all configured reminders for the selected type. Use this to find the **Reminder ID** needed for editing or deleting.

***

### Edit a Reminder

<mark style="color:blue;">**/reminders edit**</mark> <mark style="color:purple;">**type:**</mark> `Clan Wars` <mark style="color:purple;">**id:**</mark> `REMINDER_ID` <mark style="color:purple;">**duration:**</mark> `3h`

Use `/reminders list` to get the reminder ID.

***

### Delete a Reminder

<mark style="color:blue;">**/reminders delete**</mark> <mark style="color:purple;">**type:**</mark> `Clan Wars` <mark style="color:purple;">**id:**</mark> `REMINDER_ID`

***

### Send an Instant Reminder

<mark style="color:blue;">**/reminders now**</mark> <mark style="color:purple;">**type:**</mark> `Clan Wars` <mark style="color:purple;">**clans:**</mark> `#CLAN_TAG`

Sends a one-off reminder immediately without waiting for a scheduled trigger. Useful for manually pinging before an important deadline.

***

### Ping Exclusion (OptIn / OptOut)

<mark style="color:blue;">**/reminders config**</mark>

Controls which members receive reminder pings. You can assign a role per event type and choose between two modes:

* **OptIn** — only members with the assigned role are pinged
* **OptOut** — all members are pinged *except* those with the assigned role

This lets members or leadership control who gets notified without editing each reminder individually.
