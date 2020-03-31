---
title: Adobe Experience Platform Web SDK help
seo-title: Adobe Experience Platform Web SDK help
description: Learn what Adobe Experience Platform Web SDK is and how it can be used.
seo-description: allow customers of the Adobe Experience Cloud to interact with the various services in the Experience Cloud
---

# (Beta) What is Adobe Experience Platform Web SDK

>[!IMPORTANT]
>
>Adobe Experience Platform Web SDK is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

Adobe Experience Platform Web SDK is a client-side JavaScript library that allows customers of the Adobe Experience Cloud to interact with the various services in the Experience Cloud. 

## SDKs replaced by Adobe Experience Platform Web SDK

Adobe Experience Platform Web SDK replaces the following SDKs:

* Visitor.js
* AppMeasurement.js
* AT.js
* DIL.js

This is not just a wrapper around existing libraries. It is a complete rewrite. Its purpose is to end challenges with tags firing in the right order, inconsistency with library versioning challenges, and better dependency management. It is a new way to implement the Experience Cloud.

In addition to a new library, there is a new endpoint that streamlines the HTTP requests to Adobe solutions. Before, Visitor.js sent a blocking call to the visitor ID service, then AT.js sent a call to Adobe Target, DIL.js sent a call to Adobe Audience Manager, and finally AppMeasurement.js sent a call to Adobe Analytics. This new library and endpoint can retrieve an ID, fetch a Target experience, send data to Audience Manager, and pass the data into the Adobe Experience Platform in a single call.