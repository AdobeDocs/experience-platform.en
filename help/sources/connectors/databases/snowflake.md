---
title: Snowflake Source Connector Overview
description: Learn how to connect Snowflake to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: df066463-1ae6-4ecd-ae0e-fb291cec4bd5
---
# [!DNL Snowflake] source

>[!IMPORTANT]
>
>* The [!DNL Snowflake] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.
>* By default, the [!DNL Snowflake] source treats `null` as an empty string. Contact your Adobe representative to ensure that your `null` values are correctly written as `null` in Adobe Experience Platform.
>* For Experience Platform to ingest data, timezones for all table-based batch sources must be configured to UTC. The only time stamp that is supported for the [!DNL Snowflake] source is TIMESTAMP_NTZ with UTC time.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party database. Platform can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL Snowflake].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

The documentation below provides information on how to connect [!DNL Snowflake] to Platform using APIs or the user interface:

## Connect [!DNL Snowflake] to Platform using APIs

* [Create an Snowflake base connection using the Flow Service API](../../tutorials/api/create/databases/snowflake.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Snowflake] to Platform using the UI

* [Create a Snowflake source connection in the UI](../../tutorials/ui/create/databases/snowflake.md)
* [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
