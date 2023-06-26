---
title: SAP Hybris Source Overview
description: Learn how to connect SAP Hybris to Adobe Experience Platform using APIs or the user interface.
badge: Beta
hide: true
hidefromtoc: true
---
# [!DNL SAP Hybris]

>[!NOTE]
>
>The [!DNL SAP Hybris] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

[[!DNL SAP Hybris]](https://www.sap.com/india/products/acquired-brands/what-is-hybris.html), a cloud-based e-commerce platform solution for B2B and B2C enterprises is available as part of the SAP Customer Experience portfolio. [[!DNL SAP] Subscription Billing](https://www.sap.com/products/financial-management/subscription-billing.html) is a product under the portfolio and enables complete subscription lifecycle management with simplified selling and payment experiences through standardized integrations.

The [!DNL SAP Hybris] source allows you to ingest customers and contacts information into Platform from the [[!DNL SAP] Subscription Billing](https://www.sap.com/products/financial-management/subscription-billing.html) Business Partners API endpoints below:

* [Customers](https://api.sap.com/api/BusinessPartner_APIs/path/GET_customers)
* [Contacts](https://api.sap.com/api/BusinessPartner_APIs/path/GET_contacts)

Additionally, if [!DNL SAP Hybris] is run to retrieve customer data, the [Customer-Contact Relationships](https://api.sap.com/api/BusinessPartner_APIs/path/GET_relationships-customer-contacts) API is also called to retrieve the customer's contact information.

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you can bring your [!DNL SAP Hybris] data to Experience Platform, you must first ensure that you have the following:

* A [!DNL SAP Subscription Billing] account. If you do not already have a valid billing account, then please contact your [!DNL SAP] account manager. Refer to the [[!DNL SAP] Platform Configuration](https://help.sap.com/doc/5fd179965d5145fbbe7f2a7aa1272338/latest/en-US/PlatformConfiguration.pdf) document for additional details.

* [!DNL SAP] service key. The [!DNL SAP] service key allows you to access the [!DNL SAP Subscription Billing] API through Experience Platform. [!DNL SAP Hybris] requires the following:
  * Client ID
  * Client secret
  * URL. The URL pattern is as follows: `https://subscriptionbilling.authentication.eu10.hana.ondemand.com`. This value will be used later to obtain values for `region` and `tokenEndpoint` when you [Create base connection](../../tutorials/api/create/crm/sap-hybris.md#base-connection) using the API or when you [Connect your [!DNL SAP Hybris] account](../../tutorials/ui/create/crm/sap-hybris.md#connect-account) through the Platform UI.
  
+++Select to see an example of the service key

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

## Next steps

The documentation below provides information on how to connect [!DNL SAP Hybris] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL SAP Hybris] data to Platform using APIs](../../tutorials/api/create/crm/sap-hybris.md).
* [Connect your [!DNL SAP Hybris] account to Experience Platform using the UI](../../tutorials/ui/create/crm/sap-hybris.md).
* [Create a dataflow for a CRM source using the UI](../../tutorials/ui/dataflow/crm.md)
