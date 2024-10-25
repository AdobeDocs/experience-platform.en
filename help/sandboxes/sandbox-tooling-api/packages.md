---
title: Sandbox Tooling Packages API Endpoint
description: The /packages endpoint in the Sandbox Tooling API allows you to programmatically manage packages in Adobe Experience Platform.
exl-id: 46efee26-d897-4941-baf4-d5ca0b8311f0
---
# Packages endpoint

Sandbox tooling allows you to select different artifacts (also known as objects) and export them into a package. A package can consist of a single artifact or multiple artifacts (such as datasets or schemas). Any artifacts that are included in a package must be from the same sandbox. 

The `/packages` endpoint in the sandbox tooling API allows you to programmatically manage packages in your organization, including publishing a package and importing a package to a sandbox.

## Create a package {#create}

You can create a multi-artifact package, by making a POST request to the `/packages` endpoint while providing values for your package's name and package type.

**API format**

```http
POST /packages/
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/exim/packages \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
      "name": "acme",
      "description": "Acme Business Group",
      "packageType": "PARTIAL",    
      "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
      },
      "expiry": "2023-05-20T20:05:10Z",
      "artifacts": [
        {
          "id": "27115daa-c92b-4f17-a077-d65ffeb0c525",
          "type": "PROFILE_SEGMENT",
          "title": "Acme Profile Segment"
        }      
      ]
  }'
```

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `name` | The name of your package. | String | Yes |
| `description` | A description to provide more information on your package. | String | No |
| `packageType` | The package type is **PARTIAL** to indicate you are including specific artifacts in a package. | String | YES |
| `sourceSandbox` | The source sandbox of the package. | Object | No|
| `expiry` | The timestamp that defines the expiration date for package. The default value is 90 days from the creation date. The response expiry field will be epoch UTC time. | String (UTC Timestamp format) | No |
| `artifacts` | A list of artifacts to be exported into the package. The `artifacts` value should be **null** or **empty**, when the `packageType` is `FULL`. | Array | No |

**Response**

A successful response returns your newly created package. The response includes the corresponding package ID, as well as information on its status, expiry, and list of artifacts.

```json
{
    "id": "209f886b00444eac9bb5836fe32e7681",
    "version": 0,
    "createdDate": 1684475012105,
    "modifiedDate": 1684475012105,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}",
    "tenantId": "c875b077162b40409c1327b16da99c1b",
    "requestId": "devxa54a6b56d04f46119d9e3cc006fcc1cb",
    "userId": "platform_exim",
    "name": "acme",
    "description": "Acme Business Group",
    "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",     
    "sourceSandbox": {
        "name": "cjm-mr",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },     
    "packageType": "PARTIAL",
    "expiry": 1684613110000,
    "status": "DRAFT",    
    "artifactsList": [
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        }
    ]
}
```

## Update a package {#update}

You can update a package, by making a PUT request to the `/packages` endpoint.

### Add artifacts to a package {#add-artifacts}

To add artifacts to a package, you must provide an `id` and include **ADD** for the `action`.

**API format**

```http
PUT /packages/
```

**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/exim/packages \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
      "id": "6fa50baedd344a278129a87e68cc9dc7",
      "action": "ADD",
      "expiry": "2023-05-20T20:05:10Z", 
      "artifacts": [
        {
         "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
         "type": "JOURNEY"
        }      
      ]
  }'
```

| Property | Description | Type | Mandatory |
| --- | --- | --- | --- |
| `id` | The id of the package to be updated. | String | Yes |
| `action` | To add artifacts into the package, the action value should be **ADD**. This action is supported for only **PARTIAL** package types. | String | Yes |
| `artifacts` | A list of artifacts to be added in the package. There would be no change to the package if the list is **null** or **empty**. Artifacts are de-duplicated before they are added to the package. See table below for a full list of supported artifacts. | Array | No |
| `expiry` | The timestamp that defines the expiration date for package. The default value is 90 days from the time PUT API is called if expiry is not specified in the payload. The response expiry field will be epoch UTC time. | String (UTC Timestamp format) | No |

The following artifact types are currently supported.

| Artifact | Platform | Object | Partial Flow | Full Sandbox |
| --- | --- | --- | --- | --- |
| `JOURNEY` | Adobe Journey Optimizer | Journeys | Yes | No |
| `ID_NAMESPACE` | Customer Data Platform | Identities | Yes | Yes |
| `REGISTRY_DATATYPE` | Customer Data Platform | Data type | Yes | Yes |
| `REGISTRY_CLASS` | Customer Data Platform | Class | Yes | Yes |
| `REGISTRY_MIXIN` | Customer Data Platform | Field group | Yes | Yes |
| `REGISTRY_SCHEMA` | Customer Data Platform | Schemas | Yes | Yes |
| `CATALOG_DATASET` | Customer Data Platform | Datasets | Yes | Yes |
| `DULE_CONSENT_POLICY` | Customer Data Platform | Consent and Governance Policies | Yes | Yes |
| `PROFILE_SEGMENT` | Customer Data Platform | Audiences | Yes | Yes |
| `FLOW` | Customer Data Platform | Sources dataflow | Yes | Yes |

**Response**

A successful response returns your updated package. The response includes the corresponding package ID, as well as information on its status, expiry, and list of artifacts.

```json
{
    "id": "6fa50baedd344a278129a87e68cc9dc7",
    "version": 4,
    "createdDate": 1684235842000,
    "modifiedDate": 1684475861366,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}",
    "tenantId": "c875b077162b40409c1327b16da99c1b",
    "name": "acme",
    "description": "Acme Business Group",
    "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",     
    "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },     
    "packageType": "PARTIAL",
    "expiry": 1692251861352,
    "status": "DRAFT",    
    "artifactsList": [
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        },
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        }
    ]
}
```

### Delete artifacts from a package {#delete-artifacts}

To delete artifacts from a package, you must provide an `id` and include **DELETE** for the `action`.

**API format**

```http
PUT /packages/
```

**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/exim/packages \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
      "id": "6fa50baedd344a278129a87e68cc9dc7",
      "action": "DELETE",
      "artifacts": [
        {
          "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
          "type": "JOURNEY"
        }      
      ]
  }'
```

