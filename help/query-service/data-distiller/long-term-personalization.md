---
title: Long-term personalization with Data Distiller Accelerators
description: Learn architecture guidance for long-term personalization with Data Distiller Accelerators in Adobe Experience Platform. Keep historical behavioral data in analytical systems, derive activation-ready intelligence, and optimize Real-Time Customer Profile usage.
solution: Experience Platform
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
  - id: ff2b9b37-92e0-45fc-b853-379d44c08c89
    internal-label: Audience segmentation
---
# Long-term personalization with Data Distiller Accelerators

## Overview {#overview}

Long-term personalization enables you to deliver real-time experiences using insights derived from customer behavior over extended periods, such as months or years. Rather than storing large volumes of historical event data in Real-Time Customer Profile, you can retain detailed historical data in the analytical layer and promote only the derived signals required for activation. This approach helps you support long-term personalization while managing Profile Store growth and Total Data Volume efficiently.

This guide explains the recommended architecture for long-term personalization in Adobe Experience Platform. It describes the roles of the Profile Store and the Data Lake, compares the available approaches for generating activation-ready signals from historical data, and provides guidance to help you choose the approach that best fits your organization's architecture, technical capabilities, and business requirements.

<!-- Cross-link: Direct readers to foundational Data Distiller concepts before they evaluate architecture options that rely on Data Distiller. -->

For an introduction to Data Distiller, see the [Data Distiller overview](./overview.md).

<!-- Cross-link: Direct readers to Profile concepts that explain Profile responsibilities before applying the optimization guidance in this architecture guide. -->

To learn more about Real-Time Customer Profile, including Profile Store concepts and responsibilities, see the [Real-Time Customer Profile overview](../../profile/home.md).

<!-- Cross-link: Direct readers to existing data-management guidance instead of duplicating Data Lake, Profile Store, retention, and Total Data Volume details. -->

For guidance on data retention, Profile Store optimization, and Total Data Volume management, see [Data management license entitlement best practices](../../landing/license-usage-and-guardrails/data-management-best-practices.md).


### Section Purpose

Introduce the long-term personalization challenge, establish the scope of the guide, and explain that it provides architectural guidance rather than implementation instructions.

### Key Questions Answered

- What is this guide about?
- Why does long-term personalization require architectural consideration?
- What products and capabilities does this guide discuss?
- What should I expect from this document?

### Expected Content

- High-level definition of long-term personalization.
- Brief statement of the architectural challenge.
- High-level distinction between analytical storage and activation storage.
- Scope of the guide.
- Adobe products discussed.

### Exclusions

- Customer pain points in detail.
- Product-specific guidance.
- Architectural recommendations.
- Decision guidance.
- Best practices.

### Primary Source Sections

- The Challenge
- Introduction to Profile Store and Data Lake
- Summary

<!-- Cross-link: Direct readers to existing data-management guidance instead of duplicating Data Lake, Profile Store, retention, and Total Data Volume details. -->

## Who should read this {#who-should-read}

This guide is written for data architects, data engineers, and technical decision-makers who are designing or evaluating long-term personalization architectures in Adobe Experience Platform. Business analysts and marketing strategists who want to understand how historical customer data can be used for audience creation and activation will also find the decision guidance and approach comparisons useful.

This guide assumes familiarity with the following Adobe Experience Platform concepts:

- The Profile Store and Data Lake and their respective roles
- Real-Time Customer Data Platform and Adobe Journey Optimizer for activation
- Basic audience and segmentation concepts

This is an architecture guide, not a product guide. It explains why long-term personalization requires a deliberate architectural approach, describes the available options, and provides guidance to help you choose the right one for your organization. It does not cover product configuration, SQL syntax, workspace tutorials, or API reference documentation. For product-specific documentation, follow the cross-links provided throughout this guide.

## The customer problem {#customer-problem}

