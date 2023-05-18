---
title: Computed Attributes UI guide
description: In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide shows how to create, view, update, and delete computed attributes using the Adobe Experience Platform UI.
badge: "Beta"
---

# Computed attributes UI guide

This document provides a guide on how to create, update, and delete computed attributes using the Adobe Experience Platform UI.

## Getting started

This UI guide requires an understanding of the various [!DNL Experience Platform] services involved with managing [!DNL Real-Time Customer Profiles]. Before reading this guide, or working in the UI, please review the documentation for the following services:

- [[!DNL Real-Time Customer Profile]](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Adobe Experience Platform Identity Service](../../identity-service/home.md): Enables Real-Time Customer Profile by bridging identities from disparate data sources being ingested into [!DNL Platform].
- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.

## View computed attributes {#view}

In the Experience Platform UI, select **[!UICONTROL Profiles]** in the left navigation, followed by **[!UICONTROL Computed attributes]** to see a list of the computed attributes available for your organization. This includes information about the computed attribute's name, description, last evaluation date, and last evaluation status.

IMAGE

To select which fields are visible, you can select ![the configure columns icon]() to add or remove which fields you want to be displayed.

IMAGE

| Field | Description |
| ----- | ----------- |
| Name | The name of the computed attribute. |
| Description | The description for the computed attribute. |
| Evaluation method | The evaluation method for the computed attribute. At this time, only **batch** is supported. |
| Last evaluated | The date and time the computed attribute was last evaluated. |
| Last evaluation status | The ??? |
| Fast refresh | |
| Lifecycle status | The current status of the computed attribute. There are three possible statuses: <ul><li>**[!UICONTROL Draft]:** The computed attribute does **not** have a field created on the schema yet. As a result, the computed attribute can still be edited. </li><li>**[!UICONTROL Published]:** The computed attribute has a field created on the schema and is ready to be used.</li><li>**[!UICONTROL Inactive]:** The computed attribute is disabled.</li> | 

Additionally, you can select a computed attribute to see more detailed information about it. For more information on the computed attributes details page, please read the [view a computed attribute's details section](#view-details).

## Create a computed attribute {#create}

To create a new computed attribute, select **[!UICONTROL Create computed attribute]** to enter the new computed attribute workflow.

IMAGE

The **[!UICONTROL Create computed attribute]** page appears. On this page, you can add the details for the computed attribute you want to create.

IMAGE (highlight the details)

After adding the computed attribute details, you can start creating your computed attribute. To create a computed attribute, first select the attribute from the **[!UICONTROL Events]** section.

IMAGE (highlight)

After selecting the attribute to use in the computed attribute definition, you can choose what this value will be compared to.

IMAGE

Now, you can apply a function to the field from the conditional output.

IMAGE

With these steps completed, you can now either choose to save this computed attribute as a draft or to immediately publish it.

IMAGE

## View a computed attribute's details {#view-details}

To view the details of a computed attribute, select the computed attribute you want to see details about on the Browse page.

IMAGE

The content of the page differs, depending if the computed attribute is **[!UICONTROL Published]** or in **[!UICONTROL Draft]**.

### Published computed attribute {#published}

When selecting a published computed attribute, 

### Draft computed attribute {#draft}

When selecting a draft computed attribute,

