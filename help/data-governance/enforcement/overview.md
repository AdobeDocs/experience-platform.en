---
keywords: Experience Platform;home;popular topics;Policy enforcement;Automatic enforcement;API-based enforcement;data governance
solution: Experience Platform
title: Policy Enforcement Overview
description: Learn how data usage policies are enforced on Adobe Experience Platform.
exl-id: d19d8060-85a1-405c-856d-f59041947a33
TQID: https://experienceleague.adobe.com/oyKG2F221xBKRdWXByxwY-MwI-QmveafBwsXj-8-MCM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
---
# Policy enforcement overview

Once [data usage labels](../labels/overview.md) have been applied and [data usage policies](../policies/overview.md) have been defined, you can enforce those policies to prevent data operations that constitute policy violations.

>[!NOTE]
>
>This document focuses on the enforcement of data usage policies. For information on access control policies, refer to the guide on [attribute-based access control](../../access-control/abac/overview.md).

There are two methods of policy enforcement on Adobe Experience Platform: automatic enforcement and API-based enforcement.

## Automatic enforcement

Experience Platform leverages data lineage, data classification, and policy management capabilities to automatically evaluate and surface policy violations. See the overview on [automatic policy enforcement](./auto-enforcement.md) for more information.

## API-based enforcement

The [!DNL Policy Service] API provides endpoints that allow you to test marketing actions against datasets or arbitrary combinations of data usage labels in order to check if any policy violations occur. Based on the API response, you can then set up protocols within your experience application to appropriately enforce data governance policy compliance.

See the tutorial on [API-based enforcement](./api-enforcement.md) for steps on how to evaluate policies using the API.
