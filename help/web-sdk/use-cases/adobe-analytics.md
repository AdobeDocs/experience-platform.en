---
title: Sending data to Adobe Analytics using the Web SDK
description: Learn how to send data to Adobe Analytics with the Adobe Experience Platform Web SDK.
keywords: adobe analytics;analytics;mapped data;mapped vars;
exl-id: b18d1163-9edf-4a9c-b247-cd1aa7dfca50
---
# Send data to Adobe Analytics using the Web SDK

The Adobe Experience Platform Web SDK can send data to Adobe Analytics through the Adobe Experience Platform Edge Network. When data arrives at the Edge Network, it translates the XDM object into a format that Adobe Analytics understands.

## XDM field group

To make it easier to capture the most common Adobe Analytics metrics, Adobe provides a field group geared towards Adobe Analytics that you can use. For more details on this schema, see [Adobe Analytics ExperienceEvent Full Extension schema field group](/help/xdm/field-groups/event/analytics-full-extension.md).

## Variable mapping

The Edge Network automatically maps many XDM variables. See [Analytics variable mapping in the Edge Network](https://experienceleague.adobe.com/docs/analytics/implementation/aep-edge/variable-mapping.html) in the Adobe Analytics implementation guide for a comprehensive variable list of automatically mapped variables.

Any variables that are not automatically mapped are available as [Context data variables](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html). You can then use [Processing rules](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/manage-report-suites/edit-report-suite/report-suite-general/c-processing-rules/c-processing-rules-configuration/processing-rules-about.html) to map context data variables to Analytics variables. For example, if you had a custom XDM schema that looked like the following:

```js
{
  key:value,
  object:{
    key1:value1,
    key2:value2
  },
  array:[
    "v0",
    "v1",
    "v2"
  ],
  arrayofobjects:[
    {
      obj1key:objval0
    },
    {
      obj2key:objval1
    }
  ]
}
```

Then these would be the context data keys available to you in the Processing rules interface:

```javascript
a.x.key //value
a.x.object.key1 //value1
a.x.object.key2 //value2
a.x.array.0 //v0
a.x.array.1 //v1
a.x.array.2 //v2
a.x.arrayofobjects.0.obj1key //objval0
a.x.arrayofobjects.1.obj2key //objval1
```

>[!NOTE]
>
>With the Edge Network collection, all events are sent to Analytics and any other services that you have configured for your datastream. For example, if you have both Analytics and Target configured as services and you make separate calls for personalization and for Analytics, both events are sent to Analytics and Target. These events are recorded in Analytics reporting and can affect metrics like bounce rate.

## Page views and link tracking calls

AppMeasurement in Adobe Analytics uses separate method calls for page views ([`t()` method](https://experienceleague.adobe.com/docs/analytics/implementation/vars/functions/t-method.html)) and link tracking calls ([`tl()` method](https://experienceleague.adobe.com/docs/analytics/implementation/vars/functions/tl-method.html)). The Web SDK instead only provides the [`sendEvent`](../commands/sendevent/overview.md) command for sending both page views and link tracking. The data that you include in an event determines if it is a [page view](https://experienceleague.adobe.com/docs/analytics/components/metrics/page-views.html) or a [page event](https://experienceleague.adobe.com/docs/analytics/components/metrics/page-events.html) in Adobe Analytics.

By default, all events are considered page views in Adobe Analytics. If you want to set a Web SDK event to an Adobe Analytics link tracking call, set the following XDM fields:

* **`web.webInteraction.URL`**: The link URL.
* **`web.webInteraction.name`**: The Custom link, Download link, or Exit link dimension name, depending on the value in `web.webInteraction.type`
* **`web.webInteraction.type`**: Determines the type of link clicked. Valid values include `other` (Custom links), `download` (Download links), and `exit` (Exit links).

If you enable [`clickCollectionEnabled`](../commands/configure/clickcollectionenabled.md) in the `configure` command, these XDM fields are populated for you.
