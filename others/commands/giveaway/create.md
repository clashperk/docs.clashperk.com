---
description: "Post a giveaway with an Enter button. Options for /giveaway create in ClashPerk, the Clash of Clans bot for Discord."
---

# /giveaway create

Post a giveaway with an Enter button.

{% hint style="info" %}
For setup steps and examples, read [Giveaways](../../../features/giveaways.md).
{% endhint %}

## Options

| Name | Type | Description |
|------|------|-------------|
| `prize` | Text | What members can win. |
| `duration` | Text | How long it runs, such as 24h, 3d or 1h30m. |
| `winners` | Whole number | How many winners to draw. Default 1. |
| `channel` | Channel | Where to post it. Defaults to this channel. |
| `mode` | Text | Who can enter and how odds work. Default open.<details><summary>View Options</summary>`Open — everyone, equal odds`, `Boosted — clan members get better odds`, `Restricted — clan members only`</details> |
| `clan` | Text | For boosted or restricted: limit to one clan. Defaults to all server clans. |
| `boost_factor` | Whole number | For boosted mode: how many times the odds for clan members. Default 2. |
| `image` | File | A banner image to show in the giveaway. |

## Related commands

* [/giveaway cancel](cancel.md): Cancel a giveaway without drawing.
* [/giveaway end](end.md): Draw the winners now and end a giveaway.
* [/giveaway list](list.md): List the active giveaways on this server.
* [/giveaway reroll](reroll.md): Draw a fresh set of winners for an ended giveaway.

