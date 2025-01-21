---
title: Predict Customer Churn with SQL-Based Logistic Regression
description: Learn how to predict customer churn using SQL-based logistic regression. This guide covers the entire process from model creation, evaluation, and prediction. Gain actionable insights from customer purchase behavior to implement proactive retention strategies and optimize business decisions.
---
# Predict Customer Churn with SQL-Based Logistic Regression

Predicting customer churn enables your businesses to proactively identify and retain at-risk customers which can lead to better resource allocation and increased profitability. These predictions offer actionable insights into customer behavior that you can use to drive improved satisfaction, loyalty, and sustainable growth.

Learn how to predict customer churn using a SQL-based logistic regression model. Use this comprehensive SQL guide to transform raw e-commerce data into meaningful customer insights, and ensure accurate churn classification based on key behavioral metrics such as purchase frequency, order value, and time since last purchase. This document outlines the end-to-end process, starting with data preparation and feature engineering, followed by model creation, evaluation, and prediction.

Follow this guide to implement a robust churn prediction model that identifies at-risk customers, optimizes retention strategies, and enhances business decision-making. The document includes step-by-step instructions, SQL queries, and explanations to help you effectively apply machine learning techniques within your data environment.

## Getting started

Before creating the churn prediction model, it's important to understand the key customer features that influence churn and ensure your dataset meets the necessary requirements. The following sections outline the essential customer attributes and the required data fields for accurate model training.

### Define customer features {#define-customer-features}

To allow for accurate churn classification, the model relies on several features that summarize customer behavior. These features provide insights into purchasing habits, spending trends, and customer lifecycle. The table below outlines the features used in the model:

| Feature                   | Description                                           |
|---------------------------|-------------------------------------------------------|
| `total_purchases`          | The total number of purchases made by the customer.   |
| `total_revenue`            | The total revenue generated from customer purchases.  |
| `avg_order_value`          | The average value of a customer's purchases.          |
| `customer_lifetime`        | The duration in days between a customer's first and last purchase. |
| `days_since_last_purchase` | The number of days since the customer's last purchase.|
| `purchase_frequency`       | The number of unique months the customer made purchases. |

### Assumptions and required fields {#assumptions-required-fields}

The model relies on specific fields in the `webevents` table to generate customer churn predictions. Ensure your dataset includes the following required fields:

| Field                          | Description                                        |
|--------------------------------|----------------------------------------------------|
| `identityMap['ECID'][0].id`     | A unique customer identifier.                      |
| `productListItems.priceTotal[0]` | The total price of items in each purchase.         |
| `productListItems.quantity[0]`  | The quantity of items purchased.                   |
| `timestamp`                     | The timestamp of each purchase event.              |
| `commerce.order.purchaseID`     | A non-empty value indicating completed purchases.  |

The dataset should consist of structured historical customer transaction records, with each row representing a unique purchase event. It should include product prices, quantities, and timestamps formatted for compatibility with the SQL `DATEDIFF` function. Additionally, each record contains a valid Experience Cloud ID (ECID) in the `identityMap` field to uniquely identify customers.

## Create a model {#create-a-model}

To predict customer churn, you must create a SQL-based logistic regression model that analyzes key customer features derived from purchase history and behavioral metrics. The model classifies customers as `churned` or `not churned` based on whether they have made a purchase in the last 90 days.

### Use SQL to create the churn prediction model {#sql-create-model}

This SQL-based logistic regression model predicts customer churn by analyzing purchase behavior data from the `webevents` table. The data transformation process aggregates key metrics through the `customer_features` query to generate meaningful insights and assign churn labels based on a 90-day inactivity rule. This approach distinguishes active customers from those at risk of churning. The SQL query also applies feature engineering by selecting relevant attributes to enhance model accuracy and improve churn classification.  These insights can help your business implement proactive retention strategies, ultimately reducing churn and maximizing customer lifetime value.

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

Next, evaluate the churn prediction model to assess its effectiveness in identifying at-risk customers. Model evaluation provides key performance metrics that help measure the accuracy and reliability of predictions.

To assess the accuracy of the `retention_model_logistic_reg` model in predicting customer churn, use the `model_evaluate` function to evaluate it's performance. The SQL example below evaluates the `retention_model_logistic_reg` model using a dataset with the same structure as the training data:

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

The evaluation output includes key performance metrics such as AUC-ROC, accuracy, precision, and recall. Use these metrics to help you assess model effectiveness, optimize retention strategies, and improve decision-making.

```console
 auc_roc | accuracy | precision | recall 
---------+----------+-----------+--------
1        | 0.99998  |  1        |  1      
```

| Metric     | Description                                                             |
|------------|-------------------------------------------------------------------------|
| `auc_roc`  | Measures the model's ability to distinguish between churned and non-churned customers. |
| `accuracy` | Indicates the percentage of correct predictions.                        |
| `precision`| Shows the proportion of correctly identified churned customers.         |
| `recall`   | Reflects the model's ability to detect all actual churned customers.    |

## Model prediction {#model-prediction}

Once the model has been evaluated, you can use the trained model to predict customer churn for a new dataset. Use the `model_predict` function to apply the trained logistic regression model to classify customers based on their latest feature values. You can use this prediction capability to proactively identify at-risk customers and implement targeted retention strategies.

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

By reading this document, you have learned how to create, evaluate, and use a SQL-based logistic regression model to predict customer churn. You now have the foundation to analyze customer behavior, identify at-risk customers, and implement proactive retention strategies. To further enhance and apply your churn prediction model, consider the following next steps:

- Automate the process: Integrate the model into a data pipeline to enable continuous churn monitoring and real-time predictions. Learn how to [explore, verify, and process datasets with SQL](../../dashboards/query.md). 
- Monitor model performance: Regularly evaluate the model with new data to ensure it remains accurate and relevant over time. Use [AI Assistant](../../ai-assistant/landing.md) in the Adobe Experience Platform UI for monitoring significant changes and [forecasting audiences](../../ai-assistant/new-features/audience-forecasting.md). 
