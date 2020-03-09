---
keywords: Experience Platform;attribution ai;overview;popular topics
solution: Experience Platform
title: Attribution AI overview
topic: Attribution AI
---

# Attribution AI overview

>   **Note**: The Attribution AI functionality outlined in this document is in beta. The documentation and the functionality are subject to change.

Attribution AI in Adobe Experience Platform is a multi-channel, algorithmic attribution service that calculates influence and incremental impact of customer interactions against specified outcomes. With Attribution AI, marketers can measure and optimize their customers’ experiences by understanding the impact of every individual customer interaction in each phase of their customers’ journeys.

- [Understanding Attribution AI](#understanding-attribution-ai)
- [Attribution AI algorithmic models](#algorithmic-models)
- [Use cases](#examples-of-business-use-cases)
- [Next steps](#next-steps)

## Understanding Attribution AI

Attribution AI is used to attribute credits to touchpoints and success events, so that marketers can quantify the marketing impact of each individual marketing touchpoint across customer journeys. Examples of touchpoints include display ad impressions, email sends, email opens and paid search clicks.

Attribution AI outputs can be segregated across various dimensions and can be utilized across different stages of the customer journey. This is accomplished without needing to translate business needs to machine learning problems, picking algorithms, training, or deploying models.

Attribution AI data can be from Adobe (e.g. Analytics) or non-Adobe data sources.

Attribution AI supports two categories of models, Algorithmic and Rule-based. Algorithmic models include incremental and influenced. Rule-based models include First touch, Last touch, Linear, U-shaped, and Time-Decay

## Attribution AI algorithmic models

Attribution AI produces two different types of algorithmic models in addition to a number of rule-based models.

The two algorithmic models include the incremental and influence models. The incremental model assigns credit to touchpoints according to the marginal increase in the conversions due to the touchpoints. The influenced model distributes the credits in a normalized fashion across the touchpoints considered. The main difference is that incremental models take into account the baseline representing other touchpoints not considered. These models are designed to make the most accurate measurements and support optimized marketing budget decisions at the most granular level.

See the table below for more details about each of these attribution models:

| Attribution models | Description |
| ----- | ----------- |
| First Touch | Ruled-based attribution model that assigns all credits to the initial touchpoint on a conversion path. |
| Last Touch | Ruled-based attribution model that assigns all credit to the touchpoint closest to the conversion. |
| Linear | Ruled-based attribution model that assigns equal credit to each touchpoint on a conversion path. |
| U-Shaped | Rule-based attribution model that assigns 40% of the credit to the first touchpoint and 40% of the credit to the last touchpoint, with the other touchpoints splitting the remaining 20% equally. |
| Time Decay | Ruled-based attribution model where touchpoints closer to the conversion receive more credit than touchpoints that are farther away in time from the conversion. |
| Influenced (algorithmic) | ML-based attribution. The number of units that are **preceded** by at least one defined touchpoint.  This can be split across channels, touchpoint types, campaigns, geos, and any other dimension that is provided as input to Attribution AI. |
| Incrimental (algorithmic) | The number of units that are **caused** by the defined touchpoints.  This can be split across channels, touchpoint types, campaigns, geos, and any other dimension that is provided as input to Attribution AI.|


## Examples of business use cases

Attribution AI can be used to assist with the following example use cases:

- **Executive reporting**: Allow executives to understand the true incremental impact of marketing, both as a whole and by channel, region, SKU, etc.
- **Budget allocation**: Inform budget allocation decisions across marketing channel.
- **Campaign optimization**: Within each channel, understand what campaigns, creatives, and keywords are working better for what SKUs or Geos. This allows you to look at each channel so the marketing team can optimize their tactics.
- **Full-funnel attribution**: Understand marketing’s impact across the entire customer journey, from free account signup to paid conversion and beyond.
- **Partner evaluations**: Evaluate effectiveness of agencies and partners, based on attribution results.

### Additional features

Attribution AI also offers integration with other Adobe solutions like Adobe Media Optimizer and Adobe Analytics. This enables you to use these solutions to utilize the customizable algorithmic model to evaluate media performance and provide analytical insights.
  
## Next steps

You can get started by following the [Attribution AI user guide](./user-guide.md). It provides steps for using Attribution AI and demonstrates the creation of a new instance.