---
title: Create a Google Big Query Source Connection in the UI
description: Learn how to create a Google Big Query source connection using the Adobe Experience Platform UI.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 3c0902de-48b9-42d8-a4bd-0213ca85fc7f
---
# Create a [!DNL Google BigQuery] source connection in the UI

>[!IMPORTANT]
>
>The [!DNL Google BigQuery] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this tutorial to learn how to connect your [!DNL Google BigQuery] account to Adobe Experience Platform using the user interface.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Google BigQuery] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/databases.md).

### Gather required credentials

In order to access your [!DNL Google BigQuery] account on Platform, you must provide the following authentication values:

>[!BEGINTABS]

>[!TAB Basic Authentication]

| Credential | Description |
| --- | --- |
| Project | The project ID of the default [!DNL Google BigQuery] project to query against. |
| Client ID | The ID value used to generate the refresh token. |
| Client secret | The secret value used to generate the refresh token. |
| Refresh token | The refresh token obtained from [!DNL Google] used to authorize access to [!DNL Google BigQuery]. |
| Large results dataset ID |

For more information about these values, refer to [this [!DNL Google BigQuery] document](https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing).

>[!TAB Service Authentication]

| Credential | Description |
| --- | --- |
| Project ID |
| Key file content |
| Large results dataset ID |

>[!ENDTABS]

## Connect your Google BigQuery account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Databases] category, select **[!UICONTROL Google BigQuery]** and then select **[!UICONTROL Add data]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![](../../../../images/tutorials/create/google-big-query/catalog.png)

The **[!UICONTROL Connect to Google Big Query]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To connect an existing account, select the [!DNL Google BigQuery] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![](../../../../images/tutorials/create/google-big-query/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name and an optional description for your new [!DNL Google BigQuery] account.

![](../../../../images/tutorials/create/google-big-query/new.png)

>[!BEGINTABS]

>[!TAB Use basic authentication]

To use basic authentication, provide values for your your project, client ID, client secret, refresh token, and (optional) large results dataset ID. When finished, select **[!UICONTROL Connect to source]** and allow for a few moments for the connection to establish.

![](../../../../images/tutorials/create/google-big-query/basic_auth.png)

>[!TAB Use service authentication]

To use service authentication, provide values for your project ID, key file content, and large results dataset ID.

![](../../../../images/tutorials/create/google-big-query/service_auth.png)

>[!ENDTABS]

## Next steps

By following this tutorial, you have established a connection to your [!DNL Google BigQuery] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).
