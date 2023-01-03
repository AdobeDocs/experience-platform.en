---
keywords: Experience Platform;home;popular topics;paypal;Paypal
solution: Experience Platform
title: Create a PayPal  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a PayPal source connection using the Adobe Experience Platform UI.
exl-id: bbd3f634-cb28-45d8-9b7b-ed3873101882
---
# Create a [!DNL PayPal] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL PayPal] source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL PayPal] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/payments.md)

### Gather required credentials

In order to access your [!DNL PayPal] account Platform, you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `host` | The URL of the [!DNL PayPal] instance. |
| `clientID` | The client ID associated with your [!DNL PayPal] application. |
| `clientSecret` | The client secret associated with your [!DNL PayPal] application. |

For more information about getting started, refer to this [[!DNL PayPal] document](https://developer.paypal.com/docs/api/overview/#get-credentials)

## Connect your [!DNL PayPal] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL PayPal] account to Platform.

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Payments]** category, select **[!UICONTROL PayPal]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL PayPal] connector.

![catalog](../../../../images/tutorials/create/paypal/catalog.png)

The **[!UICONTROL Connect to PayPal]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL PayPal] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/paypal/connect.png)

### Existing account

To connect an existing account, select the [!DNL PayPal] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/paypal/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL PayPal] account. You can now continue on to the next tutorial and [configure a dataflow to bring Payment data into Platform](../../dataflow/payments.md).
