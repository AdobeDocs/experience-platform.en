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

## Create a mapping

**API format**

```http
POST /mappingSets/{MAPPING_SET_ID}/mappings
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/conversion/mappingSets/MAPPING_SET_ID/mappings \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
{
  "createdBy": "string",
  "createdDate": "2020-11-25T21:47:43.080Z",
  "destinationXdmPath": "string",
  "id": "string",
  "identity": true,
  "identityGroup": "string",
  "modifiedBy": "string",
  "modifiedDate": "2020-11-25T21:47:43.080Z",
  "namespaceCode": "string",
  "sourceAttribute": "string",
  "version": 0
}'
```

**Response**

```json
{
  "createdBy": "string",
  "createdDate": "2020-11-25T21:47:43.141Z",
  "id": "string",
  "modifiedBy": "string",
  "modifiedDate": "2020-11-25T21:47:43.141Z",
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

## Update a mapping

**API format**

```http
PUT /mappingSets/{MAPPING_SET_ID}/mappings/{MAPPING_ID}
```

**Request**

```shell
curl -X PUT https://platform.adobe.io/data/foundation/conversion/mappingSets/MAPPING_SET_ID/mappings/MAPPING_ID \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
{
    "createdBy": "string",
    "createdDate": "2020-11-25T21:59:05.675Z",
    "destinationXdmPath": "string",
    "id": "string",
    "identity": true,
    "identityGroup": "string",
    "modifiedBy": "string",
    "modifiedDate": "2020-11-25T21:59:05.675Z",
    "namespaceCode": "string",
    "sourceAttribute": "string",
    "version": 0
}'
```

**Response**

```json
{
    "createdBy": "string",
    "createdDate": "2020-11-25T21:59:05.748Z",
    "destinationXdmPath": "string",
    "id": "string",
    "identity": true,
    "identityGroup": "string",
    "modifiedBy": "string",
    "modifiedDate": "2020-11-25T21:59:05.748Z",
    "namespaceCode": "string",
    "sourceAttribute": "string",
    "version": 0
}
```

## Delete a mapping

**API format**

```http
DELETE /mappingSets/{MAPPING_SET_ID}/mappings/{MAPPING_ID}
```

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/conversion/mappingSets/MAPPING_SET_ID/mappings/MAPPING_ID \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
  "createdBy": "string",
  "createdDate": "2020-11-25T22:02:51.121Z",
  "id": "string",
  "modifiedBy": "string",
  "modifiedDate": "2020-11-25T22:02:51.121Z",
  "version": 0
}
```