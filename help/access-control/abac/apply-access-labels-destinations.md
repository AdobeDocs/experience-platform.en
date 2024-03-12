---
title: Use access labels to manage user access to destination dataflows
description: Learn how to use access labels to manage 
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
role: Developer, Admin, User
---

# Use access labels to manage user access to destination dataflows

As part of the Attribute-based access control functionality in Real-Time CDP, you can now apply access labels to destination dataflows. You can thereby ensure that certain users in your organization get access to some destination dataflows, while other users can access other dataflows.

When you add an access label to a particular destination, only users who have access to a role that is assigned that label will be able to see and edit that destination dataflow. If a destination dataflow is not marked with any labels, it will show for all users belonging to your organization.

Read this page to understand sample use cases, prerequisites before you can apply access labels to destination dataflows, and other important callouts when using this functionality.

## Prerequisites

Note the following prerequisites to complete before you start using this functionality

### Access to the permissions UI



### Create roles, labels, and assign users



### Create destination dataflows

You first need to connect to the desired destination and create a dataflow to export data, before you can apply access labels to the dataflow.

Read the guides on connecting to a destination, activating data to the destination, and select the desired destination from the catalog of available connectors.

## Already available: Apply access labels to other Experience Platform resources

While this release enables you to grant users object-level access to specific destination dataflows, the functionality to grant access control on an object level is already generally available for other resources, such as:

* Datasets
* Audiences

### Use case example

With object-level access control for destinations, limit specific teams of marketers to have access only to their specific destinations. For example if your organization has customer data in several geographical locations, like the United States and the United Kingdom, you can limit a marketing team to view and edit the dataflows for the US location only, and another marketing team to view and edit the dataflows for the UK location.

## Apply access labels to destination dataflows

To apply access labels to a certain dataflow, navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**. 

Select the ellipsis (`...`) in the [!UICONTROL Platform] column and use the ![Edit details control](../assets/ui/workspace/pencil-icon.png)**[!UICONTROL Apply access labels]** control to add new labels and manage the existing labels for the dataflow.

If a destination dataflow is not marked with any labels, it will show for all users. If the dataflow is marked with one or more access labels, it will only show for the users belonging to the role that has the same label or combination of labels.

You can add standard and custom labels 

## Important callouts and items to know

Currently, access labels can only be applied to existing dataflows. This means that someone needs to create the dataflow to the destination before access labels can be applied.

You cannot apply access labels to a destination dataflow if you do not have access to that label yourself. 

Currently, you can add a maximum of x labels to a destination

When adding multiple labels to a destination dataflow, users should be able to view and edit the dataflow must be added to a role with at least the same combination of labels.



## Next steps

You have completed the application of labels to a role, schema fields, and segments. The external agency assigned to these roles are restricted from viewing these labels and their values in the schema, dataset, and profile view. These fields are also restricted from being used in the segment definition when using the Segment Builder.

For more information on attribute-based access control, see the [attribute-based access control overview](./overview.md).

The following video is intended to support your understanding of attribute-based access control, and outlines how to configure roles, resources, and policies.

>[!VIDEO](https://video.tv.adobe.com/v/345641?learn=on)
