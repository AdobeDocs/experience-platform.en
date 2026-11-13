---
title: Send Adobe Client Data Layer data with the Web SDK
description: Learn how to send Adobe Client Data Layer data and events to the Edge Network with the Web SDK, using either JavaScript or tag rules.
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# Send Adobe Client Data Layer data with the Web SDK

The Adobe Client Data Layer (ACDL) collects data and events on the page, but it doesn't send them anywhere. To send them to the Adobe Experience Platform Edge Network, connect ACDL events to the Web SDK in one of the following ways:

* **JavaScript library**: Your own code listens for ACDL events and calls the Web SDK [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) command.
* **Tag extensions**: Tag rules use the [ACDL extension](/help/tags/extensions/client/client-data-layer/overview.md) to trigger on ACDL events and the [Web SDK extension](/help/tags/extensions/client/web-sdk/overview.md) to send the data.

Each section of this page shows both approaches.

## Prerequisites {#prerequisites}

Your site code pushes the data and events that you want to send. The examples on this page use the following push for each page view:

```js
window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({
  event: "page view",
  page: { title: "Home", language: "en" }
});
```

You also need the following, depending on your approach:

>[!BEGINTABS]

>[!TAB JavaScript library]

* ACDL is [installed](install.md) on your pages.
* The Web SDK [base code and library](/help/collection/js/install/overview.md) are installed, and the Web SDK is [configured](/help/collection/js/commands/configure/overview.md) with a [datastream](/help/datastreams/overview.md).

The Web SDK base code queues commands until its library loads, and ACDL queues items until its library loads. Because of these queues, you can add the code on this page anywhere after the Web SDK base code, regardless of which library loads first.

>[!TAB Tag extensions]

