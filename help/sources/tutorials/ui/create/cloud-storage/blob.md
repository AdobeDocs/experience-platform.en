---
keywords: Experience Platform;home;popular topics;Azure Blob;azure blob;Azure blob connector
solution: Experience Platform
title: Create an Azure Blob  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create an Azure Blob source connector using the Platform user interface.
exl-id: 0e54569b-7305-4065-981e-951623717648
---
# Create an [!DNL Azure Blob] source connection in the UI

This tutorial provides steps for creating an [!DNL Azure Blob] (hereinafter referred to as "[!DNL Blob]") using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

- [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  - [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  - [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
- [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Blob] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/batch/cloud-storage.md).

### Supported file formats

[!DNL Experience Platform] supports the following file formats to be ingested from external storages:

- Delimiter-separated values (DSV): Support for DSV formatted data files is currently limited to comma-separated values. The value of field headers within DSV formatted files must only consist of alphanumeric characters and underscores. Support for general DSV files will be provided in the future.
- JavaScript Object Notation (JSON): JSON formatted data files must be XDM compliant.
- Apache Parquet: Parquet formatted data files must be XDM compliant.

### Gather required credentials

In order to access your [!DNL Blob] storage on Platform, you must provide a valid value for the following credential:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | A string that contains the authorization information necessary to authenticate [!DNL Blob] to Experience Platform. The [!DNL Blob] connection string pattern is: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. For more information about connection strings, see this [!DNL Blob] document on [configuring connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string). |
| `sasUri` | The shared access signature URI that you can use as an alternative authentication type to connect your [!DNL Blob] account. The [!DNL Blob] SAS URI pattern is: `https://{ACCOUNT_NAME}.blob.core.windows.net/?sv=<storage version>&st={START_TIME}&se={EXPIRE_TIME}&sr={RESOURCE}&sp={PERMISSIONS}>&sip=<{IP_RANGE}>&spr={PROTOCOL}&sig={SIGNATURE}>` For more information, see this [!DNL Blob] document on [shared access signature URIs](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage#shared-access-signature-authentication). |

## Connect your [!DNL Blob] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Blob] account to Platform.

In the [Platform UI](https://platform.adobe.com), select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Cloud storage] category, select **[!UICONTROL Azure Blob Storage]**, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/blob/catalog.png)

The **[!UICONTROL Connect to Azure Blob Storage]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL Blob] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/blob/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name and an option description for your new [!DNL Blob] account.

**Authenticate using a connection string**

The [!DNL Blob] connector provides you with different authentication types for access. Under [!UICONTROL Account authentication] select **[!UICONTROL ConnectionString]** to use connection string-based credentials.

![connection string](../../../../images/tutorials/create/blob/connectionstring.png)

**Authenticate using a shared access signature URI**

A shared access signature (SAS) URI allows for secure delegated authorization to your [!DNL Blob] account. You can use SAS to create authentication credentials with varying degrees of access, as a SAS-based authentication allows you to set permissions, start and expiry dates, as well as provisions to specific resources.

Select **[!UICONTROL SasURIAuthentication]** and then provide your [!DNL Blob] SAS URI. Select **[!UICONTROL Connect to source]** to proceed.

![sas-uri](../../../../images/tutorials/create/blob/sas-uri.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Blob] account. You can now continue on to the next tutorial and [configure a dataflow to bring data from your cloud storage into Platform](../../dataflow/batch/cloud-storage.md).
