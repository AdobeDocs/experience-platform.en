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

## Placeholder title - Establish similarity

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

### Pairwise Jaccard Computation with String Similarity

To more accurately compare the similarities between strings, the pairwise similarity must be computed. Pairwise similarity splits highly dimensional objects into smaller dimensional objects for comparrisson and analysis. To do this, a string of text is broken into smaller parts or units (tokens). They could be individual letters, groups of letters (like syllables), or entire words. The similarity is calculated for each pair of tokens between each element in Set A with each element in Set B. This tokenization provides a foundation for analytical and computational comparisons, relationships, and insights to be drawn from the data.

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

## Creating Test Data in SQL

To manually create a test tables for the product sets, use SQL's CREATE TABLE statement.

```sql
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

## Tokenization and Data Transformation using SQL

This section illustrates the process of tokenization by breaking down strings into 2-grams (and higher-order n-grams) and various transformations like deduplication, whitespace removal, lowercase conversion, and extracting tokens using SQL functions like `REGEXP_EXTRACT_ALL`.

Overlapping bigrams are generated for effective tokenization.
Lambda functions are explained and used to create n-grams efficiently.

### Deduplication

### Whitespace removal

### Convert top lowercase

### Extract tokens using SQL

### Explore Solutions Using Data Distiller Lambda Functions

Introduces lambda functions in the context of Data Distiller, demonstrating their use for creating n-grams and iterating over sequences of characters.

## Compute the Cross Join of Unique Elements Across Two Feature Vectors

Perform a cross join to combine elements from two feature vectors, creating pairs of elements for comparison.

## Compute the Jaccard Similarity Measure

Calculates the Jaccard similarity between the pairs generated in the cross join, measuring the similarity between tokens.

## Filter results based on Jaccard Similarity threshold

Filter the results based on a predefined threshold (of 0.4 in this case) to select only those pairs that meet the similarity criteria. 
<!-- Applying a threshold (0.4) to filter out columns that meet the similarity criteria. -->

