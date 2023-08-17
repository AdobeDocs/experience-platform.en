---
keywords: Experience Platform;home;popular topics; notifications
description: By subscribing to Adobe I/O Events, you can use webhooks to receive notifications regarding the flow-run statuses of your source connections. These notifications contain information about the success of your flow run or errors that contributed to a run's failure.
solution: Experience Platform
title: Flow Run Notifications
exl-id: 0f1cde97-3030-4b8e-be08-21f64e78b794
---
# Flow run notifications

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/) is used to collect and centralize customer data from various disparate sources within [!DNL Platform]. The service provides a user interface and RESTful API from which all supported sources are connectable.

With Adobe I/O Events, you can subscribe to events and use webhooks to receive notifications regarding the status of your flow runs. These notifications contain information about the success of your flow run or errors that contributed to a run's failure.

This document provides steps on how to subscribe to events, register webhooks, and receive notifications containing information on the status of your flow runs.

## Getting started

This tutorial assumes that you have already created at least one source connection whose flow runs you want to monitor. If you have not yet configured a source connection, start by visiting the [sources overview](./home.md) to configure the source of your choice before returning to this guide.

This document also requires a working understanding of webhooks and how to connect a webhook from one application to another. Refer to the [[!DNL I/O Events] documentation](https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhook_docs_intro.md) for an introduction to webhooks.

## Register a webhook for flow run notifications

In order to receive flow run notifications, you must use Adobe Developer Console to register a webhook to your [!DNL Experience Platform] integration.

Follow the tutorial on [subscribing to [!DNL I/O Event] notifications](../observability/alerts/subscribe.md) for detailed steps on how to accomplish this.

