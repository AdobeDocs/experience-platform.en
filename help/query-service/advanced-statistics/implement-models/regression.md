---
title: Regression Algorithms
description: Learn how to configure and optimize various regression algorithms with key parameters, descriptions, and example code to help you implement advanced statistical models.
role: Developer
---
# Regression algorithms {#regression-algorithms}

This document provides an overview of various regression algorithms, focusing on their configuration, key parameters, and practical usage in advanced statistical models. Regression algorithms are used to model the relationship between dependent and independent variables, predicting continuous outcomes based on observed data. Each section includes parameter descriptions and example code to help you implement and optimize these algorithms for tasks such as linear, random forest, and survival regression.

## [!DNL Decision Tree] regression {#decision-tree-regression}

[!DNL Decision Tree] learning is a supervised learning method used in statistics, data mining, and machine learning. In this approach, a classification or regression decision tree is used as a predictive model to draw conclusions about a set of observations.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of decision tree models.

| Parameter                   | Description                                                                                                                                                                                         | Default value | Possible Values                                                                                       |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------|
| `MAX_BINS`                   | The maximum number of bins determines how continuous features are divided into discrete intervals. This affects how features are split at each decision tree node. More bins provide higher granularity. | 32            | Must be at least 2 and at least the number of categories in any categorical feature.                    |
| `CACHE_NODE_IDS`             | If `false`, the algorithm will pass trees to executors to match instances with nodes. If `true`, the algorithm will cache node IDs for each instance. Caching can speed up the training of deeper trees. | false         | `true` or `false`                                                                                      |
| `CHECKPOINT_INTERVAL`        | Specifies how often to checkpoint the cached node IDs. For example, `10` means the cache will be checkpointed every 10 iterations.                                                                  | 10            | (>=1)                                                                                                  |
| `IMPURITY`                   | The criterion used for information gain calculation (case-insensitive).                                                                                                                              | `gini`       | `entropy`, `gini`                                                                                       |
| `MAX_DEPTH`                  | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node and 2 leaf nodes.                                                       | 5             | [0, 30]                                                                                                |
| `MIN_INFO_GAIN`              | The minimum information gain required for a split to be considered at a tree node.                                                                                                                  | 0.0           | (>=0.0)                                                                                                |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of the total weight in either child to be less than this value, it is discarded. | 0.0           | (>=0.0, 0.5)                                                                                           |
| `MIN_INSTANCES_PER_NODE`     | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                   | 1             | (>=1)                                                                                                  |
| `MAX_MEMORY_IN_MB`           | The maximum memory, in MB, allocated to histogram aggregation. If the memory is too small, only 1 node will be split per iteration, which may cause the aggregates to exceed the size.              | 256           |                                                                                                        |
| `PREDICTION_COL`             | The parameter for the prediction column name.                                                                                                                                                       | "prediction"  | Any string                                                                                             |
| `SEED`                       | The parameter for the random seed.                                                                                                                                                                  |   N/A         | Any 64-bit number                                                                                      |
| `WEIGHT_COL`                 | The parameter for the weight column name. If this is not set or is empty, all instance weights are treated as `1.0`.                                                                                | not set       |                                                                                                        |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'decision_tree_regression'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Factorization Machines] regression {#factorization-machines-regression}

[!DNL Factorization Machines] is a regression learning algorithm that supports normal gradient descent and the AdamW solver. The algorithm is based on the paper by S. Rendle (2010), "[!DNL Factorization Machines]."

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Factorization Machines] Regression.

