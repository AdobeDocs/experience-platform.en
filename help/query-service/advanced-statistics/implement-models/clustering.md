---
title: Clustering Algorithms
description: Learn how to configure and optimize various clustering algorithms with key parameters, descriptions, and example code to help you implement advanced statistical models.
role: Developer
exl-id: 273853c6-85d2-43e5-b51a-aa9d20b313ae
---
# Clustering algorithms {#clustering-algorithms}

Clustering algorithms group data points into distinct clusters based on their similarities, enabling unsupervised learning to uncover patterns within the data. To create a clustering algorithm, use the `type` parameter in the `OPTIONS` clause to specify the algorithm you want to use for model training. Next, define the relevant parameters as key-value pairs to fine-tune the model.

>[!NOTE]
>
>Ensure you understand the parameter requirements for the chosen algorithm. If you choose not to customize certain parameters, the system applies default settings. Consult the relevant documentation to understand each parameter's function and default values.

## [!DNL K-Means] {#kmeans}

`K-Means` is a clustering algorithm that partitions data points into a predefined number of clusters (k). It is one of the most commonly used algorithms for clustering due to its simplicity and efficiency.

**Parameters**

When using `K-Means`, the following parameters can be set in the `OPTIONS` clause:

| Parameter           | Description                                                                                                   | Default Value   | Possible Values                 |
|---------------------|---------------------------------------------------------------------------------------------------------------|-----------------|----------------------------------|
| `MAX_ITER`        | The number of iterations the algorithm should run.                                                              | `20`            | (>= 0)                          |
| `TOL`             | The convergence tolerance level.                                                                                | `0.0001`        | (>= 0)                           |
| `NUM_CLUSTERS`    | The number of clusters to create (`k`).                                                                         | `2`             | (>1)                             |
| `DISTANCE_TYPE`   | The algorithm used to compute the distance between two points. The value is case-sensitive.                     | `euclidean`     | `euclidean`, `cosine`            |
| `KMEANS_INIT_METHOD` | The initialization algorithm for the cluster centers.                                                        | `k-means\|\|` | `random`, `k-means\|\|` (A parallel version of k-means++) |
| `INIT_STEPS`      | The number of steps for the `k-means\|\|` initialization mode (applicable only when `KMEANS_INIT_METHOD` is `k-means\|\|`). | `2`             | (>0)                 |
| `PREDICTION_COL`  | The name of the column where predictions will be stored.                                                        | `prediction`    | Any string                       |
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

## [!DNL Bisecting K-means] {#bisecting-kmeans}

[!DNL Bisecting K-means] is a hierarchical clustering algorithm that uses a divisive (or "top-down") approach. All observations start in a single cluster, and splits are performed recursively as the hierarchy is built. [!DNL Bisecting K-means] can often be faster than regular K-means, but it typically produces different cluster results.

**Parameters**

