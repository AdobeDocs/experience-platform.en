---
keywords: Experience Platform;home;popular topics;Zendesk;zendesk
solution: Experience Platform
title: Zendesk Source Connector Overview
description: Learn how to connect Zendesk to Adobe Experience Platform using APIs or the user interface.
exl-id: 9f245783-949d-4f40-9cf3-8991b4b6d780
---
# (Beta) [!DNL Zendesk]

>[!NOTE]
>
>The [!DNL Zendesk] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party customer success application. Support for customer success providers include [!DNL Zendesk].

This Adobe Experience Platform [sources](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [Zendesk Search API > Export Search Results](https://developer.zendesk.com/api-reference/ticketing/ticket-management/search/#export-search-results) that returns users information into Experience Platform from Zendesk for further processing.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Authenticate your [!DNL Zendesk] account

[!DNL Zendesk] uses bearer tokens as an authentication mechanism to communicate with the [!DNL Zendesk] API.

This section outlines prerequisite steps to complete in order to authenticate your [!DNL Zendesk] account.

* The first step in authenticating your [!DNL Zendesk] account is to ensure that you have [!DNL Zendesk] support account. If you do not have one already see the [[!DNL Zendesk] register page](https://www.zendesk.com/register/) to register and create your Zendesk account.
* Once you have successfully registered, navigate to the [[!DNL Zendesk] website](https://www.zendesk.com/login/) and provide your **subdomain**. 
* Next, select **[!DNL Settings]** > **[!DNL Apps and Integrations]** > **[!DNL Zendesk API]**.
* Finally, retrieve your API token from the **[!DNL API token]** section.

![Zendesk API token](../../images/tutorials/create/zendesk/zendesk-api-tokens.png)

See the [[!DNL Zendesk documentation on subdomains]](https://support.zendesk.com/hc/en-us/articles/4409381383578-Where-can-I-find-my-Zendesk-subdomain-) for information on how to retrieve your subdomain. For information on generating your API token, see the [[!DNL Zendesk] guide on generating a new API token](https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token).

The documentation below provides information on how to connect [!DNL Zendesk] to Platform using APIs or the user interface:

## Connect [!DNL Zendesk] to Platform using APIs

* [Create a source connection and a dataflow for [!DNL Zendesk] using the Flow Service API](../../tutorials/api/create/customer-success/zendesk.md)

## Connect [!DNL Zendesk] to Platform using the UI

* [Create a [!DNL Zendesk ]source connection in the UI](../../tutorials/ui/create/customer-success/zendesk.md)
* [Create a dataflow for a customer success source connection in the UI](../../tutorials/ui/dataflow/customer-success.md)
