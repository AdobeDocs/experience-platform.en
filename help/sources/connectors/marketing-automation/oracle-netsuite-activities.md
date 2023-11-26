---
title: Oracle NetSuite Activities Source Overview
description: Learn how to connect Oracle NetSuite Activities to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2023-11-25
badge: Beta
---
# [!DNL Oracle NetSuite Activities]

>[!NOTE]
>
>The [!DNL Oracle NetSuite Activities] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

[[!DNL Oracle NetSuite]](https://www.netsuite.com/), is a cloud-based business management suite encompassing ERP/Financials, CRM and ecommerce solutions.

The [!DNL Oracle NetSuite Activities] source allows you to ingest events information into Experience Platform from [!DNL Oracle NetSuite].

| Supported Entity | Description |
| --- | --- |
| Event | Scheduled activities added to your calendar. |

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you can bring your [!DNL Oracle NetSuite] data to Experience Platform, you must first ensure that you have the following:

* A [!DNL Oracle NetSuite] account. If you do not already have an account, contact [!DNL Oracle NetSuite](https://www.NetSuite.com/portal/company/contactus.shtml).
* Have an active subscription to any product.
* [!DNL Oracle NetSuite Activities] uses OAuth 2.0 to communicate with [!DNL Oracle NetSuite] API's. 
    * You will need your **Account ID**. Refer to the [Finding your NetSuite Account ID](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1498754928.html#Finding-Your-NetSuite-Account-ID)] page if you do not know your NetSuite Account ID.
    * You will need your **[!DNL NetSuite] Account ID**. Refer to the [Finding your NetSuite Account ID](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1498754928.html#Finding-Your-NetSuite-Account-ID)] page if you do not know your NetSuite Account ID.
    * To access the [!DNL Oracle NetSuite] API's, You will need a **Client ID** and **Client secret**, follow the [OAuth 2.0](https://docs.oracle.com/en/cloud/saas/NetSuite/ns-online-help/chapter_157769826287.html#OAuth-2.0) tutorial within your [!DNL Oracle NetSuite] account and ensure you execute the below:
        * Ensure your [!DNL Oracle NetSuite] administrator has enabled the OAuth 2.0 feature
        * Setup Roles
        * Assigned Users to the Oauth 2.0 Roles, and created Integration records
    * You will also need to generate an **Access token** and a **Refresh Token**. Refer to the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial to generate them. Complete [Step One](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081944642.html#Step-One-GET-Request-to-the-Authorization-Endpoint) and [Step Two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) from the tutorial.

### Gather required credentials {#gather-credentials}

In order to connect [!DNL Oracle NetSuite Activities] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | The Client ID value when you create the integration record in [!DNL Oracle NetSuite]. The process to create an interation record can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981). | `7fce.....b42f`<br>The value is a 64 characters string. |
| Client secret | The Client Secret value when you create the integration record. The process to create an interation record can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771733782.html#procedure_157838925981). | `5c98.....1b46`<br>The value is a 64 characters string. |
| authorizationTestUrl | | <code>https://<ACCOUNT_ID>.app.netsuite.com/app/login/oauth2/authorize.nl?response_type=code&redirect_uri=https%3A%2F%2Fapi.github.com&scope=rest_webservices&state=ykv2XLx1BpT5Q0F3MRPHb94j&client_id=<CLIENT_ID></code> |
| Access token | The Access token value is generated at the end of [Step Two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) of the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial. Access tokens expire are valid only for 60 minutes. | `eyJr......f4V0`<br> the value is a 1024 characters string formatted as a JSON Web Token (JWT). |
| Refresh token | The Refresh token value value is generated at the end of [Step Two](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158081952044.html#Step-Two-POST-Request-to-the-Token-Endpoint) of the [OAuth 2.0 Authorization Code Grant Flow](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_158074210415.html#OAuth-2.0-Authorization-Code-Grant-Flow) tutorial. Refresh tokens have a longer validity and are valid for 7 days. Refresh tokens are used by the [!DNL Oracle NetSuite Activities] source to internally generate new Access tokens. | `eyJr......dmxM`<br> the value is a 1024 characters string formatted as a JSON Web Token (JWT). |
| accessTokenUrl | The [!DNL NetSuite] Access Token URL. This takes the form shown alongside. | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |

>[!IMPORTANT]
>
> After a Refresh token expires you must create a New Account in Platform with updated tokens.

## Next steps {#next-steps}

The documentation below provides information on how to connect [!DNL Oracle NetSuite Activities] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL Oracle NetSuite] data to Platform using APIs](../../tutorials/api/create/marketing-automation/oracle-NetSuite-activities.md).
* [Connect your [!DNL Oracle NetSuite] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/oracle-NetSuite-activities.md).
* [Create a dataflow for a source using the UI](../../tutorials/ui/dataflow/marketing-automation.md)
