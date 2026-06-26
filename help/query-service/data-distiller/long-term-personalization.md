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

### Section Purpose

Describe Adobe's recommended high-level architecture for long-term personalization.

### Key Questions Answered

- What is the recommended architecture?
- How does data move through the architecture?
- What is ultimately activated?

### Expected Content

- High-level architecture.
- Data flow.
- Analytical processing.
- Derived signals.
- Activation-ready outputs.

### Exclusions

- Individual product deep dives.
- Decision guidance.

### Primary Source Sections

- Profile Store
- Data Lake
- Two-Brain Architecture

## Available approaches {#available-approaches}

### Section Purpose

Introduce the supported implementation approaches before discussing each individually.

### Key Questions Answered

- What approaches are available?
- Why are there multiple options?

### Expected Content

- Short overview of each approach.
- Transition to detailed subsections.

### Exclusions

- Detailed product explanations.
- Comparisons.
- Recommendations.

### Primary Source Sections

- Your Options

### Data Distiller {#data-distiller}

### Section Purpose

Explain how Data Distiller supports long-term personalization.

### Key Questions Answered

- When should I use Data Distiller?
- What problems does it solve?
- What outputs does it produce?

### Expected Content

- Overview.
- Workflow.
- Typical use cases.
- Strengths.
- Limitations.

### Exclusions

- SQL tutorials.
- Query examples.
- Product reference.

### Primary Source Sections

- Adobe Data Distiller
- Building Audiences Directly

<!-- Cross-link: Direct readers to SQL audience documentation because this architecture discusses Data Distiller audiences as an activation-ready output. -->

### Customer Journey Analytics {#customer-journey-analytics}

### Section Purpose

Explain how Customer Journey Analytics supports long-term personalization.

### Key Questions Answered

- When should I use Customer Journey Analytics?
- What problems does it solve?
- What outputs does it produce?

### Expected Content

- Overview.
- Audience publishing.
- Journey exploration.
- Typical use cases.
- Strengths.
- Limitations.

### Exclusions

- Workspace tutorials.
- Feature documentation.

### Primary Source Sections

- Customer Journey Analytics

### Federated Audience Composition {#federated-audience-composition}

### Section Purpose

Explain when Federated Audience Composition is the preferred architectural approach.

### Key Questions Answered

- When should enterprise warehouse data remain outside Platform?
- When should Federated Audience Composition be used?

### Expected Content

- Overview.
- Warehouse-first architecture.
- Audience composition.
- Suitable use cases.
- Benefits.

### Exclusions

- Warehouse configuration.
- Product tutorials.

### Primary Source Sections

- Federated Audience Composition

### Real-Time CDP / Journey Optimizer only {#rtcdp-journey-optimizer}

### Section Purpose

Describe scenarios where additional analytical products are unnecessary.

### Key Questions Answered

- When is RTCDP/AJO sufficient?
- What are its limitations?

### Expected Content

- Appropriate scenarios.
- Benefits.
- Constraints.
- Transition to decision guidance.

### Exclusions

- Product tutorials.
- Detailed comparisons.

### Primary Source Sections

- Your Options

## Comparison matrix {#comparison-matrix}

### Section Purpose

Provide a side-by-side comparison of the available approaches.

### Key Questions Answered

- How do the approaches compare?
- Which characteristics differentiate them?

### Expected Content

- Comparison table.
- Capabilities.
- Intended users.
- Outputs.
- Strengths.
- Limitations.

### Exclusions

- Detailed explanations.
- Recommendations.

### Primary Source Sections

- Data Distiller vs Customer Journey Analytics
- Quick Decision Guide

## Decision guide (Which approach should I choose?) {#decision-guide}

### Section Purpose

Help readers select the most appropriate approach for their requirements.

### Key Questions Answered

- Which approach fits my use case?
- When should approaches be combined?

### Expected Content

- Decision criteria.
- Selection guidance.
- Combined approaches.
- High-level recommendations.

### Exclusions

- Product implementation.
- Best practices.

### Primary Source Sections

- Two Core Differentiators
- What If I Have Only One?
- Quick Decision Guide

## Best practices {#best-practices}

### Section Purpose

Summarize Adobe's recommended architectural and operational practices.

### Key Questions Answered

- What should I do?
- How do I maintain an efficient architecture?

### Expected Content

- Profile Store management.
- TTL.
- Data Lifecycle.
- Signal generation.
- Operational guidance.

### Exclusions

- Anti-patterns.
- Product tutorials.

### Primary Source Sections

- Managing Data Volume
- Summary

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