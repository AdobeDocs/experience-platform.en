---
keywords: Experience Platform;home;popular topics;query service;Query service;data deduplication;deduplication;
solution: Experience Platform
title: Data deduplication
topic: queries
type: Tutorial
---

# Data deduplication in [!DNL Query Service]

Adobe Experience Platform [!DNL Query Service] supports data deduplication when it may be required to remove an entire row from a calculation or ignore a specific set of fields because only part of the data in the row is a duplicate. The common pattern for deduplication involves using the `ROW_NUMBER()` function across a window for an ID, or pair of IDs, over ordered time (using the [!DNL Experience Data Model] (XDM) `timestamp` field) to return a new field that represents the number of times a duplicate has been detected. When this value is `1`, that refers to the original instance and in most cases that is the instance that you would wish to use, ignoring every other instance. This will most often be done inside of a sub-select where the deduplication is done in a higher-level `SELECT` like performing an aggregate count.

## Use cases

Some use cases for deduplication are global across the date-range and some are constrained to a single visitor or end-user ID within the `identityMap`.

This document outlines sub-select and full sample query examples for deduplicating three common use cases:
- [ExperienceEvents](#experienceevents)
- [Purchases](#purchases)
- [Metrics](#metrics)

### ExperienceEvents {#experienceevents}

In the case of duplicate ExperienceEvents, you will likely wish to ignore the entire row.

>[!CAUTION]
>
>Many DataSets in [!DNL Experience Platform], including those produced by the Adobe Analytics Data Connector, already have ExperienceEvent-level deduplication applied. Therefore, reapplying this level of deduplication is unnecessary and will slow down your query. It is important to understand the source of your DataSets and know if deduplication at the ExperienceEvent-level has already been applied. For any DataSets that are streamed (for example, those from Adobe Target), you will need to apply ExperienceEvent-level deduplication because those data sources have 'at-least-once' semantics.

**Scope:** Global

**Window key:** id

#### Sub-Select

```sql
SELECT *,
  ROW_NUMBER()
    OVER (PARTITION BY id
          ORDER BY timestamp ASC
    ) AS id_dup_num
FROM experience_events
```

#### Full example

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

### Purchases {#purchases}

If you have duplicate purchases you will likely wish to keep most of the ExperienceEvent row, but ignore the fields tied to the purchase (such as the `commerce.orders` metric). For purchases, there is a special field for the purchase ID. This field is `commerce.order.purchaseID`.

**Scope:** Visitor

**Window key:** identityMap[$NAMESPACE].id & commerce.order.purchaseID

#### Sub-Select

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

#### Full example

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

### Metrics {#metrics}

If you have a metric that is using the optional unique ID and a duplicate of that ID appears, you will likely want to ignore that metric value and keep the rest of the ExperienceEvent. In XDM, almost all metrics use the `Measure` data type that includes an optional `id` field that you could use for deduplication.

**Scope:** Visitor

**Window key:** identityMap[$NAMESPACE].id & id of Measure object

#### Sub-Select

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

#### Full example

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
