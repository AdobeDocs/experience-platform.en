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

Built on Real-time Customer Data Platform (Real-time CDP), the Real-time CDP, B2B Edition was purpose-built for marketers. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified identity allows marketers to precisely target specific audiences and engage those audiences across all available channels.

There are improvements to a variety of Adobe Experience Platform capabilities that distinguish the Real-time B2B Edition from its B2C Edition counterpart. They include improvements to the Experience Data Model specifically for B2B use cases, upgrades to identity resolution and profile segmentation, as well as a custom-built connector and destination for Marketo Engage. The Marketo connector allows B2B brands to connect the industry-leading B2B engagement data with behavioral information for lead nurturing and account-based marketing. 

With Real-time CDP B2B Edition, you can:

* Unify the data collected from multiple sources into a single view, to create unified people and account profiles.
* Enrich, segment, and export all your cross-source data from a centralized location for your unified account profiles.
* Manage your data using data governance tools that are available at every step of the centralizing process to ensure that your data conforms to legal regulations.

More comprehensive details on the improvements made for the B2B edition are divided into sections below. 

## XDM

The Experience Data Model (XDM) has been expanded with a new set of schema classes and fieldgroups that extend fields specifically for B2B purposes. These recent extensions to existing data objects provide preconfigured support for leads, accounts, opportunities, and other B2B centric data. Newly created Experience Events fieldgroups also support additional event types, and the 'Individual Profile' data object is now connected to accounts and the buying group. 

The B2B Edition supports many to many relationships between people and accounts. This allows profile data to be linked to more than one account and is critical for the identity resolution feature provided by the system.

The use of preconfigured B2B data schemas allows clients to bring in data from standard data structures. Many of the new schema classes map almost directly to those encountered in mainstream CRMs such as Salesforce, Microsoft Dynamics, Marketo, and other B2B data sources. Bringing data from such sources into the system is reasonably straightforward, and easy to audit the results.

These latest innovations within the Real-time CDP, B2B Edition enable B2B brands to better ingest and activate data via B2B centric data sources and destinations. The improved data unification and presentation allows for significantly more variety and flexibility per source system for B2B sources.

## Identity resolution

With easier and more flexible data ingestion, information within the system data lake must be identified and managed promptly. The B2B Edition provides powerful, real-time identification of source records that represent real-world people and businesses.

The identity resolution system provides the following features:

* Unified B2B and B2C people records
* A multi-level account hierarchy
* Many to many, people to account connections
* People and account identity resolved in real-time

The identity resolution system has been expanded to support B2B people. Account records are synchronized from the CMS through multiple tools and can be unified by Adobe Experience Platform. The system brings together both B2B and B2C people and can preserve the distinction as an attribute if they are identifiable. Account records are linked together and merged across multiple systems where there are matching identifiers. Account hierarchies are also preserved throughout this process. The use of differentiators in B2B Edition allows you to check if a person is associated with an account or not, and provides the ability to separate them if needed. 

## Profiles and segmentation

These features are distinct to the Real-time CDP, B2B Edition as they allow you to build complete customer profiles for your business-to-business needs. This is critical for companies where regulations follow the individual. 

The B2B edition allows all this collected data about the people, companies, attributes, and behaviors, to be segmented into browsable audiences that can be sent to various destinations using connectors.

The system tracks people as individuals rather than their emails. By preserving the distinction of customers who have separate B2B and B2C data, it creates a more sophisticated version of identity than is available in the current market.

This means that when someone changes jobs the system still follows them. The person is still the same entity, they are just linked to a new account. This native functionality offers a great vector for expansion into new accounts as the system follows these people as individuals including all of their attributes and behaviors.

## B2B Specific connectors

Sources and destinations are separate in Adobe Experience Platform. The newly created Marketo Engage Connector streams all the data that can be used to build a segment in Marketo, into AEP. It supports any number of instances of Marketo (which is beneficial to large companies with multiple instances) and pulls into a single IMS ORG where the data is merged.

>[!NOTE]
>
>The Marketo Engage connector is NOT required to use the B2B edition. 

Another benefit of the Marketo Exchange connector is that the average latency for data to stream into Experience Platform is much lower than the current standards for event data, which are conducted in 24-48 hour cycles. Data streamed in from Marketo will occur in under a minute before being pushed to Adobe Experience Platform. Within another minute, the data will be transmitted along the Experience Platform pipeline and become available on individual profiles.

Real-time Customer Profile also supports Experience Events time-to-live. Adobe Experience Platform can retain data for a different lengths of time depending on its' source. The duration that data is retained on Experience Platform is configured by the data set. Marketo source data can be retained for 25 months, and web interaction data for unknown users can be expunged on the same schedule set for Adobe Experience Platform.

This helps customers to manage the size of their unified profile for people and make sure that the data in the system is both relevant and useful. It is important that the pertinent data is kept for the appropriate amount of time to support the common two year-long sales cycles of B2B deals.

There is also a Marketo Engage destination which will stream data out of Marketo or out of AEP and make it available as audiences.  It provides a seamless and quick way to pull information from AEP into Marketo that the connector is streaming. The segment connector enables marketers to push segments created in Adobe Experience Platform to Marketo. In Marketo, these audiences will be available as static lists.

For companies with more than one CRM, the B2B edition provides the option to configure destination connectors to separate instances of Marketo or CRM. If required, you can configure destination connectors to each instance and send audiences to each of the CRM instances independently. 

Any other Experience Platform destinations are available and fully supported by the B2B Edition such as Google, Linkedin, or Facebook.

## Additional Information

The following documentation is recommended to learn more about the specific differences of the B2B Edition from the Real-time CDP, B2C Edition: 

* Getting Started with B2B Edition
* B2B Profile Enhancements
* Access Control for B2B
* Schema Building Enhancements
* New XDM B2B Classes & Field Groups
* Marketo Source connectors
