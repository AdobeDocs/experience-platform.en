---
title: Cloud storage destinations workflow
seo-title: Cloud storage destinations workflow
description: Instructions to connect to your cloud storage locations
seo-description: Instructions to connect to your cloud storage locations
---

# Workflow to create cloud storage destinations

## Overview

This page explains how you can connect to cloud storage locations in Adobe Real-time Customer Data Platform.

1. In **[!UICONTROL Connections > Destinations]**, select your preferred cloud storage destination, then select **[!UICONTROL Connect destination]**.

    ![Connect to cloud storage destination](/help/rtcdp/destinations/assets/connect-cloud-destination.png)

2. In the **[!UICONTROL Authentication]** step, if you had previously set up a connection to your cloud storage destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to your cloud storage destination. Fill in your account authentication credentials and select **[!UICONTROL Connect to destination]**. <br> See [Amazon S3](/help/rtcdp/destinations/amazon-s3-destination.md) destination, [Amazon Kinesis](/help/rtcdp/destinations/amazon-kinesis-destination.md) destination, [Azure Event Hubs](/help/rtcdp/destinations/azure-event-hubs-destination.md) destination, and [SFTP](/help/rtcdp/destinations/sftp-destination.md) destination for specifics around credentials input in the **Authentication** step.

    >[!NOTE]
    >
    >Adobe Real-time CDP supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your cloud storage location. This ensures that you don't complete the workflow with incorrect credentials.

    ![Connect to cloud storage destination - authentication step](/help/rtcdp/destinations/assets/cloud-destinations-authentication-step.png)

3. In the **[!UICONTROL Setup]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow. <br>
   For Amazon S3 destinations, insert the **[!UICONTROL Bucket name]** and the **[!UICONTROL Folder path]** in your cloud storage destination where the files will be delivered. Select **[!UICONTROL Create Destination]** after you filled in the fields above.

    ![Connect to Amazon S3 cloud storage destination - authentication step](/help/rtcdp/destinations/assets/cloud-destinations-setup-step.png)

   For SFTP destinations, insert the **[!UICONTROL Folder path]** where the files will be delivered. 

    ![Connect to SFTP cloud storage destination - authentication step](/help/rtcdp/destinations/assets/sftp-destinations-setup-step.png)

4. Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments](#activate-segments), for the rest of the workflow to export data.

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.