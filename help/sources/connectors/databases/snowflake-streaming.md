---
title: Snowflake Streaming Source Connector Overview
description: Learn how to create a source connection and dataflow to ingest streaming data from your Snowflake instance to Adobe Experience Platform
badgeUltimate: label="Ultimate" type="Positive"
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

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

The documentation below provides information on how to connect [!DNL Amazon Redshift] to Experience Platform using APIs or the user interface:

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Snowflake], you must provide the following connection properties:

>[!BEGINTABS]

>[!TAB Basic Authentication]

| Credential | Description |
| --- | --- |
| `account` | The full account identifier (account name or account locator) of your [!DNL Snowflake] account appended with the suffix `snowflakecomputing.com`. The account identifier can be of different formats: <ul><li>{ORG_NAME}-{ACCOUNT_NAME}.snowflakecomputing.com (e.g. `acme-abc12345.snowflakecomputing.com`)</li><li>{ACCOUNT_LOCATOR}.{CLOUD_REGION_ID}.snowflakecomputing.com (e.g. `acme12345.ap-southeast-1.snowflakecomputing.com`)</li><li>{ACCOUNT_LOCATOR}.{CLOUD_REGION_ID}.{CLOUD}.snowflakecomputing.com (e.g. `acme12345.east-us-2.azure.snowflakecomputing.com`)</li></ul> For more information, read the [[!DNL Snowflake document on account identifiers]](<https://docs.snowflake.com/en/user-guide/admin-account-identifier.html>). |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |
| `database` | The [!DNL Snowflake] database contains the data you want to bring the Experience Platform. |
| `username` | The username for the [!DNL Snowflake] account. |
| `password` | The password for the [!DNL Snowflake] user account. |
| `role` | (Optional) A custom-defined role that can be provided for a user, for a given connection. If unprovided, this value defaults to `public`. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Snowflake] is `51ae16c2-bdad-42fd-9fce-8d5dfddaf140`. |

>[!TAB Key-pair authentication]

To use key-pair authentication, you must generate a 2048-bit RSA key pair and then provide the following values when creating an account for your [!DNL Snowflake] source.

| Credential | Description |
| --- | --- |
| `account` | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `orgname-account_name`. Read the guide on [retrieving your [!DNL Snowflake] account identifier](./snowflake.md#retrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization). |
| `username` | The username of your [!DNL Snowflake] account. |
| `privateKey` | The [!DNL Base64-]encoded private key of your [!DNL Snowflake] account. You can generate either encrypted or unencrypted private keys. If you are using an encrypted private key, then you must also provide a private key passphrase when authenticating against Experience Platform. Read the guide on [retrieving your [!DNL Snowflake] private key](./snowflake.md) for more information.  |
| `passphrase` | The passphrase is an additional layer of security that you must use when authenticating with an encrypted private key. You are not required to provide the passphrase if you are using an unencrypted private key. |
| `database` | The [!DNL Snowflake] database that contains the data you want to ingest to Experience Platform. |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |

For more information about these values, refer the [[!DNL Snowflake] key-pair authentication guide](https://docs.snowflake.com/en/user-guide/key-pair-auth.html).

>[!ENDTABS]

### Retrieve your account identifier {#retrieve-your-account-identifier}

To authenticate your [!DNL Snowflake] instance with Experience Platform, you need to obtain your account identifier from the [!DNL Snowflake] UI dashboard.

Follow these steps to find your account identifier:

* Navigate to your account on the [[!DNL Snowflake] application UI dashboard](https://app.snowflake.com/).
* In the left navigation, select **[!DNL Accounts]**, followed by **[!DNL Active Accounts]** from the header.
* Next, select the information icon and then select and copy the domain name of the current URL.

### Retrieve your private key {#retrieve-your-private-key}

If you plan to use key-pair authentication for your [!DNL Snowflake] connection, you need to generate a private key before connecting to Experience Platform.

>[!BEGINTABS]

>[!TAB Create an encrypted private key]

To generate your encrypted [!DNL Snowflake] private key, run the following command on your terminal:

```shell
openssl genrsa 2048 | openssl pkcs8 -topk8 -v2 des3 -inform PEM -out rsa_key.p8
```

If successful, you should receive your private key in PEM format.

```shell
|-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIE6T...
|-----END ENCRYPTED PRIVATE KEY-----
```

>[!TAB Create an unencrypted private key]

To generate your unencrypted [!DNL Snowflake] private key, run the following command on your terminal:

```shell
openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt
```

If successful, you should receive your private key in PEM format.

```shell
|-----BEGIN PRIVATE KEY-----
MIIE6T...
|-----END PRIVATE KEY-----
```

>[!ENDTABS]

After generating your private key, encode it directly in [!DNL Base64] without making any changes to its format or content. Before encoding, make sure there are no extra spaces or blank lines (including trailing newlines) at the end of the private key.

### Verify configurations

Before you can create a source connection for your [!DNL Snowflake] data, you must also ensure that the following configurations are met:

* The default warehouse assigned to a given user must be the same as the warehouse that you input when authenticating to Experience Platform.
* The default role assigned to a given user must have access to the same database that you input when authenticating to Experience Platform.

To verify your role and warehouse:

* Select **[!DNL Admin]** on the left navigation and then select **[!DNL Users & Roles]**.
* Select the appropriate user and then select the ellipses (`...`) on the top-right corner.
* In the [!DNL Edit user] window that appears, navigate to [!DNL Default Role] to view the role associated with the given user.
* In the same window, navigate to [!DNL Default Warehouse] to view the warehouse associated with the given user.

Once successfully encoded, you may then used that [!DNL Base64]-encoded private key on Experience Platform to authenticate your [!DNL Snowflake] account.

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

## Convert Unix time to date fields

The [!DNL Snowflake Streaming] parses and writes` DATE` fields as the number of days since the Unix epoch (1970-01-01). For example, a `DATE` value of 0 means January 1, 1970, while a value of 1 means January 2, 1970. Therefore, When preparing the file to create mappings in the [!DNL Snowflake Streaming] source, ensure that the `DATE` column is represented as an integer.

You can use [Data Prep data and time functions](../../../data-prep/functions.md#date-and-time-functions) to convert Unix time into date fields that can be ingested into Experience Platform. For example:

```shell
dformat({DATE_COLUMN} * 86400000, "yyyy-MM-dd")
```

In this function: 

* `{DATE_COLUMN}` is the date column containing the epoch day integer.
* Multiplying by 86400000 converts the epoch days into milliseconds.
* 'yyyy-MM-dd' specifies the desired date format.

This conversion ensures that the date is represented correctly in your dataset. 


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
