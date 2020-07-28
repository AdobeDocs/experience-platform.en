---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage labels overview
topic: labels
---

# Data usage labels overview

Adobe Experience Platform [!DNL Data Governance] allows you to apply data usage labels to datasets and fields, categorizing each according to related data usage policies.

This document provides an overview of data usage labels in [!DNL Experience Platform]. Before reading this guide, please see the [Data Governance overview](../home.md) for a more robust introduction to the Data Governance framework.

## Understanding data usage labels

Data usage labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into [!DNL Experience Platform], or as soon as data becomes available for use in [!DNL Platform].

Data usage labels that are applied at the dataset level are propagated to all fields within the dataset. Labels can also be applied directly to individual fields (column headers) in a dataset, without propagation.

[!DNL Platform] provides several "core" data usage labels out-of-the-box, which cover a wide variety of common restrictions applicable to data governance. For more information on these labels and the usage policies they represent, see the guide on [core data usage labels](reference.md).

In addition to the labels provided by Adobe, you can also define your own custom labels for your organization. See the section on [managing labels](#manage-labels) for more information.

## Label inheritance for audience segments

All audience segments created by [Adobe Experience Platform Segmentation Service](../../segmentation/home.md) inherit the usage labels of their corresponding datasets. This allows applications built on top of [!DNL Experience Platform] (such as [!DNL Real-time Customer Data Platform]) to provide automatic data usage policy enforcement when activating segments to destinations.

In addition to inheriting dataset-level labels, segments inherit all field-level labels from their associated datasets by default. Depending on how your [!DNL Platform]-based application consumes segments, you can potentially specify which fields are used, thereby preventing the segment from inheriting labels from excluded fields.

For more information on how automatic enforcement works in Real-time CDP, see the overview on [Data Governance in Real-time CDP](../../rtcdp/privacy/data-governance-overview.md#enforce-data-usage-compliance).

### Inheritance from Adobe Audience Manager Data Export Controls

[!DNL Experience Platform] has the ability to share segments with Adobe Audience Manager. Any Data Export Controls that have been applied to Audience Manager segments are translated to equivalent labels and marketing actions recognized by [!DNL Experience Platform] [!DNL Data Governance].

For a reference on how specific Data Export Controls map to data usage labels in [!DNL Platform], please refer to the [Audience Manager documentation](https://docs.adobe.com/content/help/en/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html#aam-data-export-control-in-aep).

## Managing data usage labels in [!DNL Experience Platform] {#manage-labels}

You can manage data usage labels using [!DNL Experience Platform] APIs or the user interface. Refer to the subsections below for details on each.

### Using the UI

The **[!UICONTROL Policies]** workspace in the [!DNL Experience Platform] UI allows you to view and manage core and custom labels for your organization. The **[!DNL Datasets]** workspace allows you to apply labels to datasets and fields. For more information, refer to the [labels user guide](user-guide.md).

### Using APIs

The `/labels` endpoint in the [Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml) allows you to programmatically manage data usage labels, including creating custom labels. Refer to the [labels endpoint guide](../api/labels.md) for more information.

The [Dataset Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dataset-service.yaml) is used to manage labels for dataset and fields. See the guide on [managing dataset labels](./dataset-api.md) for more information.

## Next steps

This document provided an introduction to data usage labels and their role within the Data Governance framework. Refer to the documentation linked to throughout this guide to lean more about how to manage labels in [!DNL Experience Platform].