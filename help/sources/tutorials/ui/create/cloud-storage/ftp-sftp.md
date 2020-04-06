---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create an FTP or SFTP source connector in the UI
topic: overview
---

# Create an FTP or SFTP source connector in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a FTP or SFTP source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid FTP or SFTP connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/cloud-storage.md).

### Supported file formats

Experience Platform supports the following file formats to be ingested from external sources:

*   Delimiter-separated values (DSV): Support for DSV formatted data files are currently limited to Comma-separated values (CSV). The value of field headers within DSV formatted files must only consist of alphanumeric characters and underscores. Support for general DSV is to be provided in the future.
*   JavaScript Object Notation (JSON): JSON formatted data files must be XDM compliant.
*   Apache Parquet: Parquet formatted data files must be XDM compliant.

### Gather required credentials

In order to access your FTP or SFTP server on Platform, you must provide the server's **host name**, a **user name**, and a **password**. 

## Connect to your server

With your server's credentials ready, you can follow the steps below to create a new inbound base connection to link your FTP or SFTP server to Platform.

Log in to <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a> and then select **Sources** from the left navigation bar to access the sources workspace. The *Catalog* screen displays a variety of sources for which you can create inbound base connections with, and each source shows the number of existing base connections associated to them.

Under the *Cloud Storage* category, select either **FTP** or **SFTP** to expose an information bar on the right-side of your screen. The information bar provides a brief description for the selected source as well as options to view its documentation or to connect with the source. To create a new inbound base connection, click **Connect source**. 

![](../../../../images/sftp/sftp_sources_catalog.png)

On the input form, provide the base connection with a name, an optional description, and your FTP or SFTP credentials. Lastly, click **Connect** and then allow some time for the new base connection to establish.

![](../../../../images/sftp/sftp_credentials.png)

Once a base connection with your FTP or SFTP server is established, you can continue on to the next section and configure a dataflow to bring data into Platform.

## Next steps

By following this tutorial, you have established a connection to your FTP or SFTP server. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/cloud-storage.md).
