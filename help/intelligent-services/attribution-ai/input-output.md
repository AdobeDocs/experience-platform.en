---
keywords: Experience Platform;getting started;Attribution ai;popular topics; input; output;
solution: Experience Platform
title: Attribution AI input and output
topic: Input and Output data for Attribution AI
---

# [!DNL Attribution AI] input and output

The following document outlines the different input and outputs utilized in [!DNL Attribution AI].

## [!DNL Attribution AI] input data

>[!IMPORTANT]
>
> The minimum amount of data that is needed for Attribution AI to function is as follows:
> - You need to provide at least need 3 months of data to run a good model.
> - You need at least 1000 conversions.

[!DNL Attribution AI] uses [!DNL Consumer Experience Event] data to calculate algorithmic scores. For more details on [!DNL Consumer Experience Event], please refer to the [Prepare data for use in Intelligent Services documentation](../data-preparation.md).

Not all the columns in [!DNL Consumer Experience Event] (CCE) schema are mandatory for Attribution AI. 

>[!NOTE]
>
> The following 9 columns are mandatory, additional columns are optional but recommended/necessary if you want to use the same data for other Adobe solutions such as [!DNL Customer AI] and [!DNL Journey AI].

| Mandatory columns | Needed for |
| --- | --- |
| Primary Identity Field | Touchpoint |
| Timestamp	| Touchpoint |
| Channel._type	| Touchpoint |
| Channel.mediaAction | Touchpoint |
| Channel.mediaType	| Touchpoint |
| Marketing.trackingCode | Touchpoint |
| Marketing.campaignname | Touchpoint |
| Marketing.campaigngroup | Touchpoint |
| Commerce | Conversion |

The following columns are not required but it is recommended that you include them in your CCE schema if you have the information available.

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

| Attribution scores | Description |
| ----- | ----------- |
| Influenced (algorithmic) | Influenced score is the fraction of the conversion that each marketing touchpoint is responsible for. |
| Incremental (algorithmic) | Incremental score is the amount of marginal impact directly caused by a marketing touchpoint.|
| First Touch | Rule-based attribution score that assigns all credits to the initial touchpoint on a conversion path. |
| Last Touch | Rule-based attribution score that assigns all credit to the touchpoint closest to the conversion. |
| Linear | Rule-based attribution score that assigns equal credit to each touchpoint on a conversion path. |
| U-Shaped | Rule-based attribution score that assigns 40% of the credit to the first touchpoint and 40% of the credit to the last touchpoint, with the other touchpoints splitting the remaining 20% equally. |
| Time Decay | Rule-based attribution score where touchpoints closer to the conversion receive more credit than touchpoints that are farther away in time from the conversion. |

## Next steps {#next-steps}

Once you have prepared your data and have all your credentials and schemas in place, start by following the [Attribution AI user guide](./user-guide.md) guide. This guide walks you through creating an instance for Attribution AI.