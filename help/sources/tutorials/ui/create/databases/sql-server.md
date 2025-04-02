---
title: Create a Microsoft SQL Server Source Connection in the UI
description: Learn how to create a Microsoft SQL Server source connection using the Adobe Experience Platform UI.
exl-id: aba4e317-1c59-4999-a525-dba15f8d4df9
---
# Create a [!DNL Microsoft SQL Server] source connection in the UI

Read this tutorial to learn how to connect your [!DNL Microsoft SQL Server] account to Adobe Experience Platform using the user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL SQL Server] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to connect to [!DNL SQL Server] on [!DNL Experience Platform], you must provide the following connection property:

| Credential | Description |
| ---------- | ----------- |
| Connection string | The connection string associated with your [!DNL Microsoft SQL Server] account. Your connection string pattern depends whether you are using server name or instance name for your data source:<ul><li>Connection string using server name: `Data Source={SERVER_NAME};Initial Catalog={DATABASE};Integrated Security=False;User ID={USER_ID};Password={PASSWORD};`</li><li>Connection string using instance name:`Data Source={INSTANCE_NAME};Initial Catalog={DATABASE};Integrated Security=False;User ID={USER_ID};Password={PASSWORD};` | `Data Source=mssqlserver.database.windows.net;Initial Catalog=mssqlserver_e2e_db;Integrated Security=False;User ID=mssqluser;Password=mssqlpassword`  |

For more information about getting started, refer to [this [!DNL SQL Server] document](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/authentication-in-sql-server).

## Connect your [!DNL SQL Server] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Databases* category, select **[!DNL Microsoft SQL Server]**, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![The sources catalog with the Microsoft SQL Server source selected.](../../../../images/tutorials/create/microsoft-sql-server/catalog.png)

The **[!UICONTROL Connect to Microsoft SQL Server]** page appears. On this page, you can either use new credentials or existing credentials.

>[!BEGINTABS]

>[!TAB Create a new account]

To create a new account, select **[!UICONTROL New account]** and provide a name, an optional description, and your credentials. 

When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![The new account interface with the source connection details entered and highlighted.](../../../../images/tutorials/create/microsoft-sql-server/new.png)

>[!TAB Use an existing account]

To use an existing account, select **[!UICONTROL Existing account]** and then select the account that you want to use from the existing account catalog.

Select **[!UICONTROL Next]** to proceed.

![The existing account interface that displays a list of the existing accounts.](../../../../images/tutorials/create/microsoft-sql-server/existing.png)

>[!ENDTABS]

## Next steps

By following this tutorial, you have established a connection to your [!DNL SQL Server] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Experience Platform]](../../dataflow/databases.md).
