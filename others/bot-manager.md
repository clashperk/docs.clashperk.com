---
icon: robot
description: >-
  Let trusted members run ClashPerk's admin commands without giving them
  Manage Server permission on Discord.
---

# Bot Manager

Most ClashPerk setup commands — clan logs, auto-roles, reminders, linking players for other people — need the **Manage Server** permission on Discord. That permission also lets someone change your whole server, so you may not want to hand it to every clan leader or co-leader.

The **Bot Manager** role solves this. Anyone with the role can use all of ClashPerk's admin commands, but gets no extra Discord permissions.

{% hint style="info" %}
**Typical use:** give it to your clan leaders and co-leaders so they can set up logs, manage rosters, and link members — while only server admins keep Manage Server.
{% endhint %}

## Set it up

{% stepper %}
{% step %}
### Run the command

<mark style="color:blue;">**/config**</mark> <mark style="color:purple;">**bot\_manager\_role:**</mark> `@Bot Manager`

You need **Manage Server** or an existing Bot Manager role to run it, so only hand the role to people you trust.
{% endstep %}

{% step %}
### Add more roles or remove one (optional)

Run <mark style="color:blue;">**/config**</mark> on its own and press **Manage Permissions**. Pick the role type, then choose one or more roles. Clear the selection to remove them all.

You can also change these from the dashboard's server settings.
{% endstep %}
{% endstepper %}

## Who can use admin commands

A member can use an admin command if **any** of these is true:

* They have the **Manage Server** permission.
* They have the **Bot Manager** role.
* They have the narrower manager role for that command (below).

***

## Narrower manager roles

Need someone to handle just one job? Give them a scoped role instead of full Bot Manager.

| Role | Lets members | Set with |
| --- | --- | --- |
| **Roster Manager** | Create, edit, clone, delete, post and ping [rosters](../features/rosters/README.md), and manage roster members and groups. | <mark style="color:blue;">**/config**</mark> <mark style="color:purple;">**roster\_manager\_role:**</mark> `@Role` |
| **Links Manager** | Link and unlink players for other members, and refresh another member's auto-roles. | <mark style="color:blue;">**/config**</mark> <mark style="color:purple;">**links\_manager\_role:**</mark> `@Role` |
| **Flags Manager** | Create and delete [flags (bans/strikes)](../features/flags-ban-strike.md). | <mark style="color:blue;">**/config**</mark> <mark style="color:purple;">**flags\_manager\_role:**</mark> `@Role` |

{% hint style="info" %}
Want to open just **one** command to someone? Use the [whitelist](whitelist.md) instead.
{% endhint %}
