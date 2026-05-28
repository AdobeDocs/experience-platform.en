---
title: Verizon MediaYahoo DataX connection
description: DataX is an aggregate Verizon Media/Yahoo infrastructure that hosts various components that enable Verizon Media/Yahoo to exchange data with its external partners in a secure, automated and scalable manner.
exl-id: 7d02671d-8650-407d-9c9f-fad7da3156bc
TQID: https://experienceleague.adobe.com/SrW0EeYFD5UaTI0PqW2-a5iT5CD-m1xw5oQ8ZETObyw
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: f8667931-f646-4dd3-af2a-b9d0cb8098ad
    internal-label: Taxonomy
---
# [!DNL Verizon Media/Yahoo DataX] connection

## Overview {#overview}

[!DNL DataX] is an aggregate [!DNL Verizon Media/Yahoo] infrastructure that hosts various components that enable [!DNL Verizon Media/Yahoo] to exchange data with its external partners in a secure, automated and scalable manner.

>[!IMPORTANT]
>
>This destination connector and documentation page are created and maintained by [!DNL Verizon Media/Yahoo]'s [!DNL DataX] team. For any inquiries or update requests, contact them directly at [dataoperations@yahooinc.com](mailto:dataoperations@yahooinc.com)

## Prerequisites {#prerequisites}

**MDM ID**

This is a unique identifier in [!DNL Yahoo DataX] and it is a mandatory field for setting up data exports to this destination. If you don't know this ID, contact your [!DNL Yahoo DataX] account manager.

**Taxonomy metadata**

The Taxonomy resource defines an extension over the Base [!DNL DataX] Metadata structure

```json
{

  >>(Base DataX Metadata)<<

        "extensions": { "action":
        {string}, "incrementalData":
        {
                "taxonomyId": {string}
                },
                "links": [{
                "rel": "https://datax.yahooapis.com/rels/fullTaxonomy", "title": "Full
                Taxonomy post processing",
                "href": {string}
                ]
        }
}
```

Read more about [Taxonomy Metadata](https://developer.verizonmedia.com/datax/guide/taxonomy/taxo-metadata/) in the [!DNL DataX] developer documentation.

## Rate limits and guardrails {#rate-limits-guardrails}

>[!IMPORTANT]
>
>When activating more than 100 audiences to [!DNL Verizon Media/Yahoo DataX], you might receive rate limiting errors from the destination. When activating audiences to this destination, try to activate less than 100 audiences in one activation dataflow. If you need to activate more segments, create a new destination on the same account.

[!DNL DataX] is rate-limited per the quota limits for taxonomy and audience posts outlined in the [DataX documentation](https://developer.verizonmedia.com/datax/guide/rate-limits/).


|Error Code | Error Message | Description|
|---------|----------|---------|
| 429 Too many requests | Rate Limit exceeded per hour **(Limit: 100)** | Number of requests allowed in an hour per provider.|

{style="table-layout:auto"}

## Supported identities {#supported-identities}

[!DNL Verizon Media] supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html#getting-started).

|Target Identity|Description|Considerations|
|---|---|---|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by [!DNL Adobe Experience Platform]. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Experience Platform] automatically hash the data on activation.|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | No | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

{style="table-layout:auto"}



Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}


## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (Email, GAID, IDFA) used in the Verizon Media destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Use Cases {#use-cases}

[!DNL DataX] APIs are available for advertisers that want to target a specific audience group keyed off email addresses in [!DNL Verizon Media] (VMG) can quickly create a new audience and push the desired audience group using VMG's near-real-time API.

## Connect to destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

![Yahoo DataX destination card in Experience Platform UI](/help/destinations/assets/catalog/advertising/yahoo-datax/catalog.png)

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL MDM ID]**: This is a unique identifier in [!DNL Yahoo DataX] and it is a mandatory field for setting up data exports to this destination. If you don't know this ID, contact your [!DNL Yahoo DataX] account manager.  With MDM IDs, data can be restricted for use only with a certain set of exclusive users (such as first party data for advertisers).

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to a destination](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to destinations.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

## Additional resources {#additional-resources}

For more information, read the [!DNL Yahoo/Verizon Media] [documentation on [!DNL DataX]](https://developer.verizonmedia.com/datax/guide/).