| Property | Description | Type | Mandatory |
| --- | --- | --- | --- |
| `id` | The id of the package to be updated. | String | Yes |
| `action` | To delete artifacts from a package, the action value should be **DELETE**. This action is supported for only **PARTIAL** package types. | String | Yes |
| `artifacts` | A list of artifacts to be deleted from the package. There would be no change to the package if the list is **null** or **empty**. | Array | No |

**Response**

A successful response returns your updated package. The response includes the corresponding package ID, as well as information on its status, expiry, and list of artifacts.

```json
{
    "id": "6fa50baedd344a278129a87e68cc9dc7",
    "version": 5,
    "createdDate": 1684235842000,
    "modifiedDate": 1684478830416,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}",
    "tenantId": "c875b077162b40409c1327b16da99c1b",
    "name": "acme",
    "description": "Acme Business Group",
    "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",     
    "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },      
    "packageType": "PARTIAL",
    "expiry": 1692254830403,
    "status": "DRAFT",    
    "artifactsList": [
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        }
    ]
}
```

### Update metadata fields in a package {#update-metadata}

>[!NOTE]
>
>The **UPDATE** action is used to update the package metadata fields of the package and **cannot** be used to add/delete artifacts to a package.

To update the metadata fields in a package, you must provide an `id` and include **UPDATE** for the `action`.

**API format**

```http
PUT /packages/
```

**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/exim/packages \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
      "id": "6fa50baedd344a278129a87e68cc9dc7",
      "action": "UPDATE",
      "name": "acme",
      "description": "Acme Business Group",  
      "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
      }
  }'
```

| Property | Description | Type | Mandatory |
| --- | --- | --- | --- |
| `id` | The id of the package to be updated. | String | Yes |
| `action` | To update the metadata fields in a package, the action value should be **UPDATE**. This action is supported for only **PARTIAL** package types. | String | Yes |
| `name` | The updated name of the package. Duplicate package names are not allowed. | Array | Yes |
| `sourceSandbox` | Source sandbox should belong to the same organization as specified in the header of the request. | Object | Yes |

**Response**

A successful response returns your updated package. The response includes the corresponding package ID, as well as information on its description, status, expiry, and list of artifacts.

```json
{
    "id": "6fa50baedd344a278129a87e68cc9dc7",
    "version": 6,
    "createdDate": 1684235842000,
    "modifiedDate": 1684479094129,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}",
    "tenantId": "c875b077162b40409c1327b16da99c1b",
    "name": "acme",
    "description": "Acme Business Group",
    "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",    
    "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },
    "packageType": "PARTIAL",
    "expiry": 1692255094127,
    "status": "DRAFT",    
    "artifactsList": [
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        }
    ]
}
```

## Delete a package {#delete}

To delete a package, make a DELETE request to the `/packages` endpoint and specify the ID of the package you want to delete.

**API format**

```http
DELETE /packages/{PACKAGE_ID}
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The ID of the package you want to delete. |

**Request**

