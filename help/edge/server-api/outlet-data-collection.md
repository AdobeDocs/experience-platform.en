---
title: Outlet data collection
description: Learn how the Edge Network Gateway API performs data collection in conjuction with other Adobe solutions
seo-description: Learn how the Edge Network Gateway API performs data collection in conjuction with other Adobe solutions
keywords: data collection; outlet; analytics; edge network gateway api
---

# Outlet data collection

## Overview {#overview}

The Edge Network Gateway API can send the collected data to other Adobe solutions, such as Adobe Experience Platform or Adobe Analytics. It can also forward events to third-party systems.

## Adobe Experience Platform {#aep}

To enable Experience Platform data collection, you must first [configure your datastream](../fundamentals/datastreams.md) to forward events into Experience Platform datasets.

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

## Adobe Analytics {#analytics}

To enable Adobe Analytics data collection, you need first
to [configure your datastream](../data-collection/adobe-analytics/analytics-overview.md) to forward events to Adobe Analytics.

Adobe Analytics data collection works by translating XDM data into a format that Adobe Analytics can understand. See the following documentation for more details:

* The common set of XDM values are [automatically converted](../data-collection/adobe-analytics/automatically-mapped-vars.md)
* How to [manually map XDM values](../data-collection/adobe-analytics/manually-mapping-variables.md)

Once enabled, the datastream configuration should include settings for `com_adobe_analytics`, as shown in the example below:

```javascript
{
  // datastream config header

  "settings": {
    "com_adobe_analytics": {
      "enabled": true,
      "reportSuites": [
        "experience-edge-early-access-test"
      ],
      "listVarsDelimiter": ","
    }

    // other settings
  }
}
```

## Event forwarding {#event-forwarding}

When enabled, the datastream configuration should include settings for `com_adobe_launch_ssf`, as shown in the example below:

```javascript
{
  // datastream config header

  "settings": {
    "com_adobe_launch_ssf": {
      "enabled": true,
      "environmentId": "EN456402a0cc034a09a431979f7e839dee",
      "propertyId": "PRa062d841554a419e918f58bf09fdd233"
    }

    // other settings
  }
}
```