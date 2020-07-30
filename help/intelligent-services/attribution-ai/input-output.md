---
keywords: Experience Platform;getting started;Attribution ai;popular topics;input;output;
solution: Experience Platform
title: Attribution AI input and output
topic: Input and Output data for Attribution AI
description: The following document outlines the different input and outputs utilized in Attribution AI.
---

# [!DNL Attribution AI] input and output

The following document outlines the different input and outputs utilized in [!DNL Attribution AI].

## [!DNL Attribution AI] input data

>[!IMPORTANT]
>
> The minimum amount of data that is needed for Attribution AI to function is as follows:
> - You need to provide at least 3 months of data to run a good model.
> - You need at least 1000 conversions.

[!DNL Attribution AI] uses [!DNL Consumer Experience Event] data to calculate algorithmic scores. For more details on [!DNL Consumer Experience Event], please refer to the [Prepare data for use in Intelligent Services documentation](../data-preparation.md).

Not all the columns in the [!DNL Consumer Experience Event] (CEE) schema are mandatory for Attribution AI. 

>[!NOTE]
>
> The following 9 columns are mandatory, additional columns are optional but recommended/necessary if you want to use the same data for other Adobe solutions such as [!DNL Customer AI] and [!DNL Journey AI].

| Mandatory columns | Needed for |
| --- | --- |
| Primary Identity Field | Touchpoint / Conversion |
| Timestamp | Touchpoint / Conversion |
| Channel._type | Touchpoint |
| Channel.mediaAction | Touchpoint |
| Channel.mediaType | Touchpoint |
| Marketing.trackingCode | Touchpoint |
| Marketing.campaignname | Touchpoint |
| Marketing.campaigngroup | Touchpoint |
| Commerce | Conversion |

Typically, attribution is run on conversion columns such as order, purchases, checkouts under "commerce". The columns "channel" and "marketing" are highly recommended to define touchpoints for good insights. However, you can include any other additional column along with the above columns to configure as a conversion or touchpoint definition.

The columns below are not required but it is recommended that you include them in your CEE schema if you have the information available.

| Additional recommended columns |
| --- |
| web.webReferer |
| web.webInteraction |
| web.webPageDetails |
| xdm:productListItems |


## Attribution AI algorithmic scores output data

Attribution AI supports two categories of attribution scores, algorithmic and rule-based scores.

Attribution AI produces two different types of algorithmic scores, incremental and influenced. An influenced score is the fraction of the conversion that each marketing touchpoint is responsible for. An incremental score is the amount of marginal impact directly caused by the marketing touchpoint. The main difference between the incremental score and the influenced score is that the incremental score takes the baseline effect into account. It does not assume that a conversion is caused purely by the preceding marketing touchpoints.

Here is a quick look at an Attribution AI schema output example from the Adobe Experience Platform UI:

![](./images/input-output/schema_screenshot.png)

See the table below for more details about each of these attribution scores:

| Attribution scores | Description |
| ----- | ----------- |
| Influenced (algorithmic) | Influenced score is the fraction of the conversion that each marketing touchpoint is responsible for. |
| Incremental (algorithmic) | Incremental score is the amount of marginal impact directly caused by a marketing touchpoint.|
| First Touch | Rule-based attribution score that assigns all credits to the initial touchpoint on a conversion path. |
| Last Touch | Rule-based attribution score that assigns all credit to the touchpoint closest to the conversion. |
| Linear | Rule-based attribution score that assigns equal credit to each touchpoint on a conversion path. |
| U-Shaped | Rule-based attribution score that assigns 40% of the credit to the first touchpoint and 40% of the credit to the last touchpoint, with the other touchpoints splitting the remaining 20% equally. |
| Time Decay | Rule-based attribution score where touchpoints closer to the conversion receive more credit than touchpoints that are farther away in time from the conversion. |

### Raw Score reference (attribution scores)

The table below maps the attribution scores to the raw scores. If you wish to download your raw scores, visit the [downloading scores in Attribution AI](./download-scores.md) documentation.

| Attribution scores | Raw score reference column |
| --- | --- |
Influenced (algorithmic) | _tenantID.your_schema_name.element.touchpoint.algorithmicInfluenced |
Incremental (algorithmic) | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.algorithmicInfluenced |
First Touch | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.firstTouch |
Last Touch | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.lastTouch |
Linear | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.linear |
U-Shaped | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.uShape |
Time Decay | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.decayUnits |

