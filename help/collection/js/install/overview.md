---
title: Web SDK installation overview
description: Learn how to install the Experience Platform Web SDK.
keywords: web sdk installation;installing web sdk;internet explorer;promise;npm package
exl-id: b1de7ca1-d0d2-4661-a273-a1acf29afcd5
TQID: https://experienceleague.adobe.com/C8-LOh7sINppoBOGZP9YUuRnhj7-qxXb8c2Gmziecdw
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Web SDK installation overview

There are three supported ways to use Adobe Experience Platform Web SDK:

1. **[Web SDK tag extension](/help/tags/extensions/client/web-sdk/overview.md)**: Adobe recommends using this method. Install a tag loader on your site, then use the Adobe Experience Platform Data Collection UI to configure your implementation.
1. **[Web SDK JavaScript library](library.md)**: Reference a CDN-hosted library file, or host the library file using your own infrastructure. Make calls to the library within code on your site.
1. **[NPM](npm.md)**: Install the Web SDK on your site using the NPM package manager.

## Prerequisites

Before using or installing the Web SDK, you must meet the following requirements:

* The architecture in Adobe Experience Platform must be configured first. These settings include any necessary schemas, identities, and datastreams.
* You must have the right permissions configured to access the appropriate tools. For example, if your organization decides to use the tag extension, you must have the correct permissions to access the Data Collection UI. See [Data collection permissions](../../permissions.md) for more information.
* Having a 1st-party domain (CNAME) is recommended. If you already have a CNAME for Adobe Analytics, you can use that one. Testing in development works without a CNAME, but Adobe recommends having one before publishing to production. See [First-party device IDs](../../identity/fpid.md) for more information.
