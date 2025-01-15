---
title: Bot Filtering Using Statistics and Machine Learning
description: Learn how to use Data Distiller statistics and machine learning to identify and filter bot activity to ensure accurate analytics and improved data integrity.
---
# Bot filtering using statistics and machine learning

To maintain accurate analytics and ensure data integrity in clickstream or web traffic data, it is essential to address bot activity. Employ bot filtering measures to remove unwanted traffic from your analytics platforms. Use Data Distiller methods to implement effective bot filtering and maintain high-quality data.

This document provides a comprehensive guide to identifying and filtering bot activity using SQL and machine learning techniques. It presents a progression of complementary approaches, starting with basic filtering and advancing to machine learning-based detection and evaluation. Adopt this robust framework to enhance your bot detection and maintain your data integrity.

## Understand bot activity {#understand-bot-activity}

Bot activity can be identified by detecting spikes in user actions within specific time intervals. For example, excessive clicks performed by a single user in a short timeframe could indicate bot behavior. The two key attributes used in bot filtering are:

- **ECID (Experience Cloud Visitor ID):** A universal, persistent ID that identifies visitors.
- **Timestamp:** The time and date when an activity occurs on the website.

Bot filtering ensures data quality by eliminating contamination caused by non-human interactions on a website.

The three examples shown below demonstrate how to use SQL and machine learning techniques to identify, refine, and predict bot activity. Use these methods to improve your data integrity and ensure actionable analytics.

## Example 1: SQL-based bot filtering {#sql-based-bot-filtering}

This SQL-based bot filtering example demonstrates how to use SQL queries to define thresholds and detect bot activity based on predefined rules. This foundational approach helps identify anomalies in web traffic by removing unusual activity. By customizing detection rules with defined thresholds and intervals, you can effectively tailor bot filtering to suit your specific traffic patterns.

<!-- 
### Dataset overview

The raw input dataset used for bot filtering should include key attributes that help identify and categorize user behavior. The attributes used in this example are as follows:

- **ECID (Experience Cloud Visitor ID):** A universal, persistent identifier that uniquely identifies website visitors.
- **Timestamp:** The time and date of an activity occurring on the website.
- **`webPageDetails.name`:** A string field containing the name of the webpage visited.

The output dataset is structured with both flat and nested fields. This structure enables flexibility when detecting anomolous traffic and supports advanced filtering strategies using SQL and machine learning. The nested fields include `count` and `web` which encapsulate granular details about activity thresholds and webpage specifics. Capturing these metrics ensures that features can be easily extracted for training and prediction tasks.

  - `count`: Captures activity thresholds for one-minute, five-minute, and thirty-minute intervals as integers.
  - `web`: Includes webpage details, such as the page name.

The flat fields used are:

  - `id`: This provides a straightforward reference for individual users to simplify grouping and identification.

 -->

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

Next, define different time intervals for thresholds. These intervals could include:

- **1-minute interval:** Up to 60 clicks.
- **5-minute interval:** Up to 300 clicks.
- **30-minute interval:** Up to 1800 clicks.

The following SQL query creates a view named `analytics_events_clicks_count_criteria` to handle thresholds across multiple intervals:

### Create aggregate click count view

The following query creates a view named `analytics_events_clicks_count_criteria`. This view consolidates click counts for 1-minute, 5-minute, and 30-minute intervals into a structured dataset and flags potential bot activity based on predefined thresholds.

