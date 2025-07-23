---
title: Quota API Endpoint
description: The /quota endpoint in the Data Hygiene API allows you to monitor your Advanced Data Lifecycle Management usage against your organization's monthly quota limits for each job type.
role: Developer
exl-id: 91858a13-e5ce-4b36-a69c-9da9daf8cd66
---
# Quota endpoint

Use the `/quota` endpoint in the Data Hygiene API to monitor your organization's usage and limits for data hygiene operations. Quota amounts may differ based on your organization's entitlements, such as Privacy and Security Shield or Health Care Shield.

Monitor your current quota consumption to ensure compliance with organizational limits for each job type.

## Getting started

The endpoint used in this guide is part of the Data Hygiene API. Before continuing, please review the [overview](./overview.md) for the following information:

* Links to related documentation
* A guide to reading the sample API calls in this document
* Important information regarding the required headers that are needed to make calls to any Experience Platform API

## Quotas and processing timelines {#quotas}

Record delete requests are subject to quotas and service-level expectations based on your license entitlement. These limits apply to both UI- and API-based delete requests.

>[!TIP]
>
>This document shows you how to query your usage against entitlement-based limits. For a full description of quota tiers, record delete entitlements, and SLA behavior, see the [UI-based record delete](../ui/record-delete.md#quotas) or [API-based record delete](./workorder.md#quotas) documents.

## List quotas {#list}

You can view your organization's quota information by making a GET request to the `/quota` endpoint.

**API format**

```http
GET /quota
GET /quota?quotaType={QUOTA_TYPE}
```

>[!NOTE]
>
>The consumed quota resets on the 1st of each month at 00:00 GMT and 00:00 GMT for daily quota. 
>
>Only accepted requests are counted. If a work order is rejected because it fails validation, those identity deletions do not count against your quota.

| Parameter | Description |
| --- | --- |
| `{QUOTA_TYPE}` | An optional query parameter that specifies the type of quota to retrieve. If no `quotaType` parameter is provided, all quota values are returned in the API response. Accepted type values include:<ul><li>`datasetExpirationQuota`: This object shows the number of concurrently active dataset expirations for your organization, and your total allowance of expirations. </li><li>`dailyConsumerDeleteIdentitiesQuota`: This object shows the total number of record delete requests made by your organization today and your total daily allowance.</li><li>`monthlyConsumerDeleteIdentitiesQuota`: This object shows the total number of record delete requests made by your organization this month and your total monthly allowance.</li></ul> |

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

A successful response returns the details of your data lifecycle quotas.

```json
{
  "quotas": [
    {
      "name": "datasetExpirationQuota",
      "description": "The number of concurrently active dataset-expiration delete operations in all work order requests for the organization.",
      "consumed": 11,
      "quota": 75
    },
    {
      "name": "dailyConsumerDeleteIdentitiesQuota",
      "description": "The consumed number of deleted identities in all work order requests for the organization for today.",
      "consumed": 314,
      "quota": 700000
    },
    {
      "name": "monthlyConsumerDeleteIdentitiesQuota",
      "description": "The consumed number of deleted identities in all work order requests for the organization this month.",
      "consumed": 2764,
      "quota": 12000000
    }
  ]
}
```

| Property | Description |
| -------- | ------- |
| `quotas`      | Lists the quota information for each data lifecycle job type. Each quota object contains the following properties: |
| `name`        | The quota type identifier.  |
| `description` | A description of what this quota limits. |
| `consumed`    | The amount of quota currently consumed. The consumed amount resets on the 1st of the month at 00:00 GMT and 00:00 GMT for daily quota. |
| `quota`       | The maximum allotment of this quota type for your organization. |
