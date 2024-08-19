---
title: Algorithms
description: PLACEHOLDER
role: Developer
---
# Algorithms

Machine learning algorithms are the core components that drive model creation and predictions. The combination of SQL with these algorithms provides a powerful tool for data manipulation and seamless model generation.

This document provides an overview of clustering algorithms available for generating models with SQL, along with guidance on how to implement clustering and transformations within SQL statements to streamline your machine learning workflows.

<!-- 
A "transformation" refers to the process of converting or scaling data into a format or structure that is more suitable for model training and analysis.
By converting or scaling data into a format or structure that is more suitable for model training and analysis you can improve model performance and accuracy by ensuring that the data aligns with the model's assumptions and optimizes its ability to learn patterns.
 -->

## Clustering algorithms

Clustering algorithms group data points into distinct clusters based on their similarities. In this section, we explore how clustering works, with a focus on K-Means, a popular clustering algorithm used for unsupervised learning tasks.

## Feature transformation techniques

Transformations are essential preprocessing steps that prepare data for modeling. Specifically, they convert raw data into features which can be used in the machine learning model. This section covers common transformation techniques like one-hot encoding and feature scaling, explaining their role in improving algorithm performance.

The machine learning model cannot accept string values or null values, so it's necessary to impute the null values. For example, if a numeric column contains an empty cell, that cell must be replaced with a suitable value. This value could be something logical, like the mean or median, or simply a placeholder number. If the column contains string values, they must also be converted to a numeric format through a process called imputation.

Machine learning models can only process numeric data. For instance, in a movie dataset with review comments, the model will not understand the text data directly. Transformations, such as encoding or vectorization, help convert English sentences into numeric arrays or numbers, enabling the machine learning model to interpret and learn from the data.

### Automatic feature transformation {#automatic-transformations}

Null replacement transformation is automatic if you do not specify speicify transformations.

### Manual feature transformations {#manual-transformations}

You can add any number of the available transformations to your SQL statement with the `transformation()` keyword.

## Available transformations 