Many organizations accumulate large volumes of historical customer event data in Real-Time Customer Profile in the expectation that more stored data produces better personalization. In practice, this approach drives up Profile Store size and Total Data Volume entitlement costs without improving the experiences customers receive.

Long-term personalization is any scenario where tailoring an experience depends on customer behavior stretching back six months, a year, or longer. These use cases are common in industries with long purchase cycles or slowly evolving customer relationships. Common examples include:

- A financial services customer who opened a savings account 18 months ago and is now researching mortgage products
- A retail shopper who browsed seasonal inventory last year but never purchased
- An airline frequent flyer whose loyalty tier reflects 12 months of cumulative flight activity
- A telecommunications customer who churned eight months ago and has since returned, identifiable as at-risk based on historical behavior patterns

In each case, the relevant data is historical, but the personalization moment must happen in real time. The problem arises when organizations store all of that event-level history directly in the Profile Store to support those moments.

The Profile Store is designed for speed, not volume. It responds in milliseconds to real-time activation decisions and is appropriate for current profile attributes, behavioral events within your real-time activation lookback window (typically 30–90 days), and derived signals such as scores, tiers, or audience memberships. Raw behavioral events from 12, 18, or 24 or more months ago are valuable for analysis but do not need to live in the Profile Store to support activation.

Every record in the Profile Store counts toward your Total Data Volume entitlement. When organizations store years of behavioral events there — every page view, click, and login — entitlement consumption increases significantly, often without contributing to better personalization outcomes. Organizations approaching or exceeding their Total Data Volume limits frequently find that the excess is driven by historical event data that was never required for real-time activation.

## How to identify this use case {#identify-use-case}

Use the following diagnostic questions to determine whether your organization has a long-term personalization use case. If two or more of these indicators apply, your organization is likely placing analytical demands on the Profile Store that go beyond its intended scope.

**How far back does your segmentation logic look?**

If your audiences rely on "any time" logic or lookback windows beyond 30–90 days, that is a strong indicator of a long-term personalization use case. Segmentation that reaches deep into historical data often means raw events are accumulating in the Profile Store to support lookbacks that could instead be served by derived signals.

**Are you approaching or exceeding your Total Data Volume entitlement?**

If your Total Data Volume consumption is high or growing, examine how much of that volume is historical event data that is rarely or never used for real-time activation. Historical events stored in the Profile Store count toward your entitlement regardless of whether they contribute to any active personalization decision.

**What time-to-live is configured on your Profile data?**

If no TTL is configured, or if it is set to 12 or more months, raw events are likely accumulating in the Profile Store without a clear activation purpose. The absence of a TTL policy is a common driver of entitlement growth in organizations with long engagement histories.

**Is your industry characterized by long purchase cycles?**

Mortgages, car insurance, B2B contracts, seasonal retail, and travel rewards programs all involve customer relationships that evolve over months or years. If your business operates in a vertical where purchase decisions follow an extended consideration period, long lookback personalization is likely part of your use case.

**Do you have Data Distiller or Customer Journey Analytics licensed but not actively used for audience creation?**

If these tools are licensed but not applied to analytical workloads or audience creation from historical data, your organization may be placing analytical demands on the Profile Store that those tools are designed to handle.

If fewer than two of these indicators apply to your situation, a simpler architecture that relies primarily on the Profile Store is likely sufficient for your current personalization needs.

## Core architectural principles {#principles}

The recommended architecture in this guide rests on a clear separation between data used for analysis and data used for activation. Understanding this separation — and the responsibilities of each layer — is the foundation for every approach described in the sections that follow.

**Store signals, not raw history**

Personalization should be based on the insight required for the experience happening right now, not on indiscriminately retained historical data. You do not need to store years of raw behavioral events in the Profile Store to know that a customer qualifies as a loyalty tier member, a high-value buyer, or at churn risk. You compute those labels from the historical data and store only the label — the signal — in the Profile Store. The raw history belongs in the Data Lake.

