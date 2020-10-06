---
keywords: Experience Platform;home;popular topics;decision events;decision event;Decision events
solution: Experience Platform
title: Work with Decisioning Service runtime using APIs
topic: tutorial
type: Tutorial
description: This document provides a tutorial for working with the runtime services of Decisioning Service using Adobe Experience Platform APIs. 
---

# Work with Decisioning Service runtime using APIs

This document provides a tutorial for working with the runtime services of [!DNL Decisioning Service] using Adobe Experience Platform APIs. 

## Getting started

This tutorial requires a working understanding of the [!DNL Experience Platform] services involved in decisioning and determining the next best offer to present during customer experiences. Before beginning this tutorial, please review the documentation for the following:

- [[!DNL Decisioning Service]](./../home.md): Provides the framework for adding and removing offers and creating algorithms for choosing the best to present during a customer's experience.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
- [[!DNL Profile Query Language (PQL)]](../../segmentation/pql/overview.md): PQL is used to define rules and filters.
- [Manage Decisioning objects and rules using APIs](./entities.md): Prior to using the Decisioning Services runtime, you will need to set up the related entities.

The following sections provide additional information that you will need to know in order to successfully make calls to the [!DNL Platform] APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../tutorials/authentication.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

Also needed for runtime requests:

- x-request-id: `{UUID}`

>[!NOTE]
>
>`UUID` is a string in UUID format that is globally unique and must not be reused for different API calls

[!DNL Decisioning Service] is controlled by a number of business objects that are related to each other. All business objects are stored in [!DNL Platform’s] business object repository, XDM Core Object Repository. A key feature of this repository is that the APIs are orthogonal to the type of business object. Instead of using a POST, GET, PUT, PATCH or DELETE API that indicates the type of resource in its API endpoint, there are only 6 generic endpoints but they accept or return a parameter that indicates the type of the object when that disambiguation is needed. The schema must be registered with the repository, but beyond that the repository is usable for an open-ended set of object types.  

The endpoint paths for all XDM Core Object Repository APIs start with `https://platform.adobe.io/data/core/ode/`.

The first path element following endpoint is the `containerId`. This identifier is obtained via the XDM Core Object Repository root endpoint `GET https://platform.adobe.io/data/core/xcore/`.

## Compilation of decision models

The activation of the business logic entities happens automatically and continuously. As soon as a new option is saved in the repository and it is marked as "approved", it will be a candidate for inclusion the set of available options. As soon as a decision rule is updated the ruleset will be reassembled and prepared for runtime execution. At this automatic activation step, any constraints defined by the business logic that aren’t dependent on runtime context will be evaluated. The results of this activation step are sent to a cache where they are available to the [!DNL Decisioning Service] runtime. 

### Effects of placements, filters and lifecycle states

Offers are continuously created, changes occur in their lifecycle status, or they may get new content representations. An activity’s offer filter may change or may match or filter out offers whose tag sets were updated. This process can be fairly involved and applications and services need to know what the resulting candidate set of an activity will be. The decisioning runtime provides an activity-to-offers API that filters out offers that are not approved, do not match the offer filter or don’t have a representation for the placement referenced by the activity.

**Request**

```shell
curl -X GET {DECISION_SERVICE_ENDPOINT_PATH}/{CONTAINER_ID}/offers?activityId={ACTIVITY_URI}' \
  -H 'Accept: application/vnd.adobe.xdm+json \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-request-id: {NEW_UUID}'
```

**Response**

The parameter `activityId` can be repeated in the url and up to 30 different activity references can be given in one request. The response will be useful to spot any unexpected circumstances resulting from the setup and will look like: 

```json
{
  "xdm:activityOffers": [
    {
      "xdm:offerActivity": {
        "@id": "{ACTIVITY_URI}",
        "_links": {
          "self": {
            "href": "{repository_endpoint}/{CONTAINER_ID}/instances/{ACTIVITY_INSTANCE_ID}"
          }
        },
        "repo:etag": "1"
      },
      "xdm:offers": [
        {
          "@id": "{OFFER_URI_1}",
          "_links": {
            "self": {
              "href": "{REPOSITORY_ENDPOINT}/{CONTAINER_ID}/instances/{OFFER_INSTANCE_ID_1}"
            }
          },
          "repo:etag": "15"
        },
        {
          "@id": "{OFFER_URI_2}",
          "_links": {
            "self": {
              "href": "{REPOSITORY_ENDPOINT}/{CONTAINER_ID}/instances/{OFFER_INSTANCE_ID_2}"
            }
          },
          "repo:etag": "5"
        }
      ],
      "xdm:fallbackOffer": {
        "@id": "{FALLBACK_URI}",
        "_links": {
          "self": {
            "href": "{REPOSITORY_ENDPOINT}/{CONTAINER_ID}/instances/{FALLBACK_INSTANCE_ID}"
          }
        },
        "repo:etag": "2"
      }
    }
  ]
}
```

