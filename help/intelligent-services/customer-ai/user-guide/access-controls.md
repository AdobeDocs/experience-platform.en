---
keywords: Experience Platform;user guide;customer ai;popular topics;access controls;create instance;
solution: Experience Platform, Real-time Customer Data Platform
feature: Customer AI
title: Access Control for Customer AI
description: AI/ML Services provide Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.
---

# Access Control for Customer AI

Access control for Customer AI is provided through Adobe Experience Platform in the Adobe Admin Console. This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes.

When using access control, the View Customer AI and Manage Customer AI privileges grant access to different functionalities of Customer AI. The Manage Customer AI permission lets you create, update, delete, enable, or disable an instance while View Customer AI lets you read or view it. 

For more information on access control, see the access control overview.

# Attribute-based Access Control

IMPORTANT

Attribute-based access control is currently available in a limited release only.

Attribute-based access control is a capability of Adobe Experience Platform that enables administrators to control access to specific objects and/or capabilities based on attributes. Attributes can be metadata added to an object, such as a label added to a schema field or segment. An administrator defines access policies that include attributes to manage user access permissions.
This functionality allows you to label Experience Data Model (XDM) schema fields with labels that define organizational or data usage scopes. In parallel, administrators can use the user and role administration interface to define access policies surrounding XDM schema fields and better manage the access given to users or groups of users (internal, external, or third-party users). Additionally, attribute-based access control allows administrators to manage access to specific segments.

Through attribute-based access control, administrators can control users’ access to both sensitive personal data (SPD) and personally identifiable information (PII) across all Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that corresponds to those fields.

Due to attribute-based access control, some fields and functionalities might have access restricted and be unavailable for certain Customer AI service instances. Examples include, “Identity”, “Score Definition”, and “Clone.”

At the top of the Customer AI workspace insights page, the details that show in the sidebar have restricted access.