---
title: Create a source connection and dataflow to stream LAVA data using the Flow Service API
description: Learn how to bring streaming data from LAVA to Adobe Experience Platform using the Flow Service API.
exl-id: a06384a2-cd99-456d-9f00-babcf3f7b7d9
badge: Beta
---
# Create a source connection and dataflow to stream [!DNL LAVA] data using the [!DNL Flow Service] API

## Overview

[LAVA](https://lava.ai/) is a customer engagement platform. [!DNL LAVA] integrates with your ticketing, point of sales, mobile app and other touch points and creates moments that matter with our automation, loyalty and mobile pass solutions. 

>[!IMPORTANT]
>
>This documentation page was created by the [!DNL LAVA] team. For any inquiries or update requests, please contact them directly at info@lava.ai.

The [!DNL LAVA] Source Connector can be used for several different sets of profile data and events. You can decide which are relevant for you. For each type of data you would like to stream from [!DNL LAVA] to Adobe repeat the "Connect your LAVA account" steps.

### Member Profiles

The member profile lists key profile attributes LAVA stores on a member. By using `email` as an identity field, [!DNL Adobe Real-time Customer Profiles] can stitch [!DNL LAVA] records with other Adobe profiles.

| [!DNL LAVA] Source Connector Field | Sample Value                         | Description                                     |
| ---------------------------------- | ------------------------------------ | ----------------------------------------------- |
| `lavaId`                           | c448e091-af0f-4eab-98ff-2c758c149051 | The [!DNL LAVA] ID for the user.                |
| `firstName`                        | John                                 | The user's first name.                          |
| `lastName`                         | Doe                                  | The user's last name.                           |
| `email`                            | jdoe@example.com                     | The user's email address.                       |
| `phone`                            | +12223334444                         | The user's phone number.                        |
| `type`                             | profile                              | An indicator for what type of record this is.   |
| `id`                               | c448e091-af0f-4eab-98ff-2c758c149051 | A unique ID for the the record.                 |
| `timestamp`                        | 2025-10-22T12:51:04.317084Z          | When this the profile had these attributes set. |

[Sample data file download](lava_profile_sample.json).

### Member Balances

The member balance source lists balances of rewards your members have. `balances` is an array. When using these in audiences, content personalization, conditions and other such locations, you will often have to either select out one particular entry, repeat something for all entries, or aggregate across several entries.

| [!DNL LAVA] Source Connector Field | Sample Value                         | Description                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lavaId`                           | c448e091-af0f-4eab-98ff-2c758c149051 | The [!DNL LAVA] ID for the user.                                                                                                                                                                                                                                                                       |
| `balances[]`                       |                                      | List of reward balances in LAVA. A balance is an instance of a reward with a specific expiration. If a member has some amount of reward expiring on date A and some amount of the same reward expiring on date B, they will be recorded as separate balances. See balanceSummaries for an aggregation. |
| `balances[].amount`                | 500                                  | The amount of reward items in this balance. For stored value, this is in the lowest unit of denomination (cents).                                                                                                                                                                                      |
| `balances[].expiresAt`             | 2025-10-22T12:51:04.317084Z          | When this balance expires.                                                                                                                                                                                                                                                                             |
| `balances[].rewardId`              | 123                                  | The ID for a [!DNL LAVA] reward. This never changes for a given reward.                                                                                                                                                                                                                                |
| `balances[].rewardName`            | F&B Credit                           | The name for the reward configured in the [!DNL LAVA] Moment Activation Console. This can be changed.                                                                                                                                                                                                  |
| `balances[].rewardSlug`            | Credit                               | The primary slug for the reward configured in the [!DNL LAVA] Moment Activation Console. This can be changed.                                                                                                                                                                                          |
| `balances[].rewardType`            | stored                               | The type of reward (access, offer, points, stored or voucher)                                                                                                                                                                                                                                          |
| `type`                             | rewards                              | An indicator for what type of record this is.                                                                                                                                                                                                                                                          |
| `id`                               | 8fefe232-0375-4d56-a24c-d009e9d351e8 | A unique ID for the the record.                                                                                                                                                                                                                                                                        |
| `timestamp`                        | 2025-10-22T12:51:04.317084Z          | When this data was recorded.                                                                                                                                                                                                                                                                           |

[Sample data file download](lava_balance_sample.json).

### Ticket Scan Events

| [!DNL LAVA] Source Connector Field | Sample Value                         | Description                                                     |
| ---------------------------------- | ------------------------------------ | --------------------------------------------------------------- |
| `lavaId`                           | aff0ee5f-da62-4054-8cdb-076f5b60bfc3 | The [!DNL LAVA] ID for the user who scanned the ticket.         |
| `eventId`                          | 1234                                 | Identifier for an event provided by a ticketing service.        |
| `eventName`                        | GRE1234A                             | The event name provided by the ticketing service.               |
| `eventLabel`                       | Green Vs Blue                        | Description of an event as provided by the ticketing provider.  |
| `venue`                            | ABC                                  | Venue code used by the ticketing provider.                      |
| `venueLabel`                       | ABC Stadium                          | Description of the venue as provided by the ticketing provider. |
| `section`                          | GA4                                  | Seating section on the scanned ticket.                          |
| `sectionLabel`                     | General                              | A label for the section provided by the ticketing provider.     |
| `row`                              | GA3                                  | Row on the scanned ticket.                                      |
| `seat`                             | 13                                   | Seat on the scanned ticket.                                     |
| `gate`                             | TEAM ST1                             | gate on the scanned ticket.                                     |
| `gateLabel`                        | General                              | A label for the gate provided by the ticket provider.           |
| `type`                             | event-ticketscan                     | An indicator for what type of record this is.                   |
| `id`                               | 1234567/GRE1234A/GA4/GA3/13/0        | A unique ID for the ticket scan event.                          |
| `timestamp`                        | 2025-11-03T01:41:00Z                 | When the ticket scan occurred.                                  |

[Sample data file download](lava_ticketscan_sample.json).

## Prerequisites

To use this source connector you must:

* Be an existing [!DNL LAVA] customer with Adobe export entitlement.
* Have an account on the [LAVA Console](https://app.lava.ai/) with "[!UICONTROL Administrator]" or "[!UICONTROL Export Manager]" role.
* (Recommended) Have sandbox manager permission in Adobe Experience Cloud.

## (Recommended) Load the [!DNL LAVA] package

[!DNL LAVA] provides a package that includes our recommended field groups, schemas, identity namespace and datasets for using [!DNL LAVA] in Adobe Experience Platform. This section details how to import this into your sandbox and get the IDs required for later steps. Using the package is not required, you can instead create your own schemas and datasets.

**API format**

```https
POST /transfer/pullRequest
```

**Request**

The following request loads the package for [!DNL LAVA]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/exim/transfer/pullRequest' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "imsOrgId": "1EF71E43679AAD1E0A495C77@AdobeOrg",
    "packageId": "416a0c2a32794092aa1a957cbe9a6698"
  }'
```


| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `imsOrgId` | The id from the package's source organization. Must be `1EF71E43679AAD1E0A495C77@AdobeOrg`. | String | Yes |
| `packageId` | The id from the package to import. Must be `416a0c2a32794092aa1a957cbe9a6698`. | String | Yes |

**Response**

A succcessful response returns details on the imported public package.

```json
{
    "id": "{ID}",
    "version": 0,
    "createdDate": 1729658890425,
    "modifiedDate": 1729658890425,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}",
    "sourceIMSOrgId": "{ORG_ID}",
    "targetIMSOrgId": "{TARGET_ID}",
    "packageId": "{PACKAGE_ID}",
    "status": "PENDING",
    "initiatedBy": "{INITIATED_BY}",
    "pipelineMessageId": "{MESSAGE_ID}",
    "requestType": "PUBLIC"
}
```

After importing the package, retrieve the `LAVA Events` and `LAVA Profile` scheamas:

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas?name=LAVA*' \
  -H 'Authorization: Bearer {{ACCESS_TOKEN}}' \
  -H 'x-api-key: {{API_KEY}}' \
  -H 'x-gw-ims-org-id: {{ORG_ID}}' \
  -H 'x-sandbox-name: {{SANDBOX_NAME}}' \
  -H 'Accept: application/vnd.adobe.xed-id+json'
```

**Response**

A successful respons returns a list of schemas. Use these IDs as target XDM schemas below.

```json
{
  "results": [
    ...
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/7ff102f217d394e8beff48dcc2c27baae14e28e210d36492",
      "meta:altId": "_{TENANT_ID}.schemas.7ff102f217d394e8beff48dcc2c27baae14e28e210d36492",
      "version": "1.4",
      "title": "LAVA Events"
    },
    {
      "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/991bed7f1d94ccf47bd392bc345ee51e7e0bd19b1de3dbff",
      "meta:altId": "_{TENANT_ID}.schemas.991bed7f1d94ccf47bd392bc345ee51e7e0bd19b1de3dbff",
      "version": "1.2",
      "title": "LAVA Profile"
    },
    //...
  ]
}
```

Retrieve the Dataset IDs. Use these IDs as target datasets below.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?name=LAVA*' \
  -H 'Authorization: Bearer {{ACCESS_TOKEN}}' \
  -H 'x-api-key: {{API_KEY}}' \
  -H 'x-gw-ims-org-id: {{ORG_ID}}' \
  -H 'x-sandbox-name: {{SANDBOX_NAME}}' \
  -H 'Accept: application/json'
```

