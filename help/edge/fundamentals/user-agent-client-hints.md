---
title: User-Agent Client Hints
description: Learn how User-Agent Client Hints work in Web SDK
keywords: user-agent;client hints; string; user-agent string; low entropy; high entropy
exl-id: a909b1d1-be9d-43ba-bb4b-d28b0c609f65
---
# User-Agent Client Hints

## Overview {#overview}

Every time a web browser makes a request to a web server, the header of the request includes information about the browser and the environment on which the browser is running. All this data is aggregated into a string, called the [!DNL User-Agent] string.

Here is an example of what a [!DNL User-Agent] string looks like on a request coming from a Chrome browser running on a [!DNL Mac OS] device.

>[!NOTE]
>
>Over the years, the amount of browser and device information included in the [!DNL User-Agent] string has grown and modified multiple times. The example below shows a selection of the most common [!DNL User-Agent] information.

```shell
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36`
```

|Field|Value|
|---|---|
|Software name| Chrome |
|Software version| 105|
|Full software version|105.0.0.0|
|Layout engine name|AppleWebKit|
|Layout engine version|537.36|
|Operating system|Mac OS X|
|Operating system version|10.15.7|
|Device|Intel Mac OS X 10_15_7|

## Use cases {#use-cases}

[!DNL User-Agent] strings have long been used to provide marketing and development teams with important insights into how browsers, operating systems and devices display site content, as well as how users interact with websites.

[!DNL User-Agent] strings are also used to block spam and filter bots that crawl sites for a variety of additional purposes.

## [!DNL User-Agent] strings in Adobe Experience Cloud {#user-agent-in-adobe}

Adobe Experience Cloud solutions utilize the [!DNL User-Agent] strings in various ways.

* Adobe Analytics utilizes the [!DNL User-Agent] string to augment and derive additional information related to operating systems, browsers, and devices used to visit a website.
* Adobe Audience Manager and Adobe Target qualify end-users for segmentation and personalization campaigns, based on the information provided by the [!DNL User-Agent] string.

## Introducing User-Agent Client Hints {#ua-ch}

In recent years, site owners and marketing vendors have used [!DNL User-Agent] strings along with other information included in request headers to create digital fingerprints. These fingerprints can be used as a means of identifying users without their knowledge.

Despite the important purpose that [!DNL User-Agent] strings serve for site owners, browser developers have decided to change how [!DNL User-Agent] strings operate, to limit potential privacy issues for end-users.

The solution they developed is called [User-Agent Client Hints](https://developer.chrome.com/docs/privacy-sandbox/user-agent/). Client hints still allow websites to collect necessary browser, operating system and device information, while also providing increased protection against covert tracking methods, such as fingerprinting.

Client hints allow website owners to access much of the same information available in the [!DNL User-Agent] string, but in a more privacy-preserving way.

When modern browsers send a user to a web server, the entire [!DNL User-Agent] string is sent on every request, regardless of whether it is required. Client hints, on the other hand, enforce a model where the server must ask the browser for the additional information it wants to know about the client. Upon receiving this request, the browser can apply its own policies or user configuration to determine what data is returned. Instead of exposing the entire [!DNL User-Agent] string by default on all requests, access is now managed in an explicit and auditable way.

## Browser support {#browser-support}

[User-Agent Client Hints](https://developer.chrome.com/docs/privacy-sandbox/user-agent/) were introduced with [!DNL Google Chrome ]version 89.

Additional Chromium-based browsers support the Client Hints API, such as:

* [!DNL Microsoft Edge]
* [!DNL Opera]
* [!DNL Brave]
* [!DNL Chrome for Android]
* [!DNL Opera for Android]
* [!DNL Samsung Internet]

## Categories {#categories}

There are two categories of User-Agent Client Hints:

* [Low entropy client hints](#low-entropy)
* [High entropy client hints](#high-entropy)

### Low entropy client hints {#low-entropy}

Low entropy client hints include basic information which cannot be used to fingerprint users. Information such as browser brand, platform, and whether the request is coming from a mobile device.

Low entropy client hints are enabled by default in Web SDK, and are passed on every request.

|HTTP header|JavaScript|Included in User-Agent by default| Included in client hints by default|
|---|---|---|---|
|`Sec-CH-UA`|`brands`|Yes|Yes|
|`Sec-CH-UA-Platform`|`platform`|Yes|Yes|
|`Sec-CH-UA-Mobile`|`mobile`|Yes|Yes|

### High entropy client hints {#high-entropy}

High entropy client hints are more detailed information about the client device, such as platform version, architecture, model, bitness (64 bit or 32 bit platforms), or full operating system version. This information could potentially be used in fingerprinting.

|HTTP header|JavaScript|Included in User-Agent by default| Included in Client Hints by default|
|---|---|---|---|
|`Sec-CH-UA-Platform-Version`|`platformVersion`|Yes|No|
|`Sec-CH-UA-Arc`|`architecture`|Yes|No|
|`Sec-CH-UA-Model`|`model`|Yes|No|
|`Sec-CH-UA-Bitness`|`Bitness`|Yes|No|
|`Sec-CH-UA-Full-Version-List`|`fullVersionList`|Yes|No|

High entropy client hints are disabled by default in Web SDK. To enable them you must manually configure the Web SDK to request high entropy client hints.

## High entropy client hints impact on Experience Cloud solutions {#impact-in-experience-cloud-solutions}

Some Adobe Experience Cloud solutions rely on information included in high entropy client hints when generating reports.

If you do not enable high entropy client hints in your environment, the Adobe Analytics and Audience Manager reports and traits described below will not work.

### Adobe Analytics reports relying on high entropy client hints {#analytics}

The [Operating system](https://experienceleague.adobe.com/docs/analytics/components/dimensions/operating-systems.html) dimension includes opertating system version which is stored as a high entropy client hint. If high entropy clients hints is not enabled, operating system version may be inaccurate for hits collected from Chromium browsers.

### Audience Manager traits relying on high entropy client hints {#aam}

If your Audience Manager traits use any of the following properties, you must enable high entropy client hints. Otherwise, the traits will stop working.

* Operating system version
* Device model
* Device manufacturer
* Device vendor

## Enabling high entropy client hints {#enabling-high-entropy-client-hints}

To enable high entropy client hints on your Web SDK deployment, you must include the additional `highEntropyUserAgentHints` context option, as described in the [configuration documentation](configuring-the-sdk.md#context), alongside your existing configuration.

For example, to retrieve high entropy client hints from web properties, your configuration would look like this:

`context: ["highEntropyUserAgentHints", "web"]`

## Example {#example}

Client hints contained in the headers of the first request made by the browser to a web server will contain the browser brand, the major version of the browser, and an indicator of whether the client is a mobile device. Each piece of data will have its own header value rather than being grouped into a single [!DNL User-Agent] string, as shown below:

```shell
Sec-CH-UA: "Chromium";v="101", "Google Chrome";v="101", " Not;A Brand";v="99"

