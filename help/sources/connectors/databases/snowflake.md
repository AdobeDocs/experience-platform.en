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
>* By default, the [!DNL Snowflake] source interprets `null` as an empty string. Contact your Adobe representative to ensure that your `null` values are correctly written as `null` in Adobe Experience Platform.
>* For Experience Platform to ingest data, timezones for all table-based batch sources must be configured to UTC. The only time stamp that is supported for the [!DNL Snowflake] source is TIMESTAMP_NTZ with UTC time.

[!DNL Snowflake] is a cloud-based data warehouse platform designed to enable organizations to store, process, and analyze large volumes of data efficiently. Built to leverage the scalability and flexibility of the cloud, [!DNL Snowflake] supports data integration, advanced analytics, and seamless sharing across teams. As a fully managed service, [!DNL Snowflake] eliminates maintenance complexities common to traditional databases, empowering you to focus on deriving insights and value from your data.

You can use the [!DNL Snowflake] source to connect and bring your data from [!DNL Snowflake] to Adobe Experience Platform. Read the documentation below to learn how to set up your [!DNL Snowflake] source and connect to Experience Platform.

## Prerequisites {#prerequisites}

This section outlines the setup tasks that you need to complete before you can connect your [!DNL Snowflake] source to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

### Gather required credentials

You must provide values for the following credential properties to authenticate your [!DNL Snowflake] source.

>[!BEGINTABS]

>[!TAB Account key authentication (Azure)]

Provide values for the following credentials to connect [!DNL Snowflake] to Experience Platform on Azure using account key authentication.

