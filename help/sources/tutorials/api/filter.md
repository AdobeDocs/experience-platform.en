---
title: Filter Row-Level Data For A Source Using The Flow Service API
description: This tutorial covers the steps on how to filter data at the source level using the Flow Service API
exl-id: 224b454e-a079-4df3-a8b2-1bebfb37d11f
---
# Filter row-level data for a source using the [!DNL Flow Service] API

>[!AVAILABILITY]
>
>Support for filtering row-level data is currently only available to the following sources:
>
>* [[Amazon Redshift]](../../connectors/databases/redshift.md)
>* [[!DNL Google BigQuery]](../../connectors/databases/bigquery.md)
>* [[!DNL Marketo Engage] standard activities](../../connectors/adobe-applications/marketo/marketo.md)
>* [[!DNL Microsoft Dynamics]](../../connectors/crm/ms-dynamics.md)
>* [[!DNL Salesforce]](../../connectors/crm/salesforce.md)
>* [[!DNL Snowflake]](../../connectors/databases/snowflake.md)

Read this guide for steps on how to filter row-level data for a source using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Get started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Experience Platform] services.
* [Sandboxes](../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Experience Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../landing/api-guide.md).

## Filter source data {#filter-source-data}

The following outlines steps to take in order to filter row-level data for your source.

### Retrieve your connection specs {#retrieve-your-connection-specs}

The first step in filtering row-level data for your source is to retrieve your source's connection specs and determine the operators and language that your source supports.

To retrieve a given source's connection spec, make a GET request to the `/connectionSpecs` endpoint of the [!DNL Flow Service] API and providing the property name of your source as part of your query parameters.

**API format**

```http
GET /connectionSpecs/{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMS}` | The optional query parameters to filter results by. You can retrieve the [!DNL Google BigQuery] connection spec by applying the `name` property and specifying `"google-big-query"` in your search. |

+++Request

The following request retrieves the connection specs for [!DNL Google BigQuery]. 

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs?property=name=="google-big-query"' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

+++Response

A successful response returns the status code 200 and the connection specs for [!DNL Google BigQuery], including information on its supported query language and logical operators.

```json
"attributes": {
  "filterAtSource": {
    "enabled": true,
    "queryLanguage": "SQL",
    "logicalOperators": [
      "and",
      "or",
      "not"
    ],
    "comparisonOperators": [
      "=",
      "!=",
      "<",
      "<=",
      ">",
      ">=",
      "like",
      "in"
    ],
    "columnNameEscapeChar": "`",
    "valueEscapeChar": "'"
  }
