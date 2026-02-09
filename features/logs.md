---
description: A detailed explanation of all Logs
icon: scroll
---

# Logs

Logs are automatic messages posted by ClashPerk.

You can enable them per clan. You can send each log to its own channel or thread.

### Set up logs

Run <mark style="color:blue;">**/setup clan-logs**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**channel:**</mark> `#channel`&#x20;

{% hint style="info" %}
Logs are not truly real-time. ClashPerk polls the official API, so short delays can happen.

[#how-does-clashperk-track-game-data](../faq.md#how-does-clashperk-track-game-data "mention")
{% endhint %}

#### Member Join/Leave Log

Tracks members joining and leaving your clan.

* **On join**: Town Hall, trophies, hero levels, war stars, rushed %, join source, member count, time.
* **On leave**: Town Hall, trophies, donations at leave, and join source (if known).

#### Role Change Log

Tracks in-game promotions and demotions.

* Shows who changed role, the old/new role, and when.

#### Donation Log

Tracks troop donations.

{% tabs %}
{% tab title="Instant" %}
Posts whenever someone donates or receives troops.
{% endtab %}

{% tab title="Daily" %}
Posts a daily donation summary.
{% endtab %}

{% tab title="Weekly" %}
Posts every Monday.
{% endtab %}

{% tab title="Monthly" %}
Posts on the last Monday of each month.
{% endtab %}
{% endtabs %}

#### Clan Games Embed Log

Posts a Clan Games leaderboard message. It updates itself throughout the event.

* Shows points, average, and tier progress.

#### Last Seen Embed Log

Posts one message and keeps it updated. Updates run every \~30 minutes.

* Shows estimated activity / last-seen status.
* Uses signals like donations, trophy changes, clan games, capital activity, etc.

See [How does last seen work?](../faq.md#how-does-last-seen-work).

#### Legend Attacks Daily Summary Log

Posts a daily legend league recap.

* Shows offense gained, defense lost, and final placement.

{% hint style="info" %}
Data can be off when offense and defense happen between two API polls.
{% endhint %}

#### Clan Capital Weekly Summary Log

Posts after the raid weekend ends.

* Shows total raid loot and capital gold contribution.
* Includes a graphic similar to the in-game summary.

#### War Embed Log

Posts one embed per war and updates it during the war.

* Shows recent attacks, war state, war size, and key stats.
* Includes a Town Hall breakdown.

#### War Missed Attacks Log

Posts a list of players who missed attacks.

* Splits players by 1 missed vs 2 missed.

#### CWL Embed Log

Posts one embed per CWL round and updates it.

#### CWL Missed Attacks Log

Posts a list of players who missed their CWL attacks.

#### CWL Lineup Change Log

Logs lineup changes as they happen.

* Shows who was added and who was removed.

#### CWL Monthly Summary Log

Posts a graphic summarizing the CWL season placements.

#### Name Change Log

Posts when a member changes their in-game name.

#### Town Hall Upgrade Log

Posts when a member upgrades their Town Hall.

* Also shows the % of troop upgrades remaining.
* Optional: ping a role via `ping_role`.

#### War Preference Log

Posts when a member changes war preference.

* Shows opt-in vs opt-out.
