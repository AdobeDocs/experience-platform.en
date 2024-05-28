---
title: Privacy, Security, and Governance in AI Assistant
description: Learn about the privacy, security, and governance practices for AI Assistant.
hide: true
hidefromtoc: true
---
# Privacy, Security, and Governance in AI Assistant

AI Assistant in Adobe Experience Platform is built with privacy, security, and governance at the forefront. Read this document to learn about the customer trust-focused capabilities that you can expect from AI Assistant:

* No personal data is being used by AI Assistant today, even for training purposes.
* AI Assistant is unaware of consumer data.
* All existing Access Control policies will honored by AI Assistant.
  * Any new Attribute-based Access Control policies are reflected in AI Assistant after a maximum of 24 hours*
* You must be granted explicit permission to interact with AI Assistant.
  * You can set permissions differently for each product.
  * Permissions are granular and your sandbox administrator can configure which of your users can ask different question categories (documentation-based knowledge questions with AI Assistant or questions on operational insights).
* AI Assistant is a HIPAA-ready feature and meets HIPAA requirements around processing and usage of Protected Health Information (PHI).
* You can view a log of your previous interactions with AI Assistant within a 30-day retention policy.
* AI Assistant is grounded in sandbox-specific data and public Adobe documentation when answering to user prompts. Data is not shared across sandboxes.
* Prompts that you provide to AI Assistant are not shared to other customers.


**This implies that if any new labels are added to fields and objects or any new policies are created, then it will take AI Assistant up to 24 hours to honor them. During those 24 hours, users with newly restricted access can still access those fields and objects.* 