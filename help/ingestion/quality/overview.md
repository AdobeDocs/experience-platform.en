---
keywords: Experience Platform;home;popular topics;Data quality;quality;Quality;Supported validation;Validation;supported validation;
solution: Experience Platform
title: Data ingestion quality
topic: overview
---

# Data quality in Adobe Experience Platform

Adobe Experience Platform provides well-defined guarantees for completeness, accuracy, and consistency for any data uploaded through either batch or streaming ingestion. The following document provides a summary of the supported checks and validation behaviors for batch and streaming ingestion in [!DNL Experience Platform].

## Supported checks

| &nbsp; | Batch Ingestion | Streaming Ingestion |
| ------ | --------------- | ------------------- |
| Data type check | Yes | Yes |
| Enum check | Yes | Yes |
| Range check (min, max) | Yes | Yes |
| Required field check | Yes | Yes |
| Pattern check | No | Yes |
| Format check | No | Yes |

## Supported validation behaviors

Both batch and streaming ingestion prevent failed data from going downstream by moving bad data for retrieval and analysis in [!DNL Data Lake]. Data ingestion provides the following validations for batch and streaming ingestion.

### Batch ingestion

The following validations are done for batch ingestion:

| Validation area | Description |
| --------------- | ----------- |
| Schema | Ensures that the schema is **not** empty and contains a reference to the union schema, as follows: `"meta:immutableTags": ["union"]` |
| `identityField` | Ensures that all valid identity descriptors are defined. |
| `createdUser` | Ensures that the user who ingested the batch is allowed to ingest the batch. |

### Streaming ingestion

The following validations are done for streaming ingestion:

| Validation area | Description |
| --------------- | ----------- |
| Schema | Ensures that the schema is **not** empty and contains a reference to the union schema, as follows: `"meta:immutableTags": ["union"]` |
| `identityField` | Ensures that all valid identity descriptors are defined. |
| JSON | Ensures that the JSON is valid. |
| IMS Organization | Ensures that the IMS Organization that is listed is a valid organization. |
| Source name | Ensures that the name of the data source is specified. |
| Dataset | Ensures that the dataset is specified, enabled, and has not been removed. |
| Header | Ensures that the header is specified and is valid. |

More information about how [!DNL Platform] monitors and validates data can be found in the [monitoring data flows documentation](./monitor-data-flows.md).
