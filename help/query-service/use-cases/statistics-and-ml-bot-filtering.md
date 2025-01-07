---
title: Bot Filtering Using Statistics and Machine Learning
description: Learn how to use Data Distiller statistics and machine learning to identify and filter bot activity to ensure accurate analytics and improved data integrity.
---
# Bot filtering using statistics and machine learning

To maintain accurate analytics and ensure data integrity in clickstream or web traffic data, it is essential to address bot activity. Employ bot filtering measures to remove unwanted traffic from your analytics platforms. Use Adobe Experience Platform Query Service to implement effective bot filtering and maintain high-quality data.

This document provides a comprehensive guide to identifying and filtering bot activity using SQL and machine learning techniques. It presents a progression of complementary approaches, starting with basic filtering and advancing to machine learning-based detection and evaluation. Adopt this robust framework to enhance your bot detection and maintain your data integrity.

## Understand bot activity {#understand-bot-activity}

Bot activity can be identified by detecting spikes in user actions within specific time intervals. For example, excessive clicks performed by a single user in a short timeframe could indicate bot behavior. The two key attributes used in bot filtering are:

- **ECID (Experience Cloud Visitor ID):** A universal, persistent ID that identifies visitors.
- **Timestamp:** The time and date when an activity occurs on the website.

Bot filtering ensures data quality by eliminating contamination caused by non-human interactions on a website.

The three examples shown below demonstrate how to use SQL and machine learning techniques to identify, refine, and predict bot activity. Use these methods to improve your data integrity and ensure actionable analytics.

## Example 1: SQL-based bot filtering {#sql-based-bot-filtering}

This SQL-based bot filtering example demonstrates how to use SQL queries to define thresholds and detect bot activity based on predefined rules. This foundational approach helps identify anomalies in web traffic by removing unusual activity. By customizing detection rules with defined thresholds and intervals, you can effectively tailor bot filtering to suit your specific traffic patterns.

### Define thresholds for bot activity {#define-thresholds}

First, define bot activity thresholds to identify suspicious behavior. For instance, if a visitor performs more than 60 clicks in one minute, the user is flagged as a bot.

The following SQL query illustrates how to detect bot activity:

```sql
SELECT *
FROM analytics_events_table
WHERE enduserids._experience.ecid NOT IN (
    SELECT enduserids._experience.ecid
    FROM analytics_events_table
    GROUP BY Unix_timestamp(timestamp) / 60, enduserids._experience.ecid
    HAVING Count(*) > 60
);
```

### Expand to multiple intervals {#expand-to-multiple-intervals}

Next, define for different time intervals for thresholds. These intervals could include:

- **1-minute interval:** Up to 60 clicks.
- **5-minute interval:** Up to 300 clicks.
- **30-minute interval:** Up to 1800 clicks.

The following SQL query creates a view to handle thresholds across multiple intervals:

```sql
CREATE VIEW analytics_events_clicks_count_criteria AS  
SELECT 
  struct (
    cast(count_1_min AS int) one_minute,
    cast(count_5_mins AS int) five_minute,
    cast(count_30_mins AS int) thirty_minute
  ) count_per_id,
  id,
  struct (struct (name) webpagedetails) web,
  CASE
    WHEN count.one_minute > 50 THEN 1
    ELSE 0
  END AS isBot
FROM (
  SELECT table_count_1_min.mcid AS id, count_1_min, count_5_mins, count_30_mins, table_count_1_min.name AS name
  FROM ... -- Add your SQL joins and grouping logic here.
);
```

## Example 2: Advanced statistical functions for bot filtering {#statistical-functions-for-bot-filtering}

This example builds on basic SQL filtering by incorporating machine learning techniques to refine thresholds and improve filtering accuracy. By using advanced statistical functions, such as regression analysis or clustering algorithms, this approach introduces predictive capabilities that you can use to develop models for handling complex datasets with greater precision.

### Building a training dataset

