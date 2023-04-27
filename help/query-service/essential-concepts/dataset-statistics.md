---
title: Dataset Statistics Computation 
description: This document describes how to compute column level statistics on Azure Data Lake Storage (ADLS) datasets with SQL commands.
---
# Dataset statistics computation

You can now compute column level statistics on Azure Data Lake Storage (ADLS) datasets with the `COMPUTE STATISTICS` and `SHOW STATISTICS` SQL commands. Previously, this functionality was restricted to data warehouse datasets. These commands extend the `ANALYZE TABLE` command. Full details on the `ANALYZE TABLE` command can be found in the [SQL reference documentation](../sql/syntax.md#analyze-table).

With the `SHOW STATISTICS <alias_name>` command, you can see the statistics that were computed with the `ANALYZE TABLE` command. Through the combination of these commands you can now compute column statistics on the entire dataset, on a subset of a dataset, on all columns, or a subset of columns.

This guide helps you to structure your queries so that they can compute the column statistics of an ADLS dataset. Using these commands, you can see the statistics generated in your session through a PSQL client using an SQL query.

## Compute statistics {#compute-statistics}

Additional constructs have been added to the `ANALYZE TABLE` command. To compute statistics for the entire dataset and for all columns you must use the `ANALYZE TABLE <tableName> COMPUTE STATISTICS` format. 

>[!IMPORTANT]
>
>The default behavior computes statistics for the **entire dataset** and for **all columns**. You are recommended not to use this on an ADLS dataset as the size of dataset can be very large (potentially, petabytes of data). Instead you should always consider running analyze command using `FILTERCONTEXT` and the columns list specified. See the section on [adding a filter condition](#filter-condition) for more details.

The example seen below computes statistics for the `<adc_geometric>` dataset and for **all** columns in the dataset.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS;
```

## Limit the included columns {#limit-included-columns}

You can compute statistics for particular dataset columns by referencing them by name. Use the `FOR COLUMNS <col1>, <col2>` syntax to target specific columns. The example below computes statistics for the columns  `commerce`, `id`, and `timestamp` for the  dataset `tableName`.

```sql
ANALYZE TABLE tableName COMPUTE STATISTICS FOR columns (commerce, id, timestamp);
```

## Add a timestamp filter condition {#filter-condition}

You can add a timestamp filter condition to focus the analysis of your columns. This can be used to filter out historical data or focus your data analysis on a specific period. The `FILTERCONTEXT` command calculates statistics on a subset of the dataset based on the filter condition you provide.

In the example below, statistics are computed on all columns for the dataset `tableName` where the column timestamp has values between the specified range of `2023-04-01 00:00:00` and `2023-04-05 00:00:00`. 

```sql
ANALYZE TABLE tableName COMPUTE STATISTICS FILTERCONTEXT (timestamp >= to_timestamp('2023-04-01 00:00:00') and timestamp <= to_timestamp('2023-04-05 00:00:00')) FOR ALL COLUMNS;
```

You can combine the column limit and the filter to create highly specific computational queries for your dataset columns. For example, the following query computes statistics on the columns `commerce`, `id`, and `timestamp` for the  dataset `tableName` where the column timestamp has values between the specified range of `2023-04-01 00:00:00` and `2023-04-05 00:00:00`. 

```sql
ANALYZE TABLE tableName COMPUTE STATISTICS FILTERCONTEXT (timestamp >= to_timestamp('2023-04-01 00:00:00') and timestamp <= to_timestamp('2023-04-05 00:00:00')) FOR (columns commerce, id, timestamp);
```

## Create an alias name {#alias-name}

Since the filter condition and the columns list can target a large amount of data, it is unrealistic to remember the exact values. Instead, you can provide an `<alias_name>` to store this calculated information. If you do not provide an alias name for these calculations, Query Service generates a universally unique identifier for the alias ID. You can then use this alias ID to look up the computed statistics with the `SHOW STATISTICS` command. 

>[!NOTE]
>
>Although an alias name is optional, it is best practice to use one.

The example below stores the output computed statistics in the `alias_name` for later reference.

```sql
ANALYZE TABLE adc_geometric COMPUTE STATISTICS FOR ALL COLUMNS as alias_name;
```

The output for the above example is `SUCCESSFULLY COMPLETED, alias_name`. The console output does not display the statistics in the response of analyze table compute statistics command. To see the output you must use the `SHOW STATISTICS` command discussed below.

## Show the statistics {#show-statistics}

The alias name used in the query is available as soon as the `ANALYZE TABLE` command has been run. The alias name is only valid for this particular session and cannot be used across different PSQL sessions as the computed statistics are not currently persisted. To display the statistics, use the command seen below.

```sql
SHOW STATISTICS FOR <alias_name>;
```

## Next steps {#next-steps}

By reading this document, you have a better understanding of how to generate column level statistics from both a data warehouse and an ADLS dataset using an SQL query. You are recommended to read the [SQl syntax guide](../sql/syntax.md) to discover more features of Adobe Experience Platform Query Service.
