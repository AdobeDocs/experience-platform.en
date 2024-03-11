---
title: Install the Web SDK using the tag extension
description: Reference the Web SDK library using Adobe Experience Cloud Data Collection.
exl-id: ba8348c9-f642-4230-9f7f-4496d4154d83
---
# Install the Web SDK using the tag extension

Adobe offers a dedicated tag extension to implement and configure the Web SDK. This implementation method is the primary method recommended by Adobe to deploy and maintain data collection code.

Once you meet the [prerequisites](overview.md), you can deploy the Web SDK tag extension by using the following steps:

## Install the extension within a tag

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property, or create a tag property.
1. Navigate to **[!UICONTROL Extensions]**, then select the **[!UICONTROL Catalog]** tab.
1. Locate and install the **[!UICONTROL Adobe Experience Platform Web SDK]** extension.
1. Select the appropriate sandbox and datastream for each environment, then click **[!UICONTROL Save]**.

See the documentation on how to [configure the Web SDK tag extension](../../tags/extensions/client/web-sdk/web-sdk-extension-configuration.md) for more information.

## Publish the tag code to development

The Web SDK extension is now installed for this tag. You can now publish the tag code for use in a development environment.

1. Navigate to **[!UICONTROL Publishing flow]**, then select **[!UICONTROL Add Library]**.
1. Give this library any desired name, such as "Add Web SDK library". Set the [!UICONTROL Environment] drop-down menu to "Development".
1. Select **[!UICONTROL Add All Changed Resources]**, then click **[!UICONTROL Save & Build to Development]**.

## Install the loader code on your site

Now that the tag code is published, you can add the tag loader code to your website.

1. Navigate to **[!UICONTROL Environments]**, then click the Box icon next to "Development" to open a modal window containing install instructions for this environment.
1. Copy the embed code and paste it in the `<head>` tag of your website.

## Fill out your implementation and publish to production

See the [Web SDK extension overview](../../tags/extensions/client/web-sdk/overview.md) for more information around the extension itself, and [Tags overview](../../tags/home.md) for more information around navigating the tags interface.
