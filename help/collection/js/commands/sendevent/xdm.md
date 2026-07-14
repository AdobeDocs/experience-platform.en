---
title: xdm
description: Learn how to send data to Adobe through the XDM schema-aligned object.
exl-id: 1d8ef191-aed6-4c8b-a1fd-614bd8ed73da
TQID: https://experienceleague.adobe.com/DO-YHT1JYbAdu6HIOmUEN4cNKE3ZSEtFhFWb4XXEhcA
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: eadea719-cf89-469b-a6fd-a236a7138047
    internal-label: Commerce
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
