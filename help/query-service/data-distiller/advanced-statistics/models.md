---
title: Models
description: PLACEHOLDER
role: Developer
---
# Models

Query Service now supports the core processes of building and deploying a machine learning model. You can use SQL to teach the model using your data, verify its accuracy, and then apply that knowledge to make predictions on new data. You can then use the model to generalize from your past data to make informed decisions about real-world scenarios.

The three steps in machine learning to generate actionable insights are:

1. **Training**: The model learns patterns from the provided dataset. (create or replace model)
2. **Testing/Evaluation**: The model's performance is assessed using a separate dataset. (`model_evaluate`)
3. **Prediction**: The trained model is used to make predictions on new, unseen data.

Custom keywords have been introduced to allow for the core processes of a machine learning model while maintaining the familiarity of the syntax and keeping it as close as possible to existing SQL grammar. This document covers the SQL necessary to create a model, add constructs, train the model, and evaluate and predict insights.

<!-- A model is an algorithm plus a transformation. -->

## Model creation and training {#create-and-train}

Learn how to define, configure, and train a machine learning model using SQL commands. The SQL below demonstrates how to create a model, apply feature engineering transformations, and initiate the training process, to ensure the model is configured correctly for future use.

```sql
CREATE
OR
replace modelIF NOT EXISTS <model_alias> transform( one_hot_encoder(NAME) ohe_name, string_indexer(gender) gendersi) options ( type = 'LogisticRegression', label = <label-COLUMN>, ) AS
SELECT col1,
       col2,
       col3
FROM   training-dataset.
```

To help you understand the key components and configurations in the model creation and training process, the following notes explain the purpose and function of each element in the SQL example above.

- `<model_alias>`: The model alias is a reusable name assigned to the model, which can be referenced later.
- `transform`: The transform clause is used to apply feature engineering transformations (for example, one-hot encoding and string indexing) to the dataset before training the model.
- `label = <label-COLUMN>`: The label column in the training dataset that specifies the target or outcome the model aims to predict.
- `training-dataset`: This syntax selects the data used to train the model.
- `type = 'LogisticRegression'`: This syntax specifies the type of machine learning algorithm to use. Options include `LinearRegression`, `LogisticRegression`, and `KMeans`.
- `options`: This keyword provides a flexible set of key-value pairs to configure the model. The values `type` and `label`, used in this example are for illustration purposes only.
- **Model versioning**: When a model is first created, its version is set to 0.
- **Transform clause impact**: If the transform clause is used, only the fields specified in the transform clause are used to train the model.
- **Pipeline Stages**: Both the model and the applied transformations are saved as stages in a pipeline. This makes them reusable in a future evaluation or prediction steps.

## Update a model {#update}



`Update Model <model_alias>`



## Test {#test}

The SQL takes the model alias version number and the the data which will be result of this select query.

## Predict {#predict}

`model_predict`

## Evaluate and manage your models

The `SHOW MODELS` command is used to list all the available machine learning models in the database. use it to view the models that have been trained and are available for testing, evaluation, or prediction.

## Cleanup and maintain your models

Use the `DROP MODELS` command to delete specified machine learning models from the database. You can use it to remove outdated, unused, or unwanted models. This frees up resources and ensuring that only relevant models are maintained.

## Next steps

After reading this document, you now understand the base SQL syntax required for the core processes of building and deploying a machine learning model. You should now read the document that describes the transformations and options that are available. 

By converting or scaling data into a format or structure that is more suitable for model training and analysis you can improve model performance and accuracy by ensuring that the data aligns with the model's assumptions and optimizes its ability to learn patterns.
<!-- "transformation" refers to the process of converting or scaling data into a format or structure that is more suitable for model training and analysis.
 -->
