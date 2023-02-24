---
title: Create a Chatlio Source Connection in the UI 
description: Learn how to create a Chatlio source connection using the Adobe Experience Platform UI.
badge: "Beta"
---
# Create a [!DNL Chatlio] source connection in the UI

>[!NOTE]
>
>The [!DNL Chatlio] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

This tutorial provides steps for creating a [!DNL Chatlio] source connection using the Adobe Experience Platform user interface.

## Getting started {#getting-started}

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Prerequisites {#prerequisites}

The following section provides information on prerequisites to complete before you can create a [!DNL Chatlio] source connection.

### Sample JSON to define the source schema for [!DNL Chatlio] {#prerequisites-json-schema}

Before creating a [!DNL Chatlio] source connection, you will require a source schema to be provided. You can use the JSON below.

```
{
  "visitor": {
    "email": "test@example.com",
    "UUID": "2d3f4260-2235-903b-0a82-a23d326cc257"
  },
   "message": "Hi",
  "channelId": "C04J7M7LCMQ",
  "slackChannelName": "aep",
  "slackChannelId": "C04JVR71WKS"
}
```

### Create a Platform schema for [!DNL Chatlio] {#create-platform-schema}

You must also ensure that you create a Platform schema to use for your source. Read the tutorial on [creating a Platform schema](../../../../../xdm/schema/composition.md) for comprehensive steps on how to create a schema.

![The Platform UI showing an example schema for Chatlio](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/schema.png)

## Connect your [!DNL Chatlio] account {#connect-account}

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace and see a catalog of sources available in Experience Platform.

Use the *[!UICONTROL Categories]* menu to filter sources by category. Alternatively, enter a source name in the search bar to find a specific source from the catalog.

Go to the [!UICONTROL Marketing automation] category to see the [!DNL Chatlio] source card. To begin, select **[!UICONTROL Add data]**.

![The Platform UI catalog with Chatlio card](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/catalog.png)

## Select data {#select-data}

The **[!UICONTROL Select data]** step appears, providing an interface for you to select the data that you want to bring to Platform.

* The left part of the interface is a browser that allows you to view the available data streams within your account;
* The right part of the interface lets you preview up to 100 rows of data from a JSON file.

Select **[!UICONTROL Upload files]** to upload a JSON file from your local system. Alternatively, you can drag and drop the JSON file you want to upload into the [!UICONTROL Drag and drop files] panel.

![The add data step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/add-data.png)

Once your file uploads, the preview interface updates to display a preview of the schema you uploaded. The preview interface allows you to inspect the contents and structure of a file. You can also use the [!UICONTROL Search field] utility to access specific items from within your schema.

When finished, select **[!UICONTROL Next]**.

![The preview step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/preview.png)

## Dataflow detail {#dataflow-detail}

The **Dataflow detail** step appears, providing you with options to use an existing dataset or establish a new dataset for your dataflow, as well as an opportunity to provide a name and description for your dataflow. During this step, you can also configure settings for Profile ingestion, error diagnostics, partial ingestion, and alerts.

When finished, select **[!UICONTROL Next]**.

![The dataflow-detail step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/dataflow-detail.png)

## Mapping {#mapping}

The [!UICONTROL Mapping] step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](../../../../../data-prep/ui/mapping.md).

The mappings listed below are mandatory and should be setup before proceeding to the [!UICONTROL Review] stage.

| Target Field | Description |
| --- | --- |
| `UUID` | The [!DNL Chatlio] identifier for the event. |

Once your source data is successfully mapped, select **[!UICONTROL Next]**.

![The mapping step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/mapping.png)

## Review {#review}

The **[!UICONTROL Review]** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![The review step of the sources workflow.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/review.png)

## Get your streaming endpoint URL {#get-streaming-endpoint-url}

With your streaming dataflow created, you can now retrieve your streaming endpoint URL. This endpoint will be used to subscribe to your webhook, allowing your streaming source to communicate with Experience Platform. 

In order to construct the URL used to configure the webhook on [!DNL Chatlio] you must retrieve the following:

* **[!UICONTROL Dataflow ID]**
* **[!UICONTROL Streaming endpoint]**

To retrieve your **[!UICONTROL Dataflow ID]** and **[!UICONTROL Streaming endpoint]**, go to the [!UICONTROL Dataflow activity] page of the dataflow that you just created and copy the details from the bottom of the [!UICONTROL Properties] panel.

![The streaming endpoint in dataflow activity.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/endpoint-test.png)

Once you have retrieved your streaming endpoint and dataflow ID, build a URL based on the following pattern: ```{STREAMING_ENDPOINT}?x-adobe-flow-id={DATAFLOW_ID}```. For example, a constructed webhook URL may look like: ``https://dcs.adobedc.net/collection/d56b47ee3985104beaf724efcd78a3e1a863d720471a482bebac0acc1ab95983``

## Set up webhook in [!DNL Chatlio] {#set-up-webhook}

With your webhook URL created, you can now set up your webhook using the [!DNL Chatlio] user interface. 

Login to your [[!DNL Chatlio]](https://chatlio.com/) account and follow [the guide on setup and installation](https://chatlio.com/docs/setup/) to create a widget.

Once a widget is crated, navigate to the widget's settings page to add your webhook URL to that widget.

![The webhook settings page on Chatlio.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/widget-settings.png)

Next, select the **[!DNL Behavior]** tab and add your webhook URL to the *[!DNL Webhook when a new conversation starts]* field and any other webhook events fields that you want to subscribe to.

![The Chatlio UI showing the webhook endpoint field.](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/webhook.png)

>[!TIP]
>
>You can subscribe to a variety of different events for your [!DNL Chatlio] webhook. For more information on the different events, please refer to the the [[!DNL Chatlio] events documentation](https://chatlio.com/docs/webhooks/).

## Next steps {#next-steps}

By following this tutorial you have successfully configured a streaming dataflow to bring your [!DNL Chatlio] data to Experience Platform. To monitor the data that is being ingested, refer to the guide on [monitoring streaming dataflows using Platform UI](../../monitor-streaming.md).

## Additional resources {#additional-resources}

The sections below provide additional resources that you can refer to when using the [!DNL Chatlio] source.

### Validation {#validation}

To validate that you have correctly set up the source and [!DNL Chatlio] messages are being ingested, follow the steps below:

* You can check the [!DNL Chatlio] **[!UICONTROL Reports]** > **[!UICONTROL Chat History]** page to identify the events being captured by [!DNL Chatlio].

![Chatlio UI screenshot showing chat history](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/chatlio-chat-history.png)

* In the Platform UI, select **[!UICONTROL View Dataflows]** beside the [!DNL Chatlio] card menu on the sources catalog. Next, select **[!UICONTROL Preview dataset]** to verify the data that was ingested for the webhooks that you have configured within [!DNL Chatlio].

![Platform UI screenshot showing ingested events](../../../../images/tutorials/create/marketing-automation/chatlio-webhook/platform-dataset.png)

For additional information on [!DNL Chatlio], visit the [[!DNL Chatlio] documentation](https://chatlio.com/docs/) and [FAQ](https://chatlio.com/pricing/#FAQ).