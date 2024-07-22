---
description: Frequently Asked Questions
---

# FAQ

## Is ClashPerk Legal / Fair Play?

Yes, we always support Fair Play. ClashPerk collects all the data directly from Supercell API.

## Why is the bot not working on my server?

Make sure that ClashPerk has all the required permissions in your Discord. Run the <mark style="color:blue;">**/debug**</mark> command to check missing permissions and other issues.

## What is clan verification?

It is a security feature of the bot to ensure you are a Leader or Co-Leader in the clan and you are not trying to abuse the bot by tracking clans you do not own.

## How does "Last Seen" work?

Due to the API limitation, the bot cannot see who's currently online or who was online in the clan. We determine an approximate last-seen time based on the following points

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

When the bot captures one of these^ activities, the player gains a +1 score or activity. It's the total number of activities seen by the bot.\
It helps us to determine who are the most active or inactive players.

### How does the clan games scoreboard work?

Clan Games points can not be obtained directly from the API. It is only possible by comparing **Games Champion** achievement.\
Our system pulls everyone's **Games Champion** achievement at the beginning of Clan Games and compares it every 10-15 minutes.
