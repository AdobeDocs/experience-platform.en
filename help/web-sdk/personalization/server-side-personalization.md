---
title: Server-side personalization using the Edge Network Server API
description: This article demonstrates how you can use the Edge Network Server API to deploy server-side personalization on your web properties.
keywords: personalization; server api; edge network; server-side;
---

# Server-side personalization using the Edge Network Server API

## Overview {#overview}

Server-side personalization involves using the [Edge Network Server API](../../server-api/overview.md) to personalize the customer experience on your web properties.

In the example described in this article, personalization content is retrieved server-side, using the Server API. Then, the HTML is rendered server-side, based on the retrieved personalization content.

The table below shows an example of personalized and non-personalized content.

| Sample page without personalization | Sample page with personalization|
|---|---|
| ![Example web page with no personalization](assets/plain.png) | ![Example web page with personalization](assets/personalized.png) |

## Considerations {#considerations}

### Cookies {#cookies}

Cookies are used to persist user identity and cluster information.  When using a server-side implementation, the application server handles the storing and sending of these cookies during the request lifecycle.

| Cookie | Purpose | Stored by | Sent by |
|---|---|---|---|
| `kndctr_AdobeOrg_identity` | Contains user identity details. | Application server | Application server |
| `kndctr_AdobeOrg_cluster`  | Indicates which Edge Network cluster should be used to fulfill the requests. | Application server | Application server |

### Request placement {#request-placement}

Personalization requests are required to get propositions and send a display notification. When using a server-side implementation, the application server makes these requests to the Edge Network Server API.

| Request | Made by | 
|---|---|
| Interact request to retrieve propositions | Application server calling the Edge Network Server API. |
| Interact request to send display notifications | Application server calling the Edge Network Server API. |

## Sample application {#sample-app}

The process described below uses a sample application which you can use as a starting point to experiment and learn more about this type of personalization. 

You can download this sample and customize it for your own needs. For example, you can change environment variables so that the sample app pulls in offers from your own Experience Platform configuration.

To do so, open the `.env` file at the root of the repository and modify the variables according to your configuration. Restart the sample app, and you're ready to experiment using your own personalization content.

### Running the sample {#running-sample}

Follow the steps below to run the sample app.

1. Clone [this repository](https://github.com/adobe/alloy-samples) to your local machine.
2. Open a terminal and navigate to the `personalization-server-side` folder.
3. Run `npm install`.
4. Run `npm start`.
5. Open your web browser and navigate to `http://localhost`.

## Process overview {#process}

This section described the steps used in retrieving the personalization content.

1. [Express](https://expressjs.com/) is used for a lean server-side implementation. This handles basic server requests and routing.
2. The browser requests the web page. Any cookies previously stored by the browser, prefixed with `kndctr_`, are included.
3. When the page is requested from the app server, an event is sent to the [interactive data collection endpoint](../../../server-api/interactive-data-collection.md) to fetch personalization content. The sample app uses helper methods to simplify building and sending requests to the API (see [aepEdgeClient.js](https://github.com/adobe/alloy-samples/blob/main/common/aepEdgeClient.js)). The `POST` request contains an `event` and a `query`. The cookies from the previous step, if available, are included in the `meta>state>entries` array.

   ```js
   fetch(
   "https://edge.adobedc.net/ee/v2/interact?dataStreamId=abc&requestId=123",
   {
      headers: {
         accept: "*/*",
         "accept-language": "en-US,en;q=0.9",
         "cache-control": "no-cache",
         "content-type": "text/plain; charset=UTF-8",
         pragma: "no-cache",
         "sec-fetch-dest": "empty",
         "sec-fetch-mode": "cors",
         "sec-fetch-site": "cross-site",
         "sec-gpc": "1",
         "Referrer-Policy": "strict-origin-when-cross-origin",
         Referer: "http://localhost/",
      },
      body: JSON.stringify({
         event: {
         xdm: {
            web: {
               webPageDetails: {
               URL: "http://localhost/",
               },
               webReferrer: {
               URL: "",
               },
            },
            identityMap: {
               FPID: [
               {
                  id: "xyz",
                  authenticatedState: "ambiguous",
                  primary: true,
               },
               ],
            },
            timestamp: "2022-06-23T22:21:00.878Z",
         },
         data: {},
         },
         query: {
         identity: {
            fetch: ["ECID"],
         },
         personalization: {
            schemas: [
               "https://ns.adobe.com/personalization/default-content-item",
               "https://ns.adobe.com/personalization/html-content-item",
               "https://ns.adobe.com/personalization/json-content-item",
               "https://ns.adobe.com/personalization/redirect-item",
               "https://ns.adobe.com/personalization/dom-action",
            ],
            decisionScopes: ["__view__", "sample-json-offer"],
         },
         },
         meta: {
         state: {
            domain: "localhost",
            cookiesEnabled: true,
            entries: [
               {
               "key": "kndctr_XXX_AdobeOrg_identity",
               "value": "abc123"
               },
               {
               "key": "kndctr_XXX_AdobeOrg_cluster",
               "value": "or2"
               }
            ],
         },
         },
      }),
      method: "POST",
   }
   ).then((res) => res.json());
   ```

4. The Target offer from the form-based activity is read from the response and used when producing the HTML response.
5. For form-based activities, display events must manually be sent in the implementation to indicate when the offer has been displayed. In this example, the notification is sent server-side, during the request lifecycle.

   ```js
   function sendDisplayEvent(aepEdgeClient, req, propositions, cookieEntries) {
   const address = getAddress(req);

   aepEdgeClient.interact(
      {
         event: {
         xdm: {
            web: {
               webPageDetails: { URL: address },
               webReferrer: { URL: "" },
            },
            timestamp: new Date().toISOString(),
            eventType: "decisioning.propositionDisplay",
            _experience: {
               decisioning: {
               propositions: propositions.map((proposition) => {
                  const { id, scope, scopeDetails } = proposition;

                  return {
                     id,
                     scope,
                     scopeDetails,
                  };
               }),
               },
            },
         },
         },
         query: { identity: { fetch: ["ECID"] } },
         meta: {
         state: {
            domain: "",
            cookiesEnabled: true,
            entries: [...cookieEntries],
         },
         },
      },
      {
         Referer: address,
      }
   );
   }
   ```

6. [!DNL Visual Experience Composer (VEC)] offers are ignored, since they can only be rendered via Web SDK.
7. When the HTML response is returned, the identity and cluster cookies are set on the response by the application server.