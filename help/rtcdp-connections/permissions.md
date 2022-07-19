---
title: Permission management for data collection in Experience Platform
description: A high-level overview of how to manage permissions and control access to features in Real-Time Customer Data Platform (RTCDP) Connections.
---
# Permission management for data collection in Experience Platform

[Data collection in Adobe Experience Platform](./home.md) is comprised of several different technologies which work together to collect and transfer your data. Access to these technologies is controlled through granular role-based permissions in Adobe Admin Console.

This guide shows you how to manage permissions for data collection features.

## Getting started

In order to configure access control for data collection, you must have administrator privileges for an organization that has a product integration with Adobe Experience Platform Data Collection. The minimum role that can grant or withdraw permissions is a product profile administrator. Other administrator roles that can manage permissions are product administrators (can manage all profiles within a product) and system administrators (no restrictions). See the Adobe Help Center article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) for more information.

## Available permissions

In Admin Console, you can grant users access to products by adding the users to **product profiles**. Within each product profile is a set of configurable permissions that dictate which features of that product the users are entitled to.

The relevant permissions for Data Collection are provided through two product designations in Admin Console: **Adobe Experience Platform** and **Adobe Experience Platform Data Collection**. The sections below outline the permissions provided under each product along with descriptions of the specific capabilities they grant access to.

### Adobe Experience Platform permissions

Permissions under Adobe Experience Platform include access to datastreams, identites, schemas, and sandboxes. For steps on how to configure Adobe Experience Platform permissions, see the [access control user guide](../access-control/ui/overview.md).

| Category | Permission | Description |
| --- | --- | --- |
| Sandboxes | (N/A) | Depending on the [sandboxes](../sandboxes/home.md) that have been created under your organization, you can control access to each of them through this permission category in Admin Console. |
| Data Modeling | Manage Schemas | Grants the ability to view, create, and edit [Experience Data Model (XDM) schemas](../xdm/home.md). |
| Data Modeling | View Schemas | Grants read-only access to schemas. |
| Identity Management | Manage Identity Namespaces | Grants the ability to view, create, and edit [identity namespaces](../identity-service/namespaces.md). |
| Identity Management | View Identity Namespaces | Grants read-only access to identity namespaces. |
| Data Collection | Manage Datastreams | Grants the ability to view, create, and edit [datastreams](../edge/datastreams/overview.md). |
| Data Collection | View Datastreams | Grants read-only access to datastreams. |
<!-- (Feature not yet available?)
| Dashboards | Manage Custom Dashboards | |
| Dashboards | View Custom Dashboards | |
-->

{style="table-layout:auto"}

### Adobe Experience Platform Data Collection permissions

Permissions under Adobe Experience Platform Data Collection control access to tags and event forwarding capabilities, including properties, extensions, and environments. For steps on how to configure Adobe Experience Platform Data Collection permissions, see the [section below](#manage).

| Category | Permission | Description |
| --- | --- | --- |
| Platforms | Web | Grants access to [web properties](../tags/ui/administration/companies-and-properties.md) when combined with other property rights. |
| Platforms | Mobile | Grants access to [mobile properties](../tags/ui/administration/companies-and-properties.md) when combined with other property rights. |
| Properties | (N/A) | Depending on the properties that have been created under your organization, you can control access to each of them through this permission category in Admin Console.<br><br>A user's assigned property rights only apply to the properties they have been granted access to through this permission category. |
| Property Rights | Approve | Grants the ability to approve a library build as part of the [publishing flow](../tags/ui/publishing/publishing-flow.md). |
| Property Rights | Develop | Grants the ability to develop a library build as part of the [publishing flow](../tags/ui/publishing/publishing-flow.md). |
| Property Rights | Edit Property | Grants the ability to edit the basic configuration for the properties a user has access to. |
| Property Rights | Manage Environments |  Grants the ability to manage the [environments](../tags/ui/publishing/environments.md) for the properties a user has access to. |
| Property Rights | Manage Extensions | Grants the ability to manage the [extensions](../tags/ui/managing-resources/extensions/overview.md) for the properties a user has access to. |
| Property Rights | Publish | Grants the ability to publish a library build as part of the [publishing flow](../tags/ui/publishing/publishing-flow.md). |
| Company Rights | Develop Extensions | Grants the ability to create and modify extension packages that are owned by your organization, including private releases and requests for public release. |
| Company Rights | Manage Extensions | This permission is only applicable if you have a license for Adobe Journey Optimizer or another solution that grants access to mobile in-app and push messaging. This allows you to manage the apps that Adobe Experience Cloud knows about along with the necessary push credentials needed to communicate with the Firebase Cloud Messaging service and the Apple Push Notification service. |

{style="table-layout:auto"}

>[!NOTE]
>
>For more information on how these permissions affect capabilities in tags, including administration strategies for common scenarios, see the tags documentation on [user permissions](../tags/ui/administration/user-permissions.md).

## Manage permissions for Adobe Experience Platform Data Collection {#manage}

>[!IMPORTANT]
>
>This section only covers how to manage permissions for the Adobe Experience Platform Data Collection product in Admin Console. However, the steps for managing permissions under the Adobe Experience Platform product are very similar.
>
>See the [access control UI guide](../access-control/ui/overview.md) for detailed instructions on managing Platform permissions. Note that depending on the product SKUs your organization has access to, you may not have every permission available to you.

To manage permissions for Data Collection, log in to [Admin Console](https://adminconsole.adobe.com/) and select **[!UICONTROL Products]** from the top navigation. From here, select the card for **[!UICONTROL Adobe Experience Platform Data Collection]**.

