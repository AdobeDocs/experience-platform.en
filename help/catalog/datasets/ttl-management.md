---
title: Manage Your Data Lifecycle with TTL API Use Cases and Best Practices
description: Learn how to evaluate, set, and manage row-level TTL for datasets using APIs in Adobe Experience Platform. This guide provides best practices, use cases, and step-by-step instructions to optimize data hygiene and storage efficiency while ensuring effective data lifecycle management.
---

# Manage your data lifecycle with TTL: API use cases and best practices

Managing data efficiently is essential to maintain performance, control costs, and ensure clean datasets. Perform row-level expiration (Time-To-Live, TTL) to automatically remove outdated records from Adobe Experience Platform datasets, keeping storage optimized and relevant.

This guide explains how to evaluate, set, and manage TTL using the Catalog API. You'll learn when and why to apply TTL, how to configure and update TTL values using API calls, and best practices to ensure effective implementation.

>[!IMPORTANT]
>
> TTL is designed to optimize data lifecycle management and storage efficiency. It is not a compliance tool and should not be relied upon for regulatory requirements. Compliance often necessitates broader data governance strategies.

## Why use TTL for row-level data management

As datasets grow, efficient data management becomes increasingly important to preserve performance, control costs, and keeps data relevant. Row-level data expiration automates data cleanup by removing outdated records without manual intervention to help optimize storage and improve system efficiency.

TTL is useful when managing time-sensitive data that loses relevance over time. Consider implementing TTL if you need to:

- Reduce storage costs by automatically expiring outdated records.
- Improve query performance by minimizing irrelevant data to reduce processing time.
- Maintain data hygiene by ensuring datasets contain only relevant information.
- Optimize data retention to align with business objectives.

### Industry example

As an example, consider a video streaming platform tracks user interactions, such as video views, searches, and recommendations. While recent engagement data is crucial for personalization, older activity logs (for example, interactions from over a year ago) lose relevance. By using row expiration, Platform automatically removes outdated logs, ensuring only current and meaningful data is used for analytics and recommendations.

## Evaluate TTL suitability

Before applying TTL, assess whether your dataset is a good candidate for row expiration. Consider the following:

- Data relevance over time: Does older data provide value, or does it become obsolete?
- Impact on downstream processes: Will removing data affect reporting, analytics, or integrations?
- Storage cost versus retention value: Does the cost of storing older data justify its usefulness?

If historical records are essential for long-term analysis or business operations, TTL may not be the right approach. Reviewing these factors ensures that TTL aligns with your data retention needs without negatively affecting data availability.

## Plan your queries

Before applying TTL, use queries to analyze dataset size and relevance. Running targeted queries helps determine how much data would be retained or removed under different TTL configurations.

For example, the following SQL query counts the number of records created within the last 30 days:

```sql
SELECT COUNT(1) FROM [datasetName] WHERE timestamp > date_sub(now(), INTERVAL 30 DAY);
```

Running similar queries for different time intervals helps validate TTL settings and ensure they balance storage efficiency and data accessibility.

## Get started with TTL management

Before you can evaluate, set, and manage TTL using the Catalog API, you must know how to properly format your requests. This includes the paths, required headers, and any request payloads. Refer to the Catalog Service API getting started guide for this essential information, including how to  gather values for required headers, best practices for Catalog API calls, and a link to the authentication tutorial.

>[!NOTE]
>
>This document covers row-level expiration, which deletes individual expired rows within a dataset while keeping the dataset itself intact. It does not apply to dataset expiration, which removes entire datasets and is managed by a separate feature. For dataset-level expiration, refer to the [dataset expiration API documentation](../../hygiene/api/dataset-expiration.md).

### How to check current TTL settings

To begin your TTL management, first check current TTL settings. Make a GET request to the `/ttl/{datasetId}` endpoint to retrieve the default, maximum, and minimum TTL settings for a dataset. This is necessary because TTL rules can vary based on the dataset type.

<!-- Make a GET request to retrieve your organization's TTL settings for a particular dataset.  -->

>[!TIP]
>
>The Platform Gateway URL and base path for the Catalog Service API is: `https://platform.adobe.io/data/foundation/catalog`.
>
>If you do not know the relevant dataset ID, you can retrieve a list of all available objects of a specific type through a single API call. Be sure to include filters that limit the size of the response. See the [List catalog objects API guide](../api/list-objects.md) for more details.

**API format**

