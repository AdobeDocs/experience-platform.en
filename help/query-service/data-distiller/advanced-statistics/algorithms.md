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

If you do not have good machine learning knowledge, you can skip the `TRANSFORM` clause in your `CREATE MODEL` command in favour of automatic feature transformation. If you do not include the `TRANSFORM` clause in your SQL statement, your data is automatically preprocessed. Null replacement and standard feature transformations, based on the datatype, occur. This automatic preprocessing imputes numeric and text columns followed by feature transformations into a format that can be used by machine learning model for training. This includes missing data imputation and categorical, numeric, and boolean transformations as part of this process.

The following tables explain how different data types are handled when the `TRANSFORM` clause is omitted during the `CREATE MODEL` command. 

#### Null replacement

| Data Type       | Null Replacement                                    |
|-----------------|-----------------------------------------------------|
| Numeric         | Nulls are replaced with the mean value of the column. |
| Categorical     | Nulls are replaced with the `ml_unknown` keyword      |
| Boolean         | Nulls are replaced with a `FALSE` value.              |
| Timestamp       | This is expected to be a continuous field.            |
| Nested/STRUCT   | The replacement depends on the datatype of the leaf node.|

#### Feature transformation

| Data Type       | Feature Transformation                              |
|-----------------|-----------------------------------------------------|
| Numeric         | NOT REQUIRED - As this data type is understood by machine learning algorithms. |
| String          | String indexing occurs.                                                        |
| Boolean         | String indexing occurs.                                                        |
| Timestamp       | No operation occurs.                                                           |
| STRUCT          | The value is expanded to its leaf node. Transformation occurs based on the datatype of the leaf node. |

**example**

```sql
Create model modelname OPTIONS(MODEL_TYPE='logistic_reg', LABEL='rating') as select * from movie_rating
```

<!-- The feature transformation used to time of training will be utilised for feature transformation at the time prediction and evaluation. -->

### Manual feature transformations {#manual-transformations}

You can add any number of the available transformations to your SQL statement with the `transformation()` keyword.

## Available transformations 

There are 19 available transformations. These are split into [General transformations](#general-transformations), [Numeric transformations](#numeric-transformations), [Categorical transformations](#categorical-transformations), and [Textual transformations](#textual-transformations). 

### General transformations {#general-transformations}

This section provides details on transformers used for a wide range of data types. This information is essential if you need to apply transformations that aren't specific to categorical or textual data.

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

This section covers the available transformers for processing and scaling numerical data. These transformers are necessary to handle and optimize numeric features in your datasets.

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

**Example transformation**

This example takes a column of continuous features (`course_duration`), bins it according to the provided `splits`, and then assembles the resulting buckets with other features.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling, min_max_scaler(maxScaling) as features)
```

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

**Example transformation**

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

**Example transformation**

This example applies several transformations, including `MaxAbsScaler`, to rescale features into the range [-1, 1].

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, max_abs_scaler(vec_assembler) as maxScaling)
```

#### Normalizer {#normalizer}

The `Normalizer` is a transformer that normalizes each vector in a dataset of vector rows to have a unit norm. This transformation is useful for scaling the input vectors without changing their direction, making it particularly relevant in tasks where the magnitude of vectors may vary significantly.

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

**Example transformation**

This example demonstrates how to apply several transformations, including the `Normalizer`, to normalize a set of features using the specified `p-norm`.

```sql
TRANSFORM(binarizer(time_spent, 5.0) as binary, bucketizer(course_duration, array(-440.5, 0.0, 150.0, 1000.7)) as buck_features, vector_assembler(array(buck_features, users_count, binary)) as vec_assembler, normalizer(vec_assembler, 3) as normalized)
```

#### QuantileDiscretizer {#quantilediscretizer}

The `QuantileDiscretizer` is a transformer that takes a column with continuous features and outputs a column with binned categorical features. The number of bins is determined by the `numBuckets` parameter. Note that in some cases, the actual number of buckets used may be smaller than the specified value if there are too few distinct values in the input to create enough distinct quantiles.

This transformation is useful for converting continuous features into discrete categories, which can be particularly helpful in scenarios where you want to simplify the representation of continuous data or prepare it for algorithms that work better with categorical input.

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

