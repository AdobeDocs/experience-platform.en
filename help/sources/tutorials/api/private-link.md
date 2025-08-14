---
title: Azure Private Link Support in Sources
description: Learn how to create and use Azure private links for Adobe Experience Platform Sources
badge: Beta
hide: true
hidefromtoc: true
exl-id: 9b7fc1be-5f42-4e29-b552-0b0423a40aa1
---
# [!DNL Azure ]Private Link Support in Sources

>[!AVAILABILITY]
>
>This feature is in Limited Availability and is currently only supported by the following sources:
>
>* [[!DNL Azure Blob]](../../connectors/cloud-storage/blob.md)
>* [[!DNL Azure Data Lake Gen2]](../../connectors/cloud-storage/adls-gen2.md)
>* [[!DNL Azure File Storage]](../../connectors/cloud-storage/azure-file-storage.md)
>* [[!DNL Snowflake]](../../connectors/databases/snowflake.md)

Read this guide to learn how you can establish a private endpoint connection to Azure-based sources through a private link, and allow for a more secure transfer mechanism for your data. 

## Get started 

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Create a private endpoint {#create-private-endpoint}

To create a private endpoint, make a POST request to `/privateEndpoints`.

**API format**

```http
POST /privateEndpoints
```

**Request**

The following request creates a private endpoint:

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints/' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ACME Private Endpoint",
      "subscriptionId": "4281a16a-696f-4993-a7d3-a3da32b846f3",
      "resourceGroupName": "acme-sources-experience-platform",
      "resourceName": "acmeexperienceplatform",
      "fqdns": [],
      "connectionSpec": {
          "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
          "version": "1.0"
    }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your private endpoint. |
| `subscriptionId` | The ID associated with your [!DNL Azure] subscription. For more information, read the [!DNL Azure] guide on [retrieving your subscription and tenant IDs from the [!DNL Azure Portal]](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id). |
| `resourceGroupName` | The name of your resource group on [!DNL Azure]. A resource group contains related resources for an [!DNL Azure] solution. For more information, read the [!DNL Azure] guide on [managing resource groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal). |
| `resourceName` | The name of your resource. In [!DNL Azure], a resource refers to instances like virtual machines, web apps, and databases. For more information, read the [!DNL Azure] guide on [understanding the [!DNL Azure] resource manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview). |
| `fqdns` | The fully-qualified domain names for your source. This property is required only when using the [!DNL Snowflake] source. |
| `connectionSpec.id` | The connection spec ID of the source you are using. |
| `connectionSpec.version` | The version of the connection spec ID that yo are using. |

+++

**Response**

A successful response returns the following:

+++Select to view response example

```json
{
  "id": "2c7f6574-299a-4832-aec5-886e875872e2",
  "name": "ACME Private Endpoint",
  "subscriptionId": "4281a16a-696f-4993-a7d3-a3da32b846f3",
  "resourceGroupName": "acme-sources-experience-platform",
  "resourceName": "acmeexperienceplatform",
  "fqdns": [],
  "connectionSpec": {
      "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
      "version": "1.0"
  },
  "state": "Pending"
}
```

| Property | Description |
| --- | --- |
| `id` | The ID of your newly created private endpoint. |
| `name` | The name of your private endpoint. |
| `subscriptionId` | The ID associated with your [!DNL Azure] subscription. For more information, read the [!DNL Azure] guide on [retrieving your subscription and tenant IDs from the [!DNL Azure Portal]](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id). |
| `resourceGroupName` | The name of your resource group on [!DNL Azure]. A resource group contains related resources for an [!DNL Azure] solution. For more information, read the [!DNL Azure] guide on [managing resource groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal). |
| `resourceName` | The name of your resource. In [!DNL Azure], a resource refers to instances like virtual machines, web apps, and databases. For more information, read the [!DNL Azure] guide on [understanding the [!DNL Azure] resource manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview). |
| `fqdns` | The fully-qualified domain names for your source. This property is required only when using the [!DNL Snowflake] source. |
| `connectionSpec.id` | The connection spec ID of the source you are using. |
| `connectionSpec.version` | The version of the connection spec ID that yo are using. |
| `state` | The current state of your private endpoint. Valid states include: <ul><li>`Pending`</li><li>`Failed`</li><li>`Approved`</li><li>`Rejected`</li></ul> |

+++

## Retrieve a list of private endpoints {#retrieve-private-endpoints}

To retrieve a list of private endpoints from a given sandbox in your organization, make a GET request to `/privateEndpoints`.

**API format**

```http
GET /privateEndpoints
```

**Request**

The following request retrieves a list of all private endpoints that exist in your organization.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns a list of private endpoints in your organization.

+++Select to view response example

```json
{
  "items": [
       {
      "id": "ac9eb695-0d1a-42d4-bc45-0842aeaa1eff",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "4281a16a-696f-4993-a7d3-a3da32b846f3",
      "resourceGroupName": "acme-noid-experience-platform",
      "resourceName": "acmeprivatelinking",
      "fqdns": [
         
      ],
      "state": "Approved",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      }
    },
          {
      "id": "4c9eb695-0d1a-42d4-bc45-0842aeaa1efr",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "5a0ff2f3-53d6-47e4-abb5-10a18bd3fff0",
      "resourceGroupName": "acme-sources-experience-platform",
      "resourceName": "acmeexperienceplatform",
      "fqdns": [
         
      ],
      "state": "Pending",
      "connectionSpec": {
        "id": "b3ba5556-48be-44b7-8b85-ff2b69b46dc4",
        "version": "1.0"
      }
    } 
  ]
}
```

+++

## Retrieve a list of private endpoints for a given source {#retrieve-private-endpoints-by-source}

To retrieve a list of private endpoints that correspond to a specific source, make a GET request to the `/privateEndpoints` endpoint and provide the `connectionSpec.id` of the source.

**API format**

```http
GET /privateEndpoints?property=connectionSpec.id=={CONNECTION_SPEC_ID}
```

| Query parameter | Description |
| --- | --- |
| `{CONNECTION_SPEC_ID}` | The connection spec ID of the source that which you want to search private endpoints for. |

**Request**

The following request retrieves a list of all private endpoints that correspond to the source with connection spec ID: `4c10e202-c428-4796-9208-5f1f5732b1cf`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints?property=connectionSpec.id==4c10e202-c428-4796-9208-5f1f5732b1cf' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns a list of all private endpoints that correspond to the source with connection spec ID: `4c10e202-c428-4796-9208-5f1f5732b1cf`.

+++Select to view response example

```json
{
  "items": [
       {
      "id": "ac9eb695-0d1a-42d4-bc45-0842aeaa1eff",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "4281a16a-696f-4993-a7d3-a3da32b846f3",
      "resourceGroupName": "acme-noid-experience-platform",
      "resourceName": "acmeprivatelinkhg",
      "fqdns": [
         
      ],
      "state": "Approved",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      }
    },
    {
      "id": "4c9eb695-0d1a-42d4-bc45-0842aeaa1efr",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "5a0ff2f3-53d6-47e4-abb5-10a18bd3fff0",
      "resourceGroupName": "acme-sources-experience-platform",
      "resourceName": "acmeexperienceplatform",
      "fqdns": [
         
      ],
      "state": "Pending",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      }
    } 
  ]
}
```

+++

## Retrieve a private endpoint {#retrieve-specific-private-endpoint}

To retrieve a specific private endpoint, make a GET request to `/privateEndpoints` and provide the ID of the private endpoint that you want to retrieve.

**API format**

```http
GET /privateEndpoints/{PRIVATE_ENDPOINT_ID}
```

| Query parameter | Description |
| --- | --- |
| `{PRIVATE_ENDPOINT_ID}` | The ID of the private endpoint that you want to retrieve. |

**Request**

The following request retrieves the private endpoint with the ID:`2c5699b0-b9b6-486f-8877-ee5e21fe9a9d`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints/2c5699b0-b9b6-486f-8877-ee5e21fe9a9d' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns the private endpoint with ID: `2c5699b0-b9b6-486f-8877-ee5e21fe9a9d`

+++Select to view response example

```json
{
  "items": [
       {
      "id": "2c5699b0-b9b6-486f-8877-ee5e21fe9a9d",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "5a0ff2f3-53d6-47e4-abb5-10a18bd3fff0",
      "resourceGroupName": "acme-noid-experience-platform",
      "resourceName": "acmeprivatelinkhg",
      "fqdns": [
         
      ],
      "state": "Approved",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      }
    }
  ]
}
```

+++

## Resolve a private endpoint {#resolve-private-endpoint}

**API format**

```http
GET /privateEndpoints?op=autoResolve
```

**Request**

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints?op=autoResolve' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "auth": {
          "specName": "ConnectionString",
          "params": {
              "usePrivateLink": true,
              "connectionString": "{CONNECTION_STRING}"
          }
      },
      "connectionSpec": {
          "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
          "version": "1.0"
      }
  }'
