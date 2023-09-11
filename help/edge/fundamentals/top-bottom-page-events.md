---
title: Using top and bottom of page events
description: This article explains how to use top and bottom of page events in Web SDK.
---

# Using top and bottom of page events in Web SDK

When you want to deliver personalized experiences to your customers, a web page's loading time is essential.

To optimize the loading times, reduce flicker, and deliver personalization as quickly as possible, Web SDK supports the configuration of top and bottom of page events.

Top and bottom of page events describe a method of asynchronously loading various elements in the page, while keeping the page load time at a minimum and eliminating flicker.

This configuration ensures that visitors receive a personalized experience without running into a blanks screen until the personalization is loaded on the page. Data can be loaded asynchronously and recorded later.

In terms of metrics accuracy, Adobe Analytics can ignore top of page events, which leads to more accurate metrics recording, since only one page hit is recorded (the bottom of page event).  

## Use cases {#use-cases}

A sports apparel retailer wants to deliver personalized experiences to their shoppers, while minimizing user friction when visiting their website, all while being able to accurately collect visitor metrics.

By using top and bottom of page events in Web SDK, the marketing team can configure their personalization delivery in the most optimal way:

* Web SDK sends a personalization request which is loaded as soon as the page begins to load. This is a top of page event.
* When the page finishes loading, a page view event is recorded. This happens later in the page loading process. This is a bottom of page event.


## Top of page event example {#top-of-page}

The code sample below exemplifies a top of page event configuration which requests personalization and does not send display notifications.

>[!BEGINTABS]

>[!TAB Top of page event]

```js
alloy("sendEvent", {
  eventType: "decisioning.propositionFetch",
  renderDecisions: true,
  personalization: {
    sendDisplayNotifications: false
  }
});
```

|Paramter| Required/Optional |Description|
|---|---|---|
|`eventType`|Required|Set this parameter to `decisioning.propositionFetch`.|
|`renderDecisions`|Required|Set this parameter to `true`.|
|`personalization.sendDisplayNotifications`|Required| Set this parameter to `false`. This stops display notifications from being sent.|

>[!ENDTABS]

## Bottom of page event examples {#bottom-of-page}

>[!BEGINTABS]

>[!TAB Auto-rendered propositions]

The code sample below exemplifies a bottom of page event configuration which automatically renders personalization events. Additionally, it triggers the sending of the display notifications which were suppressed in the [top of page](#top-of-page) event.

>[!NOTE]
>
>In this scenario, you must call the bottom of page event _after_ the top of page one. However, the bottom of page event does not need to wait until the top of page one has completed.

```js
alloy("sendEvent", {
  personalization: {
    includePendingDisplayNotifications: true
  },
  xdm: { ... }
});
```

|Paramter| Required/Optional |Description|
|---|---|---|
|`personalization.includePendingDisplayNotifications`|Required|Set this parameter to `true`. This enables the sending of display notifications which were suppressed in the top of page event.|

>[!TAB Manually rendered propositions]

The code sample below exemplifies a bottom of page event configuration which renders personalization events defined manually in the configuration.

>[!NOTE]
>
>In this scenario, the bottom of page event must wait until the top of page event has completed, to render the propositions.

```js
alloy("sendEvent", {
  xdm: { ...
    _experience: {
      decisioning: {
        propositions: propositions.map(function(p) {
          return {
            id: p.id,
            scope: p.scope,
            scopeDetails: p.scopeDetails
          };
        }),
        propositionEventType: {
          display: 1
        }
      }
    }
  }
});
```

|Paramter| Required/Optional |Description|
|---|---|---|
|`xdm._experience.decisioning.propositions`|Required| This section defines the manually rendered propositions. You must include the proposition `ID`, `scope`, and `scopeDetails`.|
|`xdm._experience.decisioning.propositionEventType`|Required|Set this parameter to `display: 1`.|

>[!ENDTABS]


## Single-page application with top and bottom page hits {#spa-example}


>[!BEGINTABS]

>[!TAB First page view]

```js
// Top of page, render decisions for the "home" view.
alloy("sendEvent", {
    eventType: "decisioning.propositionFetch",
    renderDecisions: true,
    personalization: {
        sendDisplayNotifications: false
    },
    xdm: {
        web: {
            webPageDetails: {
                viewName: "home"
            }
        }
    }
});

// Bottom of page, send display notifications for the items that were rendered.
// Note: You need to include the viewName in both top and bottom of page so that the
// correct view is rendered at the top of the page, and the correct view is recorded
// at the bottom of the page.

alloy("sendEvent", {
    personalization: {
        includePendingDisplayNotifications: true
    },
    xdm: {
        ...,
        web: {
            webPageDetails: {
                viewName: "home"
            }
        }
    }
});
```

>[!TAB Second page view (Option 1)]

In this example there is no need to do a top/bottom of page split because the personalization for the page has already been fetched.

```js
alloy("sendEvent", {
  renderDecisions: true,
  xdm: {
    ...,
    web: {
      webPageDetails: {
        viewName: "cart"
      }
    }
  }
});
```


>[!TAB Second page view (Option 2)]

If you still need to delay the bottom of page hit, you can use `applyPropositions` for the top of page hit. Since no personalization needs to be fetched and no Analytics data needs to be recorded, there is no need to make a request to the Edge Network.

```js
// top of page, render the decisions already fetched for the "cart" view.
alloy("applyPropositions", {
    viewName: "cart"
});

// bottom of page, send display notifications for the items that were rendered.
// Note: You need to include the viewName in both top and bottom of page so that the
// correct view is rendered at the top of the page, and the correct view is recorded
// at the bottom of the page.
alloy("sendEvent", {
    personalization: {
        includePendingDisplayNotifications: true
    },
    xdm: {
        ...,
        web: {
            webPageDetails: {
                viewName: "cart"
            }
        }
    }
});
```

>[!ENDTABS]

