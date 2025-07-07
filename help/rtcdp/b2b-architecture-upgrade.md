---
title: B2B Architecture Upgrade
description:
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
---
# B2B Architecture Upgrade

>[!IMPORTANT]
>
>This document outlines the upgrades to the architecture of Real-Time CDP B2B Edition. The migration process will be seamless and there are no disruptions expected to your current workflows and integrations. **No action is required from you** at this point. Refer to this document for information on how the upgrades will impact existing features of Adobe Experience Platform. For any questions, contact your Adobe Account Team.

To support the ongoing strategic enhancement of Adobe Experience Platform, the B2B architecture is undergoing a structural upgrade designed to improve system scalability, enable greater architectural flexibility, and accommodate increasingly sophisticated B2B use cases.


To better support complex B2B data models and prepare for future innovations, Adobe is introducing a new relational segmentation engine. This engine is purpose-built to handle queries across linked B2B objects such as Accounts, Opportunities, and custom entities, adding to the existing segmentation engine already in use. The upgrade lays the foundation for more flexible and powerful segmentation capabilities in the future, including support for richer data relationships and custom object modeling.

While the segmentation experience will remain familiar. There will be subtle changes in the segment authoring UI:

* When building multi-entity segments, you will now need to split your segment into two.
* The segment builder will reflect this logic to help you preview and manage segment creation.

This change in the back end allows Real-Time CDP to process different parts of the segment using the engine best suited to the data type, thereby ensuring better performance and accuracy.

## New features

The new B2B architecture expands support for real-world B2B data, enabling you to seamlessly ingest and model complex B2B relationships on a more flexible and scalable platform. The new B2B architecture includes improvements such as:

* **Flexible Data Modeling**: A stronger foundation to support complex, real-world B2B relationships and evolving enterprise schemas.
* **Future-Ready Scalability**: Designed to handle growing data volumes and advanced B2B use cases.
* **Resilient Performance**: Built on modern infrastructure that improves reliability, accelerates performance, and ensures consistent segmentation and activation at scale.
* **Faster, Smarter Segmentation**: Richer profiles and more accurate audience counts enable marketing and sales teams to build precise audiences with greater speed and confidence.
* **Foundation for Innovation**: Establishes the groundwork for upcoming capabilities like custom object support and more robust segmentation features.

### Segment membership for account snapshots in Query Service

With the new B2B architecture, segment membership details will be included for Account entities in snapshot exports, enabling Query Service access to account-level segment status, timestamps, and membership indicators.

### Partial success for batch segments

With the new B2B architecture, Experience Platform will support partial success for batch segmentation. If some segments in a batch fail, the job will no longer be marked as a total failure, instead, successful segments will still be evaluated and activated, while only the failed segments are skipped.

### Accurate audience counts

Audience size estimation for B2B people segments will now be processed at the time of execution of the segment.

## Impacted features

Read the following for details on the features impacted by the B2B architecture upgrade.

### Segment migration

During the platform migration, all existing segments will be replaced in place with no disruption to business operations. While their internal logic will be updated to align with the new relational architecture, segment IDs will remain unchanged—ensuring downstream workflows and integrations continue to function without reconfiguration. For segments involving both Multi-Entity logic and Experience Event conditions (B2B Person or Account segments), the new architecture requires splitting them into two linked segments: one evaluated by the batch engine and the other by the relational engine.

While no action is required, you should validate your critical workflows after migration to ensure expected behavior. Contact your Adobe Account Team for assistance in rebuilding segments for rare cases where automatic migration isn't possible. 

### B2B audience evaluation

The new architecture introduces a relational segmentation engine to support Multi-Entity segments, enabling more accurate and scalable B2B segmentation. While B2B Person segments with Experience Event conditions will continue using the batch engine, Multi-Entity Person and Account segments with such conditions will follow a two-step evaluation: first by the batch engine for Experience Events, then by the relational engine for entity logic. Additionally, Account segments can now access the full history of Person-level events, expanding beyond the previous 30-day limit. 

### Support for Multi-Entity Person Segments with Experience Events condition

With the migration, you can no longer include both Experience Event predicates and Multi-Entity logic within a single B2B Person segment. Attempting to do so in the Segment Builder will trigger a validation error, prompting you to use a segment-of-segments approach instead.

To maintain the same logic:

* Create one segment for Experience Events (people who downloaded a white paper).  
* Create a second segment for Multi-Entity logic that references the first (accounts in CA with open opportunities).  

During migration, existing segments will be automatically converted to this two-part model. If automatic conversion isn't possible, contact your Adobe Account Team for assistance.

<!-- * Experience Events and Multi-Entity logic must now be split into separate segments.  
* The total number of segments will increase to support this model.  
* This two-step approach ensures compatibility with the new architecture while preserving segment intent. -->

### Support for Account Segments with Experience Events conditions

