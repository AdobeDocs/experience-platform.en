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

```json
{
    "createdBy": "string",
    "createdDate": "2020-11-25T19:40:24.180Z",
    "id": "string",
    "modifiedBy": "string",
    "modifiedDate": "2020-11-25T19:40:24.180Z",
    "version": 0
}
```

## Validate mappings

**API format**

```http
POST /mappingSets/validate
```

**Request**

**Response**

## Preview data for mappings

**API format**

```http
POST /mappingSets/preview
```

**Request**

**Response**

## Get a mapping set

**API format**

```http
GET /mappingSets/{MAPPING_SET_ID}
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/conversion/mappingSets/SOME_ID \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "createdBy": "string",
    "createdDate": "2020-11-25T20:24:27.968Z",
    "id": "string",
    "mappings": [
        {
            "createdBy": "string",
            "createdDate": "2020-11-25T20:24:27.968Z",
            "destinationXdmPath": "string",
            "id": "string",
            "identity": true,
            "identityGroup": "string",
            "modifiedBy": "string",
            "modifiedDate": "2020-11-25T20:24:27.968Z",
            "namespaceCode": "string",
            "sourceAttribute": "string",
            "version": 0
        }
    ],
    "modifiedBy": "string",
    "modifiedDate": "2020-11-25T20:24:27.968Z",
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

## Update a mapping set

**API format**

```http
PUT /mappingSets/{MAPPING_SET_ID}
```

**Request**

```shell
curl -X PUT https://platform.adobe.io/data/foundation/conversion/mappingSets/SOME_ID \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
{
    "id": "cbb0da769faa48fcb29e026a924ba29d",
    "name": "Demo Mapping Set",
    "outputSchema": {
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        }
    },
    "inputSchema": {
        "id": "a167ff2947ff447ebd8bcf7ef6756232",
        "version": 0
    },
    "mappings": [
        {
            "sourceType": "ATTRIBUTE",
            "source": "firstName",
            "destination": "person.name.firstName",
            "name": "First name",
            "description": "The first name for the user."
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "lastName",
            "destination": "person.name.lastName",
            "name": "Last name",
            "description": "The last name for the user."
        }
    ]
}'
```

**Response**

```json
{
    "id": "cbb0da769faa48fcb29e026a924ba29d",
    "name": "Demo Mapping Set",
    "outputSchema": {
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        }
    },
    "inputSchema": {
        "id": "a167ff2947ff447ebd8bcf7ef6756232",
        "version": 0
    },
    "mappings": [
        {
            "sourceType": "ATTRIBUTE",
            "source": "firstName",
            "destination": "person.name.firstName",
            "name": "First name",
            "description": "The first name for the user."
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "lastName",
            "destination": "person.name.lastName",
            "name": "Last name",
            "description": "The last name for the user."
        }
    ]
}
```