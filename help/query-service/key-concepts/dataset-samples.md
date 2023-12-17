---
title: Dataset Samples
description: Query Service sample datasets enable you to conduct exploratory queries on big data with greatly reduced processing time at the cost of query accuracy. This guide provides information on how to manage your samples for approximate query processing
exl-id: 9e676d7c-c24f-4234-878f-3e57bf57af44
---
# Dataset samples

Adobe Experience Platform Query Service provides sample datasets as part of its approximate query processing capabilities. Sample datasets are created with uniform random samples from existing [!DNL Azure Data Lake Storage] (ADLS) datasets using only a percentage of records from the original. This percentage is known as the sampling rate. Adjusting the sampling rate to control the balance of accuracy and processing time allows you to conduct exploratory queries on big data with greatly reduced processing time at the cost of query accuracy.

As many users do not need an exact answer for an aggregate operation over a dataset, issuing an approximate query to return an approximate answer is more efficient for exploratory queries on large datasets. As sample datasets contain only a percentage of the data from the original dataset, it enables you to trade query accuracy for an improved response time. At read-time, Query Service has to scan fewer rows which produces results faster than if you were to query the entire dataset.  

To help you manage your samples for approximate query processing, Query Service supports the following operations for dataset samples:

- [Create a uniform random dataset sample.](#create-a-sample)
- [Optionally specify a filter criteria](##optional-filter-criteria)
- [View the list of samples for an ADLS table.](#view-list-of-samples)
- [Query the sample datasets directly.](#query-sample-datasets)
- [Delete a sample.](#delete-a-sample)
- Delete associated samples when the original ADLS table is dropped. 

## Getting started {#get-started}

To use the create and delete approximate query processing capabilities detailed in this document, you must set the session flag to `true`. From the command line of either the Query Editor, or your PSQL client enter the `SET aqp=true;` command.

>[!NOTE]
>
>You must enable the session flag each time you log into Platform.

![The Query Editor with the 'SET aqp=true;' command highlighted.](../images/essential-concepts/set-session-flag.png)

## Create a uniform random dataset sample {#create-a-sample}

Use the `ANALYZE TABLE <table_name> TABLESAMPLE SAMPLERATE x` command with a dataset name to create a uniform random sample from that dataset. 

The sample rate is the percentage of records taken from the original dataset. You can control the sample rate by using the `TABLESAMPLE SAMPLERATE` keywords. In this example, the value of 5.0 equates to a 50% sample rate. A value of 2.5 would equate to 25% and so on.

>[!IMPORTANT]
>
>The system allows a maximum of five samples for each dataset. If you try to create a sixth sample dataset, an error message appears on the screen stating that the sample limit has been reached.

```sql
ANALYZE TABLE example_dataset_name TABLESAMPLE SAMPLERATE 5.0;
```

## Optionally specify a filter criteria {#optional-filter-criteria}

You can opt to specify a filter criteria for your uniform random samples. This allows you to create a sample based on the filtered subset of the analyzed table.

When creating a sample, the optional filter is applied first, then the sample is created from the filtered view of the dataset. A dataset sample with an applied filter follows the following query format:

```sql
ANALYZE TABLE <tableToAnalyze> TABLESAMPLE FILTERCONTEXT (<filter_condition>) SAMPLERATE X.Y;
ANALYZE TABLE <tableToAnalyze> TABLESAMPLE FILTERCONTEXT (<filter_condition_1> AND/OR <filter_condition_2>) SAMPLERATE X.Y;
ANALYZE TABLE <tableToAnalyze> TABLESAMPLE FILTERCONTEXT (<filter_condition_1> AND (<filter_condition_2> OR <filter_condition_3>)) SAMPLERATE X.Y;
```

Practical examples of this type of filtered sample dataset are as follows:

```sql
ANALYZE TABLE large_table TABLESAMPLE FILTERCONTEXT (month(to_timestamp(timestamp)) in ('8', '9')) SAMPLERATE 10;
ANALYZE TABLE large_table TABLESAMPLE FILTERCONTEXT (month(to_timestamp(timestamp)) in ('8', '9') AND product.name = "product1") SAMPLERATE 10;
ANALYZE TABLE large_table TABLESAMPLE FILTERCONTEXT (month(to_timestamp(timestamp)) in ('8', '9') AND (product.name = "product1" OR product.name = "product2")) SAMPLERATE 10;
```

In the examples provided, the table name is `large_table`, the filter condition on the original table is `month(to_timestamp(timestamp)) in ('8', '9')`, and the sampling rate is (X% of the filtered data), in this case, `10`.

## View the list of samples {#view-list-of-samples}

Use the `sample_meta()` function to view the list of samples associated with an ADLS table.

```sql
SELECT sample_meta('example_dataset_name')
```

The list of dataset samples is displayed in the format of the example below.

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

The delete operation allows you to create new samples once the maximum limit of five dataset samples has been reached.

```sql
DROP TABLE SAMPLE x5e5cd8ea0a83c418a8ef0928_uniform_2_0_percent_bnhmc;
```

>[!NOTE]
>
>If you have multiple sample datasets derived from an original ADLS dataset, when the original is dropped all associated samples are also deleted.