| Parameter              | Description                                                                         | Default value | Possible Values |
|------------------------|--------------------------------------------------------------------------------------|---------------|----------------|
| `TOL`                  | The convergence tolerance.                                                          | `1E-6`          | (>= 0)          |
| `FACTOR_SIZE`          | The dimensionality of the factors.                                                  | 8             | (>= 0)          |
| `FIT_INTERCEPT`        | Whether to fit an intercept term.                                                   | `true`        | `true`, `false`  |
| `FIT_LINEAR`           | Whether to fit the linear term (also known as the 1-way term).                      | `true`        | `true`, `false` |
| `INIT_STD`             | The standard deviation of the initial coefficients.                                 | 0.01          | (>= 0)          |
| `MAX_ITER`             | The number of iterations the algorithm should run.                                  | 100           | (>= 0)           |
| `MINI_BATCH_FRACTION`  | The mini-batch fraction, which must be in the range `(0, 1]`.                       | 1.0           | `(0, 1]`          |
| `REG_PARAM`            | The regularization parameter.                                                       | 0.0           | (>= 0)            |
| `SEED`                 | The random seed.                                                                    | NOT SET       | Any 64-bit number |
| `SOLVER`               | The solver algorithm used for optimization.                                         | "adamW"       | `gd`, `adamW`     |
| `STEP_SIZE`            | The initial step size for the first step (similar to learning rate).                | 1.0           |                   |
| `PREDICTION_COL`       | The prediction column name.                                                         | "prediction"  | Any string        |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'factorization_machines_regression'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Generalized Linear] regression {#generalized-linear-regression}

Unlike linear regression, which assumes that the outcome follows a normal (Gaussian) distribution, [!DNL Generalized Linear] Models (GLMs) allow the outcome to follow different types of distributions, such as [!DNL Poisson] or binomial, depending on the nature of the data.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Generalized Linear] regression.

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
| `VARIANCE_POWER`       | The power in the variance function of the [!DNL Tweedie] distribution, which defines the relationship between variance and mean. Supported values are 0 and `[1, inf)`.                                                      | 0.0           | 0, `[1, inf)`                                                             |
| `LINK_PREDICTION_COL`  | The link prediction (linear predictor) column name.                                                                                                                                                                      | NOT SET       | Any string                                                              |
| `OFFSET_COL`           | The offset column name. If not set, all instance offsets are treated as 0.0. The offset feature has a constant coefficient of 1.0.                                                                                       | NOT SET       |                                                                        |
| `WEIGHT_COL`           | The weight column name. If not set or empty, all instance weights are treated as `1.0`. In the Binomial family, weights correspond to the number of trials, and non-integer weights are rounded in AIC calculation.      | NOT SET       |                                                                        |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'generalized_linear_reg'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Gradient Boosted Tree] regression {#gradient-boosted-tree-regression}

Gradient-boosted trees (GBTs) are an effective method for classification and regression that combines the predictions of multiple decision trees to improve predictive accuracy and model performance.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Gradient Boosted Tree] regression.

| Parameter                    | Description                                                                                                                                                                                        | Default value | Possible Values                                                                                     |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------|
| `MAX_BINS`                    | The maximum number of bins used to divide continuous features into discrete intervals, which helps determine how features are split at each decision tree node. More bins provide higher granularity. | 32            | Must be at least 2 and equal to or greater than the number of categories in any categorical feature.  |
| `CACHE_NODE_IDS`              | If `false`, the algorithm will pass trees to executors to match instances with nodes. If `true`, the algorithm will cache node IDs for each instance. Caching can speed up training of deeper trees.   | `false`      | `true`, `false`                                                                                      |
| `CHECKPOINT_INTERVAL`         | Specifies how often to checkpoint the cached node IDs. For example, `10` means the cache will be checkpointed every 10 iterations.                                                                  | 10            | (>= 1)                                                                                                |
| `MAX_DEPTH`                   | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node with 2 leaf nodes.                                                      | 5             | (>= 0)                                                                                                |
| `MIN_INFO_GAIN`               | The minimum information gain required for a split to be considered at a tree node.                                                                                                                   | 0.0           | (>= 0.0)                                                                                             |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of total weight in either child to be less than this value, it is discarded. | 0.0           | (>= 0.0, <= 0.5)                                                                                     |
| `MIN_INSTANCES_PER_NODE`      | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                   | 1             | (>= 1)                                                                                                |
| `MAX_MEMORY_IN_MB`            | The maximum memory, in MB, allocated to histogram aggregation. If this value is too small, only 1 node will be split per iteration, and its aggregates may exceed this size.                        | 256           |                                                                                                      |
| `PREDICTION_COL`              | The column name for prediction output.                                                                                                                                                             | "prediction"  | Any string                                                                                            |
| `VALIDATION_INDICATOR_COL`    | The column name indicating whether each row is used for training or validation. `false` for training and `true` for validation.                                                                      | NOT SET       | Any string                                                                                            |
| `LEAF_COL`                    | The column name for leaf indices. The predicted leaf index of each instance in each tree, generated by preorder traversal.                                                                           | ""            | Any string                                                                                            |
| `FEATURE_SUBSET_STRATEGY`     | The number of features considered for splitting at each tree node.                                                                                                                                   | "auto"        | `auto`, `all`, `onethird`, `sqrt`, `log2`, `n` (where `n` is a fraction between 0 and 1.0)            |
| `SEED`                        | The random seed.                                                                                                                                                                                    | NOT SET       | Any 64-bit number                                                                                     |
| `WEIGHT_COL`                  | The column name for instance weights. If not set or empty, all instance weights are treated as `1.0`.                                                                                               | NOT SET       |                                                                                                      |
| `LOSS_TYPE`                   | The loss function that the [!DNL Gradient Boosted Tree] model tries to minimize.                                                                                                                     | "squared"     | `squared` (L2), and `absolute` (L1). Note: Values are case-insensitive.                               |
| `STEP_SIZE`                   | The step size (also known as the learning rate) in the range `(0, 1]`, used to shrink the contribution of each estimator.                                                                              | 0.1           | `(0, 1]`                                                                                                |
| `MAX_ITER`                    | The maximum number of iterations for the algorithm.                                                                                                                                                 | 20            | (>= 0)                                                                                                |
| `SUBSAMPLING_RATE`            | The fraction of the training data used to learn each decision tree, in the range `(0, 1]`.                                                                                                             | 1.0           | `(0, 1]`                                                                                                |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'gradient_boosted_tree_regression'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Isotonic] regression {#isotonic-regression}

[!DNL Isotonic Regression] is an algorithm used to iteratively adjust distances while preserving the relative order of dissimilarities in the data.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Isotonic Regression].

