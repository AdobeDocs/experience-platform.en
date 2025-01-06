---
title: Bot Filtering Using Statistics and Machine Learning
description: Learn how to use Query Service and machine learning to determine bot activity and filter their actions from genuine online website visitor traffic.
---
# Bot Filtering using statistics and machine learning

<!-- Provide an overview of bot filtering and its importance in analytics platforms. Explain how bot activity skews metrics and impacts data integrity. Mention Adobe Experience Platform Query Service and its role in maintaining data quality. Briefly introduce the methods—SQL-based thresholds and machine learning—covered in the document. -->

## Understanding Bot Activity

<!-- Explain the general characteristics of bot activity, focusing on activity spikes (e.g., excessive clicks in short time intervals). Include definitions for key terms such as **ECID** (Experience Cloud Visitor ID) and **Timestamp**.  -->


## Example 1: SQL-Based Bot Filtering

<!-- intro sentence -->

### Defining thresholds for bot activity
 
<!-- Describe setting an arbitrary threshold (e.g., 60 clicks per minute). Provide the SQL query example to detect bot activity. -->

### Expanding to multiple intervals**

<!-- Explain how to bucket thresholds over various time intervals (e.g., 1 minute, 5 minutes, 30 minutes). Include the SQL code and describe creating a view. -->


## Example 2: Advanced Statistical Functions for Bot Filtering

<!-- intro sentence -->

### Building a training dataset

<!-- * **Note:** Explain how to prepare a dataset with nested and flat structures. Highlight the importance of grouping by attributes like timestamp and user ID. -->

### Using Transform and Options clauses

<!-- * **Note:** Detail how to impute null values and apply transformations (e.g., binarization, quantile discretization). Describe creating a decision tree classifier model using statistical functions. -->

### SQL Code for model creation

<!-- * **Note:** Include the SQL code for creating a decision tree classifier model and explain its key components, such as the TRANSFORM and OPTIONS clauses. -->


## Example 3: Machine Learning Model Evaluation and Predictions

<!-- intro sentence -->

### Evaluating the Model

<!-- Discuss the evaluation process using metrics like accuracy, precision, and recall. Provide the SQL code for the `MODEL_EVALUATE` command. -->

### Predicting Bot Activity

<!-- Explain the process of using a trained model to predict bot activity in test datasets. Include the SQL code for `MODEL_PREDICT` and its expected output. -->


## Practical applications

<!-- Provide three hypothetical real-world use cases for bot filtering: -->

- **Example 1:** E-commerce platform filtering bot traffic from analytics to improve conversion rate accuracy.
- **Example 2:** Online news website mitigating false engagement metrics from bot traffic.
- **Example 3:** Advertising networks removing bot-generated clicks to ensure fair billing for advertisers.


## Manage Models in Query Service

<!-- intro sentence -->

### List available models

<!-- Include the `SHOW MODELS` command and its output format. -->

### Delete models

<!-- Explain the `DROP MODEL` command for removing obsolete models. -->

## Next steps

<!-- Summarize the techniques discussed, emphasizing the importance of combining SQL-based methods with machine learning for robust bot filtering. Include recommendations for next steps, such as automating model retraining and periodic evaluation. -->
