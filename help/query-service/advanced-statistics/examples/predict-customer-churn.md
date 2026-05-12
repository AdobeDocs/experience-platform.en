---
title: Predict Customer Churn with SQL-Based Logistic Regression
description: Learn how to predict customer churn using SQL-based logistic regression. This guide covers the entire process from model creation to evaluation and prediction. Gain actionable insights from customer purchase behavior to implement proactive retention strategies and optimize business decisions.
exl-id: 3b18870d-104c-4dce-8549-a6818dc40d24
---
# Predict Customer Churn with SQL-Based Logistic Regression

Predicting customer churn helps businesses retain customers, optimize resources, and boost profitability by improving satisfaction and loyalty through actionable insights.

Discover how to use SQL-based logistic regression to predict customer churn. Use this comprehensive SQL guide to transform raw e-commerce data into meaningful customer insights based on key behavioral metrics (such as purchase frequency, average order value, and recency of last purchase). The document covers the entire process from data preparation and feature engineering to model creation, evaluation, and prediction.

Use this guide to build a powerful churn prediction model that identifies at-risk customers, refines retention strategies, and drives better business decisions. It includes step-by-step instructions, SQL queries, and detailed explanations to help you confidently apply machine learning techniques within your data environment.

## Getting started

Before creating the churn model, it's important to explore key customer features and data requirements. The following sections outline essential customer attributes and required data fields for accurate model training.

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

The dataset must contain structured historical customer transaction records, with each row representing a purchase event. Each event must include timestamps in an appropriate date-time format compatible with the SQL `DATEDIFF` function (for example, YYYY-MM-DD HH:MI:SS). Additionally, each record must contain a valid Experience Cloud ID (`ECID`) in the `identityMap` field to uniquely identify customers.

>[!TIP]
>
>Processing large datasets with millions of records can significantly impact performance. To optimize query execution, partition the experience dataset by timestamp, perform incremental processing using snapshots, and apply efficient aggregation functions as needed. Additionally, filter data before aggregation to reduce processing overhead.

## Create a model {#create-a-model}

To predict customer churn, you must create a SQL-based logistic regression model that analyzes customer purchase history and behavioral metrics. The model classifies customers as `churned` or `not churned` by determining if they have made a purchase within the past 90 days.

### Use SQL to create the churn prediction model {#sql-create-model}

The SQL-based model processes `webevents` data by aggregating key metrics and assigning churn labels based on a 90-day inactivity rule. This approach distinguishes active customers from at-risk customers. The SQL query also performs feature engineering to enhance model accuracy and improve churn classification. These insights empower your business to implement targeted retention strategies, reduce churn, and maximize customer lifetime value.

>[!NOTE]
>
>The churn prediction model uses a default threshold of 90 days to classify customers as churned. To adjust this threshold to align with your business goals and retention strategies, modify the `DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90` condition in the SQL queries.

Use the following SQL statement to create the `retention_model_logistic_reg` model with the specified features and labels:

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

The output dataset contains customer-related metrics and their churn status. Each row represents a customer, their feature values, and their churn status. You can use this output to analyze customer behavior, train predictive models, and develop targeted retention strategies to retain at-risk customers. An example output table is shown below:

```console
 customer_id  | total_purchases | total_revenue | avg_order_value  | customer_lifetime | days_since_last_purchase | purchase_frequency | churned |
|--------------+-----------------+---------------+------------------+-------------------+--------------------------+--------------------+----------
  100001      | 25              | 1250.00       | 50.00            | 540               | 20                       | 10                 | 0       
  100002      | 3               | 90.00         | 30.00            | 120               | 95                       | 1                  | 1       
  100003      | 60              | 7200.00       | 120.00           | 800               | 5                        | 24                 | 0       
  100004      | 15              | 750.00        | 50.00            | 365               | 60                       | 8                  | 0       
  100005      | 1               | 25.00         | 25.00            | 60                | 180                      | 1                  | 1       
```

| Column    | Description                                                                        |
|-----------|------------------------------------------------------------------------------------|
| `churned` | The value indicates whether the customer made a purchase within the last 90 days (0 = not churned, 1 = churned). |

## Use SQL to evaluate the model {#model-evaluation}

Next, assess the churn prediction model to determine its effectiveness in identifying at-risk customers. Evaluate model performance with key metrics that measure accuracy and reliability.

To measure the accuracy of the `retention_model_logistic_reg` model in predicting customer churn, use the `model_evaluate` function. The following SQL example evaluates the model using a dataset structured like the training data:

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

The evaluation output includes key performance metrics, such as AUC-ROC, accuracy, precision, and recall. These metrics provide insights into model effectiveness that you can use to refine retention strategies and make data-driven decisions.

>[!NOTE]
>
>Performance values range from 0 to 1, where 1.0 represents perfect performance.

```console
 auc_roc | accuracy | precision | recall 
|---------+----------+-----------+--------
1        | 0.99998  |  1        |  1      
```

| Metric     | Description                                                             |
|------------|-------------------------------------------------------------------------|
| `auc_roc`  | This metric indicates the model's ability to distinguish between churned and non-churned customers. A value closer to 1 indicates better performance. |
| `accuracy` | The accuracy metric represents the proportion of correct predictions, providing an overall measure of model performance. |
| `precision`| Precision shows the proportion of correctly identified churned customers, and indicates reliability in churn prediction. A high value means fewer false positives. |
| `recall`   | Recall measures the model's ability to identify all actual churned customers. A high recall value indicates fewer missed churn customers.  |

>[!NOTE]
>
>The near-perfect scores in this example are for demonstration purposes. In practice, real-world data may yield lower values due to noise and variability.

## Model prediction {#model-prediction}

Once the model is evaluated, use `model_predict` to apply it to a new dataset and forecast customer churn. You can use these predictions to identify at-risk customers and implement targeted retention strategies.

### Use SQL to generate churn predictions {#sql-model-predict}

The SQL query below uses the `retention_model_logistic_reg` model to predict customer churn with a dataset structured like the training data:

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

The output dataset includes key customer features and their predicted churn status, which indicates whether a customer is likely to churn. Use these insights to implement proactive retention strategies and reduce customer churn.

```console
 total_purchases | total_revenue | avg_order_value | customer_lifetime | days_since_last_purchase | purchase_frequency | churned | prediction
|-----------------+---------------+-----------------+-------------------+--------------------------+--------------------+---------+------------
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

You have now learned how to create, evaluate, and use a SQL-based model to predict customer churn. With this foundation, you can analyze customer behavior, identify at-risk customers, and implement proactive retention strategies to improve customer retention. To further enhance and apply your churn prediction model, consider the following next steps:

- Automate the process: Integrate the model into a data pipeline for continuous monitoring and real-time insights. [Explore how to verify and process datasets with SQL](../../../dashboards/query.md). 
- Monitor model performance: Continuously assess the model with new data to maintain accuracy and relevance.  Use [AI Assistant](../../../ai-assistant/landing.md) in the Adobe Experience Platform UI to monitor key performance changes and [forecasting audience trends](../../../ai-assistant/new-features/audience-forecasting.md).