| Parameter              | Description                                                                                                                                    | Default value | Possible Values |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------|
| `ISOTONIC`             | Specifies whether the output sequence should be isotonic (increasing) when `true` or antitonic (decreasing) when `false`.                      | `true`        | `true`, `false` |
| `WEIGHT_COL`           | The column name for instance weights. If not set or empty, all instance weights are treated as `1.0`.                                          | NOT SET       | Any string      |
| `PREDICTION_COL`       | The column name for prediction output.                                                                                                         | "prediction"  | Any string      |
| `FEATURE_INDEX`        | The index of the feature, applicable when `featuresCol` is a vector column. If not set, the default value is `0`. Otherwise, it has no effect. | 0             |                 |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'isotonic_regression'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Linear] regression {#linear-regression}

[!DNL Linear Regression] is a supervised machine learning algorithm that fits a linear equation to data in order to model the relationship between a dependent variable and independent features.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Linear Regression].

| Parameter            | Description                                                                                                                                                                           | Default value | Possible Values |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------|
| `MAX_ITER`           | The maximum number of iterations.                                                                                                                                                     | 100           | (>= 0)          |
| `REGPARAM`           | The regularization parameter used to control the complexity of the model.                                                                                                             | 0.0           | (>= 0)          |
| `ELASTICNETPARAM`    | The ElasticNet mixing parameter, which controls the balance between L1 (Lasso) and L2 (Ridge) penalties. A value of 0 applies an L2 penalty, while a value of 1 applies an L1 penalty.| 0.0           | (>= 0, <= 1)    |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'linear_reg'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Random Forest Regression] {#random-forest-regression}

[!DNL Random Forest Regression] is an ensemble algorithm that builds multiple decision trees during training and returns the average prediction of those trees for regression tasks, helping to prevent overfitting.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Random Forest Regression].

