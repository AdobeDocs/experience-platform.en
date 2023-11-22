---
title: Retrieve Similar Records Based on a Similarity Metric
description: Learn how to identify and retrieve similar or related records from one or more datasets based on a similarity metric.
---
# Retrieve similar records based on a similarity metric

You can solve several common use cases through the use of Data Distiller Lambda functions to identify and retrieve similar or related records from one or more datasets. This methodology provides solutions to: data deduplication, record linkage, recommendation systems, information retrieval, and text analytics among others.

The document describes the process of implementing a similarity join using Data Distiller Lambda Functions. The key sections of the process include: [tokenization using Lambda functions](#tokenization), the [cross join and Jaccard similarity calculation](#cross-join-calculation), and the [application of a threshold on the Jaccard Similarity measure](#threshold-application). 

This guide provides SQL code snippets and explanations for each step of the process to compute the similarity between sets of data. This workflow implements similarity joins using the Jaccard similarity measure and tokenization using Data Distiller Lambda Functions to identify and retrieve similar or related records from one or more datasets based on a similarity metric.

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

**Tokenization Using Lambda Functions**:

Demonstrates the creation of 2-grams, 3-grams, etc., using lambda functions in Data Distiller.
Overlapping bigrams are generated for effective tokenization.
Lambda functions are explained and used to create n-grams efficiently.

**Cross Join and Jaccard Similarity Calculation**:

Cross join of unique elements across two feature vectors.
Calculation of Jaccard similarity measure between token sets.

**Thresholding on Jaccard Similarity**:

Applying a threshold (0.4) to filter out columns that meet the similarity criteria.


