---
title: Edit destinations
type: Tutorial
description: Learn how to edit and update existing destinations accounts in the Adobe Experience Platform UI
---
# Edit destinations

Learn how to edit various components of an existing destination connection, including how to update authentication credentials, export location, and more by using the Experience Platform UI.

>[!NOTE]
>
> The edit operations described in this tutorial are also supported via API operations. Read the tutorial on how to [edit destinations in the API](/help/destinations/api/edit-destination.md) for more information.

To edit various components of an existing destination connection: 

1. Navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**.
2. Select the desired destination that you want to edit.
3. Select the ellipsis (`...`) in the [!UICONTROL Name] column and use the ![Edit destination control](/help/images/icons/edit.png)**[!UICONTROL Edit destination]** control to edit existing destination connections.
4. In the modal window, edit any desired settings. Select Next when done. 
5. If desired, update any of the marketing actions associated with this destination connection. Select **[!UICONTROL Save]** when done.

![Screen recording showing the process to edit existing destination connections.](/help/destinations/assets/ui/edit-destinations/edit-destinations-recording.gif)

In the edit destination window, you can update any settings that you configured when you initialy connected to the destination. These settings are different based on the destination platform that you are updating. Below are some examples of the settings that you can update for Amazon S3, Azure EventHubs, and Google Ads destinations.

![Edit destination screen for the Amazon S3 destination.](/help/destinations/assets/ui/edit-destinations/edit-amazon-s3-connection.png){width="100" zoomable="yes"}

![Edit destination screen for the Azure EventHubs destination.](/help/destinations/assets/ui/edit-destinations/edit-eventhubs-connection.png){width="100" zoomable="yes"}

![Edit destination screen for the Google Ads destination.](/help/destinations/assets/ui/edit-destinations/edit-google-ads-connection.png){width="100" zoomable="yes"}

>[!SUCCESS]
>
>Your destinaton connection settings are now updated.

## Other editing options

By using the Experience Platform UI or the Flow Service API, you can edit various destination configurations, as detailed in the links below:

|Using the Experience Platform UI | Using the Flow Service API |
|---------|----------|
| Edit destination connections (this page) | [Edit target connection components (storage location and other components)](/help/destinations/api/edit-destination.md#patch-target-connection) |
| [Edit accounts](/help/destinations/ui/update-accounts.md) | [Edit base connection components (authentication parameters and other components)](/help/destinations/api/edit-destination.md#patch-base-connection) |
| [Edit activation dataflows](/help/destinations/ui/edit-activation.md) | [Update destination dataflows](/help/destinations/api/update-destination-dataflows.md) |

## Next steps

By following this tutorial, you have successfully used the **[!UICONTROL destinations]** workspace to update existing destination connections.

For more information about destinations, refer to the [destinations overview](../catalog/overview.md).
