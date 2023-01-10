---
keywords: insights;attribution ai;attribution ai insights;AAI query service;attribution queries;attribution scores
feature: Attribution AI
title: Analyzing Attribution Scores Using Query Service
description: Learn how to use Adobe Experience Platform Query Service to analyze Attribution AI scores.
exl-id: 35d7f6f2-a118-4093-8dbc-cb020ec35e90
---
# Analyzing attribution scores using Query Service

Each row in the data represents a conversion, in which information for related touchpoints are stored as an array of structs under the `touchpointsDetail` column.

| Touchpoint information | Column |
| ---------------------- | ------ |
| Touchpoint name | `touchpointsDetail. touchpointName` |
| Touchpoint channel | `touchpointsDetail.touchPoint.mediaChannel` |
| Touchpoint Attribution AI algorithmic scores | <li>`touchpointsDetail.scores.algorithmicSourced`</li> <li> `touchpointsDetail.scores.algorithmicInfluenced` </li> |

## Finding your data paths

In the Adobe Experience Platform UI, select **[!UICONTROL Datasets]** in the left navigation. The **[!UICONTROL Datasets]** page appears. Next, select the **[!UICONTROL Browse]** tab and find the output dataset for your Attribution AI scores.

![Accessing your instance](./images/aai-query/datasets_browse.png)

Select your output dataset. The dataset activity page appears.

![dataset activity page](./images/aai-query/select_preview.png)

 Within the dataset activity page, select **[!UICONTROL Preview dataset]** in the top-right corner to preview your data and make sure it was ingested as expected.

![preview dataset](./images/aai-query/preview_dataset.JPG)

After previewing your data, select the schema in the right rail. A popover appears with the schema name and description. Select the schema name hyperlink to redirect to the scoring schema.

![select the schema](./images/aai-query/select_schema.png)

Using the scoring schema, you can select or search for a value. Once selected, the **[!UICONTROL Field properties]** side-rail opens allowing you to copy the path for use in creating queries.

![copy the path](./images/aai-query/copy_path.png)

## Access Query Service

To access Query Service from within the Platform UI, start by selecting **[!UICONTROL Queries]** in the left navigation, then select the **[!UICONTROL Browse]** tab. A list of your previously saved queries is loaded.

![query service browse](./images/aai-query/query_tab.png)

Next, select **[!UICONTROL Create query]** in the top-right corner. The Query Editor loads. Using the Query Editor you can begin to create queries using your scoring data.

![query editor](./images/aai-query/query_example.png)

For more information on the Query Editor, visit the [Query Editor user guide](../../query-service/ui/user-guide.md).

## Query templates for attribution score analysis

The queries below can be used as a template for different score analysis scenarios. You need to replace the `_tenantId` and `your_score_output_dataset` with the proper values found in your scoring output schema.

>[!NOTE]
>
> Depending on how your data was ingested, the values used below such as `timestamp` might be in a different format.

### Validation examples

**Total number of conversions by conversion event (within in a conversion window)**

```sql
    SELECT conversionName,
           SUM(scores.firstTouch) as total_conversions,
           SUM(scores.algorithmicSourced) as total_attributed_conversions
    FROM
        (SELECT
                _tenantId.your_score_output_dataset.conversionName
                    as conversionName,
                inline(_tenantId.your_score_output_dataset.touchpointsDetail),
                timestamp as conversion_timestamp
         FROM
                your_score_output_dataset
        )
    WHERE
        conversion_timestamp >= '2020-07-16'
      AND
        conversion_timestamp <  '2020-10-14'
    GROUP BY
        conversionName
```

**Total number of conversion-only events (within in a conversion window)**

```sql
    SELECT
        _tenantId.your_score_output_dataset.conversionName as conversionName,
        COUNT(1) as convOnly_cnt
    FROM
        your_score_output_dataset
    WHERE
        _tenantId.your_score_output_dataset.touchpointsDetail.touchpointName[0] IS NULL AND
        timestamp >= '2020-07-16' AND
        timestamp <  '2020-10-14'
    GROUP BY
        conversionName
```

### Trend analysis example

**Number of conversions per day**

