---
keywords: Experience Platform;attribution ai;overview;popular topics
solution: Experience Platform
title: Attribution AI overview
topic: Attribution AI
---

# Attribution AI overview

Attribution AI, as part of Intelligent Services is a multi-channel, algorithmic attribution service that calculates the influence and incremental impact of customer interactions against specified outcomes. With Attribution AI, marketers can measure and optimize marketing and advertising spend by understanding the impact of every individual customer interaction across each phase of the customers’ journeys. 

- [Understanding Attribution AI](#understanding-attribution-ai)
- [Attribution AI algorithmic scores](#attribution-ai-algorithmic-scores)
- [Use cases](#examples-of-business-use-cases)
- [Next steps](#next-steps)

## Understanding Attribution AI

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys. Examples of touchpoints include display ad impressions, email sends, email opens and paid search clicks.

Attribution AI outputs can be segregated across various dimensions and can be utilized across different stages of the customer journey. This is accomplished without needing to translate business needs to machine learning problems, picking algorithms, training, or deploying models.

Attribution AI data can be from Adobe (e.g. Analytics) or non-Adobe data sources.

Attribution AI supports two categories of scores, algorithmic and rule-based. Algorithmic scores include incremental and influenced scores. Rule-based scores include First touch, Last touch, Linear, U-shaped, and Time-Decay.

## Attribution AI algorithmic scores

Attribution AI supports two categories of attribution scores, algorithmic and rule-based scores.

Attribution AI produces two different types of algorithmic scores, incremental and influenced. An influenced score is the fraction of the conversion that each marketing touchpoint is responsible for. An incremental score is the amount of marginal impact directly caused by the marketing touchpoint. The main difference between the incremental score and the influenced score is that the incremental score takes the baseline effect into account. It does not assume that a conversion is caused purely by the preceding marketing touchpoints.

See the table below for more details about each of these attribution scores:

| Attribution scores | Description |
| ----- | ----------- |
| First Touch | Rule-based attribution score that assigns all credits to the initial touchpoint on a conversion path. |
| Last Touch | Rule-based attribution score that assigns all credit to the touchpoint closest to the conversion. |
| Linear | Rule-based attribution score that assigns equal credit to each touchpoint on a conversion path. |
| U-Shaped | Rule-based attribution score that assigns 40% of the credit to the first touchpoint and 40% of the credit to the last touchpoint, with the other touchpoints splitting the remaining 20% equally. |
| Time Decay | Rule-based attribution score where touchpoints closer to the conversion receive more credit than touchpoints that are farther away in time from the conversion. |
| Influenced (algorithmic) | Influenced score is the fraction of the conversion that each marketing touchpoint is responsible for. |
| Incremental (algorithmic) | Incremental score is the amount of marginal impact directly caused by a marketing touchpoint.|

## Examples of business use cases

Attribution AI can be used to assist with the following example use cases:

- **Executive reporting**: Allow executives to understand the true incremental impact of marketing, both as a whole and by channel, region, SKU, etc.
- **Budget allocation**: Inform budget allocation decisions across marketing channel.
- **Campaign optimization**: Within each channel, understand which campaigns, creatives, and keywords are working better for which SKUs or Geos. This allows you to look at each channel so the marketing team can optimize their tactics.
- **Full-funnel attribution**: Understand marketing’s impact across the entire customer journey. For example, free account signup to paid conversion and beyond.
- **Partner evaluations**: Evaluate effectiveness of agencies and partners, based on attribution results.

### Additional features

Attribution AI also offers integration with other Adobe solutions such as Adobe Analytics. This enables you to use these solutions to utilize the customizable algorithmic model to evaluate media performance and provide analytical insights.
  
## Next steps

You can begin by following the [getting started](./getting-started.md) guide. This guide walks you through setting up all the required pre-requests for Attribution AI. If you already have your credentials and data ready, visit the [Attribution AI user guide](./user-guide.md). This guide walks you through creating an instance and submitting it for training and scoring.