---
keywords: Azure Blob;Blob destination;s3;azure blob destination
title: Azure Blob connection
description: Create a live outbound connection to your Azure Blob storage to periodically export tab-delimited or CSV data files from Adobe Experience Platform.
exl-id: 8099849b-e3d2-48a5-902a-ca5a5ec88207
---
# [!DNL Azure Blob] connection

## Overview {#overview}

[!DNL Azure Blob] (hereinafter referred to as [!DNL Blob]) is Microsoft's object storage solution for the cloud. This tutorial provides steps for creating a [!DNL Blob] destination using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-time Customer Profile]](../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Blob] destination, you may skip the remainder of this document and proceed to the tutorial on [activating segments to your destination](../../ui/activate-batch-profile-destinations.md).

## Supported file formats {#file-formats}

[!DNL Experience Platform] supports the following file format to be exported to [!DNL Blob]:

* Delimiter-separated values (DSV): Support for DSV formatted data files is currently limited to comma-separated values. Support for general DSV files will be provided in the future.

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **[!UICONTROL Connection string]**: the connection string is required to access data in your Blob storage. The [!DNL Blob] connection string pattern starts with: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. 
    * For more information about configuring your [!DNL Blob] connection string, see [Configure a connection string for an Azure storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string#configure-a-connection-string-for-an-azure-storage-account) in the Microsoft documentation.

* Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64] encoded string.
* **[!UICONTROL Name]**: enter a name that will help you identify this destination.
* **[!UICONTROL Description]**: enter a description of this destination.
* **[!UICONTROL Folder path]**: enter the path to the destination folder that will host the exported files.
* **[!UICONTROL Container]**: enter the name of the [!DNL Azure Blob Storage] container to be used by this destination.

Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64] encoded string.

## Activate segments to this destination {#activate}

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.
