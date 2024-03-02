---
title: 
description: Learn how to bring payments data from your Stripe account to Experience Platform using the user interface.
badge: Beta
---
# Bring payments data from your [!DNL Stripe] account to Experience Platform using the user interface.

>[!NOTE]
>
>The [!DNL Stripe] source is in beta. Read the [terms and conditions](../../../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

Read the following tutorial to learn how to bring payments data from your [!DNL Stripe] account to Adobe Experience Platform using the user interface.

## Get started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

### Authentication

Read the [[!DNL Stripe] overview](../../../../connectors/payments/stripe.md) for information on how to retrieve your authentication credentials.

## Connect your [!DNL Stripe] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Payments* category, select **[!DNL Stripe]**, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![The sources catalog in the Experience Platform UI, with the Stripe source card selected.]

The **[!UICONTROL Connect Oracle NetSuite Activities account]** page appears. On this page, you can either use new credentials or existing credentials.

>[!BEGINTABS]

>[!TAB Create a new account]

To create a new account, select **[!UICONTROL New account]** and provide a name, an optional description, and your credentials. 

When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![The new account creation interface of the sources workflow.]

>[!TAB Use an existing account]

To use an existing account, select **[!UICONTROL Existing account]** and then select the account that you want to use from the existing account catalog.

Select **[!UICONTROL Next]** to proceed.

![The existing account selection page of the sources catalog.]

>[!ENDTABS]

## Select data

### Select resource path

## Provide dataset and dataflow details

## Configure ingestion schedule

## Review your dataflow
