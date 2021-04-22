---
keywords: advertising; the trade desk; advertising trade desk
title: The Trade Desk connection
description: The Trade Desk is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video, and mobile inventory sources.
exl-id: b8f638e8-dc45-4aeb-8b4b-b3fa2906816d
---
# [!DNL The Trade Desk] connection

## Overview {#overview}

[!DNL The Trade Desk] destination helps you send profile data to [!DNL The Trade Desk].

[!DNL The Trade Desk] is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video, and mobile inventory sources.

To send profile data to [!DNL Trade Desk], you must first connect to the destination.

## Use cases {#use-cases}

As a marketer, I want to be able to use segments built off of [!DNL Trade Desk IDs] or device IDs to create retargeting or audience targeted digital campaigns.

## Supported Identities {#supported-identities}

[!DNL The Trade Desk] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|
|---|---|
|GAID|[!DNL Google Advertising ID]|
|IDFA|[!DNL Apple ID for Advertisers]|
|The Trade Desk ID|Advertiser ID in The Trade Desk platform|

## Export type {#export-type}

**[!DNL Segment export]** - you are exporting all members of a segment (audience) to the destination.

## Prerequisites {#prerequisites}

If you are looking to create your first destination with [!DNL The Trade Desk] and have not enabled the [ID sync functionality](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/idsync.html) in Experience Cloud ID Service in the past (with Adobe Audience Manager or other applications), please reach out to Adobe Consulting or Customer Care to enable ID syncs. If you had previously set up [!DNL The Trade Desk] integrations in Audience Manager, the ID syncs you had set up carry over to Platform.

## Connect to destination {#connect-destination}

In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select [!DNL The Trade Desk], and select **[!UICONTROL Configure]**.

![Configure The Trade Desk Destination](../../assets/catalog/advertising/tradedesk/configure.png)

If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](../../ui/destinations-workspace.md#catalog) section of the destination workspace documentation.

![Activate The Trade Desk Destination](../../assets/catalog/advertising/tradedesk/activate.png)

## Authentication step {#authentication}

In the **[!UICONTROL Authentication]** step, you need to enter [!DNL The Trade Desk] connection details:

 * **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
 * **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
 * **[!UICONTROL Account ID]**: Your [!DNL Trade Desk] [!UICONTROL Account ID].
 * **[!UICONTROL Server Location]**: Ask your [!DNL Trade Desk] representative which regional server you should use. These are the available regional servers you can choose from:
   
   * **[!UICONTROL Europe]**
   * **[!UICONTROL Singapore]**
   * **[!UICONTROL Tokyo]**
   * **[!UICONTROL North America East]**
   * **[!UICONTROL North America West]**
   * **[!UICONTROL Latin America]**
 
 * **[!UICONTROL Marketing action]**: Marketing actions indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing actions or you can create your own marketing action. For more information about marketing actions, see the [Data Governance in Adobe Experience Platform](../../../data-governance/policies/overview.md) page. For information about the individual Adobe-defined marketing actions, see the [Data usage policies overview](../../../data-governance/policies/overview.md). 

![The Trade Desk Authentication Step](../../assets/catalog/advertising/tradedesk/authenticate.png)

Click **[!UICONTROL Create destination]**. Your destination is now created. You can click [!UICONTROL Save & Exit] if you want to activate segments later, or you can select [!UICONTROL Next] to continue the workflow and select segments to activate. In either case, see the next section, [Activate Segments](#activate-segments), for the rest of the workflow.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](../../ui/activate-destinations.md#select-attributes) for information about the segment activation workflow.

In the [Segment schedule](../../ui/activate-destinations.md#segment-schedule) step, you must manually map your segments to their corresponding ID or friendly name in the destination.

When mapping segments, we recommend you use the [!DNL Platform] segment name or a shorter form of it, for ease of use. However, the segment ID or name in your destination does not need to match the one in your [!DNL Platform] account. Any value you insert in the mapping field will be reflected by the destination.

If you are using multiple device mappings (cookie IDs, [!DNL IDFA], [!DNL GAID]), make sure to use the same mapping value for all three mappings. [!DNL The Trade Desk] will aggregate all of them into a single segment, with a device-level breakdown.

![Segment Mapping ID](../../assets/common/segment-mapping-id.png)

## Exported data {#exported-data}

To verify if data has been exported successfully to [!DNL The Trade Desk] destination, check your [!DNL Trade Desk] account. If activation was successful, audiences are populated in your account.
