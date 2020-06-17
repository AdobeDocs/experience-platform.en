---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Getting started with Privacy Service
topic: overview
---

# Getting started with Privacy Service

Adobe Experience Platform Privacy Service provides an API and user interface that allow you to honor customer request to access or delete their personal data within your Adobe Experience Cloud solutions. In order to make use of the service, several key decisions need to be made in terms of your organization's privacy requirements, the kinds of identity data you collect from your customers, and how to interface your CRM system with the service.

This document provides general guidance on these important prerequisite steps, and provides links to further Privacy Service documentation for more details.

## Determine your organization's privacy requirements

Depending on the nature of your business and the jurisdictions it operates in, your data operations may be subject to legal privacy regulations. These regulations often give your customers the right to request access to the data you collect from them, and request the deletion of that stored data. These customer requests for their personal data are referred to as "privacy requests" throughout the documentation.

Privacy Service supports customer privacy requests for the following regulations:

* The European Union's [General Data Protection Regulation (GDPR)](https://gdpr-info.eu/)
* The [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa)
* Thailand's [Personal Data Protection Act (PDPA_THA)](https://www.dataprotectionreport.com/2020/02/thailand-personal-data-protection-law/)

If your data operations fall under the purview of any of the above regulations, review their documentation for important information such as the specific privacy rights they afford your customers, and compliance windows for honoring privacy requests. This information should be taken into account when determining how to integrate Privacy Service into your CRM system, and how customers can interact with it to make privacy requests.

In addition to legal regulations, any organizational or industry standards applicable to your organization should be considered.

## Determine types of identity data to send to Privacy Service

In order for Privacy Service to process a customer's privacy request, the service must be provided at least one unique identity value for that customer. A unique identity value is any piece of information that can be used to identify an individual person (and their stored personal data) within your Experience Cloud applications, such as an email address.

Depending on the Experience Cloud applications your CRM system utilizes, the type and number of identity values you must provide for each customer will vary. Some applications utilize their own internal customer ID values (such as Adobe Target), while other solutions rely on Adobe Experience Cloud Identity Service (ECID) identifiers that track customer activity across all Experience Cloud applications.

The document on [identity data for privacy requests](./identity-data.md) provides more detailed information on the types of identity information that are accepted for Privacy Service. The document also provides information on how to leverage Adobe technologies to effectively retrieve the appropriate identity information from your customers as they interact with your website.

## Start making access, delete, and opt-out requests using the service

Once you have determined your business' privacy needs, and decided which identity values to send to Privacy Service, you can start making privacy requests.

The [Privacy Service and Experience Cloud applications](./experience-cloud-apps.md) document provides a list of Experience Cloud applications, and links to further documentation for how to format privacy requests for each.

## Next steps