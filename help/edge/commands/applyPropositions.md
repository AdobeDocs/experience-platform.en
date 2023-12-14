---
title: applyPropositions
description: Re-render propositions that have already been rendered with sendEvent.
---
# applyPropositions

The `applyPropositions` command allows you to re-render propositions that were already rendered using the [`sendEvent`](sendevent/overview.md) command. This command is particularly useful when working with single-page applications where portions of the page get re-rendered, potentially overwriting any personalizations already applied to the page.

This command supports the following fields:

* **Propositions**: An array of proposition objects that you want to re-render.
* **Inferences**: An array of inference objects, which contain machine learning information about this user.
* **Destinations**: An array of destination objects returned from Experience Edge.

## Apply propositions using the Web SDK tag extension

Applying propositions is performed as an action within a rule in the Adobe Experience Platform Data Collection tags interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Apply propositions]**.
1. Set the desired fields 
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.