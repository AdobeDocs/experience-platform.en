---
title: Classification Algorithms
description: Learn how to configure and optimize various classification algorithms with key parameters, descriptions, and example code to help you implement advanced statistical models.
role: Developer
exl-id: 9105ab04-b480-48a0-b8f7-cf0ed5e5399d
---
# Classification algorithms {#classification-algorithms}

This document provides an overview of various classification algorithms, focusing on their configuration, key parameters, and practical usage in advanced statistical models. Classification algorithms are used to assign categories to data points based on input features. Each section includes parameter descriptions and example code to help you implement and optimize these algorithms for tasks such as decision trees, random forest, and naive Bayes classification.

## [!DNL Decision Tree Classifier] {#decision-tree-classifier}

[!DNL Decision Tree Classifier] is a supervised learning approach used in statistics, data mining, and machine learning. In this approach, a decision tree is used as a predictive model for classification tasks, drawing conclusions from a set of observations.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of a [!DNL Decision Tree Classifier].

| Parameter                    | Description                | Default value | Possible Values |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------|
| `MAX_BINS`                    | The maximum number of bins determines how continuous features are divided into discrete intervals. This affects how features are split at each decision tree node. More bins provide higher granularity.    | 32            | Must be at least 2 and at least equal to the number of categories in any categorical feature. |
| `CACHE_NODE_IDS`              | If `false`, the algorithm passes trees to executors to match instances with nodes. If `true`, the algorithm caches node IDs for each instance, speeding up the training of deeper trees.                    | `false`       | `true`, `false` |
| `CHECKPOINT_INTERVAL`         | Specifies how often to checkpoint the cached node IDs. For example, `10` means that the cache is checkpointed every 10 iterations.                                                                          | 10            | (>= 1)            |
| `IMPURITY`                    | The criterion used for information gain calculation (case-insensitive).                                                                                                                                     | "gini"        | `entropy`, `gini` |
| `MAX_DEPTH`                   | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node and 2 leaf nodes.                                                               | 5             | (>= 0) (range: [0,30]) |
| `MIN_INFO_GAIN`               | The minimum information gain required for a split to be considered at a tree node.                                                                                                                          | 0.0           | (>= 0.0)          |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of the total weight in either child to be less than this value, it is discarded. | 0.0           | (>= 0.0, <= 0.5)  |
| `MIN_INSTANCES_PER_NODE`      | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                          | 1             | (>= 1)            |
| `MAX_MEMORY_IN_MB`            | The maximum memory, in MB, allocated to histogram aggregation. If this value is too small, only 1 node is split per iteration, and its aggregates may exceed this size.                                     | 256           | (>= 0)            |
| `PREDICTION_COL`              | The column name for prediction output.                                                                                                                                                                      | "prediction"  | Any string        |
| `SEED`                        | The random seed.                                                                                                                                                                                            | N/A           | Any 64-bit number  |
| `WEIGHT_COL`                  | The column name, for instance,  weights. If not set or empty, all instance weights are treated as `1.0`.                                                                                                    | NOT SET       | Any string        |
| `ONE_VS_REST`                 | Enables or disables wrapping this algorithm with One-vs-Rest, used for multiclass classification problems.                                                                                                  | `false`        | `true`, `false`   |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'decision_tree_classifier'
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Factorization Machine Classifier] {#factorization-machine-classifier}

The [!DNL Factorization Machine Classifier] is a classification algorithm that supports normal gradient descent and the AdamW solver. The Factorization Machine classification model uses logistic loss, which can be optimized via gradient descent, and often includes regularization terms like L2 to prevent overfitting.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of the [!DNL Factorization Machine Classifier].

| Parameter              | Description                                                                                                                                                                                             | Default value | Possible Values                                                                                      |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------|
| `TOL`                  | The convergence tolerance, controlling the accuracy of the optimization.                                                                                                                                 | `1E-6`          | (>= 0)                                                                                                |
| `FACTOR_SIZE`          | The dimensionality of the factors.                                                                                                                                                                       | 8             | (>= 0)                                                                                                |
| `FIT_INTERCEPT`        | Specifies whether to fit an intercept term.                                                                                                                                                              | `true`        | `true`, `false`                                                                                       |
| `FIT_LINEAR`           | Specifies whether to fit the linear term (also known as the 1-way term).                                                                                                                                  | `true`        | `true`, `false`                                                                                       |
| `INIT_STD`             | The standard deviation for initializing coefficients.                                                                                                                                                    | 0.01          | (>= 0)                                                                                                |
| `MAX_ITER`             | The maximum number of iterations for the algorithm to run.                                                                                                                                               | 100           | (>= 0)                                                                                                |
| `MINI_BATCH_FRACTION`  | The fraction of data to use in mini-batches during training. Must be in the range `(0, 1]`.                                                                                                                | 1.0           | 0 < value <= 1                                                                                           |
| `REG_PARAM`            | The regularization parameter, which helps control model complexity and prevent overfitting.                                                                                                               | 0.0           | (>= 0)                                                                                                |
| `SEED`                 | The random seed for controlling random processes in the algorithm.                                                                                                                                        | N/A           | Any 64-bit number                                                                                     |
| `SOLVER`               | The solver algorithm used for optimization. Supported options are `gd` (gradient descent) and `adamW`.                                                                                                    | "adamW"       | `gd`, `adamW`                                                                                         |
| `STEP_SIZE`            | The initial step size for optimization, often interpreted as the learning rate.                                                                                                                           | 1.0            |  > 0                                                                                                   |
| `PROBABILITY_COL`      | The column name for predicted class conditional probabilities. Note: not all models output well-calibrated probabilities; these should be treated as confidence scores rather than exact probabilities.  | "probability"  | Any string                                                                                            |
| `PREDICTION_COL`       | The column name for predicted class labels.                                                                                                                                                              | "prediction"  | Any string                                                                                            |
| `RAW_PREDICTION_COL`   | The column name for raw prediction values (also known as confidence).                                                                                                                                     | "rawPrediction" | Any string                                                                                           |
| `ONE_VS_REST`          | Specifies whether to enable One-vs-Rest for multiclass classification.                                                                                                                                   | FALSE          | `true`, `false`                                                                                       |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'factorization_machines_classifier'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Gradient Boosted Tree Classifier] {#gradient-boosted-tree-classifier}

The [!DNL Gradient Boosted Tree Classifier] uses an ensemble of decision trees to improve the accuracy of classification tasks, combining multiple trees to enhance model performance.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of the [!DNL Gradient Boosted Tree Classifier].

| Parameter                    | Description                                                                                                                                                                                              | Default value | Possible Values                                                                                     |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------|
| `MAX_BINS`                    | The maximum number of bins determines how continuous features are divided into discrete intervals. This affects how features are split at each decision tree node. More bins provide higher granularity.| 32            | Must be at least 2 and equal to or greater than the number of categories in any categorical feature.  |
| `CACHE_NODE_IDS`              | If `false`, the algorithm passes trees to executors to match instances with nodes. If `true`, the algorithm caches node IDs for each instance, speeding up the training of deeper trees.                | `false`       | `true`, `false`                                                                                      |
| `CHECKPOINT_INTERVAL`         | Specifies how often to checkpoint the cached node IDs. For example, `10` means that the cache is checkpointed every 10 iterations.                                                                      | 10            | (>= 1)                                                                                                |
| `MAX_DEPTH`                   | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node and 2 leaf nodes.                                                           | 5             | (>= 0)                                                                                                |
| `MIN_INFO_GAIN`               | The minimum information gain required for a split to be considered at a tree node.                                                                                                                      | 0.0           | (>= 0.0)                                                                                             |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of the total weight in either child to be less than this value, it is discarded. | 0.0           | (>= 0.0, <= 0.5)                                                                                     |
| `MIN_INSTANCES_PER_NODE`      | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                      | 1             | (>= 1)                                                                                                |
| `MAX_MEMORY_IN_MB`            | The maximum memory, in MB, allocated to histogram aggregation. If this value is too small, only 1 node is split per iteration, and its aggregates may exceed this size.                                 | 256           | (>= 0)                                                                                                |
| `PREDICTION_COL`              | The column name for prediction output.                                                                                                                                                                  | "prediction"  | Any string                                                                                            |
| `VALIDATION_INDICATOR_COL`    | The column name indicates whether each row is used for training or validation. A value of `false` indicates training, and `true` indicates validation. If a value is not set, the default value is `None`.| "None"       | Any string                                                                                            |
| `RAW_PREDICTION_COL`          | The column name for raw prediction values (also known as confidence).                                                                                                                                   | "rawPrediction" | Any string                                                                                           |
| `LEAF_COL`                    | The column name for leaf indices, which is the predicted leaf index of each instance in each tree, generated by preorder traversal.                                                                     | ""            | Any string                                                                                            |
| `FEATURE_SUBSET_STRATEGY`     | The number of features considered for splitting at each tree node. Supported options: `auto` (automatically determined based on the task), `all` (use all features), `onethird` (use one-third of the features), `sqrt` (use the square root of the number of features), `log2` (use the base-2 logarithm of the number of features), and `n` (where n is either a fraction of the features if in the range `(0, 1]`, or a specific number of features if in the range `[1, total number of features]`).  | "auto"        | `auto`, `all`, `onethird`, `sqrt`, `log2`, `n`  |
| `WEIGHT_COL`                  | The column name, for instance,  weights. If not set or empty, all instance weights are treated as `1.0`.                                                                                                | NOT SET       | Any string                                                                                             |
| `LOSS_TYPE`                   | The loss function that the [!DNL Gradient Boosted Tree] model tries to minimize.                                                                                                                        | "logistic"    | `logistic`  (case-insensitive)                                                                 |
| `STEP_SIZE`                   | The step size (also known as the learning rate) in the range `(0, 1]`, used to shrink the contribution of each estimator.                                                                               | 0.1           | (>= 0.0, <= 1)                                                                                              |
| `MAX_ITER`                    | The maximum number of iterations for the algorithm.                                                                                                                                                     | 20            | (>= 0)                                                                                                |
| `SUBSAMPLING_RATE`            | The fraction of training data used to train each decision tree. The value must be in the range 0 < value <= 1.                                                                                          | 1.0           | `(0, 1]` |
| `PROBABILITY_COL`             | The column name for predicted class conditional probabilities. Note: not all models output well-calibrated probabilities; these should be treated as confidence scores rather than exact probabilities. | "probability" | Any string                                                                                            |
| `ONE_VS_REST`                 | Enables or disables wrapping this algorithm with One-vs-Rest for multiclass classification.                                                                                                             | `false`       | `true`, `false`                                                                                       |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'gradient_boosted_tree_classifier'
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Linear Support Vector Classifier] (LinearSVC) {#linear-support-vector-classifier}

The [!DNL Linear Support Vector Classifier] (LinearSVC) constructs a hyperplane to classify data in a high-dimensional space. You can use it to maximize the margin between classes to minimize classification errors.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of the [!DNL Linear Support Vector Classifier (LinearSVC)].

| Parameter                | Description                                                                                                                                                                                      | Default value | Possible Values                                                                                     |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------|
| `MAX_ITER`               | The maximum number of iterations for the algorithm to run.                                                                                                                                       | 100           | (>= 0)                                                                                                |
| `AGGREGATION_DEPTH`      | The depth for tree aggregation. This parameter is used to reduce network communication overhead.                                                                                                 | 2             | Any positive integer                                                                                  |
| `FIT_INTERCEPT`          | Whether to fit an intercept term.                                                                                                                                                                | `true`        | `true`, `false`                                                                                       |
| `TOL`                    | This parameter determines the threshold to stop iterations.                                                                                                                                      | 1E-6          | (>= 0)                                                                                                |
| `MAX_BLOCK_SIZE_IN_MB`   | The maximum memory in MB for stacking input data into blocks. If the parameter is set to `0`, the optimal value is automatically chosen (usually around 1 MB).                                   | 0.0           | (>= 0)                                                                                                |
| `REG_PARAM`              | The regularization parameter, which helps control model complexity and prevent overfitting.                                                                                                      | 0.0           | (>= 0)                                                                                                |
| `STANDARDIZATION`        | This parameter indicates whether to standardize the training features before fitting the model.                                                                                                  | `true`        | `true`, `false`                                                                                       |
| `PREDICTION_COL`         | The column name for prediction output.                                                                                                                                                           | "prediction"  | Any String                                                                                            |
| `RAW_PREDICTION_COL`     | The column name for raw prediction values (also known as confidence).                                                                                                                            | "rawPrediction" | Any String                                                                                           |
| `ONE_VS_REST`            | Enables or disables wrapping this algorithm with One-vs-Rest for multiclass classification.                                                                                                      | `false`       | `true`, `false`                                                                                       |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'linear_svc_classifier'
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Logistic Regression] {#logistic-regression}

[!DNL Logistic Regression] is a supervised algorithm used for binary classification tasks. It models the probability that an instance belongs to a class using the logistic function and assigns the instance to the class with the higher probability. This makes it suitable for problems where the goal is to separate data into one of two categories.

**Parameters**

The table below outlines key parameters for configuring and optimizing the performance of [!DNL Logistic Regression].

| Parameter            | Description                                                                                                                                                               | Default value    | Possible Values|
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|----------------|
| `MAX_ITER`           | The maximum number of iterations the algorithm runs.                                                                                                                      | 100              | (>= 0)         |
| `REGPARAM`           | The regularization parameter is used to control the complexity of the model.                                                                                              | 0.0              | (>= 0)         |
| `ELASTICNETPARAM`    | The `ElasticNet` mixing parameter controls the balance between L1 (Lasso) and L2 (Ridge) penalties. A value of 0 applies an L2 penalty (Ridge, which reduces the size of coefficients), while a value of 1 applies an L1 penalty (Lasso, which encourages sparsity by setting some coefficients to zero). | 0.0 | (>= 0, <= 1)   |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'logistic_reg'
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Multilayer Perceptron Classifier] {#multilayer-perceptron-classifier}

The [!DNL Multilayer Perceptron Classifier] (MLPC) is a feedforward artificial neural network classifier. It consists of multiple fully connected layers of nodes, where each node applies a weighted linear combination of inputs, followed by an activation function. MLPC is used for complex classification tasks requiring non-linear decision boundaries.

**Parameters**

| Parameter             | Description                                                                                                                                                               | Default value  | Possible Values                          |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|------------------------------------------|
| `MAX_ITER`            | The maximum number of iterations for the algorithm to run.                                                                                                                | 100            | (>= 0)                                   |
| `BLOCK_SIZE`          | The block size for stacking input data in matrices within partitions. If the block size exceeds the remaining data in a partition, it is adjusted accordingly.                | 128            | (>= 0)                                   |
| `STEP_SIZE`           | The step size used for each iteration of optimization (applicable only for solver `gd`).                                                                                  | 0.03           | (> 0)                                    |
| `TOL`                 | The convergence tolerance for optimization.                                                                                                                               | `1E-6`         | (>= 0)                                   |
| `PREDICTION_COL`      | The column name for prediction output.                                                                                                                                    | "prediction"   | Any string                               |
| `SEED`                | The random seed for controlling random processes in the algorithm.                                                                                                        | NOT SET        | Any 64-bit number                        |
| `PROBABILITY_COL`     | The column name for predicted class conditional probabilities. These should be treated as confidence scores rather than exact probabilities.                              | "probability"  | Any string                               |
| `RAW_PREDICTION_COL`  | The column name for raw prediction values (also known as confidence).                                                                                                     | "rawPrediction"| Any string                               |
| `ONE_VS_REST`         | Enables or disables wrapping this algorithm with One-vs-Rest for multiclass classification.                                                                               | `false`        | `true`, `false`                          |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'multilayer_perceptron_classifier'
) AS
  select col1, col2, col3 from training-dataset
