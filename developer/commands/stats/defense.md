---
description: Shows defense failure rates of clan members.
---

# stats defense

Shows defense failure rates of clan members.

## Options

| Name | Description | Type/Options |
|------|-------------|--------------|
| `clan` | Clan tag or name or alias. | `String` |
| `user` | Clan by @user mention or ID. | `User` |
| `roster` | Stats of a roster. | `String` |
| `compare` | Compare Town Halls (e.g. 14vs13, *vs15, all, equal) | `String` |
| `stars` | War stars earned. (Default: 3) | [`3`, `2`, `>= 2`, `1`, `>= 1`] |
| `type` | War Type [e.g. Regular, CWL, Friendly] (Default: Regular and CWL) | [`Regular`, `CWL`, `Friendly`, `Regular and CWL`, `Regular and Friendly`, `Regular, CWL and Friendly`] |
| `season` | Retrieve data since the specified season. | [`Since Oct 2025`, `Since Sep 2025`, `Since Aug 2025`, `Since Jul 2025`, `Since Jun 2025`, `Since May 2025`, `Since Apr 2025`, `Since Mar 2025`, `Since Feb 2025`, `Since Jan 2025`, `Since Dec 2024`, `Since Nov 2024`, `Since Oct 2024`, `Since Sep 2024`, `Since Aug 2024`, `Since Jul 2024`, `Since Jun 2024`, `Since May 2024`] |
| `attempt` | Fresh attacks or clean-up attacks. (Default: Both) | [`Fresh`, `Cleanup`] |
| `clan_only` | Only show defense stats for the clan. | `Boolean` |

