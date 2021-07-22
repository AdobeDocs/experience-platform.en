---
keywords: Experience Platform;home;popular topics;BigQuery;bigquery;Google BigQuery;google bigquery
solution: Experience Platform
title: Google BigQuery Source Connector Overview
topic-legacy: overview
description: Learn how to connect Google BigQuery to Adobe Experience Platform using APIs or the user interface.
exl-id: 35c61382-a909-47f4-a937-15cb725ecbe3
---
# (Beta) [!DNL Google BigQuery] connector

>[!NOTE]
>
>The [!DNL Google BigQuery] is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party database. Platform can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL Google BigQuery].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites

The following section provides further information on prerequisite set up required before you can create a [!DNL Google BigQuery] source connection.

### Generate your [!DNL Google BigQuery] credentials

To connect [!DNL Google BigQuery] to Platform, you need to generate values for the following credentials:

| Credential | Description |
| ---------- | ----------- |
| `project` |  The project is the base-level organizing entity for your [!DNL Google Cloud] resources, including [!DNL Google BigQuery]. |
| `clientID` | The client ID is one half of your [!DNL Google BigQuery] OAuth 2.0 credentials. |
| `clientSecret` | The client secret is the other half of your [!DNL Google BigQuery] OAuth 2.0 credentials. |
| `refreshToken` | The refresh token allows you to obtain new access tokens for your API. Access tokens have limited lifetimes and can expire during the course of your project. You can use the refresh token to authenticate and request subsequent access tokens for your project when needed. |

For detailed instructions on how to generate OAuth 2.0 credentials for [!DNL Google] APIs, see the following [[!DNL Google] OAuth 2.0 authentication guide](https://developers.google.com/identity/protocols/oauth2).

## Connect [!DNL Google BigQuery] to Platform

The documentation below provides information on how to connect [!DNL Google BigQuery] to Platform using APIs or the user interface:

### Using APIs

- [Create a Google BigQuery base connection using the Flow Service API](../../tutorials/api/create/databases/bigquery.md)
- [Explore the data structure and contents of a database source using the Flow Service API](../../tutorials/api/explore/database-nosql.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

### Using the UI

- [Create a Google BigQuery source connection in the UI](../../tutorials/ui/create/databases/bigquery.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
