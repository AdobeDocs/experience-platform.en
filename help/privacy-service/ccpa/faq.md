---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: CCPA FAQ
topic: troubleshooting
---

# CCPA FAQ

This document provides answers to frequently asked questions about the [!DNL California Consumer Protection Act] (CCPA) and its implementation in Adobe Experience Cloud.

## What is CCPA?

The [!DNL California Consumer Privacy Act] (CCPA) is California’s new privacy law that provides its residents with new rights regarding their personal information, and imposes data protection responsibilities on certain entities who conduct business in California.

>[!NOTE]
>
>Although technically effective January 2020, CCPA is still being fine-tuned by law makers. In addition, important implementation and other guidance details are forthcoming in rules that have yet to be written by the California regulator.   

While CCPA does share some concepts provided under the European Union's General Data Protection Regulation (GDPR), such as an individual’s right to access and delete personal information, there are several key ways in which CCPA differs from GDPR. For example, CCPA provides consumers with an opt-out right of certain data sharing activities that qualify as “selling” personal information to a third-party, rather than requiring prior consent.      

## What is the definition of personal information under CCPA?

Personal information is information “that identifies, relates to, describes, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a consumer or household.”  

## What types of personal information or identifiers used in Adobe Experience Cloud are subject to these new requirements?

The following identifiers are commonly used in [!DNL Experience Cloud] applications and could be subject to CCPA requirements:

- Name
- Postal address
- Unique personal identifier
- Online identifier
- IP address
- Email address
- Account name

Personal information can also include internet or other electronic network activity information. This includes, but is not limited to:

- Browsing history
- Search history
- Information regarding a consumer's interaction with a website, application, or advertisement

Even though CCPA covers a wide set of personal information, Adobe’s standard contract terms dictate that sensitive personal information (such as SSN, driver’s license information, financial account information, and biometric data) is generally prohibited from import and use in [!DNL Experience Cloud] applications.  

## How do CCPA's different roles and responsibilities apply to [!DNL Experience Cloud]?

As defined by CCPA, the following roles apply to Adobe and its customers:

- Adobe customers (the party requesting the collection and use of personal information from California residents) would be considered a **Business**.  
- Adobe, in its role of providing the service, would be considered a **Service Provider**.    

Given this relationship and Adobe's contract language, disclosures to Adobe likely would not be considered a "sale" for which businesses would need to provide notice and offer an opt-out.  

However, Adobe services may be used to enable certain data sharing and transfers to third parties. These third-party transfers could be considered a "sale" and legally require disclosure and opt-out.  Customers should work with their legal counsel to evaluate specific use cases to assess applicable requirements.

## How many days does a business have to respond to a consumer request to access or delete personal information?

Assuming that the business has collected personal information and that it can authenticate or verify the identity of a particular California consumer, the CCPA allows for consumer requests to be fulfilled within 45 days (with some exceptions).   

## What is Adobe's role under CCPA?

As a Service Provider, Adobe collects and processes personal information on behalf of the Business and is contractually bound to use that information only for the specific purposes set out in the agreement.  

Given this relationship and Adobe's contract language, disclosures to Adobe fall within the law’s provisions for Service Providers, and likely would not be considered a "sale" for which businesses would need to provide notice and offer an opt-out.  

Adobe services may be used to enable certain data sharing and transfers to third parties. These third-party transfers could be considered a "sale" and legally require disclosure and opt-out.  Customers should work with their legal counsel to evaluate specific use cases to assess applicable requirements.

## How can I support consumer privacy requirements under CCPA if I maintain certain types of data that are covered by the requirements?

Once you have taken the necessary steps to authenticate CA consumers, Adobe Experience Platform [!DNL Privacy Service] allows you to submit consumer privacy requests to compatible [!DNL Experience Cloud] applications. See the [Privacy Service overview](../home.md) for more information. For information on how your particular [!DNL Experience Cloud] applications can honor privacy requests, please refer to the guide on [Privacy Service and Experience Cloud applications](../experience-cloud-apps.md).

>[!NOTE]
>
>Further guidance from the California regulator is still forthcoming as to which types of data are eligible for consumer privacy requests.

## Does Adobe offer other tools that may be helpful in addressing CCPA requirements?

Adobe Experience Cloud applications provide data management and governance functions that can be helpful for companies' privacy needs. Among these tools are data usage labeling, role-based access controls, IP obfuscation, and hashing capabilities.

Adobe has received various certifications of its privacy and security practices, such as an ISO 27001 certification and a TrustArc GDPR validation.  