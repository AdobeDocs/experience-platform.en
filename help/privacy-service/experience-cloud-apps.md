---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service and Experience Cloud Applications
topic-legacy: overview
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

| Application | Access/delete | Opt-out of sale | Documentation and considerations |
| --- | :---: | :---: | --- |
| Adobe Advertising Cloud | ✓ | ✓ | <ul><li>[Access/delete documentation for GDPR](https://experienceleague.adobe.com/docs/advertising-cloud/privacy/ad-cloud-gdpr.html)</li><li>[Access/delete documentation for CCPA](https://experienceleague.adobe.com/docs/advertising-cloud/privacy/ad-cloud-ccpa-access-delete.html)</li><li>[Opt-out-of-sale documentation for CCPA](https://experienceleague.adobe.com/docs/advertising-cloud/privacy/ad-cloud-ccpa-opt-out-of-sale.html)</li></ul> |
| Adobe Analytics | ✓ | ✓ | <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/docs/analytics/admin/data-governance/an-gdpr-overview.html)</li><li>[!DNL Analytics] handles opt-out requests by using [privacy reporting variables](https://experienceleague.adobe.com/docs/analytics/admin/data-governance/consent-variables.html)</li></ul> |
| Adobe Audience Manager | ✓ | ✓ | <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/docs/audience-manager/user-guide/overview/data-privacy/data-privacy-requests.html)</li><li>[Opt-out documentation](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/declared-ids.html)</li></ul> |
| Adobe Campaign Standard | ✓ | ✓ | <ul><li>[Access/delete documentation](https://docs.campaign.adobe.com/doc/standard/getting_started/en/ACS_GDPR.html)</li><li>[Opt-out documentation](../segmentation/consents.md)</li></ul> |
| Adobe Customer Attributes (CRS) | ✓ | N/A | <ul><li>[Access/delete documentation for GDPR](https://experienceleague.adobe.com/docs/core-services/interface/customer-attributes/gdpr.html)</li><li>[Access/delete documentation for CCPA](https://experienceleague.adobe.com/docs/core-services/interface/customer-attributes/ccpa.html)</li><li>Customer Attributes does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |
| Adobe Experience Platform | ✓ | ✓ | <ul><li>[Access/delete documentation for the Data Lake](../catalog/privacy.md)</li><li>[Access/delete documentation for Real-time Customer Profile](../profile/privacy.md)</li><li>[!DNL Experience Platform] honors [opt-out requests for audience segments](../segmentation/consents.md).</li></ul> |
| Adobe Primetime Authentication | ✓ | N/A | <ul><li>[Access/delete documentation](http://tve.helpdocsonline.com/how-to-make-a-privacy-request)</li><li>[!DNL Primetime] does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |
| Adobe Target | ✓ | N/A | <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/docs/target/using/implement-target/before-implement/privacy/cmp-privacy-and-general-data-protection-regulation.html)</li><li>[!DNL Target] does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |

{style="table-layout:auto"}

## Self-serve applications {#self-serve}

The following is a list of [!DNL Experience Cloud] applications that are not integrated with [!DNL Privacy Service] and must manage their privacy concerns internally. Links to each application's documentation are provided, along with descriptions of the documentation's contents.

| Application | Documentation description |
| ------- | ----------- |
| [Adobe Campaign Classic](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-management.html) | An overview of GDPR functionalities for Adobe Campaign Classic. |
| [Adobe Experience Manager](https://experienceleague.adobe.com/docs/experience-manager-64/managing/data-protection/data-protection-and-privacy.html) | An overview of how a customer privacy administrator or AEM administrator can handle GDPR requests. |
| [Adobe Experience Manager Livefyre](https://experienceleague.adobe.com/docs/livefyre/using/settings-other/privacy-requests/c-gdpr-compliance.html) | Steps for making GDPR access and delete requests using Livefyre. |
| [Adobe Experience Platform Launch](https://experienceleague.adobe.com/docs/launch/using/client-side-info/deploy-javascript-tags-to-opt-in-to-launch.html) | How developers can use extensions and the rule builder to define opt-in and opt-out solutions. |
| [Magento](https://devdocs.magento.com/compliance/industry-compliance.html) | Ensure that your Magento Commerce installations comply with the requirements of specific privacy legislations. |
| [Marketo](https://www.marketo.com/company/trust/gdpr/) | Learn how privacy regulations apply to Marketo. |
| [Workfront](https://www.workfront.com/privacy-notice) | Learn how Workfront collects personal data, and how a data subject can submit a privacy request via a form. |

{style="table-layout:auto"}
