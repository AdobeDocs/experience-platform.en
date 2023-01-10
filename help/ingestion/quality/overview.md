---
keywords: Experience Platform;home;popular topics;Data quality;quality;Quality;Supported validation;Validation;supported validation;
solution: Experience Platform
title: Data Quality
description: The following document provides a summary of the supported checks and validation behaviors for batch and streaming ingestion in Adobe Experience Platform.
exl-id: 7ef40859-235a-4759-9492-c63e5fd80c8e
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

More information about how [!DNL Platform] monitors and validates data can be found in the [monitoring data flows documentation](./monitor-data-ingestion.md).

## Identity value validation

The following table outlines existing rules you must follow to ensure a successful validation of your identity value.

| Namespace | Validation rule | System behavior when rule is violated |
| --- | --- | --- |
| ECID | <ul><li>The identity value of an ECID must be exactly 38 characters.</li><li>The identity value of an ECID must consist of numbers only.</li></ul> | <ul><li>If the identity value of ECID is not exactly 38 characters, then the record is skipped.</li><li>If the identity value of ECID contains non-numerical characters, then the record is skipped.</li></ul> |
| Non-ECID | The identity value cannot exceed 1024 characters. | If the identity value exceeds 1024 characters, then the record is skipped. |

For more information on [!DNL Identity Service] guardrails, see the [[!DNL Identity Service] guardrails overview](../../identity-service/guardrails.md).
