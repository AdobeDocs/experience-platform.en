---
keywords: activate segment streaming destinations;activate segment streaming destinations;activate data
title: Activate audience data to streaming segment export destinations
type: Tutorial
seo-title: Activate audience data to streaming segment export destinations
description: Learn how to activate the audience data you have in Adobe Experience Platform by mapping segments to segment streaming destinations.
seo-description: Learn how to activate the audience data you have in Adobe Experience Platform by mapping segments to segment streaming destinations.
---

# Activate audience data to streaming segment export destinations

## Overview {#overview}

This article explains the workflow required to activate audience data in Adobe Experience Platform segment streaming destinations.

## Prerequisites {#prerequisites}

To activate data to destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

## Select your destination {#select-destination}

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Browse]** tab.
    
    ![Destination Browse tab](../assets/ui/activate-segment-streaming-destinations/browse-tab.png)

1. Select the **[!UICONTROL Add segments]** button corresponding to the destination where you want to activate your segments, as shown in the image below.

    ![Activate buttons](../assets/ui/activate-segment-streaming-destinations/activate-buttons-browse.png)

1. Move to the next section to [select your segments](#select-segments).

## Select your segments {#select-segments}

Use the check boxes to the left of the segment names to select the segments that you want to activate to the destination, then select **[!UICONTROL Next]**.

![Select segments](../assets/ui/activate-segment-streaming-destinations/select-segments.png)

## Map attributes and identities {#mapping}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_applytransformation"
>title="Apply transformation"
>abstract="Check this option when using unhashed source fields, to have Adobe Experience Platform automatically hash them on activation."

>[!IMPORTANT]
>
>This step only applies to some segment streaming destinations. If your destinations does not have a **[!UICONTROL Mapping]** step, skip to [Schedule segment export](#scheduling).

Some segment streaming destinations require you to select source attributes or identity namespaces to map as target identities in the destination.

1. In the **[!UICONTROL Mapping]** page, select **[!UICONTROL Add new mapping]**.
    
    ![Add new mapping](../assets/ui/activate-segment-streaming-destinations/add-new-mapping.png)

1. Select the arrow to the right of the **[!UICONTROL Source field]** entry.

    ![Select source field](../assets/ui/activate-segment-streaming-destinations/select-source-field.png)

1. In the **[!UICONTROL Select source field]** page, use the **[!UICONTROL Select attributes]** or the **[!UICONTROL Select identity namespace]** options to switch between the two categories of available source fields. From the available [!DNL XDM] profile attributes and identity namespaces, select the ones that you want to map to the destination, then choose **[!UICONTROL Select]**.

    ![Select source field page](../assets/ui/activate-segment-streaming-destinations/source-field-page.png)

1. Select the button to the right of the **[!UICONTROL Target field]** entry.

    ![Select target field](../assets/ui/activate-segment-streaming-destinations/select-target-field.png)

1. In the **[!UICONTROL Select target field]** page, select the target identity namespace that you want to map the source field to, and choose **[!UICONTROL Select]**.

    ![Select target field page](../assets/ui/activate-segment-streaming-destinations/target-field-page.png)

1. To add more mappings, repeat steps 1 to 5.





## Schedule segment export {#scheduling}

1. On the **[!UICONTROL Segment schedule]** page, select each segment, then use the **[!UICONTROL Start date]** and **[!UICONTROL End date]** selectors to configure the time interval for sending data to your destination.

    ![Segment schedule](../assets/ui/activate-segment-streaming-destinations/segment-schedule.png)

    * Some destinations require you to select the **[!UICONTROL Origin of audience]** for each segment, using the drop-down menu underneath the calendar selectors. If your destination does not include this selector, skip this step.

        ![Mapping ID](../assets/ui/activate-segment-streaming-destinations/origin-of-audience.png)

    * Some destinations require you to manually map [!DNL Platform] segments to their counterpart in the target destination. To do this, select each segment, then enter the corresponding segment ID from the destination platform in the **[!UICONTROL Mapping ID]** field. If your destination does not include this field, skip this step.

        ![Mapping ID](../assets/ui/activate-segment-streaming-destinations/mapping-id.png)

    * Some destinations require you to enter an **[!UICONTROL App ID]** when activating [!DNL IDFA] or [!DNL GAID] segments. If your destination does not include this field, skip this step.

        ![App ID](../assets/ui/activate-segment-streaming-destinations/destination-appid.png)

1. Select **[!UICONTROL Next]** to go to the [!UICONTROL Review] page.

## Review {#review}

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

>[!IMPORTANT]
>
>In this step, Adobe Experience Platform checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](../../rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
![data policy violation](../assets/common/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

![Review](../assets/ui/activate-segment-streaming-destinations/review.png)

## Verify segment activation {#verify}

Check your destination account. If activation was successful, audiences are populated in your destination platform.

<!-- 
For [!DNL Facebook Custom Audience], a successful activation means that a [!DNL Facebook] custom audience would be created programmatically in [[!UICONTROL Facebook Ads Manager]](https://www.facebook.com/adsmanager/manage/). Segment membership in the audience would be added and removed as users are qualified or disqualified for the activated segments.

>[!TIP]
>
>The integration between Adobe Experience Platform and [!DNL Facebook] supports historical audience backfills. All historical segment qualifications are sent to [!DNL Facebook] when you activate the segments to the destination.
-->