```

| Property | Description |
| --- | --- |
| `attributes.filterAtSource.enabled` | Determines whether the queried source supports filtering for row-level data. |
| `attributes.filterAtSource.queryLanguage` | Determines the query language that the queried source supports. |
| `attributes.filterAtSource.logicalOperators` | Determines the logical operators that you can use to filter row-level data for your source.|
| `attributes.filterAtSource.comparisonOperators` | Determines comparison operators that you can use to filter row-level data for your source. See the table below for more information on comparison operators. |
| `attributes.filterAtSource.columnNameEscapeChar` | Determines the character to use to escape columns. |
| `attributes.filterAtSource.valueEscapeChar` | Determines how values will be surrounded when writing an SQL query. |

{style="table-layout:auto"}

+++

#### Comparison operators {#comparison-operators}

| Operator | Description |
| --- | --- |
| `==` | Filters by whether the property equals the provided value. |
| `!=` | Filters by whether the property does not equal the provided value. |
| `<` | Filters by whether the property is less than the provided value. |
| `>` | Filters by whether the property is greater than the provided value. |
| `<=` | Filters by whether the property is less than or equal to the provided value. |
| `>=` | Filters by whether the property is greater than or equal to the provided value. |
| `like` | Filters by being used in a `WHERE` clause to search for a specified pattern. |
| `in` | Filters by whether the property is within a specified range. |

{style="table-layout:auto"}

### Specify filtering conditions for ingestion {#specify-filtering-conditions-for-ingestion}

Once you have identified the logical operators and query language that your source supports, you can use Profile Query Language (PQL) to specify the filtering conditions you want to apply to your source data. 

In the example below, conditions are applied to only select data that equal the provided values for the node types listed as parameters.

```json
{
  "type": "PQL",
  "format": "pql/json",
  "value": {
    "nodeType": "fnApply",
    "fnName": "=",
    "params": [
      {
        "nodeType": "fieldLookup",
        "fieldName": "city"
      },
      {
        "nodeType": "literal",
        "value": "DDN"
      }
    ]
  }
}
```

### Preview your data {#preview-your-data}

You can preview your data by making a GET request to the `/explore` endpoint of the [!DNL Flow Service] API while providing `filters` as part of your query parameters and specifying your PQL input conditions in [!DNL Base64].

**API format**

```http
GET /connections/{BASE_CONNECTION_ID}/explore?objectType=table&object={TABLE_PATH}&preview=true&filters={FILTERS}
```

| Parameter | Description |
| --- | --- |
| `{BASE_CONNECTION_ID}` | The base connection ID of your source. |
| `{TABLE_PATH}` | The path property of the table you want to inspect. |
| `{FILTERS}` | Your PQL filtering conditions encoded in [!DNL Base64]. |

+++Request

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections/89d1459e-3cd0-4069-acb3-68f240db4eeb/explore?objectType=table&object=TESTFAS.FASTABLE&preview=true&filters=ewogICJ0eXBlIjogIlBRTCIsCiAgImZvcm1hdCI6ICJwcWwvanNvbiIsCiAgInZhbHVlIjogewogICAgIm5vZGVUeXBlIjogImZuQXBwbHkiLAogICAgImZuTmFtZSI6ICJhbmQiLAogICAgInBhcmFtcyI6IFsKICAgICAgewogICAgICAgICJub2RlVHlwZSI6ICJmbkFwcGx5IiwKICAgICAgICAiZm5OYW1lIjogImxpa2UiLAogICAgICAgICJwYXJhbXMiOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICJub2RlVHlwZSI6ICJmaWVsZExvb2t1cCIsCiAgICAgICAgICAgICJmaWVsZE5hbWUiOiAiY2l0eSIKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICJub2RlVHlwZSI6ICJsaXRlcmFsIiwKICAgICAgICAgICAgInZhbHVlIjogIk0lIgogICAgICAgICAgfQogICAgICAgIF0KICAgICAgfQogICAgXQogIH0KfQ==\' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

+++Response

A successful response returns the contents and structure of your data.

```json
{
  "format": "flat",
  "schema": {
    "columns": [
      {
        "name": "FIRSTNAME",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "LASTNAME",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "CITY",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "AGE",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "HEIGHT",
        "type": "string",
        "xdm": {
          "type": "string"
        }
      },
      {
        "name": "ISEMPLOYED",
        "type": "boolean",
        "xdm": {
          "type": "boolean"
        }
      },
      {
        "name": "POSTG",
        "type": "boolean",
        "xdm": {
          "type": "boolean"
        }
      },
      {
        "name": "LATITUDE",
        "type": "double",
        "xdm": {
          "type": "number"
        }
      },
      {
        "name": "LONGITUDE",
        "type": "double",
        "xdm": {
          "type": "number"
        }
      },
      {
        "name": "JOINEDDATE",
        "type": "string",
        "meta:xdmType": "date-time",
        "xdm": {
          "type": "string",
          "format": "date-time"
        }
      },
      {
        "name": "CREATEDAT",
        "type": "string",
        "meta:xdmType": "date-time",
        "xdm": {
          "type": "string",
          "format": "date-time"
        }
      },
      {
        "name": "CREATEDATTS",
        "type": "string",
        "meta:xdmType": "date-time",
        "xdm": {
          "type": "string",
          "format": "date-time"
        }
      }
    ]
  },
 "data": [
    {
        "CITY": "MZN",
        "LASTNAME": "Jain",
        "JOINEDDATE": "2022-06-22T00:00:00",
        "LONGITUDE": 1000.222,
        "CREATEDAT": "2022-06-22T17:19:33",
        "FIRSTNAME": "Shivam",
        "POSTG": true,
        "HEIGHT": "169",
        "CREATEDATTS": "2022-06-22T17:19:33",
        "ISEMPLOYED": true,
        "LATITUDE": 2000.89,
        "AGE": "25"
    },
    {
        "CITY": "MUM",
        "LASTNAME": "Kreet",
        "JOINEDDATE": "2022-09-07T00:00:00",
        "LONGITUDE": 10500.01,
        "CREATEDAT": "2022-09-07T17:19:33",
        "FIRSTNAME": "Rakul",
        "POSTG": true,
        "HEIGHT": "155",
        "CREATEDATTS": "2022-09-07T17:19:33",
        "ISEMPLOYED": false,
        "LATITUDE": 2500.89,
        "AGE": "42"
    },
    {
        "CITY": "MAN",
        "LASTNAME": "Lee",
        "JOINEDDATE": "2022-09-14T00:00:00",
        "LONGITUDE": 1000.222,
        "CREATEDAT": "2022-09-14T05:02:33",
        "FIRSTNAME": "Denzel",
        "POSTG": true,
        "HEIGHT": "185",
        "CREATEDATTS": "2022-09-14T05:02:33",
        "ISEMPLOYED": true,
        "LATITUDE": 123.89,
        "AGE": "16"
    }
  ]
}
```

+++

### Create a source connection for filtered data

To create a source connection and ingest filtered data, make a POST request to the `/sourceConnections` endpoint and provide your filtering conditions in the request body parameters.

**API format**

```http
POST /sourceConnections
```

+++Request

The following request creates a source connection to ingest data from `test1.fasTestTable` where `city` = `DDN`.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "BigQuery Source Connection",
      "description": "Source Connection for Filter test",
      "baseConnectionId": "89d1459e-3cd0-4069-acb3-68f240db4eeb",
      "data": {
        "format": "tabular"
      },
      "params": {
        "tableName": "test1.fasTestTable",
        "filters": {
          "type": "PQL",
          "format": "pql/json",
          "value": {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "city"
              },
              {
                "nodeType": "literal",
                "value": "DDN"
              }
            ]
          }
        }
      },
      "connectionSpec": {
        "id": "3c9b37f8-13a6-43d8-bad3-b863b941fedd",
        "version": "1.0"
      }
    }'
```

