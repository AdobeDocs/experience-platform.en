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

| Feature | Details |
| --- | --- |
| **Segment migration** | <ul><li>Enhanced Segment Evaluation: Multi-Entity Person and Account segments with Experience Event conditions are now evaluated using the new relational segmentation engine for improved accuracy.</li><li>Updated Segment Creation: New segments of these types must follow a two-step definition process aligned with the updated segmentation model.</li><li>Expanded Historical Context: Segments can now leverage the full history of Person-level events, beyond the previous 30-day limit.</li></ul> |
| **B2B audience evaluation** | <ul><li>Improved Accuracy: The new relational engine enhances segment evaluation for complex B2B relationships.</li><li>Richer Account Segmentation: Enables use of full Person-level event history, improving targeting across extended B2B buying cycles.</li><li>Future-Ready Architecture: Establishes a foundation for more advanced segmentation capabilities.</li></ul> |
| **Identity resolution and merge process** | <ul><li>Daily Profile Refresh: Profile Access APIs return records merged via Entity Resolution, updated once daily.</li><li>Consistent Data Usage: Segmentation, activation, and analytics use daily ER-merged Account and Opportunity data, improving consistency with a slight delay.</li><li>Improved B2B Profiles: Account and Opportunity records are now resolved through Entity Resolution, enabling more accurate profiles and paving the way for future probabilistic resolution.</li></ul> |
| **Support of merge policies in multi-entity B2B segments** | <ul><li>Default Merge Policy: All B2B Multi-Entity Person segments now use the Default (timestamp-based) merge policy.</li><li>Potential Segment Variance: Segments previously using Dataset Precedence may yield different results post-migration.</li><li>Impact on Workflows: Changes in segment qualification may affect audience activation, journey orchestration, and campaign targeting.</li></ul> |
| **Lookup support for B2B classes** | <ul><li>Changes to the Entities API: Developers can no longer retrieve data from unsupported entities via the Entities API.</li><li>Integrations or tools that rely on direct lookups of deprecated entities, such as CampaignMember, Account-Person Relation, will need to be refactored.</li></ul> |
| **Support for audience creation using linked B2B entities from experience events** | <ul><li>Developers are no longer able to create audiences using B2B entities that are linked from experience events.</li></ul> |
| **Account and opportunity profile lookups** | <ul><li>Newly ingested Account and Opportunity data are no longer available immediately for lookups.</li><li>Downstream processes that depend on the immediate availability of this data may be impacted.</li></ul> |
| **Support for multi-entity person segments with experience events conditions** | <ul><li>Segment Model Update: Experience Events predicates and Multi-Entity logic can no longer coexist in a single segment. This change increases the total number of segments due to the new segment-of-segments model.</li><li>Two-Step Segment Definition: To replicate previous logic, define two separate segments in the Segment Builder:</li><li>Event-Only Segment: Create a B2B Person segment using Experience Events (people who downloaded a white paper in the last 30 days).</li><li>Multi-Entity Segment: Build a separate B2B Person segment with Multi-Entity logic that references the event segment (accounts in CA with open opportunities).</li><li>Preserved Outcomes: This two-step approach ensures equivalent segment definitions under the new architecture.</li></ul> |
| **Support for account segments with experience event conditions** | <ul><li>Separation of Conditions: Segments can no longer combine Person-level events with Account-level conditions in a single definition.</li><li>Builder Validation: The segment builder will display a validation message if this pattern is used, prompting users to refactor.</li><li>Two-Segment Approach: Users must now create separate segments—one for Person-level criteria and another for Account-level logic referencing the first.</li><li>Extended Event History: Segments can now access the full event history based on the customer's configured retention period, not just the past 30 days.</li></ul> |
| **Segment creation via APIs** | <ul><li>To improve security and enforce best practices, Adobe will update these APIs to accept only service tokens. User tokens will no longer be supported. This means customers cannot interact with these APIs either directly.</li><li>Any existing processes, scripts, or tools that rely on these APIs will no longer work once the change takes effect.</li><li>This change ensures more secure and scalable API usage aligned with enterprise-grade automation and governance standards.</li></ul> |
| **Sandbox tooling** | <ul><li>Importing previously exported segments from the legacy system will no longer be supported.</li><li>Segments must be rebuilt using the new architecture, re-exported using Sandbox tooling, and then imported into your target environment for use.</li></ul> |

{style="table-layout:auto"}