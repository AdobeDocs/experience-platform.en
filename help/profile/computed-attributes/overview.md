---
title: Computed Attributes overview
description: Computed attributes are functions to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization.
badge: "Beta"
---
# Computed attributes overview

>[!IMPORTANT]
>
>Computed attributes is currently in **beta** and is **not** available to all users.

Personalization based on user behavior is a key requirement for marketers to maximize the impact of personalization. For instance, personalizing marketing email with the most recently viewed product to drive conversion, or personalizing webpage based on total purchases made by users to drive retention. 

Computed attributes help quickly convert profile behavioral data into aggregated values at the profile level without dependence on engineering resources for:

- Enabling targeted personalization with activation of behavioral aggregates to Real-Time Customer Data Platform destinations, usage in Adobe Journey Optimizer, or in segmentation
- Standardization of aggregated profile behavioral data for usage across platforms and apps
- Better data management with consolidation of old profile events data into meaningful behavioral insights

These aggregates are computed based on Profile-enabled Experience Event datasets ingested into Adobe Experience Platform. Each computed attribute is a profile attribute created on your profile union schema, and is grouped under "Computed Attribute" field group in your union schema.

Sample use cases include personalizing ads with the name of the last viewed product for people with no purchases in the last 7 days, personalizing marketing emails with total reward points won to congratulate users on being promoted to a premium tier, or calculating the lifetime value of each customer to drive better targeting.

This guide will help you to better understand the role of computed attributes within Platform, in addition to explaining the basics of computed attributes.

## Understanding computed attributes

Adobe Experience Platform enables you to easily import and merge data from multiple sources in order to generate [!DNL Real-Time Customer Profiles]. Each profile contains important information related to an individual, such as their contact information, preferences, and purchase history, providing a 360-degree view of the customer. 

Some of the information collected in the profile is easily understood when reading the data fields directly (for example, "first name") whereas other data requires performing multiple calculations or relying on other fields and values in order to generate the information (for example, "lifetime purchase total"). To make this data easier to understand at a glance, [!DNL Platform] allows you to create computed attributes that automatically perform these references and calculations, returning the value in the appropriate field.

Computed attributes include creating an expression, or "rule", that operates on incoming data and stores the resulting value in a profile attribute. Expressions can be defined in multiple different ways, allowing you to specify which events to aggregate on, aggregate functions, or the lookback durations.

### Functions

Computed attributes let you define event aggregates in a self-serve manner by leveraging pre-defined functions. The details on these functions can be found below:

| Function | Description | Supported data types | Example usage |
| -------- | ----------- | -------------------- | ------------- |
| SUM | A function that **sums** up the specified value for qualified events. | Integers, Numbers, Longs | Sum of all purchases in the last 7 days |
| COUNT | A function that **counts** the number of events that have occurred for the given rule. | N/A | Count of purchases in the last 3 months |
| MIN | A function that finds the **minimum** value for the qualified events. | Integers, Numbers, Longs, Timestamps | First purchase data in the last 7 days<br/>Minimum order amount in the last 4 weeks |
| MAX | A function that finds the **maximum** value for the qualified events. | Integers, Numbers, Longs, Timestamps | Last purchase data in the last 7 days<br/>Maximum order amount in the last 4 weeks |
| MOST_RECENT | A function the finds the specified attribute value from the latest qualified event. | All primitive values, Arrays of primitive values | Latest product viewed in the last 7 days |

### Lookback periods

Computed attributes are calculated in batches, letting you keep your aggregates fresh and using the latest events. In order to support these near real-time scenarios, the refresh frequency varies depending on the event lookback period.

The lookback period refers to the amount of time that is reviewed when aggregating Experience Events for the computed attribute. This period of time can defined in hours, days, weeks, or months.

The refresh frequency refers to the frequency that the computed attributes are refreshed. This value is dependent on the lookback period, and is automatically set.

| Lookback period | Refresh frequency |
| --------------- | ----------------- |
| Up to 24 hours | Hourly |
| Up to 7 days | Daily |
| Up to 4 weeks | Weekly |
| Up to 6 months | Monthly |

For example, if your computed attribute has a lookback period of the last 7 days, this value will be calculated based on the values of the last 7 days, and then refreshed on a daily basis.

>[!NOTE]
>
>Both weeks and months are considered as **calendar weeks** and **calendar months** when used in event lookbacks.

**Fast refresh**

>[!IMPORTANT]
>
>A maximum of **five** attributes, per sandbox, can have fast refresh enabled. 

Fast refresh allows you to keep your attributes up-to-date. Enabling this option lets you refresh your computed attributes on a daily basis, even for longer lookback periods. This allows you to react in near real-time to user activities. This value is only applicable for computed attributes with a lookback period greater than a weekly basis. 

>[!NOTE]
>
>Enabling fast refresh will vary your event lookback durations, since the lookback period rolls on a weekly or monthly basis respectively.
>
>For example, if you create a computed attribute with a two week lookback period with fast refresh enabled, this means that the initial lookback period will be two weeks. However, with each daily refresh, the lookback period will include events from the additional day. This addition of days will continue until the next calendar week starts, in which the lookback window will roll over and return to two weeks.

## Next steps

To learn more about creating and managing computed attributes, please read the [computed attributes API guide](./api.md) or the [computed attributes UI guide](./ui.md). 
