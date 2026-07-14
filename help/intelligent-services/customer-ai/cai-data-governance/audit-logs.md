---
keywords: insights;customer ai;customer ai insights;CAI query service;customer ai queries;customer ai scores
title: Audit Logs Overview in Customer AI
description: Learn how to view and manage audit logs in Customer AI.
exl-id: f5b2d0b0-b6ae-4ccc-b4c9-ac9cc6078d81
TQID: https://experienceleague.adobe.com/shsHMPdVRPq2oFfNClrHAcKAqKlsNUs28H-Uu5pz4KI
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
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
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Audit logs in Customer AI

To increase the transparency and visibility of activities performed in the system, user activity within the Customer AI workflow is now captured in audit logs to understand any user-driven changes to the Customer AI models. These logs form an audit trail that may help with troubleshooting issues, and help your business effectively comply with corporate data stewardship policies and regulatory requirements.  If you are subject to the Health Insurance Portability and Accountability Act (HIPAA) and are creating, receiving, maintaining, or transmitting permitted sensitive personal data through Attribution AI or Customer AI, you are responsible for executing a BAA with Adobe and licensing Healthcare Shield.

In a basic sense, an audit log tells who performed what action, and when. Each action recorded in a log contains metadata that indicates the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type. It tracks the create, update, and delete actions taken by users in Customer AI.

[The audit logs selected in the Customer AI workspace](../../customer-ai/images/data-governance/audit-logs-cai.png)

## Access to audit logs

When the feature is enabled for your organization, audit logs are automatically collected as activity occurs. You do not need to manually enable log collection.

In order to view and export audit logs, you must have been granted the Audit Logs Access access control permission in Adobe Console. To learn how to manage individual permissions for Customer AI features, please refer to the [access control documentation](../cai-data-governance/access-controls.md).
