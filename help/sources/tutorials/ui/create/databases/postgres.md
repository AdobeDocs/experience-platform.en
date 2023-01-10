---
keywords: Experience Platform;home;popular topics;[!DNL PostgreSQL];[!DNL PostgreSQL];PostgreSQL
solution: Experience Platform
title: Create a PostgreSQL  Source Connection in the UI
type: Tutorial
description: Learn how to create a PostgreSQL source connection using the Adobe Experience Platform UI.
exl-id: e556d867-a1eb-4900-b8a9-189666a4f3f1
---
# Create a [!DNL PostgreSQL] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL PostgreSQL] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL PostgreSQL] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your [!DNL PostgreSQL] account on [!DNL Platform], you must provide the following value:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string associated with your [!DNL PostgreSQL] account. The [!DNL PostgreSQL] connection string pattern is: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD}`. |

For more information about getting started, refer to this [[!DNL PostgreSQL] document](https://www.postgresql.org/docs/9.2/app-psql.html).

#### Enable SSL encryption for your connection string

You can enable SSL encryption for your [!DNL PostgreSQL] connection string by appending your connection string with the following properties:

| Property | Description | Example |
| --- | --- | --- |
| `EncryptionMethod` | Allows you to enable SSL encryption on your [!DNL PostgreSQL] data. | <uL><li>`EncryptionMethod=0`(Disabled)</li><li>`EncryptionMethod=1`(Enabled)</li><li>`EncryptionMethod=6`(RequestSSL)</li></ul> |
| `ValidateServerCertificate` | Validates certificate sent by your [!DNL PostgreSQL] database when `EncryptionMethod` is applied. | <uL><li>`ValidationServerCertificate=0`(Disabled)</li><li>`ValidationServerCertificate=1`(Enabled)</li></ul> |

The following is an example of a [!DNL PostgreSQL] connection string appended with SSL encryption: `Server={SERVER};Database={DATABASE};Port={PORT};UID={USERNAME};Password={PASSWORD};EncryptionMethod=1;ValidateServerCertificate=1`. 

## Connect your [!DNL PostgreSQL] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL PostgreSQL] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL PostgreSQL DB]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL PostgreSQL] connector.

![](../../../../images/tutorials/create/postgresql/catalog.png)

The **[!UICONTROL Connect to [!DNL PostgreSQL]]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL PostgreSQL] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/postgresql/new.png)

### Existing account

To connect an existing account, select the [!DNL PostgreSQL] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/postgresql/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL PostgreSQL] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
