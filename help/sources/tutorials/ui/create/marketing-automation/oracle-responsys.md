---
keywords: Experience Platform;home;popular topics;sources;connectors;oracle;
title: (Beta) Create an Oracle Responsys source connection using Platform UI
description: Learn how to connect Adobe Experience Platform to Oracle Responsys using Platform UI.
hide: true
hidefromtoc: true
exl-id: 9ec5e1c2-3d9e-4729-be81-89a85d5ea782
---
# (Beta) Create an [!DNL Oracle Responsys] source connection using Platform UI

>[!NOTE]
>
>The [!DNL Oracle Responsys] source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

This tutorial provides you with steps to create an [[!DNL Oracle Responsys]](../../../../connectors/marketing-automation/oracle-responsys.md) source connection using the Adobe Experience Platform user interface.

## Getting started

This guide requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

If you already have an authenticated [!DNL Oracle Responsys] account on Platform, then you may skip the remainder of this document and proceed to the tutorial on [creating a dataflow to bring marketing automation data to Platform](../../dataflow/marketing-automation.md).

### Gather required credentials

In order to connect [!DNL Oracle Responsys] to Platform, you must provide values for the following authentication properties:

| Credential | Description |
| --- | --- |
| Endpoint | The REST authentication endpoint URL of your [!DNL Oracle Responsys] instance. |
| Client ID | The client ID of your [!DNL Oracle Responsys] instance. |
| Client secret | The client secret of your [!DNL Oracle Responsys] instance. |

For more information on authentication credentials for [!DNL Oracle Responsys], see the [[!DNL Oracle Responsys] guide on authentication](https://docs.oracle.com/en/cloud/saas/marketing/responsys-develop/API/GetStarted/authentication.htm).

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Oracle Responsys] account to Platform.

## Connect your [!DNL Oracle Responsys] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the [!UICONTROL Marketing automation] category, select **[!UICONTROL Oracle Responsys]**, and then select **[!UICONTROL Add data]**.

![The Adobe Experience Platform sources catalog with the Oracle Responsys source highlighted.](../../../../images/tutorials/create/oracle-responsys/catalog.png)

The **[!UICONTROL Connect Oracle Responsys account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL Oracle Responsys] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![The existing account authentication screen for Oracle Responsys.](../../../../images/tutorials/create/oracle-responsys/existing.png)

### New account

To create a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and the appropriate values for your [!DNL Oracle Responsys] credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![The new account authentication screen for Oracle Responsys.](../../../../images/tutorials/create/oracle-eloqua/new.png)

## Next steps

By following this tutorial, you have authenticated and created a source connection between your [!DNL Oracle Responsys] account and Platform. You can now continue on to the next tutorial and [create a dataflow to bring marketing automation data to Platform](../../dataflow/marketing-automation.md).
