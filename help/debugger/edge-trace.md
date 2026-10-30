---
title: Edge Trace
description: Use Edge Trace in Adobe Experience Platform Debugger to see how the Edge Network processes requests from a Web SDK implementation.
keywords: debugger;experience Platform Debugger extension;edge trace;edge network;assurance;web sdk;datastream
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
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
---
# Edge Trace

Edge Trace shows how the Adobe Experience Platform Edge Network handles requests from a Web SDK implementation on the current page. Use it to confirm that the Edge Network received an event, which datastream configuration it applied, and which requests it sent to the services enabled in your datastream. Browser developer tools cannot show this server-side activity.

## Prerequisites {#prerequisites}

* The page that you are debugging uses [Web SDK](/help/collection/js/js-overview.md). For Mobile SDK implementations, [connect the app to Assurance](/help/assurance/tutorials/using-assurance.md) directly instead.
* You are signed in to Debugger with an Adobe account in the organization that owns the datastream. If Debugger displays your username instead of your organization name, sign out and sign in again.

## Start an Edge Trace {#start}

1. Open Debugger on the page that you want to debug.
1. In the left navigation, select **[!UICONTROL Logs]**, then select the **[!UICONTROL Edge]** tab.
1. Select **[!UICONTROL Connect]**. The list is empty until the page sends a request.
1. Reproduce the action that you want to debug.

## Read Edge Trace results {#results}

Edge Trace lists the requests that the Edge Network received from the page and the requests that it sent to the services enabled in your datastream. Useful rows include:

* **[!UICONTROL Datastream config after override was applied]**: The datastream configuration that the Edge Network used after applying any [datastream configuration overrides](/help/datastreams/overrides.md).
* **Service-specific rows**: Rows that show what the Edge Network sent to a particular Adobe application. Their names and contents depend on the application. See the application's guidance in [Product-specific debugging](/help/collection/debugging/overview.md#product-specific).

## Open the trace in Assurance {#assurance}

Each Edge Trace starts an [Adobe Experience Platform Assurance](/help/assurance/home.md) session in the background. Assurance provides filtering and detailed event views for the same data. To open it, select the outgoing link icon at the top of the **[!UICONTROL Edge]** tab while Edge Trace is connected.

The following Assurance events are useful for most Web SDK implementations:

* **`Alloy Request`**: The request from Web SDK as the Edge Network received it, including the XDM payload.
* **`Alloy Response Handle`**: Response content that the Edge Network returned to the page, such as identity information.

An event in Edge Trace or Assurance shows how the Edge Network handled a request. It does not by itself confirm that every downstream application processed the data. For the full diagnostic workflow, see [Debugging and troubleshooting data collection](/help/collection/debugging/overview.md).
