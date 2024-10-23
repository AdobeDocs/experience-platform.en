---
title: Clustering Algorithms
description: PLACEHOLDER Words.
role: Developer
---
# Clustering algorithms {#clustering-algorithms}

Clustering algorithms group data points into distinct clusters based on their similarities, enabling unsupervised learning to uncover patterns within the data. To create a clustering algorithm, use the `type` parameter in the `OPTIONS` clause to specify the algorithm you want to use for model training. Next, define the relevant parameters as key-value pairs to fine-tune the model.

>[!NOTE]
>
>Ensure you understand the parameter requirements for the chosen algorithm. Some parameters may be positional and require all preceding parameters to be specified if custom values are provided. If you choose not to customize certain parameters, the system applies default settings. Consult the relevant documentation to understand each parameter's function and default values.

## K-Means {#kmeans}

`K-Means` is a clustering algorithm that partitions data points into a predefined number of clusters (k). It is one of the most commonly used algorithms for clustering due to its simplicity and efficiency.

**Parameters**

When using `K-Means`, the following parameters can be set in the `OPTIONS` clause:

| Parameter           | Description                                                                                                     | Default Value   | Possible Values                 |
|---------------------|-----------------------------------------------------------------------------------------------------------------|-----------------|----------------------------------|
| `MAX_ITERATIONS`  | The number of iterations the algorithm should run.                                                              | `20`            | `>= 0`                           |
| `TOL`             | The convergence tolerance level.                                                                                | `0.0001`        | `>= 0`                           |
| `NUM_CLUSTERS`    | The number of clusters to create (`k`).                                                                         | `2`             | `>1`                             |
| `DISTANCE_TYPE`   | The algorithm used to compute the distance between two points.                                                  | `euclidean`     | `euclidean`, `cosine`            |
| `KMEANS_INIT_METHOD` | The initialization algorithm for the cluster centers.                                                        | `k-means\|\|`   | `random`, `k-means\|\|`          |
| `INIT_STEPS`      | The number of steps for the `k-means\|\|` initialization mode.                                                  | `2`             | `>0`                             |
| `PREDICTION_COL`  | The name of the column where predictions will be stored.                                                        | `prediction`    | Any String                       |
| `SEED`            | A random seed for reproducibility.                                                                              | `-1689246527`   | Any 64-bit number                |
| `WEIGHT_COL`      | The name of the column used for instance weights. If not set, all instances are weighted equally.               | `not set`       | N/A                              |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname 
OPTIONS(
  type = 'kmeans',
  MAX_ITERATIONS = 30,
  NUM_CLUSTERS = 4
) 
AS SELECT col1, col2, col3 FROM training-dataset;
```