The following request deletes the package with the ID of {PACKAGE_ID}.

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/exim/packages/{PACKAGE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns a reason which shows the package ID deleted.

```json
{
    "reason": "Package d30e0424a37b46ada6a5cf37f47a86ff deleted"
}
```

## Publish a package {#publish}

In order to enable the import of a package into a sandbox, you must publish it. Make a GET request to the `/packages` endpoint while specifying the ID of the package you want to publish.

**API format**

```http
GET /packages/{PACKAGE_ID}/export
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The ID of the package you want to publish. |

**Request**

The following request publishes the package with the ID of {PACKAGE_ID}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/packages/{PACKAGE_ID}\export \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

| Property | Description | Type | Mandatory |
| --- | --- | --- | --- |
| `expiryPeriod` | This user-specified time period defines the package expiration date (in days) from the time the package was published. This value should not be negative.<br> If no value is specified, the default will be calculated as 90 (days) from the date of publishing. | Integer | No |

**Response**

A successful response returns the published package.

```json
{
    "name": "acme",
    "description": "Acme Business Group",
    "visibility": "TENANT",
    "sourceSandbox":
    {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },
    "type": "PARTIAL",
    "correlationId": "48effe5e-1bef-4250-9c71-23b93ef5d285"
}
```

## Look up a package {#look-up-package}

You can look up an individual package by making a GET request to the `/packages` endpoint that includes the corresponding ID of the package in the request path.

**API format**

```http
GET /packages/{PACKAGE_ID}
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The ID of the package you want to look up. |

**Request**

The following request retrieves information for {PACKAGE_ID}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/packages/{PACKAGE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns details for the queried package ID. The response includes the name, description, publish date and expiry date, source sandbox of the package, as well as a list of artifacts.

```json
{
    "id": "8f585fad94d042cd82dbcba594108a41",
    "version": 2,
    "createdDate": 1685597784000,
    "modifiedDate": 1685597810000,
    "createdBy": "{CREATED_BY}",
    "modifiedBy": "{MODIFIED_BY}",
    "tenantId": "c875b077162b40409c1327b16da99c1b",
    "name": "acme",
    "description": "Acme Business Group",
    "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
    "packageType": "PARTIAL",
    "expiry": 1693373810000,
    "publishDate": 1685597810000,
    "status": "PUBLISHED",
    "artifactsList": [
        {
            "id": "f4f57771-2bd2-469a-9c13-8d803eeb6515",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        },
        {
            "id": "7f4caca7-a477-400d-a41e-c4735f8e780d",
            "type": "JOURNEY",
            "found": false,
            "count": 0
        }
    ],
    "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    }
}
```

## List packages {#list-packages}

You can list all the packages in your organization, by making a GET request to the `/packages` endpoint.

**API format**

```http
GET /packages/?{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the section on [query parameters](./appendix.md) for more information. |

**Request**

The following request retrieves information of the packages based on the {QUERY_PARAMS}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/packages/?property=status==DRAFT,PUBLISHED&property=createdDate>=2023-05-11T18:29:59.999Z&property=createdDate<=2023-05-16T18:29:59.999Z&start=0&orderby=-createdDate&limit=20 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns a list of packages belonging to your organization, including details such as name, status, expiry, and artifacts list.

```json
{
    "totalElements": 109,
    "currentPage": 0,
    "totalPages": 6,
    "hasPreviousPage": false,
    "hasNextPage": true,
    "data": [
        {
            "id": "8f585fad94d042cd82dbcba594108a41",
            "version": 2,
            "createdDate": 1685597784000,
            "modifiedDate": 1685597810000,
            "createdBy": "{CREATED_BY}",
            "modifiedBy": "{MODIFIED_BY}",
            "tenantId": "c875b077162b40409c1327b16da99c1b",
            "name": "acme",
            "description": "Acme Business Group",
            "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
            "packageType": "PARTIAL",
            "expiry": 1693373810000,
            "publishDate": 1685597810000,
            "status": "PUBLISHED",
            "artifactsList": [
                {
                    "id": "f4f57771-2bd2-469a-9c13-8d803eeb6515",
                    "type": "JOURNEY",
                    "found": false,
                    "count": 0
                },
                {
                    "id": "7f4caca7-a477-400d-a41e-c4735f8e780d",
                    "type": "JOURNEY",
                    "found": false,
                    "count": 0
                }
            ],
            "sourceSandbox": {
                "name": "acme-sandbox",
                "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
            }
        },
        {
            "id": "0d7e427ce4cb4dc1b78e30ef61b125c1",
            "version": 2,
            "createdDate": 1685555213000,
            "modifiedDate": 1685555275000,
            "createdBy": "{CREATED_BY}",
            "modifiedBy": "{MODIFIED_BY}",
            "tenantId": "7d7d8bbe3c7c4a8ea701cc5e42c57aeb",
            "name": "acme",
            "description": "Acme Business Group",
            "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
            "packageType": "PARTIAL",
            "expiry": 1693331275000,
            "publishDate": 1685555275000,
            "status": "PUBLISHED",
            "artifactsList": [
                {
                    "id": "626a9669a9f5b818db270e95",
                    "type": "CATALOG_DATASET",
                    "found": false,
                    "count": 0
                }
            ],
            "sourceSandbox": {
                "name": "acme-sandbox",
                "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
            }
        }
    ]
}
```

## Import a package {#import}

This endpoint is used to fetch the conflicting objects in the specified target sandbox. Conflicting objects represent similar objects that are already present in the target sandbox. 

**API format**

```http
GET /packages/{PACKAGE_ID}/import?targetSandbox=targetSandboxName
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The ID of the package you want to look up. |

**Request**

The following request imports the {PACKAGE_ID}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/packages/{PACKAGE_ID}/import?targetSandbox=targetSandboxName \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

Conflicts are returned in the response. The response shows the original package plus the `alternatives` fragment as an array ordered by ranking.

+++View response

```json
[
    {
        "artifact": {
            "id": "https://ns.adobe.com/cjmstage/schemas/20121c2110bb2c6a585baabe5f82994577da1f7d0628234c",
            "type": "REGISTRY_SCHEMA",
            "found": false,
            "count": 0,
            "messages": [
                {
                    "status": "FOUND",
                    "attempt": 1,
                    "message": "Found object with ID: https://ns.adobe.com/cjmstage/schemas/20121c2110bb2c6a585baabe5f82994577da1f7d0628234c"
                }
            ]
        },
        "suggestionList": [
            {
                "id": "https://ns.adobe.com/cjmstage/schemas/176f33f6a8ff6542de1256f8dc01cce4be1b3a68fd5f5bc5",
                "type": "REGISTRY_SCHEMA",
                "found": false,
                "count": 0,
                "title": "Dean Dataset 1 - adhoc schema - 1618950408870_1686403052050"
            },
            {
                "id": "https://ns.adobe.com/cjmstage/schemas/1b37c3403e4e12c7aa46ea9dfe380a9f2b72d4da9db62b46",
                "type": "REGISTRY_SCHEMA",
                "found": false,
                "count": 0,
                "title": "Dean Dataset 1 - adhoc schema - 1618950408870_1686218766627"
            }
        ],
        "parentID": "745F37C35E4B776E0A49421B@AdobeOrg::prod::REGISTRY_SCHEMA::https://ns.adobe.com/cjmstage/schemas/20121c2110bb2c6a585baabe5f82994577da1f7d0628234c"
    },
    {
        "artifact": {
            "id": "https://ns.adobe.com/cjmstage/classes/24c1525f4f06fae2d203c6b78e26ae479ec4541c2c0d6b26",
            "type": "REGISTRY_CLASS",
            "found": false,
            "count": 0,
            "messages": [
                {
                    "status": "FOUND",
                    "attempt": 1,
                    "message": "Found object with ID: https://ns.adobe.com/cjmstage/classes/24c1525f4f06fae2d203c6b78e26ae479ec4541c2c0d6b26"
                }
            ]
        },
        "suggestionList": [
            {
                "id": "https://ns.adobe.com/cjmstage/classes/1dd81d61cdaa89a89382d0a424db77494475bd1db3105feb",
                "type": "REGISTRY_CLASS",
                "found": false,
                "count": 0,
                "title": "Dean Dataset 1 - Adhoc class - 1618950408870_1686564843736"
            },
            {
                "id": "https://ns.adobe.com/cjmstage/classes/2511fb5396a630b2cd3d5d9e9b69d42ce66a4289db8ac917",
                "type": "REGISTRY_CLASS",
                "found": false,
                "count": 0,
                "title": "Dean Dataset 1 - Adhoc class - 1618950408870_1686408152916"
            }
        ],
        "parentID": "745F37C35E4B776E0A49421B@AdobeOrg::prod::REGISTRY_CLASS::https://ns.adobe.com/cjmstage/classes/24c1525f4f06fae2d203c6b78e26ae479ec4541c2c0d6b26"
    },
    {
        "artifact": {
            "id": "4d4c874ec3344d64bf8b3160e60ac78b",
            "type": "MAPPING_SET",
            "found": false,
            "count": 0,
            "messages": [
                {
                    "status": "FOUND",
                    "attempt": 1,
                    "message": "Found object with ID: 4d4c874ec3344d64bf8b3160e60ac78b"
                }
            ]
        },
        "suggestionList": [
            {
                "id": "6b49c959d77c48e9904f7616fe2e7848",
                "type": "MAPPING_SET",
                "found": false,
                "count": 0,
                "title": ""
            },
            {
                "id": "7b363da9e6704afb9716f57193d5246f",
                "type": "MAPPING_SET",
                "found": false,
                "count": 0,
                "title": ""
            },
            {
                "id": "93ca0b4f437c4eaf9f1986408679e965",
                "type": "MAPPING_SET",
                "found": false,
                "count": 0,
                "title": ""
            }
        ],
        "parentID": "745F37C35E4B776E0A49421B@AdobeOrg::prod::MAPPING_SET::4d4c874ec3344d64bf8b3160e60ac78b"
    }
]
```

+++

## Submit an import {#submit-import}

>[!NOTE]
>
>It is inherent with conflict resolution that the alternative artifact already exists in the target sandbox.

You can submit an import for a package once you have reviewed conflicts and provided substitutions by making a POST request to the `/packages` endpoint. The result is provided as a payload, which starts the import job for the destination sandbox as specified in the payload.

Payload also accept user specified job name and description for import job. If user specified name and description is not available, then package name and description is used for job name and description.

**API format**

```http
POST /packages/import
```

**Request**

The following request retrieves packages to be imported. The payload is a map of substitutions where, if an entry exists, the key is the `artifactId` provided by the package, and the alternative is the value. If the map or payload is **empty**, no substitutions are performed.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/exim/packages/import/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
       "id": "09484a599f5f4a5faa43986643964615",
       "name": "acme",
       "description": "Acme Business Group",
       "destinationSandbox": {
         "name": "cjm-mr",
         "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
     },
     "alternatives": {
       "https://ns.adobe.com/cjmstage/schemas/ac33bbd22eb4ad6656e1c7e12e9f520261fb39fd28a902a9": {
         "id": "https://ns.adobe.com/cjmstage/schemas/a3b935344685afad4e52c753161cf673ec23d4fb1b3e9ce",
         "type": "REGISTRY_SCHEMA"
       }
     }
  }'
```

| Property | Description | Type | Mandatory |
| --- | --- | --- | --- |
| `alternatives` | `alternatives` represent the mapping of source sandbox artifacts to the existing target sandbox artifacts. Because they are already there, the import job avoids creating these artifacts in the target sandbox. | String | No |

**Response**

```json
{
    "name": "acme",
    "description": "Acme Business Group",
    "visibility": "TENANT",
    "sourceSandbox":
    {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },
    "destinationSandbox":
    {
        "name": "acme-sandbox",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },
    "type": "PARTIAL",
    "correlationId": "48effe5e-1bef-4250-9c71-23b93ef5d285"
}
```

## List all dependent objects {#dependent-objects}

List all dependent objects for the exported objects in a package by making a POST request to the `/packages` endpoint while specifying the ID of the package.

**API format**

```http
POST /packages/{PACKAGE_ID}/children
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The ID of the package. |

**Request**

The following request lists all dependent objects for the {PACKAGE_ID}.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/exim/packages/{PACKAGE_ID}/import?targetSandbox=targetSandboxName \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d'[
      {
        "id": "4d4c874ec3344d64bf8b3160e60ac78b",
        "type": "MAPPING_SET"
      },
      {
        "id": "https://ns.adobe.com/cjmstage/schemas/20121c2110bb2c6a585baabe5f82994577da1f7d0628234c",
        "type": "REGISTRY_SCHEMA"
      },
      {
        "id": "https://ns.adobe.com/cjmstage/classes/24c1525f4f06fae2d203c6b78e26ae479ec4541c2c0d6b26",
        "type": "REGISTRY_CLASS"
      }
  ]'
