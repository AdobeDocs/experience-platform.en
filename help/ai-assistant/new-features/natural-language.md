---
title: Natural Language Estimation With AI Assistant
description: Learn how to use AI Assistant's natural language estimation capabilities.
badge: Alpha
exl-id: 7997c84f-288b-4b48-9f88-8de4addbae36
TQID: https://experienceleague.adobe.com/tMbm4Vdg5CiVkv4NpyJCO5dl1YWTiWq6-iMrwVNFWfs
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: f8e8ea8a-6020-40da-99f7-6504fe599cb1
    internal-label: AI Assistant
subfeature_v2:
  - id: af7d4edc-6e6b-4176-bf14-907faf40ebd4
    internal-label: Customer AI
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Natural language estimation with AI Assistant

>[!AVAILABILITY]
>
>This feature is in Alpha and may not be available to your organization. To participate in the Alpha program and access this feature, contact your Adobe Account Team.

You can use the Natural Language Estimation capabilities of AI Assistant for Adobe Experience Platform to estimate audience sizes and predict audience propensities based on simple, conversational questions. With this feature, you can make audience insights more accessible and intuitive. This can be particularly useful for your business and marketing operations use cases, especially if you are managing your audiences daily and are relying on these insights to shape effective marketing strategies.

With AI Assistant's natural language processing capabilities, you can ask questions such as: "How many profiles do I have in California between ages 25 to 35" or "How many high-value customers do we have?" or even "What percentage of my audience is likely to purchase within the next month?" AI Assistant then interprets these questions and returns estimates or propensity scores that you can use to make data-informed decisions.

Read this document to learn how you can use AI Assistant's natural language estimation capabilities.

## Key terminology and definitions {#key-terminology-and-definitions}

Refer to the following table for a list of important terminology and their corresponding definitions.

| Terminology | Definition |
| --- | --- |
| Audience size estimation | The process of calculating the number of members within a specific audience based on a defined criteria. You can base your size estimations on profile data, including profiles not in an audience. Additionally, you can retrieve audience size estimates without having to first create an audience. Use this insight to understand the scale of your reach for targeted campaigns. |
| Propensity estimation | A prediction of the likelihood that members within an audience will exhibit specific behaviors (such as: making a purchase, churning) within a certain time frame. Propensity estimation is specific to audiences within Real-Time Customer Data Platform, but can include profile data, including profiles in in any audiences. You can reference this insight when optimizing your campaigns and managing audience retention strategies. |
| Natural language processing | AI Assistant's ability to interpret and respond to questions asked in everyday language, allowing you to interact conversationally and receive relevant insights without using technical queries. |
| Predefined time frames | Standard time ranges ( "last month," "next 30 days") supported by AI Assistant for estimating audience size and propensities. **Note**: Custom time frames may not be fully supported during the Alpha stage. |
| Snapshot data | The dataset used by AI Assistant to provide estimates. This data is updated from Real-Time Customer Data Platform every 24-48 hours, and therefore, insights may not reflect real-time audience changes. |

{style="table-layout:auto"}

## Use case examples {#use-case-examples}

AI Assistant's natural language estimation capabilities can be particularly helpful for the following use cases:

### Marketing operations

As a marketing operations professional, your responsibilities may include managing and monitoring audience data to ensure that it aligns with your business objectives. With AI Assistant's natural language estimation feature, you can quickly gather insights into audience sizes and propensities without having to create an audience first or extensive data analysis knowledge.

helping them maintain a consistent, data-driven approach in their workflows.

### Business users and marketers

As a business user and marketer, quick access to audience data can be crucial to the success of your campaign planning, targeting, and evaluation. With AI Assistant's natural language estimation feature, you can simplify your access to audience information, ask straightforward questions, and receive actionable insights that aid in your audience creation and campaign optimization.

## Key features

>[!IMPORTANT]
>
>The following features are in Alpha and are focused on foundational capabilities of natural language estimation. As this feature is in Alpha, you must ensure that you double-check the responses that you receive from AI Assistant for accuracy.

### Audience size estimation

You can use natural language queries to ask AI Assistant to estimate the size of specific audiences. This feature can be particularly useful for gauging the reach and impact of target audiences. For example, as a marketing strategist, you may ask questions such as:

* "How many profiles live in New York?"
* "How many profiles do I have with an email and have consented?"

Use this feature to simplify the process of estimating audience sizes and get immediate answers without needing to navigate complex data filters or segment definitions. 

### Audience propensity estimation

>[!TIP]
>
>Your Experience Platform account must be provisioned with [Customer AI](../../intelligent-services/customer-ai/overview.md) in order to use AI Assistant's propensity estimation capabilities.

You can use audience propensity estimation to identify the likelihood of specific behaviors or actions within an audience. For example, you may ask questions such as:

* "What percentage of my current audience is likely to purchase in the next month?"
* "How many profiles do I have with a high propensity to convert?"

By asking natural language questions, you can retrieve propensity scores that indicate the percentage or likelihood of audience members exhibiting certain behaviors, helping you make proactive adjustments to your campaigns or retention strategies.

## Example questions for audience size and propensity estimation

The following are sample questions that you can ask AI Assistant to help your understanding of audience sizes and behavioral propensities:

### Audience Size Estimation

* "How many profiles do I have with an email or mobile phone number?"
* "How many profiles do I have in New York?"
* "What are the top 5 states where my customers live?"

### Audience Propensity Estimation

* "What percentage of my audience is likely to purchase within the next month?"
* "How many customers are expected to convert in the next quarter?"

You can use the flexibility that natural language queries provides to gain quick insights into audience dynamics without needing technical expertise.

## Frequently-asked-questions

Read this section for answers to frequently asked questions regarding natural language estimation with AI Assistant.

### How frequently does the AI Assistant refresh audience data?

AI Assistant's data refreshes every 24-48 hours. Therefore, estimates may reflect slight delays. This means that when you ask about "current" data, the response reflects the most recent snapshot, which may be up to 48 hours old.

### Can I ask for audience sizes or propensities with custom date ranges?

Currently, AI Assistant supports predefined date ranges, such as "last month" or "next 30 days." Custom date ranges beyond these predefined options are not fully supported in the Alpha stage. If a custom time frame is requested, AI Assistant will provide insights based on the closest available time frame.

### How does AI Assistant calculate propensity scores?

Propensity scores are calculated using [Customer AI](../../intelligent-services/customer-ai/overview.md). AI Assistant uses machine learning models to predict the likelihood of specific audience behaviors, such as purchases and churn, within the requested time frame. During the Alpha stage, propensity score calculation in AI Assistant does not use experience events or behavioral data.

### Will AI Assistant estimate audience sizes or propensities based on real-time data?

No, real-time data is not available at this point. The estimates are based on recent data snapshots, updated every 24-48 hours. Real-time updates are outside the scope during the Alpha stage.

### How are propensities calculated?

AI Assistant relies on Customer AI models to answer any likelihood or propensity scores.

## Out-of-scope features

The following capabilities are currently not supported:

### Audience Size Estimations based on event of behavioral data

AI Assistant currently cannot answer questions based on behavioral data such as **"How many users have added a product to cart in last 30 days"**. However, you can create a computed attribute in Real-Time CDP that may pre-compute such values. These computed attributes are then available within AI Assistant. For more information, read the documentation on [computed attributes](../../profile/computed-attributes/overview.md).

### Real-Time Data Updates

The estimates provided by AI Assistant are based on recent, but not real-time, data snapshots. Data refreshes every 24-48 hours, so insights reflect this delay. This limitation means that users cannot receive instantaneous updates if a segment or dataset changes significantly within a short time frame.
