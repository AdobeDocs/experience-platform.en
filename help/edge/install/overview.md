---
title: Install the Adobe Experience Platform Web SDK
description: Learn how to install the Experience Platform Web SDK.
keywords: web sdk installation;installing web sdk;internet explorer;promise;npm package
exl-id: b1de7ca1-d0d2-4661-a273-a1acf29afcd5
---
# Install the SDK {#installing-the-sdk}

There are three supported ways to use Adobe Experience Platform Web SDK:

1. The preferred way to use Adobe Experience Platform Web SDK is via the Data Collection UI or Experience Platform UI.
1. Adobe Experience Platform Web SDK is also available on a content delivery network (CDN) for you to use.
1. Use the NPM library which exports EcmaScript 5 and EcmaScript 2015 (ES6) modules.

---
title: Prerequisites for Using the Adobe Experience Platform Web SDK
description: Learn about the prerequisites for using Adobe Experience Platform Web SDK.
keywords: 1st-party domain;CNAME;schema;create schema;launch;aep web sdk extension;extension;configuration id;configuration tool;data element;create data element;XDM Object;sendEvent;send Event;
exl-id: 98ae69db-bc87-4ea3-b101-664ac53e7ae0
---
# Prerequisites for using the Adobe Experience Platform Web SDK

To use the Adobe Experience Platform Web SDK, you must first:

- Have the right permissions configured for users in your organization. All Experience Cloud customers have access to the Data Collection tools, each user in your organization will just need permissions to Schemas, Identities, and Datastreams. To read more on how to set up these permissions see our documentation on [data collection permissions management](https://experienceleague.adobe.com/docs/experience-platform/collection/permissions.html).
- Having 1st-party domain (CNAME) enabled is recommended. If you already have a CNAME for Adobe Analytics, you should use that one. Testing in development works without a CNAME, but Adobe recommends having one before you go to production. Although a CNAME implementation does not provide any benefits in terms of cookie lifetime, it can prevent certain ad blockers and less-common browsers from blocking SDK requests. In those cases, using a CNAME might prevent your data collection from being disrupted for users employing these tools.
- If your website is already using the [Experience Cloud ID Service](https://experienceleague.adobe.com/docs/experience-platform/edge/identity/overview.html) on your website--either through Visitor API or the Experience Cloud ID Service extension within Adobe Experience Platform Launch--and you would like to continue using it while migrating to Adobe Experience Platform Web SDK, you must be using the latest version of Visitor API or the Experience Cloud ID Service extension. See [ID Migration](https://experienceleague.adobe.com/docs/experience-platform/edge/identity/overview.html#identity) for more information.