---
description: Frequently Asked Questions
icon: circle-info
---

# FAQ

## Is ClashPerk Legal / Fair Play?

Yes, we always support Fair Play. ClashPerk collects all the data directly from Supercell API.

## Why is the bot not working on my server?

Make sure that ClashPerk has all the required permissions in your Discord. Run the <mark style="color:blue;">**/debug**</mark> command to check missing permissions and other issues.

## What is clan verification?

To prevent abuse, the bot verifies that you're a leader or co-leader of the clan. This ensures you're not tracking clans you don't own or adding the same clan to multiple servers.

## How does last seen work?

Due to API limitations, the bot can't directly see who is online or recently active. Instead, we estimate a player's last-seen time based on the following activities. These give us a rough idea of when someone was last active in the clan.

* [x] Player name changed
* [x] Troops donated
* [x] Trophies gained in the Legend league
* [x] Versus trophies gained
* [x] Switch clans (leave the current clan and join another)
* [x] Multiplayer attacks won
* [x] War preference changed
* [x] Clan capital gold contributed or looted
* [x] Clan games points scored
* [x] Obstacle removed
* [x] Resources (gold/elixir/dark) looted
* [x] Super Troops boosted
* [x] Goblin stars earned
* [x] Attacked in war (CWL/Regular/Friendly)
* [x] Artilleries, Monolith, Walls, Builder huts, Inferno towers, Mortars, Xbows, Spell towers, and Scattershots destroyed

## What is activity score?

Whenever the bot captures an activity (mentioned above), the player gets a +1 score. This score reflects the total number of activities the bot has seen for that player, helping us determine who are the most active or inactive members.

## How does the clan games scoreboard work?

Clan Games points can't be directly pulled from the API. Instead, we track the **Games Champion** achievement. At the start of Clan Games, we capture each player's progress and then compare it every 10-15 minutes. The difference shows how many points they've earned during the event, and this updates the scoreboard.

## **Why is Gold/Elixir Looted 0 for Some Players?**

Once a player hits 2 billion in looted Gold or Elixir, the API stops increasing the count. This is an API limitation that affects players who reach this cap.

## Is my API token safe to share?

Yes, your API token cannot be used to steal your account or gain access to any account-related data. It only verifies your identity with third-party services. The token resets periodically and becomes invalid after each use.

## How does ClashPerk track game data?

ClashPerk tracks game data using the official Clash of Clans API, which does not provide real-time events. The only way to observe changes is by polling the API at safe intervals.

Polling simply means checking the API from time to time to see what the current data looks like, instead of being notified instantly when something changes.

* The official API has rate limits and no push/webhook system, so continuous tracking isn’t possible.
* ClashPerk tracks a large number of clans and players, and completing a full polling cycle takes time.
* Some in-game updates take time to appear in the API itself.

**Examples**

* Trophy changes: A player gains trophies from an attack and loses them in a defense before the next poll. Only the final value is visible, so the intermediate change isn’t recorded.
* War attacks: A war attack happens shortly after a poll and only appears on the next API check, making it seem delayed.
* Clan join/leave: A player leaves a clan and rejoins before the next poll. Since the state briefly changed and reverted, ClashPerk may never observe the leave.

These limitations apply to almost all tracked data. ClashPerk records snapshots based on what the API exposes, so short delays or missed short-lived changes are unavoidable.