| Credential | Description |
| ---------- | ----------- |
| `account` | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `myorg-myaccount.snowflakecomputing.com`. Read the section on [retrieving your [!DNL Snowflake] account identifier](#retrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization).|
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |
| `database` | The [!DNL Snowflake] database contains the data you want to bring the Experience Platform. |
| `username` | The username for the [!DNL Snowflake] account. |
| `password` | The password for the [!DNL Snowflake] user account. |
| `role` | The default access control role to use in the [!DNL Snowflake] session. The role should be an existing one that has already been assigned to the specified user. The default role is `PUBLIC`. |
| `connectionString` | The connection string used to connect to your [!DNL Snowflake] instance. The connection string pattern for [!DNL Snowflake] is `jdbc:snowflake://{ACCOUNT_NAME}.snowflakecomputing.com/?user={USERNAME}&password={PASSWORD}&db={DATABASE}&warehouse={WAREHOUSE}`. |

>[!TAB Key-pair authentication (Azure)]

To use key-pair authentication, first generate a 2048-bit RSA key pair. Next, provide values for the following credentials to connect to Experience Platform on Azure using key-pair authentication.

| Credential | Description |
| --- | --- |
| `account` | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `myorg-myaccount.snowflakecomputing.com`. Read the section on [retrieving your [!DNL Snowflake] account identifier](#retrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization). |
| `username` | The username of your [!DNL Snowflake] account. |
| `privateKey` | The [!DNL Base64-]encoded private key of your [!DNL Snowflake] account. You can generate either encrypted or unencrypted private keys. If you are using an encrypted private key, then you must also provide a private key passphrase when authenticating against Experience Platform. Read the section on [retrieving your private key](#retrieve-your-private-key) for more information.  |
| `privateKeyPassphrase` | The private key passphrase is an additional layer of security that you must use when authenticating with an encrypted private key. You are not required to provide the passphrase if you are using an unencrypted private key. |
| `port` | The port number that is used by [!DNL Snowflake] when connecting to a server over the internet. |
| `database` | The [!DNL Snowflake] database that contains the data you want to ingest to Experience Platform. |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |

For more information about these values, refer the [[!DNL Snowflake] key-pair authentication guide](https://docs.snowflake.com/en/user-guide/key-pair-auth.html).

>[!TAB Basic authentication (AWS)]

Provide values for the following credentials to connect [!DNL Snowflake] to Experience Platform on AWS using basic authentication.

>[!WARNING]
>
>Basic authentication (or account key authentication) for the [!DNL Snowflake] source will be deprecated on November 2025. You must move to key-pair based authentication in order to continue using the source and ingesting data from your database to Experience Platform. For more information on the deprecation, read the [[!DNL Snowflake] best practices guide on mitigating the risks of credential compromise](https://www.snowflake.com/en/resources/white-paper/best-practices-to-mitigate-the-risk-of-credential-compromise/).

| Credential | Description |
| --- | --- |
| `host` | The host URL that your [!DNL Snowflake] account connects to. |
| `port` | The port number that is used by [!DNL Snowflake] when connecting to a server over the internet. |
| `username` | The username associated with your [!DNL Snowflake] account. | 
| `password` | The password associated with your [!DNL Snowflake] account. |
| `database` | The [!DNL Snowflake] database from where the data will be pulled from. |
| `schema` | The name of the schema associated with your [!DNL Snowflake] database. You must ensure that the user you want to give database access to, also has access to this schema. |
| `warehouse` | The [!DNL Snowflake] warehouse that you are using. |

>[!TAB Key-pair authentication (AWS)]

To use key-pair authentication, first generate a 2048-bit RSA key pair. Next, provide values for the following credentials to connect to Experience Platform on AWS using key-pair authentication.

| Credential | Description |
| --- | --- |
| `account` | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `http://myorg-myaccount.snowflakecomputing.com/`. Read the guide on [retrieving your [!DNL Snowflake] account identifier](#etrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization). |
| `username` | The username of your [!DNL Snowflake] account. |
| `privateKey` | The private key for your [!DNL Snowflake] user, base64-encoded as a single line with no headers or line breaks. To prepare it, copy the contents of your PEM file, remove the `BEGIN`/`END` lines and all line breaks, then base64-encode the result. Read the section on [retrieving your private key](#retrieve-your-private-key) for more information. **Note:** Encrypted private keys are not currently supported for an AWS connection. |
| `port` | The port number that is used by [!DNL Snowflake] when connecting to a server over the internet. |
| `database` | The [!DNL Snowflake] database that contains the data you want to ingest to Experience Platform. |
| `warehouse` | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |

For more information about these values, refer the [[!DNL Snowflake] key-pair authentication guide](https://docs.snowflake.com/en/user-guide/key-pair-auth.html).

>[!ENDTABS]

### Retrieve your account identifier {#retrieve-your-account-identifier}

You must retrieve your account identifier from the [!DNL Snowflake] UI dashboard as you will be using this to authenticate your [!DNL Snowflake] instance on Experience Platform.

To retrieve your account identifier:

* Use the [[!DNL Snowflake] application UI dashboard](https://app.snowflake.com/) to access your account.
* In the left navigation, select **[!DNL Accounts]** and then select **[!DNL Active Accounts]** from the header.
* Next, select the information icon and then select and copy the domain name of the current URL.

![The Snowflake UI dashboard with the domain name selected.](../../images/tutorials/create/snowflake/snowflake-dashboard.png)

### Generate your RSA key pair

Use OpenSSL in the command line interface to generate a 2048-bit RSA key pair in PKCS#8 format. It's best practice to create an encrypted private key for security, which will require a passphrase.

>[!BEGINTABS]

>[!TAB Generate an encrypted private key]

To generate your encrypted [!DNL Snowflake] private key, run the following command on your terminal:

```bash
openssl genrsa 2048 | openssl pkcs8 -topk8 -v2 des3 -inform PEM -out rsa_key.p8# You will be prompted to enter a passphrase. Store this securely!
```

>[!TAB Generate an unencrypted private key]

To generate your unencrypted [!DNL Snowflake] private key, run the following command on your terminal:

```bash
openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt
```

>[!ENDTABS]

### Generate a public key from your private key

Next, run the following command in your command line interface to create a public key based on your private key.

```bash
openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub# You will be prompted to enter the passphrase if the private key is encrypted.
```

### Assign the public key to the [!DNL Snowflake] user

You need to use a [!DNL Snowflake] administrator role (like **SECURITYADMIN**) to associate the generated public key with the [!DNL Snowflake] service user that Experience Platform will use. To retrieve the public key content, open the `rsa_key.pub` file and copy the entire content, excluding the  `-----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY-----` lines. Next, execute the following SQL in [!DNL Snowflake]:

```sql
ALTER USER {YOUR_SNOWFLAKE_USERNAME}>SET RSA_PUBLIC_KEY='{PUBLIC_KEY_CONTENT}';
```

### Encode the private key in [!DNL Base64]

Experience Platform requires the private key to be [!DNL Base64]-encoded and provided as a string during the connection setup. Use a suitable tool or script to encode the contents of the `rsa_key.p8` file into a single [!DNL Base64] string.

>[!TIP]
>
>Ensure there are no extra spaces or line breaks, including the header/footer lines `(-----BEGIN ENCRYPTED PRIVATE KEY----- and -----END ENCRYPTED PRIVATE KEY-----)`, before or after the encoding process, as this can cause authentication errors.

### Verify configurations

Before creating the [!DNL Snowflake] source connection in Experience Platform, you must ensure that the user's **[!DNL Default Role]** and **[!DNL Default Warehouse]** match the values that your provide in Experience Platform. You can verify these settings in the [!DNL Snowflake] UI using the `DESCRIBE USER {USERNAME}` SQL command.

Alternatively, you can follow the steps below to verify your settings:

* Select **[!DNL Admin]** on the left navigation and then select **[!DNL Users & Roles]**.
* Select the appropriate user and then select the ellipses (`...`) on the top-right corner.
* In the [!DNL Edit user] window that appears, navigate to [!DNL Default Role] to view the role associated with the given user.
* In the same window, navigate to [!DNL Default Warehouse] to view the warehouse associated with the given user.

![The Snowflake UI where you can verify your role and warehouse.](../../images/tutorials/create/snowflake/snowflake-configs.png)

## Next steps

With your setup complete, you can now proceed to connect your [!DNL Snowflake] account to Experience Platform. Read the following documentation for more information:

### Connect [!DNL Snowflake] to Experience Platform using APIs

* [Connect [!DNL Snowflake] to Experience Platform using the API](../../tutorials/api/create/databases/snowflake.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

### Connect [!DNL Snowflake] to Experience Platform using the UI

* [Connect [!DNL Snowflake] to Experience Platform using the UI](../../tutorials/ui/create/databases/snowflake.md)
* [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
