---
title: Dataset Samples 
description: 
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

>[!IMPORTANT]
>
>To use the approximate query processing capabilities detailed above you must set the session flag to `true`. From the command line enter the `Set aqp=true;` command.

## Create a uniform random dataset sample {#create-a-sample}

You can create a uniform random sample by using the `ANALYZE TABLE` command. The sample created contains a certain percentage of the size of the original data as defined by the `TABLESAMPLE SAMPLERATE` keywords. The sample rate is the percentage of the original data used in the sample.

**example**

```sql
ANALYZE TABLE geometrixxx_999_xdm_pqs_1batch_10k_rows_samples TABLESAMPLE SAMPLERATE 5.3;
```

| Parameters | Description |
| ------ | ------ |
| `ANALYZE TABLE` |  |
