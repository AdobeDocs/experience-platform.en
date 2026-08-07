---
keywords: Experience Platform;user guide;customer ai;popular topics;access controls;create model;
solution: Experience Platform
feature: Customer AI
title: Access Control for Customer AI
description: This document provides information on attribute-based access control for Customer AI.
exl-id: 02e3b6a4-304a-4ac4-b07c-010531101feb
TQID: https://experienceleague.adobe.com/ovzb-dwRBsFOMNTl-DwQLQ78zHvRmCBHDLPEV2--oCg
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: a16ec9c0-4484-4842-b9a0-5504cde38e6a
    internal-label: Access control
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: d175cb4c-5781-454e-a826-bf6dff786265
    internal-label: Roles
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Attribute-based access control in Customer AI

>[!IMPORTANT]
>
>Attribute-based access control is currently available in a limited release only.

[Attribute-based access control](../../../access-control/abac/overview.md) is a capability of Adobe Experience Platform that enables administrators to control access to specific objects and/or capabilities based on attributes. Attributes can be metadata added to an object, such as a label added to a schema field or segment. An administrator defines access policies that include attributes to manage user access permissions.

This functionality allows you to label Experience Data Model (XDM) schema fields with labels that define organizational or data usage scopes. In parallel, administrators can use the user and role administration interface to define access policies surrounding XDM schema fields and better manage the access given to users or groups of users (internal, external, or third-party users). Additionally, attribute-based access control allows administrators to manage access to specific segments.

Through attribute-based access control, administrators of your organization can control users' access to both sensitive personal data (SPD) and personally identifiable information (PII) across all Experience Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that correspond to those fields.

Due to attribute-based access control, some fields and functionalities would have access restricted and be unavailable for certain Customer AI service models. Examples include, "Identity", "Score Definition", and "Clone."

![The Customer AI workspace with the restricted fields of the service model results highlighted.](../images/user-guide/unavailable-functionalities.png)

At the top of the Customer AI workspace **insights page**, notice that the details in the sidebar, score definition, identity, and profile attributes all show "Access Restricted."

![The Customer AI workspace with the restricted fields of the schema highlighted.](../images/user-guide/access-restricted.png)

When you preview datasets with restricted schema on the **[!UICONTROL Create model workflow]** page, a warning appears to let you know that [!UICONTROL Due to access restrictions, certain information isn't displayed in the dataset preview.]

![The Customer AI workspace with the restricted fields of the preview datasets with restricted schema results highlighted.](../images/user-guide/restricted-dataset-preview-save-and-exit-cai.png)

After you create an model with restricted information and proceed to the **[!UICONTROL Define goal]** step, a warning is displayed at the top: [!UICONTROL Due to access restrictions, certain information isn't displayed in the configuration.]

![The Customer AI workspace with the restricted fields of the service model results highlighted.](../images/user-guide/information-not-displayed-save-and-exit.png)

When using access control, the **View Customer AI** and **Manage Customer AI** privileges grant access to different functionalities of Customer AI. The **Manage Customer AI** permission lets you **create**,**update**, **delete**, **enable**, or **disable** a model while **View Customer AI** lets you read or view it. The **create**, **update** and **delete** actions are recorded by audit logs.

See the documentation to learn [assigning permissions for access control](../../../access-control/home.md) or how to [use audit logs to monitor access and activity](../../../landing/governance-privacy-security/audit-logs/overview.md).

## Next steps

By reading this guide, you have been introduced to the main principles of access control in [!DNL Experience Platform]. You can now continue to the [access control user guide](../overview.md) for detailed steps on how use the [!DNL Admin Console] to create product profiles and assign permissions for [!DNL Experience Platform].
