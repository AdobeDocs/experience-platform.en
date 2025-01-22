---
title: Predict Customer Churn with SQL-Based Logistic Regression
description: Learn how to predict customer churn using SQL-based logistic regression. This guide covers the entire process from model creation, evaluation, and prediction. Gain actionable insights from customer purchase behavior to implement proactive retention strategies and optimize business decisions.
---
# Predict Customer Churn with SQL-Based Logistic Regression

Predicting customer churn helps businesses retain customers, optimize resources, and boost profitability by improving satisfaction and loyalty through actionable insights.

Discover how to use SQL-based logistic regression to predict customer churn. Use this comprehensive SQL guide to transform raw e-commerce data into meaningful customer insights based on key behavioral metrics (such as purchase frequency, average order value, and recency of last purchase). The document covers the entire process—from data preparation and feature engineering to model creation, evaluation, and prediction.

Use this guide to build a powerful churn prediction model that identifies at-risk customers, refines retention strategies, and drives better business decisions. It includes step-by-step instructions, SQL queries, and detailed explanations to help you confidently apply machine learning techniques within your data environment.

## Getting started

Before creating the churn model, it's important to explore key customer features and data requirements. The next sections outline essential customer attributes and required data fields for accurate model training.

### Define customer features {#define-customer-features}

To accurately classify churn, the model analyzes purchasing habits and trends. The table below outlines the key customer behavior features used in the model:

| Feature                   | Description                                           |
|---------------------------|-------------------------------------------------------|
| `total_purchases`          | The total number of purchases made by the customer.   |
| `total_revenue`            | The total revenue generated from customer purchases.  |
| `avg_order_value`          | The average value of a customer's purchases.          |
| `customer_lifetime`        | The number of days between the customer's first and last purchase. |
| `days_since_last_purchase` | The number of days since the customer's last purchase.|
| `purchase_frequency`       | The number of distinct months in which the customer made purchases. |

### Assumptions and required fields {#assumptions-required-fields}

To generate customer churn predictions, the model depends on key fields within the `webevents` table that capture customer transaction details. Your dataset must include the following fields:

| Field                          | Description                                        |
|--------------------------------|----------------------------------------------------|
| `identityMap['ECID'][0].id`     | A unique identifier used to track customers across sessions.       |
| `productListItems.priceTotal[0]` | The total cost of purchased items per transaction.         |
| `productListItems.quantity[0]`  | The total number of items in a purchase.                   |
| `timestamp`                     | The exact date and time of each purchase event.              |
| `commerce.order.purchaseID`     | A required value that confirms a completed purchase.  |

<!-- 'Each event must include product prices, quantities, and formatted timestamps for the SQL `DATEDIFF` function.' -->

<!-- The dataset must contain structured historical customer transaction records, with each row representing a purchase event. Each event must include product prices, quantities, and formatted timestamps for the SQL `DATEDIFF` function. Additionally, each record must contain a valid Experience Cloud ID (ECID) in the `identityMap` field to uniquely identify customers. -->

The dataset must contain structured historical customer transaction records, with each row representing a purchase event. Each event must include timestamps in an appropriate date-time format compatible with the SQL `DATEDIFF` function (for example., YYYY-MM-DD HH:MI:SS). Additionally, each record must contain a valid Experience Cloud ID (`ECID`) in the `identityMap` field to uniquely identify customers.

>[!TIP]
>
>Processing large datasets with millions of records may impact performance. To optimize query execution, you can index key columns, partition the data, and use efficient aggregation functions. Additionally, filter data before aggregation to help reduce processing overhead.

## Create a model {#create-a-model}

To predict customer churn, you must create a SQL-based logistic regression model that analyzes customer purchase history and behavioral metrics. The model classifies customers as `churned` or `not churned` by determining if they have made a purchase within the past 90 days.

### Use SQL to create the churn prediction model {#sql-create-model}

The SQL-based model processes `webevents` data by aggregating key metrics and assigning churn labels based on a 90-day inactivity rule. This approach distinguishes active customers from at-risk customers. The SQL query also performs feature engineering to enhance model accuracy and improve churn classification. These insights empower your business to implement targeted retention strategies, reduce churn, and maximize customer lifetime value.

