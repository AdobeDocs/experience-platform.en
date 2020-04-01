---
title: Adobe Target extension
seo-title: Adobe Target extension
description: The Adobe Target extension is a personalization destination in Adobe Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on Adobe Exchange.
seo-description: 
---

# Adobe Target Extension

## Overview

Adobe Target is a personalization destination in Adobe Real-time Customer Data Platform. For more information about the extension functionality, see the extension page on [Adobe Exchange](https://exchange.adobe.com/experiencecloud.details.100162.html). 
This destination is an Experience Platform Launch extension. For more information about how Launch extensions work in Adobe Real-time CDP, see [Experience Platform Launch extensions overview](/help/rtcdp/destinations/experience-platform-launch-destinations.md).


![Adobe Target extension](/help/rtcdp/destinations/assets/adobe-target-extension.png)


## Install extension

To install the Adobe Target extension:

1. In Adobe Real-time CDP, go to **[!UICONTROL Destinations > Catalog]**.
2. Browse to the extension in the destinations interface or use the search bar to find it.
3. Select the destination, select **[!UICONTROL Install Extension]** in the right rail. If the **[!UICONTROL Install Extension]** control is greyed out, contact your organization administrator and ask them to grant you the **[!UICONTROL manage_properties]** permission in Experience Platform Launch.
4. In the modal window, select the Experience Platform Launch property in which you want to install the extension. You also have the option of creating a new property in Experience Platform Launch if you haven't created one yet.
5. The workflow takes you to Experience Platform Launch to complete the installation.

For information about the extension configuration options, see the extension page in [Experience Launch documentation](https://docs.adobe.com/content/help/en/launch/using/extensions-ref/adobe-extension/target-extension/overview.html).


## How to use the extension

Once you have installed the extension, you can start setting up rules for it directly in Experience Platform Launch.

In Launch, you can set up rules for your installed extensions to send event data to the extension destination only in certain situations. For more information about setting up rules for your extensions, see [Rules documentation](https://docs.adobe.com/help/en/launch/using/reference/manage-resources/rules.html).

## Configure and delete extension

Even after the extension is installed on one of your properties, the Adobe Real-time CDP UI still displays **[!UICONTROL Install]** for the extension. Kick off the installation workflow as described in Install extension to get to Launch and configure or delete your extension.



