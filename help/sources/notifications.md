---
keywords: Experience Platform;home;popular topics; notifications
description: With the Adobe I/O Events, you can subscribe to events and use webhooks to receive notifications regarding the status of your flow runs. These notifications contain information about the success of your flow run or errors that contributed to a run's failure.
solution: Experience Platform
title: Flow run notifications
topic: overview
---

# Flow run notifications

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Flow Service](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

With Adobe I/O Events, you can subscribe to events and use webhooks to receive notifications regarding the status of your flow runs. These notifications contain information about the success of your flow run or errors that contributed to a run's failure.

This document provides steps on how to subscribe to events, register webhooks, and receive notifications containing information on the status of your flow runs.

## Getting started

This document requires a working understanding of the following components of Adobe Experience Platform:

*   [[!DNL Experience Data Model (XDM) System]](../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
*   [[!DNL Real-time Customer Profile]](../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
*   [Data ingestion](../ingestion/home.md): Data Ingestion represents the multiple methods by which [!DNL Platform] ingests data from these sources, as well as how that data is persisted within the Data Lake for use by downstream [!DNL Platform] services.
*   [[!DNL Observability]](../observability/home.md): Observability Insights is a RESTful API that allows you to expose key observability metrics in [!DNL Platform]. These metrics provide insights into [!DNL Platform] usage statistics, health-checks for [!DNL Platform] services, historical trends, and performance indicators for various [!DNL Platform] functionalities.

This document also requires a working understanding of webhooks and how to connect a webhook from one application to another. See the following [documentation](https://requestbin.com/blog/working-with-webhooks/) for more information on webhooks.

## Subscribe to events

The first step in receiving flow run notifications is to subscribe to events using [Adobe I/O Events](https://www.adobe.io/apis/experienceplatform/events.html).

Follow the steps outlined in the [data ingestion notifications](../ingestion/quality/subscribe-events.md) document to start subscribing to events.

> [!IMPORTANT]
> During the subscription process, ensure that you select [!DNL Platform] notifications as the event provider and **[!UICONTROL Experience Platform Source's Flow Run Succeeded]** and [**!UICONTROL Experience Platform Source's Flow Run Success Failed]** as event subscriptions when subscribing through the I/O console.

## Register your webhook

In order to receive notifications on the status of your flow run, you must register a webhook by specifying a unique webhook URL as part of your event registration details.

A webhook is a channel that allows for the real-time delivery of information from one application to another. To connect a webhook to your I/O Events subscription, visit the [webhook service](https://webhook.site/) and copy the unique URL provided.

![webhook-link](./images/notifications/webhook-url.png)

Once you have copied the webhook URL, paste the URL in the **[!UICONTROL Webhook URL]** textbox in the **[!UICONTROL Configure event registration]** step of the event subscription process. Select **[!UICONTROL Save configured events]** to continue.

![register-webhook](./images/notifications/register-webhook.png)

## Receive flow run notifications

With your webhook connected and your event subscription complete, you can start receiving flow run notifications through the webhook dashboard.

A notification returns information such as the number of ingestions made, file size, and a request's unique identifier. A notification also returns a payload associated with your flow run in JSON-format. The return payload can either be classified as `sources_flow_run_success` or `sources_flow_run_failure`.

> [!IMPORTANT]
> If partial ingestion is enabled during the flow creation process, a flow that contains both successful and failed ingestions will be marked as `sources_flow_run_success` only if the number of errors is below the error threshold percentage set during the flow creation process. If a successful flow run contains errors, these errors will still be included as part of the return payload.

![webhook-result](./images/notifications/webhook-result.png)

### Success

The following following response is an example of a successful flow run.

```json
{
  "event_id": "aec55616-1715-487f-8044-ba648cc8ffee",
  "event": {
    "createdAt": 1597213529158,
    "updatedAt": 1597213530760,
    "createdBy": "acp_foundation_connectors@AdobeID",
    "updatedBy": "acp_foundation_connectors@AdobeID",
    "createdClient": "acp_foundation_connectors",
    "updatedClient": "acp_foundation_connectors",
    "sandboxId": "7127a4f0-def8-11e9-83ce-e79494b1c2a5",
    "sandboxName": "prod",
    "imsOrgId": "7A5147645D8926B00A494224@AdobeOrg",
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
              "fileInfo": "https://platform-int.adobe.io/data/foundation/export/batches/01E4TSJNM2H5M74J0XB8MFWDHK/files"
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
        "imsOrgId": "7A5147645D8926B00A494224@AdobeOrg",
        "providerMetadata": "aep_observability_catalog_events",
        "eventCode": "sources_flow_run_success"
      }
    },
    "transformedTime": 1597213531214
  }
}
```

A returning payload contains a set of metrics that define characteristics of a specific flow run. See the table below for more information about each metric.

| Property | Description |
| -------- | ----------- |
| `metrics` | Defines characteristics of the data in the flow run. |
| `activities` | Defines the different steps and activities that are performed to transform the data. |
| `durationSummary` | Defines the start and end time of the flow run. |
| `sizeSummary` | Defines the volume of the data in bytes. |
| `recordSummary` | Defines the record count of the data. |
| `fileSummary` | Defines the file count of the data. |
| `statusSummary` | Defines whether the flow run is a success or a failure. |

### Failure

The following response is an example of a failed flow run, with an error occurring at the copy stage. A failed flow run includes information about the errors that contributed to the run's failure, including its error code and description.

```json
{
  "messages": [
    {
      "msgType": "eventNotification",
      "version": "1.0",
      "timestamp": 1597435949796,
      "imsOrgId": "4E5F3EB95C746F890A49400A@AdobeOrg",
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
        "createdAt": 1597435676963,
        "updatedAt": 1597435949760,
        "createdBy": "acp_foundation_connectors@AdobeID",
        "updatedBy": "acp_foundation_connectors@AdobeID",
        "createdClient": "acp_foundation_connectors",
        "updatedClient": "acp_foundation_connectors",
        "sandboxId": "e49ebb00-d0fa-11e9-b164-ed6a398c8b35",
        "sandboxName": "prod",
        "imsOrgId": "4E5F3EB95C746F890A49400A@AdobeOrg",
        "id": "ed8f3982-14e4-4685-8f39-8214e4468502",
        "flowId": "df6bb78d-a5ed-48b5-abb7-8da5ed68b53e",
        "providerRefId": "M-df6bb78d-a5ed-48b5-abb7-8da5ed68b53e-incremental-0:420eb29d-8f11-4a3a-87d9-413b67a3a953",
        "etag": "\"0d009b00-0000-0200-0000-5f36f02d0000\"",
        "metrics": {
          "durationSummary": {
            "startedAtUTC": 1597435805000,
            "completedAtUTC": 1597435816000
          },
          "sizeSummary": {},
          "recordSummary": {},
          "statusSummary": {
            "status": "failed",
            "errors": [
              {
                "code": "CONNECTOR-1001-500",
                "message": "Error in copying the data from Source"
              }
            ]
          }
        },
        "activities": [
          {
            "id": "copyActivity",
            "updatedAtUTC": 1597435949730,
            "durationSummary": {
              "startedAtUTC": 1597435805000,
              "completedAtUTC": 1597435816000
            },
            "sizeSummary": {},
            "recordSummary": {},
            "fileSummary": {},
            "statusSummary": {
              "status": "failed",
              "errors": [
                {
                  "code": "CONNECTOR-1001-500",
                  "message": "Error in copying the data from Source"
                }
              ],
              "extensions": {
                "errorDetail": "Failure happened on 'Sink' side. ErrorCode=UserErrorFailedToGetAccessTokenByServicePrincipal,'Type=Microsoft.DataTransfer.Common.Shared.HybridDeliveryException,Message=Failed to get access token by using service principal. Error: invalid_client, Error Message: AADSTS7000222: The provided client secret keys are expired. Visit the Azure Portal to create new keys for your app, or consider using certificate credentials for added security: https://docs.microsoft.com/azure/active-directory/develop/active-directory-certificate-credentials\r\nTrace ID: fa8b611f-9537-40b7-ad44-0cc43fc60c00\r\nCorrelation ID: a041043d-e525-4e8b-aa8d-6856d0901cc9\r\nTimestamp: 2020-08-14 20:10:14Z Response status code does not indicate success: 401 (Unauthorized). {\"error\":\"invalid_client\",\"error_description\":\"AADSTS7000222: The provided client secret keys are expired. Visit the Azure Portal to create new keys for your app, or consider using certificate credentials for added security: https://docs.microsoft.com/azure/active-directory/develop/active-directory-certificate-credentials\\r\\nTrace ID: fa8b611f-9537-40b7-ad44-0cc43fc60c00\\r\\nCorrelation ID: a041043d-e525-4e8b-aa8d-6856d0901cc9\\r\\nTimestamp: 2020-08-14 20:10:14Z\",\"error_codes\":[7000222],\"timestamp\":\"2020-08-14 20:10:14Z\",\"trace_id\":\"fa8b611f-9537-40b7-ad44-0cc43fc60c00\",\"correlation_id\":\"a041043d-e525-4e8b-aa8d-6856d0901cc9\",\"error_uri\":\"https://login.microsoftonline.com/error?code=7000222\"}: Unknown error .,Source=Microsoft.DataTransfer.ClientLibrary,''Type=Microsoft.IdentityModel.Clients.ActiveDirectory.AdalServiceException,Message=AADSTS7000222: The provided client secret keys are expired. Visit the Azure Portal to create new keys for your app, or consider using certificate credentials for added security: https://docs.microsoft.com/azure/active-directory/develop/active-directory-certificate-credentials\r\nTrace ID: fa8b611f-9537-40b7-ad44-0cc43fc60c00\r\nCorrelation ID: a041043d-e525-4e8b-aa8d-6856d0901cc9\r\nTimestamp: 2020-08-14 20:10:14Z,Source=Microsoft.IdentityModel.Clients.ActiveDirectory,''Type=System.Net.Http.HttpRequestException,Message=Response status code does not indicate success: 401 (Unauthorized).,Source=,''Type=Microsoft.IdentityModel.Clients.ActiveDirectory.AdalException,Message={\"error\":\"invalid_client\",\"error_description\":\"AADSTS7000222: The provided client secret keys are expired. Visit the Azure Portal to create new keys for your app, or consider using certificate credentials for added security: https://docs.microsoft.com/azure/active-directory/develop/active-directory-certificate-credentials\\r\\nTrace ID: fa8b611f-9537-40b7-ad44-0cc43fc60c00\\r\\nCorrelation ID: a041043d-e525-4e8b-aa8d-6856d0901cc9\\r\\nTimestamp: 2020-08-14 20:10:14Z\",\"error_codes\":[7000222],\"timestamp\":\"2020-08-14 20:10:14Z\",\"trace_id\":\"fa8b611f-9537-40b7-ad44-0cc43fc60c00\",\"correlation_id\":\"a041043d-e525-4e8b-aa8d-6856d0901cc9\",\"error_uri\":\"https://login.microsoftonline.com/error?code=7000222\"}: Unknown error,Source=,'",
                "type": "incremental",
                "errors": [
                  {
                    "code": "2200",
                    "message": "{\"error\":\"invalid_client\",\"error_description\":\"AADSTS7000222: The provided client secret keys are expired. Visit the Azure Portal to create new keys for your app, or consider using certificate credentials for added security: https://docs.microsoft.com/azure/active-directory/develop/active-directory-certificate-credentials\\r\\nTrace ID: fa8b611f-9537-40b7-ad44-0cc43fc60c00\\r\\nCorrelation ID: a041043d-e525-4e8b-aa8d-6856d0901cc9\\r\\nTimestamp: 2020-08-14 20:10:14Z\",\"error_codes\":[7000222],\"timestamp\":\"2020-08-14 20:10:14Z\",\"trace_id\":\"fa8b611f-9537-40b7-ad44-0cc43fc60c00\",\"correlation_id\":\"a041043d-e525-4e8b-aa8d-6856d0901cc9\",\"error_uri\":\"https://login.microsoftonline.com/error?code=7000222\"}: Unknown error"
                  }
                ]
              }
            },
            "sourceInfo": [
              {
                "id": "125ab60b-1f0d-4966-9ab6-0b1f0df96614",
                "type": "SourceConnection",
                "reference": {
                  "type": "AdfRunId",
                  "ids": [
                    "420eb29d-8f11-4a3a-87d9-413b67a3a953"
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
```

The following response is an example of a failed flow run, with an error occurring at the promotion stage.

```json
[
  {
    "messages": [
      {
        "msgType": "eventNotification",
        "version": "1.0",
        "timestamp": 1597434157622,
        "imsOrgId": "4E5F3EB95C746F890A49400A@AdobeOrg",
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
          "createdBy": "acp_foundation_connectors@AdobeID",
          "updatedBy": "acp_foundation_connectors@AdobeID",
          "createdClient": "acp_foundation_connectors",
          "updatedClient": "acp_foundation_connectors",
          "sandboxId": "e49ebb00-d0fa-11e9-b164-ed6a398c8b35",
          "sandboxName": "prod",
          "imsOrgId": "4E5F3EB95C746F890A49400A@AdobeOrg",
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

## Next steps

You can now subscribe to events and create webhooks that allow you to receive real-time notifications that provide statuses on your flow runs. For more information on flow runs and sources, see the [sources overview](./home.md).