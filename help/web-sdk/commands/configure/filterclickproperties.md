---
title: filterClickProperties
description: Callback function to evaluate and modify click related properties before collection.
---
# `filterClickProperties`

The `filterClickProperties` callback provides full controls over link tracking data that you collection. You can use this callback function to alter, obfuscate, or abort sending link tracking data. This callback is useful when you want to omit specific information, such as personally identifiable information within links. It is supported on Web SDK 2.21.0 or later.

This callback only runs when [`clickCollectionEnabled`](clickcollectionenabled.md) is enabled. If `clickCollectionEnabled` is disabled, this callback does not execute. If `filterClickProperties`, `onBeforeEventSend`, and `onBeforeLinkClickSend` each contain registered functions, the callbacks are executed in the following order:

* `filterClickProperties`
* `onBeforeLinkClickSend`
* `onBeforeEventSend`

>[!WARNING]
>This callback allows the use of custom code. If any code that you include in the callback throws an uncaught exception, processing for the event halts. Data is not sent to Adobe.

## Filter click properties callback using the Web SDK tag extension

Select the **[!UICONTROL Provide filter click properties callback code]** button when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md). This button opens a modal window where you can insert the desired code.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section, then select the button **[!UICONTROL Provide filter click properties callback code]**.
1. This button opens a modal window with a code editor. Insert the desired code, then click **[!UICONTROL Save]** to close the modal window.
1. Click **[!UICONTROL Save]** under extension settings, then publish your changes.

Within the code editor, you have access to the following variables:

* **`content.clickedElement`**: The DOM element that was clicked.
* **`content.pageName`**: The page name when the click happened.
* **`content.linkName`**: The name of the clicked link.
* **`content.linkRegion`**: The region of the clicked link.
* **`content.linkType`**: The type of link (typically exit, download, or other).
* **`content.linkURL`**: The destination URL of the clicked link.
* **`return true`**: Immediately exit the callback with the current variable values.
* **`return false`**: Immediately exit the callback and omit all link data. Other registered callback functions are still executed.

Editing these variable values impact downstream callback functions and the data ultimately sent to Adobe. Any variables defined outside of `content` can be used, but are not included in the payload sent to Adobe.

