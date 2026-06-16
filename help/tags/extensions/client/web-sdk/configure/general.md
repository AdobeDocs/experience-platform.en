---
title: SDK instance configuration settings
description: Configure general settings for the Web SDK instance.
exl-id: cc22b8b3-88c6-4030-91b4-60e14a3b0f42
TQID: https://experienceleague.adobe.com/YcT1bzlpS8kUyB-agr5inPv2adRL8V1y2R8LweccnRU
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# SDK instance configuration settings {#sdk-instance}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_sdkinstance"
>title="SDK instances"
>abstract="Sets the SDK instance name, the IMS org it belongs to, and the edge domain."

This configuration section governs the Web SDK instance name, the IMS org it applies to, and the location that you want to send data to. By default, an instance is named `alloy`.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Locate the instance name just below the expanded [!UICONTROL SDK instances] accordion.

![Image showing the general settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-general.png)

The following options are available:

## [!UICONTROL Name]

The Adobe Experience Platform Web SDK tag extension supports multiple instances on the page. The name is used to send data to multiple organizations without requiring duplicate Web SDK tag libraries. You can change the instance name to any valid JavaScript object name.

## [!UICONTROL IMS organization ID]

The ID of the organization that you would like the data sent to at Adobe. Most of the time, use the default value that is autopopulated. When you have multiple instances on the page, populate this field with the value of the second organization you want to send data to.

## [!UICONTROL Edge domain]

The domain that the extension sends and receives data from. By default, the field contains `<COMPANYID>.data.adobedc.net`. Older implementations might contain a default value of `edge.adobedc.net`, which is also valid.

Adobe recommends using a first-party domain in most cases. See the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert) for instructions on how to set up a first-party domain suitable for data collection. See also [`edgeDomain`](/help/collection/js/commands/configure/edgedomain.md) in the JavaScript library documentation for guidance setting this value.
