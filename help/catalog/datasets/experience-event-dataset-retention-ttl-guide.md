---
title: Manage Experience Event Dataset Retention in the Data Lake using TTL
description: Learn how to evaluate, set, and manage Experience Event Dataset Retention in the data lake using Time-To-Live (TTL) configurations with Adobe Experience Platform APIs. This guide explains how TTL row-level expiration supports data retention policies, optimizes storage efficiency, and ensures effective data lifecycle management. It also provides use cases and best practices to help you apply TTL effectively.
exl-id: d688d4d0-aa8b-4e93-a74c-f1a1089d2df0
---
# Manage Experience Event Dataset Retention in the data lake using TTL

Efficient data management is critical for optimal performance, cost control, and data integrity. Use Experience Event Dataset Retention Time-To-Live (TTL) to enforce row-level expiration, automatically removing outdated records from datasets in the data lake while ensuring optimal storage efficiency and data relevance.

This guide explains how to evaluate, set, and manage TTL using the Catalog Service API. You'll learn when and why to apply TTL, how to configure and update TTL values using API calls, and best practices to ensure effective implementation.

>[!IMPORTANT]
>
>TTL is designed to optimize data lifecycle management and storage efficiency. It is not a compliance tool and should not be relied upon for regulatory requirements. Compliance often necessitates broader data governance strategies.

## Why use TTL for row-level data management

As datasets grow, efficient data management becomes increasingly important to preserve performance, control costs, and keep data relevant. TTL-based row-level data expiration automates data cleanup by removing outdated records without manual intervention to help optimize storage and improve system efficiency.

TTL is useful when managing time-sensitive data that loses relevance over time. Consider implementing TTL if you need to:

- Reduce storage costs by automatically removing outdated records.
- Improve query performance by minimizing irrelevant data.
- Maintain data hygiene by keeping only relevant information.
- Optimize data retention to support business objectives.

>[!NOTE]
>
>Experience Event Dataset Retention applies to event data stored in the data lake. If you are managing retention in Real-Time Customer Data Platform, consider using [Experience Event Expiration](../../profile/event-expirations.md) and [Pseudonymous Profile Expiration](../../profile/pseudonymous-profiles.md) alongside data lake retention settings.

Use TTL configurations to optimize storage based on entitlements. While Profile Store data (used in Real-Time CDP) may be considered stale and removed after 30 days, the same event data in the data lake can remain available for 12–13 months (or longer based on entitlement) for analytics and Data Distiller use cases.

>[!TIP]
>
>Entitlements refer to the storage and retention allowances defined by your Adobe subscription and license agreements.

### Industry example {#industry-example}

As an example, consider a video streaming service that tracks user interactions, such as video views, searches, and recommendations. While recent engagement data is crucial for personalization, older activity logs (for example, interactions from over a year ago) lose relevance. By using row-level expiration, Experience Platform automatically removes outdated logs, ensuring only current and meaningful data is used for analytics and recommendations.

## Evaluate TTL suitability {#evaluate-ttl-suitability}

Before applying a retention policy, assess whether your dataset is a good candidate for row-level expiration. Consider the following:

- Data relevance over time: Does older data provide value, or does it become obsolete?
- Impact on downstream processes: Will removing data affect reporting, analytics, or integrations?
- Storage cost versus retention value: Does the value of older data justify the cost of storing it?

If historical records are essential for long-term analysis or business operations, TTL may not be the right approach. Reviewing these factors ensures that TTL aligns with your data retention needs without negatively affecting data availability.

## Best practices for setting TTL {#best-practices}

Select the right TTL value to ensure your Experience Event Dataset Retention policy balances data retention, storage efficiency, and analytical needs. A TTL that is too short may cause data loss, while one that is too long can increase storage costs and unnecessary data accumulation. Ensure that the TTL aligns with your dataset's purpose by considering how often the data is accessed and how long it remains relevant.

The table below provides common TTL recommendations based on dataset type and usage patterns:

| Dataset Type                | Recommended TTL        | Typical Use Cases |
|-----------------------------|------------------------|-------------------|
| Frequently accessed datasets| 30-90 days             | User engagement logs, website clickstream data, short-term campaign performance data. |
| Archival datasets           | 1 year or more         | Financial transaction logs, compliance data, long-term trend analysis, machine learning training datasets. |
| App-managed datasets        | Up to 13 months        | System-managed datasets have predefined TTL restrictions, which are automatically enforced to comply with system-imposed limits. |
| Customer-managed datasets   | 30 days – Max TTL      | Datasets created through the UI, APIs, or Data Distiller. The TTL must be at least 30 days and within the defined max TTL. |

