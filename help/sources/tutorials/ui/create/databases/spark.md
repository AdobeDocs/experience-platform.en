---
keywords: Experience Platform;home;popular topics;Azure HDInsights;Apache Spark
solution: Experience Platform
title: Create an Apache Spark on Azure HDInsights  Source Connection in the UI
type: Tutorial
description: Learn how to create an Apache Spark on Azure HDInsights source connection using the Adobe Experience Platform UI.
exl-id: 30d0b740-cec4-486f-9c9b-1579fd04f28b
---
# Create an [!DNL Apache Spark] on [!DNL Azure HDInsights] source connection in the UI

>[!NOTE]
>
> The [!DNL Apache Spark] on [!DNL Azure HDInsights] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating an [!DNL Apache Spark] on [!DNL Azure HDInsights] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [Real-Time Customer Profile](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Spark] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md)

### Gather required credentials

In order to access your [!DNL Spark] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `host` | The IP address or hostname of the [!DNL Spark] server. |
| `username` | The username that you use to access the [!DNL Spark] server. |
| `password` | The password that corresponds to the user. |

For more information about getting started, refer to [this Spark document](https://docs.microsoft.com/en-us/azure/hdinsight/spark/apache-spark-overview).

## Connect your [!DNL Spark] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Spark] account to connect to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Databases]** category, select **[!UICONTROL Spark]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Spark] connector.

![catalog](../../../../images/tutorials/create/spark/catalog.png)

The **[!UICONTROL Connect to Spark]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Spark] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/spark/new.png)

### Existing account

To connect an existing account, select the [!DNL Spark] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/spark/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Spark] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
