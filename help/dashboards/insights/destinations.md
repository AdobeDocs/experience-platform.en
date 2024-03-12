---
title: Destinations Insights
description: Discover the SQL that powers your destinations insights and use these queries to generate custom insights to further explore the activation of data from Adobe Experience Platform.
exl-id: 762a9960-e7a5-4796-80c7-ef745157cc04
---
# Destinations insights

The insights derived from the analysis of your data model make your Adobe Real-time Customer Data Platform data more accessible, understandable, and impactful for decision-making.
 
Understand your destination insights by accessing the SQL that powers them, then generate your own insights to further explore the activation of data from Adobe Experience Platform to your destination platforms. Transform your raw data into new actionable insights by using the existing Real-Time CDP data model SQL as inspiration to create queries for your unique business needs. 

<!-- This link will go in during the January release.
See the [View SQL documentation]() for more information on how to adapt your insights' SQL directly through the PLatform UI.  -->

The following insights are all available for you to use as part of the [Destinations dashboard](../guides/destinations.md) or a custom [user-defined dashboard](../user-defined-dashboards.md). See the [customization overview](../customize/overview.md) for instructions on how to customize your dashboard or [create and edit new widgets](../customize/custom-widgets.md) in the widget library and [user-defined dashboard](../user-defined-dashboards.md#create-widget).

## Activated audiences {#activated-audiences}

Questions answered by this insight:

- What is the total count of activated audiences filtered by a particular destination?
- What is the activated audience count by each destination?

+++Select to reveal the SQL that generates this insight

```sql
SELECT
  COUNT(segment_id) AS Activated_Audiences_Count
FROM
  qsaccel.profile_agg.adwh_dim_br_segment_destinations
WHERE
  (
    SELECT
      MAX(process_date)
    FROM
      qsaccel.profile_agg.adwh_lkup_process_delta_log
    WHERE
      process_name = 'FACT_TABLES_PROCESSING'
      AND process_status = 'SUCCESSFUL'
  ) BETWEEN start_date AND end_date
  AND destination_id = 1458738325;
```

+++

See the [Activated audiences widget documentation](../guides/destinations.md#activated-audiences) for information on the appearance and functionality of this insight.

## Activated audiences across all destinations {#activated-audiences-across-all-destinations}

Questions answered by this insight:

- How many audiences are activated across all the destinations?
- What is the total count of activated audiences?

+++Select to reveal the SQL that generates this insight

```sql
SELECT count(segment_id) AS Activated_Audiences_Count
FROM qsaccel.profile_agg.adwh_dim_br_segment_destinations
WHERE
    (SELECT MAX(process_date)
     FROM qsaccel.profile_agg.adwh_lkup_process_delta_log
     WHERE process_name = 'FACT_TABLES_PROCESSING'
       AND process_status = 'SUCCESSFUL' ) BETWEEN start_date AND end_date;
```

+++

See the [Activated audiences across all destinations widget documentation](../guides/destinations.md#activated-audiences-across-all-destinations) for information on the appearance and functionality of this insight.

## Active destinations by destination platform {#active-destinations-by-destination-platform}

Questions answered by this insight:

- How many destinations are active?
- What is the breakdown of active destinations by destination platform?
- What is the count of active destinations broken down by each destination platform?

+++Select to reveal the SQL that generates this insight

```sql
SELECT destination_platform_name AS Destination_Platform_Name,
       COUNT(destination_id) AS Active_Destinations_Count
  FROM qsaccel.profile_agg.adwh_dim_destination a
  INNER JOIN qsaccel.profile_agg.adwh_dim_destination_platform b ON a.destination_platform_id = b.destination_platform_id
  WHERE destination_status='enabled'
  GROUP BY destination_platform_name
  ORDER BY Active_Destinations_Count DESC
  LIMIT 20;
```

+++

See the [Active destinations by destination platform widget documentation](../guides/destinations.md#active-destinations-by-destination-platform) for information on the appearance and functionality of this insight.

## Audience size trend {#audience-size-trend}

Questions answered by this insight:

- How has the audience size changed over time, including anomalies for an audience mapped to a destination?
- How do I find the overall trend in audience size, by destination, over the specified periods of 30 days, 90 days, and 12 months?
- What are the key characteristics of the audience contributing to the size, for example, spikes regarding any email marketing campaigns?

+++Select to reveal the SQL that generates this insight

```sql
SELECT d.destination_name,
        d.destination,
        d.destination_id,
        b.segment_name,
        b.segment,
        c.segment_id,
        a.date_key,
        sum(a.count_of_profiles) AS profile_count
  FROM qsaccel.profile_agg.adwh_fact_profile_by_segment_trendlines a
  INNER JOIN qsaccel.profile_agg.adwh_dim_segments b ON a.segment_id = b.segment_id
  INNER JOIN qsaccel.profile_agg.adwh_dim_br_segment_destinations c ON a.segment_id = c.segment_id
  INNER JOIN qsaccel.profile_agg.adwh_dim_destination d ON c.destination_id = d.destination_id
  INNER JOIN
    (SELECT MAX(process_date) last_process_date,
            merge_policy_id
    FROM qsaccel.profile_agg.adwh_lkup_process_delta_log
    WHERE process_name = 'FACT_TABLES_PROCESSING'
      AND process_status = 'SUCCESSFUL'
    GROUP BY merge_policy_id) f ON a.merge_policy_id = f.merge_policy_id
  WHERE a.date_key >= dateadd(DAY, -30-1, f.last_process_date)
    AND d.destination_id = -1275507046
    AND c.segment_id = -1452100519
  GROUP BY d.destination_name,
          d.destination,
          d.destination_id,
          b.segment_name,
          b.segment,
          c.segment_id,
          a.date_key;
```

+++

See the [Audience size trend widget documentation](../guides/destinations.md#audience-size-trend) for information on the appearance and functionality of this insight.

## Common audiences {#common-audiences}

Questions answered by this insight:

- Which are the audiences that are common between two different destinations?
- How many profiles do each of the common audiences between two different destinations have?
- Which is the largest audience that two destinations are mapped to?

+++Select to reveal the SQL that generates this insight

```sql
SELECT k.destination_name1,
       k.destination_1,
       k.destination_id1,
       k.destination_name2,
       k.destination_2,
       k.destination_id2,
       b.segment_name,
       b.segment,
       b.segment_id,
       sum(a.count_of_profiles) AS profile_count
  FROM
    (SELECT i.destination_name AS destination_name1,
            i.destination AS destination_1,
            i.destination_id AS destination_id1,
            j.destination_name AS destination_name2,
            j.destination AS destination_2,
            j.destination_id AS destination_id2,
            i.segment_id
     FROM
       (SELECT b.destination_name,
               b.destination,
               b.destination_id,
               a.segment_id
        FROM qsaccel.profile_agg.adwh_dim_br_segment_destinations a
        INNER JOIN qsaccel.profile_agg.adwh_dim_destination b ON a.destination_id=b.destination_id
        WHERE b.destination_id=1458738325) AS i
     INNER JOIN
       (SELECT b.destination_name,
               b.destination,
               b.destination_id,
               a.segment_id
        FROM qsaccel.profile_agg.adwh_dim_br_segment_destinations a
        INNER JOIN qsaccel.profile_agg.adwh_dim_destination b ON a.destination_id=b.destination_id
        WHERE b.destination_id=-635802802) AS j ON i.segment_id=j.segment_id) AS k
  INNER JOIN qsaccel.profile_agg.adwh_fact_profile_by_segment a ON a.segment_id = k.segment_id
  INNER JOIN qsaccel.profile_agg.adwh_dim_segments b ON b.segment_id = k.segment_id
  INNER JOIN
    (SELECT MAX(process_date) last_process_date,
            merge_policy_id
     FROM qsaccel.profile_agg.adwh_lkup_process_delta_log
     WHERE process_name = 'FACT_TABLES_PROCESSING'
       AND process_status = 'SUCCESSFUL'
     GROUP BY merge_policy_id) c ON a.merge_policy_id = c.merge_policy_id
  WHERE a.date_key = c.last_process_date
  GROUP BY k.destination_name1,
           k.destination_1,
           k.destination_id1,
           k.destination_name2,
           k.destination_2,
           k.destination_id2,
           b.segment_name,
           b.segment,
           b.segment_id
  ORDER BY profile_count DESC
  LIMIT 20;
```

+++

See the [Common audiences widget documentation](../guides/destinations.md#common-audiences) for information on the appearance and functionality of this insight.

## Destination status {#destination-status}

Questions answered by this insight:

- What is the total number of destinations enabled for use?
- What is the total number of destinations that are disabled?
- What is the percentage split between enabled and disabled destinations?

+++Select to reveal the SQL that generates this insight

```sql
SELECT COUNT(CASE
                 WHEN destination_status='enabled' THEN 1
             END) AS count_of_active_destinations,
       COUNT(CASE
                 WHEN destination_status='disabled' THEN 1
             END) AS count_of_inactive_destinations
FROM qsaccel.profile_agg.adwh_dim_destination;
```

+++

See the [Destination status widget documentation](../guides/destinations.md#destination-status) for information on the appearance and functionality of this insight.

## Destinations count {#destinations-count}

Questions answered by this insight:

- How many destinations are currently configured?
- How has the total count of destinations changed over time?

+++Select to reveal the SQL that generates this insight

```sql
SELECT count(destination_id) AS total_number_of_destinations
  FROM qsaccel.profile_agg.adwh_dim_destination;
```

+++

See the [Destinations count widget documentation](../guides/destinations.md#destinations-count) for information on the appearance and functionality of this insight.

## Mapped audience health {#mapped-audience-health}

Questions answered by this insight:

- Which audiences mapped to a destination have significant variations in the last 30 days?
- What is the latest size of a mapped audience and whether it has changed over the last month?
- How do I list all the audiences mapped to a destination based on the severity of their size changes in the last month?

+++Select to reveal the SQL that generates this insight

```sql
SELECT destination_name,
        SEGMENT,
        segment_id,
        segment_name,
        avg_profile_count,
        latest_profile_count,
        stddev_profile_count,
        profile_count_z_factor
  FROM
    (SELECT b.destination_name,
            f.segment_id,
            c.segment_name,
            c.segment,
            f.avg_profile_count,
            f.latest_profile_count,
            f.stddev_profile_count,
            CASE
                WHEN stddev_profile_count = 0 THEN 0 ELSE(f.latest_profile_count - f.avg_profile_count)/f.stddev_profile_count
            END AS profile_count_z_factor
    FROM
      (SELECT segment_id,
              avg(profile_count) AS avg_profile_count,
              sum(CASE
                      WHEN last_process_date = date_key THEN profile_count
                      ELSE 0
                  END) AS latest_profile_count,
              stdevp(profile_count) AS stddev_profile_count
        FROM
          (SELECT x.date_key,
                  x.segment_id,
                  d.last_process_date,
                  sum(x.count_of_profiles) AS profile_count
          FROM qsaccel.profile_agg.adwh_fact_profile_by_segment_trendlines x
          INNER JOIN
            (SELECT MAX(process_date) last_process_date,
                    merge_policy_id
              FROM qsaccel.profile_agg.adwh_lkup_process_delta_log
              WHERE process_name = 'FACT_TABLES_PROCESSING'
                AND process_status = 'SUCCESSFUL'
              GROUP BY merge_policy_id) d ON x.merge_policy_id = d.merge_policy_id
          WHERE x.date_key >= dateadd (DAY, -30, d.last_process_date)
          GROUP BY x.date_key,
                    x.segment_id,
                    d.last_process_date) AS t
        GROUP BY segment_id) AS f
    INNER JOIN qsaccel.profile_agg.adwh_dim_segments c ON f.segment_id = c.segment_id
    INNER JOIN qsaccel.profile_agg.adwh_dim_br_segment_destinations a ON a.segment_id = c.segment_id
    INNER JOIN qsaccel.profile_agg.adwh_dim_destination b ON a.destination_id = b.destination_id
    WHERE b.destination_id = 1458738325) AS m
  WHERE abs(m.profile_count_z_factor) >= 1
  ORDER BY m.latest_profile_count DESC
  LIMIT 20;
```

+++

See the [Mapped audience health widget documentation](../guides/destinations.md#mapped-audience-health) for information on the appearance and functionality of this insight.

## Mapped audiences {#mapped-audiences}

Questions answered by this insight:

- How many audiences are mapped to a particular destination?
- How has the count of mapped audiences changed over time?
- Where can I compare two destinations to see the audience overlap mapped to each destination?

+++Select to reveal the SQL that generates this insight

```sql
SELECT COUNT(segment_id) AS mapped_audiences_count
FROM qsaccel.profile_agg.adwh_dim_br_segment_destinations
WHERE destination_id = 1458738325;
```

+++

See the [Mapped audiences widget documentation](../guides/destinations.md#mapped-audiences) for information on the appearance and functionality of this insight.

<!-- Commented out until the Jan release as the SQL IS MISSING:
## Mapped audiences by identity {#mapped-audiences-by-identity}

Questions answered by this insight:

- How do I find a list of audiences that are mapped to a destination?
- What is the count of identities for audiences mapped to a destination?
- Which audiences have the highest count of identities mapped to a particular destination?

+++Select to reveal the SQL that generates this insight

```sql
```

+++

See the [Mapped audiences by identity widget documentation](../guides/destinations.md#mapped-audiences-by-identity) for information on the appearance and functionality of this insight.
-->

## Most used destinations {#most-used-destinations}

Questions answered by this insight:

- What are the most used destinations?
- How many audiences are mapped to each destination, sorted by most to least?
- How does the mapping of audiences to destinations change from one snapshot to another?

+++Select to reveal the SQL that generates this insight

```sql
SELECT qsaccel.profile_agg.adwh_dim_destination.destination_name,
       qsaccel.profile_agg.adwh_dim_destination.destination_id,
       qsaccel.profile_agg.adwh_dim_destination.destination,
       count(DISTINCT qsaccel.profile_agg.adwh_dim_br_segment_destinations.segment_id) segment_count
  FROM qsaccel.profile_agg.adwh_dim_destination
  JOIN qsaccel.profile_agg.adwh_dim_br_segment_destinations ON qsaccel.profile_agg.adwh_dim_destination.destination_id = qsaccel.profile_agg.adwh_dim_br_segment_destinations.destination_id
  WHERE qsaccel.profile_agg.adwh_dim_destination.destination_name IS NOT NULL
  GROUP BY qsaccel.profile_agg.adwh_dim_destination.destination_name,
           qsaccel.profile_agg.adwh_dim_destination.destination,
           qsaccel.profile_agg.adwh_dim_destination.destination_id
  ORDER BY segment_count DESC
  LIMIT 20;
```

+++

See the [Most used destinations widget documentation](../guides/destinations.md#most-used-destinations) for information on the appearance and functionality of this insight.

## Recently activated audiences {#recently-activated-audiences}

Questions answered by this insight:

- Which destination was an audience most recently activated to?
- How do I find a list of all destinations sorted by the last updated date?
- How can I compare two destinations based on the most recent activations?

+++Select to reveal the SQL that generates this insight

```sql
SELECT
  segment_name,
  segment,
  destination_name,
  a.create_time create_time
FROM
  qsaccel.profile_agg.adwh_dim_br_segment_destinations a
  INNER JOIN qsaccel.profile_agg.adwh_dim_segments b ON a.segment_id = b.segment_id
  INNER JOIN qsaccel.profile_agg.adwh_dim_destination c ON a.destination_id = c.destination_id
ORDER BY
  create_time DESC,
  segment
LIMIT
  20;
```

+++

See the [Recently activated audiences widget documentation](../guides/destinations.md#recently-activated-audiences) for information on the appearance and functionality of this insight.

## Recently activated audiences by destination {#recently-activated-audiences-by-destination}

Questions answered by this insight:

- What are the audiences activated to a particular destination?
- How do I find a list of audiences activated by a particular audience from most to least recent?
- How do I find a list of audiences by the date it was activated for a specific destination?

+++Select to reveal the SQL that generates this insight

```sql
SELECT c.destination_name,
       c.destination,
       c.destination_id,
       b.segment_name,
       b.segment,
       b.segment_id,
       a.create_time activated
  FROM qsaccel.profile_agg.adwh_dim_br_segment_destinations a
  INNER JOIN qsaccel.profile_agg.adwh_dim_segments b ON a.segment_id=b.segment_id
  INNER JOIN qsaccel.profile_agg.adwh_dim_destination c ON a.destination_id=c.destination_id
  WHERE c.destination_id=-1275507046
  ORDER BY a.create_time DESC,
           a.segment_id
  LIMIT 20;
```

+++

See the [Recently activated audiences by destination widget documentation](../guides/destinations.md#recently-activated-audiences-by-destination) for information on the appearance and functionality of this insight.

## Recently created destinations {#recently-created-destinations}

Questions answered by this insight:

- Which are the most recently created destinations?
- How do I find a list of destinations with the date they were created?
- What new destination was created recently?

+++Select to reveal the SQL that generates this insight

```sql
SELECT DISTINCT
  destination,
  destination_name,
  create_time
FROM
  qsaccel.profile_agg.adwh_dim_destination
WHERE
  destination_status = 'enabled'
ORDER BY
  create_time DESC
LIMIT
  20;
```

+++

See the [Recently created destinations widget documentation](../guides/destinations.md#recently-created-destinations) for information on the appearance and functionality of this insight.

<!-- Commented out until the Jan release as SQL MISSING FROM WIKI:

## Unmapped audiences by identity {#unmapped-audiences-by-identity}

Questions answered by this insight:

- How do I find a list of audiences that are not mapped to a destination?
- What is the count of identities for audiences that are not mapped to a destination?
- Which audiences have the highest count of identities not mapped to a particular destination?

+++Select to reveal the SQL that generates this insight

```sql
```

+++

See the [Unmapped audiences by identity widget documentation](../guides/destinations.md#unmapped-audiences-by-identity) for information on the appearance and functionality of this insight.

-->

## Next steps {#next-steps}

By reading this document, you now understand the SQL that generates dashboard insights and what common questions this analysis solves. You can now edit and iterate these SQL queries to generate your own insights.

<!-- This link will go in during the January release.
See the [View SQL documentation]() for more information on how to adapt your insights' SQL directly through the PLatform UI. -->

You can also read and understand the SQL that generates insights for the [Profiles](./profiles.md) and [Audiences](./audiences.md) dashboards.

<!-- 
SQL MISSING FROM WIKI:
Unmapped audiences by identity
Mapped audiences by identity 
-->
