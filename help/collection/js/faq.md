---
title: Adobe Experience Platform Web SDK FAQ
description: Get answers to frequently asked questions about the Adobe Experience Platform Web SDK.
exl-id: 6ddb4b4d-c9b8-471a-bd2e-135dc4202876
TQID: https://experienceleague.adobe.com/BYHDdbH5bkjkmokYEgmmAbI3hyVtaV0iKu1n03ZAFUw
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: a8b0238e-1d43-4679-a3b4-5ba1bad83baa
    internal-label: Implementation
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
  - id: baaa0dd2-d27e-4921-aae3-7888623a5fa5
    internal-label: APIs and SDKs
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
  - id: e8a4c7eb-7254-4984-ac46-e651a57c7e39
    internal-label: SDKs
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# Frequently asked questions

This guide provides answers to questions that are often asked about the Adobe Experience Platform Web SDK.

## How does Adobe Experience Platform Web SDK differ from previous solutions?

### Prior to Experience Platform Web SDK

Currently, you have to deploy different JavaScript libraries based on each individual solution.

* Each solution has its own JavaScript library, schema, and domain.
* None of these libraries were built to work with each other.
* Cross-solution and Adobe Experience Platform use cases require these disparate libraries to be interdependent, causing deployment friction.

Although tags in Experience Platform make it as easy as possible to deploy and manage these libraries, there are still issues with:

* Library size (too much Adobe code on a page)
* Performance (sites take too long to load)
* Multiple calls for a single use case
* Waiting for ECID return before personalization calls (causes lag)
* Fractured data collection (what is an evar?)
* Schema confusion between solutions (A4T)
* Lots of other less optimal things

Also, there is currently no JavaScript library that sends data directly to Adobe Experience Platform.

### With Experience Platform Web SDK

The new Web SDK sends data for the following solutions to a single destination (Experience Platform Edge Network) and solves for the most common aforementioned solution use cases.

* Adobe Analytics
* Adobe Audience Manager
* Adobe Target
* Visitor ID
* Adobe Experience Platform

Other solutions will follow.

Adobe Experience Platform Web SDK can also send data directly to Adobe Experience Platform. This data is in XDM format and is mapped to the server-side solution schema.

## What is the value of this new Web SDK?

**Performance:** The web SDK is smaller than using all of the current Adobe libraries and provides significantly faster page loads.

**Simplicity:** The combination of XDM, Web SDK, tags, Edge Network, Adobe Experience Cloud solutions, and Adobe Experience Platform creates an easy-to-understand and simple-to-follow data collection story.

* **XDM:** The solution-agnostic schema you use to send data to Adobe. No more tagging for evars or mboxes.
* **Web SDK:** Makes it easy to send and receive data to Adobe Experience Platform Edge Network.
* **Tags:** Simplifies deployment and configuration of the Web SDK (and any other JavaScript tags) on a site.
* **Edge Network:** Easily route the data to Adobe Experience Platform and solutions in the format they need.
* **Adobe Experience Platform and Adobe solutions:** Enable their value proposition.

**Control:** Because all of the data is using a single and connected stream of data, you can logically follow and control what the data looks like at every millisecond of its journey, to and from applications.

**Modern and ready for the future:** The Web SDK and its connection to the Edge Network has enabled Adobe to significantly modernize how Adobe deals with data collection, personalization, consent and the future of 3rd party cookies. (It enables a first party domain, managed by Adobe.)

**Time-to-value:** Adobe has worked hard (and will continue) to make it as easy as possible to deploy the Web SDK via tags and map client-side data to XDM. After that work is done, all other Adobe solutions and Adobe Experience Platform services can be turned on or off server-side. For example, if you are using this for Adobe Analytics and you want to turn on Target or Experience Platform, you can simply flip a toggle on the Datastream configuration and light up those use cases.

## What is `alloy.js`?

`alloy.js` is the name of the Web SDK JavaScript library. It is referenced within the SDK source code and filename.

## Do customers need to buy Adobe Experience Platform to use the [!DNL Web SDK]?

