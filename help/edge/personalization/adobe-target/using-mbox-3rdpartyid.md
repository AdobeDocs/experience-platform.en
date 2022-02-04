---
title: Real-time profile syncing for mbox3rdPartyId
description: Learn how to use mbox3rdPartyId with the Adobe Experience Platform Web SDK.
keywords: personalization;target;adobe target;renderDecisions;sendEvent;mbox3rdPartyId;
exl-id: 
---

# What is `mbox3rdPartyId`

The mbox3rdPartyId in Adobe Target is your company’s visitor ID, such as the membership ID for your company’s loyalty program.

When a visitor logs in to a company’s site, the company typically creates an ID that is tied to the visitor’s account, loyalty card, membership number, or other applicable identifiers for that company. [Learn more](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/3rd-party-id.html?lang=en#)


# How to use `mbox3rdPartyId` with the Web SDK

### Step 1: Configure the `Target Third Party ID Namespace` in your [Datastream](../../fundamentals/datastreams.md), using the ID Namespace you would like to use as an mbox 3rd party ID. 
[Learn more about ID namespaces](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html)

![](assets/mbox3rdpartyid.png)


### Step 2: Send the `mbox3rdpartyId` to Target in the `sendEvent` command, using the ID namespace that you have configured in Step 1.
[Learn more about sending IDs](../../identity/overview.md#syncing-identities)

```javascript
alloy("sendEvent", {
  xdm: {
    "identityMap": {
      "ID_NAMESPACE": [ // Replace `ID_NAMESPACE` with the namespace you have configured in Step 1.
        {
          "id": "1234",
          "authenticatedState": "authenticated"
        }
      ]
    }
  }
});
```


