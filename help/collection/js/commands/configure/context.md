---
title: context
description: Automatically collect device, environment, or location data.
exl-id: 911cabec-2afb-4216-b413-80533f826b0e
TQID: https://experienceleague.adobe.com/9rYD-3NrLBMxgby-DnScJGouV7mrCy-YDJfVa0dyu18
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# `context`

The `context` property is an array of strings that determines what the Web SDK can automatically collect. While this data can provide great value, omitting some of this data can be beneficial so that you can comply with your organization's privacy policy.

## Context keywords and XDM elements

If you include a given context keyword, the Web SDK automatically populates all of its associated XDM elements. If you want to omit a specific XDM element while allowing others, you can clear individual values out using [`onBeforeEventSend`](onbeforeeventsend.md). If you send multiple events on a page, the Web SDK includes these fields on every [`SendEvent`](../sendevent/overview.md) call.

### Web

The **`"web"`** keyword collects information about the current page.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Page URL | The URL of the current page. | [`xdm.web.webPageDetails.URL`](/help/xdm/data-types/webpage-details.md) | `https://example.com/index.html` |
| Referrer URL | The URL of the previous page visited. | [`xdm.web.webReferrer.URL`](/help/xdm/data-types/web-information.md) | `http://example.org/linkedpage.html` |

### Device

The **`"device"`** keyword collects information about the user's device.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Screen height | The height of the screen in pixels. | [`xdm.device.screenHeight`](/help/xdm/data-types/device.md) | `900` |
| Screen width | The width of the screen in pixels. | [`xdm.device.screenWidth`](/help/xdm/data-types/device.md) | `1440` |
| Screen orientation | The orientation of the screen. | [`xdm.device.screenOrientation`](/help/xdm/data-types/device.md) | `landscape` or `portrait` |

### Environment

The **`"environment"`** keyword collects information about the user's browser.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Environment type | The type of environment through which the experience surfaced. The Web SDK always sets this field to `browser`. | [`xdm.environment.type`](/help/xdm/data-types/environment.md) | `browser` |
| Viewport height | The height of the browser's content area in pixels. | [`xdm.environment.browserDetails.viewportHeight`](/help/xdm/data-types/browser-details.md) | `679` |
| Viewport width | The width of the browser's content area in pixels. | [`xdm.environment.browserDetails.viewportWidth`](/help/xdm/data-types/browser-details.md) | `642` |

### Place context

The **`"placeContext"`** keyword collects information about the user's location.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Local time | Local timestamp for the end user in simplified [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format, without a time zone offset. | [`xdm.placeContext.localTime`](/help/xdm/data-types/place-context.md) | `YYYY-07-04T12:08:56` |
| Local timezone offset | The number of minutes that the user's local time is offset from UTC. | [`xdm.placeContext.localTimezoneOffset`](/help/xdm/data-types/place-context.md) | `360` |
| Country code | The country code of the end user. | [`xdm.placeContext.geo.countryCode`](/help/xdm/data-types/geo.md) | `US` |
| State province | The state province code of the end user. | [`xdm.placeContext.geo.stateProvince`](/help/xdm/data-types/geo.md) | `CA` |
| Latitude | The latitude of the end user location. | [`xdm.placeContext.geo._schema.latitude`](/help/xdm/data-types/geo-coordinates.md) | `37.3307447` |
| Longitude | The longitude of the end user location. | [`xdm.placeContext.geo._schema.longitude`](/help/xdm/data-types/geo-coordinates.md) | `-121.8945965` |
| IANA time zone | The IANA time zone of the end user. Included in library versions 2.32.0 or greater. | [`xdm.placeContext.ianaTimezone`](/help/xdm/data-types/place-context.md) | `America/Denver` |

### Timestamp

