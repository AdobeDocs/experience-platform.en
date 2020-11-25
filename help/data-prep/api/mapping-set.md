# Mapping set endpoints

## List mapping sets

**API format**

```http
GET /mappingSets
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/conversion/mappingSets \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

## Create a mapping set

**API format**

```http
POST /mappingSets
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/conversion/mappingSets \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
  {
    "createdBy": "string",
    "createdDate": "2020-11-25T19:40:24.123Z",
    "id": "string",
    "mappings": [
        {
            "createdBy": "string",
            "createdDate": "2020-11-25T19:40:24.123Z",
            "destinationXdmPath": "string",
            "id": "string",
            "identity": true,
            "identityGroup": "string",
            "modifiedBy": "string",
            "modifiedDate": "2020-11-25T19:40:24.123Z",
            "namespaceCode": "string",
            "sourceAttribute": "string",
            "version": 0
        }
    ],
    "modifiedBy": "string",
    "modifiedDate": "2020-11-25T19:40:24.123Z",
    "name": "string",
    "schemaRef": {
        "contentType": "string",
        "id": "string"
    },
    "status": "DRAFT",
    "transformScript": "string",
    "version": 0
    }
```

**Response**

## Get a mapping set

**API format**

```http
GET /mappingSets/{MAPPING_SET_ID}
```

**Request**

**Response**

## Update a mapping set

**API format**

```http
PUT /mappingSets/{MAPPING_SET_ID}
```

**Request**

**Response**

## Delete a mapping set

**API format**

```http
DELETE /mappingSets/{MAPPING_SET_ID}
```

**Request**

**Response**