---
title: Feature Transformation Techniques
description: Learn about essential preprocessing techniques like data transformation, encoding, and feature scaling, which prepare data for statistical model training. It covers the importance of handling missing values and converting categorical data to improve model performance and accuracy.
role: Developer
exl-id: ed7fa9b7-f74e-481b-afba-8690ce50c777
---
# Feature transformation techniques

Transformations are crucial preprocessing steps that convert or scale data into a format suitable for model training and analysis, ensuring optimal performance and accuracy. This document serves as a supplementary syntax resource, providing in-depth details on key feature transformation techniques for data preprocessing.

Machine learning models cannot directly process string values or null values, making data preprocessing essential. This guide explains how to use various transformations to impute missing values, convert categorical data into numerical formats, and apply feature scaling techniques such as one-hot encoding and vectorization. These methods enable models to interpret and learn effectively from the data, ultimately enhancing their performance.

## Automatic feature transformation {#automatic-transformations}

If you choose to skip the `TRANSFORM` clause in your `CREATE MODEL` command, feature transformation occurs automatically. Automatic data preprocessing includes null replacement and standard feature transformations (based on the datatype). Numeric and text columns are automatically imputed, then feature transformations are conducted to ensure that the data is in a suitable format for machine learning model training. This process includes missing data imputation and categorical, numeric, and boolean transformations.

>[!IMPORTANT]
>
>The feature transformation used at the time of training will also be used for feature transformation at the time of prediction and evaluation.

The following tables explain how different data types are handled when the `TRANSFORM` clause is omitted during the `CREATE MODEL` command. 

### Null replacement {#automatic-null-replacement}

| Data Type       | Null Replacement                                    |
|-----------------|-----------------------------------------------------|
| Numeric         | Nulls are replaced with the mean value of the column. |
| Categorical     | Nulls are replaced with the `ml_unknown` keyword.      |
| Boolean         | Nulls are replaced with a `FALSE` value.              |
| Timestamp       | This is expected to be a continuous field.            |
| Nested/STRUCT   | The replacement depends on the datatype of the leaf node.|

### Feature transformation {#automatic-feature-transformation}

| Data Type       | Feature Transformation                              |
|-----------------|-----------------------------------------------------|
| Numeric         | NOT REQUIRED - As this data type is understood by machine learning algorithms. |
| String          | String indexing occurs.                                                        |
| Boolean         | String indexing occurs.                                                        |
| Timestamp       | No operation occurs.                                                           |
| STRUCT          | The value is expanded to its leaf node. Transformation occurs based on the datatype of the leaf node. |

**example**

```sql
CREATE model modelname options(model_type='logistic_reg', label='rating') AS SELECT * FROM movie_rating;
```

## Manual feature transformations {#manual-transformations}

