---
keywords: launch web tags;web tags launch;website tags;web tags;launch;Launch
title: Tutorial Implement website tags with Adobe Launch
seo-title: Implement website tags with Adobe Launch
description: Use Adobe Launch to implement website tags in Adobe Experience Platform
seo-description: Use Adobe Launch to implement website tags in Adobe Experience Platform
---

# Tutorial: Implement website tags with Adobe Launch

This tutorial explains how to implement your website tags to send data to Adobe Experience Platform using Adobe Launch.

## Prerequisites

* The necessary schema and dataset are created in [!DNL Platform].
* The necessary configuration has been deployed in Experience Edge and has the matching Configuration ID and Edge domain.
* The company CMS has already been configured to deliver a JavaScript object on each page with the data you need to send to Platform.

## Steps

This tutorial contains the following steps:

1. Install the Adobe Experience Platform [!DNL Web SDK] extension.
1. Create a rule to tell [!DNL Launch] what data to send.
1. Bundle the extension and rule in a library.

## Install the Adobe Experience Platform [!DNL Web SDK] extension

First, install the Adobe Experience Platform [!DNL Web SDK] extension.

1. In [!DNL Launch], open the **[!UICONTROL Extensions]** tab.

    ![image](assets/launch-overview.png)

1. Select the Adobe Experience Platform Web SDK extension from the Launch Extension Catalog
    The configuration screen opens.

    ![image](assets/launch-extension-install.png)

    For more information, see [Extensions](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/extensions/overview.html) in the [!DNL Launch] documentation.

1. Configure the extension.

    The only settings you need right now are:

    * **Configuration ID:** Specify the Configuration ID you got from your Adobe representative.
    * **Edge Domain:** Specify the edge domain you got from your Adobe representative.

1. Select **[!UICONTROL Save]** and continue to the next step.

## Create a rule to tell [!DNL Launch] what data to send

Next, create a rule to let [!DNL Launch] know what data you want to send to Adobe Experience Platform and when you want to send it.

1. Under the **[!UICONTROL Rules]** tab, configure an event that will trigger on each new page of the website when the [!DNL Launch] library loads.

    ![image](assets/launch-make-a-rule.png)

1. Add an action.

    To configure the action, tell [!DNL Launch] where to find your data layer. The data layer is a JavaScript object that exists on the page, which is delivered from the same CMS that renders the webpage. Provide the JavaScript path to the data object.

    ![image](assets/launch-add-aep-action.png)

    The data object you send needs to be valid XDM that will pass validation against the schema that is used by the dataset connected to your Configuration ID.
    
1. Select **[!UICONTROL Keep Changes]**.

For more information, see [Rules](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/rules.html) in the [!DNL Launch] documentation.

## Bundle the extension and rule in a library

Next, [bundle the extension](https://docs.adobe.com/content/help/en/launch/using/reference/publish/overview.html) and your new rule together in a library and test those changes in a development environment.

![image](assets/launch-add-changes-to-library.png)

After you've completed your testing, promote the library through the workflow so it can be deployed onto the Production site. Data is now flowing from each individual user to Adobe Experience Platform.

![image](assets/launch-promote-library.png)

For more information, see [Libraries](https://docs.adobe.com/content/help/en/launch/using/reference/publish/libraries.html) in the [!DNL Launch] documentation.