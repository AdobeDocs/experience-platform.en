---
keywords: Experience Platform;home;popular topics;Generic REST API
title: Create a Generic REST API  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Generic REST API source connection using the Adobe Experience Platform UI.
exl-id: fb2038b9-7f27-4818-b5de-cc8072122127
---
# Create a [!DNL Generic REST API] source connection in the UI

>[!NOTE]
>
> The [!DNL Generic REST API] source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

This tutorial provides steps for creating a [!DNL Generic REST API] source connector using the Adobe Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Gather required credentials

In order to access your [!DNL Generic REST API] account on Platform, you must provide valid credentials for the authentication type of your choice. Generic REST API supports both OAuth 2 refresh code and basic authentication. See the following tables for information on the credentials for the two supported authentication types.

#### OAuth 2 refresh code

| Credential | Description |
| --- | --- |
| Host |
| Authorization test URL |
| Client ID |
| Client secret |
| Access token |
| Refresh token |
| Access token URL |
| Request parameter override |


#### Basic authentication

| Credential | Description |
| --- | --- |
| Host |
| Username |
| Password |

## Connect your  Generic REST API account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources that you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Protocols] category, select **[!UICONTROL Generic REST API]** and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/generic-rest/catalog.png)

The **[!UICONTROL Connect to Generic REST API]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To connect an existing account, select the Generic REST API account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/generic-rest/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name and an option description for your new [!DNL Generic REST API] account.

![new](../../../../images/tutorials/create/generic-rest/new.png)

#### Authenticate using OAuth 2 refresh code

[!DNL Generic REST API] supports both OAuth 2 refresh code and basic authentication. To authenticate using an OAuth2 authentication, select **[!UICONTROL OAuth2RefreshCode]** , provide your OAuth 2 credentials and then select **[!UICONTROL Connect to source]**.

![](../../../../images/tutorials/create/generic-rest/oauth2.png)

#### Authenticate using basic authentication

To use basic authentication, select **[!UICONTROL Basic authentication]**, provide your host, username, and password, and then select **[!UICONTROL Connect to source]**. 

![](../../../../images/tutorials/create/generic-rest/basic-authentication.png)

## Next steps

By following this tutorial, you have established a connection to your Generic REST API account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](../../dataflow/databases.md).
