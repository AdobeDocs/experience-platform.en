---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage labels overview
topic: labels
---

# Data usage labels overview

Data Usage Labeling and Enforcement (DULE) is the core mechanism of Adobe Experience Platform Data Governance. DULE features enable you to apply data usage labels to datasets and fields, categorizing each according to related data usage policies.

This document provides an overview of data usage labels (also known as DULE labels) in [!DNL Experience Platform]. Before reading this guide, please see the [Data Governance overview](../home.md) for a more robust introduction to the DULE framework.

## Understanding data usage labels

Data usage labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into [!DNL Experience Platform], or as soon as data becomes available for use in [!DNL Platform].

Data usage labels that are applied at the dataset level are propagated to all fields within the dataset. Labels can also be applied directly to individual fields (column headers) in a dataset, without propagation.

[!DNL Platform] provides several "core" data usage labels out-of-the-box, which cover a wide variety of common restrictions applicable to data governance. For more information on these labels and the usage policies they represent, see the guide on [core data usage labels](reference.md).

In addition to the labels provided by Adobe, you can also define your own custom labels. For steps on how to do this in the UI, see the [data usage labels user guide](./user-guide.md). For steps on how to perform this using API calls, refer to the [data usage labels API guide](./api.md).

## Label inheritance for audience segments

All audience segments created by [Adobe Experience Platform Segmentation Service](../../segmentation/home.md) inherit the usage labels of their corresponding datasets. This allows applications built on top of [!DNL Experience Platform] (such as [!DNL Real-time Customer Data Platform]) to provide automatic data usage policy enforcement when activating segments to destinations.

In addition to inheriting dataset-level labels, segments inherit all field-level labels from their associated datasets by default. Depending on how your [!DNL Platform]-based application consumes segments, you can potentially specify which fields are used, thereby preventing the segment from inheriting labels from excluded fields.

For more information on how automatic enforcement works in Real-time CDP, see the [Adobe Real-time CDP Data Governance overview](../../rtcdp/privacy/data-governance-overview.md#enforce-data-usage-compliance).

### Inheritance from Adobe Audience Manager Data Export Controls

Experience Platform has the ability to share segments with Adobe Audience Manager. Any Data Export Controls that have been applied to Audience Manager segments are translated to equivalent labels and marketing actions recognized by Experience Platform Data Governance.

For a reference on how specific Data Export Controls map to data usage labels in Platform, please refer to the [Audience Manager documentation](https://docs.adobe.com/content/help/en/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html#aam-data-export-control-in-aep).


## Next steps

Now that you have been introduced data usage labels, you can continue to the read the [user guide](user-guide.md) to learn how to manage labels in the [!DNL Experience Platform] UI. For steps on how to manage labels using APIs, see the [usage labels API guide](./api.md).