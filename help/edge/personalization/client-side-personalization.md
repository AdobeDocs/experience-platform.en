---
title: Client-side personalization using Adobe Experience Platform Web SDK
description: This article demonstrates how you can use the Web SDK to deploy client-side personalization on your web properties.
keywords: personalization; web sdk; client-side;
---

# Client-side personalization using Web SDK

## Overview {#overview}

Client-side personalization involves using [Web SDK](../../home.md) to personalize the customer experience on your web properties.

In the example described in this article, personalization content is retrieved and rendered on the client side, using the Web SDK.

The table below shows an example of personalized and non-personalized content.

| Sample page without personalization | Sample page with personalization|
|---|---|
| ![Example web page with no personalization](assets/plain.png) | ![Example web page with personalization](assets/personalized.png) |

## Considerations {#considerations}

### Cookies {#cookies}

Cookies are used to persist user identity and cluster information.  When using a client-side implementation, the Web SDK handles the storing and sending of these cookies during the request lifecycle.

| Cookie | Purpose | Stored by | Sent by |
|---|---|---|---|
| `kndctr_AdobeOrg_identity` | Contains user identity details. | Web SDK | Web SDK |
| `kndctr_AdobeOrg_cluster`  | Indicates which Edge Network cluster should be used to fulfill the requests. | Web SDK | Web SDK |

### Request placement {#request-placement}

Personalization requests are required to get propositions and send a display notification. When using a client-side implementation, the Web SDK makes these requests when the `sendEvent` command is used.

| Request | Made by | 
|---|---|
| Interact request to retrieve propositions | Web SDK, usingthe `sendEvent` command. |
| Interact request to send display notifications | Web SDK, usingthe `sendEvent` command. |

## Sample application {#sample-app}

The process described below uses a sample application which you can use as a starting point to experiment and learn more about this type of personalization. 

You can download this sample and customize it for your own needs. For example, you can change environment variables so that the sample app pulls in offers from your own Experience Platform configuration.

To do so, open the `.env` file at the root of the repository and modify the variables according to your configuration. Restart the sample app, and you're ready to experiment using your own personalization content.

### Running the sample {#running-sample}

Follow the steps below to run the sample app.

1. Clone [this repository](https://github.com/adobe/alloy-samples) to your local machine.
2. Open a terminal and navigate to the `personalization-client-side` folder.
3. Run `npm install`.
4. Run `npm start`.
5. Open your web browser and navigate to `http://localhost`.

## Process overview {#process}

This section described the steps used in retrieving the personalization content.

1. The [!DNL Web SDK] is included on the sample page.
2. The [!DNL Web SDK] `sendEvent` command is used to fetch personalization content.

   ```js
   alloy("sendEvent", {
      "renderDecisions": true,
      decisionScopes: ["sample-json-offer"]
   }
   ).then(applyPersonalization("sample-json-offer"));
   ```

3. The [!DNL Web SDK] renders page load [!DNL Visual Experience Composer (VEC)](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html?lang=en) offers automatically, because the `renderDecisions` flag is set to `true`.
4. Form-based [!DNL JSON] offers are manually applied by the sample implementation code through the `applyPersonalization` method, to update the [!DNL DOM] based on the personalization offer.
5. For form-based activities, display events must manually be sent, to indicate when the offer has been displayed. This is done via the `sendEvent` command.

   ```js
   function sendDisplayEvent(decision) {
   const { id, scope, scopeDetails = {} } = decision;

   alloy("sendEvent", {
      xdm: {
         eventType: "decisioning.propositionDisplay",
         _experience: {
         decisioning: {
            propositions: [
               {
               id: id,
               scope: scope,
               scopeDetails: scopeDetails,
               },
            ],
         },
         },
      },
   });
   }
   ```
