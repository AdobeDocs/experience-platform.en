---
title: Models
description: Model lifecycle management with the Data Distiller SQL extension. Learn how to create, train, and manage advanced statistical models using SQL, including key processes such as model versioning, evaluation, and prediction, to derive actionable insights from your data.
role: Developer
---
# Models

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Data Distiller add on. For more information contact your Adobe representative.

Query Service now supports the core processes of building and deploying a model. You can use SQL to train the model using your data, evaluate its accuracy, and then apply train model to make predictions on new data. You can then use the model to generalize from your past data to make informed decisions about real-world scenarios.

The three steps in the model lifecycle for generating actionable insights are:

1. **Training**: The model learns patterns from the provided dataset. (create or replace model)
2. **Testing/Evaluation**: The model's performance is assessed using a separate dataset. (`model_evaluate`)
3. **Prediction**: The trained model is used to make predictions on new, unseen data.

Use the model SQL extension, added to the existing SQL grammar, to manage the model lifecycle according to your business needs. This document covers the SQL required to create or replace a model, train, evaluate, retrain when necessary, and predict insights.

## Model creation and training {#create-and-train}

Learn how to define, configure, and train a machine learning model using SQL commands. The SQL below demonstrates how to create a model, apply feature engineering transformations, and initiate the training process to ensure the model is configured correctly for future use. The following SQL commands, detail different options for model creation and management:

- **CREATE MODEL**: Creates and trains a new model on a specified dataset. If a model with the same name already exists, this command will return an error.
- **CREATE MODEL IF NOT EXISTS**: Creates and trains a new model only if a model with the same name does not already exist on the specified dataset.
- **CREATE OR REPLACE MODEL**: Creates and trains a model, replacing the latest version of an existing model with the same name on the specified dataset.

```sql
CREATE MODEL | CREATE MODEL IF NOT EXISTS | CREATE OR REPLACE MODEL}
model_alias
[TRANSFORM (select_list)]
[OPTIONS(model_option_list)]
[AS {select_query}]
 
model_option_list:
    MODEL_TYPE = { 'LINEAR_REG' |
                   'LOGISTIC_REG' |
                   'KMEANS' }
  [, MAX_ITER = int64_value ]
 [, LABEL = string_array ]
[, REG_PARAM = float64_value ]
```

**Example**

```sql
CREATE MODEL churn_model
TRANSFORM (vector_assembler(array(current_customers, previous_customers)) features) 
OPTIONS(MODEL_TYPE='linear_reg', LABEL='churn_rate') 
AS
SELECT *
FROM churn_with_rate
ORDER BY period;
```

To help you understand the key components and configurations in the model creation and training process, the following notes explain the purpose and function of each element in the SQL example above.

- `<model_alias>`: The model alias is a reusable name assigned to the model, which can be referenced later. It is required to give your model a name.
- `transform`: The transform clause is used to apply feature engineering transformations (for example, one-hot encoding and string indexing) to the dataset before training the model. The last clause of the `TRANSFORM` statement should be either a `vector_assembler` with a list of columns that would compose the features for model training, or a derived type of the `vector_assembler` (such as `max_abs_scaler(feature)`, `standard_scaler(feature)`, and so on). Only the columns mentioned in the last clause will be used for training; all other columns, even if included in the `SELECT` query, will be excluded.
- `label = <label-COLUMN>`: The label column in the training dataset that specifies the target or outcome the model aims to predict.
- `training-dataset`: This syntax selects the data used to train the model.
- `type = 'LogisticRegression'`: This syntax specifies the type of machine learning algorithm to use. Options include `LinearRegression`, `LogisticRegression`, and `KMeans`.
- `options`: This keyword provides a flexible set of key-value pairs to configure the model.
  - `Key model_type`: `model_type = '<supported algorithm>'`: Specifies the type of machine learning algorithm to use. Supported options include `LinearRegression`, `LogisticRegression`, and `KMeans`.
  - `Key label`: `label = <label_COLUMN>`: Defines the label column in the training dataset, which indicates the target or outcome the model is aiming to predict.

Use SQL to reference the dataset used for training.

## Update a model {#update}

Learn how to update an existing machine learning model by applying new feature engineering transformations and configuring options like the type of algorithm and label column. The SQL below demonstrates how to increase the model's version number with each update, and ensure that changes are tracked so the model can be reused in future evaluation or prediction steps.