Review TTL settings periodically to ensure they continue to align with your storage policies, analytical needs, and business requirements.

### Key considerations when setting TTL {#key-considerations}

Follow these best practices to ensure that TTL settings align with your data retention strategy:

- Audit TTL changes regularly. Every TTL update triggers an audit event. Use audit logs to track TTL modifications for compliance, data governance, and troubleshooting purposes.
- Disable TTL if data must be retained indefinitely. To disable TTL, set `ttlValue` to `null`. This prevents automatic expiration and retains all records permanently. Consider the storage implications before making this change. 

## Limitations of TTL {#limitations}

Be aware of the following limitations when using TTL:

- **Experience Event Dataset Retention using TTL applies to row-level expiration**, not dataset deletion. TTL removes records based on a defined retention period but does not delete entire datasets. To remove a dataset, use the [dataset expiration endpoint](../../hygiene/api/dataset-expiration.md) or manual deletion.
- **TTL configuration remains active until explicitly disabled**. The configuration remains in effect until you disable it. Disabling TTL stops expiration and ensures all records in the dataset are retained.
- **TTL is not a compliance tool**. While TTL optimizes storage and lifecycle management, you must implement broader governance strategies to ensure regulatory compliance.

## Analyze dataset size and relevance before applying TTL {#analyze-dataset-size}

Before applying TTL, use queries to analyze dataset size and relevance. Run targeted queries (such as counting records within specific date ranges) to preview the impact of various TTL values. Then use this information to choose an optimal retention period that balances data utility and cost-effectiveness.

![A visual workflow for implementing TTL on Experience Event Datasets. Steps include: assess data lifespan and impact of removal, validate TTL settings with queries, configure TTL through Catalog Service API, and continuously monitor TTL impact and make adjustments.](../images/datasets/dataset-retention-ttl-guide/manage-experience-event-dataset-retention-in-the-data-lake.png)

Running targeted queries helps determine how much data would be retained or removed under different TTL configurations. For example, the following SQL query counts the number of records created within the last 30 days:

```sql
SELECT COUNT(1) FROM [datasetName] WHERE timestamp > date_sub(now(), INTERVAL 30 DAY);
```

Running similar queries for different time intervals helps validate TTL settings and ensure they balance storage efficiency and data accessibility.

## Get started with TTL management

Before you can evaluate, set, and manage Experience Event Dataset Retention using the Catalog Service API, you must understand how to format your requests correctly. This includes knowing the API paths, providing required headers, and formatting request payloads. Refer to the [Catalog Service API getting started guide](../api/getting-started.md) for this essential information.

>[!NOTE]
>
>This document covers row-level expiration, which deletes individual expired rows within a dataset while keeping the dataset itself intact. It does not apply to dataset expiration, which removes entire datasets and is managed by a separate feature. For dataset-level expiration, refer to the [dataset expiration API documentation](../../hygiene/api/dataset-expiration.md).

### Check your TTL constraints {#check-ttl-constraints}

Use the Data Hygiene API `/ttl/{DATASET_ID}` endpoint to help plan TTL configurations. This endpoint returns the minimum and maximum TTL values supported for your organization, along with a recommended value (`defaultValue`) for the dataset type. 

