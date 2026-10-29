---
icon: bell
description: Ping members in the roster
---

# Roster Ping

<mark style="color:blue;">**/roster ping**</mark> <mark style="color:purple;">**roster:**</mark> `Roster` <mark style="color:purple;">**message:**</mark> `Message` <mark style="color:purple;">**ping\_option:**</mark> `Option` <mark style="color:purple;">**group:**</mark> `Group`

### Roster

The roster whose members should be pinged.

### Message

Type here the message that should be displayed.

### Option

Choose between:

* Unregistered (didn't sign up, but in the clan)
* Missing (opted-in, but not in the clan)
* Everyone (all opted-in members)

{% hint style="warning" %}
After submitting the Command it will ask to Confirm before pinging!
{% endhint %}

### Group

Restrict the pings to a certain Group. Leave empty to ignore. When set, it overrides **ping\_option**.

### Compact

Set **compact** to send the member pings in a compact inline format.
