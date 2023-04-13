---
title: SugarCRM Source Overview
description: Learn how to connect SugarCRM to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2023-01-25
---
# (Beta) [!DNL SugarCRM]

>[!NOTE]
>
>The [!DNL SugarCRM] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party CRM application. Support for CRM providers include [!DNL SugarCRM].

[[!DNL SugarCRM]](https://www.sugarcrm.com/) is a customer relationship management (CRM) system. [!DNL SugarCRM]'s functionality includes sales-force automation, marketing campaigns, customer support, collaboration, Mobile CRM, Social CRM and reporting. 

The [!DNL SugarCRM] source allows you to ingest accounts, contacts, and events data from the following API endpoints:

* [Accounts](https://market.apidocs.sugarcrm.com/#b0aeb0cd-80ea-4688-8474-54e4873f32f3)
* [Contacts](https://market.apidocs.sugarcrm.com/#308c5025-9478-4de3-8a41-1fc3cff1d8d1)
* [Events](https://market.apidocs.sugarcrm.com/#516ec3b1-8e70-43d4-8bf2-38a2ae74c0a5)


[!DNL SugarCRM] uses bearer tokens as an authentication mechanism to communicate with the [!DNL SugarCRM] Account and Contact APIs and the [!DNL SugarCRM] Events API.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites

Before you can create a [!DNL SugarCRM] source connection, you must first ensure that you have the following:

* A [!DNL SugarMarket] account. You must contact your [!DNL SugarCRM] account manager to obtain a valid [!DNL SugarMarket] account if you do not already have one. 

* A unique API username and account separate from any user account associated with the marketing or sales process. This unique username and account combination must have API access permissions. For more information on the process to set up an account, visit the [[!DNL SugarMarket RESTFUL API]](https://market.apidocs.sugarcrm.com/#intro) documentation.

## Connect [!DNL SugarCRM Accounts & Contacts] to Platform

* [Create a source connection to bring [!DNL SugarCRM Accounts & Contacts] data to Platform using APIs](../../tutorials/api/create/crm/sugarcrm-accounts-contacts.md).
* [Create a source connection to bring [!DNL SugarCRM Accounts & Contacts] data to Platform using the user interface](../../tutorials/ui/create/crm/sugarcrm-accounts-contacts.md).
* [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)


## Connect [!DNL SugarCRM Events] to Platform

* [Create a source connection to bring [!DNL SugarCRM Events] data to Platform using APIs](../../tutorials/api/create/crm/sugarcrm-events.md).
* [Create a source connection to bring [!DNL SugarCRM Events] data to Platform using the user interface](../../tutorials/ui/create/crm/sugarcrm-events.md).
* [Create a dataflow for a CRM source connection in the UI](../../tutorials/ui/dataflow/crm.md)
