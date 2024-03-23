---
description: >-
  Automatically add Roles in Discord based on the Roles, Leagues, Town Halls in
  the Game.
---

# Auto Role

## Clan Roles

Roles will be given based on the roles in the Game (Lead/Co/Elder/Member/Everyone)

<mark style="color:blue;">**/autorole clan-roles**</mark> [`[CLANS]`](#user-content-fn-1)[^1]  `[CO/LEAD_ROLE]` `[MEMBER_ROLE]`&#x20;

<mark style="color:blue;">**/autorole clan-roles**</mark> `[CLAN_TAG]`  `[EVERYONE_ROLE]` [`[ONLY_VERIFIED]`](#user-content-fn-2)[^2]&#x20;

***

## Town Hall Roles

Roles will be given based on the Town Hall levels

<mark style="color:blue;">**/autorole town-hall**</mark> `[TH8_ROLE]`  `[TH10_ROLE]` `[MORE...]`&#x20;

***

## League Roles

Roles will be given based on the Leagues

<mark style="color:blue;">**/autorole leagues**</mark> `[CHAMPION_ROLE]`  `[TITAN_ROLE]` `[LEGEND_ROLE]`&#x20;

***

## Family Roles <mark style="color:yellow;">\[NEW]</mark>

The role will be given if they are in the family (any clans that are linked to the server)

<mark style="color:blue;">**/autorole family**</mark> `[FAMILY_ROLE]` &#x20;

***

## Guest Role <mark style="color:yellow;">\[NEW]</mark>

The role will be given if they are not in the family.

<mark style="color:blue;">**/autorole family**</mark> `[GUEST_ROLE]` &#x20;

***

## Verified Role <mark style="color:yellow;">\[NEW]</mark>

The role will be given to the verified players.

<mark style="color:blue;">**/autorole family**</mark> `[VERIFIED_ROLE]` &#x20;

[^1]: One or multiple clans can be selected.

[^2]: If enabled, roles will be given to verified players only.
