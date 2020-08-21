---
title: Sending Data to Adobe Analytics
seo-title: Sending Data to Adobe Analytics with Adobe Experience Platform Web SDK
description: Learn how to send Data to Adobe Analytics with Experience Platform Web SDK
seo-description: Learn how to send Data to Adobe Analytics with Experience Platform Web SDK
keywords: adobe analytics;analytics;mapped data;mapped vars;
---

# Sending Data to Adobe Analytics

The Adobe Experience Platform [!DNL Web SDK] can send data to Adobe Analytics. This works by translating `xdm` into a format the Adobe Analytics can use.

## Setup

Adobe Analytics automatically picks up the data you are sending if you have a report suite mapped in the Customer Config UI. Here you can map one or more reportings to a given config. After a report suite is mapped, the data will automatically begin flowing.

## Automatically Mapped Data

The Adobe Experience Platform [!DNL Edge Network] automatically maps many XDM variables automatically. The complete list of automatically mapped variables is listed [here](../analytics/automatically-mapped-vars.md).

## Manually Mapped Data

All data collected by the edge network can be accessed via processing rules. The data is flattened using dot notation and available as contextData.

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

![Processing Rules Interface](../../../assets/edge_analytics_processing_rules.png)