**Profile Store responsibilities**

The Profile Store is an activation layer, not an analytical store. Its role is to hold the current state of each customer: profile attributes, behavioral events within your real-time activation window, and derived signals such as scores, tiers, and audience memberships. Because the Profile Store must respond in milliseconds, it is optimized for speed rather than volume. Every record it holds counts toward your Total Data Volume entitlement, and it should contain only what is needed to support active personalization decisions.

**Data Lake responsibilities**

The Data Lake is designed for scale and depth. It holds the full history of customer interactions across channels and time without contributing to your Profile entitlement. It is the analytical layer where historical data is stored, queried, and transformed into the compact signals that the Profile Store can act on.

**Separation of analysis and activation**

Adobe Experience Platform reflects this separation through two complementary capabilities that work together:

- The **engagement capability**, powered by Real-Time Customer Data Platform and Adobe Journey Optimizer, handles real-time activation and personalization — next best action, triggered emails, site personalization, and real-time offers.
- The **analytical capability**, powered by Data Distiller and Customer Journey Analytics, handles holistic analysis, insight generation, and signal creation from historical data — journey analysis, loyalty scoring, cohort discovery, and churn prediction.

The right architecture applies each capability to what it does best. The analytical layer processes and distills comprehensive historical data over time. The engagement layer acts on the resulting signals. Together, they enable intelligent, efficient personalization without requiring years of raw event data in the Profile Store.

## Recommended architecture {#recommended-architecture}

The recommended architecture separates long-term data storage from real-time activation. Historical event data lives in the Data Lake, where it can be analyzed at scale. Analytical tools process that history and derive compact signals — scores, tiers, labels, or audience memberships. Those signals are promoted to the Profile Store, where they are available for real-time activation. Raw historical events never need to enter the Profile Store.

Data moves through the architecture in the following sequence:

1. **Customer event data accumulates in the Data Lake.** Web interactions, app events, purchases, loyalty transactions, and offline records are ingested and retained at full historical depth. Data stored in the Data Lake does not contribute to your Profile entitlement.

2. **Analytical tools process the historical data and derive signals.** Queries or analyses run against the Data Lake to transform months or years of event history into compact, meaningful outputs — loyalty tiers, churn risk scores, lifetime value rankings, or qualified audience memberships. This processing happens in the analytical layer, not in the Profile Store.

3. **Derived signals are written to the Profile Store.** Only the output of the analytical processing — not the underlying event history — is promoted to the Profile Store. Each customer record holds current profile attributes, recent behavioral events within the activation window, and the derived signals generated from historical analysis.

4. **Real-Time Customer Data Platform and Adobe Journey Optimizer activate on those signals.** Audience memberships and profile attributes are available for segmentation, offer decisioning, journey triggers, and real-time personalization. The activation layer operates on lean, current data and responds in milliseconds.

This architecture keeps the Profile Store focused on its intended purpose: fast, reliable, real-time activation. The Data Lake retains the full analytical record. The signals bridging the two layers contain only the intelligence needed for personalization — not the raw history behind it.

## Available approaches {#available-approaches}

Adobe Experience Platform provides multiple approaches for long-term personalization. The approach that best fits your organization depends on where your historical data lives, which tools your organization has licensed, and the technical capabilities of your team.

The following approaches are available:

- **Data Distiller** — transforms historical event data from the Data Lake into computed scores, tiers, and derived attributes using scheduled SQL queries, which are then written to the Profile Store.
- **Customer Journey Analytics** — provides a visual, no-code environment for exploring cross-channel customer journeys and publishing audience segments directly to the Profile Store.
- **Federated Audience Composition** — builds and qualifies audiences directly from data in an external enterprise data warehouse without moving the underlying data into Adobe Experience Platform.
- **Real-Time Customer Data Platform and Adobe Journey Optimizer** — supports personalization based on recent behavioral data and current profile attributes, without requiring additional analytical tooling.

