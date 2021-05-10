---
keywords: Experience Platform;overview;customer ai;popular topics;customer ai overview
solution: Experience Platform, Intelligent Services, Real-time Customer Data Platform
title: Customer AI overview
topic-legacy: Customer AI Overview
description: Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.
landing-page-description: Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale.
exl-id: 3e668103-e2a2-4ce6-a40a-8029a6aaa8dd
---
# Customer AI overview

Customer AI , as part of Intelligent Services provides marketers with the power to generate customer predictions at the individual level with explanations.

With the help of influential factors, Customer AI can tell you what a customer is likely to do and why. Additionally, marketers can benefit from Customer AI predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging.

## Understanding Customer AI

Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.

Customer AI is built to:

- Provide high accuracy customer propensity models for stronger segmentation and targeting.
- Help with understanding the influential factors and likelihood behind certain customer behaviors.
- Provide customizable options for your company’s unique use cases and data.
- Enhance Real-time Customer Profile with customer propensity scores such as churn and conversion.
- Enhance customer profiles with influential factors for propensity scores.
- Create segments of customers based on influential factors and propensity scores.

Customer is not built to:

- Customer AI should not be used to predict dynamic pricing, or the price point at which the customer is going to make a purchase.
- Customer AI cannot determine whether giving an offer will make the customer more likely to purchase an item. While you might decide to send discount offers based on propensity scores, it’s not necessarily the best way to convert those customers.
- Customer AI is not a product recommendations tool. If you have thousands of SKUs, do not use Customer AI as a proxy for a real product recommendations solution like [!DNL Adobe Target].
- Customer AI can’t predict which stage of the buying Journey the customer is in, for example, if they are in “awareness”, “consideration”, “purchase”, or “retention” stages.
- Don’t use Customer AI to determine customers who are likely buy a product launching in the future. This requires certain success events to be present in the past for Customer AI to successfully train the machine learning algorithm on your data.

The following video is designed to support your understanding of Customer AI.

>[!VIDEO](https://video.tv.adobe.com/v/32664?learn=on&quality=12)

## How does it work?

Customer AI works by analyzing existing Consumer Experience Event data to predict churn or conversion propensity scores. Adobe realizes that the definition of churn and conversion is not uniform across all the use cases and for this reason, you have the ability to define custom target goals as a set of conditions. You can configure the predicted goal as long as the event of interest is present within the input Consumer Experience Event data.

## Error messages

In the event that you receive one of the following errors, follow the recommended steps to fix the error.

**Error:**

Model quality is poor. We recommend creating a new app with modified configuration.

**Recommended fix:**

"Model quality is poor" means that the model accuracy is not within an acceptable range. Customer AI was unable to build a reliable model and AUC < 0.7 after training. To fix the error it is recommended that you change one of the configuration parameters and rerun the training.

1. Start by checking the accuracy of your data. 
- Check whether your dataset has the latest dates. Customer AI always assumes that the data is up-to-date when the model is triggered.
- Check for missing data within the past 3-9 months. Customer AI requires a minimum amount of data within your defined prediction window. Make sure your dataset meets the [Customer AI historical data requirements](./input-output.md#data-requirements).
- Check for missing data in commerce, application, web, and search within your schema field properties.
2. Change your prediction window
- Try changing your prediction window to 7 days and see if the error continues to occur. If not this indicates that you may not have enough data for your prediction window.
3. Change the eligibility population condition to restrict the model to certain profiles (for example, `_experience.analytics.customDimensions.eVars.eVar142` exists in last 56 Days). This restricts the population and size of the data used in the training window.

## Next steps

You can begin by following the [getting started](./getting-started.md) guide. This guide walks you through setting up all the required prerequisites for Customer AI. If you already have all your credentials and data ready, visit  [configuring a Customer AI instance](./user-guide/configure.md). It provides steps for using Customer AI.
