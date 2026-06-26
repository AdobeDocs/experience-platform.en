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

### Section Purpose

Explain the business and technical problem that motivates the recommended architecture.

### Key Questions Answered

- What problem are customers trying to solve?
- Why does the problem occur?
- Why is the traditional approach inefficient?

### Expected Content

- Long lookback personalization.
- Profile Store growth.
- Total Data Volume impact.
- Historical data versus activation data.
- Business consequences.

### Exclusions

- Solution details.
- Product comparisons.
- Best practices.

### Primary Source Sections

- The Challenge
- Long-Term Personalization Use Cases

## How to identify this use case {#identify-use-case}

### Section Purpose

Help readers determine whether their organization has a long-term personalization use case.

### Key Questions Answered

- Does this guidance apply to me?
- What indicators suggest this architecture is appropriate?
- When is a simpler architecture sufficient?

### Expected Content

- Diagnostic questions.
- Typical business scenarios.
- Indicators of excessive historical Profile usage.
- Characteristics of suitable use cases.

### Exclusions

- Architectural recommendations.
- Product implementation.
- Decision guidance.

### Primary Source Sections

- How to Tell If You Have This Use Case

## Core architectural principles {#principles}

### Section Purpose

Introduce the architectural principles that underpin every recommended solution in this guide.

### Key Questions Answered

- What architectural principles should guide my design?
- Why should historical data and activation data be separated?
- What belongs in Profile?

### Expected Content

- Historical data versus signals.
- Profile Store responsibilities.
- Data Lake responsibilities.
- Signal-based personalization.
- Separation of analysis and activation.

### Exclusions

- Product-specific implementation.
- Product comparisons.
- Decision guidance.

### Primary Source Sections

- The Key Principle
- The Two-Brain Architecture

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