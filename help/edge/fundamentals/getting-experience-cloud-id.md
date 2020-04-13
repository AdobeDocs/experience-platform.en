---
title: Debugging
seo-title: Adobe Experience Platform Web SDK debugging
description: Learn how to get Adobe Experience Cloud Id.
seo-description: Learn how to get Adobe Experience Cloud Id.
---

# (Beta) Debugging

>[!IMPORTANT]
>
>Adobe Experience Platform Web SDK is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

# Getting Experience Cloud ID

Adobe Experience Cloud uses a unique ID for every consumer. If you want to use this unique ID, use the `getEcid` command. 

```javascript
alloy("getEcid")
  .then(function(ecid) {
    // This function will get called with Adobe Experience Cloud Id when the command promise is resolved
  })
  .catch(function(error) {
    // The command failed.
    // "error" will be an error object with additional information
  })
```
