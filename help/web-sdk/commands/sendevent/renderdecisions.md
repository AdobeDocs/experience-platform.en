---
title: renderDecisions
description: Render personalized content that is eligible for automatic rendering.
---
# `renderDecisions`

The `renderDecisions` property allows you to force the Web SDK to render any personalized content that is eligible for automatic rendering.

## Render personalized content using the Web SDK tag extension

Select the **[!UICONTROL Render visual personalization decisions]** checkbox within the actions of a tag rule.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Scroll down to the [!UICONTROL Personalization] section, then select the **[!UICONTROL Render visual personalization decisions]** checkbox.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Render personalized content using the Web SDK JavaScript library

Set the `renderDecisions` boolean when running the `sendEvent` command. If omitted, this property defaults to `false`. Set this property to `true` if you want to automatically render personalized content.

```js
alloy("sendEvent", {
  "xdm": adobeDataLayer.getState(reference),
  "renderDecisions": true
});
```
