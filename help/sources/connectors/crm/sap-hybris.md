---
title: SAP Hybris Source Overview
description: Learn how to connect SAP Hybris to Adobe Experience Platform using APIs or the user interface.
badge: Beta
---
# (Beta) [!DNL SAP Hybris]

>[!NOTE]
>
>The [!DNL SAP Hybris] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party CRM application. Support for CRM providers include [!DNL SAP Hybris].

[[!DNL SAP Hybris]](https://www.sap.com/india/products/acquired-brands/what-is-hybris.html) is a cloud-based e-commerce platform solution for B2B and B2C enterprises is now available as part of the SAP Customer Experience portfolio. [[!DNL SAP] Subscription Billing](https://www.sap.com/products/financial-management/subscription-billing.html) is a product under its portfolio and enables complete subscription lifecycle management with simplified selling and payment experiences through standardized integrations.

The [!DNL SAP Hybris] source allows you to ingest customers and contacts information into Platform from the [[!DNL SAP] Subscription Billing](https://www.sap.com/products/financial-management/subscription-billing.html) Business Partners API endpoints below:
* [Customers](https://api.sap.com/api/BusinessPartner_APIs/path/GET_customers)
* [Contacts](https://api.sap.com/api/BusinessPartner_APIs/path/GET_contacts)

Additionally, if [!DNL SAP Hybris] is run to retrieve customer data, the [Customer-Contact Relationships](https://api.sap.com/api/BusinessPartner_APIs/path/GET_relationships-customer-contacts) API is also called to retrieve the customer's contact information.

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you can create a [!DNL SAP Hybris] source connection, you must first ensure that you have the following:

A [!DNL SAP Subscription Billing] account. You must contact your [!DNL SAP] account manager to obtain a valid [!DNL SAP Subscription Billing] account if you do not already have one. Refer to the [[!DNL SAP] Platform Configuration](https://help.sap.com/doc/5fd179965d5145fbbe7f2a7aa1272338/latest/en-US/PlatformConfiguration.pdf) document for additional details.

[Get the Service Key](https://help.sap.com/docs/CLOUD_TO_CASH_OD/987aec876092428f88162e438acf80d6/81a854f1410647fa9a06f46d42f3d8b4.html). You will need the below:
* `identityzoneid`
* `identityzone`
* `clientid`
* `clientsecret`
  
Expand the following section to view an example service key.

+++ View Service Key

```json
{ 
    "url": "https://eu10.revenue.cloud.sap/api",
    "uaa": {
        "clientid": "XXX",
        "clientsecret": "XXX",
        "url": "https://subscriptionbilling.authentication.eu10.hana.ondemand.com",
        "identityzone": "subscriptionbilling",
        "identityzoneid": "XXX",
        "tenantid": "XXX",
        "tenantmode": "dedicated",
        "sburl": "https://internal-xsuaa.authentication.eu10.hana.ondemand.com",
        "apiurl": "https://api.authentication.eu10.hana.ondemand.com",
        "verificationkey": "XXX",
        "xsappname": "XXX",
        "subaccountid": "XXX",
        "uaadomain": "authentication.eu10.hana.ondemand.com",
        "zoneid": "XXX",
        "credential-type": "binding-secret"
    },
    "vendor": "SAP"
}
```
+++

## Connect [!DNL SAP Hybris] to Platform {#connect-to-platform}

The documentation below provides information on how to connect [!DNL SAP Hybris] to Platform using APIs or the user interface:

### Connect [!DNL Customer.io] to Platform using APIs {#connect-to-platform-using-api}

* [Create a source connection to bring [!DNL SAP Hybris] data to Platform using APIs](../../tutorials/api/create/crm/sap-hybris-subscription-billing-customers-and-contacts.md).

### Connect [!DNL Customer.io] to Platform using the UI {#connect-to-platform-using-ui}

* [Create a source connection to bring [!DNL SAP Hybris] data to Platform using the user interface](../../tutorials/ui/create/crm/sap-hybris-subscription-billing-customers-and-contacts.md).
* [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)
