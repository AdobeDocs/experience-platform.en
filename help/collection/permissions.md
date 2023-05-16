---
title: Permission management for data collection in Experience Platform
description: A high-level overview of how to manage permissions and control access to data collection features in Adobe Experience Platform.
exl-id: 8426d54b-ec1d-475a-a769-f45a8c924fe7
---
# Permission management for data collection in Experience Platform

[Data collection in Adobe Experience Platform](./home.md) is comprised of several different technologies which work together to collect and transfer your data. Access to these technologies is controlled through granular role-based permissions in Adobe Admin Console.

This guide shows you how to manage permissions for data collection features.

## Getting started

In order to configure access control for data collection, you must have administrator privileges for an organization that has a product integration with Adobe Experience Platform Data Collection. The minimum role that can grant or withdraw permissions is a **product profile administrator**. Other administrator roles that can manage permissions are **product administrators** (can manage all profiles within a product) and **system administrators** (no restrictions). See the article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) in the Adobe Enterprise administration guide for more information.

This guide assumes you are familiar with basic Admin Console concepts like product profiles and how they grant product permissions to individual users and groups. For more information, see the [Admin Console user guide](https://helpx.adobe.com/enterprise/using/admin-console.html).

## Manage permissions {#manage}

Permissions for data collection are managed through two product designations: **Adobe Experience Platform** and **Adobe Experience Platform Data Collection**.

Refer to the subsections below for steps on how to manage the relevant permissions under each product in Admin Console:

* [Adobe Experience Platform permissions](#manage-platform)
* [Adobe Experience Platform Data Collection permissions](#manage-collection)

### Manage permissions under Adobe Experience Platform {#manage-platform}

From the **[!UICONTROL Permissions]** area in Adobe Experience Platform select the role that you want to edit.

In order to access data collection features, you must enable all permissions in the **[!UICONTROL Sandboxes]**, **[!UICONTROL Data Modeling]**, **[!UICONTROL Identity Management]**, and **[!UICONTROL Data Collection]** categories.

![Image showing the Data Collection product card in Admin Console](./images/permissions/platform-permission-card.png)

See the [access control UI guide](../access-control/ui/overview.md) for detailed instructions on managing Platform permissions.

>[!NOTE]
>
>Depending on the product SKUs your organization has access to, you may not have every Platform permission available to you.

### Manage permissions under Adobe Experience Platform Data Collection {#manage-collection}

To manage these permissions, log in to Admin Console and select **[!UICONTROL Products]** from the top navigation, then select **[!UICONTROL Adobe Experience Platform Data Collection]**.

![Image showing the Data Collection product card in Admin Console](./images/permissions/data-collection-card.png)

#### Select or create a product profile

The next screen shows a list of available product profiles for Data Collection under your organization, the default profile being **[!DNL Default Data Collection All Access]**. You can choose to edit the default product profile if you wish, or you can select **[!UICONTROL New Profile]** to create one. If you have multiple roles or user groups in your organization that require different levels of access, you should create a separate product profile for each of them.

![Image showing the product profiles for Data Collection in Admin Console](./images/permissions/new-profile.png)

After selecting or creating a product profile, you can use the **[!UICONTROL Edit]** icons to start [editing permissions](#edit-permissions) for the profile, or select the **[!UICONTROL Users]** tab to start [assigning users](#assign-users) to the profile.

![Image showing the permissions tab for a product profile Admin Console](./images/permissions/edit-permission-categories.png)

#### Edit permissions for the product profile {#edit-permissions}

When editing permissions for a profile, available permissions are listed in the left column while those that are included in the profile are listed in the right column. Select the listed permissions to move them between either column.

![Image showing permissions added under the included column](./images/permissions/added-permissions.png)

Permissions are organized into categories. To switch between categories, select the desired category from the left navigation.

![Image showing the company rights section under permissions](./images/permissions/switch-category.png)

Select **[!UICONTROL Save]** once you have finished configuring permissions.

![Image showing the permission configuration being saved for the product profile](./images/permissions/save-permissions.png)

The product profile view reappears with the added permissions reflected.

![Image showing the added permissions for the product profile](./images/permissions/permissions-added.png)

#### Assign users to the product profile {#assign-users}

To assign users to the product profile (and grant them the profile's configured permissions), select the **[!UICONTROL Users]** tab, followed by **[!UICONTROL Add user]**.

![Image showing the users tab for a product profile in Admin Console](./images/permissions/manage-users.png)

For more information on managing users for a product profile, see the [Admin Console documentation](https://helpx.adobe.com/enterprise/using/manage-product-profiles.html).

## Next steps

This guide covered the available permissions for Data Collection and how to manage them through Admin Console. For more information on managing permissions for other Adobe Experience Platform capabilities, refer to the [access control documentation](../access-control/home.md).