>[!IMPORTANT]
>
>During the subscription process, ensure that you select **[!UICONTROL Platform notifications]** as the event provider, and select the following event subscriptions:
>
>* **[!UICONTROL Experience Platform Source's Flow Run Succeeded]**
>* **[!UICONTROL Experience Platform Source's Flow Run Failed]**

## Receive flow run notifications

With your webhook connected and your event subscription complete, you can start receiving flow run notifications through the webhook dashboard.

A notification returns information such as the number of ingestion jobs run, file size, and errors. A notification also returns a payload associated with your flow run in JSON format. The response payload can either be classified as `sources_flow_run_success` or `sources_flow_run_failure`.

>[!IMPORTANT]
>
>If partial ingestion is enabled during the flow creation process, a flow that contains both successful and failed ingestions will be marked as `sources_flow_run_success` only if the number of errors is below the error threshold percentage set during the flow creation process. If a successful flow run contains errors, these errors will still be included as part of the return payload.

### Success

A successful response returns a set of `metrics` that define characteristics of a specific flow run and `activities` that outline how data is transformed.

```json
{
  "event_id": "aec55616-1715-487f-8044-ba648cc8ffee",
  "event": {
    "createdAt": 1597213529158,
    "updatedAt": 1597213530760,
    "createdBy": "{CREATED_BY}",
    "updatedBy": "{UPDATED_BY}",
    "createdClient": "{CREATED_CLIENT}",
    "updatedClient": "{UPDATED_CLIENT}",
    "sandboxId": "7127a4f0-def8-11e9-83ce-e79494b1c2a5",
    "sandboxName": "prod",
    "imsOrgId": "{ORG_ID}",
    "id": "933cf9f4-cf01-4d75-bcf9-f4cf010d750a",
    "flowId": "1c6f1047-dcaf-48fe-af10-47dcaf08feaf",
    "providerRefId": "test1234",
    "etag": "\"5100ec97-0000-0200-0000-5f338b5b0000\"",
    "metrics": {
      "durationSummary": {
        "startedAtUTC": 1590512053,
        "completedAtUTC": 1590512053
      },
      "sizeSummary": {
        "inputBytes": 2048,
        "outputBytes": 1024
      },
      "recordSummary": {
        "inputRecordCount": 100,
        "outputRecordCount": 70
      },
      "fileSummary": {
        "inputFileCount": 10,
        "outputFileCount": 10
      },
      "statusSummary": {
        "status": "success"
      }
    },
    "activities": [
      {
        "id": "copyActivity",
        "updatedAtUTC": 87473822,
        "durationSummary": {
          "startedAtUTC": 1590512053,
          "completedAtUTC": 1590512053
        },
        "sizeSummary": {
          "inputBytes": 2048,
          "outputBytes": 1098
        },
        "recordSummary": {
          "inputRecordCount": 100,
          "outputRecordCount": 100
        },
        "fileSummary": {
          "inputFileCount": 10,
          "outputFileCount": 10
        },
        "statusSummary": {
          "status": "success",
          "extensions": {
            "adf/pipeline/id": "abcd",
            "adf/run/id": "1234"
          }
        },
        "sourceInfo": [
          {
            "id": "sourceConnectionId1",
            "type": "SourceConnection",
            "reference": {
              "type": "AdfRunId"
            }
          }
        ]
      },
      {
        "id": "promotionActivity",
        "updatedAtUTC": 87473822,
        "durationSummary": {
          "completedAtUTC": 1590512053
        },
        "sizeSummary": {
          "inputBytes": 1098,
          "outputBytes": 1024
        },
        "recordSummary": {},
        "fileSummary": {
          "inputFileCount": 10,
          "outputFileCount": 10,
          "extensions": {
            "manifest": {
              "fileInfo": "https://platform.adobe.io/data/foundation/export/batches/01E4TSJNM2H5M74J0XB8MFWDHK/meta?path=input_files"
            }
          }
        },
        "statusSummary": {
          "status": "success",
          "extensions": {
            "batchId": "b1",
            "acp_request_id": "1234"
          }
        },
        "targetInfo": [
          {
            "id": "targetConnectionId1",
            "type": "TargetConnection",
            "reference": {
              "type": "batch"
            }
          }
        ]
      }
    ],
    "slaCreatedAt": 1597213531124,
    "processStartTime": 1597213531213,
    "header": {
      "_adobeio": {
        "imsOrgId": "{ORG_ID}",
        "providerMetadata": "platform_notifications",
        "eventCode": "sources_flow_run_success"
      }
    },
    "transformedTime": 1597213531214
  }
}
```

| Property | Description |
| -------- | ----------- |
| `metrics` | Defines characteristics of the data in the flow run. |
| `activities` | Defines the different steps and activities that are performed to transform the data. |
| `durationSummary` | Defines the start and end time of the flow run. |
| `sizeSummary` | Defines the volume of the data in bytes. |
| `recordSummary` | Defines the record count of the data. |
| `fileSummary` | Defines the file count of the data. |
| `fileInfo` | A URL that leads to an overview of the successfully ingested files. |
| `statusSummary` | Defines whether the flow run is a success or a failure. |

### Failure

The following response is an example of a failed flow run, with an error occurring as the copied data is processed. Errors can also occur while data is being copied from the source. A failed flow run includes information about the errors that contributed to the run's failure, including its error and description.

```json
[
  {
    "messages": [
      {
        "msgType": "eventNotification",
        "version": "1.0",
        "timestamp": 1597434157622,
        "imsOrgId": "{ORG_ID}",
        "schema": {
          "name": "run-notification",
          "version": "1.0"
        },
        "provider": "FlowService",
        "_eventNotificationMeta": {
          "category": "Platform Notifications",
          "type": "sources_flow_run_failed"
        },
        "value": {
          "createdAt": 1597434147259,
          "updatedAt": 1597434157567,
          "createdBy": "{CREATED_BY}",
          "updatedBy": "{UPDATED_BY}",
          "createdClient": "{CREATED_CLIENT}",
          "updatedClient": "{UPDATED_CLIENT}",
          "sandboxId": "e49ebb00-d0fa-11e9-b164-ed6a398c8b35",
          "sandboxName": "prod",
          "imsOrgId": "{ORG_ID}",
          "id": "d9024c32-2174-4271-824c-322174627101",
          "flowId": "cf4fce79-8822-456d-8fce-798822556dc6",
          "etag": "\"0c003dbf-0000-0200-0000-5f36e92d0000\"",
          "metrics": {
            "durationSummary": {
              "startedAtUTC": 1597434147190
            },
            "sizeSummary": {
              "inputBytes": -1
            },
            "fileSummary": {
              "inputFileCount": -1
            },
            "statusSummary": {
              "status": "failed",
              "errors": [
                {
                  "code": "CONNECTOR-2001-500",
                  "message": "Error in processing (parsing, validation or transformation) the copied data."
                }
              ]
            }
          },
          "activities": [
            {
              "id": "promotionActivity",
              "updatedAtUTC": 1597434157529,
              "durationSummary": {
                "startedAtUTC": 1597434147190,
                "completedAtUTC": 1597434157212
              },
              "sizeSummary": {
                "inputBytes": -1
              },
              "recordSummary": {},
              "fileSummary": {
                "inputFileCount": -1,
                "extensions": {
                  "manifest": {
                    "fileInfo": "https://platform-stage.adobe.io/data/foundation/export/batches/6f6a900f-e40d-4f0e-9bb9-b614436c3465/meta?path=input_files"
                  }
                }
              },
              "statusSummary": {
                "status": "failed",
                "errors": [
                  {
                    "code": "CONNECTOR-2001-500",
                    "message": "Error in processing (parsing, validation or transformation) the copied data."
                  }
                ],
                "extensions": {
                  "errors": [
                    {
                      "code": "133",
                      "message": "We are unable to locate any files uploaded for this batch. Please upload files to ingest."
                    }
                  ]
                }
              },
              "targetInfo": [
                {
                  "id": "e88737aa-27b8-4795-8737-aa27b8f7959e",
                  "type": "TargetConnection",
                  "reference": {
                    "type": "Batch",
                    "ids": [
                      "6f6a900f-e40d-4f0e-9bb9-b614436c3465"
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  }
]
```

| Property| Description |
| ---------- | ----------- |
| `fileInfo` | A URL that leads to an overview of the files that were both successfully and unsuccessfully ingested. |

>[!NOTE]
>
>See the [appendix](#errors) for more information on error messages.

## Next steps

You can now subscribe to events that allow you to receive real-time notifications on your flow run statuses. For more information on flow runs and sources, see the [sources overview](./home.md).

## Appendix

The following sections provides additional information for working with flow run notifications.

### Understanding error messages {#errors}

Ingestion errors can happen when data is being copied from the source or when the copied data is being processed to [!DNL Platform]. See the table below for more information on specific errors.

| Error | Description |
| ---------- | ----------- |
| `CONNECTOR-1001-500` | An error occurred while data is being copied from a source. |
| `CONNECTOR-2001-500` | An error occurred while copied data is being processed to [!DNL Platform]. This error could be regarding parsing, validating, or transforming. |
