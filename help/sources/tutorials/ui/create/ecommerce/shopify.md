---
keywords: Experience Platform;home;popular topics;shopify;Shopify
title: Create a Shopify  Source Connection in the UI
description: Learn how to create a Shopify source connection using the Adobe Experience Platform UI.
exl-id: 527cac95-3d9a-4089-98e4-66d746641b85
TQID: https://experienceleague.adobe.com/5ZVrDrQ40RcxR0poFHhh19VhzzrVU41yYlnBzI7hhNc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
---
# Create a [!DNL Shopify] source connection in the UI

Use this guide to connect your [!DNL Shopify] account to Adobe Experience Platform through the Sources workspace in the UI.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [Experience Data Model (XDM) System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a [!DNL Shopify] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow for an eCommerce connector](../../dataflow/ecommerce.md).

### Gather required credentials

You must have valid [!DNL Shopify] authentication credentials to create a base connection. For details on the required credentials and how to obtain them, refer to the [[!DNL Shopify] source connector overview](../../../../connectors/ecommerce/shopify.md#prerequisites).

## Navigate the sources catalog

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the *[!UICONTROL Sources]* workspace. Select the appropriate category in the *[!UICONTROL Categories]* panel. Alternatively, use the search bar to navigate to the specific source that you want to use.

To ingest data from [!DNL Shopify], select the **[!UICONTROL Shopify]** source card under *[!UICONTROL eCommerce]* and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account is created, this option changes to **[!UICONTROL Add data]**.

![Experience Platform UI screenshot of the Sources catalog showing the Shopify source card under eCommerce with Set up](../../../../images/tutorials/create/shopify/catalog.png)

### Existing account

If you already have a [!DNL Shopify] account set up, select it from the list and then select **[!UICONTROL Next]** to continue.

### New account

If you are adding a new account, select **[!UICONTROL New account]**. In the input form, enter a name, an optional description, and your [!DNL Shopify] credentials. [!DNL Shopify] supports two authentication methods:

**Basic authentication**: Enter your store's host and access token in the basic authentication section.

![Experience Platform UI screenshot of the new Shopify account form showing Basic authentication fields for host and access token](../../../../images/tutorials/create/shopify/basic-auth.png)

**Access token based authentication**: Enter your store's host and access token in the access token section.

![Experience Platform UI screenshot of the new Shopify account form showing Access token based authentication fields for host and access token](../../../../images/tutorials/create/shopify/access-token.png)

After entering your credentials for the appropriate authentication method, select **[!UICONTROL Connect]** and allow a few moments for the new connection to be established.


## Next steps

By following this tutorial, you have established a connection to your [!DNL Shopify] account. You can now continue on to the next tutorial and [configure a dataflow to bring eCommerce data into Experience Platform](../../dataflow/ecommerce.md).
