---
title: Datastream configuration settings
description: Configure the datastream to send data to using the Web SDK tag extension.
exl-id: 2d2504c6-b3f9-4e7b-aff4-a8d8d6c4e3dd
TQID: https://experienceleague.adobe.com/wasqc9Z1B34MbwssS0s4XBnpXKjzYJVjrOG3Otj1GrA
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
# Datastream configuration settings {#datastreams}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_datastreams"
>title="Datastreams"
>abstract="Required. Sets the datastream within the Edge Network that you want to send data to."

This configuration section allows you to determine which [datastream](/help/datastreams/overview.md) that you want to send data to. **A datastream ID is required for all data sent to the Edge Network.**

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Datastreams]** section.

![Image showing the datastream settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-datastreams.png)

When selecting datastreams, you can do so for each [environment](/help/tags/ui/publishing/environments.md) ([!UICONTROL Development], [!UICONTROL Staging], and [!UICONTROL Production]). These fields are valuable when you want to separate data sent between development, staging, and production environments. It enables a convenient workflow where you do not need to worry about sending data to the wrong datastream, as long as you install the correct tag loader in each respective environment.

You can populate datastream IDs using one of the following methods:

* **[!UICONTROL Choose from list]**: Each environment contains two drop-down menus, allowing you to select the sandbox and datastream for the selected environment. The values in each drop-down menu depend on your configured [datastreams](/help/datastreams/overview.md) within each respective [sandbox](/help/sandboxes/ui/overview.md).

* **[!UICONTROL Enter values]**: As an alternative to using drop-down menus to select the desired datastream, you can manually specify the desired datastream ID directly. Each environment allows you to directly input a datastream ID, or populate this field using a [data element](/help/tags/ui/managing-resources/data-elements.md).
