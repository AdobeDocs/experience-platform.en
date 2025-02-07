---
title: Private Link Support in Sources
description: Learn how to create and use private links for Adobe Experience Platform Sources
badge: Beta
hide: true
hidefromtoc: true
---
# Private Link Support in Sources

>[!AVAILABILITY]
>
>This feature is in Limited Availability.

Read this guide to learn how you can establish a private endpoint connection to Azure-based sources through a private link, and allow for a more secure transfer mechanism for your data. 

## Outline of API steps

1. Create a private endpoint
2. Get all private endpoint(s)
3. Get all private endpoint(s) for a given source
4. Retrieve a private endpoint
5. Resolve (?) a private endpoint
6. Enable the interactive authoring API
7. Retrieve interactive authoring status API
8. Delete a private endpoint
9. Create connection (Flow Service)
10. Get connection(s) tied to a given private endpoint (Flow Service)
11. Get connection(s) using private endpoint (Flow Service)

## Create a private endpoint

To create a private endpoint, make a POST request to the `/privateEndpoints` endpoint of the [!DNL Connectors] API.

**API format**

```http
POST /privateEndpoints
```

**Request**

The following request creates a private endpoint.

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
    "name": "ACME Endpoint",
    "subscriptionId": "25a08a99-7b80-433c-ba62-252f7e23795a",
    "resourceGroupName": "acp-int-va7-connectors-e2e",
    "resourceName": "acpconnectorse2e",
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
| `subscriptionId` | |
| `resourceGroupName` |
| `resourceName` |
| `fqdns` |
| `connectionSpec.id` |
| `connectionSpec.version` |

+++

**Response**

A successful response returns the following:

+++Select to view response example

