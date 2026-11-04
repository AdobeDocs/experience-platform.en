---
title: Datastream configuration settings
description: Configure the datastream to send data to using the Web SDK tag extension.
exl-id: 2d2504c6-b3f9-4e7b-aff4-a8d8d6c4e3dd
TQID: 'https://experienceleague.adobe.com/wasqc9Z1B34MbwssS0s4XBnpXKjzYJVjrOG3Otj1GrA'
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
    internal-label: Data collection tags
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
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

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the **[!UICONTROL Datastreams]** section.

![Image showing the datastream settings of the Web SDK tag extension in the Tags UI](../assets/web-sdk-ext-datastreams.png)

When selecting datastreams, you can do so for each [environment](/help/tags/ui/publishing/environments.md) ([!UICONTROL Development], [!UICONTROL Staging], and [!UICONTROL Production]). These fields are valuable when you want to separate data sent between development, staging, and production environments. It enables a convenient workflow where you do not need to worry about sending data to the wrong datastream, as long as you install the correct tag loader in each respective environment.

Each environment has its own field: **[!UICONTROL Production datastream]**, **[!UICONTROL Staging datastream]**, and **[!UICONTROL Development datastream]**. The production datastream is required. If you leave the staging or development field empty, that environment uses the production datastream.

You can populate each field using any of the following methods:

* **Choose a datastream**: Select the field to view the [datastreams](/help/datastreams/overview.md) in every [sandbox](/help/sandboxes/ui/overview.md) that you have access to, grouped by sandbox. To filter the list, type part of a datastream name or ID.
* **Enter a datastream ID**: Type or paste a datastream ID directly into the field.
* **Use a data element**: Select the data element icon next to the field to choose a [data element](/help/tags/ui/managing-resources/data-elements.md) that returns a datastream ID.

When you choose a datastream from the list, the extension saves the datastream ID along with its sandbox. Datastream IDs and data elements that you enter are saved exactly as entered. Next to each field, select the refresh icon to reload the list of datastreams, or the copy icon to copy the datastream ID to your clipboard.

To choose datastreams from the list, your role must include the **[!UICONTROL View Datastreams]** permission, along with access to the relevant sandboxes. See the [resource permissions](/help/access-control/home.md#permissions) reference for more information. Datastream suggestions are also unavailable for additional Web SDK instances that use a different organization than the one that you are signed in to. In these cases, you can still enter a datastream ID or select a data element.
