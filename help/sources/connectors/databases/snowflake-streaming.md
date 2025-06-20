---
title: Snowflake Streaming Source Connector Overview
description: Learn how to create a source connection and dataflow to ingest streaming data from your Snowflake instance to Adobe Experience Platform
badgeUltimate: label="Ultimate" type="Positive"
last-substantial-update: 2023-09-24
exl-id: ed937689-e844-487e-85fb-e3536c851fe5
---
# [!DNL Snowflake] streaming source

>[!IMPORTANT]
>
>* The [!DNL Snowflake] streaming source is available in the API to users who have purchased Real-Time CDP Ultimate.
>
>* You can now use the [!DNL Snowflake] streaming source when running Adobe Experience Platform on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).


Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for streaming data from a [!DNL Snowflake] database.

## Understanding the [!DNL Snowflake] streaming source

The [!DNL Snowflake] streaming source works by having data loaded by periodically executing an SQL query and creating an output record for each row in the resulting set.

By using [!DNL Kafka Connect], the [!DNL Snowflake] streaming source tracks the latest record that it receives from each table, so that it can start in the correct location for the next iteration. The source uses this functionality to filter data and only get the updated rows from a table on each iteration.

## Prerequisites

The following section outlines prerequisite steps to complete before you can stream data from your [!DNL Snowflake] database to Experience Platform:

### Update your IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md#ip-address-allow-list-for-streaming-sources) page for more information.

The documentation below provides information on how to connect [!DNL Amazon Redshift] to Experience Platform using APIs or the user interface:

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Snowflake], you must provide the following connection properties:

| Credential | Description |
| --- | --- |
| `account` | The full account identifier (account name or account locator) of your [!DNL Snowflake] account appended with the suffix `snowflakecomputing.com`. The account identifier can be of different formats: <ul><li>{ORG_NAME}-{ACCOUNT_NAME}.snowflakecomputing.com (e.g. `acme-abc12345.snowflakecomputing.com`)</li><li>{ACCOUNT_LOCATOR}.{CLOUD_REGION_ID}.snowflakecomputing.com (e.g. `acme12345.ap-southeast-1.snowflakecomputing.com`)</li><li>{ACCOUNT_LOCATOR}.{CLOUD_REGION_ID}.{CLOUD}.snowflakecomputing.com (e.g. `acme12345.east-us-2.azure.snowflakecomputing.com`)</li></ul> For more information, read the [[!DNL Snowflake document on account identifiers]](<https://docs.snowflake.com/en/user-guide/admin-account-identifier.html>). |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |
| `database` | The [!DNL Snowflake] database contains the data you want to bring the Experience Platform. |
| `username` | The username for the [!DNL Snowflake] account. |
| `password` | The password for the [!DNL Snowflake] user account. |
| `role` | (Optional) A custom-defined role that can be provided for a user, for a given connection. If unprovided, this value defaults to `public`. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Snowflake] is `51ae16c2-bdad-42fd-9fce-8d5dfddaf140`. |

{style="table-layout:auto"}

### Configure role settings {#configure-role-settings}

You must configure privileges to a role, even if the default public role is assigned, to allow your source connection to access the relevant [!DNL Snowflake] database, schema, and table. The various privileges for different [!DNL Snowflake] entities is as follows:

| [!DNL Snowflake] entity | Require role privilege |
| --- | --- |
| Warehouse | OPERATE, USAGE |
| Database | USAGE |
| Schema | USAGE |
| Table | SELECT |

>[!NOTE]
>
>Auto-resume and auto-suspend must be enabled in the advanced settings configuration of your warehouse.

For more information on role and privilege management, refer to the [[!DNL Snowflake] API reference](<https://docs.snowflake.com/en/sql-reference/sql/grant-privilege>).

## Limitations and frequently asked questions {#limitations-and-frequently-asked-questions}

* The data throughput for the [!DNL Snowflake] source is 2000 records per second.
* Pricing can vary depending on the amount of time that a warehouse is active and the size of the warehouse. For the [!DNL Snowflake] source integration, the smallest size, x-small warehouse is sufficient. It is suggested to enable auto-suspend so that the warehouse can suspend on its own when not in use.
* The [!DNL Snowflake] source polls the database for new data every 10 seconds.
* Configuration options:
    * You can enable a `backfill` boolean flag for your [!DNL Snowflake] source when creating a source connection.
        * If backfill is set to true, then the value for timestamp.initial is set to 0. This means that data with a timestamp column greater than 0 epoch time are fetched.
        * If backfill is set to false, then the value for timestamp.initial is set to -1. This means that data with a timestamp column greater than the current time (the time in which the source begins ingesting) are fetched.
    * The timestamp column should be formatted as type: `TIMESTAMP_LTZ` or `TIMESTAMP_NTZ`. If the timestamp column is set to `TIMESTAMP_NTZ`, then the corresponding timezone in which the values are stored should be passed via the `timezoneValue` parameter. If unprovided, the value will default to UTC.
      * `TIMESTAMP_TZ` cannot be used a timestamp column or in a mapping.

## Next steps

>[!NOTE]
>
>After you create or update a streaming dataflow, a brief 5-minute pause in data ingestion is required to prevent any potential instances of data loss or data drops.

The following tutorial provides steps on how to connect your [!DNL Snowflake] streaming source to Experience Platform using the API:

* [Stream data from a [!DNL Snowflake] database to Experience Platform using the Flow Service API](../../tutorials/api/create/databases/snowflake-streaming.md)
* [Stream data from a [!DNL Snowflake] database to Experience Platform using the sources workspace in the Experience Platform user interface](../../tutorials/ui/create/databases/snowflake-streaming.md)
