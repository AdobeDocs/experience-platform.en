---
title: Google Data Layer Extension
description: Learn about the Google Client Data Layer tag extension in Adobe Experience Platform.
exl-id: 7990351d-8669-432b-94a9-4f9db1c2b3fe
TQID: https://experienceleague.adobe.com/XBpdVYy-uipd2SJZ-NsN-DtfQXjB9tamFhbI6DlS0s8
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Google Data Layer extension

The Google Data Layer extension allows you to use a Google data layer in your Tags implementation. The extension can be used independently or simultaneously with Google solutions and with Google's open source [Data Layer Helper Library](https://github.com/google/data-layer-helper).

The Helper Library provides similar event-driven functionality to the Adobe Client Data Layer (ACDL). The data elements, rules, and actions of the Google Data Layer extension provide similar functionality to those in the [ACDL extension](../client-data-layer/overview.md).

## Installation

To install the extension, navigate to the extension catalog in the Data Collection UI and select **[!UICONTROL Google Data Layer]**.

Once installed, the extension creates or accesses a data layer on every load of the Adobe Experience Platform Tags library.

## Extension view

The extension configuration can be used to define the name of the data layer that the extension consumes. If no data layer with the configured name is present when Adobe Experience Platform Tags is loaded, the extension creates one.

The data layer name default is the Google default name `dataLayer`.

>[!NOTE]
>
>It does not matter whether Google or Adobe code loads first and creates the data layer. Both systems behave the same - create the data layer if it is not present or use the existing data layer.

## Events

>[!NOTE]
>
>The word _event_ is overloaded when an event-driven data layer is used in Adobe Experience Platform Tags. _Events_ can be:
>
> - Adobe Experience Platform Tags events (Library Loaded and so on).
> - JavaScript events.
> - Data pushed to the data layer with the _event_ keyword.

The extension provides you with the possibility to listen for changes on the data layer.

>[!NOTE]
>
>It is important to understand the use of the _event_ keyword when data is pushed to a Google data layer, similarly to the Adobe Client Data Layer. The _event_ keyword changes the behavior of the Google data layer and therefore this extension.  
> Please read the Google documentation or do research if you are unsure on this point.

### Google Event Types

Google supports two means of pushing events: Google Tag Manager, using the `push()` method, and Google Analytics 4, using the `gtag()` method.

Google Data Layer extension versions before 1.2.1 supported only events created by `push()`, as shown in the code examples on this page.

Versions 1.2.1 and higher support events created using `gtag()`.  This is optional and can be enabled in the Extension configuration dialog.

For more information about `push()` and `gtag()` events, see the [Google documentation](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag).  Information is also provided in the configuration and rule dialogs of the extension.

### Listen for all pushes to the data layer

If you select this option, your event listener listens to any change made to the data layer.

### Listen for pushes excluding events

If you select this option, your event listener listens to any push of data to the data layer, excluding events.

The following example push events would be tracked by the listener:

```js
dataLayer.push({"data":"something"})
```

The following example push events would not be tracked by the listener:

```js
dataLayer.push({"event":"myevent"})
dataLayer.push({"event":"myevent","data":"something"})
```

### Listen for all events

If you select this option, your event listener listens to any event pushed to the data layer.

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

In the case that you specify an event, then the event listener tracks any events that match a specific string.

For example, setting `myEvent` when using this configuration results in the listener only tracking the following push event:

```js
dataLayer.push({"event":"myEvent"})
```

A (ECMAScript / JavaScript) regex can be used to match event names.

For example, setting 'myEvent\d' would track `myEvent` with a digit (\d):

```js
dataLayer.push({"event":"myEvent1"})
dataLayer.push({"event":"myEvent2"})
```

## Actions

### Push to Data Layer {#push-to-data-layer}

The extension provides you with two actions to push JSON to the data layer; a free text field to manually create the JSON to be pushed, and from version 1.2.0, a key-value multifield dialog.

#### Free text JSON

The free text action makes it possible to use data elements directly in the JSON. Within the JSON editor, data elements should be referenced using percent notation. For example, `%dataElementName%`.

```json
{
  "page": {
    "url": "%url%",
    "previous_url": "%previous_url%",
    "concatenated_values": "static string %dataElement%"
  }
}
```

#### Key-Value multifield

The newer key-value multifield dialog is a more user-friendly interface that allows a push to be configured without manually writing JSON.

### Google DL Reset to Computed State

The extension provides you with an action to reset the data layer. If used in a rule which processes a Google data layer change, the data layer is reset to the computed state of the data layer at the time the rule was triggered. If the action is used in a rule which does not process a Google data layer change, the action empties the data layer.

## Data elements

The provided data element can be used during the execution of a rule triggered by a Google data layer change (push event) or in an unrelated rule such as Library Loaded. In the former case, the data element returns a value taken from the computed state at the time of the data layer change. In the latter case, the computed state at the time of rule execution is used.

A toggle switch allows you to select whether the data element should return values from the entire computed state, or only from event information (if used in a rule triggered by a data layer change).

The data element can therefore return:

- Empty field: data layer computed state.
- Field with key (such as page.previous_url in the example above): value of the key in the event object or computed state.

## Additional Information

The extension's data element and event dialogs contain detailed usage information and examples.

Additional general information is in the [project README](https://github.com/adobe/reactor-extension-googledatalayer/blob/main/README.md)
