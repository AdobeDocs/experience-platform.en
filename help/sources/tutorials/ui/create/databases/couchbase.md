---
keywords: Experience Platform;home;popular topics;Couchbase;couchbase
solution: Experience Platform
title: Create a Couchbase  Source Connection in the UI
type: Tutorial
description: Learn how to create an Couchbase source connection using the Adobe Experience Platform UI.
exl-id: 4270a48a-843c-4f1e-b280-35b620581d68
---
# Create a [!DNL Couchbase] source connection in the UI

>[!NOTE]
>
> The [!DNL Couchbase] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Source connectors in [!DNL Adobe Experience Platform] provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an [!DNL Couchbase] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of [!DNL Platform]:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Couchbase] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to authenticate your [!DNL Couchbase] source connector, you must provide values for the following connection property:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string used to connect to your [!DNL Couchbase] instance. The connection string pattern for [!DNL Couchbase] is `Server={SERVER}; Port={PORT};AuthMech=1;CredString=[{\"user\": \"{USER}\", \"pass\":\"{PASS}\"}];`. For more information on acquiring a connection string, refer to the documentation on [[!DNL Couchbase] connection](https://docs.Couchbase.com/c-sdk/2.10/client-settings.html#configuring-overview). |

## Connect your [!DNL Couchbase] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Couchbase] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Couchbase]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Couchbase] connector.

![catalog](../../../../images/tutorials/create/couchbase/catalog.png)

The **[!UICONTROL Connect to Couchbase]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Couchbase] credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/couchbase/new.png)

### Existing account

To connect an existing account, select the [!DNL Couchbase] account you want to connect with, then select **[!UICONTROL Next]** in the top-right corner to proceed.

![existing](../../../../images/tutorials/create/couchbase/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Couchbase] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
