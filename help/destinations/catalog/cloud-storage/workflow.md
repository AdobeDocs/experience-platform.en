---
keywords: cloud storage destination;cloud storage
title: Create a cloud storage destination
type: Tutorial
description: Instructions to connect to your cloud storage locations
seo-description: Instructions to connect to your cloud storage locations
exl-id: 58003c1e-2f70-4e28-8a38-3be00da7cc3c
---
# Create a cloud storage destination

## Overview {#overview}

This page explains how you can connect to cloud storage locations in Adobe Experience Platform.

In **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, select your preferred cloud storage destination, then select **[!UICONTROL Configure]**.

![Connect to cloud storage destination](../../assets/catalog/cloud-storage/workflow/connect.png)

>[!NOTE]
>
>If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](../../ui/destinations-workspace.md#catalog) section of the destination workspace documentation.   

## Account step {#account}

In the **[!UICONTROL Account]** step, if you had previously set up a connection to your cloud storage destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to your cloud storage destination. Fill in your account authentication credentials and select **[!UICONTROL Connect to destination]**. Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64] encoded string.

See [Amazon S3](./amazon-s3.md) destination, [[!DNL Amazon Kinesis]](./amazon-kinesis.md) destination, [[!DNL Azure Event Hubs]](./azure-event-hubs.md) destination, and [SFTP](./sftp.md) destination for specifics around credentials input in the **Authentication** step.

>[!NOTE]
>
>Platform supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your cloud storage location. This ensures that you don't complete the workflow with incorrect credentials.

![Connect to cloud storage destination - authentication step](../../assets/catalog/cloud-storage/workflow/destination-account.png)

## Authentication step {#authentication}

In the **[!UICONTROL Authentication]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow.

At this step, you can also select any **[!UICONTROL Marketing action]** that should apply to this destination. Marketing actions indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing actions or you can create your own marketing action. For more information about marketing actions, see the [Data usage policies overview](../../../data-governance/policies/overview.md).

For Amazon S3 destinations, insert the **[!UICONTROL Bucket name]** and the **[!UICONTROL Folder path]** in your cloud storage destination where the files will be delivered. Select **[!UICONTROL Create Destination]** after you filled in the fields above.

![Connect to Amazon S3 cloud storage destination - authentication step](../../assets/catalog/cloud-storage/workflow/amazon-s3-setup.png)

For SFTP destinations, insert the **[!UICONTROL Folder path]** where the files will be delivered. Select **[!UICONTROL Create Destination]** after you filled in the fields above.

![Connect to SFTP cloud storage destination - authentication step](../../assets/catalog/cloud-storage/workflow/sftp-setup.png)

For [!DNL Amazon Kinesis] destinations, provide the name of your existing data stream in your [!DNL Amazon Kinesis] account. Platform will export data to this stream. Select **[!UICONTROL Create Destination]** after you filled in the fields above.

![Connect to Kinesis cloud storage destination - authentication step](../../assets/catalog/cloud-storage/workflow/kinesis-setup.png)

For [!DNL Azure Event Hubs] destinations, provide the name of your existing data stream in your [!DNL Amazon Event Hubs] account. Platform will export data to this stream. Select **[!UICONTROL Create Destination]** after you filled in the fields above.

![Connect to Event Hubs cloud storage destination - authentication step](../../assets/catalog/cloud-storage/workflow/event-hubs-setup.png)   

Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments](#activate-segments), for the rest of the workflow to export data.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](../../ui/activate-destinations.md) for information about the segment activation workflow.