>[!NOTE]
>
>The churn prediction model uses a default threshold of 90 days to classify customers as churned. To adjust this threshold to align with your business goals and retention strategies, modify the `DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90` condition in the SQL queries.

Use the following SQL statement to create the `retention_model_logistic_reg` model with the specified features and labels:

>[!IMPORTANT]
>
>The SQL examples in this document include inline comments. Remove them before executing the SQL in your database client 

```sql
CREATE MODEL retention_model_logistic_reg
TRANSFORM (
  vector_assembler(array(total_purchases, total_revenue, avg_order_value, customer_lifetime, days_since_last_purchase, purchase_frequency)) features
  -- Combines selected customer metrics into a feature vector for model training
)
OPTIONS (
  MODEL_TYPE = 'logistic_reg',  -- Specifies logistic regression as the model type
  LABEL = 'churned'             -- Defines the target label for churn classification
)
AS
WITH customer_features AS (
    SELECT
       identityMap['ECID'][0].id AS customer_id,  -- Extract the unique customer ID from identityMap
       AVG(COALESCE(productListItems.priceTotal[0], 0)) AS avg_order_value,  -- Calculates the average order value, and handles null values with COALESCE
       SUM(COALESCE(productListItems.priceTotal[0], 0)) AS total_revenue, -- The sum of all purchase values per customer
       COUNT(COALESCE(productListItems.quantity[0], 0)) AS total_purchases,  -- The total number of items purchased by the customer
       DATEDIFF(MAX(timestamp), MIN(timestamp)) AS customer_lifetime,  -- The days between first and last recorded purchase
       DATEDIFF(CURRENT_DATE, MAX(timestamp)) AS days_since_last_purchase,  -- The days since the last purchase event
       COUNT(DISTINCT CONCAT(YEAR(timestamp), MONTH(timestamp))) AS purchase_frequency  -- The count of unique months with purchases
    FROM
        webevents
    WHERE EXISTS(productListItems, value -> value.priceTotal > 0)  -- Filters transactions with valid total price
      AND commerce.`order`.purchaseID <> ''  -- Ensures the order has a valid purchase ID
    GROUP BY customer_id 
),
customer_labels AS (
    SELECT
      identityMap['ECID'][0].id AS customer_id,  -- Extract the unique customer ID for labeling
      CASE
          WHEN DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90 THEN 1  -- Marks the customer as churned if no purchase occurred in the last 90 days
          ELSE 0
      END AS churned
    FROM
        webevents
    WHERE EXISTS(productListItems, value -> value.priceTotal > 0) 
      AND commerce.`order`.purchaseID <> ''  
    GROUP BY customer_id  
)
SELECT
    f.customer_id,
    f.total_purchases,
    f.total_revenue,
    f.avg_order_value,
    f.customer_lifetime,
    f.days_since_last_purchase,
    f.purchase_frequency,
    l.churned
FROM
    customer_features f
JOIN
    customer_labels l
ON f.customer_id = l.customer_id  -- Join features with churn labels
ORDER BY RANDOM()  -- Shuffles rows randomly for training
LIMIT 500000;  -- Limit the dataset to 500,000 rows for model training
```

### Model output {#model-output}

The output dataset contains customer-related metrics and their churn status. Each row represents a customer, respective feature values, and whether they have churned or not. You can use this output to analyze customer behavior and train models, then take proactive actions to retain at-risk customers. An example output table is shown below:

```console
 customer_id  | total_purchases | total_revenue | avg_order_value  | customer_lifetime | days_since_last_purchase | purchase_frequency | churned |
--------------+-----------------+---------------+------------------+-------------------+--------------------------+--------------------+----------
  100001      | 25              | 1250.00       | 50.00            | 540               | 20                       | 10                 | 0       
  100002      | 3               | 90.00         | 30.00            | 120               | 95                       | 1                  | 1       
  100003      | 60              | 7200.00       | 120.00           | 800               | 5                        | 24                 | 0       
  100004      | 15              | 750.00        | 50.00            | 365               | 60                       | 8                  | 0       
  100005      | 1               | 25.00         | 25.00            | 60                | 180                      | 1                  | 1       
```