| Parameter                    | Description                                                                                                                     | Default value  | Possible Values                                |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------|----------------|------------------------------------------------|
| `MAX_ITER`                    | The maximum number of iterations the algorithm runs.                                                                       | 20             | (>= 0)                                         |
| `WEIGHT_COL`                  | The column name for instance weights. If not set or empty, all instance weights are treated as `1.0`.                          | NOT SET        | Any string                                     |
| `NUM_CLUSTERS`                | The desired number of leaf clusters. The actual number could be smaller if no divisible clusters remain.                       | 4              | (> 1)                                          |
| `SEED`                        | The random seed used for controlling random processes in the algorithm.                                                         | NOT SET        | Any 64-bit number                              |
| `DISTANCE_MEASURE`            | The distance measure used to calculate similarity between points.                                                              | "euclidean"    | `euclidean`, `cosine`                         |
| `MIN_DIVISIBLE_CLUSTER_SIZE`   | The minimum number of points (if >= 1.0) or the minimum proportion of points (if < 1.0) required for a cluster to be divisible.| 1.0            | (>= 0)                                         |
| `PREDICTION_COL`              | The column name for prediction output.                                                                                          | "prediction"   | Any string                                     |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'bisecting_kmeans',
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Gaussian Mixture Model] {#gaussian-mixture-model}

[!DNL Gaussian Mixture Model] represents a composite distribution where data points are drawn from one of k Gaussian sub-distributions, each with its own probability. It is used to model datasets that are assumed to be generated from a mixture of several Gaussian distributions.

**Parameters**

| Parameter             | Description                                                                                                                                                              | Default value  | Possible Values                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|------------------------------------------|
| `MAX_ITER`            | The maximum number of iterations for the algorithm to run.                                                                                                               | 100            | (>= 0)                                   |
| `WEIGHT_COL`          | The column name, for instance,  weights. If not set or empty, all instance weights are treated as `1.0`.                                                                 | NOT SET        | Any valid column name or empty           |
| `NUM_CLUSTERS`        | The number of independent Gaussian distributions in the mixture model.                                                                                                   | 2              | (> 1)                                    |
| `SEED`                | The random seed used to control random processes in the algorithm.                                                                                                       | NOT SET        | Any 64-bit number                        |
| `AGGREGATION_DEPTH`   | This parameter controls the depth of aggregation trees used during computation.                                                                                          | 2              | (>= 1)                                   |
| `PROBABILITY_COL`     | The column name for predicted class conditional probabilities. These should be treated as confidence scores rather than exact probabilities.                             | "probability"  | Any string                               |
| `TOL`                 | The convergence tolerance for iterative algorithms.                                                                                                                      | 0.01           | (>= 0)                                   |
| `PREDICTION_COL`      | The column name for prediction output.                                                                                                                                   | "prediction"   | Any string                               |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'gaussian_mixture',
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Latent Dirichlet Allocation] (LDA) {#latent-dirichlet-allocation}

[!DNL Latent Dirichlet Allocation] (LDA) is a probabilistic model that captures the underlying topic structure from a collection of documents. It is a three-level hierarchical Bayesian model with word, topic, and document layers. LDA uses these layers, along with the observed documents, to build a latent topic structure.

**Parameters**

| Parameter                    | Description                                                                                                                                                              | Default value  | Possible Values                          |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|------------------------------------------|
| `MAX_ITER`                    | The maximum number of iterations the algorithm runs.                                                                                                                    | 20             | (>= 0)                                   |
| `OPTIMIZER`                   | The optimizer or inference algorithm used to estimate the LDA model. Supported options are `"online"` (Online Variational Bayes) and `"em"` (Expectation-Maximization). | "online"       | `online`, `em`  (case-insensitive)       |
| `NUM_CLUSTERS`                | The number of clusters to create (k).                                                                                                                                   | 10             | (> 1)                                    |
| `CHECKPOINT_INTERVAL`         | Specifies how often to checkpoint the cached node IDs.                                                                                                                  | 10             | (>= 1)                                   |
| `DOC_CONCENTRATION`           | The concentration parameter ("alpha") determines the prior assumptions regarding topic distribution across documents. The default behavior is determined by the optimizer. For the `EM` optimizer, alpha values should be greater than 1.0 (default: uniformly distributed as (50/k) + 1), ensuring symmetric topic distributions. For the `online` optimizer, alpha values can be 0 or greater (default: uniformly distributed as 1.0/k), allowing for more flexible topic initialization. | Automatic         | Any single value or vector of length k where values > 1 for EM |
| `KEEP_LAST_CHECKPOINT`        | Indicates whether to keep the last checkpoint when using the `em` optimizer. Deleting the checkpoint can cause failures if a data partition is lost. Checkpoints are automatically removed from storage when they are no longer needed, as determined by reference counting.                     | `true`            | `true`, `false`                  |
| `LEARNING_DECAY`              | Learning rate for the `online` optimizer, set as an exponential decay rate between `(0.5, 1.0]`.                                                                        | 0.51           | `(0.5, 1.0]`                               |
| `LEARNING_OFFSET`             | A learning parameter for the `online` optimizer that downweights early iterations to make early iterations count less.                                                  | 1024           | (> 0)                                    |
| `SEED`                        | Random seed for controlling random processes in the algorithm.                                                                                                          | NOT SET        | Any 64-bit number                        |
| `OPTIMIZE_DOC_CONCENTRATION`  | For the `online` optimizer: whether to optimize the `docConcentration` (Dirichlet parameter for document-topic distribution) during training.                           | `false`          | `true`, `false`                          |
| `SUBSAMPLING_RATE`            | For the `online` optimizer: the fraction of the corpus sampled and used in each iteration of mini-batch gradient descent, in the range `(0, 1]`.                        | 0.05           | `(0, 1]`                                   |
| `TOPIC_CONCENTRATION`         | The concentration parameter ("beta" or "eta") defines the prior assumptions placed on topics' distributions over terms. The default value is determined by the optimizer: For `EM`, values > 1.0 (default = 0.1 + 1). For `online`, values ≥ 0 (default = 1.0/k). | Automatic         | Any single value or vector of length k, where values > 1 for EM |
| `TOPIC_DISTRIBUTION_COL`      | This parameter outputs the estimated topic mixture distribution for each document, often referred to as "theta" in the literature. For empty documents, it returns a vector of zeros. Estimates are derived using a variational approximation ("gamma").                                                      | NOT SET           | Any string                        |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'lda',
) AS
  select col1, col2, col3 from training-dataset
```

## Next steps

After reading this document, you now know how to configure and use various clustering algorithms. Next, refer to the documents on [classification](./classification.md) and [regression](./regression.md) to learn about other types of advanced statistical models.
