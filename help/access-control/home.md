---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Access control overview
topic: overview
---

# Access control overview

Access control for Experience Platform is provided through the [Adobe Admin Console](https://adminconsole.adobe.com). This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes.

This document serves as an overview of access control in Experience Platform and covers the following topics:

- [Access control overview](#access-control-overview)
  - [Access control hierarchy and workflow](#access-control-hierarchy-and-workflow)
  - [Adobe Admin Console](#adobe-admin-console)
    - [Product profiles](#product-profiles)
    - [Default product profiles](#default-product-profiles)
  - [Sandboxes and permissions](#sandboxes-and-permissions)
    - [Access to sandboxes](#access-to-sandboxes)
    - [Permissions](#permissions)
  - [Next steps](#next-steps)

## Access control hierarchy and workflow

In order to configure access control for Experience Platform, you must have administrator privileges for an organization that has an Experience Platform product integration. The minimum role that grant or withdraw permissions is a **product profile administrator**. Other administrator roles that can manage permissions are **product administrators** (can manage all profiles within a product) and **system administrators** (no restrictions). See the Adobe Help Center article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) for more information.

> **Note:** From this point on, any mentions of "administrator" in this document refer to a product profile administrator or higher (as outlined above).

A high-level workflow for gaining and assigning access permissions can be summarized as follows:

- After subscribing to Adobe Experience Platform, an email is sent to the administrator specified in the registration form.
- The administrator logs in to [Adobe Admin Console](#adobe-admin-console) and selects **Adobe Experience Platform** from the list of products on the overview page.
- The administrator can view the default [product profiles](#product-profiles) or create new customer product profiles as needed.
- The administrator can edit the permissions and users for any existing product profiles.
- When creating or editing a product profile, the administrator adds users to the profile using the **users** tab, and grants permissions to these users (such as "Read Datasets" or "Manage Schemas") by accessing the **permissions** tab. Similarly, the administrator can assign access to sandboxes using the same permissions tab.
- When users log in to the Experience Platform user interface, their access to Platform capabilities is driven by the permissions that have been granted to them from Step 2. For example, if a user does not have the "View Datasets" permission, the *Datasets* tab in the side menu will not be visible to that user.

For more detailed steps on how to manage access control in Experience Platform, see the [access control user guide](access-control-user-guide.md). 

All calls to Experience Platform APIs are validated for permissions, and will return errors if the appropriate permission(s) are not found in the current user context. Within the UI, elements will be hidden or altered depending on permissions granted to the current user.

## Adobe Admin Console

Adobe Admin Console provides a central location for managing Adobe product entitlements and access for your organization. Through the console, you can grant groups of users access permissions for various Platform capabilities, such as "Manage Datasets", "View Datasets", or "Manage Profiles".

### Product profiles

In the Admin Console, permissions are assigned to users through the use of **product profiles**. Product profiles allow you to grant permissions to one or multiple users, and also contain their access to the scope of the sandboxes that are assigned to them through product profiles. Users can be assigned to one or multiple product profiles belonging to your organization.

### Default product profiles

Experience Platform comes with two pre-configured default product profiles. The following table outlines what is provided in each default profile, including the sandbox they grant access to as well as the permissions they grant within the scope of that sandbox.

| Product profile | Sandbox access | Permissions |
| --- | --- | --- |
| Default Production - All Access | Production | All permissions applicable to Experience Platform, except for Sandbox Administration permissions. |
| Default Sandbox Administration | N/A | Provides access only to Sandbox Administration permissions. |

## Sandboxes and permissions

Experience Platform provides access to one Production sandbox, and allows you to create Non-Production **sandboxes**. Non-Production sandboxes are a form of data virtualization that allow you to isolate data from other sandboxes and are typically used for development experiments, testing, or trials. A product profile's **permissions** give the profile's users access to Platform features within the sandbox environments to which they've been granted access to.

For more information about sandboxes in Experience Platform, please refer to the [sandboxes overview](../sandboxes/home.md).

### Access to sandboxes

Access to sandboxes is managed through product profiles. For detailed steps on how to enable access to a sandbox for a product profile, see the [access control user guide](./ui/overview.md).

Users can be granted access to one or more sandboxes within a product profile. If one user is included in two or more product profiles, that user will have access to all sandboxes included in those profiles.

The "Sandbox Management" permission allows users to manage, view, or reset sandboxes.

### Permissions

The **permissions** tab within a product profile displays the sandboxes and permissions that are active for that profile:

![](images/permissions-overview.png)

Permissions that are granted through the Admin Console are sorted by category, with some permissions granting access to several low-level functionalities.

The following table outlines the available permissions for Experience Platform in the Admin Console, with descriptions of the specific Platform capabilities they grant access to. For detailed steps on how to add permissions to a product profile, see the [access control user guide](./ui/overview.md).

| Category | Permission | Description |
| --- | --- | --- |
| Data Modeling | Manage Schemas | Access to read, create, edit, and delete schemas and related resources. |
| Data Modeling | View Schemas | Read-only access to schemas and related resources. |
| Data Management | Manage Datasets | Access to read, create, edit, and delete datasets. Read-only access for schemas. |
| Data Management | View Datasets | Read-only access for datasets and schemas. |
| Data Management | Data Monitoring | Read-only access to monitoring datasets and streams. |
| Profile Management | Manage Profiles | Access to read, create, edit, and delete datasets that are used for customer profiles. Read-only access to available profiles. |
| Profile Management | View Profiles | Read-only access to available profiles. |
| Profile Management | Export Audience for Segment | Ability to export an evaluated audience segment to a dataset. |
| Identities | Manage Identity Namespaces | Access to read, create, edit, and delete identity namespaces. |
| Identities | View Identity Namespaces | Read-only access for identity namespaces. |
| Sandbox Administration | Manage Sandboxes | Access to read, create, edit, and delete sandboxes. |
| Sandbox Administration | View Sandboxes | Read-only access for sandboxes belonging to your organization. |
| Sandbox Administration | Reset a Sandbox | Ability to reset a sandbox. |
| Destinations | Manage Destinations | Access to read, create, edit, and disable destinations.* |
| Destinations | View Destinations | Read-only access to available destinations in the *Catalog* tab and authenticated destinations in the *Browse* tab.* |
| Destinations | Activate Destinations | Ability to activate data to active destinations that have been created. This permission requires either “View Destinations” or “Manage Destinations” to be granted to the user who will activate destinations.* |
| Data Ingestion | Manage Sources | Access to read, create, edit, and disable sources. |
| Data Ingestion | View Sources | Read-only access to available sources in the *Catalog* tab and authenticated sources in the *Browse* tab. |
| Data Science Workspace | Manage Data Science Workspace | Access to read, create, edit, and delete in Data Science Workspace. |

> (*) This permission requires provisions to Real-time Customer Data Platform. For more information regarding Real-time CDP, please begin by reading the [Real-time CDP overview](https://docs.adobe.com/content/help/en/experience-platform/rtcdp/overview.html).

## Next steps

By reading this guide, you have been introduced to the main principles of access control in Experience Platform. You can now continue to the [access control user guide](./ui/overview.md) for detailed steps on how use the Admin Console to create product profiles and assign permissions for Platform.