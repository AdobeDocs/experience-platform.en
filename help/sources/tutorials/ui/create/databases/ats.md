---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Azure Table Storage source connector in the UI
topic: overview
---

# Create an Azure Table Storage source connector in the UI

>[!NOTE]
>The Azure Table Storage connector is in beta. The features and documentation are subject to change.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a Azure Table Storage (hereinafter referred to as "ATS") source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid ATS connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your ATS account on Platform, you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `connectionString` | A connection string to connect to your Azure Table Storage instance. The connection string to connect to ATS instance. The connection string pattern for ATS is `DefaultEndpointsProtocol=https;AccountName=<accountname>;AccountKey=<accountkey>`. |

For more information about getting started refer to [this Azure Table Storage document](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction).

## Connect your Azure Table Storage account

Once you have gathered your required credentials, you can follow the steps below to create a new ATS account to connect to Platform.

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the *Sources* workspace. The *Catalog* screen displays a variety of sources for which you can create inbound account, and each source shows the number of existing accounts and dataset flows associated to them.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Databases* category, select **Azure Table Storage** to expose an information bar on the right-hand side of your screen. The information bar provides a brief description for the selected source as well as options to connect with the source or view its documentation. To create a new inbound connection, select **Connect source**.

![catalog](../../../../images/tutorials/create/ats/catalog.png)

The *Connect to Azure Table Storage* page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **New account**. On the input form that appears, provide the connection with a name, an optional description, and your ATS credentials. When finished, select **Connect** and then allow some time for the new account to establish.

![connect](../../../../images/tutorials/create/ats/new.png)

### Existing account

To connect an existing account, select the ATS account you want to connect with, then select **Next** to proceed.

![existing](../../../../images/tutorials/create/ats/existing.png)

## Next steps

By following this tutorial, you have established a connection to your ATS account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).