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
![A venn diagram to illustrate the Jackard similarity measurment.](.png)
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

The Jaccard similarity measure can be applied to a wide range of data types, including text data, categorical data, and binary data. Calculating the Jaccard similarity can be computationally efficient for large datasets, and makes it suitable for real-time or batch processing.

This workflow requires a similarity measurement between the text strings of the products in Set A and Set B. This measurement will be used later to establish a threshold for filtering. 

Product Set A and Set B contain the test data for this workflow and represent the words in two documents.

- Product Set A: `{iPhone, iPad, iWatch, iPad Mini}`
- Product Set B: `{iPhone, iPad, Macbook Pro}`

To calculate the Jaccard similarity between product sets A and B, first find the **intersection** (common elements) of the product sets. In this case, `{iPhone, iPad}`. Next, find the **union** (all unique elements) of the product sets A and B. In this example, `{iPhone, iPad, iWatch, iPad Mini, Macbook Pro}`.

Now, use the Jaccard similarity formula: `J(A,B) = A∪B / A∩B` to calculate the similarity. 

J = Jaccard distance
A = set 1
B = set 2

The Jaccard similarity between product sets A and B is 0.4. This indicates a moderate degree of similarity between the words used in the two documents. This is the similarity between the two sets that will become the columns in the similarity join. These columns represent individual pieces of information or characteristics associated with the data stored in a table. 

To more accurately compare the similarities between strings, the pairwise similarity must be computed. Pairwise similarity splits highly dimensional objects into smaller dimensional objects for comparrisson and anylisis. The similarity for each pair of points between each element in Set A with that in Set B provides the foundation for analytical and computational comparisons, relationships, and insights to be drawn from data.


<!-- JUNK ON COLUMNS:
To establsh the similarity of to specific fields or attributes within a structured dataset, this guide uses the Jaccard similarity calculation. 

columns' in this context are the individual fields or attributes within the datasets used for performing similarity computations, tokenization, and filtering operations. Each column holds specific information or results generated at different stages of the data processing pipeline described in the document. -->


### Pairwise Jaccard Computation with String Similarity

Performs pairwise Jaccard similarity computations between elements in two sets by tokenizing and comparing the elements.

## Creating Test Data in SQL

Demonstrates SQL code to manually create test tables using SQL's CREATE TABLE statement.

## Tokenization and Data Transformation using SQL

This section illustrates the process of tokenization by breaking down strings into 2-grams (and higher-order n-grams) and various transformations like deduplication, whitespace removal, lowercase conversion, and extracting tokens using SQL functions like `REGEXP_EXTRACT_ALL`.

Overlapping bigrams are generated for effective tokenization.
Lambda functions are explained and used to create n-grams efficiently.

### Explore Solutions Using Data Distiller Lambda Functions

Introduces lambda functions in the context of Data Distiller, demonstrating their use for creating n-grams and iterating over sequences of characters.

## Compute the Cross Join of Unique Elements Across Two Feature Vectors

Perform a cross join to combine elements from two feature vectors, creating pairs of elements for comparison.

## Compute the Jaccard Similarity Measure

Calculates the Jaccard similarity between the pairs generated in the cross join, measuring the similarity between tokens.

## Filter results based on Jaccard Similarity threshold

Filter the results based on a predefined threshold (of 0.4 in this case) to select only those pairs that meet the similarity criteria. 
<!-- Applying a threshold (0.4) to filter out columns that meet the similarity criteria. -->

