---
keywords: Experience Platform;home;popular topics;Policy enforcement;Automatic enforcement;API-based enforcement;data governance
solution: Experience Platform
title: Policy enforcement overview
topic: enforcement
description: This document covers how data usage policies are automatically enforced when activating segments to destinations in Experience Platform.
---

# Automatic policy enforcement

Once data is labeled and usage policies are defined, you can enforce data usage compliance with policies. When activating audience segments to destinations, Adobe Experience Platform automatically enforces usage policies should any violations occur.

## Prerequisites

This guide requires a working understanding of the Platform services involved in automatic enforcement. Please refer to the following documentation to learn more before continuing with this guide:

* [Adobe Experience Platform Data Governance](../home.md): The framework by which Platform enforces data usage compliance through the use of labels and policies.
* [Real-time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Adobe Experience Platform Segmentation Service](../../segmentation/home.md): The segmentation engine within [!DNL Platform] used to create audience segments from your customer profiles based on customer behaviors and attributes.
* [Destinations](../../destinations/home.md): Destinations are pre-built integrations with commonly used applications that allow for the seamless activation of data from Platform for cross-channel marketing campaigns, email campaigns, targeted advertising, and moreY.

## Enforcement flow {#flow}

The following diagram illustrates how policy enforcement is integrated into the data flow of segment activation:

![](../images/enforcement/enforcement-flow.png)

When a segment is first activated, [!DNL Policy Service] checks for policy violations based on the following factors:

* The data usage labels applied to fields and datasets within the segment to be activated.
* The marketing purpose of the destination. 

>[!NOTE]
>
>If there are data usage labels that have only been applied to certain fields within a dataset (rather than the entire dataset), enforcement of those field-level labels on activation only occurs under the following conditions:
>
>* The fields are used in the segment definition.
>* The fields are configured as projected attributes for the target destination.

## Data lineage {#lineage}

Data lineage plays a key role in how policies are enforced in Platform. In general terms, data lineage refers to the origin of a set of data, and what happens to it (or where it moves) over time.

In the context of [!DNL Data Governance], lineage enables data usage labels to propagate from datasets to downstream services that consume their data, such as Real-time Customer Profile and destinations. This allows policies to be evaluated and enforced at several key points in the data's journey through Platform, and provides context to data consumers as to why a policy violation occurred.

In Experience Platform, policy enforcement is concerned with the following lineage:

1. Data is ingested into Platform and stored in **datasets**.
1. Customer profiles are identified and constructed from those datasets by merging data fragments according to the **merge policy**.
1. Groups of profiles are divided into **segments** based on common attributes.
1. Segments are activated to downstream **destinations**.

Each stage in the above timeline represents an entity that may contribute to a policy being violated, as outlined in the table below:

| Data lineage stage | Role in policy enforcement |
| --- | --- |
| Dataset | Datasets contain data usage labels (applied at the dataset or field level) that define which use cases the entire dataset or specific fields can be used for. Policy violations will occur if a dataset or field containing certain labels is used for a purpose that a policy restricts. |
| Merge policy | Merge policies are the rules that Platform uses to determine how data will be prioritized when merging together fragments from multiple datasets. Policy violations will occur if your merge policies are configured so that datasets with restricted labels are activated to a destination. See the guide on [merge policies](../../profile/ui/merge-policies.md) for more information. |
| Segment | Segment rules define which attributes should be included from customer profiles. Depending on which fields a segment definition includes, the segment will inherit any applied usage labels for those fields. Policy violations will occur if you activate a segment whose inherited labels are restricted by the target destination's applicable policies, based on its marketing use case. |
| Destination | When setting up a destination, a marketing action (sometimes called a marketing use case) can be defined. This use case correlates to a marketing action as defined in a data usage policy. In other words, the marketing use case you define for a destination determines which data usage policies are applicable to that destination. Policy violations will occur if you activate a segment whose usage labels are restricted by the target destination's applicable policies. |

When policy violations occur, the resulting messages that appear in the UI provide useful tools for exploring the violation's contributing data lineage to help resolve the issue. More details are provided in the next section.

## Policy violation messages {#enforcement}

If a policy violation occurs from attempting to activate a segment (or [making edits to an already activated segment](#policy-enforcement-for-activated-segments)) the action is prevented and a popover appears indicating that one or more policies have been violated. Once a violation has triggered, the **[!UICONTROL Save]** button is disabled for the entity you are modifying until the appropriate components are updated to comply with data usage policies.

Select a policy violation in the popover's left column to display details for that violation.

![](../images/enforcement/violation-policy-select.png)

The violation message provides a summary of the policy that was violated, including the conditions the policy is configured to check for, the specific action that triggered the violation, and a list of possible resolutions for the issue.

![](../images/enforcement/violation-summary.png)

A data lineage graph is displayed below the violation summary, allowing you to visualize which datasets, merge policies, segments, and destinations were involved in the policy violation. The entity that you are currently changing is highlighted in the graph, indicating which point in the flow is causing the violation to occur. You can select an entity name within the graph to open the details page for the entity in question.

![](../images/enforcement/data-lineage.png)

You can also use the **[!UICONTROL Filter]** icon (![](../images/enforcement/filter.png)) to filter the displayed entities by category. At least two categories must be selected in order for data to be displayed.

![](../images/enforcement/lineage-filter.png)

Select **[!UICONTROL List view]** to display the data lineage as a list. To switch back to the visual graph, select **[!UICONTROL Path view]**.

![](../images/enforcement/list-view.png)

## Policy enforcement for activated segments {#policy-enforcement-for-activated-segments}

Policy enforcement still applies to segments after they have been activated, restricting any changes to a segment or its destination that would result in a policy violation. Due to how [data lineage](#lineage) works in policy enforcement, any of the following actions can potentially trigger a violation:

* Updating data usage labels
* Changing datasets for a segment
* Changing segment predicates
* Changing destination configurations

If any of the above actions triggers a violation, that action is prevented from being saved and a policy violation message is displayed, ensuring that your activated segments continue to comply with data usage policies when being modified.

## Next steps

This document covered how automatic policy enforcement works in Experience Platform. For steps on how to programmatically integrate policy enforcement into your applications using API calls, see the guide on [API-based enforcement](./api-enforcement.md).