---
keywords: Experience Platform;home;popular topics;GDPR;gdpr;CCPA;ccpa;PDPA;pdpa;LGPD;lgpd;faq;FAQ;regulation;Regulation;regulations;Regulations;privacy;Privacy;
solution: Experience Platform
title: Privacy Regulations FAQ
description: This document provides answers to frequently asked questions about supported legal privacy regulations and their implementation in Adobe Experience Cloud.
exl-id: ec553e53-664b-4e18-abb1-4e4063fdd2c9
---
# Privacy regulations FAQ

This document provides answers to frequently asked questions about supported legal privacy regulations and their implementation in Adobe Experience Cloud.

>[!NOTE]
>
>Definitions for the various terms used in this document can be found in the [privacy regulation terminology](terminology.md) guide.

## General questions

The following questions relate to all privacy regulations supported by Experience Cloud.

### Who do the supported privacy regulations affect?

The [privacy regulations supported by Experience Cloud](./overview.md) apply to all organizations that store and process the personal data of citizens within the regulations' respective jurisdictions, regardless of the organization's geographic location.

### What constitutes personal data?

Personal data is any information related to a natural person or data subject that can be used to directly or indirectly identify the person. It can be anything from a name, a photo, an email address, bank details, posts on social networking websites, medical information, or a computer IP address.

The following identifiers are commonly used in Experience Cloud applications and could be subject to privacy regulation requirements:

* Name
* Postal address
* Unique personal identifier
* Online identifier
* IP address
* Email address
* Account name

Personal information can also include internet or other electronic network activity information. This includes, but is not limited to:

* Browsing history
* Search history
* Information regarding a consumer's interaction with a website, application, or advertisement

Even though privacy regulations cover a wide set of personal information, Adobe's standard contract terms dictate that sensitive personal information (such as SSN, driver's license information, financial account information, and biometric data) is generally prohibited from import and use in Experience Cloud applications.  

### What is the difference between a data controller and a data processor?

A **data controller** is the entity that determines the purposes, conditions and means of processing personal data, while the **data processor** is an entity which processes personal data on behalf of the data controller.

A **data controller** is the person or organization who has the power and responsibility to make decisions regarding the collection, use, or disclosure of personal data. A **data processor** is the person or organization who operates in relation to the collection, use, or disclosure of the personal data and the direction of the data controller.

### What is the difference between explicit and unambiguous data subject consent?

**Explicit consent** refers to a standard of consent which involves a specific, informed and unambiguous indication of the data subject's wishes in oral or written form. Put simply, the data subject must literally and explicitly say "I consent" or "I agree" in order for the consent to be considered explicit. In addition, it must be as easy to withdraw consent as it is to give it.

**Unambiguous (implied) consent** refers to consent that was not explicitly given by the data subject, but is nonetheless unambiguous in nature. For example, during the sign-up process for a company website, a notice is given that by providing an email address, the data subject consents to receiving emails on special offers. If the data subject reads the notice, the affirmative action of entering their email is enough to be considered unambiguous consent. 

For many regulations like the GDPR, explicit consent is required for processing sensitive personal data, where nothing short of "opt in" will suffice. For non-sensitive data, however, unambiguous (implied) consent is acceptable.

### Can data subjects under a certain age give consent? 

Many privacy regulations stipulate that if a data subject is below a certain age, they cannot legally provide consent for the collection of their personal data. Some regulations allow for consent to be given by the holder of parental responsibility for that data subject in these cases, but not all. The following table lists the minimum age for data subjects to provide their own consent for each regulation, with notes for further information:

| Regulation | Age of consent | Notes |
| --- | --- | --- |
| CCPA (California) | 16 | <ul><li>Parental consent can only be provided for data subjects of age 13 or older.</li><li>The collection of personal data from subjects below the age of 13 is strictly prohibited.</li></ul> |
| GDPR (European Union) | 16 | <ul><li>Some member states of the EU may provide a law for a lower age for this purpose, but no lower than 13.</li><li>Parental consent must be provided for all data subjects below the age limit.</li></ul> |
| LGPD (Brazil) | 13 | <ul><li>Parental consent must be provided for all data subjects below the age limit.</li><li>Consent may be given by a 13 to 18 year old natural person, as long as the processing of their personal data is undergone in their best interest.</li></ul> |
| PDPA (Thailand) | 10 | <ul><li>Parental consent must be provided for all data subjects below the age limit.</li></ul> |

<!-- | New Zealand [!DNL Privacy Act] | 16 | <ul><li>Parental consent must be provided for all data subjects below the age limit in cases where consent is required.</li></ul> | -->

