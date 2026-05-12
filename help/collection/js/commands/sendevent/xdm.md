---
title: xdm
description: Learn how to send data to Adobe through the XDM schema-aligned object.
exl-id: 1d8ef191-aed6-4c8b-a1fd-614bd8ed73da
---
# `xdm`

The `xdm` object contains the data payload sent to Adobe. Fields set within this object map directly to elements defined in the dataset's schema.

Adobe Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and, therefore, gain value from data.

Set the `xdm` object when running the `sendEvent` command. Make sure that the hierarchy in this object matches the schema for the configured dataset. You can include both the `xdm` object and the [`data`](data.md) object in the same `sendEvent` command.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference)
});
```

The following example uses the [Commerce Details schema field group](/help/xdm/field-groups/event/commerce-details.md):

```javascript
alloy("sendEvent",{
  "xdm":{
    "commerce":{
      "productViews":{
        "value":1
      }
    },
    "productListItems":[
      {
        "SKU":"HT105",
        "name":"Large field hat",
      },
      {
        "SKU":"HT104",
        "name":"Small field hat",
      }
    ]
  }
});
```

## Use the `xdm` object using the Web SDK tag extension

The `xdm` object is available as either a [Variable data element](/help/tags/extensions/client/web-sdk/data-element-types.md#variable) or [XDM object data element](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) when using the Web SDK tag extension. Adobe recommends using a variable data element in most cases.
