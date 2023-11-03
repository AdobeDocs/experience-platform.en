---
title: Using top and bottom of page events
description: This article explains how to use top and bottom of page events in Web SDK.
---

# Using top and bottom of page events in Web SDK

When you want to deliver personalized experiences to your customers, a web page's loading time is essential.

To optimize the loading times and deliver personalization as quickly as possible, Web SDK supports the configuration of top and bottom of page events.

Top and bottom of page events describe a method of asynchronously loading various elements in the page, while keeping the page load time at a minimum.

This configuration minimizes the amount of time a user has to wait until the personalized content is loaded.

In terms of metrics accuracy, Adobe Analytics can ignore top of page events, which leads to more accurate metrics recording, since only one page hit is recorded (the bottom of page event).  

## Use cases {#use-cases}

A sports apparel retailer wants to deliver personalized experiences to their shoppers, while minimizing user friction when visiting their website, all while being able to accurately collect visitor metrics.

By using top and bottom of page events in Web SDK, the marketing team can configure their personalization delivery in the most optimal way:

* Web SDK sends a personalization request which is loaded as soon as the page begins to load. This is a top of page event.
* When the page finishes loading, a page view event is recorded. This happens later in the page loading process. This is a bottom of page event.

## Top of page event example {#top-of-page}

The code sample below exemplifies a top of page event configuration which requests personalization but does not send display notifications for automatically rendered propositions. The display notifications will be sent as part of the bottom-of-page event.

>[!BEGINTABS]

>[!TAB Top of page event]

```js
alloy("sendEvent", {
  type: "decisioning.propositionFetch",
  renderDecisions: true,
  personalization: {
    sendDisplayEvent: false
  }
});
```

|Paramter| Required/Optional |Description|
|---|---|---|
|`type`|Required|Set this parameter to `decisioning.propositionFetch`. This special event type tells Adobe Analytics to drop this event. When using Customer Journey Analytics, you can also set up a filter to drop these events.|
|`renderDecisions`|Required|Set this parameter to `true`. This parameter tells Web SDK to render decisions returned by the Edge Network.|
|`personalization.sendDisplayEvent`|Required| Set this parameter to `false`. This stops display notifications from being sent.|

>[!ENDTABS]

## Bottom of page event examples {#bottom-of-page}

>[!BEGINTABS]

>[!TAB Auto-rendered propositions]

The code sample below exemplifies a bottom of page event configuration which sends display notifications for propositions which were automatically rendered on the page but for which display notifications were suppressed in [top of page](#top-of-page) event.

>[!NOTE]
>
>In this scenario, you must call the bottom of page event _after_ the top of page one. However, the bottom of page event does not need to wait until the top of page one has completed.

```js
alloy("sendEvent", {
  personalization: {
    includeRenderedPropositions: true
  },
  xdm: { ... }
});
```

|Paramter| Required/Optional |Description|
|---|---|---|
|`personalization.includeRenderedPropositions`|Required|Set this parameter to `true`. This enables the sending of display notifications which were suppressed in the top of page event.|
|`xdm`| Optional | Use this section to include all the data you need for the bottom of page event. |

>[!TAB Manually rendered propositions]

The code sample below exemplifies a bottom of page event configuration which sends display notifications for propositions which were manually rendered on the page (i.e. for custom decision scopes or surfaces).

>[!NOTE]
>
>In this scenario, the bottom of page event must wait until the top of page event has completed, to render the propositions and record the bottom of page event.

```js
alloy("sendEvent", {
  xdm: { 
    ... // Optional bottom of page event data
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
|`xdm._experience.decisioning.propositions`| Required | This section defines the manually rendered propositions. You must include the proposition `ID`, `scope`, and `scopeDetails`. See the documentation on how to [manually render personalization](../personalization/rendering-personalization-content.md#manually) for more information on how to record display notifications for manually rendered content. Manually rendered personalization content must be included in the bottom of page hit. |
|`xdm._experience.decisioning.propositionEventType`| Required | Set this parameter to `display: 1`. |
|`xdm`| Optional | Use this section to include all the data you need for the bottom of page event. |

>[!ENDTABS]


## Single-page application with top and bottom page hits {#spa-example}


>[!BEGINTABS]

>[!TAB First page view]

The example below includes the addition of the required `xdm.web.webPageDetails.viewName` parameter. This is what makes it a single-page application. The `viewName` in this example is the view which is loaded on the page load.

```js
// Top of page, render decisions for the "home" view.
alloy("sendEvent", {
    type: "decisioning.propositionFetch",
    renderDecisions: true,
    personalization: {
        sendDisplayEvent: false
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
        includeRenderedPropositions: true
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
        includeRenderedPropositions: true
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

