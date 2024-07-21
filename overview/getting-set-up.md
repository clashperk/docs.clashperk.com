---
description: Let's setup the bot!
---

# Getting set up

The following command allows you to quickly add your clan to the server which enables the bot to track the clan.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Server Link` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

#### Set a default clan for a channel

<details>

<summary>Link Channel</summary>

Allows you to link a clan to a channel. (one clan per channel)

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Channel Link`<mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

* [x] This link enables you to run commands without entering or selecting a clan tag.
* [x] You can repeat the process to link the clan in multiple channels.

</details>

#### Logs

{% tabs %}
{% tab title="New Log System" %}
#### Initiate Setup

If you don't select a channel it defaults to the current channel

<mark style="color:blue;">**/setup enable**</mark>** **<mark style="color:purple;">**action:**</mark>`Logs / Feed (New)` <mark style="color:purple;">**clan:**</mark>`#CLAN_TAG`<mark style="color:purple;">**channel:**</mark>`#channel`

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

Player Logs:

* Name Change Log
* Town Hall Upgrade Log
* War Preference Log

#### Disable a Log

<mark style="color:blue;">**/setup disable**</mark>** **<mark style="color:purple;">**action:**</mark>`Logs / Feed (New)` <mark style="color:purple;">**clan:**</mark>`#CLAN_TAG`<mark style="color:purple;">**channel:**</mark>`#channel`
{% endtab %}

{% tab title="Old Log System" %}
#### Legend Log

Posts daily legend attack summary of the day.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Legend Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

#### Capital Log

Posts Capital Raid and Contribution summary at the end of the Raid.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Capital Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

#### Donation Log

Posts an update whenever someone donates or receives troops.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Donation Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

* [x] Set the frequency of the donation (**Daily/Weekly/Monthly** or Continuous)

#### Clan Games Log

It posts a leaderboard at the Clan Games's beginning and then updates it throughout the week.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Clan Games` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

#### Clan Feed

Clan Feed is a feature that automatically posts in-game events in a channel.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Clan Feed` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

* [x] Town hall upgrade
* [x] War preference change
* [x] Player name change
* [x] Capital league change
* [x] Clan War League change
* [x] Clan level up

#### Join/Leave Log

Keeps a log of new members joining and leaving.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Join/Leave Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

#### War Log

Posts an Embed for each war and keeps updating it throughout the war and at the end it posts a list of missed attacks.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `War Log` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`
{% endtab %}
{% endtabs %}

#### Create a Clan Embed

<details>

<summary>Clan Embed</summary>

Clan embed is for showcasing your clans in a public channel.

<mark style="color:blue;">**/setup enable**</mark> <mark style="color:purple;">**option:**</mark> `Clan Embed` <mark style="color:purple;">**tag:**</mark> `#CLAN_TAG`

</details>
