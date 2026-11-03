---
title: Server SDK for JavaScript overview
description: Send data to the Adobe Experience Platform Edge Network from your server using JavaScript.
badge: Alpha
---
# Server SDK for JavaScript overview

The **Adobe Experience Platform Server SDK for JavaScript**, or **Server SDK**, is a library that runs on your server and sends data to the Adobe Experience Platform Edge Network. It runs in Node.js and in other server-side JavaScript runtimes that meet its [requirements](#requirements). It is published to npm as [`@adobe/alloy-node`](https://www.npmjs.com/package/@adobe/alloy-node). This guide covers its core concepts, installation, configuration, and methods.

The Server SDK shares its core with the [Web SDK](/help/collection/js/js-overview.md). It uses the same [datastreams](/help/datastreams/overview.md), the same [XDM](/help/xdm/home.md) data model, and the same identity and consent cookies. Because it runs on a server instead of in a browser, it differs in how you create instances, authenticate, and handle each visitor's request.

>[!IMPORTANT]
>
>The Server SDK is in alpha. Its methods, options, and behavior can change between releases, and only the features listed in [Supported features](#features) are available. Review the [release notes](https://github.com/adobe/alloy/blob/main/packages/node/CHANGELOG.md) before you upgrade.

## When to use the Server SDK {#when-to-use}

Adobe offers several ways to send data to the Edge Network. Choose the one that matches where your code runs:

| Approach | Use it when |
| --- | --- |
| [Web SDK](/help/collection/js/js-overview.md) | Your code runs in the visitor's browser. The Web SDK can render personalized content, collect link clicks, and read page context automatically. |
| **Server SDK** | Your code runs on a JavaScript server that handles the visitor's request. For example, a server that renders pages, an API backend, or middleware that fetches personalization before the page reaches the browser. |
| [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) | You want to call the Edge Network directly, from any language, without a library. The Server SDK calls this API for you. |

You can use the Server SDK and the Web SDK together. For example, your server can request personalized content, and the browser can render it. See [Hybrid personalization](/help/collection/use-cases/personalization/hybrid-server-personalization.md).

## How it works {#how-it-works}

1. **When your server starts**, you create one instance and call [`configure`](methods/configure/overview.md) once with your datastream, organization, and [API credentials](authentication.md).
1. **For each incoming request**, you call [`forRequest`](methods/forrequest.md) to get a handle that is scoped to that visitor. The handle reads and writes the visitor's identity and consent through the cookie service that you provide, and forwards the visitor's request headers (such as `User-Agent`) to the Edge Network.
1. **You call methods on the handle**, such as [`sendEvent`](methods/sendevent/overview.md). The SDK sends events to the authenticated [Edge Network Server API](https://developer.adobe.com/data-collection-apis/docs/getting-started/authentication) using an access token that it obtains and caches for you.
1. **The SDK returns the results to your code.** For example, `sendEvent` returns personalization propositions as data. The SDK does not render them. Your application decides what to do with them, such as including them in the page for the Web SDK to render.

See [Instances and requests](concepts/instances-and-requests.md) for more details.

## Supported features {#features}

The following table lists what the alpha release supports. See [Differences from Web SDK](differences.md) for a detailed comparison.

| Feature | Status |
| --- | --- |
| Send events with [`sendEvent`](methods/sendevent/overview.md) | Supported |
| Retrieve identity with [`getIdentity`](methods/getidentity.md) and [`appendIdentityToUrl`](methods/appendidentitytourl.md) | Supported |
| Consent with [`setConsent`](methods/setconsent.md) and [`defaultConsent`](methods/configure/defaultconsent.md) | Supported. `defaultConsent` accepts only `"in"` and `"out"`. |
| Request personalization with [`personalization`](methods/sendevent/personalization.md) | Supported. Propositions are returned as data and are not rendered. |
| Context data | Partially supported. See [Context and forwarded headers](concepts/context-and-headers.md). |
| Debugging with [`debugEnabled`](methods/configure/debugenabled.md) and [`setDebug`](methods/setdebug.md) | Supported. Logs are written to the console. |
| Rendering personalized content, click collection, media analytics, push notifications, Brand Concierge, audiences, and rules-based content cards | Not supported |

## Requirements {#requirements}

Before you use the Server SDK, make sure that you have the following:

* **A server-side JavaScript runtime**, such as Node.js 22 or later. The runtime must support ECMAScript modules, because you load the package with `import`. It must also provide the following web-standard globals: `fetch`, `Headers`, `URLSearchParams`, `crypto.getRandomValues`, `setTimeout`, `clearTimeout`, `atob`, `btoa`, `TextEncoder`, `TextDecoder`, and `console`. See [Runtime support](#runtime-support).
* **A datastream.** See [Configure a datastream](/help/datastreams/configure.md). If you use [`getIdentity`](methods/getidentity.md), [`appendIdentityToUrl`](methods/appendidentitytourl.md), or [`setConsent`](methods/setconsent.md), set the datastream's **[!UICONTROL Access Type]** to **[!UICONTROL Mixed Authentication]**, because these methods send unauthenticated requests. See [Authentication](authentication.md#datastream-access-type).
* **An OAuth Server-to-Server credential** from the Adobe Developer Console. The SDK requires it and uses it to authenticate the events that it sends. See [Authentication](authentication.md).
* **An XDM schema and dataset**, if you send data to Adobe Experience Platform.

## Runtime support {#runtime-support}

The Server SDK is supported in any server-side JavaScript runtime that meets the [requirements](#requirements). It doesn't depend on Node.js-specific modules. Its default [platform services](concepts/platform-services.md) use only web-standard APIs, such as `fetch`.

These guides use Node.js as the primary example runtime. Code examples use Node.js conventions, such as reading credentials from `process.env` and handling requests with the `node:http` module. If you use a different runtime, replace these parts with your runtime's equivalents. The SDK's own methods work the same way in every supported runtime.

## Source code and feedback {#source}

The Server SDK is open source. Its source code is in the [`packages/node`](https://github.com/adobe/alloy/tree/main/packages/node) folder of the `adobe/alloy` repository on GitHub. Report issues and request features in that repository.

## Next steps {#next-steps}

* [Install the Server SDK](install.md)
* [Set up authentication](authentication.md)
* [Learn how instances and requests work](concepts/instances-and-requests.md)
