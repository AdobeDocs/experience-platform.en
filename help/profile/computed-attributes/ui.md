---
title: Computed Attributes UI guide
description: In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. This guide shows how to create, view, and update computed attributes using the Adobe Experience Platform UI.
badge: "Beta"
---

# Computed attributes UI guide

This document provides a guide on how to create and update computed attributes using the Adobe Experience Platform UI.

## Getting started

This UI guide requires an understanding of the various [!DNL Experience Platform] services involved with managing [!DNL Real-Time Customer Profiles]. Before reading this guide, or working in the UI, please review the documentation for the following services:

- [[!DNL Real-Time Customer Profile]](../home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.

## View computed attributes {#view}

In the Experience Platform UI, select **[!UICONTROL Profiles]** in the left navigation, followed by **[!UICONTROL Computed attributes]** to see a list of the computed attributes available for your organization. This includes information about the computed attribute's name, description, last evaluation date, and last evaluation status.

![The [!UICONTROL Profile] section and the [!UICONTROL Computed attributes] tabs are highlighted, showing users how to access the computed attributes browse page.](./images/ui/browse.png)

To select which fields are visible, you can select ![the configure columns icon](./images/ui/configure-icon.png) to add or remove which fields you want to be displayed.

| Field | Description |
| ----- | ----------- |
| [!UICONTROL Name] | The display name of the computed attribute. |
| [!UICONTROL Description] | The description for the computed attribute. |
| [!UICONTROL Evaluation method] | The evaluation method for the computed attribute. At this time, only **batch** is supported. |
| [!UICONTROL Last evaluated] | This timestamp represents the last successful evaluation run. Only events that ocurred **before** this timestamp are considered in the last successful evaluation. |
| Refresh frequency | An indication on how frequently the computed attribute is expected to be refreshed. Possible values include hourly, daily, weekly, or monthly. |
| Last evaluation status | The status that states whether or not the computed attribute was successfully calculated in the last evaluation run. Possible values include **[!UICONTROL Success]** or **[!UICONTROL Failed]**. | 
| [!UICONTROL Lifecycle status] | The current status of the computed attribute. There are three possible statuses: <ul><li>**[!UICONTROL Draft]:** The computed attribute does **not** have a field created on the schema yet. In this state, the computed attribute can be edited. </li><li>**[!UICONTROL Published]:** The computed attribute has a field created on the schema and is ready to be used. In this state, the computed attribute **cannot** be edited.</li><li>**[!UICONTROL Inactive]:** The computed attribute is disabled. For more information about the inactive status, please read the [frequently asked questions page](). </li> | 

Additionally, you can select a computed attribute to see more detailed information about it. For more information on the computed attributes details page, please read the [view a computed attribute's details section](#view-details).

<!-- | [!UICONTROL Fast refresh] | A value that shows whether or not fast refresh is enabled for this compute attribute. If fast refresh is enabled, this lets the computed attribute be refreshed on a daily basis, rather than on a weekly, bi-weekly, or monthly basis. This value is only applicable for computed attributes with a lookback period greater than a weekly basis. | -->

## Create a computed attribute {#create}

To create a new computed attribute, select **[!UICONTROL Create computed attribute]** to enter the new computed attribute workflow.

![The [!UICONTROL Create computed attributes] button is highlighted, showing users how to reach the create a computed attribute page.](./images/ui/create.png)

The **[!UICONTROL Create computed attribute]** page appears. On this page, you can add the basic information for the computed attribute you want to create.

![The [!UICONTROL Basic information] section of the [!UICONTROL Create computed attribute] page is highlighted.](./images/ui/basic-information.png)

After adding the computed attribute details, you can start creating your computed attribute. To create a computed attribute, first select the attribute from the **[!UICONTROL Events]** section.

![The [!UICONTROL Events] section is highlighted.](./images/ui/events.png)

After selecting the attribute to use in the computed attribute definition, you can choose what this value will be compared to.

![The available comparison types are displayed.](./images/ui/select-comparison.png)

Now, you can apply a function to the field from the conditional output.

![The computed attribute functions are displayed.](./images/ui/select-function.png)

With these steps completed, you can now either choose to save this computed attribute as a draft or to immediately publish it.

![The [!UICONTROL Save as draft] and [!UICONTROL Publish] buttons are highlighted.](./images/ui/draft-or-publish.png)

## View a computed attribute's details {#view-details}

To view the details of a computed attribute, select the computed attribute you want to see details about on the [!UICONTROL **Browse**] page.

![A computed attribute is highlighted.](./images/ui/select.png)

The content of the page differs, depending if the computed attribute is **[!UICONTROL Published]** or in **[!UICONTROL Draft]**.

### Published computed attribute {#published}

When selecting a published computed attribute, the computed attributes detail page appears.

![The details page of the computed attribute is displayed.](./images/ui/details.png)

This page displays a summary of the computed attribute's details, as well as a graph showing the value distribution as well as sample profiles that qualify for the computed attribute.

### Draft computed attribute {#draft}

When selecting a draft computed attribute, the **[!UICONTROL Edit computed attributes]** page appears. This page, similarly to the Create computed attributes page, lets you edit your computed attribute's basic information, as well as its definition, before letting you update the draft or publish it.

![The [!UICONTROL Edit computed attributes ]page is displayed.](./images/ui/edit.png)

## Next steps

To learn more about computed attributes, please read the [computed attributes overview](./overview.md). For information on creating and configuring computed attributes using the API, please read the [computed attributes developer guide](./api.md).
