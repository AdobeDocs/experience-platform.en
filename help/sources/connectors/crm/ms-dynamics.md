---
keywords: Experience Platform;home;popular topics;Microsoft Dynamics;microsoft dynamics;dynamics;Dynamics
solution: Experience Platform
title: Microsoft Dynamics Source Connector Overview
description: Learn how to connect Microsoft Dynamics to Adobe Experience Platform using APIs or the user interface.
exl-id: 6ca162ce-2016-4270-b741-301cf4230233
---
# Microsoft Dynamics connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party CRM system. Support for CRM providers include [!DNL Microsoft Dynamics].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Field mapping from [!DNL Microsoft Dynamics] to XDM

To establish a source connection between [!DNL Microsoft Dynamics] and Platform, the [!DNL Microsoft Dynamics] source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

See the following for detailed information on the field mapping rules between [!DNL Microsoft Dynamics] datasets and Platform:

- [Contacts](../adobe-applications/mapping/dynamics.md#contacts)
- [Leads](../adobe-applications/mapping/dynamics.md#leads)
- [Accounts](../adobe-applications/mapping/dynamics.md#accounts)
- [Opportunities](../adobe-applications/mapping/dynamics.md#opportunities)
- [Opportunity contact roles](../adobe-applications/mapping/dynamics.md#opportunity-contact-roles)
- [Campaigns](../adobe-applications/mapping/dynamics.md#campaigns)
- [Marketing ist](../adobe-applications/mapping/dynamics.md#marketing-list)
- [Marketing list members](../adobe-applications/mapping/dynamics.md#marketing-list-members)

The documentation below provides information on how to connect [!DNL Microsoft Dynamics] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Microsoft Dynamics] to [!DNL Platform] using APIs

- [Create a Microsoft Dynamics base connection using the Flow Service API](../../tutorials/api/create/crm/ms-dynamics.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)

## Connect [!DNL Microsoft Dynamics] to [!DNL Platform] using the UI

- [Create a Microsoft Dynamics source connection in the UI](../../tutorials/ui/create/crm/dynamics.md)
- [Create a dataflow for a CRM connection in the UI](../../tutorials/ui/dataflow/crm.md)
