---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data Ingestion tutorials
topic: tutorial
type: Tutorial
description: Data Ingestion includes batch ingestion, streaming ingestion, and ingestion using source connectors.

---

# Ingest data into [!DNL Experience Platform]

Adobe Experience Platform brings data from multiple sources together in order to help marketers better understand the behavior of their customers. Adobe [!DNL Experience Platform Data Ingestion] represents the multiple methods by which [!DNL Platform] ingests data from these sources, as well as how that data is persisted within the Data Lake for use by downstream [!DNL Platform services]. [!DNL Data Ingestion] includes batch ingestion, streaming ingestion, and ingestion using source connectors. To learn more, read the [Data Ingestion overview](../ingestion/home.md) or proceed directly to the [Sources documentation](../sources/home.md).

## Create a source connector in the UI and API

Source connectors allow you to ingest data from multiple sources, where it can then be labeled, structured, and enhanced using [!DNL Platform services]. To begin creating a source connector, see the [sources overview](../sources/home.md).

## Ingest batch data

Adobe Experience Platform allows you to easily import data into [!DNL Platform] as batch files. Examples of data to be ingested may include profile data from a flat file in a CRM system (such as a parquet file) or data that conforms to a known [!DNL Experience Data Model] (XDM) schema in the Schema Registry. To get started, visit the [ingestion data into Platform tutorial](../ingestion/tutorials/ingest-batch-data.md).

## Map a CSV file to an XDM Schema

In order to ingest CSV data into Adobe Experience Platform, the data must be mapped to an [!DNL Experience Data Model] (XDM) schema. For steps showing how to map a CSV file to an XDM schema using the [!DNL Experience Platform] user interface, follow the [map a CSV file to an XDM schema tutorial](../ingestion/tutorials/map-a-csv-file.md).

## Create a streaming connection

In order to start streaming data to [!DNL Experience Platform], you must first request an HTTP endpoint. You have the option to configure this endpoint to enforce authenticated behavior. This can be done using the [!DNL Platform] user interface or [!DNL Experience Platform] APIs. To learn more, follow the tutorials for [creating a streaming connection using the UI](../ingestion/tutorials/create-streaming-connection-ui.md) or [creating a streaming connection using APIs](../ingestion/tutorials/create-streaming-connection.md).

## Create an authenticated streaming connection

Authenticated Data Collection allows Adobe Experience Platform services, such as [!DNL Real-time Customer Profile] and [!DNL Identity], to differentiate between records coming from trusted sources and untrusted sources. To get started, follow the tutorial for [creating an authenticated streaming connection](../ingestion/tutorials/create-authenticated-streaming-connection.md).

## Stream record and time series data

With a dataset and steaming connections in place, you can stream record or time series data into [!DNL Platform]. To begin streaming record data, follow the [stream record data into Platform tutorial](../ingestion/tutorials/streaming-record-data.md). To begin streaming time series data, follow the [stream time series data into Platform](../ingestion/tutorials/streaming-time-series-data.md).

## Stream multiple messages in a single HTTP request

When streaming data to Adobe Experience Platform, making numerous HTTP calls can be expensive. For instance, instead of creating 200 HTTP requests with 1KB payloads, it is much more efficient to create 1 HTTP request with 200 messages of 1KB each, with a single payload of 200KB. When used correctly, grouping multiple messages within a single request is an excellent way to optimize data being sent to [!DNL Experience Platform]. To learn how to send multiple messages to [!DNL Experience Platform] within a single HTTP request using streaming ingestion, follow the [sending multiple messages tutorial](../ingestion/tutorials/streaming-multiple-messages.md).



