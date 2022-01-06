---
keywords: Experience Platform;home;popular topics;flow service;update destination dataflows
solution: Experience Platform
title: Update destination dataflows using the Flow Service API
topic-legacy: overview
type: Tutorial
description: This tutorial covers the steps for updating a destination dataflow, including its basic information, and adding or removing segments and attributes using the Flow Service API.
---
# Update destination dataflows using the Flow Service API

You can update various components of a destination dataflow. This tutorial covers the steps for updating a dataflow, including its basic information, and adding or removing segments and attributes using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/). For information on editing destination dataflows using the Experience Platform UI, read [Edit activation flows](/help/destinations/ui/edit-activation.md).

## Getting started

This tutorial requires you to have a valid flow ID. If you do not have a valid flow ID, select your destination of choice from the [destinations catalog](../catalog/overview.md) and follow the steps outlined to [connect to the destination](../ui/connect-destination.md) and [activate data](../ui/activation-overview.md) before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Destinations](../home.md): [!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully update your dataflow using the [!DNL Flow Service] API.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in Experience Platform, including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Look up dataflow details

The first step in updating your destination dataflow is to retrieve dataflow details using your flow ID. You can view the current details of an existing dataflow by making a GET request to the `/flows` endpoint.

**API format**

```http
GET /flows/{FLOW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FLOW_ID}` | The unique `id` value for the destination dataflow you want to retrieve. |

**Request**

The following request retrieves updated information regarding your flow ID.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flows/226fb2e1-db69-4760-b67e-9e671e05abfc' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the current details of your dataflow including its version, unique identifier (`id`), and other relevant information.

```json
{
    "items": [
        {
            "id": "226fb2e1-db69-4760-b67e-9e671e05abfc",
            "createdAt": "{CREATED_AT}",
            "updatedAt": "{UPDATED_BY}",
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxId": "{SANDBOX_ID}",
            "sandboxName": "prod",
            "imsOrgId": "{IMS_ORG}",
            "name": "2021 winter campaign",
            "description": "ACME company holiday campaign for high fidelity customers",
            "flowSpec": {
                "id": "71471eba-b620-49e4-90fd-23f1fa0174d8",
                "version": "1.0"
            },
            "state": "enabled",
            "version": "\"8b0351ca-0000-0200-0000-61c4d6700000\"",
            "etag": "\"8b0351ca-0000-0200-0000-61c4d6700000\"",
            "sourceConnectionIds": [
                "5e45582a-5336-4ea1-9ec9-d0004a9f344a"
            ],
            "targetConnectionIds": [
                "8ce3dc63-3766-4220-9f61-51d2f8f14618"
            ],
            "inheritedAttributes": {
                "sourceConnections": [
                    {
                        "id": "5e45582a-5336-4ea1-9ec9-d0004a9f344a",
                        "connectionSpec": {
                            "id": "8a9c3494-9708-43d7-ae3f-cda01e5030e1",
                            "version": "1.0"
                        },
                        "baseConnection": {
                            "id": "0a82f29f-b457-47f7-bb30-33856e2ae5aa",
                            "connectionSpec": {
                                "id": "8a9c3494-9708-43d7-ae3f-cda01e5030e1",
                                "version": "1.0"
                            }
                        },
                        "typeInfo": {
                            "type": "ProfileFragments",
                            "id": "ups"
                        }
                    }
                ],
                "targetConnections": [
                    {
                        "id": "8ce3dc63-3766-4220-9f61-51d2f8f14618",
                        "connectionSpec": {
                            "id": "0b23e41a-cb4a-4321-a78f-3b654f5d7d97",
                            "version": "1.0"
                        },
                        "baseConnection": {
                            "id": "7fbf542b-83ed-498f-8838-8fde0c4d4d69",
                            "connectionSpec": {
                                "id": "0b23e41a-cb4a-4321-a78f-3b654f5d7d97",
                                "version": "1.0"
                            }
                        }
                    }
                ]
            },
            "transformations": [
                {
                    "name": "GeneralTransform",
                    "params": {
                        "profileSelectors": {
                            "selectors": [
                                {
                                    "type": "JSON_PATH",
                                    "value": {
                                        "path": "Email",
                                        "operator": "EXISTS",
                                        "identity": {
                                            "namespace": "Email"
                                        },
                                        "mapping": {
                                            "sourceType": "text/x.schema-path",
                                            "source": "Email",
                                            "destination": "Email",
                                            "identity": false,
                                            "primaryIdentity": false,
                                            "functionVersion": 0,
                                            "copyModeMapping": false,
                                            "sourceAttribute": "Email",
                                            "destinationXdmPath": "Email"
                                        }
                                    }
                                },
                                {
                                    "type": "JSON_PATH",
                                    "value": {
                                        "path": "person.name.firstName",
                                        "operator": "EXISTS",
                                        "mapping": {
                                            "sourceType": "text/x.schema-path",
                                            "source": "person.name.firstName",
                                            "destination": "person.name.firstName",
                                            "identity": false,
                                            "primaryIdentity": false,
                                            "functionVersion": 0,
                                            "copyModeMapping": false,
                                            "sourceAttribute": "person.name.firstName",
                                            "destinationXdmPath": "person.name.firstName"
                                        }
                                    }
                                },
                                {
                                    "type": "JSON_PATH",
                                    "value": {
                                        "path": "person.name.lastName",
                                        "operator": "EXISTS",
                                        "mapping": {
                                            "sourceType": "text/x.schema-path",
                                            "source": "person.name.lastName",
                                            "destination": "person.name.lastName",
                                            "identity": false,
                                            "primaryIdentity": false,
                                            "functionVersion": 0,
                                            "copyModeMapping": false,
                                            "sourceAttribute": "person.name.lastName",
                                            "destinationXdmPath": "person.name.lastName"
                                        }
                                    }
                                },
                                {
                                    "type": "JSON_PATH",
                                    "value": {
                                        "path": "personalEmail.address",
                                        "operator": "EXISTS",
                                        "mapping": {
                                            "sourceType": "text/x.schema-path",
                                            "source": "personalEmail.address",
                                            "destination": "personalEmail.address",
                                            "identity": false,
                                            "primaryIdentity": false,
                                            "functionVersion": 0,
                                            "copyModeMapping": false,
                                            "sourceAttribute": "personalEmail.address",
                                            "destinationXdmPath": "personalEmail.address"
                                        }
                                    }
                                },
                                {
                                    "type": "JSON_PATH",
                                    "value": {
                                        "path": "segmentMembership.status",
                                        "operator": "EXISTS",
                                        "mapping": {
                                            "sourceType": "text/x.schema-path",
                                            "source": "segmentMembership.status",
                                            "destination": "segmentMembership.status",
                                            "identity": false,
                                            "primaryIdentity": false,
                                            "functionVersion": 0,
                                            "copyModeMapping": false,
                                            "sourceAttribute": "segmentMembership.status",
                                            "destinationXdmPath": "segmentMembership.status"
                                        }
                                    }
                                }
                            ],
                            "mandatoryFields": [
                                "Email",
                                "person.name.firstName",
                                "person.name.lastName"
                            ],
                            "primaryFields": [
                                {
                                    "identityNamespace": "Email",
                                    "fieldType": "IDENTITY"
                                }
                            ]
                        },
                        "segmentSelectors": {
                            "selectors": [
                                {
                                    "type": "PLATFORM_SEGMENT",
                                    "value": {
                                        "id": "9f7d37fd-7039-4454-94ef-2b0cd6c3206a",
                                        "name": "Interested in Mountain Biking",
                                        "filenameTemplate": "%DESTINATION_NAME%_%SEGMENT_ID%_%DATETIME(YYYYMMdd_HHmmss)%",
                                        "exportMode": "DAILY_FULL_EXPORT",
                                        "schedule": {
                                            "frequency": "ONCE",
                                            "startDate": "2021-12-25",
                                            "startTime": "20:00"
                                        },
                                        "createTime": "1640289901",
                                        "updateTime": "1640289901"
                                    }
                                },
                                {
                                    "type": "PLATFORM_SEGMENT",
                                    "value": {
                                        "id": "f52a3785-2e7c-40a7-8137-9be99af7794e",
                                        "name": "Birth year 1970",
                                        "filenameTemplate": "%DESTINATION_NAME%_%SEGMENT_ID%_%DATETIME(YYYYMMdd_HHmmss)%",
                                        "exportMode": "DAILY_FULL_EXPORT",
                                        "schedule": {
                                            "frequency": "DAILY",
                                            "startDate": "2021-12-23",
                                            "endDate": "2021-12-31",
                                            "startTime": "20:00"
                                        },
                                        "createTime": "1640289901",
                                        "updateTime": "1640289901"
                                    }
                                },
                                {
                                    "type": "PLATFORM_SEGMENT",
                                    "value": {
                                        "id": "6caa79b9-39e0-4c37-892b-5061cdca2377",
                                        "name": "GCM_E2E_PersonId_Test",
                                        "filenameTemplate": "%DESTINATION_NAME%_%SEGMENT_ID%_%DATETIME(YYYYMMdd_HHmmss)%",
                                        "exportMode": "FIRST_FULL_THEN_INCREMENTAL",
                                        "schedule": {
                                            "frequency": "DAILY",
                                            "startDate": "2021-12-23",
                                            "endDate": "2021-12-31",
                                            "startTime": "20:00"
                                        },
                                        "createTime": "1640289901",
                                        "updateTime": "1640289901"
                                    }
                                },
                                {
                                    "type": "PLATFORM_SEGMENT",
                                    "value": {
                                        "id": "4c41c318-9e8c-4a4f-b880-877cdd629fc7",
                                        "name": "GCM_NewBatch_Segment",
                                        "filenameTemplate": "%DESTINATION_NAME%_%SEGMENT_ID%_%DATETIME(YYYYMMdd_HHmmss)%",
                                        "exportMode": "FIRST_FULL_THEN_INCREMENTAL",
                                        "schedule": {
                                            "frequency": "EVERY_6_HOURS",
                                            "startDate": "2021-12-23",
                                            "endDate": "2021-12-30",
                                            "startTime": "20:00"
                                        },
                                        "createTime": "1640289901",
                                        "updateTime": "1640289901"
                                    }
                                }
                            ]
                        }
                    }
                }
            ],
            "runs": "/flows/226fb2e1-db69-4760-b67e-9e671e05abfc/runs",
            "lastOperation": {
                "started": 1640289903353,
                "updated": 1640289904158,
                "percentCompleted": 100.0,
                "status": {
                    "value": "completed",
                    "properties": null,
                    "errors": []
                },
                "ops": [
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "Email",
                                "identity": {
                                    "namespace": "Email"
                                },
                                "operator": "EXISTS"
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "person.name.firstName",
                                "operator": "EXISTS"
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "person.name.lastName",
                                "operator": "EXISTS"
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "personalEmail.address",
                                "operator": "EXISTS"
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "segmentMembership.status",
                                "operator": "EXISTS"
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/mandatoryFields",
                        "value": [
                            "Email",
                            "person.name.firstName",
                            "person.name.lastName"
                        ]
                    },
                    {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/primaryFields",
                        "value": [
                            {
                                "identityNamespace": "Email",
                                "fieldType": "IDENTITY"
                            }
                        ]
                    }
                ],
                "operation": "update"
            }
        }
    ]
}
```


## Update dataflow

To update your dataflow's run schedule, name, and description, perform a PATCH request to the [!DNL Flow Service] API while providing your flow ID, version, and the new schedule you want to use.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the connection you want to update. The etag value updates with every successful update of a dataflow.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following request updates your flow run schedule, as well as your dataflow's name and description.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/2edc08ac-4df5-4fe6-936f-81a19ce92f5c' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
            {
                "op": "replace",
                "path": "/scheduleParams/frequency",
                "value": "day"
            },
            {
                "op": "replace",
                "path": "/name",
                "value": "Database Dataflow Feb2021"
            },
            {
                "op": "replace",
                "path": "/description",
                "value": "Database dataflow for testing update API"
            }
        ]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

