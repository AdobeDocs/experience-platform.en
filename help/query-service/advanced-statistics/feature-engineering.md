---
title: Feature Engineering SQL Extension
description: Learn about the Data Distiller feature engineering SQL extension to preprocesses data for advanced statistical modeling. It covers the available feature extraction, transformation, and selection techniques.
role: Developer
exl-id: 622c8ef3-9651-46b3-ad22-021a93190149
---
# Feature engineering SQL extension 

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Data Distiller add on. For more information, contact your Adobe representative.

To meet your feature engineering needs use the SQL transformer extension to simplify and automate your data preprocessing. Use this extension to build features and enjoy seamless experimentation with different feature engineering techniques, including associating them with models. Designed for distributed computing, you can perform feature engineering on large datasets in a parallel and scalable manner, significantly reducing the time required for data preprocessing with the Data Distiller feature engineering SQL extension.

## Technique overview {#technique-overview}

The feature engineering capabilities cover three main areas: Feature Extraction, Feature Transformation, and Feature Selection. Each area includes specific functions designed to extract, convert, focus and improve your data preprocessing.

### Feature extraction {#feature-extraction}

Extract relevant information from your data, especially text data, and convert it into a numerical format that the supported models can consume or transform and derive datasets. Use the following functions to perform feature extraction:

- **[Textual Transformer](./feature-transformation.md#textual-transformations)**: Convert textual data into numerical features.
- **[Count Vectorizer](./feature-transformation.md#countvectorizer)**: Transform a collection of text documents into vectors of token counts.
- **[N-gram](./feature-transformation.md#ngram)**: Generate sequences of n-grams from text data.
- **[Stop Words Remover](./feature-transformation.md#stopwordsremover)**: Filter out common words that do not carry significant meaning.
- **[TF-IDF](./feature-transformation.md#tf-idf)**: Measure the importance of words in a document relative to a corpus.
- **[Tokenizer](./feature-transformation.md#tokenizer)**: Break down text into individual terms (words).
- **[Word2Vec](./feature-transformation.md#word2vec)**: Map words to fixed-size vectors and create word embeddings.

### Feature transformation {#feature-transformation}

In addition to extracting features, use the following general transformers to prepare your features for advanced statistical models and derived datasets. Apply scaling, normalization, or encoding to ensure that your features are on the same scale and have a similar distribution.

#### General transformers

Below is a list of tools for processing a wide range of data types to enhance your data preprocessing workflow.

- **[Numeric Imputer](./feature-transformation.md#numeric-imputer)**: Fill missing values in numeric columns with a specified value, such as the mean or median.
- **[String Imputer](./feature-transformation.md#string-imputer)**: Replace missing string values with a specified value, such as the most frequent string in the column.
- **[Vector Assembler](./feature-transformation.md#vector-assembler)**: Combine multiple columns into a single vector column to prepare data for machine learning models.
- **[Boolean Imputer](./feature-transformation.md#boolean-imputer)**: Fill missing boolean values with a specified value, such as `true` or `false`.

#### Numeric transformers

Apply these techniques to effectively process and scale numerical data for improved model performance.

- **[Binarizer](./feature-transformation.md#binarizer)**: Convert continuous features into binary values based on a threshold.
- **[Bucketizer](./feature-transformation.md#bucketizer)**: Map continuous features into discrete buckets.
- **[Min-Max Scaler](./feature-transformation.md#minmaxscaler)**: Rescale features to a specified range, typically [0, 1].
- **[Max Abs Scaler](./feature-transformation.md#maxabsscaler)**: Rescale features to the range [-1, 1] without altering sparsity.
- **[Normalizer](./feature-transformation.md#normalizer)**: Normalize vectors to have unit norm.
- **[Quantile Discretizer](./feature-transformation.md#quantilediscretizer)**: Convert continuous features into categorical features by binning them into quantiles.
- **[Standard Scaler](./feature-transformation.md#standardscaler)**: Normalize features to have a unit standard deviation and/or zero mean.

#### Categorical transformers

Use these transformers to convert and encode categorical data into formats suitable for machine learning models.

- **[String Indexer](./feature-transformation.md#stringindexer)**: Convert categorical string data into numeric indices.
- **[One Hot Encoder](./feature-transformation.md#onehotencoder)**: Map categorical data into binary vectors.

### Feature selection {#feature-selection}

Next, focus on selecting a subset of the most important features from the original set. This process helps reduce the dimensionality of your data, making it easier for your models to process and improving overall model performance.

<!-- Commented out as it 
## Supported machine learning algorithms {#supported-ml-algorithms}

Once you have preprocessed your data, use the feature engineering SQL extension to prepare your data for the following machine learning algorithms:

### Classification and regression {#classification-regression}

Use logical regression to predict categorical outcomes and linear regression to predict continuous values.

- **Logical Regression**: Use this for binary classification tasks.
- **Linear Regression**: Apply this algorithm for predicting continuous values.

### Clustering {#clustering}

Use a clustering algorithm to group data points into distinct clusters based on their similarities.

- **[`K-Means`](./feature-transformation.md#kmeans)**: Use `K-Means` for unsupervised learning tasks to partition data into a specified number of clusters, with each data point assigned to the cluster with the nearest mean. -->

## Implement the OPTIONS clause {#options-clause}

When you define your model, use the `OPTIONS` clause to specify the algorithm and its parameters. Begin by setting the `type` parameter to indicate the algorithm you are using, such as `K-Means`. Then, define the relevant parameters in the `OPTIONS` clause as key-value pairs to fine-tune your model. If you choose not to customize certain parameters, the system applies default settings. Refer to the relevant documentation to understand each parameter's function and default values.

### Next Steps

After learning the feature engineering techniques outlined in this document, progress onto the [Models](./models.md) document. It guides you through the process of creating, training, and managing trusted models using the features you've engineered. Once your models are built, proceed to the [Implement advanced statistical models document.](./implement-models/implement-models.md). This document serves as an overview, linking to in-depth guides for different modeling techniques, including clustering, classification, and regression. By following these documents, you learn how to configure and implement various trusted models within your SQL workflows and optimize your models for advanced data analysis.
