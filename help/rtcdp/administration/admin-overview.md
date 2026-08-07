---
keywords: rtcdp administration overview;administration overview
title: Real-Time Customer Data Platform Administration Overview
description: This document provides an overview of the administration capabilities of Adobe Real-Time Customer Data Platform, powered by Adobe Experience Platform.
feature: Access Control, Get Started, Sandboxes
exl-id: c5bdeac6-345a-4ef1-bc5a-a993f565b9d6
TQID: https://experienceleague.adobe.com/qSXP2h0wS-89O6K3Xn21JCWCf-Ur1iuAzfLtMSgp8yc
product_v2:
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: a3f1e846-82a6-4574-9832-7d46ef69f306
    internal-label: Administration
subfeature_v2:
  - id: a3118268-59a6-4679-b8b5-7e62de26c61f
    internal-label: Account profile, Account profile (RTCDP)
  - id: c14504d0-ed2f-4120-8361-02a1874e245a
    internal-label: Access control
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Real-Time Customer Data Platform administration overview

This document provides an overview of the administration capabilities of [!DNL Adobe Real-Time Customer Data Platform], powered by Adobe Experience Platform. 

[!DNL Experience Platform] allows administrators to manage role-based access control for users, as well as manage virtual sandboxes for application development. 

The following sections provide introductions to the central components of [!DNL Experience Platform] administration capabilities, and includes links to [!DNL Experience Platform] documentation where more detailed information is provided.

## Access control

Attribute-based access control is administered through the Permissions UI. This functionality leverages roles in the Permissions UI, allowing you to link users with permissions and sandboxes. Using this feature, administrators can grant or restrict access to specific Real-Time CDP capabilities for defined sets of users.

To learn more about access control, see the [attribute-based access control overview](/help/access-control/abac/overview.md) in the [!DNL Experience Platform] documentation.

>[!IMPORTANT]
>
>For a detailed guide to granting access to Real-Time CDP capabilities, including enabling visibility in the UI, please follow the steps provided in the [access control user guide](../../access-control/ui/overview.md), specifically those for managing details and additional services for a product profile.

## Sandboxes

Adobe Experience Platform (and Real-Time CDP by extension) is built to enrich digital experience applications on a global scale. Companies often run multiple digital experience applications in parallel and need to cater to the development, testing, and deployment of these applications while ensuring operational compliance.

To address this need, Adobe Experience Platform provides *sandboxes*, enabling you to partition a single [!DNL Experience Platform] instance into separate virtual environments that can be used to develop and evolve digital experience applications. You can use the sandbox tooling feature to improve configuration accuracy across sandboxes and seamlessly export and import sandbox configurations between sandboxes. Follow the steps provided in the [sandbox tooling UI guide](../../sandboxes/ui/sandbox-tooling.md).

For more information on sandboxes, see the [sandboxes overview](../../sandboxes/home.md) in the [!DNL Experience Platform] documentation.
