---
description: >-
  Add ClashPerk to your Discord server, link your Clash of Clans clan with
  /setup clan, then turn on war, clan and capital logs for it.
icon: lightbulb
---

# How to Set Up ClashPerk on Discord

Add ClashPerk to your server from [clashperk.com](https://clashperk.com), then run <mark style="color:blue;">**/setup clan**</mark> with your clan tag. That's all ClashPerk needs to start tracking your clan. A default clan per channel, a clan embed and logs are optional.

## 1. Invite the bot to your server

Before you can run any command, ClashPerk needs to be in your server. Head to [clashperk.com](https://clashperk.com) and use **Add to Discord**, then pick your server and approve the requested permissions. You need the Manage Server permission in that server.

{% hint style="info" %}
Already have ClashPerk in another server? Run <mark style="color:blue;">**/invite**</mark> from any server where the bot is present to get the invite link.
{% endhint %}

## 2. Link a clan to your server (required)

This adds your clan to the server, so the bot starts tracking it.

<mark style="color:blue;">**/setup clan**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`

{% hint style="info" %}
If the bot asks you to verify, the clan is already linked in many other servers or your server has reached its clan limit. Verify a leader or co-leader account with <mark style="color:blue;">**/verify**</mark> (see [Link account](link-account.md)), then run the command again. [Clan verification](../faq.md#what-is-clan-verification) explains when it's needed.
{% endhint %}

## 3. Set a default clan for a channel (optional)

Link a clan to a channel, one clan per channel. Commands run in that channel then use the clan without you entering or picking its tag. Repeat it to link the clan in more channels.

<mark style="color:blue;">**/setup clan**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**clan\_channel:**</mark> `#general`

## 4. Create a clan embed (optional)

A clan embed showcases your clan in a public channel.

<mark style="color:blue;">**/setup clan-embed**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`

## 5. Turn on logs (optional)

If you don't pick a channel, logs go to the current channel.

<mark style="color:blue;">**/setup clan-logs**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**action:**</mark> `Enable` <mark style="color:purple;">**channel:**</mark> `#channel`

Pick the logs you want from the menu that appears. Clan, capital, war and player logs are all available. For every log and what it posts, see [Clan, War and Capital Logs](../features/logs.md).

To turn a log off:

<mark style="color:blue;">**/setup clan-logs**</mark> <mark style="color:purple;">**action:**</mark> `Disable` <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`

## Next steps

* [Link your Clash of Clans account](link-account.md) so commands know who you are.
* [Auto Roles](../features/auto-role.md) give members Discord roles from their clan role, Town Hall and league.
* [Reminders](../features/reminders.md) ping members who still have attacks left.
* [CWL and War Rosters](../features/rosters/README.md) run signups with a button.