Sec-CH-UA-Mobile: ?0

Sec-CH-UA-Platform: "macOS
```

The equivalent [!DNL User-Agent] header for the same browser would look like this:

```shell
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36
```

While the information is similar, the first request to the server contains client hints. These only include a subset of what is available in the [!DNL User-Agent] string. Missing from the request is the operating system architecture, full operating system version, layout engine name, layout engine version, and the full browser version.

However, on subsequent requests, the [!DNL Client Hints API] allows web servers to ask for additional details about the device. When these values are requested, depending on browser policy or user settings, the browser response may include that information.

Below is an example of the JSON object that is returned by the [!DNL Client Hints API] when high entropy values are requested:


```json
{
   "architecture":"x86",
   "bitness":"64",
   "brands":[
      {
         "brand":" Not A;Brand",
         "version":"99"
      },
      {
         "brand":"Chromium",
         "version":"100"
      },
      {
         "brand":"Google Chrome",
         "version":"100"
      }
   ],
   "fullVersionList":[
      {
         "brand":" Not A;Brand",
         "version":"99.0.0.0"
      },
      {
         "brand":"Chromium",
         "version":"100.0.4896.127"
      },
      {
         "brand":"Google Chrome",
         "version":"100.0.4896.127"
      }
   ],
   "mobile":false,
   "model":"",
   "platformVersion":"12.2.1"
}
```
