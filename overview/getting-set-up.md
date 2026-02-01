---
description: Let's setup the bot!
icon: lightbulb
---

# Getting set up

#### Link a clan to your Discord Server (required)

<details>

<summary>Link to Server</summary>

The following command allows you to quickly add your clan to the server, enabling the bot to track it.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Link to Server` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

</details>

#### Set a default clan for a channel (optional)

<details>

<summary>Link to Channel</summary>

Allows you to link a clan to a channel. (one clan per channel)

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Link to Channel` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

* [x] This link enables you to run commands without entering or selecting a clan tag.
* [x] You can repeat the process to link the clan in multiple channels.

</details>

#### Create a Clan Embed (optional)

<details>

<summary>Clan Embed</summary>

Clan embed is for showcasing your clans in a public channel.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Clan Embed` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

</details>

#### Enable Logs (optional)

**Initiate Setup**

If you don't select a channel, it defaults to the current channel

<mark style="color:blue;">**/setup clan-logs**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**channel:**</mark> `#channel`

Clan Logs:

* Member Join/Leave Log
* Role Change Log
* Donation Log (Instant/Daily/Weekly/Monthly)
* Clan Games Embed Log
* Last Seen Embed Log
* Legend Attacks Daily Summary Log

Capital Logs:

* Clan Capital Weekly Summary Log

War Logs:

* War Embed Log
* War Missed Attacks Log
* CWL Embed Log
* CWL Missed Attacks Log
* CWL Lineup Change Log
* CWL Monthly Summary Log

Player Logs:

* Name Change Log
* Town Hall Upgrade Log
* War Preference Log

{% hint style="info" %}
You can find more information here [logs.md](../features/logs.md "mention")
{% endhint %}

**Disable a Log**

<mark style="color:blue;">**/setup clan-logs**</mark>**&#x20;**<mark style="color:purple;">**action:**</mark> `Disable` <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG`
