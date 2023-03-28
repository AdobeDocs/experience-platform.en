---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Create a MailChimp Members source connection using Platform UI
description: Learn how to connect Adobe Experience Platform to MailChimp Members using Platform UI.
exl-id: dc620ef9-624d-4fc9-8475-bb475ea86eb7
---
# Create a [!DNL Mailchimp Members] source connection using Platform UI

This tutorial provides steps for creating a [!DNL Mailchimp] source connector to ingest [!DNL Mailchimp Members] data to Adobe Experience Platform using the user interface.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Gather required credentials

In order to bring your [!DNL Mailchimp Members] data to Platform, you must first provide the appropriate authentication credentials that correspond with your [!DNL Mailchimp] account.

The [!DNL Mailchimp Members] source supports both OAuth 2 Refresh Code and basic authentication. See the tables below for more information on these authentication types.

### OAuth 2 Refresh Code

| Credentials | Description |
| --- | --- |
| Domain | The root URL used to connect to MailChimp API. The format for the root URL is `https://{DC}.api.mailchimp.com`, where `{DC}` represents the data center that corresponds to your account. |
| Authorization test URL | The authorization test URL is used to validate credentials when connecting [!DNL Mailchimp] to Platform. If this is not provided, credentials are automatically checked during the source connection creation step instead. |
| Access Token | The corresponding access token used to authenticate your source. This is required for OAuth-based authentication. |

For more information on using OAuth 2 to authenticate your [!DNL Mailchimp] account to Platform, see this [[!DNL Mailchimp] document on using OAuth 2](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/).

### Basic authentication

| Credentials | Description |
| --- | --- |
| Domain | The root URL used to connect to MailChimp API. The format for the root URL is `https://{DC}.api.mailchimp.com`, where `{DC}` represents the data center that corresponds to your account. |
| Username | The username that corresponds with your MailChimp account. This is required for basic authentication. |
| Password | The password that corresponds with your MailChimp account. This is required for basic authentication. |

## Connect your [!DNL Mailchimp Members] account to Platform

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the [!UICONTROL Marketing automation] category, select **[!UICONTROL Mailchimp Campaign]**, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/mailchimp-members/catalog.png)

The **[!UICONTROL Connect Mailchimp Campaigns account]** page appears. On this page, you can select whether you are accessing an existing account, or opting to create a new account.

### Existing account

To use an existing account, select the [!DNL Mailchimp Members] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/mailchimp-members/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name and a description for your [!DNL Mailchimp Members] source connection details.

![new](../../../../images/tutorials/create/mailchimp-members/new.png)


#### Authenticate using OAuth 2

To use OAuth 2, select [!UICONTROL OAuth 2 Refresh Code], provide values for your domain, authorization test URL, and access token and then select **[!UICONTROL Connect to source]**. Allow for a few moments for your credentials to validate, and then select **[!UICONTROL Next]** to proceed.

![oauth](../../../../images/tutorials/create/mailchimp-members/oauth.png)

#### Authenticate using basic authentication

To use basic authentication, select [!UICONTROL Basic authentication], provide values for your domain, username, and password, and then select **[!UICONTROL Connect to source]**. Allow for a few moments for your credentials to validate, and then select **[!UICONTROL Next]** to proceed.

![basic](../../../../images/tutorials/create/mailchimp-members/basic.png)

### Select [!DNL Mailchimp Members] data

Once your source is authenticated, you must then provide the `listId` that corresponds with your [!DNL Mailchimp Members] account.

On the [!UICONTROL Select data] page, enter your `listId` and then select **[!UICONTROL Explore]**.

![explore](../../../../images/tutorials/create/mailchimp-members/explore.png)

The page updates into an interactive schema tree that allows you to explore and inspect the hierarchy of your data. Select **[!UICONTROL Next]** to proceed.

![select-data](../../../../images/tutorials/create/mailchimp-members/select-data.png)

## Next steps

With your [!DNL Mailchimp] account authenticated and your [!DNL Mailchimp Members] data selected, you can now start creating a dataflow to bring your data to Platform. For detailed steps on how to create a dataflow, see the documentation on [creating a dataflow to bring marketing automation data to Platform](../../dataflow/marketing-automation.md).
