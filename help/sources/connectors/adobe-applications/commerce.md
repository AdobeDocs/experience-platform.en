---
title: Adobe Commerce Source Connector
description: Learn how to use the Adobe Commerce source to bring your commerce data to Experience Platform.
last-substantial-update: 2023-06-21
---
# Adobe Commerce

Adobe Commerce is an agile B2B and B2C commerce platform which enables merchants and brands to accelerate revenue through customer-centric digital commerce experiences across online and physical spaces. 

Adobe Experience Platform Sources supports integration of Adobe Commerce to allow merchants to send storefront and back office data to the Adobe Experience Edge, so other Adobe Experience Cloud products like Adobe Analytics and Adobe Target can use [!DNL Commerce] data.

* **Storefront events**: Capture shopper interactions such as `View Page`, `View Product`, and `Add to Cart`. For B2B merchants, storefront events also captures [requisition lists](<https://experienceleague.adobe.com/docs/commerce-admin/b2b/requisition-lists/requisition-lists.html>).
* **Back office events**: Capture information on the status of an order, such as whether an order was placed, canceled, refunded, shipped, or completed.

>[!NOTE]
>
>Captured data in Adobe Commerce does not include personally identifiable information (PII). All user identifiers, such as cookie IDs and IP addresses are strictly anonymized.

## Prerequisites

In order to connect Adobe Commerce to Experience Platform, you must have the following:

* Adobe Commerce 2.4.3 or newer.
* A valid Adobe ID and organization ID.
* Access to the [Adobe Client Data Layer extension](../../../tags/extensions/client/client-data-layer/overview.md). This extension is necessary to collect storefront event data.
* Entitlements to other Adobe DX products.

## Onboarding steps

The following outlines the steps and their corresponding documentation to take, in order to fully onboard your Adobe Commerce source account.

* [Install the Experience Platform connector extension](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/fundamentals/install.html) for Adobe Commerce. You can download the connector extension from the [Adobe Marketplace](https://commercemarketplace.adobe.com/magento-experience-platform-connector.html).
* Once you have successfully installed connector extension, sign in to your Adobe account in Experience Cloud and [confirm your organization ID](https://experienceleague.adobe.com/docs/core-services/interface/administration/organizations.html?lang=en#concept_EA8AEE5B02CF46ACBDAD6A8508646255). This ID is associated with your provisioned Experience Cloud company. It is formatted as a 24-character alphanumeric string and includes a mandatory `@AdobeOrg`.
* Next, create or update your Experience Data Model (XDM) schema with your Commerce-specific field groups. For detailed steps on how to add Commerce-specific field groups to your XDM schema, read the guide on [adding field groups to an XDM schema](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/fundamentals/update-xdm.html).
* Once your schema is configured, you must then create a dataset based off of your new schema. This dataset will then contain the [!DNL Commerce] data that you send. For detailed steps on how to create a dataset for [!DNL Commerce] data, read the guide on [sending data to Experience Platform](https://experienceleague.adobe.com/docs/platform-learn/implement-mobile-sdk/experience-cloud/platform.html?lang=en#create-a-dataset).
* Next, create a datastream and select the XDM schema that contains your Commerce-specific field groups. For more information on datastreams, read the [datastreams overview](https://experienceleague.adobe.com/docs/experience-platform/edge/datastreams/overview.html).
* Then, you must connect your Adobe Commerce instance to the [Commerce Services Connector](https://experienceleague.adobe.com/docs/commerce-merchant-services/user-guides/integration-services/saas.html). This allows your Commerce instance to be deployed as Saas (software as service).
* With all of the aforementioned configurations complete, you can now connect to Experience Platform by configuring both the Commerce Services Connector and the Experience Platform Connector using the [!DNL Commerce Admin]. For more information on this final step, read the guide on [connecting Commerce data to Experience Platform](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/fundamentals/connect-data.html).
