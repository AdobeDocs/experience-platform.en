---
keywords: Experience Platform;home;popular topics;Azure File Storage;Azure File Storage connector
solution: Experience Platform
title: Create an Azure File Storage  Source Connection in the UI
type: Tutorial
description: Learn how to create an Azure File Storage source connection using the Adobe Experience Platform UI.
exl-id: 25d483b6-3975-4e80-9dbe-28b7b91cb063
---
# Create an [!DNL Azure File Storage] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for authenticating an [!DNL Azure File Storage] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    -   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Azure File Storage] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/batch/cloud-storage.md).

### Gather required credentials

In order to authenticate your [!DNL Azure File Storage] source connector, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The endpoint of the [!DNL Azure File Storage] instance you are accessing. |
| `userId` | The user with sufficient access to the [!DNL Azure File Storage] endpoint. |
| `password` | The [!DNL Azure File Storage] access key. |

For more information about getting started refer to [this [!DNL Azure File Storage] document](https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows).

## Connect your [!DNL Azure File Storage] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Azure File Storage] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Azure File Storage]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Azure File Storage] connector.

![catalog](../../../../images/tutorials/create/azure-file-storage/catalog.png)

The **[!UICONTROL Connect to Azure File Storage]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Azure File Storage] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/azure-file-storage/new.png)

### Existing account

To connect an existing account, select the [!DNL Azure File Storage] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/azure-file-storage/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Azure File Storage] account. You can now continue on to the next tutorial and [configure a dataflow to bring data from your cloud storage into [!DNL Platform]](../../dataflow/batch/cloud-storage.md).
