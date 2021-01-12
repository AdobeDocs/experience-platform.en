# QueryService quick start guide for analyzing attribution scores

Each row in the data represents a conversion, in which information for related touchpoints are stored as an array of structs under the `touchpointsDetail` column.

| Touchpoint information            | Column                                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Touchpoint name                   | `touchpointsDetail.touchpointName`                                                                                 |
| Touchpoint channel                | `touchpointsDetail.touchPoint.mediaChannel`                                                                        |
| Touchpoint AAI algorithmic scores | <li>`touchpointsDetail.scores.algorithmicSourced`</li> <li> `touchpointsDetail.scores.algorithmicInfluenced` </li> |

## Access Query Service

In the [!DNL Adobe Experience Platform] UI, select **[!UICONTROL Services]** in the left navigation. The **[!UICONTROL Services]** browser appears and displays available Adobe intelligent services. In the container for Attribution AI, select **[!UICONTROL Open]**.

![Accessing your instance](./images/user-guide/open_Attribution_ai.png)

The Attribution AI service page appears. Next, select the service instance (avoiding the hyperlink) you wish to query from. The right rail appears with additional info about your service instance. From the right rail select your data source hyperlink. You are redirected to the dataset activity page.

From within the dataset activity page, copy the table name located in the right rail.

![Copy table name]()

Once you have copide your table name, select **[!UICONTROL Queries]** in the left navigation. Then select **Create query**.

![Select queries]()

You are redirected to the queries tab where you can query from your dataset.

## Query templates for attribution score analysis

The queries below can be used as a template for different score analysis senarios.

### Validation examples

**Total Number of Conversions by Conversion Event (within in a conversion window)**

```sql
    SELECT conversionName,
           SUM(scores.firstTouch) as total_conversions,
           SUM(scores.algorithmicSourced) as total_attributed_conversions
    FROM
        (SELECT
                _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName
                    as conversionName,
                inline(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail),
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
        _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
        COUNT(1) as convOnly_cnt
    FROM
        attribution_ai_scores_luma_with_2_conversion_segments_10492
    WHERE
        _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail.touchpointName[0] IS NULL AND
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
                _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
                inline(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail),
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
                _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
                inline(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail),
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
                _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
                inline(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail),
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
                _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
                inline(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail),
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
                _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
                inline(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail),
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
            _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
            sum(size(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail)) as path_length
          FROM
            attribution_ai_scores_luma_with_2_conversion_segments_10492
          WHERE
            _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail.touchpointName[0] IS NOT NULL AND
            timestamp >= "2020-07-16" AND
            timestamp <  "2020-10-14"
          GROUP BY
            _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName,
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
        _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName as conversionName,
        size(array_distinct(flatten(collect_list(_adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail.touchpointName)))) as num_dist_tp
      FROM
        attribution_ai_scores_luma_with_2_conversion_segments_10492
      WHERE
        _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.touchpointsDetail.touchpointName[0] IS NOT NULL AND
        timestamp >= "2020-07-16" AND
        timestamp <  "2020-10-14"
      GROUP BY
        _adsdsnpmmsv2.attribution_AI_Scores___Luma_with_2_Conversion_Segments__10492.conversionName,
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
