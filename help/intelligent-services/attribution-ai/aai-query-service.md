# QueryService quick start guide for analyzing attribution scores

Each row in the data represents a conversion, in which information for related touchpoints are stored as an array of structs under the `touchpointsDetail` column.

| Touchpoint information            | Column                                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Touchpoint name                   | `touchpointsDetail.touchpointName`                                                                                 |
| Touchpoint channel                | `touchpointsDetail.touchPoint.mediaChannel`                                                                        |
| Touchpoint AAI algorithmic scores | <li>`touchpointsDetail.scores.algorithmicSourced`</li> <li> `touchpointsDetail.scores.algorithmicInfluenced` </li> |

## Finding your data paths

In the Adobe Experience Platform UI, select **[!UICONTROL Datasets]** in the left navigation. The **[!UICONTROL Datasets]** page appears. Next, select the **[!UICONTROL Browse]** tab and find the output dataset for your Attribution AI scores.

![Accessing your instance](./images/aai-query/datasets_browse.png)

Select your output dataset. The dataset activity page appears. Within the dataset activity page, select **[!UICONTROL Preview dataset]** in the top-right corner to preview your data and make sure it was ingested as expected.

![dataset activity page](./images/aai-query/select_preview.png)

![preview dataset](./images/aai-query/preview_dataset.JPG)

After previewing your data, select the schema in the right rail. A popover appears with the schema name and description. Select the schema name hyperlink to redirect to the scoring schema.

![select the schema](./images/aai-query/select_schema.png)

Using the scoring schema, you can select or search for a value. Once selected, the **[!UICONTROL Field properties]** side-rail opens allowing you to copy the path for use in creating queries.

![copy the path](./images/aai-query/copy_path.png)

## Access Query Service

To access query service from within the Platform UI, start by selecting **[!UICONTROL Queries]** in the left navigation, then select the  **[!UICONTROL Browse]** tab. A list of your previously saved queries is loaded.

![query service browse](./images/aai-query/query_tab.png)

Next, select **[!UICONTROL Create query]** in the top-right corner. The query editor loads. Using the query editor you can begin to create queries using your scoring data.

![query editor](./images/aai-query/query_example.png)

## Query templates for attribution score analysis

The queries below can be used as a template for different score analysis senarios. You need to replace the `_tenantId` and `your_score_output_dataset` with the proper values found in your scoring output schema.

>[!NOTE]
>
> Depending on how your data was ingested, the values used below such as `timestamp` might be in a different format.

### Validation examples

**Total Number of Conversions by Conversion Event (within in a conversion window)**

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
                attribution_ai_scores_luma_with_2_conversion_segments_10492
        )
    WHERE
        conversion_timestamp >= "2020-07-16"
      AND
        conversion_timestamp <  "2020-10-14"
    GROUP BY
        conversionName
```

**Total Number of Conversion-Only Events (within in a conversion window)**

```sql
    SELECT
        _tenantId.your_score_output_dataset.conversionName as conversionName,
        COUNT(1) as convOnly_cnt
    FROM
        attribution_ai_scores_luma_with_2_conversion_segments_10492
    WHERE
        _tenantId.your_score_output_dataset.touchpointsDetail.touchpointName[0] IS NULL AND
        timestamp >= "2020-07-16" AND
        timestamp <  "2020-10-14"
    GROUP BY
        conversionName
```

### Trend Analysis examples

**Number of Conversions Per Day**

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
                attribution_ai_scores_luma_with_2_conversion_segments_10492
        )
    GROUP BY
        conversionName, DATE(conversion_timestamp)
    ORDER BY
        conversionName, DATE(conversion_timestamp)
    LIMIT 20
```

### Distribution Analysis examples

**Amount of Touchpoints on Conversion Paths by Defined Type (within in a conversion window)**

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
                attribution_ai_scores_luma_with_2_conversion_segments_10492
        )
    WHERE
        conversion_timestamp >= "2020-07-16" AND
        conversion_timestamp < "2020-10-14" AND
        touchpointName IS NOT NULL
    GROUP BY
        conversionName, touchpointName
    ORDER BY
        conversionName, tp_count DESC
```

### Insight Generation examples

**Incremental Units breakdown by Touchpoint and Conversion Date (within in a conversion window)**

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
                attribution_ai_scores_luma_with_2_conversion_segments_10492
        )
    WHERE
        conversion_timestamp >= "2020-07-16" AND
        conversion_timestamp < "2020-10-14"  AND
        touchpointName IS NOT NULL
    GROUP BY
        conversionName, touchpointName, DATE(conversion_timestamp)
    ORDER BY
        conversionName, touchpointName, DATE(conversion_timestamp)
```

**Incremental Units breakdown by Touchpoint and Touchpoint Date (within in a conversion window)**

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
                attribution_ai_scores_luma_with_2_conversion_segments_10492
        )
    WHERE
        conversion_timestamp >= "2020-07-16" AND
        conversion_timestamp < "2020-10-14"  AND
        touchpointName IS NOT NULL
    GROUP BY
        conversionName, touchpointName, DATE(touchpoint.timestamp)
    ORDER BY
        conversionName, touchpointName, DATE(touchpoint.timestamp)
    LIMIT 20
```

**Aggregated Scores for a certain type of Touchpoint for all scoring models (within in a conversion window)**

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
                attribution_ai_scores_luma_with_2_conversion_segments_10492
        )
    WHERE
        conversion_timestamp >= "2020-07-16" AND
        conversion_timestamp < "2020-10-14"  AND
        touchpointName = 'display'
    GROUP BY
        conversionName, touchpointName
    ORDER BY
        conversionName, touchpointName
```

**Advanced - path length analysis**

Get path length distribution for each conversion event type:

```sql
    WITH agg_path AS (
          SELECT
            _tenantId.your_score_output_dataset.conversionName as conversionName,
            sum(size(_tenantId.your_score_output_dataset.touchpointsDetail)) as path_length
          FROM
            attribution_ai_scores_luma_with_2_conversion_segments_10492
          WHERE
            _tenantId.your_score_output_dataset.touchpointsDetail.touchpointName[0] IS NOT NULL AND
            timestamp >= "2020-07-16" AND
            timestamp <  "2020-10-14"
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

**Advanced - Distinct Number of Touchpoints on Conversion Paths Analysis**

Get distribution for number of distinct touchpoints on a conversion path
for each conversion event type:

```sql
    WITH agg_path AS (
      SELECT
        _tenantId.your_score_output_dataset.conversionName as conversionName,
        size(array_distinct(flatten(collect_list(_tenantId.your_score_output_dataset.touchpointsDetail.touchpointName)))) as num_dist_tp
      FROM
        attribution_ai_scores_luma_with_2_conversion_segments_10492
      WHERE
        _tenantId.your_score_output_dataset.touchpointsDetail.touchpointName[0] IS NOT NULL AND
        timestamp >= "2020-07-16" AND
        timestamp <  "2020-10-14"
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
