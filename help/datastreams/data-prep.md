---
title: Data Prep for Data Collection
description: Learn how to map your data to an Experience Data Model (XDM) event schema when configuring a datastream for the Adobe Experience Platform Web and Mobile SDKs.
exl-id: 87a70d56-1093-445c-97a5-b8fa72a28ad0
---
# Data Prep for Data Collection

Use [!DNL Data Prep], an [!DNL Adobe Experience Platform] service, to map, transform, and validate data to and from [Experience Data Model (XDM)](/help/xdm/home.md). When configuring an Experience Platform-enabled [datastream](/help/datastreams/overview.md), you can use [!DNL Data Prep] capabilities to map your source data to XDM when sending it to the [!DNL Adobe Experience Platform Edge Network].

All data sent from a web page must land in Experience Platform as XDM. You have three ways to translate data from an on-page data layer to the XDM accepted by Experience Platform:

1. Reformat the data layer into XDM on the web page itself.
2. Use the [!DNL Tags] built-in data elements functionality to reformat a web page's existing data layer format into XDM.
3. Reformat a web page's existing data layer format into XDM via the [!DNL Edge Network], using Data Prep for Data Collection.

This guide covers the third option.

## When to use Data Prep for Data Collection {#when-to-use-data-prep}

Data Prep for Data Collection is useful in two situations:

1. The website has a well-formed, governed, and maintained data layer, and you prefer to send it directly to the [!DNL Edge Network] instead of using JavaScript manipulation to convert it to XDM on the page (either via [!DNL Tags] data elements or via manual JavaScript manipulation).
2. A tagging system other than [!DNL Tags] is deployed on the site.

## Send an existing data layer to the Edge Network via Web SDK {#send-datalayer-via-websdk}

The existing data layer must be sent using the [`data`](/help/collection/js/commands/sendevent/data.md) object within the `sendEvent` command.

If you are using [!DNL Tags], you must use the **[!UICONTROL Data]** field of the [**[!UICONTROL Send Event]**](/help/tags/extensions/client/web-sdk/actions/send-event.md) action type.

The rest of this guide covers how to map the data layer to XDM standards after it has been sent by the Web SDK.

>[!NOTE]
>
>For comprehensive guidance on all [!DNL Data Prep] capabilities, including transformation functions for calculated fields, see the following documentation:
>
>* [Data Prep overview](/help/data-prep/home.md)
>* [Data Prep mapping functions](/help/data-prep/functions.md)
>* [Handling data formats with Data Prep](/help/data-prep/data-handling.md)

This guide covers how to map your data within the UI. To complete the steps, start the process of creating a datastream up to (and including) the [basic configuration step](/help/datastreams/configure.md#create).

For a quick demonstration of the Data Prep for Data Collection process, see the following video:

>[!VIDEO](https://video.tv.adobe.com/v/342120?quality=12&enable10seconds=on&speedcontrol=on)

## Provide sample data {#select-data}

Select **[!UICONTROL Save and Add Mapping]** after completing the basic configuration for a datastream, and the **[!UICONTROL Select data]** step appears. From here, you must provide a sample JSON object that represents the structure of the data that you plan on sending to Experience Platform.

To capture properties directly from your data layer, the JSON object must have a single root property `data`. The subproperties of the `data` object should then be constructed in a way that maps to the data layer properties that you want to capture. Select the section below to view an example of a properly formatted JSON object with a `data` root.

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

+++

You can select the option to upload the object as a file, or paste the raw object into the provided textbox instead. If the JSON is valid, a preview schema is displayed in the right panel. Select **[!UICONTROL Next]** to continue.

![JSON sample of expected incoming data.](assets/data-prep/select-data.png)

>[!NOTE]
>
>Use a sample JSON object that represents every data layer element that may be used on any page. For example, not all pages use shopping cart data layer elements. However, include shopping cart data layer elements in this sample JSON object.

## Map your data {#mapping}

The **[!UICONTROL Mapping]** step appears, allowing you to map the fields in your source data to that of the target event schema in Experience Platform. From here, you can configure the mapping in two ways:

* [Create mapping rules](#create-mapping) for this datastream through a manual process.
* [Import mapping rules](#import-mapping) from an existing datastream.

>[!IMPORTANT]
>
>[!DNL Data Prep] mapping overrides `identityMap` XDM payloads, which can further impact profile matching against [!DNL Real-Time CDP] audiences.

### Create mapping rules {#create-mapping}

To create a mapping rule, select **[!UICONTROL Add new mapping]**.

![Adding a new mapping.](assets/data-prep/add-new-mapping.png)

Select the source icon (![Source field selector icon](/help/images/icons/source.png)), and in the dialog that appears select the source field that you want to map in the provided canvas. Once you have chosen a field, use the **[!UICONTROL Select]** button to continue.

![Selecting the field to be mapped in the source schema.](assets/data-prep/source-mapping.png)

Next, select the schema icon (![Target schema selector icon](/help/images/icons/schema.png)) to open a similar dialog for the target event schema. Choose the field that you want to map the data to before confirming with **[!UICONTROL Select]**.

![Selecting the field to be mapped in the target schema.](assets/data-prep/target-mapping.png)

The mapping page reappears with the completed field mapping shown. The **[!UICONTROL Mapping progress]** section updates to reflect the total number of fields that have been successfully mapped.

![Field successfully mapped with progress reflected.](assets/data-prep/field-mapped.png)

>[!TIP]
>
>If you want to map an array of objects (in the source field) to an array of different objects (in the target field), add `[*]` after the array name in the source and destination field paths, as shown below.
>
>![Array object mapping.](assets/data-prep/array-object-mapping.png)

### Import existing mapping rules {#import-mapping}

If you have previously created a datastream, you can reuse its configured mapping rules for a new datastream. 

>[!WARNING]
>
>Importing mapping rules from another datastream overwrites any field mappings that you might have added before the import.

To start, select **[!UICONTROL Import Mapping]**.

![Import Mapping button being selected.](assets/data-prep/import-mapping-button.png)

In the dialog that appears, select the datastream whose mapping rules you want to import. Once the datastream is chosen, select **[!UICONTROL Preview]**.

![Selecting an existing datastream.](assets/data-prep/select-mapping-rules.png)

>[!NOTE]
>
>Datastreams can only be imported within the same [sandbox](/help/sandboxes/home.md). You cannot import a datastream from one sandbox to another.

The next screen shows a preview of the saved mapping rules for the selected datastream. Make sure that the displayed mappings are what you expect, and then select **[!UICONTROL Import]** to confirm and add the mappings to the new datastream.

![Mapping rules to be imported.](assets/data-prep/import-mapping-rules.png)

>[!NOTE]
>
>If any source fields in the imported mapping rules are not included in the sample JSON data that you [provided earlier](#select-data), those field mappings will not be included in the import.

### Complete the mapping {#complete-mapping}

Continue mapping the remaining fields to the target schema. While you do not have to map all available source fields, any fields in the target schema that are set as required must be mapped to complete this step. The **[!UICONTROL Required fields]** counter indicates how many required fields are not yet mapped in the current configuration.

When the required field count reaches zero and you are satisfied with your mapping, select **[!UICONTROL Save]** to finalize your changes.

![The mapping interface showing all required fields successfully mapped with a zero required field count.](assets/data-prep/mapping-complete.png)

## Next steps {#next-steps}

This guide covered how to map your data to XDM when setting up a datastream in the UI. If you were following the general datastreams tutorial, you can now return to the step on [viewing datastream details](/help/datastreams/overview.md).
