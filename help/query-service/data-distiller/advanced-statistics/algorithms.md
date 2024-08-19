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

Below are the available general transforaions. General transformation do x ...

>[!NOTE]
>
>The input datatype refers to the column on which the imputation is applied. The output datatype refers the column which is produced as an output.

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

### Numeric transformations {#numeric-transformations}


### Categorical transformations {#categorical-transformations}


### Textual transformations {#textual-transformations}
