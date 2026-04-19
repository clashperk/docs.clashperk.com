---
description: Automatically format Discord nicknames using in-game data.
icon: tag
---

# Nickname

ClashPerk can automatically set Discord nicknames based on a custom template. You can define separate formats for family members and non-family members.

<mark style="color:blue;">**/nickname config**</mark>

***

### Family Nickname Format

Applied to members who are in the family (linked to a tracked clan).

<mark style="color:blue;">**/nickname config**</mark> <mark style="color:purple;">**family\_nickname\_format:**</mark> `{TH} | {NAME} | {ROLE}`

Must include at least one name variable: `{PLAYER_NAME}` or `{DISCORD_NAME}` or `{DISCORD_USERNAME}`.

### Non-Family Nickname Format

Applied to members who are linked but not in any tracked clan.

<mark style="color:blue;">**/nickname config**</mark> <mark style="color:purple;">**non\_family\_nickname\_format:**</mark> `{NAME}`

Cannot include clan-specific variables like `{CLAN}`, `{ALIAS}`, or `{ROLE}`.

Set either format to `none` to disable it.

***

### Available Variables

| Variable | Description |
|----------|-------------|
| `{NAME}` or `{PLAYER_NAME}` | In-game player name |
| `{TH}` or `{TOWN_HALL}` | Town Hall level |
| `{TH_SMALL}` or `{TOWN_HALL_SMALL}` | Town Hall level (smaller format) |
| `{ROLE}` or `{CLAN_ROLE}` | In-game clan role (Lead, Co-Lead, Elder, Member) |
| `{ALIAS}` or `{CLAN_ALIAS}` | Clan alias |
| `{ALIASES}` or `{CLAN_ALIASES}` | All clan aliases |
| `{CLAN}` or `{CLAN_NAME}` | Clan name |
| `{DISCORD}` or `{DISCORD_NAME}` | Discord display name |
| `{USERNAME}` or `{DISCORD_USERNAME}` | Discord username |

**Example formats:**

* `{NAME} | {TH} | {ROLE}` → `WarriorKing | TH16 | Co-Lead`
* `{ROLE} | {TH} | {NAME}` → `Lead | TH16 | WarriorKing`
* `{NAME} | {TH} | {ALIAS}` → `WarriorKing | TH16 | WR`

***

### Role Labels

The `{ROLE}` variable uses short labels. You can customize them from the `/nickname config` menu.

| Role | Default Label |
|------|--------------|
| Leader | `Lead` |
| Co-Leader | `Co-Lead` |
| Elder | `Eld` |
| Member | `Mem` |

***

### Auto Updates

<mark style="color:blue;">**/nickname config**</mark> <mark style="color:purple;">**change\_nicknames:**</mark> `Yes`

When enabled, nicknames update automatically alongside Auto Role.

{% hint style="info" %}
Auto Role must be enabled for nickname changes to run automatically. Use `/autorole refresh` to manually trigger a refresh, or nicknames also update when an account is linked.
{% endhint %}
