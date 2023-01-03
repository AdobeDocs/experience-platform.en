---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Edge Projection API Endpoints
topic-legacy: guide
type: Documentation
description: Adobe Experience Platform enables you to drive coordinated, consistent, and personalized experiences for your customers across multiple channels in real time, by making the right data readily available and continuously updated as changes happen. This is done through the use of edges, a geographically placed server that stores data and makes it readily accessible to applications.
exl-id: ce429164-8e87-412d-9a9d-e0d4738c7815
---
# Edge projection configurations and destinations endpoints

In order to drive coordinated, consistent, and personalized experiences for your customers across multiple channels in real time, the right data needs to be readily available and continuously updated as changes happen. Adobe Experience Platform enables this real-time access to data through the use of what are known as edges. An edge is a geographically placed server that stores data and makes it readily accessible to applications. For example, Adobe applications such as Adobe Target and Adobe Campaign use edges in order to provide personalized customer experiences in real time. Data is routed to an edge by a projection, with a projection destination defining the edge to which data will be sent, and a projection configuration defining the specific information that will be made available on the edge. This guide provides detailed instructions for using the [!DNL Real-Time Customer Profile] API to work with edge projections, including destinations and configurations.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-Time Customer Profile API]](https://www.adobe.com/go/profile-apis-en). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

>[!NOTE]
>
>Requests that contain a payload (POST, PUT, PATCH) require a `Content-Type` header. More than one `Content-Type` is used in this document. Please pay special attention to the headers in the sample calls to ensure you are using the correct `Content-Type` for each request.

## Projection destinations

A projection can be routed to one or more edges by specifying the locations where data is to be sent. Each projection destination that is created has a unique ID that is then used to create the projection configuration.

### List all destinations 

You can list the edge destinations that have already been created for your organization by making a GET request to the `/config/destinations` endpoint.

**API format**

```http
GET /config/destinations
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/destinations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response includes a `projectionDestinations` array with the details for each destination shown as an individual object within the array. If no projections have been configured, the `projectionDestinations` array returns empty. 

>[!NOTE]
>
>This response has been shortened for space and shows only two destinations.

```json
{
    "_links": {
        "self": {
            "href": "/data/core/ups/config/destinations",
            "templated": false
        }
    },
    "_embedded": {
        "projectionDestinations": [
            {
                "_links": {
                    "self": {
                        "href": "/data/core/ups/config/destinations/cef0e2ef-5249-4e25-be90-94f5797a2841",
                        "templated": false
                    }
                },
                "id": "cef0e2ef-5249-4e25-be90-94f5797a2841",
                "type": "EDGE",
                "ttl": 3600,
                "dataCenters": [
                    "VA5"
                ],
                "version": 1
            },
            {
                "_links": {
                    "self": {
                        "href": "/data/core/ups/config/destinations/7d26263f-a5df-43ce-b088-7f70e187f549",
                        "templated": false
                    }
                },
                "id": "7d26263f-a5df-43ce-b088-7f70e187f549",
                "type": "EDGE",
                "ttl": 3600,
                "dataCenters": [
                    "OR1"
                ],
                "version": 1
            }
        ]
    }
}
```

|Property|Description|
|---|---|
|`_links.self.href`|At the top-level, matches the path used to make the GET request. Within each individual destination object, this path can be used in a GET request to lookup the details of a specific destination directly.|
|`id`| Within each destination object, the `"id"` shows the read-only, system-generated unique ID for the destination. This ID is used when referencing a specific destination and when creating projection configurations.|

For more information regarding the attributes of an individual destination, please see the section on [creating a destination](#create-a-destination) that follows.

### Create a destination {#create-a-destination}

If the destination you require does not already exist, you can create a new projection destination by making a POST request to the `/config/destinations` endpoint. 

**API format**

```http
POST /config/destinations
```

**Request**

The following request creates a new edge destination. 

>[!NOTE]
>
>The POST request to create a destination requires a specific `Content-Type` header, as shown below. Using an incorrect `Content-Type` header results in an HTTP Status 415 (Unsupported Media Type) error.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/destinations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/vnd.adobe.platform.projectionDestination+json; version=1' \
  -d '{
        "type": "EDGE",
        "dataCenters": [ 
          "OR1" 
        ],
        "ttl": 3600,
        "replicationPolicy": REACTIVE
      }'
```

|Property|Description|
|---|---|
|`type` **(Required)** |The type of destination to be created. The only accepted value, "EDGE", creates an edge destination.|
|`dataCenters` **(Required)** |A string array that lists the edges toward which projections are to be routed. May contain one or more of the following values: "OR1" - Western United States, "VA5" - Eastern United States, "NLD1" - EMEA.|
|`ttl` **(Required)** |Specifies projection expiration. Accepted value range: 600 to 604800. Default value: 3600.|
|`replicationPolicy` **(Required)** |Defines the behavior of the data replication from the hub to the edges.  Supported values: PROACTIVE, REACTIVE. Default value: REACTIVE.|

**Response**

A successful response returns the details of the newly created edge destination, including the read-only, system-generated unique ID (`id`).

```json
{
    "self": {
        "href": "/data/core/ups/config/destinations/cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
        "templated": false
    },
    "id": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
    "type": "EDGE",
    "dataCenters": [
       "OR1"
    ],
    "ttl": 3600,
    "version": 1
}
```

|Property|Description|
|---|---|
|`self.href`| This path is used to lookup (GET) the destination directly and can also be used for updating (PUT) or deleting (DELETE) the destination.|
|`id`| The read-only, system-generated unique ID for the destination. This ID is used to reference the destination directly and when creating projection configurations.|
|`version`|This read-only value shows the current version of the destination. When a destination is updated, the version number automatically increments.|

### View a destination

If you know the unique ID of a projection destination, you can perform a lookup request to view its details. This is done by making a GET request to the `/config/destinations` endpoint and including the ID of the destination in the request path.

**API format**

```http
GET /config/destinations/{DESTINATION_ID}
```

|Parameter|Description|
|---|---|
|`{DESTINATION_ID}`|The unique ID of the projection destination that you would like to view.|

**Request**

The following request performs a lookup (GET) to view the destination for the ID provided in the request path.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/destinations/9d66c06e-c745-480c-b64c-1d5234d25f4b \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response object shows the details of the projection destination. The `id` attribute should match the ID of the projection destination that was provided in the request.

```json
{
    "self": {
        "href": "/data/core/ups/config/destinations/cef0e2ef-5249-4e25-be90-94f5797a2841",
        "templated": false
    },
    "id": "cef0e2ef-5249-4e25-be90-94f5797a2841",
    "type": "EDGE",
    "ttl": 3600,
    "dataCenters": [
        "OR1"
    ],
    "version": 1
}
```

### Update a destination

An existing destination can be updated by making a PUT request to the `/config/destinations` endpoint and including the ID of the destination to be updated in the request path. This operation is essentially rewriting the destination, therefore the same attributes must be provided in the body of the request as are provided when creating a new destination.

>[!CAUTION]
>
>The API response to the update request is immediate, however the changes to the projections are applied asynchronously. In other words, there is a time difference between when the update to the definition of the destination is made and when it is applied.

**API format**

```http
PUT /config/destinations/{DESTINATION_ID}
```

|Parameter|Description|
|---|---|
|`{DESTINATION_ID}`|The unique ID of the projection destination that you would like to update.|

**Request**

The following request updates the existing destination to include a second location (`dataCenters`).

>[!IMPORTANT]
>
>The PUT request requires a specific `Content-Type` header, as shown below. Using an incorrect `Content-Type` header results in an HTTP Status 415 (Unsupported Media Type) error.

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/ups/config/destinations/8b90ce19-e7dd-403a-ae24-69683a6674e7 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/vnd.adobe.platform.projectionDestination+json' \
  -d '{
        "type": "EDGE",
        "dataCenters": [ 
          "OR1",
          "VA5" 
        ],
        "replicationPolicy": REACTIVE,
        "currentVersion": 1
      }'
```

|Property|Description|
|---|---|
|`currentVersion`|The current version of the existing destination. The value of the `version` attribute when performing a lookup request for the destination.|

**Response**

The response includes the updated details for the destination, including its ID and the new `version` of the destination.

```json
{
    "self": {
        "href": "/data/core/ups/config/destinations/8b90ce19-e7dd-403a-ae24-69683a6674e7",
        "templated": false
    },
    "id": "8b90ce19-e7dd-403a-ae24-69683a6674e7",
    "type": "EDGE",
    "ttl": 8000,
    "dataCenters": [
        "OR1",
        "VA5"
    ],
    "version": 2
}
```

### Delete a destination

If your organization no longer requires a projection destination, it can be deleted by making a DELETE request to the `/config/destinations` endpoint and including the ID of the destination that you wish to delete in the request path.

>[!CAUTION]
>
>The API response to the deletion request is immediate, however the actual changes to the data on the edges happens asynchronously. In other words, the profile data will be removed from all of the edges (the `dataCenters` specified in the projection destination) but the process will take time to complete.

**API format**

```http
DELETE /config/destinations/{DESTINATION_ID}
```

|Parameter|Description|
|---|---|
|`{DESTINATION_ID}`|The unique ID of the projection destination that you would like to delete.|


**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/ups/config/destinations/8b90ce19-e7dd-403a-ae24-69683a6674e7 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The delete request returns HTTP status 204 (No Content) and an empty response body. You can confirm that the deletion was successful by performing a lookup request for the destination by its ID. The lookup should return HTTP status 404 (Not Found).

## Projection configurations

Projection configurations provide information regarding what data should be available on each edge. Rather than projecting a complete [!DNL Experience Data Model] (XDM) schema to the edge, a projection provides only specific data, or fields, from the schema. Your organization can define more than one projection configuration for each XDM schema.

### List all projection configurations

You can list all of the projection configurations that have been created for your organization by making a GET request to the `/config/projections` endpoint. You can also add optional parameters to the request path to access projection configurations for a particular schema or lookup an individual projection by its name.

**API format**

```http
GET /config/projections
GET /config/projections?schemaName={SCHEMA_NAME}
GET /config/projections?schemaName={SCHEMA_NAME}&name={PROJECTION_NAME}
```

|Parameter|Description|
|---|---|
|`{SCHEMA_NAME}`|The name of the schema class associated with the projection configuration you want to access.|
|`{PROJECTION_NAME}`|The name of the projection configuration you want to access.|

>[!NOTE]
>
>`schemaName` is required when using the `name` parameter, as a projection configuration name is only unique in the context of a schema class.

**Request**

The following request lists all projection configurations associated with the [!DNL Experience Data Model] schema class, [!DNL XDM Individual Profile]. For more information on XDM and its role within [!DNL Platform], please begin by reading the [XDM System overview](../../xdm/home.md).

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/projections?schemaName=_xdm.context.profile \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of projection configurations within the root `_embedded` attribute, contained within the `projectionConfigs` array. If no projection configurations have been made for your organization, the `projectionConfigs` array will be empty.

```json
{
    "_links": {
        "self": {
            "href": "/data/core/ups/config/projections",
            "templated": false
        }
    },
    "_embedded": {
        "projectionConfigs": [
            {
                "_links": {
                    "destination": {
                        "href": "/data/core/ups/config/destinations/a689248a-5d2b-44af-bb70-c8f17f97011b",
                        "templated": false
                    },
                    "self": {
                        "href": "/data/core/ups/config/projections/99aed0bc-c183-4997-ada7-7843642e08f6",
                        "templated": false
                    }
                },
                "_embedded": {
                    "destination": {
                        "self": {
                            "href": "/data/core/ups/config/destinations/a689248a-5d2b-44af-bb70-c8f17f97011b",
                            "templated": false
                        },
                        "id": "a689248a-5d2b-44af-bb70-c8f17f97011b",
                        "type": "EDGE",
                        "ttl": 1000,
                        "dataCenters": [
                            "OR1"
                        ],
                        "version": 1
                    }
                },
                "selector": "strategy",
                "version": 2,
                "id": "99aed0bc-c183-4997-ada7-7843642e08f6",
                "schemaName": "_xdm.context.profile",
                "name": "adcloud_rlsa",
                "destinationId": "a689248a-5d2b-44af-bb70-c8f17f97011b"
            },
        ]
    }
}
```

### Create a projection configuration

You can create (POST) a new projection configuration that will dictate which XDM fields are made available on the edges.

**API format**

```http
POST /config/projections?schemaName={SCHEMA_NAME}
```

|Parameter|Description|
|---|---|
|`{SCHEMA_NAME}`|The name of the schema class associated with the projection configuration you want to access.|

**Request**

>[!NOTE]
>
>The POST request to create a configuration requires a specific `Content-Type` header, as shown below. Using an incorrect `Content-Type` header results in an HTTP Status 415 (Unsupported Media Type) error.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/projections?schemaName=_xdm.context.profile \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/vnd.adobe.platform.projectionConfig+json; version=1' \
  -d '{
        "selector": "emails,person(firstName)",
        "name": "my_test_projection",
        "destinationId": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4"
      }'
```

|Property|Description|
|---|---|
|`selector`|A string containing a list of properties within the schema that are to be replicated to the edges. Best practices for working with selectors are available in the [Selectors](#selectors) section of this document.|
|`name`|A descriptive name for the new projection configuration.|
|`destinationId`|The identifier for the edge destination the data will be projected to.|

**Response**

A successful response returns the details of the newly created projection configuration.

```json
{
    "_links": {
        "destination": {
            "href": "/data/core/ups/config/destinations/cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
            "templated": false
        },
        "self": {
            "href": "/data/core/ups/config/projections/87fcd0bc-c183-4997-daf9-7843642g95a1",
            "templated": false
        }
    },
    "_embedded": {
        "destination": {
            "self": {
                "href": "/data/core/ups/config/destinations/cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
                "templated": false
            },
            "id": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
            "type": "EDGE",
            "ttl": 1000,
            "dataCenters": [
                "OR1"
            ],
            "version": 1
        }
    },
    "selector": "emails,person(firstName)",
    "version": 2,
    "id": "87fcd0bc-c183-4997-daf9-7843642g95a1",
    "schemaName": "_xdm.context.profile",
    "name": "my_test_projection",
    "destinationId": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4"
}
```

## Selectors {#selectors}

A selector is a comma-separated list of XDM field names. In a projection configuration, the selector designates the properties to be included in projections. The format of the `selector` parameter value is loosely based on XPath syntax. Supported syntax is summarized below, with additional examples provided for reference.

### Supported syntax

* Use commas to select multiple fields. Do not use spaces.
* Use dot-notation to select nested fields. 
    * For example, to select a field named `field` which is nested within a field named `foo`, use the selector `foo.field`.
* When including a field that contains sub-fields, all sub-fields are also projected by default. However, you can filter the sub-fields returned by using parentheses `"( )"`.
    * For example, `addresses(type,city.country)` returns only the address type and the country in which the address city is located for each `addresses` array element.
    * The above example is equivalent to `addresses.type,addresses.city.country`.

>[!NOTE]
>
>Both dot-notation and parenthetical notation are supported for referencing sub-fields. However, it is best practice to use dot-notation because it is more concise and provides a better illustration of field hierarchy.

* Each field in a selector is specified relative to the root of the response.
    * If the data is a collection of resources, the projection will include an array of resources.
    * If the data is a single resource, the projection will include fields that are relative to that resource.
    * If the field you select is (or is part of) an array, the projection will include the selected portion of all elements in the array.

### Examples of the selector parameter

The following examples show sample `selector` parameters, followed by the structured values they represent.

**person.lastName**

Returns the `lastName` sub-field of the `person` object in the requested resource.

```json
{
  "person": {
    "lastName": "Smith"
  }
}
```

**addresses**

Returns all elements in the `addresses` array, including all fields in each element, but no other fields.

```json
{
  "addresses": [
    {
      "type": "home",
      "street1": "100 Great Mall Parkway",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "type": "work",
      "street1": "1 Main Street",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

**person.lastName,addresses**

Returns the `person.lastName` field and all elements in the `addresses` array.

```json
{
  "person": {
    "lastName": "Smith"
  },
  "addresses": [
    {
      "type": "home",
      "street1": "100 Great Mall Parkway",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "type": "work",
      "street1": "1 Main Street",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

**addresses.city**

Returns only the city field for all elements in the addresses array.

```json
{
  "addresses": [
    {
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

>[!NOTE]
>
>Whenever a nested field is returned, the projection includes the enclosing parent objects. The parent fields do not include any other child fields unless they are also selected explicitly.

**addresses(type,city)**

Returns only the values of the `type` and `city` fields for each element in the `addresses` array. All other sub-fields contained in each `addresses` element are filtered out.

```json
{
  "addresses": [
    {
      "type": "home",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "type": "work",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

## Next steps

This guide has shown you the steps involved in order to configure projections and destinations, including how to properly format the `selector` parameter. You can now create new projection destinations and configurations specific to the needs of your organization.
