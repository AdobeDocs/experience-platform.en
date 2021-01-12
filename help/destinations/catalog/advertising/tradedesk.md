---
keywords: advertising; the trade desk;
title: The Trade Desk Destination
seo-title: The Trade Desk Destination
description: The Trade Desk is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video and mobile inventory sources. 
seo-description: The Trade Desk is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video and mobile inventory sources.
---

# [!DNL The Trade Desk] destination 

## Overview {#overview}

[!DNL The Trade Desk] destination helps you send profile data to [!DNL The Trade Desk].

[!DNL The Trade Desk] is a self-service platform for ad buyers to execute retargeting and audience targeted digital campaigns across display, video, and mobile inventory sources.

To send profile data to [!DNL The Trade Desk], you must first connect to the destination.

## Destination specs {#destination-specs}

Note the following details that are specific to the [!DNL The Trade Desk] destination:

* You can send the following [identities](../../../identity-service/namespaces.md) to [!DNL The Trade Desk] destinations: [!DNL The Trade Desk ID], [!DNL IDFA], [!DNL GAID].

## Use cases {#use-cases}

As a marketer, I want to be able to use segments built off of [!DNL Trade Desk IDs] or device IDs to create retargeting or audience targeted digital campaigns.

## Export type {#export-type}

**[!DNL Segment export]** - you are exporting all members of a segment (audience) to the destination.

## Connect to destination {#connect-destination}

In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select [!DNL The Trade Desk], and select **[!UICONTROL Configure]**.

![Configure The Trade Desk Destination](../../assets/catalog/advertising/tradedesk/configure.png)

>[!NOTE]
>
>If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](../../ui/destinations-workspace.md#catalog) section of the destination workspace documentation.
>
>![Activate The Trade Desk Destination](../../assets/catalog/advertising/tradedesk/activate.png)

In the [!UICONTROL Authentication] step, you need to enter [!DNL The Trade Desk] connection details:

 * **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
 * **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
 * **[!UICONTROL Account ID]**: Your [!DNL Trade Desk] [!UICONTROL Account ID].
 * **[!UICONTROL Client Secret]**: The `clientSecret` parameter used in the [!DNL OAuth2] client credentials.
 * **[!UICONTROL Server Location]**: Ask your [!DNL The Trade Desk] representative which regional server you should use. These are the available regional servers you can choose from:
   
   * **[!UICONTROL Europe]**
   * **[!UICONTROL Singapore]**
   * **[!UICONTROL Tokyo]**
   * **[!UICONTROL North America East]**
   * **[!UICONTROL North America West]**
   * **[!UICONTROL Latin America]**
 
 * **[!UICONTROL Marketing use case]**: Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Adobe Experience Platform](../../../data-governance/policies/overview.md) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](../../../data-governance/policies/overview.md). 

![The Trade Desk Authentication Step](../../assets/catalog/advertising/tradedesk/authenticate.png)

Click **[!UICONTROL Create destination]**. Your destination is now created. You can click [!UICONTROL Save & Exit] if you want to activate segments later, or you can select [!UICONTROL Next] to continue the workflow and select segments to activate. In either case, see the next section, [Activate Segments](#activate-segments), for the rest of the workflow.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](../../ui/activate-destinations.md#select-attributes) for information about the segment activation workflow.

In the [Segment schedule](../../ui/activate-destinations.md#segment-schedule) step, you must manually map your segments to their corresponding ID or friendly name in the destination.

When mapping segments, we recommend you use the [!DNL Platform] segment name or a shorter form of it, for ease of use. However, the segment ID or name in your destination does not need to match the one in your [!DNL Platform] account. Any value you insert in the mapping field will be reflected by the destination.

If you are using multiple device mappings (cookie IDs, [!DNL IDFA], [!DNL GAID]), make sure to use the same mapping value for all three mappings. [!DNL The Trade Desk] will aggregate all of them into a single segment, with a device-level breakdown.

![Segment Mapping ID](../../assets/common/segment-mapping-id.png)

## Exported data {#exported-data}

To verify if data has been exported successfully to [!DNL The Trade Desk] destination, check your [!DNL The Trade Desk] account. If activation was successful, audiences are populated in your account. 