| Parameter                    | Description                                                                                                                                                                                                   | Default value | Possible Values                                                                                     |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------|
| `MAX_BINS`                    | The maximum number of bins used to discretize continuous features and determine how features are split at each node. More bins provide higher granularity.                                                   | 32            | Must be at least 2 and at least equal to the number of categories in any categorical feature.         |
| `CACHE_NODE_IDS`              | If `false`, the algorithm will pass trees to executors to match instances with nodes. If `true`, the algorithm will cache node IDs for each instance, speeding up the training of deeper trees.              | `false`      | `true`, `false`                                                                                      |
| `CHECKPOINT_INTERVAL`         | Specifies how often to checkpoint the cached node IDs. For example, `10` means the cache is checkpointed every 10 iterations.                                                                                | 10            | (>= 1)                                                                                                |
| `IMPURITY`                    | The criterion used for information gain calculation (case-insensitive).                                                                                                                                      | "entropy"     | `entropy`, `gini`                                                                                     |
| `MAX_DEPTH`                   | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node and 2 leaf nodes.                                                                | 5             | [0, 30]                                                                                                |
| `MIN_INFO_GAIN`               | The minimum information gain required for a split to be considered at a tree node.                                                                                                                           | 0.0           | (>= 0.0)                                                                                             |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of the total weight in either child to be less than this value, it is discarded.  | 0.0           | (>= 0.0, <= 0.5)                                                                                     |
| `MIN_INSTANCES_PER_NODE`      | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                           | 1             | (>= 1)                                                                                                |
| `MAX_MEMORY_IN_MB`            | The maximum memory, in MB, allocated to histogram aggregation. If this value is too small, only 1 node will be split per iteration, and its aggregates may exceed this size.                                 | 256           |                                                                                                      |
| `BOOTSTRAP`                   | Whether to use bootstrap samples when building trees.                                                                                                                                                        | TRUE          | `true`, `false`                                                                                      |
| `NUM_TREES`                   | The number of trees to train (at least 1). If `1`, no bootstrapping is used. If greater than `1`, bootstrapping is applied.                                                                                  | 20            | (>= 1)                                                                                                |
| `SUBSAMPLING_RATE`            | The fraction of training data used to train each decision tree, in the range `(0, 1]`.                                                                                                                         | 1.0           | `(0, 1]`                                                                                                |
| `LEAF_COL`                    | The column name for leaf indices, which is the predicted leaf index of each instance in each tree, generated by preorder traversal.                                                                          | ""            | Any string                                                                                            |
| `PREDICTION_COL`              | The column name for prediction output.                                                                                                                                                                       | "prediction"  | Any string                                                                                            |
| `SEED`                        | The random seed.                                                                                                                                                                                             | NOT SET       | Any 64-bit number                                                                                     |
| `WEIGHT_COL`                  | The column name for instance weights. If not set or empty, all instance weights are treated as `1.0`.                                                                                                        | NOT SET       | Any valid column name or leave empty.                                                                 |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'random_forest_regression'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Survival Regression] {#survival-regression}

[!DNL Survival Regression] is used to fit a parametric survival regression model, known as the [!DNL Accelerated Failure Time] (AFT) model, based on the [!DNL Weibull distribution]. It can stack instances into blocks for enhanced performance.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Survival Regression].

| Parameter                | Description                                                                                                                                                                                         | Default value | Possible Values |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------|
| `MAX_ITER`               | The maximum number of iterations that the algorithm should run.                                                                                                                                     | 100           | (>= 0)          |
| `TOL`                    | The convergence tolerance.                                                                                                                                                                          | `1E-6`        | (>= 0)          |
| `AGGREGATION_DEPTH`      | The suggested depth for `treeAggregate`. If the feature dimensions or the number of partitions are large, this parameter can be set to a larger value.                                              | 2             | (>= 2)          |
| `FIT_INTERCEPT`          | Whether to fit an intercept term.                                                                                                                                                                   | TRUE          | `true`, `false` |
| `PREDICTION_COL`         | The column name for prediction output.                                                                                                                                                              | "prediction"  | Any string      |
| `CENSOR_COL`             | The column name for censoring. A value of `1` indicates that the event has occurred (uncensored), while `0` means the event is censored.                                                            | "censor"      | 0, 1            |
| `MAX_BLOCK_SIZE_IN_MB`   | The maximum memory in MB for stacking input data into blocks. If the remaining data size in a partition is smaller, this value is adjusted accordingly. A value of `0` allows automatic adjustment. | 0.0           | (>= 0)          |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'survival_regression'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## Next steps

After reading this document, you now know how to configure and use various regression algorithms. Next, refer to the documents on [classification](./classification.md) and [clustering](./clustering.md) to learn about other types of advanced statistical models.
