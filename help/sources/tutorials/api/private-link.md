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