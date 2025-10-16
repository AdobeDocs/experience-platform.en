---
keywords: data warehouse destinations;warehouse destinations;snowflake
title: Warehouse destinations overview
description: Adobe Experience Platform can deliver your audiences to data warehouse destinations through secure data sharing, enabling real-time access to your customer data within your warehouse environment.
exl-id: 0a9c1d12-5e8d-4f3e-b5e4-8f3e5d4a8b3a
---
# Warehouse destinations overview {#warehouse-destinations}

## Overview {#overview}

Adobe Experience Platform can deliver your audiences to data warehouse destinations through secure data sharing. This enables you to access your customer data directly within your warehouse environment without physically copying data, maintaining data governance while enabling powerful analytics and activation use cases.

Warehouse destinations provide access to Adobe Experience Platform audience data through native data sharing capabilities. Instead of traditional file exports or API-based data transfers, warehouse destinations allow you to query shared data directly from your warehouse, ensuring you always have access to the most current data while maintaining Adobe's data governance and security controls.

## Supported warehouse destinations {#supported-destinations}

Adobe Experience Platform supports data sharing to the following warehouse destinations:

* [Snowflake Batch connection](snowflake-batch.md)
* [Snowflake Streaming connection](snowflake.md)

## How warehouse data sharing works {#how-it-works}

Warehouse destinations use native data sharing capabilities provided by the warehouse platform:

* **No data movement**: Data remains in Adobe's warehouse environment and is shared with your warehouse instance through secure data sharing protocols.
* **Real-time access**: You can query the shared data directly from your warehouse, with updates reflected according to the destination type (batch or streaming).
* **Data governance**: Adobe maintains full control over the shared data, including access permissions and data lifecycle management.
* **Zero-copy architecture**: Access data without creating duplicate copies, reducing storage costs and complexity.

## Choosing between batch and streaming {#batch-vs-streaming}

Warehouse destinations are available in two modes to support different use cases:

* **Batch destinations**: Provide periodic complete snapshots of audience membership, ideal for analytics, reporting, and machine learning workloads.
* **Streaming destinations**: Provide continuous incremental updates based on profile changes, ideal for real-time activation and personalization scenarios.

See the individual destination documentation to understand which mode best suits your use case.

## Data export types {#export-types}

Warehouse destinations support the following export types:

* **Audience export**: Export audience membership data along with profile attributes and identities.
* **Profile-based export**: Export detailed profile information including attributes, events, and audience memberships.

## Connect to a warehouse destination {#connect-destination}

To send audiences to warehouse destinations, Experience Platform must first connect to the destination. See the [destination configuration tutorial](../../ui/connect-destination.md) for detailed information on setting up a new destination connection.

## Next steps {#next-steps}

After selecting which [warehouse destination](#supported-destinations) you would like to use, read the destination-specific documentation to learn about:

* Prerequisites and permissions required
* How to accept private listings (for Snowflake destinations)  
* Data structure and schema
* How to activate audiences

Then, read the appropriate activation tutorial to learn how to start sharing data to your warehouse destination.