There is a small delay of a few seconds between the time the objects were updated and the time when the API response reflects the activity-to-offers mapping. The revision of each object is given in the response so that clients can check if there is an update to the objects that has not been reflected.

### Diagnostics API and troubleshooting

Activities, offers and eligibility rules are compiled into an internal format (runtime offer catalog) that is used by the decision service runtime. The compilation may detect errors that were not caught by the checks performed when the objects were stored and links were established in the XDM Core Object Repository.

A diagnostics API is provided to obtain any compilation errors that occurred in that step and in case there are no errors to obtain information about when the rules and activities were last recompiled.

**Request**

```shell
curl -X GET {DECISION_SERVICE_ENDPOINT_PATH}/{CONTAINER_ID}/diagnostics \
  -H 'Accept: application/vnd.adobe.xdm+json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-request-id: {NEW_UUID}'
```

The only parameter for this API call is `containerId`. The results all updates from all clients that have modified decision rules, offers, activities or offer filters in that container. There is a small delay of a few seconds between the time the objects were updated and the time when the compilation finishes. The last update timestamp and any errors are returned in the response to the diagnostics call.

**Response**

```json
{
  "xdm:operations": {
    "xdm:offerCatalogUpdate": {
      "xdm:date": "2019-06-19T23:28:44.855Z",
      "xdm:errors": []
    },
    "xdm:activitiesUpdate": {
      "xdm:date": "2019-06-19T23:28:40.114Z",
      "xdm:errors": []
    }
  }
}
```

## REST API calls to execute decisions

The REST API is one of the routes for applications running on top of [!DNL Platform] to obtain the next best experience based on the rules, models and constraints that the organization has set for their users. Applications send one of the profile’s identities (profile ID and identity namespace) the [!DNL Decisioning Service] will look up the profile and the information is used to apply the business logic. Additional context data can be passed to the request and if specified in the business rules will be included in the data to make the decision.

Applications can achieve better performance by requesting a decision for up to 30 activities at once. The URIs of the activities are passed in the same request. The REST API is synchronous and will return the proposed options for all those activities or the fallback option if no personalization option satisfies the constraints.

It is possible that two different activities come up with the same option as their “best”. To avoid repeating a composed experience, by default, [!DNL Decisioning Service] arbitrates between the activities that are referenced in the same request. Arbitration means that for each of the activities their top-N options are considered, but no option will be proposed more than once across those activities. If two activities have the same topmost ranked option one of them will be elected to use its second-best choice or third-best and so forth. Those de-duplication rules try to avoid that any of the activities must use their fallback option.

The decision request contains the arguments its body of a POST request. The body is formatted as JSON `Content-Type` header value `application/vnd.adobe.xdm+json; schema="{REQUEST_SCHEMA_AND_VERSION}"`

The request schema and version supported at this time is `https://ns.adobe.com/experience/offer-management/decision-request;version=0.9`. In the future, additional request schemas or versions will be provided.

**Request**

```shell
curl -X POST {DECISION_SERVICE_ENDPOINT_PATH}/{CONTAINER_ID}/decisions \
  -H 'Accept: application/json, application/problem+json \
  -H '
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'x-request-id: {NEW_UUID}' \
  -d '{
  "xdm:dryRun": {DRY_RUN_TRUE_FALSE},
  "xdm:validateContextData": {VALIDATE_CONTEXT_DATA_TRUE_FALSE},

  "xdm:offerActivities":[
    {
      "xdm:offerActivity": "{ACTIVITY_URI_1}"
    },
  ],
  "xdm:identityMap":{
    "{PROFILE_ID_NAMESPACE_CODE}":[
      {
        "xdm:id":"{PROFILE_ID}"
      }
    ]
  },
  "xdm:profileModel":"{PROFILE_MODEL}",
  "xdm:contextData": [
    {
      "@type": "{CONTEXT_DATASSCHEMA_ID}"
      "xdm:data": { JSON PROPERTIES OF CONTEXT ENTITY }
    }
  ] ,
  "xdm:allowDuplicatePropositions": {
    "xdm:acrossActivities": {DUPLICATE_OFFER_IDS_OF_TRUE_FALSE},
  }
}’
```

- **`xdm:dryRun`** - When the value of this optional property is set to true the decision request will obey capping constraints but will not actually draw down those counters, it is the expectation that the caller never intends to present the proposition to the profile. The [!DNL Decisioning Service] will not record the proposition as an official XDM decision event and it will not appear in reporting datasets. The default value of this property is false and when the property is omitted the decision is not considered a test run and therefore shall be presented to the end user.
- **`xdm:validateContextData`** - This optional property turns the validation of the context data on or off. If validation is turned on, then for each provided context data item, the schema (based on the `@type` field) will be fetched from the XDM registry, and the `xdm:data` object will be validated against it.

