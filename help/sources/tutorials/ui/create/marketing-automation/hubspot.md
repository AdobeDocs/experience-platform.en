---
keywords: Experience Platform;home;popular topics;hubspot;Hubspot
solution: Experience Platform
title: Create a HubSpot  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a HubSpot source connection using the Adobe Experience Platform UI.
exl-id: 452b7290-b9e8-4728-8b58-0e0c76bd9449
---
# Create a [!DNL HubSpot] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL HubSpot] source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a [!DNL HubSpot] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/marketing-automation.md).

### Gather required credentials

In order to access your [!DNL HubSpot] account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `clientId` | The client ID associated with your [!DNL HubSpot] application. |
| `clientSecret` | The client secret associated with your [!DNL HubSpot] application. |
| `accessToken` | The access token obtained when initially authenticating your OAuth integration. |
| `refreshToken` | The refresh token obtained when initially authenticating your OAuth integration. |

For more information about getting started, refer to this [[!DNL HubSpot] document](https://developers.hubspot.com/docs/methods/oauth2/oauth2-overview).

## Connect your [!DNL HubSpot] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL HubSpot] account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Marketing automation]** category, select **[!UICONTROL HubSpot]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new [!DNL HubSpot] connector.

![catalog](../../../../images/tutorials/create/hubspot/catalog.png)

The **[!UICONTROL Connect to HubSpot]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL HubSpot] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/hubspot/connect.png)

### Existing account

To connect an existing account, select the [!DNL HubSpot] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/hubspot/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL HubSpot] account. You can now continue on to the next tutorial and [configure a dataflow to bring marketing automation system data into [!DNL Platform]](../../dataflow/marketing-automation.md).
