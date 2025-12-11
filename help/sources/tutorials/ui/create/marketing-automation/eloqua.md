---
title: Connect Oracle Eloqua (V2) to Experience Platform in the UI
description: Learn how to connect your Oracle Eloqua account to Experience Platform in the UI.
---
# Connect [!DNL Oracle Eloqua] (V2) to Experience Platform in the UI

Read this guide to learn how to connect your [!DNL Oracle Eloqua] account to Adobe Experience Platform using the sources workspace in the Experience Platform user interface.

## Get started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

### Gather required credentials

Read the [[!DNL Oracle Eloqua] overview](../../../../connectors/marketing-automation/eloqua.md) for information on authentication.

## Navigate the sources catalog

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the *[!UICONTROL Sources]* workspace. Choose a category or use the search bar to find your source.

To connect to [!DNL Oracle Eloqua], go to the *[!UICONTROL Marketing Automation]* category, select the **[!UICONTROL (V2) Oracle Eloqua]** source card, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account is created, this option changes to **[!UICONTROL Add data]**.

![]

## Use an existing account

To use an existing account, select **[!UICONTROL Existing account]** and then select the [!DNL Oracle Eloqua] account that you want to use.

![]

## Create a new account {#new}

To create a new account, select **[!UICONTROL New account]** and provide a name and description under your [!UICONTROL Source connection details]. Next, under [!UICONTROL Account authentication], provide values for your **Client ID**, **Client secret**, **Username**, **Password**, and **Base endpoint**. You can read the [authentication guide](../../../../connectors/marketing-automation/eloqua.md) for more information on these credentials. When finished, select **[!UICONTROL Connect to source]** and allow for a few seconds for your connection to establish.

![]

