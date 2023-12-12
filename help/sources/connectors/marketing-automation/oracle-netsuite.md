---
title: Oracle NetSuite Source Overview
description: Learn how to connect Oracle NetSuite to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2023-11-25
badge: Beta
---
# [!DNL Oracle NetSuite]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data third-party marketing automation system. Support for marketing automation providers includes [!DNL Oracle NetSuite].

[[!DNL Oracle NetSuite]](https://www.netsuite.com/), is a cloud-based business management suite encompassing ERP/Financials, CRM and ecommerce solutions.

The  source allows you to ingest the below information into Experience Platform from [!DNL Oracle NetSuite].

| Source | Entity type | Description |
| --- | --- | --- |
| [[!DNL Oracle NetSuite Activities]](#oracle-netsuite-activities) | Event | Retrieve scheduled activities added to your calendar. |
| [[!DNL Oracle NetSuite Entities]](#oracle-netsuite-entities) | Customer | Retrieve specific customer data, including details such as customer names, addresses, and key identifiers. |
| [[!DNL Oracle NetSuite Entities]](#oracle-netsuite-entities) | Contact | Retrieve contact names, emails, phone numbers, and any custom contact-related fields associated with customers. |

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you can bring your [!DNL Oracle NetSuite] data to Experience Platform, you must first ensure that you have the following:

* A [!DNL Oracle NetSuite] account. If you do not already have an account, contact [!DNL Oracle NetSuite](https://www.NetSuite.com/portal/company/contactus.shtml).
* An active subscription to any [!DNL Oracle NetSuite] product.
* [!DNL Oracle NetSuite] uses OAuth 2.0 to communicate with [!DNL Oracle NetSuite] API's. 
    * You will need your **Account ID**. Refer to the [Finding your NetSuite Account ID](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1498754928.html#Finding-Your-NetSuite-Account-ID)] page if you do not know your NetSuite Account ID.
    * To access the [!DNL Oracle NetSuite] API's, You will need a **Client ID** and **Client secret**, follow the [OAuth 2.0](https://docs.oracle.com/en/cloud/saas/NetSuite/ns-online-help/chapter_157769826287.html#OAuth-2.0) tutorial within your [!DNL Oracle NetSuite] account and ensure your [!DNL Oracle NetSuite] administrator has done the following:
        * Enabled the OAuth 2.0 feature and setup the Oauth 2.0 roles.
        * Assigned Users to the Oauth 2.0 Roles, and created Integration records.
    * You will also need to generate an **access token** and a **refresh token**. Refer to the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial to generate them. Complete [step one](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081944642.html#Step-One-GET-Request-to-the-Authorization-Endpoint) and [step two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) from the tutorial.

### Gather required credentials {#gather-credentials}

In order to connect [!DNL Oracle NetSuite] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | The Client ID value when you create the integration record in [!DNL Oracle NetSuite]. The process to create an interation record can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981). | `7fce.....b42f`<br>The value is a 64 characters string. |
| Client secret | The Client Secret value when you create the integration record. The process to create an interation record can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981). | `5c98.....1b46`<br>The value is a 64 characters string. |
| authorizationTestUrl | Your [!DNL NetSuite] authorization test URL. This is optional. | <code>https://{ACCOUNT_ID}.app.netsuite.com<br>/app/login/oauth2/authorize.nl?response_type=code<br>&redirect_uri=https%3A%2F%2Fapi.github.com<br>&scope=rest_webservices<br>&state=ykv2XLx1BpT5Q0F3MRPHb94j<br>&client_id={CLIENT_ID}</code> |
| Access token | The Access token value is generated at the end of [step two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) of the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial. Access tokens expire are valid only for 60 minutes. | `eyJr......f4V0`<br> the value is a 1024 characters string formatted as a JSON Web Token (JWT). |
| Refresh token | The Refresh token value value is generated at the end of [step two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) of the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial. Refresh tokens have a longer validity and are valid for 7 days. Refresh tokens are used by the [!DNL Oracle NetSuite] source to internally generate new Access tokens. | `eyJr......dmxM`<br> the value is a 1024 characters string formatted as a JSON Web Token (JWT). |
| accessTokenUrl | The [!DNL NetSuite] Access Token URL. This takes the form shown alongside. | <code>https://{ACCOUNT_ID}.suitetalk.api.netsuite.com<br>/services/rest/auth/oauth2/v1/token</code> |

>[!IMPORTANT]
>
> After a refresh token expires you must create a new account in Platform with updated tokens.

## Connect [!DNL Oracle NetSuite Activities] to Platform {#oracle-netsuite-activities}

The documentation below provides information on how to connect [!DNL Oracle NetSuite Activities] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL Oracle NetSuite] data to Platform using APIs](../../tutorials/api/create/marketing-automation/oracle-netsuite-activities.md).
* [Connect your [!DNL Oracle NetSuite] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/oracle-netsuite-activities.md).
* [Create a dataflow for a source connection using the UI](../../tutorials/ui/dataflow/marketing-automation.md).

## Connect [!DNL Oracle NetSuite Entities] to Platform {#oracle-netsuite-entities}

The documentation below provides information on how to connect [!DNL Oracle NetSuite Entities] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL Oracle NetSuite] data to Platform using APIs](../../tutorials/api/create/marketing-automation/oracle-netsuite-entities.md).
* [Connect your [!DNL Oracle NetSuite] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/oracle-netsuite-entities.md).
* [Create a dataflow for a source connection using the UI](../../tutorials/ui/dataflow/marketing-automation.md).
