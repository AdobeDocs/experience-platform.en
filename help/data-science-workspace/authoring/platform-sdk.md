---
keywords: Experience Platform;developer guide;SDK;Data Access SDK;Data Science Workspace;popular topics
solution: Experience Platform
title: Model Authoring Using the Adobe Experience Platform Platform SDK
description: This tutorial provides you with information on converting data_access_sdk_python to the new Python platform_sdk in both Python and R.
exl-id: 20909cae-5cd2-422b-8dbb-35bc63e69b2a
---
# Model authoring using the Adobe Experience Platform [!DNL Platform] SDK

This tutorial provides you with information on converting `data_access_sdk_python` to the new Python `platform_sdk` in both Python and R. This tutorial provides information on the following operations:

- [Build authentication](#build-authentication)
- [Basic reading of data](#basic-reading-of-data)
- [Basic writing of data](#basic-writing-of-data)

## Build authentication {#build-authentication}

Authentication is required to make calls to [!DNL Adobe Experience Platform], and is comprised of API Key, IMS Org ID, a user token, and a service token.

### Python

If you are using Jupyter Notebook, please use the below code to build the `client_context`:

```python
client_context = PLATFORM_SDK_CLIENT_CONTEXT
```

If you are not using Jupyter Notebook or you need to change the IMS Org, please use the below code sample:

```python
from platform_sdk.client_context import ClientContext
client_context = ClientContext(api_key={API_KEY},
              org_id={ORG_ID},
              user_token={USER_TOKEN},
              service_token={SERVICE_TOKEN})
```

### R

If you are using Jupyter Notebook, please use the below code to build the `client_context`:

```r
library(reticulate)
use_python("/usr/local/bin/ipython")
psdk <- import("platform_sdk")

py_run_file("../.ipython/profile_default/startup/platform_sdk_context.py")
client_context <- py$PLATFORM_SDK_CLIENT_CONTEXT
```

If you are not using Jupyter Notebook or you need to change the IMS Org, please use the below code sample:

```r
library(reticulate)
use_python("/usr/local/bin/ipython")
psdk <- import("platform_sdk")
client_context <- psdk$client_context$ClientContext(api_key={API_KEY},
              org_id={ORG_ID},
              user_token={USER_TOKEN},
              service_token={SERVICE_TOKEN})
```

## Basic reading of data {#basic-reading-of-data}

With the new [!DNL Platform] SDK, the maximum read size is 32 GB, with a maximum read time of 10 minutes. 

If your read time is taking too long, you can try using one of the following filtering options:

- [Filtering data by offset and limit](#filter-by-offset-and-limit)
- [Filtering data by date](#filter-by-date)
- [Filtering data by column](#filter-by-selected-columns)
- [Getting sorted results](#get-sorted-results)

>[!NOTE]
>
>The IMS Org is set within the `client_context`. 

### Python

To read data in Python, please use the code sample below:

```python
from platform_sdk.dataset_reader import DatasetReader
dataset_reader = DatasetReader(client_context, "{DATASET_ID}")
df = dataset_reader.limit(100).read()
df.head()
```

### R

To read data in R, please use the code sample below:

```r
DatasetReader <- psdk$dataset_reader$DatasetReader
dataset_reader <- DatasetReader(client_context, "{DATASET_ID}") 
df <- dataset_reader$read() 
df
```

## Filter by offset and limit {#filter-by-offset-and-limit}

Since filtering by batch ID is no longer supported, in order to scope reading of data, you need to use `offset` and `limit`.

### Python

```python
df = dataset_reader.limit(100).offset(1).read()
df.head
```

### R 

```r
df <- dataset_reader$limit(100L)$offset(1L)$read() 
df
```

## Filter by date {#filter-by-date}

Granularity of date filtering is now defined by the timestamp, rather than being set by the day.

### Python

```python
df = dataset_reader.where(\
    dataset_reader['timestamp'].gt('2019-04-10 15:00:00').\
    And(dataset_reader['timestamp'].lt('2019-04-10 17:00:00'))\
).read()
df.head()
```

### R

```r
df2 <- dataset_reader$where(
    dataset_reader['timestamp']$gt('2018-12-10 15:00:00')$
    And(dataset_reader['timestamp']$lt('2019-04-10 17:00:00'))
)$read()
df2
```

The new [!DNL Platform] SDK supports the following operations:

| Operation | Function |
| --------- | -------- |
| Equals (`=`) | `eq()` |
| Greater than (`>`) | `gt()` |
| Greater than or equal to (`>=`) | `ge()` |
| Less than (`<`) | `lt()` |
| Less than or equal to (`<=`) | `le()` |
| And (`&`) | `And()` |
| Or (`|`) | `Or()` |

## Filter by selected columns {#filter-by-selected-columns}

To further refine your reading of data, you can also filter by column name.

### Python

```python
df = dataset_reader.select(['column-a','column-b']).read()
```

### R

```r
df <- dataset_reader$select(c('column-a','column-b'))$read() 
```

## Get sorted results {#get-sorted-results}

Results received can be sorted by specified columns of the target dataset and in their order (asc/desc) respectively.

In the following example, dataframe is sorted by "column-a" first in ascending order. Rows having the same values for "column-a" are then sorted by "column-b" in descending order.

### Python

```python
df = dataset_reader.sort([('column-a', 'asc'), ('column-b', 'desc')])
```

### R

```r
df <- dataset_reader$sort(c(('column-a', 'asc'), ('column-b', 'desc')))$read()
```

## Basic writing of data {#basic-writing-of-data}

>[!NOTE]
>
>The IMS Org is set within the `client_context`. 

To write data in Python and R, use one of the following examples below:

### Python

```python
from platform_sdk.models import Dataset
from platform_sdk.dataset_writer import DatasetWriter

dataset = Dataset(client_context).get_by_id("{DATASET_ID}")
dataset_writer = DatasetWriter(client_context, dataset)
write_tracker = dataset_writer.write({PANDA_DATAFRAME}, file_format='json')
```

### R

```r
dataset <- psdk$models$Dataset(client_context)$get_by_id("{DATASET_ID}")
dataset_writer <- psdk$dataset_writer$DatasetWriter(client_context, dataset)
write_tracker <- dataset_writer$write({PANDA_DATAFRAME}, file_format='json')
```

## Next steps

Once you have configured the `platform_sdk` data loader, the data undergoes preparation and is then split to the `train` and `val` datasets. To learn about data preparation and feature engineering please visit the section on [data preparation and feature engineering](../jupyterlab/create-a-model.md#data-preparation-and-feature-engineering) in the tutorial for creating a recipe using [!DNL JupyterLab] notebooks.
