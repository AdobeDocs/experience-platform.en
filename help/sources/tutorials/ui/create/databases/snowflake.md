---
title: Connect Snowflake To Experience Platform Using The UI
type: Tutorial
description: Learn how to create a Snowflake source connection using the Adobe Experience Platform UI.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: fb2038b9-7f27-4818-b5de-cc8072122127
TQID: https://experienceleague.adobe.com/BbnMUO7mCISuO-BJKczFtk-dh737zyQYOGxgpSrGPts
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
subfeature_v2:
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
---
# Connect [!DNL Snowflake] to Experience Platform using the UI

>[!IMPORTANT]
>
>The [!DNL Snowflake] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this guide to learn how to connect your [!DNL Snowflake] account to Adobe Experience Platform using the user interface.

## Getting started

>[!WARNING]
>
>Basic authentication (or account key authentication) for the [!DNL Snowflake] source will be deprecated on November 2025. You must move to key-pair based authentication in order to continue using the source and ingesting data from your database to Experience Platform. For more information on the deprecation, read the [[!DNL Snowflake] best practices guide on mitigating the risks of credential compromise](https://www.snowflake.com/en/resources/white-paper/best-practices-to-mitigate-the-risk-of-credential-compromise/).

This tutorial requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Experience Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

>[!NOTE]
>
>You must set the `PREVENT_UNLOAD_TO_INLINE_URL` flag to `FALSE` to allow data unloading from your [!DNL Snowflake] database to Experience Platform.

## Navigate the sources catalog {#navigate}

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Select **[!DNL Snowflake]** under the *[!UICONTROL Databases]* category, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![The sources catalog with the Snowflake card selected..](../../../../images/tutorials/create/snowflake/catalog.png)

## Use an existing account {#existing}

Next, you are taken to the authentication step of the sources workflow. Here, you can either use an existing account or create a new account.

To use an existing account, select the [!DNL Snowflake] account you want to connect with and then select **[!UICONTROL Next]** to proceed.

![The existing account interface in the sources workflow.](../../../../images/tutorials/create/snowflake/existing.png)

## Create a new account {#create}

If you do not have an existing account, then you must create a new account by providing the necessary authentication credentials that correspond with your source. 

To create a new account, select **[!UICONTROL New account]** and then provide a name and optionally add a description for your account.

### Connect to Experience Platform on Azure {#azure}

You can connect your [!DNL Snowflake] account to Experience Platform on Azure with key-pair authentication. 

To use key-pair authentication, select **[!UICONTROL KeyPair authentication]**, provide values for your account, username, private key, private key passphrase, database, and warehouse, then select **[!UICONTROL Connect to source]**. 

![The account key-pair authentication interface.](../../../../images/tutorials/create/snowflake/new.png)

With key-pair authentication, you must generate a 2048-bit RSA key pair and then provide the following values when creating an account for your [!DNL Snowflake] source.

| Credential | Description |
| --- | --- |
| Account | An account name uniquely identifies an account within your organization. In this case, you must uniquely identify an account across different [!DNL Snowflake] organizations. To do this, you must prepend your organization name to the account name. For example: `orgname-account_name`. Read the guide on [retrieving your [!DNL Snowflake] account identifier](../../../../connectors/databases/snowflake.md#retrieve-your-account-identifier) for additional guidance. For more information, refer to the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization).|
| Username | The username of your [!DNL Snowflake] account. |
| Private key | The [!DNL Base64-]encoded private key of your [!DNL Snowflake] account. You can generate either encrypted or unencrypted private keys. If you are using an encrypted private key, then you must also provide a private key passphrase when authenticating against Experience Platform. Read the guide on [retrieving your [!DNL Snowflake] private key](../../../../connectors/databases/snowflake.md) for more information. |
| Private key passphrase | The private key passphrase is an additional layer of security that you must use when authenticating with an encrypted private key. You are not required to provide the passphrase if you are using an unencrypted private key. |
| Database | The [!DNL Snowflake] database that contains the data you want to ingest to Experience Platform. |
| Warehouse | The [!DNL Snowflake] warehouse manages the query execution process for the application. Each [!DNL Snowflake] warehouse is independent from one another and must be accessed individually when bringing data over to Experience Platform. |

For more information about these values, refer to [this Snowflake document](https://docs.snowflake.com/en/user-guide/key-pair-auth.html).

### Connect to Experience Platform on AWS {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../../../landing/multi-cloud.md).

To create a new [!DNL Snowflake] account and connect to Experience Platform on AWS, ensure that you are in a VA6 sandbox and then provide the necessary credentials for authentication.

>[!BEGINTABS]

>[!TAB Key-pair authentication]

To connect using key-pairs, select **[!UICONTROL KeyPair Authentication]**, provide your authentication credentials and then select **[!UICONTROL Connect to source]**. For more information on these credentials, read the [[!DNL Snowflake] batch overview](../../../../connectors/databases/snowflake.md#gather-required-credentials).

![The new account creation step for key pair authentication.](../../../../images/tutorials/create/snowflake/key-pair-aws.png)

>[!TAB Basic authentication]

>[!WARNING]
>
>Basic authentication (or account key authentication) for the [!DNL Snowflake] source will be deprecated on November 2025. You must move to key-pair based authentication in order to continue using the source and ingesting data from your database to Experience Platform. For more information on the deprecation, read the [[!DNL Snowflake] best practices guide on mitigating the risks of credential compromise](https://www.snowflake.com/en/resources/white-paper/best-practices-to-mitigate-the-risk-of-credential-compromise/).

To connect using a username and password combination, select **[!UICONTROL Basic authentication]**, provide your authentication credentials and then select **[!UICONTROL Connect to source]**. For more information on these credentials, read the [[!DNL Snowflake] batch overview](../../../../connectors/databases/snowflake.md#gather-required-credentials).

![The new account step in the sources workflow where you can connect Snowflake to Experience Platform on AWS.](../../../../images/tutorials/create/snowflake/aws-auth.png)

>[!ENDTABS]

### Skip preview of sample data {#skip-preview-of-sample-data}

During the data selection step, you may encounter a timeout when ingesting large tables or files of data. You can skip data preview to circumvent the timeout and still view your schema, albeit without sample data. To skip data preview, enable the **[!UICONTROL Skip previewing sample data]** toggle.

The rest of the workflow will remain the same. The only caveat is that skipping data preview may prevent calculated and required fields from being auto-validated during the mapping step, and you will then have to manually validate those fields during mapping.

## Next steps

By following this tutorial, you have established a connection to your Snowflake account. You can now continue on to the next tutorial and [configure a dataflow to bring data into [!DNL Experience Platform]](../../dataflow/databases.md).
