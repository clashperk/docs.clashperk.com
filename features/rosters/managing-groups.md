---
icon: wrench
description: >-
  a detailed explanation how to manage Groups. Players will be able to sign up
  with a group. This is used to separat players into different groups in a
  roster. For example Confirmed and Substitute.
---

# Managing Groups

## Default Groups

* **Confirmed** - The player that is confirmed to play
* **Substitute** - Player that may be substituted

## Creating a Group

<mark style="color:blue;">**/roster groups create**</mark>**&#x20;**<mark style="color:purple;">**name:**</mark> `Name [...Options]`

* **name** - Set the Name of the Group
* **group\_role** - Give the Group a Role.
* **selectable** - Whether to allow Members to select this Group. Sets it to <mark style="color:purple;">Public</mark> or <mark style="color:purple;">Private</mark>. If Private only Roster Managers will be able to move players to that Group.

## Modifying Groups

<mark style="color:blue;">**/roster groups modify**</mark>**&#x20;**<mark style="color:purple;">**group:**</mark> `Group [...Options]`

* **group** - Select a Group to modify.
* **name** - Change the name of the Group.
* **order** - Change the order of the Group using the <mark style="color:purple;">number</mark> 1 as the lowest.
* **group\_role** - Give the Group a Role.
* **selectable** - Whether to allow Members to select this Group. Sets it to <mark style="color:purple;">Public</mark> or <mark style="color:purple;">Private</mark>. If Private only Roster Managers will be able to move players to that Group.
* **delete\_role** - Where to delete the Role of the Group. To delete set <mark style="color:purple;">True</mark>.
* **delete\_group** - Whether to delete the Group. To delete set <mark style="color:purple;">True</mark>**.**

{% hint style="info" %}
See [#getting-all-rosters-and-groups](list-rosters-and-groups.md#getting-all-rosters-and-groups "mention")to list of the groups.
{% endhint %}
