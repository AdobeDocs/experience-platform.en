---
title: Adobe Analytics and Edge Analytics View in Assurance
description: This guide explains how to use Adobe Analytics and Edge Analytics view with Adobe Experience Platform Assurance.
exl-id: 
---
# Adobe Analytics and Edge Analytics View in Assurance

The Adobe Analytics + Edge view (in Beta) provides a richer view of SDK events to users debugging and validating their Adobe Analytics implementation. The view shows events sent to Adobe Analytics from the [Adobe Experience Platform Mobile SDK](https://developer.adobe.com/client-sdks/solution/adobe-analytics/) as well as the [Adobe Experience Platform Edge Network SDK](https://developer.adobe.com/client-sdks/edge/edge-network/). The view also features a details panel, which provides context on how the event was processed by the client SDK, as well as by the upstream services after it left the device.

## Getting started

To use this view, complete the following steps:

1. [Set up Adobe Experience Platform Assurance](../tutorials/implement-assurance.md).
2. [Create and connect to an Assurance session](../tutorials/using-assurance.md).
3. In the Assurance UI from the left navigation **Home** view menu, select **Analytics Events + Edge (Beta)**. If you don't see this option, select **Configure** in the bottom left of the window, add the **Analytics Events + Edge (Beta)**, and select **Save**.

## Analytics Events View

Use this view if you are using the **Adobe Analytics** mobile extension. This view allows you to easily view Analytics Events sent from your connected client, including Track Action, Track State, and Lifecycle events. By selecting one of the Analytics events in the table, details of how the event were processed can be viewed on the right panel.

![Analytics Events](./images/adobe-analytics-edge/analytics-events.png)

### Post-processed status

After the SDK makes a network request with Adobe Analytics, the status will tell you if Assurance was able to retrieve the post-processing information for the Adobe Analytics request. The Analytics Events view must remain active while the post-processing status is in operation after the request has been triggered.

Please note that in order to retrieve post-processing information, the logged-in user must have access to the corresponding report suite.

| Status | Description |
| :----- | :---------- |
| `Queued` | The network request is fetching the post-processing information. |
| `Processed` | The network request was successful, and the post-processing information is received. |
| `Delayed` | The maximum number of requests retries to fetch the post-processing information has been exceeded. |
| `Error` | An error caused the network request to fail. More details about the error are displayed in the event details view. |
| `Unauthorized` | The user does not have access to the Adobe Analytics report suite. |
| `Unavailable` | The Adobe Analytics request does not have a corresponding `AnalyticsResponse` event. |
| `No Debug Flag` | The current Adobe Analytics or Assurance SDK version might not support the Analytics Debugging feature. For more information, please read the [Troubleshooting guide](../troubleshooting.md). |
| `Expired` | The `AnalyticsTrack` or `LifecycleStart` event is older than 24 hours. |

### Event details view

For an Analytics track event, the detailed view contains the following valuable parts:

- An originating SDK Analytics request event.
- OOTB meta and context data from the request, such as report suite ID, SDK extension versions, OOTB context data, and so on.
- Post-processed information on the Analytics event that contains the mapping of revars, evars, props, and so on.

## Edge Analytics view

Use this view if you are using **Edge Network** or **Edge Bridge** mobile extensions. To enable this view, select the "Analytics Edge (Beta)" toggle on the top right to view the Analytics events sent via Edge network in your current session. This includes all events that have been fired by Lifecycle extension, Edge requests and/or Edge Bridge events based of Track Action and Track State.

![Analytics Toggle](./images/adobe-analytics-edge/analytics-view-toggle.png)

The Edge Analytics view contains information on Analytics related Edge requests and Lifecycle methods dispatched by the client. By choosing an event in the list, the right panel displays the events that were processed by the client SDK, as well as by the upstream service after they left the device, so you can easily view the chain of events that resulted from a call.

![Edge Analytics](./images/adobe-analytics-edge/edge-analytics-events.png)

## Analytics Validation

The validation view allows you to easily view the results on validation scripts related to Analytics. The validation scripts shown will be dynamically displayed based on your chosen analytics implementation. Errors displayed by validators may contain links to where they should be fixed, or display events that are in an error state.

### Analytics View Validation

![Validation View](./images/adobe-analytics-edge/analytics-validation-view.png)

### Edge Analytics View Validation

![Validation View](./images/adobe-analytics-edge/edge-analytics-validation-view.png)
