---
icon: link
description: >-
  Show a card for Clash of Clans player, clan, army and base links that members
  share in your channels.
---

# Link Parsing

{% hint style="info" %}
🧪 **Beta** — Link parsing is in beta. Some features may still change as we refine them.
{% endhint %}

When a member shares a Clash of Clans link from the game, ClashPerk posts a card for it, so everyone can see the player, clan, army or base without opening the game.

It's off by default. A server's admins choose which kinds of links get a card, and in which channels.

***

## Supported Links

| Link | Shared from the game as | Card |
|---|---|---|
| **Player** | Share profile, or Add friend | The player's profile, like `/player` |
| **Clan** | Share clan | The clan's profile, like `/clan` |
| **Army** | Share army in the army builder | The army's troops and spells with a copy button, like `/army` |
| **Base** | Share layout | The base layout with a copy link, like `/layout` |

These are `link.clashofclans.com` links. Other game links, such as creator codes or settings links, are ignored.

***

## Setting It Up

Open **Server Settings** on the [ClashPerk Dashboard](https://app.clashperk.com) and find **Link parsing**. Each kind of link has its own settings:

* **On or off.** Turn on only the kinds of links you want.
* **Channels and categories.** Cards are posted only where you pick. A category covers every channel in it, including ones added later. Threads follow their parent channel.
* **Post as.** How the card is posted:

| Option | What happens |
|---|---|
| **Reply to the message** *(default)* | The card replies to the member's message |
| **Post as a new message** | The card is posted on its own, with a small line saying who shared it |
| **Replace the message** | The card is posted on its own and the member's message is deleted |

**Replace the message** only deletes a message that is nothing but game links, and only when ClashPerk has the **Manage Messages** permission. Otherwise it replies.

Click **Save** to apply your changes.

{% hint style="warning" %}
ClashPerk is waiting for Discord to let it read messages. Until then, links only get a card when the message mentions ClashPerk.
{% endhint %}

***

## Mention ClashPerk

A message that mentions ClashPerk and has a game link always gets a card, in any channel, even where link parsing is off. This is handy for a one-off link.

***

## When a Link Gets No Card

To keep channels tidy, ClashPerk skips:

* Links in angle brackets, spoilers or code, like `<https://link.clashofclans.com/…>`. Discord doesn't preview these either.
* Messages from bots and webhooks, and edited messages.
* More than 3 links in one message. The first 3 get a card.
* A link that already got a card in the same channel in the last 2 minutes.
* More than one reply per member every 5 seconds, or 5 per channel every 10 seconds.
* Links the game can't find, like a player tag that doesn't exist.

***

## Privacy

ClashPerk reads messages only in the channels you pick, and in messages that mention it. It reads the link and posts the card. It doesn't store the message text. See the [Privacy Policy](https://clashperk.com/privacy).
