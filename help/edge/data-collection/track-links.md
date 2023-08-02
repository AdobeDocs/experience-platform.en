---
title: Track Links Using the Adobe Experience Platform Web SDK
description: Learn how to send Link Data to Adobe Analytics with Experience Platform Web SDK
keywords: adobe analytics;analytics;sendEvent;s.t();s.tl();webPageDetails;pageViews;webInteraction;web Interaction;page views;link tracking;links;track links;clickCollection;click collection;
exl-id: d5a1804c-8f91-4083-a46e-ea8f7edf36b6
---
# Track links

Links can be set manually or tracked [automatically](#automaticLinkTracking). Manual tracking is done by adding the details under the `web.webInteraction` part of the schema. There are two required variables: 

* `web.webInteraction.type`
* `web.webInteraction.linkClicks.value`

```javascript
alloy("sendEvent", {
  "xdm": {
    "web": {
      "webInteraction": {
        "linkClicks": {
            "value": 1
        },
        "name": "My Custom Link", // Name that shows up in the custom links report
        "URL": "https://myurl.com", // The URL of the link
        "type": "other" // values: other, download, exit
      }
    }
  }
});
```

Starting with version 2.15.0, Web SDK captures the `region` of the clicked HTML element. This enables the [Activity Map](https://experienceleague.adobe.com/docs/analytics/analyze/activity-map/activity-map.html) reporting features in Adobe Analytics.

The link type can be one of three values: 

* **`other`:** A custom link
* **`download`:** A download link
* **`exit`:** An exit link

These values are [automatically mapped](adobe-analytics/automatically-mapped-vars.md) into Adobe Analytics if [configured](adobe-analytics/analytics-overview.md) to do so.

## Automatic link tracking {#automaticLinkTracking}

By default, the Web SDK captures, labels, and records clicks on qualifying link tags. Clicks are captured with a [capture](https://www.w3.org/TR/uievents/#capture-phase) click event listener that is attached to the document.

Automatic link tracking can be disabled by [configuring](../fundamentals/configuring-the-sdk.md#clickCollectionEnabled) the Web SDK.

```javascript
clickCollectionEnabled: false
```

### What tags qualify for link-tracking?{#qualifyingLinks}

Automatic link tracking is done for anchor `A` and `AREA` tags. However, these tags aren't considered for link tracking if they have an attached `onclick` handler.

### How are links labeled?{#labelingLinks}

Links are labeled as a download link if the anchor tag includes a download attribute or if the link ends with a popular file extension. The download link qualifier can be [configured](../fundamentals/configuring-the-sdk.md) with a regular expression:

```javascript
downloadLinkQualifier: "\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"
```

Links are labeled as an exit link if the link target domain differs from the current `window.location.hostname`.

Links that do not qualify as a download or exit link are labeled as "other."

### How can link-tracking values be filtered?

The data collected with automatic link tracking can be inspected and filtered by providing an [onBeforeEventSend callback function](../fundamentals/tracking-events.md#modifying-events-globally).

Filtering link tracking data can be useful when preparing data for Analytics reporting. Automatic link tracking captures both the link name and link URL. In Analytics reports, the link name takes priority over link URL. If you wish to report the link URL, the link name needs to be removed. The following example shows an `onBeforeEventSend` function that removes the link name for download links:

```javascript
alloy("configure", {
  onBeforeEventSend: function(options) {
    if (options
      && options.xdm
      && options.xdm.web
      && options.xdm.web.webInteraction) {
        if (options.xdm.web.webInteraction.type === "download") {
          options.xdm.web.webInteraction.name = undefined;
        }
    }
  }
});
```

Starting with Web SDK version 2.15.0, the data collected with automatic link tracking can be inspected, augmented or filtered by providing an [onBeforeLinkClickSend callback function](../fundamentals/configuring-the-sdk.md#onBeforeLinkClickSend).

This callback function is executed only when an automatic link click event occurs.

```javascript
alloy("configure", {
  onBeforeLinkClickSend: function(options) {
    if (options.xdm.web.webInteraction.type === "download") {
      options.xdm.web.webInteraction.name = undefined;
    }
  }
});
```

When filtering the link tracking events using the `onBeforeLinkClickSend` command, Adobe recommends returning `false` for the link clicks that should not be tracked. Any other response will make Web SDK send the data to the Edge Network.


>[!NOTE]
>
>** When both the `onBeforeEventSend` and `onBeforeLinkClickSend` callback functions are set, the Web SDK runs the `onBeforeLinkClickSend` callback function to filter and augment the link click interaction event, followed by the `onBeforeEventSend` callback function.