---
title: Customer AI Propensity Scoring Model Details
description: Learn about the AI model used for Customer AI.
hide: true
hidefromtoc: true
exl-id: b2eeb1d2-3c2b-40a0-b5cd-91e99d99a906
---
# Customer AI Propensity Scoring Model Details

## Model overview {#model-overview}

* **Model name and version**: Customer AI Propensity Scoring Model
* **Model purpose**: The model is designed to provide marketers and customer engagement teams with actionable insights by predicting the probability that a consumer will perform a given action, such as making a purchase, signing up for a subscription, or engaging with an email campaign. The outputs allow businesses to optimize audience segmentation and personalize consumer interactions based on predicted behaviors.
* **Intended users**: The primary users of this model are marketing professionals, data analysts, and customer engagement teams who leverage [Real-Time CDP](../../../rtcdp/home.md) to drive data-driven marketing strategies.
* **Use cases**: This model is primarily used for consumer segmentation, targeted marketing, and churn prediction. Businesses leverage this model to predict consumer purchase intent, optimize marketing campaigns, and enhance personalization efforts. For example, an e-commerce company might use the model to identify high-intent shoppers and offer them exclusive promotions.
* **Pain points**: Marketers often struggle with identifying the right consumers to target and optimizing engagement efforts. This model reduces guesswork by providing a data-driven approach to consumer targeting, ensuring that marketing resources are allocated efficiently.
* **Potential misuse**: The model should not be used for high-risk use cases, such as financial credit scoring, medical diagnostics, or legal assessments. Additionally, the model should not be used in predicting personally sensitive behaviors (such as health conditions, political preferences).

## Model details {#model-details}

* **Model type**: This is a supervised learning classification model that predicts the probability of an event occurring (such as purchase, churn, engagement) given historical consumer data. It is trained using gradient boosting decision trees (GBDT) with logistic regression to model propensity scores.
* **Input**: The model processes consumer behavioral data, demographic attributes, and historical interactions. This includes data such as website visit frequency, past purchase history, engagement with marketing emails, and demographic information.
* **Output**: The model outputs a score between 0 and 100, where higher values indicate a higher likelihood of the predicted event occurring among the scored population cohort. Additionally, it provides feature importance scores, allowing marketers to understand which factors influenced the prediction.

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

* **Training data and preprocessing**: The training dataset for each customer is sourced directly from their own data within Adobe Experience Platform. This includes customer's historical interactions, transactional records, behavioral engagement logs, and demographic information as collected and stored in their Adobe Experience Platform instance. The dataset leverages customer-specific data over their chosen timeframe, capturing their unique seasonal trends and engagement patterns. Before use, each customer's dataset undergoes preprocessing tailored to their data characteristics, including missing value handling, categorical encoding, feature scaling, outlier detection, and feature engineering to ensure optimal quality and usability for their specific use case
* **Training specifications**: The model leverages [!DNL LightGBM] using [!DNL GBM], optimized for structured data. It is trained on historical customer event sequences to identify predictive behavioral patterns.
* **Training frameworks**: The model was developed using [!DNL LightGBM], and [!DNL scikit-learn], and is trained on Adobe AI cloud infrastructure.
* **Training infrastructure**: [!DNL Databricks] clusters.

## Model evaluation {#model-evaluation}

* **Evaluation metrics and procedures**: The model's effectiveness is measured using [!DNL AUC-ROC]. Since Customer AI is targeting a very wide range of customer use cases, the operating range cannot be known. So we use a metric [!DNL AUC] that is independent of reach and budget.
* **Evaluation data and preprocessing**: Evaluation data includes holdout consumer records and is preprocessed similarly to training data with feature normalization, encoding, and cleaning steps to match input format expectations. After the outcome window has passed, we can perform a final performance evaluation. 

## Model deployment {#model-deployment}

* **Model deployment**: The model is hosted on Adobe Experience Platform AI services and integrated with various Adobe applications. It is available via API endpoints, allowing seamless access for real-time predictions and batch processing across marketing and consumer engagement workflows.
* **Model monitoring**: The model is continuously monitored via model monitoring to see the drift from the training setup. Periodic retrains (once in 3 months) are automatically run.
* **Model ipdate**: The model is retrained once in several months (utmost once in 6 months) using updated consumer interaction data to ensure continued relevance. Periodic retraining helps mitigate data drift and seasonal fluctuations that could impact predictive accuracy.

## Explainability {#explainability}

**Model explainability**: The model leverages [!DNL SHapley Additive Explanations] (SHAP) to quantify the impact of each input feature on its predictions, providing transparency into how consumer attributes influence propensity scores. SHAP values enable both global interpretability, identifying the most influential factors across all predictions, and local interpretability, explaining individual predictions for specific consumers. The model also supports [!DNL Local Interpretable Model-Agnostic Explanations] (LIME).

## Fairness and bias {#fairness-and-bias}

* **Model fairness**: This model is trained on anonymized behavioral data associated with cookie IDs, without access to protected demographic attributes such as age, gender, or ethnicity. As such, direct measurement of fairness across sensitive groups is not feasible. Bias mitigation efforts include normalizing for user activity frequency, suppressing overly dominant features, and conducting score calibration checks across cohorts. We account for recency bias and monitor exposure bias by evaluating model predictions on randomized holdout traffic. Ongoing evaluations are in place to detect and reduce bias amplification and feedback loops during model deployment.
* **Data biases**: The dataset is predominantly sourced from high-engagement users, which may introduce selection bias. To mitigate this, the model applies sampling strategies. Depending on the use case, customers should consider how potential biases in model outputs may align with or impact their intended application.

## Robustness {#robustness}

**Model robustness**: The model maintains strong generalization to new consumer records. Performance remains stable across different consumer segments but shows slight degradation when user behavior significantly deviates from historical patterns.

## Ethical considerations {#ethical-considerations}

**Ethical considerations associated with the model**: This model is intended for marketing use cases, and customers should exercise heightened caution if applying it in sensitive or regulated domains such as credit or employment. Outputs are probabilistic and derived from behavioral data, which may reflect historical or representation biases. Customers are encouraged to apply human oversight. Adobe Experience Platform follows Responsible AI guidelines, ensuring that models undergo bias audits, fairness testing, and human oversight before deployment. For more information, review the [Adobe AI Ethics Principles](https://www.adobe.com/content/dam/cc/en/ai-ethics/pdfs/Adobe-AI-Ethics-Principles.pdf?msockid=0d85c8269eb36f0801d0ddb49fd16ebc).