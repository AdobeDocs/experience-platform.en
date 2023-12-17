---
title: Dataset Statistics Computation
description: This document describes how to compute column-level statistics on Azure Data Lake Storage (ADLS) datasets with SQL commands.
exl-id: 66f11cd4-b115-40b8-ba8a-c4bb3606bbbf
---
# Dataset statistics computation

You can now compute column-level statistics on [!DNL Azure Data Lake Storage] (ADLS) datasets with the `COMPUTE STATISTICS` SQL command. The SQL commands that compute dataset statistics are an extension of the `ANALYZE TABLE` command. Full details on the `ANALYZE TABLE` command can be found in the [SQL reference documentation](../sql/syntax.md#analyze-table).

>[!NOTE]
>
>Computed statistics are stored in temporary tables that have session-level persistence. You can access the results of the computations at any time during that session. They cannot be accessed across different PSQL sessions.

To see the statistics that were computed with the `ANALYZE TABLE COMPUTE STATISTICS` command, you can use a SELECT query on the alias name or Statistics ID. You can also limit the scope of the statistical analysis to either the entire dataset, a subset of a dataset, all columns, or a subset of columns.

>[!IMPORTANT]
>
>The `COMPUTE STATISTICS`, `FILTERCONTEXT`, and `FOR COLUMNS` commands are not supported on accelerated store tables. These extensions for the `ANALYZE TABLE` command are currently only supported for ADLS tables. For more information, see the [ANALYZE TABLE section](../sql/syntax.md#analyze-table) of the SQL syntax guide.  

This guide helps you structure your queries so that you can compute the column statistics of an ADLS dataset. Using these commands, you can see the statistics generated in your session through a PSQL client using an SQL query.

## Compute statistics {#compute-statistics}

Additional constructs have been added to the `ANALYZE TABLE` command that allows you to **compute statistics for a subset of a dataset and for certain columns**. To compute dataset statistics, you must use the `ANALYZE TABLE <tableName> COMPUTE STATISTICS` format. 

>[!IMPORTANT]
>
>The default behavior computes statistics for the **entire dataset** and for **all columns**. To compute statistics on all columns, you would use the query format `ANALYZE TABLE COMPUTE STATISTICS`. You are **not** recommended to use the `COMPUTE STATISTICS` command without filters on an ADLS dataset, as the size of the dataset can be very large (potentially petabytes of data). Instead, you should always consider running the analyze command using `FILTERCONTEXT` and a specified list of columns. See the sections on [limiting analyzed columns](#limit-included-columns) and [adding a filter condition](#filter-condition) for more details.

The example seen below computes statistics for the `adc_geometric` dataset and for **all** columns in the dataset.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS;
```

>[!NOTE]
>
>The `COMPUTE STATISTICS` command does not support the array or map data types. You can set a `skip_stats_for_complex_datatypes` flag to be notified or to error out if the input data frame has columns with arrays and map data types. By default, the flag is set to true. To enable notifications or errors, use the following command: `SET skip_stats_for_complex_datatypes = false`.

## Create an alias name {#alias-name}

Since the results of calculations can be a large amount of data, it is unreasonable to return the computed data directly in the console output. Although alias names are optional, you are recommended to use them as best practice when you compute statistics. Provide an alias name in the statement to descriptively reference the results in your SQL queries. Alternatively, an automatically generated `Statistics ID` is generated and used to store the calculated information. 

The example below stores the output computed statistics in the `alias_name` for later reference. The alias name used in the query is available for reference as soon as the `ANALYZE TABLE` command has been run.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS AS alias_name;
```

The output for the above example is `SUCCESSFULLY COMPLETED, alias_name`. The console output does not display the statistics in the response to the analyze table compute statistics command. To see the detailed results, you must use a SELECT query on the alias name or Statistics ID. 

## View the output of computed statistics {#view-output-of-computed-statistics}

If you do not provide an alias name in advance, Query Service automatically generates a name for the `Statistics ID` that follows the format of `<tableName_stats_{incremental_number}>`. If an alias name is provided it appears in the `Statistics ID` column. 

An example output of a `COMPUTE STATISTICS` query is as follows:

```console
| Statistics ID         | 
| --------------------- |
| adc_geometric_stats_1 |
(1 row)
```

You can then **query the computed statistics directly** by referencing the `Statistics ID`. The example statement below allows you to view the output in full when used with the `Statistics ID` or the alias name.

```sql
SELECT * FROM adc_geometric_stats_1; 
```

The computed statistics output might look similar to the example below. 

```console
 columnName                                                 |      mean      |      max       |      min       | standardDeviation | approxDistinctCount | nullCount | dataType  
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

## Show the statistical analysis metadata {#show-statistics}

You can use the `SHOW STATISTICS` command to display the metadata for all the temporary statistics generated in the session. This command can help you refine the scope of your statistical analysis. 

An example output of `SHOW STATISTICS` is seen below.

```console
      statsId         |   tableName   | columnSet |         filterContext       |      timestamp
----------------------+---------------+-----------+-----------------------------+--------------------
adc_geometric_stats_1 | adc_geometric |   (age)   |                             | 25/06/2023 09:22:26
demo_table_stats_1    |  demo_table   |    (*)    |       ((age > 25))          | 25/06/2023 12:50:26
age_stats             | castedtitanic |   (age)   | ((age > 25) AND (age < 40)) | 25/06/2023 09:22:26
```

A description of the metadata column names is provided below.

| Column name  | Description |
|---|---|
| `statsId`  | This ID references to the temporary statistics table generated by the `COMPUTE STATISTICS` command.  |
| `tableName`  | The original table used for analysis.  |
|  `columnSet` | A list of any columns specifically chosen for analysis. An empty value indicates that all columns were analyzed. See the section on [limiting columns](#limit-included-columns) for more information. |
| `filterContext`  | A list of any filters applied to the analysis. |
| `timestamp`  | Any chronological filters applied to your data analysis to focus on a specific period. See the [timestamp filter condition section](#filter-condition) for more details. |

You can use the statistics ID or alias name to look up the computed statistics with a SELECT statement at any time within that session. The statistics ID and the statistics generated are only valid for this particular session and cannot be accessed across different PSQL sessions. The computed statistics are not currently persistent. See the section on how to [view the output of your computed statistics](#view-output-of-computed-statistics) for more details.  

## Limit the included columns {#limit-included-columns}

To focus your analysis, you can compute statistics for particular dataset columns by referencing them by name. Use the `FOR COLUMNS (<col1>, <col2>)` syntax to target specific columns. The example below computes statistics for the columns  `commerce`, `id`, and `timestamp` for the dataset `tableName`.

```sql
ANALYZE TABLE tableName COMPUTE STATISTICS FOR columns (commerce, id, timestamp);
```

You can calculate the statistics for any root level or nested column. The following example demonstrates these references.

```sql
ANALYZE TABLE adcgeometric COMPUTE STATISTICS FOR columns (commerce, commerce.purchases.value, commerce.productListAdds.value);
```

## Add a timestamp filter condition {#filter-condition}

To focus the analysis of your columns based on chronology, you can add a timestamp filter condition. This condition can be used to filter out historical data or focus your data analysis on a specific period. The `FILTERCONTEXT` command calculates statistics on a subset of the dataset based on the filter condition that you provide.

In the example below, statistics are computed on all columns for the dataset `tableName`, where the column timestamp has values between the specified range of `2023-04-01 00:00:00` and `2023-04-05 00:00:00`. 

```sql
ANALYZE TABLE tableName FILTERCONTEXT (timestamp >= to_timestamp('2023-04-01 00:00:00') and timestamp <= to_timestamp('2023-04-05 00:00:00')) COMPUTE STATISTICS FOR ALL COLUMNS;
```

You can combine the column limit and the filter to create highly specific computational queries for your dataset columns. For example, the following query computes statistics on the columns `commerce`, `id`, and `timestamp` for the dataset `tableName`, where the column timestamp has values between the specified range of `2023-04-01 00:00:00` and `2023-04-05 00:00:00`. 

```sql
ANALYZE TABLE tableName FILTERCONTEXT (timestamp >= to_timestamp('2023-04-01 00:00:00') and timestamp <= to_timestamp('2023-04-05 00:00:00')) COMPUTE STATISTICS FOR columns (commerce, id, timestamp);
```

## Next steps {#next-steps}

By reading this document, you now have a better understanding of how to generate column-level statistics from an ADLS dataset using an SQL query. You are recommended to read the [SQl syntax guide](../sql/syntax.md) to discover more features of the Adobe Experience Platform Query Service.
