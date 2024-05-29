---
title: Use access labels to manage user access to destination dataflows
description: Learn how to use access labels to manage user access to destination dataflows so only a subset of users in your organization get access to specific destination dataflows.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
role: Developer, Admin, User
exl-id: 85944720-8551-491c-8991-dd9668beb0ca
---
# Use access labels to manage user access to destination dataflows

As part of the [!UICONTROL Attribute-based access control] functionality in Real-Time CDP, you can now apply access labels to destination dataflows. You can thereby ensure that only a subset of users in your organization get access to specific destination dataflows.

When you add an access label to a particular destination, only users who have access to a role that is assigned that label are able to see and edit that destination dataflow. If a destination dataflow is not marked with any labels, it is visible to all users belonging to your organization.

Read this page to understand sample use cases, prerequisites before you can apply access labels to destination dataflows, and other important callouts when using this functionality.

## Prerequisites {#prerequisites}

Note the following prerequisites to complete before you start using this functionality. To familiarize yourself with [!UICONTROL Attribute-based access control] functionality, Adobe also recommends that you read the following articles:

* [Attribute-based access control overview](/help/access-control/abac/overview.md)
* [Attribute-based access control end-to-end guide](/help/access-control/abac/end-to-end-guide.md)

### Access to the permissions UI {#access-permissions-ui}

[!UICONTROL Permissions] is the area of Experience Cloud where administrators can define user roles and policies to manage permissions for features and objects within a product application. Read the [permissions section](/help/access-control/abac/end-to-end-guide.md#permissions) to get started.

### Create roles, labels, and assign users {#create-roles-labels-assign-users}

After getting access to the [!UICONTROL permissions] UI, you or a member of your team must set up roles and add the required labels to those roles. Finally, the users who should access resources labeled with the specific labels must be added to the role. Consult the following documentation sections:

* [Create a new role](/help/access-control/abac/ui/roles.md)
* [Add labels to a role](/help/access-control/abac/end-to-end-guide.md#label-roles)
* [Add users to a role](/help/access-control/ui/users.md)

### Create destination dataflows {#create-dataflow}

You first need to connect to the desired destination and create a dataflow to export data, before you can apply access labels to the dataflow.

Read the guides on [connecting to a destination](/help/destinations/ui/connect-destination.md) and [activating data to the destination](/help/destinations/ui/activation-overview.md). Then, select the desired destination from the [catalog of available connectors](/help/destinations/catalog/overview.md).

## Already available: Apply access labels to other Experience Platform resources {#apply-labels-other-resources}

While this release enables you to grant users object-level access to specific destination dataflows, the functionality to grant access control on an object level is already generally available for other Experience Platform resources, such as [audiences](/help/access-control/abac/end-to-end-guide.md#apply-labels-to-segments).

## Use case example {#use-case-example}

With object-level access control for destinations, limit specific teams of marketers to get access to their specific destinations only. For example, if your organization has customer data in several geographical locations, like the United States and the United Kingdom, you can limit a marketing team to view and edit the dataflows for the US location only, and another marketing team to view and edit the dataflows for the UK location.

## Apply access labels to destination dataflows {#apply-labels-to-destination-dataflow}

To apply access labels to a specific dataflow: 

1. Navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]** and locate the destination dataflow that you are looking to limit users' access to. 
1. Select the ellipsis (`...`) in the [!UICONTROL Name] column and use the ![Edit details control](/help/access-control/images/olac/key-icon.svg) **[!UICONTROL Apply access labels]** control to add new labels and manage the existing labels for the dataflow.
  ![Select Apply access labels in Browse view of destinations workspace.](/help/access-control/images/olac/apply-access-labels.png)
1. Select the labels that you want to add to the destination dataflow and select **[!UICONTROL Save]**.
  ![Select the access labels in that should apply to the destination dataflow.](/help/access-control/images/olac/view-access-labels.png)
1. Notice how the dataflow now has an access label displayed in the UI.
  ![View of several destination dataflows with the selected dataflow how displaying an access label.](/help/access-control/images/olac/dataflow-with-access-label.png)

If a destination dataflow is not marked with any labels, it will show for all users. If the dataflow is marked with one or more access labels, it will only show for users belonging to a role that has the same label or combination of labels.

You can add standard and custom labels to destination dataflows. After you add a label to destination dataflows:

* Users who are assigned to roles with access to the same label can view the dataflow with the new label in the UI. They can view and edit the destination dataflow in the user interface or via APIs.

* Users who are *not* assigned to roles with access to the same label do not have access to the destination dataflow to view or edit it in the user interface or via APIs.

## Important callouts and items to know {#important-callouts}

Currently, access labels can only be applied to existing dataflows. This means that someone needs to create the dataflow to the destination before access labels can be applied.

You cannot apply an access label to a destination dataflow if you do not have access to that label. 

When adding multiple labels to a destination dataflow, users who should be able to view and edit the dataflow must be added to a role with at least the same combination of labels. For example, if you apply the labels C1, I2, and another custom label to a destination dataflow, only users added to roles with access to the combination of these three labels are able to view and edit this specific destination dataflow.

![Venn diagram showing how only certain users have access to destinations with multiple labels applied.](/help/access-control/images/olac/multiple-labels-venn.png)

## Next steps {#next-steps}

By following the steps in this document, you now know how to apply access labels to destination dataflows so that only a subset of users in your organization get access to specific destination dataflows.

Next, you can read more about other functionality supported by [!UICONTROL Attribute-based access control] when activating data to destinations. For example, you can limit users' access to [view and activate specific fields only](/help/access-control/abac/overview.md#destinations).
