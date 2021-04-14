---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service and Experience Cloud Applications
topic: overview
description: This document provides a reference for how to configure different Experience Cloud applications for privacy-related operations.
exl-id: da21c15f-0b99-4eb7-ac9a-f0fe5e3ba842
---
# [!DNL Privacy Service] and [!DNL Experience Cloud] applications

Adobe Experience Platform [!DNL Privacy Service] is built to support privacy requests for several Adobe Experience Cloud applications. Each application supports different product values and IDs for identifying data subjects.

This document serves as a reference for [!DNL Experience Cloud] application documentation that outlines how to configure that application for privacy-related operations. This includes how to format and label your data. Two categories of applications are covered:

* [Applications integrated with Privacy Service](#integrated): Applications that are able to send access, delete, or opt-out requests to [!DNL Privacy Service].
* [Self-serve applications](#self-serve): Applications that must manage their privacy requests internally, and cannot communicate with [!DNL Privacy Service] directly.

Please review the documentation for your [!DNL Experience Cloud] applications to learn how to format your privacy requests, and which values are supported for those requests.

## Applications integrated with [!DNL Privacy Service] {#integrated}

The following is a list of [!DNL Experience Cloud] applications that are integrated with [!DNL Privacy Service], including the [!DNL Privacy Service] capabilities they are compatible with, and links to documentation for more information.

Application | Access/delete | Opt-out of sale | Documentation and considerations
--- | :---: | :---: | ---
Adobe Advertising Cloud | ✓ | ✓ | <ul><li>[Access/delete documentation for GDPR](https://experienceleague.adobe.com/docs/advertising-cloud/privacy/ad-cloud-gdpr.html)</li><li>[Access/delete documentation for CCPA](https://experienceleague.adobe.com/docs/advertising-cloud/privacy/ad-cloud-ccpa-access-delete.html)</li><li>[Opt-out-of-sale documentation for CCPA](https://experienceleague.adobe.com/docs/advertising-cloud/privacy/ad-cloud-ccpa-opt-out-of-sale.html)</li></ul>
Adobe Analytics | ✓ | ✓ | <ul><li>[Access/delete documentation](https://docs.adobe.com/content/help/en/analytics/admin/data-governance/an-gdpr-overview.html)</li><li>[!DNL Analytics] handles opt-out requests by using [privacy reporting variables](https://docs.adobe.com/content/help/en/analytics/admin/data-governance/consent-variables.html)</li></ul>
Adobe Audience Manager | ✓ | ✓ | <ul><li>[Access/delete documentation](https://docs.adobe.com/content/help/en/audience-manager/user-guide/overview/data-privacy/data-privacy-requests.html)</li><li>[Opt-out documentation](https://docs.adobe.com/content/help/en/audience-manager/user-guide/features/declared-ids.html)</li></ul>
Adobe Campaign Standard | ✓ | ✓ | <ul><li>[Access/delete documentation](https://docs.campaign.adobe.com/doc/standard/getting_started/en/ACS_GDPR.html)</li><li>[Opt-out documentation](../segmentation/honoring-opt-outs.md)</li></ul>
Adobe Customer Attributes (CRS) | ✓ | N/A | <ul><li>[Access/delete documentation for GDPR](https://docs.adobe.com/content/help/en/core-services/interface/customer-attributes/gdpr.html)</li><li>[Access/delete documentation for CCPA](https://docs.adobe.com/content/help/en/core-services/interface/customer-attributes/ccpa.html)</li><li>Customer Attributes does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul>
Adobe Experience Platform | ✓ | ✓ | <ul><li>[Access/delete documentation for the Data Lake](../catalog/privacy.md)</li><li>[Access/delete documentation for Real-time Customer Profile](../profile/privacy.md)</li><li>[!DNL Experience Platform] honors [opt-out requests for audience segments](../segmentation/honoring-opt-outs.md).</li></ul>
Adobe Primetime Authentication | ✓ | N/A | <ul><li>[Access/delete documentation](http://tve.helpdocsonline.com/how-to-make-a-privacy-request)</li><li>[!DNL Primetime] does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul>
Adobe Target | ✓ | N/A | <ul><li>[Access/delete documentation](https://docs.adobe.com/content/help/en/target/using/implement-target/before-implement/privacy/cmp-privacy-and-general-data-protection-regulation.html)</li><li>[!DNL Target] does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul>


## Self-serve applications {#self-serve}

The following is a list of [!DNL Experience Cloud] applications that are not integrated with [!DNL Privacy Service] and must manage their privacy concerns internally. Links to each application's documentation are provided, along with descriptions of the documentation's contents.

| Application | Documentation description |
| ------- | ----------- |
| [Adobe Campaign Classic](https://docs.campaign.adobe.com/doc/AC/getting_started/EN/ACC_GDPR.html) | An overview of GDPR functionalities for Adobe Campaign Classic. |
| [Adobe Dynamic Tag Manager](https://docs.adobe.com/content/help/en/dtm/using/tools/opt-in.html) | Steps for preventing Adobe tags from firing until consent is acquired. |
| [Adobe Experience Manager](https://helpx.adobe.com/experience-manager/6-4/managing/using/gdpr-compliance.html) | An overview of how a customer privacy administrator or AEM administrator can handle GDPR requests. |
| [Adobe Experience Manager Livefyre](https://docs.adobe.com/content/help/en/livefyre/using/settings-other/privacy-requests/c-gdpr-compliance.html) | Steps for making GDPR access and delete requests using Livefyre. |
| [Adobe Experience Platform Launch](https://docs.adobelaunch.com/client-side-information/deploy-javascript-tags-to-opt-in-to-launch) | How developers can use extensions and the rule builder to define opt-in and opt-out solutions. |