```

**Response**

A successful response returns a list of children for the objects.

```json
[
    {
        "id": "4d4c874ec3344d64bf8b3160e60ac78b",
        "title": "4d4c874ec3344d64bf8b3160e60ac78b",
        "type": "MAPPING_SET",
        "children": [
            {
                "id": "https://ns.adobe.com/cjmstage/schemas/20121c2110bb2c6a585baabe5f82994577da1f7d0628234c",
                "title": "Dean Dataset 1 - adhoc schema - 1618950408870",
                "type": "REGISTRY_SCHEMA"
            }
        ]
    },
    {
        "id": "https://ns.adobe.com/cjmstage/schemas/20121c2110bb2c6a585baabe5f82994577da1f7d0628234c",
        "title": "Dean Dataset 1 - adhoc schema - 1618950408870",
        "type": "REGISTRY_SCHEMA",
        "children": [
            {
                "id": "https://ns.adobe.com/cjmstage/classes/24c1525f4f06fae2d203c6b78e26ae479ec4541c2c0d6b26",
                "title": "Dean Dataset 1 - Adhoc class - 1618950408870",
                "type": "REGISTRY_CLASS"
            }
        ]
    },
    {
        "id": "https://ns.adobe.com/cjmstage/classes/24c1525f4f06fae2d203c6b78e26ae479ec4541c2c0d6b26",
        "title": "Dean Dataset 1 - Adhoc class - 1618950408870",
        "type": "REGISTRY_CLASS",
        "children": []
    }
]
```

## Check role-based permissions to import all package artifacts {#role-based-permissions}

You can check if you have permissions to import package artifacts by making a GET request to the `/packages` endpoint while specifying the ID of the package and the target sandbox name.

**API format**

```http
GET /packages/preflight/{packageId}?targetSandbox=<sandbox_name
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The Id of the package you want to import. |

**Request**

The following request checks your permissions for the {PACKAGE_ID} and sandbox.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/packages/preflight/{PACKAGE_ID}?targetSandbox=<sandbox_name> \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns resource permissions for the target sandbox, including a list of permissions required, missing permissions, type of artifact, and a decision on whether the creation is allowed.

+++View response

```json
{
  "packageID": "b7bda68eb1214c86824f1d7204616e51",
  "targetSandboxName": "acme-sandbox",
  "permissionResponse": [
    {
      "artifactID": "4aca57b6-8b83-450b-a460-e8a07ca79a44",
      "requiredPermissions": {
        "resources": [
          {
            "palmResourceType": "Sandbox",
            "resourcePermissions": [
              "view"
            ]
          },
          {
            "palmResourceType": "Schema",
            "resourcePermissions": [
              "read"
            ]
          },
          {
            "palmResourceType": "ProfileConfig",
            "resourcePermissions": [
              "read"
            ]
          },
          {
            "palmResourceType": "Segment",
            "resourcePermissions": [
              "read",
              "write",
              "delete"
            ]
          },
          {
            "palmResourceType": "Composition",
            "resourcePermissions": [
              "read",
              "write",
              "delete"
            ]
          },
          {
            "palmResourceType": "Query",
            "resourcePermissions": [
              "write"
            ]
          },
          {
            "palmResourceType": "SegmentDashboard",
            "resourcePermissions": [
              "read"
            ]
          }
        ]
      },
      "missingPermissions": {
        "resources": []
      },
      "artifactType": "PROFILE_SEGMENT",
      "creationAllowed": true
    },
    {
      "artifactID": "36bb82bc-a00d-4d6b-a598-227d43e027c1",
      "requiredPermissions": {
        "resources": [
          {
            "palmResourceType": "Sandbox",
            "resourcePermissions": [
              "view"
            ]
          },
          {
            "palmResourceType": "ProfileConfig",
            "resourcePermissions": [
              "read",
              "write",
              "delete"
            ]
          },
          {
            "palmResourceType": "Dataset",
            "resourcePermissions": [
              "read"
            ]
          }
        ]
      },
      "missingPermissions": {
        "resources": [
          {
            "palmResourceType": "ProfileConfig",
            "resourcePermissions": [
              "write",
              "delete"
            ]
          },
          {
            "palmResourceType": "Dataset",
            "resourcePermissions": [
              "read"
            ]
          }
        ]
      },
      "artifactType": "PROFILE_MERGE",
      "creationAllowed": false
    }
  ]
}
```