**Response**

```json
{
  "6920eb494131bfcc10305302": {
    "id": "6920eb494131bfcc10305302",
    "name": "LAVA Member Profiles",
    //...
  },
  "6920eb7565bd3ed93a35cd0e": {
    "id": "6920eb7565bd3ed93a35cd0e",
    "name": "LAVA Member Rewards",
    //...
  },
  "6924aecd8d9c85e2d56261e3": {
    "id": "6924aecd8d9c85e2d56261e3",
    "name": "LAVA Events",
    "schemaRef": {
      "id": "https://ns.adobe.com/{TENANT_ID}/schemas/7ff102f217d394e8beff48dcc2c27baae14e28e210d36492",
      "contentType": "application/vnd.adobe.xed-full+json;version=1"
    },
    //...
  }
}
```

## Connect [!DNL LAVA] to Experience Platform using the [!DNL Flow Service] API

The following tutorial walks you through the steps to create a [!DNL LAVA] source connection and create a dataflow to bring [!DNL LAVA] data to Experience Platform using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

### Create a source connection {#source-connection}

Create a source connection by making a POST request to the [!DNL Flow Service] API, while providing the connection spec ID of your source, details like name and description, and the format of your data.

**API format**

```https
POST /sourceConnections
```

**Request**

The following request creates a source connection for [!DNL LAVA]:

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
      "description": "Streaming Source Connection for a Streaming SDK source",
      "connectionSpec": {
          "id": "232dfabe-27aa-41c0-a7cf-9961661dc68b",
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
| `connectionSpec.id` | The connection specification ID that corresponds to your source. Must be `232dfabe-27aa-41c0-a7cf-9961661dc68b` for [!DNL LAVA]. |
| `data.format` | The format of the [!DNL LAVA] data that you want to ingest. Currently, the only supported data format is `json`. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created source connection. This ID is required in a later step to create a dataflow.

```json
{
     "id": "246d052c-da4a-494a-937f-a0d17b1c6cf5",
     "etag": "\"712a8c08-fda7-41c2-984b-187f823293d8\""
}
```

### Create a target XDM schema {#target-schema}

Skip this if you imported the [!DNL LAVA] package, as this includes target XDM schemas.

In order for the source data to be used in Experience Platform, a target schema must be created to structure the source data according to your needs. The target schema is then used to create an Experience Platform dataset in which the source data is contained. If you are using multiple LAVA sets of data, for example both member balances and ticket scan events, you may want or need more than one target XDM schema.

A target XDM schema can be created by performing a POST request to the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/).

