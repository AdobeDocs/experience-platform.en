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


Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party database. Experience Platform can connect to different types of databases such as relational, NoSQL, or data warehouses. Support for database providers include [!DNL Amazon Redshift].

## Set up your [!DNL Amazon Redshift] source for Experience Platform on Azure {#azure}

Follow the steps below to learn how you can set up your [!DNL Amazon Redshift] account for Experience Platform on Azure.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on Azure. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on Azure](../../ip-address-allow-list.md) for more information.

## Set up your [!DNL Amazon Redshift] source for Experience Platform on Amazon Web Services {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).

### IP address allowlist for connection on AWS

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform on AWS. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform on AWS](../../ip-address-allow-list.md) for more information.

## Connect [!DNL Amazon Redshift] to Experience Platform using APIs

- [Connect Amazon Redshift to Experience Platform using the Flow Service API](../../tutorials/api/create/databases/redshift.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a database source using the Flow Service API](../../tutorials/api/collect/database-nosql.md)

## Connect [!DNL Amazon Redshift] to Experience Platform using the UI

- [Create an Amazon Redshift source connection in the UI](../../tutorials/ui/create/databases/redshift.md)
- [Create a dataflow for a database source connection in the UI](../../tutorials/ui/dataflow/databases.md)
