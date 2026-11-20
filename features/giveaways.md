---
icon: gift
description: >-
  Run giveaways with an Enter button, an automatic draw, and optional perks or
  limits for members of your clans.
---

# Giveaways

{% hint style="info" %}
🧪 **Beta** — Giveaways are in beta. Some features may still change as we refine them.
{% endhint %}

A giveaway is a message with an **Enter** button. Members click it to enter, and ClashPerk draws the winners when the time runs out. You can also end it early, reroll the winners, or cancel it.

You need the **Manage Server** permission to create and manage giveaways.

***

## Creating a Giveaway

<mark style="color:blue;">**/giveaway create**</mark> <mark style="color:purple;">**prize:**</mark> `Gold Pass` <mark style="color:purple;">**duration:**</mark> `3d`

ClashPerk shows you a preview that only you can see. Click **Post giveaway** to send it, or **Cancel** to throw it away.

| Option | Description |
|---|---|
| **prize** | What members can win (max 256 chars) |
| **duration** | How long it runs, such as `24h`, `3d` or `1h30m`. Between 1 minute and 60 days |
| **winners** | How many winners to draw, 1 to 50. Default 1 |
| **channel** | Where to post it. Defaults to the current channel |
| **mode** | Who can enter and how the odds work. Default **Open**. See [Modes](#modes) |
| **boost\_factor** | For **Boosted** mode only. How many times better the odds are for clan members, 2 to 100. Default 2 |
| **image** | A banner image shown in the giveaway |

### On the Dashboard

Open **Giveaways** on the [web dashboard](https://app.clashperk.com) and click **New giveaway**. The form has the same settings, with an exact end date and time. For the banner, paste a public link to an image. A live preview shows how the message will look in Discord.

The dashboard also lists every giveaway on your server, with its entrants and winners, and lets you end, reroll or cancel it.

***

## Modes

| Mode | Who can enter | Odds |
|---|---|---|
| **Open** *(default)* | Everyone | Equal for everyone |
| **Boosted** | Everyone | Clan members get extra odds, set by the boost factor |
| **Restricted** | Clan members only | Equal for everyone who enters |

A **clan member** is someone with a Clash of Clans account linked to ClashPerk that is in one of the chosen clans. Link an account with `/link create`.

For Boosted and Restricted giveaways, pick **Clans that count** in the preview. It starts as **All server clans**, which means every clan connected to the server, including clans you add later. You can pick specific clans instead.

{% hint style="warning" %}
The server needs at least one clan for Boosted and Restricted giveaways. Add one with `/setup clan`.
{% endhint %}

### When clan membership is checked

* **Restricted** — checked when a member clicks **Enter**, and again at the draw. Someone who has left the chosen clans by the draw can't win.
* **Boosted** — checked only at the draw. A member who joins a chosen clan before the draw gets the extra odds.

With a boost factor of 2, a clan member is twice as likely to win as someone outside the clans.

***

## Entering

Click **Enter** on the giveaway message. Each Discord user can enter once, no matter how many accounts they have linked. The entry count on the message updates as people join.

If a Restricted giveaway turns someone away, ClashPerk tells them privately and explains how to qualify.

***

## Ending and Rerolling

When the time runs out, ClashPerk draws the winners, updates the message and announces them in the channel. A winner can't be drawn twice in the same draw.

| Command | What it does |
|---|---|
| <mark style="color:blue;">**/giveaway end**</mark> | Draws the winners now and ends the giveaway |
| <mark style="color:blue;">**/giveaway reroll**</mark> | Draws a fresh set of winners for an ended giveaway, skipping the previous winners |
| <mark style="color:blue;">**/giveaway cancel**</mark> | Ends the giveaway without drawing anyone |
| <mark style="color:blue;">**/giveaway list**</mark> | Lists the active giveaways on this server |

Start typing in the **giveaway** option to pick one from a list.

{% hint style="info" %}
If the giveaway's channel is deleted, or ClashPerk can no longer post there, the giveaway is cancelled.
{% endhint %}
