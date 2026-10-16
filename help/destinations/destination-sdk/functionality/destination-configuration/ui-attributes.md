---
description: Learn how to configure the UI attributes, such as the documentation link, the destination card category, and the destination connection type and frequency, for destinations built with Destination SDK.
title: UI attributes
exl-id: aed8d868-c516-45da-b224-c7e99e4bfaf1
TQID: https://experienceleague.adobe.com/GjQp1-0lydYc3aELrcwhz-5lzpV0tZjZgCmnRYe2cnk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# UI attributes

UI attributes define the visual elements that Adobe should display for your destination card in the [!DNL Adobe Experience Platform] user interface, such as a logo, a link to the documentation page, a destination description, and its category and type.

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the following destination configuration overview pages:

* [Use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-destination-configuration)
* [Use Destination SDK to configure a file-based destination](../../guides/configure-file-based-destination-instructions.md#create-destination-configuration)

When [creating a destination](../../authoring-api/destination-configuration/create-destination-configuration.md) through Destination SDK, the `uiAttributes` section defines the following visual properties of your destination card:

* The URL of your destination documentation page in the [destination catalog](../../../catalog/overview.md).
* The category under which your destination appears in the [!DNL Experience Platform] UI.
* The data export frequency for your destination.
* The destination connection type, such as [!DNL Amazon S3] or [!DNL Azure Blob].
* The URL where you hosted the icon to be displayed in the destinations catalog card.

You can configure UI attributes via the `/authoring/destinations` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)

This article describes all the supported UI attributes that you can use for your destination, and shows what customers will see in the [!DNL Experience Platform] UI.

![A destination card in the Experience Platform interface showing the configured UI attributes, including the logo, category, and connection type.](../../assets/functionality/destination-configuration/ui-attributes.png)

>[!IMPORTANT]
>
>All parameter names and values supported by [!DNL Destination SDK] are **case sensitive**. To avoid case sensitivity errors, use the parameter names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | Yes |

{style="table-layout:auto"}

## Supported parameters {#supported-parameters}

```json
"uiAttributes":{
      "documentationLink":"http://www.adobe.com/go/YOURDESTINATION-en",
      "category":"cloudStorage",
      "connectionType":"S3",
      "frequency":"batch",
      "isBeta":"true"
   }
```

### `documentationLink` {#documentation-link}

`documentationLink` is a string parameter that refers to the documentation page in the [Destinations Catalog](../../../catalog/overview.md) for your destination. Every productized destination in [!DNL Adobe Experience Platform] must have a corresponding documentation page. [Learn how to create a destination documentation page](../../docs-framework/documentation-instructions.md) for your destination. Note that this is not required for private/custom destinations.

Use the following format: `http://www.adobe.com/go/destinations-YOURDESTINATION-en`, where `YOURDESTINATION` is the name of your destination. For a destination called Moviestar, you would use `http://www.adobe.com/go/destinations-moviestar-en`.

Users can see and visit your documentation link from the destinations catalog page in the UI. They need to browse to your destination card, then select **[!UICONTROL More actions]**, and then **[!UICONTROL View documentation]**, as shown in the following image.

![The More actions menu open on a destination card in the Experience Platform UI, with the View documentation option available.](../../assets/functionality/destination-configuration/ui-attributes-doc-link.png)

>[!NOTE]
>
>This link works only after Adobe sets your destination live and the documentation is published.

### `category` {#category}

`category` is a string parameter that refers to the category assigned to your destination in [!DNL Adobe Experience Platform]. For more information, read [Destination Categories](../../../destination-types.md). Use one of the following values: `adobeSolutions, advertising, analytics, cdp, cloudStorage, crm, customerSuccess, database, dmp, ecommerce, email, emailMarketing, enrichment, livechat, marketingAutomation, mobile, personalization, protocols, social, streaming, subscriptions, surveys, tagManagers, voc, warehouses, payments`.

Users can see the list of destination categories in the filters panel of the destination catalog, as shown in the following image.

![The destination catalog in the Experience Platform UI with the list of destination categories shown in the filters panel.](../../assets/functionality/destination-configuration/ui-attributes-category.png)

### `connectionType` {#connection-type}

`connectionType` is a string parameter that refers to the type of connection, depending on the destination. Supported values: <ul><li>`Server-to-server`</li><li>`Cloud storage`</li><li>`Azure Blob`</li><li>`Azure Data Lake Storage`</li><li>`S3`</li><li>`SFTP`</li><li>`DLZ`</li></ul>

Users can see the destination connection type in the [Browse](../../../ui/destinations-workspace.md#browse) tab of the destinations workspace.

![The Browse tab of the destinations workspace in the Experience Platform UI showing the connection type for a destination.](../../assets/functionality/destination-configuration/ui-attributes-connection.png)

### `frequency` {#frequency}

`frequency` is a string parameter that refers to the type of data export supported by your destination. Set to `Streaming` for API-based integrations, or `Batch` when you export files to your destinations.

Users can see the frequency type in the **[!UICONTROL Dataflow runs]** page of each destination connection.

![The Dataflow runs page of a destination connection in the Experience Platform UI showing the data export frequency type.](../../assets/functionality/destination-configuration/ui-attributes-frequency.png)

### `isBeta` {#isbeta}

If the destination that you are creating with Destination SDK is available to a limited number of customers, you might want to mark the destination card from the destination catalog as beta.

To do this, you can use the `isBeta: "true"` parameter in the UI attributes section of the destination configuration to mark the destination card appropriately.

![A destination card in the destination catalog marked with a beta badge in the Experience Platform UI.](../../assets/functionality/destination-configuration/ui-attributes-isbeta.png)

### `icon` {#icon}

You can add a logo icon to your destination, as shown in the following image.

![A destination card in the Experience Platform UI displaying a custom logo icon.](../../assets/functionality/destination-configuration/ui-attributes-icon.png)

To add a logo to your destination card, you need to share the desired image with the Adobe team when you [submit the destination for review](../../guides/submit-destination.md#logo).

## Next steps {#next-steps}

You now understand which UI attributes you can configure for your destination and where users see them in the [!DNL Experience Platform] UI.

To learn more about the other destination components, see the following articles:

* [Customer authentication](customer-authentication.md)
* [OAuth2 authorization](oauth2-authorization.md)
* [Customer data fields](customer-data-fields.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Destination delivery](destination-delivery.md)
* [Audience metadata configuration](audience-metadata-configuration.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
* [Historical profile qualifications](historical-profile-qualifications.md)
