---
title: Documentation Self-Service Template for Streaming SDK API
description: Learn how to bring streaming data from a source to Adobe Experience Platform using the Flow Service API.
exl-id: a06384a2-cd99-456d-9f00-babcf3f7b7d9
badge: Beta
---
# Create a source connection and dataflow to stream *YOURSOURCE* data using the [!DNL Flow Service] API

*As you go through this template, replace or delete all the paragraphs in italics (starting with this one).*

*Start by updating the metadata (title and description) at the top of the page. Please ignore all instances of DNL on this page. This is a tag that helps our machine translation processes correctly translate the page into the multiple languages that we support. We will add tags to your documentation after you submit it.*

## Overview

*Provide a short overview of your company, including the value it provides to customers. Include a link to your product documentation homepage for further reading.*

>[!IMPORTANT]
>
>This source connector and documentation page are created and maintained by the *YOURSOURCE* team. For any inquiries or update requests, please contact them directly at *Insert link or email address where you can be reached for updates*.

## Prerequisites

*Add information in this section about anything that customers need to be aware of before starting to set up the source in the Adobe Experience Platform user interface. This can be about:*

* *needing to be added to an allow list*
* *requirements for email hashing*
* *any account specifics on your side*
* *how to obtain an API key to connect to your platform*

### Gather required credentials

In order to connect *YOURSOURCE* to Experience Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| *credential one* | *Please add a brief description to your source's authentication credential here* | *Please add an example of your source's authentication credential here* |
| *credential two* | *Please add a brief description to your source's authentication credential here* | *Please add an example of your source's authentication credential here* |
| *credential three* | *Please add a brief description to your source's authentication credential here* | *Please add an example of your source's authentication credential here* |

For more information on these credentials, see the *YOURSOURCE* authentication documentation. *Please add link to your platform's authentication documentation here*.

### Integrate *YOURSOURCE* with your webhook

*Streaming SDK requires your source to be able to support webhooks in order to communicate with Experience Platform. In this section, you must provide the steps that your users will have to follow in order to integrate YOURSOURCE with a webhook.*

## Connect *YOURSOURCE* to Platform using the [!DNL Flow Service] API

The following tutorial walks you through the steps to create a *YOURSOURCE* source connection and create a dataflow to bring *YOURSOURCE* data to Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

### Create a source connection {#source-connection}

Create a source connection by making a POST request to the [!DNL Flow Service] API, while providing the connection spec ID of your source, details like name and description, and the format of your data.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for *YOURSOURCE*:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/sourceConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Streaming Source Connection for a Streaming SDK source",
      "providerId": "521eee4d-8cbe-4906-bb48-fb6bd4450033",
      "description": "Streaming Source Connection for a Streaming SDK source",
      "connectionSpec": {
          "id": "e77fd9d2-22a8-11ed-861d-0242ac120002",
          "version": "1.0"
      },
      "data": {
          "format": "json"
      }
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your source connection. Ensure that the name of your source connection is descriptive as you can use this to look up information on your source connection. |
| `description` | An optional value that you can include to provide more information on your source connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to your source. |
| `data.format` | The format of the *YOURSOURCE* data that you want to ingest. Currently, the only supported data format is `json`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
     "id": "246d052c-da4a-494a-937f-a0d17b1c6cf5",
     "etag": "\"712a8c08-fda7-41c2-984b-187f823293d8\""
}
```

### Create a target XDM schema {#target-schema}

In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create a Platform dataset in which the source data is contained.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/api/schemas.html#create).

### Create a target dataset {#target-dataset}

A target dataset can be created by performing a POST request to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](https://experienceleague.adobe.com/docs/experience-platform/catalog/api/create-dataset.html).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the data lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the data lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for *YOURSOURCE*:


```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/targetConnections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Streaming Target Connection for a Streaming SDK source",
      "description": "Streaming Target Connection for a Streaming SDK source",
      "connectionSpec": {
          "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
          "version": "1.0"
      },
      "data": {
          "format": "json",
          "schema": {
              "id": "{TARGET_XDM_SCHEMA}",
              "version": "application/vnd.adobe.xed-full+json;version=1"
          }
      },
      "params": {
          "dataSetId": "{TARGET_DATASET}"
      }
  }'
