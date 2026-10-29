---
title: User Permissions for Tags
description: Learn about the different types of permissions available for tags and event forwarding, how to configure them in Adobe Admin Console, and some basic implementation strategies for different business use cases.
exl-id: 9b48847a-6133-4dbd-b17d-e7b88152ad7d
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
---
# User permissions for tags

>[!CONTEXTUALHELP]
>id="platform_tags_permissions"
>title="Permissions"
>abstract="Understand the key permissions required for working with tags, event forwarding, datastreams, schemas, identities, and sandboxes within Adobe Experience Platform."

User permissions for tags in Adobe Experience Platform are assigned to users through Adobe Admin Console. Rather than being assigned to individual users, different sets of permissions are configured separately as product profiles. Users are then assigned to these product profiles in order to be granted the permissions they've been configured for.

This guide provides an overview of the different types of permissions available for tags, the functionalities they grant access to, how to configure them in Admin Console, and some basic implementation strategies for different business use cases.

>[!NOTE]
>
>For steps on how to configure permissions for users using Admin Console, see the section on [configuring permissions in Admin Console](#admin-console). For permissions to datastreams, schemas, and identity namespaces, see the section on [Experience Platform permissions](#platform-permissions).

## Prerequisites {#prerequisites}

To configure permissions for tags, you must have administrator privileges for an organization that has a product integration with Adobe Experience Platform Data Collection. The minimum role that can grant or withdraw permissions is a **product profile administrator**. **Product administrators** can manage all profiles within a product, and **system administrators** have no restrictions. See the article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) in the Adobe Enterprise administration guide for more information.