No. Any Adobe Digital Experience customer can use the Adobe Experience Platform Web SDK free of charge.

* Customers who do *not* have access to Experience Platform or Real-time CDP and wish to use the [!DNL Web SDK] will need to configure the right permissions to create schemas and datastreams in the Data Collection UI or Experience Platform UI.
* Customers who have access to Experience Platform or Real-time CDP and wish to use the [!DNL Web SDK] will need to configure the right permissions to create schemas, datasets, identity namespaces, and datastreams in the Data Collection UI or Experience Platform UI.

For more information on configuring these permissions see our documentation on [data collection permissions management](https://experienceleague.adobe.com/docs/experience-platform/collection/permissions.html).

## Who should use the Web SDK?

Adobe Experience Platform Web SDK has been developed for the following customers:

* Adobe Experience Platform users
  * If you need to send data directly from a device to Adobe Experience Platform, this is the officially recommended way.
  * Adobe is aware that using the Adobe Analytics connector is faster if you already have Adobe Analytics, but it is not the long-term strategy for data collection.

* Adobe Experience Cloud solution customers
  * New Adobe Analytics, Adobe Audience Manager, and Adobe Target customers should start with the new Web SDK and not use legacy libraries.
  * Existing customers who want to get the most optimized implementation possible should use the new Web SDK.

## How do I get access to the Web SDK?

The Web SDK is currently available to the general public and can be used to send data to Adobe Experience Cloud products. The ability to send data to third-party solutions is coming in the near future. 

There is no charge for the SDK, and it is hosted by Adobe for free. If required, you can download it and host it on your own servers at no cost.

The Web SDK requires access to [datastream configurations](/help/datastreams/overview.md) and the Experience Platform [XDM schema builder](/help/xdm/tutorials/create-schema-ui.md), in order for Adobe's servers to properly handle inbound data coming from the SDK. If you would like to get access, contact your Adobe account team to start the request process.

## What use cases are currently supported by the Web SDK?

The Web SDK is quickly evolving. More use cases are being worked on. You can find the [list of use cases currently supported here.](https://github.com/orgs/adobe/projects/18/views/1?filterQuery=)

## Do current customers have to retag their sites?

It depends. Adobe Experience Platform Web SDK can be deployed in two different styles. A future migration document will provide additional details.

* **Just another tag:** If the site is already tagged for solutions and you can't retag, but you want to send data to Adobe Experience Platform Edge Network for Experience Platform use cases or the upcoming event forwarding features (see below), you can add the `alloy.js` tag to the site, where it works as "just another tag."

* **The one and only tag:** If you want to use the Web SDK for an Experience Cloud solution, you must use it for _all_ of the solutions on that page. For example, if your site is already tagged for Adobe Analytics and you want to use it for Target, you need to use it for both, as well as for any others in the future.

In other words, if you decide to use Adobe Experience Platform Web SDK for non-solution use cases, you can tag the site with `alloy.js` and move on as if it's a new solution. If you want to use it for Adobe Analytics, Target, or Audience Manager, or for application use cases, you might have to remove any of the legacy code on your page.

## Can I migrate the ECIDs when I start using Web SDK so my website visitors don't start showing up as new visitors?

Yes, Adobe Experience Platform Web SDK provides an Identity Migration feature. Follow the instructions in [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md) for more details.

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

See the [Adobe-managed certificate program](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/adobe-managed-cert) in the Core Services guide.

## Does the Adobe Experience Platform Web SDK use cookies? If so, what cookies does it use?

See [Adobe Experience Platform Web SDK cookies](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/cookies/web-sdk) in the Core Services guide.

## Which browsers does the Adobe Experience Platform Web SDK support?

The Adobe Experience Platform Web SDK is designed to work optimally in the latest versions of Google Chrome, Safari, Firefox, and Microsoft Edge Chromium. You may have trouble using certain features on older versions of browsers or deprecated browsers, such as Internet Explorer.

## Where can I get the source code to the Web SDK?

See the [Alloy](https://github.com/adobe/alloy) repository on GitHub.
