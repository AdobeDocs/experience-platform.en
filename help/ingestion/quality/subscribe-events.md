---
keywords: Experience Platform;home;popular topics;data ingestion notifications;notifications;subscribe events;data ingestion status events;status events;subscribe;status notifications;
solution: Experience Platform
title: Data Ingestion Notifications
topic-legacy: overview
description: To assist in monitoring the ingestion process, Adobe Experience Platform makes it possible to subscribe to a set of events that are published by each step of the process, notifying you to the status of the ingested data and any possible failures.
exl-id: fd34e1ab-f6f6-44f0-88ee-7020e9322c39
---
# Data ingestion notifications

The process of ingesting data into Adobe Experience Platform is comprised of multiple steps. Once you identify data files that need to be ingested into [!DNL Platform], the ingestion process begins and each step occurs consecutively until the data is either successfully ingested or fails. The ingestion process can be initiated using the [Adobe Experience Platform Data Ingestion API](https://www.adobe.io/experience-platform-apis/references/data-ingestion/) or using the [!DNL Experience Platform] user interface.

Data loaded into [!DNL Platform] must go through multiple steps in order to reach its destination, the [!DNL Data Lake] or the [!DNL Real-time Customer Profile] data store. Each step involves processing the data, validating the data, and then storing the data before passing it on to the next step. Depending on the amount of data being ingested, this can become a time consuming process and there is always a chance of the process failing due to validation, semantics, or processing errors. In the event of a failure, the data issues need to fixed and then the entire ingestion process must be restarted using the corrected data files. 

To assist in monitoring the ingestion process, [!DNL Experience Platform] makes it possible to subscribe to a set of events that are published by each step of the process, notifying you to the status of the ingested data and any possible failures. 

## Register a webhook for data ingestion notifications

In order to receive data ingestion notifications, you must use [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui) to register a webhook to your Experience Platform integration.

Follow the tutorial on [subscribing to [!DNL Adobe I/O Event] notifications](../../observability/alerts/subscribe.md) for detailed steps on how to accomplish this.

>[!IMPORTANT]
>
>During the subscription process, ensure that you select **[!UICONTROL Platform notifications]** as the event provider, and select the **[!UICONTROL Data ingestion notification]** event subscription when prompted.

## Receive data ingestion notifications

Once you have successfully registered your webhook and new data has been ingested, you can start receiving event notifications. These events can be viewed using the webhook itself, or by selecting the **[!UICONTROL Debug Tracing]** tab in your project's event registration overview in Adobe Developer Console.

The following JSON is an example of a notification payload that would be sent to your webhook in the case of a failed batch ingestion event:

```json
{
  "event_id": "93a5b11a-b0e6-4b29-ad82-81b1499cb4f2",
  "event": {
    "xdm:ingestionId": "01EGK8H8HF9JGFKNDCABHGA24G",
    "xdm:customerIngestionId": "01EGK8H8HF9JGFKNDCABHGA24G",
    "xdm:imsOrg": "{ORG_ID}",
    "xdm:completed": 1598374341560,
    "xdm:datasetId": "5e55b556c2ae4418a8446037",
    "xdm:eventCode": "ing_load_failure",
    "xdm:sandboxName": "prod",
    "sentTime": "1598374341595",
    "processStartTime": 1598374342614,
    "transformedTime": 1598374342621,
    "header": {
      "_adobeio": {
        "imsOrgId": "{ORG_ID}",
        "providerMetadata": "aep_observability_catalog_events",
        "eventCode": "platform_event"
      }
    }
  }
}
```

| Property | Description |
| --- | --- |
| `event_id` | A unique, system-generated ID for the notification. |
| `event` | An object which contains the details of the event that triggered the notification. |
| `event.xdm:datasetId` | The ID of the dataset to which the ingestion event applies. |
| `event.xdm:eventCode` | A status code indicating the type of event that was triggered for the dataset. See the [appendix](#event-codes) for specific values and their definitions. |

To view the full schema for event notifications, refer to the [public GitHub repository](https://github.com/adobe/xdm/blob/master/schemas/notifications/ingestion.schema.json).

## Next steps

Once you have registered [!DNL Platform] notifications to your project, you can view received events from the [!UICONTROL Project overview]. Refer to the guide on [tracing Adobe I/O Events](https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/support/tracing.md) for detailed instructions on how to trace your events.

## Appendix

The following section contains additional information about interpreting data ingestion notification payloads.

### Available status notification events {#event-codes}

The following table lists the available data ingestion status notifications that you can subscribe to. 

| Event code | Platform Service | Status | Event description |
| --- | ---------------- | ------ | ----------------- |
| `ing_load_success` | [!DNL Data Ingestion] | success | A batch was successful ingested into a dataset within the [!DNL Data Lake]. |
| `ing_load_failure` | [!DNL Data Ingestion] | failure | A batch failed to be ingested into a dataset within the [!DNL Data Lake]. |
| `ps_load_success` | [!DNL Real-time Customer Profile] | success | A batch was successful ingested into the [!DNL Profile] data store. |
| `ps_load_failure` | [!DNL Real-time Customer Profile] | failure | A batch failed to be ingested into the [!DNL Profile] data store. |
| `ig_load_success` | [!DNL Identity Service] | success | Data was successfully loaded into the identity graph. |
| `ig_load_failure` | [!DNL Identity Service] | failure | Data failed to be loaded into the identity graph. |

>[!NOTE]
>
>There is only one event topic provided for all data ingestion notifications. In order to distinguish between different statuses, the event code can be used.
