---
title: Connect Your Salesforce Service Cloud Account Using the Experience Platform User Interface
description: Learn how to connect your Salesforce Service Cloud account and bring your customer success data to Experience Platform using the user interface.
exl-id: 38480a29-7852-46c6-bcea-5dc6bffdbd15
---
# Connect your [!DNL Salesforce Service Cloud] account to Experience Platform using the UI

This tutorial provides steps on how to connect your [!DNL Salesforce Service Cloud] account and bring your customer success data to Adobe Experience Platform using the Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Salesforce Service Cloud] connection, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow for a customer success](../../dataflow/customer-success.md)

### Gather required credentials

In order to access your [!DNL Salesforce Service Cloud] account on Experience Platform, you must provide the following values:

| Credential | Description |
| --- | --- |
| `environmentUrl` | The URL of the [!DNL Salesforce Service Cloud] source instance. |
| `username` | The username for the [!DNL Salesforce Service Cloud] user account. |
| `password` | The password for the [!DNL Salesforce Service Cloud] user account. |
| `securityToken` | The security token for the [!DNL Salesforce Service Cloud] user account. |
| `apiVersion` | (Optional) The REST API version of the [!DNL Salesforce Service Cloud] instance that you are using. If this field is left blank, then Experience Platform will automatically use the latest available version. |

For more information on authentication, refer to [this [!DNL Salesforce] authentication guide](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm).

## Connect your [!DNL Salesforce Service Cloud] account

Once you have gathered your required credentials, you can follow the steps below to link your [!DNL Salesforce] account to Experience Platform.

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the sources workspace. The *[!UICONTROL Catalog]* screen displays a variety of sources available on the Experience Platform sources catalog.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find a specific source using the search option.

Select **[!UICONTROL Customer success]** from the list of sources categories and then select **[!UICONTROL Add data]** from the [!DNL Salesforce Service Cloud] card.

![The sources catalog on the Experience Platform UI with the Salesforce Service Cloud source card selected.](../../../../images/tutorials/create/salesforce-service-cloud/catalog.png)

The **[!UICONTROL Connect to Salesforce Service Cloud]** page appears. On this page, you can either use new credentials or existing credentials.

>[!BEGINTABS]

>[!TAB Use an existing Salesforce Service Cloud account]

To use an existing account, select **[!UICONTROL Existing account]** and then select the account that you want to use from the list that appears. When finished, select **[!UICONTROL Next]** to proceed.

![A list of authenticated Salesforce accounts that already exist in your organization.](../../../../images/tutorials/create/salesforce-service-cloud/existing.png)

>[!TAB Create a new Salesforce Service Cloud account]

To use a new account, select **[!UICONTROL New account]** and provide a name, description, and your [!DNL Salesforce Service Cloud] authentication credentials. When finished, select **[!UICONTROL Connect to source]** and allow for a few seconds for the new connection to establish.

![The interface in which you can create a new Salesforce account by providing the appropriate authentication credentials.](../../../../images/tutorials/create/salesforce-service-cloud/new.png)

>[!ENDTABS]

## Next steps

By following this tutorial, you have established a connection to your [!DNL Salesforce Service Cloud] account. You can now continue on to the next tutorial and [configure a dataflow to bring Customer Success data into Experience Platform](../../dataflow/customer-success.md).
