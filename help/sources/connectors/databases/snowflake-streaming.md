---
title: Snowflake Streaming Source Connector Overview
description: Learn how to create a source connection and dataflow to ingest streaming data from your Snowflake instance to Adobe Experience Platform
badge: Beta
---
# [!DNL Snowflake] streaming source

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for streaming data from a [!DNL Snowflake] database.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites

The following section outlines prerequisite steps to complete before you can stream data from your [!DNL Snowflake] database to Experience Platform:

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Snowflake], you must provide the following connection properties:

| Credential | Description |
| --- | --- |
| `account` | The full account name associated with your [!DNL Snowflake] account. A fully qualified [!DNL Snowflake] account name includes your account name, region, and cloud platform. For example, `cj12345.east-us-2.azure`. For more information on account names, refer to this [[!DNL Snowflake document on account identifiers]](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html).  |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Platform. |
| `database` | The [!DNL Snowflake] database contains the data you want to bring the Platform. |
| `username` | The username for the [!DNL Snowflake] account. |
| `password` | The password for the [!DNL Snowflake] user account. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Snowflake] is `51ae16c2-bdad-42fd-9fce-8d5dfddaf140`. |

For more information about authentication, refer to this [[!DNL Snowflake] document](<https://docs.snowflake.com/en/user-guide/key-pair-auth.html>).


## Limitations and frequently asked questions

* The data transfer throughput when streaming data from the [!DNL Snowflake] source is 30 MBps, per connection, for big records (~30 KB).
    * As the size of the record decreases, the write throughput per record increases, but the data transfer throughput decreases.

## Next steps

The following tutorial provides steps on how to connect your [!DNL Snowflake] streaming source to Experience Platform using the API:

* [Stream data from a Snowflake database to Experience Platform using the Flow Service API](../../tutorials/api/create/databases/snowflake-streaming.md)

