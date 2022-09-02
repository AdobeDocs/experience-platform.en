---
keywords: Experience Platform;home;popular topics;Google Ads;Google Ads source connector;google ads connector
solution: Experience Platform
title: Create a Google Ads  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Google Ads source connection using the Adobe Experience Platform UI.
exl-id: 33dd2857-aed3-4e35-bc48-1c756a8b3638
---
# Create a [!DNL Google Ads] source connection in the UI

>[!NOTE]
>
>The [!DNL Google Ads] source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Sources in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Google Ads] source connector using the Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Google Ads] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/advertising.md)

### Gather required credentials

In order to access your [!DNL Google Ads] account Platform, you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `clientCustomerId` | The Client customer ID of the [!DNL Ads] account. |
| `developerToken` | The developer token associated with the manager account. |
| `refreshToken` | The refresh token obtained from [!DNL Google] for authorizing access to [!DNL Ads]. |
| `clientId` | The client ID of the [!DNL Google] application used to acquire the refresh token. |
| `clientSecret` | The client secret of the [!DNL Google] application used to acquire the refresh token. |

For more information about getting started, refer to this [[!DNL Google Ads] document](https://developers.google.com/adwords/api/docs/guides/authentication).

## Connect your [!DNL Google AdWords] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Advertising* category, select **[!UICONTROL Google Ads]**, and then select **[!UICONTROL Add data]**.

![An image of the Google Ads source in the Experience Platform UI sources catalog](../../../../images/tutorials/create/ads/catalog.png)

The **[!UICONTROL Connect to Google Ads]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Google Ads] credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/ads/connect.png)

### Existing account

To connect an existing account, select the  [!DNL Google Ads] account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/ads/existing.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Google Ads] account. You can now continue on to the next tutorial and [configure a dataflow to bring advertising data into Platform](../../dataflow/advertising.md).
