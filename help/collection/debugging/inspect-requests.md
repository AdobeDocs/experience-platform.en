---
title: Inspect data collection requests
description: Inspect the requests your implementation sends to Adobe, interpret Edge Network request evidence, and trace how the Edge Network processes events.
keywords: network requests, inspect, /ee/, interact, collect, configId, Edge Trace, NS_BINDING_ABORTED, sendBeacon, canceled request
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Inspect data collection requests

Inspecting requests shows what your implementation sent, whether a server responded, and, for Web SDK, how the Edge Network processed the event. This article covers the outgoing request, server receipt, and Edge processing stages of the [diagnostic workflow](overview.md#diagnostic-workflow).

To choose an inspection tool, see [Debugging tools](tools.md). To see what your implementation did before it sent a request, see [Enable debug logging](logging.md). For endpoints, request formats, and validation steps that belong to a specific Adobe application, see [Product-specific debugging](overview.md#product-specific).

## Inspect web requests {#web}

Use browser developer tools or a [tag debugger](tools.md#tag-debuggers) to capture requests from a web page:

1. Open developer tools: press **F12** or **Ctrl+Shift+I** (Windows and Linux) or **Cmd+Option+I** (macOS). In Safari, first enable developer features in Safari's **Advanced** settings.
1. Select the **Network** tab.
1. Enable **Preserve log** (Chrome and Edge) or **Persist Logs** (Firefox) so that navigation does not clear the request list.
1. Filter the request list for [`/ee/`](#edge-network-requests) (Web SDK). If your implementation sends data directly to an Adobe application, filter for that application's endpoint as described in its [debugging guidance](overview.md#product-specific).
1. Reproduce the action. Requests sent before you opened the tools are not captured.
1. Select a collection request and inspect its URL, payload, response, and timing.

Browser tools show traffic originating in the browser. They do not expose outgoing calls from your application server or from event-forwarding rules.

## Read Edge Network requests {#edge-network-requests}

For implementations that use Adobe Experience Platform Web SDK, filter network requests for:

```text
/ee/
```

Select the request and inspect its payload to view the data sent to the Edge Network. This filter matches the default Web SDK base path; if your implementation changes [`edgeBasePath`](../js/commands/configure/edgebasepath.md), filter for the configured path or collection host instead.

Web SDK request URLs use the format `https://{edgeDomain}/ee/[{locationHint}/]v1/{action}?configId={datastreamId}&requestId={requestId}`. The default `edgeDomain` is `edge.adobedc.net`; first-party implementations use their own CNAME. The following parts of the URL are useful evidence:

* **`interact` action**: The default. The Edge Network returns response content, such as identity, personalization, warnings, and errors, that you can inspect in the request's response.
* **`collect` action**: Used when Web SDK sends an event with `sendBeacon`, which [`documentUnloading`](../js/commands/sendevent/documentunloading.md) selects after identity is established. These requests do not return response content to the page.
* **`configId` parameter**: The datastream ID that the request used. If the event uses a [datastream ID override](../js/commands/sendevent/edgeconfigoverrides.md), this parameter contains the override. Compare it with the datastream that you expect.

The Edge Network can forward data to the services configured in your datastream. Inspecting the client request shows what the client attempted to send; it does not by itself confirm server receipt or downstream processing.

## Inspect mobile and server requests {#mobile-server}

For Mobile SDK implementations, add the Assurance extension to your app and [connect it to an Assurance session](/help/assurance/tutorials/using-assurance.md) to inspect SDK events and supported validation views. Use an [HTTP debugging proxy](tools.md#http-debugging-proxies) when you need HTTP-level evidence, subject to your app's certificate and network configuration. To inspect messages in native development tools, see [Mobile SDK logging](logging.md#enable-logging).

For Server SDK, direct [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/), or other server-side implementations, inspect the server's outgoing request, HTTP status, response body, and errors. Use your runtime's HTTP instrumentation or a proxy configured for that server. A browser request to your application does not show the separate request from your server to Adobe. See [Server SDK logging](logging.md#enable-logging) for SDK diagnostic output.

An SDK log or a successful HTTP response is evidence about a particular stage of collection, not proof that all configured destinations processed the event.

## Trace Edge Network processing {#edge-processing}

For Web SDK implementations, use [Edge Trace](/help/debugger/edge-trace.md) in Adobe Experience Platform Debugger to see the request that the Edge Network received, the datastream configuration that it applied, and the requests that it sent to the services in your datastream. Edge Trace also opens the same data in an Assurance session. For Mobile SDK implementations, connect the app to Assurance directly; see [Inspect mobile and server requests](#mobile-server).

Do not treat an incoming event or response handle as confirmation that every downstream service processed it. Continue with the relevant application's [debugging guidance](overview.md#product-specific).

For event forwarding, [Monitor activities](/help/tags/ui/event-forwarding/monitoring.md) provides usage, outgoing error, and compute-time reports. Its aggregate reports can help identify failing destinations, but are not a per-event delivery trace.

## Aborted requests {#aborted-requests}

When a page navigates away, the browser can cancel requests that are still in progress. Firefox labels these requests `NS_BINDING_ABORTED`; Chrome and Edge label them `(canceled)`. To keep requests visible after navigation, enable **Preserve log** (Chrome and Edge) or **Persist Logs** (Firefox).

A canceled request does not necessarily mean that data was lost. The browser might have sent the full request and stopped waiting only for the response. Requests using `navigator.sendBeacon()` or `fetch` with `keepalive` can continue sending after navigation even when developer tools display a canceled status. Preserving the log keeps the entry visible; it does not confirm delivery.

To investigate, open Debugger or a proxy before reproducing navigation and inspect the captured request and any server response. A captured server response provides evidence that the endpoint handled the request; an outgoing request alone does not. For Web SDK, an incoming request in [Edge Trace](#edge-processing) provides server-side evidence. None of these observations alone establishes availability in downstream reports.

Browsers do not expose the HTTP response from `sendBeacon` to the calling JavaScript. A debug message reporting that the SDK used `sendBeacon` therefore cannot confirm receipt.

Web SDK's [`documentUnloading`](../js/commands/sendevent/documentunloading.md) selects an unload-capable transport subject to identity and payload constraints. This option cannot send events that are still queued when the page unloads; see [When events can be lost](../js/commands/sendevent/documentunloading.md#data-loss). Libraries that send data directly to an Adobe application can provide similar options; see that application's [debugging guidance](overview.md#product-specific).
