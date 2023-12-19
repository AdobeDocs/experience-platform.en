---
title: getIdentity
description: Obtain a visitor's identity without sending event data.
---
# `getIdentity`

The `getIdentity` command allows you to obtain a visitor ID without sending event data. When you run the `sendEvent` command, the Web SDK automatically obtains the visitor's identity if there isn't one. If you have a need to separate the call to generate a visitor ID and the call to send data, you can use this command.

## Get identity using the Web SDK tag extension

