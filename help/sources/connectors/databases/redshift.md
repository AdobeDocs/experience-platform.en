---
title: Amazon Redshift Source Connector Overview
description: Learn how to connect Amazon Redshift to Adobe Experience Platform using APIs or the user interface.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 75e577dd-a0b0-4f82-a371-5ec9255544f8
---
# [!DNL Amazon Redshift] source

>[!IMPORTANT]
>
>- The [!DNL Amazon Redshift] source is available in the sources catalog to users who have purchased Real-Time CDP Ultimate.
>
>- You can now use the [!DNL Amazon Redshift] source when running Adobe Experience Platform on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).


Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party database. Platform can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL Amazon Redshift].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Set up your [!DNL Amazon Redshift] source for Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).

Add the following IP addresses to your allowlist, in order to connect your [!DNL Amazon Redshift] account to Experience Platform on Amazon Web Services (AWS):

- `34.193.63.59`
- `44.217.93.240`
- `44.194.79.229`

## Connect [!DNL Amazon Redshift] to Platform using APIs

- [Create an Amazon Redshift base connection using the Flow Service API](../../tutorials/api/create/databases/redshift.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Amazon Redshift] to Platform using the UI

- [Create an Amazon Redshift source connection in the UI](../../tutorials/ui/create/databases/redshift.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
