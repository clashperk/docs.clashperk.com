---
description: >-
  detailed explanation of the /roster create, /roster edit, /roster delete and
  /roster clone
icon: pen
---

# Create, Edit, Delete and Clone Rosters

## Creating a Roster

<mark style="color:blue;">**/roster create**</mark> `[clan] [name] [...options]`

### Roster options

* **Category** - Choose between CWL, WAR, ESPORTS and TROPHIES. CWL shows league as well. TROPHY shows the amount of trophies in the roster.
* **import\_members** - Whether to import members from the clan (<mark style="color:blue;">default</mark>: False)
* **allow\_unlinked** - Whether to allow unlinked members (<mark style="color:blue;">default</mark>: False)
* **max\_members** - Roster size (<mark style="color:blue;">default</mark>: 65)
* **max\_accounts\_per\_user** - How many accounts per user should be allowed (default: unlimited)
* **min\_town\_hall** - Minimum Town Hall level needed to sign up (<mark style="color:blue;">default</mark>: TH 2)
* **max\_town\_hall** - Maximum Town Hall level (<mark style="color:blue;">default</mark>: TH 16)
* **min\_hero\_level** - Minimum combined Hero level need to sign up (<mark style="color:blue;">default</mark>: 0)
* **roster\_role** - The role the players get when they sign up
* **sort\_by** - Sort by Player Name, Discord Name, Discord Username, Town Hall Level, Hero Levels, TH + Hero Levels, Clan Name, Signup Time, Trophies (<mark style="color:blue;">default</mark>: SIGNUP\_TIME)
* **start\_time** - The start time of sign-up. Format: YYYY-MM-DD HH:mm (24 Hours) (<mark style="color:blue;">default</mark>: N/A)
* **end\_time** - The end time of sign-up. Format: YYYY-MM-DD HH:mm (24 Hours) (<mark style="color:blue;">default</mark>: N/A)
* **timezone** - Search timezone by city or country (e.g. London, Singapore, Germany, Stuttgart) (<mark style="color:blue;">default</mark>: UTC)
* **allow\_group\_selection** -  Whether to allow members to select a <mark style="color:purple;">Public</mark> group (<mark style="color:blue;">default</mark>: True)
* **allow\_multi\_signup** - Whether to allow a user to sign up for multiple rosters in the same category (<mark style="color:blue;">default</mark>: True)
* **use\_clan\_alias** - Whether to use clan alias in the roster (created by /alias command) (<mark style="color:blue;">default</mark>: False)
* **color\_code** - Hex color code of the roster embed

{% hint style="info" %}
When setting a Timezone ClashPerk will remember that Timezone for you! (It links the Timezone to your account)
{% endhint %}

## Editing a Roster

<mark style="color:blue;">**/roster edit**</mark>`[roster] [...options]`

* **clan** - change which clan it is connected to
* **name** - change the name of the roster
* **delete\_role** - delete the roster using True
* ... see the options at <mark style="color:purple;">**/roster create**</mark>

## Deleting a Roster

<mark style="color:blue;">**/roster delete**</mark>`[roster]`

{% hint style="danger" %}
Completely deletes the roster.
{% endhint %}

## Cloning a Roster

<mark style="color:blue;">**/roster clone**</mark>** **<mark style="color:purple;">**roster:**</mark>`Roster`<mark style="color:purple;">**name:**</mark>`Name`

Clones the Roster settings to a new Roster without importing the Members from the Source Roster.
