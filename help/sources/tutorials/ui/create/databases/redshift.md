---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an Amazon Redshift source connector in the UI
topic: overview
---

# Create an Amazon Redshift source connector in the UI

>The [!NOTE]
>The Amazon Redshift connector is in beta. The features and documentation are subject to change.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a Amazon Redshift (hereinafter referred to as "Redshift") source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    -   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a Redshift base connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your Redshift account on Platform, you must provide the following values:

| **Credential** | **Description** |
| -------------- | --------------- |
| `server` | The server associated with your Redshift account. |
| `username` | The username associated with your Redshift account. |
| `password` | The password associated with your Redshift account. |
| `database` | The Redshift database you are accessing. |

For more information about getting started, refer to [this Redshift document](https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html).

## Connect your Redshift account

Once you have gathered your required credentials, you can follow the steps below to create a new inbound base connection to link your Redshift account to Platform.

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the *Sources* workspace. The *Catalog* screen displays a variety of sources for which you can create inbound base connections with, and each source shows the number of existing base connections associated to them.

Under the *Databases* category, select **Amazon Redshift** to expose an information bar on the right-hand side of your screen. The information bar provides a brief description for the selected source as well as options to connect with the source or view its documentation. To create a new inbound base connection, select **Connect source**. 

![](../../../../images/tutorials/create/redshift/sources-catalog.png)

The *Connect to Amazon Redshift* page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **New account**. On the input form that appears, provide the base connection with a name, an optional description, and your Redshift credentials. When finished, select **Connect** and then allow some time for the new base connection to establish.

![](../../../../images/tutorials/create/redshift/new-credentials.png)

### Existing account

To connect an existing account, select the Redshift account you want to connect with, then select **Next** to proceed.

![](../../../../images/tutorials/create/redshift/existing-credentials.png)

## Next steps

By following this tutorial, you have established a base connection to your Redshift account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).