+++

+++Response

A successful response returns the unique identifier (`id`) of the newly created source connection. 

```json
{
    "id": "b7581b59-c603-4df1-a689-d23d7ac440f3",
    "etag": "\"ef05d265-0000-0200-0000-6019e0080000\""
}
```

+++

## Filter activity entities for [!DNL Marketo Engage] {#filter-for-marketo}

You can use row-level filtering to filter for activity entities when using the [[!DNL Marketo Engage] source connector](../../connectors/adobe-applications/marketo/marketo.md). Currently, you can only filter for activity entities and standard activity types. Custom activities remain governed under [[!DNL Marketo] field mappings](../../connectors/adobe-applications/mapping/marketo.md).

### [!DNL Marketo] standard activity types {#marketo-standard-activity-types}

The following table outlines the standard activity types for [!DNL Marketo]. Use this table as reference for your filtering criteria.

| Activity type ID | Activity type name |
| --- | --- |
| 1 | Visit Webpage |
| 2 |  Fill Out Form | 
| 3 | Click Link | 
| 6 | Send Email |
| 7 | Email Delivered |
| 8 | Email Bounced |
| 9 | Unsubscribe Email |
| 10 | Open Email |
| 11 | Click Email |
| 12 | New Lead |
| 21 | Convert Lead |
| 22 | Change Score |
| 24 | Add to List |
| 25 | Remove from List |
| 27 | Email Bounced Soft |
| 32 | Merge Leads |
| 34 | Add to Opportunity |
| 35 | Remove from Opportunity |
| 36 | Update Opportunity |
| 46 | Interesting Moment |
| 101 | Change Revenue Stage |
| 104 | Change Status in Progression |
| 110 | Call Webhook |
| 113 | Add to Nurture |
| 114 | Change Nurture Track |
| 115 | Change Nurture Cadence |

