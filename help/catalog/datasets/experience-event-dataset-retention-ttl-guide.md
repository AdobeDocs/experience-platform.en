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
> TTL is designed to optimize data lifecycle management and storage efficiency. It is not a compliance tool and should not be relied upon for regulatory requirements. Compliance often necessitates broader data governance strategies.

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
>
>TTL configurations help you optimize storage based on entitlements. While Profile Store data (used in Real-Time CDP) may be considered stale and removed after 30 days, the same event data in the data lake can remain available for 12–13 months (or longer based on entitlement) for analytics and Data Distiller use cases.

### Industry example {#industry-example}

As an example, consider a video streaming service that tracks user interactions, such as video views, searches, and recommendations. While recent engagement data is crucial for personalization, older activity logs (for example, interactions from over a year ago) lose relevance. By using row-level expiration, Experience Platform automatically removes outdated logs, ensuring only current and meaningful data is used for analytics and recommendations.

## Evaluate TTL suitability

Before applying a retention policy, assess whether your dataset is a good candidate for row-level expiration. Consider the following:

- Data relevance over time: Does older data provide value, or does it become obsolete?
- Impact on downstream processes: Will removing data affect reporting, analytics, or integrations?
- Storage cost versus retention value: Does the value of older data justify the cost of storing it?

If historical records are essential for long-term analysis or business operations, TTL may not be the right approach. Reviewing these factors ensures that TTL aligns with your data retention needs without negatively affecting data availability.

## Plan your queries {#plan-queries}

Before applying TTL, it's important to assess dataset size and data relevance, and to evaluate how much historical data should be retained. The following visual outlines the full process of implementing TTL, from planning queries to monitoring retention effectiveness.

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

### How to check current TTL settings

To begin your TTL management, first check current TTL settings. Make a GET request to the `/ttl/{datasetId}` endpoint to retrieve the default, maximum, and minimum TTL settings for a dataset. This step is necessary because TTL rules can vary based on the dataset type.

>[!TIP]
>
>The Experience Platform Gateway URL and base path for the Catalog Service API is: `https://platform.adobe.io/data/foundation/catalog`.

**API format**

```http
GET /ttl/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | A system-generated string that uniquely identifies a dataset. To find a dataset ID, use the `/datasets` endpoint. See the [list catalog objects API guide](../api/list-objects.md) for instructions on filtering responses for relevant datasets.  |

**Request**

The following request retrieves your organization's TTL settings for a particular dataset.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/ttl/5ba9452f7de80408007fc52a' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -H 'x-sandbox-id: {SANDBOX_ID}'
```

**Response**

A successful response returns the TTL configuration for the dataset, including the default, maximum, and minimum TTL values for both `adobe_lakeHouse` and `adobe_unifiedProfile` storage.

+++Select to view the response

```json
{
    "67976f0b4878252ab887ccd9": {
        "name": "Acme Sales Data",
        "description": "This dataset contains sales transaction records for Acme Corporation.",
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "tags": {
            "adobe/pqs/table": [
                "acme_sales_20250127_113331_106"
            ],
            "adobe/siphon/table/format": [
                "delta"
            ]
        },
        "extensions": {
            "adobe_lakeHouse": {  
                "rowExpiration": {
                    "defaultValue": "P12M",
                    "maxValue": "P12M",
                    "minValue": "P30D"
                }
            },
            "adobe_unifiedProfile": {  
                "rowExpiration": {
                    "defaultValue": "P12M",
                    "maxValue": "P12M",
                    "minValue": "P7D"
                }
            }
        },
        "version": "1.0.0",
        "created": 1737977611118,
        "updated": 1737977611118,
        "createdClient": "acme_data_pipeline",
        "createdUser": "john.snow@acmecorp.com",
        "updatedUser": "arya.stark@acmecorp.com",
        "classification": {
            "managedBy": "CUSTOMER"
        }
    }
}
```

+++

| Property      | Description |
|--------------|-------------|
| `defaultValue` | The default TTL period applied if no custom TTL is set. |
| `maxValue`    | The longest TTL allowed for the dataset. If null, there is no maximum limit. |
| `minValue`    | The shortest TTL allowed to ensure compliance with system policies. |

<!-- Q) what is the default Max and Min values and are they system-imposed? -->

### How to set TTL for a dataset {#set-ttl}

>[!IMPORTANT]
>
>Row-expiration can only be applied to event datasets that use a time-series schema. Before setting TTL, verify that the dataset's schema extends `https://ns.adobe.com/xdm/data/time-series` to ensure the API request succeeds. Use the Schema Registry API to retrieve the schema details and verify the `meta:extends` property. Refer to the [Schema endpoint documentation](../../xdm/api/schemas.md#lookup) for guidance on how to do this.

