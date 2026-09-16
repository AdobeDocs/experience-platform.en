---
title: Implementing Adobe Experience Platform Assurance extension
description: This guide explains how to implement and install the Adobe Experience Platform Assurance extension.
exl-id: b7bd1bb1-1606-4d00-97e0-c329c86d8ca4
TQID: https://experienceleague.adobe.com/C2q6JWgloytbZFx-gac44fNJkFpb85at43uM-YPpxNE
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: c1f1ac67-ccab-4be9-a93a-b7faba1192c4
    internal-label: Assurance
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Implementing the Adobe Experience Platform Assurance extension

This tutorial explains how to install and implement the Experience Platform Assurance extension in the Mobile SDK. For instructions on adding the Assurance extension to your application, please read the [Adobe Experience Platform Assurance extension overview](https://developer.adobe.com/client-sdks/documentation/platform-assurance-sdk/#add-the-aep-assurance-extension-to-your-app).

## Getting started

In order to install and implement the Assurance extension, you will need access to the following services:

- The [Adobe Experience Platform Data Collection UI](https://experience.adobe.com/#/data-collection/)
- [Adobe Experience Platform Assurance](https://experience.adobe.com/assurance)

## Create a mobile property

>[!NOTE]
>
>If you already have a mobile property, you can proceed to the next step.

In the Data Collection UI, select **[!UICONTROL Tags]**. A list of mobile and web properties appears, with information about the properties that belong to your organization. Select **[!UICONTROL New property]** to create a new property.

![The New property button is highlighted, showing what you select to create a new property](./images/implement-assurance/create-new-property.png)

The **[!UICONTROL Create Property]** page appears. Enter the name for your new property and select **[!UICONTROL Mobile]** as your platform. After inserting your details, select **[!UICONTROL Save]** to create the mobile property.

>[!NOTE]
>
>The mobile property's **[!UICONTROL Privacy]** setting does **not** affect Assurance's data collection.

![The Create Property page is displayed. You can insert information about your mobile property here.](./images/implement-assurance/create-property.png)

## Install the Assurance extension

Select the mobile property that you want to install the Assurance extension in. 

![The Tag Properties page is displayed, with the selected mobile property highlighted.](./images/implement-assurance/select-mobile-property.png)

The **mobile property details** page appears. Select **[!UICONTROL Extensions]** to bring up a list of the extensions that are currently associated with your mobile property.

![The mobile property details page is displayed. Information about recent activities is displayed. The extensions tab is highlighted.](./images/implement-assurance/tag-properties.png)

Select **[!UICONTROL Catalog]** to see a list of extensions that you can add to the mobile property. Using the filter, locate the **[!UICONTROL AEP Assurance]** extension, and select **[!UICONTROL Install]**.

![The extensions catalog is displayed. The Assurance extension is filtered for and displayed, with the install button highlighted.](./images/implement-assurance/assurance-extension.png)

## Next steps

Now that you've installed the Assurance extension in your mobile property, you can start using Assurance within your applications. To learn how to add the Assurance extension to your application, please read the [Adobe Experience Platform Assurance extension overview](https://developer.adobe.com/client-sdks/documentation/platform-assurance-sdk/#add-the-aep-assurance-extension-to-your-app). To learn how to use Assurance, please read the [using Assurance guide](./using-assurance.md).
