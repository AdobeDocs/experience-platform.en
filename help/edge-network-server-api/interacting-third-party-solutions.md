---
title: Interacting with third-party solutions
description: Learn how to use the Edge Network Server API to forward events to non-Adobe solutions
seo-description: Learn how to use the Edge Network Server API to forward events to non-Adobe solutions
keywords: data collection; outlet; analytics; Adobe Experience Platform Edge Network api;event forwarding
---

# Interacting with third-party solutions

## Overview {#overview}

Use the event forwarding capabilities of the Edge Network Server API to send collected data to non-Adobe solutions.

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