```json
{
  "id": "2c7f6574-299a-4832-aec5-886e875872e2",
  "name": "TEST_E2E_25_Jan",
  "subscriptionId": "25a08a99-7b80-433c-ba62-252f7e23795a",
  "resourceGroupName": "acp-int-va7-connectors-e2e",
  "resourceName": "acpconnectorse2e",
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
| `id` |
| `name` |
| `resourceGroupName` |
| `resourceName` |
| `fqdns` |
| `connectionSpec.id` |
| `connectionSpec.version` |
| `state` |

+++

## List all private endpoints

To retrieve a list of all private endpoints in a given organization, make a GET request to the `/privateEndpoints` endpoint of the [!DNL Connectors] API.

**API format**

```http
GET /privateEndpoints
```

**Request**

+++Select to view request example

The following request retrieves a list of all private endpoints that exist in your organization.

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

+++Select to view response example

```json
{
  "items": [
       {
      "id": "ac9eb695-0d1a-42d4-bc45-0842aeaa1eff",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "4bd65337-f5e4-499e-9cd8-b018e1f7d9f7",
      "resourceGroupName": "aep-noid-rg",
      "resourceName": "testprivatelinkhg",
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
      "subscriptionId": "25a08a99-7b80-433c-ba62-252f7e23795a",
      "resourceGroupName": "acp-int-va7-connectors-e2e",
      "resourceName": "acpconnectorse2e",
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

## List all private endpoints for a given source

To retrieve a list of all private endpoints that correspond to a specific source, make a GET request to the `/privateEndpoints` endpoint and provide the `connectionSpec.id` of the source.

**API format**

```http
GET /privateEndpoints?property=connectionSpec.id=={CONNECTION_SPEC_ID}
```

**Request**

+++Select to view request example

The following request retrieves a list of all private endpoints that correspond to a specific source.

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

+++Select to view response example

A successful response returns a list of all private endpoints that correspond with the [!DNL Azure Blob] source.

```json
{
  "items": [
       {
      "id": "ac9eb695-0d1a-42d4-bc45-0842aeaa1eff",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "4bd65337-f5e4-499e-9cd8-b018e1f7d9f7",
      "resourceGroupName": "aep-noid-rg",
      "resourceName": "testprivatelinkhg",
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
      "subscriptionId": "25a08a99-7b80-433c-ba62-252f7e23795a",
      "resourceGroupName": "acp-int-va7-connectors-e2e",
      "resourceName": "acpconnectorse2e",
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

## Retrieve a private endpoint

To retrieve a specific private endpoint, make a GET request to `/privateEndpoints` and provide the ID of the private endpoint that you want to retrieve.

**API format**

```http
GET /privateEndpoints/{PRIVATE_ENDPOINT_ID}
```

**Request**

+++Select to view request example

The following request retrieves the private endpoint with the ID:`2c5699b0-b9b6-486f-8877-ee5e21fe9a9d`

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

+++Select to view response example

A successful response returns the private endpoint with ID: `2c5699b0-b9b6-486f-8877-ee5e21fe9a9d`

```json
{
  "items": [
       {
      "id": "2c5699b0-b9b6-486f-8877-ee5e21fe9a9d",
      "name": "TEST_E2E_29_Jan",
      "subscriptionId": "4bd65337-f5e4-499e-9cd8-b018e1f7d9f7",
      "resourceGroupName": "aep-noid-rg",
      "resourceName": "testprivatelinkhg",
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

## Resolve a private endpoint

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
              "connectionString": "DefaultEndpointsProtocol=https;AccountName=acpconnectorse2e;AccountKey=0icsOezXX7CEm*****fQ2nIxPOeAPdEEUU8p9ODXB2bTQ==;EndpointSuffix=core.windows.net"
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
      "subscriptionId": "25a08a99-7b80-433c-ba62-252f7e23795a",
      "resourceGroupName": "acp-int-va7-connectors-e2e",
      "resourceName": "acpconnectorse2e",
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

## Enable interactive authoring

**API format**

```http
POST /privateEndpoints/interactiveAuthoring?op=enable
```

**Request**

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
| `autoTerminationMinutes` | The interactive authoring TTL (time-to-live) in minutes. Interactive authoring is used for functionalities like exploring a connection or account and previewing data. You can set a maximum TTL of 120 minutes. The default TTL is 60 minutes. |
 
+++

**Response**

A successful response returns HTTP status 202 (Accepted).

## Retrieve interactive authoring status

**API format**

```http
GET /privateEndpoints/interactiveAuthoring
```

**Request**

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
| `status` | The status of interactive authoring. Valid values include: `disabled`, `enabling`, `enabled`.

+++

## Delete private endpoint

To delete your private endpoint, make a DELETE request to the `/privateEndpoints` endpoint and provide the ID of the endpoint that you want to delete.

**API format**

```http
DELETE /privateEndpoints/{PRIVATE_ENDPOINT_ID}
```

| Query parameter | Description |
| --- | --- |
| `{PRIVATE_ENDPOINT_ID}` | The ID of the private endpoint that you want to delete. |

**Request**

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

## Flow Service

### Create a connection with a private endpoint

To create a connection with a private endpoint in Experience Platform, make a POST request to the `/connections` endpoint of the [!DNL Flow Service] API.

**API format**

```http
POST /connections/
```

**Request**

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
      "description": "Snowflake base connection",
      "auth": {
          "specName": "ConnectionString",
          "params": {
              "connectionString": "jdbc:snowflake://megwkdb-rq66951.snowflakecomputing.com/?user=connectorsnoida1&pwd=Welcome02*&db=DEMO_DB&warehouse=COMPUTE_WH",
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
| `name` |
| `description` |
| `auth.specName` |
| `auth.params.connectionString` |
| `auth.params.usePrivateLink` |
| `connectionSpec.id` |
| `connectionSpec.version` |

+++

### Retrieve connections tied to a given a private endpoint

To retrieve connections tied to a particular private endpoint, make a GET request to the `/connections` endpoint and provide the ID of the private endpoint as a query parameter.

**API format**

```http
GET /connections?property=auth.params.privateEndpointId=={PRIVATE_ENDPOINT_ID}
```

| Query parameter | Description |
| --- | --- |
| {PRIVATE_ENDPOINT_ID} | The ID of the private endpoint tied to the connections that you want to retrieve. |

**Request**

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
      "createdBy": "698B651762BE85500A494117@AdobeID",
      "updatedBy": "698B651762BE85500A494117@AdobeID",
      "createdClient": "exc_app",
      "updatedClient": "exc_app",
      "sandboxId": "8e3dca60-6daf-11ea-aee0-4db17ee10871",
      "sandboxName": "crosstest1",
      "imsOrgId": "7DC732555AECDB4C0A494036@AdobeOrg",
      "name": "udayinTest",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "https://keyvaulte4ppi4dxvmob.vault.azure.net/secrets/968adb09-c126-4561-85d2-3b67a3827feb",
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
      "createdBy": "0BE761626273729D0A49420F@AdobeID",
      "updatedBy": "0BE761626273729D0A49420F@AdobeID",
      "createdClient": "exc_app",
      "updatedClient": "exc_app",
      "sandboxId": "8e3dca60-6daf-11ea-aee0-4db17ee10871",
      "sandboxName": "crosstest1",
      "imsOrgId": "7DC732555AECDB4C0A494036@AdobeOrg",
      "name": "dhruba edi test",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "https://keyvaulte4ppi4dxvmob.vault.azure.net/secrets/70135fc8-b5bd-4730-bdc7-356fcb867b8b",
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

### Retrieve connections associated with any private endpoint

To retrieve connections associated with any private endpoint, make a GET request to the `/connections` endpoint and provide `property=auth.params.usePrivateLink==true` as a query parameter.

**API format**

```http
GET /connections?property=auth.params.usePrivateLink==true
```

**Request**

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

+++Select to view response example

```json
{
  "items": [
    {
      "id": "42a27b1f-8e3f-48ce-8c29-7e474b29a015",
      "createdAt": 1729154379292,
      "updatedAt": 1729154382031,
      "createdBy": "698B651762BE85500A494117@AdobeID",
      "updatedBy": "698B651762BE85500A494117@AdobeID",
      "createdClient": "exc_app",
      "updatedClient": "exc_app",
      "sandboxId": "8e3dca60-6daf-11ea-aee0-4db17ee10871",
      "sandboxName": "crosstest1",
      "imsOrgId": "7DC732555AECDB4C0A494036@AdobeOrg",
      "name": "udayinTest",
      "connectionSpec": {
        "id": "4c10e202-c428-4796-9208-5f1f5732b1cf",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "https://keyvaulte4ppi4dxvmob.vault.azure.net/secrets/968adb09-c126-4561-85d2-3b67a3827feb",
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
      "createdBy": "0BE761626273729D0A49420F@AdobeID",
      "updatedBy": "0BE761626273729D0A49420F@AdobeID",
      "createdClient": "exc_app",
      "updatedClient": "exc_app",
      "sandboxId": "8e3dca60-6daf-11ea-aee0-4db17ee10871",
      "sandboxName": "crosstest1",
      "imsOrgId": "7DC732555AECDB4C0A494036@AdobeOrg",
      "name": "dhruba edi test",
      "connectionSpec": {
        "id": "b2e08744-4f1a-40ce-af30-7abac3e23cf3",
        "version": "1.0"
      },
      "state": "enabled",
      "auth": {
        "specName": "ConnectionString",
        "params": {
          "connectionString": "https://keyvaulte4ppi4dxvmob.vault.azure.net/secrets/70135fc8-b5bd-4730-bdc7-356fcb867b8b",
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