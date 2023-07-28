---
solution: Experience Platform
title: Look-alike Audiences
description: Learn how to target new high-value audiences in Adobe Experience Platform using look-alike audiences.
---

# Look-alike audiences guide

In Adobe Experience Platform, look-alike audiences provide intelligent insights on each of your audiences, leveraging machine-learning-based insights to identify and target high-value customers with your marketing campaigns. 

With look-alike audiences, you can create expanded audiences that target customers similar to your high-performing audiences or target customers similar to previously converted audiences.

## Terminology {#terminology}

Before getting started with look-alike audiences, make sure to understand the following concepts:

- **Base audience**: The base audience is the audience that you want to find out more insights about. This is the audience that the look-alike model is **based** on. 
- **Look-alike model**: A look-alike model is a machine learning model that is trained on every eligible base audience without any customer input. Each look-alike model creates the influential factors and similarity graphs. A look-alike model does **not** get scored.
- **Look-alike audience**: A look-alike audience is the audience that is created when a look-alike model with a selected similarity threshold is applied to the base audience. The look-alike audience is what gets scored.
- **Total addressable audience size**: The total addressable audience size is the total number of profiles in the past 30 days minus the base audience population in the past 30 days. For example, if a customer has 10 million profiles in the past 30 days, and the base audience has 1 million profiles in the past 30 days, the total addressable audience size is 9 million profiles.

## Look-alike model details {#details}

In Adobe Experience Platform, the look-alike model consumes three different types of data points:

- Audience membership over the past 30 days
- Experience events over the past 30 days that have been ingested in the Real-Time Customer Profile
- Profile attributes over the past 30 days that have been ingested in the Real-Time Customer Profile 

All of these data points are turned into key value pairs which are fed into the look-alike model. Only the key value pairs with a significant percentage of profiles matching will be kept.

The look-alike model is run on a frequent basis, creating and re-creating the influential factors and similarity graphs for the base audiences. Scoring for the look-alike audiences is also run frequently.

For a more detailed explanation on how the look-alike model works, please read (link to the tech blog).

## Entitlements {#entitlements}

The following entitlements apply for usage of look-alike audiences:

- Real-Time CDP Prime customers are entitled to **5** active look-alike audiences in production sandboxes
- Real-Time CDP Ultimate customers are entitled to **20** active look-alike audiences in production sandboxes
- Development sandboxes are limited to **5** look-alike audiences for all Real-Time CDP customers

Add-on packs are available which increase the entitlements for production sandboxes by 20 look-alike audiences per pack.

## View look-alike insights {#view}

Look-alike insights is built-in with the audience details page. To look at the look-alike insights for an audience, select **[!UICONTROL Audiences]** in the left navigation bar, followed by **[!UICONTROL Browse]**, and the audience you want to view the insights for.

![The Audiences button is highlighted, as well as the base audience being used for look-alike modeling.](../images/ui/lookalike-audiences/browse.png)

The audience details page appears. Select **[!UICONTROL Look-alike insights]** tab to view the audience's look-alike insights. The **[!UICONTROL Look-alike insights]** page is displayed. This page has three main elements - the similarity and reach graph, the look-alike audiences, and the influential factors.

![The Look-alike insights tab is highlighted, displaying the look-alike insights for the base audience.](../images/ui/lookalike-audiences/look-alike-insights.png)

### Similarity and reach {#similarity-and-reach}

The similarity and reach section displays a graph that plots the expected reach of a look-alike audience consisting of profiles above a given similarity score. The similarity score represents the **distance** of similarity between the base audience's profile and the look-alike insight's profile.

![The similarity and reach graph is highlighted.](../images/ui/lookalike-audiences/similarity-and-reach.png)

On this graph, the x-axis measures the similarity percentage between a profile and members of the selected audience. The similarity score ranges from 0% to 100%, with a higher similarity score indicating that a profile is closer, in terms of influential factor values, to members of the selected audience.

The y-axis shows the expected count of profiles with the similarity percentage that corresponds with the matching value of the x-axis. This expected count of profiles ranges from 0 to the total addressable audience size or 25 million profiles, whichever is lower. This axis is measured on a **logarithmic scale** to improve the readability of the graph. 

Please note that the graph is **cumulative** from right to left. This means that at any point in the graph, the value of the y-axis is the number of profiles that have a similarity **above** the similarity threshold. For example, if the x-axis is at 60% and the y-axis is 10 million, this means that there are 10 million profiles which have a similarity at or above 60% to the base audience.

When you hover over a specific point in the graph, it'll display the similarity percentage and the expected profile count for the currently highlighted point.

### Look-alike audiences {#list}

The look-alike audiences section displays a list of all the look-alike audiences that have been previously created for the selected base audience.

![The look-alike audiences section is highlighted.](../images/ui/lookalike-audiences/select-laa.png)

### Influential factors {#influential-factors}

The influential factors section displays both the top 100 positive and negative factors that influence the look-alike model for the selected base audience. These influential factors are profile attributes, experience events, and audience memberships that are the most important in explaining similarities in the base audience, which lets you better personalize your marketing content for this audience and any look-alike audience you create from it.

