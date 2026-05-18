---
title: Configure top and bottom of page events in Web SDK
description: This article explains how to use top and bottom of page events in Web SDK.
exl-id: 43c6d53a-6bf9-45f8-b001-d148adaff829
---

# Configure top and bottom of page events in Web SDK

When delivering personalized experiences, a web page's loading time is essential. To minimize the time a user waits for personalized content, Web SDK supports the configuration of top and bottom of page events.

Top and bottom of page events describe a method of asynchronously loading various elements in the page while keeping the page load time at a minimum:

* The top of page event requests personalization as soon as the page begins to load.
* The bottom of page event records a page view when the page finishes loading.

Adobe Analytics ignores top of page events, which leads to more accurate metrics recording since only one page hit is recorded (the bottom of page event).

You can configure top and bottom of page events in two ways: by calling the Web SDK JavaScript library (`alloy()`) directly, or by using the Web SDK tag extension in the Adobe Experience Platform Tags UI. The tag extension's [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action includes a '[!UICONTROL Use guided events]' option that pre-configures field values for the '[!UICONTROL Request personalization]' (top of page) and '[!UICONTROL Collect analytics]' (bottom of page) scenarios. Each example below shows both implementations.

## Top of page event {#top-of-page}

The example below configures a top of page event that requests personalization but suppresses [display events](display-events.md) for automatically rendered propositions. Those display events are sent with the bottom of page event instead.

>[!BEGINTABS]

>[!TAB JavaScript library]

```js
alloy("sendEvent", {
  type: "decisioning.propositionFetch",
  renderDecisions: true,
  personalization: {
    sendDisplayEvent: false
  }
});
```

| Parameter | Required/Optional | Description |
| --- | --- | --- |
| `type` | Required | Set this parameter to `decisioning.propositionFetch`. This special event type tells Adobe Analytics to drop this event. When using Customer Journey Analytics, you can also set up a filter to drop these events. See [Edge Network event types in Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/hit-types) for more information. |
| `renderDecisions` | Required | Set this parameter to `true`. This parameter tells Web SDK to render decisions returned by the Edge Network. |
| `personalization.sendDisplayEvent` | Required | Set this parameter to `false`. This parameter stops display events from being sent. |

>[!TAB Web SDK tag extension]

