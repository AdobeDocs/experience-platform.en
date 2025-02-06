---
title: Bot Filtering Using Statistics and Machine Learning
description: Learn how to use Data Distiller statistics and machine learning to identify and filter bot activity to ensure accurate analytics and improved data integrity.
exl-id: 30d98281-7d15-47a6-b365-3baa07356010
---
# Bot filtering using statistics and machine learning

The practical applications of bot filtering span various industries. In e-commerce, it improves the reliability of conversion rate metrics, news websites can benefit from mitigating false engagement metrics, and advertising networks can ensure fair billing. To maintain accurate analytics and ensure data integrity in clickstream or web traffic data, you must address bot activity. You can ensure high-quality analytics data by using Data Distiller to implement effective bot filtering and eliminate unwanted traffic.

This document provides a comprehensive guide to identifying and filtering bot activity using SQL and machine learning techniques. It presents a progression of complementary approaches, starting with basic filtering and advancing to machine learning-based detection and evaluation. Adopt this robust framework to enhance your bot detection and maintain your data integrity.

## Understand bot activity {#understand-bot-activity}

Bot activity can be identified by detecting spikes in user actions within specific time intervals. For example, excessive clicks performed by a single user in a short timeframe could indicate bot behavior. The two key attributes used in bot filtering are:

- **ECID (Experience Cloud Visitor ID):** A universal, persistent ID that identifies visitors.
- **Timestamp:** The time and date when an activity occurs on the website.

The examples below demonstrate how to use SQL and machine learning techniques to identify, refine, and predict bot activity. Use these methods to improve your data integrity and ensure actionable analytics.

## SQL-based bot filtering {#sql-based-bot-filtering}

This SQL-based bot filtering example demonstrates how to use SQL queries to define thresholds and detect bot activity based on predefined rules. This foundational approach helps identify anomalies in web traffic by removing unusual activity. By customizing detection rules with defined thresholds and intervals, you can effectively tailor bot filtering to suit your specific traffic patterns.

### Define thresholds for bot activity {#define-thresholds}

Start by analyzing your dataset to identify and categorize user behavior. Focus on attributes like ECID, timestamp, and `webPageDetails.name` (the name of the webpage visited) to group user actions and detect patterns that indicate bot activity.

The SQL query below demonstrates how to apply the threshold of more than 60 clicks in one minute to identify suspicious activity:

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

The following SQL query creates a view named `analytics_events_clicks_count_criteria` to handle thresholds across multiple intervals. The statement consolidates click counts for 1-minute, 5-minute, and 30-minute intervals into a structured dataset and flags potential bot activity based on predefined thresholds.

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

The statement joins data from `table_count_1_min`, `table_count_5_mins`, and `table_count_30_mins` using the `mcid` value and webpage. It then consolidates click counts for each user across multiple time intervals to provide a complete view of user activity. Finally, the flagging logic then identifies users that exceed 50 clicks in one minute and marks them as bots (`isBot = 1`).

### Output dataset structure

The output dataset is structured with both flat and nested fields. This structure allows flexibility when detecting anomolous traffic and supports advanced filtering strategies that use SQL and machine learning. The nested fields include `count` and `web` which encapsulate granular details about activity thresholds and webpages. Capturing these metrics means that features can be easily extracted for training and prediction tasks.

The following schema diagram outlines the structure of the resultant dataset and highlights how nested and flat fields can be used for efficient processing and bot detection.

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

### The output dataset to be used for training

The result of this expression might look similar to the table provided below. In the table, the `isBot` column acts as a label that distinguishes between bot and non-bot activity.

```console
| `id`         | `count_per_id`                                      |`isBot`| `web`                                                                                                                    |
|--------------|-----------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------|
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":99}| 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 2.5532E+18   | {"one_minute":99,"five_minute":1,"thirty_minute":1} | 1     | {"webpagedetails":{"name":"KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg=="}} |
| 1E+18        | {"one_minute":1,"five_minute":1,"thirty_minute":1}  | 0     | {"webpagedetails":{"name":"KR+CC8TQzPyMOE/bk7EGgN3lSvP8OsxeI2aLaVrbaeLn8XK3y3zok2ryVyZoiBu3"}}                       |
| 1.00007E+18  | {"one_minute":1,"five_minute":1,"thirty_minute":1}  | 0     | {"webpagedetails":{"name":"8DN0dM4rlvJxt4oByYLKZ/wuHyq/8CvsWNyXvGYnImytXn/bjUizfRSl86vmju7MFMXxnhTBoCWLHtyVSWro9LYg0MhN8jGbswLRLXoOIyh2wduVbc9XeN8yyQElkJm3AW3zcqC7iXNVv2eBS8vwGg=="}} |
| 1.00008E+18  | {"one_minute":1,"five_minute":1,"thirty_minute":1}  | 0     | {"webpagedetails":{"name":"KR+CC8TQzPyMOE/bk7EGgN3lSvP8OsxeI2aLaVrbaeLn8XK3y3zok2ryVyZoiBu3"}}                       |
```

