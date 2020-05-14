---
title: Sending Data to Adobe Analytics
seo-title: Sending Data to Adobe Analytics with Adobe Experience Platform Web SDK
description: Learn how to send Data to Adobe Analytics with Experience Platform Web SDK
seo-description: Learn how to send Data to Adobe Analytics with Experience Platform Web SDK
---

# Sending Data to Adobe Analytics

The Adobe Experience Platform Web SDK can send data to Adobe Analytics. This works by translating `xdm` into a format the Adobe Analytics can use.

## Setup

Adobe Analytics automatically picks up the data you are sending if you have a report suite mapped in the Customer Config UI. Here you can map one or more reportings to a given config. After a report suite is mapped, the data will automatically begin flowing.

## Automatically Mapped Data

The Adobe Experience Platform Edge Network automatically maps many XDM variables automatically. The complete list of automatically mapped variables is listed [here](../analytics/automatically-mapped-vars.md).

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
    v1,
    v2,
    v3
  ],
  arrayofobjects:[
    {
      obj1key:objval1
    },
    {
      obj2key:objval2
    }
  ]
}
```

Then these would be the context data keys available to you.

```javascript
a.x.key //value
a.x.object.key1 //value1
a.x.object.key2 //value2
a.x.array[0] //v1
a.x.array[1] //v2
a.x.array[3] //v3
a.x.arrayofobjects[1].obj1key //objval1
a.x.arrayofobjects[2].obj2key //objval2
```

Here is an example of a processing rule that would use this data.

![Processing Rules Interface](../../../assets/edge_analytics_processing_rules.png)
