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

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Link to Channel`<mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

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

{% tabs %}
{% tab title="New Log System" %}
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
{% endtab %}

{% tab title="Old Log System" %}
**Legend Log**

Posts daily legend attack summary of the day.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Legend Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

**Capital Log**

Posts Capital Raid and Contribution summary at the end of the Raid.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Capital Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

**Donation Log**

Posts an update whenever someone donates or receives troops.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Donation Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

* [x] Set the frequency of the donation (**Daily/Weekly/Monthly** or Continuous)

**Clan Games Log**

It posts a leaderboard at the Clan Games's beginning and then updates it throughout the week.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Clan Games` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

**Clan Feed**

Clan Feed is a feature that automatically posts in-game events in a channel.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Clan Feed` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

* [x] Town Hall Upgrade
* [x] War Preference Change
* [x] Player Name Change
* [x] Capital League Change
* [x] Clan War League Change
* [x] Clan Level Up

**Join/Leave Log**

Keeps a log of new members joining and leaving.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Join/Leave Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

**War Log**

Posts an Embed for each war and keeps updating it throughout the war and at the end it posts a list of missed attacks.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `War Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`
{% endtab %}
{% endtabs %}
