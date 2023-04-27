---
keywords: Experience Platform;overview;customer ai;popular topics;customer ai overview
solution: Experience Platform, Real-time Customer Data Platform
feature: Customer AI
title: Customer AI overview
description: Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.
landing-page-description: Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale.
short-description: Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale.
exl-id: 3e668103-e2a2-4ce6-a40a-8029a6aaa8dd
---

# Customer AI overview

Customer AI, as part of Intelligent Services, provides marketers with the power to generate customer predictions at the individual level with explanations.

With the help of influential factors, Customer AI can tell you what a customer is likely to do and why. Additionally, marketers can benefit from Customer AI predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging.

## Understanding Customer AI

Customer AI is used to generate custom propensity scores such as churn and conversion for individual profiles at-scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.

Customer AI is built to:

- Provide high accuracy customer propensity models for stronger segmentation and targeting.
- Help with understanding the influential factors and likelihood behind certain customer behaviors.
- Provide customizable options for your company's unique use cases and data.
- Enhance Real-Time Customer Profile with customer propensity scores such as churn and conversion.
- Enhance customer profiles with influential factors for propensity scores.
- Create segments of customers based on influential factors and propensity scores.

Customer is not built to:

- Customer AI should not be used to predict dynamic pricing, or the price point at which the customer is going to make a purchase.
- Customer AI cannot determine whether giving an offer will make the customer more likely to purchase an item. While you might decide to send discount offers based on propensity scores, it's not necessarily the best way to convert those customers.
- Customer AI is not a product recommendations tool. If you have thousands of SKUs, do not use Customer AI as a proxy for a real product recommendations solution like [!DNL Adobe Target].
- Customer AI can't predict which stage of the buying Journey the customer is in, for example, if they are in "awareness", "consideration", "purchase", or "retention" stages.
- Don't use Customer AI to determine customers who are likely buy a product launching in the future. This requires certain success events to be present in the past for Customer AI to successfully train the machine learning algorithm on your data.

The following video is designed to support your understanding of Customer AI.

>[!VIDEO](https://video.tv.adobe.com/v/32664?learn=on&quality=12)

## How it works

Customer AI works by analyzing existing Consumer Experience Event data to predict churn or conversion propensity scores. Adobe realizes that the definition of churn and conversion is not uniform across all the use cases and for this reason, you have the ability to define custom target goals as a set of conditions. You can configure the predicted goal as long as the event of interest is present within the input Consumer Experience Event data.

## Next steps

You can begin by following the [getting started](./getting-started.md) guide. This guide walks you through setting up all the required prerequisites for Customer AI. If you already have all your credentials and data ready, visit  [configuring a Customer AI instance](./user-guide/configure.md). It provides steps for using Customer AI.
