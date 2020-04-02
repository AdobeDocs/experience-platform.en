---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage policies user guide
topic: policies
---

# Data usage policies user guide

Adobe Experience Platform Data Governance provides a user interface that allows you to create and manage data usage labels. This document provides an overview of the actions you can perform in the _Policies_ workspace in the Experience Platform UI.

## Prerequisites

This guide requires a working understanding of the following Experience Platform services:

- [Data Governance](../home.md)
- [Data usage policies](./overview.md)

## View data usage policies

In the Experience Platform UI, click **[!UICONTROL Policies]** to open the *[!UICONTROL Policies]* workspace. In the **[!UICONTROL Browse]** tab, you can see a list of available policies, including their associated labels, marketing actions, and status.

![](../images/policies/browse-policies.png)

Click on a listed policy to view its description and type. If a custom policy is selected, additional controls are displayed to edit, delete, or [enable/disable the policy](#enable).

![](../images/policies/policy-details.png)

## Create a custom data usage policy

To create a new custom data usage policy, click **[!UICONTROL Create policy]** in the top-right corner of the *Policies* workspace.

![](../images/policies/create-policy-button.png)

The *[!UICONTROL Create policy]* workflow appears. Start by providing a name and a description for the new policy.

![](../images/policies/create-policy-description.png)

Next, select the data usage labels that the policy will be based on. When selecting multiple labels, you are given the option to choose whether the data should contain all the labels or just one of them in order for the policy to apply. Click **[!UICONTROL Next]** when finished.

![](../images/policies/add-labels.png)

The *[!UICONTROL Select marketing actions]* step appears. Choose the appropriate marketing actions from the provided list, then click **[!UICONTROL Next]** to continue.

![](../images/policies/add-marketing-actions.png)

The *[!UICONTROL Review]* step appears, allowing you to review the details of the new policy before creating it. Once you are satisfied, click **[!UICONTROL Finish]** to create the policy.

![](../images/policies/policy-review.png)

The *[!UICONTROL Browse]* tab reappears, which now lists the newly created policy in "Draft" status. To enable the policy, see the next section.

![](../images/policies/created-policy.png)

## Enable or disable a data usage policy {#enable}

You can enable or disable custom data usage policies on the *[!UICONTROL Browse]* tab in the *[!UICONTROL Policies]* workspace. Select a custom policy from the list to display its details on the right. Under *[!UICONTROL Status]*, select the toggle button to enable or disable the policy.

![](../images/policies/enable-policy.png)

## Next steps

This document provided an overview of how to manage data usage policies in Experience Platform UI. For steps on how to manage policies using the DULE Policy API, see the [API policy creation tutorial](./create.md). For information on how to enforce data usage policies, see the [policy enforcement overview](../enforcement/overview.md).