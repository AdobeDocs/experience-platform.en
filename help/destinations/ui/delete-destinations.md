---
keywords: delete destinations; how to delete destinations
title: Delete destinations
type: Tutorial
description: This tutorial lists the steps to delete an existing destination in the Adobe Experience Platform UI
---

# Delete destinations {#delete-destinations}

## Overview {#overview}

In the Adobe Experience Platform user interface, you can delete existing connections to destinations.

Deleting a destination removes any existing dataflows to that destination. All segments activated to the destinations that you delete will be unmapped before the dataflow is deleted.

There are two ways you can delete destinations from the Platform [!DNL UI]. You can:

* [Delete destinations from the [!UICONTROL Browse] tab](#delete-browse-tab)
* [Delete destinations from the destination details page](#delete-destination-details-page)

## Delete destinations from the Browse tab{#delete-browse-tab}

Follow the steps below to delete a destination from the [!UICONTROL Browse] tab.

1. Log in to the [Experience Platform UI](https://platform.adobe.com/) and select **[!UICONTROL Destinations]** from the left navigation bar. Select **[!UICONTROL Browse]** from the top header to view your existing destinations.

    ![Browse destinations](/destinations/assets/ui/delete-destinations/browse-destinations.png)

2. Select the ![Delete button](/destinations/assets/ui/delete-destinations/delete-icon.png) **[!UICONTROL Delete]** button in the **[!UICONTROL Platform]** column to remove an existing destination.
    ![Delete destinations](/destinations/assets/ui/delete-destinations/delete-destinations.png)

3. Select **[!UICONTROL Delete]** to confirm the removal of the destination.

    ![Confirm delete destination](/destinations/assets/ui/delete-destinations/delete-destinations-confirm.png)


## Delete destinations from the destination details page{#delete-destination-details-page}

Follow the steps below to delete a destination from the destination details page.

1. Log in to the [Experience Platform UI](https://platform.adobe.com/) and select **[!UICONTROL Destinations]** from the left navigation bar. Select **[!UICONTROL Browse]** from the top header to view your existing destinations.

    ![Browse destinations](/destinations/assets/ui/delete-destinations/browse-destinations.png)

1. Select the name of the destination that you want to delete.

    ![Select destination](/destinations/assets/ui/delete-destinations/delete-destination-select.png)

   * If the destination has existing dataflows, you are taken to the [!UICONTROL Dataflow runs] tab.

        ![Dataflow runs tab](/destinations/assets/ui/delete-destinations/destination-details-dataflows.png)

   * If the destination does not have existing dataflows, you are taken to an empty page where you can start activating audiences.

        ![Destination details](/destinations/assets/ui/delete-destinations/destination-details-empty.png)


1. Select **[!UICONTROL Delete]** on the right rail.

    ![Delete destination](/destinations/assets/ui/delete-destinations/delete-destinations-button.png)

1. Select **[!UICONTROL Delete]** on the confirmation dialog to remove the destination.

    ![Delete destination confirm](/destinations/assets/ui/delete-destinations/delete-destinations-delete.png)

    >[!NOTE]
    >
    >Depending on server load, it can take a few minutes for [!DNL Platform] to delete the destination.