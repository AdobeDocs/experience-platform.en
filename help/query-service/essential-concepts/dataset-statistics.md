---
title: Dataset Statistics Computation 
description: This document describes how to compute column-level statistics on Azure Data Lake Storage (ADLS) datasets with SQL commands.
---
# Dataset statistics computation

You can now compute column-level statistics on [!DNL Azure Data Lake Storage] (ADLS) datasets with the `COMPUTE STATISTICS` and `SHOW STATISTICS` SQL commands. The SQL commands that compute dataset statistics are an extension of the `ANALYZE TABLE` command. Full details on the `ANALYZE TABLE` command can be found in the [SQL reference documentation](../sql/syntax.md#analyze-table).

>[!NOTE]
>
>Currently, the statistics generated are valid for that session only and are not persistent between sessions. They cannot be accessed across different PSQL sessions.

With the `SHOW STATISTICS FOR <alias_name>` command, you can see the statistics that were computed with the `ANALYZE TABLE COMPUTE STATISTICS` command. Through the combination of these commands, you can now compute column statistics on either the entire dataset, a subset of a dataset, all columns, or a subset of columns.

>[!IMPORTANT]
>
>The `COMPUTE STATISTICS`, `FILTERCONTEXT`, `FOR COLUMNS`, and `SHOW STATISTICS` commands are not supported on data warehouse tables. These extensions for the `ANALYZE TABLE` command are currently only supported for ADLS tables. For more information, see the [ANALYZE TABLE section](../sql/syntax.md#analyze-table) of the SQL syntax guide.  

This guide helps you structure your queries so that you can compute the column statistics of an ADLS dataset. Using these commands, you can see the statistics generated in your session through a PSQL client using an SQL query.

## Compute statistics {#compute-statistics}

Additional constructs have been added to the `ANALYZE TABLE` command that allow you to **compute statistics for a subset of a dataset and for certain columns**. To do this, you must use the `ANALYZE TABLE <tableName> COMPUTE STATISTICS` format. 

>[!IMPORTANT]
>
>The default behavior computes statistics for the **entire dataset** and for **all columns**. To compute statistics on all columns, you would use the query format `ANALYZE TABLE COMPUTE STATISTICS`. You are **not** recommended to use this on an ADLS dataset, as the size of the dataset can be very large (potentially petabytes of data). Instead, you should always consider running the analyze command using `FILTERCONTEXT` and a specified list of columns. See the sections on [limiting analyzed columns](#limit-included-columns) and [adding a filter condition](#filter-condition) for more details.

The example seen below computes statistics for the `adc_geometric` dataset and for **all** columns in the dataset.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS;
```

>[!NOTE]
>
>`COMPUTE STATISTICS` does not support the array or map data types. You can set a `skip_stats_for_complex_datatypes` flag to be notified or error out if the input dataframe has columns with arrays and map data types. By default, the flag is set to true. To enable notifications or errors, use the following command: `SET skip_stats_for_complex_datatypes = false`.

<!-- Commented out until the <alias_name> feature is released.
This second example, is a more real-world example as it uses an alias name. See the [alias name section](#alias-name) for more details on this feature.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS as <alias_name>;
``` -->

The console output does not display the statistics in response to the analyze table compute statistics command. Instead, the console will display a single row column of `Statistics ID` with a universally unique identifier to reference the results. You can also choose to **query directly on the `Statistics ID`**. On successful completion of a `COMPUTE STATISTICS` query, the results are displayed as follows:

```console
| Statistics ID    | 
| ---------------- |
| adc_geometric_stats_1 |
(1 row)
```

You can query the statistics output directly by refernecing the `Statistics ID` as seen below: 

```sql
SELECT * FROM adc_geometric_stats_1; 
```

This statement allows you to view the output in a similar way to the SHOW STATISTICS command when used with the `Statistics ID`.

To see the output, you must use the `SHOW STATISTICS` command. Instructions on [how to show the statistics](#show-statistics) are provided later in the document.

## Limit the included columns {#limit-included-columns}

You can compute statistics for particular dataset columns by referencing them by name. Use the `FOR COLUMNS (<col1>, <col2>)` syntax to target specific columns. The example below computes statistics for the columns  `commerce`, `id`, and `timestamp` for the  dataset `tableName`.

```sql
ANALYZE TABLE tableName COMPUTE STATISTICS FOR columns (commerce, id, timestamp);
```

You can calculate the statistics for any root level or nested column. The following example demonstrates these references.

```sql
ANALYZE TABLE adcgeometric COMPUTE STATISTICS FOR columns (commerce, commerce.purchases.value, commerce.productListAdds.value);
```

## Add a timestamp filter condition {#filter-condition}

You can add a timestamp filter condition to focus the analysis of your columns. This can be used to filter out historical data or focus your data analysis on a specific period. The `FILTERCONTEXT` command calculates statistics on a subset of the dataset based on the filter condition you provide.

In the example below, statistics are computed on all columns for the dataset `tableName`, where the column timestamp has values between the specified range of `2023-04-01 00:00:00` and `2023-04-05 00:00:00`. 

```sql
ANALYZE TABLE tableName FILTERCONTEXT (timestamp >= to_timestamp('2023-04-01 00:00:00') and timestamp <= to_timestamp('2023-04-05 00:00:00')) COMPUTE STATISTICS FOR ALL COLUMNS;
```

You can combine the column limit and the filter to create highly specific computational queries for your dataset columns. For example, the following query computes statistics on the columns `commerce`, `id`, and `timestamp` for the  dataset `tableName`, where the column timestamp has values between the specified range of `2023-04-01 00:00:00` and `2023-04-05 00:00:00`. 

```sql
ANALYZE TABLE tableName FILTERCONTEXT (timestamp >= to_timestamp('2023-04-01 00:00:00') and timestamp <= to_timestamp('2023-04-05 00:00:00')) COMPUTE STATISTICS FOR columns (commerce, id, timestamp);
```

<!-- Commented out until the <alias_name> feature is released.
## Create an alias name {#alias-name}

Since the filter condition and the column list can target a large amount of data, it is unrealistic to remember the exact values. Instead, you can provide an `<alias_name>` to store this calculated information. If you do not provide an alias name for these calculations, Query Service generates a universally unique identifier for the alias ID. You can then use this alias ID to look up the computed statistics with the `SHOW STATISTICS` command. 

>[!NOTE]
>
>Although alias names are optional, you are recommended to use them as best practice.

The example below stores the output computed statistics in the `alias_name` for later reference.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS FOR ALL COLUMNS as alias_name;
```

The output for the above example is `SUCCESSFULLY COMPLETED, alias_name`. The console output does not display the statistics in the response of the analyze table compute statistics command. To see the output, you must use the `SHOW STATISTICS` command discussed below. 
-->

<!-- Commented out until the <alias_name> feature is released.

## Show the statistics {#show-statistics}

The alias name used in the query is available as soon as the `ANALYZE TABLE` command has been run.  

Even with a filter condition and a column list, the computation can target a large amount of data. Query Service generates a universally unique identifier for the statistics ID to store this calculated information. You can then use this statistics ID to look up the computed statistics with the `SHOW STATISTICS` command at any time within that session. 

The statistics ID and the statistics generated are only valid for this particular session and cannot be accessed across different PSQL sessions. The computed statistics are not currently persistent. To display the statistics, use the command seen below.

```sql
SHOW STATISTICS FOR <STATISTICS_ID>;
```

An output might look similar to the example below. 

```console
                         columnName                         |      mean      |      max       |      min       | standardDeviation | approxDistinctCount | nullCount | dataType  
------------------------------------------------------------+----------------+----------------+----------------+-------------------+---------------------+-----------+-----------
 marketing.trackingcode                                     |            0.0 |            0.0 |            0.0 |               0.0 |              1213.0 |         0 | String
 _experience.analytics.customdimensions.evars.evar13        |            0.0 |            0.0 |            0.0 |               0.0 |              8765.0 |        20 | String
 _experience.analytics.customdimensions.evars.evar74        |            0.0 |            0.0 |            0.0 |               0.0 |                11.0 |         0 | String
 web.webpagedetails.name                                    |            0.0 |            0.0 |            0.0 |               0.0 |                 1.0 |         0 | String
 _experience.analytics.event1to100.event8.value             |            5.0 |         9077.0 |          123.0 |              10.0 |              1001.0 |        80 | Double
 search.ispaid                                              |            0.0 |            0.0 |            0.0 |               0.0 |                 1.0 |         0 | Boolean
 commerce.productlistviews.value                            |            0.0 |            0.0 |            0.0 |               0.0 |                 0.0 |        10 | Double
 device.typeid                                              |            0.0 |            0.0 |            0.0 |               0.0 |                 0.0 |        10 | String
 commerce.purchases.value                                   |          765.0 |        98760.0 |         -980.0 |              32.0 |                99.0 |        90 | Double
 _experience.analytics.customdimensions.props.prop45        |            0.0 |            0.0 |            0.0 |               0.0 |                 1.0 |         0 | String
 environment.browserdetails.javaenabled                     |            0.0 |            0.0 |            0.0 |               0.0 |                 1.0 |         0 | Boolean
 timestamp                                                  |            0.0 |            0.0 |            0.0 |               0.0 |                98.0 |         3 | Timestamp
(12 rows)
```
-->

## Next steps {#next-steps}

By reading this document, you now have a better understanding of how to generate column-level statistics from an ADLS dataset using an SQL query. You are recommended to read the [SQl syntax guide](../sql/syntax.md) to discover more features of the Adobe Experience Platform Query Service.