Configure a [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action in the rule that fires at the top of the page. Enable **[!UICONTROL Use guided events]**, then select **[!UICONTROL Request personalization]**. This option locks '[!UICONTROL Type]' to '[!UICONTROL Decisioning Proposition Fetch]', '[!UICONTROL Render visual personalization decisions]' to enabled, and '[!UICONTROL Automatically send a display event]' to disabled.

To set these fields manually instead, leave **[!UICONTROL Use guided events]** disabled and configure each field yourself.

>[!ENDTABS]

## Bottom of page event examples {#bottom-of-page}

### Auto-rendered propositions {#bottom-auto-rendered}

The example below configures a bottom of page event that sends display events for propositions that were automatically rendered on the page but suppressed in the [top of page](#top-of-page) event.

>[!BEGINTABS]

>[!TAB JavaScript library]

```js
alloy("sendEvent", {
  personalization: {
    includeRenderedPropositions: true
  },
  xdm: { ... }
});
```

| Parameter | Required/Optional | Description |
| --- | --- | --- |
| `personalization.includeRenderedPropositions` | Required | Set this parameter to `true`. This parameter enables the sending of display events that were suppressed in the top of page event. |
| `xdm` | Optional | Use this object to include all the data that you want for the bottom of page event. |

>[!TAB Web SDK tag extension]

Configure a [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action in the rule that fires at the bottom of the page. Enable **[!UICONTROL Use guided events]**, then select **[!UICONTROL Collect analytics]**. This option locks '[!UICONTROL Include rendered propositions]' to enabled.

To set this field manually instead, leave **[!UICONTROL Use guided events]** disabled and enable **[!UICONTROL Include rendered propositions]** directly. Optionally, populate the **[!UICONTROL XDM]** field with an [XDM object](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) data element that carries your page data.

>[!ENDTABS]

### Manually rendered propositions {#bottom-manually-rendered}

The example below configures a bottom of page event that sends display events for propositions that were manually rendered on the page (that is, for custom decision scopes or surfaces).

>[!NOTE]
>
>In this scenario, the bottom of page event must wait until the top of page event has completed, so that the propositions can be rendered and recorded.

>[!BEGINTABS]

>[!TAB JavaScript library]

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

| Parameter | Required/Optional | Description |
| --- | --- | --- |
| `xdm._experience.decisioning.propositions` | Required | This section defines the manually rendered propositions. You must include the proposition `id`, `scope`, and `scopeDetails`. See [Manage display events](display-events.md) for more information. Manually rendered personalization content must be included in the bottom of page event. |
| `xdm._experience.decisioning.propositionEventType` | Required | Set this parameter to `display: 1`. |
| `xdm` | Optional | Use this object to include all the data that you want for the bottom of page event. |

>[!TAB Web SDK tag extension]

The '[!UICONTROL Use guided events]' option does not cover this scenario, so configure the action manually:

1. Create an [XDM object](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) (or [Variable](/help/tags/extensions/client/web-sdk/data-element-types.md#variable)) data element that populates `_experience.decisioning.propositions` with each rendered proposition's `id`, `scope`, and `scopeDetails`, and sets `_experience.decisioning.propositionEventType.display` to `1`. See [Manage display events](display-events.md) for more information.
1. In the [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action for the bottom of page rule, leave **[!UICONTROL Use guided events]** disabled and reference the data element from the **[!UICONTROL XDM]** field.

>[!ENDTABS]

## Single-page application with top and bottom of page events {#spa-example}

In a single-page application, you must specify the view name on each view change so that Web SDK renders the correct personalization at the top of the page and records the correct view at the bottom of the page.

### First page view {#spa-first-view}

In this example, `home` is the view loaded on the initial page load.

>[!BEGINTABS]

>[!TAB JavaScript library]

The top call requests personalization for the `home` view without recording an Analytics hit or firing display events. The bottom call records the page view and fires the suppressed display events. Include the same `viewName` in both calls so that the view is recorded consistently.

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

// Bottom of page, send display events for the items that were rendered.
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

>[!TAB Web SDK tag extension]

1. Create an [XDM object](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) data element that sets `web.webPageDetails.viewName` to the view's name (for example, `home`).
1. Configure a top of page [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action: enable **[!UICONTROL Use guided events]**, select **[!UICONTROL Request personalization]**, and reference the data element in the **[!UICONTROL XDM]** field.
1. Configure a bottom of page **[!UICONTROL Send event]** action: enable **[!UICONTROL Use guided events]**, select **[!UICONTROL Collect analytics]**, and reference the same data element in the **[!UICONTROL XDM]** field so that the `viewName` matches in both events.

>[!ENDTABS]

### Second page view — option 1 {#spa-second-view-option-1}

In this example, a single event is sufficient because the personalization for the page has already been fetched.

>[!BEGINTABS]

>[!TAB JavaScript library]

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

>[!TAB Web SDK tag extension]

1. Create an [XDM object](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) data element that sets `web.webPageDetails.viewName` to the new view's name (for example, `cart`).
1. On the view change, configure a single [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action: leave **[!UICONTROL Use guided events]** disabled, enable **[!UICONTROL Render visual personalization decisions]**, and reference the data element in the **[!UICONTROL XDM]** field.

>[!ENDTABS]

### Second page view — option 2 {#spa-second-view-option-2}

Use this approach when you need to delay the bottom of page event (for example, when the page's analytics data is not ready at the time of the view change). Handle the view change in two steps:

1. At the top of the page, render the already-fetched propositions without making an Edge Network call.
1. Once the analytics data is ready, send the bottom of page event.

Include the same `viewName` in both calls so that the view is recorded consistently.

>[!BEGINTABS]

>[!TAB JavaScript library]

Call [`applyPropositions`](/help/collection/js/commands/applypropositions.md) at the top of the page to render the cached propositions for the new view. Then call `sendEvent` at the bottom of the page with `includeRenderedPropositions: true` so that the suppressed display events fire.

```js
// Top of page, render the decisions already fetched for the "cart" view.
alloy("applyPropositions", {
    viewName: "cart"
});

// Bottom of page, send display events for the items that were rendered.
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

>[!TAB Web SDK tag extension]

1. Create an [XDM object](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) data element that sets `web.webPageDetails.viewName` to the new view's name (for example, `cart`).
1. For the top of page event, configure an [[!UICONTROL Apply propositions]](/help/tags/extensions/client/web-sdk/actions/apply-propositions.md) action and set the **[!UICONTROL View name]** field to the view's name (for example, `cart`). This action renders the already-fetched propositions without contacting the Edge Network.
1. For the bottom of page event, configure a [[!UICONTROL Send event]](/help/tags/extensions/client/web-sdk/actions/send-event.md) action: enable **[!UICONTROL Use guided events]**, select **[!UICONTROL Collect analytics]**, and reference the data element in the **[!UICONTROL XDM]** field.

>[!ENDTABS]

## GitHub sample {#github-sample}

The [top-and-bottom sample in the alloy-samples repository](https://github.com/adobe/alloy-samples/tree/main/target/top-and-bottom) demonstrates how to request personalization at the top of the page and send analytics metrics at the bottom. Download the sample and run it locally to see how top and bottom of page events work. The sample uses the JavaScript library directly; the same patterns apply when you configure equivalent rules in the Web SDK tag extension.
