---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Audience Manager Data Export Control support in Experience Platform
topic: overview
---

# Adobe Audience Manager Data Export Control support in Experience Platform

In order to enforce data usage compliance in Experience Platform, all applicable datasets and fields must be given appropriate [data usage labels](./labels/overview.md). In addition, [data usage policies](./api/policies.md) must be enabled for specific marketing actions against those labels, as outlined by the Data Usage Labeling and Enforcement (DULE) framework.

Experience Platform has the ability to share segments with Adobe Audience Manager. Any Data Export Controls that have been applied to Audience Manager segments are translated to equivalent labels and marketing actions recognized by Experience Platform Data Governance.

>[!NOTE] For more general information on Data Export Controls, please refer to the [Audience Manager documentation](https://docs.adobe.com/content/help/en/audience-manager/user-guide/features/data-export-controls.html).

This document provides a reference for how specific Audience Manager Data Export Controls map to data usage labels and marketing actions in Platform.

## Data Export Controls to data usage labels

The following table outlines how specific Data Export Controls map to recognized data usage labels:

| Data Access Control | Data usage label |
| --- | --- |
| Cannot be used with PII | C3: Data cannot be combined or otherwise used with directly identifiable information |
| Cannot be used for offsite ad targeting | C5: Data cannot be used for interest-based, cross-site targeting of content or ads |
| Cannot be used for onsite ad targeting | C6: Data cannot be used for on-site ad targeting |
| Cannot be used for onsite personalization | C7: Data cannot be used for on-site targeting of content |

## Data Export Controls to marketing actions

The following table outlines how specific Data Export Controls map to recognized marketing actions:

| Data Export Control | Marketing action |
| --- | --- |
| This destination may enable a combination with personally identifiable information (PII) | COMBINE WITH PII |
| This destination may be used for off-site ad targeting | CROSS SITE TARGETING |
| This destination may be used for on-site ad targeting | ONSITE ADVERTISING |
| This destination may be used for on-site ad personalization | ONSITE PERSONALIZATION |