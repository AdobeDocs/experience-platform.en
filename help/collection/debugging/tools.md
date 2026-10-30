---
title: Debugging tools for data collection
description: Choose a tool to inspect data collection requests and processing, including Adobe tools, tag debuggers, browser developer tools, and HTTP debugging proxies.
keywords: packet analyzer, packet monitor, packet sniffer, debugger, charles, fiddler, proxy, Omnibug, ObservePoint
feature: Data Collection
exl-id: db077293-f72c-4933-8a30-f1e1963f332e
role: Admin, Developer, Leader
TQID: 'https://experienceleague.adobe.com/debgxI3FK1fp1Q02GY1-0H40z-L4G2HSmq11Tog97-Y'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Debugging tools for data collection

Debugging tools, sometimes called packet analyzers or packet sniffers, let you inspect the data that your implementation sends to Adobe. This article helps you choose a tool. For how to use these tools to inspect requests and Edge Network processing, see [Inspect data collection requests](inspect-requests.md).

>[!NOTE]
>
>The tools listed on this page are not comprehensive. Except for Adobe-provided tools, Adobe does not support or troubleshoot these products. Consult the tool's publisher for installation, usage, supported technologies, and support information.

## Choose a debugging tool {#choose-a-tool}

The following categories can help you select a tool based on what you want to inspect.

| Tool type | Useful when |
| --- | --- |
| **[Tag debuggers](#tag-debuggers)** | You want tags, data layers, or collection requests interpreted and presented in a human-readable format. |
| **[Browser developer tools](#browser-developer-tools)** | You are debugging a web implementation and want to inspect network requests directly without installing a separate debugging application. |
| **[HTTP(S) debugging proxies](#http-debugging-proxies)** | You want to inspect HTTP traffic from browsers, mobile apps, WebViews, APIs, or other clients, or need capabilities beyond browser developer tools. |
| **[Adobe processing diagnostics](#processing-diagnostics)** | You need to see how the Edge Network or a mobile app processed events, which client-side request inspection cannot show. |

## Tag debuggers {#tag-debuggers}

Tag debuggers recognize marketing and measurement technologies and interpret their requests. These tools can make it easier to identify Experience Platform Web SDK payloads, tags, data layers, and requests sent to Adobe applications or other vendors without manually decoding network requests.

| Tool | Availability | Useful for | Considerations |
| --- | --- | --- | --- |
| **[Adobe Experience Platform Debugger](/help/debugger/home.md)** | Browser extension | Debugging Adobe Experience Platform and CX Enterprise implementations, including tags, data layers, Experience Platform Web SDK, and Adobe applications | Adobe-provided tool focused on Adobe technologies. Also provides [Edge Trace](/help/debugger/edge-trace.md) for Web SDK. |
| **[Omnibug](https://omnibug.io)** | Chromium-based browsers and Firefox | Decoding Experience Platform Web SDK, Adobe tags, and requests from Adobe applications and many other marketing vendors | Useful for implementations containing technologies from multiple vendors |
| **[ObservePoint Debugger](https://www.observepoint.com/solutions/observepoint-debugger/)** | Chrome and Edge | Inspecting and decoding analytics, marketing, and measurement tags | Browser-based debugger; ObservePoint also offers separate automated implementation-validation products |

## Browser developer tools {#browser-developer-tools}

Every modern browser includes developer tools that can inspect network requests, so you often do not need a separate tool to debug a web implementation. Browser tools show the raw request, payload, response, and timing, but do not decode Adobe-specific parameters, and they show only traffic that originates in the browser. For steps, see [Inspect web requests](inspect-requests.md#web).

## HTTP(S) debugging proxies {#http-debugging-proxies}

HTTP debugging proxies intercept HTTP and HTTPS traffic between a client and a server. They are useful when browser developer tools do not provide enough visibility or when the implementation runs outside of a traditional web browser.

HTTPS inspection generally requires configuring the client to trust a certificate supplied by the debugging proxy. Follow your organization's security policies when installing certificates or intercepting encrypted traffic.

Capture only authorized test traffic and remove sensitive data before sharing captures. Some applications restrict certificate trust or use certificate pinning, so a proxy might not be able to inspect their HTTPS traffic.

| Tool | Useful for |
| --- | --- |
| **[Charles](https://www.charlesproxy.com/)** | Inspecting browser, application, mobile device, and other HTTP(S) traffic |
| **[Fiddler Everywhere](https://www.telerik.com/fiddler/fiddler-everywhere)** | Capturing and inspecting HTTP(S) traffic across applications and devices. Distinct from the older Fiddler Classic product. |
| **[Proxyman](https://proxyman.com/)** | Inspecting and modifying HTTP(S) traffic from browsers, applications, and mobile devices |
| **[HTTP Toolkit](https://httptoolkit.com/)** | Inspecting traffic from applications, APIs, development environments, and mobile devices, with workflows oriented toward application and API debugging |
| **[mitmproxy](https://www.mitmproxy.org/)** | Scriptable HTTP(S) interception, inspection, and modification through command-line and web interfaces. Best suited for users comfortable with command-line workflows. |

## Adobe processing diagnostics {#processing-diagnostics}

These Adobe tools show processing that happens after a request leaves the client. For when to use each, see [Trace Edge Network processing](inspect-requests.md#edge-processing).

| Tool | Useful for |
| --- | --- |
| **[Edge Trace](/help/debugger/edge-trace.md)** | Seeing how the Edge Network handled requests from a Web SDK implementation, including the requests it sent to the services in your datastream |
| **[Adobe Experience Platform Assurance](/help/assurance/home.md)** | Inspecting Mobile SDK events and validation views, and reviewing Edge Trace sessions in more detail |
| **[Event forwarding monitoring](/help/tags/ui/event-forwarding/monitoring.md)** | Reviewing aggregate usage, outgoing errors, and compute time for event forwarding |
