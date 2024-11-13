---
title: Monitoring Significant Changes and Audience Forecasting with AI Assistant
description: Learn how to use AI Assistant to monitor significant changes and forecast audiences in Adobe Experience Platform.
badge: Alpha
exl-id: 8f34d378-a8a0-420d-8e45-39a5aafdd7b7
---
# Monitor significant changes and forecast audience growth with AI Assistant

>[!AVAILABILITY]
>
>This feature is in Alpha and may not be available to your organization. To participate in the Alpha program and access this feature, contact your Adobe Account Team.

In today's data-driven marketing landscape, timely and accurate insights are essential. Whether you are a business user or in marketing operations, you need the ability to consistently interact with your audiences and make swift and impactful adjustments founded on clear insights. In order to maintain alignment or achieve your business goals, you must have the actionable information needed to drive effective campaigns and optimize resources.

You can use AI Assistant for Adobe Experience Platform to monitor significant changes and provide growth forecasts for your audience and dataset sizes. You can then use this information to ensure the integrity of your audience data and offer forward-looking projections to support data-informed decision-making.

Read this document to learn how you can monitor significant changes and forecast audience growth and fluctuations using AI Assistant.

## Key terminology and definitions {#key-terminology-and-definitions}

Refer to the following table for a list of important terminology and their corresponding definitions.

| Terminology | Definition |
| --- | --- |
| Significant Change | A significant change is a large percentage-based change in audience or dataset size, defined by specific thresholds (for example, 10% for large audiences). Significant changes help identify anomalies affecting data stability. |
| Anomalies | Anomalies are unexpected variations in data, such as a sudden 20% growth in a **High-Value Shoppers** audience. An anomaly may be caused by a potential data ingestion issue or a change in audience definition. |
| Historical Data | Historical data refers to long-term data, usually one to three years. You can use historical data to track patterns. **Note**: During the Alpha stage, AI Assistant provides historical data of up to 13 months. |
| Emerging/Recent Data | Emerging or recent data refer to data points observed over a short period, typically for a week, or up to 30 days. You can use emerging or recent data to highlight immediate trends and make swift adjustments. |
| Forecast | A forecasts are predictions of future audience or dataset sizes based on past trends. You can use forecast data to support long-term planning. |
| Audience Size | Audience size refers to the total number of profiles within an audience. Audience size gets updated with every iteration of data ingestion. |
| Time frame for comparison | AI Assistant uses predefined comparison time frames. Recent anomalies default to a seven-day look back, while past anomalies cover 30 days. Historical trends span up to 13 months. |

{style="table-layout:auto"}

## Use case examples {#use-case-examples}

AI Assistant's capability to monitor significant changes and forecast audiences can be particularly helpful for the following use cases:

### Marketing operations

Marketing operations (marketing ops) professionals are responsible for ensuring the integrity and consistency of audience data. As a member of a marketing ops team, your responsibilities may include monitoring data quality, responding to unexpected shifts, and maintaining a stable foundation for all marketing efforts. You can use AI Assistant's anomaly detection to detect and address significant audience or dataset changes, thereby preventing disruptions that could impact campaign performance.

### Business users and marketers

As a business user and marketer, you may rely on accurate audience insights to make data-driven decisions and ensure that your campaigns reach their intended audiences effectively. With the forecasting capabilities of AI Assistant, you can anticipate audience growth or reduction and enable strategic adjustments in resources and targeting over time.

## Key features

>[!IMPORTANT]
>
>The following features are in Alpha and are focused on foundational capabilities in monitoring and forecasting. As this feature is in Alpha, you must ensure that you double-check the responses that you receive from AI Assistant for accuracy.

### Monitor significant changes in audience and data

You can use AI Assistant to identify significant changes in audience and dataset sizes by tracking deviations from typical patterns. Each significant change is based on predefined thresholds tailored to the scale of the audience.

| Audience size | Number of profiles | Description |
| --- | --- | --- |
| Small audiences | 1 to 100,000 profiles | Flags a change of 30% or more, unless a specific percentage is specified. |
| Medium audiences | 100,000 to 500,000 profiles | Flags a change of 25% or more, unless a specific percentage is specified. |
| Large audiences | 500,000 to 1 million profiles | Flags a change of 20% or more, unless a specific percentage is specified.  |
| Very large audiences | Over 1 million profiles | Flags a change of 10% or more, unless a specific percentage is specified.  |

{style="table-layout:auto"}

>[!BEGINSHADEBOX]

#### Example scenario

Significant changes indicate anomalies that may impact audience stability or data reliability. For example, if a **High-Value Shoppers** audience experiences a sudden 15% drop in size, then AI Assistant will flag this as a significant change. You can then use this information to investigate and resolve potential issues before they impact your campaigns.

