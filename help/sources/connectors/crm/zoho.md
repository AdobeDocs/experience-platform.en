---
keywords: Experience Platform;home;popular topics;Zoho CRM;zoho crm;Zoho;zoho
solution: Experience Platform
title: Zoho CRM Source Connector Overview
topic-legacy: overview
description: Learn how to connect Zoho CRM to Adobe Experience Platform using APIs or the user interface.
exl-id: 4a010453-3d09-4a47-b04e-5789ae4af48c
---
# [!DNL Zoho CRM]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party CRM system. Support for CRM providers include [!DNL Zoho CRM].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Retrieve your authentication credentials for [!DNL Zoho CRM]

Before you can bring data from your [!DNL Zoho CRM] account to Platform, you must first retrieve your credentials to authenticate your [!DNL Zoho CRM] source. Follow the steps below to retrieve your client ID, client secret, access token, and refresh token.

### Register your application

The first step in retrieving your authentication credentials is to register your application using the [[!DNL Zoho CRM] developer console](https://accounts.zoho.com/). To register your application, you must select your client type from: Java Script, web-based, mobile, non-browser mobile applications, or self-client. Next, provide values for the name of your application, the URL of your webpage, and an authorized redirect URI that [!DNL Zoho CRM] can then use to redirect you with a grant token.

A successful registration returns your client ID and client secret.

### Create an authorization request

Next, you must create an [authorization request](https://www.zoho.com/crm/developer/docs/api/v2/auth-request.html) using either a web-based application or a self-client. The authorization request returns your grant token, which in turn allows you to retrieve your access token.

When creating an authorization request, you must fill in values for both **scopes** and **access type**. Refer to this [[!DNL Zoho CRM] document](https://www.zoho.com/crm/developer/docs/api/v2/scopes.html) for more information on scopes, while your **access type** should always be set to `offline`.

### Generate your access and refresh tokens

Once you have retrieved your grant token, you can generate your [access and refresh tokens](https://www.zoho.com/crm/developer/docs/api/v2/access-refresh.html) by making a POST request to `{ACCOUNTS_URL}/oauth/v2/token` while providing your client ID, client secret, grant token, and redirect URI. During this step, you must also include `grant_type` as a parameter, and set the value as `"authorization_code"`.

A successful request returns your access and refresh tokens, which you can then use to authenticate.

For detailed steps on acquiring your credentials, see the [[!DNL Zoho CRM] authentication guide](https://www.zoho.com/crm/developer/docs/api/v2/oauth-overview.html).

## Connect [!DNL Zoho CRM] to [!DNL Platform] using APIs

The documentation below provides information on how to connect [!DNL Zoho CRM] to Platform using APIs or the user interface:

- [Create a [!DNL Zoho CRM] base connection using the Flow Service API](../../tutorials/api/create/crm/zoho.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)

## Connect [!DNL Zoho CRM] to [!DNL Platform] using the UI

- [Create a [!DNL Zoho CRM] source connection in the UI](../../tutorials/ui/create/crm/zoho.md)
- [Create a dataflow for a CRM source connection in the UI](../../tutorials/ui/dataflow/crm.md)
