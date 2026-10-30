---
title: xdm (Server SDK)
description: Send data that matches your XDM schema with the sendEvent method of the Server SDK.
badge: Alpha
---
# `xdm` (Server SDK)

>[!BEGINSHADEBOX]

*This page describes `xdm` in the Server SDK `sendEvent` method. For the Web SDK, see [`xdm`](/help/collection/js/commands/sendevent/xdm.md).*

>[!ENDSHADEBOX]

The `xdm` object contains the data that you send to Adobe in a structure that matches your [Experience Data Model (XDM)](/help/xdm/home.md) schema. Fields that you set in this object map directly to fields in the schema of the dataset that your datastream sends data to.

Make sure that the hierarchy in this object matches the schema for the configured dataset. You can include both the `xdm` object and the [`data`](data.md) object in the same `sendEvent` call.

The following example uses the [Commerce Details schema field group](/help/xdm/field-groups/event/commerce-details.md):

```js
await visitor.sendEvent({
  xdm: {
    eventType: "commerce.productViews",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    },
    commerce: {
      productViews: { value: 1 }
    },
    productListItems: [
      { SKU: "HT105", name: "Large field hat" },
      { SKU: "HT104", name: "Small field hat" }
    ]
  }
});
```

## Include a primary identity {#primary-identity}

Each event that the Server SDK sends must include a primary identity in `xdm.identityMap`. In a browser, the Edge Network can identify the visitor from their cookies. On a server-to-server request, it needs an identity in the event itself. If no identity in the event is marked as primary, the Edge Network rejects the event with the error code `EXEG-0306-400`, and `sendEvent` rejects.

Set `primary: true` on exactly one identity:

```js
xdm: {
  identityMap: {
    Email: [
      { id: "visitor@example.com", primary: true }
    ],
    CRMID: [
      { id: "1234567" }
    ]
  }
}
```

Each key in `identityMap` is an [identity namespace](/help/identity-service/features/namespaces.md) that is defined in your organization, and each value is an array of identities in that namespace. See [Using identityMap](/help/collection/identity/identity-map.md) for more information.

## Data that the SDK adds {#automatic}

The SDK adds `xdm.implementationDetails` to every event, and can add `xdm.web.webPageDetails.URL` from the request's `Referer` header. If you also set `xdm.web.webPageDetails.URL`, your value is used. See [Context and forwarded headers](../../concepts/context-and-headers.md).

If you set both `xdm.eventType` and the [`type`](eventtype.md) option, the value in `xdm.eventType` is used.
