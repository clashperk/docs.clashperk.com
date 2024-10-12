---
icon: circle-info
description: Frequently Asked Questions
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
* [x] Wttacked in war (CWL/Regular/Friendly)
* [x] Artilleries, Monolith, Walls, Builder huts, Inferno towers, Mortars, Xbows, Spell towers, and Scattershots destroyed

### What is activity score?

Whenever the bot captures an activity (mentioned above), the player gets a +1 score. This score reflects the total number of activities the bot has seen for that player, helping us determine who are the most active or inactive members.

### How does the clan games scoreboard work?

Clan Games points can't be directly pulled from the API. Instead, we track the **Games Champion** achievement. At the start of Clan Games, we capture each player's progress, and then compare it every 10-15 minutes. The difference shows how many points they've earned during the event, and this updates the scoreboard.

### **Why is Gold/Elixir Looted 0 for Some Players?**

Once a player hits 2 billion in looted Gold or Elixir, the API stops increasing the count. This is an API limitation that affects players who reach this cap.
