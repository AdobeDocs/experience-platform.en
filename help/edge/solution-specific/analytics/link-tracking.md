---
title: Page and Link Tracking with Adobe Analytics
seo-title: Link tracking to Adobe Analytics with Adobe Experience Platform Web SDK
description: Learn how to send Link Data to Adobe Analytics with Experience Platform Web SDK
seo-description: Learn how to send Link Data to Adobe Analytics with Experience Platform Web SDK
---

# Sending Data to Adobe Analytics

Whereas in the past there were different functions to distinquish between a page view and a link (for example, `s.t(), s.tl()`), in the Web SDK there is just the `sendEvent` command. The data you send with an event determines whether it should be a page view or a link.

## Sending a  page view

You can specify a page view by setting the the `web.webPageDetails.pageViews.value=1` variable.

```javascript
alloy("sendEvent", {
  "xdm": {
    "web": {
      "webPageDetailsr": {
        "pageViews": {
            "value":1
      }
    }
  }
});
```

While analytics technically records a page view even if this variable is not set, it is a best practice to set this variable whenever you want to record a page view to be explicit in your data and to futureproof you implementation. 

## Tracking Links

Links can be set by adding the details under the `web.webInteraction` part of the schema. There are three required variables: `web.webInteraction.name`, `web.webInteraction.type` and `web.webInteraction.linkClicks.value`.

```javascript
alloy("sendEvent", {
  "xdm": {
    "web": {
      "webInteraction": {
        "linkClicks": {
            "value":1
      },
      "name":"My Custom Link", //Name that shows up in the custom links report
      "URL":"https://myurl.com", //the URL of the link
      "type":"other", // values: other, download, exit
    }
  }
});
```

The link type can be one of three values: 

* **`other`:** A custom link
* **`download`:** A download link (these can be tracked automatically by the library)
* **`exit`:** An exit link

### Automatic Link Tracking

The Web SDK can automatically track all link clicks by enabling [clickCollection](../../fundamentals/configuring-the-sdk.md#clickCollectionEnabled).

Download links are automatically detected based on popular file types. The logic for how downloads are classified is configurable.
