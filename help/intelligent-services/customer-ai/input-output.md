---
keywords: Experience Platform;getting started;customer ai;popular topics;customer ai input;customer ai output
solution: Experience Platform, Real-time Customer Data Platform
feature: Customer AI
title: Data requirements in Customer AI
topic-legacy: Getting started
description: Learn more about the required events, inputs, and outputs utilized by Customer AI.
exl-id: 9b21a89c-bf48-4c45-9eb3-ace38368481d
---

# Input and output in Customer AI 

The following document outlines the different required events, inputs, and outputs utilized in Customer AI. 

## Getting started

Here are the steps to build propensity models and identify target audiences for personalized marketing in Customer AI: 

1. Brainstorm use cases – How would propensity models help to identify target audiences for personalized marketing? What are my business goals and corresponding tactics to achieve the goal? Where can propensity modeling fit? 

2. Prioritize use cases – Which are the highest priorities for the business?  

3. Build models in Customer AI – Watch this quick tutorial and refer to our UI guide for a step-by-step process to build a model. 

4. Build segments using model results.

5. Send personalized messaging to these segments, monitor, and iterate.

Here are example configurations for your first model.  In this model, we will build a Customer AI model to predict who is likely to convert for a retail business in the next 30 days. The input dataset is an Adobe Analytics dataset.

| Step | Define | Example |
| ---- | ------ | ------- |
| Set Up | Specify basic information about the model | Name: Give_your_model_a_name <br> Model Type: Conversion |
| Select Data |Specify datasets used to build the model | Dataset: Select your Adobe Analytics dataset <br> Identity: Ensure the identity column for each dataset is set to be a common identity.|
| Define Goal | Define goal, eligible population, custom events, and profile attributes. | Prediction Goal: Select commerce.purchases.value exists <br> Outcome window: 30 days. |
| Set Options | Setup schedule for model refresh and enable scores for Profile | Schedule: Weekly |

Enable for profile: This must be enabled for model output to be used in segmentation.  

## Data overview

The following sections outline the different required events, inputs, and outputs utilized in Customer AI. 

Customer AI works by analyzing one of the following datasets to predict churn or conversion propensity scores:

- Adobe Analytics data using the [Analytics source connector](../../sources/tutorials/ui/create/adobe-applications/analytics.md)
- Adobe Audience Manager data using the [Audience Manager source connector](../../sources/tutorials/ui/create/adobe-applications/audience-manager.md)
- Experience Event (EE) dataset
- Consumer Experience Event (CEE) dataset

You can add multiple datasets from different sources if each of the datasets share the same identity type (namespace) such as an ECID. For more information on adding multiple datasets, visit the Customer AI user guide. 