The **`"timestamp"`** keyword collects information about the timestamp of the event. This context is always included and cannot be removed.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Timestamp of the event | UTC timestamp for the end user in simplified extended [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. | [`xdm.timestamp`](/help/xdm/classes/experienceevent.md) | `YYYY-08-07T22:47:17.129Z` |

### Implementation details

The **`implementationDetails`** keyword collects information about the SDK version used to collect the event.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Name | The software development kit (SDK) identifier. This field uses a URI to improve uniqueness among identifiers provided by different software libraries. | [`xdm.implementationDetails.name`](/help/xdm/data-types/implementation-details.md) | When the standalone library is used, the value is `https://ns.adobe.com/experience/alloy`. When the library is used as part of the tag extension, the value is `https://ns.adobe.com/experience/alloy+reactor`. |
| Version | The software development kit (SDK) version. | [`xdm.implementationDetails.version`](/help/xdm/data-types/implementation-details.md) | When the standalone library is used, the value is the library version. When the library is used as part of the tag extension, the value is the library version and the tag extension version joined with a `+`. For example, if the library version is `2.1.0` and the tag extension version is `2.1.3`, the value would be `2.1.0+2.1.3`. |
| Environment | The environment where the data was collected. This field is always set to `browser` when using the JavaScript library. | [`xdm.implementationDetails.environment`](/help/xdm/data-types/implementation-details.md) | `browser` |

### High entropy client hints {#high-entropy-client-hints}

The **`"highEntropyUserAgentHints"`** keyword collects detailed information about the user's device. This data is included in the HTTP header of the request sent to Adobe. After the data has arrived to the Edge network, the XDM object populates its respective XDM path. If you set the respective XDM path in your `sendEvent` call, it takes precedence over the HTTP header value.

If you use device lookups when [configuring your datastream](/help/datastreams/configure.md), data can be cleared out in favor of device lookup values. Some client hint fields and device lookup fields cannot exist in the same hit.

| Property | Description | HTTP header | XDM path | Example |
| --- | --- | --- | --- | --- |
| Operating system version | The version of the operating system. | `Sec-CH-UA-Platform-Version` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.platformVersion`](/help/xdm/data-types/browser-details.md) | `10.15.7` |
| Architecture | The underlying CPU architecture. | `Sec-CH-UA-Arch` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.architecture`](/help/xdm/data-types/browser-details.md) | `x86` |
| Device model | The name of the device used. | `Sec-CH-UA-Model` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.model`](/help/xdm/data-types/browser-details.md) | `Intel Mac OS X 10_15_7` |
| Bitness | The number of bits that the underlying CPU architecture supports. | `Sec-CH-UA-Bitness` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.bitness`](/help/xdm/data-types/browser-details.md) | `64` |
| Browser vendor | The company that created the browser. The low entropy hint `Sec-CH-UA` also collects this element. | `Sec-CH-UA-Full-Version-List` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.vendor`](/help/xdm/data-types/browser-details.md) | `Google` |
| Browser name | The browser used. The low entropy hint `Sec-CH-UA` also collects this element. | `Sec-UA-Full-Version-List` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.brand`](/help/xdm/data-types/browser-details.md) | `Chrome` |
| Browser version | The significant version of the browser. The low entropy hint `Sec-CH-UA` also collects this element. Exact browser version is not automatically collected. | `Sec-UA-Full-Version-List` | [`xdm.environment.browserDetails.`<br>`userAgentClientHints.version`](/help/xdm/data-types/browser-details.md) | `105` |

See [User agent client hints](/help/collection/use-cases/client-hints.md) for more information.

### One-time Analytics referrer {#one-time-analytics-referrer}

The **`"oneTimeAnalyticsReferrer"`** keyword sends a referrer value to Adobe Analytics only on the first non-decisioning `sendEvent` call for a page. The primary use case for this context keyword is to prevent the [Referrer](https://experienceleague.adobe.com/en/docs/analytics/components/dimensions/referrer) dimension in Adobe Analytics from being inflated by hits primarily used in Analytics and Target integrations.

If a given `sendEvent` command uses a decisioning event type (`decisioning.propositionFetch`, `decisioning.propositionDisplay`, `decisioning.propositionInteract`), then it is ignored when calculating the first `sendEvent` on a page. If the referrer value changes on the page and another `sendEvent` is triggered, the new referrer value is included in the payload. This condition allows the feature to be used with single-page applications.

When a duplicate referrer value is detected, the library sets `data.__adobe.analytics.referrer` to an empty string (`""`). 
Setting this data object field to an empty string effectively clears the value when a hit arrives to Adobe Analytics, since the data object overwrites any XDM object equivalent field. It does not impact the XDM object, allowing that data to continue to be sent to an Experience Platform dataset if you include multiple services in a datastream.

## Implementation

Set the `context` array of strings when running the `configure` command. If you omit this property when configuring the SDK, all context information except `"highEntropyUserAgentHints"` and `"oneTimeAnalyticsReferrer"` are collected by default. Set this property if you want to collect high entropy client hints, or if you want to omit other context information from data collection. Strings can be included in any order.

>[!TIP]
>
>If you want to collect all context information, including high entropy client hints, you must include every value in the `context` array string. The default `context` value omits `"highEntropyUserAgentHints"` and `"oneTimeAnalyticsReferrer"`; if you set the `context` property, any omitted values do not collect data.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  context: ["web", "device", "environment", "placeContext", "highEntropyUserAgentHints", "oneTimeAnalyticsReferrer"]
});
```

## Collect context information using the Web SDK tag extension

See [Context settings](/help/tags/extensions/client/web-sdk/configure/data-collection.md#context-settings) under data collection configuration settings in the Web SDK tag extension documentation.
