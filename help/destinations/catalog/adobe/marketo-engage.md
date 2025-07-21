---
title: Marketo Engage Destination
description: Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.
exl-id: 5ae5f114-47ba-4ff6-8e42-f8f43eb079f7
---
# Marketo Engage destination {#beta-marketo-engage-destination}

## Migration to unified Marketo Engage destination {#migration}

Adobe is consolidating the **[!UICONTROL (V2) Marketo Engage]** and **[[!UICONTROL Marketo Engage Person Sync]](marketo-engage-person-sync.md)** destinations into a single, unified **[!UICONTROL Marketo Engage]** destination card.

>[!IMPORTANT]
>
>The current **[!UICONTROL (V2) Marketo Engage]** destination card will be deprecated in **December 2025**.

This new destination offers all features from both previous versions, making it easier to manage your Marketo integrations with a single, streamlined workflow:

* **Two sync actions in one place:** Both **[!UICONTROL Profile Sync]** and **[!UICONTROL Audience Sync]** are available and enabled by default. You can choose to use either or both, depending on your requirements.
* **Simplified authentication:** You no longer need to provide a [!UICONTROL Client ID] or [!UICONTROL Client Secret]. Only your [!DNL Munchkin ID] and [!DNL Workspace ID] are required.

### Migration steps {#what-you-need-to-do}

To ensure a smooth transition to the new destination, review the following key points and required actions:

* All users of the existing **[!UICONTROL (V2) Marketo Engage]** destination must migrate to the new **[!UICONTROL Marketo Engage]** destination by December 2025.
* **Existing dataflows will not be migrated automatically.** You must [set up a new connection](../../ui/connect-destination.md) to the new **[!UICONTROL Marketo Engage]** destination and activate your audiences there. You can continue to use your existing audiences.

**To preserve your current sync behavior after migration:**

* If you only use **[!UICONTROL Audience Sync]** in the old **[!UICONTROL (V2) Marketo Engage]** and do not want to use **[!UICONTROL Profile Sync]**, make sure to disable **[!UICONTROL Profile Sync]** in your new destination setup.
* If you use **[!UICONTROL Profile Sync]** in the [[!UICONTROL Marketo Engage Person Sync]](marketo-engage-person-sync.md) destination and do not want to use **[!UICONTROL Audience Sync]**, make sure to disable **[!UICONTROL Audience Sync]** in your new destination setup.

<!-- 
Improvements in the Marketo V2 destination include:

* In the **[!UICONTROL Schedule segment]** step of the activation workflow, in Marketo V1, you needed to manually add a **Mapping ID** to successfully export data to Marketo. This manual step is not required anymore in Marketo V2.
* In the **[!UICONTROL Mapping]** step of the activation workflow, in Marketo V1, you were able to map XDM fields to only three target fields in Marketo: `firstName`, `lastName`, and `companyName`. With the Marketo V2 release, you can now map XDM fields to many more fields in Marketo. For more information, read the [supported attributes](#supported-attributes) section further below. -->

## Overview {#overview}

[!DNL Marketo Engage] is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.

The destination enables marketers to push audiences created in Adobe Experience Platform to Marketo where they will appear as static lists.

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Marketo Engage] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

*For mobile messaging platforms:*

*A home rental and sales platform wants to push mobile notifications to customers' Android and iOS devices to let them know that there are 100 updated listings in the area where they previously searched for a rental.*

### Use case #2 {#use-case-2}

*For social network platforms:*

*An athletic apparel brand wants to reach existing customers through their social media accounts. The apparel brand can ingest email addresses from their own CRM to Adobe Experience Platform, build audiences from their own offline data, and send these audiences to YourDestination, to display ads in their customers' social media feeds.*

## Prerequisites {#prerequisites}


## Supported identities and attributes {#supported-identities-attributes}

>[!NOTE]
>
>In the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) of the activate destination workflow, it is *mandatory* to map identities and *optional* to map attributes. Mapping Email and/or ECID from the Identity Namespace tab is the most important thing to do to ensure the person is matched in Marketo. Mapping Email ensures the highest match rate.

### Supported identities {#supported-identities}

[!DNL Marketo Engage] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|ECID|Experience Cloud ID|A namespace that represents ECID. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID". Read the following document on [ECID](/help/identity-service/features/ecid.md) for more information.|
|Email|Email address|A namespace that represents an email address. This type of namespace is often associated to a single person and therefore can be used to identify that person across different channels.|

{style="table-layout:auto"}

### Supported attributes {#supported-attributes}

You can map attributes from Experience Platform to any of the attributes that your organization has access to in Marketo. In Marketo, you can use the [Describe API request](https://developers.marketo.com/rest-api/lead-database/leads/#describe) to retrieve the attribute fields that your organization has access to.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination. The two tables below indicate which audiences this connector supports, by _audience origin_ and _profile types included in the audience_:

| Audience origin | Supported | Description | 
|---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | ✓ | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as Adobe Journey Optimizer, </li><li> and more. </li></ul> <br> ![Various types of audiences highlighted in the audience export workflow.](/help/destinations/assets/common/various-types-of-audiences.png "Various types of audiences highlighted in the audience export workflow."){width="250" align="center" zoomable="yes"} |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | ✓ | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | ✓ | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | ✓ | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | ✓ | Collections of structured data stored in the Adobe Experience Platform Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (email, ECID) used in the [!DNL Marketo Engage] destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>* To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions).
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Sample screenshot showing how to authenticate to the destination](../assets/docs-framework/authenticate-destination.png)

* **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Sample screenshot showing how to fill in details for your destination](../assets/docs-framework/configure-destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your *YourDestination* account ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.



The video below also demonstrates the steps to configure a Marketo destination and activate audiences.

>[!IMPORTANT]
>
>The video does not entirely reflect current capability. For the most up-to-date information, please refer to the guide linked above. The following parts of the video are outdated:
> 
>* The destination card that you should use in the Experience Platform UI is **[!UICONTROL Marketo V2]**.
>* The video does not show the new **[!UICONTROL Person creation]** selector field in the connect to destination workflow. To use that field, you must map both first name and last name during the attribute mapping step.
>* The two limitations called out in the video do not apply anymore. You can now map many other profile attribute fields in addition to the audience membership information that was supported at the time the video was recorded. You can also export audience members to Marketo who do not yet exist in your Marketo static lists, and these will be added to the lists.
>* In the **[!UICONTROL Schedule audience step]** of the activation workflow, in Marketo V1, you needed to manually add a **[!UICONTROL Mapping ID]** to successfully export data to Marketo. This manual step is not required anymore in Marketo V2.

>[!VIDEO](https://video.tv.adobe.com/v/338248?quality=12)




## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

*Delete as appropriate - If you are documenting a new streaming destination, keep the first paragraph below. If you are documenting a new file-based destination, keep the second paragraph. If you are documenting a destination that exports datasets, keep the third paragraph.*

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

Read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

Read [(Beta) Export datasets](/help/destinations/ui/export-datasets.md) for extensive instructions on exporting datasets to this destination.

### Map attributes and identities {#map}

*Add information about supported mappings between source and target fields in the Mapping step of the activation workflow. Your destination might support exporting profile attributes, identity namespaces, or both. Some fields might be mandatory. Target attributes might be predefined or custom. Call out the important caveats and use examples, preferably with screenshots. Two examples of destination pages which you can use as reference are:* 

* *[Pega](/help/destinations/catalog/personalization/pega.md#mapping-example)*
* *[Medallia](/help/destinations/catalog/voice/medallia-connector.md#map)*

## Exported data / Validate data export {#exported-data}

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).