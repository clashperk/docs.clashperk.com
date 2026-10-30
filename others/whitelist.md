---
description: Open a single command to a specific user or role, and lock it for everyone else.
icon: unlock
---

# Whitelist

The whitelist controls who can use **one specific command**. Whitelist a user or role for a command and two things happen:

* **They can use it**, even if it normally needs Manage Server or a manager role. A few actions inside a command, such as linking a player to someone else, still check for the matching manager role.
* **Everyone else is blocked** from it, unless they have Manage Server or the [Bot Manager](bot-manager.md) role.

{% hint style="info" %}
**Example:** let your `@War Caller` role run <mark style="color:blue;">**/roster ping**</mark> to remind roster members before war, without giving them any other roster or admin commands.
{% endhint %}

## Whitelist a command

<mark style="color:blue;">**/whitelist**</mark> <mark style="color:purple;">**user\_or\_role:**</mark> `@War Caller` <mark style="color:purple;">**command:**</mark> `/roster ping`

Run it again with another user or role to add more people to the same command.

## See or remove whitelists

| To | Run |
| --- | --- |
| List every whitelisted command | <mark style="color:blue;">**/whitelist**</mark> <mark style="color:purple;">**list:**</mark> `True` |
| Remove a user or role from a command | <mark style="color:blue;">**/whitelist**</mark> <mark style="color:purple;">**user\_or\_role:**</mark> `@War Caller` <mark style="color:purple;">**command:**</mark> `/roster ping` <mark style="color:purple;">**clear:**</mark> `True` |

{% hint style="warning" %}
Once a command has a whitelist, it's locked for everyone not on it — including members who could use it before. Remove all entries to open it again.
{% endhint %}

## Whitelist or manager role?

| Use | When |
| --- | --- |
| **Whitelist** | You want to open one command to someone. Applies to slash commands only — not buttons or menus on the bot's messages. |
| [**Manager roles**](bot-manager.md) | You want someone to manage a whole area (rosters, links, flags, or everything), including the buttons and menus. |