### Viewing raw score paths (UI) {#raw-score-path}

You can view the path to your raw scores in the UI. Start by selecting **[!UICONTROL Schemas]** in the Platform UI then search for and select your attribution AI scores schema from within the *[!UICONTROL Browse]* tab.

![Pick your schema](./images/input-output/schemas_browse.png)

Next, select a field within the *[!UICONTROL Structure]* window of the UI, the *[!UICONTROL Field properties]* tab opens. Within *[!UICONTROL Field properties]* is the *[!UICONTROL Path]* field that maps to your raw scores.

![Pick a Schema](./images/input-output/field_properties.png)

### Aggregated Scores

Aggregated Scores can be downloaded in CSV format from the Platform UI if the date range is less than 30 days. See the table below for more details about each of these aggregate columns.

![](./images/input-output/schema_output.gif)

| Column Name | Constraint | Nullable | Description |
| --- | --- | --- | --- |
customerevents_date (DateTime) | User defined & fixed format | False | Customer Event Date in YYYY-MM-DD format. <br> **Example**: 2016-05-02 |
mediatouchpoints_date (DateTime) | User defined & fixed format | True | Media Touchpoint Date in YYYY-MM-DD format <br> **Example**: 2017-04-21 |
segment (String) | Calculated | False | Conversion Segment such as geo segmentation which the model is built against. In case of absence of segments, segment is same as conversion_scope. <br> **Example**: ORDER_AMER |
conversion_scope (String) | User defined | False | Name of the Conversion as configured by the user. <br> **Example**: ORDER |
touchpoint_scope (String) | User defined | True | Name of the Touchpoint as configured by the user <br> **Example**: PAID_SEARCH_CLICK |
product (String) | User defined | True | The XDM identifier of the product. <br> **Example**: CC |
product_type (String) | User defined | True | The display name for the product as presented to the user for this product view. <br> **Example**: gpus, laptops |
geo (String) | User defined | True | The geographic location where the conversion was delivered (placeContext.geo.countryCode) <br> **Example**: US |
event_type (String) | User defined | True | The primary event type for this time-series record <br> **Example**: Paid Conversion |
media_type (String) | ENUM | False | Describes whether the media type is paid,owned or earned. <br> **Example**: PAID, OWNED |
channel (String) | ENUM | False | The `channel._type` property that is used to provide a rough classification of channels with similar properties in [!DNL Consumer Experience Event] XDM. <br> **Example**: SEARCH |
action (String) | ENUM | False | The `mediaAction` property is used to provide a type of experience event media action. <br> **Example**: CLICK |
campaign_group (String) | User defined | True | Name of the campaign group where multiple campaigns are grouped together like '50%_DISCOUNT'. <br> **Example**: COMMERCIAL |
campaign_name (String) | User defined | True | Name of the campaign used to identify marketing campaign like '50%_DISCOUNT_USA' or '50%_DISCOUNT_ASIA'. <br> **Example**: Thanksgiving Sale |

### Raw Score reference (aggregated)

The table below maps the aggregated scores to the raw scores. If you wish to download your raw scores, visit the [downloading scores in Attribution AI](./download-scores.md) documentation. To view the raw score paths from within the UI, visit the section on [viewing raw score paths](#raw-score-path) within this document.

| Column Name | Raw Score reference column |
| --- | --- |
customerevents_date | timestamp |
mediatouchpoints_date | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.timestamp |
segment | _tenantID.your_schema_name.segmentation |
conversion_scope | _tenantID.your_schema_name.conversion.conversionName |
touchpoint_scope | _tenantID.your_schema_name.touchpointsDetail.element.touchpointName |
product | _tenantID.your_schema_name.conversion.product |
product_type | _tenantID.your_schema_name.conversion.product_type |
geo | _tenantID.your_schema_name.conversion.geo |
event_type | eventType |
media_type | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.mediaType |
channel | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.mediaChannel |
action | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.mediaAction |
campaign_group | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.campaignGroup |
campaign_name | _tenantID.your_schema_name.touchpointsDetail.element.touchpoint.campaignName |


## Next steps {#next-steps}

Once you have prepared your data and have all your credentials and schemas in place, start by following the [Attribution AI user guide](./user-guide.md). This guide walks you through creating an instance for Attribution AI.