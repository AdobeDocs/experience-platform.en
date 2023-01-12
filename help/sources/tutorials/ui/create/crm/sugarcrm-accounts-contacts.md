---
title: Create a SugarCRM Accounts & Contacts source connection in the UI 
description: Learn how to create a SugarCRM Accounts & Contacts source connection using the Adobe Experience Platform UI.
---
# Create a [!DNL SugarCRM Accounts & Contacts] source connection in the UI

This tutorial provides steps for creating a [!DNL SugarCRM Accounts & Contacts] source connection using the Adobe Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL SugarCRM] account, you may skip the remainder of this document and proceed to the tutorial on [configuring a dataflow](../../dataflow/crm.md).

### Gather required credentials

In order to connect [!DNL SugarCRM Accounts & Contacts] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| `Host` | The SugarCRM API endpoint the source connects to. | `developer.salesfusion.com` |
| `Username` | Your SugarCRM developer account username. | `abc.def@example.com@sugarmarketdemo000.com` |
| `Password` | Your SugarCRM developer account password. | `123456789` |

### Create a Platform schema

Before creating a [!DNL SugarCRM] source connection, you must also ensure that you first create a Platform schema to use for your source. See the tutorial on [creating a Platform schema](../../../../../xdm/schema/composition.md) for comprehensive steps on how to create a schema.

The [!DNL SugarCRM Accounts & Contacts] supports multiple APIs. This means that you have to create a separate schema, depending on the object type that you are leveraging. See the examples below for both accounts and contacts schemas:

>[!BEGINTABS]

>[!TAB Accounts]

![Platform UI screenshot showing an example schema for Accounts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarcrm-schema-accounts.png)

>[!TAB Contacts]

![Platform UI screenshot showing an example schema for Contacts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarcrm-schema-contacts.png)

>[!ENDTABS]

## Connect your [!DNL SugarCRM Accounts & Contacts] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *CRM* category, select *[!DNL SugarCRM Accounts & Contacts]*, and then select **[!UICONTROL Add data]**.

![Platform UI screenshot for catalog with SugarCRM Accounts & Contacts card](../../../../images/tutorials/create/sugarcrm-accounts-contacts/catalog-sugarcrm-accounts-contacts.png)

The **[!UICONTROL Connect SugarCRM Accounts & Contacts account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL SugarCRM Accounts & Contacts] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![Platform UI screenshot for Connect SugarCRM Accounts & Contacts account with an existing account](../../../../images/tutorials/create/sugarcrm-accounts-contacts/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![Platform UI screenshot for Connect SugarCRM Accounts & Contacts account with a new account](../../../../images/tutorials/create/sugarcrm-accounts-contacts/new.png)

### Select data

Finally, you must select the object type that you want to ingest to Platform.

| object_type | Description |
| --- | --- |
| `Accounts` | Companies with whom your organization has a relationship. |
| `Contacts` | Individual people with whom your organization has an established relationship. |

>[!BEGINTABS]

>[!TAB Accounts]

![Platform UI screenshot for SugarCRM Accounts & Contacts showing configuration with Account option selected](../../../../images/tutorials/create/sugarcrm-accounts-contacts/configuration-accounts.png)

>[!TAB Contacts]

![Platform UI screenshot for SugarCRM Accounts & Contacts showing configuration with Contacts option selected](../../../../images/tutorials/create/sugarcrm-accounts-contacts/configuration-contacts.png)

>[!ENDTABS]

## Next steps

By following this tutorial, you have established a connection to your [!DNL SugarCRM Accounts & Contacts] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](/help/sources/ui-tutorials/dataflow/crm.md).

## Additional resources

The sections below provide additional resources that you can refer to when using the [!DNL SugarCRM] source.

### Guardrails {#guardrails}

The [!DNL SugarCRM] API throttle rates are 90 calls per minute or 2000 calls per day, whichever happens first. However, this restriction has been circumvented by adding a parameter into the connection spec that will delay request time so that the rate limit is never reached.

### Validation {#validation}

To validate that you have correctly set up the source and [!DNL SugarCRM Accounts & Contacts] data is being ingested, follow the steps below:

* In the Platform UI, select **[!UICONTROL View Dataflows]** beside the [!DNL SugarCRM Events] card menu on the sources catalog. Next, select **[!UICONTROL Preview dataset]** to verify the data that was ingested.

* Depending on the object type you are working with, you can verify the aggregated data against the counts visible on the [!DNL SugarMarket] Events page below: 

>[!BEGINTABS]

>[!TAB Accounts]

![Screenshot from the SugarMarket Accounts page displaying list of accounts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarmarket-accounts.png)

>[!TAB Contacts]

![Screenshot from the SugarMarket Contacts page displaying list of contacts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarmarket-contacts.png)

>[!ENDTABS]

>[!NOTE]
>
>The [!DNL SugarMarket] pages do not include the deleted object counts. However, data retrieved through this source will also include the deleted count, these would be marked with a deleted flag.