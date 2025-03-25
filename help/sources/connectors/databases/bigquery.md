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

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Read this document for prerequisite steps that you need to complete in order to successfully connect your [!DNL Google BigQuery] account to Experience Platform.

## Prerequisites {#prerequisites}

The following section provides further information on prerequisite set up required before you can create a [!DNL Google BigQuery] source connection.

### IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on either Azure or Amazon Web Services (AWS). For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure and AWS](../../ip-address-allow-list.md) for more information.

### Generate your [!DNL Google BigQuery] credentials {#credentials}

To connect [!DNL Google BigQuery] to Experience Platform, you need to generate values for the following credentials:

>[!BEGINTABS]

>[!TAB Basic authentication]

To authenticate using a combination of OAuth 2.0 and basic authentication, provide the appropriate values for the following credentials.

| Credential | Description |
| --- | --- |
| `project` |  The project is the base-level organizing entity for your [!DNL Google Cloud] resources, including [!DNL Google BigQuery]. |
| `clientID` | The client ID is one half of your [!DNL Google BigQuery] OAuth 2.0 credentials. |
| `clientSecret` | The client secret is the other half of your [!DNL Google BigQuery] OAuth 2.0 credentials. |
| `refreshToken` | The refresh token allows you to obtain new access tokens for your API. Access tokens have limited lifetimes and can expire during the course of your project. You can use the refresh token to authenticate and request subsequent access tokens for your project when needed. |
| `largeResultsDataSetId` | (Optional) The pre-created  [!DNL Google BigQuery] dataset ID that is required in order to enable support for large result sets.|

For detailed instructions on how to generate OAuth 2.0 credentials for [!DNL Google] APIs, see the following [[!DNL Google] OAuth 2.0 authentication guide](https://developers.google.com/identity/protocols/oauth2).

>[!TAB Service authentication]

To authenticate using service authentication, provide the appropriate values for the following credentials.

**Note**: Your service account must have sufficient permissions, such as: **[!DNL BigQuery Job User]**, **[!DNL BigQuery Data Viewer]**, **[!DNL BigQuery Read Session User]**, and **[!DNL BigQuery Data Owner]** in order to successfully authenticate with service authentication.

| Credential | Description |
| --- | --- |
| `projectId` | The ID of the [!DNL Google BigQuery] that you want to query against. |
| `keyFileContent` | The key file that is used to authenticate the service account. You can retrieve this value from the [[!DNL Google Cloud service accounts] dashboard](https://console.cloud.google.com). The key file content is in JSON format. You must encode this in [!DNL Base64] when authenticating to Experience Platform. |
| `largeResultsDataSetId` | (Optional) The pre-created  [!DNL Google BigQuery] dataset ID that is required in order to enable support for large result sets. |

For more information on using service accounts in [!DNL Google BigQuery], read the guide on [using service accounts in [!DNL Google BigQuery]](https://cloud.google.com/bigquery/docs/use-service-accounts).

>[!ENDTABS]

## Connect [!DNL Google BigQuery] to Experience Platform

The documentation below provides information on how to connect [!DNL Google BigQuery] to Experience Platform using APIs or the user interface:

### Using APIs

- [Create a Google BigQuery base connection using the Flow Service API](../../tutorials/api/create/databases/bigquery.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

### Using the UI

- [Create a Google BigQuery source connection in the UI](../../tutorials/ui/create/databases/bigquery.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