To define custom data preprocessing in your `CREATE MODEL` statement, use the `TRANSFORM` clause in combination with any number of the available transformation functions. These manual preprocessing functions can also be used outside of the `TRANSFORM` clause. All the transformations discussed in the [transformer section below](#available-transformations), can be used to preprocess the data manually.

### Key characteristics {#key-characteristics}

The following are key characteristics of feature transformation to consider when you define your preprocessing functions:

- **Syntax**: `TRANSFORM(functionName(colName, parameters) <aliasNAME>)`
  - The alias name is mandatory in the syntax. You must provide an alias name or the query will fail.

- **Parameters**: The parameters are positional arguments. This means that each parameter can only take certain values and require all preceding parameters to be specified if custom values are provided. Refer to the relevant documentation for details on which function takes what argument.

- **Chaining transformers**: The output of one transformer can become the input to another transformer.

- **Feature usage**: The last feature transformation is used as a feature of the machine learning model.

**Example**

```sql
CREATE MODEL modelname 
TRANSFORM(
  string_imputer(language, 'adding_null') AS imp_language, 
  numeric_imputer(users_count, 'mode') AS imp_users_count, 
  string_indexer(imp_language) AS si_lang,  
  vector_assembler(array(imp_users_count, si_lang, watch_minutes)) AS features
)  
OPTIONS(MODEL_TYPE='logistic_reg', LABEL='rating') 
AS SELECT * FROM df;
```

## Available transformations {#available-transformations}

There are 19 available transformations. These transformations are split into [General transformations](#general-transformations), [Numeric transformations](#numeric-transformations), [Categorical transformations](#categorical-transformations), and [Textual transformations](#textual-transformations). 

### General transformations {#general-transformations}

Read this section for details on the transformers used for a wide range of data types. This information is essential if you need to apply transformations that aren't specific to categorical or textual data.

>[!NOTE]
>
>The input datatype refers to the column on which the imputation is applied. The output datatype refers to the column which is produced as an output after the transformation has taken effect.

#### Numeric imputer {#numeric-imputer}

The **Numeric imputer** transformer completes missing values in a dataset. This uses either the mean, median, or mode of the columns in which the missing values are located. The input columns should be either `DoubleType` or `FloatType`. More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#imputer). 

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

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| `STRATEGY` | An imputation strategy. The available values are: [`mean`, `median`, `mode`]. |  string |  mean | optional |

{style="table-layout:auto"}

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

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| `NULL_REPLACEMENT` | The value that replaces nulls. |  string |  ml_unknown | optional |

{style="table-layout:auto"}

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

#### Boolean imputer {#boolean-imputer}

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

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| `NULL_REPLACEMENT` | Boolean imputer. Allowed values: [`true`, `false`]. |  boolean |  false | optional |

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

#### Vector assembler {#vector-assembler}

The `VectorAssembler` transformer combines a specified list of input columns into a single vector column, making it easier to manage multiple features in machine learning models. This is particularly useful for merging raw features and those generated by different feature transformers into one unified feature vector. `VectorAssembler` accepts input columns of numeric, boolean, and vector types. In each row, the values of the input columns are concatenated into a vector in the specified order.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#vectorassembler) -->

**Data types**

- Input datatype: `array[string]` (column names with numeric/array[numeric] values)
- Output datatype: `Vector[double]`

**Definition**

```sql
transform(vector_assembler(id, hour, mobile, userFeatures) as features)
```

**Parameters**

|Parameter |  Description |  Type |  Default | Optional |
| -------- | ------------ | ----- | -------- | -------- |
| NA       |  No additional parameters are required for this transformer. |  NA    |  NA     | NA       |

{style="table-layout:auto"}

**Example before transformation**

|id |  hour | mobile | userFeatures     | clicked |
|---|-------|--------|------------------|---------|
|0  |  18   | 1.0    | [0.0, 10.0, 0.5] | 1.0     |

{style="table-layout:auto"}

**Example after transformation**

|id | hour | mobile | userFeatures     | clicked | features                      |
|---|------|--------|------------------|---------|-------------------------------|
|0  | 18   | 1.0    | [0.0, 10.0, 0.5] | 1.0     | [18.0, 1.0, 0.0, 10.0, 0.5]   |

{style="table-layout:auto"}

### Numeric transformations {#numeric-transformations}

Read this section to learn about the available transformers for processing and scaling numerical data. These transformers are necessary to handle and optimize numeric features in your datasets.

#### Binarizer {#binarizer}

The `Binarizer` transformer converts numerical features into binary (0/1) features through a process called binarization. Feature values greater than the specified threshold are converted to 1.0, while values equal to or less than the threshold are converted to 0.0. The `Binarizer` supports both `Vector` and `Double` types for the input column. 

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#binarizer). -->

**Data types**

- Input datatype: Numeric column
- Output datatype: Numeric

**Definition**

```sql
transform(numeric_imputer(rating, 'mode') rating_imp, binarizer(rating_imp) rating_binarizer)
```

**Parameters**

|Parameter   |  Description                                                                                             |  Type    |  Default | Optional |
|------------|----------------------------------------------------------------------------------------------------------|----------|----------|----------|
| `THRESHOLD`| Param for the threshold used to binarize continuous features. Features greater than the threshold are binarized to 1.0, while features equal to or less than the threshold are binarized to 0.0. | int/double | 0.0      | optional |

{style="table-layout:auto"}

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

{style="table-layout:auto"}

**Examples of splits**

- Array(Double.NegativeInfinity, 0.0, 1.0, Double.PositiveInfinity)
- Array(0.0, 1.0, 2.0)

Splits should cover the entire range of Double values; otherwise, values outside the specified splits will be treated as errors. 

**Example transformation**

This example takes a column of continuous features (`course_duration`), bins it according to the provided `splits`, and then assembles the resulting buckets with other features.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```

#### MinMaxScaler {#minmaxscaler}

The `MinMaxScaler` transformer rescales each feature in a dataset of vector rows to a specified range, typically [0, 1]. This ensures that all features contribute equally to the model. It is particularly useful for models sensitive to feature scaling, such as gradient descent-based algorithms. The `MinMaxScaler` operates on the following parameters:

- **min**: The lower bound of the transformation, shared by all features. Default is `0.0`.
- **max**: The upper bound of the transformation, shared by all features. Default is `1.0`.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#minmaxscaler).  -->

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

**Example transformation**

This example transforms a set of features, rescaling them to the specified range using MinMaxScaler after applying several other transformations.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```

#### MaxAbsScaler {#maxabsscaler}

The `MaxAbsScaler` transformer rescales each feature in a dataset of vector rows to the range [-1, 1] by dividing by the maximum absolute value of each feature. This transformation is ideal for preserving sparsity in datasets with both positive and negative values, as it does not shift or center the data. This makes the `MaxAbsScaler` particularly suitable for models that are sensitive to the scale of input features, such as those involving distance calculations.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#maxabsscaler). -->

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

**Example transformation**

This example applies several transformations, including `MaxAbsScaler`, to rescale features into the range [-1, 1].

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling)
```

#### Normalizer {#normalizer}

The `Normalizer` is a transformer that normalizes each vector in a dataset of vector rows to have a unit norm. This process ensures a consistent scale without altering the direction of the vectors. This transformation is particularly useful in machine learning models that rely on distance measures or other vector-based calculations, especially when the magnitude of vectors varies significantly.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#normalizer) -->

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

**Example transformation**

This example demonstrates how to apply several transformations, including the `Normalizer`, to normalize a set of features using the specified `p-norm`.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, normalizer(vec_assembler, 3) as normalized)
```

#### QuantileDiscretizer {#quantilediscretizer}

The `QuantileDiscretizer` is a transformer that converts a column with continuous features into binned categorical features, with the number of bins determined by the `numBuckets` parameter. In some cases, the actual number of buckets may be smaller than that specified number if there are too few distinct values to create enough quantiles.

This transformation is particularly useful for simplifying the representation of continuous data or preparing it for algorithms that work better with categorical input.

**Data types**

- Input datatype: Numeric column
- Output datatype: Numeric column (categorical)

**Definition**

```sql
TRANSFORM(quantile_discretizer(hour, 3) as result)
```

**Parameters**

| Parameter    | Description                                                                                                              | Type    | Default | Optional |
|--------------|--------------------------------------------------------------------------------------------------------------------------|---------|---------|----------|
| `NUM_BUCKETS`| The number of buckets (quantiles, or categories) into which data points are grouped. This number must be greater than or equal to two.      | integer | 2       | optional |

**Example transformation**

This example demonstrates how the `QuantileDiscretizer` bins a column of continuous features (`hour`) into three categorical buckets.

```sql
TRANSFORM(quantile_discretizer(hour, 3) as result)
```

**Example before and after discretization**

|id | hour | result |
|---|------|--------|
|0  | 18.0 | 2.0    |
|1  | 19.0 | 2.0    |
|2  | 8.0  | 1.0    |
|3  | 5.0  | 1.0    |
|4  | 2.2  | 0.0    |

#### StandardScaler {#standardscaler}

The `StandardScaler` is a transformer that normalizes each feature in a dataset of vector rows to have a unit standard deviation and/or zero mean. This process makes the data more suitable for algorithms that assume features are centered around zero with a consistent scale. This transformation is particularly important for machine learning models like SVM, logistic regression, and neural networks, where unstandardized data could lead to convergence issues or reduced accuracy.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#standardscaler).  -->

**Data types**

- Input datatype: Vector
- Output datatype: Vector

**Definition**

```sql
TRANSFORM(standard_scaler(feature) as ss_features)
```

**Parameters**

| Parameter  | Description                                                                                          | Type    | Default | Optional |
|------------|------------------------------------------------------------------------------------------------------|---------|---------|----------|
| `withStd`  | Scales the data to have unit standard deviation.                                                      | boolean | True    | optional |
| `withMean` | Centers the data with the mean before scaling. This option produces dense output, so use caution with sparse input. | boolean | False   | optional |

**Example transformation**

This example demonstrates how to apply the StandardScaler to a set of features, normalizing them with unit standard deviation and zero mean.

```sql
TRANSFORM(standard_scaler(feature) as ss_features)
```

### Categorical transformations {#categorical-transformations}

Read this section for an overview of the available transformers designed to convert and preprocess categorical data for machine learning models. These transformations are designed for data points that represent distinct categories or labels, rather than numerical values.

#### StringIndexer {#stringindexer}

The `StringIndexer` is a transformer that encodes a string column of labels into a column of numeric indices. The indices range from 0 to `numLabels` and are ordered by label frequency (the most frequent label receives an index of 0). If the input column is numeric, it is cast to a string before indexing. Unseen labels can be assigned to the index `numLabels` if specified by the user.

This transformation is particularly useful for converting categorical string data into numeric form, making it suitable for machine learning models that require numerical input.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#stringindexer) -->

**Data types**

- Input datatype: String
- Output datatype: Numeric

**Definition**

```sql
TRANSFORM(string_indexer(category) as si_category)
```

**Parameters**

| Parameter | Description | Type | Default | Optional |
|-----------|-------------|------|---------|----------|
| NA        | `StringIndexer` does not require any additional parameters for its operation. | NA   | NA      | NA       |

**Example transformation**

This example demonstrates how to apply the `StringIndexer` to a categorical feature, converting it into a numeric index.

```sql
TRANSFORM(string_indexer(category) as si_category)
```

#### OneHotEncoder {#onehotencoder}

The `OneHotEncoder` is a transformer that converts a column of label indices into a column of sparse binary vectors, where each vector has at most a single one-value. This encoding is particularly useful for allowing algorithms that require numeric input, such as Logistic Regression, to incorporate categorical data effectively.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#onehotencoder).  -->

**Data types**

- Input datatype: Numeric
- Output datatype: Vector[Int]

**Definition**

```sql
TRANSFORM(string_indexer(category) as si_category, one_hot_encoder(si_category) as ohe_category)
```

**Parameters**

| Parameter | Description | Type | Default | Optional |
|-----------|-------------|------|---------|----------|
| NA        | OneHotEncoder does not require any additional parameters for its operation. | NA   | NA      | NA       |

**Example transformation**

This example demonstrates how to first apply the `StringIndexer` to a categorical feature and then use the `OneHotEncoder` to convert the indexed values into a binary vector.

```sql
TRANSFORM(string_indexer(category) as si_category, one_hot_encoder(si_category) as ohe_category)
```

### Textual transformations {#textual-transformations}

This section provides details on the transformers available for processing and converting text data into formats that can be used by machine learning models. This section is crucial for developers working with natural language data and text analysis.

#### CountVectorizer {#countvectorizer}

The `CountVectorizer` is a transformer that converts a collection of text documents into vectors of token counts, producing sparse representations based on the vocabulary extracted from the corpus. This transformation is essential for converting text data into a numeric format that can be used by machine learning algorithms, such as LDA (Latent Dirichlet Allocation), by representing the frequency of tokens within each document.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#countvectorizer). -->

**Data types**

- Input datatype: Array[String]
- Output datatype: Dense Vector

**Definition**

```sql
TRANSFORM(count_vectorizer(texts) as cv_output)
```

**Parameters**

| Parameter       | Description                                                                                                                                                                        | Type   | Default | Optional |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|---------|----------|
| `VOCAB_SIZE`    | Max size of the vocabulary. CountVectorizer builds a vocabulary that only considers the top `vocabSize` terms ordered by term frequency across the corpus.                       | Int    | 218     | optional |
| `MIN_DOC_FREQ`  | Specifies the minimum number of different documents that a term must appear in to be included in the vocabulary. Can be an absolute number or a fraction of documents (if a double).     | Double | 1.0     | optional |
| `MAX_DOC_FREQ`  | Specifies the maximum number of different documents that a term could appear in to be included in the vocabulary. Can be an absolute number or a fraction of documents (if a double).     | Double | (263)-1 | optional |
| `MIN_TERM_FREQ` | Filters out rare words in a document. Terms with frequency/count less than the given threshold are ignored. Can be an absolute number or a fraction of the document's token count.  | Double | 1.0     | optional |

{style="table-layout:auto"}

**Example transformation**

This example demonstrates how the CountVectorizer converts a collection of text arrays into vectors of token counts, producing a sparse representation.

```sql
TRANSFORM(count_vectorizer(texts) as cv_output)
```

**Example before and after vectorization**

| id | texts                           | cv_output                         |
|----|---------------------------------|-----------------------------------|
| 0  | Array("a", "b", "c")            | (3,[0,1,2],[1.0,1.0,1.0])         |
| 1  | Array("a", "b", "b", "c", "a")  | (3,[0,1,2],[2.0,2.0,1.0])         |

{style="table-layout:auto"}

#### NGram {#ngram}

The `NGram` is a transformer that generates a sequence of n-grams, where an n-gram is a sequence of ('𝑛') tokens (typically words) for some integer (`𝑛`). The output consists of space-delimited strings of '𝑛' consecutive words, which can be used as features in machine learning models, particularly those focused on natural language processing.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#n-gram). -->

**Data types**

- Input datatype: Array[String]
- Output datatype: Array[String]

**Definition**

```sql
TRANSFORM(tokenizer(review_comments) as token_comments, ngram(token_comments, 3) as n_tokens)
```

**Parameters**

| Parameter | Description                                                                                   | Type    | Default           | Optional |
|-----------|-----------------------------------------------------------------------------------------------|---------|-------------------|----------|
| `N`       | The minimum n-gram length, must be greater than or equal to 1.                                     | integer | 2 (bigram features) | optional |

{style="table-layout:auto"}

**Example transformation**

This example demonstrates how the NGram transformer creates a sequence of 3-grams from a list of tokens derived from text data.

```sql
TRANSFORM(tokenizer(review_comments) as token_comments, ngram(token_comments, 3) as n_tokens)
```

**Example before and after n-gram transformation**

| id | texts                                                 | n_tokens                                              |
|----|-------------------------------------------------------|-------------------------------------------------------|
| 0  | ["this", "was", "an", "entertaining", "movie"]        | ["this was an", "was an entertaining", "an entertaining movie"] |

{style="table-layout:auto"}

#### StopWordsRemover {#stopwordsremover}

The `StopWordsRemover` is a transformer that removes stop words from a sequence of strings, filtering out common words that don't carry significant meaning. It takes as input a sequence of strings (such as the output of a tokenizer) and removes all stop words specified by the `stopWords` parameter.

This transformation is useful for preprocessing text data, enhancing the effectiveness of downstream machine learning models by eliminating words that do not contribute much to the overall meaning.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#stopwordsremover) -->

**Data types**

- Input datatype: Array[String]
- Output datatype: Array[String]

**Definition**

```sql
TRANSFORM(stop_words_remover(raw) as filtered)
```

**Parameters**

| Parameter          | Description                                                                                      | Type          | Default                 | Optional |
|--------------------|--------------------------------------------------------------------------------------------------|---------------|-------------------------|----------|
| `stopWords`        | The words to be filtered out.                                                                    | array [string] | Default: English stop words | optional |

{style="table-layout:auto"}

<!-- Q) should this be the `CUSTOM_STOP_WORDS` parameter or the `stopWords` parameter?  -->

