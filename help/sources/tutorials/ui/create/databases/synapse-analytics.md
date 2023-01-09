---
keywords: Experience Platform;home;popular topics;Azure Synapse Analytics;Synapse;synapse;azure synapse analytics
solution: Experience Platform
title: Create a Azure Synapse Analytics  Source Connection in the UI
type: Tutorial
description: Learn how to create a Azure Synapse Analytics (hereinafter referred to as "Synapse") source connection using the Adobe Experience Platform UI.
exl-id: 1f1ce317-eaaf-4ad2-a5fb-236983220bd7
---
# Create a [!DNL Azure Synapse Analytics] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Azure Synapse Analytics] (hereinafter referred to as "[!DNL Synapse]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Synapse] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your [!DNL Synapse] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your [!DNL Synapse] authentication. The [!DNL Synapse] connection string pattern is `Server=tcp:{SERVER_NAME}.database.windows.net,1433;Database={DATABASE};User ID={USERNAME}@{SERVER_NAME};Password={PASSWORD};Trusted_Connection=False;Encrypt=True;Connection Timeout=30`. |

For more information about this value, refer to [this [!DNL Synapse] document](https://docs.microsoft.com/en-us/azure/data-factory/connector-azure-sql-data-warehouse).

## Connect your [!DNL Synapse] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Synapse] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Azure Synapse Analytics]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Synapse] connector. 

![](../../../../images/tutorials/create/azure-synapse-analytics/catalog.png)

The **[!UICONTROL Connect to Azure Synapse Analytics]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Synapse] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/azure-synapse-analytics/new.png)

### Existing account

To connect an existing account, select the [!DNL Synapse] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/azure-synapse-analytics/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Synapse] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
