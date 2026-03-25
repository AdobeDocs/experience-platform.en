---
title: Adobe Advertising DSP connection
description: Learn how to share authenticated and unauthenticated first-party audiences with Adobe Advertising Demand-Side Platform (DSP) using multiple identity types.
feature: Destinations
exl-id: 0ff80d38-993f-4609-bf2a-01a3e6cfe10b
---
# Adobe Advertising DSP connection

## Overview {#overview}

The Adobe Advertising Demand-Side Platform (DSP) destination allows users to share both authenticated and unauthenticated first-party audiences with a DSP account or specific advertiser within an account.

This destination allows customers to share first-party audiences with any or all of these IDs:

* Hashed email ID, which is converted to a [!DNL LiveRamp RampID] or [!DNL Unified ID 2.0] (UID2.0) for targeting in DSP

* Experience Cloud ID (ECID) and Adobe Advertising third-party cookies

* Mobile advertising IDs (MAIDs):

  * [!DNL Google] Advertising IDs (GAIDs) for [!DNL Android] devices

  * Identifiers for Advertisers (IDFAs) for [!DNL Apple iOS] devices

This connection replaces the [Legacy Adobe Advertising Cloud DSP connection](adobe-advertising-cloud-dsp-connection-legacy.md), which supports only hashed email addresses.

>[!IMPORTANT]
>
>This page was created by the Adobe Advertising [!DNL DSP] team. For any inquiries or update requests, contact Advertising support directly at `adcloud_support@adobe.com`.

## Use cases {#use-cases}

This destination allows advertisers to reach their audience across browsers with cookies and without cookies.

Advertisers have the choice to share segments either with authenticated first-party identifiers (such as [!DNL RampID] and [!DNL UID2.0]) or as unauthenticated IDs (such as cookies and MAIDs).

## Prerequisites {#prerequisites}

* For [!DNL RampID activation], [!DNL DSP] account-level and campaign-level settings to enable audience sharing with [!DNL LiveRamp RampID], which translates customer data to [!DNL RampIDs] to create targetable segments. Your Adobe Account Team will perform this configuration. [!DNL RampID] is available via a partnership between [!DNL DSP] and [!DNL LiveRamp], and you do not need your own [!DNL LiveRamp] membership to use it.

