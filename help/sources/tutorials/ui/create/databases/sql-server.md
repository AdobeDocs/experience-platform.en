---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a Microsoft SQL Server source connector in the UI
topic: overview
---

# Create a [!DNL Microsoft SQL Server] source connector in the UI

>[!NOTE]
> The [!DNL Microsoft SQL Server] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Microsoft SQL Server] (hereinafter referred to as "[!DNL SQL Server]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model] (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a [!DNL SQL Server] base connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to connect to [!DNL SQL Server] on [!DNL Platform], you must provide the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your [!DNL SQL Server] account. The [!DNL SQL Server] connection string pattern is: `Data Source={SERVER_NAME}\\<{INSTANCE_NAME} if using named instance>;Initial Catalog={DATABASE};Integrated Security=False;User ID={USERNAME};Password={PASSWORD};`. |

Please refer to [this document](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/authentication-in-sql-server) for more information on getting started with [!DNL SQL Server].

## Connect your [!DNL SQL Server] account

Once you have gathered your required credentials, you can follow the steps below to create a new inbound base connection to link your [!DNL SQL Server] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create inbound base connections with, and each source shows the number of existing base connections associated to them.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Microsoft SQL Server]** to expose an information bar on the right-hand side of your screen. The information bar provides a brief description for the selected source as well as options to connect with the source or view its documentation. To create a new inbound base connection, select **[!UICONTROL Add data]**. 

![](../../../../images/tutorials/create/microsoft-sql-server/catalog.png)

The **[!UICONTROL Connect to Microsoft SQL Server]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide the base connection with a name, an optional description, and your [!DNL SQL Server] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new base connection to establish.

![](../../../../images/tutorials/create/microsoft-sql-server/new.png)

### Existing account

To connect an existing account, select the [!DNL SQL Server] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/microsoft-sql-server/existing.png)

## Next steps

By following this tutorial, you have established a base connection to your [!DNL SQL Server] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).