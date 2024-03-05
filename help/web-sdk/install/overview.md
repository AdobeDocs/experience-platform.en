---
title: Web SDK installation overview
description: Learn how to install the Experience Platform Web SDK.
keywords: web sdk installation;installing web sdk;internet explorer;promise;npm package
exl-id: b1de7ca1-d0d2-4661-a273-a1acf29afcd5
---
# Web SDK installation overview

There are three supported ways to use Adobe Experience Platform Web SDK:

1. **[Web SDK tag extension](extension.md)**: Adobe recommends using this method. Install a tag loader on your site, then use the Adobe Experience Platform Data Collection UI to configure your implementation.
1. **[Web SDK JavaScript library](library.md)**: Reference a CDN-hosted library file, or host the library file using your own infrastructure. Make calls to the library within code on your site.
1. **[NPM](npm.md)**: Install the Web SDK on your site using the NPM package manager .

## Prerequisites

Before using or installing the Web SDK, you must meet the following requirements:

* The architecture in Adobe Experience Platform must be configured first. These settings include any necessary schemas, identities, and datastreams.
* You must have the right permissions configured to access the appropriate tools. For example, if your organization decides to use the tag extension, you must have the correct permissions to access the Data Collection UI. See [data collection permissions management](https://experienceleague.adobe.com/docs/experience-platform/collection/permissions.html) for more information.
* Having a 1st-party domain (CNAME) is recommended. If you already have a CNAME for Adobe Analytics, you can use that one. Testing in development works without a CNAME, but Adobe recommends having one before publishing to production. See [First-party device IDs](../identity/first-party-device-ids.md) for more information.
