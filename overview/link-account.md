---
description: >-
  Link up to 25 Clash of Clans accounts to Discord with /link create. Verify one
  with /verify and the API token from the game's settings.
icon: link
---

# Link and Verify Clash of Clans Accounts

Link your Clash of Clans accounts to your Discord user with <mark style="color:blue;">**/link create**</mark> and your player tag. ClashPerk commands then use your accounts without you entering a tag each time, and auto roles can find you. Verify an account with <mark style="color:blue;">**/verify**</mark> to prove it's yours.

## What does a player tag look like?

A Clash of Clans player tag starts with `#` and uses only these characters: `0 2 8 9 P Y L Q G R J C U V`. There's no letter O: it's always the number zero. Find your tag under your name on your profile in the game. The `#` is optional in commands, and an O you type is read as a zero.

Clan tags use the same characters.

## Link yourself

{% tabs %}
{% tab title="LINK PLAYER" %}
You can link up to 25 villages to your Discord user account.

<mark style="color:blue;">**/link create**</mark> <mark style="color:purple;">**player\_tag:**</mark> `#PLAYER_TAG`

**Link on behalf of someone**

<mark style="color:blue;">**/link create**</mark> <mark style="color:purple;">**player\_tag:**</mark> `#PLAYER_TAG` <mark style="color:purple;">**user:**</mark> `@user-mention`
{% endtab %}

{% tab title="LINK CLAN" %}
You can link one clan to your Discord user account.

<mark style="color:blue;">**/link create**</mark> <mark style="color:purple;">**clan\_tag:**</mark> `#CLAN_TAG`
{% endtab %}
{% endtabs %}

## Verify account

You need the API token from the in-game settings to verify an account.

{% tabs %}
{% tab title="VERIFY AND LINK" %}
<mark style="color:blue;">**/verify**</mark> <mark style="color:purple;">**player:**</mark> `#PLAYER_TAG` <mark style="color:purple;">**token:**</mark> `API_TOKEN`&#x20;
{% endtab %}
{% endtabs %}

### Is my API token safe to share?

Yes, your API token cannot be used to steal your account or gain access to any account-related data. It only verifies your identity with third-party services. The token resets periodically and becomes invalid after each use.

### How do you get your API token?

1. Open Clash of Clans and navigate to **Settings > More Settings**
2. Scroll down to the bottom and click on **`Show`** next to the **API Token**
3. Click **`Copy`** to copy your API token
