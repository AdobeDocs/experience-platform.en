---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service and Experience Cloud Applications
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

The following is a list of [!DNL Experience Cloud] applications that are integrated with [!DNL Privacy Service], including the [!DNL Privacy Service] capabilities they are compatible with, their protocols for processing delete requests, and links to documentation for more information.

>[!NOTE]
>
>All integrated products respond to privacy requests in 30 days or less.

| Application | Access/delete | Opt-out of sale | Delete behavior | Documentation and other considerations |
| --- | :---: | :---: | --- | --- |
| Adobe Advertising | ✓ | ✓ | The data subject's cookie ID or device ID is deleted from the system, along with all cost, click, and revenue data associated with the cookie. | <ul><li>[Access/delete documentation for GDPR](https://experienceleague.adobe.com/en/docs/advertising/privacy/gdpr)</li><li>[Access/delete documentation for CCPA](https://experienceleague.adobe.com/en/docs/advertising/privacy/ccpa/ccpa-access-delete)</li><li>[Opt-out-of-sale documentation for CCPA](https://experienceleague.adobe.com/en/docs/advertising/privacy/ccpa/ccpa-opt-out-of-sale)</li></ul> |
| Adobe Analytics | ✓ | ✓ | Adobe Analytics provides tools for labeling data according to its sensitivity and contractual restrictions. Labels are an important step for:<ol><li>Identifying Data Subjects.</li><li>Determining which data to return as part of an access request.</li><li>Identifying data fields that must be deleted as part of a deletion request.</li></ol> | <ul><li>[Privacy Workflow](https://experienceleague.adobe.com/en/docs/analytics/technotes/privacy/gdpr)</li><li>[Analytics Labeling](https://experienceleague.adobe.com/en/docs/analytics/admin/admin-tools/privacy-labeling/labels)</li><li>[Analytics Opt-out](https://experienceleague.adobe.com/en/docs/analytics/components/dimensions/cm-opt-out)</li></ul> |
| Adobe Audience Manager | ✓ | ✓ |  All traits and segments associated with the Audience Manager identifier included in the request are deleted. In addition, the respective identifiers for the individual are opted out of further data collection and the respective ID mappings are removed. | <ul><li>[Access](https://experienceleague.adobe.com/en/docs/audience-manager/user-guide/overview/data-privacy/data-privacy-requests#access-data) / [delete](https://experienceleague.adobe.com/en/docs/audience-manager/user-guide/overview/data-privacy/data-privacy-requests#delete-data) documentation</li><li>[Opt-out documentation](https://experienceleague.adobe.com/en/docs/audience-manager/user-guide/features/declared-ids#opt-out-calls)</li><li>[Opt out requests](https://experienceleague.adobe.com/en/docs/audience-manager/user-guide/overview/data-privacy/data-privacy-requests#opt-out-requests)</li></ul> |
| Adobe Campaign Classic | ✓ | ✓ | The data subject's stored data is deleted from the system. | <ul><li>[Privacy management](https://experienceleague.adobe.com/en/docs/campaign-classic/using/getting-started/privacy/privacy-management)</li></ul> |
| Adobe Campaign Standard | ✓ | ✓ | The data subject's stored data is deleted from the system. | <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/en/docs/campaign-standard/using/getting-started/privacy/privacy-management#right-access-forgotten)</li><li>[Opt-out documentation](https://experienceleague.adobe.com/en/docs/campaign-standard/using/profiles-and-audiences/understanding-opt-in-and-opt-out-processes/about-opt-in-and-opt-out-in-campaign)</li></ul> |
| Adobe Customer Attributes (CRS) | ✓ | N/A | The data subject's attributes are deleted from the system. | <ul><li>[Access/delete documentation for GDPR](https://experienceleague.adobe.com/en/docs/core-services/interface/services/customer-attributes/gdpr)</li><li>[Access/delete documentation for CCPA](https://experienceleague.adobe.com/en/docs/core-services/interface/services/customer-attributes/ccpa)</li><li>Customer Attributes does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |
| Adobe Experience Platform | ✓ | ✓ | When Experience Platform receives a delete request from Privacy Service, Experience Platform sends confirmation to Privacy Service that the request has been received and affected data has been marked for deletion. The records are then removed from the Data Lake or Profile store once the privacy job has completed. Before the job completes, the data is soft-deleted and is therefore not accessible by any Experience Platform service. | <ul><li>[Access/delete documentation for the Data Lake](../catalog/privacy.md)</li><li>[Access/delete documentation for Identity Service](../identity-service/privacy.md)</li><li>[Access/delete documentation for Real-Time Customer Profile](../profile/privacy.md)</li><li>[!DNL Experience Platform] honors [opt-out requests for audience segments](../segmentation/tutorials/consents.md).</li></ul> |
| Adobe Journey Optimizer  | ✓ | N/A | The data subject's stored data is deleted from the system. | <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/privacy/requests)</li></ul> |
| Adobe Pass Authentication | ✓ | N/A | The data subject's stored data is deleted from the system. | <ul><li>[Access/delete documentation](https://tve.helpdocsonline.com/how-to-make-a-privacy-request)</li><li>Pass does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |
| Adobe Target | ✓ | N/A | All data associated with the data subject's ID is deleted from their Visitor Profile. Aggregated or anonymized data that does not identify the individual or is otherwise unrelated (such as content data) does not apply to delete requests. | <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/en/docs/target-dev/developer/implementation/privacy/cmp-privacy-and-general-data-protection-regulation)</li><li>[!DNL Target] does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |
| Commerce (Personalization) | ✓ | N/A | Privacy Service deletes [!DNL Commerce] data stored in Commerce SaaS services for marketing purposes, meaning profiles and orders of data subjects are no longer sent to Adobe marketing applications for use in campaigns and customer journeys. However, Privacy Service does not delete data in the [!DNL Commerce] application, as it might still be required for merchant transactional needs. Merchants are responsible for any data deletion/access requests in the [!DNL Commerce] application.| <ul><li>[Access/delete documentation for Commerce](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/data-connection/handle-privacy-request)</li></ul> |
| Marketo Engage | ✓ | N/A | The data subject's stored data is deleted from the system. |  <ul><li>[Access/delete documentation](https://experienceleague.adobe.com/en/docs/marketo/using/product-docs/core-marketo-concepts/miscellaneous/privacy-requests)</li><li>[!DNL Marketo] does not have the capability to transfer data, therefore opt-out-of-sale requests are not applicable.</li></ul> |

## Self-serve applications {#self-serve}

The following is a list of [!DNL Experience Cloud] applications that are not integrated with [!DNL Privacy Service] and must manage their privacy concerns internally. Links to each application's documentation are provided, along with descriptions of the documentation's contents.

| Application | Documentation description |
| ------- | ----------- |
| [Adobe Experience Manager](https://experienceleague.adobe.com/en/docs/experience-manager-64/managing/data-protection/data-protection-and-privacy) | An overview of how a customer privacy administrator or AEM administrator can handle GDPR requests. |
| [Adobe Commerce](https://experienceleague.adobe.com/en/docs/commerce-operations/security-and-compliance/overview) | Ensure that your Adobe Commerce installations comply with the requirements of specific privacy legislations. |
| [Tags in Adobe Experience Platform](../tags/ui/client-side/consent.md) | How developers can use extensions and the rule builder to define opt-in and opt-out solutions. |
| [Workfront](https://www.workfront.com/privacy-notice) | Learn how Workfront collects personal data, and how a data subject can submit a privacy request via a form. |
