---
title: Retrieve personalization content from Adobe Target
description: Learn how to use the Adobe Experience Platform Edge Network Server API to retrieve personalized content from Adobe Target
seo-description: Learn how to use the Adobe Experience Platform Edge Network Server API to retrieve personalized content from Adobe Target
keywords: personalization; server api; Adobe Experience Platform Edge Network; retrieve personalization;adobe target;
---

# Retrieve personalization content from Adobe Target

## Overview {#overview}

The Adobe Experience Platform Server API can deliver and render personalized experiences managed in Adobe Target to the web channel. You can use a [!DNL WYSIWYG] editor, called the [!DNL Visual Experience Composer (VEC)], or a non-visual interface, the [!DNL Form-based Experience Composer], to create, activate, and deliver your activities and personalization experiences.

## Enabling Adobe Target {#enable-target}

Enable Personalization using Target in your Datastream under the Adobe Target service configuration

Then, optionally, you can also add the following options:

* decisionScopes: Retrieve specific activities (useful for activities created with the form-based composer) by adding this option to your events.
* Prehiding snippet: Hide only certain portions of the page.

### Mbox Parameters

All fields in the XDM portion of the request is serialized into dot notation and then put into Target as mBox parameters

For example, if I have XDM with the following content: 

```
"xdm": {
    "eventType": "web.webpagedetails.pageViews",
    "device": {
        "screenHeight": 1440,
        "screenWidth": 3440,
        "screenOrientation": "landscape"
    }
}
```

The following values will be available under Custom Parameters when creating audiences in Target: 

`xdm.eventType`
`xdm.device.screenHeight`kv
`xdm.device.screenWidth`
`xdm.device.screenOrientation`

### Single profile update

The Platform Web SDK lets you update the profile to the Target profile and to the Platform Web SDK as an experience event.

To update a Target profile, ensure that the profile data is passed with the following:

```
"data":  {
    "__adobe.target": {
        "profile.eyeColor": "brown"
        "profile.hairColor: "brown"
    }
}
```

### Querying Target Activities

#### Schemas
The query portion of the request determines what content is returned by Target. Under Personalization, `schemas` determines the type of content to be returned by Target. In situations where you are unsure of what sort of offers you'll be retrieving, you should include all four of the schemas in your personalization query to the edge. 

**HTML-based offers:**
https://ns.adobe.com/personalization/html-content-item

**JSON-based offers:**
https://ns.adobe.com/personalization/json-content-item

**Target Redirect offers**
https://ns.adobe.com/personalization/redirect-item

**Target DOM Manipulation offers**
https://ns.adobe.com/personalization/dom-action

#### Decision Scopes
When using the Target VEC, you must include `__view__` as the scope. Otherwise, Target Mboxes should be included in the `decisionScopes` array. 

In the example below, all four offer types are retrieved along with VEC offers and an mbox called `serverapimbox`

```
"query": {
    "personalization":
            {
                "schemas":
                [
                    "https://ns.adobe.com/personalization/html-content-item",
                    "https://ns.adobe.com/personalization/json-content-item",
                    "https://ns.adobe.com/personalization/redirect-item",
                    "https://ns.adobe.com/personalization/dom-action"
                ],
                "decisionScopes":
                [
                    "__view__",
                    "serverapimbox"
                ]
            }
}
```

A full request that includes a complete XDM object (each parameter will be converted to mbox or custom parameter), profile paramters along with the appropriate Target query is outlined below: 

```
curl --location --request POST 'https://edge.adobedc.net/ee/v2/interact?dataStreamId={{dataStreamId}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "event": 
        {
            "xdm": {
                "eventType": "web.webpagedetails.pageViews",
                "identityMap":{
                    "ECID":[
                        {
                            "id":"05907638112924484241029082405297151763",
                            "authenticatedState":"ambiguous",
                            "primary": true
                        }
                    ]
                },
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
                    "version": "1.0",
                    "environment": "serverapi"
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
        },
        "__adobe.target": {
            "profile.eyeColor": "brown",
            "profile.hairColor": "brown"
        }	
    },
    "query": {
        "personalization":
                {
                    "schemas":
                    [
                        "https://ns.adobe.com/personalization/html-content-item",
                        "https://ns.adobe.com/personalization/json-content-item",
                        "https://ns.adobe.com/personalization/redirect-item",
                        "https://ns.adobe.com/personalization/dom-action"
                    ],
                    "decisionScopes":
                    [
                        "__view__",
                        "serverapimbox"
                    ]
                }
    }
}'
```
The Adobe Experience Edge Network will return a response similar to below: 

