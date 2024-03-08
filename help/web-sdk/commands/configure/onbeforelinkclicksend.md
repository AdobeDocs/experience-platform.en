---
title: onBeforeLinkClickSend
description: Callback that runs just before link tracking data is sent.
exl-id: 8c73cb25-2648-4cf7-b160-3d06aecde9b4
---
# `onBeforeLinkClickSend`

The `onBeforeLinkClickSend` callback allows you to register a JavaScript function that can alter link tracking data you send just before that data is sent to Adobe. This callback allows you to manipulate the `xdm` or `data` object, including the ability to add, edit, or remove elements. You can also conditionally cancel the sending of data altogether, such as with detected client-side bot traffic. It is supported on Web SDK 2.15.0 or later.

This callback only runs when [`clickCollectionEnabled`](clickcollectionenabled.md) is enabled. If `clickCollectionEnabled` is disabled, this callback does not execute. If both `onBeforeEventSend` and `onBeforeLinkClickSend` contain registered functions, the `onBeforeLinkClickSend` function executes first. Once the `onBeforeLinkClickSend` function finishes, the `onBeforeEventSend` function then executes.

>[!WARNING]
>
>This callback allows the use of custom code. If any code that you include in the callback throws an uncaught exception, processing for the event halts. Data is not sent to Adobe.

## On before link click send callback using the Web SDK tag extension

Select the **[!UICONTROL Provide on before link click event send callback code]** button when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md). This button opens a modal window where you can insert the desired code.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section, then select the checkbox **[!UICONTROL Enable click data collection]**.
1. Select the button labeled **[!UICONTROL Provide on before link click event send callback code]**.
1. This button opens a modal window with a code editor. Insert the desired code, then click **[!UICONTROL Save]** to close the modal window.
1. Click **[!UICONTROL Save]** under extension settings, then publish your changes.

Within the code editor, you can add, edit, or remove elements within the `content` object. This object contains the payload sent to Adobe. You do not need to define the `content` object or wrap any code within a function. Any variables defined outside of `content` can be used, but are not included in the payload sent to Adobe.

>[!TIP]
>
>The objects `content.xdm`, `content.data`, and `content.clickedElement` are always defined in this context, so you do not need to check if they exist. Some variables within these objects depend on your implementation and data layer. Adobe recommends checking for undefined values within these objects to prevent JavaScript errors.

For example, say you want to perform the following actions:

* Modify the current page URL
* Capture the clicked element in an Adobe Analytics eVar
* Change the link type from "other" to "download"

The equivalent code within the modal window would be the following:

```js
// Set an already existing value to something else
content.xdm.web.webPageDetails.URL = "https://example.com/current.html";

// Use nullish coalescing assignments to create objects if they don't yet exist, preventing undefined errors. 
// Can be omitted if you are certain that the object is already defined
content.xdm._experience ??= {};
content.xdm._experience.analytics ??= {};
content.xdm._experience.analytics.customDimensions ??= {};
content.xdm._experience.analytics.customDimensions.eVars ??= {};

// Then set the property to the clicked element
content.xdm._experience.analytics.customDimensions.eVars.eVar1 = content.clickedElement;

// Use optional chaining to check if each object is defined, preventing undefined errors
if(content.xdm.web?.webInteraction?.type === "other") content.xdm.web.webInteraction.type = "download";
```

Similarly to [`onBeforeEventSend`](onbeforeeventsend.md), you can `return true` to immediately complete the function, or `return false` to immediately cancel sending data. If you cancel the sending of data in `onBeforeLinkClickSend` when both `onBeforeEventSend` and `onBeforeLinkClickSend` contain registered functions, the `onBeforeEventSend` function does not run.

## On before link click send callback using the Web SDK JavaScript library

Register the `onBeforeLinkClickSend` callback when running the `configure` command. You can change the `content` variable name to any value that you would like by changing the parameter variable inside the inline function.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "onBeforeLinkClickSend": function(content) {
    // Add, modify, or delete values
    content.xdm.web.webPageDetails.URL = "https://example.com/current.html";
    
    // Return true to immediately complete the function
    if (sendImmediate == true) {
      return true;
    }
    
    // Return false to immediately cancel sending data
    if(myBotDetector.isABot()){
      return false;
    }
  }
});
```

You can also register your own function instead of an inline function.

```js
function lastChanceLinkLogic(content) {
  content.xdm.application ??= {};
  content.xdm.application.name = "App name";
}

alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "onBeforeLinkClickSend": lastChanceLinkLogic
});    
```
