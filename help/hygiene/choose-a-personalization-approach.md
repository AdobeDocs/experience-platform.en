---
title: Choose the right long-term personalization approach
description: Support long-term personalization in Adobe Experience Platform without storing years of raw event history in the Profile store. Understand the analytical and engagement workflows, compare Data Distiller, Customer Journey Analytics, and Federated Audience Composition, and choose the approach that fits your architecture.
solution: Experience Platform
keywords: Experience Platform;long-term personalization;profile store;data lake;signals;derived attributes;audiences;total data volume;data distiller;customer journey analytics;federated audience composition
---
# Choose the right long-term personalization approach

Long-term personalization means tailoring a real-time experience based on customer behavior that stretches back six months, a year, or longer. You can support these use cases without storing years of raw event history in the Profile store: keep the detailed history in the analytical layer, derive a compact signal from it, and promote only that signal for activation. This decision guide compares the available approaches and helps you choose the one that fits your architecture. It explains when, why, and which approach to use. For configuration steps and SQL syntax, follow the linked product documentation.

This guide is for solution and platform architects and technical decision-makers who are designing a personalization data architecture. Data engineers, business analysts, marketers, and platform administrators who work with historical data for audience creation will also find the comparison and decision guidance useful. It assumes you are familiar with core Experience Platform concepts, including [profiles](../profile/home.md), audiences, the data lake, and the Profile store. It is a companion to [Choose the right Data Lifecycle Management capability](./choose-a-capability.md), which covers how to keep the Profile store lean once your architecture is in place.

## Why long-term history doesn't belong in the Profile store {#customer-problem}

Many organizations accumulate large volumes of historical event data in the Profile store on the assumption that more stored data produces better personalization. In practice, this drives up Profile store size and Total Data Volume entitlement without improving the experiences your customers receive.

Long-term personalization use cases are common in industries with long purchase cycles or slowly evolving customer relationships:

* A financial services customer who opened a savings account 18 months ago and is now researching mortgage products.
* A retail shopper who browsed seasonal inventory last year but never purchased.
* An airline frequent flyer whose loyalty tier reflects 12 months of cumulative activity.
* A telecommunications customer who churned eight months ago and has since returned, identifiable as at-risk from historical behavior.

In each case the relevant data is historical, but the personalization moment must happen in real time. The problem arises when organizations store all of that event-level history directly in the Profile store to support those moments.

The Profile store is optimized for speed, not volume, and every record it holds counts toward your Total Data Volume entitlement. Raw events from 12, 18, or 24 or more months ago are valuable for analysis but rarely need to live in the Profile store to support activation.

## How to identify a long-term personalization use case {#identify}

Use the following questions to determine whether your organization is placing analytical demands on the Profile store that go beyond its intended scope. If two or more apply, you likely have a long-term personalization use case that a derived-signal architecture would serve more efficiently.

* **How far back does your segmentation logic look?** Audiences built with "any time" logic or lookback windows beyond 30–90 days are a strong signal.
* **Are you approaching or exceeding your Total Data Volume entitlement?** If so, examine how much of that volume is historical event data that is rarely used for real-time activation.
* **What time-to-live is configured on your Profile data?** No TTL, or a TTL of 12 or more months, means raw events are likely accumulating without a clear activation purpose.
* **Is your industry characterized by long purchase cycles?** Mortgages, insurance, B2B contracts, seasonal retail, and travel rewards all involve relationships that evolve over months or years.
* **Do you have Data Distiller or Customer Journey Analytics licensed but not used for audience creation?** These tools are designed for the analytical work you may currently be asking the Profile store to do.

## Where your data should live: analytical and engagement workflows {#workflows}

Experience Platform stores data in two repositories that serve different workflows. Matching each dataset to the workflow it supports is the foundation of an efficient long-term personalization architecture.

| Workflow | Best suited to | Typical use cases |
| --- | --- | --- |
| Analytical | Long-term retention with slower access, held in the data lake | Historical analysis, reporting, signal generation, data science |
| Engagement | Real-time or near-real-time access, held in the Profile store | Segmentation, activation, personalization |

The guiding principle is to **personalize on the signal, not the raw history**. You do not need to store years of raw behavioral events in the Profile store to know that a customer qualifies as a loyalty tier member, a high-value buyer, or an at-risk churner. You compute those labels from the historical data in the analytical workflow and store only the label (the signal) in the Profile store. The raw history stays in the data lake, where it does not count toward your Profile entitlement.

## Recommended architecture {#architecture}

