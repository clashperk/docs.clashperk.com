---
description: Get started with the ClashPerk bot.
icon: lightbulb
---

# Getting set up

#### Invite the bot to your server (do this first)

<details>

<summary>Add ClashPerk</summary>

Before you can run any command, ClashPerk needs to be in your server. Head to [clashperk.com](https://clashperk.com) and use the **Add to Discord / Invite** link, then pick your server and approve the requested permissions.

{% hint style="info" %}
Already have ClashPerk in another server? You can also run <mark style="color:blue;">**/invite**</mark> from any server where the bot is present to get the invite link.
{% endhint %}

</details>

#### Link a clan to your Discord Server (required)

<details>

<summary>Link to Server</summary>

The following command allows you to quickly add your clan to the server, enabling the bot to track it.

<mark style="color:blue;">**/setup clan**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`

</details>

#### Set a default clan for a channel (optional)

<details>

<summary>Link to Channel</summary>

Allows you to link a clan to a channel. (one clan per channel)

<mark style="color:blue;">**/setup clan**</mark>**&#x20;**<mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**clan\_channel:**</mark> `#general`

* [x] This link enables you to run commands without entering or selecting a clan tag.
* [x] You can repeat the process to link the clan in multiple channels.

</details>

#### Create a Clan Embed (optional)

<details>

<summary>Clan Embed</summary>

Clan embed is for showcasing your clans in a public channel.

<mark style="color:blue;">**/setup clan-embed**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`

</details>

#### Enable Logs (optional)

**Initiate Setup**

If you don't select a channel, it defaults to the current channel.

<mark style="color:blue;">**/setup clan-logs**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**action:**</mark> `Enable` <mark style="color:purple;">**channel:**</mark> `#channel`

Pick the logs you want from the menu that appears — clan, capital, war, and player logs are all available.

{% hint style="info" %}
For every log and what it posts, see [logs.md](../features/logs.md "mention")
{% endhint %}

**Disable a Log**

<mark style="color:blue;">**/setup clan-logs**</mark>**&#x20;**<mark style="color:purple;">**action:**</mark> `Disable` <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`
