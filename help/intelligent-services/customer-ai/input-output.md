---
keywords: Experience Platform;getting started;customer ai;popular topics;customer ai input;customer ai output
solution: Experience Platform, Intelligent Services, Real-time Customer Data Platform
title: Customer AI input and output
topic: Getting started
description: The following document outlines the different input and outputs utilized in Customer AI.
---

# Customer AI input and output

The following document outlines the different input and outputs utilized in Customer AI.

## Customer AI input data

Customer AI works by analyzing the Consumer Experience Event (CEE) dataset to predict churn or conversion propensity scores. For more details on Consumer Experience Event, please refer to the [Prepare data for use in Intelligent Services documentation](../data-preparation.md). After building the basic CEE dataset, Customer AI also requires standard events in the form of XDM Mixins. It is not necessary to have data for each of the standard events listed below but certain events are required for certain scenarios. If you have and of the standard events data available it is recommended that you include it in your CEE schema. For example, if you wanted to create a Customer AI application for predicting purchase events, it would be useful to have data from the `Commerce` and `Web Details` mixins.

>[!NOTE]
>
> Customer AI automatically determines which events are useful for predictions and raises a warning if the available data is not sufficient to generate quality predictions.

### Standard event mixins {#standard-events}

| Mixin | Event type | XDM columns |
| --- | --- | --- |
| **Commerce Details** | order | <li> commerce.order.purchaseID </li> <li> productListItems.SKU </li> |
|  | productListViews | <li> commerce.productListViews.value </li> <li> productListItems.SKU </li>  |
|  | checkouts | <li> commerce.checkouts.value </li> <li> productListItems.SKU </li> |
|  | purchases | <li> commerce.purchases.value </li> <li> productListItems.SKU </li> |
|  | productListRemovals | <li> commerce.productListRemovals.value </li> <li> productListItems.SKU </li> |
|  | productListOpens | <li> commerce.productListOpens.value </li> <li> productListItems.SKU </li> |
|  | productViews | <li> commerce.productViews.value </li> <li> productListItems.SKU </li> |
| **Web Details** | webVisit | web.webPageDetails.name |
|  | webInteraction | web.webInteraction.linkClicks.value |
| **Application Details** | applicationCloses | <li> application.applicationCloses.value </li> <li> application.name </li> |
|  | applicationCrashes | <li> application.crashes.value </li> <li> application.name </li> |
|  | applicationFeatureUsages | <li> application.featureUsages.value </li> <li> application.name </li> |
|  | applicationFirstLaunches | <li> application.firstLaunches.value </li> <li> application.name </li> |
|  | applicationInstalls | <li> application.installs.value </li> <li> application.name </li> |
|  | applicationLaunches | <li> application.launches.value </li> <li> application.name </li> |
|  | applicationUpgrades | <li> application.upgrades.value </li> <li> application.name </li> |
| **Search Details** | search | search.keywords |

### Historical data

Customer AI requires historical data for model training but the amount of data required is based on two key elements: outcome window and eligible population. 

By default, Customer AI looks for a user to have had activity in the last 120 days if no eligible population definition is provided during the application configuration. Additionally, Customer AI requires a minimum of 500 qualifying and 500 non-qualifying events (1000 total) of historical data based on a predicted goal definition.

The following examples provided use a simple formula to help you determine the minimum amount of data required. If you have more than the minimum requirement, your model is likely to provide more accurate results. If you have less than the minimum amount required, the model will fail as there is not a sufficient amount of data for model training. 

**Formula**:

Minimum length of data required = eligible population + outcome window

>[!NOTE]
>
> 30 is the minimum number of days required for eligible population. If this is not provided the default is 120 days.

Examples : 

- You want to predict whether a customer is likely to purchase a watch in the next 30 days. You also want to score users who have some web activity in the last 60 days. In this case the minimum length of data required = 60 days + 30 days. The eligible population is 60 days and the outcome window is 30 days totaling 90 days.

- You want to predict whether the user is likely to purchase a watch in the next 7 days. In this case the minimum length of data required = 120 days + 7 days. The eligible population defaults to 120 days and the outcome window is 7 days totaling 127 days.

- You want to predict whether the customer is likely to purchase a watch in the next 7 days. You also want to score users who have some web activity in the last 7 days. In this case the minimum length of data required = 30 days + 7 days. The eligible population requires a minimum of 30 days and the outcome window is 7 days totaling 37 days.

Apart from the minimum data required, Customer AI also works best with recent data. In this use case, Customer AI is doing a prediction for the future based on a user's recent behavioral data. In other words, more recent data is likely to yield a more accurate prediction.

### Example scenarios

In this section different scenarios for Customer AI instances are described as well as which event types are required for the scenarios using the [standard event mixin table](#standard-events) above.

### Scenario 1: Purchase conversion on an e-commerce retail website

**Prediction goal:** Predict the conversion propensity for the eligible profiles to purchase a certain article of clothing on a website.

**Recommended standard event types:**

- order
- checkouts
- purchases
- webVisit

**Additional good to have standard event types:**

The following good-to-have event types might be required based on the complexity of the goal you wish to define and eligible population while configuring your Customer AI instance.

- productListViews
- productListRemovals	
- productListOpens
- productViews
- webInteraction
- search

| Event Type | Scenario 1, 3, 4 | Scenario 2 | Scenario 5 |
| --- | --- | --- | --- |
| order | Recommended | Recommended (A subscription signal to indicate a subscription was purchased and its type). | Not needed |

## Customer AI output data

Customer AI generates several attributes for individual profiles that are deemed eligible. There are two ways to consume the score based on what you have provisioned. If you have Real-time Customer Profile enabled for your dataset, you can consume it via Real-time Customer Profile. If you don't have Real-time Customer Profile you can download the Customer AI output dataset available on the data lake. 

>[!NOTE]
>
>Output values are consumed by Real-time Customer Profile which can be used to create and define segments.

 The table below describes the various attributes found in the output of Customer AI:

| Attribute | Description |
| ----- | ----------- |
| Score | The relative likelihood for a customer to achieve the predicted goal within the defined time frame. This value is not to be treated as a probability percentage but rather the likelihood of an individual compared to the overall population. This score ranges from 0 to 100. |
| Probability | This attribute is the true probability of a profile for achieving the predicted goal within the defined time frame. When comparing outputs across different goals, it is recommended that you consider probability over percentile or score. Probability should always be used when determining the average probability across the eligible population, as the probability tends to be on the lower side for events that do not occur frequently. Values for probability range between 0 and 1. |
| Percentile | This value provides information regarding the performance of a profile relative to other similarly scored profiles. For example, a profile with a percentile rank of 99 for churn indicates that it is at a higher risk of churning compared to 99% of all other profiles that were scored. Percentiles range from 1 to 100. |
| Propensity type | The selected propensity type. |
| Score date | The date on which scoring occurred. |
| Influential factors | Predicted reasons on why a profile is likely to convert or churn. Factors are comprised of the following attributes:<ul><li>Code: The profile or behavioral attribute which positively influences a profile's predicted score. </li><li>Value: The value of the profile or behavioral attribute.</li><li>Importance: Indicates the weight of the profile or behavioral attribute has on the predicted score (low, medium, high)</li></ul> |

## Next steps {#next-steps}

Once you have prepared your data and have all your credentials and schemas in place, start by following the [Configure a Customer AI Instance](./user-guide/configure.md) guide. This guide walks you through creating an instance for Customer AI.