**Example transformation**

This example shows how the `StopWordsRemover` filters out common English stop words from a list of tokens.

```sql
TRANSFORM(stop_words_remover(raw) as filtered)
```

**Example before and after stop words removal**

| id | raw                          | filtered                 |
|----|------------------------------|--------------------------|
| 0  | [I, saw, the, red, balloon]    | [saw, red, balloon]       |
| 1  | [Mary, had, a, little, lamb]  | [Mary, little, lamb]     |

**Example with custom stop words**

This example demonstrates how to use a custom list of stop words to filter out specific words from the input sequences.

```sql
TRANSFORM(stop_words_remover(raw, array("red", "I", "had")) as filtered)
```

**Example before and after custom stop words removal**

| id | raw                          | filtered                 |
|----|------------------------------|--------------------------|
| 0  | [I, saw, the, red, balloon]    | [saw, the, balloon]       |
| 1  | [Mary, had, a, little, lamb]  | [Mary, a, little, lamb]  |

#### TF-IDF {#tf-idf}

The `TF-IDF` (Term Frequency-Inverse Document Frequency) is a transformer used to measure the importance of a word within a document relative to a corpus. Term frequency (TF) refers to the number of times a term \(t\) appears in a document \(d\), while document frequency (DF) measures how many documents in the corpus \(D\) contain the term \(t\). This method is widely used in text mining to reduce the influence of commonly occurring words, like "a", "the", and "of", that carry little unique information.

