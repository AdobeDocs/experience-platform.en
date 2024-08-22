---
title: Feature Engineering SQL Extension
description: This document provides an overview of the Data Distiller feature engineering SQL extension that preprocesses data for machine learning. It covers the available feature extraction, transformation, and selection techniques, along with possible algorithm configurations.
role: Developer
---
# Feature engineering SQL extension

Use the Data Distiller feature engineering SQL extension to transform raw data into meaningful features that improve machine learning model accuracy. 

Use this extension to simplify and automates the data preprocessing process and enable seamless experimentation with different feature engineering techniques. Designed for distributed computing, you can perform feature engineering on large datasets in a parallel and scalable manner, significantly reducing the time required for data preprocessing with the Data Distiller feature engineering SQL extension.

## Technique overview

To effectively utilize the Data Distiller feature engineering SQL extension, categorize your feature engineering techniques into three main areas: Feature Extraction, Feature Transformation, and Feature Selection. Each area includes specific functions designed to streamline and enhance your data preprocessing efforts.

### Feature extraction

Begin by extracting relevant information from your data, particularly text data, and convert it into a numerical format that machine learning models can easily process. Use the following functions to perform feature extraction:

- **Textual Transformer**: Convert textual data into numerical features.
- **Count Vectorizer**: Transform a collection of text documents into vectors of token counts.
- **N-gram**: Generate sequences of n-grams from text data.
- **Stop Words Remover**: Filter out common words that do not carry significant meaning.
- **TF-IDF**: Measure the importance of words in a document relative to a corpus.
- **Tokenizer**: Break down text into individual terms (words).
- **Word2Vec**: Map words to fixed-size vectors and create word embeddings.

### Feature transformation

After extracting features, focus on modifying them to improve their quality and suitability for machine learning models. Apply scaling, normalization, or encoding to ensure your features are on the same scale and have a similar distribution. Use the following transformers:

### Feature selection

Focus on selecting a subset of the most important features from the original set. This process helps reduce the dimensionality of your data, making it easier for your models to process and improving overall model performance.

### General Transformers

- **Numeric Imputer**: Fill missing values in numeric columns with a specified value.
- **String Imputer**: Replace missing string values with a specified string.
- **Vector Assembler**: Combine multiple columns into a single vector column.

### Numeric Transformers

- **Binarizer**: Convert continuous features into binary values based on a threshold.
- **Bucketizer**: Map continuous features into discrete buckets.
- **Min-Max Scaler**: Rescale features to a specified range, typically [0, 1].
- **Max Abs Scaler**: Rescale features to the range [-1, 1] without altering sparsity.
- **Normalizer**: Normalize vectors to have unit norm.
- **Quantile Discretizer**: Convert continuous features into categorical features by binning them into quantiles.
- **Standard Scaler**: Normalize features to have unit standard deviation and/or zero mean.

### Categorical Transformers

- **String Indexer**: Convert categorical string data into numeric indices.
- **One Hot Encoder**: Map categorical data into binary vectors.

## Supported Machine Learning Algorithms

Utilize the Data Distiller feature engineering SQL extension to prepare your data for the following machine learning algorithms:

## Classification and Regression

- **Logical Regression**: Use this for binary classification tasks.
- **Linear Regression**: Apply this algorithm for predicting continuous values.

### Clustering

- **K-Means**: Use K-Means clustering for unsupervised learning tasks where you need to group data points into clusters based on their similarities.

## Implementing the OPTIONS Clause

When defining your model, use the `OPTIONS` clause to specify the algorithm and its parameters. Begin by setting the `type` parameter to indicate the algorithm you are using, such as `K-Means`. Then, define the relevant parameters in the `OPTIONS` clause as key-value pairs to fine-tune your model. Understand that some parameters may be positional and require all preceding parameters to be specified if custom values are provided. If you choose not to customize certain parameters, the system will apply default settings. Refer to the relevant documentation to understand each parameter's function and default values.
