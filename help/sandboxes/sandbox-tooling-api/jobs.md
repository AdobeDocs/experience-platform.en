---
title: Sandbox Tooling Jobs API Endpoint
description: The /jobs endpoint in the Sandbox Tooling API allows you to view import jobs in Adobe Experience Platform.
---
# Jobs endpoint

Sandbox tooling allows you to view current import jobs. The `/jobs` endpoint in the sandbox tooling API allows you to view jobs in your organization.

## View import jobs {#import}

You can view import jobs, by making a GET request to the `/jobs` endpoint.

**API format**

```http
GET /jobs/
```

**Request**

The following request lists all successful import jobs.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/exim/jobs/IMPORT/{snapshotId}[/?[status=SUCCESS][&start=0][&limit=20][&orderBy=MODIFIED_DATE:DESC]] \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns successful import jobs, ordered by the date modified.

```json
{
    "status": "OK",
    "type": "SUCCESS",
    "message": "1 Files found",
    "object":
    [
        {
            "id": "a39b12ad722e45378e8011095385a0c7",
            "version": 5,
            "createdDate": 1682020441000,
            "modifiedDate": 1682020466000,
            "createdBy": "{CREATED_BY}",
            "modifiedBy": "{MODIFIED_BY}",
            "snapshotId": "48effe5e-1bef-4250-9c71-23b93ef5d285",
            "imsOrgId": "5C1328435BF324E90A49402A@AdobeOrg",
            "requestType": "IMPORT",
            "jobStatus": "SUCCESS",
            "jobType": "NEW",
            "jobDetails": "{\"id\":\"a39b12ad722e45378e8011095385a0c7\",\"name\":\"Powered by exim-ui\",\"description\":\"Validating Export utility\",\"visibility\":\"TENANT\",\"requestType\":\"IMPORT\",\"expiry\":0,\"snapshotId\":\"48effe5e-1bef-4250-9c71-23b93ef5d285\",\"createdTimestamp\":1682020441448,\"modifiedTimestamp\":1682020441448,\"type\":\"PARTIAL\",\"jobStatus\":\"SUCCESS\",\"jobType\":\"NEW\",\"counter\":0,\"imsOrgId\":\"5C1328435BF324E90A49402A@AdobeOrg\",\"jobHash\":\"QRD0OM0nGnKq88AG0Gn8GkqVuve9DxmhjRaddZUfAIo=\",\"sourceSandbox\":{\"name\":\"dean-source-3\",\"imsOrgId\":\"5C1328435BF324E90A49402A@AdobeOrg\"},\"destinationSandbox\":{\"name\":\"dean-target-3\",\"imsOrgId\":\"5C1328435BF324E90A49402A@AdobeOrg\"},\"completedTasks\":[{\"taskType\":\"POST\",\"taskStatus\":\"SUCCESS\",\"artifact\":{\"id\":\"Email\",\"type\":\"ID_NAMESPACE\",\"found\":false,\"count\":0,\"messages\":[{\"status\":\"NO_CHANGE\",\"attempt\":1,\"message\":\"{\\\"timestamp\\\":\\\"2023-04-20T19:54:02.849\\\",\\\"status\\\":400,\\\"error\\\":\\\"INVALID_REQUEST_PARAMS\\\",\\\"description\\\":\\\"Please provide a valid value of namespace name\\\",\\\"type\\\":\\\"http://ns.adobe.com/adobecloud/problem/namespacevalidation\\\",\\\"title\\\":\\\"Namespace validation\\\",\\\"report\\\":{\\\"code\\\":\\\"INVALID_REQUEST_PARAMS\\\"}}\"}]}},{\"taskType\":\"POST\",\"taskStatus\":\"SUCCESS\",\"artifact\":{\"id\":\"https://ns.adobe.com/platointegrationtest/schemas/98e583c0b54ddeaec129969c63066bd8bb5049adaada6319\",\"type\":\"REGISTRY_SCHEMA\",\"found\":false,\"count\":0,\"messages\":[{\"status\":\"CREATED\",\"attempt\":1,\"message\":\"REGISTRY_SCHEMA created. Source id=https://ns.adobe.com/platointegrationtest/schemas/98e583c0b54ddeaec129969c63066bd8bb5049adaada6319; Target id=https://ns.adobe.com/platointegrationtest/schemas/98e583c0b54ddeaec129969c63066bd8bb5049adaada6319\"}],\"newId\":\"https://ns.adobe.com/platointegrationtest/schemas/98e583c0b54ddeaec129969c63066bd8bb5049adaada6319\"}},{\"taskType\":\"POST\",\"taskStatus\":\"SUCCESS\",\"artifact\":{\"id\":\"643eca1e7b7e111bcf600d73\",\"type\":\"CATALOG_DATASET\",\"found\":false,\"count\":0,\"messages\":[{\"status\":\"CREATED\",\"attempt\":1,\"message\":\"CATALOG_DATASET created. Source id=643eca1e7b7e111bcf600d73; Target id=64419867254fa41bce171a57\"}],\"newId\":\"64419867254fa41bce171a57\"}}]}"
        }
    ]
}
```