This transformation is particularly valuable in text mining and natural language processing tasks, as it assigns a numerical value to each word's importance within a document and across the entire corpus.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#tf-idf) -->

**Data types**

- Input datatype: Array[String]
- Output datatype: Vector[Int]

**Definition**

```sql
create table td_idf_model transform(tokenizer(sentence) as token_sentence, tf_idf(token_sentence) as tf_sentence, vector_assembler(array(tf_sentence)) as feature) OPTIONS()
```

**Parameters**

| Parameter       | Description                                                                            | Type | Default | Optional |
|-----------------|----------------------------------------------------------------------------------------|------|---------|----------|
| `NUM_FEATURES`  | The number of features to generate. Must be greater than 0.                             | Int  | 262144  | optional |
| `MIN_DOC_FREQ`  | The minimum number of documents in which a term must appear to be included in the model. | Int  | 0       | optional |

{style="table-layout:auto"}

**Example transformation**

This example demonstrates how to use TF-IDF to transform tokenized sentences into a feature vector that represents the importance of each term in the context of the entire corpus.

```sql
create table td_idf_model transform(tokenizer(sentence) as token_sentence, tf_idf(token_sentence) as tf_sentence, vector_assembler(array(tf_sentence)) as feature) OPTIONS()
```

#### Tokenizer {#tokenizer}