### How many days does a business have to respond to a consumer request to access or delete personal information?

Assuming that the business has collected personal information and that it can authenticate or verify the identity of a particular consumer, privacy regulations allow a specific time window for a consumer request to be fulfilled. The following table breaks down the applicable time windows for each regulation, with notes on some exceptions:

>[!NOTE]
>
>The timeframe to respond in 'days' are reflective of each regulatory law's mandated timelines to complete a consumers request.

| Regulation | Timeframe to respond | Notes |
| --- | --- | --- |
| CCPA (California) | 45 days | |
| GDPR (European Union) | 30 days | If the request is complex, or numerous requests have been made by the same data subject, then the request can be extended to 60 days. |
| LGPD (Brazil) | 15 days | |
| PDPA (Thailand) | 30 days | If a company cannot respond to a data subject's request within the compliance window, the company will have an additional 30 days from the date they were unable to fulfill the request to respond in writing to the data subject. |

<!-- | New Zealand [!DNL Privacy Act] | 20 working days | | -->

### Does my business need to appoint a data protection officer?

If your organization's data operations fall under the legal jurisdictions of the GDPR, LGPD, or PDPA, you must appoint a data protection officer (DPO) in the following cases:

* Your organization is a public authority
* Your organization engages in large-scale systematic monitoring
* Your organization engages in large-scale processing of sensitive personal data.

>[!IMPORTANT]
>
>Unlike other regulations, the CCPA does stipulate this as a requirement. However, it is generally recommended that to maintain privacy compliance a company must have a qualified individual monitoring data gathering activities and the storage of consumer data, as well as responding to customer inquiries.

### How can I support consumer privacy requests if I maintain data that is covered by privacy regulations?

Once you have taken the necessary steps to authenticate consumers that fall within the appropriate legal jurisdictions, Adobe Experience Platform Privacy Service allows you to submit consumer privacy requests to compatible Experience Cloud applications. See the [[!DNL Privacy Service] overview](../home.md) for more information. For information on how your particular Experience Cloud applications can honor privacy requests, please refer to the guide on [Privacy Service and Experience Cloud applications](../experience-cloud-apps.md).

>[!NOTE]
>
>Further guidance from the California regulator is still forthcoming as to which types of data are eligible for consumer privacy requests.

## CCPA questions

The following questions relate specifically to the CCPA.

### How do CCPA's different roles and responsibilities apply to Experience Cloud?

As defined by CCPA, the following roles apply to Adobe and its customers:

* Adobe customers (the party requesting the collection and use of personal information from California residents) would be considered a **Business**.  
* Adobe, in its role of providing the service, would be considered a **Service Provider**.    

As a Service Provider, Adobe collects and processes personal information on behalf of the Business and is contractually bound to use that information only for the specific purposes set out in the agreement.  

Given this relationship and Adobe's contract language, disclosures to Adobe likely would not be considered a "sale" for which businesses would need to provide notice and request consent.  

However, Adobe services may be used to enable certain data sharing and transfers to third parties. These third-party transfers could be considered a "sale" and legally require disclosure and consent. Customers should work with their legal counsel to evaluate specific use cases to assess applicable requirements.

### Does Adobe offer other tools that may be helpful in addressing CCPA requirements?

Adobe Experience Cloud applications provide data management and governance functions that can be helpful for companies' privacy needs. Among these tools are data usage labeling, role-based access controls, IP obfuscation, and hashing capabilities.

Adobe has received various certifications of its privacy and security practices, such as an ISO 27001 certification and a TrustArc GDPR validation.

## GDPR questions

The following questions relate specifically to the GDPR.

### What is the difference between a regulation and a directive?

A **regulation** is a binding legislative act and must be applied in its entirety across the EU. A **directive** is a legislative act that sets out a goal that all EU countries must achieve, but it is up to the individual countries to decide how.

It is important to note that the GDPR is a regulation, in contrast the previous legislation (the Data Protection Directive), which is a directive.

### How does GDPR affect policy surrounding data breaches?

Proposed regulations surrounding data breaches primarily relate to the notification policies of companies that have been breached. Data breaches which may pose a risk to individuals must be notified to the data protection authority within 72 hours and to affected individuals without undue delay.

## PDPA questions

The following questions relate specifically to the PDPA.

### What constitutes sensitive personal data?

The PDPA provides stringent requirements for the collection and storage of sensitive personal data which includes personal data pertaining to: racial or ethnic origin, political opinions, religious or philosophical beliefs, criminal records, trade union memberships, genetic data, biometric data, health records, and sexual orientation or preferences.
