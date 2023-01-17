---
keywords: Experience Platform;home;popular topics;OData;odata;Generic Open Data Protocol
solution: Experience Platform
title: Create a Generic OData  Source Connection in the UI
type: Tutorial
description: Learn how to create a Generic Open Data Protocol source connection using the Adobe Experience Platform UI.
exl-id: aad6b6f7-622c-4ab6-bf6d-1221fe1132d1
---
# Create a [!DNL Generic OData] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Generic Open Data Protocol] (hereinafter referred to as "[!DNL OData]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL OData] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/protocols.md)

### Gather required credentials

In order to access your [!DNL OData] account in [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `url` | The root URL of the [!DNL OData] service. |

For more information about getting started refer to [this [!DNL OData] document](https://www.odata.org/getting-started/basic-tutorial/).

## Connect your [!DNL OData] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL OData] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Protocols]** category, select **[!UICONTROL Generic OData]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL OData] connector.

![catalog](../../../../images/tutorials/create/odata/catalog.png)

The **[!UICONTROL Connect to Generic OData]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide the connection with a name, an optional description, and your [!DNL OData] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/odata/connect.png)

### Existing account

To connect an existing account, select the [!DNL OData] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/odata/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL OData] account. You can now continue on to the next tutorial and [configure a dataflow to bring protocols data into [!DNL Platform]](../../dataflow/protocols.md).
