---
title: Verizon MediaYahoo DataX connection
description: DataX is an aggregate Verizon Media/Yahoo infrastructure that hosts various components that enable Verizon Media/Yahoo to exchange data with its external partners in a secure, automated and scalable manner.
exl-id: 7d02671d-8650-407d-9c9f-fad7da3156bc
---
# Verizon Media/Yahoo DataX connection

## Overview {#overview}

DataX is an aggregate Verizon Media/Yahoo infrastructure that hosts various components that enable Verizon Media/Yahoo to exchange data with its external partners in a secure, automated and scalable manner.

>[!IMPORTANT]
>
>This documentation page was created by Verizon Media/Yahoo's DataX team. For any inquiries or update requests, please contact them directly at [dataops@verizonmedia.com](mailto:dataops@verizonmedia.com)

## Prerequisites {#prerequisites}

**MDM ID**

This is a unique identifier in Yahoo DataX and it is a mandatory field for setting up data exports to this destination. If you don't know this ID, contact your Yahoo Data X account manager.

**Rate Limit**

DataX is rate-limited per the quota limits for taxonomy and audience posts outlined in the [DataX documentation](https://developer.verizonmedia.com/datax/guide/rate-limits/).


|Error Code | Error Message | Description|
|---------|----------|---------|
| 429 Too many requests | Rate Limit exceeded per hour **(Limit: 100)** | Number of requests allowed in an hour per provider.|

{style="table-layout:auto"}

**Taxonomy Metadata**

The Taxonomy resource defines an extension over the Base DataX Metadata structure

```
{

  >>(Base DataX Metadata)<<

        "extensions" : { "action" :
        {string}, "incrementalData" :
        {
                "taxonomyId": {string}
                },
                "links" : [{
                "rel"   : "https://datax.yahooapis.com/rels/fullTaxonomy", "title" : "Full
                Taxonomy post processing",
                "href": {string}
                ]
        }
}
```

Read more about [Taxonomy Metadata](https://developer.verizonmedia.com/datax/guide/taxonomy/taxo-metadata/) in the DataX developer documentation.

## Supported identities {#supported-identities}

Verizon Media supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#getting-started).

|Target Identity|Description|Considerations|
|---|---|---|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|

{style="table-layout:auto"}

## Export type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (Email) used in the Verizon Media destination.

## Use Cases {#use-cases}

DataX APIs are available for advertisers that want to target a specific audience group keyed off email addresses in Verizon Media (VMG) can quickly create a new segment and push the desired audience group using VMG's near-real-time API.

## Connect to destination {#connect}

![Yahoo DataX destination card in Platform UI](/help/destinations/assets/catalog/advertising/yahoo-datax/catalog.png)

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL MDM ID]**: This is a unique identifier in Yahoo DataX and it is a mandatory field for setting up data exports to this destination. If you don't know this Id, contact your Yahoo Data X account manager.  With MDM IDs, data can be restricted for use only with a certain set of exclusive users (such as first party data for advertisers).

## Activate segments to this destination {#activate}

Read [Activate profiles and segments to a destination](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to destinations.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

## Additional resources {#additional-resources}

For more information, read the Yahoo/Verizon Media [documentation on DataX](https://developer.verizonmedia.com/datax/guide/).
