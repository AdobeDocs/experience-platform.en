# Schemas endpoints

Schemas can be used with mapper to ensure the data you've ingested into Adobe Experience Platform matches what you want to ingest. You can use the `/schemas` endpoint to programmatically create, list, and get custom schemas in Platform. 

## Get all schemas

You can retrieve a list of all available schemas for your IMS Organization by making a GET request to the `/schemas` endpoint.

**API format**

The `/schemas` endpoint supports several query parameters to help you filter your results. While the parameters are optional, their use is strongly recommended to help reduce expensive overhead. Making a call to this endpoint with no parameters will retrieve all schemas available for your organization. Multiple parameters can be included, separated by ampersands (`&`).

```http
GET /schemas
GET /schemas?limit={LIMIT}
GET /schemas?name={NAME}
GET /schemas?orderBy={ORDER_BY}
GET /schemas?start={START}
```

| Parameter | Description |
| --------- | ----------- |
| `{LIMIT}` | **Required**. Specifies the number of schemas returned. |
| `{NAME}` | Filters the schema based on the name. |
| `{ORDER_BY}` | Sorts the order of the results. The only supported field is `lastUpdateDate`. You can prepend the property with `+` or `-` to sort it by ascending or descending order respectively. |
| `{START}` | **Required**. Specifies the offset of the pages of results. To get the first page of results, set the value to `start=0`. |

**Request**

The following request retrieves a list of all the external schemas for your IMS Organization.

```shell
curl -X GET https://platform.adobe.io/data/foundation/conversion/schemas&start=0&limit=2 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The following response returns HTTP status 200 with the following  

>[!NOTE]
>
>The following response has been truncated for space.

```json
{
    "data": [
        {
            "id": "823ac494f35e4e84bcb2f061378fcca6",
            "version": 0,
            "jsonSchema": {
                "title": "Sample schema",
                "type": "object",
                "properties": {
                    "_id": {
                        "title": "Identifier",
                        "description": "A unique identifier for the record.",
                        "type": "string",
                        "format": "uri-reference",
                        "meta:xdmField": "@id",
                        "meta:xdmType": "string"
                    },
                    "city": {
                        "title": "City",
                        "description": "The name of the city.",
                        "type": "string",
                        "meta:xdmField": "xdm:city",
                        "meta:xdmType": "string"
                    }
                }
            },
            "schemaRef": {
                "id": "https://ns.adobe.com/stardust/schemas/833b1d8a749943d49fe7e925ea19b5dc",
                "contentType": "1.0"
            }
        },
        {
            "id": "0f868d3a1b804fb0abf738306290ae79",
            "version": 0,
            "jsonSchema": {
                "title": "Sample schema 2",
                "type": "object",
                "properties": {
                    "_id": {
                        "title": "Identifier",
                        "description": "A unique identifier for the record.",
                        "type": "string",
                        "format": "uri-reference",
                        "meta:xdmField": "@id",
                        "meta:xdmType": "string"
                    },
                    "city": {
                        "title": "City",
                        "description": "The name of the city.",
                        "type": "string",
                        "meta:xdmField": "xdm:city",
                        "meta:xdmType": "string"
                    }
                }
            },
            "schemaRef": {
                "id": "https://ns.adobe.com/stardust/schemas/0f868d3a1b804fb0abf738306290ae79",
                "contentType": "1.0"
            }
        }
    ],
    "_page": {
        "count": 2,
        "limit": 2
    }
}
```

## Create a schema

You can create a schema to validate against by making a POST request to the `/schemas` endpoint. There are three ways of creating a schema: sending a JSON schema, using sample data, or using an existing XDM schema.

```http
POST /schemas
```

### Using a JSON schema

**Request**

The following request lets you create a schema by sending a JSON schema.

```shell
curl -X POST https://platform.adobe.io/data/foundation/conversion/schemas \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
 {
     "jsonSchema": "{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"sampleschema45439a93d48d47d098d26e0f0840cc02\",\"description\":null,\"type\":\"object\",\"format\":null,\"properties\":{\"firstname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"firstname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null},\"lastname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"lastname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}},\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}",   
 }'
```

**Response**

A successful response returns HTTP status 200 with information about your newly created schema.

```json

{
    "id": "sdfssdf3f4bc182c9aeaa74ac5e7d",
    "version": 0,
    "name": "schemaname1",
    "jsonSchema": "{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"sampleschema45439a93d48d47d098d26e0f0840cc02\",\"description\":null,\"type\":\"object\",\"format\":null,\"properties\":{\"firstname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"firstname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null},\"lastname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"lastname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}},\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}",
    "sampleId": "45439a93d48d47d098d26e0f0840cc02",
    "schemaRef": {
        "id": null,
        "contentType": null
    }
}
```

### Using sample data

**Request**

The following request lets you create a schema by using sample data you've previously uploaded.

```shell
curl -X POST https://platform.adobe.io/data/foundation/conversion/schemas \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
 {
     "sampleId": "45439a93d48d47d098d26e0f0840cc02"  
 }'
