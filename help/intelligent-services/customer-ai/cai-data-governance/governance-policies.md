---
keywords: Experience Platform;user guide;customer ai;popular topics;access controls;create model;
feature: Customer AI
title: Governance Policies for Customer AI
description: Adobe Experience Platform provides several services and tools that allow you to confidently control your collected experience data.
exl-id: be3eca3a-0ea1-4b84-9454-675a4f9ac71e
TQID: https://experienceleague.adobe.com/-M15OKzPOdrjHyc2UQk-gjwrNXCv14HrpZFr5x97DF8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Governance policies in Customer AI

Once you have completed the workflow to create a model and submit the model's configuration, the [policy enforcement](/help/data-governance/enforcement/auto-enforcement.md) checks to see if there are any violations. If a policy violation occurs, a popover appears indicating that one or more policies have been violated. This is to ensure that your data operations and marketing actions within Experience Platform are compliant with data usage policies. 

![A popover displaying information about the policy violation](../images/user-guide/policy-violation-popover-cai.png).

The popover provides specific information about the violation. You can resolve these violations through policy settings and other measures that aren't directly related to the configuration workflow. For example, you could change the labels so that certain fields are allowed to be used for data science purposes. Alternatively, you could also modify the model configuration itself so that it doesn't use anything with a label on it. See the documentation to learn more about how to set up [policies](/help/data-governance/policies/overview.md).