{style="table-layout:auto"}

Follow the steps below to filter your standard activity entities when using the [!DNL Marketo] source connector.

### Create a draft dataflow

First, create a [[!DNL Marketo] dataflow](../ui/create/adobe-applications/marketo.md) and save it as a draft. Refer to the following documentation for detailed steps on how to create a draft dataflow:

* [Save a dataflow as a draft using the UI](../ui/draft.md)
* [Save a dataflow as a draft using the API](../api/draft.md)

### Retrieve your dataflow ID

Once you have a drafted dataflow, you must then retrieve its corresponding ID.

In the UI, navigate to the sources catalog and then select **[!UICONTROL Dataflows]** from the top header. Use the status column to identify all dataflows that were saved in draft mode, and then select your dataflow's name. Next, use the **[!UICONTROL Properties]** panel on the right to locate your dataflow ID. 

### Retrieve your dataflow details

Next, you must retrieve your dataflow details, particularly the source connection ID associated with your dataflow. To retrieve your dataflow details, make a GET request to the `/flows` endpoint and provide your dataflow ID as a path parameter.

**API format**

```http
GET /flows/{FLOW_ID}
```

| Parameter | Description |
| --- | --- |
| `{FLOW_ID}` | The ID of the dataflow that you want to retrieve. |

+++Request

The following request retrieves information on dataflow ID: `a7e88a01-40f9-4ebf-80b2-0fc838ff82ef`.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/flows/a7e88a01-40f9-4ebf-80b2-0fc838ff82ef' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

+++Response

A successful response returns your dataflow details, including information on its corresponding source and target connections. You must take note of your source and target connection IDs, as these values are required later, in order to publish your dataflow.

```json {line-numbers="true" start-line="1" highlight="23, 26"}
{
    "items": [
        {
            "id": "a7e88a01-40f9-4ebf-80b2-0fc838ff82ef",
            "createdAt": 1728592929650,
            "updatedAt": 1728597187444,
            "createdBy": "acme@AdobeID",
            "updatedBy": "acme@AdobeID",
            "createdClient": "exc_app",
            "updatedClient": "acme",
            "sandboxId": "7f3419ce-53e2-476b-b419-ce53e2376b02",
            "sandboxName": "prod",
            "imsOrgId": "acme@AdobeOrg",
            "name": "Marketo Engage Standard Activities ACME",
            "description": "",
            "flowSpec": {
                "id": "15f8402c-ba66-4626-b54c-9f8e54244d61",
                "version": "1.0"
            },
            "state": "enabled",
            "version": "\"600290fc-0000-0200-0000-67084cc30000\"",
            "etag": "\"600290fc-0000-0200-0000-67084cc30000\"",
            "sourceConnectionIds": [
                "56f7eb3a-b544-4eaa-b167-ef1711044c7a"
            ],
            "targetConnectionIds": [
                "7e53e6e8-b432-4134-bb29-21fc6e8532e5"
            ],
            "inheritedAttributes": {
                "properties": {
                    "isSourceFlow": true
                },
                "sourceConnections": [
                    {
                        "id": "56f7eb3a-b544-4eaa-b167-ef1711044c7a",
                        "connectionSpec": {
                            "id": "bf1f4218-73ce-4ff0-b744-48d78ffae2e4",
                            "version": "1.0"
                        },
                        "baseConnection": {
                            "id": "0137118b-373a-4c4e-847c-13a0abf73b33",
                            "connectionSpec": {
                                "id": "bf1f4218-73ce-4ff0-b744-48d78ffae2e4",
                                "version": "1.0"
                            }
                        }
                    }
                ],
                "targetConnections": [
                    {
                        "id": "7e53e6e8-b432-4134-bb29-21fc6e8532e5",
                        "connectionSpec": {
                            "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
                            "version": "1.0"
                        }
                    }
                ]
            },
            "options": {
                "isSampleDataflow": false,
                "errorDiagnosticsEnabled": true
            },
            "transformations": [
                {
                    "name": "Mapping",
                    "params": {
                        "mappingVersion": 0,
                        "mappingId": "f6447514ef95482889fac1818972e285"
                    }
                }
            ],
            "runs": "/runs?property=flowId==a7e88a01-40f9-4ebf-80b2-0fc838ff82ef",
            "lastOperation": {
                "started": 1728592929650,
                "updated": 0,
                "operation": "create"
            },
            "lastRunDetails": {
                "id": "2d7863d5-ca4d-4313-ac52-2603eaf2cdbe",
                "state": "success",
                "startedAtUTC": 1728594713537,
                "completedAtUTC": 1728597183080
            },
            "labels": [],
            "recordTypes": [
                {
                    "type": "experienceevent",
                    "extensions": {}
                }
            ]
        }
    ]
}
```

