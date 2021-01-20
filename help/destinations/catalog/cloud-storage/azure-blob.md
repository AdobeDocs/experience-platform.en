---
keywords: Azure Blob;Blob destination;s3;azure blob destination
title: Azure Blob destination
seo-title: Azure Blob destination
description: Create a live outbound connection to your Azure Blob storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform.
seo-description: Create a live outbound connection to your Azure Blob storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform.
---

# Create an [!DNL Azure Blob] destination in the UI

[!DNL Azure Blob] (hereinafter referred to as "[!DNL Blob]") is Microsoft's object storage solution for the cloud. This tutorial provides steps for creating a [!DNL Blob] destination using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [[!DNL Experience Data Model (XDM)] System](../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    -   [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [[!DNL Real-time Customer Profile]](../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid Blob destination, you may skip the remainder of this document and proceed to the tutorial on [activating segments to your destination](../../ui/activate-destinations.md).

## Connect your Blob account {#connect-destination}

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Destinations]** from the left navigation bar to access the **[!UICONTROL Destinations]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Cloud Storage]** category, select **[!UICONTROL Azure Blob Storage]**, followed by **[!UICONTROL Activate]**.

![Catalog](../../assets/catalog/cloud-storage/blob/catalog.png)

The **[!UICONTROL Connect to Azure Blob Storage]** page appears. On this page, you can either use new credentials or existing credentials.

### New account {#new-account}

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide the connection string. The connection string required to access data in your Blob storage. The [!DNL Blob] connection string pattern is: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. 

Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Note that this public key **must** be written as a Base64 encoded string. 

![New account](../../assets/catalog/cloud-storage/blob/new.png)

### Existing account

To connect an existing account, select the Blob account you want to connect with, then select **Next** to proceed.

![Existing account](../../assets/catalog/cloud-storage/blob/existing.png)

## Authentication {#authentication}

The **Authentication** page appears. On the input form that appears, provide a name, an optional description, the folder path, and the container for your files. When finished, select **[!UICONTROL Create destination]**.

![Authentication](../../assets/catalog/cloud-storage/blob/authentication.png)

## Next steps {#activate-segments}

By following this tutorial, you have established a connection to your [!DNL Blob] account. You can now continue on to the next tutorial and [activate segments to your destination](../../ui/activate-destinations.md).
