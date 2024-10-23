---
title: Regression Algorithms
description: PLACEHOLDER Words.
role: Developer
---
# Regression algorithms {#regression-algorithms}

Introduction.

## Decision Tree regression {#decision-tree-regression}

Decision tree learning is a supervised learning method used in statistics, data mining, and machine learning. In this approach, a classification or regression decision tree is used as a predictive model to draw conclusions about a set of observations.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of decision tree models.

| Parameter                   | Description                                                                                                                                                                                         | Default value | Possible Values                                                                                       |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------|
| `MAX_BINS`                   | The maximum number of bins used for discretizing continuous features and for choosing how to split features at each node. More bins increase granularity.                                            | 32            | Must be at least 2 and at least the number of categories in any categorical feature.                    |
| `CACHE_NODE_IDS`             | If `false`, the algorithm will pass trees to executors to match instances with nodes. If `true`, the algorithm will cache node IDs for each instance. Caching can speed up the training of deeper trees. | false         | `true` or `false`                                                                                      |
| `CHECKPOINT_INTERVAL`        | Specifies how often to checkpoint the cached node IDs. For example, `10` means the cache will be checkpointed every 10 iterations.                                                                  | 10            | (>=1)                                                                                                  |
| `IMPURITY`                   | The criterion used for information gain calculation (case-insensitive).                                                                                                                              | `gini`       | `entropy`, `gini`                                                                                       |
| `MAX_DEPTH`                  | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node and 2 leaf nodes.                                                       | 5             | [0, 30]                                                                                                |
| `MIN_INFO_GAIN`              | The minimum information gain required for a split to be considered at a tree node.                                                                                                                  | 0.0           | (>=0.0)                                                                                                |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of the total weight in either child to be less than this value, it is discarded. | 0.0           | (>=0.0, 0.5)                                                                                           |
| `MIN_INSTANCES_PER_NODE`     | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                   | 1             | (>=1)                                                                                                  |
| `MAX_MEMORY_IN_MB`           | The maximum memory, in MB, allocated to histogram aggregation. If the memory is too small, only 1 node will be split per iteration, which may cause the aggregates to exceed the size.              | 256           |                                                                                                        |
| `PREDICTION_COL`             | The parameter for the prediction column name.                                                                                                                                                       | "prediction"  | Any String                                                                                             |
| `SEED`                       | The parameter for the random seed.                                                                                                                                                                  |   N/A         | Any 64-bit number                                                                                      |
| `WEIGHT_COL`                 | The parameter for the weight column name. If this is not set or is empty, all instance weights are treated as `1.0`.                                                                                | not set       |                                                                                                        |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'decision_tree_regression'
) AS
  select col1, col2, col3 from training-dataset
```

## Factorization Machines regression {#factorization-machines-regression}

Factorization Machines is a regression learning algorithm that supports normal gradient descent and the AdamW solver. The algorithm is based on the paper by S. Rendle (2010), "Factorization Machines."

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of Factorization Machines Regression.

| Parameter              | Description                                                                         | Default value | Possible Values |
|------------------------|--------------------------------------------------------------------------------------|---------------|----------------|
| `TOL`                  | The convergence tolerance.                                                          | `1E-6`          | (>= 0)          |
| `FACTOR_SIZE`          | The dimensionality of the factors.                                                  | 8             | (>= 0)          |
| `FIT_INTERCEPT`        | Whether to fit an intercept term.                                                   | `true`        | `true`, `false`  |
| `FIT_LINEAR`           | Whether to fit the linear term (also known as the 1-way term).                      | `true`        | `true`, `false` |
| `INIT_STD`             | The standard deviation of the initial coefficients.                                 | 0.01          | (>= 0)          |
| `MAX_ITER`             | The number of iterations the algorithm should run.                                  | 100           | (>= 0)           |
| `MINI_BATCH_FRACTION`  | The mini-batch fraction, which must be in the range (0, 1).                         | 1.0           | (0, 1)            |
| `REG_PARAM`            | The regularization parameter.                                                       | 0.0           | (>= 0)            |
| `SEED`                 | The random seed.                                                                    | NOT SET       | Any 64-bit number |
| `SOLVER`               | The solver algorithm used for optimization.                                         | "adamW"       | `gd`, `adamW`     |
| `STEP_SIZE`            | The initial step size for the first step (similar to learning rate).                | 1.0           |                   |
| `PREDICTION_COL`       | The prediction column name.                                                         | "prediction"  | Any String        |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'factorization_machines_regression'
) AS
  select col1, col2, col3 from training-dataset
```

## Generalised Linear Regression {#generalised-linearregression}

Words.

## Gradient Boosted Tree Regression {#gradient-boosted-tree-regression}

Words.

## Isotonic Regression {#isotonic-regression}

Words.

## Linear Regression {#linear-regression}

Words.

## Random Forest Regression {#random-forest-regression}

Words.

## Survival Regression {#survival-regression}