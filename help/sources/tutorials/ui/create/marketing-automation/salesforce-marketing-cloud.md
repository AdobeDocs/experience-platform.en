---
keywords: Experience Platform;home;popular topics;salesforce marketing cloud;Salesforce Marketing Clud
solution: Experience Platform
title: Create a Salesforce Marketing Cloud Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Salesforce Marketing Cloud source connection using the Adobe Experience Platform UI.
---
# Create a [!DNL Salesforce Marketing Cloud] source connection in the UI

>[!NOTE]
>
> The [!DNL Salesforce Marketing Cloud] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Salesforce Marketing Cloud] source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a [!DNL Salesforce Marketing Cloud] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/marketing-automation.md).

### Gather required credentials

In order to access your [!DNL Salesforce Marketing Cloud] account on Platform, you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `host` | The host server of your application. This is often your subdomain. |
| `clientId` | The client ID associated with your [!DNL Salesforce Marketing Cloud] application. |
| `clientSecret` | The client secret associated with your [!DNL Salesforce Marketing Cloud] application. |

For more information about getting started, refer to this [[!DNL Salesforce Marketing Cloud] document](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/authentication.htm).

## Connect your [!DNL Salesforce Marketing Cloud] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Salesforce Marketing Cloud] account to Platform.

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. You can also use the search bar to narrow down the displayed connectors.

Under the [!UICONTROL Marketing automation] category, select **[!UICONTROL Salesforce Marketing Cloud]** and then select **[!UICONTROL Set up]**.

![catalog](../../../../images/tutorials/create/salesforce-marketing-cloud/catalog.png)

The **[!UICONTROL Connect to Salesforce Marketing Cloud]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Salesforce Marketing Cloud] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/salesforce-marketing-cloud/new.png)

### Existing account

To connect an existing account, select the [!DNL Salesforce Marketing Cloud] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/salesforce-marketing-cloud/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Salesforce Marketing Cloud] account. You can now continue on to the next tutorial and [configure a dataflow to bring marketing automation system data into Platform](../../dataflow/marketing-automation.md).
