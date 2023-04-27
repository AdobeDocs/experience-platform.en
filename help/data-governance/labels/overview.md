---
keywords: Experience Platform;home;popular topics;data governance;data usage label api;policy service api;data usage labels overview
solution: Experience Platform
title: Data Usage Labels Overview
description: Learn how data usage labels are used to help enforce data governance compliance in Adobe Experience Platform.
exl-id: 4f113000-b9a1-4dfb-9502-6a5d08f0b26f
---
# Data usage labels overview {#overview}

>[!CONTEXTUALHELP]
>id="platform_privacyConsole_dataUsageLabels_description"
>title="Control access to sensitive and protected data"
>abstract="<h2>Description</h2><p>Control access to specific data attributes and/or segments, allowing you to design flexible workflows for the various personas and teams operating Experience Platform use cases.</p>"

Adobe Experience Platform allows you to apply data usage labels to datasets and fields, categorizing each according to related [data governance policies](../policies/overview.md) and [access control policies](../../access-control/abac/ui/policies.md).

This document provides an overview of data usage labels in [!DNL Experience Platform].

## Understanding data usage labels

Data usage labels allow you to categorize datasets and fields according to governance policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into [!DNL Experience Platform], or as soon as data becomes available for use in [!DNL Platform].

Data usage labels that are applied at the dataset level are propagated to all fields within the dataset. Labels can also be applied directly to individual fields (column headers) in a dataset, without propagation.

[!DNL Platform] provides several "core" data usage labels out-of-the-box, which cover a wide variety of common restrictions applicable to data governance. For more information on these labels and the governance policies they represent, see the guide on [core data usage labels](reference.md).

In addition to the labels provided by Adobe, you can also define your own custom labels for your organization. See the section on [managing labels](#manage-labels) for more information.

## Label inheritance for audience segments

All audience segments created by [Adobe Experience Platform Segmentation Service](../../segmentation/home.md) inherit the usage labels of their corresponding datasets. This allows Experience Platform to provide automatic policy enforcement when activating segments to destinations.

In addition to inheriting dataset-level labels, segments inherit all field-level labels from their associated datasets by default. Therefore, you can more easily identify which attributes should be excluded from your segments and prevent them from inheriting labels from excluded fields.

For more information on how automatic enforcement works in Platform, see the overview on [automatic policy enforcement](../enforcement/auto-enforcement.md).

### Inheritance from Adobe Audience Manager Data Export Controls

[!DNL Experience Platform] has the ability to share segments with Adobe Audience Manager. Any Data Export Controls that have been applied to Audience Manager segments are translated to equivalent labels and marketing actions recognized by [!DNL Experience Platform] Data Governance.

For a reference on how specific Data Export Controls map to data usage labels in [!DNL Platform], please refer to the [Audience Manager documentation](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html#aam-data-export-control-in-aep).

## Managing data usage labels in [!DNL Experience Platform] {#manage-labels}

>[!CONTEXTUALHELP]
>id="platform_privacyConsole_dataUsageLabels_instructions"
>title="Instructions"
>abstract="<ul><li>Label XDM Fields and Segments to classify the fields and or segments that you want to restrict access to.</li><li>Label Roles, adding labels to a role enables you to define the labels members of this role should have restrictions on.</li><li>Create policies, a policy creates a relationship between the labels on labeled objects such as XDM fields and Segments and the labels on roles. If the labels match, then either a permit or a restrict access can be defined.</li></ul>"

You can manage data usage labels using [!DNL Experience Platform] APIs or the user interface. Refer to the subsections below for details on each.

### Using the UI

The **[!UICONTROL Policies]** workspace in the [!DNL Experience Platform] UI allows you to view and manage core and custom labels for your organization. You can use the **[!UICONTROL Schemas]** workspace to [apply labels to your Experience Data Model (XDM) schemas](../../xdm/tutorials/labels.md), or you can use the **[!DNL Datasets]** workspace to [apply labels to datasets](./user-guide.md) instead.

>[!NOTE]
>
>Applying labels at the dataset level is only supported for data governance use cases. If you are trying to create access policies for the data, you must apply labels to the schema that the dataset is based on. See the overview on [attribute-based access control](../../access-control/abac/overview.md) for more information.

### Using APIs

The `/labels` endpoint in the [Policy Service API](https://www.adobe.io/experience-platform-apis/references/policy-service/) allows you to programmatically manage data usage labels, including creating custom labels. Refer to the [labels endpoint guide](../api/labels.md) for more information.

The [Dataset Service API](https://www.adobe.io/experience-platform-apis/references/dataset-service/) is used to manage labels for dataset and fields. See the guide on [managing dataset labels](./dataset-api.md) for more information.

>[!NOTE]
>
>Applying labels at the dataset level is only supported for data governance use cases. If you are trying to create access policies for the data, you must [apply labels to the schema](../../xdm/tutorials/labels.md) that the dataset is based on. See the overview on [attribute-based access control](../../access-control/abac/overview.md) for more information.

## Next steps

This document provided an introduction to data usage labels and their role within the Data Governance framework. Refer to the documentation linked to throughout this guide to lean more about how to manage labels in [!DNL Experience Platform].
