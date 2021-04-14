---
keywords: Experience Platform;home;popular topics;Microsoft Dynamics;microsoft dynamics;dynamics;Dynamics
solution: Experience Platform
title: Microsoft Dynamics Source Connector Overview
topic: overview
description: Learn how to connect Microsoft Dynamics to Adobe Experience Platform using APIs or the user interface.
exl-id: 6ca162ce-2016-4270-b741-301cf4230233
---
# Microsoft Dynamics connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party CRM system. Support for CRM providers include [!DNL Microsoft Dynamics].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

>[!IMPORTANT]
>
>The [!DNL Microsoft Dynamics] source connector currently does not support same-region connectivity to Platform. This means that if your Azure instance is using the same network region as Platform, then a connection to Platform sources cannot be established. Currently, only cross-region connectivity is supported. Please contact your Adobe account manager for more information.

The documentation below provides information on how to connect [!DNL Microsoft Dynamics] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Microsoft Dynamics] to [!DNL Platform] using APIs

- [Create a Microsoft Dynamics source connection using the Flow Service API](../../tutorials/api/create/crm/ms-dynamics.md)
- [Explore a CRM system using the Flow Service API](../../tutorials/api/explore/crm.md)
- [Collect CRM data using the Flow Service API](../../tutorials/api/collect/crm.md)

## Connect [!DNL Microsoft Dynamics] to [!DNL Platform] using the UI

- [Create a Microsoft Dynamics source connection in the UI](../../tutorials/ui/create/crm/dynamics.md)
- [Configure a dataflow for a CRM connection in the UI](../../tutorials/ui/dataflow/crm.md)