```sql
    SELECT conversionName,
           DATE(conversion_timestamp) as conversion_date,
           SUM(scores.firstTouch) as convertion_cnt
    FROM
        (SELECT
                _tenantId.your_score_output_dataset.conversionName as conversionName,
                inline(_tenantId.your_score_output_dataset.touchpointsDetail),
                timestamp as conversion_timestamp
         FROM
                your_score_output_dataset
        )
    GROUP BY
        conversionName, DATE(conversion_timestamp)
    ORDER BY
        conversionName, DATE(conversion_timestamp)
    LIMIT 20
```

### Distribution analysis example

**Amount of touchpoints on conversion paths by defined type (within in a conversion window)**

```sql
    SELECT conversionName,
           touchpointName,
           COUNT(1) as tp_count
    FROM
        (SELECT
                _tenantId.your_score_output_dataset.conversionName as conversionName,
                inline(_tenantId.your_score_output_dataset.touchpointsDetail),
                timestamp as conversion_timestamp
         FROM
                your_score_output_dataset
        )
    WHERE
        conversion_timestamp >= '2020-07-16' AND
        conversion_timestamp < '2020-10-14' AND
        touchpointName IS NOT NULL
    GROUP BY
        conversionName, touchpointName
    ORDER BY
        conversionName, tp_count DESC
```

### Insight generation examples

**Incremental units breakdown by touchpoint and conversion date (within in a conversion window)**

```sql
    SELECT conversionName,
           touchpointName,
           DATE(conversion_timestamp) as conversion_date,
           SUM(scores.algorithmicSourced) as incremental_units
    FROM
        (SELECT
                _tenantId.your_score_output_dataset.conversionName as conversionName,
                inline(_tenantId.your_score_output_dataset.touchpointsDetail),
                timestamp as conversion_timestamp
         FROM
                your_score_output_dataset
        )
    WHERE
        conversion_timestamp >= '2020-07-16' AND
        conversion_timestamp < '2020-10-14'  AND
        touchpointName IS NOT NULL
    GROUP BY
        conversionName, touchpointName, DATE(conversion_timestamp)
    ORDER BY
        conversionName, touchpointName, DATE(conversion_timestamp)
```

**Incremental units breakdown by touchpoint and touchpoint date (within in a conversion window)**

```sql
    SELECT conversionName,
           touchpointName,
           DATE(touchpoint.timestamp) as touchpoint_date,
           SUM(scores.algorithmicSourced) as incremental_units
    FROM
        (SELECT
                _tenantId.your_score_output_dataset.conversionName as conversionName,
                inline(_tenantId.your_score_output_dataset.touchpointsDetail),
                timestamp as conversion_timestamp
         FROM
                your_score_output_dataset
        )
    WHERE
        conversion_timestamp >= '2020-07-16' AND
        conversion_timestamp < '2020-10-14'  AND
        touchpointName IS NOT NULL
    GROUP BY
        conversionName, touchpointName, DATE(touchpoint.timestamp)
    ORDER BY
        conversionName, touchpointName, DATE(touchpoint.timestamp)
    LIMIT 20
```

**Aggregated scores for a certain type of touchpoint for all scoring models (within in a conversion window)**

```sql
    SELECT
           conversionName,
           touchpointName,
           SUM(scores.algorithmicSourced) as total_incremental_units,
           SUM(scores.algorithmicInfluenced) as total_influenced_units,
           SUM(scores.uShape) as total_uShape_units,
           SUM(scores.decayUnits) as total_decay_units,
           SUM(scores.linear) as total_linear_units,
           SUM(scores.lastTouch) as total_lastTouch_units,
           SUM(scores.firstTouch) as total_firstTouch_units
    FROM
        (SELECT
                _tenantId.your_score_output_dataset.conversionName as conversionName,
                inline(_tenantId.your_score_output_dataset.touchpointsDetail),
                timestamp as conversion_timestamp
         FROM
                your_score_output_dataset
        )
    WHERE
        conversion_timestamp >= '2020-07-16' AND
        conversion_timestamp < '2020-10-14'  AND
        touchpointName = 'display'
    GROUP BY
        conversionName, touchpointName
    ORDER BY
        conversionName, touchpointName
```

**Advanced - path length analysis**

Get a path length distribution for each conversion event type:

