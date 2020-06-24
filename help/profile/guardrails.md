---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Experience Platform guidelines
topic: guide
---

# Experience Platform guardrails for Profile Service

Adobe Experience Platform provides a series of guardrails to help you avoid creating Experience Data Model (XDM) schemas which Profile Service cannot support.

| Area | Guideline | Description|
| --- | --- | --- |
| Profile-enabled datasets | Maximum 20 profile-enabled datasets| A maximum of **20** datasets can be enabled for profile. To enable another dataset for profile, an existing dataset must first be removed/disabled.|
| Multi-entity relationships | Maximum number of multi-entity relationships| A maximum of **5** relationships can be defined between Real-time Customer Profile and other dimension entities. Additional relationship mappings cannot be saved until an existing relationship is removed/disabled. | 
| Multi-entity relationships | Maximum JSON depth for multi-entity relationships| The maximum JSON depth for an ID field used in multi-entity relationships is **4**. This means that in a highly-nested schema, the relationship selector is disabled for fields that are nested more than 4 levels deep. |
| Time series data | | Time-series data is **not** permitted in Profile for non-people entities. |
| Non-people schema relationships | | Non-people schema relationships are **not** permitted. |
| Profile fragments | Recommended maximum size | The recommended maximum size of a profile fragment is **10kB**. Ingesting larger profile fragments will result in degraded performance for those profiles.|
| Profile fragments | Absolute maximum size | The absolute maximum size of a profile fragment is **1MB**. Ingestion will fail when attempting to upload a fragment that is larger than 1MB. |
| Non-person entity | Maximum total size | The maximum total size for a single non-person entity is **200MB**. |
| Datasets per non-person entity | Maximum of 1 dataset |A maximum of **1** dataset can be associated to a non-person entity. |

>[!NOTE] A non-person entity refers to any XDM class that is **not** part of Profile.

<!--
Includes an Enforcement column that is not yet active/available.
| Section | Boundary | Enforcement |
| ------- | -------- | ----------- |
| Profile union schema | A maximum of **20** datasets can contribute to the Profile union schema. | A message stating you've reached the maximum number of datasets appears. You must either disable or clean up other obsolete datasets in order to create a new dataset. |
| Multi-entity relationships | A maximum of **5** multi-entity relationship can be created. | A message stating all available mappings have been used appears when the fifth relationship is mapped. An error message letting you know you have exceeded the number of available mappings appears when attempting to map a sixth relationship. | 
| JSON depth for multi-entity association | The maximum JSON depth is **4**. | When trying to use the relationship selector with a field that is more than four levels deep, an error message appears, stating it is ineligible for multi-entity association. |
| Time series data | Time-series data is **not** permitted in Profile for non-people entities. | A message stating that this data cannot be enabled for Profile because it is of an unsupported type appears. |
| Non-people schema relationships | Non-people schema relationships are **not** permitted. | Relationships between two non-people schemas cannot be created. The relationships checkbox will be disabled. |
| Profile fragment | The recommended maximum size of a profile fragment is **10kB**.<br><br> The absolute maximum size of a profile fragment is **1MB**. | If you upload a fragment that is larger than 10kB, a warning appears, stating that performance may be degraded since the fragment exceeds the recommended maximum working size.<br><br> If you upload a fragment that is larger than 1MB, ingestion will fail, and an alert letting you know that records have failed will be sent. |
| Non-person entity | The maximum total size for a single non-person entity is **200MB**. | If you load an object as a non-person entity that is larger than 200MB, an alert will appear, stating that the entity has exceeded the maximum allowable size and will not be useable for segmentation. |
| Datasets per non-person entity | A maximum of **1** dataset can be associated to a non-person entity. | If you try to create a second dataset that is associated to the same non-person entity, an error appears, stating that only one dataset can be active per non-person entity. |

--->