+++

### Retrieve your source connection details

Next, use your source connection ID and make a GET request to the `/sourceConnections` endpoint to retrieve your source connection details.

**API format**

```http
GET /sourceConnections/{SOURCE_CONNECTION_ID}
```

| Parameter | Description |
| --- | --- |
| `{SOURCE_CONNECTION_ID}` | The ID of the source connection that you want to retrieve. |

+++Request

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections/56f7eb3a-b544-4eaa-b167-ef1711044c7a' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

+++Response

A successful response returns the details of your source connection. Take note of the version as you will need this value in the next step in order to update your source connection.

```json {line-numbers="true" start-line="1" highlight="30"}
{
    "items": [
        {
            "id": "b85b895f-a289-42e9-8fe1-ae448ccc7e53",
            "createdAt": 1729634331185,
            "updatedAt": 1729634331185,
            "createdBy": "acme@AdobeID",
            "updatedBy": "acme@AdobeID",
            "createdClient": "exc_app",
            "updatedClient": "acme",
            "sandboxId": "7f3419ce-53e2-476b-b419-ce53e2376b02",
            "sandboxName": "prod",
            "imsOrgId": "acme@AdobeOrg",
            "name": "New Source Connection - 2024-10-23T03:28:50+05:30",
            "description": "Source connection created from the workflow",
            "baseConnectionId": "fd9f7455-1e23-4831-9283-7717e20bee40",
            "state": "draft",
            "data": {
                "format": "tabular",
                "schema": null,
                "properties": null
            },
            "connectionSpec": {
                "id": "2d31dfd1-df1a-456b-948f-226e040ba102",
                "version": "1.0"
            },
            "params": {
                "columns": [],
                "tableName": "Activity"
            },
            "version": "\"210068a6-0000-0200-0000-6718201b0000\"",
            "etag": "\"210068a6-0000-0200-0000-6718201b0000\"",
            "inheritedAttributes": {
                "baseConnection": {
                    "id": "fd9f7455-1e23-4831-9283-7717e20bee40",
                    "connectionSpec": {
                        "id": "2d31dfd1-df1a-456b-948f-226e040ba102",
                        "version": "1.0"
                    }
                }
            },
            "lastOperation": {
                "started": 1729634331185,
                "updated": 0,
                "operation": "draft_create"
            }
        }
    ]
}
```

+++

### Update your source connection with filtering conditions

Now that you have your source connection ID and its corresponding version, you can now make a PATCH request with the filter conditions that specify your standard activity types. 

To update your source connection, make a PATCH request to the `/sourceConnections` endpoint and provide your source connection ID as a query parameter. Additionally, you must provide an `If-Match` header parameter, with the corresponding version of your source connection.

