---
title: conversation
description: Configure Brand Concierge chat settings.
exl-id: 0f64c7f1-2c28-4c67-af05-dc9ee688fdc0
---
# `conversation`

>[!AVAILABILITY]
>
>Brand Concierge for the Web SDK is currently in **beta**. The functionality and documentation are subject to change.

The `conversation` object contains configuration options for Brand Concierge chat sessions. This object is supported on Web SDK versions 2.31.0 or later.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **`stickyConversationSession`** | `boolean` | Determines if the Web SDK sets a session cookie to preserve Brand Concierge chat sessions across page loads. Defaults to `false`. If omitted or set to `false`, Brand Concierge chat starts a new session on every page load. |

## Example

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  conversation: {
    stickyConversationSession: true
  }
});
```

## Configure conversation settings using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Brand Concierge settings](/help/tags/extensions/client/web-sdk/configure/brand-concierge.md).