## Add a segment to a dataflow {#add-segment}

To add a segment to the destination dataflow, perform a PATCH request to the [!DNL Flow Service] API while providing your flow ID, version, and the segment you want to add.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the connection you want to update. The etag value updates with every successful update of a dataflow.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following request adds a new segment to an existing destination dataflow.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/226fb2e1-db69-4760-b67e-9e671e05abfc' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
   {
      "op":"add",
      "path":"/transformations/0/params/segmentSelectors/selectors/-",
      "value":{
         "type":"PLATFORM_SEGMENT",
         "value":{
            "id":"2d79d0d8-724f-49fc-a09d-d1dec338c93c",
            "name":"Winter 2021/2022 campaign",
            "filenameTemplate":"%DESTINATION_NAME%_%SEGMENT_ID%_%SEGMENT_NAME%_%DATETIME(YYYYMMdd_HHmmss)%_custom-text",
            "exportMode":"DAILY_FULL_EXPORT",
            "schedule":{
               "startDate":"2022-01-05",
               "frequency":"ONCE",
               "startTime":"16:00"
            }
         }
      }
   }
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. To add a segment to a dataflow, use the `add` operation. |
| `path` | Defines the part of the flow that is to be updated. When adding a segment to a dataflow, use the path specified in the example. |
| `value` | The new value you want to update your parameter with. |
| `id` | Specify the ID of the segment you are adding to the destination dataflow.  |
| `name` | *Optional*. Specify the name of the segment you are adding to the destination dataflow. Note that this field is not mandatory and you can successfully add a segment to the destination dataflow without providing its name. |
| `filenameTemplate` | For *batch destinations* only. This field is required only when adding a segment to a dataflow in batch file export destinations like Amazon S3, SFTP, or Azure Blob. <br> This field determines the file name format of the files that are exported to your destination. <br> The following options are available: <br> <ul><li>`%DESTINATION_NAME%`: Mandatory. The exported files contain the destination name.</li><li>`%SEGMENT_ID%`: Mandatory. The exported files contain the ID of the exported segment.</li><li>`%SEGMENT_NAME%`: Optional. The exported files contain the name of the exported segment.</li><li>`DATETIME(YYYYMMdd_HHmmss)` or `%TIMESTAMP%`: Optional. Select one of these two options for your files to include when they are generated by Experience Platform.</li><li>`custom-text`: Optional. Replace this placeholder with any custom text that you would like to append at the end of your file names.</li></ul> <br> For more information about configuring file names, refer to the [configure file names](/help/destinations/ui/activate-batch-profile-destinations.md#file-names) section in the batch destinations activation tutorial.  |
| `exportMode` | For *batch destinations* only. This field is required only when adding a segment to a dataflow in batch file export destinations like Amazon S3, SFTP, or Azure Blob. <br> Mandatory. Select `"DAILY_FULL_EXPORT"` or `"FIRST_FULL_THEN_INCREMENTAL"`. For more information about the two options, refer to [export full files](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files) and [export incremental files](/help/destinations/ui/activate-batch-profile-destinations.md#export-incremental-files) in the batch destinations activation tutorial. |
| `startDate` | Select the date when the segment should start exporting profiles to your destination. |
| `frequency` | For *batch destinations* only. This field is required only when adding a segment to a dataflow in batch file export destinations like Amazon S3, SFTP, or Azure Blob. <br> Mandatory. <br> <ul><li>For the `"DAILY_FULL_EXPORT"` export mode, you can select `ONCE` or `DAILY`.</li><li>For the `"FIRST_FULL_THEN_INCREMENTAL"` export mode, you can select `"DAILY"`, `"EVERY_3_HOURS"`, `"EVERY_6_HOURS"`, `"EVERY_8_HOURS"`, `"EVERY_12_HOURS"`.</li></ul>   |
| `endDate` | For *batch destinations* only. This field is required only when adding a segment to a dataflow in batch file export destinations like Amazon S3, SFTP, or Azure Blob. <br> Not applicable when selecting `"exportMode":"DAILY_FULL_EXPORT"` and `"frequency":"ONCE"`. <br> Sets the date when segment members stop being exported to the destination. |
| `startTime` | For *batch destinations* only. This field is required only when adding a segment to a dataflow to a batch file export destinations like Amazon S3, SFTP, or Azure Blob. <br> Mandatory. Select the time when files containing members of the segment should be generated and exported to your destination. |

**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

## Remove a segment from a dataflow {#remove-segment}

To remove a segment from an existing destination dataflow, perform a PATCH request to the [!DNL Flow Service] API while providing your flow ID, version, and the segment you want to remove.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the connection you want to update. The etag value updates with every successful update of a dataflow.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following request removes a segment from an existing destination dataflow.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/226fb2e1-db69-4760-b67e-9e671e05abfc' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
{
   "op":"remove",
   "path":"/transformations/0/params/segmentSelectors/selectors/0",
   "value":{
      "type":"PLATFORM_SEGMENT",
      "value":{
      }
   }
}
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. To remove a segment from a dataflow, use the `remove` operation. |
| `path` | Specifies which existing segment should be removed from the destination dataflow.  |


**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

## Add a profile attribute to a dataflow {#add-profile-attribute}

 {
                        "op": "add",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "mobilePhone.status",
                                "operator": "EXISTS"
                            }
                        }
                    }


