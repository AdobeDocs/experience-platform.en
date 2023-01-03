---
keywords: Experience Platform;home;popular topics;Oracle DB;oracle db
solution: Experience Platform
title: Create an Oracle DB  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create an Oracle DB source connection using the Adobe Experience Platform UI.
exl-id: 4ca6ecc6-0382-4cee-acc5-1dec7eeb9443
---
# Create an [!DNL Oracle DB] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an [!DNL Oracle DB] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Oracle DB] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your [!DNL Oracle DB] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string used to connect to [!DNL Oracle DB]. The [!DNL Oracle DB] connection string pattern is: `Host={HOST};Port={PORT};Sid={SID};User Id={USERNAME};Password={PASSWORD}`. |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for [!DNL Oracle DB] is `d6b52d86-f0f8-475f-89d4-ce54c8527328`. |

For more information about getting started, refer to [this Oracle document](https://docs.oracle.com/database/121/ODPNT/featConnecting.htm#ODPNT199).

## Connect your [!DNL Oracle DB] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Oracle DB] account to connect to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Oracle DB]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Oracle DB] connector.

![catalog](../../../../images/tutorials/create/oracle/catalog.png)

The **[!UICONTROL Connect to Oracle DB]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Oracle DB] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/oracle/new.png)

### Existing account

To connect an existing account, select the [!DNL Oracle DB] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/oracle/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Oracle DB] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