The `Tokenizer` is a transformer that breaks down text, such as a sentence, into individual terms, typically words. It converts sentences into arrays of tokens, providing a fundamental step in text preprocessing that prepares the data for further text analysis or modeling processes.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#tokenizer) -->

**Data types**

- Input datatype: Textual sentence
- Output datatype: Array[String]

**Definition**

```sql
create table td_idf_model transform(tokenizer(sentence) as token_sentence, tf_idf(token_sentence) as tf_sentence, vector_assembler(array(tf_sentence)) as feature) OPTIONS()
```

**Parameters**

| Parameter | Description | Type | Default | Optional |
|-----------|-------------|------|---------|----------|
| NA        | The `Tokenizer` does not require any additional parameters for its operation. | NA   | NA      | NA       |

**Example transformation**

This example demonstrates how the `Tokenizer` breaks down sentences into individual words (tokens) as part of a text processing pipeline.

```sql
create table td_idf_model transform(tokenizer(sentence) as token_sentence, tf_idf(token_sentence) as tf_sentence, vector_assembler(array(tf_sentence)) as feature) OPTIONS()
```

#### Word2Vec {#word2vec}

The `Word2Vec` is an estimator that processes sequences of words representing documents and trains a `Word2VecModel`. This model maps each word to a unique fixed-size vector and transforms each document into a vector by averaging the vectors of all words in the document. Widely used in natural language processing tasks, `Word2Vec` creates word embeddings that capture semantic meaning, converting text data into numerical vectors that represent the relationships between words and enabling more effective text analysis and machine learning models.

