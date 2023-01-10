---
keywords: Experience Platform;home;popular topics;Phoenix;phoenix
solution: Experience Platform
title: Create a Phoenix  Source Connection in the UI
type: Tutorial
description: Learn how to create a Phoenix source connection using the Adobe Experience Platform UI.
exl-id: 2ed469bc-1c72-4f04-a5f0-6a0bb519a6c2
---
# Create a [!DNL Phoenix] source connection in the UI

>[!NOTE]
>
> The [!DNL Phoenix] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Phoenix] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Phoenix] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md)

### Gather required credentials

In order to access your [!DNL Phoenix] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `host` | The IP address or hostname of the [!DNL Phoenix] server. |
| `port` | The TCP port that the [!DNL Phoenix] server uses to listen for client connections. If you connect to [!DNL Azure HDInsights], specify the port as 443. |
| `httpPath` | The partial URL corresponding to the [!DNL Phoenix] server. Specify /hbasephoenix0 if you are using the [!DNL Azure HDInsights] cluster. |
| `username` | The username that you use to access the [!DNL Phoenix] server. |
| `password` | The password that corresponds to the user. |
| `enableSsl` | A toggle that specifies whether he connections to the server are encrypted using SSL. |

For more information about getting started, refer to [this [!DNL Phoenix] document](https://python-phoenixdb.readthedocs.io/en/latest/api.html).

## Connect your [!DNL Phoenix] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Phoenix] account to connect to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Phoenix]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Phoenix] account.

![catalog](../../../../images/tutorials/create/phoenix/catalog.png)

The **[!UICONTROL Connect to Phoenix]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Phoenix] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/phoenix/new.png)

### Existing account

To connect an existing account, select the [!DNL Phoenix] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/phoenix/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Phoenix] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
