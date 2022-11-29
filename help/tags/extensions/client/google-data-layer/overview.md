---
title: Google Data Layer Extension
description: Learn about the Google Client Data Layer tag extension in Adobe Experience Platform.
exl-id: 7990351d-8669-432b-94a9-4f9db1c2b3fe
---
# Google Data Layer extension (Beta)

>[!IMPORTANT]
>
>This extension is currently in beta and has not been fully tested in production.

The Google Data Layer extension allows you to use a Google data layer in your tags implementation. The extension can be used independently or simultaneously with Google solutions and with Google's open source [Data Layer Helper Library](https://github.com/google/data-layer-helper).

The Helper Library provides similar event-driven functionality to the Adobe Client Data Dayer (ACDL). The data elements, rules and actions of the Google Data Layer extension provide similar functionality to those in the [ACDL extension](../client-data-layer/overview.md).

## Maturity

Version 1.0.x of the extension is a beta. This extension has not been fully tested in production.  

## Installation

To install the extension, navigate to the extension catalog in the Experience Platform UI or Data Collection UI and select **Google Data Layer**. 

Once installed, the extension creates or accesses a data layer every time the tag library loads on your website.      

## Extension view

When configuring the extension (either while installing the extension or by selecting **[!UICONTROL Configure]** from the extension catalog) you must define the name of the data layer that the extension consumes. If no data layer with the configured name is present when the library is loaded, the extension creates one instead.

>[!NOTE]
>
>It does not matter whether Google or Adobe code loads first and creates the data layer. Both systems will create the data layer if not present, or use the existing data layer.

By default, the data layer uses the Google default name `dataLayer`.

## Events

The extension allows you to listen for changes (events) within the data layer. An event can be any of the following:

* Tag events (such as a library being loaded)
* JavaScript events
* Data pushed to the data layer with the `event` keyword.

It is important to understand the use of the [`event` keyword](https://developers.google.com/tag-platform/devguides/datalayer#use_a_data_layer_with_event_handlers) when data is pushed to a Google data layer, similarly to the Adobe Client Data Layer. The `event` keyword changes the behavior of the Google data layer, and therefore the extension's behavior updates accordingly.

The sections below outline the different event types that the extension can listen for.

### Listen for all pushes to the data layer

If you select this option, the extension listens for any change made to the data layer.

### Listen for pushes excluding events

If you select this option, the extension listens for anything being pushed to the data layer, excluding events.

The following example push event would be tracked by the listener:

```js
dataLayer.push({"data":"something"})
```

The following example push events would not be tracked by the listener:

```js
dataLayer.push({"event":"myevent"})
dataLayer.push({"event":"myevent","data":"something"})
```

### Listen for all events

If you select this option, the extension listens for any event pushed to the data layer.

The following example push events would be tracked by the listener:

```js
dataLayer.push({"event":"myevent"})
dataLayer.push({"event":"myevent","data":"something"})
```

The following example push event would not be tracked by the listener:

```js
dataLayer.push({"data":"something"})
```

### Listen for specific event

If you want to listen for a specific event, select this option so the event listener tracks any events that match a specific string.

For example, setting `myEvent` when using this configuration results in the listener only tracking the following push event:

```js
dataLayer.push({"event":"myEvent"})
```

You can also use a regex string to match event names. For example, setting `myEvent\d` would track events starting with `myEvent` followed by a digit:

```js
dataLayer.push({"event":"myEvent1"})
dataLayer.push({"event":"myEvent2"})
```

## Actions

The sections below outline the different actions that the extension can perform when included in a [rule](../../../ui/managing-resources/rules.md).

### Push to Data Layer {#push-to-data-layer}

This action pushes JSON content to the data layer itself, making it possible to use data elements directly in JSON payloads. Within the provided JSON editor, you can reference data elements using percent notation (for example, `%dataElementName%`).

```json
{
    "page": {
        "url": "%url%",
        "previous_url": "%previous_url%",
        "concatenated_values": "static string %dataElement%"
    }
}
```

### Google DL Reset to Computed State

>[!NOTE]
>
>This action is available from v1.0.5 onward.

This action resets the data layer. If used in a rule which processes a Google data layer change, the data layer is reset to the computed state of the data layer at the time the rule was triggered. If the action is used in a rule which does not process a Google data layer change, the action empties the data layer.

## Data elements

The extension provides a unique data element that accesses the data layer using a key (for example, `page.url` in the [snippet above](#push-to-data-layer)).

The data element can provide any of the following:

* A specific value from the data layer (for example, `page.url`)
* The entire data layer array (empty key field)
* Values from a data layer event by using the key (if the `event` keyword was used)
* The entire event object (empty key field)

The extension always gives priority to event information. If a data layer `event` is being processed, values are always read from that event. If an `event` is not present, values are read from the directly data layer instead.

## Additional Information

Additional information is available in the [project README](https://github.com/adobe/reactor-extension-googledatalayer/blob/main/README.md) and in the extension's data element and event dialogs.
