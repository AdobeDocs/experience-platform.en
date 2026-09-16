---
keywords: Experience Platform;home;popular topics;access control;adobe admin console
solution: Experience Platform
feature: Attribution AI
title: Access control for Attribution AI
description: This document provides information on attribute-based access control for Attribution AI.
exl-id: 3ed672bf-1fa6-4893-99e0-afc2b2179543
TQID: https://experienceleague.adobe.com/EBwNWb-jybovAgSyrBCxIGgrovs8roXij-sgP2ZqpME
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
  - id: a9b953c0-98db-499b-97f5-a0dc3290bda3
    internal-label: Adobe Admin Console
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
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# Access Control in Attribution AI

Access control for Attribution AI is provided through Adobe Experience Platform in the [Adobe Admin Console](https://adminconsole.adobe.com/). This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes.

For more information on access control, see the [access control overview](../../../access-control/home.md).

## Attribute-based access control

>[!IMPORTANT]
>
>Attribute-based access control is currently available in a limited release only.

[Attribute-based access control](../../../access-control/abac/overview.md) is a capability of Adobe Experience Platform that enables administrators to control access to specific objects and/or capabilities based on attributes. Attributes can be metadata added to an object, such as a label added to a schema field or segment. An administrator defines access policies that include attributes to manage user access permissions.

This functionality allows you to label Experience Data Model (XDM) schema fields with labels that define organizational or data usage scopes. In parallel, administrators can use the user and role administration interface to define access policies surrounding XDM schema fields and better manage the access given to users or groups of users (internal, external, or third-party users). Additionally, attribute-based access control allows administrators to manage access to specific segments.

Through attribute-based access control, administrators can control users' access to both sensitive personal data (SPD) and personally identifiable information (PII) across all Experience Platform workflows and resources. Administrators can define user roles that have access only to specific fields and data that corresponds to those fields.

Due to attribute-based access control, some fields and functionalities might have access restricted and be unavailable for certain Attribution AI service models. Examples include, "Identity", "Score Definition", and "Clone."

At the top of the Attribution AI workspace **insights page**, the details that show in the sidebar have restricted access.

![The Attribution AI workspace with the restricted schema fields highlighted.](../images/user-guide/access-restricted.png)

If you select datasets with restricted schemas on the **[!UICONTROL Create model workflow]** page, a warning sign appears next to the dataset name with the message: [!UICONTROL Restricted information is excluded].

![The Attribution AI workspace with the restricted dataset fields highlighted.](../images/user-guide/restricted-info-excluded.png)

When you preview datasets with restricted schema on the **[!UICONTROL Create model workflow]** page, a warning appears to let you know that [!UICONTROL Due to access restrictions, certain information isn't displayed in the dataset preview.]

![The Attribution AI workspace with the results of restricted previewed schema fields highlighted.](../images/user-guide/restricted-dataset-preview.png)

After you create a model with restricted information and proceed to the **[!UICONTROL Define goal]** step, a warning is displayed at the top: [!UICONTROL Due to access restrictions, certain information isn't displayed in the configuration.]

![The Attribution AI workspace with the restricted fields of the model results highlighted.](../images/user-guide/information-not-displayed-save-and-exit.png)

## Next steps

By reading this guide, you have been introduced to the main principles of access control in [!DNL Experience Platform]. You can now continue to the [access control user guide](../overview.md) for detailed steps on how use the [!DNL Admin Console] to create product profiles and assign permissions for [!DNL Experience Platform].
