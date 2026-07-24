---
title: Long-term personalization with Data Distiller
description: Use Data Distiller to support long-term personalization in Adobe Experience Platform. Keep raw event history in the data lake, compute precise signals with scheduled SQL, and publish only the derived attribute or audience to Real-Time Customer Profile for activation.
solution: Experience Platform
keywords: Experience Platform;Data Distiller;long-term personalization;derived datasets;deciles;SQL audiences;profile store;data lake;signals;scores;tiers
---
# Long-term personalization with Data Distiller

Long-term personalization tailors a real-time experience using customer behavior that stretches back months or years. With Data Distiller, you can support these use cases precisely while keeping your Profile store and [Total Data Volume](../../landing/license-usage-and-guardrails/total-data-volume.md) lean: you use SQL to compute a compact signal from the full history in the data lake, then publish only that signal to Real-Time Customer Profile for activation. A signal is the output of the SQL transformation, such as a score, tier, rank, or audience membership. This guide shows how to implement that pattern.

>[!AVAILABILITY]
>
>Data Distiller is an Adobe Experience Platform add-on. Confirm that your organization has the Data Distiller entitlement before you implement this workflow.

This guide is for data engineers, solution architects, and technical implementers building the solution. It assumes familiarity with Experience Platform fundamentals and SQL.

>[!NOTE]
>
>Data Distiller is one of several ways to support long-term personalization, and this guide covers the Data Distiller implementation. If you are still deciding among approaches (including Customer Journey Analytics and Federated Audience Composition), start with [Choose the right long-term personalization approach](../../hygiene/choose-a-personalization-approach.md).

## How it works {#how-it-works}

The Data Distiller workflow for long-term personalization follows a derive-and-promote pattern: historical events stay in the data lake, and only the computed output is promoted to the Profile store. Each step below links to the detailed product documentation.

![Derive-and-promote data flow diagram showing data lake, Data Distiller, Profile store, and activation](PLACEHOLDER.png)

**Prerequisite:** Your historical event data must already be ingested into Experience Platform and available in the data lake before Data Distiller can query it. Data Distiller queries data in the data lake. It does not ingest data itself.

The steps below illustrate the derived-attribute pattern. The direct SQL audience pattern uses the same compute-and-refresh approach but publishes audience membership instead of a reusable profile attribute, as described in [Two ways to deliver the signal](#output-patterns).

1. **Access historical data in the data lake.** All of your event history (web, app, purchase, and loyalty data) is available for query at full depth, without counting toward your Profile entitlement.
1. **Write the transformation query.** A data engineer authors a SQL query that defines the signal, for example total activity over the past 12 months mapped to a loyalty tier. See the [Query Editor user guide](../ui/user-guide.md) and [parameterized queries](../ui/parameterized-queries.md).
1. **Generate a derived dataset.** Run the query to create a derived dataset with one row per customer, containing only the computed signal. See [derived datasets](./derived-datasets/overview.md).
1. **Schedule the refresh.** Save the query and set it to run on a cadence (daily, weekly, or as your use case requires) so the signal always reflects the latest window. See [query schedules](../ui/query-schedules.md).
1. **Publish to the Profile store.** The derived dataset stays in the data lake until you publish it. Publishing promotes the computed output into Real-Time Customer Profile, where it becomes available in [Segment Builder](../../segmentation/home.md) to build audiences. From there, you activate those audiences through [Real-Time Customer Data Platform destinations](../../destinations/home.md) or [Adobe Journey Optimizer journeys](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/create-journey/create-journey-landing-page).

## Two ways to deliver the signal {#output-patterns}

You can deliver the signal to the Profile store in two ways, depending on whether you need to enrich every profile or target a specific audience.

* **Derived attribute.** Compute a value such as a score or tier and write it to every customer profile, where it is reusable across many audiences and journeys. Use this for ongoing profile enrichment. See [derived datasets](./derived-datasets/overview.md).
* **Direct SQL audience.** Build and publish an audience membership directly from SQL without first creating a derived attribute. Use this for a targeted campaign audience when you do not need to enrich every profile. See [build audiences using SQL](../data-distiller-audiences/overview.md).

## Confirm Data Distiller fits {#when-to-use}

This guide assumes Data Distiller is your chosen approach. It is the right fit when your long-term personalization use case calls for:

* **Mathematically precise outputs.** Exact deciles, percentiles, and ranked scores from full historical datasets.
* **Derived attributes on every profile.** A computed value such as `loyalty_tier` or `churn_risk_score` written back to each customer profile and reusable across every downstream audience and journey.
* **Automated, scheduled refresh.** A signal that recomputes on a fixed cadence with no manual intervention after setup.
* **Repeatable, well-defined transformations.** Use cases where you can define the calculation in advance in SQL.

Data Distiller is used by data engineers and SQL analysts. Once a signal is published, marketers and campaign managers can use it in Segment Builder and Adobe Journey Optimizer without any technical knowledge.

## Worked example: airline loyalty decile scoring {#example}

Consider an airline that stores two years of flight transaction events in Experience Platform and wants to offer seat upgrades to its top 10% of frequent flyers, without driving up Total Data Volume by keeping all those events in the Profile store.

With Data Distiller, a data engineer queries the last 12 months of flight transactions from the data lake, ranks loyalty members into deciles by total miles flown, and writes a single derived attribute per customer: their decile rank and tier label. They schedule the query to refresh weekly and publish only the derived attribute to the Profile store. Marketers then build a "Decile 10" audience and activate an upgrade offer in Adobe Journey Optimizer.

For the complete step-by-step SQL walkthrough of this scenario, see [Create decile-based derived datasets](../use-cases/deciles-use-case.md).

## Common signals to compute {#common-signals}

Use Data Distiller to compute example outputs such as these from long histories:

* Ranking-based audiences, such as the top 10% of buyers or highest-spending cohorts
* [Customer lifetime value](../use-cases/customer-lifetime-value.md) and recency-frequency-monetary (RFM) models
* [Churn risk scoring](../use-cases/predict-customer-churn-stub.md)
* [Propensity scoring](../use-cases/propensity-score.md) and product affinity

## Keep the Profile store lean {#keep-lean}

Deriving signals with Data Distiller keeps new historical data out of the Profile store. To manage data that is already there (through TTL settings, dataset expiration, and record delete), see [Choose the right Data Lifecycle Management capability](../../hygiene/choose-a-capability.md) and [Data management license entitlement best practices](../../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Next steps {#next-steps}

Use these resources to implement and extend the solution:

* [Data Distiller overview](./overview.md)
* [Create decile-based derived datasets](../use-cases/deciles-use-case.md)
* [Build audiences using SQL](../data-distiller-audiences/overview.md)
* [Choose the right long-term personalization approach](../../hygiene/choose-a-personalization-approach.md)