+++

## List export/import jobs {#list-jobs}

You can list current export/import jobs by making a GET request to the `/packages` endpoint.

**API format**

```http
GET /packages/jobs?{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the section on [query parameters](./appendix.md) for more information. |

**Request**

The following request lists all successful import jobs.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/packages/jobs?property=requestType==IMPORT&property=jobStatus==SUCCESS&orderby=createdDate&start=0&limit=5 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns all successful import jobs.

```json
{
    "totalElements": 42,
    "currentPage": 0,
    "totalPages": 9,
    "hasPreviousPage": false,
    "hasNextPage": true,
    "data": [
        {
            "id": "3c1b92cf47a246d7bfbe6fd507c5d543",
            "name": "acme",
            "updated": 1685973675401,
            "created": 1685973675401,
            "jobType": "NEW",
            "packageType": "PARTIAL",
            "description": "Acme Business Group",
            "jobStatus": "SUCCESS",
            "visibility": "TENANT",
            "sourceSandBox": "acme-sandbox",
            "targetSandbox": "poc",
            "createdBy": "{CREATED_BY}"
        },
        {
            "id": "ead59d21405f4184a94dd786a1bf040d",
            "name": "acme1",
            "updated": 1685986367198,
            "created": 1685986367198,
            "jobType": "NEW",
            "packageType": "PARTIAL",
            "description": "Acme Business Group",
            "jobStatus": "SUCCESS",
            "visibility": "TENANT",
            "sourceSandBox": "acme-sandbox",
            "targetSandbox": "poc",
            "createdBy": "{CREATED_BY}"
        },
        {
            "id": "85ddaa3c2f6c475088167cde7a9d4326",
            "name": "acme2",
            "updated": 1686147692568,
            "created": 1686147692568,
            "jobType": "NEW",
            "packageType": "PARTIAL",
            "description": "Acme Business Group",
            "jobStatus": "SUCCESS",
            "visibility": "TENANT",
            "sourceSandBox": "acme-sandbox",
            "targetSandbox": "poc",
            "createdBy": "{CREATED_BY}"
        },
        {
            "id": "c49a4fcb31954cbd828ece1da096c8f5",
            "name": "acme3",
            "updated": 1686148007586,
            "created": 1686148007586,
            "jobType": "NEW",
            "packageType": "PARTIAL",
            "description": "Acme Business Group",
            "jobStatus": "SUCCESS",
            "visibility": "TENANT",
            "sourceSandBox": "acme-sandbox",
            "targetSandbox": "poc",
            "createdBy": "{CREATED_BY}"
        },
        {
            "id": "a3669315baed4cf2af49bf9ce90b8158",
            "name": "acme4",
            "updated": 1686148651910,
            "created": 1686148651910,
            "jobType": "NEW",
            "packageType": "PARTIAL",
            "description": "Acme Business Group",
            "jobStatus": "SUCCESS",
            "visibility": "TENANT",
            "sourceSandBox": "acme-sandbox",
            "targetSandbox": "poc",
            "createdBy": "{CREATED_BY}"
        }
    ]
}
```

## Share packages across organization {#org-linking}

The `/handshake` endpoint in the sandbox tooling API allows you to partner with other organizations to share packages.

### Sending a share request {#send-request}

Send a request to target partner organizations for sharing approval by making a POST request to the `/handshake/bulkCreate` endpoint. This is required before you can share private packages. 

**API format**

```http
POST /handshake/bulkCreate
```

**Request**

```shell
curl --location POST \
  https://platform.adobe.io/data/foundation/exim/handshake/bulkCreate \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "targetIMSOrgIds":["acme@AdobeOrg"],
      "sourceIMSDetails":{
        "id":"acme@AdobeOrg",
        "name":"acme_org"
      } 
  }' 
