---
keywords: Experience Platform;home;popular topics;Salesforce Service Cloud;salesforce service cloud
solution: Experience Platform
title: Create a Salesforce Service Cloud  Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: Learn how to create a Salesforce Service Cloud source connection using the Adobe Experience Platform UI.
exl-id: 38480a29-7852-46c6-bcea-5dc6bffdbd15
---
# Create a [!DNL Salesforce Service Cloud] source connection in the UI

Source connectors in Adobe Experience Platform provide the ability to ingest externally sourced data on a scheduled basis. This tutorial provides steps for creating a [!DNL Salesforce Service Cloud] (hereinafter referred to as "SSC") source connector using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
*   [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid SSC connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/customer-success.md)

### Gather required credentials

In order to access your SSC account on [!DNL Platform], you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| `username` | The user name for the user account. |
| `password` | The password for the user account. |
| `securityToken` | The security token for the user account. |

For more information about getting started, refer to [this [!DNL Salesforce Service Cloud] document](https://developer.salesforce.com/docs/atlas.en-us.api_iot.meta/api_iot/qs_auth_access_token.htm).

## Connect your [!DNL Salesforce Service Cloud] account

Once you have gathered your required credentials, you can follow the steps below to link your SSC account to [!DNL Platform].

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Sources]** from the left navigation bar to access the **[!UICONTROL Sources]** workspace. The **[!UICONTROL Catalog]** screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Customer Success]** category, select **[!UICONTROL Salesforce Service Cloud]**. If this is your first time using this connector, select **[!UICONTROL Configure]**. Otherwise, select **[!UICONTROL Add data]** to create a new SSC connector.

![catalog](../../../../images/tutorials/create/ssc/catalog.png)

The **[!UICONTROL Connect to Salesforce Service Cloud]** page appears. On this page, you can either use new credentials or existing credentials.

### New account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your SSC credentials. When finished, select **[!UICONTROL Connect]** and then allow some time for the new connection to establish.

![connect](../../../../images/tutorials/create/ssc/connect.png)

### Existing account

To connect an existing account, select the SSC account you want to connect with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/ssc/existing.png)

## Next steps

By following this tutorial, you have established a connection to your SSC account. You can now continue on to the next tutorial and [configure a dataflow to bring Customer Success data into [!DNL Platform]](../../dataflow/customer-success.md).
