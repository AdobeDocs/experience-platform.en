---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Create a SugarCRM Accounts & Contacts source connection in the UI 
description: Learn how to create a SugarCRM Accounts & Contacts source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a [!DNL SugarCRM Accounts & Contacts] source connection in the UI

This tutorial provides steps for creating a [!DNL SugarCRM Accounts & Contacts] source connector using the Platform user interface.

## Overview

[[!DNL SugarCRM]](https://www.sugarcrm.com/) is a customer relationship management (CRM) system. [!DNL SugarCRM]'s functionality includes sales-force automation, marketing campaigns, customer support, collaboration, Mobile CRM, Social CRM and reporting.

To retrieve relationship data setup within [!DNL SugarCRM], this Adobe Experience Platform [source](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) connector leverages the below [!DNL SugarCRM] APIs :
   1. [Account API](https://market.apidocs.sugarcrm.com/#b0aeb0cd-80ea-4688-8474-54e4873f32f3) to retrieve your companies, and the 
   1. [Contact API](https://market.apidocs.sugarcrm.com/#308c5025-9478-4de3-8a41-1fc3cff1d8d1) to retrieve the people. 

After you bring that data to Experience Platform, you can then execute any analytics.

[!DNL SugarCRM Accounts & Contacts] uses bearer tokens as an authentication mechanism to communicate with the [!DNL SugarCRM] Account and Contact APIs.

## Prerequisites

The first step in creating a [!DNL SugarCRM Accounts & Contacts] source connection is to ensure that you have the below :
1. A [!DNL SugarMarket] *(SugarCRM’s product for Marketing Automation)* account.
1. Additionally, a unique API username and user account separate from any user account associated with the marketing or sales process; having API Access permissions in order to access the API. The process to obtain / set up the account is documented on the [[!DNL SugarMarket RESTFUL API (sugarcrm.com)]](https://market.apidocs.sugarcrm.com/#intro) page.

### Gather required credentials

In order to connect [!DNL SugarCRM Accounts & Contacts] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| *`Host`* | The SugarCRM API host. | `developer.salesfusion.com` |
| *`Username`* | Your SugarCRM developer account username. | `abc.def@example.com@sugarmarketdemo000.com` |
| *`Password`* | Your SugarCRM developer account password. | `123456789` |

### Create Platform Schema

The [!DNL SugarCRM Accounts & Contacts] supports multiple APIs. Depending on which object type you are leveraging create separate platform [schema](/help/xdm/schema/composition.md)'s.

Platform UI screenshot showing an example schema when using the *Account* object type.
![Platform UI screenshot showing an example schema for Accounts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarcrm-schema-accounts.png?lang=en)

Platform UI screenshot showing an example schema when using the *Contact* object type.
![Platform UI screenshot showing an example schema for Contacts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarcrm-schema-contacts.png?lang=en)

## Connect your [!DNL SugarCRM Accounts & Contacts] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *CRM* category, select *[!DNL SugarCRM Accounts & Contacts]*, and then select **[!UICONTROL Add data]**.

![Platform UI screenshot for catalog with SugarCRM Accounts & Contacts card](../../../../images/tutorials/create/sugarcrm-accounts-contacts/catalog-sugarcrm-accounts-contacts.png?lang=en)

The **[!UICONTROL Connect SugarCRM Accounts & Contacts account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL SugarCRM Accounts & Contacts] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![Platform UI screenshot for Connect SugarCRM Accounts & Contacts account with an existing account](../../../../images/tutorials/create/sugarcrm-accounts-contacts/existing.png?lang=en)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![Platform UI screenshot for Connect SugarCRM Accounts & Contacts account with a new account](../../../../images/tutorials/create/sugarcrm-accounts-contacts/new.png?lang=en)

Finally, depending on your dataset you must choose as a mandatory input between the object types below:
| object_type | Description |
| --- | --- |
| `Accounts` | Companies with whom your organization has a relationship. |
| `Contacts` | Individual people with whom your organization has an established relationship. |

Platform UI screenshot showing configuration when using the *Account* object type.
![Platform UI screenshot for SugarCRM Accounts & Contacts showing configuration with Account option selected](../../../../images/tutorials/create/sugarcrm-accounts-contacts/configuration-accounts.png?lang=en)

Platform UI screenshot showing configuration when using the *Contact* object type.
![Platform UI screenshot for SugarCRM Accounts & Contacts showing configuration with Contacts option selected](../../../../images/tutorials/create/sugarcrm-accounts-contacts/configuration-contacts.png?lang=en)

## Next steps

By following this tutorial, you have established a connection to your [!DNL SugarCRM Accounts & Contacts] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](/help/sources/ui-tutorials/dataflow/crm.md).

## Additional resources

### Guardrails {#guardrails}

The [!DNL SugarCRM] API throttle rates are 90 calls per minute or 2000 calls per day, whichever happens first. However, this restriction has been circumvented by adding a parameter into the connection spec that will delay request time so that the rate limit is never reached.

### Validation {#validation}

To validate that you have correctly set up the source and [!DNL SugarCRM Accounts & Contacts] data is being ingested, follow the steps below:

1. In the Platform UI, select View Dataflows besides the [!DNL SugarCRM Accounts & Contacts] card menu on the Catalog page. You can then select [!UIControl Preview dataset] to verify the data that was ingested.

1. Depending on the object type you are working with you can verify the aggregated data against the counts visible on the [!DNL SugarMarket] Accounts page below : 
   ![Screenshot from the SugarMarket Accounts page displaying list of accounts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarmarket-accounts.png?lang=en)

   Or from the Contacts page below :
   ![Screenshot from the SugarMarket Contacts page displaying list of contacts](../../../../images/tutorials/create/sugarcrm-accounts-contacts/sugarmarket-contacts.png?lang=en)

>[!NOTE] 
> The [!DNL SugarMarket] pages do not include the deleted object counts. However, data retrieved through this source will also include the deleted count, these would be marked with a deleted flag.