---
title: Capillary Streaming Events Overview
description: Learn how to stream data from Capillary to Experience Platform.
badge: Beta
exl-id: 3b8eb2f6-3b4a-4b91-89d4-b6d9027c6ab4
TQID: https://experienceleague.adobe.com/DdAfedXXnpRZGGLuXpHAr2W4zt2qovopubFBfycKPg8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
  - id: ff2b9b37-92e0-45fc-b853-379d44c08c89
    internal-label: Audience segmentation
---
# [!DNL Capillary Streaming Events]

>[!AVAILABILITY]
>
>The [!DNL Capillary Streaming Events] source is in beta. Read the [terms and conditions](../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

[!DNL Capillary Technologies] is a leading loyalty and engagement platform, trusted by over 300 brands around the world. Use the [!DNL Capillary Streaming Events] source to enable your business to seamlessly stream customer profiles, loyalty data, and transactional events from [!DNL Capillary] into Adobe Experience Platform. Connect your [!DNL Capillary] source to enable real-time personalization, advanced audience segmentation, and omnichannel campaign orchestration.

By integrating [!DNL Capillary] with Experience Platform, you can:

* Synchronize **loyalty points, tiers, and rewards** in real-time.
* Send **transactional data** into Experience Platform for analytics and activation.
* Leverage Real-Time CDP, Experience Platform, and Adobe Journey Optimizer for segmentation, journey orchestration, and personalization.

## Prerequisites

Before you connect [!DNL Capillary] to Adobe Experience Platform, ensure that you have the following:

* A valid **Adobe Organization ID** and access to an enabled Experience Platform sandbox.
* You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Capillary] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

### Create a schema

You must create an Experience Data Model (XDM) schema to describe a dataset which can store the possible fields and data types that will be sent from [!DNL Capillary].

1. Log in to Adobe Experience Platform and access the Experience Platform via your organization's login.
2. In the left navigation panel, select **[!UICONTROL Schemas]** to open the [!UICONTROL Schemas] workspace.
3. Select **[!UICONTROL Create schema]** in the top-right corner.
4. In the create schema dialog, pick between **[!UICONTROL Manual creation]** (Add fields and field groups yourself) or **[!UICONTROL ML-assisted creation]** (Upload a CSV file and use machine learning to generate a recommended schema).
5. Choose a base class for your schema (e.g., XDM Individual Profile, XDM ExperienceEvent, or Other). If you select **[!UICONTROL Other]**, you can select from available custom or standard classes.
6. Enter a human-friendly name and description for your schema.
7. Use the Schema Editor to: Add field groups (reusable blocks of fields), define individual fields (customize names, data types, and options), and optionally, create custom data types or field groups if existing ones do not fit your needs.
8. Review the schema structure in the canvas. Select **[!UICONTROL Finish]** to create the schema.
9. (Optional) Edit fields, add descriptions, and adjust field groups as needed in the Schema Editor.

For a detailed instructions on how to create an XDM schema, read the guide on [creating a schema using the schema editor](../../../xdm/tutorials/create-schema-ui.md).

### Create a dataset

Next, you must create a dataset that references the schema you just created.

1. In the Experience Platform UI, select [!UICONTROL Datasets] in the left navigation to open the [!UICONTROL Datasets] workspace.
2. Select **[!UICONTROL Create dataset]** at the top right.
3. In the creation options, select **[!UICONTROL Create dataset from schema]**.
4. From the list, search for and select the XDM schema you previously created. Once you locate your schema, select **[!UICONTROL Next]**.
5. Enter a unique, descriptive name for your dataset.
6. Optionally, add a description that helps future users identify the dataset.
7. Select **[!UICONTROL Finish]** to create the dataset.
   
For a detailed instructions on how to create a dataset, read the [datasets UI guide](../../../catalog/datasets/user-guide.md).

## Connect [!DNL Capillary Streaming Events] to Experience Platform

Once you have completed the prerequisite setup for [!DNL Capillary], read the [[!DNL Capillary Streaming Events] UI tutorial](../../tutorials/ui/create/loyalty/capillary.md) to learn how you can connect your account and stream data from [!DNL Capillary] to Experience Platform.
