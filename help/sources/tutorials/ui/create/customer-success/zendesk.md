---
keywords: Experience Platform;Zendesk;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Create a Zendesk source connection in the UI
description: Learn how to create a Zendesk source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a Zendesk source connection in the UI

This tutorial provides steps for creating a Zendesk source connector using the Platform user interface.

## Overview

[Zendesk](https://www.zendesk.com) is a popular customer service solution and sales tool.

This Adobe Experience Platform [sources](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) that returns users information into Experience Platform from Zendesk for further processing.

Zendesk uses bearer tokens as an authentication mechanism to communicate with the Zendesk API.

## Prerequisites

Before you start configuring the extension you need to have a Zendesk Support account. If you do not have one already go to the Zendesk [register](https://www.zendesk.com/register/) page to register and create your Zendesk account.

### Gather required credentials

In order to connect Zendesk to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| subdomain | Unique domain specific to your account created during the registration process. <br/><br/> Refer to the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4409381383578-Where-can-I-find-my-Zendesk-subdomain-) if you require any guidance. | *xxxxx.zendesk.com*|
| API token | Zendesk API token.<br></br>Navigate to the Zendesk website and access **[!UICONTROL Settings]** > **[!UICONTROL Apps and Integrations]** > **[!UICONTROL Zendesk API]** page, Next to the **[!UICONTROL API Tokens]** section. <br/><br/> Refer to the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token).|*0lZnClEvkJSTQ7olGLl7PMhVq99gu26GTbJtf*|

![Zendesk API token](../../../../images/tutorials/create/zendesk/zendesk-api-tokens.png?lang=en)

Finally, create a Platform [schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html) required for the Zendesk Search API. Refer also to the [limits](#limits) section further below on this page.
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

1. Next, select the dataflow run ID of the dataflow that you want to view, to see specific details about that dataflow run.
![Dataflow page](../../../../images/tutorials/create/zendesk/dataflow-monitoring.png?lang=en)

1. Finally, select the **[!UICONTROL Preview dataset]** button to display the data that was ingested.
![Zendesk dataset](../../../../images/tutorials/create/zendesk/preview-dataset.png?lang=en)

1. You can verify this data against the data on the Zendesk > Customers page.
![Zendesk customers](../../../../images/tutorials/create/zendesk/zendesk-customers.png?lang=en)

### Zendesk schema

* The table below lists the supported mappings that must be set up for Zendesk. 
* Click [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) for the link to the API.

   | Source | Type |
   |---|---|
   |results.active|Boolean|
   |results.alias|String|
   |results.created_at|String|
   |results.custom_role_id|Integer|
   |results.default_group_id|Integer|
   |results.details|String|
   |results.email|String|
   |results.external_id|Integer|
   |results.iana_time_zone|String|
   |results.id|Integer|
   |results.last_login_at|String|
   |results.locale|String|
   |results.locale_id|Integer|
   |results.moderator|Boolean|
   |results.name|String|
   |results.notes|String|
   |results.only_private_comments|Boolean|
   |results.organization_id|Integer|
   |results.phone|String|
   |results.photo|String|
   |results.report_csv|Boolean|
   |results.restricted_agent|Boolean|
   |results.result_type|String|
   |results.role|String|
   |results.role_type|Integer|
   |results.shared|Boolean|
   |results.shared_agent|Boolean|
   |results.shared_phone_number|Boolean|
   |results.signature|String|
   |results.suspended|Boolean|
   |results.ticket_restriction|String|
   |results.time_zone|String|
   |results.two_factor_auth_enabled|Boolean|
   |results.updated_at|String|
   |results.url|String|
   |results.verified|Boolean|

### Limits {#limits}

* The [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) returns a maximum of 1000 records per page. 
    * The value for the ``filter[type]`` parameter is set to ``user`` and hence the Zendesk connection only returns users.
    * The number of results per page is managed by the ``page[size]`` parameter. The value is set to ``100``. This is done to reduce the impact of speed reduction constraints set by Zendesk.
    * See [Limits](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#limits) and [Pagination](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#pagination-1). 
    * You can also refer to [Paginating through lists using cursor pagination](https://developer.zendesk.com/documentation/developer-tools/pagination/paginating-through-lists-using-cursor-pagination/).