See the Adobe Developer [Data Hygiene API](https://developer.adobe.com/experience-platform-apis/references/data-hygiene/#operation/getTtl) documentation for more information.

To [check the TTL currently applied to a dataset](#check-applied-ttl-values), make a GET request to the [Catalog Service API](https://developer.adobe.com/experience-platform-apis/references/catalog/) `/dataSets/{DATASET_ID}` endpoint instead.

>[!TIP]
>
>The Experience Platform Gateway URL and base path for the Catalog Service API is: `https://platform.adobe.io/data/foundation/catalog`. The base path for the Data Hygiene API is: `https://platform.adobe.io/data/core/hygiene`

**API format**

```http
GET /ttl/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | A system-generated string that uniquely identifies a dataset. To find a dataset ID, use the `/datasets` endpoint. See the [list catalog objects API guide](../api/list-objects.md) for instructions on filtering responses for relevant datasets.  |

**Request**

The following request retrieves your organization's TTL constraints for a particular dataset.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/ttl/{DATASET_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns the recommended, maximum, and minimum TTL values based on your organization's entitlements, along with a suggested TTL (`defaultValue`) for the dataset. This `defaultValue` is a recommended TTL duration, provided for guidance only. It is not applied unless explicitly configured by you. The response does not include any custom TTL values that may already be set. To view the current TTL for a dataset, use the GET `/catalog/dataSets/{DATASET_ID}` endpoint.

+++Select to view the response

```json
{
  "extensions": {
    "adobe_lakeHouse": {
      "rowExpiration": {
        "defaultValue": "P12M",
        "maxValue": "P12M",
        "minValue": "P7D"
      }
    }
  }
}
```

+++

| Property      | Description |
|--------------|-------------|
| `defaultValue` | A recommended TTL value for your dataset. This value is **not** automatically applied. You must explicitly set a TTL for it to take effect. |
| `maxValue`    | The maximum TTL duration permitted by your organization's entitlement. Typically, this duration is 10 years (`P10Y`). |
| `minValue`    | The minimum TTL duration permitted by your organization's entitlement. Typically, this duration is 30 days (`P30D`). |

### How to check applied TTL values {#check-applied-ttl-values}

To check the current TTL value that has been applied to a dataset, use the following API call:

```http
GET /dataSets/{DATASET_ID}
```

This call returns the current `ttlValue` (if set) in the `extensions.adobe_lakeHouse.rowExpiration` section.

**Request**

The following request retrieves your organization's TTL value for a particular dataset.

```shell
curl -X GET \
https://platform.adobe.io/data/foundation/catalog/dataSets/{DATASET_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response includes the `extensions` object, which contains the current TTL configuration applied to the dataset. The response example below is truncated for brevity.

```json
{
    "{DATASET_ID}": {
        "name": "Acme Sales Data",
        "description": "This dataset contains sales transaction records for Acme Corporation.",
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "extensions": {
            "adobe_lakeHouse": {
            "rowExpiration": {
                "ttlValue": "P3M",
            }
            }
        }
        ...
    }
}
```

### Set or update TTL for a dataset {#set-update-ttl}

>[!IMPORTANT]
>
>TTL-based row-level expiration can only be applied to event datasets that use a time-series schema. This includes datasets based on the standard XDM ExperienceEvent class as well as custom schemas that extend the Time Series schema (`https://ns.adobe.com/xdm/data/time-series`).
>
>Before you apply TTL, use the Schema Registry API to verify that the dataset's schema includes the correct extension by checking the `meta:extends` property. See the [Schema endpoint documentation](../../xdm/api/schemas.md#lookup) for guidance on how to do this.

You can configure Experience Event Dataset Retention by setting a new TTL or updating an existing TTL using the same API method. Use a PATCH request to the `/v2/datasets/{DATASET_ID}` endpoint to apply or adjust TTL.

**API format**

```http
PATCH /v2/datasets/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The ID of the dataset you want to update the TTL value for. |

**Request**

In the example below, the `ttlValue` is set to `P3M`. This means that records older than three months are automatically deleted. Adjust the retention period to suit your business needs (for example, `P6M` for six months or `P12M` for one year).

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/catalog/v2/datasets/{DATASET_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
    "extensions": {
        "adobe_lakeHouse": {
            "rowExpiration": {
                "ttlValue": "P3M"  // A 3 month retention period
            }
        }
    }
}
```  

| Property                         | Description |
|----------------------------------|-------------|
| `rowExpiration.ttlValue` | Defines the duration before records in the dataset are automatically removed. Uses the ISO-8601 period format (for example, `P3M` for 3 months, or `P30D` for 30 days). |

**Response**

A successful response returns a reference to the updated dataset but does not explicitly include the TTL settings. To confirm the TTL configuration, make a follow-up `GET /dataSets/{DATASET_ID}` request.

```JSON
[
  "@/dataSets/{DATASET_ID}"
]
```

#### Example scenario {#example-scenario}

Consider a video streaming platform that initially sets the TTL to three months to ensure fresh engagement data for personalization. However, if subsequent analysis reveals that older interactions still provide valuable insights, the TTL can be extended to six months with the following request:

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/catalog/v2/datasets/{DATASET_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
    "extensions": {
        "adobe_lakeHouse": {
            "rowExpiration": {
                "ttlValue": "P6M"  // Extend to 6 months
            }
        }
    }
}
```

## Dataset retention policy FAQs {#faqs}

This FAQ covers practical questions about dataset retention jobs, immediate effects of TTL changes, recovery options, and how retention periods differ across Platform services.

### What types of datasets can I apply retention policy rules to?

+++Answer
You can apply TTL-based retention policies to any dataset that uses time-series behavior. This includes datasets based on the standard XDM ExperienceEvent class, as well as custom schemas designed to capture time-series data.

Row-level expiration requires the following technical conditions:

- The schema must be designed to capture time-series data.
- The schema must include a timestamp field used to evaluate expiration.
- The dataset should store event-level data, typically using or extending the XDM ExperienceEvent class.
- The dataset must be registered in Catalog Service, as TTL settings are applied via `extensions.adobe_lakeHouse.rowExpiration`.
- TTL values must use the ISO-8601 duration format (for example, `P30D`, `P6M`, `P1Y`).
+++

### How soon will the Dataset Retention job delete data from data lake services?

+++Answer
Dataset TTLs are evaluated and processed every 30 days, deleting all expired records. An event is considered expired if it was ingested into Experience Platform more than 30 days ago (ingestion date > 30 days) and its event date exceeds the defined retention period (TTL).
+++

<!-- ### How soon will the Dataset Retention job delete data from Profile services?

+++Answer
Once a retention policy is set, existing events that already exceed the newly defined TTL are immediately deleted. Newer events remain until their timestamps surpass the retention period.

For example, if you apply a 30-day expiration policy on May 15th, the following occurs:

- New events receive a 30-day expiration as they are ingested.
- Existing events with a timestamp older than April 15th are immediately deleted.
- Existing events with a timestamp after April 15th are set to expire 30 days after their timestamp (for example, an event from April 18th would be deleted on May 18th).
+++ -->

### Can I set different retention policies for data lake and Profile services?

+++Answer
Yes, you can set different retention policies for data lake and Profile services. However, the retention period for Profile must not be shorter than the one set for data lake.
+++

### How can I check my current dataset usage?

+++Answer
You can check the latest dataset storage size for data lake and Profile stores as separate metrics on the [!UICONTROL Dataset] inventory workspace. Sort the columns to identify the largest datasets and verify that retention policies are applied.

For sandbox-level usage, refer to the License Usage dashboard. See the [License Usage documentation](../../dashboards/guides/license-usage.md) for details.
+++

### How can I verify if the data retention job was successful?

+++Answer
You can verify the last data retention job by checking its timestamp in the [Dataset Retention Configuration UI](./user-guide.md#data-retention-policy) or on the Data Inventory page.

Alternatively, you can make a GET request to the following endpoint:

`GET https://platform.adobe.io/data/foundation/catalog/dataSets/{DATASET_ID}`

The response includes the property `extensions.adobe_lakeHouse.rowExpiration.lastCompleted`, which indicates the Unix timestamp (in milliseconds) of when the most recent TTL job was completed.

Historical dataset usage reporting is currently unavailable.
+++

### Can I recover deleted data?

+++Answer
No, once a retention policy is applied, any data older than the retention period is permanently deleted and cannot be recovered.
+++

### What is the minimum TTL I can configure on a data lake Experience Event dataset?

+++Answer 
The minimum TTL for a data lake Experience Event dataset is 30 days. The data lake functions as a processing backup and recovery system during initial ingestion and processing. As a result, data must remain in the data lake for at least 30 days post-ingestion before it can be expired. 
+++

### What if I need to retain some data lake fields longer than my TTL policy allows?

+++Answer 
Use Data Distiller to retain specific fields beyond your dataset's TTL while staying within your utilization limits. Create a job that regularly writes only the necessary fields to a derived dataset. This workflow ensures compliance with a shorter TTL while preserving critical data for extended use.

For more details, see the [Create derived datasets with SQL guide](../../query-service/data-distiller/derived-datasets/create-derived-datasets-with-sql.md). 
+++

## Next steps {#next-steps}

Now that you've learned how to manage TTL settings for row-level expiration, review the following documentation to further your understanding of TTL management:

- Retention jobs: Learn to schedule and automate dataset expirations in the Experience Platform UI with the [data lifecycle UI guide](../../hygiene/ui/dataset-expiration.md), or check Dataset Retention configurations and verify that expired records are deleted.
- [Dataset Expiration API endpoint guide](../../hygiene/api/dataset-expiration.md): Discover how to delete entire datasets rather than just rows. Learn how to schedule, manage, and automate dataset expiration using the API to ensure efficient data retention.
- [Data usage policies overview](../../data-governance/policies/overview.md): Learn how to align your data retention strategy with broader compliance requirements and marketing use restrictions.
