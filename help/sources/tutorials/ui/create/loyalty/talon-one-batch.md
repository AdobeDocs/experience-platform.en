---
title: Talon.One Batch
description:
badge: Beta
---
# Ingest batch data from [!DNL Talone.One] into Experience Platform using the UI

>[!AVAILABILITY]
>
>The [!DNL Talon.One] source is in beta. Read the [terms and conditions](../../../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

Read this tutorial to learn how to ingest batch data from your [!DNL Talon.One] account into Adobe Experience Platform using the sources workspace in the UI.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Navigate the sources catalog

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the *[!UICONTROL Sources]* workspace. Select the appropriate category in the *[!UICONTROL Categories]* panel Alternatively, use the search bar to navigate to the specific source that you want to use.

To ingest data from [!DNL Talon.One], select the **[!UICONTROL Talon.One Batch Source Connector]** source card under *[!UICONTROL Loyalty]* and then select **[!UICONTROL Add data]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account is created, this option changes to **[!UICONTROL Add data]**.

### Create a new account

To create a new account for your [!DNL Talon.One] source, select **[!UICONTROL New account]** and provide a name and an optional description for your account. Next, provide your [!DNL Talon.One] domain and your [!UICONTROL Talon One Management API Key]. When finished, select **[!UICONTROL Connect to source]** and allow for a few moments for your connection to establish.

### Use an existing account

To use an existing account, select **[!UICONTROL Existing account]** and select the [!DNL Talon.One] account that you want to use from the accounts interface.

## Select data

Next, provide values for your **applicationId** and **sessionType**. During this step, you can use the preview functionalities to inspect the structure of your data. When finished, select **[!UICONTROL Next]** to proceed.

>[!BEGINTABS]

>[!TAB Session state]

>[!TAB Session type]

>[!ENDTABS]
