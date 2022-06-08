---
title: Activate audience segments to batch destinations on-demand using the Experience Platform UI
type: Tutorial
description: Learn how to activate audience segments to batch destinations on-demand using the Experience Platform UI.
---
# Activate audience segments to batch destinations on-demand using the Experience Platform UI

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

## Overview {#overview}

This article explains how to use the Experience Platform UI to activate audience segments on-demand to batch destinations such as cloud storage and email marketing destinations.

The **[!UICONTROL Activate Now]** control allows you to export a full file without interrupting the current schedule of a previously scheduled segment. This export happens in addition to previously scheduled exports and does not change the export frequency of the segment.

To use the Flow service API for this purpose, read [Activate audience segments on-demand to batch destinations via the ad-hoc activation API](/help/destinations/api/ad-hoc-activation-api.md).

## Prerequisites {#prerequisites}

To activate data to destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

## How to activate segments on demand {#select-activate-now-control}

Include popover with ID platform_destinations_activationchaining_activatenow
Text will be: Select this control to deliver a full file export on top of any previously scheduled exports

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Image highlighting how to get to the destinations catalog tab](../assets/ui/activate-batch-profile-destinations/catalog-tab.png)

1. Select **[!UICONTROL Activate segments]** on the card corresponding to the batch destination where you want to activate your segments, as shown in the image below.

    ![Image highlighting the Activate segments button](../assets/ui/activate-batch-profile-destinations/activate-segments-button.png)

More info will be needed here

## Related information {#related-information}

* [Activate audience segments to batch destinations on-demand using the Experience Platform UI](/help/destinations/ui/ad-hoc-activation-ui.md)
* [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md)