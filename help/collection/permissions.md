---
title: Permission management for data collection in Experience Platform
description: A high-level overview of how to manage permissions and control access to data collection features in Adobe Experience Platform.
exl-id: 8426d54b-ec1d-475a-a769-f45a8c924fe7
TQID: https://experienceleague.adobe.com/-4BLSt2CBGLjnxeAOCp2ZQEKy4UEOZCoScVdKxAZ5mc
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f7bdf6be-dd3b-4d2d-ac52-0e62ed0d3102
    internal-label: Admin Console
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
  - id: bb359667-ec7d-4d4b-8663-5850fc219d32
    internal-label: Administration
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: d556b755-390a-43f0-be32-a08cf6236126
    internal-label: Configuration
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fdbb8fc9-ffa3-4b86-88fe-aa4c5a3e1bc6
    internal-label: Administration
subfeature_v2:
  - id: a16ec9c0-4484-4842-b9a0-5504cde38e6a
    internal-label: Access control
  - id: a9b953c0-98db-499b-97f5-a0dc3290bda3
    internal-label: Adobe Admin Console
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b856530c-d60b-42d8-a19d-df2dfd7fe62a
    internal-label: Access control
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d118ce48-260e-496e-9e49-1de731540ca6
    internal-label: App configurations
  - id: d175cb4c-5781-454e-a826-bf6dff786265
    internal-label: Roles
  - id: d21bd11d-08df-4cd6-ad8f-cb59a09de5c0
    internal-label: Sandboxes
  - id: d2e8a157-b3b0-4143-9ff3-809bf400be56
    internal-label: Sandboxes
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: fdac7813-bd56-47ae-9f6d-fa94ad1c5dee
    internal-label: Overview
  - id: fef08361-6ac5-460c-93fe-d063e40b6a49
    internal-label: Getting started
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# Permission management for data collection in Experience Platform {#permission-management}

>[!CONTEXTUALHELP]
>id="platform_tags_permissions"
>title="Permissions"
>abstract="Understand the key permissions required for working with datastreams, schemas, identities, and sandboxes within Adobe Experience Platform."

[Data collection in Adobe Experience Platform](home.md) is comprised of several different technologies which work together to collect and transfer your data. Access to these technologies is controlled through granular role-based permissions in Adobe Admin Console.

This guide shows you how to manage permissions for data collection features.

## Getting started

In order to configure access control for data collection, you must have administrator privileges for an organization that has a product integration with Adobe Experience Platform Data Collection. The minimum role that can grant or withdraw permissions is a **product profile administrator**. Other administrator roles that can manage permissions are **product administrators** (can manage all profiles within a product) and **system administrators** (no restrictions). See the article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) in the Adobe Enterprise administration guide for more information.

