---
title: Action Types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different action types provided by the Adobe Experience Platform Web SDK tag extension.
solution: Experience Platform
exl-id: a4bf0bb9-59b4-4c43-97e6-387768176517
TQID: https://experienceleague.adobe.com/PXgXVKr8kxjrVb2Io6Gq4tvHbb-WTzVP1TKT23rt4jw
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Action types

This page lists all supported actions within a tag rule. To create or edit the actions within a tag rule:

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then select the desired [!UICONTROL Action Type].

The Web SDK tag extension offers the following actions:

* [**[!UICONTROL Apply propositions]**](apply-propositions.md): Render propositions in single-page applications without incrementing metrics.
* [**[!UICONTROL Apply response]**](apply-response.md): Perform an action based on a response from the Edge Network.
* [**[!UICONTROL Evaluate rulesets]**](evaluate-rulesets.md): Manually trigger a rulset evaluation.
* [**[!UICONTROL Get Media Analytics tracker]**](get-media-analytics-tracker.md): Export the legacy Media API to a window object.
* [**[!UICONTROL Redirect with identity]**](redirect-with-identity.md): Allows the sharing of a visitor identifier across domains that you own.
* [**[!UICONTROL Send event]**](send-event.md): Sends event data to the Edge Network.
* [**[!UICONTROL Send media event]**](send-media-event.md): Sends media data to the Edge Network.
* [**[!UICONTROL Set consent]**](set-consent.md): Sets the desired consent for the visitor.
* [**[!UICONTROL Update variable]**](update-variable.md): Modifies a [variable](../data-element-types.md#variable) data element.
