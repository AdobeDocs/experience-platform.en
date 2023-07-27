---
solution: Experience Platform
title: Look-alike Audiences
description: Learn how to target new high-value audiences in Adobe Experience Platform using look-alike audiences.
---

# Look-alike audiences guide

In Adobe Experience Platform, look-alike audiences provide intelligent insights on each of your audiences, leveraging machine-learning-based insights to identify and target high-value customers with your marketing campaigns. 

With look-alike audiences, you can create expanded audiences that target customers similar to your high-performing audiences or target customers similar to previously converted audiences.

## Terminology

Before getting started with look-alike audiences, make sure to understand the following concepts:

- **Base audience**: The base audience is the audience that you want to find out more insights about. This is the audience that the look-alike model is **based** on. 
- **Look-alike model**: A look-alike model is a machine learning model that is trained on every eligible base audience without any customer input. Each look-alike model creates the influential factors and similarity graphs. A look-alike model does **not** get scored.
- **Look-alike audience**: A look-alike audience is the audience that is created when a look-alike model with a selected similarity threshold is applied to the base audience. The look-alike audience is what gets scored.

## View look-alike insights

Look-alike insights is built-in with the audience details page. To look at the look-alike insights for an audience, select **[!UICONTROL Audiences]** in the left navigation bar, followed by **[!UICONTROL Browse]**, and the audience you want to view the insights for.

IMAGE

The audience details page appears. Select **[!UICONTROL Look-alike insights]** tab to view the audience's look-alike insights.

The **[!UICONTROL Look-alike insights]** page is displayed. This page has three main elements - the similarity and reach graph, the look-alike audiences, and the influential factors.

### Similarity and reach

>[!NOTE]
>
>The base audience **must** have a profile count greater than zero in order to train the look-alike model. If the profile count isn't greater than zero for the selected base audience, the similarity and reach graph will **not** be displayed.

The similarity and reach section displays a graph that plots the expected reach of a look-alike audience consisting of profiles above a given similarity score.

IMAGE

On this graph, the x-axis measures the similarity percentage between a profile and members of the selected audience. The similarity score ranges from 0% to 100%, with a higher similarity score indicating that a profile is closer, in terms of influential factor values, to members of the selected audience.

The y-axis shows the expected count of profiles with the similarity percentage that corresponds with the matching value of the x-axis. This expected count of profiles ranges from 0 to 25 million profiles, which is the maximum number of profiles supported in a look-alike audience. This axis is measured on a **logarithmic scale** to improve the readability of the graph. 

When you hover over a specific point in the graph, it'll display the similarity percentage and the expected profile count for the currently highlighted point.

### Look-alike audiences

The look-alike audiences section displays a list of all the look-alike audiences that have been previously created for the selected base audience.

IMAGE

### Influential factors

The influential factors section displays both the positive and negative factors that influence the look-alike model for the selected base audience. These influential factors are Profile data fields, values, and value ranges that are the most important in explaining similarities in the base audience, which lets you better personalize your marketing content for this audience and any look-alike audience you create from it.

IMAGE

>[!NOTE]
>
>The influential factors are sorted in order of importance.

| Field | Description | 
| ----- | ----------- |
| Type | The type of data that influential factor is derived from. This can be a profile attribute, an experience event, or an audience membership. |
| Key | The name of the data field. |
| Value | The value or value range of the data field that indicates the similarity to the members of the base audience. |
| Importance | The relative level of importance of the influential factor. This can be high, medium, or low. |

## Create a look-alike audience

To create a look-alike audience, you'll need to select the audience you want to base the look-alike audience off of. To access the audience, select **[!UICONTROL Audiences]** in the left navigation bar, followed by **[!UICONTROL Browse]**, and the base audience.

IMAGE

On the audience details page, select **[!UICONTROL Create look-alike audience]** to begin the process of creating a look-alike audience.

IMAGE

The **[!UICONTROL Create a look-alike audience]** popover appears. On this page, you can set the similarity percentage for the look-alike audience.

IMAGE

You can set this similarity percentage in three different ways:

- Move the slider to set the similarity percentage
- Enter the similarity percentage in the numeric entry box next to the slider
- Hover over the graph and select the desired location to set the similarity percentage

You can also update details about the look-alike audience, including its name and description. By default, the look-alike audience's name will be generated based on the base audience's name and the similarity percentage previously specified.

IMAGE

Select **[!UICONTROL Create]** to finish creating your look-alike audience.

IMAGE

The newly created look-alike audience can be accessed in the **[!UICONTROL Look-alike audiences]** section of the audience details page, and is also available in the Audience Portal and other downstream usages.

## View look-alike audience details

To view details of a look-alike audience, select the look-alike audience in the **[!UICONTROL Look-alike audiences]** section of the base audience.

IMAGE

The audience details page appears. For more information on this page, please read the [audience details section of the Segmentation Service UI guide](./overview.md#audience-details).

IMAGE

## Exclude data fields from look-alike modeling

The modeling process for look-alike audiences will exclude **any** field, dataset, or segment with the C9 contract label. 

As a result, if you want to exclude any data that is sensitive or otherwise inappropriate for look-alike modeling, apply the C9 contract label to that data. For more information on managing data usage labels, please read the [data usage labels UI guide](../../data-governance/labels/user-guide.md).

## Next steps

After reading this guide, you have learned how to view look-alike insights and create look-alike audiences based on these insights. For more information on audiences in the Adobe Experience Platform UI, please read the [Segmentation Service UI guide](./overview.md).
