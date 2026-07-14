---
keywords: Experience Platform;home;popular topics;access control;attribute-based access control;
title: Attribute-Based Access Control Overview
description: This document provides information on attribute-based access control in Adobe Experience Platform
exl-id: 5495c55f-b808-40c1-8896-e03eace0ca4d
TQID: https://experienceleague.adobe.com/vECqPYq7h4-T7c3fBpgPyioB4ivq8thPTqMyZgLhAmk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
subfeature_v2:
  - id: a16ec9c0-4484-4842-b9a0-5504cde38e6a
    internal-label: Access control
  - id: a9b953c0-98db-499b-97f5-a0dc3290bda3
    internal-label: Adobe Admin Console
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d175cb4c-5781-454e-a826-bf6dff786265
    internal-label: Roles
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: d21bd11d-08df-4cd6-ad8f-cb59a09de5c0
    internal-label: Sandboxes
  - id: fe06da76-5b92-43de-9bda-c5c9c01b55e8
    internal-label: Segmentation UI
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: b23e006f-0a29-4f1d-8fd0-77aa56f3d12b
    internal-label: Data modeling
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Attribute-based access control overview {#attribute-based-access-control-overview}

Attribute-based access control is a capability of Adobe Experience Platform that enables administrators to control access to specific objects and/or capabilities based on attributes. Attributes can be metadata added to an object, such as a label added to a schema field or segment. An administrator defines access policies that include attributes to manage user access permissions.

Use this functionality to label Experience Data Model (XDM) schema fields with labels that define organizational or data usage scopes. In parallel, administrators can use the user and role administration interface to define access policies surrounding XDM schema fields and better manage the access given to users or groups of users (internal, external, or third-party users). Additionally, attribute-based access control allows administrators to manage access to specific segments. 

>[!IMPORTANT]
>
>Attribute-based access control is not to be confused with Experience Platform's data governance capabilities, which allow you to use labels and policies to control how data is used in Experience Platform rather than which users in your organization have access to it. See the [data governance overview](../../data-governance/home.md) for more information.

Through attribute-based access control, administrators of your organization can control users' access to sensitive personal data (SPD), personally identifiable information (PII) and customized type of data across all Experience Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that correspond to those fields.

The following video is intended to support your understanding of attribute-based access control, and outlines how to configure roles, resources, and policies.

>[!VIDEO](https://video.tv.adobe.com/v/345641?learn=on)

## Attribute-based access control terminology

Attribute-based access control involves the following components:

| Terminology | Definition |
| --- | --- |
| Attributes | Attributes are the identifiers that indicate the correlation between a user and the Experience Platform resources that they have access to. Attributes can be metadata added to an object, such as a label added to a schema field or segment. An administrator defines access policies that include attributes to manage user access permissions. |
| Labels | Labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into Experience Platform, or as soon as data becomes available for use in Experience Platform. |
| Permissions | Permissions include the ability to view and/or use Experience Platform features, such as creating sandboxes, defining schemas, and managing datasets. |
| Permission sets | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| Policies | Policies are statements that bring attributes together to establish permissible and impermissible actions. Policies can either be local or global, and can override other policies. |
| Resource | A resource is the asset or object that a subject can or cannot access. Resources can be segments or schema fields. |
| Roles | Roles are ways to categorize the types of users that are interacting with your Experience Platform instance and are building blocks of access control policies. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need. |
| Subject | A subject is the user requesting access to a resource to perform an action. |
| User groups | User groups are multiple users that have been grouped together and have the access to execute the same functions. |

## Permissions

>[!IMPORTANT]
>
>Once your organization is enabled for attribute-based access control, you can start using Permissions on Adobe Experience Cloud, instead of Roles in the Adobe Admin Console, to manage permissions for users, functionality, labels, and other resources in your organization.

Permissions is the area of Experience Cloud where administrators can define user roles and access policies to manage access permissions for features and objects within a product application. 

Through Permissions, you can create and manage roles, as well as assign the desired resource permissions for these roles. Permissions also allow you to manage the labels, sandboxes, and users associated with a specific role. For more information, see the [Permissions guide](ui/browse.md).

## Attribute-based access control API

The attribute-based access control API allows you to programmatically manage roles, policies, and products within Experience Platform using APIs. For more information see the guide on [using the API to manage attribute-based access control configurations](api/overview.md).

## Attribute-based access control in Adobe Experience Platform

The following sections provide information on how attribute-based access control is integrated to other components of Experience Platform:

### Access control

Experience Platform leverages [Adobe Admin Console](https://adminconsole.adobe.com) roles to link users with permissions and sandboxes. Permissions control access to a variety of Experience Platform capabilities, including data modeling, profile management, and sandbox administration. Once your organization is enabled for attribute-based access control, you can start using Permissions on Adobe Experience Cloud, instead of Roles in the Adobe Admin Console, to manage permissions for users, functionality, labels, and other resources in your organization.

There is limited availability to attribute-based access control for customers who purchase Healthcare and/or Privacy Shields. The features of this functionality include:

* Permissions interface: Provides an interface for you to define user roles, permissions and policies for attribute-based access control.

* Labeling: Add, edit, remove labels to user roles, schema fields, segments, and other supported objects in order to leverage access control policies. **Note:** Any segment that utilizes a labeled attribute must likewise be labeled if you want the same access restrictions to apply to it.

The administration workflows for all Experience Platform-powered applications from Admin Console to the new Permissions interface are being switched.

>[!IMPORTANT]
>
>Your roles are automatically migrated to the Permissions interface when your organization is enabled. The roles in Admin Console will remain as is for the time being. Please **do not** modify your roles after your organization has been enabled.

For more information on access control, see the [access control overview](../home.md).

### Destinations {#destinations}

[!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

As an administrator, you can use attribute-based access control functionalities to:

* Configure user access to view specific segments in the activation process, based on role, permissions, and labels;
  * In the activation process, users may be required to select segments they want to activate to a destination. As an administrator, you can provision users in your organization to only see segments that are labelled with labels that users have access to, and segments that do not contain any labels.
* Configure user access to view specific fields in the activation process, based on role, permissions, and labels;
  * In the activation process, users may be required to select fields they want to activate to a destination. As an administrator, you can provision users in your organization to only see fields that are labelled with labels that users have access to, and fields that do not contain any labels.

>[!IMPORTANT]
>
>In summary, keep in mind the following implications when working with destinations and attribute-based access control:
>
>* You can only activate audiences that you have permission to access and view in [Audience Portal](/help/segmentation/ui/audience-portal.md#browse) and [select segment step](/help/destinations/ui/activate-batch-profile-destinations.md#select-segments) of the activation workflow.
>* In the [mapping step of the activation workflow](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping), you can only view and select for activation the fields that you have access permission to.
>* When you are looking to activate additional segments to an existing destination where you do not have access to all the fields that are mapped for export, the activation workflow will be blocked for you. 

For more information on [!DNL Destinations], refer to the [[!DNL Destinations] overview](../../destinations/home.md).

### Identity Service

Adobe Experience Platform [!DNL Identity Service] helps you gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

As part of attribute-based access control, the `view-identity-graph` permission allows you to determine which users in your organization can access the identity graph through the user interface or APIs. For more information, see the guide on [using the identity graph viewer](../../identity-service/features/identity-graph-viewer.md).

For more information on [!DNL Identity Service], refer to the [[!DNL Identity Service] overview](../../identity-service/home.md).

### Real-Time Customer Profile

Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-Time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. Profile allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

As an administrator, you can use attribute-based access control functionalities to:

* Configure user access to specific profile attributes based on role, permissions, and labels;
  * As an administrator, you can provision users in your organization to only see profile attributes that are labelled with labels that users have access to, and profile attributes that do not contain any label;
  * As an administrator, you can provision users in your organization to only see profile attributes that are labelled with labels that users have access to, when creating segments;
* Configure user access to data preview by labelling specific data fields used in the data model's XDM schema.

For more information on Profile, refer to the [Profile overview](../../profile/home.md).

### Segmentation Service

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

As an administrator, you can use attribute-based access control functionalities to:

* Configure user access to view and manage specific segments, based on role, permissions, and labels;
  * As an administrator, you can provision users in your organization to only see segments that are labelled with labels that users have access to, and segments that do not contain any labels, when using the Segmentation UI.

For more information on [!DNL Segmentation Service], refer to the [[!DNL Segmentation Service] overview](../../segmentation/home.md).

### XDM

Experience Data Model (XDM) is an open-source specification that is designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

With attribute-based access control, you can:

* [Apply data usage labels to field groups and classes](../../xdm/tutorials/labels.md). This allows multiple schemas with the same field groups or classes, to have fields tagged with the same attributes, depending on the configurations at the field group or class level;
* Configure user access to specific XDM schema fields depending on the permission sets applied to roles assigned to users.

For more information on XDM, refer to the [XDM overview](../../xdm/home.md).

### Customer Journey Analytics (CJA)

Customer Journey Analytics (CJA) access permissions are managed at the application level in CJA. CJA uses its own attribute-based access controls and does not inherit or apply the attribute-based access controls defined in Adobe Experience Platform.

For more information on CJA access control, refer to the [CJA access control](https://experienceleague.adobe.com/en/docs/analytics-platform/using/technotes/access-control) documentation.
