---
keywords: Experience Platform;home;popular topics;Greenplum;greenplum
solution: Experience Platform
title: Create a GreenPlum  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a GreenPlum source connection using the Adobe Experience Platform UI.
exl-id: e6c6a495-25ce-4497-b20e-91374c7bb548
---
# Create a [!DNL GreenPlum] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an [!DNL GreenPlum] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL GreenPlum] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL GreenPlum] using the [!DNL Flow Service] API.

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | The connection string used to connect to your [!DNL GreenPlum] instance. The connection string pattern for [!DNL GreenPlum] is `Server={SERVER};Port={PORT};Database={DATABASE};UID={USERNAME};PWD={PASSWORD}` |

For more information about getting started, refer to [this GreenPlum document](https://docs.greenplum.org/6-7/security-guide/topics/Authenticate.html).

## Connect your [!DNL GreenPlum] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL GreenPlum] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL GreenPlum]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL GreenPlum] connector.

![catalog](../../../../images/tutorials/create/greenplum/catalog.png)

The **[!UICONTROL Connect to GreenPlum]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL GreenPlum] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/greenplum/new.png)

### Existing account

To connect an existing account, select the [!DNL GreenPlum] account you want to connect with, then select **[!UICONTROL Next]** in the top-right corner to proceed.

![existing](../../../../images/tutorials/create/greenplum/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL GreenPlum] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
