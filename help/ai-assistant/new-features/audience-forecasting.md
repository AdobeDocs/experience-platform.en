---
title: Monitoring Significant Changes and Audience Forecasting
description: Learn how to use AI Assistant to monitor significant changes and forecast audiences in Adobe Experience Platform.
---
# Monitoring Significant Changes and Audience Forecasting

>[!AVAILABILITY]
>
>This feature is in Alpha and may not be available to your organization. To participate in the Alpha program and access this feature, contact your Adobe Account Team.

In today's data-driven marketing landscape, timely and accurate insights are essential. You can use AI Assistant to monitor significant changes and forecast the growth of your audience and dataset sizes. Designed for business use cases and marketing operations, you can use AI Assistant to ensure the integrity of your audience data and identify forward-looking projections to support data-informed decision-making.

This release supports professionals who interact with audiences daily, enabling them to make swift, impactful adjustments based on clear insights and to maintain alignment with business goals. Whether monitoring audience size fluctuations or projecting future growth, the AI Assistant equips users with actionable information to drive effective campaigns and optimize resources.

## Who is this for?

AI Assistant's capability to monitor significant changes and forecast audiences can be particularly helpful for the following use cases:

### Marketing operations

Marketing operations (marketing ops) professionals are responsible for ensuring the integrity and consistency of audience data. As a member of a marketing ops team, your responsibilities may include monitoring data quality, responding to unexpected shifts, and maintaining a stable foundation for all marketing efforts. You can use AI Assistant's anomaly detection to detect and address significant audience or dataset changes, thereby preventing disruptions that could impact campaign performance.

### Business users and marketers

As a business user and marketer, you may rely on accurate audience insights to make data-driven decisions and ensure that your campaigns reach their intended audiences effectively. With the forecasting capabilities of AI Assistant, you can anticipate audience growth or reduction and enable strategic adjustments in resources and targeting over time.

## Key features

>[!AVAILABILITY]
>
>The following features are in Alpha and are focused on foundational capabilities in monitoring and forecasting.

### Monitor significant changes in audience and data

You can use AI Assistant to identify significant changes in audience and dataset sizes by tracking deviations from typical patterns. Each significant change is based on predefined thresholds tailored to the scale of the audience;

| Audience size | Number of profiles | Description |
| --- | --- | --- |
| Small audiences | 1 to 100,000 profiles | Flags a change of 30% or more. |
| Medium audiences | 100,000 to 500,000 profiles | Flags a change of 25% or more. |
| Large audiences | 500,000 to 1 million profiles | Flags a change of 20% or more. |
| Very large audiences | Over 1 million profiles | Flags a change of 10% or more. |

{style="table-layout:auto"}

>[!BEGINSHADEBOX]

#### Example scenario

Significant changes indicate anomalies that may impact audience stability or data reliability. For example, if a **High-Value Shoppers** audience experiences a sudden 15% drop in size, then AI Assistant will flag this as a significant change. You can then use this information to investigate and resolve potential issues before they impact your campaigns.

>[!ENDSHADEBOX]

>[!TIP]
>
>AI Assistant does not automatically notify you of occurrence of significant changes in audience sizes. You must initiate a conversation with AI Assistant and ask which audiences have changed significantly or by a specific margin, within a specific period of time.

### Forecast audience and dataset growth

You can use AI Assistant to reference historical data trends and project future audience and dataset sizes. You can then use these insights to support your resource planning and strategy adjustments. Forecasts can extend up to a year into the future, enabling long-term planning. By understanding expected audience growth or decline, you can adjust targeting strategies and allocate your resources accordingly.

>[!BEGINSHADEBOX]

#### Example scenario

If the **Engaged Subscribers** audience grows consistently by 10% each month, AI Assistant might predict that the audience will reach 600,000 profiles within six months. You can leverage this insight to plan additional engagement efforts, optimize budget allocation, or adjust campaign strategies in advance.

>[!ENDSHADEBOX]

### Insights on historical audience sizes

In addition to detecting significant changes, you can use AI Assistant to retrieve historical insights and compare current audience or dataset sizes with past data. This feature supports tracking long-term trends and assessing the impact of previous marketing activities.

You can ask AI Assistant questions such as, "What was the size of my "Loyalty Customers" audience last month? to see historical data on the growth or decline of  this specific audience.

## Example questions for monitoring significant changes

## Additional information

### Key terminology and definitions

### What does "significantly" mean?

### How does AI Assistant interpret timelines?

## Frequently asked questions

### How much historical data can I look at to see audience size increases or decreases?

AI Assistant retains 12 months of historical audience size data. You can ask questions regarding audience changes within this time frame to understand growth or decline patterns over the past year.

### How far back in history can I go to see audience changes?

AI Assistant tracks audience changes from the day it is enabled in your organization and goes as far back as the last audience definition change. Once enabled, AI Assistant continuously monitors and records definition changes for up to 12 months, allowing future data tracking and comparison.

### How much historical data is needed for a forecast?

At least 30 days of data is required for reliable forecasting from the last audience definition change. In certain cases, such as forecasting for [!DNL Black Friday], AI Assistant may need up to 12 months of historical data.

### How does the AI Assistant interpret "recently"?

The AI Assistant interprets "recently" as the last seven days. For questions referencing recent changes, AI Assistant considers data from this time period to identify trends or shifts.

### How does the AI Assistant compare audience sizes?

When specific dates are mentioned, AI Assistant compares the audience sizes on those specific days. For more general questions, such as those referencing "last three months" or "last week", AI Assistant compares the average size of that period with the most recent day's average.

### How current is the AI Assistant's audience data?

It may take 24 to 48 hours for AI Assistant to refresh data from Real-Time Customer Data Platform. Hence, for questions referencing "yesterday", AI Assistant interprets this as one day before the most recent data it has is available.