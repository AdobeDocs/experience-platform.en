---
title: 
description: 
---
# Create a dataflow to ingest data from a source

Read this guide to learn how to create a dataflow and ingest data to Adobe Experience Platform using the [[!DNL Flow Service] API](https://developer.adobe.com/experience-platform-apis/references/flow-service/).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* Sources
* Batch Ingestion
* Dataflows
* Experience Data Model (XDM) Schemas
* Data Prep
* Catalog Service
* Sandboxes

### Using Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../landing/api-guide.md).

>[!IMPORTANT]
>
>You must have a fully authenticated source account and base connection ID in order to successfully create a dataflow. If you do not have this ID, then visit the [sources catalog](../../../home.md#database) for a list of database sources that you can create a base connection with.

## Create a source connection

A source connection defines how data is brought into Experience Platform from an external source. It specifies both the source system and the format of the incoming data, and it references a base connection that contains authentication details. Each source connection is unique to your organization.

* For file-based sources (such as cloud storages), a source connection can include settings like column delimiter, encoding type, compression type, regular expressions for file selection, and whether to ingest files recursively. 
* For table-based sources (such as databases and CRMs), a source connection can specify details like the table name and column mappings. 

To create a source connection, make a POST request to the `/sourceConnections` endpoint of the [!DNL Flow Service] API and provide values...