| Column    | Description                                                                        |
|-----------|------------------------------------------------------------------------------------|
| `churned` | The customer's actual churn status based on whether they made a purchase in the last 90 days (0 = not churned, 1 = churned). |

## Use SQL to evaluate the model {#model-evaluation}

Next, evaluate the churn prediction model to assess its effectiveness in identifying at-risk customers. Evaluate model performance using key metrics to measure prediction accuracy and reliability.

To assess the accuracy of the `retention_model_logistic_reg` model in predicting customer churn, use the `model_evaluate` function to evaluate its performance. The SQL example below evaluates the `retention_model_logistic_reg` model using a dataset with the same structure as the training data:

```sql
SELECT * 
FROM model_evaluate(retention_model_logistic_reg, 1,
WITH customer_features AS (
    SELECT
       identityMap['ECID'][0].id AS customer_id,
       AVG(COALESCE(productListItems.priceTotal[0], 0)) AS avg_order_value,
       SUM(COALESCE(productListItems.priceTotal[0], 0)) AS total_revenue,
       COUNT(COALESCE(productListItems.quantity[0], 0)) AS total_purchases, 
       DATEDIFF(MAX(timestamp), MIN(timestamp)) AS customer_lifetime,
       DATEDIFF(CURRENT_DATE, MAX(timestamp)) AS days_since_last_purchase,
       COUNT(DISTINCT CONCAT(YEAR(timestamp), MONTH(timestamp))) AS purchase_frequency 
    FROM
        webevents
    WHERE EXISTS(productListItems, value -> value.priceTotal > 0)
      AND commerce.`order`.purchaseID <> ''
    GROUP BY customer_id
),
customer_labels AS (
    SELECT
      identityMap['ECID'][0].id AS customer_id,
      CASE
          WHEN DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90 THEN 1 
          ELSE 0
      END AS churned
    FROM
        webevents
    WHERE EXISTS(productListItems, value -> value.priceTotal > 0) 
      AND commerce.`order`.purchaseID <> '' 
    GROUP BY customer_id
)
SELECT
    f.customer_id,
    f.total_purchases,
    f.total_revenue,
    f.avg_order_value,
    f.customer_lifetime,
    f.days_since_last_purchase,
    f.purchase_frequency,
    l.churned
FROM
    customer_features f
JOIN
    customer_labels l
ON f.customer_id = l.customer_id); -- Joins customer features with churn labels
```

### Model evaluation output

The evaluation output includes key performance metrics, such as AUC-ROC, accuracy, precision, and recall. Use these metrics to help you assess model effectiveness, optimize retention strategies, and improve decision-making.

>[!NOTE]
>
>Values in the range 0-1 represent proportions or probabilities, with 1.0 indicating perfect performance.

```console
 auc_roc | accuracy | precision | recall 
---------+----------+-----------+--------
1        | 0.99998  |  1        |  1      
```

| Metric     | Description                                                             |
|------------|-------------------------------------------------------------------------|
| `auc_roc`  | This metric indicates how effectively your model can distinguish between churned and non-churned customers. A high AUC-ROC (close to 1) indicates the model effectively differentiates churned and non-churned customers. |
| `accuracy` | The accuracy metric represents the proportion of correct predictions made by the model. It provides an overall measure of the model's performance. |
| `precision`| Precision shows the proportion of correctly identified churned customers. This metric helps assess the model's reliability in predicting churn. High precision means fewer false positives and is useful for targeted retention efforts. |
| `recall`   | Recall measures the model's ability to identify all actual churned customers from the dataset. A high recall value indicates fewer missed churn customers which is important for broad outreach strategies.  |

## Model prediction {#model-prediction}

After evaluation, use `model_predict` on a new dataset to apply the trained model to predict customer churn. You can use this prediction capability to proactively identify at-risk customers and implement targeted retention strategies.

