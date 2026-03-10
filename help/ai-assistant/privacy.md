---
title: Privacy, Security, and Governance in AI Assistant (Legacy)
description: Learn about the privacy, security, and governance practices for AI Assistant (Legacy).
exl-id: 371e065d-c2dd-4233-b78e-a42757fce853
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
