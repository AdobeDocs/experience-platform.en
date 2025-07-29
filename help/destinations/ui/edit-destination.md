---
title: Edit destinations
type: Tutorial
description: Learn how to edit and update existing destinations accounts in the Adobe Experience Platform UI
badgeBeta: label="Beta" type="Informative"
---
# Edit destinations

Learn how to edit various components of an existing destination connection, including how to update authentication credentials, export location, and more by using the Experience Platform UI.

>[!IMPORTANT]
>
>This functionality is in beta and only available to select customers. To request access, contact your Adobe representative.

>[!NOTE]
>
> The edit operations described in this tutorial are also supported via API operations. Read the tutorial on how to [edit destinations in the API](/help/destinations/api/edit-destination.md) for more information.

To edit various components of an existing destination connection: 

1. Navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**.
2. Select the desired destination that you want to edit.
3. Select the ellipsis (`...`) in the [!UICONTROL Name] column and use the ![Edit destination control](/help/images/icons/edit.png)**[!UICONTROL Edit destination]** control to edit existing destination connections.
4. In the modal window, edit any desired settings. Select **[!UICONTROL Next]** when done. 
5. If desired, update any of the marketing actions associated with this destination connection. Select **[!UICONTROL Save]** when done.

![Screen recording showing the process to edit existing destination connections.](/help/destinations/assets/ui/edit-destinations/edit-destinations-recording.gif)

In the edit destination window, you can update any settings that you configured when you initialy connected to the destination. These settings are different based on the destination platform that you are updating.

Depending on how the destination was configured, some fields might be read-only and cannot be edited. To change the value of read-only fields, you must [create a new destination connection](../ui/connect-destination.md) with the new field values.

![Screenshot showing a read-only field.](../assets/ui/edit-destinations/read-only.png)

Below are some examples of the settings that you can update for [Amazon S3](../catalog/cloud-storage/amazon-s3.md), [Azure Event Hubs](../catalog/cloud-storage/azure-event-hubs.md), and [Google Ads](../catalog/advertising/google-ads-destination.md) destinations.

<table style="width:100%; table-layout:fixed; border-collapse:separate; border-spacing:16px 0;">
  <tr>
    <td align="center" style="vertical-align:top;">
      <img src="../assets/ui/edit-destinations/edit-amazon-s3-connection.png" alt="Edit destination screen for the Amazon S3 destination." width="100" data-zoomable="yes" />
    </td>
    <td align="center" style="vertical-align:top;">
      <img src="../assets/ui/edit-destinations/edit-eventhubs-connection.png" alt="Edit destination screen for the Azure EventHubs destination." width="100" data-zoomable="yes" />
    </td>
    <td align="center" style="vertical-align:top;">
      <img src="../assets/ui/edit-destinations/edit-google-ads-connection.png" alt="Edit destination screen for the Google Ads destination." width="100" data-zoomable="yes" />
    </td>
  </tr>
</table>

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