The following sections describe each approach in detail.

### Data Distiller {#data-distiller}

Data Distiller is an Adobe Experience Platform add-on that enables data engineers to query, transform, and enrich data at scale using SQL. For long-term personalization, Data Distiller reads historical event data from the Data Lake, applies transformation logic defined in SQL, and writes only the resulting output — a compact, meaningful signal — to the Profile Store. Raw event history remains in the Data Lake.

**Workflow**

The core workflow follows a derive-and-promote pattern. A data engineer writes a SQL query that defines the transformation logic — for example, calculating each customer's total transactions over the past 12 months and assigning a loyalty tier. The query runs against historical data in the Data Lake and produces a derived dataset: one row per customer containing only the computed output. That derived dataset is scheduled to refresh automatically at a defined cadence — daily, weekly, or as your use case requires — and is published to the Profile Store, where the derived attribute is available for segmentation and activation.

Data Distiller can also build and publish audience memberships directly from SQL queries without first generating a derived attribute. This suits targeted campaign audiences where profile enrichment for every customer is not required.

**Typical use cases**

Data Distiller is well suited to use cases that require mathematically precise outputs derived from large volumes of historical data:

- Loyalty tier assignment and scoring from extended transaction histories
- Churn risk scoring based on engagement patterns over months or years
- Lifetime value calculations and percentile or decile rankings
- Recency-frequency-monetary (RFM) modeling
- Product affinity scoring from long browsing and purchase histories
- Automated audience refresh on a recurring schedule

**Strengths**

- Produces mathematically exact outputs: precise deciles, percentiles, and ranked scores from full historical datasets
- Fully automated refresh on a defined schedule, with no manual intervention required after initial setup
- Raw event data remains in the Data Lake; only the derived signal is written to the Profile Store

**Limitations**

- Requires SQL authorship by a data engineer; business users cannot independently define new transformation logic
- The transformation question must be defined in advance; Data Distiller is not designed for exploratory analysis

<!-- Cross-link: Direct readers to SQL audience documentation because this architecture discusses Data Distiller audiences as an activation-ready output. -->

### Customer Journey Analytics {#customer-journey-analytics}

Customer Journey Analytics is an analytics platform that connects customer identities and behavioral data across channels, devices, and time to deliver holistic, customer-level insights. For long-term personalization, it provides a visual environment for exploring historical customer journeys and a direct pathway — Audience Publishing — to promote those insights to the Profile Store for activation, without writing code.

Historical data analyzed within Customer Journey Analytics does not need to be enabled for the Profile Store. Months or years of event history can reside within Customer Journey Analytics without contributing to your Total Data Volume entitlement.

**Audience publishing**

Audience Publishing is the capability that connects Customer Journey Analytics insights to activation. Audiences built in the Analysis Workspace are published to the Profile Store, where they appear within minutes and become available for use in Real-Time Customer Data Platform and Adobe Journey Optimizer. Audiences can be published once for a specific campaign, or configured to refresh automatically at an interval of every four hours, daily, weekly, or monthly.

**Journey exploration**

Analysts use the Analysis Workspace to explore customer journeys visually across any time horizon — days, months, or years. The workspace supports filter-based audience construction: combine behavioral criteria, refine the audience interactively, and preview audience size before publishing. No engineering involvement is required.

**Typical use cases**

Customer Journey Analytics is well suited to use cases involving discovery or where audience definitions are based on multi-step journey logic:

- Campaign audiences built from behavioral patterns discovered through visual exploration
- Multi-channel journey analysis combining web, app, offline, and CRM data
- Re-engagement audiences based on journeys that span extended time horizons
- One-time audiences tied to specific past events, such as a product launch or seasonal promotion
- Recurring audience refresh where membership is defined by journey logic rather than a scored attribute

**Strengths**

- Self-service audience creation for business analysts and marketing teams, with no SQL or engineering involvement required
- Exploration-first workflow: audience patterns and definitions can emerge from the data rather than being specified in advance
- Audience publishing connects analytical insights directly to activation within minutes

