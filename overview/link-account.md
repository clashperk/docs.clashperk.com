---
description: Link and verify accounts!
icon: link
---

# Link account

## Link yourself!

Why bother entering your clan/player tag again and again? Link your accounts and use commands without entering the clan/player tag.

{% tabs %}
{% tab title="LINK PLAYER" %}
You can link up to 25 villages to your Discord user account.

<mark style="color:blue;">**/link create**</mark> <mark style="color:purple;">**player\_tag:**</mark> `#PLAYER_TAG`

**Link on behalf of someone**

<mark style="color:blue;">**/link create**</mark> <mark style="color:purple;">**player\_tag:**</mark> `#PLAYER_TAG` <mark style="color:purple;">**user:**</mark> `@user-mention`
{% endtab %}

{% tab title="LINK CLAN" %}
You can link one clan to your Discord user account.

<mark style="color:blue;">**/link create**</mark> <mark style="color:purple;">**clan\_tag:**</mark> `#PLAYER_TAG`
{% endtab %}
{% endtabs %}

## Verify account

You need the API token from the in-game settings to verify an account.

{% tabs %}
{% tab title="VERIFY AND LINK" %}
<mark style="color:blue;">**/verify**</mark> <mark style="color:purple;">**player\_tag:**</mark> `#PLAYER_TAG` <mark style="color:purple;">**token:**</mark> `API_TOKEN`&#x20;
{% endtab %}
{% endtabs %}

### Is my API token safe to share?

Yes, your API token cannot be used to steal your account or gain access to any account-related data. It only verifies your identity with third-party services. The token resets periodically and becomes invalid after each use.

### How do you get your API token?

1. Open Clash of Clans and navigate to **Settings > More Settings**
2. Scroll down to the bottom and click on **`Show`** next to the **API Token**
3. Click **`Copy`** to copy your API token
