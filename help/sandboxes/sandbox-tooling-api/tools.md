---
title: Sandbox Tooling Tools API Endpoint
description: The /tools endpoint in the Sandbox Tooling API allows you to list and retrieve artifacts and snapshots in Adobe Experience Platform.
---
# Tools endpoint

Sandbox tooling allows you to select different artifacts and export them into a package. A package can consist of a single object or multiple objects. Any objects that are included in a package must be from the same sandbox. 

The `/tools` endpoint in the sandbox tooling API allows you to list and retrieve artifacts and snapshots that are stored in [!DNL Azure Blob].

## Job details {#details}

To independently fetch the job JSON data, make a GET request to the `/tools` endpoint and provide the ID of the job.

**API format**

```http
GET /tools/job/{JOB_ID}
```

| Parameter | Description |
| --- | --- |
| {JOB_ID} | The ID of the job you want to look up. |

**Request**

The following request retrieves information for {JOB_ID}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/tools/job/{JOB_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns details for the queried job ID.

```json
{
    "status": "OK",
    "type": "SUCCESS",
    "message": "Job with ID: 0fe588dc4af64f9f98396cb6b49afb6c found",
    "object": {
        "id": "0fe588dc4af64f9f98396cb6b49afb6c",
        "name": "acme",
        "description": "Acme Business Group",
        "visibility": "TENANT",
        "requestType": "IMPORT",
        "expiry": 0,
        "snapshotId": "dd0b89579d554d07a814a620a44f9e43",
        "createdTimestamp": 1696510894380,
        "modifiedTimestamp": 1696510894380,
        "type": "PARTIAL",
        "jobStatus": "SUCCESS",
        "jobType": "NEW",
        "counter": 0,
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
        "jobHash": "6n8iV3KS6OGb0YQIQBaGhoAKKNeATeROqzV8/zbkNM8=",
        "sourceSandbox": {
            "name": "acme-sandbox",
            "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
            "empty": false
        },
        "destinationSandbox": {
            "name": "acme-sandbox1",
            "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
            "empty": false
        },
        "completedTasks": [
            {
                "taskType": "POST",
                "taskStatus": "SUCCESS",
                "artifact": {
                    "id": "https://ns.adobe.com/cjmstage/mixins/68f038b712e54546f99035a20d6ead649ca9d5b135eb24de",
                    "type": "REGISTRY_MIXIN",
                    "found": false,
                    "count": 0,
                    "title": "drb",
                    "messages": [
                        {
                            "status": "CREATED",
                            "attempt": 1,
                            "message": "REGISTRY_MIXIN created. Source id=https://ns.adobe.com/cjmstage/mixins/68f038b712e54546f99035a20d6ead649ca9d5b135eb24de; Target id=https://ns.adobe.com/cjmstage/mixins/220968a10a69ced58180ff1ccbe4f03124e44d17a0f23383"
                        }
                    ],
                    "newId": "https://ns.adobe.com/cjmstage/mixins/220968a10a69ced58180ff1ccbe4f03124e44d17a0f23383"
                }
            },
            {
                "taskType": "POST",
                "taskStatus": "SUCCESS",
                "artifact": {
                    "id": "https://ns.adobe.com/cjmstage/schemas/3926d1ff658a191bcb511b7c4ec45afee1c146a5b152e500",
                    "type": "REGISTRY_SCHEMA",
                    "found": false,
                    "count": 0,
                    "title": "drbFormSubmissions",
                    "messages": [
                        {
                            "status": "CREATED",
                            "attempt": 1,
                            "message": "REGISTRY_SCHEMA created. Source id=https://ns.adobe.com/cjmstage/schemas/3926d1ff658a191bcb511b7c4ec45afee1c146a5b152e500; Target id=https://ns.adobe.com/cjmstage/schemas/5e32908b8db9b37a5f3e7b5851d6ffa9e3bf8487abaef3c5"
                        }
                    ],
                    "newId": "https://ns.adobe.com/cjmstage/schemas/5e32908b8db9b37a5f3e7b5851d6ffa9e3bf8487abaef3c5"
                }
            },
            {
                "taskType": "POST",
                "taskStatus": "SUCCESS",
                "artifact": {
                    "id": "651344d17c8c8d289d10a8e6",
                    "type": "CATALOG_DATASET",
                    "found": false,
                    "count": 0,
                    "title": "drbFormSubmissions",
                    "messages": [
                        {
                            "status": "CREATED",
                            "attempt": 1,
                            "message": "CATALOG_DATASET created. Source id=651344d17c8c8d289d10a8e6; Target id=651eb3af5901df289dcb4511"
                        }
                    ],
                    "newId": "651eb3af5901df289dcb4511"
                }
            }
        ],
        "importReplacementMap": {
            "651344d17c8c8d289d10a8e6": "651eb3af5901df289dcb4511",
            "5a3b530ee7c4b38e9b33a69d22bfb75a2c5020e5a7a61e51": "b6d8ae6376864e22ed8169a9dac3b2115d1c72b5c1d1bced",
            "https://ns.adobe.com/cjmstage/mixins/68f038b712e54546f99035a20d6ead649ca9d5b135eb24de": "https://ns.adobe.com/cjmstage/mixins/220968a10a69ced58180ff1ccbe4f03124e44d17a0f23383",
            "https://ns.adobe.com/cjmstage/schemas/3926d1ff658a191bcb511b7c4ec45afee1c146a5b152e500": "https://ns.adobe.com/cjmstage/schemas/5e32908b8db9b37a5f3e7b5851d6ffa9e3bf8487abaef3c5"
        },
        "sourceParentArtifactMap": {
            "651344d17c8c8d289d10a8e6": "745F37C35E4B776E0A49421B@AdobeOrg::ajo-object-copy::CATALOG_DATASET::6512ec5a5bcd5e289c33a594",
            "5a3b530ee7c4b38e9b33a69d22bfb75a2c5020e5a7a61e51": "745F37C35E4B776E0A49421B@AdobeOrg::ajo-object-copy::REGISTRY_DESCRIPTOR::9d20176f1eb3f09dac4070b4bd6c4f79e8debdc8a0535725",
            "https://ns.adobe.com/cjmstage/mixins/68f038b712e54546f99035a20d6ead649ca9d5b135eb24de": "745F37C35E4B776E0A49421B@AdobeOrg::ajo-object-copy::REGISTRY_MIXIN::https://ns.adobe.com/cjmstage/mixins/37d29b7590c59928583b4d9a189229261291e388b7aa1031",
            "https://ns.adobe.com/cjmstage/schemas/3926d1ff658a191bcb511b7c4ec45afee1c146a5b152e500": "745F37C35E4B776E0A49421B@AdobeOrg::ajo-object-copy::REGISTRY_SCHEMA::https://ns.adobe.com/cjmstage/schemas/926a7aa38b7cc93b87dd03c8f73e6e7537651407c30b66a0"
        }
    }
}
```

## Display all dependent artifacts related to one or more root artifacts {#dependent-artifacts}

To traverse and return the dependency tree for all artifacts related to the provided root artifact, make a POST request to the `/tools` endpoint.

**API format**

```http
GET /tools/artifacts/dependencies
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/tools/artifacts/dependencies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
       "name": "From Postman",
       "description": "Test Dependency tree analysis",
       "artifacts": [
         {
           "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
           "type": "JOURNEY"
         }     
       ]
     }'
```

**Response**

```json
{
    "status": "OK",
    "type": "SUCCESS",
    "message": "Artifact dependencies found",
    "object": [
        {
            "from": {
                "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
                "type": "JOURNEY",
                "title": "Birthday Journey_1647559351683",
                "found": true
            },
            "to": {
                "id": "5f933eb1-30a7-46e1-9d36-31d4df7740e0",
                "type": "PROFILE_SEGMENT",
                "title": "Use Case Segment-b047eac8-258f-40e4-93d4-5898bf9a9df8",
                "visibility": "tenant",
                "found": false
            }
        },
        {
            "from": {
                "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
                "type": "JOURNEY",
                "title": "Birthday Journey_1647559351683",
                "found": true
            },
            "to": {
                "id": "19140f65-f745-47b2-96ba-0aa5bd78cd84",
                "type": "MESSAGE",
                "title": "Use Case Message-b047eac8-258f-40e4-93d4-5898bf9a9df8",
                "visibility": "tenant",
                "found": false
            }
        },
        {
            "from": {
                "id": "5f933eb1-30a7-46e1-9d36-31d4df7740e0",
                "type": "PROFILE_SEGMENT",
                "title": "Use Case Segment-b047eac8-258f-40e4-93d4-5898bf9a9df8",
                "found": true
            },
            "to": {
                "id": "e58c6723-f4dc-4899-8b45-9e8513156ae3",
                "type": "PROFILE_MERGE",
                "title": "Default Timebased",
                "visibility": "tenant",
                "found": false
            }
        },
        {
            "from": {
                "id": "e58c6723-f4dc-4899-8b45-9e8513156ae3",
                "type": "PROFILE_MERGE",
                "title": "Default Timebased",
                "found": true
            },
            "to": null
        },
        {
            "from": {
                "id": "19140f65-f745-47b2-96ba-0aa5bd78cd84",
                "type": "MESSAGE",
                "title": "Use Case Message-b047eac8-258f-40e4-93d4-5898bf9a9df8",
                "version": "1.0",
                "found": true
            },
            "to": {
                "id": "a9d270ca-e2ea-47c8-afa4-5d4e123c4c16",
                "type": "PRESET",
                "title": "MasterPresets",
                "found": false
            }
        },
        {
            "from": {
                "id": "a9d270ca-e2ea-47c8-afa4-5d4e123c4c16",
                "type": "PRESET",
                "title": "MasterPresets",
                "found": true
            },
            "to": null
        }
    ]
}
```

## List all artifacts of a specific type {#all-artifacts}

To list all artifacts in your organization and sandbox, make a GET request to the `/tools` endpoint and provide the type of the artifact.

**API format**

```http
GET /tools/artifacts/{ARTIFACT_TYPE}
```

| Parameter | Description |
| --- | --- |
| {ARTIFACT_TYPE} | The type of artifacts you want to retrieve. |

**Request**

The following request retrieves information for {ARTIFACT_TYPE}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/tools/artifacts/{ARTIFACT_TYPE} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns a list of artifact for the queried artifact type.

```json
{
    "status": "OK",
    "type": "SUCCESS",
    "message": "3 Artifacts found for type JOURNEY",
    "object": [
        {
            "id": "249991b8-f1e1-49b4-87f8-89b92205c1bd",
            "type": "JOURNEY",
            "title": "JMS Test Journey For Demo"
        },
        {
            "id": "3238d7b3-e1a9-4714-955c-e39ff1d8a553@1649709742072",
            "type": "JOURNEY",
            "title": "Use Case CSV Upload Journey_1649709742072"
        },
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29-1663000361004",
            "type": "JOURNEY",
            "title": "Birthday Journey - 9dd20331-b482-410d-b5bb-48ffe37c4a35"
        }
    ]
}
```

## Retrieve JSON of a specific artifact {#specific-artifact}

You can retrieve the JSON of a specific artifact by making a POST request to the `/tools` endpoint. 

**API format**

```http
GET /tools/artifacts/
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/tools/artifacts \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
      "id": "605bd4ecaef58b18dcecd753",
      "type": "CATALOG_DATASET"
    }'
```

**Response**

```json
{
    "status": "OK",
    "type": "SUCCESS",
    "message": "Found Artifact of type CATALOG_DATASET for ID 605bd4ecaef58b18dcecd753",
    "object": {
        "name": "Acme Dataset",
        "enableErrorDiagnostics": false,
        "imsOrg": "5C1328435BF324E90A49402A@AdobeOrg",
        "sandboxId": "ff74fce0-f37d-11ea-a1bc-4b10d94330a6",
        "tags": {
            "unifiedProfile": [
                "enabled:true",
                "enabledAt:2021-03-25 00:10:45"
            ],
            "adobe/siphon/table/format": [
                "parquet"
            ],
            "adobe/pqs/table": [
                "aepsampleappcustomactionstage_dataset"
            ],
            "unifiedIdentity": [
                "enabled:true"
            ]
        },
        "namespace": "ACP",
        "state": "DRAFT",
        "id": "605bd4ecaef58b18dcecd753",
        "version": "1.0.2",
        "created": 1616631020471,
        "updated": 1646830124644,
        "createdClient": "exc_app",
        "createdUser": "54D51EC5483707F89920FAAF@AdobeID",
        "updatedUser": "acp_core_unifiedProfile_feeds@AdobeID",
        "viewId": "605bd4ecaef58b18dcecd754",
        "fileDescription": {
            "persisted": true,
            "containerFormat": "parquet",
            "format": "parquet"
        },
        "files": "@/dataSetFiles?dataSetId=605bd4ecaef58b18dcecd753",
        "schemaRef": {
            "id": "https://ns.adobe.com/cjmstage/schemas/9069b82318c0107c7c86e592dd9c908d11033124479e54e4",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        }
    }
}
```

## Retrieve contents of a specific file within a snapshot {#contents}

To retrieve the contents of a specific file within a snapshot, make a POST request to the `/tools` endpoint. This file is located in [!DNL Azure Blob Store].

**API format**

```http
POST /tools/abs/file/
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/exim/tools/abs/file \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d'{
      "type": "SIMPLIFIED",
      "filename": "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/importReport_745F37C35E4B776E0A49421B@AdobeOrg_1668534713739"
    }'
```

**Response**

A successful response returns a list of artifacts for the queried artifact type.

```json
{
    "snapshotId": "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a",
    "name": "acme",
    "description": "Validating Export utility",
    "sourceSandbox":
    {
        "name": "acme-auth-test",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },
    "destinationSandbox":
    {
        "name": "acme-auth-test",
        "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg"
    },
    "artifacts":
    [
        {
            "id": "a9d270ca-e2ea-47c8-afa4-5d4e123c4c16",
            "type": "PRESET",
            "title": "MasterPresets",
            "found": true,
            "messages":
            [
                {
                    "status": "CREATED",
                    "attempt": 0,
                    "message": "PRESET created. Source id=a9d270ca-e2ea-47c8-afa4-5d4e123c4c16; Target id=a9d270ca-e2ea-47c8-afa4-5d4e123c4c16"
                }
            ]
        },
        {
            "id": "19140f65-f745-47b2-96ba-0aa5bd78cd84",
            "type": "MESSAGE",
            "title": "Use Case Message-b047eac8-258f-40e4-93d4-5898bf9a9df8",
            "version": "1.0",
            "found": true,
            "messages":
            [
                {
                    "status": "CREATED",
                    "attempt": 0,
                    "message": "MESSAGE created. Source id=19140f65-f745-47b2-96ba-0aa5bd78cd84; Target id=c2cbb7ce-aa7d-4881-a2ee-404a7d25d085"
                }
            ]
        },
        {
            "id": "e58c6723-f4dc-4899-8b45-9e8513156ae3",
            "type": "PROFILE_MERGE",
            "title": "Default Timebased",
            "found": true,
            "messages":
            [
                {
                    "status": "OBJECT_REUSED",
                    "attempt": 0,
                    "message": "PROFILE_MERGE was not created anew. Reused object id=62abdf71-31d8-4e6b-b712-e7cea9761a5c"
                }
            ]
        },
        {
            "id": "5f933eb1-30a7-46e1-9d36-31d4df7740e0",
            "type": "PROFILE_SEGMENT",
            "title": "Use Case Segment-b047eac8-258f-40e4-93d4-5898bf9a9df8",
            "found": true,
            "messages":
            [
                {
                    "status": "OBJECT_EXISTS",
                    "attempt": 0,
                    "message": "Object PROFILE_SEGMENT, id=5f933eb1-30a7-46e1-9d36-31d4df7740e0 already exists and was not re-created"
                }
            ]
        },
        {
            "id": "d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
            "type": "JOURNEY",
            "title": "Birthday Journey_1647559351683",
            "found": true,
            "messages":
            [
                {
                    "status": "CREATED",
                    "attempt": 0,
                    "message": "JOURNEY created. Source id=d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683; Target id=d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683-1668534712799"
                }
            ]
        }
    ],
    "tuples": {...}, //Response has been truncated from brevity.
    "tupleList": [...] //Response has been truncated from brevity.
}
```

## List all files in a snapshot {#files}

To retrieve a list of all files within a snapshot, make a GET request to the `/tools` endpoint and provide the ID of the snapshot. 

**API format**

```http
GET /tools/abs/files/{SNAPSHOT_ID}
```

| Parameter | Description |
| --- | --- |
| {SNAPSHOT_ID} | The ID of the snapshot containing the files you want to retrieve. |

**Request**

The following request retrieves a list of files for {SNAPSHOT_ID}.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/tools/abs/files/{SNAPSHOT_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns a list of all files for the queried snapshot ID.

```json
{
    "status": "OK",
    "type": "SUCCESS",
    "message": "8 Files found",
    "object": [
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/19140f65-f745-47b2-96ba-0aa5bd78cd84",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/5f933eb1-30a7-46e1-9d36-31d4df7740e0",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/a9d270ca-e2ea-47c8-afa4-5d4e123c4c16",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/artifactDependency",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/d8d8ed6d-696a-40bd-b4fe-ca053ec94e29@1647559351683",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/e58c6723-f4dc-4899-8b45-9e8513156ae3",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/importReport_745F37C35E4B776E0A49421B@AdobeOrg_1668534713739",
        "c10c01ea-8f17-4cf5-b749-0c2b99c66f4a/manifest"
    ]
}
```