There are 19 available transformations. These are split into [General transformations](#general-transformations), [Numeric transformations](#numeric-transformations), [Categorical transformations](#categorical-transformations), and [Textual transformations](#textual-transformations). 

### General transformations {#general-transformations}

<!-- Needs description ... -->
<!-- Below are the available general transforaions. General transformation do x ... -->

>[!NOTE]
>
>The input datatype refers to the column on which the imputation is applied. The output datatype refers the column which is produced as an output after the transformation has taken effect.

#### Numeric imputer {#numeric-imputer}

The **Numeric imputer** transformer completes missing values in a dataset. This uses either the mean, median, or mode of the columns in which the missing values are located. The input columns should be either `DoubleType` or `FloatType`. More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#imputer). 

>[!NOTE]
>
>All null values in input columns are treated as missing, and therefore also imputed.

**Data types**

- Input datatype: Numeric
- Output datatype: Numeric

**Definition**

```sql
transformer(numeric_imputer(hour, 'mean') hour_imputed)
```

**Example before imputation**

|id |  hour |
|---|---|
|0 |  18.0 |
|1 |  null |
|2 |  8.0 |

**Example after imputation (using mean strategy)**

|id | hour |
|---|---|
|0 |  18.0 |
|1 |  13.0 |
|2 |  8.0 |

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| `STRATEGY` | An imputation strategy. The available values are: [`mean`, `median`, `mode`]. |  string |  mean | optional |

#### String imputer {#string-imputer}

The **String imputer** transformer completes missing values in a dataset using a string provided by the user as a function argument. The input and output columns should be the `string` data type. 

>[!NOTE]
>
>All null values in input columns are treated as missing and are replaced by the specified string.

**Data types**

- Input datatype: String
- Output datatype: String

**Definition**

```sql
transform(string_imputer(name, 'unknown_name') as name_imputed)
```

**Example before imputation**

|id |  name |
|---|---|
|0 |  John |
|1 |  null |
|2 |  Alice |

**Example after imputation (using 'ml_unknown' as the replacement)**

|id | name |
|---|---|
|0 | John |
|1 | ml_unknown |
|2 | Alice |

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| `NULL_REPLACEMENT` | The value that will replace nulls. |  string |  ml_unknown | optional |

#### Boolean imputer {#imputer}

The **Boolean imputer** transformer completes missing values in a dataset for a boolean column. The input and output columns should be of `Boolean` type.

>[!NOTE]
>
>All null values in input columns are treated as missing and are replaced by the specified boolean value.

**Data types**

- Input datatype: Boolean
- Output datatype: Boolean

**Definition**

```sql
transform(boolean_imputer(name, true) as name_imputed)
```

**Example before imputation**

|id |  flag |
|---|---|
|0 |  true |
|1 |  null |
|2 |  false |

**Example after imputation (using 'true' as the replacement)**

|id | flag |
|---|---|
|0 | true |
|1 | true |
|2 | false |

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| `NULL_REPLACEMENT` | Boolean imputer. Allowed values: [`true`, `false`]. |  boolean |  false | optional |

#### Vector assembler {#vector-assembler}

<!-- Reword below and remove repetition ... -->
The `VectorAssembler` transformer combines a specified list of input columns into a single vector column. This is particularly useful for merging raw features and those generated by different feature transformers into one unified feature vector. `VectorAssembler` accepts input columns of the following types: all numeric types, boolean type, and vector type. In each row, the values of the input columns are concatenated into a vector in the specified order. Basically, all specified input columns are combined into a single output vector. This makes it easier to work with multiple features in machine learning models.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#vectorassembler)

**Data types**

- Input datatype: `array[string]` (column names with numeric/array[numeric] values)
- Output datatype: `Vector[double]`

**Definition**

```sql
transform(vector_assembler(id, hour, mobile, userFeatures) as features)
```

**Example before transformation**

|id |  hour | mobile | userFeatures     | clicked |
|---|-------|--------|------------------|---------|
|0  |  18   | 1.0    | [0.0, 10.0, 0.5] | 1.0     |

**Example after transformation**

|id | hour | mobile | userFeatures     | clicked | features                      |
|---|------|--------|------------------|---------|-------------------------------|
|0  | 18   | 1.0    | [0.0, 10.0, 0.5] | 1.0     | [18.0, 1.0, 0.0, 10.0, 0.5]   |

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| NA       |  No additional parameters are required for this transformer. |  NA    |  NA     | NA       |


### Numeric transformations {#numeric-transformations}

<!-- Description needed ... -->

#### Binarizer {#binarizer}

The `Binarizer` transformer converts numerical features into binary (0/1) features through a process called binarization. Feature values greater than the specified threshold are converted to 1.0, while values equal to or less than the threshold are converted to 0.0. The `Binarizer` supports both Vector and Double types for the input column. 

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#binarizer).

**Data types**

- Input datatype: Numeric column
- Output datatype: Numeric

**Definition**

```sql
transform(numeric_imputer(rating, 'mode') rating_imp, binarizer(rating_imp) rating_binarizer)
```

**Example input before binarization**

|id |  rating |
|---|---------|
|0  | -18.0   |
|1  |  13.0   |
|2  |  8.0    |

**Example output after binarization (default threshold of 0.0)**

|id |  rating |
|---|---------|
|0  |  0.0    |
|1  |  1.0    |
|2  |  1.0    |

**Definition with custom threshold**

```sql
transform(numeric_imputer(age, 'mode') age_imp, binarizer(age_imp, 14.0) age_binarizer)
```

**Example output after binarization (with a threshold of 14.0)**

|id |  age  |
|---|-------|
|0  |  0.0  |
|1  |  0.0  |
|2  |  1.0  |

**Parameters**

|Parameter   |  Description                                                                                             |  Type    |  Default | Optional |
|------------|----------------------------------------------------------------------------------------------------------|----------|----------|----------|
| `THRESHOLD`| Param for the threshold used to binarize continuous features. Features greater than the threshold are binarized to 1.0, while features equal to or less than the threshold are binarized to 0.0. | int/double | 0.0      | optional |

#### Bucketizer {#bucketizer}

The `Bucketizer` transformer converts a column of continuous features into a column of feature buckets, based on user-specified thresholds. This process is useful for segmenting continuous data into discrete bins or buckets. The `Bucketizer` requires a `splits` parameter, which defines the boundaries of the buckets.

**Data types**

- Input datatype: Numeric column
- Output datatype: Numeric (binned values)

**Definition**

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```

**Parameters**

|Parameter |  Description                                                                                                                                                                                                 |  Type           |  Default | Optional |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------|----------|
| `splits` | A parameter for mapping continuous features into buckets. With `n+1` splits, there are `n` buckets. Splits must be in strictly increasing order, and the range (x,y) is used for each bucket except the last, which includes y. | array(double)   | N/A      | optional |

**Examples of splits**

- Array(Double.NegativeInfinity, 0.0, 1.0, Double.PositiveInfinity)
- Array(0.0, 1.0, 2.0)

Splits should cover the entire range of Double values; otherwise, values outside the specified splits will be treated as errors. 

**Example Transformation**

This example takes a column of continuous features (`course_duration`), bins it according to the provided `splits`, and then assembles the resulting buckets with other features.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```
<!--  -->
#### MinMaxScaler {#minmaxscaler}

The **MinMaxScaler** transformer rescales each feature in a dataset of Vector rows to a specified range, typically [0, 1]. This transformation is useful for normalizing data, ensuring that all features contribute equally to the model. The MinMaxScaler operates on the following parameters:

- **min**: The lower bound of the transformation, shared by all features. Default is `0.0`.
- **max**: The upper bound of the transformation, shared by all features. Default is `1.0`.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#minmaxscaler). 

**Data types**

- Input datatype: `Array[Double]`
- Output datatype: `Array[Double]`

**Definition**

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```

**Parameters**

| Parameter | Description                                                                                      | Type | Default | Optional |
|-----------|--------------------------------------------------------------------------------------------------|------|---------|----------|
| `min`     | Lower bound after transformation, shared by all features.                                        | double | 0.0     | optional |
| `max`     | Upper bound after transformation, shared by all features.                                        | double | 1.0     | optional |

This transformation rescales the input data into a normalized range, which is particularly useful in models that are sensitive to feature scaling, such as gradient descent-based algorithms.

**Example Transformation**

This example transforms a set of features, rescaling them to the specified range using MinMaxScaler after applying several other transformations.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```

#### MaxAbsScaler {#maxabsscaler}

<!-- Reword below and remove repetition ... -->
The `MaxAbsScaler` transformer rescales each feature in a dataset of Vector rows to the range [-1, 1] by dividing by the maximum absolute value of each feature. This transformation is particularly useful for data that contains both positive and negative values and is ideal for preserving sparsity in datasets since it does not shift or center the data.

This transformation ensures that each feature is rescaled without altering the sparsity of the dataset, making it suitable for models sensitive to the scale of input features, such as those involving distance calculations.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#maxabsscaler).

**Data types**

- Input datatype: `Array[Double]`
- Output datatype: `Array[Double]`

**Definition**

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling)
```

**Parameters**

| Parameter | Description                                                                                             | Type | Default | Optional |
|-----------|---------------------------------------------------------------------------------------------------------|------|---------|----------|
| NA        | MaxAbsScaler does not require any additional parameters for its operation.                              | NA   | NA      | NA       |

**Example Transformation**

This example applies several transformations, including `MaxAbsScaler`, to rescale features into the range [-1, 1].

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling)
```

#### Normalizer {#normalizer}

The `Normalizer` is a `Transformer` that normalizes each `Vector` in a dataset of `Vector` rows to have a unit norm. This transformation is useful for scaling the input vectors without changing their direction, making it particularly relevant in tasks where the magnitude of vectors may vary significantly.

This transformation ensures that all input vectors have a consistent scale, which is particularly useful in machine learning models that rely on distance measures or other vector-based calculations.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#normalizer)

**Data types**

- Input datatype: `array[double]` / `vector[double]`
- Output datatype: `vector[double]`

**Definition**

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, normalizer(vec_assembler, 3) as normalized)
```

**Parameters**

| Parameter | Description                                                                            | Type    | Default | Optional |
|-----------|----------------------------------------------------------------------------------------|---------|---------|----------|
| `p`       | Specifies the `p-norm` used for normalization (for example, `1-norm`, `2-norm`, etc.). | integer | 2       | optional |

**Example Transformation**

This example demonstrates how to apply several transformations, including the `Normalizer`, to normalize a set of features using the specified `p-norm`.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, normalizer(vec_assembler, 3) as normalized)
```

<!--  -->

<!-- done UP to here -->
### Categorical transformations {#categorical-transformations}


### Textual transformations {#textual-transformations}