## Advanced statistical functions for bot filtering {#statistical-functions-for-bot-filtering}

This second example builds on basic SQL filtering by incorporating machine learning techniques to refine thresholds and improve filtering accuracy. By using advanced statistical functions, such as regression analysis or clustering algorithms, this approach introduces predictive capabilities that you can use to develop models for handling complex datasets with greater precision.

### Build a training dataset {#build-a-training-dataset}

First, prepare a dataset with flat and nested structures that the machine learning model can use (as described above). Further guidance on how to do this can be found in the [Working with nested data structures documentation](../../key-concepts/nested-data-structures.md). Group the data by timestamp, user ID, and webpage name to identify patterns in bot activity.

### Use TRANSFORM and OPTIONS clauses for model creation {#transform-and-preprocess}

To transform your dataset and configure your machine learning model effectively, follow the steps below. The steps detail how to handle null values, prepare features, and define the model's parameters for optimal performance.

>[!TIP]
>
>To learn more about using transformations and preprocessing your data, refer to the [Feature transformation techniques documentation](../feature-transformation.md).

1. To fill null values in numeric, string, and boolean columns, use `numeric_imputer`, `string_imputer`, and `boolean_imputer` functions respectively. This step ensures the machine learning algorithm can process the data without errors.
2. Apply feature transformations to prepare the data for modeling. Apply `binarized`, `quantile_discretizer`, or `string_indexer` to categorize or standardize the columns. Next, feed the output of the imputers (`numeric_imputer` and `string_imputer`) into subsequent transformers like `string_indexer` or `quantile_discretizer` to create meaningful features.
3. Use the `vector_assembler` function to combine the transformed columns into a single feature column. Then scale the features using `min_max_scaler` to normalize the values for better model performance. Note: In the SQL example, the last transformation mentioned inside the TRANSFORM clause becomes the feature column used by the machine learning model.
4. Specify the model type and any other hyperparameters in the OPTIONS clause. For example, `decision_tree_classifier` was chosen here as this is a classification problem. Other parameters like `max_depth` are were adjusted (`MAX_DEPTH=4`) to tune the model for better performance.
5. Combine features and label the output data. Use the SELECT clause to specify the dataset for training. This clause should include both the feature columns (`count_per_id`, `web`, `id`) and the label column (`isBot`), which indicates whether an action is likely to be a bot.

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

In the results displayed below, the model `bot_filtering_model` is successfully created with a unique ID, name, and version. This output serves as a reference for tracking and managing models. Use these references to identify the exact the configuration and version required for predictions or evaluations.

```console

           Created Model ID           |       Created Model       | Version
--------------------------------------+---------------------------+---------
 2fb4b49e-d35c-44cf-af19-cc210e7dc72c | bot_filtering_model       |       1
```

### Evaluate the trained model {#evaluate-trained-model}

After you have created the model, use the `MODEL_EVALUATE` command to evaluate its performance. This step ensures that the model meets accuracy and performance requirements for detecting bot activity. 

Use the following arguments in your SQL command to evaluate the model:

1. Specify the model name (`bot_filtering_model`) to indicate which model to evaluate. This name must match the one you created earlier with the `CREATE MODEL` command. 
2. Provide the model version (`1`) in the second argument to specify the version of the model you want to evaluate. If multiple versions exist, this ensures the correct version is used.
3. Include the evaluation dataset to define the dataset for evaluation. Ensure the dataset includes the same feature columns (`count_per_id`, `web`, `id`) and the label column (`isBot`) used during training.

>[!NOTE]
>
>The transformations applied during model training are automatically applied during the evaluation.

```sql
SELECT *
FROM   model_evaluate(bot_filtering_model, 1,
                      SELECT count_per_id, isBot, web, id
                      FROM   analytics_events_clicks_count_criteria);
```

**Result**

The response includes metrics such as accuracy, precision, recall, and AUC-ROC. The results confirm whether or not the model performed well.

>[!NOTE]
>
>Values in the range 0-1 represent proportions or probabilities, with 1.0 indicating perfect performance.

```console
auc_roc | accuracy | precision | recall
---------+----------+-----------+--------
     1.0 |      1.0 |       1.0 |    1.0
```

