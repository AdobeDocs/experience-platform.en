---
title: Automatically Collected Information in the Adobe Experience Platform Web SDK
description: An overview of each piece of information that the Adobe Experience Platform SDK collects automatically.
keywords: collect information;context;configure;device;screenHeight;screen Height;screenOrientation;screen Orientation;screenWidth;screen Width;environment;viewportHeight;viewport Height;viewportWidth;viewport Width;crowserDetails;browser details;implementationDetails;implementation Details;name;version;placeContext;localTime;local Time;localTimezoneOffset;local Timezone Offset;timestamp;web;url;webPageDetails;web Page Details;webReferrer;web Referrer;landscape;portrait;
exl-id: 901df786-df36-4986-9c74-a32d29c11b71
---
# Automatically collected information

The Adobe Experience Platform Web SDK collects a number of pieces of information automatically without any special configuration. However, this information can be disabled if needed using the `context` option in the `configure` command. [See Configuring the SDK](../fundamentals/configuring-the-sdk.md). Below is a list of those pieces of information. The name in parentheses indicates the string to use when configuring the context.

## Device (`device`)

Information about the device. This does not include data that can be looked up server-side from the user agent string.

### Screen height

| **Path in Payload:**               | **Example:** |
| ---------------------------------- | ------------ |
| `events[].xdm.device.screenHeight` | `900`        |

The height of the screen (in pixels).

### Screen orientation

| **Path in Payload:**                    | **Possible Values:**      |
| --------------------------------------- | ------------------------- |
| `events[].xdm.device.screenOrientation` | `landscape` or `portrait` |

The orientation of the screen.

### Screen width

| **Path in Payload:**              | **Example:** |
| --------------------------------- | ------------ |
| `events[].xdm.device.screenWidth` | `1440`       |

The width of the screen (in pixels).

## Environment (`environment`)

Details about the browser environment.

### Environment type

Browser

| **Path in Payload:**            | **Example:** |
| ------------------------------- | ------------ |
| `events[].xdm.environment.type` | `browser`    |

The type of environment through which the experience surfaced. Adobe Experience Platform Web SDK always sets this to `browser`.

### Viewport height

| **Path in Payload:**                                     | **Example:** |
| -------------------------------------------------------- | ------------ |
| `events[].xdm.environment.browserDetails.viewportHeight` | `679`        |

The height of the browser's content area (in pixels).

### Viewport width

| **Path in Payload:**                                    | **Example:** |
| ------------------------------------------------------- | ------------ |
| `events[].xdm.environment.browserDetails.viewportWidth` | `642`        |

The width of the browser's content area (in pixels).

## Implementation details

Information about the SDK used to collect the event.

### Name

| **Path in Payload:**                      | **Example:**                            |
| ----------------------------------------- | --------------------------------------- |
| `events[].xdm.implementationDetails.name` | `https://ns.adobe.com/experience/alloy` |

The software development kit (SDK) identifier.  This field uses a URI to improve uniqueness among identifiers provided by different software libraries. When the standalone library is used, the value is `https://ns.adobe.com/experience/alloy`. When the library is used as part of the tag extension, the value is `https://ns.adobe.com/experience/alloy+reactor`.

### Version

| **Path in Payload:**                         | **Example:** |
| -------------------------------------------- | ------------ |
| `events[].xdm.implementationDetails.version` | `0.11.0`     |

When the standalone library is used, the value is simply the library version. When the library is used as part of the tag extension, this is the library version and the tag extension version joined with a "+". For example, if the library version were 2.1.0, and the tag extension version were 2.1.3, the value would be `2.1.0+2.1.3`.

### Environment {#environment}

| **Path in Payload:**                             | **Example:** |
| ------------------------------------------------ | ------------ |
| `events[].xdm.implementationDetails.environment` | `browser`    |

The environment where the data was collected. This is always set to `browser`.

## Place context (`placeContext`) {#place-context}

Information about the location of the end user.

### Local time

| **Path in Payload:**                  | **Example:**                    |
| ------------------------------------- | ------------------------------- |
| `events[].xdm.placeContext.localTime` | `2019-08-07T15:47:17.129-07:00` |

Local timestamp for the end user in simplified extended ISO format [ISO 8601](https://tools.ietf.org/html/rfc3339#section-5.6).

### Local timezone offset

| **Path in Payload:**                            | **Example:** |
| ----------------------------------------------- | ------------ |
| `events[].xdm.placeContext.localTimezoneOffset` | `360`        |

Number of minutes the user is offset from GMT.

## Timestamp

| **Path in Payload:**     | **Example:**               |
| ------------------------ | -------------------------- |
| `events[].xdm.timestamp` | `2019-08-07T22:47:17.129Z` |

The timestamp of the event.  This part of context cannot be removed.

UTC timestamp for the end user in simplified extended ISO format [ISO 8601](https://tools.ietf.org/html/rfc3339#section-5.6).

## Web details (`web`)

Details about the page the user is on.

### Current page URL

| **Path in Payload:**                  | **Example:**                         |
| ------------------------------------- | ------------------------------------ |
| `events[].xdm.web.webPageDetails.URL` | `https://somesite.com/somepage.html` |

The URL of the current page.

### Referrer URL

| **Path in Payload:**               | **Example:**                              |
| ---------------------------------- | ----------------------------------------- |
| `events[].xdm.web.webReferrer.URL` | `http://somereferrer.com/linkedpage.html` |

The URL of the previous page visited.
