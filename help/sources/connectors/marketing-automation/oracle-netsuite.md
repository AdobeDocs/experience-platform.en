---
title: Oracle NetSuite Source Overview
description: Learn how to connect Oracle NetSuite to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2024-01-30
badge: Beta
---
# [!DNL Oracle NetSuite]

>[!NOTE]
>
>The [!DNL Oracle NetSuite] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data third-party marketing automation system. Support for marketing automation providers includes [!DNL Oracle NetSuite].

[[!DNL Oracle NetSuite]](https://www.netsuite.com/) is a cloud-based business management suite encompassing ERP/financial, CRM and e-commerce solutions.

You can use two different sources to ingest data from [!DNL Oracle NetSuite] to Experience Platform:

* Use the [!DNL Oracle NetSuite Activities] source to ingest events data.
* Use the [!DNL Oracle NetSuite Entities] source to ingest customer and contact data.

View the following table for more information on the two [!DNL Oracle NetSuite] sources.

| Source | Type | Description |
| --- | --- | --- |
| [[!DNL Oracle NetSuite Activities]](#oracle-netsuite-activities) | Event | Retrieve scheduled activities added to your calendar. |
| [[!DNL Oracle NetSuite Entities]](#oracle-netsuite-entities) | Customer | Retrieve specific customer data, including details such as customer names, addresses, and key identifiers. |
| [[!DNL Oracle NetSuite Entities]](#oracle-netsuite-entities) | Contact | Retrieve contact names, emails, phone numbers, and any custom contact-related fields associated with customers. |

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you can bring your [!DNL Oracle NetSuite] data to Experience Platform, you must first ensure that you have the following:

* **An [!DNL Oracle NetSuite] account**.
  * Contact [[!DNL Oracle NetSuite]](https://www.NetSuite.com/portal/company/contactus.shtml) if you do not already have a valid account.
* An **active subscription** to any [!DNL Oracle NetSuite] product.
* An **account ID**.
  * The [!DNL Oracle NetSuite] source uses OAuth 2.0 to communicate with the [!DNL Oracle NetSuite] APIs. If you do not have your account ID, visit the [!DNL Oracle] documentation on [ how to retrieve your account ID](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1498754928.html#Finding-Your-NetSuite-Account-ID).
* A **client ID** and **client secret** combination.
  * The client ID and client secret are required to access [!DNL Oracle NetSuite] APIs. During this step, you must also ensure that your administrator has:
    * Enabled the OAuth 2.0 feature and setup the appropriate OAuth 2.0 roles.
    * Assigned users to the OAuth 2.0 roles and created the necessary integration records.
* An **access token** and a **refresh token**.
  * Refer to the [!DNL Oracle] guide on [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) for information on how to generate your access and refresh tokens.

### Gather required credentials {#gather-credentials}

In order to connect [!DNL Oracle NetSuite] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | The client ID value that is generated when you create the integration record in [!DNL Oracle NetSuite]. Read the [!DNL Oracle] guide on how to [create integration records](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981) for more information. | `7fce.....b42f`<br>The value is a 64-character string. |
| Client secret | The client secret value that is generated when you create the integration record. Read the [!DNL Oracle] guide on how to [create integration records](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981) for more information. | `5c98.....1b46`<br>The value is a 64-character string. |
| Authorization Test URL | (Optional) Your [!DNL NetSuite] authorization test URL. | `https://{ACCOUNT_ID}.app.netsuite.com<br>/app/login/oauth2/authorize.nl?response_type=code<br>&redirect_uri=https%3A%2F%2Fapi.github.com<br>&scope=rest_webservices<br>&state=ykv2XLx1BpT5Q0F3MRPHb94j<br>&client_id={CLIENT_ID}`|
| Access token | The access token is in JSON Web Token (JWT) format and is only valid for 60 minutes. For more information on how to retrieve your access token, read the [!DNL Oracle] guide on [OAuth 2.0 authorization for NetSuite](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint). | `eyJr......f4V0`<br> The value is a 1024-character string formatted as a JSON Web Token (JWT). |
| Refresh token | Use the refresh to generate a new access token, after your access token expires. The refresh token is valid for seven days. For more information on how to retrieve your access token, read the [!DNL Oracle] guide on [OAuth 2.0 authorization for NetSuite](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint). | `eyJr......dmxM`<br> The value is a 1024-character string formatted as a JSON Web Token (JWT). |
| Access Token URL| The token endpoint where the application sends the POST requests to. | `https://{ACCOUNT_ID}.suitetalk.api.netsuite.com<br>/services/rest/auth/oauth2/v1/token` |

>[!IMPORTANT]
>
>After a refresh token expires, you must create a new account in Experience Platform with your updated updated tokens.

## Connect [!DNL Oracle NetSuite Activities] to Platform {#oracle-netsuite-activities}

The documentation below provides information on how to connect [!DNL Oracle NetSuite Activities] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL Oracle NetSuite Activities] data to Platform using APIs](../../tutorials/api/create/marketing-automation/oracle-netsuite-activities.md).
* [Connect your [!DNL Oracle NetSuite Activities] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/oracle-netsuite-activities.md).
* [Create a dataflow for a source connection using the UI](../../tutorials/ui/dataflow/marketing-automation.md).

## Connect [!DNL Oracle NetSuite Entities] to Platform {#oracle-netsuite-entities}

The documentation below provides information on how to connect [!DNL Oracle NetSuite Entities] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL Oracle NetSuite Entities] data to Platform using APIs](../../tutorials/api/create/marketing-automation/oracle-netsuite-entities.md).
* [Connect your [!DNL Oracle NetSuite Entities] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/oracle-netsuite-entities.md).
* [Create a dataflow for a source connection using the UI](../../tutorials/ui/dataflow/marketing-automation.md).
