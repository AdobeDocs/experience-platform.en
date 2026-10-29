---
title: Debugging and troubleshooting data collection
description: Choose a diagnostic workflow to investigate missing events, unexpected payloads, canceled requests, or duplicate data.
keywords: debugging, troubleshooting, data collection, validation
role: Developer
---
# Debugging and troubleshooting data collection

Debugging data collection involves checking both how your implementation behaves and what happens to the data it sends. Start with the symptom, then follow the event through each stage of collection until you find where it stops behaving as expected.

Debug logging exposes SDK commands, tag execution, warnings, and errors in the browser or application runtime. Request inspection exposes payloads, responses, and, for supported workflows, server-side processing. These approaches often complement each other: a log can explain why an event was delayed, while a network capture can show whether a request was sent.

## Follow the event through collection {#diagnostic-workflow}

Investigate the following stages in order. Evidence that one stage succeeded does not establish that later stages also succeeded.

1. **Implementation execution**: Did the SDK command or tag rule run? Check diagnostic messages and errors. If consent or identity handling delays an event, investigate that state before looking for a network request. See [Enable debug logging](logging.md).
1. **Outgoing request**: Was the request sent, and did it contain the expected data? Inspect the payload and compare it with your command inputs or data elements. See [Inspect web requests](inspect-requests.md#web) or [Inspect mobile and server requests](inspect-requests.md#mobile-server).
1. **Server receipt**: Did the collection endpoint receive the request? Inspect the response where available or use a supported server-side trace. A client log that says a request was sent is not confirmation of receipt.
1. **Edge processing and routing**: Did the event use the intended datastream and configured services? For Web SDK, the request's [`configId` parameter](inspect-requests.md#edge-network-requests) shows which datastream it used, and [Edge Trace](inspect-requests.md#edge-processing) shows how the Edge Network processed the event.
1. **Downstream processing**: Did the destination accept and process the event as expected? Use the destination's [product-specific debugging](#product-specific) guidance. A successful response from the Edge Network is not proof that data is available in every downstream report or store.

## Choose a starting point {#choose-a-starting-point}

The following table identifies useful evidence for common tasks. When both approaches apply, they answer different parts of the investigation. Available messages and tools depend on your SDK, runtime, and configured services.

| Task or symptom | Debug logging | Request inspection | Next check |
| --- | --- | --- | --- |
| An expected event does not appear | Check command or rule execution, errors, and messages about consent or identity delays. | Check whether a request was emitted and inspect its payload and response. | Start with [logging](logging.md), then [inspect requests](inspect-requests.md). For identity-related symptoms, see [Identity troubleshooting](../identity/troubleshooting.md). |
| A request contains unexpected data | Compare SDK command inputs and tag execution with the values you intended to send. | Inspect the actual outgoing payload; compare it with [Edge Trace](inspect-requests.md#edge-processing) if transformations are involved. | Check data elements, command inputs, and [datastream configuration](/help/datastreams/overview.md). |
| A request appears canceled during navigation | Check whether the SDK attempted to send the event or was still holding it. | Inspect the request and, where possible, the server response or Edge Trace. The browser's canceled label alone is inconclusive. | See [Aborted requests](inspect-requests.md#aborted-requests) and Web SDK [`documentUnloading`](../js/commands/sendevent/documentunloading.md#validate). |
| Requests appear successful, but destination data is missing | Establish which configuration and inputs the implementation used. Client logs cannot confirm downstream processing. | Use Edge Trace, Assurance, and destination-specific diagnostics. | Check the datastream, enabled services, routing, and destination processing. See [Trace Edge Network processing](inspect-requests.md#edge-processing) and [Product-specific debugging](#product-specific). |
| Events appear duplicated | Look for repeated command calls or tag-rule execution. | Compare request counts, payloads, and identifiers. Multiple client requests are not the only possible source of duplication. | Investigate retries and at-least-once delivery as well as repeated client execution. See [Event duplication handling](../use-cases/event-duplication.md). |
| A mobile or server implementation behaves unexpectedly | Review SDK output in the application or server runtime, rather than only the browser console. | Use Assurance for supported mobile workflows, or inspect the application's HTTP traffic. Browser tools cannot show your server's outgoing calls. | See [Mobile SDK and Server SDK logging](logging.md#enable-logging) and [Inspect mobile and server requests](inspect-requests.md#mobile-server). |

## Product-specific debugging {#product-specific}

The articles in this section apply to all Experience Platform data collection. Adobe applications that receive your data can use their own endpoints, request formats, validation views, and processing. After you confirm that the Edge Network received and routed an event, or when your implementation sends data directly to an application, continue with that application's debugging guidance:

<!-- Product writers: Add one bullet for your product that links to its debugging or validation guidance, in alphabetical order. Keep endpoints, parameters, and product-specific validation steps in your product's documentation rather than in these articles. -->

* **Adobe Analytics**: [Debug Analytics data collection](https://experienceleague.adobe.com/en/docs/analytics/implementation/validate/debugging)
* **Adobe Analytics for Streaming Media**: [Adobe Analytics for Streaming Media view in Assurance](/help/assurance/views/adobe-analytics-streaming-media.md)
* **Adobe Audience Manager**: [DCS error codes, messages, and examples](https://experienceleague.adobe.com/en/docs/audience-manager/user-guide/api-and-sdk-code/dcs/dcs-api-reference/dcs-error-codes)
* **Adobe Experience Platform datasets and Real-Time Customer Profile**: [Streaming ingestion troubleshooting guide](/help/ingestion/streaming-ingestion/troubleshooting.md)
* **Adobe Journey Optimizer**: [Test code-based experiences](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/code-based-experience/create-code-based-experiences/test-code-based), [Validate in-app messages using Assurance](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer/in-app-message/validate-messages), and [Decisioning validation view](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer-decisioning/optimize-configuration-view)
* **Adobe Target**: [Debug Target with Web SDK](https://experienceleague.adobe.com/en/docs/platform-learn/migrate-target-to-websdk/debugging) and [Test an at.js implementation with Debugger](/help/debugger/solutions/target.md)
* **Customer Journey Analytics**: [View, troubleshoot, and modify connection settings](https://experienceleague.adobe.com/en/docs/customer-journey-analytics-learn/tutorials/connections/connections-details-experience-in-cja)

## Continue your investigation {#next-steps}

* **[Enable debug logging](logging.md)**: Enable, inspect, and disable diagnostic output for Web SDK, tags, Server SDK, and Mobile SDK.
* **[Inspect data collection requests](inspect-requests.md)**: Capture requests, interpret Edge Network request evidence, trace Edge processing, and investigate canceled requests.
* **[Debugging tools](tools.md)**: Compare Adobe tools, tag debuggers, browser developer tools, and HTTP proxies.
* **Subject-specific guidance**: Keep detailed investigations close to their configuration or API reference, such as [consent and identity](../identity/consent.md), [document unloading](../js/commands/sendevent/documentunloading.md), and [event duplication](../use-cases/event-duplication.md).

Before sharing logs, traces, or network captures, remove credentials, visitor identifiers, and other sensitive information according to your organization's policies.
