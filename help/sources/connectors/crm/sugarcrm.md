---
title: SugarCRM Source Overview
description: Learn how to connect SugarCRM to Adobe Experience Platform using APIs or the user interface.
---
# (Beta) [!DNL SugarCRM]

[[!DNL SugarCRM]](https://www.sugarcrm.com/) is a customer relationship management (CRM) system. [!DNL SugarCRM]'s functionality includes sales-force automation, marketing campaigns, customer support, collaboration, Mobile CRM, Social CRM and reporting.

[!DNL SugarCRM Accounts & Contacts] leverages the [!DNL SugarCRM] [Accounts](https://market.apidocs.sugarcrm.com/#b0aeb0cd-80ea-4688-8474-54e4873f32f3) and [Contacts](https://market.apidocs.sugarcrm.com/#308c5025-9478-4de3-8a41-1fc3cff1d8d1) endpoints to retrieve relationship data from [!DNL SugarCRM]. After you bring the data to Experience Platform, you can then execute any analytics.

[!DNL SugarCRM Accounts & Contacts] uses bearer tokens as an authentication mechanism to communicate with the [!DNL SugarCRM] Account and Contact APIs.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.


## Prerequisites

The first step in creating a [!DNL SugarCRM Accounts & Contacts] source connection is to ensure that you have the below :
* A [!DNL SugarMarket] *(SugarCRM's product for Marketing Automation)* account. Reach out to your SugarCRM account manager to obtain the same.
* A unique API username and account separate from any user account associated with the marketing or sales process. This unique username and account combination must have API access permissions. For more information on the process to set up an account, visit the [[!DNL SugarMarket RESTFUL API (sugarcrm.com)]](https://market.apidocs.sugarcrm.com/#intro) documentation.
