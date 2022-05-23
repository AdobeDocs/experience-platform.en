---
keywords: Experience Platform;home;popular topics;Zendesk;zendesk
solution: Experience Platform
title: Zendesk Source Connector Overview
description: Learn how to connect Zendesk to Adobe Experience Platform using APIs or the user interface.
---
# [!DNL Zendesk]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party customer success application. Support for customer success providers include [!DNL Zendesk].

## Authenticate your [!DNL Zendesk] account

[[!DNL Zendesk]](https://www.zendesk.com) is a popular customer service solution and sales tool.

This Adobe Experience Platform [sources](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) that returns users information into Experience Platform from Zendesk for further processing.

Zendesk uses bearer tokens as an authentication mechanism to communicate with the Zendesk API.



Before you start configuring the extension you need to have a Zendesk Support account. If you do not have one already go to the Zendesk [register](https://www.zendesk.com/register/) page to register and create your Zendesk account.

<!-- ## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information. -->

The documentation below provides information on how to connect [!DNL Zendesk] to Platform using APIs or the user interface:

## Connect [!DNL Zendesk] to Platform using APIs

* [Create a Zendesk base connection using the Flow Service API](../../tutorials/api/create/customer-success/zendesk.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a payments source using the Flow Service API](../../tutorials/api/collect/customer-success.md)

## Connect [!DNL Zendesk] to Platform using the UI

* [Create a Zendesk source connection in the UI](../../tutorials/ui/create/customer-success/Zendesk.md)
* [Create a dataflow for a customer success source connection in the UI](../../tutorials/ui/dataflow/customer-success.md)