For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](https://experienceleague.adobe.com/docs/experience-platform/xdm/api/schemas.html#create).

### Create a target dataset {#target-dataset}

Skip this if you imported the [!DNL LAVA] package, as this includes target XDM dataset. If you are using multiple LAVA sets of data, for example both member balances and ticket scan events, you may want or need more than one target dataset.

A target dataset can be created by performing a POST request to the [Catalog Service API](https://developer.adobe.com/experience-platform-apis/references/catalog/), providing the ID of the target schema within the payload.

For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](https://experienceleague.adobe.com/docs/experience-platform/catalog/api/create-dataset.html).

### Create a target connection {#target-connection}

A target connection represents the connection to the destination where the ingested data is to be stored. To create a target connection, you must provide the fixed connection specification ID that corresponds to the data lake. This ID is: `c604ff05-7f1a-43c0-8e18-33bf874cb11c`.

You now have the unique identifiers a target schema a target dataset and the connection spec ID to the data lake. Using these identifiers, you can create a target connection using the [!DNL Flow Service] API to specify the dataset that will contain the inbound source data.

**API format**

```https
POST /targetConnections
```

**Request**

The following request creates a target connection for [!DNL LAVA]:


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
| `data.format` | The format of the [!DNL LAVA] data that you want to bring to Experience Platform. |
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

If you are using [!DNL LAVA]'s provided schema, we recommended the following mapping:

For member profiles:

```json
{
  "version": 0,
  "xdmSchema": "{TARGET_XDM_SCHEMA}",
  "xdmVersion": "1.0",
  "mappings": [
    {
      "destinationXdmPath": "_{TENANT_ID}.lavaId",
      "sourceAttribute": "lavaId",
      "identity": false,
      "version": 0
    },
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
    },
    {
      "destinationXdmPath": "personalEmail.address",
      "sourceAttribute": "email",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "mobilePhone.number",
      "sourceAttribute": "phone",
      "identity": false,
      "version": 0
    }
  ]
}
```

For member balances:

```json
{
  "version": 0,
  "xdmSchema": "{TARGET_XDM_SCHEMA}",
  "xdmVersion": "1.0",
  "mappings": [
    {
      "destinationXdmPath": "_{TENANT_ID}.lavaId",
      "sourceAttribute": "lavaId",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.balances",
      "sourceAttribute": "balances",
      "identity": false,
      "version": 0
    }
  ]
}
```

For ticket scan events:

```json
{
  "version": 0,
  "xdmSchema": "{TARGET_XDM_SCHEMA}",
  "xdmVersion": "1.0",
  "mappings": [
    {
      "destinationXdmPath": "identityMap",
      "sourceExpression": "to_map(\"LavaId\",to_array(false,to_object(\"id\",lavaId,\"primary\",true)))",
      "sourceType": "EXPRESSION",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.eventId",
      "sourceAttribute": "eventId",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.eventName",
      "sourceAttribute": "eventName",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.eventLabel",
      "sourceAttribute": "eventLabel",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.venue",
      "sourceAttribute": "venue",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.venueLabel",
      "sourceAttribute": "venueLabel",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.section",
      "sourceAttribute": "section",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.sectionLabel",
      "sourceAttribute": "sectionLabel",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.row",
      "sourceAttribute": "row",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.seat",
      "sourceAttribute": "seat",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.gate",
      "sourceAttribute": "gate",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "_{TENANT_ID}.ticketScan.gateLabel",
      "sourceAttribute": "gateLabel",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "eventType",
      "sourceAttribute": "type",
      "identity": false,
      "version": 0
    },
    {
      "destinationXdmPath": "timestamp",
      "sourceAttribute": "timestamp",
      "identity": false,
      "version": 0
    }
  ]
}
```


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
              "destinationXdmPath": "_{TENANT_ID}.lavaId",
              "sourceAttribute": "lavaId",
              "identity": false,
              "version": 0
          },
          {
              "destinationXdmPath": "_{TENANT_ID}.balances",
              "sourceAttribute": "balances",
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

The last step towards bringing data from [!DNL LAVA] to Experience Platform is to create a dataflow. By now, you have the following required values prepared:

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
| `transformations` | This property contains the various transformations that are needed to be applied to your data. This property is required when bringing non-XDM-compliant data to Experience Platform. |
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

### Integrate [!DNL LAVA] with your webhook

In the [LAVA Console](https://app.lava.ai/) navigate to **[!UICONTROL Resources > Data Export]**.

![Data export menu](../../../../images/tutorials/create/lava/data-export-menu.png)

Click **[!UICONTROL Create New Export]**. Select **[!UICONTROL Adobe Source Connector]** as the destination type, and the desired source data to send. Use the streaming endpoint URL and dataflow ID.

![Create new export](../../../../images/tutorials/create/lava/create-export.png)



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