* The ACDL extension is [installed](/help/tags/extensions/client/client-data-layer/overview.md#install) and [configured](/help/tags/extensions/client/client-data-layer/configure.md) in your tag property.
* The Web SDK extension is [installed](/help/tags/extensions/client/web-sdk/getting-started.md) and configured with a [datastream](/help/datastreams/overview.md).

>[!ENDTABS]

## Choose how to map your data {#mapping}

The Web SDK sends data in two objects. Choose one or both:

| Object | How mapping works | Use it when |
| --- | --- | --- |
| [`xdm`](/help/collection/js/commands/sendevent/xdm.md) | You build an object that matches your XDM schema from data layer values, in your code or in a tag rule. | You want full control over the payload, or your data layer already resembles your schema. |
| [`data`](/help/collection/js/commands/sendevent/data.md) | You send data layer values as they are. You map them to XDM in the datastream with [Data Prep for Data Collection](/help/datastreams/data-prep.md). | You want to keep mapping logic out of your page code and tag rules, or several sites share one well-governed data layer. |

## Choose where values come from {#value-sources}

When an ACDL event triggers your code or rule, you can read data layer values from two places:

| Source | JavaScript library | Tag extensions | Contains |
| --- | --- | --- | --- |
| The pushed object | `event.page.title`, where `event` is the listener's argument | `%event.message.page.title%` | Only the object that triggered the event. |
| The computed state | `adobeDataLayer.getState("page.title")` | A [**[!UICONTROL Data layer computed state]**](/help/tags/extensions/client/client-data-layer/data-element-types.md#computed-state) data element with the path `page.title` | All data merged from every push so far. |

Use the pushed object for values that describe the event itself, such as the product in a cart addition. Use the computed state for values that were pushed earlier, such as user details. When the code or rule runs, the computed state already includes the data from the push that triggered it. See [What listeners receive](concepts/events.md#listener-arguments) and [Use the pushed data in rules](/help/tags/extensions/client/client-data-layer/event-types.md#event-object).

## Send XDM data {#xdm}

The following examples send a page view with the page title from the pushed object.

>[!BEGINTABS]

>[!TAB JavaScript library]

Listen for the event and call `sendEvent`:

```js
window.adobeDataLayer = window.adobeDataLayer || [];

function sendPageView(event) {
  alloy("sendEvent", {
    xdm: {
      eventType: "web.webpagedetails.pageViews",
      web: {
        webPageDetails: {
          name: event.page.title,
          pageViews: { value: 1 }
        }
      }
    }
  });
}

window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("page view", sendPageView);
});
```

For all listener options, see [`addEventListener()`](methods/addeventlistener.md).

>[!TAB Tag extensions]

1. Create a [**[!UICONTROL Variable]**](/help/tags/extensions/client/web-sdk/data-element-types.md#variable) data element with the Web SDK extension. Select **[!UICONTROL XDM]**, then select your sandbox and schema. This example names the data element `XDM variable`.
1. Create a rule, and add an event:
    * **[!UICONTROL Extension]**: **[!UICONTROL Adobe Client Data Layer]**
    * **[!UICONTROL Event type]**: **[!UICONTROL Data layer push]**
    * **[!UICONTROL Triggers on]**: **[!UICONTROL Specific named events]**, with the event name `page view`
    * **[!UICONTROL Time scope]**: **[!UICONTROL All]**
1. Add an action that fills in the XDM object:
    * **[!UICONTROL Extension]**: **[!UICONTROL Adobe Experience Platform Web SDK]**
    * **[!UICONTROL Action type]**: [**[!UICONTROL Update variable]**](/help/tags/extensions/client/web-sdk/actions/update-variable.md)
    * **[!UICONTROL Data element]**: `XDM variable`
    * Set `web.webPageDetails.name` to `%event.message.page.title%`, and set `web.webPageDetails.pageViews.value` to `1`.
1. Add an action that sends the event:
    * **[!UICONTROL Extension]**: **[!UICONTROL Adobe Experience Platform Web SDK]**
    * **[!UICONTROL Action type]**: [**[!UICONTROL Send event]**](/help/tags/extensions/client/web-sdk/actions/send-event.md)
    * **[!UICONTROL Type]**: `web.webpagedetails.pageViews`
    * **[!UICONTROL XDM]**: `%XDM variable%`
1. Save the rule, add it to a library, and build the library.

For all event options, see [Data layer push](/help/tags/extensions/client/client-data-layer/event-types.md#data-layer-push).

>[!ENDTABS]

Each time your site pushes a `page view` event, the code or rule sends a page view to the Edge Network.

Send interactions the same way. For example, for a push such as `{ event: "cart add", eventInfo: { sku: "HT105" } }`, listen for or trigger on `cart add`, and read the product from `eventInfo`. For the XDM fields that describe commerce interactions, see [Collect commerce, product, and order information](/help/collection/use-cases/collect-commerce-data.md).

## Send the data layer for mapping in the datastream {#data}

To map in the datastream instead of in code or rules, send data layer values in the `data` object, and include an XDM `eventType` so that the event is classified correctly.

>[!BEGINTABS]

>[!TAB JavaScript library]

```js
function sendWithDataPrep(event) {
  alloy("sendEvent", {
    xdm: { eventType: "web.webpagedetails.pageViews" },
    data: this.getState()
  });
}

window.adobeDataLayer.push(function(dl) {
  dl.addEventListener("page view", sendWithDataPrep);
});
```

Inside an ACDL listener, `this` refers to the data layer, so `this.getState()` returns the computed state. To send only part of it, pass a path, such as `this.getState("page")`.

>[!TAB Tag extensions]

1. Create a **[!UICONTROL Data layer computed state]** data element with the ACDL extension. Select **[!UICONTROL Entire computed state]**, or select **[!UICONTROL Specific path]** and enter the path of the data that you want to send. This example names the data element `ACDL state`.
1. Create a rule with the same **[!UICONTROL Data layer push]** event as in [Send XDM data](#xdm).
1. Add a **[!UICONTROL Send event]** action from the Web SDK extension:
    * **[!UICONTROL Type]**: `web.webpagedetails.pageViews`
    * **[!UICONTROL Data]**: `%ACDL state%`
1. Save the rule, add it to a library, and build the library.

>[!ENDTABS]

Then, in your datastream, map the fields that you send to your XDM schema. See [Data Prep for Data Collection](/help/datastreams/data-prep.md). Data that you don't map, and that no configured service reads, isn't stored. Sending the entire computed state also increases the size of each request, so on pages with a large data layer, send only the parts that you map.

## Single-page applications {#spa}

In a single-page application, the page stays open while the visitor views many virtual pages, and the data layer [history](concepts/queue.md#history) keeps growing. Push a `page view` event for each virtual page view, and clear the history after you send it. Clearing the history doesn't change the computed state or remove listeners and rules.

>[!BEGINTABS]

>[!TAB JavaScript library]

Clear the history at the end of your page view listener:

```js
function sendPageView(event) {
  alloy("sendEvent", { /* ... */ });
  this.length = 0;
}
```

See [Clear the history](concepts/queue.md#clear).

>[!TAB Tag extensions]

Add a [**[!UICONTROL Clear data layer history]**](/help/tags/extensions/client/client-data-layer/action-types.md#clear-history) action from the ACDL extension as the last action of your page view rule.

>[!ENDTABS]

## Timing and duplicates {#timing}

Follow these practices so that each event is sent exactly once:

* **Use the `all` scope.** It's the default in both approaches: the `scope` option in JavaScript and the **[!UICONTROL Time scope]** setting in tags. It sends events that were pushed before your listener or rule started listening, such as a page view that was pushed before your script or tag library loaded. Use `future` only if another part of your implementation already sent the earlier events. See [Scope](methods/addeventlistener.md#scope).
* **Send each event from one place.** If both your own code and a tag rule send the same data layer event, Adobe receives it twice.
* **JavaScript library: use named functions, and add each listener once.** ACDL ignores a second registration of the same function for the same event. However, if code that runs repeatedly passes a new anonymous function each time, ACDL adds a new listener each time, and each event is sent more than once.
* **Tag extensions: trigger on specific event names.** A rule that triggers on **[!UICONTROL All data changes]** runs for every data push, which can send many more events than you expect.

## Related pages {#related}

* [`sendEvent`](/help/collection/js/commands/sendevent/overview.md) command and [**[!UICONTROL Send event]**](/help/tags/extensions/client/web-sdk/actions/send-event.md) action: All Web SDK options for sending events.
* [`addEventListener()`](methods/addeventlistener.md) and [**[!UICONTROL Data layer push]**](/help/tags/extensions/client/client-data-layer/event-types.md): All options for listening to ACDL events.