```

+++

**Response**

+++Select to view response example

```json
{
  "items": [
        {
      "id": "4c9eb695-0d1a-42d4-bc45-0842aeaa1efr",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "5a0ff2f3-53d6-47e4-abb5-10a18bd3fff0",
      "resourceGroupName": "acme-sources-experience-platform",
      "resourceName": "acmeexperienceplatform",
      "fqdns": [
         
      ],
      "state": "Pending",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      } 
    }
  ]
}
```

+++

## Enable [!DNL Interactive Authoring] {#enable-interactive-authoring}

>[!IMPORTANT]
>
>You must enable [!DNL Interactive Authoring] before creating or updating a flow, and before creating, updating, or exploring a connection.

[!DNL Interactive Authoring] is used for functionalities like exploring a connection or account and previewing data. To enable [!DNL Interactive Authoring], make a POST request to `/privateEndpoints/interactiveAuthoring` and specify `enable` as an operator in your query parameters.

**API format**

```http
POST /privateEndpoints/interactiveAuthoring?op=enable
```

| Query parameter | Description |
| --- | --- |
| `op` | The operation that you want to perform. To enable [!DNL Interactive Authoring], set the `op` value to `enable`. |

**Request**

The following request enables [!DNL Interactive Authoring] for your private endpoint and sets the TTL to 60 minutes.

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints/interactiveAuthoring?op=enable' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "autoTerminationMinutes": 60
  }'
```

