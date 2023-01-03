---
keywords: Experience Platform;home;popular topics;DB2;db2;IBM DB2;ibm db2
solution: Experience Platform
title: Create an IBM DB2  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create an IBM DB2 source connection using the Adobe Experience Platform UI.
exl-id: 69c99f94-9cb9-43ff-9315-ce166ab35a60
---
# Create an IBM DB2 source connection in the UI

>[!NOTE]
>
> The IBM DB2 connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an IBM DB2 (hereinafter referred to as "DB2") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid DB2 connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

The following sections provide additional information that you will need to know in order to successfully connect to DB2 using the [!DNL Flow Service] API.

| Credential | Description |
| ---------- | ----------- |
| `server` | The name of the DB2 server. You can specify the port number following the server name delimited by a colon. For example: server:port. |
| `database` | The name of the DB2 database. |
| `username` | The username used to connect to the DB2 database. |
| `password` | The password for the user account you specified for the username. |

For more information about getting started, refer to [this DB2 document](https://www.ibm.com/support/knowledgecenter/SSFMBX/com.ibm.swg.im.dashdb.doc/connecting/connect_credentials.html).

## Connect your IBM DB2 account

Once you have gathered your required credentials, you can follow the steps below to link your DB2 account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL IBM DB2]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new DB2 connector.

![catalog](../../../../images/tutorials/create/ibm-db2/catalog.png)

The **[!UICONTROL Connect to IBM DB2]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your DB2 credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/ibm-db2/new.png)

### Existing account

To connect an existing account, select the DB2 account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/ibm-db2/existing.png)

## Next steps

By following this tutorial, you have established a connection to your DB2 account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
