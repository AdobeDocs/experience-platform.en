---
title: Adobe Privacy Extension Overview
description: Learn about the Adobe Privacy tag extension in Adobe Experience Platform.
---
# Adobe Privacy extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

The Adobe Privacy extension provides functionality for collecting and removing user IDs assigned to end users by Adobe solutions.

## Configure Solutions During Installation

When you install the Adobe Privacy extension from the Extension Catalog, you are prompted to select the solutions you want to update. Currently you can update the following solutions:

* Analytics (AA)
* Audience Manager (AAM)
* Target
* Visitor Service
* AdCloud
* Select one or more solutions, then select Update.
* When you have selected and configured your solutions, select Save. The Adobe Privacy Extension is added to your installed extensions list.

  The options for each solution are described below.

### Analytics

![](../../../images/ext-privacy-aa.jpg)

By default, you must provide your report suite by entering a string or selecting a data element.

To configure other items, select **[!UICONTROL Choose an Item]**, select the item you want to configure, then select **[!UICONTROL Add]** and enter the requested parameter or a data element.

### Audience Manager

![](../../../images/ext-privacy-aam.jpg)

Select **[!UICONTROL Choose an Item]**, select the item you want to configure, then select **[!UICONTROL Add]** and enter the requested parameter or a data element. Currently, you can configure only the `aamUUIDCookieName`.

### Target

![](../../../images/ext-privacy-target.jpg)

Enter the Target client code.

### Visitor Service

![](../../../images/ext-privacy-visitor.jpg)

Enter your IMS Organization ID.

### AdCloud

![](../../../images/ext-privacy-adcloud.jpg)

There are no specific parameters to configure for AdCloud.

## Configure the Adobe Privacy Extension

After you install the extension, you can disable or delete it. Select **[!UICONTROL Configure]** on the Adobe Privacy card in your installed extensions, then select either **[!UICONTROL Disable]** or **[!UICONTROL Uninstall]**.

## Actions

The following actions are available when you configure a rule using the Adobe Privacy extension.

### Retrieve Identities

When the event and conditions are met, retrieve identity information that is stored for the visitor.

Enter the name of a JavaScript function you want to pass the data to. This function or method handles the retrieved Identities. Whether you store them, display them, or send them to the Adobe GDPR API, is within your control.

### Remove Identities

When the event and conditions are met, remove identity information that is stored for the visitor.

Enter the name of a JavaScript function you want to pass the data to. This function or method handles the retrieved Identities. Whether you store them, display them, or send them to the Adobe GDPR API, is within your control.

### Retrieve Then Remove Identies

When the event and conditions are met, retrieve identity information that is stored for the visitor, then remove it.

## Tutorial: Configuring the Privacy extension

The following shows one stubbed example of how to set up a data element and use it with the Privacy extension.

1. Create a data element named `privacyFunc`.

    ``` JavaScript
    window.privacyFunc = function(a,b){
        console.log(a,b);
    }
    return window.privacyFunc
    ```

1. Create a rule to run on Library Load (page top), with an action from the Adobe Privacy extension.  Select `privacyFunc` as your data element.

    * **Extension:** Adobe Privacy
    * **Action Type:** Retrieve Identities
        This action type displays identities that have been created, removed, or not removed.
    * **Name:** Retrieve Identities

1. Update your development library, then publish and test.
