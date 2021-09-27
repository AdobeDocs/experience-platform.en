---
keywords: RTCDP;CDP;B2B Edition;Real-time Customer Data Platform;real time customer data platform;real time cdp;b2b;cdp;Customer AI
title: Real-time CDP B2B Edition Overview
seo-title: Real-time Customer Data Platform Business to Business Edition overview
description: Overview of Real-time Customer Data Platform Business to Business Edition Account
seo-description: Overview of Real-time Customer Data Platform Business to Business Edition Account
hide: yes
hidefromtoc: yes
---
# Real-time Customer Data Platform Business to Business Edition overview

>[!IMPORTANT]
>
>The Real-time CDP Business to Business Edition is currently in beta. The documentation and the functionality are subject to change.

Built on Real-time Customer Data Platform (Real-time CDP), the Real-time CDP, B2B Edition was purpose-built for marketers. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels.

There are improvements to a variety of Adobe Experience Platform capabilities that distinguish the Real-time B2B Edition from its B2C Edition counterpart. They include improvements to the Experience Data Model (XDM) specifically for B2B use cases, upgrades to identity resolution and profile segmentation, as well as a custom-built connector and destination for [!DNL Marketo Engage]. The [!DNL Marketo] connector allows B2B brands to connect the industry-leading B2B engagement data with behavioral information for lead nurturing and account-based marketing. 

With Real-time CDP B2B Edition, you can:

* Combine the data collected from multiple sources into a single view, to create holistic people and account profiles.
* Enrich, segment, and export all your cross-source data from a centralized location for your unified account profiles.
* Manage your data using data governance tools that are available at every step of the centralizing process to ensure that your data conforms to legal regulations.

More comprehensive details on the improvements made for the B2B edition are divided into sections below. 

## XDM

XDM has been expanded with a new set of schema classes and field groups that extend fields specifically for B2B purposes. These recent extensions to existing data objects provide preconfigured support for leads, accounts, opportunities, and other B2B centric data. Newly created Experience Events field groups also support additional event types, and the 'Individual Profile' data object is now connected to accounts and the buying group. 

The B2B Edition supports many-to-many relationships between people and accounts. This allows profile data to be linked to more than one account and is critical for the identity resolution feature provided by the system.

The use of preconfigured B2B data schemas allows clients to bring in data from standard data structures. Many of the new schema classes map almost directly to those encountered in mainstream CRMs such as [!DNL Salesforce], [!DNL Microsoft Dynamics], [!DNL Marketo], and other B2B data sources. With B2B Edition, you can bring data from B2B sources into Platform in a straightforward manner and with easy to audit results.

These latest innovations within the Real-time CDP, B2B Edition enable B2B brands to better ingest and activate data via B2B centric data sources and destinations. The improved data unification and presentation allows for significantly more variety and flexibility per source system for B2B sources.

## Identity resolution

With easier and more flexible data ingestion, information within the system [!DNL Data Lake] must be identified and managed promptly. The B2B Edition provides powerful, real-time identification of source records that represent real-world people and businesses.

The identity resolution system provides the following features:

* Combined B2B and B2C people records
* A multi-level account hierarchy
* Many-to-many, people to account connections
* People and account identity resolved in real-time

The identity resolution system has been expanded to support a more multifaceted classification of people. The system allows for people to be identified as both business opportunities as well as being identified as consumers.

Account records are synchronized from the CMS through multiple tools and can be brought together by Platform. The system brings together those people associated wth business opportunities and those recorded as customers, but is also able to preserve the distinction between them as an attribute if they are identifiable. 

Matching identifiers are used to link together and merged account records from across multiple systems. The hierarchies of the accounts are preserved throughout this process. Differentiators are used scrutinize whether a person is associated with an account or not, and provides the ability to separate them from the account if needed.

## [!DNL Profiles] and [!DNL segmentation]

These features are distinct to the [!DNL Real-time CDP], B2B Edition as they allow you to build complete customer profiles for your business-to-business needs. This is critical for companies where regulations follow the individual. 

The B2B Edition allows all this collected data about the people, companies, attributes, and behaviors, to be segmented into browsable audiences that can be sent to various destinations using connectors.

The system tracks people as individuals rather than their emails. By preserving the distinction of customers who have separate B2B and B2C data, it creates a more sophisticated version of identity than is available in the current market.

This means that when someone changes jobs the system still follows them. The person is still the same entity, they are just linked to a new account. This native functionality offers a great vector for expansion into new accounts as the system follows these people as individuals including all of their attributes and behaviors.

## B2B sources

Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. The [!DNL Marketo] source allows you to stream B2B data into Platform and keep this data up to date using Platform-connected applications. It supports any number of instances of [!DNL Marketo] (which is beneficial to large companies with multiple instances) and pulls into a single IMS ORG where the data is merged.

>[!NOTE]
>
>The [!DNL Marketo] source is **not** required to use the B2B Edition of [!DNL Real-time CDP]. 

Furthermore, the average latency for B2B data to stream from [!DNL Marketo] is lower than the current standard for event data, which ranges from 24 to 48-hour cycles. Data streamed from [!DNL Marketo] is pushed to Platform in under a minute and becomes available in individual profiles within another minute.

Real-time Customer Profile also supports Experience Events time-to-live. Adobe Experience Platform can retain data for a different lengths of time depending on its' source. The duration that data is retained on Experience Platform is configured by the data set. [!DNL Marketo] source data can be retained for 25 months, and web interaction data for unknown users can be expunged on the same schedule set for Adobe Experience Platform.

This helps you to manage [!DNL Profiles] and ensure that their data are both relevant and useful. It is important that the pertinent data is kept for the appropriate amount of time to support the common two year-long sales cycles of B2B deals.

## B2B destinations

Any Experience Platform destinations are available and fully supported by the B2B Edition such as [!DNL Google], [!DNL Linkedin], or [!DNL Facebook]. There is also a [!DNL Marketo Engage] destination which streams data out of [!DNL Marketo] or out of Platform and makes it available as audiences.

The [!DNL Marketo] destination provides a seamless and quick way to pull information from AEP into [!DNL Marketo] that the connector is streaming to. The segment connector enables marketers to push segments created in Adobe Experience Platform to [!DNL Marketo]. In [!DNL Marketo], these audiences are then available as static lists.

For companies with more than one CRM, the B2B edition provides the option to configure destination connectors to separate instances of [!DNL Marketo] or CRM. If required, you can configure destination connectors to each instance and send audiences to each of the CRM instances independently. 

## Next steps

See the following documents to learn more about the specific differences between [!DNL Real-time CDP] and the [!DNL Real-time CDP] B2B Edition.

* Getting Started with B2B Edition
* B2B Profile Enhancements
* Access Control for B2B
* Schema Building Enhancements
* New XDM B2B Classes & Field Groups
* [!DNL Marketo] Source connectors
