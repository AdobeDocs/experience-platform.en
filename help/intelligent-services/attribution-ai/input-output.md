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

See the table below for more details about each of these attribution scores:

| Attribution scores | Description | Raw Score reference column |
| ----- | ----------- | ---- |
| Influenced (algorithmic) | Influenced score is the fraction of the conversion that each marketing touchpoint is responsible for. | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.algorithmicInfluenced |
| Incremental (algorithmic) | Incremental score is the amount of marginal impact directly caused by a marketing touchpoint.| _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.algorithmicSourced |
| First Touch | Rule-based attribution score that assigns all credits to the initial touchpoint on a conversion path. | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.firstTouch |
| Last Touch | Rule-based attribution score that assigns all credit to the touchpoint closest to the conversion. | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.lastTouch |
| Linear | Rule-based attribution score that assigns equal credit to each touchpoint on a conversion path. | 	_adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.linear |
| U-Shaped | Rule-based attribution score that assigns 40% of the credit to the first touchpoint and 40% of the credit to the last touchpoint, with the other touchpoints splitting the remaining 20% equally. | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.uShape |
| Time Decay | Rule-based attribution score where touchpoints closer to the conversion receive more credit than touchpoints that are farther away in time from the conversion. | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.decayUnits |

### Aggregated Scores

Aggregated Scores can be downloaded in CSV format from the Platform UI if the date range is less than 30 days. See the table below for more details about each of these aggregate columns.

| Column Name | Data Type | Constraint | Nullable | Description | Example | Raw Score reference column |
| --- | --- | --- | --- | --- | --- | --- |
customerevents_date	| DateTime | User defined & fixed format | False | Customer Event Date in YYYY-MM-DD format | 2016-05-02 | timestamp |
mediatouchpoints_date | DateTime | User defined & fixed format | True | Media Touchpoint Date in YYYY-MM-DD format | 2017-04-21 | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.timestamp |
segment | String | Calculated | False | Conversion Segment such as geo segmentation which the model is built against. In case of absence of segments, segment is same as conversion_scope. | ORDER_AMER | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.segmentation |
conversion_scope | String | User defined | False | Name of the Conversion as configured by the user. | ORDER | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.conversion.conversionName |
touchpoint_scope | String | User defined | True | Name of the Touchpoint as configured by the user | PAID_SEARCH_CLICK | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpointName |
product | String | User defined | True | The XDM identifier of the product. | CC | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.conversion.product |
product_type | String | User defined | True | The display name for the product as presented to the user for this product view. | gpus, laptops | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.conversion.product_type |
geo | String | User defined | True | The geographic location where the conversion was delivered (placeContext.geo.countryCode) | US | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.conversion.geo |
event_type | String | User defined | True | The primary event type for this time-series record | Paid Conversion | eventType |
media_type | String | ENUM | False | Describes whether the media type is paid,owned or earned. | PAID, OWNED | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.mediaType |
channel | String | ENUM | False | The channel._type property that is used to provide a rough classification of channels with similar properties in Consumer Experience Event XDM. | SEARCH | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.mediaChannel |
action | String | ENUM | False | The `mediaAction` property is used to provide a type of experience event media action. | CLICK | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.mediaAction |
campaign_group | String | User defined | True | Name of the campaign group where multiple campaigns are grouped together like '50%_DISCOUNT'. | COMMERCIAL | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.campaignGroup |
campaign_name | String | User defined | True | Name of the campaign used to identify marketing campaign like '50%_DISCOUNT_USA' or '50%_DISCOUNT_ASIA'. | Thanksgiving Sale | _adsdsnpmmsv2.attribution_AI_Scores___Form_Submission__1681.touchpointsDetail.element.touchpoint.campaignName |




## Next steps {#next-steps}

Once you have prepared your data and have all your credentials and schemas in place, start by following the [Attribution AI user guide](./user-guide.md) guide. This guide walks you through creating an instance for Attribution AI.