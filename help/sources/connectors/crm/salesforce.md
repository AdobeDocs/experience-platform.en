---
keywords: Experience Platform;home;popular topics;crm schema;crm;CRM;salesforce;Salesforce
solution: Experience Platform
title: Salesforce Source Connector Overview
topic-legacy: overview
description: Learn how to connect Salesforce to Adobe Experience Platform using APIs or the user interface.
exl-id: 597778ad-3cf8-467c-ad5b-e2850967fdeb
---
# [!DNL Salesforce] connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[!DNL Experience Platform] provides support for ingesting data from a third-party CRM system. Support for CRM providers include [!DNL Salesforce].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Field mapping from [!DNL Salesforce] to XDM

To establish a source connection between [!DNL Salesforce] and Platform, the [!DNL Salesforce] source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

See the following for detailed information on the field mapping rules between [!DNL Salesforce] datasets and Platform:

- [Contacts](../adobe-applications/mapping/salesforce.md#contact)
- [Leads](../adobe-applications/mapping/salesforce.md#lead)
- [Accounts](../adobe-applications/mapping/salesforce.md#account)
- [Opportunities](../adobe-applications/mapping/salesforce.md#opportunity)
- [Opportunity contact roles](../adobe-applications/mapping/salesforce.md#opportunity-contact-role)
- [Campaigns](../adobe-applications/mapping/salesforce.md#campaign)
- [Campaign members](../adobe-applications/mapping/salesforce.md#campaign-member)

The documentation below provides information on how to connect [!DNL Salesforce] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Salesforce] to [!DNL Platform] using APIs

- [Create a Salesforce base connection using the Flow Service API](../../tutorials/api/create/crm/salesforce.md)
- [Explore the data structure and contents of a CRM source using the Flow Service API](../../tutorials/api/explore/crm.md)
- [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)

## Connect [!DNL Salesforce] to [!DNL Platform] using the UI

- [Create a Salesforce source connection in the UI](../../tutorials/ui/create/crm/salesforce.md)
- [Create a dataflow for a CRM connection in the UI](../../tutorials/ui/dataflow/crm.md)
