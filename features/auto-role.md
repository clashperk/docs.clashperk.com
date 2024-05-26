---
description: >-
  Automatically add Roles in Discord based on the in-game Roles, Leagues, Town
  Halls, etc.
---

# Auto Role

### Clan Roles

Roles will be given based on the roles in the Game (Lead/Co/Elder/Member/Everyone)

<mark style="color:blue;">**/autorole clan-roles**</mark> [`[CLANS]`](#user-content-fn-1)[^1]  `[CO/LEAD_ROLE]` `[MEMBER_ROLE]`&#x20;

<mark style="color:blue;">**/autorole clan-roles**</mark> `[CLAN_TAG]`  `[EVERYONE_ROLE]` [`[ONLY_VERIFIED]`](#user-content-fn-2)[^2]&#x20;

***

### Town Hall Roles

Roles will be given based on the Town Hall levels

<mark style="color:blue;">**/autorole town-hall**</mark> `[TH8_ROLE]`  `[TH10_ROLE]` `[MORE...]`&#x20;

***

### League Roles

Roles will be given based on the Leagues

<mark style="color:blue;">**/autorole leagues**</mark> `[CHAMPION_ROLE]`  `[TITAN_ROLE]` `[LEGEND_ROLE]`&#x20;

***

### Family Roles

The role will be given if they are in the family. <mark style="color:yellow;">(any account within the family)</mark>

<mark style="color:blue;">**/autorole family**</mark> `[FAMILY_ROLE]` &#x20;

***

### Exclusive Family Roles

The role will be given if they are in the family. <mark style="color:yellow;">(all accounts are in the family)</mark>

<mark style="color:blue;">**/autorole family**</mark> `[EXCLUSIVE_FAMILY_ROLE]` &#x20;

***

### Guest Role

The role will be given if they are not in the family.

<mark style="color:blue;">**/autorole family**</mark> `[GUEST_ROLE]` &#x20;

***

### Verified Role

The role will be given to the verified players. <mark style="color:yellow;">(who verified them using the /verify command)</mark>

<mark style="color:blue;">**/autorole family**</mark> `[VERIFIED_ROLE]` &#x20;

***

## Additional Settings

{% tabs %}
{% tab title="Configure Delays" %}
If people temporarily leave their home clans for any reason, they lose their roles. To address this issue, a role removal delay can be enabled.\
Their roles will not be removed immediately but will remain for a specified period.\
However, if they do not return within this time frame, their roles will be removed.\
\
<mark style="color:blue;">**/config**</mark> `role_removal_delays: Off/Duration` &#x20;
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Configure Token Verification" %}
Token verification can be enabled to ensure that only legitimate users are getting the [#clan-roles](auto-role.md#clan-roles "mention") \
Verification can be performed using the <mark style="color:blue;">**/verify**</mark> command with an in-game API token. \
\
<mark style="color:blue;">**/config**</mark> `verified_only_clan_roles: Yes/No` &#x20;
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Toggle Auto Mode" %}
Auto Role updates roles whenever changes are detected in the game. This behaviour can be disabled for manual control using the <mark style="color:blue;">/autorole refresh</mark> command.\
\
<mark style="color:blue;">**/config**</mark> `auto_update_roles: Yes/No` &#x20;
{% endtab %}
{% endtabs %}

[^1]: One or multiple clans can be selected.

[^2]: If enabled, roles will be given to verified players only.
