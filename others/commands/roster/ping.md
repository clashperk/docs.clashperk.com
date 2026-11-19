---
description: "Ping members in the roster. Options for /roster ping in ClashPerk, the Clash of Clans bot for Discord."
---

# /roster ping

Ping members in the roster.

{% hint style="info" %}
For setup steps and examples, read [CWL and War Rosters](../../../features/rosters/README.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `roster` | Text | Select a roster to ping |
| `message` | Text | Message for the members |
| `compact` | True or False | Send member pings in a compact inline format |
| `ping_option` | Text | Select a ping option<details><summary>View Options</summary>`Unregistered (didn't signup, but in the clan)`, `Missing (opted-in, but not in the clan)`, `Everyone (all opted-in members)`</details> |
| `group` | Text | Select a group to ping (overwrites ping_option) |

## Related commands

* [/roster clone](clone.md): Clone a roster to create a new one.
* [/roster create](create.md): Create a roster.
* [/roster delete](delete.md): Permanently delete a roster.
* [/roster edit](edit.md): Edit a roster.
* [/roster groups create](groups-create.md): Create a group.
* [/roster groups modify](groups-modify.md): Modify or delete a group.
* [/roster list](list.md): Search rosters or list all rosters and groups.
* [/roster manage](manage.md): Add or remove users or change their group or roster.
* [/roster post](post.md): Post a roster to signup or view members.

