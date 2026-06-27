---
icon: ticket
description: >-
  Create and manage support or clan application tickets with private channels,
  staff roles, automated rules, and in-ticket actions.
---

# Ticket System

{% hint style="info" %}
🧪 **Beta** — The Ticket System is available in beta. Some features may still change as we refine it.
{% endhint %}

The Ticket System lets you create **panels** — Discord messages with a button that members click to open a private ticket channel. Each panel supports multiple **application types**, each with its own staff roles, questions, account requirements, and channel settings.

***

## Setting Up a Panel

<mark style="color:blue;">**/ticket-setup**</mark> <mark style="color:purple;">**panel\_name:**</mark> `Applications`

If a panel with that name doesn't exist, one is created automatically. A dashboard opens with **Edit** buttons for every section. Click **Done** when finished, or run `/ticket-setup` again at any time to reopen it.

> You can have multiple panels per server — one for clan applications, one for support, etc.

***

### Step 1 — Embed

The message displayed above the Create Ticket button.

| Field | Description |
|---|---|
| **Title** | Bold heading (max 256 chars) |
| **Description** | Body text — markdown supported (max 2000 chars) |
| **Color** | Hex color for the embed border, e.g. `#5865F2` |

***

### Step 2 — Panel Button

Controls how application types are shown to members.

| Mode | Description |
|---|---|
| **Select Menu** *(default)* | One "Create Ticket" button opens a dropdown of types |
| **Buttons** | One button per type shown directly — max 5 types |

In Select Menu mode you can customise the button's label, emoji, and style. In Buttons mode, each type gets its own button configured under Application Types.

***

### Step 3 — Application Types

Each type is a separate option shown when a member clicks the ticket button. If only one type exists, the selection step is skipped.

**To add a type:** click **Edit** → **Add Type**, enter a label and optional emoji (Unicode or custom Discord emoji).

**To edit a type:** click **Edit / Delete** next to it. Each type has its own settings:

#### Staff Roles

| Role type | What it does |
|---|---|
| **Ping roles** | Notified when the ticket opens; get full channel access including Manage Messages |
| **Viewer roles** | Can see and send messages in the ticket but cannot manage it |
| **Add roles** | Automatically added to the ticket creator when the ticket opens |
| **Remove roles** | Automatically removed from the ticket creator when the ticket opens |

#### Apply Rules

Gates checked before the ticket channel is created. **Require linked account** must be enabled for the TH, trophy, and league checks to apply.

| Rule | Description |
|---|---|
| **Require linked account** | Member must have a Clash of Clans account linked via `/link add` |
| **TH minimum** | Linked account must be at least this Town Hall level |
| **Min trophies** | Linked account must have at least this many trophies |
| **Min league tier** | Linked account must be in this league or higher |
| **Create staff thread** | Opens a private thread for staff when the ticket is created |
| **Auto-sleep after inactivity** | Automatically puts the ticket to sleep after N hours with no reply from the creator |
| **Allow claiming** | Staff can claim exclusive ownership — once claimed, all other staff and viewer roles lose access until unclaimed |

#### Questions

Up to **5** questions shown in a pop-up modal before the ticket opens. Each can be marked required or optional.

#### Categories

Discord categories the ticket channel is moved to as its status changes.

| Category | When used |
|---|---|
| **Open** | Channel is placed here when first created |
| **Sleep** | Channel moves here when put to sleep |
| **Closed** | Channel moves here when closed |

#### Channel Naming

Controls what the ticket channel is called. Available tokens:

| Token | Example | Description |
|---|---|---|
| `{count}` | `0042` | Sequential ticket number (zero-padded) |
| `{user}` | `johndoe` | Creator's Discord username |
| `{account_name}` | `playerone` | Linked CoC account name |
| `{account_th}` | `15` | Linked account Town Hall level |

**Default:** `ticket-{count}` → `ticket-0001`

#### Reordering Types

When 2 or more types exist, a **Reorder** button appears. Click it to open a select menu — choose all types in your desired order and submit.

***

### Step 4 — Saved Replies

Pre-written message templates that staff can send inside any ticket with the **Reply** button. Configured at server level and shared across all panels.

Templates support these variables. Any unknown variable prompts a fill-in form when the reply is sent.