**Limitations**

- Audience outputs are membership lists; Customer Journey Analytics does not write computed attributes such as scores or tier labels back to individual profiles
- Filter-based precision is approximate; exact mathematical rankings — such as the precise top 10% of customers by a calculated metric — require SQL-based tooling

### Federated Audience Composition {#federated-audience-composition}

Federated Audience Composition enables organizations to build and qualify audiences directly from data in an external enterprise data warehouse, without moving the underlying data into Adobe Experience Platform. It is the appropriate approach when historical data must remain in the warehouse and when a full data ingestion project is not feasible or desirable.

**Warehouse-first architecture**

In a Federated Audience Composition architecture, the enterprise data warehouse remains the authoritative source for historical customer data. Audience definitions are applied directly against warehouse data using a no-code composition canvas. Only the resulting audience membership — a list of qualifying customer identifiers — is sent to Adobe Experience Platform for activation. The underlying data never moves.

**Audience composition**

The no-code composition canvas allows teams to build audience definitions against warehouse data without writing queries or requiring engineering support. Qualified audiences can enrich existing audiences in Adobe Experience Platform and are available for activation through Real-Time Customer Data Platform destinations and Adobe Journey Optimizer.

**Suitable use cases**

Federated Audience Composition is appropriate when:

- The enterprise data warehouse is the organization's system of record for customer data and historical events
- Data governance or architecture requirements prevent raw event data from being ingested into Adobe Experience Platform
- The goal is to build last-mile campaign audiences from warehouse data quickly, without a complex ingestion project

Supported warehouses include Snowflake, Databricks, Google BigQuery, and Amazon Redshift.

**Benefits**

- Historical data remains in the warehouse, satisfying data governance and sovereignty requirements
- No large-scale data ingestion is required to activate warehouse-based audience data
- Audience membership is available in Adobe Experience Platform for activation through standard channels

### Real-Time CDP / Journey Optimizer only {#rtcdp-journey-optimizer}

For some organizations, Real-Time Customer Data Platform and Adobe Journey Optimizer alone are sufficient to support their personalization requirements. This is the case when personalization relies entirely on recent behavioral data and current profile attributes, with no requirement to look back beyond the standard activation window.

**Appropriate scenarios**

This approach is sufficient when:

- All segmentation and audience logic operates within a 30–90 day behavioral window
- Profile attributes and recent events in the Profile Store contain all the information required for personalization decisions
- Use cases do not involve long purchase cycles, extended engagement histories, or industry patterns that require multi-month lookbacks

**Benefits**

- No additional analytical tooling is required
- The architecture remains straightforward, with activation driven directly from the Profile Store

**Constraints**

Real-Time Customer Data Platform and Adobe Journey Optimizer are designed for activation on current data. When segmentation logic extends beyond 30–90 days, or when personalization depends on insights derived from months or years of behavioral history, storing that history directly in the Profile Store drives up Total Data Volume entitlement without improving personalization outcomes. In those cases, one of the analytical approaches described in the preceding subsections — Data Distiller, Customer Journey Analytics, or Federated Audience Composition — better serves the use case.

