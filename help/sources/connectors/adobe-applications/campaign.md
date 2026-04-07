---
keywords: Experience Platform;home;popular topics;Adobe Campaign Managed Cloud Services;campaign;campaign managed services
title: Adobe Campaign Managed Cloud Services
description: Learn how to connect Campaign Managed Cloud Services to Experience Platform using the user interface
exl-id: 8f18bf73-ebf1-4b4e-a12b-964faa0e24cc
---
# Adobe Campaign Managed Cloud Services

Adobe Campaign Managed Cloud Services offers a managed platform for designing cross-channel customer experiences, supporting visual campaign orchestration, real-time interaction management, and cross-channel execution. For more details, see the [Adobe Campaign v8 documentation](https://experienceleague.adobe.com/docs/campaign/campaign-v8/campaign-home.html).

The Adobe Campaign Managed Cloud Services source connector allows you to ingest delivery and tracking log data from Adobe Campaign v8 into Adobe Experience Platform. This connector operates as a batch source within the Platform.

## Prerequisites 

Before you can create a source connection to bring your Campaign v8 to Experience Platform, you must first complete the following prerequisites:

* [Set up your event log import using the Adobe Campaign client console](#view-delivery-and-tracking-log-data)
* [Create an XDM ExperienceEvent schema](#create-a-schema)
* [Create a dataset](#create-a-dataset)

### View delivery and tracking log data {#view-delivery-and-tracking-log-data}

>[!IMPORTANT]
>
>You must have access to the Adobe Campaign v8 Client Console in order to view your log data in Campaign. Visit the [Campaign v8 documentation](https://experienceleague.adobe.com/docs/campaign/campaign-v8/deploy/connect.html) for information on how to download and install the client console.

Log in to your Campaign v8 instance through the Client Console. Under the [!DNL Explorer] tab, select [!DNL Administration] and then select [!DNL Configuration]. Next, select [!DNL Data schemas] and then apply the `broadLog` filter for name or label. In the list that appears, select the recipient delivery logs source schema with the name `broadLogRcp`.

![The Adobe Campaign v8 client console with Explorer tab selected, the Administration, Configuration, and Data schemas nodes expanded and filtering set to "broad".](./images/campaign/explorer.png)

Next, select the **Data** tab.

![The Adobe Campaign v8 client console with the data tab selected.](./images/campaign/data.png)

Right-click/keystroke in the data panel to open the contextual menu. From here, select **Configure list...**

![The Adobe Campaign v8 client console with the contextual menu open and the Configure list option selected.](./images/campaign/configure.png)

The list configuration window appears, providing you with an interface where you can add any desired fields to the pre-existing list to view the data in the data panel. 

![A list of configurations for recipient delivery logs that can be added for viewing.](./images/campaign/list-configuration.png)

Now you can view your recipient delivery logs, including the configuration fields added in the previous step.

>[!TIP]
>
>You can repeat the same steps, but filter for `tracking` to view your tracking log data.

![The recipient delivery logs displayed with information on its last modified name, delivery channel, internal delivery name, and label.](./images/campaign/recipient-delivery-logs.png)

### Create a schema {#create-a-schema}

Next, create an XDM ExperienceEvent schema for both delivery logs and tracking logs. You must apply the Campaign Delivery Logs field group to your delivery logs schema and the Campaign Tracking Logs field group to your tracking logs schema. You must also define the `externalID` field as the primary identity of your schema.

>[!NOTE]
>
>Your XDM ExperienceEvent schema must be Profile-enabled in order to ingest your Campaign data to [!DNL Real-Time Customer Profile].

For detailed instructions on how to create a schema, read the guide on [creating an XDM schema in the UI](../../../xdm/tutorials/create-schema-ui.md).

### Create a dataset {#create-a-dataset}

Finally, you must create a dataset for your schemas. For detailed instructions on how to create a dataset, read the guide on [creating a dataset in the UI](../../../catalog/datasets/user-guide.md).

## Expected latency for Adobe Campaign Managed Cloud Services source {#latency}

End‑to‑end latency from a Campaign event to data availability in Experience Platform is typically 15–30 minutes in standard configurations (including 15‑minute replication, micro‑batch export, and a scheduled Experience Platform dataflow), assuming normal data volumes and no backlog. This is a near‑real‑time process achieved through scheduled micro‑batch synchronization (usually on the order of tens of minutes), but it is not continuous streaming.

| Scenario | Details | Expected latency |
| --- | --- | --- |
| Campaign event is generated in a mid-sourcing / message center instance | A delivery or tracking event (send, open, click, etc.) occurs on a Campaign v8 execution (mid / message center) node. | Real time within Campaign runtime (currently not visible in Experience Platform). |
| Replication from runtime to Campaign marketing database | Event data is replicated from mid/message center to the Campaign marketing database ([!DNL Snowflake] or [!DNL Postgres], depending on customer size). Standard integration patterns assume a regular replication job. | ~15 minutes, based on the the standard 15-minute replication cadence. |
| Export from Campaign marketing database to landing zone (such as [!DNL Data Landing Zone], [!DNL Amazon S3] or [!DNL Azure Blob]) | An export workflow (Export Service) in Campaign runs on a schedule to extract new/changed delivery and tracking logs and write them as micro‑batches to a file‑based landing zone. | Minutes, plus the export schedule interval. |
| Experience Platform source dataflow picks up exported files | The Adobe Campaign Managed Cloud Services source is configured as a batch dataflow in Experience Platform [!DNL Flow Service]. It periodically scans the landing zone, ingests new files, and writes them into the configured ExperienceEvent dataset(s). Monitoring exposes "successful batches" and "failed batches". | Minutes, plus the dataflow schedule interval. |
| Data available in data lake and Real-Time Customer Profile | Once the batch is ingested, records are landed in the data lake and (if the dataset is profile‑enabled) upserted into Real‑Time Customer Profile. Standard Experience Platform SLAs for batch ingestion and profile ingestion apply | Within the same run window as the dataflow, i.e., shortly after the batch run completes. Records typically become available in minutes for downstream services. |

{style="table-layout:auto"}

## Create an Adobe Campaign Managed Cloud Services source connection using the Experience Platform UI

Now that you have accessed your data logs in the Campaign client console, created a schema, and a dataset, you can now proceed to create a source connection to bring your Campaign Managed Services data to Experience Platform.

For detailed instructions on how to bring your Campaign v8 delivery logs and tracking logs data to Experience Platfrom, read the guide on [creating a Campaigned Managed Services source connection in the UI](../../tutorials/ui/create/adobe-applications/campaign.md).

>[!IMPORTANT]
>
>There is an edge-case where the interaction of a recently removed email recipient with an email could re-ingest personal information into Experience Platform. In some cases, this could re-enable marketing to that user.
>
>* This scenario is only active between the time a privacy request has been executed in Experience Platform and the time it has been executed in Adobe Campaign Classic. After the request is executed in Campaign, there is a check to ensure the record is not exported to Campaign. Please re-issue a GDPR request after 72 hours of the execution, to resolve this.
