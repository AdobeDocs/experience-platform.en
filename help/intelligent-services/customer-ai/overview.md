---
keywords: Experience Platform;overview;customer ai;popular topics
solution: Experience Platform
title: Customer AI overview
topic: Customer AI overview
---

# Customer AI overview

>   **Note**: The Customer AI functionality outlined in this document is in beta. The documentation and the functionality are subject to change.

Customer AI in Adobe Experience Platform provides marketers with the power to leverage Adobe Sensei to anticipate what their customers will do next through machine learning.

## Understanding Customer AI

Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, picking an algorithm, training, or deployment.

Customer AI is built to:

-   Enhance Real-time Customer Profile with customer propensity scores such as churn and conversion.
-   Enhance customer profiles with influential factors for propensity scores.
-   Create segments of customers based on influential factors and propensity scores.

Customer is not built to:

-   Predict the purchasing price of products.
-   Predict which previously purchased products will be in a customer's next order.
-   Generate product recommendations at-scale.
-   Dictate the stage of the buying journey the customer is in
-   Predict a customer's next check-out total.

## How does it work?

Customer AI works by analyzing existing Consumer Experience Event data to predict churn or conversion propensity scores. Adobe realizes that the definition of churn and conversion is not uniform across all the use cases and for this reason, you have the ability to define custom target goals as a set of conditions. You can configure the predicted goal as long as the event of interest is present within the input Consumer Experience Event data.

## Next steps

You can begin by following the [getting started](./getting-started.md) guide. This guide walks you through setting up all the required pre-requests for Customer AI. If you already have all your credentials and data ready, visit the [Customer AI user guide](./user-guide.md). It provides steps for using Customer AI and demonstrates the creation of customer segments using propensity scores.