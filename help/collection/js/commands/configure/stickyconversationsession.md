---
title: stickyConversationSession
description: Determine if the Brand Concierge component uses a cookie to save a session ID.
---
# `stickyConversationSession`

The `stickyConversationSession` component is a boolean that allows the Web SDK to set a cookie that saves a session ID when using Brand Concierge chat. It is useful when you have Brand Concierge chat implemented and want to save chat sessions between page loads. It is supported with all versions of the Web SDK library v2.31.0 or higher. Its default value is `false`.

Set the `stickyConversationSession` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `false`. Set this value to `true` if you want to preserve the Brand Concierge chat session ID between page loads. If omitted or set to `false`, Brand Concierge chat starts a new session on every page load.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  stickyConversationSession: true
});
```

## Sticky conversation session using the Web SDK tag extension

This setting can be configured in the Web SDK tag extension using [Brand Concierge settings](/help/tags/extensions/client/web-sdk/configure/brand-concierge.md).
