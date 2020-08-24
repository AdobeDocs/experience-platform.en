---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Secure Python Data Access SDK
topic: tutorial
---

# Secure [!DNL Python] [!DNL Data Access] SDK

The Secure [!DNL Python] [!DNL Data Access] SDK is a software development kit that enables reading and writing of datasets from Adobe Experience Platform.

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the values to make calls to the Secure [!DNL Python] [!DNL Data Access] SDK:

- `{ACCESS_TOKEN}`
- `{API_KEY}`
- `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Using the [!DNL Python] SDK requires the name and the ID of the sandbox the operation will take place in:

- `{SANDBOX_NAME}`
- `{SANDBOX_ID}`

For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

## Environment setup

By default, the service endpoints are set to integration environment endpoints. As a result, to point to production, set the following environment variables to the following values:

| Variable | Endpoint |
| -------- | -------- |
| `ENV_CATALOG_URL` | `https://platform.adobe.io/data/foundation/catalog/` |
| `ENV_QUERY_SERVICE_URL` | `https://platform.adobe.io/data/foundation/query` |
| `ENV_BULK_INGEST_URL` | `https://platform.adobe.io/data/foundation/import/` |
| `ENV_REGISTRY_URL` | `https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas` |

Additionally, your credentials can be added as environment variables.

| Variable | Value |
| -------- | ----- |
| `ORG_ID` | Your `{IMS_ORG}` ID. |
| `SERVICE_API_KEY` | Your `{API_KEY}` value. |
| `USER_TOKEN` | Your `{ACCESS_TOKEN}` value. |
| `SERVICE_TOKEN` | Your `{SERVICE_TOKEN}`, which you may need to authorize back-channel requests between services. |
| `SANDBOX_ID` | The `{SANDBOX_ID}` value of your sandbox. |
| `SANDBOX_NAME` | The `{SANDBOX_NAME}` value of your sandbox. |

## Installation

All the packages are outputted to `./dist` after building.

### Wheel

```python
python3 setup.py bdist_wheel --universal
```

From the project directory, load wheel into your [!DNL Python] 3 environment.

```python
pip3 install ./dist/<name_of_wheel_file>.whl
```

### Egg file

```python
python3 setup.py bdist_egg
```

## Reading a dataset

After setting the environment variables and completing installation, the dataset can now be read into the pandas dataframe.

```python
from platform_sdk.client_context import ClientContext
from platform_sdk.dataset_reader import DatasetReader

client_context = ClientContext(api_key={API_KEY},
                               org_id={IMS_ORG_ID},
                               service_token={SERVICE_TOKEN},
                               user_token={USER_TOKEN},
                               sandbox_id={SANDBOX_ID},
                               sandbox_name={SANDBOX_NAME})

dataset_reader = DatasetReader(client_context, {DATASET_ID})
df = dataset_reader.read()
```

### SELECT columns from the dataset

```python
df = dataset_reader.select(['column-a','column-b']).read()
```

### Get partitioning information:

```python
client_context = ClientContext(api_key={API_KEY},
                               org_id={IMS_ORG_ID},
                               service_token={SERVICE_TOKEN},
                               user_token={USER_TOKEN},
                               sandbox_id={SANDBOX_ID},
                               sandbox_name={SANDBOX_NAME})

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

The [!DNL Python] SDK supports certain operators to help filter the dataset.

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

The ORDER BY clause allows received results to be sorted by a specified column in a specific order (ascending or descending). In the [!DNL Python] SDK, this is done by using the `sort()` function.

An example of using the `sort()` function can be seen below:

```python
df = dataset_reader.sort([('column_1', 'asc'), ('column_2', 'desc')])
```

### LIMIT clause

The LIMIT clause allows users to limit the number of records received from the dataset.

An example of using the `limit()` function can be seen below:

```python
df = dataset_reader.limit(100).read()
```

### OFFSET clause

The OFFSET clause allows users to skip rows, from the beginning, to start returning rows from a later point. In combination with LIMIT, this can be used to iterate rows in blocks.

An example of using the `offset()` function can be seen below:

```python
df = dataset_reader.offset(100).read()
```

## Writing a dataset

The [!DNL Python] SDK supports writing datasets. Users will need to supply the pandas dataframe that needs to be written to the dataset.

### Writing the pandas dataframe

```python
client_context = ClientContext(api_key={API_KEY},
                               org_id={IMS_ORG_ID},
                               service_token={SERVICE_TOKEN},
                               user_token={USER_TOKEN},
                               sandbox_id={SANDBOX_ID},
                               sandbox_name={SANDBOX_NAME})

# To fetch existing dataset
dataset = Dataset(client_context).get_by_id({DATASET_ID})

dataset_writer = DatasetWriter(client_context, dataset)

write_tracker = dataset_writer.write(<dataFrame>, file_format='json')
```

## Userspace directory (Checkpointing)

For longer running jobs, users may need to store intermediate steps. In instances like this, the [!DNL Python] SDK provides the user the ability to read and write to a userspace. 

>![NOTE] Paths to the data are **not** stored by the SDK. Users will need to store the corresponding path to its respective data.

### Write to userspace

```python
client_context = ClientContext(api_key={API_KEY},
                               org_id={IMS_ORG_ID},
                               service_token={SERVICE_TOKEN},
                               user_token={USER_TOKEN},
                               sandbox_id={SANDBOX_ID},
                               sandbox_name={SANDBOX_NAME})
                               
user_helper = UserSpaceHelper(client_context)
user_helper.write(data_frame=<data_frame>, path=<path_to_directory>, ref_dataset_id=<ref_dataset_id>)
```

### Read from userspace

```python
client_context = ClientContext(api_key={API_KEY},
                               org_id={IMS_ORG_ID},
                               service_token={SERVICE_TOKEN},
                               user_token={USER_TOKEN},
                               sandbox_id={SANDBOX_ID},
                               sandbox_name={SANDBOX_NAME})
                               
user_helper = UserSpaceHelper(client_context)
my_df = user_helper.read(path=<path_to_directory>, ref_dataset_id=<ref_dataset_id>)
```