```sql
CREATE VIEW analytics_events_clicks_count_criteria as  
SELECT struct (
        cast(count_1_min AS int) one_minute,
        cast(count_5_mins AS int) five_minute,
        cast(count_30_mins AS int) thirty_minute
       ) count_per_id,
       id,
      struct (
        struct (name) webpagedetails
      ) web,
      CASE
        WHEN count.one_minute > 50 THEN 1
        ELSE 0
      END AS isBot
FROM (
  SELECT table_count_1_min.mcid AS id,
         count_1_min,
         count_5_mins,
         count_30_mins,
         table_count_1_min.name AS name
  FROM (
      -- Joins and Grouping Logic
      (SELECT mcid, Max(count_1_min) AS count_1_min, name
       FROM (SELECT enduserids._experience.mcid.id AS mcid,
                    Count(*) AS count_1_min,
                    web.webPageDetails.name AS name
             FROM delta_table
             WHERE TIMESTAMP BETWEEN TO_TIMESTAMP('2019-09-01 00:00:00')
                               AND TO_TIMESTAMP('2019-09-01 23:00:00')
             GROUP BY UNIX_TIMESTAMP(timestamp) / 60,
                      enduserids._experience.mcid.id,
                      web.webPageDetails.name)
       GROUP BY mcid, name) AS table_count_1_min
       LEFT JOIN
       (SELECT mcid, Max(count_5_mins) AS count_5_mins, name
        FROM (SELECT enduserids._experience.mcid.id AS mcid,
                     Count(*) AS count_5_mins,
                     web.webPageDetails.name AS name
              FROM delta_table
              WHERE TIMESTAMP BETWEEN TO_TIMESTAMP('2019-09-01 00:00:00')
                                AND TO_TIMESTAMP('2019-09-01 23:00:00')
              GROUP BY UNIX_TIMESTAMP(timestamp) / 300,
                       enduserids._experience.mcid.id,
                       web.webPageDetails.name)
        GROUP BY mcid, name) AS table_count_5_mins
       ON table_count_1_min.mcid = table_count_5_mins.mcid
       LEFT JOIN
       (SELECT mcid, Max(count_30_mins) AS count_30_mins, name
        FROM (SELECT enduserids._experience.mcid.id AS mcid,
                     Count(*) AS count_30_mins,
                     web.webPageDetails.name AS name
              FROM delta_table
              WHERE TIMESTAMP BETWEEN TO_TIMESTAMP('2019-09-01 00:00:00')
                                AND TO_TIMESTAMP('2019-09-01 23:00:00')
              GROUP BY UNIX_TIMESTAMP(timestamp) / 1800,
                       enduserids._experience.mcid.id,
                       web.webPageDetails.name)
        GROUP BY mcid, name) AS table_count_30_mins
       ON table_count_1_min.mcid = table_count_30_mins.mcid
  )
)
```

In this statement, the joins combine data from `table_count_1_min`, `table_count_5_mins`, and `table_count_30_mins` using the `mcid` value. It then consolidates click counts for each user across multiple time intervals to provides a complete view of user activity. The grouping logic organizes clicks into 1-minute, 5-minute, and 30-minute intervals based on timestamps and aggregates them by user (`mcid`) and webpage. Finally, the flagging logic then identifies users that exceed 50 clicks in one minute and marks them as bots (`isBot = 1`).

### The output dataset to be used for training

<!-- resultant ? -->

The result of this expression might look similar to the table provided below. In the table the `isBot` column acts as a label that distinguishes between bot and non-bot activity.

```console
| `id`           | `count_per_id`                                        | `isBot` | `web`                                                                                                                    |
|--------------|-----------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------|
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":99}| 1    | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 1E+18        | {"one_minute":1,"five_minute":1,"thirty_minute":1}   | 0     | {"webpagedetails":{"name":"KR+CC8TQzPyMOE/bk7EGgN3lSvP8OsxeI2aLaVrbaeLn8XK3y3zok2ryVyZoiBu3"}}                       |
| 1.00007E+18  | {"one_minute":1,"five_minute":1,"thirty_minute":1}   | 0     | {"webpagedetails":{"name":"8DN0dM4rlvJxt4oByYLKZ/wuHyq/8CvsWNyXvGYnImytXn/bjUizfRSl86vmju7MFMXxnhTBoCWLHtyVSWro9LYg0MhN8jGbswLRLXoOIyh2wduVbc9XeN8yyQElkJm3AW3zcqC7iXNVv2eBS8vwGg=="}} |
| 1.00008E+18  | {"one_minute":1,"five_minute":1,"thirty_minute":1}   | 0     | {"webpagedetails":{"name":"KR+CC8TQzPyMOE/bk7EGgN3lSvP8OsxeI2aLaVrbaeLn8XK3y3zok2ryVyZoiBu3"}}                       |
```

<!-- {style="table-layout:auto"} -->

### Output dataset structure

The following schema diagram outlines the structure of the resultant dataset. The diagram highlights the nested and flat fields used for efficient processing and bot activity detection.

```console
root
 |-- count: struct (nullable = false)
 |    |-- one_minute: integer (nullable = true)
 |    |-- five_minute: integer (nullable = true)
 |    |-- thirty_minute: integer (nullable = true)
 |-- id: string (nullable = true)
 |-- web: struct (nullable = false)
 |    |-- webpagedetails: struct (nullable = false)
 |    |    |-- name: string (nullable = true)
 |-- isBot: integer (nullable = false)
```

## Example 2: Advanced statistical functions for bot filtering {#statistical-functions-for-bot-filtering}

This second example builds on basic SQL filtering by incorporating machine learning techniques to refine thresholds and improve filtering accuracy. By using advanced statistical functions, such as regression analysis or clustering algorithms, this approach introduces predictive capabilities that you can use to develop models for handling complex datasets with greater precision.

### Build a training dataset {#build-a-training-dataset}

