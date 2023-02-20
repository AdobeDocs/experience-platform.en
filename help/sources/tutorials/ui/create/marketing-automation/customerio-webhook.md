---
title: Create a Customer.io source connection in the UI 
description: Learn how to create a Customer.io source connection using the Adobe Experience Platform UI.
---
# (Beta) Create a [!DNL Customer.io] source connection in the UI

>[!NOTE]
>
>The [!DNL Customer.io] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

This tutorial provides steps for creating a [!DNL Customer.io] source connection using the Adobe Experience Platform user interface.

## Getting started {#getting-started}

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Prerequisites - Sample JSON to define source schema for [!DNL Customer.io] {#prerequisites-json-schema}

Before creating a [!DNL Customer.io] source connection, you will require a source schema to be provided. You can use the below JSON.

```
{
  "event_id": "01E4C4CT6YDC7Y5M7FE1GWWPQJ",
  "object_type": "customer",
  "metric": "subscribed",
  "timestamp": 1613063089,
  "data": {
    "customer_id": "42",
    "email_address": "test@example.com",
    "identifiers": {
      "id": "42",
      "email": "test@example.com",
      "cio_id": "d9c106000001"
    }
  }
}
```

### Create a Platform schema for [!DNL Customer.io]

Before creating a [!DNL Customer.io] source connection, you must also ensure that you first create a Platform schema to use for your source. See the tutorial on [creating a Platform schema](../../../../../xdm/schema/composition.md) for comprehensive steps on how to create a schema.

![Platform UI screenshot showing an example schema for Customer.io](../../../../images/tutorials/create/marketing-automation/customerio-webhook/schema.png)

### Integrate [!DNL Customer.io] with your webhook

## Connect your [!DNL Customer.io] account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Marketing automation* category, select **[!UICONTROL Customer.io]**, and then select **[!UICONTROL Add data]**.

![Platform UI screenshot for catalog with Customer.io card](../../../../images/tutorials/create/marketing-automation/customerio-webhook/catalog.png)

## Select data

The **[!UICONTROL Select data]** step appears, providing an interface for you to select the data that you bring to Platform.

* The left part of the interface is a browser that allows you to view the available data streams within your account;
* The right part of the interface lets you preview up to 100 rows of data from a JSON file.

Select **[!UICONTROL Upload files]** to upload a JSON file from your local system. Alternatively, you can drag and drop the JSON file you want to upload into the [!UICONTROL Drag and drop files] panel.

![The add data step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/customerio-webhook//add-data.png)

Once your file uploads, the preview interface updates to display a preview of the schema you uploaded. The preview interface allows you to inspect the contents and structure of a file. You can also use the [!UICONTROL Search field] utility to access specific items from within your schema.

When finished, select **[!UICONTROL Next]**.

![The preview step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/customerio-webhook//preview.png)

## Dataflow detail

The **Dataflow detail** step appears, providing you with options to use an existing dataset or establish a new dataset for your dataflow, as well as an opportunity to provide a name and description for your dataflow. During this step, you can also configure settings for Profile ingestion, error diagnostics, partial ingestion, and alerts.

When finished, select **[!UICONTROL Next]**.

![The dataflow-detail step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/customerio-webhook//dataflow-detail.png)

## Mapping

The [!UICONTROL Mapping] step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](https://experienceleague.adobe.com/docs/experience-platform/data-prep/ui/mapping.html).

All the mappings listed below are mandatory and should be setup before proceeding to the [!UICONTROL Review] stage.

| Target Field | Description |
| --- | --- |
| `object_type` | Object Type, refer to the [!DNL Customer.io] [events](https://customer.io/docs/webhooks/#events) documentation for the supported types. |
| `id` | Object Id. |
| `email` | Email address associated with the object. |
| `event_id` | Unique identifier of the event. |
| `cio_id` | [!DNL Customer.io] identifier for the event.|
| `metric` | Event Type, refer to the [!DNL Customer.io] [events](https://customer.io/docs/webhooks/#events) documentation for the supported types. |
| `timestamp` | Timestamp when the event occurred. |

>[!NOTE]
>
> Do not map `cio_id` when executing [!DNL Customer.io] webhook in the `test mode` as there will be no associated field sent from [!DNL Customer.io].

Once your source data is successfully mapped, select **[!UICONTROL Next]**.

![The mapping step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/customerio-webhook/mapping.png)

## Review

The **[!UICONTROL Review]** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![The review step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/customerio-webhook/review.png)

## Get your streaming endpoint URL {#get-streaming-endpoint-url}

With your streaming dataflow created, you can now retrieve your streaming endpoint URL. This endpoint will be used to subscribe to your webhook, allowing your streaming source to communicate with Experience Platform. 

Next, you will require to construct a URL using the API details generated within Platform which will be used to configure the webhook on [!DNL Customer.io].

Note down the values of the fields below: 
* **[!UICONTROL Dataflow ID]**
* **[!UICONTROL Streaming endpoint]**

To retrieve your **[!UICONTROL Dataflow ID]** and **[!UICONTROL Streaming endpoint]**, go to the [!UICONTROL Dataflow activity] page of the dataflow that you just created and copy the details from the bottom of the [!UICONTROL Properties] panel.

![The streaming endpoint in dataflow activity.](../../../../images/tutorials/create/marketing-automation/customerio-webhook/endpoint-test.png)

Construct a URL using these values following the pattern below:
```{STREAMING_ENDPOINT}?x-adobe-flow-id={DATAFLOW_ID}```

Example of a constructed webhook URL: ``https://dcs.adobedc.net/collection/febc116d22ba0ea2868e9c93b199375302afb8a589617700991bb8f3f0341ad7?x-adobe-flow-id=439b3fc4-3042-4a3a-b5e0-a494898d3fb0``

## Next steps {#next-steps}

By following this tutorial you have successfully [configured a dataflow to bring data into Platform](https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/dataflow/crm.html).

Next, login to your account on [[!DNL Customer.io]](https://customer.io/) and create a reporting webhook by following this [tutorial](https://customer.io/docs/webhooks/#setup).

Use the URL that was constructed in the [!UICONTROL WEBHOOK ENDPOINT] field.
![[DNL Customer.io] UI screenshot showing the webhook endpoint field](../../../../images/tutorials/create/marketing-automation/customerio-webhook/webhook.png)

Refer to the [!DNL Customer.io] [events](https://customer.io/docs/webhooks/#events) documentation section to understand in detail on the various events that can be selected, each events' message will be ingested into Platform when any [!DNL Customer.io] action event trigger criteria are satisfied.

## Additional resources

The sections below provide additional resources that you can refer to when using the [DNL Customer.io] source.

### Guardrails {#guardrails}

Refer to the [DNL Customer.io] [Timeouts and failures](https://customer.io/docs/webhooks/#timeouts-and-failures) page.

### Validation {#validation}

To validate that you have correctly set up the source and [!DNL Customer.io] messages are being ingested, follow the steps below:

* You can check the [!DNL Customer.io] **[!UICONTROL Activity Logs]** page to identify the events being captured by [!DNL Customer.io].
![Customer.io UI screenshot showing activity logs](../../../../images/tutorials/create/marketing-automation/customerio-webhook/activity-logs.png)

* In the Platform UI, select **[!UICONTROL View Dataflows]** beside the [!DNL Customer.io] card menu on the sources catalog. Next, select **[!UICONTROL Preview dataset]** to verify the data that was ingested for the events that you have selected within [!DNL Customer.io].
![Platform UI screenshot showing ingested events](../../../../images/tutorials/create/marketing-automation/customerio-webhook/platform-dataset.png)
