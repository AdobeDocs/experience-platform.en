---
keywords: Experience Platform;home;popular topics;sources;connectors;oracle;oracle eloqua;eloqua
solution: Experience Platform
title: Create an Oracle Eloqua source connection using Platform UI
description: Learn how to connect Adobe Experience Platform to Oracle Eloqua using Platform UI.
exl-id: c4431d85-5948-4122-9a99-dbacdde5a09f
---
# Create an [!DNL Oracle Eloqua] source connection using Platform UI

This tutorial provides steps for creating an [!DNL Oracle Eloqua] source connector using the Adobe Experience Platform user interface.

## Getting started

This guide requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

If you already have an authenticated [!DNL Oracle Eloqua] account on Platform, then you may skip the remainder of this document and proceed to the tutorial on [creating a dataflow to bring marketing automation data to Platform](../../dataflow/marketing-automation.md).

### Gather required credentials

In order to connect [!DNL Oracle Eloqua] to Platform, you must provide values for the following authentication properties:

| Credential | Description |
| --- | --- |
| Endpoint | The endpoint of your [!DNL Oracle Eloqua]. |
| Username | The username of your [!DNL Oracle Eloqua] account. The username must be formatted as `siteName + \\ + username`, where `siteName` is the company name you used to log in to [!DNL Oracle Eloqua] and `username` is your username. For example, your log in username can be: `adobe\\emily`. |
| Password | The password corresponding to your [!DNL Oracle Eloqua] username. |

For more information on authentication credentials for [!DNL Oracle Eloqua], see the [[!DNL Oracle Eloqua] guide on authentication](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/Authentication_Basic.html).

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Oracle Eloqua] account to Platform.

## Connect your [!DNL Oracle Eloqua] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the [!UICONTROL Marketing automation] category, select **[!UICONTROL Oracle Eloqua]**, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/oracle-eloqua/catalog.png)

The **[!UICONTROL Connect Oracle Eloqua account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL Oracle Eloqua] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/oracle-eloqua/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and the appropriate values for your [!DNL Oracle Eloqua] credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/oracle-eloqua/new.png)

## Next steps

By following this tutorial, you have authenticated and created a source connection between your [!DNL Oracle Eloqua] account and Platform. You can now continue on to the next tutorial and [create a dataflow to bring marketing automation data to Platform](../../dataflow/marketing-automation.md).
