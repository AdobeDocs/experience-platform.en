---
title: context
description: Automatically collect device, environment, or location data.
exl-id: 911cabec-2afb-4216-b413-80533f826b0e
---
# `context`

The `context` property is an array of strings that determines what the Web SDK can automatically collect. While this data can provide great value, omitting some of this data can be beneficial so that you can comply with your organization's privacy policy.

## Context keywords and XDM elements

If you include a given context keyword, the Web SDK automatically populates all of its associated XDM elements. If you want to omit a specific XDM element while allowing others, you can clear values out using [`onBeforeEventSend`](onbeforeeventsend.md). If you send multiple events on a page, the Web SDK includes these fields on every `SendEvent` call.

### Web

The `"web"` keyword collects information about the current page.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Page URL | The URL of the current page. | `xdm.web.webPageDetails.URL` | `https://example.com/index.html` |
| Referrer URL | The URL of the previous page visited. | `xdm.web.webReferrer.URL` | `http://example.org/linkedpage.html` |

{style="table-layout:auto"}

### Device

The `"device"` keyword collects information about the user's device.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Screen height | The height of the screen in pixels. | `xdm.device.screenHeight` | `900` |
| Screen width | The width of the screen in pixels. | `xdm.device.screenWidth` | `1440` |
| Screen orientation | The orientation of the screen. | `xdm.device.screenOrientation` | `landscape` or `portrait` |

{style="table-layout:auto"}

### Environment

The `"environment"` keyword collects information about the user's browser.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Environment type | The type of environment through which the experience surfaced. The Web SDK always sets this field to `browser`. | `xdm.environment.type` | `browser` |
| Viewport height | The height of the browser's content area in pixels. | `xdm.environment.browserDetails.viewportHeight` | `679` |
| Viewport width | The width of the browser's content area in pixels. | `xdm.environment.browserDetails.viewportWidth` | `642` |

{style="table-layout:auto"}

### Place context

The `"placeContext"` keyword collects information about the user's location.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Local time | Local timestamp for the end user in simplified extended [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. | `xdm.placeContext.localTime` | `YYYY-08-07T15:47:17.129-07:00` |
| Local timezone offset | The number of minutes that the user is offset from GMT. | `xdm.placeContext.localTimezoneOffset` | `360` |
| Country code | The country code of the end user. |`xdm.placeContext.geo.countryCode`| `US` |
| State province | The state province code of the end user. |`xdm.placeContext.geo.stateProvince`| `CA` |
| Latitude | The latitude of the end user location. |`xdm.placeContext.geo._schema.latitude`| `37.3307447` |
| Longitude | The longitude of the end user location. |`xdm.placeContext.geo._schema.longitude`| `-121.8945965` |

{style="table-layout:auto"}


### Timestamp

The `timestamp` keyword collects information about the timestamp of the event. This part of context cannot be removed.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Timestamp of the event | UTC timestamp for the end user in simplified extended [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. | `xdm.timestamp` | `2019-08-07T22:47:17.129Z` |

{style="table-layout:auto"}

### Implementation details

The `implementationDetails` keyword collects information about the SDK version used to collect the event.

| Dimension | Description | XDM path | Example value |
| --- | --- | --- | --- |
| Name | The software development kit (SDK) identifier. This field uses a URI to improve uniqueness among identifiers provided by different software libraries. | `xdm.implementationDetails.name` | When the standalone library is used, the value is `https://ns.adobe.com/experience/alloy`. When the library is used as part of the tag extension, the value is `https://ns.adobe.com/experience/alloy+reactor`. |
| Version | The software development kit (SDK) version. | `xdm.implementationDetails.version` | When the standalone library is used, the value is the library version. When the library is used as part of the tag extension, the value is the library version and the tag extension version joined with a `+`. For example, if the library version is `2.1.0` and the tag extension version is `2.1.3`, the value would be `2.1.0+2.1.3`. |
| Environment | The environment where the data was collected. This is always set to `browser`. | `xdm.implementationDetails.environment` | `browser` |


### High entropy client hints

The `"highEntropyUserAgentHints"` keyword collects detailed information about the user's device. This data is included in the HTTP header of the request sent to Adobe. After the data has arrived within the Edge network, the XDM object populates its respective XDM path. If you set the respective XDM path in your `sendEvent` call, it takes precedence over the HTTP header value.

If you use device lookups when [configuring your datastream](/help/datastreams/configure.md), data can be cleared out in favor of device lookup values. Some client hint fields and device lookup fields cannot exist in the same hit.

| Dimension | Description | HTTP header | XDM path | Example value |
| --- | --- | --- | --- | --- |
| Operating system version | The version of the operating system. | `Sec-CH-UA-Platform-Version` | `xdm.environment.browserDetails.`<br>`userAgentClientHints.platformVersion` | |
| Architecture | The underlying CPU architecture. | `Sec-CH-UA-Arch` | `xdm.environment.browserDetails.`<br>`userAgentClientHints.architecture` | |
| Device model | The name of the device used. | `Sec-CH-UA-Model` | `xdm.environment.browserDetails.`<br>`userAgentClientHints.model` | |
| Bitness | The number of bits that the underlying CPU architecture supports. | `Sec-CH-UA-Bitness` | `xdm.environment.browserDetails.`<br>`userAgentClientHints.bitness` | |
| Browser vendor | The company that created the browser. The low entropy hint `Sec-CH-UA` also collects this element. | `Sec-CH-UA-Full-Version-List` | | |
| Browser name | The browser used. The low entropy hint `Sec-CH-UA` also collects this element. | `Sec-UA-Full-Version-List` | `xdm.environment.browserDetails.`<br>`userAgentClientHints.brand` | |
| Browser version | The significant version of the browser. The low entropy hint `Sec-CH-UA` also collects this element. Exact browser version is not automatically collected. | `Sec-UA-Full-Version-List` | `xdm.environment.browserDetails.`<br>`userAgentClientHints.version` | |

{style="table-layout:auto"}

## Collect context information using the Web SDK tag extension

The context information setting is a combination of radio buttons and check boxes when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md). Each checkbox maps to a context keyword.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Data Collection] section, then select either **[!UICONTROL All default context information]** or **[!UICONTROL Specific context information]**.
1. If you select **[!UICONTROL Specific context information]**, enable the check box next to each desired context information element.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Collect context information using the Web SDK JavaScript library

Set the `context` array of strings when running the `configure` command. If you omit this property when configuring the SDK, all context information except `"highEntropyUserAgentHints"` is collected by default. Set this property if you want to collect high entropy client hints, or if you want to omit other context information from data collection. Strings can be included in any order.

>[!NOTE]
>
>If you want to collect all context information, including high entropy client hints, you must include every value in the `context` array string. The default `context` value omits `highEntropyUserAgentHints`, and if you set the `context` property, any omitted values do not collect data.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "context": ["web", "device", "environment", "placeContext", "highEntropyUserAgentHints"]
});
```
