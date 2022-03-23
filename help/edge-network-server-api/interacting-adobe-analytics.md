---
title: Interacting with Adobe Analytics
description: Learn how to use the Edge Network Server API to interact with Adobe Analytics
seo-description: Learn how to use the Edge Network Server API to interact with Adobe Analytics
keywords: data collection; outlet; analytics; Adobe Experience Platform Edge Network api;analytics
---

# Interacting with Adobe Analytics

## Overview {#overview}

Adobe Analytics data collection works by translating XDM data into a format that Adobe Analytics can understand. Several XDM fields are [automatically mapped](../edge/data-collection/adobe-analytics/automatically-mapped-vars.md) to Analytics variables.

You can also [manually map XDM values](../edge/data-collection/adobe-analytics/manually-mapping-variables.md) to legacy Analytics variables.

To enable Adobe Analytics to receive data from Server API, you need to [configure your datastream](../edge/data-collection/adobe-analytics/analytics-overview.md) to forward events to Adobe Analytics.

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

## API format

```http
POST https://edge.adobedc.net/ee/v2/interact?
```

## Request {#request}

The sample below includes several automatically mapped values from the `_experience.analytics` field group. It also includes JSON-based data layers. While these data layers cannot be mapped automatically, it is possible to use [Data Prep for Data Collection](../edge/fundamentals/datastreams.md#data-prep) to map these values to a schema that contains field groups referenced above.

All values that users map to those fields will automatically map to the appropriate Analytics values, as if they were included in the API request.

```shell
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId=72e82be9-9e9c-4222-a439-8c53f677b0cd' \
--header 'Content-Type: application/json' \
--data-raw '{
    "event": 
        {
            "xdm": {
                "eventType": "web.webpagedetails.pageViews",
                "web": {
                    "webPageDetails": {
                        "URL": "https://alloystore.dev",
                        "name": "Home Page"
                    },
                    "webReferrer": {
                        "URL": ""
                    }
                },
                "device": {
                    "screenHeight": 1440,
                    "screenWidth": 3440,
                    "screenOrientation": "landscape"
                },
                "environment": {
                    "type": "browser",
                    "browserDetails": {
                        "viewportWidth": 3440,
                        "viewportHeight": 1440
                    }
                },
                "placeContext": {
                    "localTime": "2022-03-22T22:45:21.193-06:00",
                    "localTimezoneOffset": 360
                },
                "timestamp": "2022-03-23T04:45:21.193Z",
                "implementationDetails": {
                    "name": "https://ns.adobe.com/experience/alloy/reactor",
                    "version": "2.8.0+2.9.0",
                    "environment": "browser"
                },
                
                "_experience": {
                    "analytics": {
                        "customDimensions": {
                            "eVars": {
                                "eVar14": "eVar14"
                            }
                        },
                        "event1to100": {
                            "event13": {
                                "value": 1
                            },
                            "event14": {
                                "value": 2
                            }
                        }
                    }
                }
            }
        },
    "data": {
        "page":{
            "pageInfo": {
                "pageName": "Promotions",
                "siteSection": "Home"
            },
            "promos":{
                "heroPromos": "puRse,sHoes,sungLAsses"
            },
            "customVariables": {
                "testGroup": "orange/black theme"
            },
            "events": {
                "homePage": true
            },
            "products": [{
                "productSKU": "abc123",
                "productName": "shirt"
            }]
        }   
    },
    "query": {
        "identity": {
            "fetch": [
                "ECID"
            ]
        }
    },
    "meta": {
        "state": {
            "domain": "alloystore.net",
            "cookiesEnabled": true
        }
    }
}'
```

## Reponse {#response}

```json
{
    "requestId": "03cf3d4c-0e75-4f47-9bb1-d5d747213d64",
    "handle": [
        {
            "payload": [
                {
                    "id": "73920776479279046640145467094545476769",
                    "namespace": {
                        "code": "ECID"
                    }
                }
            ],
            "type": "identity:result"
        },
        {
            "payload": [
                {
                    "key": "kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_identity",
                    "value": "CiY3MzkyMDc3NjQ3OTI3OTA0NjY0MDE0NTQ2NzA5NDU0NTQ3Njc2OVIQCL2K8Kn7LxABGAEqA09SMvABvYrwqfsv",
                    "maxAge": 34128000
                }
            ],
            "type": "state:store"
        }
    ]
}
```