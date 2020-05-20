---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Azure Event Hubs source connector in the UI
topic: overview
---

# Create an Azure Event Hubs source connector in the UI

>[!NOTE]
> The Azure Event Hubs connector is in beta. The features and documentation are subject to change.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for authenticating an Azure Event Hubs (hereinafter referred to as "Event Hubs") source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    -   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have an Event Hubs account, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/streaming/cloud-storage.md).

### Gather required credentials

In order to authenticate your Event Hubs source connector, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `sasKey` | The generated shared access signature. |
| `namespace` | The namespace of the Event Hubs you are accessing. |

For more information about these values, refer to [this Event Hubs document](https://docs.microsoft.com/en-us/azure/event-hubs/authenticate-shared-access-signature).

## Connect your Event Hubs account

Once you have gathered your required credentials, you can follow the steps below to link your Event Hubs account to Platform.

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **Sources** from the left navigation bar to access the *Sources* workspace. The *Catalog* tab displays a variety of sources for which can be connected to Platform. Each source shows the number of existing accounts associated to them.

Under the *Cloud Storage* category, select **Azure Event Hubs** and click **on the + icon (+)** to create a new Event Hubs connector.

![](../../../../images/tutorials/create/eventhub/catalog.png)

The *Connect to Azure Event Hubs* dialog appears. On this page, you can either use new credentials or existing credentials. 

### New account

If you are using new credentials, select **New Account**. On the input form that appears, provide a name, an optional description, and your Event Hubs credentials. When finished, select **Connect** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/eventhub/new.png)

### Existing account

To connect an existing account, select the Event Hubs account you want to connect with, then select **Next** to proceed.

![](../../../../images/tutorials/create/eventhub/existing.png)

## Next steps

By following this tutorial, you have connected your Event Hubs account to Platform. You can now continue on to the next tutorial and [configure a dataflow to bring data from your cloud storage into Platform](../../dataflow/streaming/cloud-storage.md).