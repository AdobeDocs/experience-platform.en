---
title: Privacy, Security, and Governance in AI Assistant (Legacy)
description: Learn about the privacy, security, and governance practices for AI Assistant (Legacy).
exl-id: 371e065d-c2dd-4233-b78e-a42757fce853
TQID: https://experienceleague.adobe.com/8BM02f1fZmZqqfV4uVgtDETNVX0kh4SkGceKEyTzz6o
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: f8e8ea8a-6020-40da-99f7-6504fe599cb1
    internal-label: AI Assistant
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Privacy, Security, and Governance in AI Assistant (Legacy)

AI Assistant (Legacy) in Adobe Experience Platform is built with privacy, security, and governance at the forefront.

Read this document to learn about the customer trust-focused capabilities that you can expect from AI Assistant (Legacy):

* No personal data is being used by AI Assistant (Legacy) today, even for training purposes.
* AI Assistant (Legacy) is unaware of consumer data.
* All existing [access control](../access-control/home.md) policies will be honored by AI Assistant (Legacy).
  * Any new attribute-based access control policies are reflected in AI Assistant (Legacy) after a maximum of 24 hours*
* AI Assistant (Legacy) is a HIPAA-ready feature when used in combination with Adobe Experience Platform Healthcare Shield.
* You can view a log of your previous interactions with AI Assistant (Legacy) with a 30-day retention policy.
* AI Assistant (Legacy) is grounded in sandbox-specific data and public Adobe documentation when answering to user prompts. Data is not shared across sandboxes.
* Prompts that you provide to AI Assistant (Legacy) are not shared to other customers.

**This implies that if any new labels are added to fields and objects or any new policies are created, then it will take AI Assistant (Legacy) up to 24 hours to honor them. During those 24 hours, users with newly restricted access can still access those fields and objects.*