## Remove a profile attribute from a dataflow {#remove-profile-attribute}

 {
                        "op": "remove",
                        "path": "/transformations/0/params/profileSelectors/selectors/-",
                        "value": {
                            "type": "JSON_PATH",
                            "value": {
                                "path": "mobilePhone.status",
                                "operator": "EXISTS"
                            }
                        }
                    }

## Update mapping

You can update the mapping set of an existing dataflow by making a PATCH request to the [!DNL Flow Service] API and providing updated values for your `mappingId` and `mappingVersion`.

**API format**

```http
PATCH /flows/{FLOW_ID}
```

**Request**

The following request updates your dataflow's mapping set.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/flows/2edc08ac-4df5-4fe6-936f-81a19ce92f5c' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "50014cc8-0000-0200-0000-6036eb720000"' \
    -d '[
        {
            "op": "replace",
            "path": "/transformations/0",
            "value": {
                "name": "Mapping",
                "params": {
                    "mappingId": "c5f22f04e09f44498e528901546a83b1",
                    "mappingVersion": 2
                }
            }
        }
    ]'
```

| Property | Description |
| --- | --- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. In this example, `transformations` is being updated. |
| `value.name` | The name of the property that is to be updated. |
| `value.params.mappingId` | The new mapping ID to be used to update the mapping set of the dataflow. |
| `value.params.mappingVersion` | The new mapping version associated with the updated mapping ID. |

**Response**

A successful response returns your flow ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your flow ID.

```json
{
    "id": "2edc08ac-4df5-4fe6-936f-81a19ce92f5c",
    "etag": "\"2c000802-0000-0200-0000-613976440000\""
}
```

## Next steps

By following this tutorial, you have learned how to update various components of a destination dataflow, like adding or removing segments or profile attributes using [!DNL Flow Service] API. For more information on destinations, see the [destinations overview](../home.md).