>[!IMPORTANT]
>
>Source connectors take up to four weeks to backfill data. If you recently set up a connector you should verify that the dataset has the minimum length of data required for Customer AI. Please review the [historical data](#data-requirements) section to verify you have enough data for your prediction goal.

The following table outlines some common terminology used in this document: 

| Term | Definition |
| --- | --- |
| [Experience Data Model (XDM)](../../xdm/home.md) | XDM is the foundational framework that allows Adobe Experience Cloud, powered by Adobe Experience Platform, to deliver the right message to the right person, on the right channel, at exactly the right moment. The methodology on which Experience Platform is built, XDM System, operationalizes Experience Data Model schemas for use by Platform services. |
| [XDM Schema](../../xdm/schema/composition.md) | Experience Platform uses schemas to describe the structure of data in a consistent and reusable way. By defining data consistently across systems, it becomes easier to retain meaning and therefore gain value from data. Before data can be ingested into Platform, a schema must be composed to describe the data’s structure and provide constraints to the type of data that can be contained within each field. Schemas consist of a base XDM class and zero or more schema field groups. |
| [XDM class](../../xdm/schema/field-constraints.md) | All XDM schemas describe data that can be categorized as record or time series. The data behavior of a schema is defined by the schema’s class, which is assigned to a schema when it is first created. XDM classes describe the smallest number of properties a schema must contain in order to represent a particular data behavior. |
| [Field groups](../../xdm/schema/composition.md) | A component that define one or more fields in a schema. Field groups enforce how their fields appear in the schema’s hierarchy, and therefore exhibit the same structure in every schema that they are included in. Field groups are only compatible with specific classes, as identified by their `meta:intendedToExtend` attribute. |
| [Data type](../../xdm/schema/composition.md) | A component that can also provide one or more fields for a schema. However, unlike field groups, data types are not constrained to a particular class. This makes data types a more flexible option to describe common data structures that are reusable across multiple schemas with potentially different classes. The data types outlined in this document are supported by both the CEE and Adobe Analytics schemas. |
| [Real-time Customer Profile](../../profile/home.md) | Real-time Customer Profile provides a centralized consumer profile for targeted and personalized experience management. Each profile contains data that is aggregated across all systems, as well as actionable timestamped accounts of events involving the individual that have taken place in any of the systems you use with Experience Platform. |

## Customer AI input data

For input datasets, like Adobe Analytics and Adobe Audience Manager, the respective source connectors directly map the events in these standard field groups (Commerce, Web, Application, and Search) by default during the connection process. The table below shows the event fields in the default standard field groups for Customer AI.  

For more information on mapping Adobe Analytics data or Audience Manager data, visit the Analytics field mappings or Audience Manager field mappings guide. 

You can use Experience Event (EE) or Consumer Experience Event (CEE) XDM schemas for input datasets that are not populated via one of the above connectors. Additional XDM field groups can be added during the schema creation process. The field groups can be provided by Adobe like the standard field groups or a user-defined field group, which matches the data representation in the Platform. 

>[!IMPORTANT]
>
>You must ensure that data is being populated into these input datasets. If no events from standard field groups are found in the input datasets, you must add user-defined events during the configuration workflow. Please see details about user-defined events.  

### Standard field groups used by Customer AI {#standard-events}

Experience Events are used for determining various customer behaviors. Depending on how your data is structured, the event types listed below may not encompass all of your customer’s behaviors. It is up to you to determine what fields have the necessary data that is needed to identify web or other channel-specific user activity clearly and unambiguously. Depending on your prediction goal, the required fields that are needed can change. 

>[!NOTE] 
>
>If you are using Adobe Analytics or Adobe Audience Manager data, the schema is created automatically with the required standard events that are needed to capture your data. If you are creating your own custom EE schema to capture data, you need to consider what field groups are needed to capture your data. 

Customer AI uses the events in these four standard field groups by default: Commerce, Web, Application, and Search. It is not necessary to have data for each event in the standard field groups listed below but certain events are required for certain scenarios. If you have any events in the standard field groups available, it is recommended that you include it in your schema. For example, if you wanted to create a Customer AI application for predicting purchase events, it would be useful to have data from the Commerce and Web page details field groups. 

To view a field group in the Platform UI, select the **[!UICONTROL Schemas]** tab on the left-rail followed by selecting the **[!UICONTROL Field groups]** tab.

| Field group | Event type | XDM field path |
| --- | --- | --- |
| [!UICONTROL Commerce Details] | order | <li> commerce.order.purchaseID </li> <li> productListItems.SKU </li> |
|  | productListViews | <li> commerce.productListViews.value </li> <li> productListItems.SKU </li>  |
|  | checkouts | <li> commerce.checkouts.value </li> <li> productListItems.SKU </li> |
|  | purchases | <li> commerce.purchases.value </li> <li> productListItems.SKU </li> |
|  | productListRemovals | <li> commerce.productListRemovals.value </li> <li> productListItems.SKU </li> |
|  | productListOpens | <li> commerce.productListOpens.value </li> <li> productListItems.SKU </li> |
|  | productViews | <li> commerce.productViews.value </li> <li> productListItems.SKU </li> |
| [!UICONTROL Web Details] | webVisit | web.webPageDetails.name |
|  | webInteraction | web.webInteraction.linkClicks.value |
| [!UICONTROL Application Details] | applicationCloses | <li> application.applicationCloses.value </li> <li> application.name </li> |
|  | applicationCrashes | <li> application.crashes.value </li> <li> application.name </li> |
|  | applicationFeatureUsages | <li> application.featureUsages.value </li> <li> application.name </li> |
|  | applicationFirstLaunches | <li> application.firstLaunches.value </li> <li> application.name </li> |
|  | applicationInstalls | <li> application.installs.value </li> <li> application.name </li> |
|  | applicationLaunches | <li> application.launches.value </li> <li> application.name </li> |
|  | applicationUpgrades | <li> application.upgrades.value </li> <li> application.name </li> |
| [!UICONTROL Search Details] | search | search.keywords |

Additionally, Customer AI can use subscription data to build better churn models. Subscription data is needed for each profile using the [[!UICONTROL Subscription]](../../xdm/data-types/subscription.md) data type format. Most of the fields are optional, however, for an optimal churn model it is highly recommended that you provide data for as many fields as possible such as, `startDate`, `endDate`, and any other relevant details. Please reach out to your account team for additional support on this feature.  

### Adding user-defined events and profile attributes

If you have information you wish to include in addition to the default [standard event fields](#standard-events) used by Customer AI, you can use the [user-defined event configuration](./user-guide/configure.md#custom-events) to augment the data used by the model.  

#### When to use user-defined events

User-defined events are necessary when: The datasets chosen in the dataset selection step contain *none* of the default event fields used by Customer AI. As mentioned in the Data Requirements section, Customer AI needs information about at least one user behavior event other than the outcome.  

User-defined events are helpful for: 

1. Incorporating domain knowledge or prior expertise into the model through the addition of data 

2. Potentially improving the predictive model quality 

3. Gaining additional insights and interpretations

4. Choosing user-defined events to include: 

    - The best candidates for user-defined events are user behaviors that may be predictive of the outcome.  

5. Some general examples of custom events include: 

    - Register for account 

    - Subscribe to newsletter 

    - Make a call to customer service 

6. Industry specific user-defined event examples: 

    | Industry | User-defined events |
    | --- | --- |
    | Retail | In-store transaction<br>Sign up for club card<br>Clip mobile coupon. |
    | Entertainment | Purchase season membership <br> Stream video.|
    | Hospitality | Make restaurant reservation <br> Purchase loyalty points. | 
    | Travel | Add known traveler info Purchase miles. | 
    | Communications | Upgrade/downgrade/cancel plan. | 

7. Requirements for choosing user-defined events: 

User-defined events must represent user-initiated actions. For example, "Email Send" is an action initiated by a marketer and not by the user, so it shouldn't be used as a user-defined event.  

### Historical data

Customer AI requires historical data for model training.  The length of data (in terms of time-span) required is based on two key elements: outcome window and eligible population. 

By default, Customer AI looks for a user to have had activity in the last 45 days if no eligible population definition is provided during the application configuration. Additionally, Customer AI requires a minimum of 500 qualifying and 500 non-qualifying events (1000 total) from historical data based on a predicted goal definition. 

The following examples demonstrate the use of a simple formula which helps you determine the minimum amount of data required. If you have more data than the minimum requirement, your model is likely to provide more accurate results. If you have less than the minimum amount required, the model will fail as there is not enough data for model training. 

**Formula**: 

- Version 1: 

    -  To decide the minimum length of data required: 

    - The minimum data required to create features is 30 days. Compare the eligibility lookback window* with 30 days: 

    - If the eligibility lookback window is greater than 30 days, the data requirement = eligibility lookback window + outcome window 

    - Otherwise, the data requirement = 30 days + outcome window 

    - If there is more than one condition for defining the eligible population, the eligibility lookback window is the longest one 

- Version 2: 

    - Minimum length of data required = Max (Any date length used for the definition of eligible population, 30 days) + outcome window 

>[!NOTE] 
>
>30 is the minimum number of days required for eligible population. If this is not provided the default is 120 days. 

- Examples: 

- You want to predict whether a customer is likely to purchase a watch in the next 30 days for those who have some web activity in the last 60 days. 

    - Eligibility lookback window = 60 days 

    - Outcome window = 30 days 

    - Data required = 60 days + 30 days = 90 days 

- You want to predict whether the user is likely to purchase a watch in the next 7 days without providing an explicit eligible population. In this case, the eligible population defaults to “those who have had activity in the last 45 days” and the outcome window is 7 days.  

    - Eligibility lookback window = 45 days 

    - Outcome window = 7 days 

    - Data required = 45 days + 7 days = 52 days 

- You want to predict whether the customer is likely to purchase a watch in the next 7 days for those who have some web activity in the last 7 days.  

    - Eligibility lookback window = 7 days 

    - Minimum data required to create features = 30 days 

    - Outcome window = 7 days 

    - Data required = 30 days + 7 days = 37 days 

Apart from the minimum data required, Customer AI also works best with recent data. In this use case, Customer AI is doing a prediction for the future based on a user’s recent behavioral data. In other words, more recent data is likely to yield a more accurate prediction. 

### Customer AI output data 

Customer AI generates several attributes for individual profiles that are deemed eligible. There are two ways to consume the score (output) based on what you have provisioned. If you have a Real-time Customer Profile-enabled dataset, you can consume insights from Real-time Customer Profile in the [Segment Builder](../../segmentation/ui/segment-builder.md). If you don't have a Profile-enabled dataset, you can [download the Customer AI output](./user-guide/download-scores.md) dataset available on the data lake.

You can find the output dataset under **Datasets** in Platform. All Customer AI output datasets start with the name **Customer AI Scores - Name_of_app**. Similarly, all Customer AI output schemas start with the name **Customer AI Schema - Name_of_app**.

![cai-schema-name-of-app](./images/user-guide/cai-schema-name-of-app.png) 

The table below describes the various attributes found in the output of Customer AI: 

| Attribute | Description |
| ----- | ----------- |
| Score | The relative likelihood for a customer to achieve the predicted goal within the defined time frame. This value is not to be treated as a probability percentage but rather the likelihood of an individual compared to the overall population. This score ranges from 0 to 100. |
| Probability | This attribute is the true probability of a profile for achieving the predicted goal within the defined time frame. When comparing outputs across different goals, it is recommended that you consider probability over percentile or score. Probability should always be used when determining the average probability across the eligible population, as the probability tends to be on the lower side for events that do not occur frequently. Values for probability range between 0 and 1. |
| Percentile | This value provides information regarding the performance of a profile relative to other similarly scored profiles. For example, a profile with a percentile rank of 99 for churn indicates that it is at a higher risk of churning compared to 99% of all other profiles that were scored. Percentiles range from 1 to 100. |
| Propensity type | The selected propensity type. |
| Score date | The date on which scoring occurred. |
| Influential factors | Predicted reasons on why a profile is likely to convert or churn. Factors are comprised of the following attributes:<ul><li>Code: The profile or behavioral attribute which positively influences a profile's predicted score. </li><li>Value: The value of the profile or behavioral attribute.</li><li>Importance: Indicates the weight of the profile or behavioral attribute has on the predicted score (low, medium, high)</li></ul> |

### Governance, privacy, and security for Customer AI 

Customer AI supports defining user roles and access policies to manage permissions for features and objects within a product application. Learn more about access controls here.  

Audit log resources are recorded automatically as the activity occurs (e.g. create, update, and delete) 

All datasets we use for input/output of models will follow Adobe Experience Platform guidelines. Platform Data Encryption applies for data at-rest and in-transit. See the documentation to learn more about data encryption. 

Customer AI leverages Platform datasets. To support consumer rights requests a brand may receive, brands should use Platform Privacy Service to submit consumer requests of access and delete to remove their data across the data lake, Identity Service, and Real-time Customer Profile. 

Customer AI uses only updated data for further training and scoring. Likewise, when you request to delete data, Customer AI refrains from using the deleted data. 

Policy enforcement checks are used when users submit to create an instance through the configuration workflow. This checks to see whether there are any policy violations of data usage and displays the details in a popover. This ensures that data operations and marketing actions are compliant with the data usage policies configured on the Platform. Please see the UI guide for examples.  

## Next steps {#next-steps}

Once you have prepared your data and have all your credentials and schemas in place, start by following the [Configure a Customer AI Instance](./user-guide/configure.md) guide. This guide walks you through creating an instance for Customer AI.