```

**Response**

A successful response returns HTTP status 200 with information about your newly created schema.

```json
{
    "id": "35bbe7b05c3f4bc182c9aeaa74ac5e7d",
    "version": 0,
    "name": "schemaname1",
    "jsonSchema": "{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"sampleschema45439a93d48d47d098d26e0f0840cc02\",\"description\":null,\"type\":\"object\",\"format\":null,\"properties\":{\"firstname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"firstname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null},\"lastname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"lastname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}},\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}",
    "sampleId": "45439a93d48d47d098d26e0f0840cc02",
    "schemaRef": {
        "id": null,
        "contentType": null
    }
}
```

### Using an XDM schema

**Request**

The following request lets you create a schema by using an existing XDM schema.

```shell
curl -X POST https://platform.adobe.io/data/foundation/conversion/schemas \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '
 {
     "name": "outputSchema1",
     "schemaRef": {
         "id": "https://ns.adobe.com/acp_onboarding/schemas/0d555890502224d187b619f23c35c8d1",
         "contentType": "application/vnd.adobe.xed-full+json;version=1"
     }  
 }'
```

**Response**

A successful response returns HTTP status 200 with information about your newly created schema.

>[!NOTE]
>
>The following response has been truncated for space.

```json

{
    "id": "4b64daa51b774cb2ac21b61d80125ed0",
    "version": 0,
    "name": "schemaName",
    "jsonSchema": "{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"SimpleUser\",...,\"imsOrg\":\"F47E32E75AB004490A49403E@AdobeOrg\",\"$id\":\"https://ns.adobe.com/acp_onboarding/schemas/901c44cc5b2748488574f4e2824c5f96\"}",
    "schemaRef": {
        "id": "https://ns.adobe.com/acp_onboarding/schemas/901c44cc5b2748488574f4e2824c5f96",
        "contentType": "application/vnd.adobe.xed+json;version=1.0"
    }
}
```

## Create a schema using file upload

You can create a schema by uploading a JSON file for it to convert from.

**API format**

```http
POST /schemas/upload
```

**Request**

The following request lets you create a schema from an uploaded JSON file.

```shell
curl -X POST https://platform.adobe.io/data/foundation/conversion/schemas/upload \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -F 'file=@{PATH_TO_FILE}.json'
```

**Response**

A successful response returns HTTP status 200 with information about your newly created schema.

```json
{
    "id": "35bbe7b05c3f4bc182c9aeaa74ac5e7d",
    "version": 0,
    "name": "schemaname1",
    "jsonSchema": "{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"sampleschema45439a93d48d47d098d26e0f0840cc02\",\"description\":null,\"type\":\"object\",\"format\":null,\"properties\":{\"firstname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"firstname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null},\"lastname\":{\"id\":null,\"schema\":null,\"_refId\":null,\"title\":\"lastname\",\"description\":null,\"type\":\"string\",\"format\":null,\"properties\":null,\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}},\"items\":null,\"required\":null,\"created\":null,\"updated\":null,\"xdmVersion\":null,\"minimum\":null,\"maximum\":null,\"default\":null,\"enum\":null,\"pattern\":null}",
    "schemaRef": {
        "id": null,
        "contentType": null
    }
}
```

## Retrieve a specific schema

You can retrieve information about a specific schema by making a GET request to the `/schemas/{ID}` endpoint.

**API format**

```http
GET /schemas/{ID}
```

**Request**

The following request retrieves information about the specified schema.

```shell
curl -X GET https://platform.adobe.io/data/foundation/conversion/schemas/0f868d3a1b804fb0abf738306290ae79 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with information about the specified schema.

```json
{
    "id": "0f868d3a1b804fb0abf738306290ae79",
    "version": 0,
    "jsonSchema": {
        "title": "Sample schema",
        "description": "Sample description",
        "type": "object",
        "properties": {
            "_id": {
                "title": "Identifier",
                "description": "A unique identifier for the record.",
                "type": "string",
                "format": "uri-reference",
                "meta:xdmField": "@id",
                "meta:xdmType": "string"
            },
            "personalEmail": {
                "title": "Personal Email",
                "description": "A personal email address.",
                "type": "object",
                "properties": {
                    "primary": {
                        "title": "Primary",
                        "description": "Primary email indicator.\n\nA Profile can have only one `primary` email address at a given point of time.\n",
                        "type": "boolean",
                        "meta:xdmField": "xdm:primary",
                        "meta:xdmType": "boolean"
                    },
                    "address": {
                        "title": "Address",
                        "description": "The technical address, e.g 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.",
                        "type": "string",
                        "format": "email",
                        "meta:xdmField": "xdm:address",
                        "meta:xdmType": "string"
                    }
                },
                "meta:xdmField": "xdm:personalEmail",
                "meta:referencedFrom": "https://ns.adobe.com/xdm/context/emailaddress",
                "meta:xdmType": "object"
            }
        },
        "imsOrg": "6A29340459CA8D350A49413A@AdobeOrg",
        "$id": "https://ns.adobe.com/stardust/schemas/833b1d8a749943d49fe7e925ea19b5dc"
    },
    "schemaRef": {
        "id": "https://ns.adobe.com/stardust/schemas/833b1d8a749943d49fe7e925ea19b5dc",
        "contentType": "1.0"
    }
}
```