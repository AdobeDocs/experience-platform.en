---
keywords: delete destinations, how to delete destinations, delete destination
title: Delete destinations
type: Tutorial
description: This tutorial lists the steps to delete an existing destination in the Adobe Experience Platform UI
exl-id: 7b672859-e61a-4b3c-9db9-62048258f0aa
---
# Delete destinations {#delete-destinations}

## Overview {#overview}

In the Adobe Experience Platform user interface, you can delete existing connections to destinations.

Deleting a destination removes any existing dataflows to that destination. All audiences activated to the destinations that you delete are unmapped before the dataflow is deleted.

There are two ways you can delete destinations from the [!DNL Platform] [!DNL UI]. You can:

* [Delete destinations from the [!UICONTROL Browse] tab](#delete-browse-tab)
* [Delete destinations from the destination details page](#delete-destination-details-page)

## Delete destinations from the Browse tab{#delete-browse-tab}

Follow the steps below to delete a destination from the [!UICONTROL Browse] tab.

1. Log in to the [Experience Platform UI](https://platform.adobe.com/) and select **[!UICONTROL Destinations]** from the left navigation bar. To view your existing destinations, select **[!UICONTROL Browse]** from the top header.

    ![Browse destinations](../assets/ui/delete-destinations/browse-destinations.png)

2. Select the filter icon ![Filter-icon](../assets/ui/delete-destinations/filter.png) on the top left to launch the sort panel. The sort panel provides a list of all your destinations. You can select more than one destination from the list to see a filtered selection of dataflows associated with the selected destination.

    ![Filter destinations](../assets/ui/delete-destinations/filter-destinations.png)

3. Select the ![More button](../assets/ui/delete-destinations/more-icon.png) button in the Name column and then select ![Delete button](../assets/ui/delete-destinations/delete-icon.png) **[!UICONTROL Delete]** to remove an existing destination connection.
    ![Delete destinations](../assets/ui/delete-destinations/delete-destinations.png)

4. Select **[!UICONTROL Delete]** to confirm the removal of the destination connection.

    ![Confirm delete destination](../assets/ui/delete-destinations/delete-destinations-confirm.png)

## Delete destinations from the destination details page{#delete-destination-details-page}

Follow the steps below to delete a destination from the destination details page.

1. Log in to the [Experience Platform UI](https://platform.adobe.com/) and select **[!UICONTROL Destinations]** from the left navigation bar. To view your existing destinations, select **[!UICONTROL Browse]** from the top header.

    ![Browse destinations](../assets/ui/delete-destinations/browse-destinations.png)

2. Select the filter icon ![Filter-icon](../assets/ui/delete-destinations/filter.png) on the top left to launch the sort panel. The sort panel provides a list of all your destinations. You can select more than one destination from the list to see a filtered selection of dataflows associated with the selected destination.

    ![Filter destinations](../assets/ui/delete-destinations/filter-destinations.png)

3. Select the name of the destination that you want to delete.

    ![Select destination](../assets/ui/delete-destinations/delete-destination-select.png)

   * If the destination has existing dataflows, you are taken to the [!UICONTROL Dataflow runs] tab.

        ![Dataflow runs tab](../assets/ui/delete-destinations/destination-details-dataflows.png)

   * If the destination does not have existing dataflows, you are taken to an empty page where you can start activating audiences.

        ![Destination details](../assets/ui/delete-destinations/destination-details-empty.png)

4. Select **[!UICONTROL Delete]** in the right rail.

    ![Delete destination](../assets/ui/delete-destinations/delete-destinations-button.png)

5. Select **[!UICONTROL Delete]** in the confirmation dialog to remove the destination.

    ![Delete destination confirm](..//assets/ui/delete-destinations/delete-destinations-delete.png)

    >[!NOTE]
    >
    >Depending on server load, it can take a few minutes for [!DNL Platform] to delete the destination.