```

## [!DNL Naive Bayes Classifier] {#naive-bayes-classifier}

[!DNL Naive Bayes Classifier] is a simple probabilistic, multiclass classifier based on Bayes' theorem with strong (naive) independence assumptions between features. It trains efficiently by computing conditional probabilities in a single pass over the training data to compute the conditional probability distribution of each feature given each label. For predictions, it uses Bayes' theorem to compute the conditional probability distribution of each label given an observation.

**Parameters**

| Parameter              | Description                                                                                                                                                                                                                      | Default value  | Possible Values                                |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|------------------------------------------------|
| `MODEL_TYPE`           | Specifies the model type. Supported options are `"multinomial"`, `"complement"`, `"bernoulli"`, and `"gaussian"`. Model type is case-sensitive.                                                                                  | "multinomial"  | `"multinomial"`, `"complement"`, `"bernoulli"`, `"gaussian"` |
| `SMOOTHING`            | The smoothing parameter is used to handle zero-frequency problems in categorical data.                                                                                                                                           | 1.0            | (>= 0)                                         |
| `PROBABILITY_COL`      | This parameter specifies the column name for predicted class conditional probabilities. Note: not all models provide well-calibrated probability estimates; treat these values as confidences rather than precise probabilities. | "probability"  | Any string                                     |
| `WEIGHT_COL`           | The column name for instance weights. If not set or empty, all instance weights are treated as `1.0`.                                                                                                                             | NOT SET        | Any string                                     |
| `PREDICTION_COL`       | The column name for prediction output.                                                                                                                                                                                           | "prediction"   | Any string                                     |
| `RAW_PREDICTION_COL`   | The column name for raw prediction values (also known as confidence).                                                                                                                                                           | "rawPrediction"| Any string                                     |
| `ONE_VS_REST`          | Specifies whether to enable One-vs-Rest for multiclass classification.                                                                                                                                                           | `false`        | `true`, `false`                                |

{style="table-layout:auto"}

**Example**

```sql
CREATE MODEL modelname OPTIONS(
  type = 'naive_bayes_classifier'
) AS
  SELECT col1, col2, col3 FROM training-dataset
