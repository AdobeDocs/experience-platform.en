---
title: Create a Zendesk Source Connection in the UI
description: Learn how to create a Zendesk source connection using the Adobe Experience Platform UI.
exl-id: 75d303b0-2dcd-4202-987c-fe3400398d90
---
# Create a [!DNL Zendesk] source connection in the UI

This tutorial provides steps for creating a [!DNL Zendesk] source connection using the Adobe Experience Platform user interface.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

### Gather required credentials

In order to access your [!DNL Zendesk] account on Platform, you must provide values for the following credentials:

| Credential | Description | Example |
| --- | --- | --- |
| Subdomain | The unique domain specific to your account created during the registration process. | `yoursubdomain`|
| Access token | Zendesk API token. |`0lZnClEvkJSTQ7olGLl7PMhVq99gu26GTbJtf` |

For more information on authenticating your [!DNL Zendesk] source, see the [[!DNL Zendesk] source overview](../../../../connectors/customer-success/zendesk.md).

![Zendesk API token](../../../../images/tutorials/create/zendesk/zendesk-api-tokens.png)

### Create a Platform schema for [!DNL Zendesk]

Before creating a [!DNL Zendesk] source connection, you must also ensure that you first create a Platform schema to use for your source. See the tutorial on [creating a Platform schema](../../../../../xdm/schema/composition.md) for comprehensive steps on how to create a schema.

For additional guidance on your [!DNL Zendesk] schema required for the [!DNL Zendesk Search API], refer to the [limits](#limits) section below.

![Create Schema](../../../../images/tutorials/create/zendesk/schema.png)

## Connect your [!DNL Zendesk] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Customer Success* category, select **[!UICONTROL Zendesk]**, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/zendesk/catalog.png)

The **[!UICONTROL Connect Zendesk account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the *Zendesk* account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/zendesk/existing.png)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/zendesk/new.png)

### Select data

Once your source is authenticated, the page updates into an interactive schema tree that allows you to explore and inspect the hierarchy of your data. Select **[!UICONTROL Next]** to proceed.

![select-data](../../../../images/tutorials/create/zendesk/select-data.png)

## Next steps

By following this tutorial, you have authenticated and created a source connection between your [!DNL Zendesk] account and Platform. You can now continue on to the next tutorial and [create a dataflow to bring customer success data into Platform](../../dataflow/customer-success.md).

## Additional resources

The sections below provides additional resources that you can refer to when using the [!DNL Zendesk] source.

### Validation {#validation}

The following outlines steps you can take to validate that you have successfully connected your [!DNL Zendesk] source and that [!DNL Zendesk] profiles are being ingested to Platform.

In the Platform UI, select **[!UICONTROL Datasets]** from the left navigation to access the [!UICONTROL Datasets] workspace. The [!UICONTROL Dataset Activity] screen displays the details of executions.

![Activity page](../../../../images/tutorials/create/zendesk/dataset-activity.png)

Next, select the dataflow run ID of the dataflow that you want to view to see specific details about that dataflow run.

![Dataflow page](../../../../images/tutorials/create/zendesk/dataflow-monitoring.png)

Finally, select **[!UICONTROL Preview dataset]** to display the data that was ingested.

![Zendesk dataset](../../../../images/tutorials/create/zendesk/preview-dataset.png)

You can also verify your Platform data against the data on your [!DNL Zendesk] > [!DNL Customers] page.

![zendesk-customers](../../../../images/tutorials/create/zendesk/zendesk-customers.png)

### Zendesk schema

The table below lists the supported mappings that must be set up for Zendesk. 

>[!TIP]
>
>See [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) for more information on the API.

| Source | Type |
|---|---|
| `results.active` | Boolean | 
| `results.alias` | String |
| `results.created_at` | String |
| `results.custom_role_id` | Integer |
| `results.default_group_id` | Integer |
| `results.details` | String |
| `results.email` | String |
| `results.external_id` | Integer |
| `results.iana_time_zone` | String |
| `results.id` | Integer |
| `results.last_login_at` | String |
| `results.locale` | String |
| `results.locale_id` | Integer |
| `results.moderator` | Boolean |
| `results.name` | String |
| `results.notes` | String |
| `results.only_private_comments` | Boolean |
| `results.organization_id` | Integer |
| `results.phone` | String |
| `results.photo` | String |
| `results.report_csv` | Boolean |
| `results.restricted_agent`| Boolean |
| `results.result_type` | String |
| `results.role` | String |
| `results.role_type` | Integer |
| `results.shared` | Boolean |
| `results.shared_agent` | Boolean |
| `results.shared_phone_number` | Boolean |
| `results.signature` | String |
| `results.suspended` | Boolean |
| `results.ticket_restriction` | String |
| `results.time_zone` | String |
| `results.two_factor_auth_enabled` | Boolean |
| `results.updated_at` | String |
| `results.url` | String |
| `results.verified` | Boolean |

{style="table-layout:auto"}

### Limits {#limits}

* The [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) returns a maximum of 1000 records per page. 
  * The value for the ``filter[type]`` parameter is set to ``user`` and hence the Zendesk connection only returns users.
  * The number of results per page is managed by the ``page[size]`` parameter. The value is set to ``100``. This is done to reduce the impact of speed reduction constraints set by Zendesk.
  * See [Limits](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#limits) and [Pagination](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#pagination-1). 
  * You can also refer to [Paginating through lists using cursor pagination](https://developer.zendesk.com/documentation/developer-tools/pagination/paginating-through-lists-using-cursor-pagination/).
