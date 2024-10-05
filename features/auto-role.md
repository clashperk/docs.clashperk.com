---
description: >-
  Automatically add Roles in Discord based on the in-game Roles, Leagues, Town
  Halls, etc.
icon: diagram-nested
---

# Auto Role

### Clan Roles

Roles will be given based on the roles in the Game (Lead/Co/Elder/Member/Everyone)

<mark style="color:blue;">**/autorole clan-roles**</mark> [`[CLANS]`](#user-content-fn-1)[^1] `[CO/LEAD_ROLE]` `[MEMBER_ROLE]`

<mark style="color:blue;">**/autorole clan-roles**</mark> `[CLAN_TAG]` `[EVERYONE_ROLE]` [`[ONLY_VERIFIED]`](#user-content-fn-2)[^2]

***

### Town Hall Roles

Roles will be given based on the Town Hall levels

<mark style="color:blue;">**/autorole town-hall**</mark> `[TH8_ROLE]` `[TH10_ROLE]` `[MORE...]`

***

### League Roles

Roles will be given based on the Leagues

<mark style="color:blue;">**/autorole leagues**</mark> `[CHAMPION_ROLE]` `[TITAN_ROLE]` `[LEGEND_ROLE]`

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

## <mark style="color:yellow;">Additional Settings</mark>

{% tabs %}
{% tab title="Configure Delays" %}
<mark style="color:yellow;">If people temporarily leave their home clans for any reason, they lose their roles. To address this issue, a role removal delay can be enabled.</mark>\ <mark style="color:yellow;">Their roles will not be removed immediately but will remain for a specified period.</mark>\ <mark style="color:yellow;">However, if they do not return within this time frame, their roles will be removed.</mark>\
\
<mark style="color:blue;">**/config**</mark> `role_removal_delays: Off/Duration`
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Configure Token Verification" %}
<mark style="color:yellow;">Token verification can be enabled to ensure that only legitimate users are getting the</mark> [#clan-roles](auto-role.md#clan-roles "mention") \ <mark style="color:yellow;">Verification can be performed using the</mark> <mark style="color:yellow;">**/verify**</mark> <mark style="color:yellow;">command with an in-game API token.</mark>\
\
<mark style="color:blue;">**/config**</mark> `verified_only_clan_roles: Yes/No`
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Toggle Auto Mode" %}
<mark style="color:yellow;">Auto Role updates roles whenever changes are detected in the game. This behaviour can be disabled for manual control using the /autorole refresh command.</mark>\
\
<mark style="color:blue;">**/config**</mark> `auto_update_roles: Yes/No`
{% endtab %}
{% endtabs %}

[^1]: One or multiple clans can be selected.

[^2]: If enabled, roles will be given to verified players only.