The request per this schema contains an array of URIs referencing offer activities, a profile identity and an array of context data items:

- **`xdm:offerActivities`** - This mandatory property is an array of objects where each item contains data about the offer activity. The offer activity has the following properties:
  - **`xdm:offerActivity`** - The unique identifier (URI) of the activity. This is the value of the `@id` property of the offer activity.
- **`xdm:identityMap`** - A mandatory property holding a JSON object that complies with the XDM schema `https://ns.adobe.com/xdm/context/identitymap`. The property defines a map where the key is an identity namespace code and the value is a list of end user identifiers in the given namespace. If m.
- **`xdm:contextData`** - An optional property that contains items that are described by an reference to their schema. Each context data item in the array must have the following properties:
  - **`@type`** - A mandatory property referencing the XDM schema of the object in this item.
  - **`xdm:data`** - A mandatory property containing the object properties per the XDM schema given in the `@type` property.

## Dynamic context data in decisioning requests

The previous section indicated how XDM objects can be passed to a decision request. The following is an example of such context object array:

```json
"xdm:contextData": [
  {
    "@type":" https://ns.adobe.com/{TENANT_ID_OF_ORG}/schemas/{NUMERIC_SCHEMA_ID};version=1",
    "xdm:data":{ 
      "{TENANT_ID_OF_ORG}": {
        "productDetails":{ 
          "xdm:gender":      "unisex",
          "xdm:fabrication": "leather",
          "xdm:category":    "wallets",
        }
      }
    }
  }
]
```

The schema must have been constructed by your organization. To learn about constructing schemas please refer to the [Schema Editor Tutorial](../../xdm/tutorials/create-schema-ui.md). Your schema will be in a namespace `https://ns.adobe.com/{TENANT_ID}/schemas`.

The [Schema Registry API developer guide](../../xdm/tutorials/create-schema-api.md) explains how schemas can be accessed programmatically and how a developer obtains the tenant ID and the numeric identifier of your schema. The version number is required and is also provided by the schema registry APIs.

A schema defined by an organization will typically have a root property named `_{TENANT_ID}`, also called the tenant namespace string.
Note that the properties used from a global schema component such as _`https://ns.adobe.com/xdm/context/product` have a namespace prefix `xdm:`. In this case the organization-defined property `productDetails` was constructed with that datatype. While tenant properties are nested in a property named after the tenant namespace, datatypes that are globally available use the reserved prefix `xdm:` to prevent collisions of property names.

Multiple data objects can be listed in the `xdm:contextData` property. Each object must identify its type via the `@type` property.
The values of the context data objects are available to be used in PQL expressions, for example in the condition of an eligibility rule. The context data object must be addressed through the special path reference expression `@{schemaId}`. The expressions that follow this reference expression are regular path expressions that access the data object’s properties:

```json
{
  "xdm:name": "Eligible for a free gender-specific item of interest",
  "xdm:condition": {
    "xdm:value":
      "gender in (\"female\",\"non-specific\")  
       and (
         select p from
           @{https://ns.adobe.com/{TENANT_ID}/schemas/{NUMERIC_SCHEMA_ID}}._{TENANT_ID}
         select e from xEvent 
            where e.type = \"productSearch\" 
              and e.category = p.category 
              and p.gender in (\"female\",\"unisex\")
       )",
    "xdm:format": "pql/text",
    "xdm:type": "PQL"
  }
}
```

In the example above, the variable `p` is iterating over the array of objects that were marked with the `@type` = `https://ns.adobe.com/{TENANT_ID}/schemas/{NUMERIC_SCHEMA_ID}}`.

Note that the PQL syntax does not use prefixes in property names. Global properties, by default, are simply referenced without the `xdm:` prefix. Properties your organization defines are nested within an **additional** property named after the tenant namespace (in the example indicated by the variable `{TENANT_ID}`). To be able to reference the custom-defined properties directly, the variable `p` is bound to the result of the path that dereferences the additional nesting property.

## Usage of profile records

All records for profile and experience event entities are managed already in the profile store. By passing one or more profile identity to the request the profile for those identieties will be identified and looked up from the store. The data is then automatically available to decision rules and models evaluated by the decision strategy.

To retrieve the profile and experience records the default merge policy is applied.
Note, that after uploading profile records to the [!DNL Platform] datalake there is a slight delay until the profile records can be looked up. The same holds true for ingesting profile and experience records via the streaming APIs, only after a few seconds the data will be available for evaluating decision rules that evaluate profile and experience event data.