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

## Generalized Linear Regression {#generalized-linear-regression}

Unlike linear regression, which assumes that the outcome follows a normal (Gaussian) distribution, generalized linear models (GLMs) allow the outcome to follow different types of distributions, such as Poisson or binomial, depending on the nature of the data.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of Generalized Linear Regression.

| Parameter              | Description                                                                                                                                                                                                              | Default value | Possible Values                                                         |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------|
| `MAX_ITER`             | Sets the maximum number of iterations (applicable when using the solver `irls`).                                                                                                                                         | 25            | (>= 0)                                                                  |
| `REG_PARAM`            | The regularization parameter.                                                                                                                                                                                            | NOT SET       | (>= 0)                                                                  |
| `TOL`                  | The convergence tolerance.                                                                                                                                                                                               | `1E-6`        | (>= 0)                                                                  |
| `AGGREGATION_DEPTH`    | The suggested depth for `treeAggregate`.                                                                                                                                                                                 | 2             | (>= 2)                                                                   |
| `FAMILY`               | The family parameter, describing the error distribution used in the model. Supported options are `gaussian`, `binomial`, `poisson`, `gamma`, and `tweedie`.                                                              | "gaussian"    | `gaussian`, `binomial`, `poisson`, `gamma`, `tweedie`                   |
| `FIT_INTERCEPT`        | Whether to fit an intercept term.                                                                                                                                                                                        | `true`        | `true`, `false`                                                          |
| `LINK`                 | The link function, which defines the relationship between the linear predictor and the mean of the distribution function. Supported options are `identity`, `log`, `inverse`, `logit`, `probit`, `cloglog`, and `sqrt`.  | NOT SET       | `identity`, `log`, `inverse`, `logit`, `probit`, `cloglog`, `sqrt`      |
| `LINK_POWER`           | The index in the power link function, applicable to the [!DNL Tweedie] family. If not set, it defaults to `1 - variancePower`, following the R `statmod` package. Link powers of 0, 1, -1, and 0.5 correspond to Log, Identity, Inverse, and Sqrt link, respectively. | 1                                          |
| `SOLVER`               | The solver algorithm used for optimization. Supported option: `irls` (iteratively reweighted least squares).                                                                                                             | "irls"        | `irls`                                                                  |
| `VARIANCE_POWER`       | The power in the variance function of the [!DNL Tweedie] distribution, which defines the relationship between variance and mean. Supported values are 0 and [1, ∞).                                                      | 0.0           | 0, [1, Inf)                                                             |
| `LINK_PREDICTION_COL`  | The link prediction (linear predictor) column name.                                                                                                                                                                      | NOT SET       | Any String                                                              |
| `OFFSET_COL`           | The offset column name. If not set, all instance offsets are treated as 0.0. The offset feature has a constant coefficient of 1.0.                                                                                       | NOT SET       |                                                                        |
| `WEIGHT_COL`           | The weight column name. If not set or empty, all instance weights are treated as `1.0`. In the Binomial family, weights correspond to the number of trials, and non-integer weights are rounded in AIC calculation.      | NOT SET       |                                                                        |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'generalized_linear_reg'
) AS
  select col1, col2, col3 from training-dataset
```

## Gradient Boosted Tree Regression {#gradient-boosted-tree-regression}

Words.

## Isotonic Regression {#isotonic-regression}

Words.

## Linear Regression {#linear-regression}

Words.

## Random Forest Regression {#random-forest-regression}

Words.

## Survival Regression {#survival-regression}