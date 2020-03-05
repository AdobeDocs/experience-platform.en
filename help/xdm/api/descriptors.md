---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Descriptors
topic: developer guide
---

# Descriptors

## Descriptors

Schemas define a static view of data entities, but do not provide specific details on how data based on these schemas (datasets, for example) may relate to one another. Adobe Experience Platform allows you to describe these relationships and other interpretive metadata about a schema using descriptors. 

Schema descriptors are tenant-level metadata, meaning they are unique to your IMS Organization and all descriptor operations take place in the tenant container. 

Each schema can have one or more schema descriptor entities applied to it. Each schema descriptor entity includes a descriptor `@type` and the `sourceSchema` to which it applies. Once applied, these descriptors will apply to all datasets created using the schema.

Sample descriptor calls are shown below. For a complete list of available descriptors and the fields required for defining each type, see the appendix section on [defining descriptors in the API](#defining-descriptors-in-the-api).

> **Note:** Descriptors require unique Accept headers that replace `xed` with `xdm`, but otherwise look very similar to Accept headers used elsewhere in the Schema Registry. The proper Accept headers have been included in the sample calls below, but take extra caution to ensure the correct headers are being used.

### List descriptors

A single GET request can be used to return a list of all descriptors that have been defined by your organization.

#### API format

```http
GET /tenant/descriptors
```

#### Request

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xdm-link+json'
```

The response format depends on the Accept header sent in the request. Notice that the `/descriptors` endpoint uses Accept headers that are different than all other endpoints. 

Descriptor Accept headers replace `xed` with `xdm`, and offer a `link` option that is unique to descriptors.

Accept | Description
-------|------------
application/vnd.adobe.xdm-id+json | Returns an array of descriptor IDs
application/vnd.adobe.xdm-link+json | Returns an array of descriptor API paths
application/vnd.adobe.xdm+json | Returns an array of expanded descriptor objects

#### Response

The response includes an array for each descriptor type that has defined descriptors. In other words, if there are no descriptors of a certain `@type` defined, the registry will not return an empty array for that descriptor type. 

When using the `link` Accept header, each descriptor is shown as an array item in the format `/{CONTAINER}/descriptors/{DESCRIPTOR_ID}`

```JSON
{
  "xdm:alternateDisplayInfo": [
    "/tenant/descriptors/85dc1bc8b91516ac41163365318e38a9f1e4f351",
    "/tenant/descriptors/49bd5abb5a1310ee80ebc1848eb508d383a462cf",
    "/tenant/descriptors/b3b3e548f1c653326bcf5459ceac4140fc0b9e08"
  ],
  "xdm:descriptorIdentity": [
    "/tenant/descriptors/f7a4bc25429496c4740f8f9a7a49ba96862c5379"
  ]
}
```

<!-- Relationship descriptor to be added later:
 "xdm:descriptorOneToOne": [
    "/tenant/descriptors/cb509fd6f8ab6304e346905441a34b58a0cd481a"
  ] -->

### Lookup descriptor

If you wish to view the details of a specific descriptor, you can lookup (GET) an individual descriptor using its `@id`.

#### API format

```http
GET /tenant/descriptors/{DESCRIPTOR_ID}
```
* `{DESCRIPTOR_ID}`: The `@id` of the descriptor you want to lookup.

#### Request

Descriptors are not versioned, therefore no Accept header is required in the lookup request.

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors/f3a1dfa38a4871cf4442a33074c1f9406a593407 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns the details of the descriptor, including its `@type` and `sourceSchema`, as well as additional information that varies depending on the type of descriptor. The returned `@id` should match the descriptor `@id` provided in the request.

```JSON
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/personalEmail/address",
  "xdm:namespace": "Email",
  "xdm:property": "xdm:code",
  "xdm:isPrimary": false,
  "createdUser": "{CREATED_USER}",
  "imsOrg": "{IMS_ORG}",
  "createdClient": "{CREATED_CLIENT}",
  "updatedUser": "{UPDATED_USER}",
  "created": 1548899346989,
  "updated": 1548899346989,
  "meta:containerId": "tenant",
  "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
```

### Create descriptor

The Schema Registry allows you to define several different descriptor types. Each descriptor type requires its own specific fields be sent in the POST request. A complete list of descriptors, and the fields necessary to define them, is available in the appendix section on [defining descriptors in the API](#defining-descriptors-in-the-api).

#### API format

```http
POST /tenant/descriptors
```

#### Request

The following request defines an identity descriptor on an "email address" field in a sample schema. This tells Experience Platform to use the email address as an identifier to help stitch together information about the individual.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
      {
        "@type": "xdm:descriptorIdentity",
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/personalEmail/address",
        "xdm:namespace": "Email",
        "xdm:property": "xdm:code",
        "xdm:isPrimary": false
      }'
```

> **Note:** For details regarding the fields required to define a descriptor, see the [Defining descriptors in the API](#defining-descriptors-in-the-api) table in the appendix.

#### Response

A successful response returns HTTP status 201 (Created) and the details of the newly created descriptor, including its `@id`. The `@id` is a read-only field assigned by the Schema Registry and used for referencing the descriptor in the API.

```JSON
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/personalEmail/address",
  "xdm:namespace": "Email",
  "xdm:property": "xdm:code",
  "xdm:isPrimary": false,
  "meta:containerId": "tenant",
  "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
```

### Update descriptor

You can update a descriptor by making a PUT request to the registry referencing the `@id` of the descriptor you wish to update.

#### API format

```http
PUT /tenant/descriptors/{DESCRIPTOR_ID}
```
* `{DESCRIPTOR_ID}`: The `@id` of the descriptor you want to update.

#### Request

This request essentially _re-writes_ the descriptor, so the request body must include all fields required for defining a descriptor of that type. In other words, the request payload to update (PUT) a descriptor is the same as the payload to create (POST) a descriptor of the same type.

In this example, the identity descriptor is being updated to reference a different `xdm:sourceProperty` ("mobile phone") and change the `xdm:namespace` to "Phone".

```SHELL
curl -X PUT \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors/f3a1dfa38a4871cf4442a33074c1f9406a593407 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "@type": "xdm:descriptorIdentity",
        "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/fbc52b243d04b5d4f41eaa72a8ba58be",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/mobilePhone/number",
        "xdm:namespace": "Phone",
        "xdm:property": "xdm:code",
        "xdm:isPrimary": false
      }'
```

Details regarding the properties `xdm:namespace` and `xdm:property`, including how to access them, are available in the appendix section on [defining descriptors in the API](#defining-descriptors-in-the-api).

#### Response

A successful response returns HTTP status 201 (Created) and the `@id` of the updated descriptor (which should match the `@id` sent in the request).

```JSON
{
    "@id": "f3a1dfa38a4871cf4442a33074c1f9406a593407"
}
```

Performing a lookup (GET) request to view the descriptor will show that the fields have now been updated to reflect the changes sent in the PUT request.

### Delete descriptor

Occasionally you may need to remove a descriptor that you have defined from the Schema Registry. This is done by making a DELETE request referencing the `@id` of the descriptor you wish to remove.

#### API format

```http
DELETE /tenant/descriptors/{DESCRIPTOR_ID}
```
* `{DESCRIPTOR_ID}`: The `@id` of the descriptor you want to delete.

#### Request

Accept headers are not required when deleting descriptors.

```SHELL
curl -X DELETE \
  https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors/ca921946fb5281cbdb8ba5e07087486ce531a1f2  \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns HTTP status 204 (No Content) and a blank body.

To confirm the descriptor has been deleted, you can perform a lookup request against the descriptor `@id`. The response returns HTTP status 404 (Not Found) because the descriptor has been removed from the Schema Registry.