* Audience IDs:

  * For [!DNL RampID] and [!DNL UID2.0], profiles must contain hashed email IDs.

  * For cookies, set up a cookie sync process with either [!DNL Web SDK] datastreams or the [!DNL Experience Cloud ID Service]. See [Set up ID syncing to share cookies](#cookie-sync) below.

  * For profiles with MAIDs:

    * For each GAID, include the value `GAID` in an IdentityMap column.

    * For each IDFA, include the value `IDFA` in an IdentityMap column.

* The Experience Cloud organization ID for the Experience Platform account. You can find your ID on your Adobe [!DNL Real-Time Customer Data Platform] ([!DNL Real-Time CDP]) user profile page.

* A [[!DNL Real-Time CDP] source in DSP](https://experienceleague.adobe.com/en/docs/advertising/dsp/audiences/sources/source-manage) to receive audiences for campaign activation. Your Adobe Account Team will create the source using your Experience Cloud organization ID.

* The source key for the [!DNL DSP] account or advertiser, which is generated when a [[!DNL Real-Time CDP] source is created in [!DNL DSP]](https://experienceleague.adobe.com/en/docs/advertising/dsp/audiences/sources/source-manage). Your [!DNL DSP] account team will share this key with you. You will use it within Experience Platform to create a destination connection to the Advertising DSP destination, as explained below.

### Set up ID syncing to share cookies {#cookie-sync}

ID syncing is a prerequisite to share third-party cookies. Set up a cookie sync process with either [!DNL Web SDK] datastreams or the [!DNL Experience Cloud ID Service]. For more context about identity handling for third-party cookies, see [Advertising destinations relying on third-party cookie integrations](/help/destinations/how-destinations-work/identity-handling.md#third-party-cookie-destinations).

**Enable third-party ID syncing with [!DNL Web SDK]**

If you are using [!DNL Experience Platform Web SDK], enable third-party ID syncing on your datastream by configuring the [!UICONTROL Third Party ID Sync] option in the advanced settings. For instructions, see [Configure advanced options](/help/datastreams/configure.md#advanced-options) in the datastreams documentation.

**Enable third-party ID syncing with the [!DNL Experience Cloud ID Service]**

If you are using [!DNL Experience Platform] tags with the [!DNL Experience Cloud ID Service], configure the third-party ID sync using the [Experience Cloud ID Service extension](/help/tags/extensions/client/id-service/overview.md). This allows the matched Adobe Advertising cookie for the given ECID to be available when you activate the audience from [!DNL Real-Time CDP].

## Supported identities {#supported-identities}

The Adobe Advertising DSP destination supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target Identity | Description | Considerations |
| --------------- | ----------- | -------------- |
| `email_lc_sha256` | Email addresses hashed with the SHA256 algorithm | Experience Platform supports both plain text and SHA256-hashed email addresses. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option to have Experience Platform automatically hash the data on activation. |
| `ECID` | First-party cookie for Experience Cloud | Required to create cookie-based segments. |
| `adcloud` | Third-party cookie for Adobe Advertising | Required to create cookie-based segments. |
| `GAID` | [!DNL Android] device ID | Required for targeting [!DNL Android] devices. |
| `IDFA` | [!DNL iOS] device ID | Required for targeting [!DNL iOS] devices. |

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
| -------------------- | --------- | ----------- | --------- |
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the following table for information about the destination export type and frequency.

| Item | Type | Notes |
| ---- | ---- | ----- |
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the chosen identifiers. |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. When a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions) for Experience Platform. Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to the destination, follow the instructions to [create a destination connection](/help/destinations/ui/connect-destination.md) using the Experience Platform user interface. In the destination configuration workflow, fill in the fields listed in the subsections below.

### Authenticate to destination {#authenticate}

To connect to the destination, provide the following parameter in the [!UICONTROL Connection type] section, and then select **[!UICONTROL Connect to destination]**:

* **[!UICONTROL Account or Advertiser Key]**: This [!UICONTROL Source Key] is generated when a [[!DNL Real-Time CDP] source is created in the DSP user interface](https://experienceleague.adobe.com/en/docs/advertising/dsp/audiences/sources/source-manage). Your Adobe Account Team will share this key with you after they create the source.

![Screenshot of the Connection type section showing the Account or Advertiser Key field.](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/authenticate-destination.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

![Screenshot of the destination detail fields showing Name and Description inputs.](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/destination-details.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!CONTEXTUALHELP]
>id="platform_destinations_required_mappings_adcloud_dsp"
>title="Preconfigured mapping sets"
>abstract="We have preconfigured these two mapping sets for you: ECID and [!DNL adcloud] cookie. When you activate data to Adobe Advertising DSP, the profiles qualified for the activated audiences must have at least an ECID identity associated with their profile, to be successfully exported to the destination."
>additional-url="https://experienceleague.adobe.com/en/docs/experience-platform/destinations/catalog/advertising/adobe-advertising-dsp-connection#preconfigured-mappings" text="Read more about the preconfigured mappings"

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export identities, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Map attributes and identities {#map}

The identity mappings for this destination are partially preconfigured. Review the preconfigured mappings below and add any optional identities you want to include.

### Preconfigured mappings {#preconfigured-mappings}

The following identity mappings are **preconfigured and automatically populated** during the audience activation workflow:

* **`ECID`** (Experience Cloud ID)
* **`adcloud`** (Adobe Advertising third-party cookie)

![Screenshot of the identity mapping section showing cookie identifiers, Hashed Email, IDFA, and GAID options.](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/identity-mapping.png)

These mappings are grayed out and read-only. You do not need to configure anything in this step. You can optionally add the following mappings:

* **`email_lc_sha256`** (Hashed Email)
* **IDFA** ([!DNL Apple iOS] device ID)
* **GAID** ([!DNL Android] device ID)

Select **[!UICONTROL Next]** to continue.

>[!IMPORTANT]
>
>**ECID is required for cookie-based export to succeed.** Profiles without ECID will not be included in cookie-based segments. For authenticated audience segments using [!DNL RampID] or [!DNL UID2.0], profiles must contain hashed email IDs.

For instructions, see [Map attributes and identities](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping).

## Validate data export {#exported-data}

To verify that the audience data was shared with Adobe Advertising, check the following:

* The data flow in your [!DNL Real-Time CDP] destination is successful.

* In DSP, the audience is available when you create or edit an audience from **[!UICONTROL Audiences]** > **[!UICONTROL All Audiences]** or from within the **[!UICONTROL Audience Targeting]** section of placement settings. The audience should be visible in the [!UICONTROL Adobe Segments] tab under the [!UICONTROL Real-Time CDP] folder.

![Screenshot of the DSP Audiences interface showing a [!DNL Real-Time CDP] folder with imported audience segments listed under the Adobe Segments tab.](/help/destinations/assets/catalog/advertising/adobe-advertising-cloud-connection/segments-in-dsp.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information about how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
