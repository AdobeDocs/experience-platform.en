---
keywords: Experience Platform;home;popular topics;Snowflake
title: Create a Snowflake  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Snowflake source connection using the Adobe Experience Platform UI.
exl-id: 3c0902de-48b9-42d8-a4bd-0213ca85fc7f
---
# Create a [!DNL Snowflake] source connection in the UI

>[!NOTE]
>
> The [!DNL Snowflake] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

This tutorial provides steps for creating a [!DNL Snowflake] source connector using the Adobe Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Gather required credentials

In order to access your Snowflake account on [!DNL Platform], you must provide the following authentication value:

| Credential | Description |
| ---------- | ----------- |
| Account | The [!DNL Snowflake] account you want to connect to Platform. |
| Warehouse | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Platform. |
| Database | The [!DNL Snowflake] contains the data you want to bring the Platform. |
| Username | The username for the [!DNL Snowflake] account. |
| Password | The password for the [!DNL Snowflake] user account. |
| Connection string | The connection string used to connect to your [!DNL Snowflake] instance. The connection string pattern for [!DNL Snowflake] is `jdbc:snowflake://{ACCOUNT_NAME}.snowflakecomputing.com/?user={USERNAME}&password={PASSWORD}&db={DATABASE}&warehouse={WAREHOUSE}`. |

For more information about these values, refer to [this Snowflake document](https://docs.snowflake.com/en/user-guide/oauth-custom.html).

## Connect your  Snowflake account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Databases] category, select **[!UICONTROL Snowflake]** and then select **[!UICONTROL Add data]**.

![](../../../../images/tutorials/create/snowflake/catalog.png)

The **[!UICONTROL Connect to Snowflake]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To connect an existing account, select the Snowflake account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/snowflake/existing.png)

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your Snowflake credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/snowflake/new.png)

## Next steps

By following this tutorial, you have established a connection to your Snowflake account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Platform]](../../dataflow/databases.md).
