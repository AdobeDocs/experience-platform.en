---
title: Sending data to Adobe Analytics using the Web SDK
description: Learn how to send data to Adobe Analytics with the Adobe Experience Platform Web SDK.
exl-id: b18d1163-9edf-4a9c-b247-cd1aa7dfca50
---

# Send data to Adobe Analytics using the Web SDK

The Experience Platform Web SDK can send data to Adobe Analytics through the Experience Platform Edge Network. Adobe provides several options to send data to Adobe Analytics using the Web SDK:

* Add the [**[!UICONTROL Adobe Analytics ExperienceEvent field group]**](../../xdm/field-groups/event/analytics-full-extension.md) to your schema, then use the [`XDM` object](../commands/sendevent/xdm.md).
* Use the [`data` object](../commands/sendevent/data.md) to send data to Adobe Analytics without an XDM schema.
* Use automatically generated [context data variables](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/page-vars/contextdata) and [processing rules](https://experienceleague.adobe.com/en/docs/analytics/admin/admin-tools/manage-report-suites/edit-report-suite/report-suite-general/c-processing-rules/c-processing-rules-configuration/processing-rules-about).

## Use the `XDM` object {#use-xdm-object}

If you want to use a pre-defined schema specific to Adobe Analytics, you can add the [Adobe Analytics ExperienceEvent schema field group](../../xdm/field-groups/event/analytics-full-extension.md) to your schema. Once added, you can populate this schema using the `xdm` object in the Web SDK to send data to a report suite. When data arrives at the Edge Network, it translates the XDM object into a format that Adobe Analytics understands.

There are two ways you can send data to Adobe Analytics through Web SDK:

* [Send data to Adobe Analytics using the Web SDK tag extension](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/web-sdk/web-sdk-tag-extension)
* [Send data to Adobe Analytics using the Web SDK JavaScript library](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/web-sdk/web-sdk-javascript-library)

See [XDM object variable mapping to Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/xdm-var-mapping) in the Adobe Analytics implementation guide for a full reference of XDM fields and how they map to Analytics variables.

## Use the `data` object {#use-data-object}

As an alternative to using the XDM object, you can use the data object instead. The data object is geared towards implementations that currently use AppMeasurement, making the upgrade to the Web SDK much easier.

Depending on whether you are using AppMeasurement or the Analytics tag extension, see the following guides for details on how to migrate to Web SDK:

* [Migrate from the Adobe Analytics tag extension to the Web SDK tag extension](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/web-sdk/analytics-extension-to-web-sdk)
* [Migrate from AppMeasurement to the Web SDK](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/web-sdk/appmeasurement-to-web-sdk)

See the documentation on [data object variable mapping to Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/data-var-mapping) in the Adobe Analytics implementation guide for a full reference of data object fields and how they map to Analytics variables.

## Use context data variables {#use-context-data-variables}

Any variables that are not automatically mapped are available as [context data variables](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/page-vars/contextdata). You can then use [processing rules](https://experienceleague.adobe.com/en/docs/analytics/admin/admin-tools/manage-report-suites/edit-report-suite/report-suite-general/c-processing-rules/c-processing-rules-configuration/processing-rules-about) to map context data variables to Analytics variables. For example, if you had a custom XDM schema that looked like the following:

```json
{
  "xdm": {
    "key":"value",
    "animal": {
      "species": "Raven",
      "size": "13 inches"
    },
    "array": [
      "v0",
      "v1",
      "v2"
    ],
    "objectArray":[{
      "ad1": "300x200",
      "ad2": "60x240",
      "ad3": "600x50"
    }]
  }
}
```

Then these fields would be the context data keys available to you in the Processing rules interface:

```javascript
a.x.key //value
a.x.animal.species //Raven
a.x.animal.size //13 inches
a.x.array.0 //v0
a.x.array.1 //v1
a.x.array.2 //v2
a.x.objectarray.0.ad1 //300x200
a.x.objectarray.1.ad2 //60x240
a.x.objectarray.2.ad3 //600x50
```

## FAQ

+++How do I differentiate page view calls from link tracking calls in the Web SDK?

AppMeasurement in Adobe Analytics uses separate method calls for page views ([`t()` method](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/functions/t-method)) and link tracking calls ([`tl()` method](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/functions/tl-method)). The Web SDK instead only provides the [`sendEvent`](../commands/sendevent/overview.md) command for sending both page views and link tracking. The data that you include in an event determines if it is a [page view](https://experienceleague.adobe.com/en/docs/analytics/components/metrics/page-views) or a [page event](https://experienceleague.adobe.com/en/docs/analytics/components/metrics/page-events) in Adobe Analytics.

By default, all events are considered page views in Adobe Analytics. If you want to set a Web SDK event to an Adobe Analytics link tracking call, set the following fields:

* **XDM object**: `xdm.web.webInteraction.name`, `web.webInteraction.type`, and `web.webInteraction.URL`
* **Data object**: `data.__adobe.analytics.linkName`, `data.__adobe.analytics.linkType`, and `data.__adobe.analytics.linkURL`
* **Context data**: Not supported

See the [`tl()` method](https://experienceleague.adobe.com/en/docs/analytics/implementation/vars/functions/tl-method) in the Adobe Analytics implementation guide for more information.

If you enable [`clickCollectionEnabled`](../commands/configure/clickcollectionenabled.md) in the `configure` command, these fields are populated for you.

+++

+++How does a datastream differentiate data from other services with data meant for Adobe Analytics?

All events sent to a datastream are passed to all configured services. For example, if you make separate calls for personalization and Analytics, both events are sent to Analytics and Target. These events are recorded in Analytics reporting and can affect metrics like bounce rate.

If you use the Web SDK, these calls are typically combined in the [`sendEvent`](../commands/sendevent/overview.md) command.

+++