| **Metric**   | **Description**                                                                                     |
|--------------|-----------------------------------------------------------------------------------------------------|
| `auc_roc`  | This metric indicates how effectively your model can classify bots and non-bots. It is widely used for evaluating classification models. |
| `accuracy` | The percentage of correct predictions made by the model.                                            |
| `precision`| The proportion of true bot predictions among all predicted bots.                                    |
| `recall`   | The proportion of true bots detected out of all actual bots.                                        |

>[!TIP]
>
>For use on production sandboxes, consider evaluating the model on test datasets to ensure it generalizes effectively.

### Predict bot activity {#predict-bot-activity}

Use the `MODEL_PREDICT` command with the trained model to identify which users (`id`) are bots. Follow the steps below to generate predictions for identifying bot activity:

1. Use the model name (`bot_filtering_model`) in the first argument to specify which model to use for predictions.  
2. Specify the model version (`1`) in the second argument to ensure the correct version of the model is used.
3. To supply the correct data for predictions, use a SELECT statement to specify the feature columns (`count_per_id`, `web`, `id`). Do not include the label column (`isBot`) because the model will generate predictions for this field.

```sql
SELECT *
FROM model_predict(bot_filtering_model, 1,
    SELECT count_per_id, web, id FROM analytics_events_clicks_count_criteria
);
```

**Result**

The response includes predictions for each user (`id`) along with details about their activity and the model's classification result. This output enables a detailed examination of user behavior and the model's classification of bot activity.

<!-- Q) Anil, why is there no ID in the first two rows? Can we get that info? Or should it be the same as the other IDs? -->

```console
         id          | count.one_minute | count.five_minute | count.thirty_minute |                                                                  web.webpagedetails.name                                                                  | prediction
---------------------+------------------+-------------------+---------------------+-------+----------------------------------------------------------------------------------------------------------------------------------------------------+------------
                     |              110 |                   |                     |   4UNDilcY5VAgu2pRmX4/gtVnj+YxDDQaJd1G8p8WX46//wYcrHy+APUN0I556E80j1gIzFmilA6DV4s0Zcs4ruiP36gLgC7bj4TH0q6LU0E=                                             |        1.0  
                     |              105 |                   |                     |   lrSaZk04Yq+5P9+6l4BohwXik0s0/XeW9X28ZgWt1yj1QQztiAt9Qgt2WYrWcAeoGZChAJw/l8e4ojZDT5WHCjteSt35S01Vv1JzDGPAg+IyhIzMTsVyLpW8WWpXjJoMCt6Tv7fFdF73EIH+IrK5fA== |        1.0
 2553215812530219515 |               99 |                 1 |                   1 |   KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg==                                                                 |        1.0
 2553215812530219515 |               99 |                 1 |                   1 |   KR+CC8TQzPyK4ord6w1PfJay1+h6snSF++xFERc4ogrEX4clJROgzkGgnSTSGWWZfNS/Ouz2K0VtkHG77vwoTg==                                                                 |        1.0
```

The table below explains each metric:

| Column Name               | Description                                                                                          |
|---------------------------|----------------------------------------------------------------------------------------------------------|
| `id`                      | The unique identifier for each user.                                                                    |
| `count.one_minute`        | The aggregated click counts for 1-minute intervals.                                                         |
| `count.five_minute`       | The aggregated click counts for 5-minute intervals.                                                         |
| `count.thirty_minute`     | The aggregated click counts for 30-minute intervals.                                                        |
| `web.webpagedetails.name` | The name of the webpage visited. This provides context for user activity.                                   |
| `prediction`              | The model's prediction. A `1.0` result indicates that the user is flagged as a bot based on their activity patterns. |

## Manage your models {#manage-models}

To manage your machine learning models, use the SQL key words listed in the section below.

### List available models {#list-available-models}

Efficiently manage and review the models with the `SHOW MODELS;` command. This command lists all the machine learning models that have been created in the current workspace. The output provides an overview of the available models and includes their names, versions, and other metadata.

```sql
SHOW MODELS;
```

### Delete models {#delete-models}

To free up resources and ensure that only relevant models are maintained, use the `DROP MODEL` command to remove obsolete or unnecessary models. This command deletes any machine learning model specified after the key words. In the example below, the `bot_filtering_model` is removed from the system.

```sql
DROP MODEL bot_filtering_model;
```

## Next steps

By reading this document, you have learned how to identify and filter bot activity using SQL and machine learning techniques using Data Distiller methods. Next, apply these concepts to your datasets and automate model retraining for continuous improvement.
