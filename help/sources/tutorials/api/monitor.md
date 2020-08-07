---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Monitor flows and runs
topic: overview
---

# Monitor dataflows using the Flow Service API

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Flow Service](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial covers the steps for monitoring flow run data for completeness, errors, and metrics using the [!DNL Flow Service] API.

## Getting started

This tutorial requires you to have access to a valid dataflow, as well as information regarding its flow ID and run ID. If you do not have this information, select your connector of choice from the [sources overview](../../home.md) and follow the steps outlined before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

*   [Experience Data Model (XDM) System](../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    *   [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    *   [Schema Registry developer guide](../../../xdm/api/getting-started.md): Includes important information that you need to know in order to successfully perform calls to the Schema Registry API. This includes your `{TENANT_ID}`, the concept of "containers", and the required headers for making requests (with special attention to the Accept header and its possible values).
*   [Catalog Service](../../../catalog/home.md): Catalog is the system of record for data location and lineage within [!DNL Experience Platform].
*   [Batch ingestion](../../../ingestion/batch-ingestion/overview.md): The batch ingestion API allows you to ingest data into Experience Platform as batch files.
*   [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully monitor flow runs using the [!DNL Flow Service] API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Monitor flows

The first step in monitoring flow runs is to retrieve a dataflow and its specifications. In order to obtain the run ID, you must already have an existing flow ID.

If you do not have an existing dataflow, you can create one using any of the following source connector tutorials:

* [Advertising](./collect/advertising.md)
* [Cloud storage](./collect/cloud-storage.md)
* [CRM](./collect/crm.md)
* [Customer success](./collect/customer-success.md)
* [Database](./collect/database-nosql.md)
* [Marketing automation](./collect/marketing-automation.md)
* [Payments](./collect/payments.md)
* [Protocols](./collect/protocols.md)

Once you have made a dataflow, perform a GET request to the [!DNL Flow Service](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) API.

**API format**

```http
GET /flows/{FLOW_ID}
```

**Request**

The following request retrieves the specifications for an existing dataflow.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flows/c9cef9cb-c934-4467-8ef9-cbc934546741' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the dataflow specifications including its unique flow run identifier (`id`). This ID is required to monitor flow runs.

```json
{
    "items": [
        {
            "createdAt": 1596655508487,
            "updatedAt": 1596656113552,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
            "sandboxName": "prod",
            "id": "c9cef9cb-c934-4467-8ef9-cbc934546741",
            "name": "Monitoring Dataflow",
            "description": "A dataflow for testing monitoring and errors",
            "flowSpec": {
                "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
                "version": "1.0"
            },
            "state": "enabled",
            "version": "\"d6003e51-0000-0200-0000-5f2b09f10000\"",
            "etag": "\"d6003e51-0000-0200-0000-5f2b09f10000\"",
            "sourceConnectionIds": [
                "c0e18602-f9ea-44f9-a186-02f9ea64f9ac"
            ],
            "targetConnectionIds": [
                "47166b83-01c7-4b65-966b-8301c70b6562"
            ],
            "inheritedAttributes": {
                "sourceConnections": [
                    {
                        "id": "c0e18602-f9ea-44f9-a186-02f9ea64f9ac",
                        "connectionSpec": {
                            "id": "ecadc60c-7455-4d87-84dc-2a0e293d997b",
                            "version": "1.0"
                        },
                        "baseConnection": {
                            "id": "660b030b-e0e0-43d4-8b03-0be0e093d45c",
                            "connectionSpec": {
                                "id": "ecadc60c-7455-4d87-84dc-2a0e293d997b",
                                "version": "1.0"
                            }
                        }
                    }
                ],
                "targetConnections": [
                    {
                        "id": "47166b83-01c7-4b65-966b-8301c70b6562",
                        "connectionSpec": {
                            "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
                            "version": "1.0"
                        }
                    }
                ]
            },
            "options": {
                "errorDiagnosticsEnabled": true,
                "partialIngestionPercent": 5
            },
            "scheduleParams": {
                "startTime": 1596655508,
                "frequency": "once"
            },
            "transformations": [
                {
                    "name": "Mapping",
                    "params": {
                        "mappingId": "5cedb1959842496ba0390ffd64d18ee5",
                        "mappingVersion": 0
                    }
                }
            ],
            "runs": "/flows/c9cef9cb-c934-4467-8ef9-cbc934546741/runs",
            "lastRunDetails": {
                "id": "9830305a-985f-47d0-b030-5a985fd7d004",
                "state": "success",
                "startedAtUTC": 1596656058198,
                "completedAtUTC": 1596656113306
            }
        }
    ]
}
```

## Monitor runs

Flow runs represent an instance of a flow execution. You can monitor runs to view completion, errors, or metrics.

**API format**

```http
GET /runs?property=flowId=={FLOW_ID}
```

**Request**

The following request retrieves the specifications for an existing flow run.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice//runs?property=flowId==c9cef9cb-c934-4467-8ef9-cbc934546741' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the run specifications including information about its metrics, size, and errors.

```json
{
    "items": [
        {
            "createdAt": 1596656079576,
            "updatedAt": 1596656113526,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
            "sandboxName": "prod",
            "id": "9830305a-985f-47d0-b030-5a985fd7d004",
            "flowId": "c9cef9cb-c934-4467-8ef9-cbc934546741",
            "etag": "\"b8003af1-0000-0200-0000-5f2b09f10000\"",
            "metrics": {
                "durationSummary": {
                    "startedAtUTC": 1596656058198,
                    "completedAtUTC": 1596656113306
                },
                "sizeSummary": {
                    "inputBytes": 24012,
                    "outputBytes": 17128
                },
                "recordSummary": {
                    "inputRecordCount": 100,
                    "outputRecordCount": 99,
                    "failedRecordCount": 1
                },
                "fileSummary": {
                    "inputFileCount": 1,
                    "outputFileCount": 1,
                    "activityRefs": [
                        "promotionActivity"
                    ]
                },
                "statusSummary": {
                    "status": "success",
                    "errors": [
                        {
                            "code": "CONNECTOR-2001-500",
                            "message": "Error occurred at promotion activity."
                        }
                    ],
                    "activityRefs": [
                        "promotionActivity"
                    ]
                }
            },
            "activities": [
                {
                    "id": "copyActivity",
                    "updatedAtUTC": 1596656095088,
                    "durationSummary": {
                        "startedAtUTC": 1596656058198,
                        "completedAtUTC": 1596656089650,
                        "extensions": {
                            "windowStart": 1596653708000,
                            "windowEnd": 1596655508000
                        }
                    },
                    "sizeSummary": {
                        "inputBytes": 24012,
                        "outputBytes": 24012
                    },
                    "recordSummary": {},
                    "fileSummary": {
                        "inputFileCount": 1,
                        "outputFileCount": 1
                    },
                    "statusSummary": {
                        "status": "success",
                        "extensions": {
                            "type": "one-time"
                        }
                    },
                    "sourceInfo": [
                        {
                            "id": "c0e18602-f9ea-44f9-a186-02f9ea64f9ac",
                            "type": "SourceConnection",
                            "reference": {
                                "type": "AdfRunId",
                                "ids": [
                                    "8a8eb0cc-e283-4605-ac70-65a5adb1baef"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "promotionActivity",
                    "updatedAtUTC": 1596656113485,
                    "durationSummary": {
                        "startedAtUTC": 1596656095333,
                        "completedAtUTC": 1596656113306
                    },
                    "sizeSummary": {
                        "inputBytes": 24012,
                        "outputBytes": 17128
                    },
                    "recordSummary": {
                        "inputRecordCount": 100,
                        "outputRecordCount": 99,
                        "failedRecordCount": 1
                    },
                    "fileSummary": {
                        "inputFileCount": 2,
                        "outputFileCount": 1,
                        "extensions": {
                            "manifest": {
                                "fileInfo": "https://platform-int.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=input_files"
                            }
                        }
                    },
                    "statusSummary": {
                        "status": "success",
                        "errors": [
                            {
                                "code": "CONNECTOR-2001-500",
                                "message": "Error occurred at promotion activity."
                            }
                        ],
                        "extensions": {
                            "manifest": {
                                "failedRecords": "https://platform-int.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=row_errors",
                                "sampleErrors": "https://platform-int.adobe.io/data/foundation/export/batches/01EF01X41KJD82Y9ZX6ET54PCZ/meta?path=row_error_samples.json"
                            },
                            "errors": [
                                {
                                    "code": "INGEST-1212-400",
                                    "message": "Encountered 1 errors in the data. Successfully ingested 99 rows. Review the associated diagnostic files for additional details."
                                },
                                {
                                    "code": "MAPPER-3700-400",
                                    "recordCount": 1,
                                    "message": "Mapper Transform Error"
                                }
                            ]
                        }
                    },
                    "targetInfo": [
                        {
                            "id": "47166b83-01c7-4b65-966b-8301c70b6562",
                            "type": "TargetConnection",
                            "reference": {
                                "type": "Batch",
                                "ids": [
                                    "01EF01X41KJD82Y9ZX6ET54PCZ"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "_links": {}
}
```

## Next steps

By following this tutorial, you have retrieved metrics, size, and error information on your dataflow. You can now continue to monitor your dataflow, depending on your ingestion schedule, to track its status and ingestion rates. See the following documents for more details:

* [Real-time Customer Profile overview](../../../profile/home.md)
* [Data Science Workspace overview](../../../data-science-workspace/home.md)