```


| Property | Description |
| -------- | ----------- |
| `name` | The name of your target connection. Ensure that the name of your target connection is descriptive as you can use this to look up information on your target connection. |
| `description` | An optional value that you can include to provide more information on your target connection. |
| `connectionSpec.id` | The connection specification ID that corresponds to data lake. This fixed ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`. |
| `data.format` | The format of the *YOURSOURCE* data that you want to bring to Platform. |
| `params.dataSetId` | The target dataset ID retrieved in a previous step. |


**Response**

A successful response returns the new target connection's unique identifier (`id`). This ID is required in later steps.

```json
{
     "id": "7c96c827-3ffd-460c-a573-e9558f72f263",
     "etag": "\"a196f685-f5e8-4c4c-bfbd-136141bb0c6d\""
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
  'https://platform.adobe.io/data/foundation/mappingSets' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "version": 0,
      "xdmSchema": "{TARGET_XDM_SCHEMA}",
      "xdmVersion": "1.0",
      "mappings": [
          {
              "destinationXdmPath": "person.name.firstName",
              "sourceAttribute": "firstName",
              "identity": false,
              "version": 0
          },
          {
              "destinationXdmPath": "person.name.lastName",
              "sourceAttribute": "lastName",
              "identity": false,
              "version": 0
          }
      ]
  }'
```

