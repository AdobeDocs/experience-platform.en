---
keywords: Experience Platform;home;popular topics;monitor dataflows;flow service api;Flow Service
solution: Experience Platform
title: Monitor Dataflows Using the Flow Service API
type: Tutorial
description: This tutorial covers the steps for monitoring flow run data for completeness, errors, and metrics using the Flow Service API.
exl-id: c4b2db97-eba4-460d-8c00-c76c666ed70e
---
# Monitor dataflows using the Flow Service API

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others. Additionally, Experience Platform allows for data to be activated to external partners. 

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources and destinations are connectable.

This tutorial covers the steps for monitoring flow run data for completeness, errors, and metrics using the [[!DNL Flow Service API]](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This tutorial requires you to have the ID value of a valid dataflow. If you do not have a valid dataflow ID, select your connector of choice from the [sources overview](../../sources/home.md) or [destinations overview](../../destinations/catalog/overview.md) and follow the steps outlined before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

- [Destinations](../../destinations/home.md): Destinations are pre-built integrations with commonly used applications that allow for the seamless activation of data from Platform for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
- [Sources](../../sources/home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully monitor flow runs using the [!DNL Flow Service] API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {ORG_ID}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

- `Content-Type: application/json`

## Monitor flow runs

Once you have made a dataflow, perform a GET request to the [!DNL Flow Service] API.

**API format**

```http
GET /runs?property=flowId=={FLOW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FLOW_ID}` | The unique `id` value for the dataflow you want to monitor. |

**Request**

The following request retrieves the specifications for an existing dataflow.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/runs?property=flowId==c9cef9cb-c934-4467-8ef9-cbc934546741' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns details regarding your flow run, including information about its creation date, source and target connections, as well as the flow run's unique identifier (`id`).

```json
{
    "items": [
        {
            "id": "65b7cfcc-6b2e-47c8-8194-13005b792752",
            "createdAt": 1607520228894,
            "updatedAt": 1607520276948,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "{SANDBOX_ID}",
            "sandboxName": "prod",
            "imsOrgId": "{ORG_ID}",
            "flowId": "f00c8762-df2f-432b-a7d7-38999fef5e8e",
            "etag": "\"560266dc-0000-0200-0000-5fd0d0140000\"",
            "metrics": {
                "durationSummary": {
                    "startedAtUTC": 1607520205922,
                    "completedAtUTC": 1607520262413
                },
                "sizeSummary": {
                    "inputBytes": 87885,
                    "outputBytes": 56730
                },
                "recordSummary": {
                    "inputRecordCount": 26758,
                    "outputRecordCount": 26758,
                    "failedRecordCount": 0
                },
                "fileSummary": {
                    "inputFileCount": 11,
                    "outputFileCount": 11,
                    "activityRefs": [
                        "37b34f84-1ada-11eb-adc1-0242ac120002"
                    ]
                },
                "statusSummary": {
                    "status": "success"
                }
            },
            "activities": [
                {
                    "id": "4f008a00-3a04-11eb-adc1-0242ac120002",
                    "name": "Copy Activity",
                    "updatedAtUTC": 0,
                    "durationSummary": {
                        "startedAtUTC": 1607520205922,
                        "completedAtUTC": 1607520236968
                    },
                    "sizeSummary": {
                        "inputBytes": 87885,
                        "outputBytes": 87885
                    },
                    "recordSummary": {
                        "inputRecordCount": 26758,
                        "outputRecordCount": 26758
                    },
                    "fileSummary": {
                        "inputFileCount": 11,
                        "outputFileCount": 11
                    },
                    "statusSummary": {
                        "status": "success"
                    }
                },
                {
                    "id": "37b34f84-1ada-11eb-adc1-0242ac120002",
                    "name": "Promotion Activity",
                    "updatedAtUTC": 0,
                    "durationSummary": {
                        "startedAtUTC": 1607520244985,
                        "completedAtUTC": 1607520262413
                    },
                    "sizeSummary": {
                        "inputBytes": 26758,
                        "outputBytes": 56730
                    },
                    "recordSummary": {
                        "inputRecordCount": 26758,
                        "outputRecordCount": 26758,
                        "failedRecordCount": 0
                    },
                    "fileSummary": {
                        "inputFileCount": 11,
                        "outputFileCount": 2,
                        "extensions": {
                            "manifest": {
                                "fileInfo": "https://platform.adobe.io/data/foundation/export/batches/01ES3TRN69E9W2DZ770XCGYAH1/meta?path=input_files",
                                "pathPrefix": "bucket1/csv_test/"
                            }
                        }
                    },
                    "statusSummary": {
                        "status": "success"
                    }
                }
            ]
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `items` | Contains a single payload of metadata associated with your specific flow run. |
| `metrics` | The characteristics of the data in the flow run. |
| `activities` | Shows how the data is transformed. |
| `durationSummary` | The start and end time of the flow run. |
| `sizeSummary` | The volume of the data in bytes. |
| `recordSummary` | The record count of the data. |
| `fileSummary` | The file counts of the data. |
| `fileSummary.extensions` | Contains information that is specific to the activity. For example, `manifest` is only part of the "Promotion Activity", and therefore it is included with the `extensions` object. |
| `statusSummary` | Shows whether the flow run is a success or a failure. |

## Next steps

By following this tutorial, you have retrieved metrics and error information on your dataflow using the [!DNL Flow Service] API. You can now continue to monitor your dataflow, depending on your ingestion schedule, to track its status and ingestion rates. For information on how to monitor dataflows for sources, please read the [monitoring dataflows for sources using the user interface](../ui/monitor-sources.md) tutorial. For more information on how to monitor dataflows for destinations, please read the [monitoring dataflows for destinations using the user interface](../ui/monitor-destinations.md) tutorial.
