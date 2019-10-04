---
title: Access control
seo-title: Access control in Adobe Experience Platform
description: IMS Organization administrators can enforce access control for Experience Platform by using the Adobe Admin Console to assign roles and permissions for various Platform capabilities.
seo-description: IMS Organization administrators can enforce access control for Experience Platform by using the Adobe Admin Console to assign roles and permissions for various Platform capabilities.
---

# Access control in Adobe Experience Platform

IMS Organization administrators can enforce access control for Experience Platform by using the [Adobe Admin Console](https://adminconsole.adobe.com) to assign roles and permissions for various Platform capabilities.

This document serves as an overview of access control in Experience Platform and covers the following topics:

* [Access control hierarchy and workflow](#access-control-hierarchy-and-workflow)
* [Adobe Admin Console](#adobe-admin-console)
* [Product profiles](#product-profiles)
* [Permissions](#permissions)

## Access control hierarchy and workflow {#access-control-hierarchy-and-workflow}

In order to configure access control for Experience Platform, you must be an administrator for an IMS Organization that has a Platform product integration. While Adobe supports flexible admin hierarchies for IMS Orgs, you must have **system admin**, **product admin**, or **product profile admin** privileges to configure access control. See the Adobe Help Center article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) for more information.

A high-level workflow for gaining and assigning access permissions can be summarized as follows:

1. Experience Platform is purchased by and provisioned to a system administrator.
1. The admin logs in to [Adobe Admin Console](#adobe-admin-console) and selects **Adobe Experience Platform** from the list of products on the overview page.
1. The admin can view the default [product profiles](#product-profiles), edit their associated permissions, or create new customer product profiles as needed.
1. The admin adds users to product profiles, granting their associated permissions.
1. Users log in to the Experience Platform user interface with access only to capabilities they are entitled to through their product profiles.

<!-- (Add once the Access Control user guide is published)
For detailed steps on how to manage product profiles in the Admin Console, please refer to the [access control user guide].
-->

## Adobe Admin Console {#adobe-admin-console}

Adobe Admin Console provides a central location for managing Adobe product entitlements and access for your IMS Organization. Through the console, you can grant groups of users access permissions for various Platform capabilities, such as "Manage Datasets", "View Datasets", or "Manage Profiles".

By granting and withholding product permissions, you can control which operations a user can perform using Platform APIs or the user interface. API access validation is controlled through permissions, while certain UI elements will be hidden or altered depending on permissions granted to the current user.

## Product profiles

In the Admin Console, permissions are assigned to users through the use of **product profiles**. A product profile is a collection of permissions for specific Platform capabilities to which individual users can be assigned. Your organization can have many product profiles, and a single product profile can be assigned to one or many users.

In other words, access permissions cannot be assigned to individual users directly. If a user requires a certain combination of permissions that are not defined in any existing product profile, you must create a new profile to which that particular user can be assigned.

### Default product profiles {#product-profiles}

Experience Platform comes with three pre-configured default product profiles:

* **Production**: Provides access to all Platform capabilities except for sandbox management, as well as access to the default production sandbox.
* **Development**: Provides access to all Platform capabilities except for sandbox management, as well as access to the default development sandbox.
* **Sandbox Administrators**: Provides access only to sandbox management capabilities.

<!-- Provide link to sandbox docs here when published ^^^ -->

## Permissions {#permissions}

Permissions that are granted through the Admin Console are sorted by category, with some permissions granting access to several low-level functionalities. The following table outlines the available permissions for Experience Platform in the Admin Console, with descriptions of the specific features they grant access to.

<!-- Markdown table -->

| Category | Permission | Description |
| --- | --- | --- |
| Sandboxes | (Sandbox name) | Access to the selected sandbox environment. |
| Data Modeling | Manage Schemas | Access to read, create, edit, and delete schemas and related resources.|
| Data Modeling | View Schemas | Read-only access to schemas and related resources.
| Data Pipeline | Manage Datasets | Access to read, create, edit, and delete datasets. Read-only access for schemas.
| Data Pipeline | View Datasets | Read-only access for datasets and schemas.|
| Real-time Customer Profile | Manage Profiles | Access to read, create, edit, and delete datasets that are used in | | Real-time Customer Profile. Read-only access to available profiles.|
| Real-time Customer Profile | View Profiles | Read-only access to available profiles.|
| Real-time Customer Profile | Export Audience for Segment | Ability to export an evaluated audience segment to a dataset.|
| Identity | Manage Identity Namespaces | Full CRUD capabilities for identity namespaces.|
| Identity | View Identity Namespaces | Read-only access for identity namespaces.
| Monitoring | View Monitoring Dashboard | Read-only access to monitoring datasets and streams.|
| Sandbox Management | Manage Sandboxes | Full CRUD capabilities for sandboxes belonging to the IMS Organization.|
| Sandbox Management | View Sandboxes | Read-only access for sandboxes belonging to the IMS Organization.|
| Sandbox Management | Factory Reset a Sandbox | Ability to factory reset a sandbox.|

<!-- Table w/ inline HTML -->

| Platform service | High-level permission | Low-level permission mapping | Description |
| --- | --- | --- | --- |
| Schema Registry | Manage Schemas | SCHEMAS.READ<br>SCHEMAS.WRITE<br>SCHEMAS.DELETE<br>MIXINS.READ<br>MIXINS.WRITE<br>MIXINS.DELETE<br>CLASSES.READ<br>CLASSES.WRITE<br>CLASSES.DELETE<br>DATATYPES.READ<br>DATATYPES.WRITE<br>DATATYPES.DELETE | Full CRUD capabilities for all Schema Registry resources.|
| Schema Registry | View Schemas | SCHEMAS.READ<br>MIXINS.READ<br>CLASSES.READ<br>DATATYPES.READ<br>DESCRIPTOR_RELATIONSHIP.READ<br>DESCRIPTOR_IDENTITY.READ | Read-only access to schemas, classes, mixins, datatypes, relationships, and identities.|
| Catalog Service | Manage Datasets | DATASETS.READ<br>DATASETS.WRITE<br>DATASETS.DELETE<br>SCHEMAS.READ | Full CRUD capabilities for datasets, and read-only access for schemas.|
| Catalog Service | View Datasets | DATASETS.READ<br>SCHEMAS.READ | Read-only access for datasets and schemas.|
| Catalog Service | View Monitoring Dashboard | MONITORING<br>READ<br>DATASETS.READ<br>DATASETDATAES.READ | Read-only access to monitoring datasets and streams.|
| Real-time Customer Profile | Manage Profiles | DATASET.READ<br>PROFILES.READ<br>PROFILEDATASETS.WRITE<br>PROFILECONFIGS.READ<br>PROFILECONFIGS.WRITE<br>PROFILEDATASETS.DELETE | Full CRUD capabilities for managing datasets that are used in Real-time Customer Profile. Read-only access to available profiles.|
| Real-time Customer Profile | View Profiles | PROFILES.READ | Read-only access to available profiles.|
| Real-time Customer Profile | Export Audience for Segment | SEGMENTS.READ | Ability to export an evaluated audience segment to a dataset.|
| Identity Service | Manage Identity Namespaces | IDNAMESPACES.READ<br>IDNAMESPACES.WRITE<br>IDNAMESPACES.DELETE | Full CRUD capabilities for identity namespaces.|
| Identity Service | View Identity Namespaces | IDNAMESPACES.READ | Read-only access for identity namespaces.|
| Sandbox Management | Manage Sandboxes | SANDBOXES.READ<br>SANDBOXES.WRITE<br>SANDBOXES.DELETE | Full CRUD capabilities for sandboxes belonging to the IMS Organization.|
| Sandbox Management | View Sandboxes | SANDBOXES.READ | Read-only access for sandboxes belonging to the IMS Organization.|
| Sandbox Management | Factory Reset a Sandbox | SANDBOXES_RESET.WRITE | Ability to factory reset a sandbox.|
| Bears | Bugs | Beavers | Birds<ul><li>Orioles</li><li>Blue Jays</li><li>Penguins</li><li>Eagles</li></ul> |

<!--  (To be added once user guide is published)
## Next steps

To learn more about how to use the Admin Console to create product profiles and assign permissions for Platform, see the [access control user guide](). 
-->