```http
GET /ttl/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The dataset ID is a read-only, system-generated string used to reference the dataset in API calls. |

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

```json
{  "extensions": {
        "adobe_lakeHouse": {  
            "rowExpiration": {
                "defaultValue": <Period> ("P7D", "P15D", "P12M"),
                "maxValue": <Period> ("P7D", "P15D", "P12M"),
                "minValue": <Period> ("P7D", "P15D", "P12M")
            }
        },
        "adobe_unifiedProfile": {  
            "rowExpiration": {
                "defaultValue": <Period> ("P7D", "P15D", "P12M"),
                "maxValue": null,
                "minValue": <Period> ("P7D", "P15D", "P12M")
            }
        }
    }
}
```

<!-- 
Q) Can i include this bit?
For easy comparison and manipulation of time durations, TTL values are stored using the `Period` class.  -->

<!-- 
Shouldnt a response look like this:
```json
{
    "67976f0b4878252ab887ccd9": {
        "name": "Test dataset",
        "description": "This is just a test dataset",
        "imsOrg": "033A229F5A7B915B0A494028@AdobeOrg",
        "sandboxId": "73d54130-c5bc-11e9-949c-0da8d50fcac1",
        "tags": {
            "adobe/pqs/table": [
                "test_dataset_20250127_113331_106"
            ],
            "adobe/siphon/table/format": [
                "delta"
            ],
            "custom_tag": [
                "patched_with_v2"
            ]
        },
        "extensions": {
            "adobe_lakeHouse": {
                "rowExpiration": {
                    "defaultValue": <Period> ("P7D", "P15D", "P12M"),
                    "maxValue": <Period> ("P7D", "P15D", "P12M"),
                    "minValue": <Period> ("P7D", "P15D", "P12M")
                }
            },
            "adobe_unifiedProfile": {
                "rowExpiration": {
                    "defaultValue": <Period> ("P7D", "P15D", "P12M"),
                    "maxValue": null,
                    "minValue": <Period> ("P7D", "P15D", "P12M")
                }
            }
        },
        "version": "1.0.1",
        "created": 1737977611118,
        "updated": 1737977766499,
        "createdClient": "acp_foundation_catalog",
        "createdUser": "acp_foundation_catalog@AdobeID",
        "updatedUser": "acp_foundation_catalog@AdobeID",
        "classification": {
            "managedBy": "CUSTOMER"
        }
    }
}
```
 -->

| Property      | Description |
|--------------|-------------|
| `defaultValue` | The preconfigured TTL period applied to a dataset if no custom TTL is set. This represents the standard retention duration assigned by default when row expiration is enabled. |
| `maxValue`    | The maximum TTL period that can be assigned to a dataset. This defines the longest allowable retention duration, ensuring TTL values do not exceed platform or policy limits. If `null`, there is no enforced maximum. |
| `minValue`    | The minimum TTL period that can be set for a dataset. This prevents users from configuring TTL values below the defined retention threshold, ensuring compliance with system requirements or business policies. |

### How to set TTL for a dataset

>[!IMPORTANT]
>
>Row-expiration can only be applied to event datasets that use a time-series schema. Before setting TTL, verify that the dataset's schema extends `https://ns.adobe.com/xdm/data/time-series` to ensure the API request succeeds. Use the Schema Registry API to retrieve the schema details and verify the `meta:extends` property. Refer to the [Schema endpoint documentation](../../xdm/api/schemas.md#lookup) for guidance on how to do this.

To set a new TTL value for your dataset, make a PATCH request to the `/v2/datasets/{ID}` endpoint. 

**API format**

```http
PATCH /v2/datasets/{DATASET_ID}
```

| Parameter | Description |
| --- | --- |
| `{DATASET_ID}` | The ID of the dataset you want to update the TTL value for. |

**Request**

In the example request below, the `ttlValue` is set to `P3M`. This means that the system automatically deletes records older than three months. You can adjust the retention period to suit your business needs using values such as `P6M` for six months or `P12M` for one year.

