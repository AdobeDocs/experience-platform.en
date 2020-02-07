---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service and Experience Cloud applications
topic: overview
---

# Privacy Service and Experience Cloud applications

Adobe Experience Platform Privacy Service is built to support privacy requests for several Adobe Experience Cloud applications. Each application supports different product values and IDs for identifying data subjects.

This document serves as a reference for Experience Cloud application documentation that outlines how to configure that application for privacy-related operations. This includes how to format and label your data. Two categories of applications are covered:

* [Applications integrated with Privacy Service](#applications-integrated-with-privacy-service): Applications that are able to send access, delete, or opt-out requests to Privacy Service.
* [Self-serve applications](#self-serve-applications): Applications that must manage their privacy requests internally, and cannot communicate with Privacy Service directly.

Please review the documentation for your Experience Cloud applications to learn how to format your privacy requests, and which values are supported for those requests.

## Applications integrated with Privacy Service

The following is a list of Experience Cloud applications that are integrated with Privacy Service, including the Privacy Service capabilities they are compatible with, and links to documentation for more information.

Application | Access/delete | Opt-out of sale | Documentation and considerations
--- | :---: | :---: | ---
Adobe Advertising Cloud | ✓ | ✓ | <ul><li>[Access/delete documentation](https://docs.adobe.com/content/help/en/advertising-cloud/all/privacy/ad-cloud-gdpr.html) </li><li>Advertising Cloud leverages existing global opt-out capabilities provided by Adobe Privacy Center. See the guide on [making data privacy requests](https://docs.adobe.com/content/help/en/audience-manager/user-guide/overview/data-privacy/data-privacy-requests.html#opt-out-requests) for more information.</li></ul>
Adobe Analytics | ✓ | ✓ | <ul><li>[Access/delete documentation](https://marketing.adobe.com/resources/help/en_US/analytics/gdpr/index.html)</li><li>Analytics handles opt-out requests by using [privacy reporting variables](https://docs.adobe.com/content/help/en/analytics/admin/data-governance/consent-variables.html)</li></ul>
Adobe Audience Manager | ✓ | ✓ | <ul><li>[Access/delete documentation](https://marketing.adobe.com/resources/help/en_US/aam/aam-gdpr.html)</li><li>[Opt-out documentation](https://docs.adobe.com/content/help/en/audience-manager/user-guide/features/declared-ids.html)</li></ul>
Adobe Campaign Standard | ✓ | ✓ | <ul><li>[Access/delete documentation](https://docs.campaign.adobe.com/doc/standard/getting_started/en/ACS_GDPR.html)</li><li>[Opt-out documentation](https://docs.adobe.com/content/help/en/campaign-standard/using/profiles-and-audiences/understanding-opt-in-and-opt-out-processes/about-opt-in-and-opt-out-in-campaign.html)</li></ul>
Adobe Experience Platform | ✓ | ✓ | <ul><li>[Access/delete documentation](../../technical_overview/privacy_service_overview/gdpr-on-platform-overview.md)</li><li>Experience Platform honors [opt-out requests for audience segments](../../technical_overview/segmentation/honoring-opt-outs.md).</li></ul>
Adobe Primetime Authentication | ✓ | N/A | <ul><li>[Access/delete documentation](http://tve.helpdocsonline.com/how-to-make-a-privacy-request)</li><li>Primetime does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul>
Adobe Target | ✓ | N/A | <ul><li>[Access/delete documentation](https://marketing.adobe.com/resources/help/en_US/target/target/privacy-and-general-data-protection-regulation.html)</li><li>Target does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul>

<!-- (To include once access/delete documentation is available)
Adobe Customer Attributes (CRS) | ✓ | N/A | <ul><li>Customer Attributes does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul>
-->

## Self-serve applications

The following is a list of Experience Cloud applications that are not integrated with Privacy Service and must manage their privacy concerns internally. Links to each application's documentation are provided, along with descriptions of the documentation's contents.

| Application | Documentation description |
| ------- | ----------- |
| [Adobe Campaign Classic](https://docs.campaign.adobe.com/doc/AC/getting_started/EN/ACC_GDPR.html) | An overview of GDPR functionalities for Adobe Campaign Classic. |
| [Adobe Dynamic Tag Manager](https://marketing.adobe.com/resources/help/en_US/dtm/opt-in.html) | Steps for preventing Adobe tags from firing until consent is acquired. |
| [Adobe Experience Manager](https://helpx.adobe.com/experience-manager/6-4/managing/using/gdpr-compliance.html) | An overview of how a customer privacy administrator or AEM administrator can handle GDPR requests. |
| [Adobe Experience Manager Livefyre](https://marketing.adobe.com/resources/help/en_US/livefyre/c_gdpr_compliance.html) | Steps for making GDPR access and delete requests using Livefyre. |
| [Adobe Experience Platform Launch](https://docs.adobelaunch.com/client-side-information/deploy-javascript-tags-to-opt-in-to-launch) | How developers can use extensions and the rule builder to define opt-in and opt-out solutions. |
| [Adobe Social](https://marketing.adobe.com/resources/help/en_US/social/c_gdpr-request.html) | Steps for using the GDPR request form to access or delete data collected by Social. |