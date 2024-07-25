---
description: >-
  The roster management feature provides a comprehensive solution for efficient
  and organized management of CWL/War events.
---

# Rosters

It is designed to streamline the process and prevent duplicate or multiple signups. It offers convenient features such as autocomplete to easily add individual players from your clan family, and the ability to add players in bulk while detecting player tags regardless of their format.

The feature allows you to set the start and end times for the roster and provides a roster settings button for easy management. You can open or close the roster, hide or show signup buttons, enable archive mode, add or remove players, move players, change groups, edit settings and layout, export members, and clear the roster.

User groups can be created for managing roles, and a wide range of restrictions can be set, including the ability for members to select a group, sign up for multiple rosters, or meet specific criteria such as minimum/maximum town hall level or combined hero levels.

The feature also allows for keeping a history of the rosters by closing them instead of deleting or clearing them every month.

## Quick start CWL Roster&#x20;

To create a roster for CWL, use the following command:

<mark style="color:blue;">**/roster create**</mark>** **<mark style="color:purple;">**clan:**</mark>`clan`<mark style="color:purple;">**name:**</mark>`CWL`<mark style="color:purple;">**allow\_multi\_signup:**</mark>`False`<mark style="color:purple;">**category:**</mark>`CWL`

This will generate an Embed which can be posted using:

<mark style="color:blue;">**/roster post**</mark>** **<mark style="color:purple;">**roster:**</mark>`CWL`

<figure><img src="../../.gitbook/assets/Roster Embed" alt=""><figcaption><p>Roster Embed</p></figcaption></figure>

When you decide to close the sign-up period, it is preferred to hide the buttons via the :gear:[button.md](button.md "mention").&#x20;

#### Signing up

Pressing the <mark style="color:green;">Signup</mark> allows a Player to signup. They need to select the Accounts they want to signup. They also may choose a Group. The default Groups are <mark style="color:purple;">Confirmed</mark> and <mark style="color:purple;">Substitue</mark>.  If none are selected it will default to the first Group.

#### Opting out

If a Player wishes to opt out after signing up, they can press the <mark style="color:red;">Opt-out</mark> button. They will then be prompted to select the Accounts they want to opt-out.

#### Managing the roster

The user that has the Manager Roster role can use the :gear:[button.md](button.md "mention") to manage it.

#### Editing the roster

With <mark style="color:purple;">/roster edit</mark> all options can be edited. :pencil2:[create-edit-delete-and-clone-rosters.md](create-edit-delete-and-clone-rosters.md "mention")

#### Refresh Button

Refresh the Roster immediately and apply any changes. Sometimes it takes a little bit for the roster to update.

