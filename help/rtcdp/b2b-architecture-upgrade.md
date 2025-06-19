---
title: B2B Architecture Upgrade
description:
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
---
# B2B Architecture Upgrade

To support the ongoing strategic enhancement of Adobe Experience Platform, the B2B architecture is undergoing a structural upgrade designed to improve system scalability, enable greater architectural flexibility, and accommodate increasingly sophisticated B2B use cases.

## Reasons for the change

To better support complex B2B data models and prepare for future innovations, Adobe is introducing a new relational segmentation engine. This engine is purpose-built to handle queries across linked B2B objects such as Accounts, Opportunities, and custom entities, adding to the existing segmentation engine already in use. The upgrade lays the foundation for more flexible and powerful segmentation capabilities in the future, including support for richer data relationships and custom object modeling.

## Changes

While the segmentation experience will remain familiar. There will be subtle changes in the segment authoring UI:

* When building multi-entity segments, you will now need to split your segment into two.
* The segment builder will reflect this logic to help you preview and manage segment creation.

This change in the back end allows Real-Time CDP to process different parts of the segment using the engine best suited to the data type, thereby ensuring better performance and accuracy.

No action is required from you

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

* **Enhanced Segment Evaluation**: Multi-Entity Person and Account segments with Experience Event conditions are now evaluated using the new relational segmentation engine for improved accuracy.
* **Updated Segment Creation**: New segments of these types must follow a two-step definition process aligned with the updated segmentation model.
* **Expanded Historical Context**: Segments can now leverage the full history of Person-level events, beyond the previous 30-day limit.

### B2B audience evaluation

* **Improved Accuracy**: The new relational engine enhances segment evaluation for complex B2B relationships.
* **Richer Account Segmentation**: Enables use of full Person-level event history, improving targeting across extended B2B buying cycles.
* **Future-Ready Architecture**: Establishes a foundation for more advanced segmentation capabilities.


### Identity resolution and merge process

* **Daily Profile Refresh**: Profile Access APIs return records merged via Entity Resolution, updated once daily.
* **Consistent Data Usage**: Segmentation, activation, and analytics use daily ER-merged Account and Opportunity data, improving consistency with a slight delay.
* **Improved B2B Profiles**: Account and Opportunity records are now resolved through Entity Resolution, enabling more accurate profiles and paving the way for future probabilistic resolution.

### Support of merge policies in multi-entity B2B segments

* **Default Merge Policy**: All B2B Multi-Entity Person segments now use the Default (timestamp-based) merge policy.
* **Potential Segment Variance**: Segments previously using Dataset Precedence may yield different results post-migration.
* **Impact on Workflows**: Changes in segment qualification may affect audience activation, journey orchestration, and campaign targeting.

### Lookup support for B2B classes



### Account and opportunity profile lookups

### Support for multi-entity person segments with experience events conditions

### Segment creation via APIs

### Latency of segmentation results and activation

### Segment migration for development sandboxes

### Sandbox tooling