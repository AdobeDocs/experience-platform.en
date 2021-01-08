---
keywords: Experience Platform;home;popular topics;query service;Query service;data deduplication;deduplication;
solution: Experience Platform
title: Data deduplication
topic: queries
type: Tutorial
description: This document outlines sub-select and full sample query examples for deduplicating three common use cases ExperienceEvents, purchases, and metrics.
---

# Data deduplication in [!DNL Query Service]

Adobe Experience Platform [!DNL Query Service] supports data deduplication. Data deduplication may be done when it is required to remove an entire row from a calculation or ignore a specific set of fields because only part of the data in the row is duplicate information. 

Deduplication commonly involves using the `ROW_NUMBER()` function across a window for an ID or a pair of IDs over ordered time to return a new field that represents the number of times a duplicate has been detected. The time is often represented by using the [!DNL Experience Data Model] (XDM) `timestamp` field. 

When the value of the `ROW_NUMBER()` is `1`, it refers to the original instance. Generally, that is the instance that you would wish to use. This will most often be done inside of a sub-select where the deduplication is done in a higher-level `SELECT` like performing an aggregate count.

## Use cases

Deduplication use cases can either be global or constrained to a single user or end-user ID within the `identityMap`.

This document outlines the deduplication part as well as the full sample query examples for deduplicating three common use cases: ExperienceEvents, purchases, and metrics.

## ExperienceEvents {#experienceevents}

In the case of duplicate ExperienceEvents, you will likely wish to ignore the entire row.

>[!CAUTION]
>
>Many datasets in [!DNL Experience Platform], including those produced by the Adobe Analytics Data Connector, already have ExperienceEvent-level deduplication applied. Therefore, reapplying this level of deduplication is unnecessary and will slow down your query.
>
>It is important to understand the source of your datasets and know if deduplication at the ExperienceEvent-level has already been applied. For any datasets that are streamed (for example, those from Adobe Target), you **will** need to apply ExperienceEvent-level deduplication, since those data sources have 'at-least-once' semantics.

**Scope:** Global

**Window key:** id

### Deduplication example

```sql
SELECT *,
  ROW_NUMBER()
    OVER (PARTITION BY id
          ORDER BY timestamp ASC
    ) AS id_dup_num
FROM experience_events
```

### Full example

```sql
SELECT COUNT(*) AS num_events FROM (
  SELECT *,
    ROW_NUMBER()
      OVER (PARTITION BY id
            ORDER BY timestamp ASC
      ) AS id_dup_num
  FROM experience_events
) WHERE id_dup_num = 1
```

## Purchases {#purchases}

If you have duplicate purchases, you will likely wish to keep most of the ExperienceEvent row, but ignore the fields tied to the purchase (such as the `commerce.orders` metric). Purchases contain a special field for the purchase ID, which is `commerce.order.purchaseID`.

**Scope:** Visitor

**Window key:** identityMap[$NAMESPACE].id & commerce.order.purchaseID

### Deduplication example

```sql
SELECT *,
  IF(LENGTH(commerce.`order`.purchaseID) > 0,
    ROW_NUMBER()
      OVER (PARTITION BY identityMap['ECID'].id, commerce.`order`.purchaseID
            ORDER BY timestamp ASC
      ),
    1) AS purchaseID_dup_num
FROM experience_events
```

### Full example

```sql
SELECT SUM(commerce.purchases.value) AS num_purchases FROM (
  SELECT *,
    ROW_NUMBER()
      OVER (PARTITION BY id
            ORDER BY timestamp ASC
      ) AS id_dup_num,
    IF(LENGTH(commerce.`order`.purchaseID) > 0,
      ROW_NUMBER()
        OVER (PARTITION BY identityMap['ECID'].id, commerce.order.purchaseID
              ORDER BY timestamp ASC
        ),
      1) AS purchaseID_dup_num
  FROM experience_events
) WHERE id_dup_num = 1 AND purchaseID_dup_num = 1
```

## Metrics {#metrics}

If you have a metric that is using the optional unique ID and a duplicate of that ID appears, you will likely want to ignore that metric value and keep the rest of the ExperienceEvent. 

In XDM, almost all metrics use the `Measure` data type that includes an optional `id` field that you could use for deduplication.

**Scope:** Visitor

**Window key:** identityMap[$NAMESPACE].id & id of Measure object

### Deduplication example

```sql
SELECT *,
  IF(LENGTH(application.launches.id) > 0,
    ROW_NUMBER()
      OVER (PARTITION BY identityMap['ECID'].id, application.launches.id
            ORDER BY timestamp ASC
      ),
    1) AS launchesID_dup_num
FROM experience_events
```

### Full example

```sql
SELECT SUM(application.launches.value) AS num_launches FROM (
  SELECT *,
    ROW_NUMBER()
      OVER (PARTITION BY id
            ORDER BY timestamp ASC
      ) AS id_dup_num,
    IF(LENGTH(application.launches.id) > 0,
      ROW_NUMBER()
        OVER (PARTITION BY identityMap['ECID'].id, application.launches.id
              ORDER BY timestamp ASC
        ),
      1) AS launchesID_dup_num
  FROM experience_events
) WHERE id_dup_num = 1 AND launchesID_dup_num = 1
```

## Next steps

For more best practices when writing queries using Query Service, please read the [writing queries guide](./writing-queries.md).