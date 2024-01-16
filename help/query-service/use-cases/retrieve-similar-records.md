---
title: Higher-order Function Example - Retrieve Similar Records
description: Learn how to identify and retrieve similar or related records from one or more datasets based on a similarity metric and similarity threshold. This workflow can highlight meaningful relationships or overlaps between disparate datasets.
exl-id: 4810326a-a613-4e6a-9593-123a14927214
---
# Higher-order function example: Retrieve similar records

Solve several common use cases by using Data Distiller higher-order functions to identify and retrieve similar or related records from one or more datasets. You can use this guide to identify products from different datasets that have a significant similarity in their characteristics or attributes. The methodology in this document provides solutions to: data deduplication, record linkage, recommendation systems, information retrieval, and text analytics among others.

The document describes the process of implementing a similarity join then uses Data Distiller higher-order functions to compute the similarity between sets of data and filter them based on selected attributes. SQL code snippets and explanations are provided for each step of the process. The workflow implements similarity joins using the Jaccard similarity measure and tokenization using Data Distiller higher-order functions. These methods are then used to identify and retrieve similar or related records from one or more datasets based on a similarity metric. The key sections of the process include: [tokenization using higher-order functions](#data-transformation), the [cross-join of unique elements](#cross-join-unique-elements), the [Jaccard similarity calculation](#compute-the-jaccard-similarity-measure), and the [threshold-based filtering](#similarity-threshold-filter).

## Prerequisites

Before continuing with this document, you should be familiar with the following concepts:

- A **similarity join** is an operation that identifies and retrieves pairs of records from one or more tables based on a measure of similarity between the records. The key requirements for a similarity join are as follows:
    - **Similarity metric**: A similarity join relies on a predefined similarity metric or measure. Such metrics include: the Jaccard similarity, cosine similarity, edit distance, and so on. The metric depends on the nature of the data and the use case. This metric quantifies how similar or dissimilar two records are.
    - **Threshold**: A similarity threshold is used to determine when the two records are considered similar enough to be included in the join result. Records with a similarity score above the threshold are considered matches.
- The **Jaccard similarity** index, or the Jaccard similarity measurement, is a statistic used to gauge the similarity and diversity of sample sets. It is defined as the size of the intersection divided by the size of the union of the sample sets. The Jaccard similarity measurement ranges from zero to one. A Jaccard similarity of zero indicates no similarity between the sets, and a Jaccard similarity of one indicates that the sets are identical.
![A venn diagram to illustrate the Jaccard similarity measurement.](../images/use-cases/jaccard-similarity.png)
- **Higher-order functions** in Data Distiller are anonymous, inline functions that can be defined and used within SQL statements. They are frequently used with higher-order functions due to their ability to create concise, on-the-fly functions that can be passed around as data. Higher-order functions are often employed with higher-order functions like `transform`, `filter`, and `array_sort`. Higher-order functions are especially useful in situations where defining a full function is unnecessary, and a brief, one-time function can be used inline.

## Getting started

The Data Distiller SKU is required to perform the higher-order functions on your Adobe Experience Platform data. If you do not have the Data Distiller SKU, contact your Adobe customer service representative for more information.

## Establish similarity {#establish-similarity}

This use case requires a similarity measure between text strings that can be used later to establish a threshold for filtering. In this example, the products in Set A and Set B represent the words in two documents.  

The Jaccard similarity measure can be applied to a wide range of data types, including text data, categorical data, and binary data. It is also suitable for real-time or batch processing as it can be computationally efficient to calculate for large datasets.

Product Set A and Set B contain the test data for this workflow.

- Product Set A: `{iPhone, iPad, iWatch, iPad Mini}`
- Product Set B: `{iPhone, iPad, Macbook Pro}`

To calculate the Jaccard similarity between product sets A and B, first find the **intersection** (common elements) of the product sets. In this case, `{iPhone, iPad}`. Next, find the **union** (all unique elements) of both product sets. In this example, `{iPhone, iPad, iWatch, iPad Mini, Macbook Pro}`.

Finally, use the Jaccard similarity formula: `J(A,B) = A∪B / A∩B` to calculate the similarity. 

J = Jaccard distance
A = set 1
B = set 2

The Jaccard similarity between product sets A and B is 0.4. This indicates a moderate degree of similarity between the words used in the two documents. This similarity between the two sets defines the columns in the similarity join. These columns represent pieces of information, or characteristics associated with the data, that are stored in a table and used for performing the similarity computations. 

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

{style="table-layout:auto"}

## Create the test data with SQL {#create-test-data}

To manually create a test table for the product sets, use the SQL CREATE TABLE statement.

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

- Line 1: `CREATE TEMP TABLE featurevector1 AS`: This statement creates a temporary table named `featurevector1`. Temporary tables are typically only accessible within the current session and are automatically dropped at the end of the session.
- Line 1 and 2: `SELECT * FROM (...)`: This part of the code is a subquery used to generate the data that is inserted into the `featurevector1` table.
Inside the subquery, multiple `SELECT` statements are combined using the `UNION ALL` command. Each `SELECT` statement generates one row of data with the specified values for the `ProductName` column.
- Line 3: `SELECT 'iPad' AS ProductName`: This generates a row with the value `iPad` in the `ProductName` column.
- Line 5: `SELECT 'iPhone'`: This generates a row with the value `iPhone` in the `ProductName` column.

The SQL statement creates a table as seen below:

|   | `ProductName` |
|---|---------------|
| 1 | iPad          |
| 2 |iPhone         |
| 3 | iWatch        |
| 4 |iPad Mini      |

{style="table-layout:auto"}

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

## Data transformations {#data-transformation}

In this example, several actions must be performed to accurately compare the sets. First, any whitespaces are removed from the feature vectors as it is assumed that they do not contribute to the similarity measure. Then, any duplicates present in the feature vector are removed as they waste computational processing. Next, tokens of two characters (bi-grams) are extracted from the feature vectors. In this example, they are assumed to be overlapping. 

>[!NOTE]
>
>For illustration purposes, the processed columns are added next to the feature vector for each of the steps. 

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

{style="table-layout:auto"}

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

{style="table-layout:auto"}

+++

### Convert to lowercase {#lowercase-conversion}

Next, the SQL is improved to convert the product names to lowercase and remove any whitespaces. The lower function (`lower(...)`) is applied to the result of the `replace()` function. The lower function converts all characters in the modified `ProductName` values to lowercase. This ensures that the values are in lowercase regardless of their original case.

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

{style="table-layout:auto"}

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

{style="table-layout:auto"}

+++

### Extract tokens using SQL {#tokenization}

The next step is tokenization, or text splitting. Tokenization is the process of taking text and breaking it into individual terms. Typically this involves splitting sentences into words. In this example, strings are broken down into bi-grams (and higher-order n-grams) by extracting tokens using SQL functions like `regexp_extract_all`. Overlapping bi-grams must be generated for effective tokenization.

The SQL is further improved to use `regexp_extract_all`. `regexp_extract_all(lower(replace(ProductName, ' ', '')), '.{2}', 0) AS tokens:` This part of the query further processes the modified `ProductName` values created in the previous step. It uses the `regexp_extract_all()` function to extract all non-overlapping substrings of one to two characters from the modified and lowercase `ProductName` values. The `.{2}` regular expression pattern matches substrings of two characters in length. The `regexp_extract_all(..., '.{2}', 0)` part of the function then extracts all matching substrings from the input text.

```SQL
SELECT DISTINCT(ProductName) AS featurevector1_distinct, lower(replace(ProductName, ' ', '')) AS featurevector1_transform, 
regexp_extract_all(lower(replace(ProductName, ' ', '')) , '.{2}', 0) AS tokens
FROM featurevector1;
```

The results are shown in the table below:

+++Select to expand

|   | featurevector1_distinct  | featurevector1_transform | tokens     |
|---|--------------------------|--------------|------------------------|
| 1 | iPad Mini                | ipadmini     | {"ip","ad","mi","ni"}  |
| 2 | iPad                     | iPad         | {"ip","ad"}            |
| 3 | iWatch                   | iWatch       | {"iw","at", "ch"}      |
| 4 | iPhone                   | iPhone       | {"ip","ho","ne"}       |

{style="table-layout:auto"}

+++

To further improve accuracy, the SQL must be used to create overlapping tokens. For example, the "iPad" string above is missing the "pa" token. To fix this, shift the lookahead operator (using `substring`) by one step and generate the bi-grams.

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

+++Select to expand

|   | featurevector1_distinct  | featurevector1_transform | tokens     |
|---|--------------------------|--------------|------------------------|
| 1 | iPad Mini                | ipadmini     | {"ip","ad","mi","ni","pa","dm","in"}  |
| 2 | iPad                     | iPad         | {"ip","ad","pa"}            |
| 3 | iWatch                   | iWatch       | {"iw","at","ch","wa","tc"}  |
| 4 | iPhone                   | iPhone       | {"ip","ho","ne","ph","on"}  |

{style="table-layout:auto"}

+++

However, the use of `substring` as a solution to the problem has limitations. If you were to make tokens from the text based on tri-grams (three characters), it would require the use of two `substrings` to lookahead twice to get the required shifts. To make 10-grams, you would need nine `substring` expressions. This would make the code bloat and it becomes untenable. The use of plain regular expressions is unsuitable. A new approach is needed. 

### Adjust for the length of product name {#length-adjustment}

The SQl can be improved with the sequence and length functions. In the following example, `sequence(1, length(lower(replace(ProductName, ' ', ''))) - 3)` generates a sequence of numbers from one to the length of the modified product name minus three. For example, if the modified product name is "ipadmini" with a character length of eight, it generates numbers from one to five (eight-three).

The statement below extracts unique product names and then breaks down each name into sequences of characters (tokens) of four character lengths, excluding spaces, and presenting them as two columns. One column shows the unique product names and the other column shows their generated tokens.

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

+++Select to expand

|   | featurevector1_distinct  | tokens                 |
|---|--------------------------|------------------------|
| 1 | iPad Mini                | {"ipad","padm","admi","dmin","mini"}  |
| 2 | iPad                     | {"ipad"}            |
| 3 | iWatch                   | {"iwat","watc","atch"}  |
| 4 | iPhone                   | {"ipho","phon","hone"}  |

{style="table-layout:auto"}

+++

### Ensure set token length

Additional conditions can be added to the statement to ensure that the generated sequences are of a specific length. The following SQL statement expands on the token generation logic by making the `transform` function is more complex. The statement uses the `filter` function within `transform` to ensure that the generated sequences are of six character length. It handles the cases where that is not possible by assigning NULL values to those positions.

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

+++Select to expand

|   | featurevector1_distinct  | tokens                 |
|---|--------------------------|------------------------|
| 1 | iPad Mini                | {"ipadmi","padmin","admini"}  |
| 2 | iPad                     | {null}      |
| 3 | iWatch                   | {"iwatch"}  |
| 4 | iPhone                   | {"iphone"}  |

{style="table-layout:auto"}

+++

## Explore solutions using Data Distiller higher-order functions {#higher-order-function-solutions}

Higher-order functions are powerful constructs that allow you to implement "programming" like syntax in Data Distiller. They can be used to iterate a function over multiple values in an array.

In the context of Data Distiller, higher-order functions are ideal for creating n-grams and iterating over sequences of characters.

The `reduce` function, especially when used within sequences generated by `transform`, provides a way to derive cumulative values or aggregates, which can be pivotal in various analytical and planning processes.

For example, in the SQl statement below, the `reduce()` function aggregates elements in an array using a custom aggregator. It simulates a for loop to **create the cumulative sums of all the integers** from one to five. `1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4`.

```SQL {line-numbers="true"}
SELECT transform(
    sequence(1, 5), 
    x -> reduce(
        sequence(1, x),  
        0,  -- Initial accumulator value
        (acc, y) -> acc + y  -- Higher-order function to add numbers
    )
) AS sum_result;
```

The following is an analysis of the SQL statement:

- Line 1: `transform` applies the function `x -> reduce` on each element generated in the sequence.
- Line 2: `sequence(1, 5)` generates a sequence of numbers from one to five.
- Line 3: `x -> reduce(sequence(1, x), 0, (acc, y) -> acc + y)` performs a reduction operation for each element x in the sequence (from 1 to 5).
    - The `reduce` function takes an initial accumulator value of 0, a sequence from one to the current value of `x`, and a higher-order function `(acc, y) -> acc + y` to add the numbers.
    - The higher-order function `acc + y` accumulates the sum by adding the current value `y` to the accumulator `acc`.
- Line 8: `AS sum_result` renames the resulting column as sum_result.

To summarize, this higher-order function takes two parameters (`acc` and `y`) and defines the operation to perform, which in this case is adding `y` to the accumulator `acc`. This higher-order function is executed for each element in the sequence during the reduction process.

The output of this statement is a single column (`sum_result`) that contains the cumulative sums of numbers from one to five.

### The value of higher-order functions {#value-of-higher-order-functions}

This section analyses a slimmed-down version of a tri-gram SQL statement to better understand the value of higher-order functions in Data Distiller to create n-grams more efficiently.

The statement below operates on the `ProductName` column within the `featurevector1` table. It produces a set of three-character substrings derived from the modified product names within the table, using positions obtained from the sequence generated.

```SQL {line-numbers="true"}
SELECT
  transform(
    sequence(1, length(lower(replace(ProductName, ' ', ''))) - 2),
    i -> substring(lower(replace(ProductName, ' ', '')), i, 3)
  ) 
FROM
  featurevector1
```

The following is an analysis of the SQL statement:

- Line 2: `transform` applies a higher-order function to each integer in the sequence.
- Line 3: `sequence(1, length(lower(replace(ProductName, ' ', ''))) - 2)` generates a sequence of integers from `1` to the length of the modified product name minus two. 
    - `length(lower(replace(ProductName, ' ', '')))` calculates the length of the `ProductName` after making it lowercase and removing spaces.
    - `- 2` subtracts two from the length to ensure that the sequence generates valid starting positions for 3-character substrings. Subtracting 2 ensures that you have enough characters following each starting position to extract a 3-character substring. The substring function here operates like a lookahead operator.
- Line 4: `i -> substring(lower(replace(ProductName, ' ', '')), i, 3)` is a higher-order function that operates on each integer `i` in the generated sequence.
    - The `substring(...)` function extracts a 3-character substring from the `ProductName` column.
    - Before extracting the substring, `lower(replace(ProductName, ' ', ''))` converts the `ProductName` to lowercase and removes spaces to ensure consistency.

The output is a list of substrings of three characters in length, extracted from the modified product names, based on the positions specified in the sequence.

## Filter the results {#filter-results}

The `filter` function, with subsequent [data transformations](#data-transformation), allows for a more refined and precise extraction of relevant information from text data. This enables you to derive insights, improve data quality, and facilitate better decision-making processes.

The `filter` function in the following SQL statement serves to refine and limit the sequence of positions within the string from which substrings are extracted using the subsequent transform function.

```SQL
SELECT
  transform(
    filter(
      sequence(1, length(lower(replace(ProductName, ' ', ''))) - 6),
      i -> i + 6 <= length(lower(replace(ProductName, ' ', '')))
    ),
    i -> CASE WHEN length(substring(lower(replace(ProductName, ' ', '')), i, 7)) = 7
               THEN substring(lower(replace(ProductName, ' ', '')), i, 7)
               ELSE NULL
          END
  )
FROM
  featurevector1;
```

The `filter` function generates a sequence of valid starting positions within the modified `ProductName` and extracts substrings of a specific length. Only starting positions that allow for the extraction of a seven-character substring are allowed. 

The condition `i -> i + 6 <= length(lower(replace(ProductName, ' ', '')))` ensures that the starting position `i` plus `6` (the length of the desired seven-character substring minus one) does not exceed the length of the modified `ProductName`.

The `CASE` statement is used to conditionally include or exclude substrings based on their length. Only seven-character substrings are included; others are replaced with NULL. These substrings are then used by the `transform` function to create a sequence of substrings from the `ProductName` column in the `featurevector1` table.

>[!TIP]
>
>You can use the [parameterized templates](../ui/parameterized-queries.md) feature to reuse and abstract logic within your queries. For example, when you build general-purpose utility functions (such as the one displayed above for tokenizing strings), you can use Data Distiller parameterized templates where the number of characters would be a parameter.

## Compute the cross-join of unique elements across two feature vectors {#cross-join-unique-elements}

Identifying the differences or discrepancies between the two datasets based on a specific transformation of the data is a common process to maintain data accuracy, improve data quality, and to ensure consistency across datasets. 

This SQL statement below extracts the unique product names that are present in `featurevector2` but not in `featurevector1` after applying the transformations.

```SQL
SELECT lower(replace(ProductName, ' ', '')) FROM featurevector2
EXCEPT
SELECT lower(replace(ProductName, ' ', '')) FROM featurevector1;
```

>[!TIP]
>
>In addition to `EXCEPT`, you could also use `UNION` and `INTERSECT` depending on your use case. Also, you can experiment with `ALL` or `DISTINCT` clauses to see the difference between including all values and returning only the unique values for the specified columns.

The results are shown in the table below:

+++Select to expand

|   | lower(replace(ProductName, ' ', ''))  |
|---|---------------------------------------|
| 1 | macbookpro                            |

{style="table-layout:auto"}

+++

Next, perform a cross join to combine elements from the two feature vectors to create pairs of elements for comparison. The first step in this process is to create a tokenized vector.

A tokenized vector is a structured representation of text data where each word, phrase, or unit of meaning (token) is converted into a numerical format. This conversion allows natural language processing algorithms to understand and analyze textual information.

The SQl below creates a tokenized vector.

```SQL
CREATE TABLE featurevector1tokenized AS SELECT
  DISTINCT(ProductName) AS featurevector1_distinct,
  transform(
    filter(
      sequence(1, length(lower(replace(ProductName, ' ', ''))) - 1),
      i -> i + 1 <= length(lower(replace(ProductName, ' ', '')))
    ),
    i -> CASE WHEN length(substring(lower(replace(ProductName, ' ', '')), i, 2)) = 2
               THEN substring(lower(replace(ProductName, ' ', '')), i, 2)
               ELSE NULL
          END
  ) AS tokens
FROM
  (SELECT lower(replace(ProductName, ' ', '')) AS ProductName FROM featurevector1);
SELECT * FROM featurevector1tokenized;
```

>[!NOTE]
>
>If you are using [!DNL DbVisualizer], after you create or delete a table, refresh the database connection so that the table's metadata cache is refreshed. Data Distiller does not push out metadata updates.

The results are shown in the table below:

+++Select to expand

|   | featurevector1_distinct  | tokens                 |
|---|--------------------------|------------------------|
| 1 | ipadmini                | {"ip","pa","ad","dm","mi","in","ni"}   |
| 2 | ipad                     | {"ip","pa","ad"}      |
| 3 | iwatch                   | {"iw","wa","at","tc","ch"}  |
| 4 | iphone                   | {"ip","ph","ho","on","ne"}  |

{style="table-layout:auto"}

+++

Then repeat the process for `featurevector2`:

```SQL
CREATE TABLE featurevector2tokenized AS 
SELECT
  DISTINCT(ProductName) AS featurevector2_distinct,
  transform(
    filter(
      sequence(1, length(lower(replace(ProductName, ' ', ''))) - 1),
      i -> i + 1 <= length(lower(replace(ProductName, ' ', '')))
    ),
    i -> CASE WHEN length(substring(lower(replace(ProductName, ' ', '')), i, 2)) = 2
               THEN substring(lower(replace(ProductName, ' ', '')), i, 2)
               ELSE NULL
          END
  ) AS tokens
FROM
(SELECT lower(replace(ProductName, ' ', '')) AS ProductName FROM featurevector2
);
SELECT * FROM featurevector2tokenized;
```

The results are shown in the table below:

+++Select to expand

|   | featurevector2_distinct  | tokens                 |
|---|--------------------------|------------------------|
| 1 | ipadmini                 | {"ip","pa","ad"}   |
| 2 | macbookpro               | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  |
| 3 | iphone                   | {"ip","ph","ho","on","ne"}  |

{style="table-layout:auto"}

+++

With both tokenized vectors complete, you can now create the cross join. This is seen in the SQL below:

```SQL {line-numbers="true"}
SELECT
    A.featurevector1_distinct AS SetA_ProductNames,
    B.featurevector2_distinct AS SetB_ProductNames,
    A.tokens AS SetA_tokens1,
    B.tokens AS SetB_tokens2
FROM
    featurevector1tokenized A
CROSS JOIN
    featurevector2tokenized B;
```

The following is a summary of the SQl used to create the cross join:

- Line 2: `A.featurevector1_distinct AS SetA_ProductNames` selects the `featurevector1_distinct` column from the table `A` and assigns it an alias `SetA_ProductNames`. This section of SQL results in a list of distinct product names from the first dataset.
- Line 4: `A.tokens AS SetA_tokens1` selects the `tokens` column from the table or subquery `A` and assigns it an alias `SetA_tokens1`. This section of SQL results in a list of tokenized values associated with the product names from the first dataset.
- Line 8: The `CROSS JOIN` operation combines all possible combinations of rows from the two datasets. In other words, it pairs each product name and its associated tokens from the first table (`A`) with each product name and its associated tokens from the second table (`B`). This results in a Cartesian product of the two datasets, where each row in the output represents a combination of a product name and its associated tokens from both datasets.

The results are shown in the table below:

+++Select to expand

| *  | SetA_ProductNames  | SetB_ProductNames | SetA_tokens 1 | SetB_tokens 2 |
|---|---------------------|-------------------|---|---|
| 1 | ipadmini            | ipad              | {"ip","pa","ad","dm","mi","in","ni"}  | {"ip","pa","ad"} |
| 2 | ipadmini            | macbookpro        | {"ip","pa","ad","dm","mi","in","ni"}  | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  |
| 3 | ipadmini            | iphone            | {"ip","pa","ad","dm","mi","in","ni"}  | {"ip","ph","ho","on","ne"}  |
| 4 | ipad                |  ipad             | {"ip","pa","ad"}  | {"ip","pa","ad"}   |
| 5 | ipad                | macbookpro        | {"ip","pa","ad"}  | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  |
| 6 | ipad                | iphone            | {"ip","pa","ad"}  |  {"ip","ph","ho","on","ne"} |
| 7 | iwatch              | ipad              |  {"iw","wa","at","tc","ch"} |  {"ip","pa","ad"}   |
| 8 | iwatch              | macbookpro        |  {"iw","wa","at","tc","ch"} | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"} |
| 9 | iwatch              | iphone            |  {"iw","wa","at","tc","ch"} | {"ip","ph","ho","on","ne"} |
| 10| iphone              | ipad              |  {"ip","ph","ho","on","ne"} | {"ip","pa","ad"} |
| 11| iphone              | macbookpro        |  {"ip","ph","ho","on","ne"} | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"} |
| 12| iphone              |  iphone           |  {"ip","ph","ho","on","ne"} | {"ip","ph","ho","on","ne"} |

{style="table-layout:auto"}

+++

## Compute the Jaccard similarity measure {#compute-the-jaccard-similarity-measure}

Next, calculate use the Jaccard similarity coefficient to perform a similarity analysis between the two sets of product names by comparing their tokenized representations. The output of the SQL script below provides the following: product names from both sets, their tokenized representations, counts of common and total unique tokens, and the calculated Jaccard similarity coefficient for each pair of datasets.


```SQL {line-numbers="true"}
SELECT 
    SetA_ProductNames, 
    SetB_ProductNames, 
    SetA_tokens1,
    SetB_tokens2,
    size(array_intersect(SetA_tokens1, SetB_tokens2)) AS token_intersect_count,
    size(array_union(SetA_tokens1, SetB_tokens2)) AS token_union_count,
    ROUND(
        CAST(size(array_intersect(SetA_tokens1, SetB_tokens2)) AS DOUBLE) /    size(array_union(SetA_tokens1, SetB_tokens2)), 2) AS jaccard_similarity
FROM
    (SELECT
        A.featurevector1_distinct AS SetA_ProductNames,
        B.featurevector2_distinct AS SetB_ProductNames,
        A.tokens AS SetA_tokens1,
        B.tokens AS SetB_tokens2
    FROM
        featurevector1tokenized A
    CROSS JOIN
        featurevector2tokenized B
    );
```

The following is a summary of the SQL used to calculate the Jaccard similarity coefficient:

- Line 6: `size(array_intersect(SetA_tokens1, SetB_tokens2)) AS token_intersect_count` calculates the number of tokens that are common to both `SetA_tokens1` and `SetB_tokens2`. This calculation is achieved by computing the size of the intersection of the two arrays of tokens.
- Line 7: `size(array_union(SetA_tokens1, SetB_tokens2)) AS token_union_count` calculates the total number of unique tokens across both `SetA_tokens1` and `SetB_tokens2`. This line computes the size of the union of the two arrays of tokens.
- Line 8-10: `ROUND(CAST(size(array_intersect(SetA_tokens1, SetB_tokens2)) AS DOUBLE) / size(array_union(SetA_tokens1, SetB_tokens2)), 2) AS jaccard_similarity` calculates the Jaccard similarity between the token sets. These lines divide the size of the token intersection by the size of the token union and round the result to two decimal places. The result is a value between zero and one, where one indicates complete similarity.

The results are shown in the table below:

+++Select to expand

| *  | SetA_ProductNames  | SetB_ProductNames | SetA_tokens 1                         | SetB_tokens 2                                   | token_intersect_count | token_intersect_count | Jaccard similarity |
|---|---------------------|-------------------|---------------------------------------|-------------------------------------------------|----|----|----|
| 1 | ipadmini            | ipad              | {"ip","pa","ad","dm","mi","in","ni"}  | {"ip","pa","ad"}                                |  3  |  7  | 0.43   |
| 2 | ipadmini            | macbookpro        | {"ip","pa","ad","dm","mi","in","ni"}  | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  | 0   | 16   | 0.0   |
| 3 | ipadmini            | iphone            | {"ip","pa","ad","dm","mi","in","ni"}  | {"ip","ph","ho","on","ne"}                      |  1  | 11   |  0.09  |
| 4 | ipad                |  ipad             | {"ip","pa","ad"}                      | {"ip","pa","ad"}                                |  3  | 3   |  1.0  |
| 5 | ipad                | macbookpro        | {"ip","pa","ad"}                      | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  |  0  |  12  |  0.0  |
| 6 | ipad                | iphone            | {"ip","pa","ad"}                      |  {"ip","ph","ho","on","ne"}                     |  1  |  7  | 0.14   |
| 7 | iwatch              | ipad              |  {"iw","wa","at","tc","ch"}           |  {"ip","pa","ad"}                               |  0  | 8  |  0.0  |
| 8 | iwatch              | macbookpro        |  {"iw","wa","at","tc","ch"}           | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  | 0   |  14  |  0.0  |
| 9 | iwatch              | iphone            |  {"iw","wa","at","tc","ch"}           | {"ip","ph","ho","on","ne"}                      |  0  |  10  |  0.0  |
| 10| iphone              | ipad              |  {"ip","ph","ho","on","ne"}           | {"ip","pa","ad"}                                |  1  |  7  |  0.14  |
| 11| iphone              | macbookpro        |  {"ip","ph","ho","on","ne"}           | {"ma","ac","cb","bo","oo","ok","kp","pr","ro"}  |  0  |  14  | 0.0   |
| 12| iphone              |  iphone           |  {"ip","ph","ho","on","ne"}           | {"ip","ph","ho","on","ne"}                      |  5  |  5  |  1.0  |

{style="table-layout:auto"}

+++

## Filter results based on Jaccard Similarity threshold {#similarity-threshold-filter}

Finally, filter the results based on a predefined threshold to select only those pairs that meet the similarity criteria. The SQL statement below filters the products with a Jaccard similarity coefficient of at least 0.4. This narrows down the results to pairs that exhibit a substantial degree of similarity.

```SQL
SELECT 
    SetA_ProductNames, 
    SetB_ProductNames
FROM 
(SELECT 
    SetA_ProductNames, 
    SetB_ProductNames, 
    SetA_tokens1,
    SetB_tokens2,
    size(array_intersect(SetA_tokens1, SetB_tokens2)) AS token_intersect_count,
    size(array_union(SetA_tokens1, SetB_tokens2)) AS token_union_count,
    ROUND(
        CAST(size(array_intersect(SetA_tokens1, SetB_tokens2)) AS DOUBLE) / size(array_union(SetA_tokens1, SetB_tokens2)),
        2
    ) AS jaccard_similarity
FROM
    (SELECT
        A.featurevector1_distinct AS SetA_ProductNames,
        B.featurevector2_distinct AS SetB_ProductNames,
        A.tokens AS SetA_tokens1,
        B.tokens AS SetB_tokens2
    FROM
        featurevector1tokenized A
    CROSS JOIN
        featurevector2tokenized B
    )
)
WHERE jaccard_similarity>=0.4
```

The results of this query give the columns for the similarity join, as seen below:

+++Select to expand

|   | SetA_ProductNames        | SetA_ProductNames      |
|---|--------------------------|------------------------|
| 1 | ipadmini                 | ipad                   |
| 2 | ipad                     | ipad                   |
| 3 | iphone                   | iphone                 |

{style="table-layout:auto"}

+++:

### Next steps {#next-steps}

By reading this document, you can now use this logic to highlight meaningful relationships or overlaps between disparate datasets. The ability to identify products from different datasets that have a significant similarity in their characteristics or attributes, has numerous real-world applications. This logic could be used for scenarios such as product matching (to group or recommend similar products to customers), data cleansing (to improve data quality), and market basket analysis (to provide insights into customer behavior, preferences, and potential cross-selling opportunities). 

If you have not already done so, you are recommended to read the [AI/ML feature pipeline overview](../data-distiller/ml-feature-pipelines/overview.md). Use that overview to learn how Data Distiller and your preferred machine learning can build custom data models that support your marketing use cases with Experience Platform data.

## Additional higher-order functions {#additional-functions}

Analytics or time series datasets are commonly comprised of complex nested structures, arrays, and maps. You can use higher-order functions to process complex data types, such as arrays, without the need to explode the array, perform a function, and then combine the result. 

The following list of use cases contain examples of hider-order array and map manipulation functions.

### Adjust the price total by n {#adjust-price-total}

`transform(array<T>, function<T, U>): array<U>`

The snippet above, applies a function to each element of the array and returns a new array of transformed elements. Specifically, the `transform` function takes an array of type T, and converts each element from type T to type U. It then returns an array of type U. The actual types T and U depend on the specific use of the transform function.

`transform(array<T>, function<T, Int, U>): array<U>`

This array transformation function is similar to the previous example, but there are two arguments for the function. The second argument in this function also receives the index of the element in the array in addition to being transformed.

**Example**

The SQL example below demonstrates this use case. The query retrieves a limited set of rows from the specified table, transforming the `productlistitems` array by multiplying the `pricetotal` attribute of each item by 73. The result includes the `_id`, `productlistitems`, and the transformed `price_in_inr` columns. The selection is based on a specific timestamp range.

```sql
SELECT _id,
       productlistitems,
       Transform(productlistitems, value -> value.pricetotal * 73) AS
       price_in_inr
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE  timestamp > To_timestamp('2017-11-01 00:00:00')
       AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT  10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
 productlistitems | price_in_inr
-------------------+----------------
(8376, NULL, NULL) | 611448.0
{(Burbank Hills Jeans, NULL, NULL), (Thermomax Steel, NULL, NULL), (Bruin Point Shearling Boots, NULL, NULL), (Uintas Pro Ski Gloves, NULL, NULL), (Timberline Survival Knife, NULL, NULL), (Thermomax Steel, NULL, NULL), (Timpanogos Scarf, NULL, NULL), (Lost Prospector Beanie, NULL, NULL), (Timpanogos Scarf, NULL, NULL), (Uintas Pro Ski Gloves, NULL, NULL)} | {0.0,0.0.0.0,0,0,0,0,0,0,0,0,0,0,0,0,0.0}
(84763,NULL, NULL) | 6187699.0
(843765, NULL, NULL) | 6.1594845E7
(199684, NULL, NULL) | 1.4576932E7

(10 rows)
```

### Discover whether a product with a specific SKU exists {#confirm-product-exists}

`exists(array<T>, function<T, Boolean>): Boolean`

In the snippet above, the `exists` function is applied to each element of the array and returns a Boolean value. The Boolean indicates if there is one or more elements in the array that satisfies a specified condition. In this case, it confirms whether a product with a specific SKU exists.

**Example**

In the SQL example below, the query fetches `productlistitems` from the `geometrixxx_999_xdm_pqs_1batch_10k_rows` table and evaluates whether an element with sku equal to `123679` in the `productlistitems` array exists. It then filters the results based on a specific range of timestamps and limits the final results to ten rows.

```sql
SELECT productlistitems
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE EXISTS( productlistitems, value -> value.sku == 123679)
AND timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')limit 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems
-----------------
{(123679, NULL,NULL)}
{(123679, NULL, NULL)}
{(123679, NULL, NULL), (150196, NULL, NULL)}
{(123679, NULL, NULL), (150196, NULL, NULL)}
{(123679, NULL, NULL), (150196, NULL, NULL)}
{(123679, NULL, NULL)}
{(123679, NULL, NULL)}
{(123679, NULL, NULL)}
{(123679, NULL,NULL)}
{(123679,NULL, NULL)}

(10 rows)
```

### Find products where the SKU > 100000

`filter(array<T>, function<T, Boolean>): array<T>`

This function filters an array of elements based on a given condition that evaluates each element as a Boolean value. It then returns a new array that only includes elements where the condition returned a true value.

**Example**

The query below selects the `productlistitems` column, applies a filter to include only elements with sku greater than 100000, and restricts the result set to rows within a specific timestamp range. The filtered array is then aliased as `_filter` in the output.

```sql
SELECT productlistitems,
    Filter(productlistitems, value -> value.sku > 100000) AS _filter
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT 10; 
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems | _filter
-----------------+---------
(123679, NULL, NULL) (123679, NULL, NULL)
(1346, NULL, NULL) |
(98347, NULL, NULL) |
(176015, NULL, NULL) | (176015, NULL, NULL)

(10 rows)
```

### Add the SKUs for all the product list items available for a given ID and then double the final result

`aggregate(array<T>, A, function<A, T, A>[, function<A, R>]): R`

This aggregate operation applies a binary operator to an initial state and all elements in the array, and reduces multiple values to a single state. After this reduction, the final state is then converted into the ultimate result by using a finish function. The finish function takes the last state obtained after applying the binary operator to all array elements and does something with it to produce the final result.

**Example**

This query example, calculates the maximum SKU value from the `productlistitems` array within the given timestamp range and doubles the result. The output includes the original `productlistitems` array and the computed `max_value`.

```sql
SELECT productlistitems,
aggregate(productlistitems, 0, (acc, value) ->
case
WHEN (
value.sku > acc) THEN cast(value.sku AS int)
ELSE cast(acc AS int)
END, acc -> acc * 2) AS max_value
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')
LIMIT 50;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems | max_value
-----------------+---------
(123679, NULL, NULL) | 247358
(1346,NULL, NULL) | 2692
(98347, NULL, NULL) | 196694
(176015, NULL, NULL) | 352030

(10 rows)
```

### Give a sequence number to all the items in the product list

`zip_with(array<T>, array<U>, function<T, U, R>): array<R>`

This snippet combines the elements of two arrays into a single new array. The operation is performed independently on each element of the array and generates pairs of values. If one array is shorter, null values are added to match the length of the longer array. This happens before the function is applied.

**Example**

The following query uses the `zip_with` function to create pairs of values from two arrays. It does this by combining a sequence of integers, generated using the `Sequence` function, with the sku values from the `productlistitems` array. The result is selected alongside the original `productlistitems` column and is limited based on a timestamp range."

```sql
SELECT productlistitems,
zip_with(Sequence(1,5), Transform(productlistitems, p -> p.sku), (x,y) -> struct(x, y)) AS zip_with
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')
limit 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | zip_with
---------------------+---------
                     | {(1,NULL), (2,NULL), (3,NULL),(4,NULL), (5,NULL)}
(123679, NULL, NULL) | {(1,123679), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL),(3,NULL),(4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3, NULL),(4,NULL), (5,NULL)}
(1346,NULL, NULL)    | {(1,1346), (2,NULL),(3,NULL),(4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3,NULL),(4,NULL), (5,NULL)}
(98347, NULL, NULL)  | {(1,98347), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}
(176015, NULL, NULL) | {(1,176015),(2,NULL), (3,NULL), (4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}

(10 rows)
```

### Assign a sequence number to each item in the product list, and obtain the final result as a map

`map_from_entries(array<struct<K, V>>): map<K, V>`

This snippet converts an array of key-value pairs into a map. It is useful when dealing with key-value pair data that could benefit from a more organized and efficient structure.

**Example**

The following query creates pairs of values from a sequence and the productlistitems array, converts these pairs into a map using map_from_entries, and then selects the original productlistitems column along with the newly created map_from_entries column. The result is filtered and limited based on the specified timestamp range.

```sql
SELECT productlistitems,      map_from_entries(zip_with(Sequence(1,Size(productlistitems)), productlistitems, (x,y) -> struct(x, y))) AS map_from_entries
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE  timestamp > to_timestamp('2017-11-01 00:00:00')
AND    timestamp < to_timestamp('2017-11-02 00:00:00')
LIMIT 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | map_from_entries
---------------------+------------------
(123679, NULL, NULL) | [1 -> "(123679,NULL,NULL)"]
(1346, NULL, NULL)   | [1 -> "(1346, NULL, NULL)"]
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(176015, NULL, NULL) | [1 -> "(176015, NULL, NULL)"]
(92763, NULL, NULL)  | [1 -> "(92763, NULL, NULL)"] 
(48576, NULL, NULL)  | [1 -> "(48576, NULL, NULL)"] 
(135778, NULL, NULL) | [1 -> "(135778, NULL, NULL)"] 
(123679, NULL, NULL) | [1 -> "(123679, NULL, NULL)"] 
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(167753, NULL, NULL) | [1 -> "(167753, NULL, NULL)"] 

(10 rows)
```

### to give a sequence number to all the items in the product list items and to get the final result as map

`map_form_arrays(array<K>, array<V>): map<K, V>`

The `map_form_arrays` function creates a map using paired values from two arrays. 

>[!IMPORTANT]
>
>No elements in keys should be null.

**Example**

The SQL below, creates a map where the keys are sequenced numbers generated using the `Sequence` function, and the values are elements from the `productlistitems` array. The query selects the `productlistitems` column and uses the `Map_from_arrays` function to create the map based on the generated sequence of numbers and the elements of the array. The result is limited to ten rows and filtered based on a timestamp range.

```sql
SELECT productlistitems,
       Map_from_arrays(Sequence(1, Size(productlistitems)), productlistitems) AS
       map_from_arrays
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE  Size(productlistitems) > 0
       AND timestamp > To_timestamp('2017-11-01 00:00:00')
       AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT  10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | map_from_entries
---------------------+------------------
(123679, NULL, NULL) | [1 -> "(123679,NULL,NULL)"]
(1346, NULL, NULL)   | [1 -> "(1346, NULL, NULL)"]
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(176015, NULL, NULL) | [1 -> "(176015, NULL, NULL)"]
(92763, NULL, NULL)  | [1 -> "(92763, NULL, NULL)"] 
(48576, NULL, NULL)  | [1 -> "(48576, NULL, NULL)"] 
(135778, NULL, NULL) | [1 -> "(135778, NULL, NULL)"] 
(123679, NULL, NULL) | [1 -> "(123679, NULL, NULL)"] 
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(167753, NULL, NULL) | [1 -> "(167753, NULL, NULL)"] 

(10 rows)
```

### Concatenate two maps into as single map

`map_concat(map<K, V>, ...): map<K, V>`

The `map_concat` function in the snippet above, takes multiple maps as arguments and returns a new map that combines all the key-value pairs from the input maps. The function concatenates multiple maps into a single map, and the resulting map includes all the key-value pairs from the input maps.

**Example**

The SQL below creates a map where each item in `productlistitems` is associated with a sequence number, and then concatenates it with another map where keys are generated in a specific sequence range. 

```sql
SELECT productlistitems,
      map_concat(           
         map_from_entries(zip_with(Sequence(1,Size(productlistitems)), productlistitems, (x,y) -> struct(x, y))),
         map_from_arrays(sequence(size(productlistitems) + 1, size(productlistitems) + size(productlistitems)), productlistitems) )
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE size(productlistitems) > 0
AND timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')
limit 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | map_from_entries
---------------------+------------------
(123679, NULL, NULL) | [1 -> "(123679,NULL,NULL)",2 -> "(123679, NULL, NULL)"]
(1346, NULL, NULL)   | [1 -> "(1346, NULL, NULL)",2 -> "(1346, NULL, NULL)"]
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)",2 -> "(98347, NULL, NULL)"]
(176015, NULL, NULL) | [1 -> "(176015, NULL, NULL)",2 -> "(176015, NULL, NULL)"]
(92763, NULL, NULL)  | [1 -> "(92763, NULL, NULL)",2 -> "(92763, NULL, NULL)"] 
(48576, NULL, NULL)  | [1 -> "(48576, NULL, NULL)",2 -> "(48576, NULL, NULL)"] 
(135778, NULL, NULL) | [1 -> "(135778, NULL, NULL)",2 -> "(135778, NULL, NULL)"] 
(123679, NULL, NULL) | [1 -> "(123679, NULL, NULL)",2 -> "(123679, NULL, NULL)"] 
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)",2 -> "(98347, NULL, NULL)"]
(167753, NULL, NULL) | [1 -> "(167753, NULL, NULL)",2 -> "(167753, NULL, NULL)"] 

(10 rows)
```

### Retrieve a value corresponding to 'AAID' in the identity map for further computation

`element_at(array<T>, Int): T / element_at(map<K, V>, K): V`

For arrays, the snippet returns the element at a specified (1-based) index, or the value associated with a key in a map. If the index < 0, it accesses elements from the last to the first and returns null if the index exceeds the length of the array. 

For maps, it either returns a value for the given key, or null if the key is not contained in the map.

**Example**

The query selects the `identitymap` column from the table `geometrixxx_999_xdm_pqs_1batch_10k_rows` and extracts the value associated with the key `AAID` for each row. The results are restricted to rows that fall within the specified timestamp range, and the query limits the output to ten rows.

```sql
SELECT identitymap,
              Element_at(identitymap, 'AAID')
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT 10; 
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
                                                                  identitymap                                            |  element_at(identitymap, AAID) 
-------------------------------------------------------------------------------------------------------------------------+-------------------------------------
[AAID -> "(3617FBB942466D79-5433F727AD6A0AD, false)",ECID -> "(67383754798169392543508586197135045866,true)"]            | (3617FBB942466D79-5433F727AD6A0AD, false) 
[AAID -> "[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"] | (533F56A682C059B1-396437F68879F61D, false) 
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            | (22E195F8A8ECCC6A-A39615C93B72A9F, false) 
[AAID -> "(6A60527B9D66CCB9-29638A632B45E9, false)",ECID -> "(50117234882064422833184021414056250576,true)"]             | (6A60527B9D66CCB9-29638A632B45E9, false) 
[AAID -> "(64FB4DC317E21B59-2A23602D234647E7, false)",ECID -> "(79785479785408621882908938960039330887,true)"]           | (64FB4DC317E21B59-2A23602D234647E7, false) 
[AAID -> "(2E70E8CF6DB1DE86-270E55BBBA58B9C1, false)",ECID -> "(80073674009951685326146914344189474476,true)"]           | (2E70E8CF6DB1DE86-270E55BBBA58B9C1, false) 
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            | (22E195F8A8ECCC6A-A39615C93B72A9F, false) 
[AAID -> "(1CFB3297C3146F2F-28D6902A610BA3B1, false)",ECID -> "(88251082790399360979074868101758236669,true)"]           | (1CFB3297C3146F2F-28D6902A610BA3B1, false) 
[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"]           | (533F56A682C059B1-396437F68879F61D, false) 
(10 rows)
```

### Find the number of identities in the identity map

`cardinality(array<T>): Int / cardinality(map<K, V>): Int`

This snippet returns the size of a given array or map, and provides an alias. It returns -1 if the value is null.

**Example**

The query below retrieves the `identitymap` column and the `Cardinality` function calculates the number of elements in each map within the `identitymap`. The results are limited to ten rows and are filtered based on a specified timestamp range.

```sql
SELECT identitymap,
       Cardinality(identitymap)
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT  10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
                                                                  identitymap                                            |  size(identitymap) 
-------------------------------------------------------------------------------------------------------------------------+-------------------------------------
[AAID -> "(3617FBB942466D79-5433F727AD6A0AD, false)",ECID -> "(67383754798169392543508586197135045866,true)"]            |      2  
[AAID -> "[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"] |      2  
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            |      2  
[AAID -> "(6A60527B9D66CCB9-29638A632B45E9, false)",ECID -> "(50117234882064422833184021414056250576,true)"]             |      2  
[AAID -> "(64FB4DC317E21B59-2A23602D234647E7, false)",ECID -> "(79785479785408621882908938960039330887,true)"]           |      2  
[AAID -> "(2E70E8CF6DB1DE86-270E55BBBA58B9C1, false)",ECID -> "(80073674009951685326146914344189474476,true)"]           |      2  
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            |      2  
[AAID -> "(1CFB3297C3146F2F-28D6902A610BA3B1, false)",ECID -> "(88251082790399360979074868101758236669,true)"]           |      2  
[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"]           |      2  
(10 rows)
```

### Find the distinct elements in productListItems

`array_distinct(array<T>): array<T>`

The snippet above removes duplicate values from the given array.

**Example**

The query below selects the `productlistitems` column, removes any duplicate items from the arrays, and limits the output to ten rows based on a specified timestamp range.

```sql
SELECT productlistitems,
              Array_distinct(productlistitems)
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | array_distinct(productlistitems)
---------------------+---------------------------------
                     |
(123679, NULL, NULL) | (123679, NULL, NULL)
                     |
                     |
(1346,NULL, NULL)    | (1346,NULL, NULL)
                     |
(98347, NULL, NULL)  | (98347, NULL, NULL)
                     |
(176015, NULL, NULL) | (176015, NULL, NULL)
                     |

(10 rows)
```