| Property | Description |
| --- | --- |
| `autoTerminationMinutes` | The [!DNL Interactive Authoring] TTL (time-to-live) in minutes. [!DNL Interactive Authoring] is used for functionalities like exploring a connection or account and previewing data. You can set a maximum TTL of 120 minutes. The default TTL is 60 minutes. |
 
+++

**Response**

A successful response returns HTTP status 202 (Accepted).

## Retrieve [!DNL Interactive Authoring] status {#retrieve-interactive-authoring-status}

To view the current status of [!DNL Interactive Authoring] for your private endpoint, make a GET request to `/privateEndpoints/interactiveAuthoring`.

**API format**

```http
GET /privateEndpoints/interactiveAuthoring
```

**Request**

The following request retrieves the status of [!DNL Interactive Authoring]:

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints/interactiveAuthoring' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

+++Select to view response example

```json
{
    "status": "Disabled"
}
```

| Property | Description |
| --- | --- |
| `status` | The status of [!DNL Interactive Authoring]. Valid values include: `disabled`, `enabling`, `enabled`. |

+++

## Delete private endpoint {#delete-private-endpoint}

To delete your private endpoint, make a DELETE request to `/privateEndpoints` and provide the ID of the endpoint that you want to delete.

**API format**

```http
DELETE /privateEndpoints/{PRIVATE_ENDPOINT_ID}
```

| Query parameter | Description |
| --- | --- |
| `{PRIVATE_ENDPOINT_ID}` | The ID of the private endpoint that you want to delete. |

**Request**

The following request deletes private endpoint with ID: `02a74b31-a566-4a86-9cea-309b101a7f24`.

+++Select to view request example

