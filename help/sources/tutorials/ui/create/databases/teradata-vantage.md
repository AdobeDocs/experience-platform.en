---
keywords: Experience Platform;home;popular topics;Teradata Vantage
title: Create a Teradata Vantage  Source Connection in the UI
description: Learn how to create a Teradata Vantage source connection using the Adobe Experience Platform UI.
exl-id: 3fdb09fa-128a-477b-9144-d4ef3ed18ea6
---
# (Beta) Create a [!DNL Teradata Vantage] source connection in the UI

>[!NOTE]
>
> The [!DNL Teradata Vantage] source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

This tutorial provides steps for creating a [!DNL Teradata Vantage] source connector using the Adobe Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Gather required credentials

In order to access your [!DNL Teradata Vantage] account on Platform, you must provide the following authentication value:

| Credential | Description |
| ---------- | ----------- |
| Connection string | A connection string is a string that provides information about a data source and how you can connect to it. The connection string pattern for [!DNL Teradata Vantage] is `DBCName={SERVER};Uid={USERNAME};Pwd={PASSWORD}`. | 

For more information about getting started, refer to this [[!DNL Teradata Vantage] document](https://docs.teradata.com/r/Teradata-VantageTM-Advanced-SQL-Engine-Security-Administration/July-2021/Setting-Up-the-Administrative-Infrastructure/Controlling-Access-to-the-Operating-System/Working-with-OS-Level-Security-Options).

## Connect your [!DNL Teradata Vantage] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Databases] category, select **[!UICONTROL Teradata Vantage]** and then select **[!UICONTROL Add data]**.

![](../../../../images/tutorials/create/teradata/catalog.png)

The **[!UICONTROL Connect to Teradata Vantage]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To connect an existing account, select the [!DNL Teradata Vantage] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/teradata/existing.png)

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Teradata Vantage] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![](../../../../images/tutorials/create/teradata/new.png)

## Next steps

By following this tutorial, you have established a connection to your Teradata Vantage account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).
