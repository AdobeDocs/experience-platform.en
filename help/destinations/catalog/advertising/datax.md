---
title: Verizon Media's DataX Integration
description: DataX is an aggregate Verizon Media infrastructure that hosts various components that enable Verizon Media to exchange data with its external partners in a secure, automated and scalable manner.
---

# DataX Integration

## Overview

DataX is an aggregate Verizon Media infrastructure that hosts various components that enable Verizon Media to exchange data with its external partners in a secure, automated and scalable manner.

>[!IMPORTANT]. 
>
>This documentation page was created by Verizon Media's DataX team. For any inquiries or update requests, please contact them directly at [dataops@verizonmedia.com](mailto:dataops@verizonmedia.com)

## Prerequisites {#prerequisites}

**MDM ID**:

Is a mandatory field for users to connect to their selected destination.
An MDM ID is a A node’s (Segment) data can be restricted for use only with a certain set of exclusive users (such as first party data for advertisers)

**[Rate Limit](https://developer.verizonmedia.com/datax/guide/rate-limits/)**:

DataX is rate-limited per the following quota limits for taxonomy and audience posts:

* Error Code: 429 -  Too many requests
* Error Message - Rate Limit exceeded per hour (Limit: 100)
** Description - Number of requests allowed in an hour per provider

[Taxonomy Metadata](https://developer.verizonmedia.com/datax/guide/taxonomy/taxo-metadata/): 

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

## Supported identities {#supported-identities}

Verizon Media supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=en#getting-started).

|Target Identity|Description|Considerations|
|---|---|---|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|

{style="table-layout:auto"}

## Export type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (Email) used in the Verizon Media destination.

## Use Cases {#use-cases}
(Add 1-2 use cases for advertisers to use this new destination - VMG)

To help you better understand how and when you should use the DataX destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use Case #1

DataX APIs are available for advertisers that want to target a specific audience group keyed of email addresses in Verizon Media (VMG) can quickly create a new segment and push the desired audience group using VMG's near-real-time API.

*For mobile messaging platforms:*

*A home rental and sales platform wants to push mobile notifications to customers' Android and iOS devices to let them know that there are 100 updated listings in the area where they previously searched for a rental.*

## Connect to destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*Add the fields that customers must fill in when configuring a new destination. These fields are destination-specific and depend on your configuration in Destination SDK. Your destination's fields may not be the same as the ones listed below.*

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!MDM ID]**: An MDM ID is a A node’s (Segment) data can be restricted for use only with a certain set of exclusive users (such as first party data for advertisers).

## Activate segments to this destination {#activate}

Read [Activate profiles and segments to a destination](../../ui/activate-destinations.md) for instructions on activating audience segments to destinations.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).
