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

Built on Real-time Customer Data Platform (Real-time CDP), the Real-time CDP B2B Edition was purpose built for marketers. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified identity allows marketers to precisely target specific audiences and engage those audiences across all available channels.

There are a variety of Adobe Experience Platform capabilities that comprise the B2B Edition. This includes a prebuilt connector for Marketo Engage that allows B2B brands to connect the industry leading B2B engagement data with behavioral information for lead nurturing and account-based marketing.

With Real-time CDP B2B Edition, you can:

* Unifying the data collected from multiple sources into a single view, to create unified people and account profiles.
* Unified account profiles provide a centralized place for all cross-source data that can be enriched, segmented and pushed back out.
* Data governance tools are available at every step of the centralizing process to ensure that your data conforms to legal regulations.

More comprehensive details on the B2B edition are as follows. 

<!-- {Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.} -->

## XDM improvements

The Experience Data Model (XDM) has been expanded with a new set of schema classes and fieldgroups which extend fields specifically for B2B purposes. These recent extensions to existing data objects provide preconfigured support for leads, accounts, opportunities and other B2B centric data. Newly created Experience Events fieldgroups also support additional event types, and the 'Individual Profile' data object is now connected to accounts, and the buying group. 

The B2B Edition supports many to many relationships between people and accounts. This allows profile data to be linked to more than one account and is critical for the Identity resolution feature provided within the system.

The use of preconfigured B2B data schemas allows clients to bring in data from standard structures. Many of the new schema classes map more or less directly to those encountered in mainstream CRMs such as Salesforce, Microsoft Dynamics, Marketo and other B2B data sources. Bringing data from such sources into the system will be reasonably uncomplicated and easy to audit the results.

These latest innovations within the Real-time CDP B2B Edition enable B2B brands to better ingest and activate data via B2B centric data sources and destinations. The improved data unification and presentation allows for significantly more variety and flexibility per source system for B2B sources.

## Identity resolution

With easier and more flexible data ingestion, information within the system data lake must be identified and managed in a timely manner. The B2B Edition provides powerful, real-time identification of source records that represent real world people and businesses.

The identity resolution system provides the following features:

- Unified B2B and B2C people records
- A multi-level account hierarchy
- A related accounts collection
- Many to many, people to account connections
- People and account identity resolved in real time

The identity resolution system has been expanded to support B2B people. The system brings together both B2B and B2C people and can preserve the distinction as an attribute if they are identifiable. Account records are linked and merged across multiple systems where there are matching identifiers and account hierarchies are also preserved. Ingested records will be merged together where there are shared identifiers. 

The B2B Edition also allows the use of differentiators to check if a person is associated with an account or not, and provides the ability to seperate them if required. 




## Additional Information

The following documentation is recommended to learn more about the specific differences of the B2B Edition over Real-time CDP: 

* word
