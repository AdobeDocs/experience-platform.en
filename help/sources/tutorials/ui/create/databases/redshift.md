---
keywords: Experience Platform;home;popular topics;Amazon Redshift;amazon redshift;Redshift;redshift
solution: Experience Platform
title: Create an Amazon Redshift  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Amazon Redshift source connection using the Adobe Experience Platform UI.
exl-id: 4faf3200-673b-4a20-8f94-d049e800444b
---
# Create an [!DNL Amazon Redshift] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Amazon Redshift] (hereinafter referred to as "[!DNL Redshift]") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    -   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Redshift] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your [!DNL Redshift] account on [!DNL Platform], you must provide the following values:

| **Credential** | **Description** |
| -------------- | --------------- |
| `server` | The server associated with your [!DNL Redshift] account. |
| `username` | The username associated with your [!DNL Redshift] account. |
| `password` | The password associated with your [!DNL Redshift] account. |
| `database` | The [!DNL Redshift] database you are accessing. |

For more information about getting started, refer to [this [!DNL Redshift] document](https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html).

## Connect your [!DNL Redshift] account

>[!NOTE]
>
>The default encoding standard for [!DNL Redshift] is Unicode. This cannot be changed.

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Redshift] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Amazon Redshift]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Redshift] connector.

![](../../../../images/tutorials/create/redshift/catalog.png)

The **[!UICONTROL Connect to Amazon Redshift]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Redshift] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/redshift/new.png)

### Existing account

To connect an existing account, select the [!DNL Redshift] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/redshift/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Redshift] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
