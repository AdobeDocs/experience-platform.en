---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data Ingestion tutorials
topic: tutorial
---

# Ingest data into Experience Platform

Adobe Experience Platform brings data from multiple sources together in order to help marketers better understand the behavior of their customers. Adobe Experience Platform Data Ingestion represents the multiple methods by which Platform ingests data from these sources, as well as how that data is persisted within the Data Lake for use by downstream Platform services. Data Ingestion includes batch ingestion, streaming ingestion, and ingestion using source connectors. To learn more, read the [Data Ingestion overview](../ingestion/home.md) or proceed directly to the [Sources documentation](../sources/home.md).

## Create a source connector in the UI and API

Source connectors allow you to ingest data from multiple sources, where it can then be labeled, structured, and enhanced using Platform services. To begin creating a source connector, see the [sources overview](../sources/home.md).

## Ingest batch data

Adobe Experience Platform allows you to easily import data into Platform as batch files. Examples of data to be ingested may include profile data from a flat file in a CRM system (such as a parquet file) or data that conforms to a known Experience Data Model (XDM) schema in the Schema Registry. To get started, visit the [ingestion data into Platform tutorial](../ingestion/tutorials/ingest-batch-data.md).

## Map a CSV file to an XDM Schema

In order to ingest CSV data into Adobe Experience Platform, the data must be mapped to an Experience Data Model (XDM) schema. For steps showing how to map a CSV file to an XDM schema using the Experience Platform user interface, follow the [map a CSV file to an XDM schema tutorial](../ingestion/tutorials/map-a-csv-file.md).

## Create a streaming connection

In order to start streaming data to Experience Platform, you must first create a streaming HTTP connection. When creating a streaming connection, you need to provide key details such as the source of streaming data, and whether or not you intend to send data from a trusted or an un-trusted source. This can be done using the Platform user interface or Experience Platform APIs. To learn more, follow the tutorials for [creating a streaming connection using the UI](../ingestion/tutorials/create-streaming-connection-ui.md) or [creating a streaming connection using APIs](../ingestion/tutorials/create-streaming-connection.md).

## Create a trusted streaming connection

Authenticated Data Collection allows Adobe Experience Platform services, such as Real-time Customer Profile and Identity, to differentiate between records coming from trusted sources and un-trusted sources. To get started, follow the tutorial for [creating a trusted streaming connection](../ingestion/tutorials/create-trusted-streaming-connection.md).

## Stream record and time series data

With a dataset and steaming connections in place, you can stream record or time series data into Platform. To begin streaming record data, follow the [stream record data into Platform tutorial](../ingestion/tutorials/streaming-record-data.md). To begin streaming time series data, follow the [stream time series data into Platform](../ingestion/tutorials/streaming-time-series-data.md).

## Stream multiple messages in a single HTTP request

When streaming data to Adobe Experience Platform, making numerous HTTP calls can be expensive. For instance, instead of creating 200 HTTP requests with 1KB payloads, it is much more efficient to create 1 HTTP request with 200 messages of 1KB each, with a single payload of 200KB. When used correctly, grouping multiple messages within a single request is an excellent way to optimize data being sent to Experience Platform. To learn how to send multiple messages to Experience Platform within a single HTTP request using streaming ingestion, follow the [sending multiple messages tutorial](../ingestion/tutorials/streaming-multiple-messages.md).



