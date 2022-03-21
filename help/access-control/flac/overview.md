---
keywords: Experience Platform;home;popular topics;access control;field level access control;FLAC
title: Field Level Access Control Overview
description: This document provides information on Field Level Access Control in Adobe Experience Platform
hide: true
hidefromtoc: true
exl-id: 5495c55f-b808-40c1-8896-e03eace0ca4d
---
# Field level access control overview

Field level access control allows you to configure user access to specific field elements of Adobe Experience Platform including Experience Data Model (XDM) schemas, Profile attributes, and segments. This allows you to better manage access to sensitive personal data (SPD) and personally identifiable information (PII) and also restrict access to this type of data.

Through field level access control, administrators of your organization can control users' access to both SPD and PII across all Platform workflows and resources. Administrators can define specific user roles that have access only to specific fields, as well as only to specific data that correspond to those fields.

## Understanding field level access control

Field level access control involves the following components:

| Terminology | Definition |
| --- | --- |
| Attributes | Attributes are the identifiers that indicate the correlation between a user and the Platform resources that they have access to. |
| Labels |
| Permission sets | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| Policies | Policies are statements that bring attributes together to establish permissible and impermissible actions. Policies can either be local or global, and can override other policies. |
| Resource | A resource is the asset or object that a subject can or cannot access. Resources can be files, applications, servers, or even APIs, |
| Roles | Roles define the access that an administrator, a specialist, or an end-user has to resources in your organization. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need. |
| Subject | A subject is the user requesting access to a resource to perform an action. |
| User groups | User groups are multiple users that have been grouped together and have the access to execute the same functions. |

## Permissions UI

## Field level access control API

## Field level access control in Platform

The following sections provide information on how field level access control is integrated to other components of Platform:

### Access control

[!DNL Experience Platform] leverages [Adobe Admin Console](https://adminconsole.adobe.com) product profiles to link users with permissions and sandboxes. Permissions control access to a variety of Platform capabilities, including data modeling, profile management, and sandbox administration.

### XDM

Experience Data Model (XDM) is an open-source specification that is designed to improve the power of digital experiences. It provides common structures and definitions for any application to communicate with services on Adobe Experience Platform. By adhering to XDM standards, all customer experience data can be incorporated into a common representation to deliver insights in a faster, more integrated way. You can gain valuable insights from customer actions, define customer audiences through segments, and use customer attributes for personalization purposes.

### Identity Service

Adobe Experience Platform [!DNL Identity Service] helps you gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

### Profile

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. With Real-time Customer Profile, you can see a holistic view of each individual customer that combines data from multiple channels, including online, offline, CRM, and third party data. [!DNL Profile] allows you to consolidate your disparate customer data into a unified view offering an actionable, timestamped account of every customer interaction.

### Segmentation Service

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.