| Variable | Resolves to |
|---|---|
| `{user_mention}` | Mention of the ticket creator |
| `{user_name}` | Creator's Discord username |
| `{account_name}` | Linked CoC account name |
| `{account_th}` | Linked account Town Hall level |
| `{account_heroes}` | Linked account hero levels |
| `{clan_name}` | Attached clan name |
| `{clan_tag}` | Attached clan tag |
| `{clan_link}` | Clan profile deep link |
| `{clan_leader}` | Clan leader name |
| `{clan_leader_mention}` | Clan leader mention |
| `{ticket_count}` | Ticket number |
| `{ticket_status}` | Current ticket status |
| `{server_name}` | Discord server name |

***

### Step 5 — Logging

Send events to specific channels for record-keeping.

| Event | When it fires |
|---|---|
| **Button click** | A member clicks the Create Ticket button |
| **Status change** | A ticket is opened, closed, put to sleep, reopened, claimed, or unclaimed |
| **Ticket close** | A ticket channel is deleted (transcript attached) |

***

### Step 6 — Extra Buttons

Add extra utility buttons to the panel post alongside the Create Ticket button. Members can click these without opening a ticket first.

**Two button types:**

| Type | How to add | Description |
|---|---|---|
| **Command button** | Add Command Button → pick a preset | Dispatches to a bot command when clicked |
| **URL button** | Add URL Button → enter label + URL | Opens an external link |

**Available command button presets:**

| Preset | What it does |
|---|---|
| **Link Account** | Opens the account linking flow so members can link their CoC account |

**Options per button:** Label, Emoji, Style (Primary / Secondary / Success / Danger — command buttons only). Up to **10 extra buttons** per panel.

**Placement:** Toggle between **Same Row** (extra buttons join the Create Ticket row, spilling to the next row when > 5) and **New Row** (extra buttons always start on a separate row below the Create Ticket button).

> After adding or editing extra buttons, run `/ticket-post` again to refresh the live panel message.

***

## Posting a Panel

<mark style="color:blue;">**/ticket-post**</mark> <mark style="color:purple;">**panel\_name:**</mark> `Applications`

<mark style="color:blue;">**/ticket-post**</mark> <mark style="color:purple;">**panel\_name:**</mark> `Applications` <mark style="color:purple;">**channel:**</mark> `#apply`

Posts the panel embed and button to the target channel. Run it again any time to refresh the panel message after making changes.

***

## Managing Tickets

Use these commands inside a ticket channel:

| Command | Description |
|---|---|
| <mark style="color:blue;">**/ticket-sleep**</mark> | Put the ticket to sleep — restricts creator from sending messages, moves to sleep category |
| <mark style="color:blue;">**/ticket-reopen**</mark> | Reopen a sleeping ticket — restores creator access, moves back to open category |
| <mark style="color:blue;">**/ticket-close**</mark> | Close the ticket — moves to closed category |
| <mark style="color:blue;">**/ticket-delete**</mark> | Permanently delete the ticket channel (generates a transcript first) |
| <mark style="color:blue;">**/ticket-info**</mark> | Show ticket details: creator, linked account, status, panel, type, trophies, league |
| <mark style="color:blue;">**/ticket-add**</mark> `[member]` | Add a Discord member to the ticket channel |

***

## In-Ticket Buttons

Every ticket channel contains a summary card with action buttons.

| Button | Who can use it | What it does |
|---|---|---|
| **Reply** | Staff | Send a saved reply template — supports variable fill-in |
| **Set Clan** | Staff | Attach a clan to the ticket from the server's configured clans |
| **Notify Me** | Anyone | Toggle DM notifications when the ticket status changes |
| **Claim 🔒** | Staff *(if enabled)* | Claim exclusive ownership — all other staff and viewer roles lose access |
| **Unclaim 🔓** | Claimer only | Release the claim and restore all staff access |
| **View Account** | Anyone | Show linked CoC account stats |
| **Delete Ticket** | Anyone with access | Close and delete the ticket (asks for confirmation first) |

> The **Claim** button only appears on application types where **Allow claiming** is enabled.

***

## Auto-Sleep

When **Auto-sleep after inactivity** is configured on an application type, the bot automatically puts the ticket to sleep after the set number of hours if the ticket creator hasn't replied. The timer resets each time the creator sends a message. A notification is posted in the ticket channel when it is put to sleep.
