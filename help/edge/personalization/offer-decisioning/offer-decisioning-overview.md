---
title: Offer Decisioning Overview
seo-title: Offer Decisioning and Adobe Experience Platform Web SDK
description: The Adobe Experience Platform Web SDK can deliver and render personalized offers managed in Offer Decisioning. You can create your offers and other related objects using the Offer Decisioning UI or API.
seo-description: The Adobe Experience Platform Web SDK can deliver and render personalized offers managed in Offer Decisioning. You can create your offers and other related objects using the Offer Decisioning UI or API.
keywords: offer decisioning;decisioning;Web SDK;Platform Web SDK;personalized offers;deliver offers;offer delivery;offer personalization;
---

# [!DNL Offer Decisioning] Overview

>[!NOTE]
>
>The use of Offer Decisioning in Adobe Experience Platform Web SDK is currently available in early access to select users. This functionality is not available to all IMS organizations.

The Adobe Experience Platform [!DNL Web SDK] can deliver and render personalized offers that are managed in Offer Decisioning. You can create your offers and other related objects using the Offer Decisioning user interface (UI) or APIs.

## Pre-Requisites

* IMS organization is enabled for edge decisioning
* Offers, Activities created
* Edge config is published

## Terminology

It is important to understand the following terminology when working with Offer Decisioning. For more information and to view additional terms, please visit the [Offer Decisioning glossary](https://experienceleague.adobe.com/docs/offer-decisioning/using/get-started/glossary.html?lang=en#get-started).

**Decision Scopes:** For Offer Decisioning, these are the Base64 encoded strings of JSON containing the activity and placement IDs you want the offer decisioning service to use to propose offers.

*Decision scope JSON:*

```json
{
  "activityId":"xcore:offer-activity:11cfb1fa93381aca",
  "placementId":"xcore:offer-placement:1175009612b0100c"
}
```

*Decision scope Base64 encoded string:*

```json
"eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ=="
```

**Edge Configuration:** For more information, please read the [edge configuration](../../fundamentals/edge-configuration.md) documentation.

**Container:** A container is an isolation mechanism to keep different concerns apart. The container ID is the first path element for all repository APIs. All decisioning objects reside within a container.

**Identity**: For more information, please read this documentation outlining how [Platform Web SDK leverages Identity Service](../../identity/overview.md).

## Enabling Offer Decisioning

To enable Offer Decisioning, you will need to perform the following steps:

1. Enabled Adobe Experience Platform in your [edge configuration](../../fundamentals/edge-configuration.md) and check the "Offer Decisioning" box
![offer-decisioning-edge-config](./assets/offer-decisioning-edge-config.png)
2. Follow the instructions to [install the SDK](../../fundamentals/installing-the-sdk.md) (The SDK can be installed standalone or through [Adobe Experience Platform Launch](http://launch.adobe.com/). Here is a [quick start guide to Launch](https://docs.adobe.com/content/help/en/launch/using/intro/get-started/quick-start.html)).
3. [Configure the SDK](../../fundamentals/configuring-the-sdk.md) for Offer Decisioning. Additional Offer Decisioning specific steps are provided below.
    * Standalone installed SDK
        1. Configure the "sendEvent" action with your `decisionScopes`
        ```javascript
        alloy("sendEvent", {
            ...
            "decisionScopes": [
                "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIxYWIwOWMxM2JkZDIyNCIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMWFiMDZhODRkMDViMTEifQ==",
                "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIxYWIyNWI5NTUwNWIxZiIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMWFiMjFmOTQzMDE0MmIifQ=="
            ]
        })
        ```
    * Launch installed SDK
        1. [Create a Launch property](https://docs.adobe.com/content/help/en/launch/using/reference/admin/companies-and-properties.html)
        2. [Add the Launch Embed Code](https://docs.adobe.com/content/help/en/core-services-learn/implementing-in-websites-with-launch/configure-launch/launch-add-embed.html)
        3. Install and configure the AEP Web SDK extension with the Edge Configuration you just created by selecting the configuration from the "Edge Configuration" drop down. Useful documentation on [extensions](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/extensions/overview.html).
        ![install-aep-web-sdk-extension](./assets/install-aep-web-sdk-extension.png)
        ![configure-aep-web-sdk-extension](./assets/configure-aep-web-sdk-extension.png)
        4. Create the necessary [Data Elements](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/data-elements.html). At the bare minimum, you will need to create an AEP Web SDK Identity Map and an AEP Web SDK XDM Object data element. (hopefully there is more documentation on the AEP Web SDK data elements that we can link here)
        ![identity-map-data-element](./assets/identity-map-data-element.png)
        ![xdm-object-data-element](./assets/xdm-object-data-element.png)
        5. Create your [Rules](https://docs.adobe.com/content/help/en/launch/using/reference/manage-resources/rules.html).
            * Add an AEP Web SDK Send Event action and add the relevant `decisionScopes` to that action's configuration
            ![send-event-action-decisionScopes](./assets/send-event-action-decisionScopes.png)
        6. [Create and publish a library](https://docs.adobe.com/content/help/en/launch/using/reference/publish/libraries.html) containing all the relevant Rules, Data Elements, and Extensions you have configured
   

## Sample requests and responses

### One `decisionScopes` value

**Request**

```json
{
  "events": [
    {
      "xdm": {
        "identityMap": {
          "ECID": [
            {
              "id": "91133425615229052182584359620783097099"
            }
          ]
        }
      },
      "query": {
        "personalization": {
          "decisionScopes": [
            "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ=="
          ]
        }
      }
    }
  ]
}
```

| Property | Required | Description | Limits | Example |
|---|---|---|---|---|
| `identityMap`| Yes | Refer to this [Identity Service documentation](../../identity/overview.md).| One identity per request.| `{ "identityMap": { "ECID": [ { "id": "91133425615229052182584359620783097099" } ] } }`|
| `decisionScopes` | Yes | An array of Base64 encoded strings of JSON containing the activity and placement IDs. | Maximum 30 `decisionScopes` per request. | `"decisionScopes": ["eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ=="]` |

**Response**

```json
{
  "requestId": "94c4f2f1-9218-43ce-afd3-eb0d853c5174",
  "handle": [
    {
      "payload": [
        {
          "id": "2862bb89-5df2-4bc6-85c2-d8f7e1a091de",
          "scope": "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ==",
          "items": [
            {
              "id": "xcore:personalized-offer:124cc332095cfa74",
              "schema": "https://ns.adobe.com/experience/offer-management/content-component-html",
              "data": {
                "id": "xcore:personalized-offer:124cc332095cfa74",
                "format": "text/html",
                "language": [
                  "en-US"
                ],
                "content": "<p>20% Off on shipping</p>",
                "characteristics": {
                  "foo": "bar",
                  "foo1": "bar1"
                }
              }
            }
          ]
        }
      ],
      "type": "personalization:decisions",
      "eventIndex": 0
    }
  ]
}
```

|Property | Description | Example |
|---|---|---|
| `scope`| The decision scope that resulted in the proposed offers. | `"scope": "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ=="` |
| `items.id`| The ID of the proposed offer.| `"id": "xcore:personalized-offer:124cc332095cfa74"`|
| `schema`| The schema of the content associated with the proposed offer.| `"schema": "https://ns.adobe.com/experience/offer-management/content-component-html"`|
| `data.id`| The ID of the proposed offer.|`"id": "xcore:personalized-offer:124cc332095cfa74"`|
| `format`| The format of the content associated with the proposed offer. | `"format": "text/html"`|
| `language`| An array of languages associated with the content from the proposed offer. | `"language": [ "en-US" ]`|
| `content` | Text content associated with the proposed offer in the format of a string. | `"content": "<p style="color:red;">20% Off on shipping</p>"`|
| `deliveryUrl`| Image content associated with the proposed offer in the format of a URL. | `"deliveryURL": "https://image.jpeg"`|
| `characteristics` | Characteristics associated with the proposed offer in the format of a JSON object. | `"characteristics": { "foo": "bar", "foo1": "bar1" }`|

### Multiple `decisionScopes` values

**Request**

```json
{
  "events": [
    {
      "xdm": {
        "identityMap": {
          "ECID": [
            {
              "id": "91133425615229052182584359620783097099"
            }
          ]
        }
      },
      "query": {
        "personalization": {
          "decisionScopes": [
            "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ==",
            "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIyMjA4YjNhODc0MDU1OCIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMjIwNDUyOTUxNGEyYzAifQ==",
            "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIyYzkxMzg1Mjc2MDE4YyIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMzMxZjU2MTYyYWEyZjcifQ=="
          ]
        }
      }
    }
  ]
}
```

| Property | Required | Description | Limits | Example |
|---|---|---|---|---|
| `identityMap`| Yes | Refer to this [Identity Service documentation](../../identity/overview.md).| One identity per request.| `{ "identityMap": { "ECID": [ { "id": "91133425615229052182584359620783097099" } ] } }`|
| `decisionScopes` | Yes | An array of Base64 encoded strings of JSON containing the activity and placement IDs. | Maximum 30 `decisionScopes` per request. | `"decisionScopes":["eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ==", "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIyMjA4YjNhODc0MDU1OCIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMjIwNDUyOTUxNGEyYzAifQ=="`|

**Response**

```json
{
  "requestId": "94c4f2f1-9218-43ce-afd3-eb0d853c5174",
  "handle": [
    {
      "payload": [
        {
          "id": "2862bb89-5df2-4bc6-85c2-d8f7e1a091de",
          "scope": "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ==",
          "items": [
            {
              "id": "xcore:personalized-offer:124cc332095cfa74",
              "schema": "https://ns.adobe.com/experience/offer-management/content-component-html",
              "data": {
                "id": "xcore:personalized-offer:124cc332095cfa74",
                "format": "text/html",
                "language": [
                  "en-US"
                ],
                "content": "<p style="color:red;">20% Off on shipping</p>",
                "characteristics": {
                  "foo": "bar",
                  "foo1": "bar1"
                }
              }
            }
          ]
        }
      ],
      "payload": [
        {
          "id": "2862bb89-5df2-4bc6-85c2-d8f7e1a091de",
          "scope": "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIyMjA4YjNhODc0MDU1OCIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMjIwNDUyOTUxNGEyYzAifQ==",
          "items": [
            {
              "id": "xcore:personalized-offer:235fe313094cdb75",
              "schema": "https://ns.adobe.com/experience/offer-management/content-component-text",
              "data": {
                "id": "xcore:personalized-offer:235fe313094cdb75",
                "format": "text/text",
                "language": [
                  "en-US"
                ],
                "content": "20% Off on shipping",
                "characteristics": {
                  "foo2": "bar2",
                  "foo3": "bar3"
                }
              }
            }
          ]
        }
      ],
      "payload": [
        {
          "id": "2862bb89-5df2-4bc6-85c2-d8f7e1a091de",
          "scope": "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIyYzkxMzg1Mjc2MDE4YyIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjEyMzMxZjU2MTYyYWEyZjcifQ==",
          "items": [
            {
              "id": "xcore:personalized-offer:312de312095cda65",
              "schema": "https://ns.adobe.com/experience/offer-management/content-component-imagelink",
              "data": {
                "id": "xcore:personalized-offer:312de312095cda65",
                "format": "image/png",
                "language": [
                  "en-US"
                ],
                "deliveryURL": "https://image.jpeg"
              }
            }
          ]
        }
      ],
      "type": "personalization:decisions",
      "eventIndex": 0
    }
  ]
}
```

|Property | Description | Example |
|---|---|---|
| `scope`| The decision scope that resulted in the proposed offers. | `"scope": "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTFjZmIxZmE5MzM4MWFjYSIsInBsYWNlbWVudElkIjoieGNvcmU6b2ZmZXItcGxhY2VtZW50OjExNzUwMDk2MTJiMDEwMGMifQ=="` |
| `items.id`| The ID of the proposed offer.| `"id": "xcore:personalized-offer:124cc332095cfa74"`|
| `schema`| The schema of the content associated with the proposed offer.| `"schema": "https://ns.adobe.com/experience/offer-management/content-component-html"`|
| `data.id`| The ID of the proposed offer.|`"id": "xcore:personalized-offer:124cc332095cfa74"`|
| `format`| The format of the content associated with the proposed offer. | `"format": "text/html"`|
| `language`| An array of languages associated with the content from the proposed offer. | `"language": [ "en-US" ]`|
| `content` | Text content associated with the proposed offer in the format of a string. | `"content": "<p style="color:red;">20% Off on shipping</p>"`|
| `deliveryUrl`| Image content associated with the proposed offer in the format of a URL. | `"deliveryURL": "https://image.jpeg"`|
| `characteristics` | Characteristics associated with the proposed offer in the format of a JSON object. | `"characteristics": { "foo": "bar", "foo1": "bar1" }`|