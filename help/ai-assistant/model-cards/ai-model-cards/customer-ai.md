---
title: Customer AI Propensity Scoring Model Card
description: Learn about the AI model used for Customer AI.
hide: true
hidefromtoc: true
exl-id: b2eeb1d2-3c2b-40a0-b5cd-91e99d99a906
---
# Customer AI Propensity Scoring Model Card

As part of [Intelligent Services in Adobe Experience Platform](../../../intelligent-services/home.md), you can use [Customer AI](../../../intelligent-services/customer-ai/overview.md) to generate customer predictions and explanations at the individual level.

With the help of influential factors, you can use Customer AI to tell you what a customer is likely to do and why. Additionally, you can benefit from Customer AI predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging.

Read this model card for information the AI model used to power Customer AI.

## Model overview {#model-overview}

* The Customer AI Propensity Scoring Model is designed to provide marketers and customer engagement teams with actionable insights by predicting the probability that a customer will perform a given action, such as making a purchase, signing up for a subscription, or engaging with an email campaign. The outputs allow businesses to optimize audience segmentation and personalize customer interactions based on predicted behaviors.
* The primary users of this model are marketing professionals, data analysts, and customer engagement teams who leverage [Real-Time CDP](../../../rtcdp/home.md) to drive data-driven marketing strategies.
* This model is primarily used for customer segmentation, targeted marketing, and churn prediction. Businesses leverage this model to predict customer purchase intent, optimize marketing campaigns, and enhance personalization efforts. For example, an e-commerce company might use the model to identify high-intent shoppers and offer them exclusive promotions.
* Marketers often struggle with identifying the right customers to target and optimizing engagement efforts. This model reduces guesswork by providing a data-driven approach to customer targeting, ensuring that marketing resources are allocated efficiently.
* The model should not be used for high-risk decision-making, such as financial credit scoring, medical diagnostics, or legal assessments. Additionally, it is not intended for use in predicting personally sensitive behaviors (e.g., health conditions, political preferences) due to potential ethical concerns.

## Model details {#model-details}

* This is a supervised learning classification model that predicts the probability of an event occurring (purchase, churn, engagement) given historical customer data. It is trained using gradient boosting decision trees (GBDT) with logistic regression to model propensity scores.
* The model processes customer behavioral data, demographic attributes, and historical interactions. This includes data such as website visit frequency, past purchase history, engagement with marketing emails, and demographic information.
* The model outputs a score between 0 and 100, where higher values indicate a higher likelihood of the predicted event occurring among the scored population cohort. Additionally, it provides feature importance scores, allowing users to understand which factors influenced the prediction.

**Example input**

```json
{ 
  "customer_id": 12345, 
  "past_purchases": 3, 
  "last_visit_days": 7,
  "email_click_rate": 0.4 
}
```

**Example output**

```json
{ 
  "customer_id": 12345,
  "SCORE": 89 
}
```

## Model training {#model-training}

* The training dataset for each customer is sourced directly from their own data within Experience Platform. This includes the customer's historical interactions, transactional records, behavioral engagement logs, and demographic information as collected and stored in their Experience Platform instance. The dataset leverages customer-specific data over their chosen timeframe, capturing their unique seasonal trends and engagement patterns. Before use, each customer's dataset undergoes preprocessing tailored to their data characteristics, including missing value handling, categorical encoding, feature scaling, outlier detection, and feature engineering to ensure optimal quality and usability for their specific use case.
* The model leverages [!DNL LightGBM] using [!DNL GBM], optimized for structured data. It is trained on historical customer event sequences to identify predictive behavioral patterns.
* The model was developed using [!DNL LightGBM], and [!DNL scikit-learn], and is trained on Adobe AI cloud infrastructure.
* The computer resources used for the model training are [!DNL Databricks] clusters.

## Model evaluation {#model-evaluation}

* The model's effectiveness is measured using [!DNL AUC-ROC]. Since Customer AI is targeting a very wide range of customer use cases, the operating range cannot be known. Therefore, the metric [!DNL AUC] is used because it is independent of reach and budget. 
* Evaluation data includes holdout customer records and is preprocessed similarly to training data with feature normalization, encoding, and cleaning steps to match input format expectations. After the outcome window has passed, the final performance evaluation can be conducted. 

## Model deployment {#model-deployment}

* The model is hosted on Experience Platform AI services and integrated with various Adobe applications. It is available via API endpoints, allowing seamless access for real-time predictions and batch processing across marketing and customer engagement workflows.
* The model is continuously monitored via model monitoring to see the drift from the training setup. Periodic retrains (once in 3 month) are automatically run.
* The model is retrained once in several months (utmost once in 6 months) using updated customer interaction data to ensure continued relevance. Periodic retraining helps mitigate data drift and seasonal fluctuations that could impact predictive accuracy.

## Explainability {#explainability}

The model leverages [!DNL SHapley Additive Explanations] (SHAP) to quantify the impact of each input feature on its predictions, providing transparency into how customer attributes influence propensity scores. SHAP values enable both global interpretability, identifying the most influential factors across all predictions, and local interpretability, explaining individual predictions for specific customers. The model also supports [!DNL Local Interpretable Model-Agnostic Explanations] (LIME).

## Fairness and bias {#fairness-and-bias}

* This model is trained on anonymized behavioral data associated with cookie IDs, without access to protected demographic attributes such as age, gender, or ethnicity. As such, direct measurement of fairness across sensitive groups is not feasible. Bias mitigation efforts include normalizing for user activity frequency, suppressing overly dominant features, and conducting score calibration checks across cohorts.
* The model accounts for recency bias and monitor exposure bias by evaluating model predictions on randomized holdout traffic. Ongoing evaluations are in place to detect and reduce bias amplification and feedback loops during model deployment.
* The dataset is predominantly sourced from high-engagement users, which may introduce selection bias. To mitigate this, the model applies sampling strategies.

## Robustness {#robustness}

The model maintains strong generalization to new customer records. Performance remains stable across different customer segments but shows slight degradation when user behavior significantly deviates from historical patterns.

## Privacy and security considerations {#privacy-and-security-considerations}

* The model does not process or retain any personally identifiable information (PII), and all data used for training is anonymized and aggregated. It adheres to strict compliance with GDPR, CCPA, and internal Adobe privacy policies. The model incorporates differential privacy techniques, hashing, anonymization, and tokenization to ensure privacy.
* Customer AI honors your consent preferences. Once you've [setup and enabled your consent policy](../../../data-governance/policies/user-guide.md#create-a-consent-policy), Customer AI will honor the consent data collected from you. Only consented data is used for scoring the model in subsequent runs of the model. The new scores will replace the old scores and can be used in segmentation. This feature is currently only available for HealthCare Shield customers, and Privacy and Security shield customers.

## Ethical considerations {#ethical-considerations}

The model could potentially introduce bias in decision making. In effort to prevent this, Adobe Experience Platform follows Responsible AI guidelines, ensuring that models undergo bias audits, fairness testing, and human oversight before deployment.
