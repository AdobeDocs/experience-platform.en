---
keywords: Experience Platform;Zendesk;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Create a Zendesk source connection in the UI
description: Learn how to create a Zendesk source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
exl-id: 
---
# Create a Zendesk source connection in the UI

This tutorial provides steps for creating a Zendesk source connector using the Platform user interface.

## Overview

[Zendesk](https://www.zendesk.com) is a popular customer service solution and sales tool.

This [!DNL Adobe Experience Platform] [!DNL sources connector](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [!DNL Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) that returns users information into Experience Platform from Zendesk for further processing.

Zendesk uses bearer tokens as an authentication mechanism to communicate with the Zendesk API.

## Prerequisites

The following items are required before you start configuring the extension:

* You need to have a Zendesk Support account. 
    * Go to the Zendesk [register](https://www.zendesk.com/register/) page to register and create a Zendesk account, if you do not have one already.

### Gather required credentials

In order to connect Zendesk to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| subdomain | Unique domain specific to your account created during the registration process. | *xxxxx.zendesk.com*|
| API token | Zendesk API token.<br></br>Navigate to the Zendesk website and access **[!UICONTROL Settings]** > **[!UICONTROL Apps and Integrations]** > **[!UICONTROL Zendesk API]** page. Then Navigate to the **[!UICONTROL API Tokens]** section. |*0lZnClEvkJSTQ7olGLl7PMhVq99gu26GTbJtf*|

![Zendesk domain](../../../../images/tutorials/create/zendesk/zendesk-domain.png?lang=en)
![Zendesk API page displaying the API tokens section](../../../../images/tutorials/create/zendesk/zendesk-api-tokens.png?lang=en)
![Zendesk API page displaying the API token key of interest](../../../../images/tutorials/create/zendesk/zendesk-api-key.png?lang=en)

For more information on these credentials, see the Zendesk authentication documentation. 
* [Where can I find my Zendesk subdomain](https://support.zendesk.com/hc/en-us/articles/4409381383578-Where-can-I-find-my-Zendesk-subdomain-)
* [Generating a new API token](https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token)

Finally, create a Platform [schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html) required for the [!DNL Zendesk Search API]. Refer also to the [limits](#limits) section further below on this page.
![Create Schema](../../../../images/tutorials/create/zendesk/schema.png?lang=en)

## Connect your Zendesk account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Customer Success* category, select *Zendesk*, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/zendesk/catalog.png)

The **[!UICONTROL Connect Zendesk account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the *Zendesk* account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/zendesk/authentication-existing-account.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/zendesk/authentication-new-account.png)

## Next steps

By following this tutorial, you have established a connection to your *Zendesk* account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/dataflow/crm.html).

## Additional resources

### Validation {#validation}

To validate that you have correctly set up the source; and Zendesk profiles are being ingested, follow the steps below:

1. In the Platform UI, select **[!UICONTROL Datasets]** from the left navigation bar to access the [!UICONTROL Datasets] workspace. The [!UICONTROL Dataset Activity] screen displays the details of executions.
![Activity page](../../../../images/tutorials/create/zendesk/dataset-activity.png?lang=en)
![Dataflow page](../../../../images/tutorials/create/zendesk/dataflow-monitoring.png?lang=en)

1. Next, select the **[!UICONTROL Data governance]** tab, you will see the schema details.
![Zendesk schema](../../../../images/tutorials/create/zendesk/dataset-governance.png?lang=en)

1. Finally, select the **[!UICONTROL Preview dataset]** button to display the data that was ingested.
![Zendesk dataset](../../../../images/tutorials/create/zendesk/preview-dataset.png?lang=en)

### Zendesk schema

* A list of supported mappings that are to be set up for the [!DNL Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) is given below.

   | Source | Schema Target | Type |
   |---|---|---|
   |results.active|_extconndev.active|Boolean|
   |results.alias|_extconndev.alias||
   |results.created_at|_extconndev.created_at|String|
   |results.custom_role_id|_extconndev.custom_role_id||
   |results.default_group_id|_extconndev.default_group_id||
   |results.details|_extconndev.details||
   |results.email|_extconndev.email|String|
   |results.external_id|_extconndev.external_id||
   |results.iana_time_zone|_extconndev.iana_time_zone|String|
   |results.id|_extconndev.id|Integer|
   |results.last_login_at|_extconndev.last_login_at||
   |results.locale|_extconndev.locale|String|
   |results.locale_id|_extconndev.locale_id|Integer|
   |results.moderator|_extconndev.moderator|Boolean|
   |results.name|_extconndev.name|String|
   |results.notes|_extconndev.notes||
   |results.only_private_comments|_extconndev.only_private_comments|Boolean|
   |results.organization_id|_extconndev.organization_id||
   |results.phone|_extconndev.phone||
   |results.photo|_extconndev.photo||
   |results.report_csv|_extconndev.report_csv|Boolean|
   |results.restricted_agent|_extconndev.restricted_agent|Boolean|
   |results.result_type|_extconndev.result_type|String|
   |results.role|_extconndev.role|String|
   |results.role_type|_extconndev.role_type||
   |results.shared|_extconndev.shared|Boolean|
   |results.shared_agent|_extconndev.shared_agent|Boolean|
   |results.shared_phone_number|_extconndev.shared_phone_number||
   |results.signature|_extconndev.signature||
   |results.suspended|_extconndev.suspended|Boolean|
   |results.ticket_restriction|_extconndev.ticket_restriction|String|
   |results.time_zone|_extconndev.time_zone|String|
   |results.two_factor_auth_enabled|_extconndev.two_factor_auth_enabled|Boolean|
   |results.updated_at|_extconndev.updated_at|String|
   |results.url|_extconndev.url|String|
   |results.verified|_extconndev.verified|Boolean|

### Limits {#limits}

* The [!DNL Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) returns a maximum of 1000 records per page. 
    * The value for the ``filter[type]`` parameter is set to ``user`` and hence the Zendesk connection only returns users.
    * The number of results per page is managed by the ``page[size]`` parameter. The value is set to ``100``. This is done to reduce the impact of speed reduction constraints set by Zendesk.
    * See [Limits](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#limits) and [Pagination](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#pagination-1). 
    * You can also refer to [Paginating through lists using cursor pagination](https://developer.zendesk.com/documentation/developer-tools/pagination/paginating-through-lists-using-cursor-pagination/).