The `StandardScaler` is a transformer that normalizes each feature in a dataset of vector rows so that they have a unit standard deviation and/or zero mean. This transformation is commonly used in machine learning pipelines to standardize the features, making them more suitable for certain algorithms that assume data to be centered around zero with a consistent scale.

This transformation ensures that features are standardized, which is particularly important for algorithms like SVM, logistic regression, and neural networks, where unstandardized data might lead to convergence issues or less accurate models.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#standardscaler). 

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
| `withMean` | Centers the data with the mean before scaling. This option will produce dense output, so use caution with sparse input. | boolean | False   | optional |

**Example transformation**

This example demonstrates how to apply the StandardScaler to a set of features, normalizing them with unit standard deviation and zero mean.

```sql
TRANSFORM(standard_scaler(feature) as ss_features)
```

### Categorical transformations {#categorical-transformations}

This section provides an overview of the available transformers designed to convert and preprocess categorical data for machine learning models. These transformations are designed for data points that represent distinct categories or labels, rather than numerical values.

#### StringIndexer {#stringindexer}

The `StringIndexer` is a transformer that encodes a string column of labels into a column of label indices. The indices are in the range (0, numLabels), ordered by label frequency, with the most frequent label assigned an index of 0. If the input column is numeric, it will be cast to a string and then indexed. Unseen labels can be assigned to index `numLabels` if the user chooses to keep them.

This transformation is useful for converting categorical string data into numeric indices, which are more suitable for machine learning models that require numerical input.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#stringindexer)

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

The **OneHotEncoder** is a transformer that maps a column of label indices to a column of binary vectors, where each vector has at most a single one-value. This encoding is particularly useful for allowing algorithms that expect continuous features, such as Logistic Regression, to incorporate categorical data.

This transformation enables the use of categorical data in models that require numeric input by converting label indices into a sparse binary vector format.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#onehotencoder). 

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

The `CountVectorizer` is a transformer that converts a collection of text documents into vectors of token counts. This transformation produces sparse representations of the documents based on the vocabulary extracted from the corpus, which can then be passed to other algorithms such as LDA (Latent Dirichlet Allocation).

This transformation is essential for converting text data into a format that can be used by machine learning algorithms, particularly those that require numeric input, by representing the frequency of tokens (words) within each document.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#countvectorizer).

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
| `VOCAB_SIZE`    | Max size of the vocabulary. CountVectorizer will build a vocabulary that only considers the top `vocabSize` terms ordered by term frequency across the corpus.                       | Int    | 218     | optional |
| `MIN_DOC_FREQ`  | Specifies the minimum number of different documents a term must appear in to be included in the vocabulary. Can be an absolute number or a fraction of documents (if a double).     | Double | 1.0     | optional |
| `MAX_DOC_FREQ`  | Specifies the maximum number of different documents a term could appear in to be included in the vocabulary. Can be an absolute number or a fraction of documents (if a double).     | Double | (263)-1 | optional |
| `MIN_TERM_FREQ` | Filters out rare words in a document. Terms with frequency/count less than the given threshold are ignored. Can be an absolute number or a fraction of the document's token count.  | Double | 1.0     | optional |

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

#### NGram {#ngram}

The `NGram` is a transformer that generates a sequence of n-grams, where an n-gram is a sequence of \(n\) tokens (typically words) for some integer \(n\). The `NGram` class can be used to transform input features into n-grams, with the output consisting of a sequence of n-grams where each n-gram is represented by a space-delimited string of \(n\) consecutive words.

This transformation is useful for extracting sequences of words (n-grams) from text data, which can then be used as features in machine learning models, particularly those focused on natural language processing.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#n-gram).
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
| `N`       | Minimum n-gram length, must be greater than or equal to 1.                                     | integer | 2 (bigram features) | optional |

**Example transformation**

This example demonstrates how the NGram transformer creates a sequence of 3-grams from a list of tokens derived from text data.

```sql
TRANSFORM(tokenizer(review_comments) as token_comments, ngram(token_comments, 3) as n_tokens)
```

**Example before and after n-gram transformation**

| id | texts                                                 | n_tokens                                              |
|----|-------------------------------------------------------|-------------------------------------------------------|
| 0  | ["this", "was", "an", "entertaining", "movie"]        | ["this was an", "was an entertaining", "an entertaining movie"] |

#### StopWordsRemover {#stopwordsremover}

