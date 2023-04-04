---
title: Manage Permissions for Privacy Service
description: Learn how to manage user permissions for Adobe Experience Platform Privacy Service using Adobe Admin Console.
exl-id: 6aa81850-48d7-4fff-95d1-53b769090649
---
# Manage permissions for Privacy Service

>[!IMPORTANT]
>
>Permissions for Adobe Experience Platform Privacy Service have been improved to increase their level of granularity. These changes enable organization admins to grant more users access with the desired role and permission level. Technical account users must update their Privacy Service permissions as this impending update constitutes a breaking change for them. The enforcement of this permissions change will take place on **March 28, 2023**.
>
>Technical accounts are available to enterprise customers and created through the Adobe Developers Console. The Adobe ID of a technical account holder ends in `@techacct.adobe.com`. If you are unsure whether you are a technical account holder, please contact your organization administrator.

Access to [Adobe Experience Platform Privacy Service](./home.md) is controlled through granular role-based permissions in Adobe Admin Console. By creating product profiles that assign permissions to groups of users, you can determine who has access to which features in the Privacy Service [UI](./ui/overview.md) and [API](./api/overview.md).

>[!NOTE]
>
>When creating an integration for the Privacy Service API, you must select an existing product profile in order to determine what features or actions that integration has permissions for. See the guide on [getting started with the Privacy Service API](./api/getting-started.md) for more information.

This guide shows you how to manage permissions for Privacy Service.

## Getting started

In order to configure access control for Privacy Service, you must have administrator privileges for an organization that has a product integration with Adobe Experience Platform Privacy Service. The minimum role that can grant or withdraw permissions is a **product profile administrator**. Other administrator roles that can manage permissions are **product administrators** (can manage all profiles within a product) and **system administrators** (no restrictions). See the article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) in the Adobe Enterprise administration guide for more information.

This guide assumes you are familiar with basic Admin Console concepts like product profiles and how they grant product permissions to individual users and groups. For more information, see the [Admin Console user guide](https://helpx.adobe.com/enterprise/using/admin-console.html).

## Available permissions

The following table outlines the available permissions for Privacy Service with descriptions of the specific capabilities that they grant access to:

>[!NOTE]
>
>All Privacy Service and [!UICONTROL Opt Out of Sale] permissions are distinct and separate from one another with no functional overlap. This is possible as the Privacy Service API is considered idempotent.

| Category | Permission | Description |
| --- | --- | --- |
| [!UICONTROL Privacy Service Permissions] | [!UICONTROL Privacy Read Permission] | Determines whether the user can view existing access and delete requests, along with their details. |
| [!UICONTROL Privacy Service Permissions] | [!UICONTROL Privacy Write Permission] | Determines whether a user can create new access and delete requests. |
| [!UICONTROL Privacy Service Permissions] | [!UICONTROL Read (Access) Content Delivery Permission] | When an access request is processed by Privacy Service, a ZIP file containing the customer's data is sent to that customer. When looking up the details of an access request, this permission determines whether the user can access the download link for the request's ZIP file. |
| [!UICONTROL Opt Out of Sale Permissions] | [!UICONTROL Read Permission - Opt Out of Sale] | Determines whether the user can view existing opt-out-of-sale requests, along with their details. |
| [!UICONTROL Opt Out of Sale Permissions] | [!UICONTROL Write Permission - Opt Out of Sale] | Determines whether a user can create new opt-out-of-sale requests. |

{style="table-layout:auto"}

## Manage permissions {#manage}

To manage Privacy Service permissions, log in to [Admin Console](https://adminconsole.adobe.com/) and select **[!UICONTROL Products]** from the top navigation. From here, select **[!UICONTROL Adobe Experience Platform Privacy Service]**.

![Image showing the Privacy Service product card in Admin Console](./images/permissions/privacy-service-card.png)

### Select or create a product profile

The next screen shows a list of available product profiles for Privacy Service under your organization. If no product profiles exist, select **[!UICONTROL New Profile]** to create one. If you have multiple roles or user groups in your organization that require different levels of access, you should create a separate product profile for each of them.

![Image showing the product profiles for Privacy Service in Admin Console](./images/permissions/select-or-create-profile.png)

After selecting a product profile, you can use the **[!UICONTROL Permissions]** tab to start [editing permissions](#edit-permissions) for the profile, or select the **[!UICONTROL Users]** tab to start [assigning users](#assign-users) to the profile.

![Image showing the permissions tab for a product profile Admin Console](./images/permissions/users-permissions-tabs.png)

### Edit permissions for the profile {#edit-permissions}

On the **[!UICONTROL Permissions]** tab, select any of the displayed permission categories to access the permission editing view.

When editing permissions for a profile, available permissions are listed in the left column while those that are included in the profile are listed in the right column. Select the listed permissions to move them between either column.

![Image showing the available and included permission columns](./images/permissions/edit-permissions.png)

Permissions are organized into categories. To switch between categories, select the desired category from the left navigation.

![Image showing the [!UICONTROL Opt Out of Sale] section under permissions](./images/permissions/switch-category.png)

Select **[!UICONTROL Save]** once you have finished configuring permissions.

![Image showing the permission configuration being saved for the product profile](./images/permissions/save-permissions.png)

The product profile view reappears with the added permissions reflected.

![Image showing the added permissions for the product profile](./images/permissions/permissions-added.png)

### Assign users to the profile {#assign-users}

To assign users to the product profile (and grant them the profile's configured permissions), select the **[!UICONTROL Users]** tab, followed by **[!UICONTROL Add user]**.

![Image showing the users tab for a product profile in Admin Console](./images/permissions/manage-users.png)

For more information on managing users for a product profile, see the [Admin Console documentation](https://helpx.adobe.com/enterprise/using/manage-product-profiles.html).

### Migrate legacy API credentials to the profile {#migrate-tech-accounts}

>[!NOTE]
>
>This section only applies to existing API credentials that were created before Privacy Service permissions were integrated into Adobe Admin Console. For new credentials, product profiles (and their permissions) are assigned through [Adobe Developer Console projects](https://developer.adobe.com/developer-console/docs/guides/projects/) instead.<br><br>See the section on [assigning product profiles to a project](./api/getting-started.md#product-profiles) in the Privacy Service API getting started guide for more information.

To migrate legacy API credentials to the product profile, select **[!UICONTROL API Credentials]**, followed by **[!UICONTROL Add API Credentials]**.

![[!UICONTROL Add API Credentials] being selected in Admin Console, under the [!UICONTROL API Credentials] tab for a product profile](./images/permissions/api-credentials.png)

Choose the desired Developer Console projects from the list, then select **[!UICONTROL Save]** to add them to the product profile. All API calls that use the credentials from these projects will inherit the granular permissions granted by the product profile.

## Next steps

This guide covered the available permissions for Privacy Service and how to manage them through Admin Console.

For steps on how to create a new API integration after setting up product profiles, see the [getting started guide for the Privacy Service API](./api/getting-started.md). For more information on managing permissions for other Adobe Experience Platform capabilities, refer to the [access control documentation](../access-control/home.md).
