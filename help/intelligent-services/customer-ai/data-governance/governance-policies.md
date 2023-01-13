---
keywords: Experience Platform;user guide;customer ai;popular topics;access controls;create instance;
solution: Experience Platform, Real-time Customer Data Platform
feature: Customer AI
title: Access Control for Customer AI
description: AI/ML Services provide Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.
---

# Governance policies

Once you go through the workflow to create an instance and submit the model’s configuration, the policy enforcement checks to see if there are any violations. If a policy violation occurs, a popover appears indicating that one or more policies have been violated. This is to ensure that your data operations and marketing actions within Platform are compliant with data usage policies.

# popover showing policy violation

The popover provides specific information about the violation. You can resolve these violations through policy settings and other measures that aren’t directly related to the configuration workflow. For example, you could change the labels so that certain fields are allowed to be used for data science purposes. Alternatively, you could also modify the model configuration itself so that it doesn’t use anything with a label on it. See the documentation to learn more about how to set up policies.