Prepare a dataset with nested and flat structures for machine learning. Group data by timestamp, user ID, and webpage name to identify patterns in bot activity.

### Using Transform and Options Clauses

Apply transformations to handle null values and prepare features for the model. Use functions like `numeric_imputer`, `quantile_discretizer`, and `string_indexer` to preprocess the data. These transformations ensure compatibility with the machine learning algorithm.

### SQL Code for Model Creation

The following SQL creates a decision tree classifier model:

```sql
CREATE MODEL bot_filtering_model
TRANSFORM (
  numeric_imputer(count_per_id.one_minute, 'mean') imputed_one_minute,
  numeric_imputer(count_per_id.five_minute, 'mode') imputed_five_minute,
  numeric_imputer(count_per_id.thirty_minute) imputed_thirty_minute,
  string_imputer(id, 'unknown') imputed_id,
  string_indexer(imputed_id) si_id,
  quantile_discretizer(imputed_five_minute) buckets_five,
  string_indexer(web.webpagedetails.NAME) si_name,
  quantile_discretizer(imputed_thirty_minute) buckets_thirty,
  vector_assembler(array(si_id, imputed_one_minute, buckets_five, si_name, buckets_thirty)) features,
  min_max_scaler(features) scaled_features
)
OPTIONS (model_type='decision_tree_classifier', max_depth=4, label='isBot')
AS
SELECT count_per_id, isBot, web, id FROM analytics_events_clicks_count_criteria;
```

## Example 3: Machine learning model evaluation and predictions {#model-evaluation-and-predictions}

This example demonstrates how to evaluate a trained machine learning model's performance. To measure predictive power, metrics such as accuracy and precision are used to assess its effectiveness on real-world test datasets. This step focuses on a model's practical reliability and highlights its use in identifying bot activity for fraud prevention and ensuring data integrity.

### Evaluate the model {#evaluate-the-model}

To evaluate the accuracy, precision, and recall of the model, use the `MODEL_EVALUATE` command.

```sql
SELECT *
FROM model_evaluate(bot_filtering_model, 1,
    SELECT count_per_id, isBot, web, id FROM analytics_events_clicks_count_criteria
);
```

### Predict bot activity {#predict-bot-activity}

You can then use the trained model to predict bot activity in test datasets:

```sql
SELECT *
FROM model_predict(bot_filtering_model, 1,
    SELECT count_per_id, web, id FROM analytics_events_clicks_count_criteria
);
```

## Practical applications {#practical-applications}

The following list of examples demonstrate how bot filtering can enhance data accuracy and user experience across a variety of industries.

- **E-commerce:** Filter bot traffic to improve conversion rate accuracy.
- **News Websites:** Mitigate false engagement metrics caused by bots.
- **Advertising Networks:** Ensure fair billing by removing bot-generated clicks.

## Manage your models {#manage-models}

This section explains the SQL key words you can use to manage machine learning models.

### List available models {#list-available-models}

Efficiently manage and review the models with the `SHOW MODELS;` command. This command lists all the machine learning models that have been created in the current workspace. The output provides an overview of the available models and includes their names, versions, and other metadata.

```sql
SHOW MODELS;
```

### Delete models {#delete-models}

Remove obsolete or unnecessary models with the `DROP MODEL` command. You can use this command to delete a specified machine learning model. In the example below, the `bot_filtering_model` is removed from the system. This is typically done to freeing up resources and ensuring that only relevant models are maintained.

<!-- The `DROP MODEL` command is used to delete the specified machine learning model, in this case, `bot_filtering_model`, from the system. This is typically done to remove obsolete or unnecessary models, freeing up resources and ensuring that only relevant models are maintained. -->

```sql
DROP MODEL bot_filtering_model;
```

## Next Steps

By reading this document, you have learned how to identify and filter bot activity using SQL and machine learning techniques in Adobe Experience Platform Query Service. Next, apply these concepts to your datasets and automate model retraining for continuous improvement.
