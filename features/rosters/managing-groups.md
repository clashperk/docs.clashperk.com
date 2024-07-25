---
description: >-
  a detailed explanation how to manage Groups. Players will be able to sign up
  with a group. This is used to separat players into different groups in a
  roster. For example Confirmed and Substitute.
---

# 🔧 Managing Groups

## Default Groups

* **Confirmed** - Player that is confirmed to play
* **Substitute** - Player that may be substituted

## Creating a Group

<mark style="color:blue;">**/roster groups create**</mark>** **<mark style="color:purple;">**name:**</mark>`Name [...Options]`

* **name** - Set the Name of the Group
* **group\_role** - Give the Group a Role.
* **selectable** - Whether to allow Members to select this Group. Sets it to <mark style="color:purple;">Public</mark> or <mark style="color:purple;">Private</mark>. If Private only Roster Managers will be able to move players to that Group.

## Modifiying Groups

<mark style="color:blue;">**/roster groups modify**</mark>** **<mark style="color:purple;">**group:**</mark>`Group [...Options]`

* **group** - Select a Group to modify.
* **name** - Change the name of the Group.
* **order** - Change the Order of the Group using a <mark style="color:purple;">number</mark> 1 is the lowest.
* **group\_role** - Give the Group a Role.
* **selectable** - Whether to allow Members to select this Group. Sets it to <mark style="color:purple;">Public</mark> or <mark style="color:purple;">Private</mark>. If Private only Roster Managers will be able to move players to that Group.
* **delete\_role** - Whethere to delete the Role of the Group. To delete set <mark style="color:purple;">True</mark>.
* **delete\_group** - Whether to deleter the Group. To delete set <mark style="color:purple;">True</mark>**.**

{% hint style="info" %}
See [#getting-all-rosters-and-groups](list-rosters-and-groups.md#getting-all-rosters-and-groups "mention")to list the groups.
{% endhint %}
