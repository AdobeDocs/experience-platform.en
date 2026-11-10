---
title: Configure the Adobe Experience Platform Web SDK
description: Use the configure command to set required settings when using the Web SDK.
exl-id: 05ba98ae-c004-4b7b-b55b-38290ca62cfa
TQID: 'https://experienceleague.adobe.com/MPrJXWHz2aG1iXNg5JmrGTS9MDSGeHJCtwJkjHMwLZE'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Configure the Adobe Experience Platform Web SDK

>[!BEGINSHADEBOX]

*This page describes how to configure the Web SDK. For the Server SDK, see [Configure the Server SDK](/help/collection/server-js/methods/configure/overview.md).*

>[!ENDSHADEBOX]

Configuration for the Web SDK is done with the **`configure`** command. This command is required on every page load before you call any other Web SDK commands, such as [`sendEvent`](../sendevent/overview.md).

**The [`datastreamId`](datastreamid.md) and [`orgId`](orgid.md) properties are required.** All other properties are optional, depending on your organization's implementation requirements. The following example shows a configuration object using most available properties:

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  clickCollectionEnabled: true,
  clickCollection: {
    internalLinkEnabled: true,
    downloadLinkEnabled: true,
    externalLinkEnabled: true,
    eventGroupingEnabled: true,
    filterClickDetails: function(content) {
      content.linkUrl = "https://example.com/current.html";
    },
    sessionStorageEnabled: true
  },
  context: ["web", "device", "environment", "placeContext", "highEntropyUserAgentHints", "oneTimeAnalyticsReferrer"],
  debugEnabled: true,
  defaultConsent: "pending",
  downloadLinkQualifier: "\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$",
  edgeBasePath: "ee",
  edgeConfigOverrides: { "datastreamId": "0dada9f4-fa94-4c9c-8aaf-fdbac6c56287" },
  edgeDomain: "data.example.com",
  idMigrationEnabled: false,
  onBeforeEventSend: function(content) {
    if(content.xdm.web?.webReferrer) delete content.xdm.web.webReferrer.URL;
  },
  prehidingStyle: "#container { opacity: 0 !important }",
  conversation: {
    stickyConversationSession: false
  },
  targetMigrationEnabled: true,
  thirdPartyCookiesEnabled: false
});
```