### Use SQL to generate churn predictions {#sql-model-predict}

The following SQL query predicts customer churn using the `retention_model_logistic_reg` model and a dataset with the same structure as the training data:

```sql
SELECT * 
FROM model_predict(retention_model_logistic_reg, 1,  -- Applies the trained model for churn prediction
WITH customer_features AS (
    SELECT
       identityMap['ECID'][0].id AS customer_id,
       AVG(COALESCE(productListItems.priceTotal[0], 0)) AS avg_order_value,  
       SUM(COALESCE(productListItems.priceTotal[0], 0)) AS total_revenue, 
       COUNT(COALESCE(productListItems.quantity[0], 0)) AS total_purchases,  
       DATEDIFF(MAX(timestamp), MIN(timestamp)) AS customer_lifetime,  
       DATEDIFF(CURRENT_DATE, MAX(timestamp)) AS days_since_last_purchase,  
       COUNT(DISTINCT CONCAT(YEAR(timestamp), MONTH(timestamp))) AS purchase_frequency  
    FROM
        webevents
    WHERE EXISTS(productListItems, value -> value.priceTotal > 0)  -- Ensures only valid purchase data is considered
      AND commerce.`order`.purchaseID <> ''  
    GROUP BY customer_id
),
customer_labels AS (
    SELECT
      identityMap['ECID'][0].id AS customer_id,  
      CASE
          WHEN DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90 THEN 1  -- Identify customers who have not purchased in the last 90 days
          ELSE 0
      END AS churned
    FROM
        webevents
    WHERE EXISTS(productListItems, value -> value.priceTotal > 0)  
      AND commerce.`order`.purchaseID <> ''  
    GROUP BY customer_id
)
SELECT
    f.customer_id,  
    f.total_purchases,  
    f.total_revenue,  
    f.avg_order_value,  
    f.customer_lifetime,  
    f.days_since_last_purchase,  
    f.purchase_frequency,  
    l.churned  
FROM
    customer_features f
JOIN
    customer_labels l
ON f.customer_id = l.customer_id);  -- Matches features with their churn labels for prediction
```

### Model prediction output {#prediction-output}

The output dataset contains customer features along with their predicted churn status. Use this data to take targeted actions to retain customers before they churn.

```console
 total_purchases | total_revenue | avg_order_value | customer_lifetime | days_since_last_purchase | purchase_frequency | churned | prediction
-----------------+---------------+-----------------+-------------------+--------------------------+--------------------+---------+------------
 2               | 299           | 149.5           | 0                 | 13                        | 1                  | 0       | 0
 1               | 710           | 710.00          | 0                 | 149                       | 1                  | 1       | 1
 1               | 19.99         | 19.99           | 0                 | 30                        | 1                  | 0       | 0
 1               | 4528          | 4528.00         | 0                 | 26                        | 1                  | 0       | 0
 1               | 21.84         | 21.84           | 0                 | 90                        | 1                  | 0       | 0
 1               | 16.64         | 16.64           | 0                 | 268                       | 1                  | 1       | 1
```

| Column        | Description                                                                   |
|---------------|-------------------------------------------------------------------------------|
| `prediction`  | The customer's predicted churn status based on the model (0 = not churned, 1 = churned). |

## Next steps

By reading this document, you have learned how to create, evaluate, and use a SQL-based model to predict customer churn. You now have the foundation to analyze customer behavior, identify at-risk customers, and implement proactive retention strategies. To further enhance and apply your churn prediction model, consider the following next steps:

- Automate the process: Integrate the model into a data pipeline to enable continuous churn monitoring and real-time predictions. Learn how to [explore, verify, and process datasets with SQL](../../dashboards/query.md). 
- Monitor model performance: Regularly evaluate the model with new data to ensure it remains accurate and relevant over time. Use [AI Assistant](../../ai-assistant/landing.md) in the Adobe Experience Platform UI for monitoring significant changes and [forecasting audiences](../../ai-assistant/new-features/audience-forecasting.md). 