```

## [!DNL Random Forest Classifier] {#random-forest-classifier}

[!DNL Random Forest Classifier] is an ensemble learning algorithm that builds multiple decision trees during training. It mitigates overfitting by averaging predictions and selecting the class chosen by the majority of trees for classification tasks.

**Parameters**

| Parameter                    | Description                                                                                                                                                                                                  | Default value   | Possible Values                                                                                      |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------|
| `MAX_BINS`                    | The maximum number of bins determines how continuous features are divided into discrete intervals. This affects how features are split at each decision tree node. More bins provide higher granularity.    | 32              | Must be at least 2 and equal to or greater than the number of categories in any categorical feature.  |
| `CACHE_NODE_IDS`              | If `false`, the algorithm passes trees to executors to match instances with nodes. If `true`, the algorithm caches node IDs for each instance, speeding up training.                                        | `false`         | `true`, `false`                                                                                      |
| `CHECKPOINT_INTERVAL`         | Specifies how often to checkpoint the cached node IDs. For example, `10` means that the cache is checkpointed every 10 iterations.                                                                          | 10              | (>= 1)                                                                                                |
| `IMPURITY`                    | The criterion used for information gain calculation (case-insensitive).                                                                                                                                     | "gini"          | `entropy`, `gini`                                                                                     |
| `MAX_DEPTH`                   | The maximum depth of the tree (non-negative). For example, depth `0` means 1 leaf node, and depth `1` means 1 internal node and 2 leaf nodes.                                                               | 5               | (>= 0)                                                                                                |
| `MIN_INFO_GAIN`               | The minimum information gain required for a split to be considered at a tree node.                                                                                                                          | 0.0             | (>= 0.0)                                                                                             |
| `MIN_WEIGHT_FRACTION_PER_NODE` | The minimum fraction of the weighted sample count that each child must have after a split. If a split causes the fraction of the total weight in either child to be less than this value, it is discarded. | 0.0             | (>= 0.0, <= 0.5)                                                                                     |
| `MIN_INSTANCES_PER_NODE`      | The minimum number of instances each child must have after a split. If a split results in fewer instances than this value, the split is discarded.                                                          | 1               | (>= 1)                                                                                                |
| `MAX_MEMORY_IN_MB`            | The maximum memory, in MB, allocated to histogram aggregation. If this value is too small, only 1 node is split per iteration, and its aggregates may exceed this size.                                     | 256             |  (>= 1)                                                                                               |
| `PREDICTION_COL`              | The column name for prediction output.                                                                                                                                                                      | "prediction"    | Any string                                                                                            |
| `WEIGHT_COL`                  | The column name, for instance,  weights. If not set or empty, all instance weights are treated as `1.0`.                                                                                                    | NOT SET         | Any valid column name or empty                                                                         |
| `SEED`                        | The random seed used for controlling random processes in the algorithm.                                                                                                                                     | -1689246527     | Any 64-bit number                                                                                     |
| `BOOTSTRAP`                   | Whether bootstrap samples are used when building trees.                                                                                                                                                     | `true`          | `true`, `false`                                                                                      |
| `NUM_TREES`                   | The number of trees to train. If `1`, then no bootstrapping is used. If greater than `1`, bootstrapping is applied.                                                                                         | 20              | (>= 1)                                                                                                |
| `SUBSAMPLING_RATE`            | The fraction of the training data used for learning each decision tree.                                                                                                                                     | 1.0             | (> 0, <= 1)                                                                                           |
| `LEAF_COL`                    | The column name for the leaf indices, which contains the predicted leaf index of each instance in each tree by preorder.                                                                                    | ""              | Any string                                                                                            |
| `PROBABILITY_COL`             | The column name for predicted class conditional probabilities. These should be treated as confidence scores rather than exact probabilities.                                                                | NOT SET         | Any string                                                                                            |
| `RAW_PREDICTION_COL`          | The column name for raw prediction values (also known as confidence).                                                                                                                                       | "rawPrediction"         | Any string                                                                                            |
| `ONE_VS_REST`                 | Specifies whether to enable One-vs-Rest for multiclass classification.                                                                                                                                      | `false`         | `true`, `false`                                                                                       |

{style="table-layout:auto"}

**Example**

```sql
Create MODEL modelname OPTIONS(
  type = 'random_forest_classifier'
) AS
  select col1, col2, col3 from training-dataset
```

## Next steps

After reading this document, you now know how to configure and use various classification algorithms. Next, refer to the documents on [regression](./regression.md) and [clustering](./clustering.md) to learn about other types of advanced statistical models.
