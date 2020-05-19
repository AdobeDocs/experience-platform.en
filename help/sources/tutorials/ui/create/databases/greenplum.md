---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a GreenPlum source connector in the UI
topic: overview
---

# Create a GreenPlum source connector in the UI

> [!NOTE]
> The GreenPlum connector is in beta. The features and documentation are subject to change.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an GreenPlum source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid GreenPlum connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

The following sections provide additional information that you will need to know in order to successfully connect to GreenPlum using the Flow Service API.

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string used to connect to your GreenPlum instance. The connection string pattern for GreenPlum is `HOST=<server>;PORT=<port>;DB=<database>;UID=<user name>;PWD=<password>` |

For more information about getting started refer to [this GreenPlum document](https://gpdb.docs.pivotal.io/580/security-guide/topics/Authenticate.html#topic_fzv_wb2_jr__config_ssl_client_conn).

## Connect your GreenPlum account

Once you have gathered your required credentials, you can follow the steps below to create a new GreenPlum account to connect to Platform.

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the *[!UICONTROL Sources]* workspace. The *[!UICONTROL Catalog]* screen displays a variety of sources for which you can create an inbound account with, and each source shows the number of existing accounts and dataset flows associated with them.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *[!UICONTROL Databases]* category, select **[!UICONTROL GreenPlum]** click **on the + icon (+)** to create a new GreenPlum connector.

![catalog](../../../../images/tutorials/create/greenplum/catalog.png)

The *[!UICONTROL Connect to GreenPlum]* page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide the connection with a name, an optional description, and your GreenPlum credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new account to establish.

![connect](../../../../images/tutorials/create/greenplum/new.png)

### Existing account

To connect an existing account, select the GreenPlum account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/greenplum/existing.png)

## Next steps

By following this tutorial, you have established a connection to your GreenPlum account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).