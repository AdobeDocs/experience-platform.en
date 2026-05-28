---
keywords: google ad manager;google ad;doubleclick;DoubleClick AdX;DoubleClick;Google Ad Manager;Google ad manager; DFP
title: Google Ad Manager connection
description: Google Ad Manager, formerly known as DoubleClick for Publishers or DoubleClick AdX, is an ad serving platform from Google that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.
exl-id: e93f1bd5-9d29-43a1-a9a6-8933f9d85150
TQID: https://experienceleague.adobe.com/nMwcAbFLTYujcLgpnOgUO3lcGXYvxkdOHO9cDg5IvSs
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# [!DNL Google Ad Manager] connection

>[!IMPORTANT]
>
> Google is releasing changes to the [Google Ads API](https://developers.google.com/google-ads/api/docs/start), [Customer Match](https://ads-developers.googleblog.com/2023/10/updates-to-customer-match-conversion.html), and the [Display & Video 360 API](https://developers.google.com/display-video/api/guides/getting-started/overview) to support the compliance and consent-related requirements defined under the [Digital Markets Act](https://digital-markets-act.ec.europa.eu/index_en) (DMA) in the European Union ([EU User Consent Policy](https://www.google.com/about/company/user-consent-policy/)). Enforcement of these changes to consent requirements is live as of March 6, 2024.
><br/>
>To adhere to the EU user consent policy and continue creating audience lists for users in the European Economic Area (EEA), advertisers and partners must ensure they are passing end-user consent when uploading audience data. As a Google Partner, Adobe provides you with the necessary tools to comply with these consent requirements under the DMA in the European Union.
><br/>
>Customers who have purchased Adobe Privacy & Security Shield and have configured a [consent policy](../../../data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) to filter out non-consented profiles do not need to take any action.
><br/>
>Customers who have not purchased Adobe Privacy & Security Shield must use the [segment definition](../../../segmentation/home.md#segment-definitions) capabilities within [Segment Builder](../../../segmentation/ui/segment-builder.md) to filter out non-consented profiles, to continue using the existing [!DNL Real-Time CDP] Google Destinations without interruption.


[!DNL Google Ad Manager], formerly known as [!DNL DoubleClick for Publishers] (DFP) or [!DNL DoubleClick AdX], is an ad serving platform from [!DNL Google] that gives publishers the means to manage the display of advertisements on their websites, through video and in mobile apps.

## Destination specifics {#specifics}

Note the following details that are specific to [!DNL Google Ad Manager] destinations:

* Activated audiences are created programmatically in the [!DNL Google] platform.
* [!DNL Experience Platform] does not currently include a measurement metric to validate successful activation. Refer to the audience counts in Google to validate the integration and understand audience targeting size.
* After mapping an audience to a [!DNL Google Ad Manager] destination, the audience name appears immediately in the [!DNL Google Ad Manager] user interface.
* Segment population needs 24-48 hours to appear in [!DNL Google Ad Manager]. Additionally, audiences must have an audience size of at least 50 profiles to be displayed in [!DNL Google Ad Manager]. Audiences with sizes smaller than 50 profiles will not be populated in [!DNL Google Ad Manager].

## Supported Identities {#supported-identities}

[!DNL Google Ad Manager] supports the activation of audiences based on the identities shown in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

|Identity|Description|Considerations|
|---|---|---|
|GAID|[!DNL Google Advertising ID]||
|IDFA|[!DNL Apple ID for Advertisers]||
|AAM UUID|[Adobe Audience Manager [!DNL Unique User ID]](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html), also known as [!DNL Device ID]. A numerical, 38-digit device ID that Audience Manager associates to each device it interacts with.|Google uses [AAM UUID](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html) to target users in California, and the Google Cookie ID for all other users.|
|[!DNL Google] cookie ID|[!DNL Google] cookie ID|[!DNL Google] uses this ID to target users outside of California.|
|RIDA|Roku ID for Advertising. This ID uniquely identifies Roku devices.||
|MAID|Microsoft Advertising ID. This ID uniquely identifies devices running Windows 10.||
|Amazon Fire TV ID|This ID uniquely identifies Amazon Fire TVs.||

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

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
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience to the Google destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

If you are looking to create your first destination with [!DNL Google Ad Manager] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL Google] integrations in Audience Manager, the ID syncs you had set up carry over to Experience Platform.

### Allow-listing {#allow-listing}

Allow-listing is mandatory before setting up your first [!DNL Google Ad Manager] destination in Experience Platform. Make sure to complete the allow-listing process described below, before creating your destination.

1. Follow the steps described in the [Google Ad Manager documentation](https://support.google.com/admanager/answer/3289669?hl=en) to add Adobe as a linked Data Management Platform (DMP).
2. In the [!DNL Google Ad Manager] interface, go to **[!UICONTROL Admin]** > **[!UICONTROL Global Settings]** > **[!UICONTROL Network Settings]**, and enable the **[!UICONTROL API Access]** slider.

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

>[!CONTEXTUALHELP]
>id="platform_destinations_gam_appendSegmentID"
>title="Append audience ID to audience name"
>abstract="Select this option to have the audience name in Google Ad Manager include the audience ID from Experience Platform, like this: `Audience Name (Audience ID)`"

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
*  **[!UICONTROL Account ID]**: Enter your [!DNL Audience Link ID] from your [!DNL Google] account. This is a specific identifier associated with your [!DNL Google Ad Manager] network (not your [!DNL Network code]). You can find this under **[!UICONTROL Admin > Global settings]** in the [!DNL Google Ad Manager] interface.
*  **[!UICONTROL Account Type]**: Select an option, depending on your account with Google:
   * Use `DFP by Google` for [!DNL DoubleClick] for Publishers
   * Use `AdX buyer` for [!DNL Google AdX]
*  **[!UICONTROL Append audience ID to audience name]**: Select this option to have the audience name in Google Ad Manager include the audience ID from Experience Platform, like this: `Audience Name (Audience ID)`.

>[!NOTE]
>
>When setting up a [!DNL Google Ad Manager] destination, please work with your [!DNL Google Account Manager] or Adobe representative to understand which account type you have.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to streaming audience export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Exported data {#exported-data}

To verify if data has been exported successfully to the [!DNL Google Ad Manager] destination, check your [!DNL Google Ad Manager] account. If activation was successful, audiences are populated in your account.

## Troubleshooting {#troubleshooting}

In case you encounter any errors while using this destination and need to reach out to either Adobe or Google, keep the following IDs at hand.

These are Adobe's Google Account IDs:

* **[!UICONTROL Account ID]**: 87933855
* **[!UICONTROL Customer ID]**: 89690775