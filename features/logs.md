---
description: A detailed explanation of every automatic log ClashPerk can post.
icon: scroll
---

# Logs

Logs are automatic messages ClashPerk posts to Discord whenever something happens in your clan or server — a member joins, a war attack lands, a raid weekend ends, and much more.

* **Enabled per clan.** Turn on only the logs you want, for each clan separately.
* **Routed anywhere.** Send each log to its own channel or thread.
* **Two families.** [**Clan logs**](#clan-logs-setup) track in-game activity; [**server logs**](#server-logs) track ClashPerk actions on your Discord server.

{% hint style="info" %}
Logs are **not** truly real-time. ClashPerk polls the official Clash of Clans API, so a short delay between the in-game event and the posted message is normal.

[How does ClashPerk track game data?](../faq.md#how-does-clashperk-track-game-data)
{% endhint %}

***

## Clan logs setup

Run the command, pick **Enable**, then choose the logs you want from the menu that appears.

{% stepper %}
{% step %}
### Run the command

<mark style="color:blue;">**/setup clan-logs**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**action:**</mark> `Enable` <mark style="color:purple;">**channel:**</mark> `#channel`
{% endstep %}

{% step %}
### Select your logs

A menu appears — pick one or more logs to turn on for this clan. Run the command again with **action** `Disable` to switch any of them off later.
{% endstep %}

{% step %}
### Fine-tune (optional)

Set a `color` for embed-style logs, or a `ping_role` for the Town Hall Upgrade log.
{% endstep %}
{% endstepper %}

<details>

<summary>All command options</summary>

| Option | Description |
| --- | --- |
| `clan` | The clan to set logs up for. |
| `action` | `Enable` or `Disable` the selected logs. |
| `channel` | Where to post (defaults to the current channel). |
| `color` | Hex color for embed logs (donation, clan games, last seen, etc.). |
| `ping_role` | Role to ping — Town Hall Upgrade log only. |

</details>

### Log shapes at a glance

Logs behave in one of three ways. Knowing which helps you pick the right channel for each.

| Shape | Behaviour | Examples |
| --- | --- | --- |
| **Event post** | A new message each time something happens. | Join/Leave, War Attack, Capital Gold Contribution |
| **Self-updating embed** | One message that edits itself as things change. | Last Seen, War Embed, Clan Games |
| **Summary** | A recap posted on a schedule. | Daily/Weekly/Monthly Donations, Legend Daily Summary |

***

## <mark style="color:green;">Clan Logs</mark>

#### <mark style="color:green;">Clan Achievements Log</mark>

Posts when the clan hits a milestone: **clan level up**, **War League** promotion/demotion, **Capital League** promotion/demotion, or **Capital Hall** level up.

#### <mark style="color:green;">Donation Log</mark>

Tracks troop donations. Choose how often it posts:

{% tabs %}
{% tab title="Instant" %}
Posts whenever someone donates or receives troops.

<details>

<summary>Example</summary>

> **Donation Log — Clan Name**
> 🔼 `PlayerName` donated **25** troops
> 🔽 `PlayerName` received **12** troops

</details>
{% endtab %}

{% tab title="Daily" %}
Posts a once-a-day donation summary.
{% endtab %}

{% tab title="Weekly" %}
Posts a summary every Monday.
{% endtab %}

{% tab title="Monthly" %}
Posts when the league season ends — every 28 days, on a Monday at 05:00 UTC.
{% endtab %}
{% endtabs %}

#### <mark style="color:green;">Clan Games Embed Log</mark>

Posts a Clan Games leaderboard that updates itself throughout the event — points, average, and tier progress.

#### <mark style="color:green;">Last Seen Embed Log</mark>

Posts one message and keeps it updated (roughly every 30 minutes) with each member's estimated activity.

* Uses signals like donations, trophy changes, clan games, and capital activity.

<details>

<summary>Example</summary>

> **Last Seen — Clan Name**
> `15m` PlayerOne
> `2h`  PlayerTwo
> `1d`  PlayerThree
> _Updated every ~30 min_

</details>

See [How does last seen work?](../faq.md#how-does-last-seen-work).

#### <mark style="color:green;">Legend Attacks Daily Summary Log</mark>

Posts a daily Legend League recap — offense gained, defense lost, and final placement.

{% hint style="info" %}
Numbers can be slightly off when an offense and a defense happen between two API polls.
{% endhint %}

***

## <mark style="color:purple;">Capital Logs</mark>

#### <mark style="color:purple;">Clan Capital Weekly Summary Log</mark>

Posts after the raid weekend ends — total raid loot and capital gold contribution, with a graphic similar to the in-game summary.

#### <mark style="color:purple;">Capital Gold Contribution Log</mark>

Posts each time a member contributes capital gold.

#### <mark style="color:purple;">Capital Gold Raid Log</mark>

Posts each time a member completes a capital raid attack.

***

## <mark style="color:red;">War Logs</mark>

#### <mark style="color:red;">War Attack Log</mark>

Posts a message for every attack made during a regular Clan War.

<details>

<summary>Example</summary>

> **War Attack — Clan Name vs Opponent**
> ⭐⭐⭐ `PlayerName` (TH15) → #4 · **100%**

</details>

#### <mark style="color:red;">CWL Attack Log</mark>

Posts a message for every attack made during CWL.

#### <mark style="color:red;">War Embed Log</mark>

Posts one embed per war and updates it as the war runs — recent attacks, war state, war size, key stats, and a Town Hall breakdown.

#### <mark style="color:red;">War Missed Attacks Log</mark>

Posts a list of players who missed attacks, split by **1 missed** vs **2 missed**.

#### <mark style="color:red;">CWL Embed Log</mark>

Posts one embed per CWL round and keeps it updated.

#### <mark style="color:red;">CWL Missed Attacks Log</mark>

Posts a list of players who missed their CWL attacks.

#### <mark style="color:red;">CWL Lineup Change Log</mark>

Logs CWL lineup changes as they happen — who was added and who was removed.

#### <mark style="color:red;">CWL Monthly Summary Log</mark>

Posts a graphic summarizing the CWL season placements.

***

## <mark style="color:blue;">Player Logs</mark>

#### <mark style="color:blue;">Member Join/Leave Log</mark>

Tracks members joining and leaving your clan.

* **On join:** Town Hall, trophies, hero levels, war stars, rushed %, join source, member count, time.
* **On leave:** Town Hall, trophies, donations at leave, and join source (if known).

<details>

<summary>Example</summary>

> 🟢 **Joined** · `PlayerName` (#TAG)
> TH15 · 5,200 🏆 · heroes 90/90/65/45 · 1,250 war stars · 6% rushed
>
> 🔴 **Left** · `PlayerName` (#TAG)
> TH14 · 4,900 🏆 · 310 donations

</details>

#### <mark style="color:blue;">Role Change Log</mark>

Tracks in-game promotions and demotions — who changed, the old and new role, and when.

#### <mark style="color:blue;">Name Change Log</mark>

Posts when a member changes their in-game name.

#### <mark style="color:blue;">Town Hall Upgrade Log</mark>

Posts when a member upgrades their Town Hall.

* Also shows the % of troop upgrades remaining.
* Optional: ping a role with `ping_role` when it fires.

#### <mark style="color:blue;">War Preference Log</mark>

Posts when a member changes their war preference — opt-in vs opt-out.

#### <mark style="color:blue;">Ranked Battle League Change Log</mark>

Posts when a member's Home Village ranked league changes — the old and new league.

***

## <mark style="color:orange;">Server Logs</mark>

Server logs track ClashPerk's own actions on your Discord server rather than in-game events. Set them up with:

<mark style="color:blue;">**/setup server-logs**</mark> <mark style="color:purple;">**log\_type:**</mark> `Flag Alert Log` <mark style="color:purple;">**channel:**</mark> `#channel`

| Log | Posts when |
| --- | --- |
| **Flag Alert Log** | A flagged player (ban/strike) joins one of your clans. See [Flags (Ban/Strike)](flags-ban-strike.md). |
| **Roster Change Log** | A member is added to or removed from a [roster](rosters/README.md). |
| **Maintenance Break Log** | The Clash of Clans API enters or leaves a maintenance break. |
| **Welcome Log** | A new member is welcomed after linking their account. |

Run the command with `disable` to turn a server log off.