>[!TIP]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version/etag of the dataflow you want to update. The version/etag value updates with every successful update of a dataflow.

**API format**

```http
PATCH /sourceConnections/{SOURCE_CONNECTION_ID}
```

| Parameter | Description |
| --- | --- |
| `{SOURCE_CONNECTION_ID}` | The ID of the source connection that you want to update |

+++Request

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections/56f7eb3a-b544-4eaa-b167-ef1711044c7a' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'If-Match: {VERSION_HERE}'
  -d '
      {
        "op": "add",
        "path": "/params/filters",
        "value": {
            "type": "PQL",
            "format": "pql/json",
            "value": {
                "nodeType": "fnApply",
                "fnName": "in",
                "params": [
                    {
                        "nodeType": "fieldLookup",
                        "fieldName": "activityType"
                    },
                    {
                        "nodeType": "literal",
                        "value": [
                            "Change Status in Progression",
                            "Fill Out Form"
                        ]
                    }
                ]
            }
        }
    }'
```

+++

+++Response

A successful response returns your source connection ID and etag (version).

```json
{
    "id": "56f7eb3a-b544-4eaa-b167-ef1711044c7a",
    "etag": "\"210068a6-0000-0200-0000-6718201b0000\""
}
```

+++

### Publish your source connection

With your source connection updated with your filtering conditions, you can now move on from the draft state and publish your source connection. To do so, make a POST request to the `/sourceConnections` endpoint and provide the ID of your draft source connection as well as an action operation for publishing.

**API format**

```http
POST /sourceConnections/{SOURCE_CONNECTION_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `{SOURCE_CONNECTION_ID}` | The ID of the source connection that you want to publish. |
| `op` | An action operation that updates the state of the queried source connection. To publish a draft source connection, set `op` to `publish`. |

+++Request

The following request publishes a drafted source connection.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections/56f7eb3a-b544-4eaa-b167-ef1711044c7a/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

+++Response

A successful response returns your source connection ID and etag (version).

```json
{
    "id": "56f7eb3a-b544-4eaa-b167-ef1711044c7a",
    "etag": "\"9f007f7b-0000-0200-0000-670ef1150000\""
}
```

+++

### Publish your target connection

Similar to the previous step, you must also publish your target connection, in order to proceed and publish your draft dataflow. Make a POST request to the `/targetConnections` endpoint and provide the ID of the draft target connection that you want to publish, as well as an action operation for publishing.

**API format**

```http
POST /targetConnections/{TARGET_CONNECTION_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `{TARGET_CONNECTION_ID}` | The ID of the target connection that you want to publish. |
| `op` | An action operation that updates the state of the queried target connection. To publish a draft target connection, set `op` to `publish`. |

+++Request

The following request publishes the target connection with ID: `7e53e6e8-b432-4134-bb29-21fc6e8532e5`.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections/7e53e6e8-b432-4134-bb29-21fc6e8532e5/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

+++Response

A successful response returns the ID and corresponding etag for your published target connection.

```json
{
    "id": "7e53e6e8-b432-4134-bb29-21fc6e8532e5",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

+++


### Publish your dataflow

With your source and target connections both published, you can now proceed to the final step and publish your dataflow. To publish your dataflow, make a POST request to the `/flows` endpoint and provide your dataflow ID and an action operation for publishing.

**API format**

```http
POST /flows/{FLOW_ID}/action?op=publish
```

| Parameter | Description |
| --- | --- |
| `{FLOW_ID}` | The ID of the dataflow that you want to publish. |
| `op` | An action operation that updates the state of the queried dataflow. To publish a draft dataflow, set `op` to `publish`. |

+++Request

The following request publishes your draft dataflow.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows/a7e88a01-40f9-4ebf-80b2-0fc838ff82ef/action?op=publish' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

+++Response

A successful response returns the ID and corresponding `etag` of your dataflow.

```json
{
  "id": "a7e88a01-40f9-4ebf-80b2-0fc838ff82ef",
  "etag": "\"4b0354b7-0000-0200-0000-6716ce1f0000\""
}
```

+++

You can use the Experience Platform UI to verify that your draft dataflow has been published. Navigate to the dataflows page in the sources catalog and reference the **[!UICONTROL Status]** of your dataflow. If successful, the status should now be set to **Enabled**.

>[!TIP]
>
>* A dataflow with filtering enabled will only be backfilled once. Any changes in the that you make in the filtering criteria (be it an addition or a removal) can only take effect for incremental data.
>* If you need to ingest historical data for any new activity type(s), you are recommended to create a new dataflow and define the filtering criteria with the appropriate activity types in the filter condition.
>* You cannot filter custom activity types.
>* You cannot preview filtered data.

## Appendix

This section provides further examples of different payloads for filtering.

### Singular conditions

You can omit the initial `fnApply` for scenarios that only require one condition.

+++Select to view example

```json
{
  "type": "PQL",
  "format": "pql/json",
  "value": {
    "nodeType": "fnApply",
    "fnName": "like",
    "params": [
      {
        "nodeType": "fieldLookup",
        "fieldName": "firstname"
      },
      {
        "nodeType": "literal",
        "value": "%s"
      }
    ]
  }
}
```

+++

### Using the `in` operator

See the sample payload below for an example of the operator `in`.

+++Select to view example

```json
{
  "type": "PQL",
  "format": "pql/json",
  "value": {
    "nodeType": "fnApply",
    "fnName": "and",
    "params": [
      {
        "nodeType": "fnApply",
        "fnName": "in",
        "params": [
          {
            "nodeType": "fieldLookup",
            "fieldName": "firstname"
          },
          {
            "nodeType": "literal",
            "value": [
              "Ramen",
              "John"
            ]
          }
        ]
      }
    ]
  }
}
```

+++

### Using the `isNull` operator

+++Select to view example

See the sample payload below for an example of the operator `isNull`.

```json
{
  "type": "PQL",
  "format": "pql/json",
  "value": {
    "nodeType": "fnApply",
    "fnName": "isNull",
    "params": [
      {
        "nodeType": "fieldLookup",
        "fieldName": "complaint_type"
      }
    ]
  }
}
```

+++

### Using the `NOT` operator

See the sample payload below for an example of the operator `NOT`.


+++Select to view example

```json
{
  "type": "PQL",
  "format": "pql/json",
  "value": {
    "nodeType": "fnApply",
    "fnName": "NOT",
    "params": [
      {
        "nodeType": "fnApply",
        "fnName": "isNull",
        "params": [
          {
            "nodeType": "fieldLookup",
            "fieldName": "complaint_type"
          }
        ]
      }
    ]
  }
}
```

+++

### Example with nested conditions

See the sample payload below for an example of complex nested conditions.

+++Select to view example

```json
{
  "type": "PQL",
  "format": "pql/json",
  "value": {
    "nodeType": "fnApply",
    "fnName": "and",
    "params": [
      {
        "nodeType": "fnApply",
        "fnName": ">=",
        "params": [
          {
            "nodeType": "fieldLookup",
            "fieldName": "age"
          },
          {
            "nodeType": "literal",
            "value": 20
          }
        ]
      },
      {
        "nodeType": "fnApply",
        "fnName": "<=",
        "params": [
          {
            "nodeType": "fieldLookup",
            "fieldName": "age"
          },
          {
            "nodeType": "literal",
            "value": 30
          }
        ]
      },
      {
        "nodeType": "fnApply",
        "fnName": "or",
        "params": [
          {
            "nodeType": "fnApply",
            "fnName": "!=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "city"
              },
              {
                "nodeType": "literal",
                "value": "PUD"
              }
            ]
          },
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "joinedDate"
              },
              {
                "nodeType": "literal",
                "value": "2020-04-22"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

+++