<!-- More information and examples can be found in the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#word2vec) -->

**Data types**

- Input datatype: Array[String]
- Output datatype: Vector[Double]

**Definition**

```sql
TRANSFORM(tokenizer(review) as tokenized, word2Vec(tokenized, 10, 1) as word2Vec)
```

**Parameters**

| Parameter    | Description                                                                                         | Type    | Default | Optional |
|--------------|-----------------------------------------------------------------------------------------------------|---------|---------|----------|
| `VECTOR_SIZE`| The dimension of the vector that each word is transformed into.                                      | Integer | 100     | optional |
| `MIN_COUNT`  | The minimum number of times a token must appear to be included in the `Word2Vec` model's vocabulary.   | Integer | 5       | optional |

{style="table-layout:auto"}

**Example transformation**

This example shows how `Word2Vec` converts a tokenized review into a fixed-size vector representing the average of the word vectors in the document.

```sql
TRANSFORM(tokenizer(review) as tokenized, word2Vec(tokenized, 10, 1) as word2Vec)
```

**Example before and after Word2Vec transformation**

| review                        | tokenized                           | word2Vec                        |
|-------------------------------|--------------------------------------|---------------------------------|
| this was an entertaining movie | [this, was, an, entertaining, movie] | [-0.025713888928294182,0.00818799751577899,0.0092235435731709,-0.01515385233797133,0.012175946310162545,3.1129065901041035E-4,0.0025145105042611252,0.005757019785232843,-0.021328244300093502,0.009335877187550069] |

{style="table-layout:auto"}
