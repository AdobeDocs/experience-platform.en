---
title: autoTrackPropositionInteractionsEnabled
description: Learn how to configure Experience Platform Web SDK to automatically collect link data.
---

# `autoTrackPropositionInteractionsEnabled`

The `autoTrackPropositionInteractionsEnabled` property is a boolean that determines if the Web SDK automatically collects link data. This property is valuable in cases where you prefer to manually track link data.

If not disabled, the following XDM elements automatically populate with data:

* `xdm.web.webInteraction.name`
* `xdm.web.webInteraction.type`
* `xdm.web.webInteraction.URL`

## Automatic propositions and interactions link tracking logic {#logic}

*@Jason Waters Fill in the blank here!*

## Enable automatic propositions and interactions link tracking through the Web SDK tag extension {#tag-extension}

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credential.
2. Navigate to **Data Collection** > **Tags**.
3. Select the desire tag property.
4. Navigate to **Extensions**, then select **Configure** on the Adobe Experience Platform Web SDK card.
5. Scroll down to the **[!UICONTROL Data Collection]** section, then select the checkbox **Enable propositions and interaction link tracking**.
6. Select **Save**, then publish your changes.

## Enable automatic propositions and interactions link tracking through the Web SDK JavaScript library {#library}

Set the `autoTrackPropositionInteractionsEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `[]`, an empty array. Set this value to `["AJO"]` if you prefer to automatically track `AJO` propositions and interactions.

```javascript
alloy("configure", {
   "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
   "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
   "autoTrackPropositionInteractionsEnabled": ["AJO"]
});
```
