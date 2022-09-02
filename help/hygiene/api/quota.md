---
title: Quota API Endpoint
description: The /quota endpoint in the Data Hygiene API allows you to monitor your data hygiene usage against your organization's monthly quota limits for each job type.
hide: true
hidefromtoc: true
---
# Quota endpoint

>[!IMPORTANT]
>
>Data hygiene capabilities in Adobe Experience Platform are currently only available for organizations that have purchased Healthcare Shield.

The `/quota` endpoint in the Data Hygiene API allows you to monitor your data hygiene usage against your organization's monthly quota limits for each job type.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [overview](./overview.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## List quotas {#list}

You can view your organization's quota information by making a GET request to the `/quota` endpoint.

**API format**

```http
GET /quota
GET /quota?quotaType={QUOTA_TYPE}
```

| Parameter | Description |
| --- | --- |
| `{QUOTA_TYPE}` | An optional query parameter that specifies the type of quota to retrieve. If no `quotaType` parameter is provided, all quota values are returned in the API response. Accepted type values include:<ul><li>`expirationDatasetQuota`: Dataset expirations</li><li>`deleteIdentityWorkOrderDatasetQuota`: Consumer deletions</li><li>`fieldUpdateWorkOrderDatasetQuota`: Field updates</li></ul> |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/hygiene/quota \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json'
```

**Response**

A successful response returns the details of your data hygiene quotas.

```json
{
  "quotas": [
    {
      "name": "expirationDatasetQuota",
      "description": "The number of concurrently active Expiration Dataset Delete Work Order requests for the organization.",
      "consumed": 3154,
      "quota": 10000
    },
    {
      "name": "deleteIdentityWorkOrderQuota",
      "description": "The number of Consumer Delete Work Order requests for the organization for this month.",
      "consumed": 390,
      "quota": 2000000
    },
    {
      "name": "fieldUpdateWorkOrderQuota",
      "description": "The number of Consumer Delete Work Order requests for the organization for this month.",
      "consumed": 56,
      "quota": 100000
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `quotas` | Lists the quota information for each data hygiene job type. Each quota object contains the following properties:<ul><li>`name`: The data hygiene job type:<ul><li>`expirationDatasetQuota`: Dataset expirations</li><li>`deleteIdentityWorkOrderDatasetQuota`: Consumer deletions</li><li>`fieldUpdateWorkOrderDatasetQuota`: Field updates</li></ul></li><li>`description`: A description of the data hygiene job type.</li><li>`consumed`: The number of jobs of this type run in the current monthly period.</li><li>`quota`: The limit for the amount of jobs of this type that can be run for the current monthly period based on your organization's licensing.</li></ul> |

{style="table-layout:auto"}
