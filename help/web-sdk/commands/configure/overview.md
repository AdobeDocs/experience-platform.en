---
title: Configure the Adobe Experience Platform Web SDK
description: Use the configure command to set required settings when using the Web SDK.
exl-id: 05ba98ae-c004-4b7b-b55b-38290ca62cfa
---
# Configure the Adobe Experience Platform Web SDK

Configuration for the Web SDK is done with the `configure` command. Configuring the Web SDK is a vital and required step that must happen whenever the library or tag extension is used.

## Configure the Web SDK using the tag extension {#configure-tag-extension}

Follow the steps below to configure the Web SDK through the tag extension.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Go to the [Web SDK tag extension configuration page](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md) for detialed information on all the configuration options.

These configuration settings are set whenever you use the extension to send data to Adobe.

## Configuration the Web SDK using the JavaScript library {#configure-js}

Run the `configure` command. This command is required before you can call any other Web SDK commands, such as [`sendEvent`](../sendevent/overview.md).

The [`edgeConfigId`](edgeconfigid.md) and [`orgId`](orgid.md) properties are required. All other properties are optional, depending on your organization's implementation requirements.

See the table of contents of this user guide for detailed information about each of the supported commands.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "clickCollectionEnabled": false,
  "context": ["web", "device", "environment", "placeContext", "highEntropyUserAgentHints"],
  "debugEnabled": true,
  "defaultConsent": "pending",
  "downloadLinkQualifier": "\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$",
  "edgeBasePath": "ee",
  "edgeConfigOverrides": { "datastreamId": "0dada9f4-fa94-4c9c-8aaf-fdbac6c56287" },
  "edgeDomain": "data.example.com",
  "idMigrationEnabled": false,
  "onBeforeEventSend": function(content) {
    if(content.xdm.web?.webReferrer) delete content.xdm.web.webReferrer.URL;
  },
  "onBeforeLinkClickSend": function(content) {
    content.xdm.web.webPageDetails.URL = "https://example.com/current.html";
  },
  "prehidingStyle": "#container { opacity: 0 !important }",
  "targetMigrationEnabled": true,
  "thirdPartyCookiesEnabled": false
});
```
