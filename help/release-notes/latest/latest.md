---
title: Adobe Experience Platform Release Notes
description: The latest release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: November 17, 2021**

## New features

New features in Adobe Experience Platform:

- [Real-time Customer Data Platform B2B Edition](#RTCDP-B2B)

## Updates to existing features

Updates to existing features in Adobe Experience Platform:

- [Attribution AI](#attribution-ai)
- [Customer AI](#customer-ai)

### Real-time Customer Data Platform B2B Edition {#RTCDP-B2B}

**Release date: November 12, 2021**

Built on Real-time Customer Data Platform (Real-time CDP), Real-time CDP B2B Edition is purpose-built for marketers operating in a business-to-business service model. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels.

There are improvements to a variety of Adobe Experience Platform capabilities that distinguish Real-time CDP B2B Edition from its B2C counterpart. They include improvements to the Experience Data Model (XDM) for B2B use cases, upgrades to identity resolution and profile segmentation, as well as a custom-built connector and destination for Marketo Engage. The Marketo connector allows B2B brands to connect their industry-leading B2B engagement data with behavioral information in order to nurture leads and enhance account-based marketing operations.

-[**New B2B and B2P editions**](#editions)
-[**New Marketo data source and destination connectors**](#marketo)
-[**Standard B2B XDM**](#XDM)

### New B2B and B2P editions {#editions}

New B2B and B2P editions that bring B2B data and functionality to both Real-time CDP and Platform Activation products are available for purchase.

To learn more about Real-time CDP B2B Edition see the [overview](../../rtcdp/overview.md).

### New Marketo data source and destination connectors {#marketo}

New Marketo data source and destination connectors stream Marketo data into Platform and Platform audiences back to Marketo. Available for all Platform users.

| Feature  | Description |
|----------|-------------|
| Marketo Engage Source Connector | The [Marketo Engage source connector](../../sources/connectors/adobe-applications/marketo/marketo.md) allows marketers to seamlessly ingest data from their one or more Marketo instances into their Adobe Experience Platform instance and provides a complete solution for lead management and B2B marketers. |
| Marketo Engage Destination      | The [Marketo destination](../../destinations/catalog/adobe/marketo-engage.md) enables marketers to push segments created in Adobe Experience Platform to Marketo where they will appear as static lists. |

### Standard B2B XDM {#XDM}

Standard B2B XDM classes, field groups, and data types are available for all Platform users.

| Feature   | Description  |
|-----------|--------------|
| Standard B2B XDM classes | Real-time Customer Data Platform B2B Edition provides several standard XDM that capture details about essential B2B data entities, such as accounts, opportunities, campaigns, and more. |

See the [Schemas in Real-time Customer Data Platform B2B Edition](../../rtcdp/schemas/b2b.md) documentation to learn more about capturing B2B data entities.

### Attribution AI {#attribution-ai}

Attribution AI is used to attribute credits to touchpoints leading to conversion events. This can be used by marketers to help quantify the marketing impact of each individual marketing touchpoint across customer journeys.

| Feature   | Description   |
|-----------|---------------|
| Support for multiple datasets | Attribution AI can now easily ingest multiple datasets directly in the UI without the need to map and stitch each dataset. This new time-saving capability provides more powerful and accurate scores with richer data from multiple datasets. |
| Media channel and campaign field mapping | Attribution AI now supports the mapping of media channel and campaign fields. Media channel mapping between datasets improves the insights derived from Attribution AI and helps provide clearer results that are easy to interpret. |

For more information on Attribution AI, please see the [Attribution AI documentation](../../intelligent-services/attribution-ai/overview.md).

### Customer AI {#customer-ai}

Customer AI available in Real-time Customer Data Platform, is used to generate custom propensity scores such as churn and conversion for individual profiles at scale. This is accomplished without having to transform the business needs to a machine learning problem, pick an algorithm, train, or deploy.

**Updated features**

| Feature   | Description |
|-----------|-------------|
| Support for multiple datasets | Customer AI can now easily ingest multiple datasets directly in the UI without the need to map and stitch each dataset. This new time-saving capability provides more powerful and accurate scores with richer data from multiple datasets.  |
| Custom profile attributes     | Customer AI now supports defining custom profile dataset fields (with timestamps) in your data in addition to standard event fields. Using this option allows you to add additional profile attributes that you deem influential which may improve the quality of your model and provide more accurate results. |

For more information on Customer AI, please see the [Customer AI documentation](../../intelligent-services/customer-ai/overview.md).
