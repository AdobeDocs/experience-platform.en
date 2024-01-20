---
title: Automatically collected information
description: An overview of the data that the Adobe Experience Platform Web SDK collects automatically.
exl-id: 901df786-df36-4986-9c74-a32d29c11b71
---
# Automatically collected information

Adobe Experience Platform Web SDK automatically collects some information out of the box. If your organization does not want to automatically collect this data, you can use the `context` option in the [`configure` command](../fundamentals/configuring-the-sdk.md).

Keywords excluded from the `context` array are not included in data collection. If the `context` array does not exist in the `configure` command, all the data in the table below is automatically collected.

| Name | Description | `context` array keyword | XDM path | Example value |
| --- | --- | --- | --- | --- |
| Screen height | The height of the screen in pixels. | `device` | `events[].xdm.device.screenHeight` | `900` |
| Screen width | The width of the screen in pixels. | `device` | `events[].xdm.device.screenWidth` | `1440` |
| Screen orientation | The orientation of the screen. | `device` | `events[].xdm.device.screenOrientation` | `landscape` or `portrait` |
| Environment type | The type of environment through which the experience surfaced. Adobe Experience Platform Web SDK always sets this field to `browser`. | `environment` | `events[].xdm.environment.type` | `browser` |
| Viewport height | The height of the browser's content area in pixels. | `environment` | `events[].xdm.environment.browserDetails.viewportHeight` | `679` |
| Viewport width | The width of the browser's content area in pixels. | `environment` | `events[].xdm.environment.browserDetails.viewportWidth` | `642` |
| SDK name | The SDK identifier. This field uses a URI to improve uniqueness among identifiers provided by different software libraries. When the standalone library is used, the value is `https://ns.adobe.com/experience/alloy`. When the library is used as part of the tag extension, the value is `https://ns.adobe.com/experience/alloy+reactor`. | | `events[].xdm.implementationDetails.name` | `https://ns.adobe.com/experience/alloy` |
| SDK version | When the standalone library is used, the value is the library version. When the library is used as part of the tag extension, the value is a concatenation of the library version and tag extension version. | | `events[].xdm.implementationDetails.version` | `2.1.0+2.1.3` |
| Environment | The environment where the data was collected. Adobe Experience Platform Web SDK always sets this field to `browser`. | | `events[].xdm.implementationDetails.environment` | `browser` |
| Local time | Local timestamp for the end user in simplified extended ISO format [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6). | `placeContext` | `events[].xdm.placeContext.localTime` | `YYYY-08-07T15:47:17.129-07:00` |
| Local timezone offset | Number of minutes that the user is offset from GMT. | `placeContext` | `events[].xdm.placeContext.localTimezoneOffset` | `360` |
| Timestamp | The UTC timestamp for the end user in simplified extended ISO format [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6). | Always included | `events[].xdm.timestamp` | `YYYY-08-07T22:47:17.129Z` |
| Current page URL | The URL of the current page. | `web` | `events[].xdm.web.webPageDetails.URL` | `https://example.com/index.html` |
| Referrer URL | The URL of the previous page visited. | `web` | `events[].xdm.web.webReferrer.URL` | `http://example.org/linkedpage.html` |

{style="table-layout:auto"}
