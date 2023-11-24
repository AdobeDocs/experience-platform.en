---
title: Retrieve Similar Records Based on a Similarity Metric
description: Learn how to identify and retrieve similar or related records from one or more datasets based on a similarity metric.
---
# Compute similarity between sets of data

You can solve several common use cases through the use of Data Distiller Lambda functions to identify and retrieve similar or related records from one or more datasets. This methodology provides solutions to: data deduplication, record linkage, recommendation systems, information retrieval, and text analytics among others.

<!-- 
performing a similarity join operation using SQL
steps involved in computing similarity between sets of data, 
    Uses tokenization, Jaccard similarity computation, and Jaccard similarity computation
 -->

The document describes the process of implementing a similarity join then uses Data Distiller Lambda functions to compute the similarity between sets of data and filter them based on selected attributes. This guide provides SQL code snippets and explanations for each step of the process. The workflow implements similarity joins using the Jaccard similarity measure and tokenization using Data Distiller Lambda functions. These methods are then used to identify and retrieve similar or related records from one or more datasets based on a similarity metric. The key sections of the process include: [tokenization using Lambda functions](#tokenization), the [cross join and Jaccard similarity calculation](#cross-join-calculation), and the [threshold-based filtering](#threshold-filtering).

## Prerequisites

Before continuing with this document you should be familiar with the following concepts:

- A **similarity join** is an operation that identifies and retrieves pairs of records from one or more tables based on a measure of similarity between the records. The key requirements for a similarity join are as follows:
    - **Similarity metric**: A similarity join relies on a predefined similarity metric or measure, such as Jaccard similarity, cosine similarity, edit distance, and so on. The metric depends on the nature of the data and the use case. This metric quantifies how similar or dissimilar two records are.
    - **Threshold**: A similarity threshold is used to determine when the two records are considered similar enough to be included in the join result. Records with a similarity score above the threshold are considered matches.
- The **Jaccard similarity** index, or the Jaccard similarity measurement, is a statistic used to gauge the similarity and diversity of sample sets. It is is defined as the size of the intersection divided by the size of the union of the sample sets. The Jaccard similarity measurement ranges from 0 to 1. A Jaccard similarity of 0 indicates no similarity between the sets (completely dissimilar), and a Jaccard similarity of 1 indicates that the sets are identical (completely similar).
![A venn diagram to illustrate the Jackard similarity measurment.](../images/use-cases/jaccard-similarity.png)
- **Lambda functions** in Data Distiller are anonymous, inline functions that can be defined and used within SQL statements. They are frequently used in conjunction with higher-order functions due to their ability to create concise, on-the-fly functions that can be passed around as data. Lambda functions are often employed with higher-order functions like `transform`, `filter`, and `array_sort`. Lambda functions are especially useful in situations where defining a full function is unnecessary, and a brief, one-time function can be used inline.

## Getting started

The Data Distiller SKU is required to perform the Lambda functions on your Adobe Experience Platform data. If you do not have the Data Distiller SKU please contact your Adobe customer service representative for more information.


<!-- **Similarity Join Requirements**:

- Similarity Metric: A predefined metric like Jaccard similarity, cosine similarity, or edit distance.
- Threshold: A similarity threshold to determine when two records are considered similar.

**Jaccard Similarity Measure**:

Defined as the ratio of the size of the intersection of sets to the size of their union.
Popular due to its simplicity, effectiveness, and applicability to various data types.
The coefficient ranges from 0 (completely dissimilar) to 1 (completely similar). -->

## Placeholder title - Establish similarity {#establish-similarity}

This use case requires a similarity measurement between text strings as the measurement will be used later to establish a threshold for filtering. In this example, the products in Set A and Set B represent the words in two documents.  

The Jaccard similarity measure can be applied to a wide range of data types, including text data, categorical data, and binary data. It is also suitable for real-time or batch processing as it can be computationally efficient to calculate for large datasets.

Product Set A and Set B contain the test data for this workflow.

- Product Set A: `{iPhone, iPad, iWatch, iPad Mini}`
- Product Set B: `{iPhone, iPad, Macbook Pro}`

To calculate the Jaccard similarity between product sets A and B, first find the **intersection** (common elements) of the product sets. In this case, `{iPhone, iPad}`. Next, find the **union** (all unique elements) of both product sets. In this example, `{iPhone, iPad, iWatch, iPad Mini, Macbook Pro}`.

Finally, use the Jaccard similarity formula: `J(A,B) = A∪B / A∩B` to calculate the similarity. 

J = Jaccard distance
A = set 1
B = set 2

The Jaccard similarity between product sets A and B is 0.4. This indicates a moderate degree of similarity between the words used in the two documents. This similarity between the two sets will define the columns in the similarity join. These columns represent individual pieces of information, or characteristics, associated with the data stored in a table. 

### Pairwise Jaccard Computation with String Similarity {#pairwise-similarity}

To more accurately compare the similarities between strings, the pairwise similarity must be computed. Pairwise similarity splits highly dimensional objects into smaller dimensional objects for comparison and analysis. To do this, a string of text is broken into smaller parts or units (tokens). They could be individual letters, groups of letters (like syllables), or entire words. The similarity is calculated for each pair of tokens between each element in Set A with each element in Set B. This tokenization provides a foundation for analytical and computational comparisons, relationships, and insights to be drawn from the data.

For the pairwise similarity calculation, this example uses character bi-grams (two character tokens) to compare a similarity match between the text strings of the products in Set A and Set B. A bi-gram is a consecutive sequence of two items or elements in a given sequence or text. You can generalize this to n-grams. 

This example assumes that the case does not matter and that spaces should not be accounted for. According to these criteria, Set A and Set B have the following bi-grams:

Product Set A bi-grams:

- iPhone (5): "ip", "ph", "ho", "on", "ne"
- iPad (3): "ip", "pa", "ad"
- iWatch (5): "iw", "wa", "at", "tc", "ch"
- iPad Mini (7): "ip", "pa", "ad", "dm", "mi", "in", "ni"

Product Set B bi-grams:

- iPhone (5): "ip", "ph", "ho", "on", "ne"
- iPad (3): "ip", "pa", "ad"
- Macbook Pro (9): "Ma", "ac", "cb", "bo", "oo", "ok", "kp", "pr", "ro"

Next, calculate the Jaccard similarity coefficient for each pair:

|                   | iPhone (Set B)                               | iPad (Set B)                                | Macbook Pro (Set B)                       |
|-------------------|----------------------------------------------|---------------------------------------------|-------------------------------------------|
| iPhone (Set A)    | (Intersection: 5, Union: 5) = 5 / 5 = 1      | (Intersection: 1, Union: 7) =1 / 7 ≈ 0.14   | (Intersection: 0, Union: 14) = 0 / 14 = 0 |
| iPad (Set A)      | (Intersection: 1, Union: 7) = 1 / 7 ≈ 0.14   | (Intersection: 3, Union: 3) = 3 / 3 = 1     | (Intersection: 0, Union: 12) = 0 / 12 = 0 |
| iWatch (Set A)    | (Intersection: 0, Union: 8) = 0 / 8 = 0      | (Intersection: 0, Union: 8) = 0 / 8 = 0     | (Intersection: 0, Union: 8) = 0 / 8 =0    |
| iPad Mini (Set A) | (Intersection: 1, Union: 11) = 1 / 11 ≈ 0.09 | (Intersection: 3, Union: 7) = 3 / 7 ≈ 0.43  | (Intersection: 0, Union: 16) = 0 / 16 = 0 |

<!-- JUNK ON COLUMNS:
To establsh the similarity of to specific fields or attributes within a structured dataset, this guide uses the Jaccard similarity calculation. 

columns' in this context are the individual fields or attributes within the datasets used for performing similarity computations, tokenization, and filtering operations. Each column holds specific information or results generated at different stages of the data processing pipeline described in the document. -->

<!-- Performs pairwise Jaccard similarity computations between elements in two sets by tokenizing and comparing the elements. -->

## Creating test data in SQL 

To manually create a test tables for the product sets, use SQL's CREATE TABLE statement.

```SQL {line-numbers="true"}
CREATE TABLE featurevector1 AS SELECT *
FROM (
    SELECT 'iPad' AS ProductName
    UNION ALL
    SELECT 'iPhone'
    UNION ALL
    SELECT 'iWatch'
     UNION ALL
    SELECT 'iPad Mini'
);
SELECT * FROM featurevector1;
```

The following descriptions provide a breakdown of the SQL code block above:

- Line 1: `CREATE TEMP TABLE featurevector1 AS`: This statement creates a temporary table named featurevector1. Temporary tables are typically only accessible within the current session and are automatically dropped at the end of the session.
- Line 1 and 2: `SELECT * FROM (...)`: This part of the code is a subquery used to generate the data that will be inserted into the featurevector1 table.
Inside the subquery, there are multiple SELECT statements combined using UNION ALL. Each SELECT statement generates one row of data with the specified values for the 'ProductName' column.
- Line 3: `SELECT 'iPad' AS ProductName`: This generates a row with the value 'iPad' in the 'ProductName' column.
- Line 5: `SELECT 'iPhone'`: This generates a row with the value 'iPhone' in the 'ProductName' column.

The SQL statement creates a table as seen below:

|   | `ProductName` |
|---|---------------|
| 1 | iPad          |
| 2 |iPhone         |
| 3 | iWatch        |
| 4 |iPad Mini      |

To create the second feature vector, use the following SQL statement:

```SQL
CREATE TABLE featurevector2 AS SELECT *
FROM (
    SELECT 'iPad' AS ProductName
    UNION ALL
    SELECT 'iPhone'
    UNION ALL
    SELECT 'Macbook Pro'
);
SELECT * FROM featurevector2;
```

<!-- Alternative title: ## Tokenize data using SQL -->
## Data transformations {#data-transformation}

In this example, several actions must be performed to accurately compare the sets. Firstly, any whitespaces are removed from the feature vectors as it is assumed that they do not contribute to the similarity measure. Then, any duplicates present in the feature vector are removed as they waste computational processing. Next, tokens of 2 characters (bi-grams) are extracted from the feature vectors. In this example, they are assumed to be overlapping. 

>[!NOTE]
>
>For illustration purposes, the processed columns will be added next to the feature vector for each of the steps. 

The following sections illustrate the prerequisite data transformations like deduplication, whitespace removal, and lowercase conversion before starting the process of tokenization.

### Deduplication {#deduplication}

Next, use the `DISTINCT` clause to remove duplicates. There are no duplicates in this example, however it is an important step to improve the accuracy of any comparison. The necessary SQL is displayed below:

```SQL
SELECT DISTINCT(ProductName) AS featurevector1_distinct FROM featurevector1
SELECT DISTINCT(ProductName) AS featurevector2_distinct FROM featurevector2
```

### Whitespace removal {#whitespace-removal}

In the following SQL statement, the whitespaces are removed from the feature vectors. The `replace(ProductName, ' ', '') AS featurevector1_nospaces` part of the query takes the `ProductName` column from the `featurevector1` table and uses the `replace()` function. The `REPLACE` function replaces all occurrences of a space (' ') with an empty string (''). This effectively removes all spaces from the `ProductName` values. The result is aliased as `featurevector1_nospaces`.

```SQL
SELECT DISTINCT(ProductName) AS featurevector1_distinct, replace(ProductName, ' ', '') AS featurevector1_nospaces FROM featurevector1
```

The results are shown in the table below:

|   | featurevector1_distinct  | featurevector1_nospaces |
|---|---|---|
| 1 | iPad Mini  | iPadMini |
| 2 | iPad  | iPad |
| 3 | iWatch  | iWatch |
| 4 | iPhone  | iPhone |

The SQL statement and its results on the second feature vector are seen below:

+++Select to expand

```SQL
SELECT DISTINCT(ProductName) AS featurevector2_distinct, replace(ProductName, ' ', '') AS featurevector2_nospaces FROM featurevector2
```

The results appear as below:

|   | featurevector2_distinct  | featurevector2_nospaces |
|---|---|---|
| 1 | iPad  | iPad |
| 2 | Macbook Pro  | MacbookPro |
| 3 | iPhone  | iPhone |

+++

### Convert to lowercase {#lowercase-conversion}

Next, the SQL is improved to convert the product names to lowercase as well as removing whitespace. The lower function (`lower(...)`) is applied to the result of the `replace()` function. The lower function converts all characters in the modified `ProductName` values to lowercase. This ensures that the values are in lowercase regardless of their original case.

```SQL
SELECT DISTINCT(ProductName) AS featurevector1_distinct, lower(replace(ProductName, ' ', '')) AS featurevector1_transform FROM featurevector1;
```

The result of this statement is:

|   | featurevector1_distinct  | featurevector1_transform |
|---|---|---|
| 1 | iPad Mini  | ipadmini |
| 2 | iPad  | iPad |
| 3 | iWatch  | iWatch |
| 4 | iPhone  | iPhone |

The SQL statement and its results on the second feature vector are seen below:

+++Select to expand

```SQL
SELECT DISTINCT(ProductName) AS featurevector2_distinct, lower(replace(ProductName, ' ', '')) AS featurevector2_transform FROM featurevector2
```

The results appear as below:

|   | featurevector2_distinct  | featurevector2_transform |
|---|---|---|
| 1 | iPad  | ipad |
| 2 | Macbook Pro  | macbookpro |
| 3 | iPhone  | iphone |

+++

### Extract tokens using SQL {#tokenization}

The next step is tokenization, or text splitting. Tokenization is the process of taking text and breaking it into individual terms. Typically this involves splitting sentences into words. In this example, strings are broken down into bi-grams (and higher-order n-grams) by extracting tokens using SQL functions like `regexp_extract_all`. Overlapping bi-grams must be generated for effective tokenization.

The SQL is further improved to use `regexp_extract_all`. `regexp_extract_all(lower(replace(ProductName, ' ', '')), '.{2}', 0) AS tokens:` This part of the query further processes the modified `ProductName` values created in the previous step. It uses the `regexp_extract_all()` function to extract all non-overlapping substrings of one to two characters from the modified and lowercase `ProductName` values. The `.{2}` regular expression pattern matches substrings of two characters in length. The `regexp_extract_all(..., '.{2}', 0)` part of the function, then extracts all matching substrings from the input text.

```SQL
SELECT DISTINCT(ProductName) AS featurevector1_distinct, lower(replace(ProductName, ' ', '')) AS featurevector1_transform, 
regexp_extract_all(lower(replace(ProductName, ' ', '')) , '.{2}', 0) AS tokens
FROM featurevector1;
```

The results are shown in the table below:

|   | featurevector1_distinct  | featurevector1_transform | tokens     |
|---|--------------------------|--------------|------------------------|
| 1 | iPad Mini                | ipadmini     | {"ip","ad","mi","ni"}  |
| 2 | iPad                     | iPad         | {"ip","ad"}            |
| 3 | iWatch                   | iWatch       | {"iw","at", "ch"}      |
| 4 | iPhone                   | iPhone       | {"ip","ho","ne"}       |

However, the SQL still needs to create overlapping tokens. For example, the "iPad" string above is missing the "pa" token. To fix this, shift the lookahead operator (using `substring`) by one step and generate the bi-grams.

Similar to the previous step, `regexp_extract_all(lower(replace(substring(ProductName, 2), ' ', '')), '.{2}', 0):` extracts two-character sequences from the modified product name, but starts from the second character using the `substring` method to create overlapping tokens. Next, in lines 3-7 (`array_union(...) AS tokens`), the `array_union()` function combines the arrays of two-character sequences obtained by the two regular expression extractions. This ensures that the result contains unique tokens from both non-overlapping and overlapping sequences.

```SQL {line-numbers="true"}
SELECT DISTINCT(ProductName) AS featurevector1_distinct, 
       lower(replace(ProductName, ' ', '')) AS featurevector1_transform, 
       array_union(
           regexp_extract_all(lower(replace(ProductName, ' ', '')), '.{2}', 0),
           regexp_extract_all(lower(replace(substring(ProductName, 2), ' ', '')), '.{2}', 0)
       ) AS tokens
FROM featurevector1;
```

The results are shown in the table below:

|   | featurevector1_distinct  | featurevector1_transform | tokens     |
|---|--------------------------|--------------|------------------------|
| 1 | iPad Mini                | ipadmini     | {"ip","ad","mi","ni","pa","dm","in"}  |
| 2 | iPad                     | iPad         | {"ip","ad","pa"}            |
| 3 | iWatch                   | iWatch       | {"iw","at","ch","wa","tc"}  |
| 4 | iPhone                   | iPhone       | {"ip","ho","ne","ph","on"}  |

However, the use of `substring` as a solution to the problem has limitations. If you were to make tokens from the text based on tri-grams (three characters), you would need to use two `substrings` to lookahead twice to get the required shifts. To make 10-grams, you would need nine `substring` expressions. This would make the code bloat and becomes an untenable approach. The use of plain regular expressions is unsuitable. A new approach is needed. 

### Adjust for the length of product name {#length-adjustment}

The SQl can be improved with the sequence and length functions. In the following example, `sequence(1, length(lower(replace(ProductName, ' ', ''))) - 3)` generates a sequence of numbers from one to the length of the modified product name minus three. For example, if the modified product name is "ipadmini" with a character length of eight, it generates numbers from one to five (eight-three).

The statement below extracts unique product names and then breaks down each name into sequences of characters (tokens) of four character lengths, excluding spaces, and presenting them as two columns. One column shows the unique product names and another column shows their respective generated tokens.

```SQL
SELECT
   DISTINCT(ProductName) AS featurevector1_distinct,
  transform(
    sequence(1, length(lower(replace(ProductName, ' ', ''))) - 3),
    i -> substring(lower(replace(ProductName, ' ', '')), i, 4)
  ) AS tokens
FROM
  featurevector1;
```

The results are shown in the table below:

|   | featurevector1_distinct  | tokens                 |
|---|--------------------------|------------------------|
| 1 | iPad Mini                | {"ipad","padm","admi","dmin","mini"}  |
| 2 | iPad                     | {"ipad"}            |
| 3 | iWatch                   | {"iwat","watc","atch"}  |
| 4 | iPhone                   | {"ipho","phon","hone"}  |

### Ensure set token length

Additional conditions can be added to the statement to ensure that the generated sequences are of a specific length. The following SQL statement expands on the token generation logic by making the `transform` function is more complex. The statement uses the `filter` function within `transform` to ensure the generated sequences are of six character length. It handles the cases where that is not possible by assigning NULL values to those positions.

```SQL
SELECT
  DISTINCT(ProductName) AS featurevector1_distinct,
  transform(
    filter(
      sequence(1, length(lower(replace(ProductName, ' ', ''))) - 5),
      i -> i + 5 <= length(lower(replace(ProductName, ' ', '')))
    ),
    i -> CASE WHEN length(substring(lower(replace(ProductName, ' ', '')), i, 6)) = 6
               THEN substring(lower(replace(ProductName, ' ', '')), i, 6)
               ELSE NULL
          END
  ) AS tokens
FROM
  featurevector1;
```

The results are shown in the table below:

|   | featurevector1_distinct  | tokens                 |
|---|--------------------------|------------------------|
| 1 | iPad Mini                | {"ipadmi","padmin","admini"}  |
| 2 | iPad                     | {null}      |
| 3 | iWatch                   | {"iwatch"}  |
| 4 | iPhone                   | {"iphone"}  |


<!-- Up to here -->

### Explore Solutions Using Data Distiller Lambda Functions
<!-- Lambda functions are explained and used to create n-grams efficiently. -->

Introduces lambda functions in the context of Data Distiller, demonstrating their use for creating n-grams and iterating over sequences of characters.

## Compute the Cross Join of Unique Elements Across Two Feature Vectors

Perform a cross join to combine elements from two feature vectors, creating pairs of elements for comparison.

## Compute the Jaccard Similarity Measure

Calculates the Jaccard similarity between the pairs generated in the cross join, measuring the similarity between tokens.

## Filter results based on Jaccard Similarity threshold

Filter the results based on a predefined threshold (of 0.4 in this case) to select only those pairs that meet the similarity criteria. 
<!-- Applying a threshold (0.4) to filter out columns that meet the similarity criteria. -->