```sql
    WITH agg_path AS (
          SELECT
            _tenantId.your_score_output_dataset.conversionName as conversionName,
            sum(size(_tenantId.your_score_output_dataset.touchpointsDetail)) as path_length
          FROM
            your_score_output_dataset
          WHERE
            _tenantId.your_score_output_dataset.touchpointsDetail.touchpointName[0] IS NOT NULL AND
            timestamp >= '2020-07-16' AND
            timestamp <  '2020-10-14'
          GROUP BY
            _tenantId.your_score_output_dataset.conversionName,
            eventMergeId
    )
    SELECT
        conversionName,
        path_length,
        count(1) as conversionPath_count
    FROM
        agg_path
    GROUP BY
        conversionName, path_length
    ORDER BY
        conversionName, path_length
```

**Advanced - distinct number of touchpoints on conversion paths analysis**

Get the distribution for the number of distinct touchpoints on a conversion path for each conversion event type:

```sql
    WITH agg_path AS (
      SELECT
        _tenantId.your_score_output_dataset.conversionName as conversionName,
        size(array_distinct(flatten(collect_list(_tenantId.your_score_output_dataset.touchpointsDetail.touchpointName)))) as num_dist_tp
      FROM
        your_score_output_dataset
      WHERE
        _tenantId.your_score_output_dataset.touchpointsDetail.touchpointName[0] IS NOT NULL AND
        timestamp >= '2020-07-16' AND
        timestamp <  '2020-10-14'
      GROUP BY
        _tenantId.your_score_output_dataset.conversionName,
        eventMergeId
    )
    SELECT
        conversionName,
        num_dist_tp,
        count(1) as conversionPath_count
    FROM
     agg_path
    GROUP BY
        conversionName, num_dist_tp
    ORDER BY
        conversionName, num_dist_tp
```

### Schema flatten and explosion example

This query flattens the struct column into multiple singular columns and explode arrays into multiple rows. This helps with transforming attribution scores into a CSV format. The output of this query has one conversion and one of the touchpoints corresponding to that conversion in each row.

>[!TIP]
>
> In this example, you need to replace `{COLUMN_NAME}` in addition to `_tenantId` and `your_score_output_dataset`. The `COLUMN_NAME` variable can take the values of optional pass through column names (reporting columns) that were added during the configuring of your Attribution AI instance. Please review your scoring output schema to find the `{COLUMN_NAME}` values needed to complete this query.

```sql
SELECT 
  segmentation,
  conversionName,
  scoreCreatedTime,
  aaid, _id, eventMergeId,
  conversion.eventType as conversion_eventType,
  conversion.quantity as conversion_quantity,
  conversion.eventSource as conversion_eventSource,
  conversion.priceTotal as conversion_priceTotal,
  conversion.timestamp as conversion_timestamp,
  conversion.geo as conversion_geo,
  conversion.receivedTimestamp as conversion_receivedTimestamp,
  conversion.dataSource as conversion_dataSource,
  conversion.productType as conversion_productType,
  conversion.passThrough.{COLUMN_NAME} as conversion_passThru_column,
  conversion.skuId as conversion_skuId,
  conversion.product as conversion_product,
  touchpointName,
  touchPoint.campaignGroup as tp_campaignGroup, 
  touchPoint.mediaType as tp_mediaType,
  touchPoint.campaignTag as tp_campaignTag,
  touchPoint.timestamp as tp_timestamp,
  touchPoint.geo as tp_geo,
  touchPoint.receivedTimestamp as tp_receivedTimestamp,
  touchPoint.passThrough.{COLUMN_NAME} as tp_passThru_column,
  touchPoint.campaignName as tp_campaignName,
  touchPoint.mediaAction as tp_mediaAction,
  touchPoint.mediaChannel as tp_mediaChannel,
  touchPoint.eventid as tp_eventid,
  scores.*
FROM (
  SELECT
        _tenantId.your_score_output_dataset.segmentation,
        _tenantId.your_score_output_dataset.conversionName,
        _tenantId.your_score_output_dataset.scoreCreatedTime,
        _tenantId.your_score_output_dataset.conversion,
        _id,
        eventMergeId,
        map_values(identityMap)[0][0].id as aaid,
        inline(_tenantId.your_score_output_dataset.touchpointsDetail)
  FROM
        your_score_output_dataset
)
```