```shell
curl -X DELETE \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints/02a74b31-a566-4a86-9cea-309b101a7f24' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns HTTP status 200 (Success). You can verify deletion by making a GET request and to `/privateEndpoints` and providing the deleted ID as a query parameter.

## Flow Service {#flow-service}

Read the following sections for information on how you can use private endpoints in conjunction with the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

### Create a connection with a private endpoint {#create-base-connection}

To create a connection with a private endpoint in Experience Platform, make a POST request to the `/connections` endpoint of the [!DNL Flow Service] API.

**API format**

```http
POST /connections/
```

**Request**

The following request creates an authenticated base connection for [!DNL Snowflake], while also using a private endpoint.

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections/' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Snowflake base connection",
      "description": "A base connection for a Snowflake source that uses a private link.",
      "auth": {
          "specName": "ConnectionString",
          "params": {
              "connectionString": "{CONNECTION_STRING}",
              "usePrivateLink" : true
          }
      },
      "connectionSpec": {
          "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. |
| `description` | (Optional) A description that provides additional information on your connection. |
| `auth.specName` | The authentication being used to connect your source to Experience Platform. |
| `auth.params.connectionString` | The [!DNL Snowflake] connection string. For more information, read the [[!DNL Snowflake] API authentication guide](../api/create/databases/snowflake.md).  |
| `auth.params.usePrivateLink` | A boolean value that determines whether or not you are using a private endpoint. Set this value to `true` if you are using a private endpoint. |
| `connectionSpec.id` | The connection spec ID of [!DNL Snowflake]. |
| `connectionSpec.version` | The version of your [!DNL Snowflake] connection spec ID. |

+++

**Response**

A successful response returns your newly generated base connection ID and etag.

+++Select to view response example

```json
{
  "id": "a59d368a-1152-4673-a46e-bd52e8cdb9a9",
  "etag": "\"f50185ed-0000-0200-0000-637e8fad0000\""
}
```

+++

### Retrieve connections tied to a given a private endpoint {#retrieve-connections-by-endpoint}

To retrieve connections tied to a particular private endpoint, make a GET request to the `/connections` endpoint and provide the ID of the private endpoint as a query parameter.

**API format**

```http
GET /connections?property=auth.params.privateEndpointId=={PRIVATE_ENDPOINT_ID}
```

| Query parameter | Description |
| --- | --- |
| {PRIVATE_ENDPOINT_ID} | The ID of the private endpoint tied to the connections that you want to retrieve. |

**Request**

The following request retrieves existing connections tied to private endpoint with ID: `02a74b31-a566-4a86-9cea-309b101a7f24`.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections?property=auth.params.privateEndpointId==02a74b31-a566-4a86-9cea-309b101a7f24' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns a list of connections tied to the queried private endpoint.

+++Select to view response example

```json
{
  "items": [
    {
      "id": "42a27b1f-8e3f-48ce-8c29-7e474b29a015",
      "createdAt": 1729154379292,
      "updatedAt": 1729154382031,
      "createdBy": "{CREATED_BY}",
      "updatedBy": "{UPDATED_BY}",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{UPDATED_CLIENT}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "{SANDBOX_NAME}",
      "imsOrgId": "{ORG_NAME}",
      "name": "acme-e2e",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "{CONNECTION_STRING}",
          "usePrivateLink": true,
          "privateEndpointId": "02a74b31-a566-4a86-9cea-309b101a7f24"
        }
      },
      "version": "\"2f01454b-0000-0200-0000-6766749a0000\"",
      "etag": "\"2f01454b-0000-0200-0000-6766749a0000\"",
      "lastOperation": {
        "started": 0,
        "updated": 0,
        "operation": "create"
      }
    },
    {
      "id": "6350311a-664c-4b08-aad4-4065781aac81",
      "createdAt": 1718199941102,
      "updatedAt": 1718199945147,
      "createdBy": "{CREATED_BY}",
      "updatedBy": "{UPDATED_BY}",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{UPDATED_CLIENT}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "{SANDBOX_NAME}",
      "imsOrgId": "{ORG_NAME}",
      "name": "acme demo",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "{CONNECTION_STRING}",
          "usePrivateLink": true,
          "privateEndpointId": "02a74b31-a566-4a86-9cea-309b101a7f24"
        }
      },
      "version": "\"3001307e-0000-0200-0000-6766cf710000\"",
      "etag": "\"3001307e-0000-0200-0000-6766cf710000\"",
      "lastOperation": {
        "started": 0,
        "updated": 0,
        "operation": "create"
      }
    }
  ],
  "_links": {
     
  }
}
```

+++

### Retrieve connections associated with any private endpoint {#retrieve-connections}

To retrieve connections associated with any private endpoint, make a GET request to the `/connections` endpoint and provide `property=auth.params.usePrivateLink==true` as a query parameter.

**API format**

```http
GET /connections?property=auth.params.usePrivateLink==true
```

**Request**

The following request retrieves all connections in your organization that are using private endpoints.

+++Select to view request example

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/flowservice/connections?property=auth.params.usePrivateLink==true' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
```

+++

**Response**

A successful response returns all connections that are tied to private endpoints.

+++Select to view response example

