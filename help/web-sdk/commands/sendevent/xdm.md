---
title: xdm
description: The schema-aligned object sent to Adobe.
---
# `xdm`

The `xdm` object contains the data payload sent to Adobe. Fields set within this object map directly to elements defined in the dataset's schema.

Adobe Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and, therefore, gain value from data.

This field has a maximum limit of 32 KB.

## Configure the XDM object using the Web SDK extension

Set the **[!UICONTROL XDM]** field within the actions of a tag rule. The [XDM object](/help/tags/extensions/client/web-sdk/data-element-types.md#xdm-object) provides an intuitive interface to map other data elements to their respective XDM fields.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Provide the data element containing the desired object in the **[!UICONTROL XDM]** field.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Configure the XDM object using the Web SDK JavaScript library

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
