---
keywords: Experience Platform;home;popular topics;Azure Data Explorer;azure data explorer;data explorer;Data Explorer
solution: Experience Platform
title: Create an Azure Data Explorer  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create an Azure Data Explorer source connection using the Adobe Experience Platform UI.
exl-id: 561bf948-fc92-4401-8631-e2a408667507
---
# Create an [!DNL Azure Data Explorer] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an [!DNL Azure Data Explorer] (hereinafter referred to as "[!DNL Data Explorer]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Data Explorer] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your [!DNL Data Explorer] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `endpoint` | The endpoint of the [!DNL Data Explorer] server. |
| `database` | The name of the [!DNL Data Explorer] database. |
| `tenant` | The unique tenant ID used to connect to the [!DNL Data Explorer] database. |
| `servicePrincipalId` | The unique service principal ID used to connect to the [!DNL Data Explorer] database. |
| `servicePrincipalKey` | The unique service principal key used to connect to the [!DNL Data Explorer] database. |

For more information about getting started, refer to [this [!DNL Data Explorer] document](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/management/access-control/how-to-authenticate-with-aad).

## Connect your [!DNL Azure Data Explorer] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Data Explorer] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Azure Data Explorer]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new Data Explorer connector.

![catalog](../../../../images/tutorials/create/data-explorer/catalog.png)

The **[!UICONTROL Connect to Azure Data Explorer]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Data Explorer] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/data-explorer/new.png)

### Existing account

To connect an existing account, select the [!DNL Data Explorer] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/data-explorer/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Data Explorer] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
