---
title: Data Prep for Data Collection
description: Learn how to map your data to an Experience Data Model (XDM) event schema when configuring a datastream for the Adobe Experience Platform Web and Mobile SDKs.
---
# Data Prep for Data Collection

Data Prep is an Adobe Experience Platform service that allows you to map, transform, and validate data to and from [Experience Data Model (XDM)](../../xdm/home.md). When configuring a Platform-enabled [datastream](./overview.md), you can use Data Prep capabilities to map your source data to XDM when sending it to the Platform Edge Network.

>[!NOTE]
>
>For comprehensive guidance on all Data Prep capabilities, including transformation functions for calculated fields, refer to the following documentation:
>
>* [Data Prep overview](../../data-prep/home.md)
>* [Data Prep mapping functions](../../data-prep/functions.md)
>* [Handling data formats with Data Prep](../../data-prep/data-handling.md)

This guide covers how to map your data within the Data Collection UI. To follow along with the steps, start the process of creating a datastream up to (and including) the [basic configuration step](./overview.md#configure).

For a quick demonstration of the Data Prep for Data Collection process, refer to the following video:

>[!VIDEO](https://video.tv.adobe.com/v/342120?quality=12&enable10seconds=on&speedcontrol=on)

## [!UICONTROL Select data]

Select **[!UICONTROL Save and Add Mapping]** after completing the basic configuration for a datastream, and the **[!UICONTROL Select data]** step appears. From here, you must provide a sample JSON object that represents the structure of the data that you plan on sending to Platform.

To capture properties directly from your data layer, the JSON object must have a single root property `data`. The sub-properties of the `data` object should then be constructed in a way that maps to the data layer properties that you want to capture. Select the section below to view an example of a properly formatted JSON object with a `data` root.

+++Sample JSON file with `data` root

```json
{
  "data": {
    "eventMergeId": "cce1b53c-571f-4f36-b3c1-153d85be6602",
    "eventType": "view:load",
    "timestamp": "2021-09-30T14:50:09.604Z",
    "web": {
      "webPageDetails": {
        "siteSection": "Product section",
        "server": "example.com",
        "name": "product home",
        "URL": "https://www.example.com"
      },
      "webReferrer": {
        "URL": "https://www.adobe.com/index2.html",
        "type": "external"
      }
    },
    "commerce": {
      "purchase": 1,
      "order": {
        "orderID": "1234"
      }
    },
    "product": [
      {
        "productInfo": {
          "productID": "123"
        }
      },
      {
        "productInfo": {
          "productID": "1234"
        }
      }
    ],
    "reservation": {
      "id": "anc45123xlm",
      "name": "Embassy Suits",
      "SKU": "12345-L",
      "skuVariant": "12345-LG-R",
      "priceTotal": "112.99",
      "currencyCode": "USD",
      "adults": 2,
      "children": 3,
      "productAddMethod": "PDP",
      "_namespace": {
        "test": 1,
        "priceTotal": "112.99",
        "category": "Overnight Stay"
      },
      "freeCancellation": false,
      "cancellationFee": 20,
      "refundable": true
    }
  }
}
```

+++

To capture properties from an XDM object data element, the same rules apply to the JSON object, but the root property must be keyed as `xdm` instead. Select the section below to view an example of a properly formatted JSON object with an `xdm` root.

+++Sample JSON file with `xdm` root

```json
{
  "xdm": {
    "environment": {
      "type": "browser",
      "browserDetails": {
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36",
        "javaScriptEnabled": true,
        "javaScriptVersion": "1.8.5",
        "cookiesEnabled": true,
        "viewportHeight": 900,
        "viewportWidth": 1680,
        "javaEnabled": true
      },
      "domain": "adobe.com",
      "colorDepth": 24,
      "viewportHeight": 1050,
      "viewportWidth": 1680
    },
    "device": {
      "screenHeight": 1050,
      "screenWidth": 1680
    }
  }
}
```

You can select the option to upload the object as a file, or paste the raw object into the provided textbox instead. If the JSON is valid, a preview schema is displayed in the right panel. Select **[!UICONTROL Next]** to continue.

![JSON sample of expected incoming data](../images/datastreams/select-data.png)

## [!UICONTROL Mapping]

The **[!UICONTROL Mapping]** step appears, allowing you to map the fields in your source data to that of the target event schema in Platform. 

If you have existing datastreams configured, you can import their mapping configurations for re-use in new datastreams. Select **[!UICONTROL Import Mapping]** to 0

To get started, select **[!UICONTROL Add new mapping]** to create a new mapping row.

![Adding a new mapping](../images/datastreams/add-new-mapping.png)

Select the source icon (![Source icon](../images/datastreams/source-icon.png)), and in the dialog that appears select the source field that you want to map in the provided canvas. Once you have chosen a field, use the **[!UICONTROL Select]** button to continue.

![Selecting the field to be mapped in the source schema](../images/datastreams/source-mapping.png)

Next, select the schema icon (![Schema icon](../images/datastreams/schema-icon.png)) to open a similar dialog for the target event schema. Choose the field that you want to map the data to before confirming with **[!UICONTROL Select]**.

![Selecting the field to be mapped in the target schema](../images/datastreams/target-mapping.png)

The mapping page reappears with the completed field mapping shown. The **[!UICONTROL Mapping progress]** section updates to reflect the total number of fields that have been successfully mapped.

![Field successfully mapped with progress reflected](../images/datastreams/field-mapped.png)

>[!TIP]
>
>If you want to map an array of objects (in the source field) to an array of different objects (in the target field), add `[*]` after the array name in the source and destination field paths, as shown below.
>
>![Array object mapping](../images/datastreams/array-object-mapping.png)

Continue following the above steps to map the rest of the fields to the target schema. While you do not have to map all available source fields, any fields in the target schema that are set as required must be mapped in order to complete this step. The **[!UICONTROL Required fields]** counter indicates how many required fields are not yet mapped in the current configuration.

Once the required fields count reaches zero and you are satisfied with your mapping, select **[!UICONTROL Save]** to finalize your changes.

![Mapping complete](../images/datastreams/mapping-complete.png)