```sql
UPDATE model <model_alias> transform( one_hot_encoder(NAME) ohe_name, string_indexer(gender) gendersi) options ( type = 'LogisticRegression', label = <label-COLUMN>, ) ASSELECT col1,
       col2,
       col3
FROM   training-dataset.
```

To help you understand how to manage model versions and apply transformations effectively, the following notes explain the key components and options in the model update workflow.

- `UPDATE model <model_alias>`: The update command handles versioning and increases the model's version number with each update.
- `version`: An optional keyword used only during updates to create a new version of the model.

## Test {#test}

To ensure reliable results, assess the accuracy and effectiveness of the model before deploying it for predictions with the `model_evaluate` keyword. The SQL statement below specifies a test dataset, specific columns, and the model's version to test the model by evaluating its performance.

```sql
SELECT *
FROM   model_evaluate(model-alias, version-number,SELECT col1,
       col2,
       label-COLUMN
FROM   test -dataset)
```

The `model_evaluate` function takes `model-alias` as its first argument and a flexible `SELECT` statement as its second argument. Query Service first executes the `SELECT` statement and maps the results to the `model_evaluate` Adobe Defined Function (ADF). The system expects the column names and data types in the `SELECT` statement's result to match those used in the training step. These column names and data types are treated as test data and label data for evaluation.

>[!IMPORTANT]
>
>When evaluating (`model_evaluate`) and predicting (`model_predict`), the transformation(s) conducted at the time of training are used.

## Predict {#predict}

Next, use the `model_predict` keyword to apply the specified model and version to a dataset and generate predictions for the selected columns. The SQL below demonstrates this process, showing how to forecast outcomes using the model's alias and version.

```sql
SELECT *
FROM   model_predict(model-alias, version-number,SELECT col1,
       col2,
       label-COLUMN
FROM   dataset)
```

`model_predict` accepts the model alias as the first argument and a flexible `SELECT` statement as the second argument. Query Service first executes the `SELECT` statement and maps the results to the `model_predict` ADF. The system expects that the column names and data types in the `SELECT` statement's result to match those from the training step. This data is then used for scoring and generating predictions.

>[!IMPORTANT]
>
>When evaluating (`model_evaluate`) and predicting (`model_predict`), the transformation(s) conducted at the time of training are used.

## Evaluate and manage your models

The `SHOW MODELS` command is used to list all the available machine learning models in the database. Use it to view the models that have been trained and are available for testing, evaluation, or prediction. When queried, the information is fetched from the model repository which is saved at the time of model creation. The details returned are: model id, model name, version, source dataset, algorithm details, options/parameters, created/updated time, and the user who created the model. 

```sql
SHOW MODELS;
```

The results appear in a table similar to the one seen below:

| model-id           |     model-name | version | source-dataset  | type                  | options                      | transform                                                                 | fields              | created             | updated             | created BY |
|--------------------|---------------|---------|------------------|-----------------------|------------------------------|---------------------------------------------------------------------------|----------------------|---------------------|---------------------|------------|
|`model-84362-mdunj` | `SalesModel`  | 1.0     | `sales_data_2023`| `LogisticRegression`  | `{"label": "label-field"}`   | `one_hot_encoder(name)`, `ohe_name`, `string_indexer(gender)`, `genderSI` | \["name", "gender"\] | 2024-08-14 10:30 AM | 2024-08-14 11:00 AM | `JohnSnow@adobe.com` |

## Cleanup and maintain your models

Use the `DROP MODELS` command to delete specified machine learning models from the database. You can use it to remove outdated, unused, or unwanted models. This frees up resources and ensuring that only relevant models are maintained. You can also include an optional model name for improved specificity. This This only drops model with the provided model version.

```sql
DROP MODEL IF EXISTS modelName
DROP MODEL IF EXISTS modelName modelVersion ;
```

## Next steps

After reading this document, you now understand the base SQL syntax required to create, train, and manage machine learning models using Data Distiller. Next, explore the [Algorithms](./algorithms.md) document to learn about the various machine learning methods available and how to implement them effectively within your SQL workflows. If you haven't already, make sure to review the [Feature Engineering](./feature-engineering.md) document to ensure your data is optimally prepared for model training.
