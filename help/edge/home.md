---
title: Adobe Experience Platform Web SDK help
seo-title: Adobe Experience Platform Web SDK help
description: Learn what Adobe Experience Platform Web SDK is and how it can be used.
seo-description: allow customers of the Adobe Experience Cloud to interact with the various services in the Experience Cloud.
---

# What is Adobe Experience Platform Web SDK

Adobe Experience Platform Web SDK is a client-side JavaScript library that allows customers of the Adobe Experience Cloud to interact with the various services in the Experience Cloud through the Adobe Experience Platform Edge Network.

## SDKs replaced by Adobe Experience Platform Web SDK

Adobe Experience Platform Web SDK replaces the following SDKs:

* Visitor.js
* AppMeasurement.js
* AT.js
* DIL.js

This is not just a wrapper around existing libraries. It is a complete rewrite. Its purpose is to end challenges with tags firing in the right order, inconsistency with library versioning challenges, and better dependency management. It is a new way to implement the Experience Cloud and it is [open source](https://github.com/adobe/alloy)

In addition to a new library, there is a new endpoint that streamlines the HTTP requests to Adobe solutions. Before, Visitor.js sent a blocking call to the visitor ID service, then AT.js sent a call to Adobe Target, DIL.js sent a call to Adobe Audience Manager, and finally AppMeasurement.js sent a call to Adobe Analytics. This new library and endpoint can retrieve an ID, fetch a Target experience, send data to Audience Manager, and pass the data to the Adobe Experience Platform in a single call.

## Getting Started

We highly recommend you [checkout our getting started guide](getting-started/quick-start-with-launch.md) for a quick tutorial on how to get started using launch.

This product is constantly evolving and growing to support more and more use cases. To keep up on the latest we checkout our [supported use-cases board](https://github.com/adobe/alloy/projects/5). We keep this up to date with the use cases we currently support and ones we are working on to enable you to make the best decisions possible. 

- __Use Cases Not Yet Supported__ - are use case that are on our roadmap to be done in the future.
- __Use Cases In Progress__ - These are the use cases the team is currently working on completing for release. 
- __Supported Use Cases__ - These are the use cases that are supported and work today. 
- __Use Cases We Won't Support__ - These are the use cases we have made a decision not to support.
