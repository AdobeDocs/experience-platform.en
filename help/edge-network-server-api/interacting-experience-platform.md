---
title: Interacting with Adobe Experience Platform
description: Learn how to use the Edge Network Server API to interact with Adobe Experience Platform
seo-description: Learn how to use the Edge Network Server API to interact with Adobe Experience Platform
keywords: data collection; outlet; analytics; Adobe Experience Platform Edge Network api;aep
---

# Interacting with Adobe Experience Platform

## Overview {#overview}

To enable Experience Platform data collection, you must first [configure your datastream](../edge/fundamentals/datastreams.md) to forward events into Experience Platform datasets.

Once configured, the datastream configuration should include settings for `com_adobe_experience_platform`, as shown in the example below:


```json
{
  // datastream config header

  "settings": {
    "com_adobe_experience_platform": {
      "sandboxName": "prod",
      "enabled": true,
      "datasets": {
        "event": {
          "xdmSchema": "https://ns.adobe.com/atag/schemas/35a31609b6d3242736751df469ade031",
          "datasetId": "5f67e6ad9501b0194b5aafb6"
        }
      }
    }

    // other settings
  }
}
```