```json
{
  "items": [
    {
      "id": "42a27b1f-8e3f-48ce-8c29-7e474b29a015",
      "createdAt": 1729154379292,
      "updatedAt": 1729154382031,
      "createdBy": "{CREATED_BY}",
      "updatedBy": "{UPDATED_BY}",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{UPDATED_CLIENT}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "{SANDBOX_NAME}",
      "imsOrgId": "{ORG_NAME}",
      "name": "acme-e2e",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "{CONNECTION_STRING}",
          "usePrivateLink": true,
          "privateEndpointId": "02a74b31-a566-4a86-9cea-309b101a7f24"
        }
      },
      "version": "\"2f01454b-0000-0200-0000-6766749a0000\"",
      "etag": "\"2f01454b-0000-0200-0000-6766749a0000\"",
      "lastOperation": {
        "started": 0,
        "updated": 0,
        "operation": "create"
      }
    },
    {
      "id": "6350311a-664c-4b08-aad4-4065781aac81",
      "createdAt": 1718199941102,
      "updatedAt": 1718199945147,
      "createdBy": "{CREATED_BY}",
      "updatedBy": "{UPDATED_BY}",
      "createdClient": "{CREATED_CLIENT}",
      "updatedClient": "{UPDATED_CLIENT}",
      "sandboxId": "{SANDBOX_ID}",
      "sandboxName": "{SANDBOX_NAME}",
      "imsOrgId": "{ORG_NAME}",
      "name": "acme demo",
      "connectionSpec": {
        "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "{CONNECTION_STRING}",
          "usePrivateLink": true
        }
      },
      "version": "\"3001307e-0000-0200-0000-6766cf710000\"",
      "etag": "\"3001307e-0000-0200-0000-6766cf710000\"",
      "lastOperation": {
        "started": 0,
        "updated": 0,
        "operation": "create"
      }
    }
  ],
  "_links": {
     
  }
}
```

+++

## Appendix

Read this section for additional information using [!DNL Azure] private links in the API.

### Configure your [!DNL Snowflake] account to connect to private links

You must complete the following prerequisite steps in order to use the [!DNL Snowflake] source with private links.

First, you must raise a support ticket in [!DNL Snowflake] and request for the **endpoint service resource ID** of the [!DNL Azure] region of your [!DNL Snowflake] account. Follow the steps below to raise a [!DNL Snowflake] ticket:

1. Navigate to the [[!DNL Snowflake] UI](https://app.snowflake.com) and sign in with your email account. During this step, you must ensure that your email is verified in profile settings.
2. Select your **user menu** and then select **support** to access [!DNL Snowflake] support.
3. To create a support case, select **[!DNL + Support Case]**. Then, fill out the form with relevant details and attach any necessary files.
4. When finished, submit the case.

Once you receive the endpoint service resource ID, run the following on [!DNL Snowflake]:

```shell
subscriptions/{SUBSCRIPTION_ID}/resourceGroups/az{REGION}-privatelink/providers/microsoft.network/privatelinkservices/sf-pvlinksvc-az{REGION}
```

| Parameter | Description | Example |
| --- | --- | --- |
| `{SUBSCRIPTION_ID}` | The unique ID that identifies your [!DNL Azure] subscription. | `a1b2c3d4-5678-90ab-cdef-1234567890ab` |
| `{REGION}` | The [!DNL Azure] region of your [!DNL Snowflake] account. | `azwestus2` |

### Retrieve your private link configuration details

To retrieve your private link configuration details, you must run the following command in [!DNL Snowflake]:

```sql
USE ROLE accountadmin;
SELECT key, value::varchar
FROM TABLE(FLATTEN(input => PARSE_JSON(SYSTEM$GET_PRIVATELINK_CONFIG())));
```

Next, retrieve values for the following properties:

* `privatelink-account-url`
* `regionless-privatelink-account-url`
* `privatelink_ocsp-url`

Once you have retrieved the values, you can make the following call to create a private link for [!DNL Snowflake].

**Request**

The following request creates a private endpoint for [!DNL Snowflake]:

+++Select to view request example

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/connectors/privateEndpoints/' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Azure Private Link for Snowflake",
    "subscriptionId": "{AZURE_SUBSCRIPTION_ID}",
    "resourceGroupName": "{RESOURCE_GROUP_NAME}",
    "resourceName": "{SNOWFLAKE_ENDPOINT_SERVICE_NAME}",
    "fqdns": [
      "{PRIVATELINK_ACCOUNT_URL}",
      "{REGIONLESS_PRIVATELINK_ACCOUNT_URL}",
      "{PRIVATELINK_OCSP_URL}"
    ],
    "connectionSpec": {
      "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
      "version": "1.0"
    }
  }'
```

### Approve a private endpoint for [!DNL Azure Blob] and [!DNL Azure Data Lake Gen2]

To approve a private endpoint request for the [!DNL Azure Blob] and [!DNL Azure Data Lake Gen2] sources, log in to the [!DNL Azure Portal]. In the left navigation, select **[!DNL Data storage]**, then go to the **[!DNL Security + networking]** tab and choose **[!DNL Networking]**. Next, select **[!DNL Private endpoints]** to see a list of private endpoints associated with your account and their current connection states. To approve a pending request, select the desired endpoint and click **[!DNL Approve]**.
