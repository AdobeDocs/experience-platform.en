---
title: Advanced configuration settings
description: Configure advanced settings for the Web SDK tag extension.
exl-id: d830a210-77ab-4823-b5fa-c1194a01bea3
TQID: https://experienceleague.adobe.com/NUVxcZpYp-e8ByeQjtJ2K-wJEJmiSigFtAMYXqXzZwQ
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
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Advanced configuration settings {#advanced}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_advanced"
>title="Advanced settings"
>abstract="Advanced configuration settings. Adobe recommends leaving these options as-is for most implementations."

This configuration section allows you to alter advanced settings. Adobe recommends leaving these options as-is for most implementations.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Advanced Settings]** section.

![Image showing the advanced settings using the Web SDK tag extension page](../assets/advanced-settings.png)

Currently, there is one option available.

## [!UICONTROL Edge base path]

Use this field to change the base path that is used to interact with the Edge Network. Adobe might request that you change this field if you participate in certain alpha or beta tests; otherwise, Adobe recommends leaving it at the default value of `ee`.

This field is the tag equivalent of [`edgeBasePath`](/help/collection/js/commands/configure/edgebasepath.md) when configuring the JavaScript library.
