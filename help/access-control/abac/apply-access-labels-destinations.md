---
title: Use access labels to manage user access to destination dataflows
description: Learn how to use access labels to manage user access to destination dataflows so only a subset of users in your organization get access to specific destination dataflows.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
role: Developer, Admin, User
---

# Use access labels to manage user access to destination dataflows

As part of the Attribute-based access control functionality in Real-Time CDP, you can now apply access labels to destination dataflows. You can thereby ensure that only a subset of users in your organization get access to specific destination dataflows.

When you add an access label to a particular destination, only users who have access to a role that is assigned that label are able to see and edit that destination dataflow. If a destination dataflow is not marked with any labels, it is visible for all users belonging to your organization.

Read this page to understand sample use cases, prerequisites before you can apply access labels to destination dataflows, and other important callouts when using this functionality.

## Prerequisites

Note the following prerequisites to complete before you start using this functionality. To familiarize yourself with Attribute-based access control functionality, Adobe also recommends that you read the following articles:

* [Attribute-based access control overview](/help/access-control/abac/overview.md)
* [Attribute-based access control end-to-end guide](/help/access-control/abac/end-to-end-guide.md)

### Access to the permissions UI

help/access-control/abac/end-to-end-guide.md#permissions

### Create roles, labels, and assign users



### Create destination dataflows

You first need to connect to the desired destination and create a dataflow to export data, before you can apply access labels to the dataflow.

Read the guides on [connecting to a destination](/help/destinations/ui/connect-destination.md), [activating data to the destination](/help/destinations/ui/activation-overview.md), and select the desired destination from the [catalog of available connectors](/help/destinations/catalog/overview.md).

## Already available: Apply access labels to other Experience Platform resources

While this release enables you to grant users object-level access to specific destination dataflows, the functionality to grant access control on an object level is already generally available for other Experience Platform resources, such as:

* Datasets
* Audiences

### Use case example

With object-level access control for destinations, limit specific teams of marketers to have access only to their specific destinations. For example if your organization has customer data in several geographical locations, like the United States and the United Kingdom, you can limit a marketing team to view and edit the dataflows for the US location only, and another marketing team to view and edit the dataflows for the UK location.

## Apply access labels to destination dataflows

To apply access labels to a certain dataflow, navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**. 

Select the ellipsis (`...`) in the [!UICONTROL Name] column and use the ![Edit details control](/help/access-control/images/olac/key-icon.svg) **[!UICONTROL Apply access labels]** control to add new labels and manage the existing labels for the dataflow.

Select the labels that you want to add to the destination dataflow.

If a destination dataflow is not marked with any labels, it will show for all users. If the dataflow is marked with one or more access labels, it will only show for the users belonging to the role that has the same label or combination of labels.

You can add standard and custom labels to destination dataflows. After you add a label to destination dataflows:

* Users who are assigned to roles with access to the same label can view the dataflow with the new label in the UI. They can view and edit the destination dataflow in the user interface or via APIs.

* Users who are *not* assigned to roles with access to the same label cannot view or edit the destination dataflow in the user interface or via APIs.


## Important callouts and items to know

Currently, access labels can only be applied to existing dataflows. This means that someone needs to create the dataflow to the destination before access labels can be applied.

You cannot apply access labels to a destination dataflow if you do not have access to that label yourself. 

When adding multiple labels to a destination dataflow, users who should be able to view and edit the dataflow must be added to a role with at least the same combination of labels. For example, if you apply the labels C1, I2, and another custom label to a destination dataflow, only users added to roles with access to the combination of these three labels are able to view and edit this specific destination dataflow.

![Venn diagram showing how only certain users have access to destinations with multiple labels applied.](/help/access-control/images/olac/multiple-labels-venn.png)

## Next steps

You have completed the application of labels to a role, schema fields, and segments. The external agency assigned to these roles are restricted from viewing these labels and their values in the schema, dataset, and profile view. These fields are also restricted from being used in the segment definition when using the Segment Builder.

For more information on attribute-based access control, see the [attribute-based access control overview](./overview.md).

The following video is intended to support your understanding of attribute-based access control, and outlines how to configure roles, resources, and policies.

>[!VIDEO](https://video.tv.adobe.com/v/345641?learn=on)
