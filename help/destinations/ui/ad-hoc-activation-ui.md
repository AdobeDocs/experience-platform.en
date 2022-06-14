---
title: Activate audience segments on-demand to batch destinations using the Experience Platform UI
type: Tutorial
description: Learn how to activate audience segments on-demand to batch destinations using the Experience Platform UI.
---
# Activate audience segments on-demand to batch destinations using the Experience Platform UI

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

## Activate on-demand overview {#overview}

<!--

Include popover with ID platform_destinations_activationchaining_activatenow
Popover text: Select this control to deliver a full file export in addition to any previously scheduled exports. The file export is triggered immediately and it picks up the latest results from Experience Platform segmentation runs.

-->

This article explains how to use the Experience Platform UI to activate audience segments on-demand to batch destinations such as cloud storage and email marketing destinations.

The **[!UICONTROL Activate On-demand]** control allows you to export a full file without interrupting the current schedule of a previously scheduled segment. This export happens in addition to previously scheduled exports and does not change the export frequency of the segment. The file export is triggered immediately and it picks up the latest results from Experience Platform segmentation runs.

You can also use the Flow Service API for this purpose. Read how to [activate audience segments on-demand to batch destinations via the ad-hoc activation API](/help/destinations/api/ad-hoc-activation-api.md).

## Prerequisites {#prerequisites}

To activate data on-demand to batch destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

## How to activate segments on-demand {#select-activate-on-demand-control}

1. Go to **[!UICONTROL Connections > Destinations]**, select the **[!UICONTROL Browse]** tab and the filter symbol to filter the displayed connections to your desired batch destination.
    
    ![Image highlighting how to get to the browse tab and filter existing dataflows.](../assets/ui/activate-on-demand/browse-tab.png)

2. Select your desired destination connection to inspect the existing dataflow to the destination.

    ![Image highlighting a filtered dataflow.](../assets/ui/activate-on-demand/filtered-dataflow.png)

3. Select the segment for which you want to export a file on-demand and select the **[!UICONTROL Activate on-demand]** control to trigger a one-time export which will deliver a file to your batch destination.

    ![Image highlighting the Activate ad-hoc button.](../assets/ui/activate-on-demand/activate-segment-on-demand.png)

4. Select **[!UICONTROL Yes]** to confirm and trigger the file export.

    ![Image showing the activate on-demand confirmation dialog.](../assets/ui/activate-on-demand/confirm-activation.png)

5. A confirmation message appears, letting you know that the file export has started.

    ![Image showing confirmation of successful ad-hoc activation.](../assets/ui/activate-on-demand/ad-hoc-success.png)

6. You can also switch to the **[!UICONTROL Dataflow runs]** tab to confirm that the file export has kicked off.

## Considerations {#considerations}

Keep in mind the following considerations when using the activate on-demand control:

* Activate on-demand works only for segments that have no end date (export frequency of **[!UICONTROL Once]**) in the batch activation dataflow, or where the end date has not yet passed.
* If a new merge policy was created, and a segment was created off that merge policy, activate on-demand will not work until 24 hours have passed,
* Net new segments created off existing merge policies older than 24 hours may work. However, daily segmentation may not have ran and would result in zero profiles exported in the file.
* For best results, activate on-demand should be used for segments that have been activated longer than 24 hours.

## UI error messages {#ui-error-messages}

When using the activate now control, you might encounter any of the error messages listed below. Review them below to understand how to address them when they do appear.

+++Run already going on for segment fb1bb839-69e5-40e8-ba9b-c96b84bf1519 for order 07e4dca1-dafb-4c2f-ab05-e4f65c4a4f62 with run id 6becd765-a2ca-4a8f-8041-37fad0f4391a

This error message indicates that an ad-hoc activation flow is currently ongoing for a segment. Wait for the job to finish before triggering the activation job again.

+++

+++Segments `<segment name>` are not part of this dataflow or out of schedule range!

This error message indicates that the segments you selected to activate are not mapped to the dataflow or that the activation schedule set up for the segments has either expired or not yet started.

+++

## Related information {#related-information}

* [Activate audience segments to batch destinations on-demand using the Experience Platform UI](/help/destinations/ui/ad-hoc-activation-ui.md)
* [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md)