This guide assumes you are familiar with basic Admin Console concepts like product profiles and how they grant product permissions to individual users and groups. For more information, see the [Admin Console user guide](https://helpx.adobe.com/enterprise/using/admin-console.html).

## Available permissions

The relevant permissions for Data Collection are provided through two product designations in Admin Console: **Adobe Experience Platform** and **Adobe Experience Platform Data Collection**. The sections below outline the permissions provided under each product along with descriptions of the specific capabilities that they grant access to.

### Adobe Experience Platform permissions

Permissions under Adobe Experience Platform include access to datastreams, identities, schemas, and sandboxes. For steps on how to configure Adobe Experience Platform permissions, see the [access control user guide](../access-control/ui/overview.md).

| Category | Permission | Description |
| --- | --- | --- |
| Sandboxes | (N/A) | Depending on the [sandboxes](../sandboxes/home.md) that have been created under your organization, you can control access to each of them through this permission category in Admin Console. |
| Data Modeling | Manage Schemas | Grants the ability to view, create, and edit [Experience Data Model (XDM) schemas](../xdm/home.md). |
| Data Modeling | View Schemas | Grants read-only access to schemas. |
| Identity Management | Manage Identity Namespaces | Grants the ability to view, create, and edit [identity namespaces](../identity-service/features/namespaces.md). |
| Identity Management | View Identity Namespaces | Grants read-only access to identity namespaces. |
| Data Collection | Manage Datastreams | Grants the ability to view, create, and edit [datastreams](../datastreams/overview.md). |
| Data Collection | View Datastreams | Grants read-only access to datastreams. |

{style="table-layout:auto"}

### Adobe Experience Platform Data Collection permissions

Permissions under Adobe Experience Platform Data Collection control access to tags and event forwarding capabilities, including properties, extensions, and environments. For steps on how to configure Adobe Experience Platform Data Collection permissions, see the [section below](#manage).

| Category | Permission | Description |
| --- | --- | --- |
| Platforms | Web | Grants access to [web properties](../tags/ui/administration/companies-and-properties.md) when combined with other property rights. |
| Platforms | Mobile | Grants access to [mobile properties](../tags/ui/administration/companies-and-properties.md) when combined with other property rights. |
| Platforms | Edge | Grants access to [Event Forwarding Edge properties](../tags/ui/event-forwarding/getting-started.md) when combined with other property rights. |
| Properties | (N/A) | Depending on the properties that have been created under your organization, you can control access to each of them through this permission category in Admin Console.<br><br>A user's assigned property rights only apply to the properties they have been granted access to through this permission category. |
| Property Rights | Approve | Grants the ability to approve a library build as part of the [publishing flow](../tags/ui/publishing/publishing-flow.md). |
| Property Rights | Develop | Grants the ability to develop a library build as part of the [publishing flow](../tags/ui/publishing/publishing-flow.md). |
| Property Rights | Edit Property | Grants the ability to edit the basic configuration for the properties a user has access to. |
| Property Rights | Manage Environments | Grants the ability to manage the [environments](../tags/ui/publishing/environments.md) for the properties a user has access to. |
| Property Rights | Manage Extensions | Grants the ability to manage the [extensions](../tags/ui/managing-resources/extensions/overview.md) for the properties a user has access to. |
| Property Rights | Publish | Grants the ability to publish a library build as part of the [publishing flow](../tags/ui/publishing/publishing-flow.md). |
| Company Rights | Develop Extensions | Grants the ability to create and modify extension packages that are owned by your organization, including private releases and requests for public release. |
| Company Rights | Manage App Configurations | This permission is only applicable if you have a license for Adobe Journey Optimizer or another solution that grants access to mobile in-app and push messaging. This allows you to manage the apps that Adobe Experience Cloud knows about along with the necessary push credentials needed to communicate with the Firebase Cloud Messaging service and the Apple Push Notification service. |
| Company Rights | Manage Properties | Grants you the ability to create and manage tags (web property), event forwarding (edge property), and mobile properties. |

{style="table-layout:auto"}

>[!NOTE]
>
>For more information on how these permissions affect capabilities in tags, including administration strategies for common scenarios, see the tags documentation on [user permissions](../tags/ui/administration/user-permissions.md).

## Manage permissions {#manage}

Permissions for data collection are managed through two product designations: **Adobe Experience Platform** and **Adobe Experience Platform Data Collection**.

Refer to the subsections below for steps on how to manage the relevant permissions under each product in Admin Console:

* [Adobe Experience Platform permissions](#manage-platform)
* [Adobe Experience Platform Data Collection permissions](#manage-collection)

### Manage permissions under Adobe Experience Platform {#manage-platform}

>[!NOTE]
>
>To manage permissions for a role, you will require administrator rights. If you do not have administrator privileges, contact your system administrator.

Experience Cloud's **[!UICONTROL Permissions]** section allows you to define user roles and policies to manage access for features and objects within a product application.

Through [!UICONTROL Permissions], you can create and manage roles and assign the desired resource permissions for these roles. 

![Adobe Experience Cloud highlighting the Permissions product.](assets/permissions/permissions-product.png)

In order to access data collection features, you must enable all permissions in the **[!UICONTROL Sandboxes]**, **[!UICONTROL Data Modeling]**, **[!UICONTROL Identity Management]**, and **[!UICONTROL Data Collection]** categories.

![Image showing the Data Collection product card in Admin Console](assets/permissions/platform-permission-card.png)

See the [access control UI guide](../access-control/ui/overview.md) for detailed instructions on managing Experience Platform permissions.

>[!NOTE]
>
>Depending on the product SKUs your organization has access to, you may not have every Experience Platform permission available to you.

### Manage permissions under Adobe Experience Platform Data Collection {#manage-collection}

To manage these permissions, log in to Admin Console and select **[!UICONTROL Products]** from the top navigation, then select **[!UICONTROL Adobe Experience Platform Data Collection]**.

![Image showing the Data Collection product card in Admin Console](assets/permissions/data-collection-card.png)

#### Select or create a product profile

The next screen shows a list of available product profiles for Data Collection under your organization, the default profile being **[!DNL Default Data Collection All Access]**. You can choose to edit the default product profile if you wish, or you can select **[!UICONTROL New Profile]** to create one. If you have multiple roles or user groups in your organization that require different levels of access, you should create a separate product profile for each of them.

![Image showing the product profiles for Data Collection in Admin Console](assets/permissions/new-profile.png)

After selecting or creating a product profile, you can use the **[!UICONTROL Edit]** icons to start [editing permissions](#edit-permissions) for the profile, or select the **[!UICONTROL Users]** tab to start [assigning users](#assign-users) to the profile.

![Image showing the permissions tab for a product profile Admin Console](assets/permissions/edit-permission-categories.png)

#### Edit permissions for the product profile {#edit-permissions}

When editing permissions for a profile, available permissions are listed in the left column while those that are included in the profile are listed in the right column. Select the listed permissions to move them between either column.

![Image showing permissions added under the included column](assets/permissions/added-permissions.png)

Permissions are organized into categories. To switch between categories, select the desired category from the left navigation.

![Image showing the company rights section under permissions](assets/permissions/switch-category.png)

Select **[!UICONTROL Save]** once you have finished configuring permissions.

![Image showing the permission configuration being saved for the product profile](assets/permissions/save-permissions.png)

The product profile view reappears with the added permissions reflected.

![Image showing the added permissions for the product profile](assets/permissions/permissions-added.png)

#### Assign users to the product profile {#assign-users}

To assign users to the product profile (and grant them the profile's configured permissions), select the **[!UICONTROL Users]** tab, followed by **[!UICONTROL Add user]**.

![Image showing the users tab for a product profile in Admin Console](assets/permissions/manage-users.png)

For more information on managing users for a product profile, see the [Admin Console documentation](https://helpx.adobe.com/enterprise/using/manage-product-profiles.html).

## Next steps

This guide covered the available permissions for Data Collection and how to manage them through Admin Console. For more information on managing permissions for other Adobe Experience Platform capabilities, refer to the [access control documentation](../access-control/home.md).