```
<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `targetIMSOrgIds` | ?? | Array | ?? |
| `sourceIMSDetails` | ?? | Object | ?? |


**Response**

```json
{
    "successfulRequests": {
        "acme@AdobeOrg": {
            "id": "e3f9ae5121cc4f1d849f1535994592c4",
            "version": 0,
            "createdDate": 1724938816798,
            "modifiedDate": 1724938816798,
            "createdBy": "29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e",
            "modifiedBy": "29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceRegion": "va6",
            "sourceIMSOrgName": "{SOURCE_NAME}",
            "status": "APPROVAL_PENDING",
            "createdByName": "{CREATED_BY}",
            "modifiedByName": "{MODIFIED_BY}",
            "modifiedByIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "statusHistory": "[{\"actionTakenBy\":\"acme@98ff67fa661fdf6549420b.e\",\"actionTakenByName\":\"29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e\",\"actionTakenByImsOrgID\":\"2E63197465A811E70A494213@AdobeOrg\",\"action\":\"INITIATED\",\"actionTimeStamp\":1724938816885}]",
            "linkingId": "f7647408-965c-4a33-86aa-640760088c53"
        }
    },
    "failedRequests": {}
}
```

### Approving received share requests {#approve-requests}

Approve share requests from target partner organizations by making a a POST request to the `/handshake/action` endpoint. After approval, source partner organizations can share private packages.

**API format**

```http
POST /handshake/action
```

**Requests**

```shell
curl --location POST  \
  https://platform.adobe.io/data/foundation/exim/handshake/action \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "linkingID":"96e325cd387348f2baa27aafb0d291db",
      "status":"APPROVED",
      "reason":"Done",
      "targetIMSOrgDetails":{
          "id":"acme@AdobeOrg",
          "name":"acme",
          "region":"va7"
      }
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `linkingID` | ?? | String | ?? |
| `status` | ?? | String | ?? |
| `reason` | ?? | String | ?? |
| `targetIMSOrgDetails` | ?? | Object | ?? |

**Response**

```json

{
    "id": "6c2ee3780fee4fbd9344e84ed2cb3fdf",
    "version": 1,
    "createdDate": 1726737474000,
    "modifiedDate": 1726737541731,
    "createdBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "modifiedBy": "AAD819AE65B155520A494137@3ec9197a65a86f34494221.e",
    "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "sourceRegion": "va7",
    "targetRegion": "va7",
    "sourceOrgName": "{SOURCE_ORG}",
    "targetOrgName": "{TARGET_ORG}",
    "status": "APPROVED",
    "createdByName": "{CREATED_BY}",
    "modifiedByIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "statusHistory": "[{\"actionTakenBy\":\"FF0D1F43637B49710A494110@658557135fa10b860a494019\",\"actionTakenByName\":\"{NAME}\",\"actionTakenByImsOrgID\":\"acme@AdobeOrg\",\"action\":\"INITIATED\",\"actionTimeStamp\":1726737474450,\"reason\":null},{\"actionTakenBy\":null,\"actionTakenByName\":null,\"actionTakenByImsOrgID\":\"745F37C35E4B776E0A49421B@AdobeOrg\",\"action\":\"APPROVED\",\"actionTimeStamp\":1726737541818,\"reason\":\"Done\"}]",
    "linkingId": "fbbd61b7-e4f9-410d-856d-187dff4bbcb5"
}
```

### List outgoing/incoming share requests {#outgoing-and-incoming-requests}

List outgoing and incoming share requests by making a GET request to the `handshake/list?property=status%3D%3DAPPROVED&requestType=INCOMING` endpoint.

**Request**

```shell
curl --location --request GET \
  https://platform.adobe.io/data/foundation/exim/handshake/list?property=status%3D%3DAPPROVED&requestType=INCOMING \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id:{ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
```

**Response**

```json
{
    "totalElements": 1,
    "currentPage": 0,
    "totalPages": 1,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "data": [
        {
            "id": "b1348219e81e43b1b32b75dd51edc68f",
            "version": 1,
            "createdDate": 1724929446000,
            "modifiedDate": 1724929617000,
            "modifiedBy": "29571A74665DA05A0A494112@98ff67fa661fdf6549420b.e",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "C0FA10B6661FDE6F0A494023@AdobeOrg",
            "sourceRegion": "va7",
            "targetRegion": "va6",
             "sourceOrgName": "{SOURCE_ORG}",
            "targetOrgName": "{TARGET_ORG}",
            "status": "APPROVED",
            "createdByName": "{CREATED_BY}",
            "modifiedByName": "{MODIFIED_BY}",
            "modifiedByIMSOrgId": "C0FA10B6661FDE6F0A494023@AdobeOrg",
            "statusHistory": "[{\"actionTakenBy\":\"AAD819AE65B155520A494137@3ec9197a65a86f34494221.e\",\"actionTakenByName\":\"{NAME}\",\"actionTakenByImsOrgID\":\"C0FA10B6661FDE6F0A494023@AdobeOrg\",\"action\":\"INITIATED\",\"actionTimeStamp\":1724929442467,\"reason\":null},{\"actionTakenBy\":null,\"actionTakenByName\":\"{NAME}\",\"actionTakenByImsOrgID\":\"C0FA10B6661FDE6F0A494023@AdobeOrg\",\"action\":\"APPROVED\",\"actionTimeStamp\":1724929617531,\"reason\":\"Done\"}]",
            "linkingId": "f45707bc-9c87-46f8-853b-f2d177c028b6"
        }
    ],
    "nextPage": null,
    "pageSize": null
}
```

## Transfer packages 

The `/transfer` endpoint in the sandbox tooling API allows you to fetch and create new package sharing requests. 

### New transfer request {#transfer-request}

Fetch a published source organization's package and share it with a target organization by making a POST request to the `/transfer` endpoint while providing the package ID and target organization's ID.

**API format**

```http
POST /transfer
```

**Request**

```shell
curl --location POST \
  https://platform.adobe.io/data/foundation/exim/transfer/ \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "packageId": "99089521828a4d4f999674496f3d84f1",
      "targets": [
          {
              "imsOrgId": "{TARGET_IMS_ORG}"
          }
      ]
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `packageId` | ?? | String | ?? |
| `targets` | ?? | Array | ?? |

**Response**

```json
[
    {
        "id": "2c0e72aac5fd41ba8c53d52fe97ab908",
        "version": 0,
        "createdDate": 1726480559313,
        "modifiedDate": 1726480559313,
        "createdBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
        "modifiedBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
        "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
        "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
        "packageId": "99089521828a4d4f999674496f3d84f1",
        "status": "PENDING",
        "initiatedBy": "acme@3ec9197a65a86f34494221.e",
        "transferDetails": {
            "messages": [
                "Fetched Package",
                "Fetched Manifest"
            ],
            "additionalMetadata": null
        },
        "requestType": "PRIVATE"
    }
]
```

### Fetch a transfer request by ID {#fetch-transfer-by-id}

Fetch the details of a share request by making a GET request to the `/transfer/{TRANSFER_ID}` endpoint while providing the transfer ID.

**API format**

```http
GET /transfer/{TRANSFER_ID}
```

| Parameter | Description |
| --- | --- |
| `{TRANSFER_ID}` | The ID of the transfer you want to fetch. |

**Request**

The following request fetches a transfer with the ID of {TRANSFER_ID}.

```shell
curl --location GET \
  https://platform.adobe.io/data/foundation/exim/transfer/0c843180a64c445ca1beece339abc04b \
  -H 'x-api-key: {API__KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

**Response**

```json
{
    "id": "0c843180a64c445ca1beece339abc04b",
    "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "sourceOrgName": "{SOURCE_ORG}",
    "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "targetOrgName": "{TARGET_ORG}",
    "packageId": "93137e7f8f984754a0ed9e1e6cabd036",
    "packageName": "{PACKAGE_NAME}",
    "status": "COMPLETED",
    "initiatedBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
    "createdDate": 1724442856000,
    "transferDetails": {
        "messages": [
            "Fetched Package",
            "Fetched Manifest",
            "Tenant Identified",
            "Fetched Sandbox Id",
            "Fetched Blob Files",
            "Message Published to Kafka",
            "Completed Transfer"
        ],
        "additionalMetadata": null
    },
    "requestType": "PRIVATE"
}
```

### Fetch transfers list {#transfers-list}

Fetch a list of transfer requests by making a GET request to the `/transfer/list?property=status=={STATUS}&start={START}&limit={LIMIT}&orderBy=-createdDate` endpoint, changing the search parameters as needed.

**API format**

```http
GET `/transfer/list?property=status=={STATUS}&start={START}&limit={LIMIT}&orderBy=-createdDate`
```

| Parameter | Accepted/Default Values |
| --- | --- |
| `status` | Acceptable values for status are: `COMPLETED`, `PENDING`, `IN_PROGRESS`, `FAILED`. |
| `start` | The default value of start is `0`. |
| `limit` | The default value of limit is `20`. |
| `orderBy` | The ordering only accepts the `createdDate` field. |

**Request**

```shell
curl --location GET \
  https://platform.adobe.io/data/foundation/exim/transfer/list?property=status==COMPLETED&start=0&limit=2&orderBy=-createdDate \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

**Response**

```json
{
    "totalElements": 43,
    "currentPage": 0,
    "totalPages": 22,
    "hasPreviousPage": false,
    "hasNextPage": true,
    "data": [
        {
            "id": "cd4605f6ae2a4e18824a5d6525c2b11c",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "{SOURCE_ORG}",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "{TARGET_ORG}",
            "packageId": "99089521828a4d4f999674496f3d84f1",
            "packageName": "{PACKAGE_NAME}",
            "status": "COMPLETED",
            "initiatedBy": "A8A119A465B1553B0A49401B@3ec9197a65a86f34494221.e",
            "completedTime": 1726129077000,
            "createdDate": 1726129062000,
            "transferDetails": {
                "messages": [
                    "Fetched Package",
                    "Fetched Manifest",
                    "Tenant Identified",
                    "Fetched Sandbox Id",
                    "Fetched Blob Files",
                    "Message Published to Kafka",
                    "Completed Transfer",
                    "Finished with status: COMPLETED"
                ],
                "additionalMetadata": null
            },
            "requestType": "PRIVATE"
        },
        {
            "id": "5aca120a8c094f1ca1e53d988fb29721",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "{SOURCE_ORG}",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "{TARGET_ORG}",
            "packageId": "99089521828a4d4f999674496f3d84f1",
            "packageName": "{PACKAGE_NAME}",
            "status": "COMPLETED",
            "initiatedBy": "2C661A74665DC40B0A494112@98ff67fa661fdf6549420b.e",
            "completedTime": 1726066046000,
            "createdDate": 1726065936000,
            "transferDetails": {
                "messages": [
                    "Fetched Package",
                    "Fetched Manifest",
                    "Tenant Identified",
                    "Fetched Sandbox Id",
                    "Fetched Blob Files",
                    "Message Published to Kafka",
                    "Completed Transfer",
                    "Finished with status: COMPLETED"
                ],
                "additionalMetadata": null
            },
            "requestType": "PRIVATE"
        }
    ],
    "nextPage": null,
    "pageSize": null
}
```

### Update package visibility from private to public {#update-visibility}

Change a package from private to public by a GET request to the `/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC` endpoint. By default, a package is created with private visibility.

**Request**

```shell
curl --location --request GET \
  http://platform-stage.adobe.io/data/foundation/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-type: application/json' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
      "id":"673264e41f8b49229d61467a1a94a907",
      "action":"UPDATE",
      "packageVisibility":"PUBLIC"
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `id` | ?? | String | ?? |
| `action` | ?? | String | ?? |
| `packageVisbility` | ?? | String | ?? |

**Response**

```json
{
    "id": "673264e41f8b49229d61467a1a94a907",
    "version": 7,
    "createdDate": 1729624618000,
    "modifiedDate": 1729658596340,
    "createdBy": "05762A4260527C970A49402D@658557135fa10b860a494019",
    "modifiedBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "name": "acme",
    "imsOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "packageType": "PARTIAL",
    "expiry": 1737434596325,
    "status": "PUBLISH_FAILED",
    "packageVisibility": "PUBLIC",
    "artifactsList": [
        {
            "id": "0ec45a79-5b07-4551-8c9f-de914a99cfca",
            "type": "PROFILE_SEGMENT",
            "found": false,
            "count": 0,
            "title": "Acme Profile Segment"
        }
    ],
    "schemaMapping": {},
    "sourceSandbox": {
        "name": "acme-sandbox",
        "imsOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
        "empty": false
    }
}
```

### Request to create a public package {#create-public-package}

Create a new package with public visibility by making a POST request to the `/transfer/pullRequest` endpoint.

**API format**

```http
POST \transfer\pullRequest
```

**Request**

```shell
curl --location POST \
  https://platform-stage.adobe.io/data/foundation/exim/transfer/pullRequest \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "imsOrgId": "2E63197465A811E70A494213@AdobeOrg",
      "packageId": "673264e41f8b49229d61467a1a94a907"
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `imsOrgId` | ?? | String | ?? |
| `packageId` | ?? | String | ?? |

**Response**

```json
{
    "id": "e044f3a2306c490a9283404792d3cb3a",
    "version": 0,
    "createdDate": 1729658890425,
    "modifiedDate": 1729658890425,
    "createdBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "modifiedBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
    "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "packageId": "673264e41f8b49229d61467a1a94a907",
    "status": "PENDING",
    "initiatedBy": "FF0D1F43637B49710A494110@658557135fa10b860a494019",
    "pipelineMessageId": "aebcb05f-aa65-4a4e-9f56-e20bed0803d9",
    "requestType": "PUBLIC"
}
```

### List public packages {#list-public-packages}

Fetch a list of packages with public visbility by making a GET request to the `/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC&orderby=-createdDate` endpoint.

**API format**

```http
GET /transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC&orderby=-createdDate
```

**Request**

```shell
curl --location --request GET \
  https://platform.adobe.io/data/foundation/exim/transfer/list?property=status%3D%3DCOMPLETED%2CFAILED&requestType=PUBLIC&orderby=-createdDate \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "imsOrgId": "2E63197465A811E70A494213@AdobeOrg",
      "packageId": "74b38d53288d4186b2977fafa622a7f4"
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `imsOrgId` | ?? | String | ?? |
| `packageId` | ?? | String | ?? |

**Response**

+++View response

```json
{
    "totalElements": 14,
    "currentPage": 0,
    "totalPages": 1,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "data": [
        {
            "id": "535aff3dcf254315b33dd96cba6b4893",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "54cf26eb1f5141529a1cc3a0378c555f",
            "packageName": "Public package demo",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729359318000,
            "createdDate": 1729359316000,
            "requestType": "PUBLIC"
        },
        {
            "id": "02c500ecc5424650a0d314376a0ec6a2",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "54cf26eb1f5141529a1cc3a0378c555f",
            "packageName": "Public package demo",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729359284000,
            "createdDate": 1729359283000,
            "requestType": "PUBLIC"
        },
        {
            "id": "d6fe62af80934dea9d6813e7e9a72211",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "74422bfdf3a34301b37df40ef492d8d7",
            "packageName": "Test Private Flow Final",
            "status": "COMPLETED",
            "initiatedBy": "11B41FB463226F620A49411D@658557135fa10b860a494019",
            "completedTime": 1729284462000,
            "createdDate": 1729275962000,
            "requestType": "PUBLIC"
        },
        {
            "id": "e6e1e8671b0641029513bc5ff9a788ca",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "ed74331873fb457f83f98863b1197f8d",
            "packageName": "Fest",
            "status": "FAILED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284104000,
            "createdDate": 1729253854000,
            "requestType": "PUBLIC"
        },
        {
            "id": "b7d9fb93e3fe4e47bd895417c387e98f",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "67baaec4af3648f3a02c715fed8097d1",
            "packageName": "PublicPackageSharing",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284835000,
            "createdDate": 1729253556000,
            "requestType": "PUBLIC"
        },
        {
            "id": "6b475653d65f49b8a9585bab47110229",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "67baaec4af3648f3a02c715fed8097d1",
            "packageName": "PublicPackageSharing",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284439000,
            "createdDate": 1729253522000,
            "requestType": "PUBLIC"
        },
        {
            "id": "c73fef7fdc81468a8f25f50251b3e6c5",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "67baaec4af3648f3a02c715fed8097d1",
            "packageName": "PublicPackageSharing",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284388000,
            "createdDate": 1729253443000,
            "requestType": "PUBLIC"
        },
        {
            "id": "49f36a796bcd4fc7bd8ea8f49f9942ea",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "f19d43a93414463587d21e5f907de9a6",
            "packageName": "Public Package Audit Test",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284667000,
            "createdDate": 1729253421000,
            "requestType": "PUBLIC"
        },
        {
            "id": "475dfe85c2e94a8cbefca9c7e52ac95c",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "f19d43a93414463587d21e5f907de9a6",
            "packageName": "Public Package Audit Test",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284957000,
            "createdDate": 1729253143000,
            "requestType": "PUBLIC"
        },
        {
            "id": "1a780eaa9e1348cf85adb6d40141503f",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "f19d43a93414463587d21e5f907de9a6",
            "packageName": "Public Package Audit Test",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284562000,
            "createdDate": 1729252975000,
            "requestType": "PUBLIC"
        },
        {
            "id": "21dd1186fb3445c69e273f8e52e653e1",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "df2ee73e5ef44351bd8d0ae62e2b1251",
            "packageName": "Private Package Test 1",
            "status": "COMPLETED",
            "initiatedBy": "34091FB3636DF4020A494114@658557135fa10b860a494019",
            "completedTime": 1729284262000,
            "createdDate": 1729229755000,
            "requestType": "PUBLIC"
        },
        {
            "id": "e1f2d91426514292a72a1275e60ead6b",
            "sourceIMSOrgId": "2E63197465A811E70A494213@AdobeOrg",
            "sourceOrgName": "2E63197465A811E70A494213@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "d30b9a93ab5e40baa298ea936b740090",
            "packageName": "Demo Package 1016",
            "status": "COMPLETED",
            "initiatedBy": "11B41FB463226F620A49411D@658557135fa10b860a494019",
            "completedTime": 1729284784000,
            "createdDate": 1729208888000,
            "requestType": "PUBLIC"
        },
        {
            "id": "bd9b80d4ab514b86b8c5b35927064693",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "cf1dd7583bc946c09f602839eb95db8b",
            "packageName": "Public Package test 1",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284934000,
            "createdDate": 1729153097000,
            "requestType": "PUBLIC"
        },
        {
            "id": "93f32aff292d4f658f0b908f335e2b23",
            "sourceIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "sourceOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetIMSOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
            "targetOrgName": "745F37C35E4B776E0A49421B@AdobeOrg",
            "packageId": "cf1dd7583bc946c09f602839eb95db8b",
            "packageName": "Public Package test 1",
            "status": "COMPLETED",
            "initiatedBy": "93331E2C614330EE0A494104@658557135fa10b860a494019",
            "completedTime": 1729284912000,
            "createdDate": 1729153043000,
            "requestType": "PUBLIC"
        }
    ],
    "nextPage": null,
    "pageSize": null
}
```

+++

## Copy package payload (#package-payload)

You can copy a public package's payload by making a GET request to the `/packages/payload` endpoint that includes the corresponding ID of the package in the request path.

**API format**

```http
GET /packages/payload/{PACKAGE_ID}
```

| Parameter | Description |
| --- | --- |
| `{PACKAGE_ID}` | The ID of the package you want to copy. |

**Request**

```shell
curl --location --request GET \
  https://platform-stage.adobe.io/data/foundation/exim/packages/payload/{PACKAGE_ID} \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
      "imsOrgId": "2E63197465A811E70A494213@AdobeOrg",
      "packageId": "74b38d53288d4186b2977fafa622a7f4"
  }'
```

<!-- UPDATE -->

| Property | Description | Type | Required |
| --- | --- | --- | --- |
| `imsOrdId` | ?? | String | ?? |
| `packageId` | ?? | String | ?? |

**Response**

```json

{
    "imsOrgId": "745F37C35E4B776E0A49421B@AdobeOrg",
    "packageId": "575e86f794324af4ba4ce0dc3887dade"
}
```
