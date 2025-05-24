---
title: Data collection configuration settings
description: Configure data collection settings in the Web SDK tag extension.
---
# Data collection configuration settings

This configuration section allows you to determine how data is collected across the extension.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section.

![Image showing the data collection settings of the Web SDK tag extension in the Tags UI.](../assets/web-sdk-ext-collection.png)

The following options are available:

* **[!UICONTROL On before event send callback]**: A callback function to evaluate and modify the payload sent to Adobe. Use the `content` variable within the callback function to modify the payload. For example, you can modify `content.xdm` to alter an XDM field, or you can modify `content.data` to modify non-XDM data. This callback is the tag equivalent to [`onBeforeEventSend`](/help/collection/js/commands/configure/onbeforeeventsend.md) in the JavaScript library.
* **[!UICONTROL Collect internal link clicks]**: A checkbox that enables the collection of link tracking data internal to your site or property. This checkbox is the tag equivalent to [`clickCollection.internalLinkEnabled`](/help/collection/js/commands/configure/clickcollection.md) in the JavaScript library. When you enable this checkbox, event grouping options appear:
  * **[!UICONTROL No event grouping]**: Link tracking data is sent to Adobe in separate events. Link clicks sent in separate events can increase the contractual usage of data sent to Adobe Experience Platform.
  * **[!UICONTROL Event grouping using session storage]**: Store link tracking data in session storage until the next page event. On the following page, the stored link tracking data and page view data is sent to Adobe at the same time. Adobe recommends enabling this setting when tracking internal links.
  * **[!UICONTROL Event grouping using local object]**: Store link tracking data in a local object until the next page event. If a visitor navigates to a new page, link tracking data is lost. This setting is most beneficial in context of single-page applications.
* **[!UICONTROL Collect external link clicks]**: A checkbox that enables the collection of external links. This checkbox is the tag equivalent to [`clickCollection.externalLinkEnabled`](/help/collection/js/commands/configure/clickcollection.md) in the JavaScript library.
* **[!UICONTROL Collect download link clicks]**: A checkbox that enables the collection of download links. This checkbox is the tag equivalent to [`clickCollection.downloadLinkEnabled`](/help/collection/js/commands/configure/clickcollection.md) in the JavaScript library.
* **[!UICONTROL Download link qualifier]**: A regular expression that qualifies a link URL as a download link. This string is the tag equivalent to [`downloadLinkQualifier`](/help/collection/js/commands/configure/downloadlinkqualifier.md) in the JavaScript library.
* **[!UICONTROL Filter click properties]**: A callback function to evaluate and modify click-related properties before collection. This function runs before the [!UICONTROL On before event send callback], and is the tag equivalent to [`clickCollection.filterClickDetails`](/help/collection/js/commands/configure/clickcollection.md) in the JavaScript library. Within the code editor, you have access to the following variables:
  * **`content.clickedElement`**: The DOM element that was clicked.
  * **`content.pageName`**: The page name when the click happened.
  * **`content.linkName`**: The name of the clicked link.
  * **`content.linkRegion`**: The region of the clicked link.
  * **`content.linkType`**: The type of link (exit, download, or other).
  * **`content.linkURL`**: The destination URL of the clicked link.
  * **`return true`**: Immediately exit the callback with the current variable values.
  * **`return false`**: Immediately exit the callback and abort collecting data.
  * Any variables defined outside of `content` can be used, but are not included in the payload sent to Adobe.
* **Context settings**: Automatically collect visitor information, which populates specific XDM fields for you. You can choose **[!UICONTROL All default context information]** or **[!UICONTROL Specific context information]**. It is the tag equivalent to [`context`](/help/collection/js/commands/configure/context.md) in the JavaScript library.
  * **[!UICONTROL Web]**: Collects information about the current page.
  * **[!UICONTROL Device]**: Collects information about the user's device. 
  * **[!UICONTROL Environment]**: Collects information about the user's browser.
  * **[!UICONTROL Place context]**: Collects information about the user's location.
  * **[!UICONTROL High entropy user-agent hints]**: Collects more detailed information about the user's device.

>[!TIP]
>
>The **[!UICONTROL On before link click send]** field is a deprecated callback that is only visible for properties that already have it configured. It is the tag equivalent to [`onBeforeLinkClickSend`](/help/collection/js/commands/configure/onbeforelinkclicksend.md) in the JavaScript library. Use the **[!UICONTROL Filter click properties]** callback to filter or adjust click data, or use the **[!UICONTROL On before event send callback]** to filter or adjust the overall payload sent to Adobe. If both the **[!UICONTROL Filter click properties]** callback and the **[!UICONTROL On before link click send]** callback are set, only the **[!UICONTROL Filter click properties]** callback runs.
