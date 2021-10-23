---
keywords: Experience Platform;home;popular topics;Zoho CRM;zoho crm;Zoho;zoho
solution: Experience Platform
title: Zoho CRM Source Connector Overview
topic-legacy: overview
description: Learn how to connect Zoho CRM to Adobe Experience Platform using APIs or the user interface.
exl-id: fcd7af48-e66a-4313-bbfe-73301d335c67
---
# (Beta) [!DNL Zoho CRM]

>[!NOTE]
>
>The [!DNL Zoho CRM] source is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party CRM system. Support for CRM providers include [!DNL Zoho CRM].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Retrieve your authentication credentials for [!DNL Zoho CRM]

Before you can bring data from your [!DNL Zoho CRM] account to Platform, you must first retrieve your credentials to authenticate your [!DNL Zoho CRM] source. Follow the steps below to retrieve your authentication credentials for [!DNL Zoho CRM]:

1. Register your application using the [[!DNL Zoho CRM] developer console](https://accounts.zoho.com/). Once you successfully register your application, you will receive your client ID and client secret.
2. Complete an [authorization request](https://www.zoho.com/crm/developer/docs/api/v2/auth-request.html) using either a web-based application or a self-client. The authorization request allows you to retrieve your grant token, which in turn allows you to retrieve your access token. When creating an authorization request, you must fill in values for both **scopes** and **access type**. Refer to this [[!DNL Zoho CRM] document](https://www.zoho.com/crm/developer/docs/api/v2/scopes.html) to retrieve your scope, while your **access type** should always be set to `offline`.
3. Generate your [access and refresh tokens](https://www.zoho.com/crm/developer/docs/api/v2/access-refresh.html).

The documentation below provides information on how to connect [!DNL Zoho CRM] to Platform using APIs or the user interface:

## Connect [!DNL Zoho CRM] to [!DNL Platform] using APIs

- [Create a Zoho CRM base connection using the Flow Service API](../../tutorials/api/create/crm/zoho.md)
- [Explore the data structure and contents of a CRM source using the Flow Service API](../../tutorials/api/explore/crm.md)
- [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)

## Connect [!DNL Zoho CRM] to [!DNL Platform] using the UI

- [Create a Microsoft Dynamics source connection in the UI](../../tutorials/ui/create/crm/zoho.md)
- [Create a dataflow for a CRM source connection in the UI](../../tutorials/ui/dataflow/crm.md)
