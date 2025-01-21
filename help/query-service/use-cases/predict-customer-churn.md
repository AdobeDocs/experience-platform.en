---
title: Predict Customer Churn with SQL-Based Logistic Regression
description: WORDS
---
# Predict Customer Churn with SQL-Based Logistic Regression

Predicting customer churn enables your businesses to proactively identify and retain at-risk customers which can lead to better resource allocation and increased profitability. These predictions offer actionable insights into customer behavior that you can use to drive improved satisfaction, loyalty, and sustainable growth.

Learn how to predict customer churn using a SQL-based logistic regression model. Use this comprehensive SQL guide to transform raw e-commerce data into meaningful customer insights, and ensure accurate churn classification based on key behavioral metrics such as purchase frequency, order value, and time since last purchase. This document outlines the end-to-end process, starting with data preparation and feature engineering, followed by model creation, evaluation, and prediction.

Follow this guide to implement a robust churn prediction model that identifies at-risk customers, optimizes retention strategies, and enhances business decision-making. The document includes step-by-step instructions, SQL queries, and explanations to help you effectively apply machine learning techniques within your data environment.

## Create a model {#create-a-model}

To predict customer churn, you must create a SQL-based logistic regression model that analyzes key customer features derived from purchase history and behavioral metrics. The model classifies customers as `churned` or `not churned` based on whether they have made a purchase in the last 90 days.

### Define customer features {#define-customer-features}

To allow for accurate churn classification, the model relies on several features that summarize customer behavior. These features provide insights into purchasing habits, spending trends, and customer lifecycle. The table below outlines the features used in the model:

| Feature                   | Description                                           |
|---------------------------|-------------------------------------------------------|
| `total_purchases`          | The total number of purchases made by the customer.   |
| `total_revenue`            | The total revenue generated from customer purchases.  |
| `avg_order_value`          | The average value of a customer's purchases.          |
| `customer_lifetime`        | The duration in days between a customer's first and last purchase. |
| `days_since_last_purchase` | The number of days since the customer's last purchase.|
| `purchase_frequency`       | The frequency of customer purchases per month.        |

### Use SQL to create the churn prediction model {#sql-create-model}

This SQL-based logistic regression model predicts customer churn by analyzing purchase behavior data from the `webevents` table. The data transformation process aggregates key metrics through the `customer_features` query to generate meaningful insights and assign churn labels based on a 90-day inactivity rule. This approach distinguishes active customers from those at risk of churning. The SQL query also applies feature engineering by selecting relevant attributes to enhance model accuracy and improve churn classification.  These insights can help your business implement proactive retention strategies, ultimately reducing churn and maximizing customer lifetime value.

Use the following SQL statement to create the `retention_model_logistic_reg` model with the specified features and labels:

```sql
CREATE MODEL retention_model_logistic_reg
TRANSFORM (
  vector_assembler(array(total_purchases, total_revenue, avg_order_value, customer_lifetime, days_since_last_purchase, purchase_frequency)) features
)
OPTIONS (
  MODEL_TYPE = 'logistic_reg',
  LABEL = 'churned'
)
AS
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
          WHEN DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90 THEN 1  -- The customer is churned if there was no purchase in the last 90 days
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
ON f.customer_id = l.customer_id
ORDER BY RANDOM()
LIMIT 500000;
```

## Model evaluation {#model-evaluation}

Next, evaluate the churn prediction model to assess its effectiveness in identifying at-risk customers. Model evaluation provides key performance metrics that help measure the accuracy and reliability of predictions.

<!-- 
To assess the accuracy of the `retention_model_logistic_reg` model in predicting customer churn, use the `model_evaluate` function to evaluate it's performance. This function aggregates key customer metrics from the `webevents` table, assigns churn labels based on a 90-day inactivity rule, and combines features with labels to provide a comprehensive evaluation dataset. The query outputs key performance metrics such as AUC-ROC, accuracy, precision, and recall, help you assess model effectiveness, optimize retention strategies, and improve decision-making.

The evaluation process uses a dataset with the same structure as the training data to calculate performance metrics. These metrics provide insights into how well the model predicts churned customers, ensuring its effectiveness and reliability.
 -->

Use the following SQL query to evaluate the `retention_model_logistic_reg` model using a dataset with the same structure as the training data:

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
          WHEN DATEDIFF(CURRENT_DATE, MAX(timestamp)) > 90 THEN 1  -- Churned if no purchase in the last 90 days
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
ON f.customer_id = l.customer_id);
```

### Evaluation results

The output of the evaluation query includes key metrics such as AUC-ROC, accuracy, precision, and recall, as shown in the table below:

| auc_roc | accuracy | precision | recall |
|---------|----------|-----------|--------|
|1       | 0.99998  |  1        |  1      |

| Metric     | Description                                                             |
|------------|-------------------------------------------------------------------------|
| `auc_roc`  | Measures the model's ability to distinguish between churned and non-churned customers. |
| `accuracy` | Indicates the percentage of correct predictions.                        |
| `precision`| Shows the proportion of correctly identified churned customers.         |
| `recall`   | Reflects the model's ability to detect all actual churned customers.    |


<!-- Use these evaluation results to fine-tune the model and ensure it meets business requirements for churn prediction. -->