The recommended architecture separates long-term storage from real-time activation:

1. **Customer event data accumulates in the data lake.** Web, app, purchase, loyalty, and offline records are retained at full historical depth without contributing to your Profile entitlement.
1. **The analytical workflow derives a signal.** Queries or analyses transform months or years of history into a compact output: a loyalty tier, a churn risk score, a lifetime value ranking, or a qualified audience.
1. **The signal is promoted to the Profile store.** Only the output, not the underlying event history, enters the engagement workflow.
1. **Real-Time Customer Data Platform and Adobe Journey Optimizer activate on the signal.** The activation layer operates on lean, current data and responds in milliseconds.

The approaches in this guide are different ways to perform step 2 and step 3. Which one fits depends on where your historical data lives, which tools you have licensed, and how your team works.

## Before you choose: confirm you have a long-term need {#qualifier}

Not every organization needs an analytical approach. If all of your segmentation and personalization logic operates within a 30–90 day behavioral window, and current profile attributes plus recent events in the Profile store contain everything your decisions require, then **Real-Time Customer Data Platform and Adobe Journey Optimizer alone are sufficient**. No additional tooling is required, and activation runs directly from the Profile store.

This baseline is the starting point, not a fourth approach. Its limit is the reason the rest of this guide exists: when segmentation logic extends beyond 30–90 days, or personalization depends on insight derived from months or years of history, storing that history in the Profile store raises Total Data Volume without improving outcomes. If your diagnostic in the previous section pointed to a long-term need, choose one of the three approaches that follow.

## Quick chooser {#quick-chooser}

