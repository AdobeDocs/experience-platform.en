---
keywords: Experience Platform;home;popular topics;OneTrust
solution: Experience Platform
title: Create a dataflow for a OneTrust Integration source using the Flow Service API
description: Learn how to connect Adobe Experience Platform to OneTrust Integration using the Flow Service API.
exl-id: e224efe0-4756-4b8a-b446-a3e1066f2050
---
# Create a dataflow for a [!DNL OneTrust Integration] source using the [!DNL Flow Service] API

The following tutorial walks you through the steps to create a source connection and a dataflow to bring both historic and scheduled consent data from [[!DNL OneTrust Integration]](https://my.onetrust.com/s/contactsupport?language=en_US) to Adobe Experience Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Prerequisites

>[!IMPORTANT]
>
>The [!DNL OneTrust Integration] source connector and documentation were created by the [!DNL OneTrust Integration] team. For any inquiries or update requests, please contact the [[!DNL OneTrust] team](https://my.onetrust.com/s/contactsupport?language=en_US) directly.

Before you can connect [!DNL OneTrust Integration] to Platform, you must first retrieve your access token. For detailed instructions on finding your access token, see the [[!DNL OneTrust Integration] OAuth 2 guide](https://developer.onetrust.com/docs/api-docs-v3/b3A6MjI4OTUyOTc-generate-access-token).

The access token does not refresh automatically after it expires because system-to-system refresh tokens are not supported by [!DNL OneTrust]. Therefore, it is necessary to make sure that your access token is updated in the connection before it expires. The maximum configurable lifespan for an access token is one year. To learn more about updating your access token, see the [[!DNL OneTrust] document on managing your OAuth 2.0 client credentials](https://developer.onetrust.com/docs/documentation/ZG9jOjIyODk1MTUw-managing-o-auth-2-0-client-credentials).

## Connect [!DNL OneTrust Integration] to Platform using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL OneTrust Integration] API specifications are being shared with Adobe for data ingestion.

The following tutorial walks you through the steps to create a [!DNL OneTrust Integration] source connection and create a dataflow to bring [!DNL OneTrust Integration] data to Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

### Create a base connection {#base-connection}

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL OneTrust Integration] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL OneTrust Integration] :

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ONETRUST base connection",
      "description": "ONETRUST base connection to authenticate to Platform",
      "connectionSpec": {
          "id": "cf16d886-c627-4872-9936-fb08d6cba8cc",
          "version": "1.0"
      },
      "auth": {
          "specName": "OAuth2 Refresh Code",
          "params": {
              "accessToken": "{ACCESS_TOKEN}"
          }
      }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | An optional value that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID of your source. This ID can be retrieved after your source is registered and approved through the [!DNL Flow Service] API. |
| `auth.specName` | The authentication type that you are using to authenticate your source to Platform. |
| `auth.params.` | Contains the credentials required to authenticate your source, including the access token to connect to the API.|
| `auth.params.accessToken` | The access token that corresponds with your [!DNL OneTrust Integration] account. |

**Response**

A successful response returns the newly created base connection, including its unique connection identifier (`id`). This ID is required to explore your source's file structure and contents in the next step.

```json
{
     "id": "622124ca-6d18-47f7-999c-66f599955309",
     "etag": "\"2e026443-0000-0200-0000-621f1af80000\""
}
```

### Explore your source {#explore}

Using the base connection ID you generated in the previous step, you can explore files and directories by performing GET requests.

Use the following calls to find the path of the file you wish to bring into [!DNL Platform]:

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=rest&object={OBJECT}&fileType={FILE_TYPE}&preview={PREVIEW}
```

When performing GET requests to explore your source's file structure and contents, you must include the query parameters that are listed in the table below:


| Parameter | Description |
| --------- | ----------- |
| `{BASE_CONNECTION_ID}` | The base connection ID generated in the previous step. |
| `objectType=rest` | The type of object that you wish to explore. Currently, this value is always set to `rest`. |
| `{OBJECT}` | This parameter is required only when viewing a specific directory. Its value represents the path of the directory you wish to explore. |
| `fileType=json` | The file type of the file you want to bring to Platform. Currently, `json` is the only supported file type. |
| `{PREVIEW}` | A boolean value that defines whether the contents of the connection supports preview. |

**Request**

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/622124ca-6d18-47f7-999c-66f599955309/explore?objectType=rest&object=json&fileType=json&preview=true' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the structure of the queried file.

>[!NOTE]
>
>The JSON response payload below is hidden for brevity. Select Click me to see the response payload.

+++Click me

```json
{
    "format": "hierarchical",
    "schema": {
        "type": "object",
        "properties": {
            "number": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "size": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "numberOfElements": {
                "type": "integer",
                "minimum": -9007199254740992,
                "maximum": 9007199254740991
            },
            "last": {
                "type": "boolean"
            },
            "pageable": {
                "type": "object",
                "properties": {
                    "paged": {
                        "type": "boolean"
                    },
                    "pageNumber": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "offset": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "tokenId": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "limit": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "pageSize": {
                        "type": "integer",
                        "minimum": -9007199254740992,
                        "maximum": 9007199254740991
                    },
                    "unpaged": {
                        "type": "boolean"
                    },
                    "sort": {
                        "type": "object",
                        "properties": {
                            "unsorted": {
                                "type": "boolean"
                            },
                            "sorted": {
                                "type": "boolean"
                            },
                            "empty": {
                                "type": "boolean"
                            }
                        }
                    }
                }
            },
            "sort": {
                "type": "object",
                "properties": {
                    "unsorted": {
                        "type": "boolean"
                    },
                    "sorted": {
                        "type": "boolean"
                    },
                    "empty": {
                        "type": "boolean"
                    }
                }
            },
            "content": {
                "type": "object",
                "properties": {
                    "LastUpdatedDate": {
                        "type": "string"
                    },
                    "Identifier": {
                        "type": "string"
                    },
                    "Language": {
                        "type": "string"
                    },
                    "TestDataSubject": {
                        "type": "boolean"
                    },
                    "CreatedDate": {
                        "type": "string"
                    },
                    "DataElements": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {}
                        }
                    },
                    "Id": {
                        "type": "string"
                    },
                    "Purposes": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "Status": {
                                    "type": "string"
                                },
                                "LastTransactionDate": {
                                    "type": "string"
                                },
                                "CustomPreferences": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {}
                                    }
                                },
                                "LastUpdatedDate": {},
                                "ExpiryDate": {},
                                "Topics": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "IsConsented": {
                                                "type": "boolean"
                                            },
                                            "Id": {
                                                "type": "string"
                                            },
                                            "Name": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "TotalTransactionCount": {
                                    "type": "integer",
                                    "minimum": -9007199254740992,
                                    "maximum": 9007199254740991
                                },
                                "LastReceiptId": {},
                                "ConsentDate": {
                                    "type": "string"
                                },
                                "LastInteractionDate": {},
                                "Name": {
                                    "type": "string"
                                },
                                "FirstTransactionDate": {
                                    "type": "string"
                                },
                                "LastTransactionCollectionPointId": {
                                    "type": "string"
                                },
                                "LastTransactionCollectionPointVersion": {
                                    "type": "integer",
                                    "minimum": -9007199254740992,
                                    "maximum": 9007199254740991
                                },
                                "Version": {
                                    "type": "integer",
                                    "minimum": -9007199254740992,
                                    "maximum": 9007199254740991
                                },
                                "attributes": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "Id": {
                                    "type": "string"
                                },
                                "PurposeNote": {},
                                "WithdrawalDate": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            },
            "first": {
                "type": "boolean"
            },
            "empty": {
                "type": "boolean"
            }
        }
    },
    "data": [
        {
            "number": 0,
            "size": 100,
            "numberOfElements": 100,
            "last": false,
            "pageable": {
                "limit": 100,
                "offset": 0,
                "sort": {
                    "sorted": true,
                    "unsorted": false,
                    "empty": false
                },
                "tokenId": 100,
                "pageSize": 100,
                "pageNumber": 0,
                "unpaged": false,
                "paged": true
            },
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "content": {
                "Id": "de1ab4d2-6ccf-42bd-b363-2d8cac60c88c",
                "Language": "en-us",
                "Identifier": "gkumar@onetrust.com",
                "LastUpdatedDate": "2019-06-05T12:02:07Z",
                "CreatedDate": "2018-05-02T03:14:28Z",
                "Purposes": [
                    {
                        "Id": "9edf57bb-0449-4c15-98e4-8641522e5ff4",
                        "Name": "Purpose_UAT",
                        "Version": 1,
                        "Status": "ACTIVE",
                        "FirstTransactionDate": "2018-05-02T03:14:27Z",
                        "LastTransactionDate": "2019-05-29T11:08:26Z",
                        "WithdrawalDate": "2019-05-29T11:05:30Z",
                        "ConsentDate": "2018-05-02T03:14:27Z",
                        "TotalTransactionCount": 5,
                        "Topics": [
                            {
                                "Id": "d6e3d675-3d6f-4f4e-a157-bd93829ee632",
                                "Name": "Topic_UAT",
                                "IsConsented": true
                            }
                        ],
                        "LastTransactionCollectionPointId": "735c85c8-c69c-44bc-8bad-ec0e806090bd",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "814c073a-95f1-4fc9-8263-1ec62225c5e9",
                        "Name": "Multi Pur_UAT",
                        "Version": 1,
                        "Status": "ACTIVE",
                        "FirstTransactionDate": "2018-05-02T03:17:33Z",
                        "LastTransactionDate": "2018-05-02T03:19:49Z",
                        "ConsentDate": "2018-05-02T03:17:33Z",
                        "TotalTransactionCount": 4,
                        "LastTransactionCollectionPointId": "9a5b7375-bc13-47e8-8a58-1ca7d9c06c8e",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "4d52dcc4-82bf-44bf-ac49-854eba6ff8f3",
                        "Name": "Eloqua_UAT",
                        "Version": 1,
                        "Status": "ACTIVE",
                        "FirstTransactionDate": "2018-05-02T03:26:36Z",
                        "LastTransactionDate": "2019-03-07T03:23:25Z",
                        "ConsentDate": "2018-05-02T03:26:36Z",
                        "TotalTransactionCount": 3,
                        "Topics": [
                            {
                                "Id": "690ad782-6280-4ea4-b62a-1514c39fc838",
                                "Name": "Eloqua_topic",
                                "IsConsented": true
                            }
                        ],
                        "LastTransactionCollectionPointId": "f8886377-e4b1-45e4-b1c0-d7dacb744db8",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "723300e3-96cb-4da4-abdd-4913c05be215",
                        "Name": "Purpose 1",
                        "Version": 2,
                        "Status": "EXPIRED",
                        "FirstTransactionDate": "2019-02-27T06:29:48Z",
                        "LastTransactionDate": "2019-02-28T12:00:45Z",
                        "ConsentDate": "2019-02-27T06:29:48Z",
                        "ExpiryDate": "2019-02-28T12:00:45Z",
                        "TotalTransactionCount": 2,
                        "LastTransactionCollectionPointId": "3dbfb978-10f9-44a9-9669-d699674edd9d",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "4a5e6278-17f1-4283-beee-29f81cde2bd0",
                        "Name": "kbpurpose1",
                        "Version": 1,
                        "Status": "NO_CONSENT",
                        "FirstTransactionDate": "2019-03-07T03:21:58Z",
                        "LastTransactionDate": "2019-05-29T03:56:37Z",
                        "TotalTransactionCount": 6,
                        "LastTransactionCollectionPointId": "cea42a12-5de4-421a-b429-092e8d523948",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "a36f98d0-c662-4f61-a2a1-8bdab69e3c3a",
                        "Name": "Pur 1",
                        "Version": 1,
                        "Status": "ACTIVE",
                        "FirstTransactionDate": "2019-03-07T03:23:25Z",
                        "LastTransactionDate": "2019-03-07T03:23:27Z",
                        "ConsentDate": "2019-03-07T03:23:25Z",
                        "TotalTransactionCount": 2,
                        "LastTransactionCollectionPointId": "f8886377-e4b1-45e4-b1c0-d7dacb744db8",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "41ebdf32-068b-4239-89ac-42e20262c5a9",
                        "Name": "Send Notifications about Changes to Preferences",
                        "Version": 1,
                        "Status": "ACTIVE",
                        "FirstTransactionDate": "2019-03-07T03:24:11Z",
                        "LastTransactionDate": "2019-03-07T03:27:29Z",
                        "ConsentDate": "2019-03-07T03:24:11Z",
                        "TotalTransactionCount": 2,
                        "LastTransactionCollectionPointId": "c29a99a9-de4d-4367-973b-95b0217d0640",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "759d8b24-e4c0-4107-86e2-3a408db13e6b",
                        "Name": "GJ Purpose 07",
                        "Version": 2,
                        "Status": "WITHDRAWN",
                        "FirstTransactionDate": "2019-03-07T03:27:29Z",
                        "LastTransactionDate": "2019-05-29T11:09:03Z",
                        "WithdrawalDate": "2019-05-29T11:09:03Z",
                        "ConsentDate": "2019-03-07T03:27:29Z",
                        "TotalTransactionCount": 18,
                        "LastTransactionCollectionPointId": "cea42a12-5de4-421a-b429-092e8d523948",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "a57ee9da-b494-49e2-b562-6dfa31f190df",
                        "Name": "kbpurpose2",
                        "Version": 1,
                        "Status": "WITHDRAWN",
                        "FirstTransactionDate": "2019-03-28T03:23:44Z",
                        "LastTransactionDate": "2019-03-28T03:24:29Z",
                        "WithdrawalDate": "2019-03-28T03:24:29Z",
                        "ConsentDate": "2019-03-28T03:23:44Z",
                        "TotalTransactionCount": 2,
                        "LastTransactionCollectionPointId": "c29a99a9-de4d-4367-973b-95b0217d0640",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "a1ccd810-94a0-4b58-946b-6705eae15c5b",
                        "Name": "Purpose01 v2",
                        "Version": 2,
                        "Status": "EXPIRED",
                        "FirstTransactionDate": "2019-05-29T04:05:42Z",
                        "LastTransactionDate": "2019-06-05T12:02:06Z",
                        "WithdrawalDate": "2019-05-29T11:09:12Z",
                        "ConsentDate": "2019-05-29T04:05:42Z",
                        "ExpiryDate": "2019-06-05T12:02:06Z",
                        "TotalTransactionCount": 8,
                        "Topics": [
                            {
                                "Id": "af7bf604-2058-4089-985c-c84083e3e3e3",
                                "Name": "New_Topic",
                                "IsConsented": true
                            }
                        ],
                        "LastTransactionCollectionPointId": "735c85c8-c69c-44bc-8bad-ec0e806090bd",
                        "LastTransactionCollectionPointVersion": 1
                    },
                    {
                        "Id": "a313353a-e13b-4554-be08-22cf4a78a31c",
                        "Name": "Purpose_1804 v2",
                        "Version": 2,
                        "Status": "ACTIVE",
                        "FirstTransactionDate": "2019-05-29T04:05:42Z",
                        "LastTransactionDate": "2019-05-29T11:09:30Z",
                        "WithdrawalDate": "2019-05-29T11:05:30Z",
                        "ConsentDate": "2019-05-29T04:05:42Z",
                        "TotalTransactionCount": 4,
                        "CustomPreferences": [
                            {
                                "Id": "4935d35a-7216-480d-9da9-1aef0e078b89",
                                "Name": "Custom_S",
                                "Options": [
                                    {
                                        "Id": "8acc2f9f-37f8-4ace-a513-fae6b7dd0aa9",
                                        "Name": "Option2",
                                        "IsConsented": true
                                    }
                                ]
                            }
                        ],
                        "LastTransactionCollectionPointId": "735c85c8-c69c-44bc-8bad-ec0e806090bd",
                        "LastTransactionCollectionPointVersion": 1
                    }
                ],
                "TestDataSubject": false
            },
            "first": true,
            "empty": false
        }
    ]
}
```

+++

### Create a source connection {#source-connection}

You can create a source connection by making a POST request to the [!DNL Flow Service] API. A source connection consists of a connection ID, a path to the source data file, and a connection spec ID.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for [!DNL OneTrust Integration] :

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ONETRUST Source Connection",
      "description": "ONETRUST Source Connection",
      "baseConnectionId": "622124ca-6d18-47f7-999c-66f599955309",
      "connectionSpec": {
          "id": "cf16d886-c627-4872-9936-fb08d6cba8cc",
          "version": "1.0"
      },
      "data": {
          "format": "json"
      },
      "params": {}
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `baseConnectionId` | The base connection ID of [!DNL OneTrust Integration]. This ID was generated in an earlier step. |
| `connectionSpec.id` | The connection specification ID that corresponds to your source. |
| `data.format` | The format of the [!DNL OneTrust Integration] data that you want to ingest. Currently, the only supported data format is `json`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
     "id": "eb5833d3-230d-4700-80cc-bda396e7af8a",
     "etag": "\"da04c07f-0000-0200-0000-621f1afc0000\""
}
```

### Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../../../xdm/api/schemas.md).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../../../catalog/api/create-dataset.md).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the [!DNL Data Lake]. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the [!DNL Data Lake]. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for [!DNL OneTrust Integration] :

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ONETRUST Target Connection",
      "description": "ONETRUST Target Connection",
      "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      },
      "data": {
          "format": "json"
      },
      "params": {
          "dataSetId": "61f6ca3f33978c19486bb463"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to [!DNL Data Lake]. This fixed ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |
| `data.format` | The format of the [!DNL OneTrust Integration] data that you want to bring to Platform. |
| `params.dataSetId` | The target dataset ID retrieved in a previous step. |


**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
     "id": "495f761f-310a-4a7b-ae78-5b1152d74b38",
     "etag": "\"410a7b0c-0000-0200-0000-621f1afd0000\""
}
```

### Create a mapping {#mapping}

In order for the source data to be ingested into a target dataset, it must first be mapped to the target schema that the target dataset adheres to. This is achieved by performing a POST request to [[!DNL Data Prep] API](https://www.adobe.io/experience-platform-apis/references/data-prep/) with data mappings defined within the request payload.

**API format**

```http
POST /conversion/mappingSets
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/conversion/mappingSets' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "version": 0,
      "xdmSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/cfc8cee182e546c1fb35071185524b465e06bf1acb74f30d",
      "xdmVersion": "1.0",
      "id": null,
      "mappings": [{
              "sourceType": "ATTRIBUTE",
              "source": "content.Identifier",
              "destination": "_id",
              "name": "id",
              "description": "Identifier field"
          },
          {
              "sourceType": "ATTRIBUTE",
              "source": "content.Identifier",
              "destination": "_exchangesandboxbravo.Identifier"
          },
          {
              "sourceType": "ATTRIBUTE",
              "source": "content.Language",
              "destination": "_exchangesandboxbravo.Language",
              "description": "Language field"
          },
          {
              "sourceType": "ATTRIBUTE",
              "source": "content.CreatedDate",
              "destination": "_exchangesandboxbravo.CreatedDate",
              "description": "Created Date field"
          },
          {
              "sourceType": "ATTRIBUTE",
              "source": "content.LastUpdatedDate",
              "destination": "_exchangesandboxbravo.LastUpdatedDate",
              "description": "Created Date field"
          },
          {
              "sourceType": "ATTRIBUTE",
              "source": "content.DataElements",
              "destination": "_exchangesandboxbravo.DataElements"
          },
          {
              "sourceType": "ATTRIBUTE",
              "source": "content.Purposes",
              "destination": "_exchangesandboxbravo.Purposes"
          }

      ]
  }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the [target XDM schema](#target-schema) generated in an earlier step. |
| `mappings.destinationXdmPath` | The destination XDM path where the source attribute is being mapped to. |
| `mappings.sourceAttribute` | The source attribute that needs to be mapped to a destination XDM path. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "a87f130e82f04d5188da01f087805c4b",
    "version": 0,
    "createdDate": 1646205694395,
    "modifiedDate": 1646205694395,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from [!DNL OneTrust Integration] to Platform is to create a dataflow. By now, you have the following required values prepared:

* [Source connection ID](#source-connection)
* [Target connection ID](#target-connection)
* [Mapping ID](#mapping)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

To schedule an ingestion, you must first set the start time value to epoch time in seconds. Then, you must set the frequency value to one of the five options: `once`, `minute`, `hour`, `day`, or `week`. The interval value designates the period between two consecutive ingestions however, creating a one-time ingestion does not require an interval to be set. For all other frequencies, the interval value must be set to equal or greater than `15`.

**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ONETRUST dataflow",
      "description": "ONETRUST dataflow",
      "flowSpec": {
          "id": "6499120c-0b15-42dc-936e-847ea3c24d72",
          "version": "1.0"
      },
      "sourceConnectionIds": [
          "eb5833d3-230d-4700-80cc-bda396e7af8a"
      ],
      "targetConnectionIds": [
          "495f761f-310a-4a7b-ae78-5b1152d74b38"
      ],
      "transformations": [
          {
              "name": "Mapping",
              "params": {
                  "mappingId": "a87f130e82f04d5188da01f087805c4b",
                  "mappingVersion": 0
              }
          }
      ],
      "scheduleParams": {
          "startTime": "1625040887",
          "frequency": "minute",
          "interval": 15
      }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive as you can use this to look up information on your dataflow. |
| `description` | An optional value that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID required to create a dataflow. This fixed ID is: `6499120c-0b15-42dc-936e-847ea3c24d72`. |
| `flowSpec.version` | The corresponding version of the flow specification ID. This value defaults to `1.0`. |
| `sourceConnectionIds` | The [source connection ID](#source-connection) generated in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) generated in an earlier step. |
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |
| `scheduleParams.startTime` | This property contains information on the ingestion scheduling of the dataflow. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "70045189-42f0-493d-9b9e-be1045a9f4fa",
     "etag": "\"1601e900-0000-0200-0000-621f1b080000\""
}
```

## Appendix 

The following section provides information on the steps you can to monitor, update, and delete your dataflow.

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For complete API examples, read the guide on [monitoring your sources dataflows using the API](../../monitor.md).

### Update your dataflow

Update the details of your dataflow, such as its name and description, as well as its run schedule and associated mapping sets by making a PATCH request to the `/flows` endpoint of [!DNL Flow Service] API, while providing the ID of your dataflow. When making a PATCH request, you must provide your dataflow's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating sources dataflows using the API](../../update-dataflows.md).

### Update your account

Update the name, description, and credentials of your source account by performing a PATCH request to the [!DNL Flow Service] API while providing your base connection ID as a query parameter. When making a PATCH request, you must provide your source account's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating your source account using the API](../../update.md).

### Delete your dataflow

Delete your dataflow by performing a DELETE request to the [!DNL Flow Service] API while providing the ID of the dataflow you want to delete as part of the query parameter. For complete API examples, read the guide on [deleting your dataflows using the API](../../delete-dataflows.md).

### Delete your account

Delete your account by performing a DELETE request to the [!DNL Flow Service] API while providing the base connection ID of the account you want to delete. For complete API examples, read the guide on [deleting your source account using the API](../../delete.md).