To configure Experience Event Dataset Retention for your dataset, set a new TTL value by making a PATCH request to the `/v2/datasets/{ID}` endpoint. 

**API format**

```http
PATCH /v2/datasets/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The ID of the dataset you want to update the TTL value for. |

**Request**

In the example request below, the `ttlValue` is set to `P3M`. This ensures that records older than three months are automatically deleted. You can adjust the retention period to suit your business needs using values such as `P6M` for six months or `P12M` for one year.

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/catalog/v2/datasets/{DATASET_ID}' \
  -h 'Authorization: Bearer {ACCESS_TOKEN}' \
  -h 'Content-Type: application/json' \
  -h 'x-api-key: {API_KEY}' \
  -h 'x-gw-ims-org-id: {ORG_ID}' \
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

**Response**

A successful response shows the TTL configuration for the dataset. It includes details on row-level expiration settings for both `adobe_lakeHouse` and `adobe_unifiedProfile` storage.

+++Select to view the response

```JSON
{
    "67976f0b4878252ab887ccd9": {
        "name": "Acme Sales Data",
        "description": "This dataset contains sales transaction records for Acme Corporation.",
        "imsOrg": "{ORG_ID}",
        "sandboxId": "{SANDBOX_ID}",
        "tags": {
            "adobe/pqs/table": [
                "acme_sales_20250127_113331_106"
            ],
            "adobe/siphon/table/format": [
                "delta"
            ]
        },
        "extensions": {
            "adobe_lakeHouse": {
                "rowExpiration": {
                "ttlValue": "P3M",
                    "valueStatus": "custom",
                    "setBy": "user",
                    "updated": 1737977766499
                }
            },
            "adobe_unifiedProfile": {  
                "rowExpiration": {
                    "ttlValue": "P3M",
                    "valueStatus": "custom",
                    "setBy": "user",
                    "updated": 1737977766499
                }
            }
        },
        "version": "1.0.0",
        "created": 1737977611118,
        "updated": 1737977611118,
        "createdClient": "acme_data_pipeline",
        "createdUser": "john.snow@acmecorp.com",
        "updatedUser": "arya.stark@acmecorp.com",
        "classification": {
            "managedBy": "CUSTOMER"
        }
    }
}
```

+++

| Property                         | Description |
|----------------------------------|-------------|
| `extensions`                     | A container for additional metadata related to the dataset. |
| `extensions.adobe_lakeHouse`     | Specifies settings related to storage architecture, including row-level expiration configurations |
| `rowExpiration` | The object contains TTL settings that define the retention period for the dataset. |
| `rowExpiration.ttlValue` | Defines the duration before records in the dataset are automatically removed. Uses the ISO-8601 period format (for example, `P3M` for 3 months, or `P30D` for one week). |
| `rowExpiration.valueStatus` | The string indicates whether the TTL setting is a default system value or a custom value set by a user. Possible values are: `default`, `custom`. |
| `rowExpiration.setBy` | Specifies who last modified the TTL setting. Possible values include: `user` (manually set) or `service` (automatically assigned). |
| `rowExpiration.updated` | The timestamp of the last TTL update. This value indicates when the TTL setting was last modified. |

### How to update TTL {#update-ttl}

Extend or shorten the retention period to suit your business needs by adjusting the TTL. For example, when considering the video streaming platform mentioned earlier, the platform may initially set the TTL to three months to ensure fresh engagement data for personalization. However, if their analysis shows that interaction patterns older than three months still provide valuable insights, they can extend the TTL period to six months to keep older records for better recommendation models.

To modify an existing TTL value, use the `PATCH` method on the `/v2/datasets/{DATASET_ID}` endpoint.

#### API format

```http
PATCH /v2/datasets/{DATASET_ID}
```

**Request**

In the following request, the TTL is updated to six months (`P6M`) extending the record retention period before automatic deletion.

```shell
curl -X PATCH \
  'https://platform.adobe.io/data/foundation/catalog/v2/datasets/{DATASET_ID}' \
  -h 'Authorization: Bearer {ACCESS_TOKEN}' \
  -h 'Content-Type: application/json' \
  -h 'x-api-key: {API_KEY}' \
  -h 'x-gw-ims-org-id: {ORG_ID}' \
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

<!-- Q) For Clarity, should this example show both data stores being updated by expanding the example payload above? -->

