---
title: Create a source connection and dataflow to stream LAVA data using the UI
description: Learn how to stream data from LAVA to Adobe Experience Platform using the UI.
badge: beta
hide: true
---
# Create a source connection and dataflow to stream [!DNL LAVA] data using the UI

This tutorial provides steps for creating a [!DNL LAVA.ai] source connector using the Experience Platform user interface.

>[!IMPORTANT]
>
>This documentation page was created by the [!DNL LAVA] team. For any inquiries or update requests, please contact them directly at [info@lava.ai](mailto:info@lava.ai).

## Connect your [!DNL LAVA] account

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **Streaming** category, select [!DNL LAVA], and then select **[!UICONTROL Add data]**.

![The Experience Platform sources catalog](../../../../images/tutorials/create/lava/catalog.png)

## Select data

The **[!UICONTROL Select data]** step appears, providing an interface for you to select the data that you bring to Platform.

* The left part of the interface is a browser that allows you to view the available data streams within your account;
* The right part of the interface lets you preview up to 100 rows of data from a JSON file.

Select **[!UICONTROL Upload files]** to upload a JSON file from your local system, upload the sample file from the Overview section corresponding to the data set you are setting up. Alternatively, you can drag and drop the JSON file you want to upload into the [!UICONTROL Drag and drop files] panel.

![The add data step of the sources workflow.](../../../../images/tutorials/create/lava/add-data.png)

Once your file uploads, the preview interface updates to display a preview of the schema you uploaded. The preview interface allows you to inspect the contents and structure of a file. You can also use the [!UICONTROL Search field] utility to access specific items from within your schema.

When finished, select **[!UICONTROL Next]**.

![The preview step of the sources workflow.](../../../../images/tutorials/create/lava/preview.png)

## Dataflow detail

The **Dataflow detail** step appears, providing you with options to use an existing dataset or establish a new dataset for your dataflow, as well as an opportunity to provide a name and description for your dataflow. During this step, you can also configure settings for Profile ingestion, error diagnostics, partial ingestion, and alerts.

When finished, select **[!UICONTROL Next]**.

![The dataflow-detail step of the sources workflow.](../../../../images/tutorials/create/lava/dataflow-detail.png)

## Mapping

The [!UICONTROL Mapping] step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

If you are using [!DNL LAVA]'s provided schema, we recommended the following mapping:

>[!BEGINTABS]

>[!TAB Member Profiles]

| [!DNL LAVA] Source Connector Field | [!DNL LAVA] Profile Schema Field |
| --- | --- |
| `lavaId` | `_tenant.lavaId` |
| `firstName` | `person.name.firstName` |
| `lastName` | `person.name.lastName` |
| `email` | `personalEmail.address` |
| `phone` | `mobilePhone.number` |

>[!TAB Member Balances]

| [!DNL LAVA] Source Connector Field | [!DNL LAVA] Profile Schema Field |
| --- | --- |
| `lavaId` | `_tenant.lavaId` |
| `balances[]` | `_tenant.balances[]` |

>[!TAB Ticket Scan Events]

| [!DNL LAVA] Source Connector Field | [!DNL LAVA] Event Schema Field |
| --- | --- |
| calculated field `to_map("LavaId",to_array(false,to_object("id",lavaId,"primary",true)))` | `identityMap` |
| `eventId` | `_tenant.ticketScan.eventId` |
| `eventName` | `_tenant.ticketScan.eventName` |
| `eventLabel` | `_tenant.ticketScan.eventLabel` |
| `venue` | `_tenant.ticketScan.venue` |
| `venueLabel` | `_tenant.ticketScan.venueLabel` |
| `section` | `_tenant.ticketScan.section` |
| `sectionLabel` | `_tenant.ticketScan.sectionLabel` |
| `row` | `_tenant.ticketScan.row` |
| `seat` | `_tenant.ticketScan.seat` |
| `gate` | `_tenant.ticketScan.gate` |
| `gateLabel` | `_tenant.ticketScan.gateLabel` |
| `type` | `eventType` |
| `timestamp` | `timestamp` |

>[!ENDTABS]

Alternatively, you can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](https://experienceleague.adobe.com/docs/experience-platform/data-prep/ui/mapping.html).

Once your source data is successfully mapped, select **[!UICONTROL Next]**.

![The mapping step of the sources workflow.](../../../../images/tutorials/create/lava/mapping.png)

## Review

The **[!UICONTROL Review]** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![The review step of the sources workflow.](../../../../images/tutorials/create/lava/review.png)

## Get your streaming endpoint URL and Dataflow ID

With your streaming dataflow created, you can now retrieve your streaming endpoint URL and Dataflow ID. These will be used to configure [!DNL LAVA], allowing your streaming source to communicate with Experience Platform. 

To retrieve your streaming endpoint, go to the [!UICONTROL Dataflow activity] page of the dataflow that you just created and copy the endpoint from the bottom of the [!UICONTROL Properties] panel.

![The streaming endpoint in dataflow activity.](../../../../images/tutorials/create/lava/endpoint-test.png)

### Integrate [!DNL LAVA] with your webhook

In the [LAVA Console](https://app.lava.ai/) navigate to **[!UICONTROL Resources > Data Export]**.

![Data export menu](../../../../images/tutorials/create/lava/data-export-menu.png)

Click **[!UICONTROL Create New Export]**. Select **[!UICONTROL Adobe Source Connector]** as the destination type, and the desired source data to send. Use the streaming endpoint URL and dataflow ID.

![Create new export](../../../../images/tutorials/create/lava/create-export.png)
