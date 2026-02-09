---
title: Architecture Upgrades to Real-Time CDP B2B Edition
description: Read this document to learn about the comprehensive architecture upgrades to Real-Time CDP B2B Edition.
badgeB2B: label="B2B Edition" type="Informative" url="https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html#rtcdp-editions" newtab=true
exl-id: d958a947-e195-4dd4-a04c-63ad82829728
---
# Architecture upgrades to Real-Time CDP B2B Edition

>[!IMPORTANT]
>
>This document outlines architectural upgrades to Real-Time CDP B2B and B2P Editions. The upgrades will require no actions from most customers. However, there are audiences that cannot be upgraded automatically. Adobe will work directly with you to address these scenarios. Refer to this document for information on how the upgrades will impact existing features of Adobe Experience Platform. If you have any questions, contact your Adobe Account Team.

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

## Upgrades to existing features

The following features have been updated as part of the B2B architectural upgrades.

### Updates to multi-entity audience with B2B attributes and Experience Events

As part of the new architecture upgrade, Experience Event filters can no longer be used within a single multi-entity audience that includes B2B attributes.

To achieve the same audience logic, you can use the segment builder to [add audiences and reference audiences](../segmentation/ui/segment-builder.md#adding-audiences)

For example:

* Create an Experience Event audience
  * Define the behavioral condition separately. For example: "People who visited the pricing page in the last three days."
* Create a multi-entity audience with B2B attributes.
  * From here, you can reference the Experience Event audience as part of this audience's criteria. For example: "People who are a **'Decision Maker'** of any opportunity where the account is in the **'Finance'** industry and member of the people audience who visited the pricing page in the last three days. 

Once the upgrade is complete, any new multi-entity audiences with B2B attributes and Experience Events must be created using the [segment-of-segment](../segmentation/methods/edge-segmentation.md#edge-segmentation-query-types) approach. 

>[!TIP]
>
>A **segment of segments** is any segment definition that contains one or more batch or edge segments. **Note**: if you use a segment of segments, profile disqualification will happen **every 24 hours**.

### Entity resolution and time-precedence merging in B2B audiences

As part of the architecture upgrade, Adobe is introducing entity resolution for Accounts and Opportunities. Entity resolution is based on deterministic ID matching and based on the latest data. Entity resolution job runs daily during batch segmentation, prior to evaluating multi-entity audiences with B2B attributes.

>[!BEGINSHADEBOX]

#### How does entity resolution work?

* **Before**: If a Data Universal Numbering System (DUNS) number was used as an additional identity and account's DUNS number was updated in a source system like CRM, the account ID is linked to both old and new DUNS numbers.
* **After**: If the DUNS number was used as an additional identity and the account's DUNS number was updated in a source system like a CRM, the account ID is only linked to the new DUNS number, thereby reflecting the current state of account more accurately.

>[!ENDSHADEBOX]

With this upgrade, you can now: 

* Use the [!DNL Profile Access] APIs to view the latest merge profiles once the daily entity resolution jobs are complete.
* Utilize the improved accuracy and consistency of your account and opportunity data for segmentation, activation, and analytics.

Read the [[!DNL Profile Access] API](../profile/api/entities.md) for more information.

### Support of merge policies in multi-entity B2B audiences

Multi-entity audiences with B2B attributes now support a single merge policy - the default merge policy that you configure - instead of multiple merge policies.

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

### Deprecation of Segment Job API

Under the new architecture, the "create a segment job" endpoint and flexible audience evaluation are *not supported.

### Account and opportunity profile lookups

You can now retrieve account and opportunity schemas as lookup dimension entities only after they have completed the daily entity resolution process. Newly ingested records will not be available for profile enrichment or segment definitions until the next entity resolution cycle completes (typically every 24 hours).

<!-- ### Deprecation of audience creation via API for B2B entities

Creation of audiences using B2B entities via API is being deprecated. The list of affected B2B entities include:

* Account
* Opportunity
* Account-Person Relation
* Opportunity-Person Relation
* Campaign
* Campaign Member
* Marketing List
* Marketing List Member

Read the [segment definitions endpoint API guide](../segmentation/api/segment-definitions.md) for more information. -->

### Changes to multi-entity audience imports in sandbox tooling

With the architecture upgrades, you will no longer be able to import multi-entity audiences with B2B attributes and Experience Events if a package that included these audiences were published before the upgrade. These audiences will fail to import and cannot be automatically converted to the new architecture. To work around this limitation, you must create a new package with the updated audiences and then import them into their respective target sandboxes using sandbox tooling.

Development sandboxes will be upgraded to the new architecture. Audiences that can be auto-updated will be upgraded; those that cannot will be disabled. Disabled audiences must be re-created after the upgrade.

Read the [sandbox tooling guide](../sandboxes/ui/sandbox-tooling.md) for more information.
