# Mapping set mappings

## Return all mappings

**API format**

```http
GET /mappingSets/{MAPPING_SET_ID}/mappings
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/conversion/mappingSets/MAPPING_SET_ID/mappings \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
  "createdBy": "string",
  "createdDate": "2020-11-25T21:21:15.528Z",
  "destinationXdmPath": "string",
  "id": "string",
  "identity": true,
  "identityGroup": "string",
  "modifiedBy": "string",
  "modifiedDate": "2020-11-25T21:21:15.528Z",
  "namespaceCode": "string",
  "sourceAttribute": "string",
  "version": 0
}
```

## Retrieve a mapping

**API format**

```http
GET /mappingSets/{MAPPING_SET_ID}/mappings/{MAPPING_ID}
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/conversion/mappingSets/MAPPING_SET_ID/mappings/MAPPING_ID \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "createdBy": "string",
    "createdDate": "2020-11-25T21:53:16.945Z",
    "destinationXdmPath": "string",
    "id": "string",
    "identity": true,
    "identityGroup": "string",
    "modifiedBy": "string",
    "modifiedDate": "2020-11-25T21:53:16.945Z",
    "namespaceCode": "string",
    "sourceAttribute": "string",
    "version": 0
}
```