For influential factors that are numeric, the key value pairs may be put into buckets, depending on the number of different values that key has. For example, if you have a key of `income`, there most likely would be many unique values. As a result, the key value pairs will be placed into buckets tha could look like `income=[0, 30000]`, `income=[30000, 50000]`, and `income=[50000, 100000]`.

These buckets are regularly re-computed to ensure the data is kept up-to-date.

![The influential factors section is highlighted.](../images/ui/lookalike-audiences/influential-factors.png)

>[!NOTE]
>
>The influential factors are sorted in order of importance.

| Field | Description | 
| ----- | ----------- |
| Type | The type of data that influential factor is derived from. This can be a profile attribute, an experience event, or an audience membership. |
| Key | The name of the data field. For keys of the audience membership type, this value represents the **namespace** of the audience where the data comes from. Possible values include `ups` (Segmentation Service) and `ao` (Audience Orchestration). For keys of other types, this value represents the XDM field path. For example, if the company Luma has a custom field called income, the key would be `_luma.income` |
| Value | For profile attributes or experience event, this field represents the value or value range of the data field that indicates the similarity to the members of the base audience. The value range is written in the form `[A -> B]`, where `A` represents the lower range while `B` represents the higher range. For audience memberships, this field is the name of the audience. |
| Importance | The relative level of importance of the influential factor. This can be high, medium, or low. |

## Create a look-alike audience {#create}

>[!IMPORTANT]
>
>You **cannot** use a look-alike audience as the base audience for another look-alike audience. That is to say, you **cannot** create chained look-alike audiences.

To create a look-alike audience, you'll need to select the audience you want to base the look-alike audience off of. To access the audience, select **[!UICONTROL Audiences]** in the left navigation bar, followed by **[!UICONTROL Browse]**, and the base audience.

![The Audiences button is highlighted, as well as the base audience being used for look-alike modeling.](../images/ui/lookalike-audiences/browse.png)

On the audience details page, select **[!UICONTROL Create look-alike audience]** to begin the process of creating a look-alike audience.

![The [!UICONTROL Create look-alike audience] button is highlighted.](../images/ui/lookalike-audiences/create-look-alike-audience.png)

The **[!UICONTROL Create a look-alike audience]** popover appears. On this page, you can set the similarity percentage for the look-alike audience.

![The [!UICONTROL Create a look-alike audience] popover is displayed.](../images/ui/lookalike-audiences/create-audience.png)

You can set this similarity percentage in three different ways:

- Move the slider to set the similarity percentage
- Enter the similarity percentage in the numeric entry box next to the slider
- Hover over the graph and select the desired location to set the similarity percentage

You can also update details about the look-alike audience, including its name and description. By default, the look-alike audience's name will be generated based on the base audience's name and the similarity percentage previously specified.

![The basic information is highlighted within the [!UICONTROL Create a look-alike audience] popover.](../images/ui/lookalike-audiences/basic-info.png)

Select **[!UICONTROL Create]** to finish creating your look-alike audience.

![The create button is highlighted within the [!UICONTROL Create a look-alike audience] popover.](../images/ui/lookalike-audiences/create-audience.png)

The newly created look-alike audience can be accessed in the **[!UICONTROL Look-alike audiences]** section of the audience details page, and is also available in the Audience Portal and other downstream usages. Please note that it will take some time for the look-alike audience to be scored. Until it is scored, the profile count will be appear to be 0.

## View look-alike audience details {#view-details}

To view details of a look-alike audience, select the look-alike audience in the **[!UICONTROL Look-alike audiences]** section of the base audience.

![The look-alike audiences section is highlighted.](../images/ui/lookalike-audiences/select-laa.png)

The audience details page appears. For more information on this page, please read the [audience details section of the Segmentation Service UI guide](./overview.md#audience-details).

![Details of the look-alike audience are displayed.](../images/ui/lookalike-audiences/laa-details.png)

## Exclude data fields from look-alike modeling {#exclude}

By default, the modeling process for look-alike audiences will exclude **any** field, dataset, or audience based on the enabled privacy policy for your organization. If the base audience has no contract labels, the modeling process will exclude **any** field, dataset, or audience based on the enabled privacy policy for your organization. 

If the base audience has contract labels, the modeling process will will exclude **any** field, dataset, or audience based on the enabled privacy policy for your organization **but** it will **include** **any** field, dataset, or audience that has the same contract labels as the base audience. This is because the look-alike audience will inherit those labels from the base audience, so the contract label will be enforced during audience activation.

Additionally, the modeling process for look-alike audiences will exclude **any** field, dataset, or segment with the C9 contract label. 

As a result, if you want to exclude any data that is sensitive or otherwise inappropriate for look-alike modeling, apply the C9 contract label to that data. For more information on managing data usage labels, please read the [data usage labels UI guide](../../data-governance/labels/user-guide.md).

## Next steps

After reading this guide, you have learned how to view look-alike insights and create look-alike audiences based on these insights. For more information on audiences in the Adobe Experience Platform UI, please read the [Segmentation Service UI guide](./overview.md).
