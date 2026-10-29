---
title: data (Server SDK)
description: Send data that doesn't match your XDM schema with the sendEvent method of the Server SDK.
badge: Alpha
---
# `data` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `data` in the Server SDK `sendEvent` method. For the Web SDK, see [`data`](/help/collection/js/commands/sendevent/data.md).*

>[!ENDSHADEBOX]

The `data` object lets you send data that doesn't match an XDM schema. It is useful for data that a specific Adobe service reads directly, such as Adobe Analytics or Adobe Target, or for data that you map to XDM fields in your datastream. When data arrives at the datastream, you can use [Data Prep for Data Collection](/help/datastreams/data-prep.md) to map each field in the `data` object to an XDM field.

>[!IMPORTANT]
>
>Each property in the `data` object must be used in at least one of the following ways:
>
>* A service in the datastream is configured to read it.
>* It is mapped to an XDM field using Data Prep.
>
>If a property isn't mapped to an XDM field or used by a configured service, that data is permanently lost.

Set the `data` object when you call `sendEvent`. For data that you plan to map in the datastream, you can structure this object however you like. For data that a specific service reads, use the structure that the service expects. You can include both the `data` object and the [`xdm`](xdm.md) object in the same call. The `xdm` object must still include a [primary identity](xdm.md#primary-identity).

```js
await visitor.sendEvent({
  xdm: {
    eventType: "web.webpagedetails.pageViews",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  },
  data: {
    loyaltyTier: "gold",
    cartItemCount: 3
  }
});
```

The [`onBeforeEventSend`](../configure/onbeforeeventsend.md) callback receives the `data` object, so you can change it before the SDK sends the event.

## Use the `data` object with Adobe Analytics {#analytics}

You can use the `data` object to send data to an Adobe Analytics report suite without an XDM schema. Variables use the same syntax as AppMeasurement variables. See [Data object variable mapping to Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/data-var-mapping) in the Adobe Analytics implementation guide.

```js
await visitor.sendEvent({
  xdm: {
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  },
  data: {
    __adobe: {
      analytics: {
        pageName: "Order confirmation",
        eVar1: "Server-side value"
      }
    }
  }
});
```
