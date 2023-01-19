---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics;
solution: Experience Platform
title: Sensei Machine Learning API Guide Appendix
description: The following sections provide reference information for various features of the Sensei Machine Learning API.
exl-id: 2c8d3ae8-7ad7-4ff6-8d6b-3a42d3eccdff
---
# [!DNL Sensei Machine Learning] API guide appendix

The following sections provide reference information for various features of the [!DNL Sensei Machine Learning] API.

## Query parameters for asset retrieval {#query}

The [!DNL Sensei Machine Learning] API provides support for query parameters with retrieving assets. Available query parameters and their usages are described in the following table:

| Query parameter | Description | Default value |
| --------------- | ----------- | ------- |
| `start` | Indicates the starting index for pagination. | `start=0` |
| `limit` | Indicates the maximum number of results to return. | `limit=25` |
| `orderby` | Indicates the properties to use for sorting in priority order. Include a dash (**-**) before a property name to sort in descending order, otherwise results are sorted in ascending order. | `orderby=created` |
| `property` | Indicates the comparison expression that an object must satisfy in order to be returned. | `property=deleted==false` |

>[!NOTE]
>
>When combining multiple query parameters, they must be separated by ampersands (**&**).

## Python CPU and GPU configurations {#cpu-gpu-config}

Python Engines have the ability to choose between either a CPU or a GPU for its training or scoring purposes, and is defined on an [MLInstance](./mlinstances.md) as a task specification (`tasks.specification`).

The following is an example configuration that specifies using a CPU for training and a GPU for scoring:

```json
[
    {
        "name": "train",
        "parameters": [
            {
                "key": "training parameter",
                "value": "parameter value"
            }    
        ],
        "specification": {
            "type": "ContainerTaskSpec",
            "cpus": "1"
        }
    },
    {
        "name": "score",
        "parameters": [
            {
                "key": "scoring parameter",
                "value": "parameter value" 
            }
        ],
        "specification": {
            "type": "ContainerTaskSpec",
            "gpus": "1"
        }
    }
]
```

>[!NOTE]
>
>The values of `cpus` and `gpus` does not signify the number of CPUs or GPUs, but rather the number of physical machines. These values are permissibly `"1"` and will throw an exception otherwise.

## PySpark and Spark resource configurations {#resource-config}

Spark Engines have the ability to modify computational resources for training and scoring purposes. These resources are described in the following table:

| Resource | Description | Type |
| -------- | ----------- | ---- |
| driverMemory | Memory for driver in megabytes | int |
| driverCores | Number of cores used by driver | int |
| executorMemory | Memory for executor in megabytes | int |
| executorCores | Number of cores used by executor | int |
| numExecutors | Number of executors | int |

Resources can be specified on an [MLInstance](./mlinstances.md) as either (A) individual training or scoring parameters, or (B) within an additional specifications object (`specification`). For example, the following resource configurations are the same for both training and scoring:

```json
[
    {
        "name": "train",
        "parameters": [
            {
                "key": "driverMemory",
                "value": "2048"
            },
            {
                "key": "driverCores",
                "value": "1"
            },
            {
                "key": "executorMemory",
                "value": "2048"
            },
            {
                "key": "executorCores",
                "value": "2"
            },
            {
                "key": "numExecutors",
                "value": "3"
            }
        ]
    },
    {
        "name": "score",
        "parameters": [
            {
                "key": "scoring parameter",
                "value": "parameter value"
            }
        ],
        "specification": {
            "type": "SparkTaskSpec",
            "name": "Spark Task name",
            "className": "Class name",
            "driverMemoryInMB": 2048,
            "driverCores": 1,
            "executorMemoryInMB": 2048,
            "executorCores": 2,
            "numExecutors": 3
        }
    }
]
```
