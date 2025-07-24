---
title: Architecture Upgrades to Real-Time CDP B2B Edition
description: Read this document to learn about the comprehensive architecture upgrades to Real-Time CDP B2B Edition.
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
hide: true
hidefromtoc: true
exl-id: d958a947-e195-4dd4-a04c-63ad82829728
---
# Architecture upgrades to Real-Time CDP B2B Edition

>[!IMPORTANT]
>
>This document outlines architectural upgrades to Real-Time CDP B2B and B2P Editions. **No action is required from you** at this point. Refer to this document for information on how the upgrades will impact existing features of Adobe Experience Platform. If you have any questions, contact your Adobe Account Team.

Adobe has redesigned the Real-Time CDP B2B and B2P Editions to enhance scalability, performance, and reliability, while also supporting more advanced B2B use cases. To ensure all customers benefit from these improvements, Adobe will upgrade all existing B2B and B2P customers to the new architecture.

Use the enhanced architecture for the following benefits:

* **Scalability of data ingestion**: Improved support for high-cardinality B2B relationships, such as accounts connected to thousands of people. 
* **Performant and reliable audience evaluation**: Faster and more resilient segmentation for complex B2B audiences.  
* **entity resolution**: Enhanced identity resolution for B2B entities, improved data quality, and reduced duplication to enable more accurate segmentation and aggregation.  

## New features

Read the following for key enhancements included in the architectural upgrade.

### Account snapshots for audience membership

With the new B2B architecture, audience membership details are now included for account entities in snapshot exports. This feature allows you to access account-level audience status, timestamps, and membership indicators.

With this upgrade, you can now:

* Enable marketing and operations teams to directly validated account audience membership.
* Achieve feature parity between your profile (person) and account segmentation models, ensuring consistent experience across entities.

Read the documentation on [account audiences](../segmentation/types/account-audiences.md) for more information.

### Audience counts for audiences that include B2B entities

Audience size estimates for audiences with B2B entities are now calculated with exact precision. These estimates are available during preview and provide more accurate and reliable insights for audiences that involve complex B2B relationships. 

With this upgrade, you can now: 

* Use insights from precise audience size estimates to improve planning and decision-making during the audience creation process. 
* Confidently design complex B2B audiences, with knowledge of more accurate audience estimation.
* Allow for smarter campaign planning, more precise targeting, and better resource allocation.

Read the documentation on [account audiences](../segmentation/types/account-audiences.md) for more information.

### Full lookback for person-level events in account audiences

Account audiences can now leverage the full history of person-level events, expanding beyond the previous 30-day lookback window.

With this upgrade, you can now: 

* Create more comprehensive audiences based on the full history of associated person-level events.
* Enable richer and more accurate audience definitions by leveraging long-term behavioral data.
* Identify high-value accounts based on deeper engagement patterns over time.
* Support use cases that require insights from historical actions, such as those involving long sale cycles or delayed buying signals.

Read the documentation on [account audiences](../segmentation/types/account-audiences.md) for more information.

## Upgrades to existing features

The following features have been updated as part of the B2B architectural upgrades.

### Updates to multi-entity audience with B2B attributes and Experience Events

As part of the new architecture upgrade, Experience Event filters can no longer be used within a single multi-entity audience that includes B2B attributes.

To achieve the same audience logic, use the segment-of-segment approach:

1. Create an Experience Event audience: Define the behavioral condition separately. For example: "People who visited the pricing page in the last three days."
2. Create a multi-entity audience with B2B attributes: Reference the Experience Event audience as part of this audience's criteria. For example: "People who are a **'Decision Maker'** of any opportunity where the account is in the **'Finance'** industry and member of the people audience who visited the pricing page in the last three days.  

Once the upgrade is complete, any new multi-entity audiences with B2B attributes and Experience Events must be created using the segment-of-segment approach. Additionally, you must validate audience membership to ensure expected behavior.

### Entity resolution and time-precedence merging in B2B audiences

As part of the architecture upgrade, Adobe has introduced entity resolution for accounts and opportunities, which runs daily. This enhancement enables Experience Platform to identify and consolidate multiple records that represent the same real-world entity, thereby improving data consistency and enables more accurate audience segmentation.

With this upgrade, you can now: 

* Use the [!DNL Profile Access] APIs to view the latest merge profiles once the daily entity resolution jobs are complete.
* Utilize the improved accuracy and consistency of your account and opportunity data for segmentation, activation, and analytics.

Read the [[!DNL Profile Access] API](../profile/api/entities.md) for more information.

### Support of merge policies in multi-entity B2B audiences

Multi-entity audiences with B2B attributes now support a single merge policy - the default merge policy that you configure - instead of multiple merge policies.

Audiences that previously relied on a non-default merge policy may produce different results. To understand the potential changes in audience composition, review and test any of your audiences that rely on a non-default merge policy. Additionally, monitor activation results to detect any shifts in audience composition due to the merge policy change. 

Read the [segmentation use case guide for Real-Time CDP B2B Edition](./segmentation/b2b.md) for more information.

### Deprecation of B2B entity lookup and delete in the [!DNL Profile Access] API

The following lookup functionalities for B2B entities using the [!DNL Profile Access] API are being deprecated:

* Account-Person Relation  
* Opportunity-Person Relation  
* Campaign  
* Campaign Member  
* Marketing List  
* Marketing List Members  

Delete requests for the following B2B entities using the [!DNL Profile Access] API are being deprecated:

* Account  
* Account-Person Relation  
* Opportunity  
* Opportunity-Person Relation  
* Campaign  
* Campaign Member  
* Marketing List  
* Marketing List Members

Read the [[!DNL Profile Access] API](../profile/api/entities.md) for more information.

### Account and opportunity profile lookups

You can now retrieve account and opportunity schemas as lookup dimension entities only after they have completed the daily entity resolution process. Newly ingested records will not be available for profile enrichment or segment definitions until the next entity resolution cycle completes (typically every 24 hours).

You are recommended to review any use cases that require real-time access to account and opportunity data. Additionally, you are recommended to plan for up to a 24-hour latency period when designing or updating workflows that depend on lookup-based segmentation or personalization with account and opportunity entities.

### Deprecation of audience creation via API for B2B entities

Creation of audiences using B2B entities via API is being deprecated. The list of affected B2B entities include:

* Account
* Opportunity
* Account-Person Relation
* Opportunity-Person Relation
* Campaign
* Campaign Member
* Marketing List
* Marketing List Member

Read the [segment definitions endpoint API guide](../segmentation/api/segment-definitions.md) for more information.

### Changes to multi-entity audience imports in sandbox tooling

With the architecture upgrades, you will no longer be able to import multi-entity audiences with B2B attributes and Experience Events if they were exported before the upgrade. These audiences will fail to import and cannot be automatically converted to the new architecture. To work around this limitation, you must re-export these audiences and then import them into their respective target sandboxes using sandbox tooling.

Read the [sandbox tooling guide](../sandboxes/ui/sandbox-tooling.md) for more information.
