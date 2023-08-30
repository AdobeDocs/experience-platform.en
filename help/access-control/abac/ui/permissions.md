---
keywords: Experience Platform;home;popular topics;access control;attribute-based access control;ABAC
title: Attribute-based Access Control Manage Role Permissions
description: This document provides information on configuring permissions for a role through the Permissions interface in Adobe Experience Cloud
exl-id: 8acd2bb6-eef8-4b23-8fd8-3566c7508fe7
---
# Manage permissions for a role

>[!IMPORTANT]
>
>Access control uses user ID (an internal unique id assigned to a user) for granting permissions. When an organization is migrated from Adobe ID to Business ID, all permissions set for its users will be lost because the user ID changes and access control will use the newly generated user ID. If your organization is migrated to Business ID, please contact your Adobe representative to migrate your user ID from Adobe ID to Business ID.

Permissions is the area of Experience Cloud where administrators can define user roles and access policies to manage access permissions for features and objects within a product application.

Through Permissions, you can create and manage roles, as well as assign the desired resource permissions for these roles. Permissions also allow you to manage the labels, sandboxes, and users associated with a specific role.

Immediately after [creating a new role](#create-a-new-role), you are returned to the **[!UICONTROL Roles]** tab. If you are editing permissions for an existing role, select the role from the **[!UICONTROL Roles]** tab. Alternatively, use the filter option to filter the results to find a role.

## Filter roles

Select the funnel icon (![Filter icon](../../images/icon.png)) to display a list of filter controls to help narrow results.

![flac-filters](../../images/flac-ui/flac-filters.png)

The following filters are available for roles in the UI:

| Filter | Description |
| --- | --- |
| [!UICONTROL Created between] | Select a start date and/or an end date to define a date range to filter results by. |
| [!UICONTROL Created by] | Filter by role creator by selecting a user from the dropdown. |
| [!UICONTROL Modified between] | Select a start date and/or an end date to define a date range to filter results by.  |
| [!UICONTROL Modified by] | Filter by role modifier by selecting a user from the dropdown. |

To remove a filter, select the "X" on the pill icon for the filter in question, or select **[!UICONTROL Clear all]** to remove all filters.

![flac-clear-filters](../../images/flac-ui/flac-clear-filters.png)

## Role details

Select the role from the **[!UICONTROL Roles]** tab, which will open the role's details page.

![flac-details](../../images/flac-ui/flac-details.png)

The details tab provides an overview of the role. The overview displays the role name, role description, the name of the user who created and modified the role, when the role was created and modified, and the permissions attached to the role. The role name, and role description can be modified, if required.

## Manage labels for a role

Select the **[!UICONTROL Labels]** tab to open the roles labels page, then select **[!UICONTROL Add labels]** to assign labels to the role.

![flac-labels](../../images/flac-ui/flac-labels.png)

Labels are listed on this page. The list displays the label name, friendly name, category, and its description.

Select the labels from the list you would like to add to the role, then select **[!UICONTROL Save]**

![flac-add-labels](../../images/flac-ui/flac-add-labels.png)

Added labels appear under **[!UICONTROL Labels]** tab.

![flac-added-labels](../../images/flac-ui/flac-added-labels.png)

To remove a label from a role, select the **X** icon next to the labels's name.

![flac-delete-labels](../../images/flac-ui/flac-delete-labels.png)

## Managing sandboxes for role

Select the **[!UICONTROL Sandboxes]** tab to open the roles sandboxes page. Here you can see a list of sandboxes that were added to the role.

![flac-sandboxes](../../images/flac-ui/flac-sandboxes.png)

To add more sandboxes to a role select **[!UICONTROL Edit]**.

![flac-add-sandboxes](../../images/flac-ui/flac-add-sandboxes.png)

The next screen prompts you to choose which resource permissions that exist in sandboxes to include in the role using the dropdown. When finished, select **[!UICONTROL Save and exit]**.

![flac-add-role-permission](../../images/flac-ui/flac-add-role-permission.png)

## Managing users for role

Select the **[!UICONTROL Users]** tab to open the roles users page, then select **[!UICONTROL Add Users]** to assign users to the role.

![flac-users](../../images/flac-ui/flac-users.png)

Select the users from the list you would like to add to the role. Alternatively, use the search bar to search for the user by entering their name or email address, then select **[!UICONTROL Save]**

![flac-add-users](../../images/flac-ui/flac-add-users.png)

Added users appear under **[!UICONTROL Users]** tab.

![flac-added-users](../../images/flac-ui/flac-added-users.png)

To remove a user from a role, select the **X** icon next to the users name.

![flac-remove-users](../../images/flac-ui/flac-remove-users.png)

## Managing API credentials for role {#manage-api-credentials-for-role}

Select the **[!UICONTROL API credentials]** tab to open the roles API credentials page, then select **[!UICONTROL Add API credentials]** to assign API credentials to the role.

![flac-api-credentials](../../images/flac-ui/flac-api-credentials.png)

Select the API credentials from the list you would like to add to the role, then select **[!UICONTROL Save]**

![flac-add-api-credentials](../../images/flac-ui/flac-add-api-credentials.png)

Added API credentials appears under **[!UICONTROL API credentials]** tab.

![flac-added-api-credentials](../../images/flac-ui/flac-added-api-credentials.png)

To remove a API credentials from a role, select the **X** icon next to the API credential name. 

![flac-remove-api-credentials](../../images/flac-ui/flac-remove-api-credentials.png)

The **[!UICONTROL Remove API credentials]** dialogue appears, prompting you to confirm deletion. 

![flac-confirm-api-credentials-delete](../../images/flac-ui/flac-confirm-api-credentials-delete.png)

You will be returned to the **[!UICONTROL API credentials]** tab.

## Managing user groups for roles

User groups are multiple users that have been grouped together and have the access to execute the same functions.

Select the **[!UICONTROL User groups]** tab to open the roles user groups page, then select **[!UICONTROL Add Groups]** to assign user groups to the role.

![flac-user-groups](../../images/flac-ui/flac-user-groups.png)

Select the user groups from the list you would like to add to the role. Alternatively, use the search bar to search for the user group by entering the name of the group, then select **[!UICONTROL Save]**

![flac-add-user-groups](../../images/flac-ui/flac-add-user-groups.png)

Added user group appears under **[!UICONTROL User groups]** tab.

![flac-added-user-groups](../../images/flac-ui/flac-added-user-groups.png)

To remove a user group from a role, select the **X** icon next to the user group name. 

![flac-remove-user-groups](../../images/flac-ui/flac-remove-user-groups.png)

The **[!UICONTROL Remove user group]** dialogue appears, prompting you to confirm deletion. 

![flac-confirm-user-groups-delete](../../images/flac-ui/flac-confirm-user-groups-delete.png)

You will be returned to the **[!UICONTROL User groups]** tab.

## Adding users to Experience Platform through a product profile

To add a user to a product profile, log into the Admin Console and select **[!UICONTROL Add users]**

![product-profile-add-users](../../images/flac-ui/product-profile-add-users.png)

The **[!UICONTROL Add users to your team]** dialogue appears. Enter the users email address, first name (optional) and last name (optional).

Select the pencil icon to select products and user groups, select **[!UICONTROL Adobe Experience Platform]**, then select **[!UICONTROL AEP-Default-All-Users]**, then select  **[!UICONTROL Save]**.

![product-profile](../../images/flac-ui/product-profile.png)

## Next steps

With permissions established, you can proceed to the next step to [manage users](users.md).
