---
keywords: destinations;destination;destinations detail page;destinations details page
title: Destinations Details Page
seo-title: Destinations Details Page
description: The details page for an individual destination provides an overview of the destination details, such as the destination name, ID, segments mapped to the destination, and controls to edit the activation and to enable and disable the data flow. 
seo-description: The details page for an individual destination provides an overview of the destination details, such as the destination name, ID, segments mapped to the destination, and controls to edit the activation and to enable and disable the data flow. 
---

# Destination details page

The details page for an individual destination provides an overview of the destination's attributes and activities. These details include the destination's name and ID, metrics for activated profiles, a history of dataflow runs, controls to activate or disable the destination, and more.

>[!NOTE]
>
>The destinations details page is part of the [!UICONTROL Destinations] workspace in the Adobe Experience Platform user interface. See the [[!UICONTROL Destinations] workspace overview](./destinations-workspace.md) for more information.

In the **[!UICONTROL Destinations]** workspace within the Platform UI, navigate to the **[!UICONTROL Browse]** tab and select the name of the destination that you want to view.

![](./assets/details-page/select-destination.png)

The details page for the destination appears, showing its available controls and monitoring widgets.

![](./assets/details-page/details.png)

## Right rail

The right rail displays the basic information about the destination.

![](./assets/details-page/right-rail.png)

The following table covers the controls and details provided by the right rail:

| Right-rail item | Description |
| --- | --- |
| [!UICONTROL Activate] | Select this control to edit which segments are mapped to the destination. See the guide on [activating segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for more information. |
| [!UICONTROL Destination name] | This field can be edited in order to update the destination's name. |
| [!UICONTROL Description] |  This field can be edited in order to update or add an optional description to the destination. |
| [!UICONTROL Destination] | Represents the destination platform that audiences are sent to. See the [destinations catalog](./destinations-catalog.md) for more information. |
| [!UICONTROL Status] | Indicates whether the destination is enabled or disabled. |
| [!UICONTROL Marketing actions] | Indicates the marketing actions (use cases) that apply for this destination for data-governance purposes. |
| [!UICONTROL Category] | Indicates the destination type. See the [destinations catalog](./destinations-catalog.md) for more information. |
| [!UICONTROL Connection type] | Indicates the form by which your audiences are being sent to the destination. Possible values include "[!UICONTROL Cookie]" and "[!UICONTROL Profile-based]". |
| [!UICONTROL Frequency] | Indicates how often the audiences are sent to the destination. Possible values include "[!UICONTROL Streaming]" and "[!UICONTROL Batch]".  |
| [!UICONTROL Identity] | Represents the identity namespace accepted by the destination, such as `GAID`, `IDFA`, or `email`. For more information on accepted identity namespaces, see the [identity namespace overview](../../identity-service/namespaces.md). |
| [!UICONTROL Created by] | Indicates the user who created this destination. |
| [!UICONTROL Created] | Indicates the UTC datetime when this destination was created. |

## Enable/Disable toggle

You can use the **Enable/Disable** toggle to start and pause all data exports to the destination.

![](./assets/details-page/enable-disable.png)

## [!UICONTROL Dataflow runs]

The [!UICONTROL Dataflow runs] tab provides metric data on your dataflow runs. Totals for the number of activated and skipped Real-time Customer Profile records are displayed, as well as a list of individual runs and their particular metrics.

![](./assets/details-page/dataflow-runs.png)

>[!IMPORTANT]
>
>Skipped [!DNL Profile] records do not indicate failures or errors. A profile may be skipped if it contains data usage labels that are restricted by the destination, or the profile does not contain the appropriate customer consent information to be activated to the destination.
>
>For more information on data usage labels and how they can restrict profiles from being activated, see the overview on [data governance in Real-time CDP](../privacy/data-governance-overview.md). For more information on supporting customer consent frameworks in the activation workflow, see the overview on [IAB TCF 2.0 support in Real-time CDP](../privacy/iab/overview.md).

To view the details of a particular dataflow run, select the run's start time from the list. The details page for a dataflow run contains additional information such as the size of data processed and a list of any errors that occurred.

![](./assets/details-page/dataflow.png)

## [!UICONTROL Segments]

The [!UICONTROL Segments] tab displays a list of segments that have been mapped to the destination, including their start date and end date (if applicable). To view the details about a particular segment, select its name from the list.

![](./assets/details-page/segments.png)

>[!NOTE]
>
>For details on exploring the details page of a segment, refer to the [Segmentation UI overview](../../segmentation/ui/overview.md#segment-details).

## Next steps

This document covered the capabilities of the destination details page. For more information on managing destinations in the UI, see the overview on the [[!UICONTROL Destinations] workspace](./destinations-workspace.md).