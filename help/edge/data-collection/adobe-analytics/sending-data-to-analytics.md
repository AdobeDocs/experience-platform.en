---
title: Sending Data to Adobe Analytics Using the Adobe Experience Platform Web SDK
description: Learn how to send data to Adobe Analytics using the Adobe Experience Platform Web SDK.
keywords: adobe analytics;analytics;sendEvent;s.t();s.tl();webPageDetails;pageViews;webInteraction;web Interaction;page views;link tracking;links;track links;clickCollection;click collection;
exl-id: cec4a9eb-2079-4386-88da-9b995e0673e6
---
# Sending data to Adobe Analytics

Whereas in the past there were different functions to distinguish between a page view and a link (for example, `s.t(), s.tl()`), in the Web SDK there is just the `sendEvent` command. The data you send with an event determines whether it should be a page view or a link. [Learn more about tracking links](../track-links.md).

## Sending a page view

You can specify a page view by setting the `web.webPageDetails.pageViews.value=1` variable.

```javascript
alloy("sendEvent", {
  "xdm": {
    "web": {
      "webPageDetails": {
        "pageViews": {
            "value":1
         }
      }
    }
  }
});
```

Although Analytics technically records a page view even if this variable is not set, it is a best practice to set this variable whenever you want to record a page view to be explicit in your data and to future proof your implementation.