| Property | Description |
| --- | --- |
| `xdmSchema` | The ID of the [target XDM schema](#target-schema) generated in an earlier step. |
| `mappings.destinationXdmPath` | The destination XDM path where the source attribute is being mapped to. |
| `mappings.sourceAttribute` | The source attribute that needs to be mapped to a destination XDM path. |
| `mappings.identity` | A boolean value that designates whether the mapping set will be marked for [!DNL Identity Service]. |

**Response**

A successful response returns details of the newly created mapping including its unique identifier (`id`). This value is required in a later step to create a dataflow.

```json
{
    "id": "bf5286a9c1ad4266baca76ba3adc9366",
    "version": 0,
    "createdDate": 1597784069368,
    "modifiedDate": 1597784069368,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}"
}
```

### Create a flow {#flow}

The last step towards bringing data from *YOURSOURCE* to Platform is to create a dataflow. By now, you have the following required values prepared:

* [Source connection ID](#source-connection)
* [Target connection ID](#target-connection)
* [Mapping ID](#mapping)

A dataflow is responsible for scheduling and collecting data from a source. You can create a dataflow by performing a POST request while providing the previously mentioned values within the payload.

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
      "name": "Streaming Dataflow for a Streaming SDK source",
      "description": "Streaming Dataflow for a Streaming SDK source",
      "flowSpec": {
          "id": "e77fde5a-22a8-11ed-861d-0242ac120002",
          "version": "1.0"
      },
      "sourceConnectionIds": [
          "246d052c-da4a-494a-937f-a0d17b1c6cf5"
      ],
      "targetConnectionIds": [
          "7c96c827-3ffd-460c-a573-e9558f72f263"
      ],
      "transformations": [
      {
        "name": "Mapping",
        "params": {
          "mappingId": "bf5286a9c1ad4266baca76ba3adc9366",
          "mappingVersion": 0
        }
      }
    ]
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your dataflow. Ensure that the name of your dataflow is descriptive as you can use this to look up information on your dataflow. |
| `description` | An optional value that you can include to provide more information on your dataflow. |
| `flowSpec.id` | The flow specification ID required to create a dataflow. This fixed ID is: `e77fde5a-22a8-11ed-861d-0242ac120002`. |
| `flowSpec.version` | The corresponding version of the flow specification ID. This value defaults to `1.0`. |
| `sourceConnectionIds` | The [source connection ID](#source-connection) generated in an earlier step. |
| `targetConnectionIds` | The [target connection ID](#target-connection) generated in an earlier step. |
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Platform. |
| `transformations.name` | The name assigned to the transformation. |
| `transformations.params.mappingId` | The [mapping ID](#mapping) generated in an earlier step. |
| `transformations.params.mappingVersion` | The corresponding version of the mapping ID. This value defaults to `0`. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow. You can use this ID to monitor, update, or delete your dataflow.

```json
{
     "id": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
     "etag": "\"510bb1d4-8453-4034-b991-ab942e11dd8a\""
}
```

### Get your streaming endpoint URL

With your dataflow created, you can now retrieve your streaming endpoint URL. You will use this endpoint URL to subscribe your source to a webhook, allowing your source to communicate with Experience Platform.

To retrieve your streaming endpoint URL, make a GET request to the `/flows` endpoint and provide the ID of your dataflow.

**API format**

```http
GET /flows/{FLOW_ID}
```

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/flows/993f908f-3342-4d9c-9f3c-5aa9a189ca1a' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns information on your dataflow, including your endpoint URL, marked as `inletUrl`.

```json
{
  "items": [
    {
      "id": "993f908f-3342-4d9c-9f3c-5aa9a189ca1a",
      "createdAt": 1669238699119,
      "updatedAt": 1669238699119,
      "createdBy": "acme@AdobeID",
      "updatedBy": "acme@AdobeID",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{UPDATED_CLIENT}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "{SANDBOX_NAME}",
      "imsOrgId": "{ORG_ID}",
      "name": "Streaming Dataflow for a Streaming SDK source",
      "description": "Streaming Dataflow for a Streaming SDK source",
      "flowSpec": {
        "id": "e77fde5a-22a8-11ed-861d-0242ac120002",
        "version": "1.0"
      },
      "state": "enabled",
      "version": "\"a1011225-0000-0200-0000-63c78ae60000\"",
      "etag": "\"a1011225-0000-0200-0000-63c78ae60000\"",
      "sourceConnectionIds": [
        "246d052c-da4a-494a-937f-a0d17b1c6cf5"
      ],
      "targetConnectionIds": [
        "7c96c827-3ffd-460c-a573-e9558f72f263"
      ],
      "inheritedAttributes": {
        "properties": {
          "isSourceFlow": true
        },
        "sourceConnections": [
          {
            "id": "246d052c-da4a-494a-937f-a0d17b1c6cf5",
            "connectionSpec": {
              "id": "bdb5b792-451b-42de-acf8-15f3195821de",
              "version": "1.0"
            }
          }
        ],
        "targetConnections": [
          {
            "id": "7c96c827-3ffd-460c-a573-e9558f72f263",
            "connectionSpec": {
              "id": "c604ff05-7f1a-43c0-8e18-33bf874cb11c",
              "version": "1.0"
            }
          }
        ]
      },
      "options": {
        "errorDiagnosticsEnabled": true,
        "inletUrl": "https://dcs-int.adobedc.net/collection/ab65636c31778fb0455c439ffb48a5433a34d443f4c83c4b5beda9c5688797c5"
      },
      "transformations": [
        {
          "name": "Mapping",
          "params": {
            "mappingVersion": 0,
            "mappingId": "bf5286a9c1ad4266baca76ba3adc9366"
          }
        }
      ],
      "runs": "/runs?property=flowId==e1514b79-f031-43b4-aab5-381a42f86ad4",
      "providerRefId": "c9809ab5-71e0-4c7f-887b-61c95e4e20b5",
      "lastOperation": {
        "started": 0,
        "updated": 0,
        "operation": "enable"
      }
    }
  ]
}
```

## Appendix 

The following section provides information on the steps you can to monitor, update, and delete your dataflow.

### Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on flow runs, completion status, and errors. For complete API examples, read the guide on [monitoring your sources dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/monitor.html).

### Update your dataflow

Update the details of your dataflow, such as its name and description, as well as its run schedule and associated mapping sets by making a PATCH request to the `/flows` endpoint of [!DNL Flow Service] API, while providing the ID of your dataflow. When making a PATCH request, you must provide your dataflow's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating sources dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/update-dataflows.html)

### Update your account

Update the name, description, and credentials of your source account by performing a PATCH request to the [!DNL Flow Service] API while providing your base connection ID as a query parameter. When making a PATCH request, you must provide your source account's unique `etag` in the `If-Match` header. For complete API examples, read the guide on [updating your source account using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/update.html).

### Delete your dataflow

Delete your dataflow by performing a DELETE request to the [!DNL Flow Service] API while providing the ID of the dataflow you want to delete as part of the query parameter. For complete API examples, read the guide on [deleting your dataflows using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/delete-dataflows.html).

### Delete your account

Delete your account by performing a DELETE request to the [!DNL Flow Service] API while providing the base connection ID of the account you want to delete. For complete API examples, read the guide on [deleting your source account using the API](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/delete.html).
