---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a ServiceNow source connector in the UI
topic: overview
---

# Create a ServiceNow source connector in the UI

>[!NOTE]
>The ServiceNow connector is in beta. The features and documentation are subject to change.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a ServiceNow source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a ServiceNow connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/customer-success.md)

### Gather required credentials

In order to access your ServiceNow account on Platform, you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `endpoint` | The endpoint of the ServiceNow server. |
| `username` | The username used to connect to the ServiceNow server for authentication. |
| `password` | The password to connect to the ServiceNow server for authentication. |

For more information about getting started, refer to [this ServiceNow document](https://developer.servicenow.com/app.do#!/rest_api_doc?v=newyork&id=r_TableAPI-GET).

## Connect your ServiceNow account

Once you have gathered your required credentials, you can follow the steps below to create a new ServiceNow account to connect to Platform.

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the *Sources* workspace. The *Catalog* screen displays a variety of sources for which you can create an account, and each source shows the number of existing accounts and dataset flows associated to them.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Customer Success* category, select **ServiceNow** to expose an information bar on the right-hand side of your screen. The information bar provides a brief description for the selected source as well as options to connect with the source or view its documentation. To create a new account, select **Connect source**.

![](../../../../images/tutorials/create/servicenow/catalog.png)

The *Connect to ServiceNow* page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **New account**. On the input form that appears, provide the  connection with a name, an optional description, and your ServiceNow credentials. When finished, select **Connect** and then allow some time for the new account to establish.

![](../../../../images/tutorials/create/servicenow/new.png)

### Existing account

To connect an existing account, select the ServiceNow account you want to connect with, then select **Next** to proceed.

![](../../../../images/tutorials/create/servicenow/existing.png)

## Next steps

By following this tutorial, you have established a connection to your ServiceNow account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/customer-success.md).
