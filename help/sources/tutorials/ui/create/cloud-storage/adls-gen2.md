---
keywords: Experience Platform;home;popular topics;Azure Data Lake Storage Gen2;ADLS Gen2;adls gen2;adls connector
solution: Experience Platform
title: Create an Azure Data Lake Storage Gen2  Source Connection in the UI
type: Tutorial
description: Learn how to create an Azure Data Lake Storage Gen2 source connection using the Adobe Experience Platform UI.
exl-id: d81b7593-08a3-43f8-a8bc-f5547a6cd55a
---
# Create an [!DNL Azure Data Lake Storage Gen2] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for authenticating an [!DNL Azure Data Lake Storage Gen2] (hereinafter referred to as "[!DNL ADLS Gen2]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    -   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid ADLS Gen2 connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/batch/cloud-storage.md).

### Gather required credentials

In order to authenticate your [!DNL ADLS Gen2] source connector, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `url` | The endpoint for [!DNL ADLS Gen2]. |
| `servicePrincipalId` | The application's client ID. |
| `servicePrincipalKey` | The application's key. |
| `tenant` | The tenant information that contains your application. |

For more information about these values, refer to [this [!DNL ADLS Gen2] document](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-data-lake-storage).

## Connect your [!DNL ADLS Gen2] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL ADLS Gen2] account to connect to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Azure Data Lake Gen2]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new ADLS Gen2 connector.

![](../../../../images/tutorials/create/adls-gen2/catalog.png)

The **[!UICONTROL Connect to Azure Data Lake Gen2]** dialog appears. On this page, you can either use new credentials or existing credentials. 

### New account

If you are using new credentials, select **[!UICONTROL New Account]**. On the input form that appears, provide a name, an optional description, and your [!DNL ADLS Gen2] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/adls-gen2/connect.png)

### Existing account

To connect an existing account, select the [!DNL ADLS Gen2] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/adls-gen2/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL ADLS Gen2] account. You can now continue on to the next tutorial and [configure a dataflow to bring data from your cloud storage into [!DNL Platform]](../../dataflow/batch/cloud-storage.md).
