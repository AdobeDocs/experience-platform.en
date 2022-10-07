---
keywords: activate profile request destinations;activate data;profile request destinations
title: Activate audience data to profile request destinations
type: Tutorial
description: Learn how to activate the audience data you have in Adobe Experience Platform by mapping segments to profile request destinations.
exl-id: cd7132eb-4047-4faa-a224-47366846cb56
---
# Activate audience data to profile request destinations

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

## Overview {#overview}

This article explains the workflow required to activate audience data in Adobe Experience Platform profile request destinations. When used together with [edge segmentation](../../segmentation/ui/edge-segmentation.md), these destinations enable same-page and next-page personalization use cases on your web properties. Read more about [enabling same-page and next-page personalization use cases](/help/destinations/ui/configure-personalization-destinations.md). 

Examples of profile request destinations are the [Adobe Target](../../destinations/catalog/personalization/adobe-target-connection.md) and the [Custom personalization](../../destinations/catalog/personalization/custom-personalization.md) connections. 

## Prerequisites {#prerequisites}

To activate data to destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported personalization destinations, and configure the destination that you want to use.

### Segment merge policy {#merge-policy}

Currently, profile request destinations only support the activation of segments that use the [Active-on-Edge Merge Policy](../../segmentation/ui/segment-builder.md#merge-policies) set as default.

## Select your destination {#select-destination}

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Destination Catalog tab](../assets/ui/activate-segment-streaming-destinations/catalog-tab.png)

1. Select **[!UICONTROL Activate segments]** on the card corresponding to the personalization destination where you want to activate your segments, as shown in the image below.

    ![Activate buttons](../assets/ui/activate-profile-request-destinations/activate-segments-button.png)

1. Select the destination connection that you want to use to activate your segments, then select **[!UICONTROL Next]**.

    ![Select destination](../assets/ui/activate-profile-request-destinations/select-destination.png)

1. Move to the next section to [select your segments](#select-segments).

## Select your segments {#select-segments}

Use the check boxes to the left of the segment names to select the segments that you want to activate to the destination, then select **[!UICONTROL Next]**.

![Select segments](../assets/ui/activate-profile-request-destinations/select-segments.png)

## (Beta) Map attributes {#map-attributes}

>[!IMPORTANT]
>
>The mapping step, which enables attribute-based personalization for [Adobe Target](/help/destinations/catalog/personalization/adobe-target-connection.md) and [generic personalization destinations](/help/destinations/catalog/personalization/custom-personalization.md), is currently in beta and your organization may not have access to it yet. This documentation is subject to change.

Select the attributes based on which you want to enable personalization use cases for your users. This means that if the value of an attribute changes or if an attribute is added to a profile, that profile will become a member of the segment and will be activated to the personalization destination.

Adding attributes is optional and you can still proceed to the next step and enable same-page and next-page personalization without selecting attributes. If you do not add any attributes in this step, personalization will still occur based on the segment membership and identity map qualifications for profiles.

![Image showing the mapping step with an attribute selected](../assets/ui/activate-profile-request-destinations/mapping-step.png)

### Select source attributes {#select-source-attributes}

To add source attributes, select the **[!UICONTROL Add new field]** control on the **[!UICONTROL Source field]** column and search or navigate to your desired XDM attribute field, as shown below.

![Screen recording showing how to select a target attribute in the mapping step](../assets/ui/activate-profile-request-destinations/mapping-step-select-attribute.gif)

### Select target attributes {#select-target-attributes}

>[!NOTE]
>
>Some destinations require you to only select source attributes, while others require both source and target attributes.
>
>Currently, the [Adobe Target V2](../catalog/personalization/adobe-target-connection.md) destination requires only source attributes, while [Custom Personalization with Attributes](../catalog/personalization/custom-personalization.md) requires both source and target attributes.

To add target attributes, select the **[!UICONTROL Add new field]** control on the **[!UICONTROL Target field]** column and type in the custom attribute name that you want to map the source attribute to.

![Screen recording showing how to select an XDM attribute in the mapping step](../assets/ui/activate-profile-request-destinations/mapping-step-select-target-attribute.gif)

## Schedule segment export {#scheduling}

By default, the [!UICONTROL Segment schedule] page shows only the newly selected segments that you chose in the current activation flow.

![New segments](../assets/ui/activate-profile-request-destinations/new-segments.png)

To see all the segments being activated to your destination, use the filtering option and disable the **[!UICONTROL Show new segments only]** filter.

![All segments](../assets/ui/activate-profile-request-destinations/all-segments.png)

On the **[!UICONTROL Segment schedule]** page, select each segment, then use the **[!UICONTROL Start date]** and **[!UICONTROL End date]** selectors to configure the time interval for sending data to your destination.

![Segment schedule](../assets/ui/activate-profile-request-destinations/segment-schedule.png)

Select **[!UICONTROL Next]** to go to the [!UICONTROL Review] page.

## Review {#review}

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

>[!IMPORTANT]
>
>In this step, Adobe Experience Platform checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](../../rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
![data policy violation](../assets/common/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

![Review](../assets/ui/activate-profile-request-destinations/review.png)

<!--

Commenting out this part since destination monitoring is not available currently for the Adobe Target and Custom Personalization destinations.

## Verify segment activation {#verify}

Check the [destination monitoring documentation](../../dataflows/ui/monitor-destinations.md) for detailed information on how to monitor the flow of data to your destinations.

-->