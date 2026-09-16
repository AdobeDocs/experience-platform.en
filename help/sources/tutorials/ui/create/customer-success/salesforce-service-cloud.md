---
title: Connect Your Salesforce Service Cloud Account Using the Experience Platform User Interface
description: Learn how to connect your Salesforce Service Cloud account and bring your customer success data to Experience Platform using the user interface.
exl-id: 38480a29-7852-46c6-bcea-5dc6bffdbd15
TQID: https://experienceleague.adobe.com/ECKQlI7fuOkpNcBz2V6ieAH08-N7dn-nlfdToux5Fac
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
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
---
# Connect your [!DNL Salesforce Service Cloud] account to Experience Platform using the UI

Follow this step-by-step guide to seamlessly connect your [!DNL Salesforce Service Cloud] account and import your customer success data into Adobe Experience Platform.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Salesforce Service Cloud] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow for a customer success](../../dataflow/customer-success.md)

### Gather required credentials

Read the [authentication guide](../../../../connectors/customer-success/salesforce-service-cloud.md#credentials) for more information on retrieving your credentials.

## Connect your [!DNL Salesforce Service Cloud] account

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Select **[!DNL Salesforce Service Cloud]** under the *[!UICONTROL Customer success]* category, and then select **[!UICONTROL Add data]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![The sources catalog on the Experience Platform UI with the Salesforce Service Cloud source card selected.](../../../../images/tutorials/create/salesforce-service-cloud/catalog.png)

The **[!UICONTROL Connect to Salesforce Service Cloud]** page appears. On this page, you can either use new credentials or existing credentials.

### Use an existing account

To use an existing account, select **[!UICONTROL Existing account]**, and then select the desired account from the list that appears. When finished, select **[!UICONTROL Next]** to proceed.

![A list of authenticated Salesforce Service Cloud accounts that already exist in your organization.](../../../../images/tutorials/create/salesforce-service-cloud/existing.png)

### Create a new account

To create a new account, select **[!UICONTROL New account]** and provide a name and a description for your new [!DNL Salesforce Service Cloud] account. Next, select **[!UICONTROL OAuth2 Client Credential]** and then provide values for the following credentials:

* Environment URL
* Client ID
* Client secret
* API version

When finished, select **[!UICONTROL Connect to source]**.

![The OAuth interface for Salesforce account creation.](../../../../images/tutorials/create/salesforce-service-cloud/new.png)

## Next steps

By following this tutorial, you have established a connection to your [!DNL Salesforce Service Cloud] account. You can now continue on to the next tutorial and [configure a dataflow to bring Customer Success data into Experience Platform](../../dataflow/customer-success.md).