```shell
curl -X PATCH \
  'https://platform-int.adobe.io/data/foundation/catalog/v2/datasets/{DATASET_ID}' \
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

A successful response shows the TTL configuration for the dataset. It includes details on row expiration settings for both `adobe_lakeHouse` and `adobe_unifiedProfile` storage.

```JSON
{  "extensions": {
        "adobe_lakeHouse": {
            "rowExpiration": {
              "ttlValue": <Period> ("P7D", "P15D", "P12M"),
                "valueStatus": <enum> (default, custom),
                "setBy": <enum> (user, service)
                "updated": <timestamp>
            }
        },
        "adobe_unifiedProfile": {  
            "rowExpiration": {
                "ttlValue": <Period> ("P7D", "P15D", "P12M"),
                "valueStatus": <enum> (default, custom),
                "setBy": <enum> (user, service)
                "updated": <timestamp>
            }
        }
    }
}
```

| Property                         | Description |
|----------------------------------|-------------|
| `extensions`                     | A container for additional metadata related to the dataset. |
| `extensions.adobe_lakeHouse`     | Specifies settings related to storage architecture, including row expiration configurations |
| `rowExpiration` | Contains TTL settings that define the retention period for the dataset. |
| `rowExpiration.ttlValue` | Defines the duration before records in the dataset are automatically removed. Uses the ISO-8601 period format (for example, `P3M` for 3 months, or `P7D` for one week). |
| `rowExpiration.valueStatus` | Indicates whether the TTL setting is a default system value or a custom value set by a user. Possible values are: `default`, `custom`. |
| `rowExpiration.setBy` | Specifies who last modified the TTL setting. Possible values include: `user` (manually set) or `service` (automatically assigned). |
| `rowExpiration.updated` | The timestamp of the last TTL update. This value indicates when the TTL setting was last modified. |

### How to update TTL

Extend or shorten the retention period to suit your business needs by adjusting the TTL. For example, the video streaming platform mentioned earlier, may initially set TTL to three months to ensure fresh engagement data for personalization. However, if analysis shows that interaction patterns older than three months still provide valuable insights, the TTL can be extended to six months to keep older records for better recommendation models.

To modify an existing TTL value, use the `PATCH` method on the `/v2/datasets/{DATASET_ID}` endpoint.

#### API format

```http
PATCH /v2/datasets/{DATASET_ID}
```

**Request**

In the following request, the TTL is updated to six months (`P6M`) extending the record retention period before automatic deletion.

```shell
curl -X PATCH \
  'https://platform-int.adobe.io/data/foundation/catalog/v2/datasets/{DATASET_ID}' \
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

Choosing the right TTL value is crucial for balancing data retention, storage efficiency, and analytical needs. If the TTL is too short, it may cause data loss and affect historical analysis and forecasting. If it's too long, it can lead to excessive storage costs and unnecessary data accumulation. Ensure the TTL aligns with your dataset's purpose by considering how often the data is accessed and how long it remains relevant.

The table below provides common TTL recommendations based on dataset type and usage patterns:

| Dataset Type                | Recommended TTL        | Typical Use Cases |
|-----------------------------|------------------------|-------------------|
| Frequently accessed datasets| 30-90 days             | User engagement logs, website clickstream data, short-term campaign performance data. |
| Archival datasets           | 1 year or more         | Financial transaction logs, compliance data, long-term trend analysis, machine learning training datasets. |
| App-managed datasets        | Up to 13 months        | System-managed datasets have predefined TTL restrictions, which are automatically enforced to comply with system-imposed limits. |
| Customer-managed datasets   | 30 days – Max TTL      | Datasets created through the UI, APIs, or Data Distiller. The TTL must be at least 30 days and within the defined max TTL. |

You should review TTL settings periodically to ensure they continue to align with your storage policies, analytical needs, and business requirements.

### Key considerations when setting TTL

>[!NOTE]
>
> Before applying TTL, verify that the dataset supports row expiration. TTL is only available for event datasets that use a time-series schema. Additionally, some datasets have system-imposed TTL limits (for example, a maximum of 24 months for app-managed datasets). 

Follow these best practices to ensure TTL settings align with your data retention strategy:

- Avoid setting TTL too short. Deleting records too quickly can make it difficult to analyze historical trends, customer behaviors, or compliance records. Ensure that datasets requiring long-term insights have an appropriate TTL.
- Audit TTL changes regularly. Every TTL update triggers an audit event. Use audit logs to track TTL modifications for compliance, data governance, and troubleshooting purposes.
- Remove TTL if data must be retained indefinitely. To disable TTL, set `ttlValue` to `null`. This will prevent automatic expiration and retain all records permanently, so consider storage implications before making this change. 

## Limitations of TTL

- Explicitly call out what TTL cannot do:
  - TTL is for row-level expiration, not full dataset deletion.
  - TTL cannot be removed once set; it can only be updated.
  - Explain that TTL is not suitable for compliance requirements.

## FAQs and Common Use Cases

- FAQs:
  - Can I remove a TTL? (Answer: No, but you can update it.)
  - What happens if I don't set TTL? (Answer: Rows are retained indefinitely.)
- Use Cases:
  - Highlight scenarios like "Managing log data for cost efficiency" or "Cleaning up irrelevant event data in the Data Lake."

<!-- ## References and Related Resources** -->

## Next steps

- Include links to:
  - Catalog API documentation.
  - Internal wiki resources on TTL.
  - Related Experience League articles.

<!-- 
Limitations
'How does a customer update Event Dataset Lake TTL?'
'Can you remove it? No
 -->

