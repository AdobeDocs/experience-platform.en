---
keywords: segmentation; segmentation rtcdp;real time customer data platform segmentation
title: Segmentation Service in Real-Time Customer Data Platform
description: Adobe Real-Time Customer Data Platform is built on top of Adobe Experience Platform and utilizes many of the Experience Platform services and functionality. Using the Segmentation Service, you can provide tailor-made marketing by dividing your customers into smaller groups with similar traits.
feature: Get Started, Audiences, Segments
exl-id: 140667c0-e288-40c4-8c45-c275e348b84a
TQID: https://experienceleague.adobe.com/TdddFgUATtF3Y5gNzkxCbWdDa0ikPjrBlLCJAApmJkk
product_v2:
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: a3f1e846-82a6-4574-9832-7d46ef69f306
    internal-label: Administration
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d00e9f03-e50b-4162-b143-0c0817c937c2
    internal-label: Customer journeys
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# [!DNL Segmentation Service] in [!DNL Real-Time Customer Data Platform]

[!DNL Adobe Real-Time Customer Data Platform] (Real-Time CDP) allows you to bring data from multiple sources to drive a coordinated and consistent experience for your customers. Delivering relevant personalized marketing campaigns can be achieved using the [!DNL Segmentation Service], part of Adobe Experience Platform.

Real-Time CDP is built on top of Adobe Experience Platform and utilizes many of the [!DNL Experience Platform] services and functionality. Using the [!DNL Segmentation Service], you can provide tailor-made marketing by dividing your customers into smaller groups with similar traits.

## Segmentation

Segmentation is the process of defining specific attributes or behaviors shared by a subset of profiles from your Profile store to distinguish a marketable group of people from your customer base. For example, in an email campaign called "Did you forget to buy your sneakers?", you may want an audience of all users who searched for running shoes within the last 30 days, but who did not complete a purchase. Using different segment definitions, you can focus on your various audiences, delivering a more customized marketing experience.

## [!DNL Audience Builder]

[!DNL Platform] allows you to easily create and access segment definitions, as well as use different building blocks to further characterize your audiences. For more information about how to use the Audience Builder, please read the [Audience Builder guide](./audience-builder.md).

## Customer AI

Customer AI, included with Real-Time Customer Data Platform, provides you with the power to generate customer predictions at the individual level with explanations.

With the help of influential factors, Customer AI can tell you what a customer is likely to do and why. Additionally, you can benefit from Customer AI predictions and insights to personalize customer experiences by serving the most appropriate offers and messaging. Customer AI can assist with:

* Providing high accuracy customer propensity models for stronger segmentation and targeting.
* Understanding the influential factors and likelihood behind certain customer behaviors.
* Providing customizable options for your company's unique use cases and data.
* Enhancing Real-Time Customer Profile with customer propensity scores such as churn and conversion.
* Enhancing customer profiles with influential factors for propensity scores.
* Creating audiences of customers based on influential factors and propensity scores.

Customer AI is located in the **[!UICONTROL Services]** tab under **[!UICONTROL Adobe services]**.

![Customer AI location](../assets/overview/rtcdp-customer-ai.png)

### Getting started with Customer AI

In order to get started with Customer AI you need to follow the [data preperation tutorial](../../intelligent-services/data-preparation.md) and configure the input schema based on your use case. Next, you will need to [configure a Customer AI instance](../../intelligent-services/customer-ai/user-guide/configure.md). After configuring an instance, a model is generated where you can [view your insights and scores](../../intelligent-services/customer-ai/user-guide/discover-insights.md). Using the data generated from your model, you can create audiences for data driven activation.

To learn more about Customer AI, start by visiting the [Customer AI overview](../../intelligent-services/customer-ai/overview.md). Additionally, the following video shows how Customer AI enriches customer profiles with AI-based propensities and empowers customer segmentation and targeting efforts.

>[!VIDEO](https://video.tv.adobe.com/v/40374/?quality=12&learn=on)


## Next steps

After reading this overview, you should now understand how Real-Time CDP utilizes [!DNL Segmentation Service] to enhance customization and personalization of marketing campaigns. For more information about the [!DNL Segmentation Service], please read the [Segmentation documentation](../../segmentation/home.md).
