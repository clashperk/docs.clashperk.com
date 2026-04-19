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

***

## <mark style="color:green;">Clan Logs</mark>

#### <mark style="color:green;">Clan Achievements Log</mark>

Posts when the clan reaches a milestone.

* Clan level up, War League promotion/demotion, Capital League promotion/demotion, Capital Hall level up.

#### <mark style="color:green;">Donation Log</mark>

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

#### <mark style="color:green;">Clan Games Embed Log</mark>

Posts a Clan Games leaderboard message. It updates itself throughout the event.

* Shows points, average, and tier progress.

#### <mark style="color:green;">Last Seen Embed Log</mark>

Posts one message and keeps it updated. Updates run approximately every 30 minutes.

* Shows estimated activity / last-seen status.
* Uses signals like donations, trophy changes, clan games, capital activity, etc.

See [How does last seen work?](../faq.md#how-does-last-seen-work).

#### <mark style="color:green;">Legend Attacks Daily Summary Log</mark>

Posts a daily legend league recap.

* Shows offense gained, defense lost, and final placement.

{% hint style="info" %}
Data can be off when offense and defense happen between two API polls.
{% endhint %}

***

## <mark style="color:purple;">Capital Logs</mark>

#### <mark style="color:purple;">Clan Capital Weekly Summary Log</mark>

Posts after the raid weekend ends.

* Shows total raid loot and capital gold contribution.
* Includes a graphic similar to the in-game summary.

#### <mark style="color:purple;">Capital Gold Contribution Log</mark>

Posts each time a member contributes capital gold.

#### <mark style="color:purple;">Capital Gold Raid Log</mark>

Posts each time a member completes a capital raid attack.

***

## <mark style="color:red;">War Logs</mark>

#### <mark style="color:red;">War Attack Log</mark>

Posts a message for every attack made during a Clan War.

#### <mark style="color:red;">CWL Attack Log</mark>

Posts a message for every attack made during CWL.

#### <mark style="color:red;">War Embed Log</mark>

Posts one embed per war and updates it during the war.

* Shows recent attacks, war state, war size, and key stats.
* Includes a Town Hall breakdown.

#### <mark style="color:red;">War Missed Attacks Log</mark>

Posts a list of players who missed attacks.

* Splits players by 1 missed vs 2 missed.

#### <mark style="color:red;">CWL Embed Log</mark>

Posts one embed per CWL round and updates it.

#### <mark style="color:red;">CWL Missed Attacks Log</mark>

Posts a list of players who missed their CWL attacks.

#### <mark style="color:red;">CWL Lineup Change Log</mark>

Logs lineup changes as they happen.

* Shows who was added and who was removed.

#### <mark style="color:red;">CWL Monthly Summary Log</mark>

Posts a graphic summarizing the CWL season placements.

***

## <mark style="color:blue;">Player Logs</mark>

#### <mark style="color:blue;">Member Join/Leave Log</mark>

Tracks members joining and leaving your clan.

* **On join**: Town Hall, trophies, hero levels, war stars, rushed %, join source, member count, time.
* **On leave**: Town Hall, trophies, donations at leave, and join source (if known).

#### <mark style="color:blue;">Role Change Log</mark>

Tracks in-game promotions and demotions.

* Shows who changed role, the old/new role, and when.

#### <mark style="color:blue;">Name Change Log</mark>

Posts when a member changes their in-game name.

#### <mark style="color:blue;">Town Hall Upgrade Log</mark>

Posts when a member upgrades their Town Hall.

* Also shows the % of troop upgrades remaining.
* Optional: ping a role via `ping_role`.

#### <mark style="color:blue;">War Preference Log</mark>

Posts when a member changes war preference.

* Shows opt-in vs opt-out.

#### <mark style="color:blue;">Ranked Battle League Change Log</mark>

Posts when a member's Builder Base league changes.

* Shows the old and new league.