First, prepare a dataset with nested and flat structures for machine learning (as described above). Further guidance on how to do this can be found in the [Working with nested data structures documentation](../key-concepts/nested-data-structures.md). Then group the data by timestamp, user ID, and webpage name to identify patterns in bot activity.

### Use Transform and Options clauses {#transform-and-preprocess}

Apply null imputation and other general transformations to handle null values and prepare features for the model. Use functions like `numeric_imputer`, `quantile_discretizer`, and `string_indexer` to preprocess the data. These transformations ensure compatibility with the machine learning algorithm. Refer to the [Feature transformation techniques documentation](../advanced-statistics/feature-transformation.md) to learn how to use transformation and preprocess your data.

### Use SQL for model creation {#model-creation}

Finally, use an SQL statement to create a decision tree classifier model. The key components, and their roles, of the model creation query are explained below:

- **Create a name or alias for the model.** Assign a name to the model for later reference. In this case the statement uses `CREATE MODEL bot_filtering_model`.
- **The TRANSFORM clause** Define the transformations applied to prepare the features for the model. These transofrmations should include imputing null values, discretizing data into buckets, and scaling the features.
- **Options clause:** Specify the type of model and any other hyperparameters within this clause. For example, `decision_tree_classifier` and `max_depth=4` are were chosen as this is a classification problem. Other parameters like `MAX_DEPTH=4` are used to tune the model for better performance.
- **Source the training data with the SELECT clause** This clause should include both the feature columns (`count_per_id`, `web`, `id`) and the label column (`isBot`), which indicates whether an action is bot-like.

Your statement might look similar to the example below.

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

**Result**

In the results (displayed below), the model `bot_filtering_model` is successfully created with a unique ID, name, and version. This output serves as a reference for tracking and managing models. Use these references to identify the exact configuration and version used for predictions or evaluations.

```console

           Created Model ID           |       Created Model       | Version
--------------------------------------+---------------------------+---------
 2fb4b49e-d35c-44cf-af19-cc210e7dc72c | bot_filtering_model       |       1
```

### Evaluate the trained model {#evaluate-trained-model}

After creating the model, evaluate its performance using the `MODEL_EVALUATE` command. This step ensures that the model meets accuracy and performance requirements for detecting bot activity. Use the following SQL command to evaluate the model:

```sql
SELECT *
FROM   model_evaluate(bot_filtering_model, 1,
                      SELECT count_per_id, isBot, web, id
                      FROM   analytics_events_clicks_count_criteria);
```

**Result**

The response includes metrics such as accuracy, precision, recall, and AUC-ROC, which indicate the model's effectiveness in identifying bot activity. 

```console
auc_roc | accuracy | precision | recall
---------+----------+-----------+--------
     1.0 |      1.0 |       1.0 |    1.0
```

These results confirm that the model performed well on the training data.

>[!TIP]
>
>For use on production sandboxes, consider evaluating the model on test datasets to ensure it generalizes effectively.

The table below explains each metric:

| **Metric**   | **Description**                                                                                     |
|--------------|-----------------------------------------------------------------------------------------------------|
| `auc_roc`  | A perfect score (1.0) indicates the model is highly effective in distinguishing between bot and non-bot activity. |
| `accuracy` | The percentage of correct predictions made by the model.                                            |
| `precision`| The proportion of true bot predictions among all predicted bots.                                    |
| `recall`   | The proportion of true bots detected out of all actual bots.                                        |

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

<!-- Missing:


The first argument specifies the model name, which was created using the CREATE MODEL command.
The second argument indicates the version of the model that should be used for evaluation.
The final argument provides the evaluation dataset, and it's important to note that the label column is included in the SELECT query.

The transformations applied during training are automatically applied during evaluation.
 -->

**Results**

In the results below, the ...

```console
auc_roc | accuracy | precision | recall
---------+----------+-----------+--------
     1.0 |      1.0 |       1.0 |    1.0
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

To manage your machine learning models, use the SQL key words listed in the section below.

### List available models {#list-available-models}

Efficiently manage and review the models with the `SHOW MODELS;` command. This command lists all the machine learning models that have been created in the current workspace. The output provides an overview of the available models and includes their names, versions, and other metadata.

```sql
SHOW MODELS;
```

### Delete models {#delete-models}

To free up resources and ensure that only relevant models are maintained, use the `DROP MODEL` command to remove obsolete or unnecessary models. This command deletes the machine learning model specified after the key words. In the example below, the `bot_filtering_model` is removed from the system.

```sql
DROP MODEL bot_filtering_model;
```

## Next Steps

By reading this document, you have learned how to identify and filter bot activity using SQL and machine learning techniques in Adobe Experience Platform Query Service. Next, apply these concepts to your datasets and automate model retraining for continuous improvement.