The `StopWordsRemover` is a transformer that removes stop words from a sequence of strings, typically because these words appear frequently and don't carry significant meaning. The `StopWordsRemover` takes as input a sequence of strings (for example, the output of a tokenizer) and filters out all stop words specified by the `stopWords` parameter.

This transformation is useful for preprocessing text data by removing common words that do not contribute much to the meaning, thereby improving the effectiveness of downstream machine learning models.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#stopwordsremover)

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
| `CUSTOM_STOP_WORDS`| The words to be filtered out.                                                                    | array[string] | Default: English stop words | optional |

**Example transformation**

This example shows how the `StopWordsRemover` filters out common English stop words from a list of tokens.

```sql
TRANSFORM(stop_words_remover(raw) as filtered)
```

**Example before and after stop words removal**

| id | raw                          | filtered                 |
|----|------------------------------|--------------------------|
| 0  | [I, saw, the, red, baloon]    | [saw, red, baloon]       |
| 1  | [Mary, had, a, little, lamb]  | [Mary, little, lamb]     |

**Example with custom stop words**

This example demonstrates how to use a custom list of stop words to filter out specific words from the input sequences.

```sql
TRANSFORM(stop_words_remover(raw, array("red", "I", "had")) as filtered)
```

**Example before and after custom stop words removal**

| id | raw                          | filtered                 |
|----|------------------------------|--------------------------|
| 0  | [I, saw, the, red, baloon]    | [saw, the, baloon]       |
| 1  | [Mary, had, a, little, lamb]  | [Mary, a, little, lamb]  |

#### TF-IDF {#tf-idf}

The `TF-IDF` (Term Frequency-Inverse Document Frequency) is a transformer that measures how important a word is to a document within a corpus. It is widely used in text mining to evaluate the significance of words. The term frequency (TF) refers to the number of times a term \(t\) appears in a document \(d\), while document frequency (DF) measures the number of documents in the corpus \(D\) that contain the term \(t\). TF-IDF helps mitigate the over-emphasis of commonly occurring words that carry little unique information, such as "a", "the", and "of".

This transformation is particularly useful for text mining and natural language processing tasks, as it assigns a numerical value to each word's importance in relation to a specific document and the entire corpus.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#tf-idf)

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

**Example transformation**

This example demonstrates how to use TF-IDF to transform tokenized sentences into a feature vector that represents the importance of each term in the context of the entire corpus.

```sql
create table td_idf_model transform(tokenizer(sentence) as token_sentence, tf_idf(token_sentence) as tf_sentence, vector_assembler(array(tf_sentence)) as feature) OPTIONS()
```

#### Tokenizer {#tokenizer}

The `Tokenizer` is a transformer that performs tokenization, the process of taking text (such as a sentence) and breaking it down into individual terms, usually words. The `Tokenizer` class provides this basic functionality, converting sentences into arrays of tokens (words).

This transformation is a fundamental step in text preprocessing, allowing sentences to be converted into arrays of words, which can then be used in further text analysis or modeling processes.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#tokenizer)

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

The `Word2Vec` is an estimator that processes sequences of words representing documents and trains a `Word2VecModel`. This model maps each word to a unique fixed-size vector, and transforms each document into a vector by averaging the vectors of all words in the document. `Word2Vec` is widely used in natural language processing tasks to create word embeddings that capture semantic meaning.

This transformation is valuable for converting text data into numerical vectors that capture the semantic relationships between words, enabling more effective text analysis and machine learning models.

More information and examples can be found on the [Spark algorithm documentation](https://spark.apache.org/docs/2.2.0/ml-features.html#word2vec)

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

**Example transformation**

This example shows how `Word2Vec` converts a tokenized review into a fixed-size vector representing the average of the word vectors in the document.

```sql
TRANSFORM(tokenizer(review) as tokenized, word2Vec(tokenized, 10, 1) as word2Vec)
```

**Example before and after Word2Vec transformation**

| review                        | tokenized                           | word2Vec                        |
|-------------------------------|--------------------------------------|---------------------------------|
| this was an entertaining movie | [this, was, an, entertaining, movie] | [-0.025713888928294182,0.00818799751577899,0.0092235435731709,-0.01515385233797133,0.012175946310162545,3.1129065901041035E-4,0.0025145105042611252,0.005757019785232843,-0.021328244300093502,0.009335877187550069] |