For guidance on selecting the approach that best fits your requirements, see [Decision guide](#decision-guide).

## Comparison matrix {#comparison-matrix}

The following table compares the four available approaches across key architectural dimensions.

| Dimension | Data Distiller | Customer Journey Analytics | Federated Audience Composition | Real-Time CDP / AJO |
|---|---|---|---|---|
| **Intended users** | Data engineers, SQL analysts | Business analysts, marketing teams | Marketing and data teams | Marketing and campaign managers |
| **Interface** | SQL query editor | Visual drag-and-drop Analysis Workspace | No-code composition canvas | Segment Builder, journey canvas |
| **Output** | Derived profile attributes (scores, tiers); direct audience lists via SQL | Audience membership lists | Audience membership lists | Audiences from current profile and event data |
| **Historical data source** | Data Lake | Data Lake | External enterprise warehouse | Profile Store (30–90 day window) |
| **Requires SQL?** | Yes | No | No | No |
| **Scheduling** | Fully customizable SQL query schedule | Every 4 hours, daily, weekly, or monthly | Determined by warehouse and composition schedule | Real-time and batch segmentation |
| **Data movement** | Raw data stays in Data Lake; only derived signal enters Profile Store | Raw data stays in analytical layer; only audience membership enters Profile Store | Underlying data never leaves the warehouse | All data already resides in Profile Store |
| **Strengths** | Mathematical precision; automated scheduling; lean Profile Store | Self-service; exploration-first; no engineering required | No ingestion needed; supports data governance and sovereignty requirements | Simple architecture; no additional tooling required |
| **Limitations** | Requires a data engineer; transformation question must be defined in advance | Cannot write computed attributes to profiles; approximate precision | Dependent on warehouse connectivity | Not suited to use cases requiring lookbacks beyond 30–90 days |

## Decision guide (Which approach should I choose?) {#decision-guide}

Two factors most clearly determine which approach best fits your use case: whether your use case requires mathematically precise outputs, and whether you are starting from a defined question or from exploratory analysis.

**Need mathematically precise outputs?**

If your use case requires exact rankings — the top 10% of customers by miles flown, a churn risk score of 0.82, a lifetime value in the eighth decile — Data Distiller is the appropriate tool. This level of precision requires SQL and a data engineer, but the resulting derived attribute is a clean, reusable signal available to everyone downstream in the Profile Store. If you cannot define the calculation precisely before you start, Customer Journey Analytics is the better starting point.

**Starting from exploration?**

If you do not yet know what the audience will look like — if the goal is to examine the data and see what patterns emerge — Customer Journey Analytics is the right starting point. Teams can explore without engineering support, test hypotheses visually, and publish an audience the same day without writing code. Once a pattern is discovered and validated, it can be handed to a data engineer to build a scheduled, precision-scored version in Data Distiller if that level of rigor is required.

**Selection guidance**

Your choice of approach is also shaped by which tools your organization has licensed and where your historical data resides.

- **Data Distiller only:** You can build audiences from historical data using SQL. Every new audience definition requires engineering involvement, and there is no visual exploration layer. Data Distiller is well suited to scoring and profile enrichment but less suited to ad-hoc discovery.
- **Customer Journey Analytics only:** You can explore journeys and publish audiences without SQL. Filter-based logic approximates but cannot produce mathematically precise rankings, and audience outputs are membership lists only — writing a computed attribute to every profile requires Data Distiller.
- **Historical data in an enterprise warehouse:** If data must remain in Snowflake, Databricks, Google BigQuery, or Amazon Redshift for governance or architectural reasons, Federated Audience Composition lets you build and activate audiences without moving the underlying data.
- **Use cases requiring only recent data:** If personalization relies on behavioral data within a 30–90 day window and current profile attributes, Real-Time Customer Data Platform and Adobe Journey Optimizer alone are sufficient.

**Combined approaches**

When both Data Distiller and Customer Journey Analytics are available, use each for what it does best. Use Data Distiller for automated, scheduled scoring and profile enrichment. Use Customer Journey Analytics for exploratory analysis and self-service campaign audience building.

The two tools also work together effectively. Data Distiller can compute a derived score — such as a weekly churn risk score — and write it to every profile in the Profile Store. Analysts in Customer Journey Analytics can then use that score as a filter in Analysis Workspace alongside journey behavior discovered visually — for example, high churn risk customers who also viewed a competitor product page in the last 30 days. The result is a precision-scored, journey-aware audience that neither tool could produce as effectively on its own.

**Quick reference**

The following table provides starting-point guidance for common decision scenarios.

| If your situation is… | Start with… |
|---|---|
| You know exactly what score or ranking you need to compute | Data Distiller |
| You want to explore the data and see what patterns emerge | Customer Journey Analytics |
| You need a derived attribute on every customer profile | Data Distiller |
| You need a campaign audience without involving engineering | Customer Journey Analytics |
| You need exact mathematical deciles or percentile rankings | Data Distiller |
| You want to build an audience based on a multi-step customer journey | Customer Journey Analytics |
| You need the audience to refresh automatically every week | Data Distiller |
| You want to publish an audience once for a specific campaign | Customer Journey Analytics |

## Best practices {#best-practices}

The following practices apply to every Adobe Experience Platform deployment regardless of which approach you use for long-term personalization. They are standard operating practices for managing Profile Store size and Total Data Volume, not remediation steps for organizations already in entitlement overage.

**Keep the Profile Store lean**

Store derived signals — scores, tiers, labels, and audience memberships — in the Profile Store. Keep raw historical events in the Data Lake. A lean Profile Store performs faster, stays within entitlement, and is easier to manage over time. Define your real-time activation window and treat it as the boundary for what belongs in the Profile Store.

**Configure Experience Event TTL**

The most impactful lever for reducing Profile Store data volume is configuring an Experience Event TTL. This setting defines how long raw behavioral events are retained in the Profile Store before they expire automatically. If your real-time activation logic requires only 30–90 days of event history, there is no value in retaining events beyond that window. A TTL removes expired events on a rolling basis, keeping Total Data Volume within entitlement without requiring manual cleanup.

**Configure pseudonymous profile TTL**

Pseudonymous profiles — created from anonymous browser sessions, device fingerprints, or cookie-based activity before a visitor is identified — accumulate silently and can represent a significant share of your Total Data Volume. After a period of inactivity, the cookies and device signals that created these profiles expire, making it no longer possible to resolve them to a known identity. Retaining these profiles beyond that window provides no personalization value while continuing to count toward your entitlement. Configure a pseudonymous profile TTL to remove them automatically after a defined period of inactivity.

**Use Data Lifecycle for targeted dataset cleanup**

The Data Lifecycle feature provides a no-code interface and API for setting dataset-level expiration dates. Unlike Experience Event TTL, which acts on individual event records across the Profile Store, dataset expiration removes an entire dataset on a specified date. Use this feature to retire historical datasets that are no longer needed for activation.

**Schedule and validate signal generation**

If you are generating derived attributes or audiences from historical data, review and validate the underlying logic on a regular cadence. Confirm that scheduled jobs are completing successfully, that outputs reflect current business requirements, and that derived attributes remain aligned with your active personalization use cases. Signals that are no longer used for personalization decisions should be removed from the Profile Store to avoid unnecessary entitlement consumption.

For comprehensive guidance on license entitlement monitoring, TTL configuration, and dataset hygiene, see [Data management license entitlement best practices](../../landing/license-usage-and-guardrails/data-management-best-practices.md).

## Common anti-patterns {#anti-patterns}

### Section Purpose

Highlight common architectural mistakes and explain why they should be avoided.

### Key Questions Answered

- What should I avoid?
- Why are these approaches problematic?

### Expected Content

- Profile as historical archive.
- Excessive Profile enablement.
- Raw event activation.
- Poor retention practices.
- Architectural misuse.

### Exclusions

- Best practice explanations.
- Product implementation.

### Primary Source Sections

- Summary
- Anti-pattern table

## Summary and key takeaways {#summary}

### Section Purpose

Reinforce the core architectural message and summarize the recommended approach.

### Key Questions Answered

- What are the most important things to remember?
- What should I do next?

### Expected Content

- Summary of principles.
- Recommended architecture.
- High-level recommendations.
- Final takeaways.

### Exclusions

- New concepts.
- New recommendations.
- Detailed comparisons.

### Primary Source Sections

- Summary
- Key Takeaways