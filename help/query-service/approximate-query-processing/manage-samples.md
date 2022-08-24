---
title: Dataset Samples 
description: Query Service sample datasets enable you to conduct exploratory queries on big data with greatly reduced processing time at the cost of query accuracy. This guide provides information on how to manage your samples for approximate query processing
---
# Dataset samples

Dataset samples are part of Query Service's approximate query processing capabilities and allows you to create uniform random samples from existing Azure Data Lake Storage (ADLS) datasets. 

A sample dataset contains only a small subset of the data from the original dataset which enables you to conduct exploratory queries on big data as they trade query accuracy for an improved response time. A sample dataset is created by using a percentage of records from the original dataset. This percentage is the sampling rate.


As many users do not need an exact answer for an aggregate operation over a dataset, they will be issuing an approximate query to get an approximate answer, where the trade-off is of the read time. By giving the approximate answer instead of exact one, we will return results much faster than the original query, with an extended scope to have error bound answers. Query Service does this with Dataset Samples. 
 
As the sample dataset contains only a percentage of the data from the original dataset, at read time Query Service needs to scan much fewer number of rows, resulting in faster results.

To help you manage your samples for approximate query processing, Query Service supports the following operations for dataset samples:

- Create a uniform random dataset sample.
- View the list of samples for an ADLS table.
- Query the samples directly.
- Delete a sample.
- Delete associated samples when original ADLS table is dropped.

## Getting started

To use the approximate query processing capabilities detailed above you must set the session flag to `true`. From the command line of either the Query Editor or your PSQL client enter the `SET aqp=true;` command.

>[!NOTE]
>
>You must enable the session flag each time you log into Platform.

![The Query Editor with the SET aqp=true; command highlighted.](../images/approximate-query-processing/set-session-flag.png)

## Create a uniform random dataset sample {#create-a-sample}

Use the `ANALYZE TABLE` command to create a uniform random sample. The sample created contains a certain percentage of the size of the original data as defined by the `TABLESAMPLE SAMPLERATE` keywords. The sample rate is the percentage of records taken from the original dataset. In this example, the value of 5.0 equates to a 50% sample rate. A value of 2.5 would equate to 25% and so on.

>[!IMPORTANT]
>
>The system allows a maximum of five samples for each dataset. If you try to create a sixth sample dataset, an error message appears on the screen stating that the sample limit has been reached.

```sql
ANALYZE TABLE example_dataset_name TABLESAMPLE SAMPLERATE 5.0;
```

## View the list of samples {#view-list-of-samples}

Use the `sample_meta()` function to view the list of samples associated with an ADLS table.

```sql
SELECT sample_meta('example_dataset_name')
```

The list of dataset samples are displayed as shown in the example below.

```shell
                  sample_table_name                  |    sample_dataset_id     |    parent_dataset_id     | sample_type | sampling_rate | sample_num_rows |       created      
-----------------------------------------------------+--------------------------+--------------------------+-------------+---------------+-----------------+---------------------
 x5e5cd8ea0a83c418a8ef0928_uniform_4_0_percent_ughk7 | 62ff19853d338f1c07b18965 | 5e5cd8ea0a83c418a8ef0928 | uniform     |           4.0 |             391 | 19/08/2022 05:03:01
(1 row)
```

## Query the sample dataset {#query-sample-datasets}

Use the `{EXAMPLE_DATASET_NAME}` to query sample tables directly. Alternatively, add the `WITHAPPROXIMATE` keyword to the end of a query and Query Service automatically uses the most recently created sample.

```sql
SELECT * FROM example_dataset_name WITHAPPROXIMATE;
```

## Delete dataset samples {#delete-a-sample}

The delete operation allows you to circumvent the maximum of 5 dataset samples per dataset

```sql
DROP TABLESAMPLE x5e5cd8ea0a83c418a8ef0928_uniform_2_0_percent_bnhmc;
```

>[!NOTE]
>
>If you have multiple sample datasets derived from an original ADLS dataset, when the original is dropped all associated samples are also deleted.  
