---
description: "Shows defense failure rates of clan members. Options for /stats defense in ClashPerk, the Clash of Clans bot for Discord."
---

# /stats defense

Shows defense failure rates of clan members.

## Options

| Name | Type | Description |
|------|------|-------------|
| `clan` | Text | Clan tag or name or alias. |
| `user` | User | Clan by @user mention or ID. |
| `roster` | Text | Stats of a roster. |
| `compare` | Text | Compare Town Halls (e.g. 14vs13, *vs15, all, equal) |
| `stars` | Text | War stars earned. (Default: 3)<details><summary>View Options</summary>`3`, `2`, `>= 2`, `1`, `>= 1`</details> |
| `type` | Text | War Type [e.g. Regular, CWL, Friendly] (Default: Regular and CWL)<details><summary>View Options</summary>`Regular`, `CWL`, `Friendly`, `Regular and CWL`, `Regular and Friendly`, `Regular, CWL and Friendly`</details> |
| `season` | Text | Retrieve data since the specified season.<details><summary>View Options</summary>`Since Nov 2026`, `Since Oct 2026`, `Since Sep 2026`, `Since Aug 2026`, `Since Jul 2026`, `Since Jun 2026`, `Since May 2026`, `Since Apr 2026`, `Since Mar 2026`, `Since Feb 2026`, `Since Jan 2026`, `Since Dec 2025`, `Since Nov 2025`, `Since Oct 2025`, `Since Sep 2025`, `Since Aug 2025`, `Since Jul 2025`, `Since Jun 2025`</details> |
| `attempt` | Text | Fresh attacks or clean-up attacks. (Default: Both)<details><summary>View Options</summary>`Fresh`, `Cleanup`</details> |
| `clan_only` | True or False | Only show defense stats for the clan. |

## Related commands

* [/stats attacks](attacks.md): Shows attack success rates of clan members.

