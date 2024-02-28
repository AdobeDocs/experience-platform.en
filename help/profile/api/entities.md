---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Entities (Profile Access) API Endpoint
type: Documentation
description: Adobe Experience Platform enables you to access Real-Time Customer Profile data using RESTful APIs or the user interface. This guide outlines how to access entities, more commonly known as "profiles", using the Profile API.
role: Developer
exl-id: 06a1a920-4dc4-4468-ac15-bf4a6dc885d4
---
# Entities endpoint (Profile access)

Adobe Experience Platform enables you to access [!DNL Real-Time Customer Profile] data using RESTful APIs or the user interface. This guide outlines how to access entities, more commonly known as "profiles", using the API. For more information on accessing profiles using the [!DNL Platform] UI, please refer to the [Profile user guide](../ui/user-guide.md). 

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-Time Customer Profile API]](https://www.adobe.com/go/profile-apis-en). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Access profile data by identity

You can access a [!DNL Profile] entity by making a GET request to the `/access/entities` endpoint and providing the entity's identity as a series of query parameters. This identity consists of an ID value (`entityId`) and the identity namespace (`entityIdNS`).

Query parameters provided in the request path specify which data to access. You can include multiple parameters, separated by ampersands (&). A complete list of valid parameters is provided in the [query parameters](#query-parameters) section of the appendix.

**API format**

```http
GET /access/entities?{QUERY_PARAMETERS}
```

**Request**

The following request retrieves a customer's email and name using an identity:

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=janedoe@example.com&entityIdNS=email&fields=identities,person.name,workEmail' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "BVrqzwVv7o2p3naHvnsWpqZXv3KJgA": {
        "entityId": "BVrqzwVv7o2p3naHvnsWpqZXv3KJgA",
        "sources": [
            "1000000000"
        ],
        "entity": {
            "identities": [
                {
                    "id": "89149270342662559642753730269986316601",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "janedoe@example.com",
                    "namespace": {
                        "code": "email"
                    }
                },
                {
                    "id": "janesmith@example.com",
                    "namespace": {
                        "code": "email"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316604",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "58832431024964181144308914570411162539",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316602",
                    "namespace": {
                        "code": "ecid"
                    },
                    "primary": true
                }
            ],
            "person": {
                "name": {
                    "firstName": "Jane",
                    "middleName": "F",
                    "lastName": "Doe"
                }
            },
            "workEmail": {
                "primary": true,
                "address": "janedoe@example.com",
                "label": "Jane Doe",
                "type": "work",
                "status": "active"
            }
        },
        "lastModifiedAt": "2018-08-28T20:57:24Z"
    }
}
```

>[!NOTE]
>
>If a related graph links more than 50 identities, this service will return HTTP status 422 and the message "Too many related identities". If you receive this error, consider adding more query parameters to narrow your search.

## Access profile data by list of identities

You can access multiple profile entities by their identities by making a POST request to the `/access/entities` endpoint and providing the identities in the payload. These identities consist of an ID value (`entityId`) and an identity namespace (`entityIdNS`).

**API format**

```http
POST /access/entities
```

**Request**

The following request retrieves the names and email addresses of several customers by a list of identities:

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/access/entities \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "schema":{
            "name":"_xdm.context.profile"
        },
        "fields":[
            "identities",
            "person.name",
            "workEmail"
        ],
        "identities":[
            {
                "entityId":"89149270342662559642753730269986316601",
                "entityIdNS":{
                    "code":"ECID"
                }
            },
            {
                "entityId":"89149270342662559642753730269986316900",
                "entityIdNS":{
                    "code":"ECID"
                }
            },
            {
                "entityId":"89149270342662559642753730269986316602",
                "entityIdNS":{
                    "code":"ECID"
                }
            }
        ],
        "timeFilter": {
            "startTime": 1539838505,
            "endTime": 1539838510
        },
        "limit": 10,
        "orderby": "-timestamp",
        "withCA": true
      }'
```

|Property|Description|
|---|---|
|`schema.name`| ***(Required)*** The name of the XDM schema the entity belongs to.|
|`fields`|The XDM fields to be returned, as an array of strings. By default, all fields will be returned.|
|`identities`| ***(Required)*** An array containing a list of identities for the entities you want to access.|
|`identities.entityId`| The ID of an entity you wish to access.|
|`identities.entityIdNS.code`|The namespace of an entity ID you wish to access.|
|`timeFilter.startTime`|Start time of the time range filter, included. Should be at millisecond granularity. Default, if not specified, is the beginning of available time.|
|`timeFilter.endTime`|End time of time range filter, excluded. Should be at millisecond granularity. Default, if not specified, is the end of available time.|
|`limit`|Number of records to return. Only applies to the number of experience events returned. Default: 1,000.|
|`orderby`|The sort order of retrieved experience events by timestamp, written as `(+/-)timestamp` with the default being `+timestamp`. |
|`withCA`|Feature flag for enabling computed attributes for lookup. Default: false.|

**Response**
A successful response returns the requested fields of entities specified in the request body.

```json
{
    "A29cgveD5y64ezlhxjUXNzcm": {
        "entityId": "A29cgveD5y64ezlhxjUXNzcm",
        "sources": [
            "1000000000"
        ],
        "entity": {
            "identities": [
                {
                    "id": "89149270342662559642753730269986316601",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "janedoe@example.com",
                    "namespace": {
                        "code": "email"
                    }
                },
                {
                    "id": "05DD23564EC4607F0A490D44",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316603",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "janesmith@example.com",
                    "namespace": {
                        "code": "email"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316604",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316700",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316701",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "58832431024964181144308914570411162539",
                    "namespace": {
                        "code": "ecid"
                    }
                },
                {
                    "id": "89149270342662559642753730269986316602",
                    "namespace": {
                        "code": "ecid"
                    },
                    "primary": true
                }
            ],
            "person": {
                "name": {
                    "firstName": "Jane",
                    "middleName": "F",
                    "lastName": "Doe"
                }
            },
            "workEmail": {
                "primary": true,
                "address": "janedoe@example.com",
                "label": "Jane Doe",
                "type": "work",
                "status": "active"
            }
        },
        "lastModifiedAt": "2018-08-28T20:57:24Z"
    },
    "A29cgveD5y64e2RixjUXNzcm": {
        "entityId": "A29cgveD5y64e2RixjUXNzcm",
        "sources": [
            ""
        ],
        "entity": {},
        "lastModifiedAt": "1970-01-01T00:00:00Z"
    },
    "A29cgveD5y64ezphxjUXNzcm": {
        "entityId": "A29cgveD5y64ezphxjUXNzcm",
        "sources": [
            "1000000000"
        ],
        "entity": {
            "identities": [
                {
                    "id": "89149270342662559642753730269986316602",
                    "namespace": {
                        "code": "ecid"
                    },
                    "primary": true
                },
                {
                    "id": "janedoe@example.com",
                    "namespace": {
                        "code": "email"
                    }
                }
            ],
            "person": {
                "name": {
                    "firstName": "Jane",
                    "middleName": "F",
                    "lastName": "Doe"
                }
            },
            "workEmail": {
                "primary": true,
                "address": "janedoe@example.com",
                "label": "Jane Doe",
                "type": "work",
                "status": "active"
            }
        },
        "lastModifiedAt": "2018-08-27T23:25:52Z"
    }
}
```

## Access time series events for a profile by identity

You can access time series events by the identity of their associated profile entity by making a GET request to the `/access/entities` endpoint. This identity consists of an ID value (`entityId`) and an identity namespace (`entityIdNS`).

Query parameters provided in the request path specify which data to access. You can include multiple parameters, separated by ampersands (&). A complete list of valid parameters is provided in the [query parameters](#query-parameters) section of the appendix.

**API format**

```http
GET /access/entities?{QUERY_PARAMETERS}
```

**Request**

The following request finds a profile entity by ID, and retrieves the values for the properties `endUserIDs`, `web`, and `channel` for all time series events associated with the entity. 

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.experienceevent&relatedSchema.name=_xdm.context.profile&relatedEntityId=89149270342662559642753730269986316900&relatedEntityIdNS=ECID&fields=endUserIDs,web,channel&startTime=1531260476000&endTime=1531260480000&limit=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a paginated list of time series events and associated fields that were specified in the request query parameters. 

>[!NOTE]
>
>The request specified a limit of one (`limit=1`), therefore the `count` in the response below is 1 and only one entity is returned.

```json
{
    "_page": {
        "orderby": "timestamp",
        "start": "c8d11988-6b56-4571-a123-b6ce74236036",
        "count": 1,
        "next": "c8d11988-6b56-4571-a123-b6ce74236037"
    },
    "children": [
        {
            "relatedEntityId": "A29cgveD5y64e2RixjUXNzcm",
            "entityId": "c8d11988-6b56-4571-a123-b6ce74236036",
            "timestamp": 1531260476000,
            "entity": {
                "endUserIDs": {
                    "_experience": {
                        "ecid": {
                            "id": "89149270342662559642753730269986316900",
                            "namespace": {
                                "code": "ecid"
                            }
                        }
                    }
                },
                "channel": {
                    "_type": "web"
                },
                "web": {
                    "webPageDetails": {
                        "name": "Fernie Snow",
                        "pageViews": {
                            "value": 1
                        }
                    }
                }
            },
            "lastModifiedAt": "2018-08-21T06:49:02Z"
        }
    ],
    "_links": {
        "next": {
            "href": "/entities?start=c8d11988-6b56-4571-a123-b6ce74236037&orderby=timestamp&schema.name=_xdm.context.experienceevent&relatedSchema.name=_xdm.context.profile&relatedEntityId=89149270342662559642753730269986316900&relatedEntityIdNS=ECID&fields=endUserIDs,web,channel&startTime=1531260476000&endTime=1531260480000&limit=1"
        }
    }
}
```

### Access a subsequent page of results

Results are paginated when retrieving time series events. If there are subsequent pages of results, the `_page.next` property will contain an ID. Additionally, the `_links.next.href` property provides a request URI for retrieving the next page. To retrieve the results, make another GET request to the `/access/entities` endpoint, however you must be sure to replace `/entities` with the value of the provided URI.

>[!NOTE]
>
>Be sure that you do not accidentally repeat `/entities/` in the request path. It should only appear once like, `/access/entities?start=...`

**API format**

```http
GET /access/{NEXT_URI}
```

|Parameter|Description|
|---|---|
|`{NEXT_URI}`|The URI value taken from `_links.next.href`.|

**Request**

The following request retrieves the next page of results by using the `_links.next.href` URI as the request path.

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/access/entities?start=c8d11988-6b56-4571-a123-b6ce74236037&orderby=timestamp&schema.name=_xdm.context.experienceevent&relatedSchema.name=_xdm.context.profile&relatedEntityId=89149270342662559642753730269986316900&relatedEntityIdNS=ECID&fields=endUserIDs,web,channel&startTime=1531260476000&endTime=1531260480000&limit=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the next page of results. This response does not have subsequent pages of results, as indicated by the empty string values of `_page.next` and `_links.next.href`.

```json
{
    "_page": {
        "orderby": "timestamp",
        "start": "c8d11988-6b56-4571-a123-b6ce74236037",
        "count": 1,
        "next": ""
    },
    "children": [
        {
            "relatedEntityId": "A29cgveD5y64e2RixjUXNzcm",
            "entityId": "c8d11988-6b56-4571-a123-b6ce74236037",
            "timestamp": 1531260477000,
            "entity": {
                "endUserIDs": {
                    "_experience": {
                        "ecid": {
                            "id": "89149270342662559642753730269986316900",
                            "namespace": {
                                "code": "ecid"
                            }
                        }
                    }
                },
                "channel": {
                    "_type": "web"
                },
                "web": {
                    "webPageDetails": {
                        "name": "Fernie Snow",
                        "pageViews": {
                            "value": 1
                        }
                    }
                }
            },
            "lastModifiedAt": "2018-08-21T06:50:01Z"
        }
    ],
    "_links": {
        "next": {
            "href": ""
        }
    }
}
```

## Access time series events for multiple profiles by identities

You can access time series events from multiple associated profiles by making a POST request to the `/access/entities` endpoint and providing the profile identities in the payload. These identities each consist of an ID value (`entityId`) and an identity namespace (`entityIdNS`).

**API format**

```http
POST /access/entities
```

**Request**

The following request retrieves user IDs, local times, and country codes for time series events associated with a list of profile identities:

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/access/entities \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "schema": {
        "name": "_xdm.context.experienceevent"
    },
    "relatedSchema": {
        "name": "_xdm.context.profile"
    },
    "identities": [
        {
            "relatedEntityId": "GkouAW-yD9aoRCPhRYROJ-TetAFW"
        }
        {
            "relatedEntityId": "GkouAW-2u-7iWt5vQ9u2wm40JOZY"
        }
    ],
    "fields": [
        "endUserIDs",
        "placeContext.localTime",
        "placeContext.geo.countryCode"
    ],
    
    "timeFilter": {
        "startTime": 11539838505
        "endTime": 1539838510
    },
    "limit": 10
}'
```

|Property|Description|
|---|---|
|`schema.name`|**(REQUIRED)** The XDM schema of the entity to retrieve|
|`relatedSchema.name`|If `schema.name` is `_xdm.context.experienceevent` this value must specify the schema for the profile entity that the time series events are related to.|
|`identities`|**(REQUIRED)** An array listing of profiles to retrieve associated time series events from. Each entry in the array is set in one of two ways: 1) using a fully qualified identity consisting of ID value and namespace or 2) providing an XID.|
|`fields`|Isolates the data returned to a specified set of fields. Use this to filter which schema fields are included in data retrieved. Example: personalEmail,person.name,person.gender|
|`mergePolicyId`|Identifies the Merge Policy by which to govern the data returned. If one is not specified in the service call, your organization's default for that schema will be used. If no default Merge Policy has been configured, the default is no profile merge and no identity stitching.|
|`orderby`|The sort order of retrieved experience events by timestamp, written as `(+/-)timestamp` with the default being `+timestamp`.|
|`timeFilter.startTime`|Specify the start time to filter time-series objects (in milliseconds).|
|`timeFilter.endTime`|Specify the end time to filter time-series objects (in milliseconds).|
|`limit`|Numeric value specifying the maximum number of objects to return. Default: 1000|
|`withCA`|Feature flag for enabling computed attributes for lookup. Default: false|

**Response**

A successful response returns a paginated list of time series events associated with the multiple profiles specified in the request. 

```json
{
    "GkouAW-yD9aoRCPhRYROJ-TetAFW": {
        "_page": {
            "orderby": "timestamp",
            "start": "ee0fa8eb-f09c-4d72-a432-fea7f189cfcd",
            "count": 10,
            "next": "40cb2fb3-78cd-49d3-806f-9bdb22748226"
        },
        "children": [
            {
                "relatedEntityId": "GkouAW-yD9aoRCPhRYROJ-TetAFW",
                "entityId": "ee0fa8eb-f09c-4d72-a432-fea7f189cfcd",
                "timestamp": 1537275882000,
                "entity": {
                    "endUserIDs": {
                        "_experience": {
                            "mcid": {
                                "id": "67971860962043911970658021809222795905",
                                "namespace": {
                                    "code": "ECID"
                                }
                            },
                            "aacustomid": {
                                "id": "50353446361742744826197433431642033796",
                                "namespace": {
                                    "code": "CRMID"
                                },
                                "primary": true
                            },
                            "acid": {
                                "id": "2de32e9a00003314-2fd9c00000000026",
                                "namespace": {
                                    "code": "AVID"
                                }
                            }
                        }
                    },
                    "placeContext": {
                        "localTime": "2018-09-18T13:04:42Z",
                        "geo": {
                            "countryCode": "MX"
                        }
                    }
                },
                "lastModifiedAt": "2018-10-24T17:35:01Z"
            },
            {
                "relatedEntityId": "GkouAW-yD9aoRCPhRYROJ-TetAFW",
                "entityId": "a9e137b4-1348-4878-8167-e308af523d8b",
                "timestamp": 1537275889000,
                "entity": {
                    "endUserIDs": {
                        "_experience": {
                            "mcid": {
                                "id": "67971860962043911970658021809222795905",
                                "namespace": {
                                    "code": "ECID"
                                }
                            },
                            "aacustomid": {
                                "id": "50353446361742744826197433431642033796",
                                "namespace": {
                                    "code": "CRMID"
                                },
                                "primary": true
                            },
                            "acid": {
                                "id": "2de32e9a00003314-2fd9c00000000026",
                                "namespace": {
                                    "code": "AVID"
                                }
                            }
                        }
                    },
                    "placeContext": {
                        "localTime": "2018-09-18T13:04:49Z",
                        "geo": {
                            "countryCode": "MX"
                        }
                    }
                },
                "lastModifiedAt": "2018-10-24T17:35:01Z"
            }
        ],
        "_links": {
            "next": {
                "href": "/entities",
                "payload": {
                    "schema": {
                        "name": "_xdm.context.experienceevent"
                    },
                    "relatedSchema": {
                        "name": "_xdm.context.profile"
                    },
                    "timeFilter": {
                        "startTime": 1537275882000
                    },
                    "fields": [
                        "endUserIDs",
                        "placeContext.localTime",
                        "placeContext.geo.countryCode"
                    ],
                    "identities": [
                        {
                            "relatedEntityId": "GkouAW-yD9aoRCPhRYROJ-TetAFW",
                            "start": "40cb2fb3-78cd-49d3-806f-9bdb22748226"
                        }
                    ],
                    "limit": 10
                }
            }
        }
    },
    "GkouAW-2u-7iWt5vQ9u2wm40JOZY": {
        "_page": {
            "orderby": "timestamp",
            "start": "2746d0db-fa64-4e29-b67e-324bec638816",
            "count": 9,
            "next": ""
        },
        "children": [
            {
                "relatedEntityId": "GkouAW-2u-7iWt5vQ9u2wm40JOZY",
                "entityId": "2746d0db-fa64-4e29-b67e-324bec638816",
                "timestamp": 1537559483000,
                "entity": {
                    "endUserIDs": {
                        "_experience": {
                            "mcid": {
                                "id": "76436745599328540420034822220063618863",
                                "namespace": {
                                    "code": "ECID"
                                }
                            },
                            "aacustomid": {
                                "id": "48593470048917738786405847327596263131",
                                "namespace": {
                                    "code": "CRMID"
                                },
                                "primary": true
                            },
                            "acid": {
                                "id": "2de32e9a80007451-03da600000000028",
                                "namespace": {
                                    "code": "AVID"
                                }
                            }
                        }
                    },
                    "placeContext": {
                        "localTime": "2018-09-21T19:51:23Z",
                        "geo": {
                            "countryCode": "US"
                        }
                    }
                },
                "lastModifiedAt": "2018-10-24T17:34:58Z"
            },
            {
                "relatedEntityId": "GkouAW-2u-7iWt5vQ9u2wm40JOZY",
                "entityId": "9bf337a1-3256-431e-a38c-5c0d42d121d1",
                "timestamp": 1537559486000,
                "entity": {
                    "endUserIDs": {
                        "_experience": {
                            "mcid": {
                                "id": "76436745599328540420034822220063618863",
                                "namespace": {
                                    "code": "ECID"
                                }
                            },
                            "aacustomid": {
                                "id": "48593470048917738786405847327596263131",
                                "namespace": {
                                    "code": "CRMID"
                                },
                                "primary": true
                            },
                            "acid": {
                                "id": "2de32e9a80007451-03da600000000028",
                                "namespace": {
                                    "code": "AVID"
                                }
                            }
                        }
                    },
                    "placeContext": {
                        "localTime": "2018-09-21T19:51:26Z",
                        "geo": {
                            "countryCode": "US"
                        }
                    }
                },
                "lastModifiedAt": "2018-10-24T17:34:58Z"
            }
        ],
        "_links": {
            "next": {
                "href": ""
            }
        }
    }
}`
```

In this example response, the first listed profile ("GkouAW-yD9aoRCPhRYROJ-TetAFW") provides a value for `_links.next.payload`, meaning that there are additional pages of results for this profile. See the following section on [accessing additional results](#access-additional-results) for details on how to access those additional results.

### Access additional results {#access-additional-results}

When retrieving time series events there may be many results being returned, therefore the results are often paginated. If there are subsequent pages of results for a particular profile, the `_links.next.payload` value for that profile will contain a payload object. 

Using this payload in the request body, you can perform an additional POST request to the `access/entities` endpoint to retrieve the subsequent page of time series data for that profile.

## Access time series events in multiple schema entities

You can access multiple entities that are connected through a relationship descriptor. The following example API call assumes a relationship has already been defined between two schemas. For more information on relationship descriptors, please read the [!DNL Schema Registry] API developer guide [descriptors endpoint guide](../../xdm/api/descriptors.md).

You can include query parameters in the request path in order to specify which data to access. You can include multiple parameters, separated by ampersands (&). A complete list of valid parameters is provided in the [query parameters](#query-parameters) section of the appendix.

**API format**

```http
GET /access/entities?{QUERY_PARAMETERS}
```

**Request**

The following request retrieves an entity containing a previously established relationship descriptor to access information across different schemas.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/access/entities?relatedSchema.name=_xdm.context.profile&schema.name=_xdm.context.experienceevent&relatedEntityId=GkouAW-2Xkftzer3bBtHiW8GkaFL \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns a paginated list of time series events associated with the multiple entities.

```json
{
    "_page": {
        "orderby": "timestamp",
        "start": "cb10369f-a47b-4e65-afb4-06e1ad78a648",
        "count": 1,
        "next": ""
    },
    "children": [
        {
            "relatedEntityId": "GkouAW-2Xkftzer3bBtHiW8GkaFL",
            "entityId": "cb10369f-a47b-4e65-afb4-06e1ad78a648",
            "timestamp": 1564614939000,
            "entity": {
                "environment": {
                    "browserDetails": {}
                },
                "identityMap": {
                    "CRMId": [
                        {
                            "id": "78520026455138218785449796480922109723",
                            "primary": true
                        }
                    ]
                },

                "commerce": {
                    "productViews": {
                        "value": 1
                    }
                },
                "productListItems": [
                    {
                        "name": "Red shoe",
                        "quantity": 85,
                        "storesAvailableIn": [
                            "da6dced5-9574-4dda-89b5-9dc106903f80",
                            "981bb433-2ee5-4db0-a19a-449ec9dbf39f"
                        ],
                        "SKU": "8f998279-797b-4da2-9e60-88bf73a9f15a",
                        "priceTotal": 934.8
                    }
                ],
                "_id": "cb10369f-a47b-4e65-afb4-06e1ad78a648",
                "commerce": {
                    "order": {}
                },
                "placeContext": {
                    "geo": {
                        "_schema": {}
                    }
                },
                "device": {},
                "timestamp": "2019-07-31T23:15:39Z",
                "_experience": {
                    "profile": {
                        "identityNamespaces": {
                            "/productListItems[*]/SKU": {
                                "namespace": {
                                    "code": "ECID"
                                }
                            }
                        }
                    }
                }
            },
            "lastModifiedAt": "2019-10-10T00:14:19Z"
        }
    ],
    "_links": {
        "next": {
            "href": ""
        }
    }
}

```

### Access a subsequent page of results

Results are paginated when retrieving time series events. If there are subsequent pages of results, the `_page.next` property will contain an ID. Additionally, the `_links.next.href` property provides a request URI for retrieving the subsequent page by making additional GET requests to the `access/entities` endpoint. 

## Next steps

By following this guide you have successfully accessed [!DNL Real-Time Customer Profile] data fields, profiles, and time series data. To learn how to access other data resources stored in [!DNL Platform], see the [Data Access overview](../../data-access/home.md).

## Appendix {#appendix}

The following section provides supplemental information regarding accessing [!DNL Profile] data using the API. 

### Query parameters {#query-parameters}

The following parameters are used in the path for GET requests to the `/access/entities` endpoint. They serve to identify the profile entity you wish to access and filter the data returned in the response. Required parameters are labeled, while the rest are optional.

|Parameter|Description|Example|
|---|---|---|
|`schema.name`|**(REQUIRED)** The XDM schema of the entity to retrieve|`schema.name=_xdm.context.experienceevent`|
|`relatedSchema.name`|If `schema.name` is "_xdm.context.experienceevent", this value must specify the schema for the profile entity that the time series events are related to.|`relatedSchema.name=_xdm.context.profile`|
|`entityId`|**(REQUIRED)** The ID of the entity. If the value of this parameter is not an XID, an identity namespace parameter must also be provided (see `entityIdNS` below).|`entityId=janedoe@example.com`|
|`entityIdNS`|If `entityId` is not provided as an XID, this field must specify the identity namespace.|`entityIdNE=email`|
|`relatedEntityId`|If `schema.name` is "_xdm.context.experienceevent", this value must specify the related profile entity's identity namespace. This value follows the same rules as `entityId`.|`relatedEntityId=69935279872410346619186588147492736556`|
|`relatedEntityIdNS`|If `schema.name` is "_xdm.context.experienceevent", this value must specify the identity namespace for the entity specified in `relatedEntityId`. |`relatedEntityIdNS=CRMID`|
|`fields`|Filters the data returned in the response. Use this to specify which schema field values to include in data retrieved. For multiple fields, separate values by a comma with no spaces between|`fields=personalEmail,person.name,person.gender`|
|`mergePolicyId`|Identifies the Merge Policy by which to govern the data returned. If one is not specified in the call, your organization's default for that schema will be used. If no default Merge Policy has been configured, the default is no profile merge and no identity stitching.|`mergePoilcyId=5aa6885fcf70a301dabdfa4a`|
|`orderBy`|The sort order of retrieved experience events by timestamp, written as `(+/-)timestamp` with the default being `+timestamp`.|`orderby=-timestamp`|
|`startTime`|Specify the start time to filter time-series objects (in milliseconds).|`startTime=1539838505`|
|`endTime`|Specify the end time to filter time-series objects (in milliseconds).|`endTime=1539838510`|
|`limit`|Numeric value specifying the maximum number of objects to return. Default: 1000|`limit=100`|
|`property`|Filters by the property value. Supports the following evaluators: =, !=, <, <=, >, >=. Can only be used with experience events, with a maximum of three properties being supported.|`property=webPageDetails.isHomepage=true&property=localTime<="2020-07-20"`|
|`withCA`|Feature flag for enabling computed attributes for lookup. Default: false|`withCA=true`|
