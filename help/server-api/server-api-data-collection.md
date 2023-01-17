---
title: Data collection
description: Learn how the Adobe Experience Platform Edge Network Server API structures the collected data.
---

# Data collection

The [!DNL Server API] offers two types of data collection endpoints:

* [Interactive data collection endpoints](interactive-data-collection.md), used when the client expects a response to be returned by the server. These endpoints can also return content from other Edge Network services, while performing data collection.
* [Non-interactive event data collection](non-interactive-data-collection.md), used when no response is expected from the server. These endpoints are used only for data collection.

## `Event` object {#event-object}

Data collected by the [!DNL Server API] is structured in the `Event` object. The structure of this object is described below.

```json
{
   "xdm":{
      "identityMap":{
         "Email_LC_SHA256":[
            {
               "id":"0c7e6a405862e402eb76a70f8a26fc732d07c32931e9fae9ab1582911d2e8a3b",
               "primary":true
            }
         ]
      },
      "eventType":"web.webpagedetails.pageViews",
      "web":{
         "webPageDetails":{
            "URL":"https://alloystore.dev/",
            "name":"home-demo-Home Page",
            "pageViews":{
               "value":1
            }
         }
      },
      "placeContext":{
         "localTime":"2021-08-09T17:09:20.859+03:00",
         "localTimezoneOffset":-180
      },
      "timestamp":"2021-08-09T14:09:20.859Z"
   },
   "data":{
      "prop1":"custom value",
      "var10":"search (organic)"
   }
}
```

| Attribute | Type | Description |
| --- | --- | --- |
| `xdm`| Object | *Required*. JSON object containing data in XDM format, corresponding to the dataset schema. |
| `data` | Object | *Optional*. JSON object containing free-form data, which can be mapped to XDM by the Edge Network. |

