---
title: Using Adobe Analytics with Platform Web SDK
description: Learn how to send data to Adobe Analytics with the Adobe Experience Platform Web SDK.
keywords: adobe analytics;analytics;mapped data;mapped vars;
exl-id: b18d1163-9edf-4a9c-b247-cd1aa7dfca50
---
# Using Adobe Analytics with Platform Web SDK

The Adobe Experience Platform Web SDK can send data to Adobe Analytics through the Adobe Experience Platform Edge Network. Edge translates the XDM object into a format that Adobe Analytics understands.

## Setup

Adobe Analytics automatically picks up the data you are sending if you have a report suite mapped in the Customer Config UI. Here you can map one or more reportings to a given config. After a report suite is mapped, the data will automatically begin flowing.

## XDM field group

To make it easier to capture the most common Adobe Analytics metrics, we provide an Analytics field group that you can use. For more details on this schema, see the documenation for the [Adobe Analytics ExperienceEvent Full Extension schema field group](../../../xdm/field-groups/event/analytics-full-extension.md)

## Automatically mapped data

The Adobe Experience Platform [!DNL Edge Network] automatically maps many XDM variables. The complete list of these variables is listed [here](automatically-mapped-vars.md).

## Manually mapped data

Any data that is not automatically mapped by the [!DNL Edge Network] can be accessed via processing rules. The data is flattened using dot notation and available as contextData.

If you had a schema that looked like this.

```javascript
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

Then these would be the context data keys available to you.

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

Here is an example of a processing rule that would use this data.

![Processing Rules Interface](./assets/edge_analytics_processing_rules.png)

>[!NOTE]
>
>With the Edge Network collection, all events are sent to Analytics as well as to any other services you have configured for your datastream. For example, if you have both Analytics and Target configured as services and you make separate calls for personalization and for Analytics, both events will be sent to Analytics as well as Target. These events will be recorded in Analytics reporting and can affect metrics like bounce rate.


---
title: Manually Mapping Adobe Analytics Variables in the Adobe Experience Platform Web SDK
description: Learn how to manually map variables into Adobe Analytics using processing rules in the Experience Platform Web SDK.
seo-description: Manually map variables into Adobe Analytics using processing rules with Web SDK
keywords: adobe analytics;analytics;variables;mapping variables;map variables;contextData;context Data;Processing rules;rules;xdm;schema;
exl-id: 395050c1-8d39-4da8-acea-6e618ed662dd
---
# Manually mapping variables in Adobe Analytics

Adobe Experience Platform [!DNL Web SDK] can map certain variables automatically but custom variables must be manually mapped.

For XDM data that is not automatically mapped to [!DNL Analytics], you can use [context data](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html) to match your [schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html). Then it can be mapped into [!DNL Analytics] using [processing rules](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules-configuration/t-processing-rules.html) to populate [!DNL Analytics] variables. 
 
Also, you can use a default set of actions and product lists to send or retrieve data with Adobe Experience Platform Web SDK. To do this, see [Collect commerce and product information](https://experienceleague.adobe.com/docs/experience-platform/edge/data-collection/collect-commerce-data.html).

## Context data

To be used by [!DNL Analytics], XDM data is flattened using dot notation and made available as `contextData`. The following list of value pairs shows an example of what the `context data` looks like when it is flattened:

```json
{
  "bh": "900",
  "bw": "1680",
  "c": "24",
  "c.a.d.key.[0]": "value1",
  "c.a.d.key.[1]": "value2",
  "c.a.d.object.key1": "value1",
  "c.a.d.object.key2.[0]": "value2",
  "c.a.x.environment.browserdetails.javascriptenabled": "true",
  "c.a.x.environment.type": "browser",
  "cust_hit_time_gmt": "1579781427",
  "g": "http://example.com/home",
  "gn": "home",
  "j": "1.8.5",
  "k": "Y",
  "s": "1680x1050",
  "tnta": "218287:1:0|0,218287:1:0|2,218287:1:0|1,218287:1:0|32767,218287:1:0|1,218287:1:0|0,218287:1:0|1,218287:1:0|0,218287:1:0|1",
  "user_agent": "Mozilla/5.0 AppleWebKit/537.36 Safari/537.36",
  "v": "Y"
}
```

## Processing rules

All data collected by the edge network can be accessed via [processing rules](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules-configuration/t-processing-rules.html). In [!DNL Analytics], you can use processing rules to incorporate context data into [!DNL Analytics] variables. 

For example, in the following rule, Adobe Analytics is set to populate **Internal Search terms (eVar2)** with the data associated with **a.x._atag.search.term(Context Data)**.

![](assets/examplerule.png)

---
title: Sending Data to Adobe Analytics Using the Adobe Experience Platform Web SDK
description: Learn how to send data to Adobe Analytics using the Adobe Experience Platform Web SDK.
keywords: adobe analytics;analytics;sendEvent;s.t();s.tl();webPageDetails;pageViews;webInteraction;web Interaction;page views;link tracking;links;track links;clickCollection;click collection;
exl-id: cec4a9eb-2079-4386-88da-9b995e0673e6
---
# Sending data to Adobe Analytics

Whereas in the past there were different functions to distinguish between a page view and a link (for example, `s.t(), s.tl()`), in the Web SDK there is just the `sendEvent` command. The data you send with an event determines whether it should be a page view or a link. [Learn more about tracking links](../track-links.md).

## Sending a page view

You can specify a page view by setting the `web.webPageDetails.pageViews.value=1` variable.

```javascript
alloy("sendEvent", {
  "xdm": {
    "web": {
      "webPageDetails": {
        "pageViews": {
            "value":1
         }
      }
    }
  }
});
```

Although Analytics technically records a page view even if this variable is not set, it is a best practice to set this variable whenever you want to record a page view to be explicit in your data and to future proof your implementation.