This guide assumes you are familiar with basic Admin Console concepts like product profiles and how they grant product permissions to individual users and groups. For more information, see the [Admin Console user guide](https://helpx.adobe.com/enterprise/using/admin-console.html).

## Permission types

Within a product profile, permissions for tags are divided into four categories:

1. Platforms
1. Properties
1. Property Rights
1. Company Rights

### Platforms

Each tag property has a platform. There are currently three platforms: Web, Mobile, and Edge. Edge properties are used for [event forwarding](../event-forwarding/getting-started.md). You can use this permission type to restrict or grant access to a particular type of property. This can be useful when the team that manages your mobile apps is different from the one that manages your websites.

Platform permissions only grant access when combined with other property rights.

### Properties

By default, product profiles grant access to all properties that exist within your company, both currently and in the future. Using this permission type, you can restrict or grant access to specific existing properties by name.

### Property rights {#property-rights}

Any tag property that you create in the UI becomes available in Admin Console, allowing you to group the property with specific property rights in the same product profile.

For example, if a given product profile does not have access to Property A1, users who belong to that profile cannot see or modify any settings within Property A1.

If a user belongs to a profile that does have access to Property A1, the actions they can perform within Property A1 are determined by the rights they have been granted from this profile. If a user has permissions for Property A1 but has no assigned rights, then they have read-only access for that property.

The following table outlines the available property rights and the functionalities they grant access to:

| Property right | Description |
| --- | --- |
| **Develop** | This allows you to perform the following actions:<ul><li>Create rules and data elements</li><li>Create libraries and build them in existing development environments</li><li>Submit a library for approval</li></ul>Most day-to-day tasks in the UI require this right. |
| **Approve** | This allows you to take a submitted library and build to the staging environment. You can also approve a library for publishing once testing has been completed. |
| **Publish** | This allows you to publish approved libraries to the production environment. |
| **Edit Property** | This allows you to edit the basic configuration for the properties you have access to. |
| **Manage Extensions** | This allows you to perform the following actions: <ul><li>Install new extensions to a property</li><li>Modify the configuration for an already installed extension</li><li>Delete an extension</li></ul>See the extensions overview documentation for [more information on extensions](../managing-resources/extensions/overview.md). This role typically belongs to IT or Marketing, depending on your organization. |
| **Manage Environments** | This allows you to create and modify environments. See the [environments documentation](../publishing/environments.md) for more information. This role typically belongs to the IT group. |

{style="table-layout:auto"}

### Company rights

Company rights apply to permissions that span multiple properties.  These are outlined in the table below:

| Company right | Description |
| --- | --- |
| **Manage Properties** | This allows you to perform the following actions for web, mobile, and edge (event forwarding) properties:<ul><li>Create new properties</li><li>Modify metadata and settings at the property level</li><li>Delete properties</li></ul>Administrators usually perform this role. See the [properties documentation](companies-and-properties.md) for more information. |
| **Develop Extensions** | Grants the ability to create and modify extension packages that are owned by the company, including private releases and requests for public release. |
| **Manage App Configurations** | This permission is only applicable if you have a license for Adobe Journey Optimizer or another solution that grants access to mobile in-app and push messaging. This allows you to manage the apps that Adobe Experience Cloud knows about along with the necessary push credentials needed to communicate with the Firebase Cloud Messaging service and the Apple Push Notification service. |

{style="table-layout:auto"}

## Total user permissions

An individual user's total permissions are determined by their total membership in different product profiles. If a user belongs to multiple product profiles, the permissions from each profile are added together rather than multiplied.

For example, Product Profile A grants you the Develop right for Property 1. Product Profile B grants you the Publish right for Property 2. In this case, you can Develop in Property 1 and Publish in Property 2, but you cannot publish in Property 1 or Develop in Property 2 because you have not been granted explicit rights to do so.

## Rights scenarios 

Different companies have different needs when creating new product profiles. These needs vary based on company size, organization structure, the number of sites, the number of people involved in managing tags, and so on.

Below are a few common scenarios and a recommended starting point as you think about creating product profiles and adding users to them.

### One-person show

If you run a small company that has one person in charge of everything, grant this user permissions for all properties and assign them all rights listed above.

### Separation of duties

Consider a situation where many people in your organization are involved in tagging. You have one set of people (such as an external consultant) that creates rules and data elements, but you do not want them to have access to the production environment. In this case, you want to make sure that nobody deploys to Production except the IT team.

To accomplish this:

1. Create an account for your consultants and grant them only the Develop right.
1. The consultant builds and tests within the confines you set.
1. If the consultant wants a new extension or is ready to go live, a representative from your organization (with the appropriate rights) performs those actions.

### Enterprise

An enterprise company might have multiple sites divided geographically, with different teams responsible for each geo. Within those teams, different individuals develop and publish.

This is similar to "Separation of duties" above, but organized by geographic areas. For example, you can create a "Develop" profile and a "Publish" profile for North America, and create separate "Develop" and "Publish" groups for Europe.

## Example roles

The following table provides some examples of the types of roles you might have in your organization and which permissions you should assign them:

| Role | Description | Properties | Property Rights | Company Rights |
| --- | --- | --- | --- | --- |
| The Manager | Wants to see what is happening in the system, but should not be able to make any changes. | Auto-include | (None)  | (None) |
| The Marketer | Can install extensions and set up new tags for existing properties, but cannot publish to the staging or production environments. | Auto-include | <ul><li>Develop</li><li>Manage Extensions</li></ul> | <ul><li>Manage Properties</li></ul> |
| The Mobile App Developer | Is responsible for implementing Adobe and 3rd-party solutions inside a native mobile app. | Auto-include | <ul><li>Develop</li><li>Manage Extensions</li></ul> | <li>Manage Properties</li><li>Manage App Configurations</li> |
| The IT Team | Does not actually modify any tags, but they have full control over the staging and production environments and what is in them. | Auto-include | (None) | <ul><li>Approve</li><li>Publish</li><li>Manage Environments</li></ul> |
| The Extension Developer | Develops extensions and can submit for approval, but cannot publish or add them to existing properties. | Auto-include | <ul><li>Develop</li></ul> | <ul><li>Manage Properties</li><li>Develop Extensions</li></ul> |
| The Super User | Does everything. | Auto-include | <ul><li>Develop</li><li>Approve</li><li>Publish</li><li>Manage Extensions</li><li>Manage Environments</li></ul> | <ul><li>Manage Properties</li></ul> |

{style="table-layout:auto"}

## Configure permissions in Admin Console {#admin-console}

Permissions for tags and event forwarding are managed under the **[!UICONTROL Adobe Experience Platform Data Collection]** product in Admin Console. To configure them:

1. Sign in to [Admin Console](https://adminconsole.adobe.com/), select **[!UICONTROL Products]** in the top navigation, and then select **[!UICONTROL Adobe Experience Platform Data Collection]**.
1. Select an existing product profile, such as the default **[!DNL Default Data Collection All Access]** profile, or select **[!UICONTROL New Profile]** to create one. If different roles or user groups in your organization require different levels of access, create a separate product profile for each of them.
1. On the **[!UICONTROL Permissions]** tab, select the edit icon for a permission category. Select permissions to move them between the available and included columns, switch categories from the left navigation as needed, and then select **[!UICONTROL Save]**.
1. Select the **[!UICONTROL Users]** tab, and then select **[!UICONTROL Add user]** to assign users to the product profile.

For more information, see the Admin Console documentation on [managing product profiles](https://helpx.adobe.com/enterprise/using/manage-product-profiles.html).

## Experience Platform permissions for data collection {#platform-permissions}

Datastreams, schemas, and identity namespaces are not controlled by the Adobe Experience Platform Data Collection product profile. Instead, they are managed through Experience Platform [access control](../../../access-control/home.md). To work with these features, a user's role must include the relevant permissions in the following categories, along with access to the appropriate [sandboxes](../../../sandboxes/home.md):

* **[!UICONTROL Data Collection]**: Manage or view [datastreams](../../../datastreams/overview.md).
* **[!UICONTROL Data Modeling]**: Manage or view [Experience Data Model (XDM) schemas](../../../xdm/home.md).
* **[!UICONTROL Identity Management]**: Manage or view [identity namespaces](../../../identity-service/features/namespaces.md).

See the [resource permissions](../../../access-control/home.md#permissions) reference for a full list of Experience Platform permissions, and the guide on [managing permissions for a role](../../../access-control/abac/ui/permissions.md) for configuration steps.

>[!NOTE]
>
>Depending on the product SKUs your organization has access to, you may not have every Experience Platform permission available to you.

## Next steps

This document provided an overview of the available permissions for tags and event forwarding, and how to configure them in Admin Console. For more information on managing permissions for other Experience Platform capabilities, see the [access control overview](../../../access-control/home.md).
