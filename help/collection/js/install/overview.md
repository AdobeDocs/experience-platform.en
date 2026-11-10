---
title: Web SDK installation overview
description: Learn how to install the Experience Platform Web SDK.
exl-id: b1de7ca1-d0d2-4661-a273-a1acf29afcd5
TQID: 'https://experienceleague.adobe.com/C8-LOh7sINppoBOGZP9YUuRnhj7-qxXb8c2Gmziecdw'
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Web SDK installation overview

There are three supported ways to use Adobe Experience Platform Web SDK:

1. **[Web SDK tag extension](/help/tags/extensions/client/web-sdk/overview.md)**: Adobe recommends using this method. Install a tag loader on your site, then use the Adobe Experience Platform Data Collection UI to configure your implementation.
1. **[Web SDK JavaScript library](library.md)**: Reference a CDN-hosted library file, or host the library file using your own infrastructure. Make calls to the library within code on your site.
1. **[NPM](npm.md)**: Install the Web SDK on your site using the NPM package manager.

## Prerequisites

Before using or installing the Web SDK, you must meet the following requirements:

* The architecture in Adobe Experience Platform must be configured first. These settings include any necessary schemas, identities, and datastreams.
* You must have the right permissions configured to access the appropriate tools. For example, if your organization decides to use the tag extension, you must have the correct permissions to access the Data Collection UI. See [Data collection permissions](/help/tags/ui/administration/user-permissions.md) for more information.
* Having a 1st-party domain (CNAME) is recommended. If you already have a CNAME for Adobe Analytics, you can use that one. Testing in development works without a CNAME, but Adobe recommends having one before publishing to production. See [First-party device IDs](/help/collection/identity/fpid.md) for more information.
