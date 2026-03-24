---
title: Google BigQuery Source Connector Overview
description: Learn how to connect Google BigQuery to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 35c61382-a909-47f4-a937-15cb725ecbe3
---
# [!DNL Google BigQuery] source

>[!IMPORTANT]
>
>The [!DNL Google BigQuery] source is available in the sources catalog to users who have purchased Real-Time Customer Data Platform Ultimate.

Read this document for prerequisite steps that you need to complete in order to successfully connect your [!DNL Google BigQuery] account to Adobe Experience Platform on either Azure or Amazon Web Services (AWS).

## Prerequisites {#prerequisites}

Read the following sections for prerequisite set up that you must complete before you can connect your [!DNL Google BigQuery] account to Experience Platform.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Authenticate to Experience Platform on Azure {#azure}

You must provide the following credentials to connect your [!DNL Google BigQuery] account to Experience Platform on Azure.

>[!BEGINTABS]

>[!TAB Basic authentication]

To authenticate using a combination of OAuth 2.0 and basic authentication, provide the appropriate values for the following credentials.

| Credential | Description |
| --- | --- |
| `project` |  The project is the base-level organizing entity for your [!DNL Google Cloud] resources, including [!DNL Google BigQuery]. |
| `clientID` | The client ID is one half of your [!DNL Google BigQuery] OAuth 2.0 credentials. |
| `clientSecret` | The client secret is the other half of your [!DNL Google BigQuery] OAuth 2.0 credentials. |
| `refreshToken` | The refresh token allows you to obtain new access tokens for your API. Access tokens have limited lifetimes and can expire during the course of your project. You can use the refresh token to authenticate and request subsequent access tokens for your project when needed. Ensure that your refresh token include the following [!DNL Google] OAuth scopes: <ul><li>`https://www.googleapis.com/auth/bigquery`</li><li>`https://www.googleapis.com/auth/cloud-platform`</li></ul> These scopes allow Experience Platform to submit BigQuery jobs and read data from your configured project. |
| `largeResultsDataSetId` | (Optional) The pre-created  [!DNL Google BigQuery] dataset ID that is required in order to enable support for large result sets.<ul><li>The `largeResultsDataSetId` must refer to a pre‑created [!DNL BigQuery] dataset used to store temporary tables for large result sets.</li><li>The value must contain only the dataset ID (for example, `marketing_temp_results`), not the project‑qualified name (do not use `my-project.marketing_temp_results`).</li><li>The location (region) of the dataset specified in `largeResultsDataSetId` must match the location of the tables being queried.</li><li>The account used by the connector must have permissions to read and write temporary results in this dataset. At minimum, assign the [!DNL BigQuery Data Editor] role on the dataset specified in `largeResultsDataSetId`.</li></ul> |

#### Required IAM roles for the [!DNL Google] identity

The [!DNL Google] identity used to generate the OAuth credentials (client ID, client secret, and refreshToken) must have the following IAM roles in the target [!DNL Google Cloud] project:

- [!DNL BigQuery Job User]
- [!DNL BigQuery Data Viewer]
- [!DNL BigQuery Read Session User]

These roles ensure that Experience Platform can create and run [!DNL BigQuery] jobs, read data from the configured tables, and use read sessions as required by the connector. Make sure these roles are granted in the same project that contains the [!DNL BigQuery] datasets you plan to use with the source.

For detailed instructions on how to generate OAuth 2.0 credentials for [!DNL Google] APIs, see the following [[!DNL Google] OAuth 2.0 authentication guide](https://developers.google.com/identity/protocols/oauth2).

>[!TAB Service authentication]

To authenticate using service authentication, provide the appropriate values for the following credentials.

**Note**: Your service account must have sufficient permissions, such as: **[!DNL BigQuery Job User]**, **[!DNL BigQuery Data Viewer]**, **[!DNL BigQuery Read Session User]**, and **[!DNL BigQuery Data Owner]** in order to successfully authenticate with service authentication.

| Credential | Description |
| --- | --- |
| `projectId` | The ID of the [!DNL Google BigQuery] that you want to query against. |
| `keyFileContent` | The key file that is used to authenticate the service account. You can retrieve this value from the [[!DNL Google Cloud service accounts] dashboard](https://console.cloud.google.com). The key file content is in JSON format. You must encode this in [!DNL Base64] when authenticating to Experience Platform. |
| `largeResultsDataSetId` | (Optional) The pre-created  [!DNL Google BigQuery] dataset ID that is required in order to enable support for large result sets.<ul><li>The `largeResultsDataSetId` must refer to a pre‑created [!DNL BigQuery] dataset used to store temporary tables for large result sets.</li><li>The value must contain only the dataset ID (for example, `marketing_temp_results`), not the project‑qualified name (do not use `my-project.marketing_temp_results`).</li><li>The location (region) of the dataset specified in `largeResultsDataSetId` must match the location of the tables being queried.</li><li>The account used by the connector must have permissions to read and write temporary results in this dataset. At minimum, assign the [!DNL BigQuery Data Editor] role on the dataset specified in `largeResultsDataSetId`.</li></ul> |

For more information on using service accounts in [!DNL Google BigQuery], read the guide on [using service accounts in [!DNL Google BigQuery]](https://cloud.google.com/bigquery/docs/use-service-accounts).

>[!ENDTABS]

### Authenticate to Experience Platform on AWS {#aws}

You must provide the following credentials to connect your [!DNL Google BigQuery] account to Experience Platform on AWS.

| Credential | Description |
| --- | --- |
| `projectId` | The ID of the [!DNL Google BigQuery] that you want to query against. |
| `keyFileContent` | The key file that is used to authenticate the service account. You can retrieve this value from the [[!DNL Google Cloud service accounts] dashboard](https://console.cloud.google.com). The key file content is in JSON format. You must encode this in [!DNL Base64] when authenticating to Experience Platform. |
| `datasetId` | The [!DNL Google BigQuery] dataset ID. This ID represents where your data tables are located. |

## Connect [!DNL Google BigQuery] to Experience Platform

The documentation below provides information on how to connect [!DNL Google BigQuery] to Experience Platform using APIs or the user interface:

### Using APIs

- [Create a Google BigQuery base connection using the Flow Service API](../../tutorials/api/create/databases/bigquery.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

### Using the UI

- [Create a Google BigQuery source connection in the UI](../../tutorials/ui/create/databases/bigquery.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
