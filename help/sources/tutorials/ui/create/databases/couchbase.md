---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a Couchbase source connector in the UI
topic: overview
---

# Create a Couchbase source connector in the UI

> [!NOTE]
> The Couchbase connector is in beta. The features and documentation are subject to change.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an Couchbase source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid Couchbase connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

The following sections provide additional information that you will need to know in order to successfully connect Couchbase to Platform.

### Gather required credentials

In order to authenticate your Couchbase source connector, you must provide values for the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string used to connect to your Couchbase instance. The connection string pattern for Couchbase is `Server={SERVER}; Port={PORT};AuthMech=1;CredString=[{\"user\": \"{USER}\", \"pass\":\"{PASS}\"}];`. For more information on acquiring a connection string, refer to [this Couchbase document](https://docs.Couchbase.com/c-sdk/2.10/client-settings.html#configuring-overview). |

## Connect your Couchbase account

Once you have gathered your required credentials, you can follow the steps below to create a new Couchbase account to connect to Platform.

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the *[!UICONTROL Sources]* workspace. The *[!UICONTROL Catalog]* screen displays a variety of sources for which you can create an inbound account with, and each source shows the number of existing accounts and dataset flows associated with them.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *[!UICONTROL Databases]* category, select **[!UICONTROL Couchbase]** click **on the + icon (+)** to create a new Couchbase connector.

![catalog](../../../../images/tutorials/create/couchbase/catalog.png)

The *[!UICONTROL Connect to Couchbase]* page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide the connection with a name, an optional description, and your Couchbase credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new account to establish.

![connect](../../../../images/tutorials/create/couchbase/new.png)

### Existing account

To connect an existing account, select the Couchbase account you want to connect with, then select **[!UICONTROL Next]** in the top-right corner to proceed.

![existing](../../../../images/tutorials/create/couchbase/existing.png)

## Next steps

By following this tutorial, you have established a connection to your Couchbase account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).