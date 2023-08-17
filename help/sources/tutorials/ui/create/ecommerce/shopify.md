---
keywords: Experience Platform;home;popular topics;shopify;Shopify
solution: Experience Platform
title: Create a Shopify  Source Connection in the UI
type: Tutorial
description: Learn how to create a Shopify source connection using the Adobe Experience Platform UI.
exl-id: 527cac95-3d9a-4089-98e4-66d746641b85
---
# Create a [!DNL Shopify] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Shopify] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a [!DNL Shopify] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow for an eCommerce connector](../../dataflow/ecommerce.md).

### Gather required credentials

In order to access your [!DNL Shopify] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `host` | The end point of your [!DNL Shopify] server.  |
| `accessToken` | The access token for your [!DNL Shopify] user account. |

For more information about getting started, refer to this [[!DNL Shopify] document](https://shopify.dev/concepts/about-apis/authentication).

## Connect your [!DNL Shopify] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Shopify] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL eCommerce]** category, select **[!UICONTROL Shopify]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL Shopify] connector.

![catalog](../../../../images/tutorials/create/shopify/catalog.png)

The **[!UICONTROL Connect to Shopify]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Shopify] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/shopify/new.png)

### Existing account

To connect an existing account, select the [!DNL Shopify] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/shopify/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Shopify] account. You can now continue on to the next tutorial and [configure a dataflow to bring eCommerce data into [!DNL Platform]](../../dataflow/ecommerce.md).
