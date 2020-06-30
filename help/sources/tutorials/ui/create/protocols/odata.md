---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a Generic OData source connector in the UI
topic: overview
---

# Create a [!DNL Generic OData] source connector in the UI

> [!NOTE]
> The [!DNL Generic OData] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a Generic Open Data Protocol (hereinafter referred to as "OData") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid OData connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a protocols dataset flow](../../dataflow/protocols.md)

### Gather required credentials

In order to access your [!DNL OData] account in [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `url` | The root URL of the [!DNL OData] service. |

For more information about getting started refer to [this OData document](https://www.odata.org/getting-started/basic-tutorial/).

## Connect your [!DNL OData] account

Once you have gathered your required credentials, you can follow the steps below to create a new [!DNL OData] account to connect to [!DNL Platform].

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **[!UICONTROL Sources]** from the left navigation bar to access the *[!UICONTROL Sources]* workspace. The *[!UICONTROL Catalog]* screen displays a variety of sources for which you can create inbound account. Each source shows the number of existing accounts and dataset flows associated to them.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *[!UICONTROL Protocols]* category, select **[!UICONTROL Generic OData]** to expose an information bar on the right-hand side of your screen. The information bar provides a brief description for the selected source as well as options to connect with the source or view its documentation. To create a new inbound connection, select **[!UICONTROL Connect source]**.

![catalog](../../../../images/tutorials/create/odata/catalog.png)

The *[!UICONTROL Connect to Generic OData]* page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide the connection with a name, an optional description, and your [!DNL OData] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new account to establish.

![connect](../../../../images/tutorials/create/odata/connect.png)

### Existing account

To connect an existing account, select the [!DNL OData] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/odata/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL OData] account. You can now continue on to the next tutorial and [configure a dataset flow to bring protocols data into Platform](../../dataflow/protocols.md).