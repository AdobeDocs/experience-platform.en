---
title: Implementation Guide for Identity Service
description: Learn how data provided to Adobe Experience Platform is processed prior to being used by Identity Service to build identity graphs.
exl-id: c961bbf6-6b46-470f-a671-93ff4173876c
---
# Implementation guide for Identity Service

This document provides with information on how data provided to Adobe Experience Platform is processed prior to being used by Identity Service to build an identity graph for a given customer.

## Decide on identity fields

Depending on your enterprise data collection strategy, the data fields you label as identities determine which data is included in your identity map. To get the maximum benefit of Experience Platform and the most comprehensive customer identities possible, you should upload both online and offline data.

* Online data is data that describes online presence and behavior, such as usernames and email addresses.

* Offline data refers to data that is not directly related to online presence, such as IDs from CRM systems. This type of data makes your identities more robust and supports data cohesion across your disparate systems.

## Create additional identity namespaces

While Experience Platform offers a variety of standard namespaces, you may need to create additional namespaces to properly categorize your identities. For more information, read the guide on [creating custom namespaces for your organization](./features/namespaces.md).

>[!NOTE]
>
>Identity namespaces are a qualifier for identities. As a result, once a namespace has been created, it cannot be deleted.

## Include identity data in Experience Data Model (XDM)

As the standardized framework by which Experience Platform organizes customer data, Experience Data Model (XDM) allows data to be shared and understood across Experience Platform and other services interacting with Experience Platform. For more information read the [XDM System overview](../xdm/home.md).

Both record and time series schemas provide the means to include identity data. As data is ingested, the identity graph will create new relationships between data fragments from different namespaces if they are found to share common identity data.

## Label XDM fields as identity

Any field of type `string` in schemas that implement either record or time series XDM classes can be labeled as an identity field. As a result, all data ingested into that field would be considered identity data. 

Identity fields also allow for the linking of identities if they share common PII data.
For example, by labeling phone number fields as identity fields, Identity Service automatically graphs relationships with the other individuals found to be using the same phone number.

>[!NOTE]
>
>* Array and map type fields are not supported and cannot be marked and labeled as identity fields.
>* The namespace of resulting identities is provided at the time the field is labeled.

For more information, read the guide the guide on [defining identity fields in the UI](../xdm/ui/fields/identity.md).

## Configure a dataset for Identity Service

During the streaming ingestion process, Identity Service automatically extracts identity data from record and time series data. However, before data can be ingested, it must be enabled for Identity Service. Read the tutorial on  [configuring a dataset for Real-Time Customer Profile and Identity Service using APIs](../profile/tutorials/dataset-configuration.md) for more information.

## Ingest data to Identity Service

Identity Service consumes XDM-compliant data sent to Experience Platform either by [batch ingestion](../ingestion/batch-ingestion/overview.md) or [streaming ingestion](../ingestion/streaming-ingestion/overview.md).

The following video is intended to support your understanding of Identity Service. This video shows you how to label data fields as identities, ingest Identity data and then verify that the data has made it to the Adobe Experience Platform Identity Service Private Graph. 

>[!WARNING]
>
>The Experience Platform UI shown in the following video is out-of-date. Please refer to the documentation for the latest UI screenshots and functionality.

>[!VIDEO](https://video.tv.adobe.com/v/28167?quality=12&learn=on)
