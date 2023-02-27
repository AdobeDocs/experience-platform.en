---
keywords: Experience Platform;home;popular topics;FTP;ftp
solution: Experience Platform
title: Create an FTP  Source Connection in the UI
type: Tutorial
description: Learn how to create an FTP source connection using the Adobe Experience Platform UI.
exl-id: 8e505ead-4bae-43fe-830b-75620e8fba28
---
# Create an FTP source connection in the UI

>[!NOTE]
>
>The FTP connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

This tutorial provides steps for creating an FTP source connection using the Adobe Experience Platform UI.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid FTP connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/batch/cloud-storage.md).

### Gather required credentials

In order to connect to FTP, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your FTP server. |
| `username` | The username with access to your FTP server. |
| `password` | The password for your FTP server. |

## Connect to your FTP server

Once you have gathered your required credentials, you can follow the steps below to create a new FTP account to connect to Platform.

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources for which you can create an inbound account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the [!UICONTROL Cloud storage] category, select **[!UICONTROL FTP]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new FTP connection.

![catalog](../../../../images/tutorials/create/ftp/catalog.png)

The **[!UICONTROL Connect to FTP]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/ftp/new.png)

### Existing account

To connect an existing account, select the FTP account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/ftp/existing.png)

## Next steps

By following this tutorial, you have established a connection to your FTP account. You can now continue on to the next tutorial and [configure a dataflow to bring data from your cloud storage into Platform](../../dataflow/batch/cloud-storage.md).
