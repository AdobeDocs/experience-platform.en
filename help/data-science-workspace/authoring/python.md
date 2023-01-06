---
keywords: Experience Platform;home;popular topics;data access;python sdk;data access api;read python;write python
solution: Experience Platform
title: Accessing Data Using Python in Data Science Workspace
type: Tutorial
description: The following document contains examples on how to access data in Python for use in Data Science Workspace.
exl-id: 75aafd58-634a-4df3-a2f0-9311f93deae4
---
# Accessing data using Python in Data Science Workspace 

The following document contains examples on how to access data using Python for use in Data Science Workspace. For information on accessing data using JupyterLab notebooks, visit the [JupyterLab notebooks data access](../jupyterlab/access-notebook-data.md) documentation.

## Reading a dataset

After setting the environment variables and completing installation, your dataset can now be read into the pandas dataframe.

```python
import pandas as pd
from .utils import get_client_context
from platform_sdk.dataset_reader import DatasetReader

def load(config_properties):

client_context = get_client_context(config_properties)

dataset_reader = DatasetReader(client_context, config_properties['DATASET_ID'])

df = dataset_reader.read()
```

### SELECT columns from the dataset

```python
df = dataset_reader.select(['column-a','column-b']).read()
```

### Get partitioning information:

```python
client_context = get_client_context(config_properties)

dataset = Dataset(client_context).get_by_id({DATASET_ID})
partitions = dataset.get_partitions_info()
```

### DISTINCT clause

The DISTINCT clause allows you to fetch all the distinct values at a row/column level, removing all duplicate values from the response.

An example of using the `distinct()` function can be seen below:

```python
df = dataset_reader.select(['column-a']).distinct().read()
```

### WHERE clause

You can use certain operators in Python to help filter your dataset.

>[!NOTE]
>
>The functions used for filtering are case sensitive.

```python
eq() = '='
gt() = '>'
ge() = '>='
lt() = '<'
le() = '<='
And = and operator
Or = or operator
```

An example of using these filtering functions can be seen below:

```python
df = dataset_reader.where(experience_ds['timestamp'].gt(87879779797).And(experience_ds['timestamp'].lt(87879779797)).Or(experience_ds['a'].eq(123)))
```

### ORDER BY clause

The ORDER BY clause allows received results to be sorted by a specified column in a specific order (ascending or descending). This is done by using the `sort()` function.

An example of using the `sort()` function can be seen below:

```python
df = dataset_reader.sort([('column_1', 'asc'), ('column_2', 'desc')])
```

### LIMIT clause

The LIMIT clause allows you to limit the number of records received from the dataset.

An example of using the `limit()` function can be seen below:

```python
df = dataset_reader.limit(100).read()
```

### OFFSET clause

The OFFSET clause allows you to skip rows, from the beginning, to start returning rows from a later point. In combination with LIMIT, this can be used to iterate rows in blocks.

An example of using the `offset()` function can be seen below:

```python
df = dataset_reader.offset(100).read()
```

## Writing a dataset

To write to a dataset, you need to supply the pandas dataframe to your dataset.

### Writing the pandas dataframe

```python
client_context = get_client_context(config_properties)

# To fetch existing dataset
dataset = Dataset(client_context).get_by_id({DATASET_ID})

dataset_writer = DatasetWriter(client_context, dataset)

write_tracker = dataset_writer.write(<your_dataFrame>, file_format='json')
```

## Userspace directory (Checkpointing)

For longer running jobs, you may need to store intermediate steps. In instances like this, you can read and write to a userspace. 

>[!NOTE]
>
>Paths to the data are **not** stored. You need to store the corresponding path to its respective data.

### Write to userspace

```python
client_context = get_client_context(config_properties)
                               
user_helper = UserSpaceHelper(client_context)
user_helper.write(data_frame=<data_frame>, path=<path_to_directory>, ref_dataset_id=<ref_dataset_id>)
```

### Read from userspace

```python
client_context = get_client_context(config_properties)
                               
user_helper = UserSpaceHelper(client_context)
my_df = user_helper.read(path=<path_to_directory>, ref_dataset_id=<ref_dataset_id>)
```

## Next steps

Adobe Experience Platform Data Science Workspace provides a recipe sample that uses the above code samples to read and write data. If you want to learn more about how to use Python for accessing your data, please review the [Data Science Workspace Python GitHub Repository](https://github.com/adobe/experience-platform-dsw-reference/tree/master/recipes/python/retail).
