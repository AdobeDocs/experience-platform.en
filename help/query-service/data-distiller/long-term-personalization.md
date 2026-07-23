---
title: Long-term personalization with Data Distiller
description: Use Data Distiller to support long-term personalization in Adobe Experience Platform. Keep raw event history in the data lake, compute precise signals with scheduled SQL, and publish only the derived attribute or audience to Real-Time Customer Profile for activation.
solution: Experience Platform
keywords: Experience Platform;Data Distiller;long-term personalization;derived datasets;deciles;SQL audiences;profile store;data lake;signals;scores;tiers
---
# Long-term personalization with Data Distiller

Long-term personalization means tailoring a real-time experience based on customer behavior that stretches back months or years. Data Distiller is the precision engine for these use cases: rather than storing years of raw events in the Profile store, you keep the full history in the data lake, use SQL to compute a compact signal from it — a score, a tier, a ranking, or an audience — and publish only that signal to Real-Time Customer Profile for activation. The raw history never enters the Profile store, so your Total Data Volume stays lean while personalization stays precise.

>[!NOTE]
>
>Data Distiller is one of several ways to support long-term personalization. If you are still deciding which approach fits your architecture — including Customer Journey Analytics and Federated Audience Composition — start with [Choose the right long-term personalization approach](../../hygiene/choose-a-personalization-approach.md). This guide focuses on implementing the use case with Data Distiller.

## When to use Data Distiller {#when-to-use}

Data Distiller is the right tool when your long-term personalization use case calls for:

* **Mathematically precise outputs** — exact deciles, percentiles, and ranked scores from full historical datasets, such as the top 10% of customers by a calculated metric.
* **Derived attributes on every profile** — a computed value such as `loyalty_tier` or `churn_risk_score` written back to each customer profile and reusable across every downstream audience and journey.
* **Automated, scheduled refresh** — a signal that recomputes on a fixed cadence with no manual intervention after setup.
* **Repeatable, well-defined transformations** — use cases where you can define the calculation in advance in SQL.

Data Distiller is used by data engineers and SQL analysts. Once a signal is published, marketers and campaign managers can use it in Segment Builder and Adobe Journey Optimizer without any technical knowledge.

## How it works {#how-it-works}

The Data Distiller workflow for long-term personalization follows a derive-and-promote pattern. Each step below links to the detailed product documentation.

1. **Access historical data in the data lake.** All of your event history — web, app, purchase, and loyalty data — is available for query at full depth, without counting toward your Profile entitlement.
1. **Write the transformation query.** A data engineer authors a SQL query that defines the signal — for example, total activity over the past 12 months mapped to a loyalty tier. See the [Query Editor user guide](../ui/user-guide.md) and [parameterized queries](../ui/parameterized-queries.md).
1. **Generate a derived dataset.** The query produces a compact output — one row per customer containing only the computed signal. See [derived datasets](./derived-datasets/overview.md).
1. **Schedule the refresh.** Save the query and set it to run on a cadence — daily, weekly, or as your use case requires — so the signal always reflects the latest window. See [query schedules](../ui/query-schedules.md).
1. **Publish to the Profile store and activate.** The derived signal is published to Real-Time Customer Profile, where it is available in [Segment Builder](../../segmentation/home.md) to build audiences and in Real-Time CDP and Adobe Journey Optimizer to trigger personalized experiences — with no raw event history in the Profile store.

## Worked example: airline loyalty decile scoring {#example}

Consider an airline that stores two years of flight transaction events in Experience Platform and wants to offer seat upgrades to its top 10% of frequent flyers — without driving up Total Data Volume by keeping all those events in the Profile store.

With Data Distiller, a data engineer queries the last 12 months of flight transactions from the data lake, ranks loyalty members into deciles by total miles flown, and writes a single derived attribute per customer: their decile rank and tier label. The query is scheduled to refresh weekly, and only the derived attribute is published to the Profile store. Marketers then build a "Decile 10" audience and activate an upgrade offer in Adobe Journey Optimizer. Two years of raw events stay in the data lake; the Profile store holds one compact attribute per customer.

For the complete step-by-step SQL walkthrough of this scenario, see [Create decile-based derived datasets](../use-cases/deciles-use-case.md).

## Two ways to deliver the signal {#output-patterns}

Data Distiller can put its output into the Profile store in two ways. Choose based on whether you need to enrich every profile or target a specific audience.

* **Derived attribute** — compute a value such as a score or tier and write it to every customer profile, where it is reusable across many audiences and journeys. Use this for ongoing profile enrichment. See [derived datasets](./derived-datasets/overview.md).
* **Direct SQL audience** — build and publish an audience membership directly from SQL without first creating a derived attribute. Use this for a targeted campaign audience when you do not need to enrich every profile. See [build audiences using SQL](../data-distiller-audiences/overview.md).

## Common signals to compute {#common-signals}

Data Distiller is well suited to computing the following signals from long histories:

* Loyalty and tier scoring, and ranking-based audiences (top 10% of buyers, highest-spending cohorts)
* [Customer lifetime value](../use-cases/customer-lifetime-value.md) and recency-frequency-monetary (RFM) models
* [Churn risk scoring](../use-cases/predict-customer-churn-stub.md)
* [Propensity scoring](../use-cases/propensity-score.md) and product affinity

## Keep the Profile store lean {#keep-lean}

Deriving signals with Data Distiller keeps new historical data out of the Profile store. To manage data that is already there — through TTL settings, dataset expiration, and record delete — see [Choose the right Data Lifecycle Management capability](../../hygiene/choose-a-capability.md) and [Data management license entitlement best practices](../../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Next steps {#next-steps}

* [Data Distiller overview](./overview.md)
* [Create decile-based derived datasets](../use-cases/deciles-use-case.md)
* [Build audiences using SQL](../data-distiller-audiences/overview.md)
* [Choose the right long-term personalization approach](../../hygiene/choose-a-personalization-approach.md)