If you already know your goal, use this table to find a likely starting point, then read the approach sections and the [decision guide](#decision-guide) to confirm.

| If you… | Start with… |
| --- | --- |
| Need precise, computed scores or rankings written to every profile | Data Distiller |
| Want to explore behavior and publish audiences without writing code | Customer Journey Analytics |
| Must keep historical data in an external warehouse | Federated Audience Composition |

## The three approaches {#approaches}

### Data Distiller {#data-distiller}

To query, transform, and enrich data at scale using SQL, use [Data Distiller](../query-service/data-distiller/overview.md), an Experience Platform add-on. For long-term personalization, it reads historical event data from the data lake, applies transformation logic, and writes only the resulting signal to the Profile store.

Using SQL, a data engineer defines the transformation logic and produces a derived dataset, a compact output such as a loyalty tier or churn score. The query is scheduled to refresh automatically and publishes only that signal to the Profile store. Data Distiller can also [build and publish audiences directly from SQL](../query-service/data-distiller-audiences/overview.md) without first creating a derived attribute.

* **Best for:** loyalty and churn scoring, lifetime value, decile and percentile rankings, RFM models, and automated recurring refresh.
* **Strengths:** produces mathematically exact outputs, refreshes automatically on a schedule, and keeps raw data in the data lake.
* **Limitations:** requires SQL and a data engineer. The transformation must be defined in advance, so it is not suited to exploratory analysis.

To implement this approach, including an end-to-end worked example, see [Long-term personalization with Data Distiller](../query-service/data-distiller/long-term-personalization.md).

### Customer Journey Analytics {#customer-journey-analytics}

To analyze customer behavior across channels and over time, use [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-overview/cja-overview). For long-term personalization, it provides a visual, no-code environment for exploring historical journeys and a direct path (Audience Publishing) to promote the resulting audiences to the Profile store. Historical data analyzed in Customer Journey Analytics does not need to be enabled for the Profile store, so months or years of event history can reside there without counting toward your Total Data Volume entitlement.

Analysts explore journeys visually across any time horizon, combine behavioral criteria into an audience, and publish it to the Profile store, where it becomes available in Real-Time Customer Data Platform and Adobe Journey Optimizer. Audiences can be published once for a campaign or refreshed automatically.

* **Best for:** audiences discovered through exploration, multi-channel journey analysis, re-engagement campaigns, and one-time audiences tied to a specific event.
* **Strengths:** self-service for analysts and marketers, with no SQL required. Exploration-first, so audience definitions can emerge from the data. Publishes to activation within minutes.
* **Limitations:** outputs are audience memberships, not computed attributes written back to every profile. Filter-based precision is approximate rather than exact.

### Federated Audience Composition {#federated-audience-composition}

To build and qualify audiences directly from data in an external enterprise data warehouse, without moving the underlying data into Experience Platform, use [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/home). Audience definitions are applied against warehouse data using a no-code composition canvas, and only the resulting audience membership is sent to Experience Platform for activation.

* **Best for:** organizations whose historical data is the system of record in a warehouse such as [!DNL Snowflake], [!DNL Databricks], [!DNL Google BigQuery], or [!DNL Amazon Redshift], and who want to activate it without a full ingestion project.
* **Strengths:** the underlying data never leaves the warehouse, which satisfies governance and sovereignty requirements. No large-scale ingestion is required.
* **Limitations:** dependent on warehouse connectivity and composition. Activation is limited to audience membership.

## Compare the approaches {#comparison}

The following table compares the three approaches. Real-Time Customer Data Platform and Adobe Journey Optimizer on their own remain the baseline for use cases that need only recent data, as described in [Before you choose](#qualifier).

| Dimension | Data Distiller | Customer Journey Analytics | Federated Audience Composition |
| --- | --- | --- | --- |
| **Intended users** | Data engineers, SQL analysts | Business analysts, marketers | Marketing and data teams |
| **Interface** | SQL query editor | Visual Analysis Workspace | No-code composition canvas |
| **Output** | Derived attributes (scores, tiers); audience lists via SQL | Audience membership lists | Audience membership lists |
| **Historical data source** | Data lake | Data lake | External enterprise warehouse |
| **Requires SQL?** | Yes | No | No |
| **Precision** | Mathematically exact (deciles, percentiles, scores) | Filter-based, approximate | Filter-based, approximate |
| **Data movement** | Only the derived signal enters the Profile store | Only audience membership enters the Profile store | Underlying data never leaves the warehouse |

## Decide which approach to use {#decision-guide}

Two questions most clearly determine the right approach.

**Do you need mathematically precise outputs?** If your use case requires exact rankings (for example, the top 10% of customers by a calculated metric, a churn risk score of 0.82, or a lifetime value in the eighth decile), Data Distiller is the appropriate tool. If you cannot define the calculation precisely in advance, start with Customer Journey Analytics.

**Are you starting from exploration?** If you do not yet know what the audience looks like and want to see what patterns emerge, Customer Journey Analytics is the right starting point. Once a pattern is validated, a data engineer can build a scheduled, precision-scored version in Data Distiller if that rigor is needed.

Your choice is also shaped by where your data lives and what you have licensed:

| If your situation is… | Start with… |
| --- | --- |
| You know exactly what score or ranking you need to compute | Data Distiller |
| You want to explore the data and see what patterns emerge | Customer Journey Analytics |
| You need a derived attribute on every customer profile | Data Distiller |
| You need a campaign audience without involving engineering | Customer Journey Analytics |
| You need exact mathematical deciles or percentile rankings | Data Distiller |
| You want an audience based on a multi-step customer journey | Customer Journey Analytics |
| Your historical data must stay in an external warehouse | Federated Audience Composition |
| You need a derived attribute recomputed automatically on a schedule | Data Distiller |

>[!TIP]
>
>When you have both Data Distiller and Customer Journey Analytics, use each for what it does best and combine them. Data Distiller can compute a churn risk score weekly and write it to every profile. Analysts in Customer Journey Analytics can then filter on that score alongside journey behavior they discover visually, producing a precision-scored, journey-aware audience that neither tool could create as effectively on its own.

## Keep the Profile store lean {#keep-lean}

Choosing the right approach keeps new historical data out of the Profile store. Actively managing what is already there is a complementary, ongoing practice for every deployment. Rather than repeat that guidance here, use the dedicated resources:

* To choose a data management capability (record delete, dataset expiration, Experience Event TTL, or Pseudonymous Profile TTL), see [Choose the right Data Lifecycle Management capability](./choose-a-capability.md).
* For license entitlement monitoring, ingestion filters, and dataset hygiene, see [Data management license entitlement best practices](../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Next steps {#next-steps}

Long-term personalization does not require storing years of raw event data in the Profile store. It requires deriving the right signal from that history and making only that signal available for real-time activation. Confirm you have a long-term need, choose the approach that fits your architecture and team, and follow the linked product documentation to implement it.

* [Long-term personalization with Data Distiller](../query-service/data-distiller/long-term-personalization.md)
* [Data Distiller overview](../query-service/data-distiller/overview.md)
* [Customer Journey Analytics overview](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-overview/cja-overview)
* [Federated Audience Composition](https://experienceleague.adobe.com/en/docs/federated-audience-composition/using/home)
* [Choose the right Data Lifecycle Management capability](./choose-a-capability.md)
* [Real-Time Customer Profile overview](../profile/home.md)
