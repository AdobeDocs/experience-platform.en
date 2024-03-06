---
title: Adobe Experience Platform Web SDK FAQ
description: Get answers to frequently asked questions about the Adobe Experience Platform Web SDK.
exl-id: 6ddb4b4d-c9b8-471a-bd2e-135dc4202876
---
# Frequently asked questions

This guide provides answers to questions that are often asked about the Adobe Experience Platform Web SDK.

## What is Adobe Experience Platform Web SDK?

Adobe Experience Platform Web SDK is a client-side JavaScript library that allows customers of Adobe Experience Cloud to interact with the various services in the Experience Cloud.

It sends data in a solution-agnostic way (XDM) to Adobe Experience Platform Edge Network, which then maps the data to solution specific formats and destinations and sends it in real time.

**More information**
[Adobe Summit presentation](https://www.adobe.com/summit/2020/with-alloy-js-never-tag-for-an-evar-or-mbox-again.html)

## How does Adobe Experience Platform Web SDK differ from previous solutions?

### Prior to Adobe Experience Platform SDK

Currently, you have to deploy different JavaScript libraries based on each individual solution.

* Each solution has its own JavaScript library, schema, and domain.
* None of these libraries were built to work with each other.
* Cross-solution and Adobe Experience Platform use cases require these disparate libraries to be interdependent, causing deployment friction.

Although tags in Platform make it as easy as possible to deploy and manage these libraries, there are still issues with:

* Library size (too much Adobe code on a page)
* Performance (sites take too long to load)
* Multiple calls for a single use case
* Waiting for ECID return before personalization calls (causes lag)
* Fractured data collection (what is an evar?)
* Schema confusion between solutions (A4T)
* Lots of other less optimal things

Also, there is currently no JavaScript library that sends data directly to Adobe Experience Platform.

### With Adobe Experience Platform Web SDK

The new Web SDK sends data for the following solutions to a single destination (Adobe Experience Platform Edge Network) and solves for the most common aforementioned solution use cases.

* Adobe Analytics
* Adobe Audience Manager
* Adobe Target
* Visitor ID
* Adobe Experience Platform

Other solutions will follow later this year.

Adobe Experience Platform Web SDK can also send data directly to Adobe Experience Platform. This data is in XDM and is mapped to the server-side solution schema.

## What is the value of this new Web SDK?

**Performance:** The web SDK is smaller than using all of the current Adobe libraries and provides significantly faster page loads.

**Simplicity:** The combination of XDM, Web SDK, tags, Edge Network, Adobe Experience Cloud solutions, and Adobe Experience Platform creates an easy-to-understand and simple-to-follow data collection story.

* **XDM:** The solution-agnostic schema you use to send data to Adobe. No more tagging for evars or mboxes.
* **Adobe Experience Platform Web SDK:** Makes it easy to send and receive data to Adobe Experience Platform Edge Network.
* **Tags:** Simplifies deployment and configuration of the Web SDK (and any other JavaScript tags) on a site.
* **Edge Network:** Easily route the data to Adobe Experience Platform and solutions in the format they need.
* **Adobe Experience Platform and Adobe solutions:** Enable their value proposition.

**Control:** Because all of the data is using a single and connected stream of data, you can logically follow and control what the data looks like at every millisecond of its journey, to and from applications.

**Modern and ready for the future:** The Web SDK and its connection to the Edge Network has enabled Adobe to significantly modernize how Adobe deals with data collection, personalization, consent and the future of 3rd party cookies. (It enables a first party domain, managed by Adobe.)

**Time-to-value:** Adobe has worked hard (and will continue) to make it as easy as possible to deploy the Web SDK via tags and map client-side data to XDM. After that work is done, all other Adobe solutions and Adobe Experience Platform services can be turned on or off server-side. For example, if you are using this for Adobe Analytics and you want to turn on Target or Experience Platform, you can simply flip a toggle on the Datastream configuration and light up those use cases.

## What is Alloy?

Alloy is the code name for Adobe Experience Platform Web SDK. It is used within the SDK's source code and filename, though Adobe Experience Platform Web SDK is the official name.

## Do customers need to buy Adobe Experience Platform to use the [!DNL Web SDK]?

No. Any Adobe Digital Experience customer can use the Adobe Experience Platform Web SDK free of charge. Customers who wish to use the [!DNL Web SDK] will need to configure the right permissions to create schemas, datasets, identity namespaces, and datastreams in the Data Collection UI or Experience Platform UI.

For more information on configuring these permissions see our documentation on [data collection permissions management](https://experienceleague.adobe.com/docs/experience-platform/collection/permissions.html).

## Who should use the Web SDK?

Adobe Experience Platform Web SDK has been developed for the following people:

* Adobe Experience Platform users
  * If you need to send data directly from a device to Adobe Experience Platform, this is the officially recommended way.
  * Adobe is aware that using the Adobe Analytics connector is faster if the customer already has Adobe Analytics, but it is not the long-term strategy for data collection.

* Adobe Experience Cloud solution customers
  * New Adobe Analytics, Adobe Audience Manager, and Adobe Target customers should start with the new Web SDK and not use legacy libraries.
  * Existing customers who want to get the most optimized implementation possible should use the new Web SDK.


## How do I get access to start using Adobe Experience Platform Web SDK?

The Web SDK is currently available to the general public and can be used to send data to Adobe Experience Cloud products. The ability to send data to third-party solutions is coming in the near future. There is no charge for the SDK, and it is hosted by Adobe for free. If required, you can download it and host it on your own servers at no cost. Platform Web SDK requires access to Datastream configurations and the Adobe Experience Platform XDM schema builder, in order for Adobe's servers to properly handle inbound data coming from the SDK. If you would like to get access, contact your Adobe account team to start the request process.

## What use cases are currently supported by the Web SDK?

The Web SDK is quickly evolving. More use cases are being worked on. You can find the [list of use cases currently supported here.](https://github.com/adobe/alloy/projects/5)

## Do current customers have to retag their sites?

It depends. Adobe Experience Platform Web SDK can be deployed in two different styles. A future migration document will provide additional details.

* **Just another tag:** If the site is already tagged for solutions and you can't retag, but you want to send data to Adobe Experience Platform Edge Network for Experience Platform use cases or the upcoming event forwarding features (see below), you can add the `alloy.js` tag to the site, where it works as "just another tag."

* **The one and only tag:** If you want to use the Web SDK for an Experience Cloud solution, you must use it for _all_ of the solutions on that page. For example, if your site is already tagged for Adobe Analytics and you want to use it for Target, you need to use it for both, as well as for any others in the future.

In other words, if you decide to use Adobe Experience Platform Web SDK for non-solution use cases, you can tag the site with `alloy.js` and move on as if it's a new solution. If you want to use it for Adobe Analytics, Target, or Audience Manager, or for application use cases, you might have to remove any of the legacy code on your page.

## Can I migrate the ECIDs when I start using Alloy so my website visitors don't start showing up as new visitors?

Yes, Adobe Experience Platform Web SDK provides an Identity Migration feature. Follow the instructions for ID migration in the [Platform Web SDK identity documentation](/help/web-sdk/identity/overview.md#id-migration) for more details.

## How is the Web SDK different than tags?

* **Tags in Experience Platform** manage the device code. Use them to more easily deploy the code. They are free and powerful.

* **Adobe Experience Platform Web SDK** is the official name of the new code that would be deployed by tags for Adobe use cases. It is also free and powerful.

* **`alloy.js`** is the file name of the Adobe Experience Platform Web SDK code.

## Do I have to use tags to deploy the Web SDK?

No. You can download the `alloy.js` file yourself.

However:

* Adobe Experience Platform Web SDK requires something called a Datastream ID so the edge network can identify the stream and determine what to do with the data. This ID is created within Experience Platform. This doesn't mean you have to use the UI to create properties or deploy the JavaScript code, but you do need to use tags to create a configuration ID.

* Tags are not only the best available tag and SDK manager, it makes it very easy to deploy `alloy.js` and map data to XDM schemas. If you decide not to use tags, you will have to manage deploying `alloy.js`, eventing, and mapping your data into XDM before sending it. This is a _much_ more difficult process than using tags.

* It is recommended that you use tags to deploy `alloy.js`, even if it's the only tag you use it for.

## What is event forwarding?

If you use our SDKs and send XDM to the Edge Network, these new features event forwarding allows you to install new server-side extensions and map that data to anything--and send it anywhere--from our edge network. Think of it as "data collection as a service". This will be available for a cost, as well as being bundled as part of Adobe Experience Platform.

## What is a CNAME or First Party Domain and why does it matter?

More information about a CNAME is available in the [Adobe documentation](https://experienceleague.adobe.com/docs/id-service/using/reference/analytics-reference/cname.html)

## Does the Adobe Experience Platform Web SDK use cookies? If so, what cookies does it use?

Yes, currently the Web SDK uses anywhere between one to seven cookies depending on your implementation. Below is a list of the cookies that you might see with the Web SDK and the way that they are used:

|**Name**|**maxAge**|**Friendly age**|**Description**|
|---|---|---|---|
|**kndct_orgid_identity**|34128000|395 days|The identity cookie stores the ECID, as well as other information related to the ECID.|
|**kndctr_orgid_consent_check**|7200|2 hours|This cookie stores the user's consent preference for the website.|
|**kndctr_orgid_consent**|15552000|180 days|This session-based cookie signals the server to look up the consent preferences server side.|
|**kndctr_orgid_cluster**|1800|30 minutes|This cookie stores the Edge Network region that is serving the current user's requests. The region is used in the URL path so that the Edge Network can route the request to the correct region. This cookie has a 30 minutes lifetime, so that if a user connects with a different IP address, the request can be routed to the closest region.|
|**mbox**|63072000|2 years|This cookie appears when the Target migration setting is set to true. This will allow the Target [mbox cookie](https://developer.adobe.com/target/implement/client-side/atjs/atjs-cookies/) to be set by the Web SDK.|
|**mboxEdgeCluster**|1800|30 minutes|This cookie appears when the Target migration setting is set to true. This cookie allows the Web SDK to communicate the correct edge cluster to at.js so that Target profiles can stay in sync as users navigate across a site.|
|**AMCV_###@AdobeOrg**|34128000|395 days|This cookie only appears when ID migration on the Adobe Experience Platform Web SDK is enabled. This cookie helps when transitioning to Web SDK while some parts of the site are still using visitor.js. See [`idMigrationEnabled`](/help/web-sdk/commands/configure/idmigrationenabled.md) for more information.|

When using the Web SDK, the Edge Network sets one or more of the cookies above. The Edge Network sets all the cookies with the `secure` and `sameSite="none"` attributes.

If you currently have both secure and non-secure sections on your website, this could interfere with user identification. When a user navigates from a secure section of the site to a non-secure section, the Edge Network generates a new `ECID` with the request.  

## Which browsers does the Adobe Experience Platform Web SDK support?

The Adobe Experience Platform Web SDK is designed to work optimally in the latest versions of Google Chrome, Safari, Firefox, Internet Explorer 11, and Microsoft Edge Chromium. You may have trouble using certain features on older versions of browsers.

## Where can I get more info about Adobe Experience Platform Web SDK?

* [Documentation](/help/web-sdk/home.md)
* [Source Code](https://github.com/adobe/alloy)

### Supporting Internet Explorer {#support-internet-explore}

This SDK uses promises, which are a method of communicating the completion of asynchronous tasks. The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) implementation used by the SDK is natively supported by all target browsers except [!DNL Internet Explorer]. To use the SDK on [!DNL Internet Explorer], you must have `window.Promise` [polyfilled](https://remysharp.com/2010/10/08/what-is-a-polyfill).

To determine if you already have `window.Promise` polyfilled:

1. Open your website in [!DNL Internet Explorer].
1. Open the browser's debugging console.
1. Type `window.Promise` into the console, then press Enter.

If something other than `undefined` appears, you likely have already polyfilled `window.Promise`. Another way to determine if `window.Promise` is polyfilled is by loading your website after having completed the above installation instructions. If the SDK throws an error mentioning something about a promise, you likely have not polyfilled `window.Promise`.

If you've determined you must polyfill `window.Promise`, include the following script tag above the previously provided base code:

```html
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
```

This tag loads a script that ensures that `window.Promise` is a valid Promise implementation.

>[!NOTE]
>
>If you choose to load a different Promise implementation, be sure it supports `Promise.prototype.finally`.

### Supporting Internet Explorer

The Adobe Experience Platform SDK uses promises, which are a method of communicating the completion of asynchronous tasks. The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) implementation used by the SDK is natively supported by all target browsers except [!DNL Internet Explorer]. To use the SDK on [!DNL Internet Explorer], you must have `window.Promise` [polyfilled](https://remysharp.com/2010/10/08/what-is-a-polyfill).

One library you could use to polyfill promise is promise-polyfill. See the [promise-polyfill documentation](https://www.npmjs.com/package/promise-polyfill) for more information on how to install with NPM.

>[!NOTE]
>
>If you choose to load a different Promise implementation, be sure it supports `Promise.prototype.finally`.