After the migration to the new architecture, combining Person-level Experience Events and Account-level conditions in a single segment will no longer be supported. Instead, you must use a two-step approach:

1. Define a **Person-based segment** with the event condition.
2. Create an **Account-level segment** that references the Person segment.

Additionally, you will no longer be able to build segments that combine Person-level events with Account-level conditions in a single definition. If this approach is attempted, the Segment Builder will return a validation message to guide you to refactor the logic.

### Identity resolution and merge process

Account and Opportunity entities will now be processed through **Entity Resolution**, which runs on a scheduled cadence (typically once daily). This process generates merged records based on the customer's configured default merge policy. These merged records are then used for segmentation, activation, and analytics.

Profile Access APIs will return Account and Opportunity records that have been merged via ER, meaning data is refreshed once per day. This improves consistency across downstream use cases but introduces a delay between data updates and availability. The new ER process enhances accuracy and consistency in B2B profiles and sets the stage for future support of probabilistic resolution.

**Review Data Flow Timing**: You must plan workflows, segmentation, and analysis activities with the daily Entity Resolution schedule in mind. Updates will only be reflected after the next Entity Resolution cycle.

### Support of merge policies in multi-entity B2B segments

After the migration, B2B Multi-Entity Person segments will support only a single merge policy: the **Default Merge Policy** configured by the customer. This means that if a Multi-Entity Person segment references another segment ( one with Experience Event conditions), both will use the same default merge policy.

This change simplifies merge behavior but may affect how profiles qualify for segments. Segments that previously relied on dataset precedence may yield different results, especially if the default policy is timestamp-based. These changes could impact downstream workflows such as audience activation, journey orchestration, and campaign targeting.

To prepare, you can review and test any segments that depend on dataset precedence to understand how audience composition might shift. Additionally, you can reassess qualification criteria for key segments and monitor audience performance post-migration to detect any changes caused by the updated merge logic.

### Lookup support for B2B classes

Currently, you can retrieve detailed records for all entities using the Entities API (`/access/entities`), which supports both GET and POST requests. This allows for direct lookups using known unique identifiers such as email or Account ID across any entity in the system.

After the migration, this functionality will be limited to a smaller set of entities: Person (Profile), Experience Events, Account, and Opportunity. Support for all other entities—including join tables and custom Multi-Entity types—will be removed from the API.

As a result, you will no longer be able to retrieve data from unsupported entities using the Entities API. Any integrations or tools that rely on direct lookups of deprecated entities, such as CampaignMember or Account-Person Relation, will need to be refactored to accommodate this change.

To prepare, you can audit your current API usage to identify any dependencies on entity types that will lose lookup support. This will help ensure continuity and avoid disruptions once the changes take effect.

### Account and Opportunity profile lookups

Currently, Account and Opportunity records ingested into Experience Platform are immediately available as lookup dimension entities. This allows near real-time access to customer profiles for segmentation use cases.

Following the migration to the new relational Multi-Entity model, this behavior will change. Account and Opportunity schemas will only become available as lookup dimension entities after they complete the daily Entity Resolution process. This means newly ingested records will not be usable for profile enrichment or segment definitions until the next resolution cycle finishes—typically every 24 hours.

As a result, real-time access to newly ingested Account and Opportunity data will no longer be possible. Any downstream processes that rely on immediate availability of this data may be affected.

To prepare for this change, it's important to review any use cases that depend on real-time access to Account or Opportunity data. When designing or updating workflows that involve lookup-based segmentation or personalization, plan for up to a 24-hour delay in data availability.

### Latency of segmentation results and activation

After migrating to the new B2B architecture, you may observe changes in how quickly segmentation results appear and audiences activate. In most cases, performance will improve. However, in scenarios involving very small datasets or low segment volumes, results may take slightly longer to process.

Despite these changes, latency remains within Adobe's defined Service Level Targets (SLTs), so no disruption to workflows is expected. Adobe is actively monitoring performance and will notify customers if any deviations from SLTs occur.

The engineering teams continue to evaluate various scenarios. If significant performance shifts are identified that could affect expectations, additional guidance will be provided to ensure customers can adapt accordingly.

### Sandbox tooling changes


Today, you can use sandbox tooling to export and import configuration objects—such as schemas, datasets, and segments—across environments This has made it easier to migrate segment definitions, including PQL segments, between sandboxes.

After the migration to the new architecture, importing previously exported segments from the legacy system will no longer be supported. Segments must be rebuilt using the new architecture, re-exported through sandbox tooling, and then imported into the target environment.

Segments will be automatically migrated where possible. For those that require decomposition, Adobe will work directly with customers to recreate them. However, legacy segment packages created under the previous architecture will not be compatible with the new system.

To prepare, you should audit and identify important segments they wish to preserve across sandboxes. These segments will need to be rebuilt after migration to align with the updated architecture.