**Response**

```JSON
{  "extensions": {
        "adobe_lakeHouse": {
            "rowExpiration": {
              "ttlValue": "P6M",
              "valueStatus": "custom",
              "setBy": "user",
              "updated": "1737977766499"
            }
        },
        "adobe_unifiedProfile": {
            "rowExpiration": {
                "ttlValue": "P3M",
                "valueStatus": "custom",
                "setBy": "user",
                "updated": "17379754766355"
            }
        }
    }
}
```

## Best practices for setting TTL {#best-practices}

Choosing the right TTL value is crucial to ensuring that your Experience Event Dataset Retention policy balances data retention, storage efficiency, and analytical needs. A TTL that is too short may cause data loss, while one that is too long can increase storage costs and unnecessary data accumulation. Ensure that the TTL aligns with your dataset's purpose by considering how often the data is accessed and how long it remains relevant.

The table below provides common TTL recommendations based on dataset type and usage patterns:

| Dataset Type                | Recommended TTL        | Typical Use Cases |
|-----------------------------|------------------------|-------------------|
| Frequently accessed datasets| 30-90 days             | User engagement logs, website clickstream data, short-term campaign performance data. |
| Archival datasets           | 1 year or more         | Financial transaction logs, compliance data, long-term trend analysis, machine learning training datasets. |
| App-managed datasets        | Up to 13 months        | System-managed datasets have predefined TTL restrictions, which are automatically enforced to comply with system-imposed limits. |
| Customer-managed datasets   | 30 days – Max TTL      | Datasets created through the UI, APIs, or Data Distiller. The TTL must be at least 30 days and within the defined max TTL. |

Review TTL settings periodically to ensure they continue to align with your storage policies, analytical needs, and business requirements.

### Key considerations when setting TTL

<!-- What are the default TTL limits for system-generated Profile Store and data lake datasets? -->

<!-- Q) Are the limits: 90 days for data in the Profile store and 13 months for data in the data lake? This is true for Journey Optimizer. -->

Follow these best practices to ensure that TTL settings align with your data retention strategy:

- Audit TTL changes regularly. Every TTL update triggers an audit event. Use audit logs to track TTL modifications for compliance, data governance, and troubleshooting purposes.
- Remove TTL if data must be retained indefinitely. To disable TTL, set `ttlValue` to `null`. This prevents automatic expiration and retains all records permanently. Consider the storage implications before making this change. 

<!-- Q) Are there any specific system constraints or impacts of setting TTL to null? -->

## Limitations of TTL {#limitations}

Be aware of the following limitations when using TTL:

- **Experience Event Dataset Retention using TTL applies to row-level expiration**, not dataset deletion. TTL removes records based on a defined retention period but does not delete entire datasets. To remove a dataset, use the [dataset expiration endpoint](../../hygiene/api/dataset-expiration.md) or manual deletion.
- **TTL cannot be removed**, only updated. Once applied, TTL cannot be deleted, but you can [modify the retention period](#update-ttl) to extend or shorten it. To retain data indefinitely, set a sufficiently long TTL instead of attempting to remove it.
- **TTL is not a compliance tool**. TTL optimizes storage and data lifecycle management but does not meet regulatory data retention requirements. For compliance, implement broader data governance strategies.

## Dataset retention policy FAQs {#faqs}

This section provides answers for commonly asked questions about Dataset Retention policies in Adobe Experience Platform.

### What types of datasets can I apply retention policy rules to?

+++Answer
You can apply retention policies to datasets created using the XDM ExperienceEvent class. For Profile services, retention policies are only applicable to Experience Event datasets that have been Profile-enabled.
+++

### How soon will the Dataset Retention job delete data from data lake services?

+++Answer
Dataset TTLs are evaluated and processed weekly, deleting all expired records. An event is considered expired if it was ingested into Experience Platform more than 30 days ago (ingestion date > 30 days) and its event date exceeds the defined retention period (TTL).
+++

### How soon will the Dataset Retention job delete data from Profile services?

+++Answer
Once a retention policy is set, existing events in Experience Platform are immediately deleted if their event timestamp exceeds the retention period (TTL). New events are deleted once their timestamp surpasses the retention period.

For example, if you apply a 30-day expiration policy on May 15th, the following occurs:

- New events receive a 30-day expiration as they are ingested.
- Existing events with a timestamp older than April 15th are immediately deleted.
- Existing events with a timestamp after April 15th are set to expire 30 days after their timestamp (for example, an event from April 18th would be deleted on May 18th).
+++

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