>[!ENDSHADEBOX]

>[!TIP]
>
>AI Assistant does not automatically notify you of occurrence of significant changes in audience sizes. You must initiate a conversation with AI Assistant and ask which audiences have changed significantly or by a specific margin, within a specific period of time.

### Forecast audience and dataset growth

You can use AI Assistant to reference historical data trends and project future audience and dataset sizes. You can then use these insights to support your resource planning and strategy adjustments. Currently, you can use AI Assistant to forecast audience and dataset growth for 30 days. By understanding expected audience growth or decline, you can adjust targeting strategies and allocate your resources accordingly.

### Insights on historical audience sizes

In addition to detecting significant changes, you can use AI Assistant to retrieve historical insights and compare current audience or dataset sizes with past data. This feature supports tracking long-term trends and assessing the impact of previous marketing activities.

You can ask AI Assistant questions such as, "What was the size of my "Loyalty Customers" audience last month? to see historical data on the growth or decline of  this specific audience.

## Example questions for monitoring significant changes

You can frame your AI Assistant questions in a variety of ways.

* If your question includes a percentage, such as **"What audiences changed over 30% or more?"**, then AI Assistant will use the percentage as a reference point.
* If your question does not specify a percentage, then AI Assistant will interpret significant changes based on default settings.

Refer to the following tables for example queries that illustrate how AI Assistant interprets significant changes based on audience size:

| Audience information or audience change | Example |
| --- | --- |
| <ul><li>What is the current size of {AUDIENCE_NAME}?</li><li>Show the audiences that have shown a change of {PERCENT} over {DATE_DURATION}.</li></ul> | <ul><li>What is the current size of the High-Value Shoppers audience?</li><li>Show the audiences that have shown a change of 20% over the last week.</li></ul> |

{style="table-layout:auto"}

| Audience-specific queries | Example |
| --- | --- |
| <ul><li>Which audiences changed more than {PERCENT} in {DATE_OR_DURATION}?</li><li>Show me audiences with a significant change over {DATE_OR_DURATION}.</li><li>Show me the distribution of audiences with the largest changes over {DATE_OR_DURATION}.</li><li>Show me audiences that have decreased more than {PERCENT} on {DATE_OR_DURATION}.</li></ul> | <ul><li>Which audiences changed more than 20% in the last week?</li><li>Show me audiences with a significant change over the last six months.</li><li>Show me the distribution of audiences with the largest changes from October 1 to October 31.</li><li> Show me audiences that have decreased by more than 20% since August 31. |

{style="table-layout:auto"}

## Additional information

### Understanding the "significant change" threshold

You can specify a specific percentage when querying AI Assistant for information regarding significant changes. If you do not provide a specific percentage, then AI Assistant will reference a predefined set of thresholds to determine what qualifies as a significant change. The default thresholds are based on the size of a given audience. Refer to the following table for information on what constitutes a significant change, based on audience size:

| Audience size | What is significant? |
| --- | --- |
| 1 million or more | 10% or greater |
| 500k to 1 million | 20% or greater |
| 100k to 500k | 25% or greater |
| Less than 100k | 30% or greater |

### Generic timelines and specific dates

AI Assistant supports both specific and generic time-based comparisons for audience sizes, interpreting them based on the context provided in the query.

>[!BEGINTABS]

>[!TAB Generic timelines]

Generic timelines refer to queries that use language such as "this week" or "last week". If you ask AI Assistant a question such as, "Which audiences changed by more than 20% in the last week?", then AI Assistant will calculate and compare the **average audience** size over the specified period. 

Use this approach for a broader view of audience changes over time, allowing you to better understand trends within weekly or monthly intervals.

>[!TAB Specific dates]

If your question references a specific date, then AI Assistant will compare the **exact audience sizes** on each of your provided dates.

Use this precise comparison to analyze changes between specific points in time and gain clarity on how audience size can evolve on particular days.

>[!ENDTABS]

You can take advantage of this flexibility to better understand audience dynamics over both broad and precise time frames. Whether you are tracking general trends or examining exact shifts between specific dates, you can use AI Assistant's adaptive mechanism to retrieve the most relative comparison for your query.

## Frequently asked questions {#faq}

Read this section for answers to frequently asked questions regarding monitoring significant changes and audience forecasting with AI Assistant.

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

## Out-of-scope features

The following capabilities are currently not supported:

### Advanced root cause analysis

While AI Assistant can identify significant changes, it cannot currently provide detailed root cause analysis for these shifts. Future iterations of AI Assistant aim to specify which datasets or attributes are contributing to significant changes in your audiences.

### Comprehensive historical dataset sizes

Full historical tracking of data sizes is not supported at this time. Currently, AI Assistant provides audience and dataset history for up to 13 months.
