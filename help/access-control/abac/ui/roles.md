---
keywords: Experience Platform;home;popular topics;access control;attribute-based access control;ABAC
title: Attribute-based Access Control Create a Role
description: This document provides information on managing roles through the Permissions interface in Adobe Experience Cloud
exl-id: 85699716-339d-4992-8390-95563c7ea7fe
---
# Manage roles

Roles define the access that an administrator, a specialist, or an end-user has to resources in your organization. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need.

## Create a new role

To create a new role, select the **[!UICONTROL Roles]** tab in the sidebar and select **[!UICONTROL Create Role]**.

![flac-new-role](../../images/flac-ui/flac-new-role.png)

The **[!UICONTROL Create a new role]** dialog appears, prompting you to enter a name, and an optional description. 

When finished, select **[!UICONTROL Confirm]**.

![flac-create-new-role](../../images/flac-ui/flac-create-new-role.png)

Next, select the resource permissions that you would like to include in the role using the dropdown menu. 

![flac-add-role-permission](../../images/flac-ui/flac-add-role-permission.png)

To add additional resources, select **[!UICONTROL Adobe Experience Platform]** from the left navigation panel, which displays a list of resources. Alternatively, enter the resource name into the search bar in the left navigation panel.

![flac-add-additional-resources](../../images/flac-ui/flac-add-additional-resources.png)

Click and drag the relevant resource and drop into the main panel. 

![flac-additional-resources-added](../../images/flac-ui/flac-additional-resources-added.png)

Select the resource permissions that you would like to include in the role using the dropdown menu. Repeat this for all resources you would like to include for the role. When finished, select **[!UICONTROL Save and exit]**.

![flac-save-resources](../../images/flac-ui/flac-save-resources.png)

The new role is successfully created, and you are redirected to the **[!UICONTROL Roles]** page, where you will see the newly created role appear in the list. 

![flac-role-saved](../../images/flac-ui/flac-role-saved.png)

See the sections on [managing permissions for a role](#manage-permissions-for-a-role) for more details on how to manage role permissions once they are created.

The following video is intended to support your understanding of creating a new role and managing users for that role.

>[!VIDEO](https://video.tv.adobe.com/v/336081/?learn=on)

## Duplicate a role

To duplicate an existing role, select the role from the **[!UICONTROL Roles]** tab. Alternatively, use the filter option to filter the results to find the role you want to duplicate.

![flac-duplicate-role](../../images/flac-ui/flac-duplicate-role.png)

Next, select **[!UICONTROL Duplicate]** from the top right of the screen. 

![flac-duplicate](../../images/flac-ui/flac-duplicate.png)

The **[!UICONTROL Duplicate role]** dialog appears, prompting you to confirm the duplication. 

![flac-duplicate-confirm](../../images/flac-ui/flac-duplicate-confirm.png)

Next, you will be taken to the role's detail page where you can change the name and permissions for the role. The Details, Labels, and Sandboxes are duplicated from the previous role. Users will need to be added via the users tab. You can view the [manage permissions for a role](permissions.md) document to learn more about adding Details, Labels, Sandboxes, and Users to a role.

Click on the left arrow to return to the **[!UICONTROL Roles]** tab.

![flac-return-to-roles](../../images/flac-ui/flac-return-to-roles.png)

The new role will appear in the list on the **[!UICONTROL Roles]** page.

![flac-role-duplicate-saved](../../images/flac-ui/flac-role-duplicate-saved.png)

## Delete a role

Select the ellipsis (`…`) next to a role's name, and a dropdown displays controls to edit, delete, or duplicate the role. Select delete from the dropdown.

![flac-role-delete](../../images/flac-ui/flac-role-delete.png)

The **[!UICONTROL Delete user role]** dialog appears, prompting you to confirm the deletion. 

![flac-confirm-role-delete](../../images/flac-ui/flac-confirm-role-delete.png)

You will be returned to the **[!UICONTROL Roles]** tab.

## Next steps

With a new role created, you can proceed to the next step to [manage permissions for a role](permissions.md).
