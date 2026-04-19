---
icon: diagram-nested
description: >-
  Automatically add Roles in Discord based on the in-game Roles, Leagues, Town
  Halls, etc.
---

# Auto Role

### Clan Roles

Roles will be given based on the in-game roles (Lead/Co/Elder/Member/Everyone).

<mark style="color:blue;">**/autorole clan-roles**</mark> [`[CLANS]`](#user-content-fn-1)[^1] `[CO/LEAD_ROLE]` `[MEMBER_ROLE]`

<mark style="color:blue;">**/autorole clan-roles**</mark> `[CLAN_TAG]` `[EVERYONE_ROLE]` [`[ONLY_VERIFIED]`](#user-content-fn-2)[^2]

***

### Town Hall Roles

Roles will be given based on Town Hall levels.

<mark style="color:blue;">**/autorole town-hall**</mark> `[TH8_ROLE]` `[TH10_ROLE]` `[MORE...]`

***

### Builder Hall Roles

Roles will be given based on Builder Hall levels (BH1–BH10).

<mark style="color:blue;">**/autorole builder-hall**</mark> `[BH5_ROLE]` `[BH8_ROLE]` `[MORE...]`

***

### League Roles

Roles will be given based on the player's Home Village league.

<mark style="color:blue;">**/autorole leagues**</mark> `[CHAMPION_ROLE]` `[TITAN_ROLE]` `[LEGEND_ROLE]`

***

### Builder Base League Roles

Roles will be given based on the player's Builder Base league (Wood, Clay, Stone, Copper, Brass, Iron, Steel, Titanium, Platinum, Emerald, Ruby, Diamond).

<mark style="color:blue;">**/autorole builder-leagues**</mark> `[WOOD_ROLE]` `[IRON_ROLE]` `[DIAMOND_ROLE]` `[MORE...]`

***

### War Role

A role given to members who are currently in the war lineup for a specific clan.

<mark style="color:blue;">**/autorole wars**</mark> <mark style="color:purple;">**clan:**</mark> `#CLAN_TAG` <mark style="color:purple;">**role:**</mark> `[WAR_ROLE]`

Each clan can have its own war role. The role is assigned when war starts and removed when it ends.

***

### EOS Push Role

A role given to members who are participating in an End-of-Season push for selected clans.

<mark style="color:blue;">**/autorole eos-push**</mark> <mark style="color:purple;">**role:**</mark> `[EOS_PUSH_ROLE]` <mark style="color:purple;">**clans:**</mark> `#CLAN_TAG`

***

### Family Roles

The role will be given if they are in the family. <mark style="color:yellow;">(any account within the family)</mark>

<mark style="color:blue;">**/autorole family**</mark> `[FAMILY_ROLE]`

***

### Exclusive Family Roles

The role will be given if they are in the family. <mark style="color:yellow;">(all accounts are in the family)</mark>

<mark style="color:blue;">**/autorole family**</mark> `[EXCLUSIVE_FAMILY_ROLE]`

***

### Guest Role

The role will be given if they are not in the family.

<mark style="color:blue;">**/autorole family**</mark> `[GUEST_ROLE]`

***

### Verified Role

The role will be given to the verified players. <mark style="color:yellow;">(who verified them using the /verify command)</mark>

<mark style="color:blue;">**/autorole family**</mark> `[VERIFIED_ROLE]`

***

### Account Linked Role

This role will be given to the linked users.

<mark style="color:blue;">**/autorole family**</mark> `[ACCOUNT_LINKED_ROLE]`

***

### List Configured Roles

View all roles currently configured in the server.

<mark style="color:blue;">**/autorole list**</mark>

***

### Refresh Roles

Manually trigger a role refresh for all members.

<mark style="color:blue;">**/autorole refresh**</mark>

***

### Disable a Role Type

Remove the configuration for a specific role type without affecting other settings.

<mark style="color:blue;">**/autorole disable**</mark> <mark style="color:purple;">**type:**</mark> `town-hall`

***

## <mark style="color:yellow;">Additional Settings</mark>

{% tabs %}
{% tab title="Role Removal Delay" %}
<mark style="color:yellow;">If people temporarily leave their home clans for any reason, they lose their roles. To address this issue, a role removal delay can be enabled.</mark>\ <mark style="color:yellow;">Their roles will not be removed immediately but will remain for a specified period.</mark>\ <mark style="color:yellow;">However, if they do not return within this time frame, their roles will be removed.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `role_removal_delays: Off/Duration`
{% endtab %}

{% tab title="Role Addition Delay" %}
<mark style="color:yellow;">A delay can be set before roles are added to new members. Useful if you want to verify a member has settled in before granting roles.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `role_addition_delays: Off/Duration`
{% endtab %}

{% tab title="Delay Exclusion" %}
<mark style="color:yellow;">Certain role types can be excluded from the removal delay — for example, guest roles or league roles can still be removed instantly even when a global delay is active.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `delay_exclusion_roles: town-hall-roles / league-roles / guest-role / ...`
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Token Verification" %}
<mark style="color:yellow;">Token verification can be enabled to ensure that only legitimate users receive</mark> [#clan-roles](auto-role.md#clan-roles "mention")\ <mark style="color:yellow;">Verification is performed using the</mark> <mark style="color:yellow;">**/verify**</mark> <mark style="color:yellow;">command with an in-game API token.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `verified_only_clan_roles: Yes/No`
{% endtab %}

{% tab title="Allow Non-Linked Members" %}
<mark style="color:yellow;">By default, members without a linked account are skipped. Enable this to still assign applicable roles to unlinked members.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `allow_not_linked: Yes/No`
{% endtab %}

{% tab title="Toggle Auto Mode" %}
<mark style="color:yellow;">Auto Role updates roles whenever changes are detected in the game. This behavior can be disabled for manual control using the /autorole refresh command.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `auto_update_roles: Yes/No`
{% endtab %}

{% tab title="Force Refresh" %}
<mark style="color:yellow;">When enabled, every role refresh cycle re-evaluates all members regardless of whether changes were detected. Useful for servers where role drift occurs.</mark>\
\
<mark style="color:blue;">**/autorole config**</mark> `always_force_refresh_roles: Yes/No`
{% endtab %}
{% endtabs %}

[^1]: One or multiple clans can be selected.

[^2]: If enabled, roles will be given to verified players only.
