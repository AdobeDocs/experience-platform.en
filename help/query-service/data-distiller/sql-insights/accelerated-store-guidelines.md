---
title: Accelerated Store Usage Guidelines
description: Learn how to use the accelerated store in Adobe Experience Platform for fast, SQL-based insights using aggregated data. This page outlines its intended use, restrictions on identity and BI data, and best practices to ensure compliance with Adobe's data governance policies.
---
# Accelerated store usage guidelines

The accelerated store in Adobe Experience Platform is a performance-optimized storage layer available through the Data Distiller SKU. It is designed to hold pre-aggregated datasets, enabling fast, SQL-based insights and dashboard rendering.

This document outlines how to use the accelerated store appropriately, explains why aggregated datasets are exempt from standard data hygiene processes, and emphasizes that identity data or business intelligence (BI) data must not be stored. To stay compliant with Adobe guidelines, you must adhere to the data governance policies and usage restrictions outlined in this document.

## Key capabilities {#key-capabilities}

The accelerated store is purpose-built for performance and efficiency. It enables streamlined querying and reporting workflows by focusing on aggregated data. The list below highlights its core capabilities:

- Serve high-performance dashboards and widgets using SQL queries
- Store pre-aggregated datasets designed for recurring insights
- Support custom data model creation for reporting use cases

## Intended use {#intended-use}

The accelerated store is designed **solely** for storing aggregated data that enables streamlined dashboarding and visualization. Its architecture is not intended to support complex workloads such as business intelligence processing or data warehousing.

>[!IMPORTANT]
>
>The accelerated store is not a replacement for the data lake or a general-purpose storage solution.

## Usage restrictions {#usage-restrictions}

To ensure compliance with Adobe's data governance model and licensing terms, the following restrictions apply:

- **Do not store raw event data**
- **Do not store identity data**
- **Do not store personally identifiable information (PII)** such as email addresses, healthcare data, or customer identifiers
- **Do not use the accelerated store to replicate your entire data lake**

Only aggregated, non-identifiable data may be stored in the accelerated store.

## Governance and compliance {#governance-and-compliance}

Using the accelerated store outside its intended purpose may place your organization at risk of violating Adobe's license agreement and data governance boundaries. If data governance incidents occur due to unsupported usage patterns, your organization assumes full responsibility.

Adobe is not be liable for any consequences arising from the misuse of this feature.

To learn more about how to manage data responsibly in Experience Platform, see [Governance, privacy, and security in Experience Platform](../../../landing/governance-privacy-security/overview.md). This page outlines the services and tools that help you control your experience data in alignment with business policies, legal requirements, and development standards. For links to more detailed guidance on usage labeling and policy enforcement, visit the [Data Governance overview](../../../data-governance/home.md).

## Best practices {#best-practices}

To ensure efficient and compliant use of the accelerated store, follow these recommended best practices:

- Use derived datasets to create pre-aggregated tables specifically tailored to your dashboard needs
- Avoid using the accelerated store as a staging or backup location for raw datasets
- Regularly review your usage to ensure alignment with Adobe's recommended guardrails

## Next steps

By reading this document, you've learned what the accelerated store is, its intended use for aggregated data in reporting scenarios, and the governance rules that must be followed to ensure compliant usage. To deepen your understanding and apply these guidelines effectively, explore the following resources:

- [SQL Insights overview](./overview.md): Learn how SQL Insights enables performance-optimized reporting using aggregated datasets.
- [Send accelerated queries](./send-accelerated-queries.md): Understand how to run queries against the accelerated store to power dashboards and widgets.
- [Data governance and hygiene](../../data-governance/overview.md): Review Adobe's data hygiene policies and governance guidelines to ensure compliant usage.
