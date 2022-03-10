---
description: 
title: Single-event data collection
---

# Edge Network Gateway API data collection

The Experience Edge Network Gateway API offers two types of data collection endpoints:

1. Interactive, used when the client expects back a response from the server
2. Non-Interactive, used when no response is expected from the server

The `Non-Interactive` endpoints are used in a pure data-collection type of integration. The `Interactive` endpoints, on
the other hand, can also return content from the edge services (e.g. personalization), _while also doing data
collection_.

## The `Event` object {#event-object}

The Experience Edge APIs have the following representation for collected events:

| Attribute | Type | Description |
| --- | --- | --- |
| **xdm** (required) | `object` | JSON object containing data in XDM format, corresponding to the dataset schema. |
| **data** (optional) | `object` | JSON object containing free-form data, which can be mapped to XDM by the Edge Network. |

```json
{
  "xdm": {
    "identityMap": {
      "Email_LC_SHA256": [
        {
          "id": "0c7e6a405862e402eb76a70f8a26fc732d07c32931e9fae9ab1582911d2e8a3b",
          "primary": true
        }
      ]
    },
    "eventType": "web.webpagedetails.pageViews",
    "web": {
      "webPageDetails": {
        "URL": "https://alloystore.dev/",
        "name": "home-demo-Home Page",
        "pageViews": {
          "value": 1
        }
      }
    },
    "placeContext": {
      "localTime": "2021-08-09T17:09:20.859+03:00",
      "localTimezoneOffset": -180
    },
    "timestamp": "2021-08-09T14:09:20.859Z"
  },
  "data": {
    "prop1": "custom value",
    "var10": "search (organic)"
  }
}
```
