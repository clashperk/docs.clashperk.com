---
icon: user-robot-xmarks
description: Customize the identity of your bot on your Discord server.
---

# Bot Personalizer

Give your bot a unique identity that matches your server's theme. You can either go for a **simple setup** (just change the avatar and nickname — no technical steps required) or a **full custom bot setup** using your own Discord bot token.

***

## Quick Customize (No Token Required)

Don't want to deal with the Discord Developer Portal? No problem. You can still give ClashPerk a personalized look on your server without creating a custom bot.

1. Run the `/bot-personalizer` command in your server.
2. Click the **Quick Customize** button.
3. A modal will appear — upload an avatar image and/or enter a nickname.
4. Submit the modal and the changes will apply instantly.

**Avatar requirements:** PNG, GIF, JPG, or WEBP · 1024×1024 (1:1 aspect ratio) · Max 10MB

This approach keeps things simple — no bot token, no emoji servers, and no technical setup needed.

***

## Full Custom Bot Setup (Token Required)

For a completely branded experience — your own bot name, avatar, and presence — you can connect a custom Discord bot using a token. This setup also requires inviting your bot to our 14 custom emoji servers so that game icons display correctly.

{% hint style="warning" %}
**Security Notice:** Your bot token is a highly sensitive credential. Never share it with anyone. If you suspect it has been compromised, reset it immediately from the Discord Developer Portal.
{% endhint %}

### How to Create and Set Up a Custom Bot

**Step 1 — Run the bot-personalizer command**

Run `/bot-personalizer` in your Discord server and click the **Developer Portal** button to open the Discord Developer Portal in your browser.

<figure><img src="../.gitbook/assets/Step 1.png" alt=""><figcaption><p>Step 1 — Run /bot-personalizer and click Developer Portal</p></figcaption></figure>

**Step 2 — Create a new application**

On the Discord Developer Portal Applications page, click **New Application** in the top-right corner.

<figure><img src="../.gitbook/assets/Step 2.png" alt=""><figcaption><p>Step 2 — Click New Application</p></figcaption></figure>

**Step 3 — Name your bot**

Enter a name for your bot (you can change it later), tick the **Terms of Service** checkbox, then click **Create**.

<figure><img src="../.gitbook/assets/Step 3.png" alt=""><figcaption><p>Step 3 — Enter a name, accept ToS, and click Create</p></figcaption></figure>

**Step 4 — Your application is created**

Your application is now created. You can optionally set an avatar image here. Make note of your **Application ID** — you may need it later.

<figure><img src="../.gitbook/assets/Step 4.png" alt=""><figcaption><p>Step 4 — Application created (optionally set an avatar)</p></figcaption></figure>

**Step 5 — Navigate to OAuth2**

After setting your avatar (if desired), click **Save Changes**, then navigate to the **OAuth2** section in the left sidebar.

<figure><img src="../.gitbook/assets/Step 5.png" alt=""><figcaption><p>Step 5 — Navigate to the OAuth2 section</p></figcaption></figure>

**Step 6 — Open the URL Generator**

Under OAuth2, click **URL Generator** in the left sidebar.

<figure><img src="../.gitbook/assets/Step 6.png" alt=""><figcaption><p>Step 6 — Open OAuth2 → URL Generator</p></figcaption></figure>

**Step 7 — Generate an invite URL**

Under **Scopes**, select **bot**. Under **Bot Permissions**, select **Administrator**. Copy the generated URL at the bottom of the page.

<figure><img src="../.gitbook/assets/Step 7.png" alt=""><figcaption><p>Step 7 — Select bot scope + Administrator permission, copy the URL</p></figcaption></figure>

**Step 8 — Open the invite URL**

Open a **new browser tab** and paste the copied URL into the address bar.

<figure><img src="../.gitbook/assets/Step 8.png" alt=""><figcaption><p>Step 8 — Open a new tab and paste the URL</p></figcaption></figure>

**Step 9 — Add the bot to your server**

Select your Discord server from the dropdown, click **Continue**, then **Authorize**. Once done, close this tab and return to the Developer Portal.

<figure><img src="../.gitbook/assets/Step 9.png" alt=""><figcaption><p>Step 9 — Select your server, authorize, then close the tab</p></figcaption></figure>

**Step 10 — Navigate to the Bot tab and reset the token**

In the Developer Portal, go to the **Bot** section in the left sidebar and click **Reset Token**. Confirm when prompted.

<figure><img src="../.gitbook/assets/Step 10.png" alt=""><figcaption><p>Step 10 — Go to Bot tab and click Reset Token</p></figcaption></figure>

**Step 11 — Copy the bot token**

A token will be displayed — **copy it immediately**, as it will not be shown again. Scroll down to configure additional bot settings.

<figure><img src="../.gitbook/assets/Step 11.png" alt=""><figcaption><p>Step 11 — Copy the token (it won't be shown again)</p></figcaption></figure>

**Step 12 — Configure bot settings**

Scroll down on the Bot page and do the following:
- **Disable** the **Public Bot** toggle so only you can add it to servers.
- **Enable** all three Privileged Gateway Intents: **Presence Intent**, **Server Members Intent**, and **Message Content Intent**.

Click **Save Changes**.

<figure><img src="../.gitbook/assets/Step 12.png" alt=""><figcaption><p>Step 12 — Disable Public Bot and enable all three intents</p></figcaption></figure>

**Step 12.5 — Configure Installation settings**

Navigate to the **Installation** section in the left sidebar. Make sure both **User Install** and **Guild Install** are checked under Installation Contexts, and set the **Install Link** to **None**.

<figure><img src="../.gitbook/assets/Step 13.png" alt=""><figcaption><p>Step 12.5 — Enable both installation contexts and set Install Link to None</p></figcaption></figure>

**Step 13 — Return to Discord and click Let's begin**

Go back to your Discord server where you ran `/bot-personalizer` and click the **Let's begin** button in the ClashPerk message.

<figure><img src="../.gitbook/assets/Step 14.png" alt=""><figcaption><p>Step 13 — Click Let's begin in your Discord server</p></figcaption></figure>

**Step 14 — Submit your bot token**

A **Bot Personalizer** modal will appear. Paste the token you copied in Step 11 into the **Bot Token** field and click **Submit**.

<figure><img src="../.gitbook/assets/Step 15.png" alt=""><figcaption><p>Step 14 — Paste the bot token and click Submit</p></figcaption></figure>

**Step 15 — Your bot is live!**

ClashPerk will set up your custom bot within a few minutes. Once deployed, your bot will appear online in your server with its own name and avatar.

<figure><img src="../.gitbook/assets/Step 16.png" alt=""><figcaption><p>Step 15 — Your custom bot is now online</p></figcaption></figure>

Finally, invite your custom bot to our emoji servers so it can display game icons properly. Join our [support server](https://discord.gg/ppuppun) to get the invite links to the emoji servers.
