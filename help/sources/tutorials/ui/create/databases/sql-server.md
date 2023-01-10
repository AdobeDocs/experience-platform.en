---
keywords: Experience Platform;home;popular topics;Microsoft SQL Server;SQL Server;sql server
solution: Experience Platform
title: Create a Microsoft SQL Server  Source Connection in the UI
type: Tutorial
description: Learn how to create a Microsoft SQL Server source connection using the Adobe Experience Platform UI.
exl-id: aba4e317-1c59-4999-a525-dba15f8d4df9
---
# Create a [!DNL Microsoft SQL Server] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Microsoft SQL Server] (hereinafter referred to as "[!DNL SQL Server]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL SQL Server] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to connect to [!DNL SQL Server] on [!DNL Platform], you must provide the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your [!DNL SQL Server] account. The [!DNL SQL Server] connection string pattern is: `Data Source={SERVER_NAME}\\<{INSTANCE_NAME} if using named instance>;Initial Catalog={DATABASE};Integrated Security=False;User ID={USERNAME};Password={PASSWORD};`. |

For more information about getting started, refer to [this [!DNL SQL Server] document](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/authentication-in-sql-server).

## Connect your [!DNL SQL Server] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL SQL Server] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Microsoft SQL Server]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL SQL Server] connector. 

![](../../../../images/tutorials/create/microsoft-sql-server/catalog.png)

The **[!UICONTROL Connect to Microsoft SQL Server]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL SQL Server] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/microsoft-sql-server/new.png)

### Existing account

To connect an existing account, select the [!DNL SQL Server] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/microsoft-sql-server/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL SQL Server] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