```
{
    "requestId": "10959bbf-f83d-40e1-9521-d9145f19cdc5",
    "handle": [
        {
            "payload": [
                {
                    "id": "AT:eyJhY3Rpdml0eUlkIjoiMTQwMjgxIiwiZXhwZXJpZW5jZUlkIjoiMCJ9",
                    "scope": "serverapimbox",
                    "scopeDetails": {
                        "decisionProvider": "TGT",
                        "activity": {
                            "id": "140281"
                        },
                        "experience": {
                            "id": "0"
                        },
                        "strategies": [
                            {
                                "algorithmID": "0",
                                "trafficType": "0"
                            }
                        ],
                        "characteristics": {
                            "eventToken": "xycjBJlZhwVV5MN0kMkmoGqipfsIHvVzTQxHolz2IpTMromRrB5ztP5VMxjHbs7c6qPG9UF4rvQTJZniWgqbOw=="
                        }
                    },
                    "items": [
                        {
                            "id": "282484",
                            "schema": "https://ns.adobe.com/personalization/json-content-item",
                            "meta": {
                                "offer.name": "/server_apiform/experiences/0/pages/0/zones/0/1648103551041",
                                "experience.id": "0",
                                "activity.name": "Server API Form",
                                "activity.id": "140281",
                                "experience.name": "Experience A",
                                "option.id": "2",
                                "offer.id": "282484"
                            },
                            "data": {
                                "id": "282484",
                                "format": "application/json",
                                "content": {
                                    "value": "a/b json experience a",
                                    "platform": "server"
                                }
                            }
                        }
                    ]
                }
            ],
            "type": "personalization:decisions",
            "eventIndex": 0
        },
        {
            "payload": [
                {
                    "key": "kndctr_53A16ACB5CC1D3760A495C99_AdobeOrg_identity",
                    "value": "CiYwNTkwNzYzODExMjkyNDQ4NDI0MTAyOTA4MjQwNTI5NzE1MTc2M1IOCL-pwpv9LxgBKgNPUjLwAb-pwpv9Lw==",
                    "maxAge": 34128000
                }
            ],
            "type": "state:store"
        }
    ]
}
```

If the end-user qualifies for a personalization activity, the relevant activity  content will be found under `handle`, where the type is `personalization:decisions`. Other content will be returned under `handle`; other content types are not relevant to Target personalization. If the end-user qualifies for multiple activities, they'll be contained in an array. 

|Property | Description   | Example  |
|---|---|---|
| `scope`  |  The mbox name that resulted in the proposed offers.  | `"scope": "serverapimbox"`   |
| `decisionProvider`  | The Engine that provided the decision. This will either be TGT if using Target or ODE if using Offer decisioning | `"decisionProvider": "TGT"`  |
| `activity.id` |  The unique ID of the offer activity. Typically a 6-digit number  | `"activity.id": "140281"`  |
| `items.id` | The ID of the proposed offer. Same as the Activity ID | `"activity.id": "140281"`  |
| `schema` | The schema of the content associated with the proposed offer. This will be related to the activity type you selected when creating the personalization activity. | `"schema": "https://ns.adobe.com/personalization/json-content-item",` | 
| `meta.activity.id` | The unique ID of the offer activity. Typically a 6-digit number  | `"activity.id": "140281"` |
| `meta.activity.name` | The name of the offer activity. This is user specified during activity creation | `"activity.name": "Server API Form"`
| `meta.experience.id` | The unique ID of the experience. | `"experience.id": "0"` | 
| `meta.experience.name` | The unique name of the experience. | `"experience.name": "Experience A"` | 
| `data.id` | The ID of the proposed offer. Same as the Activity ID | `"activity.id": "140281"`  |
| `data.format` | The format of the content associated with the proposed offer. | `application/json`| 
| `data.content` | Content associated with the proposed offer. | `{ "value": "a/b json experience a" }` |

