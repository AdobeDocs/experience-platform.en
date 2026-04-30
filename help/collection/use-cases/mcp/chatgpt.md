---
title: Collect analytics and apply personalization in ChatGPT Apps (MCP data collection)
description: Use a hybrid MCP server + Web SDK applyResponse pattern to send events to the Adobe Experience Platform Edge Network and render personalization inside a ChatGPT App UI.
keywords: Adobe Experience Platform, Web SDK, Edge Network, MCP, ChatGPT Apps, applyResponse, interact endpoint, personalization, analytics
exl-id: 9ab611c7-7595-46c6-b990-433e59bffe48
---
# Collect analytics and apply personalization in ChatGPT Apps (MCP data collection)

This use case shows how to connect a ChatGPT App (Model Context Protocol server + optional UI components) to the Adobe Experience Platform Edge Network. This type of data collection allows you to record analytics for conversational interactions that invoke your tools and deliver personalization decisions from the Edge Network into a widget rendered by ChatGPT.

>[!NOTE]
>
>This document is maintained based on the latest available updates from both Adobe data collection teams and the latest technology updates from OpenAI. As such, Adobe anticipates that this document will evolve over time and advises checking back for updates.

This use case prefers a hybrid approach, using both a server-side implementation for collecting data and a client-side implementation for rendering personalized content. This approach is ideal, as the MCP tool invocation is the most reliable moment to collect analytics. The widget runs in a browser context and is the right place to store identity (in a cookie) and apply personalization decisions.

This use case has an accompanying fully operational code example. See [ChatGPT App + Adobe Experience Platform Edge](https://github.com/adobe/alloy-samples/tree/main/chatgpt-app) in the `alloy-samples` repository on GitHub for sample code and implementation instructions.

>[!IMPORTANT]
>
>This page outlines a reference implementation intended to illustrate an integration pattern. Review security, privacy, consent, and production requirements before adopting the approach in your application.

## Architecture

At a high level, there are five moving parts:

1. **MCP host (ChatGPT)**: ChatGPT invokes tools exposed by your MCP server and provides a stable pseudonymous user identifier in request metadata.
1. **MCP server (backend)**: Owned by your organization. It implements tools such as listing items, fetching details, or submitting requests.
1. **Adobe IMS**: Issues access tokens used by your MCP server to call Adobe data collection APIs.
1. **Adobe Experience Platform Edge Network**: Receives experience events sent by your MCP server and returns analytics acknowledgements, state updates (such as identity), and personalization decisions.
1. **Embedded web UI (frontend widget rendered by the MCP host)**: Displays structured results and applies Adobe metadata received from the MCP server backend.

## Data flow

1. **User** prompts **ChatGPT** using your MCP server.
1. **ChatGPT** interprets the prompt's intent and calls the appropriate **backend MCP tool**.
1. **Backend MCP server** uses the Data Collection APIs (`interact` endpoint) to send an experience event to the **Edge Network** for analytics collection and optional personalization.
1. **Edge Network** returns response handles, including state updates and personalization decisions, to the **backend MCP tool**.
1. **Backend MCP tool** returns a tool result containing business data in `structuredContent` and Adobe metadata in `_meta` to **ChatGPT**.
1. **ChatGPT** delivers the tool result to the **frontend widget**, which renders the business data and applies the Adobe metadata using the Web SDK JavaScript library's `applyResponse` command. This command hydrates client-side state and renders eligible personalization decisions in the UI.

The following sections elaborate on each step in detail.

## Step 1: User prompts ChatGPT using your MCP server

This step is the entry point for the workflow. The user provides natural language intent:

```text
"Use the Adobe Office Information Tool to show me details about which office that is the most pet-friendly."
```

See [Build your MCP server](https://developers.openai.com/apps-sdk/build/mcp-server/) in the OpenAI Developers documentation for more information.

## Step 2: ChatGPT interprets intent and calls an MCP tool

Based on your MCP server's metadata, ChatGPT interprets intent and invokes the appropriate tool handler on your MCP server. This tool call creates a server-side point of truth for the interaction that is independent of the UI rendering success. One of your tools might have the following metadata:

```json
{
  "name": "office_details",
  "description": "Fetch details for a single office by ID and return personalization handles for the UI.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "sessionId": { "type": "string", "description": "Server-issued session identifier." },
      "officeId": { "type": "string", "description": "Office identifier." }
    },
    "required": ["sessionId", "officeId"],
    "additionalProperties": false
  },
  "_meta": {
    "ui": {
      "visibility": ["model", "app"]
    }
  }
}
```

See [Define tools](https://developers.openai.com/apps-sdk/plan/tools/) in the OpenAI Developers documentation for more information on how to tell ChatGPT what each MCP tool does.

## Step 3: Your MCP server sends an experience event to the Edge Network

When your MCP server receives a request, it triggers a call to the Adobe Experience Platform Edge Network to record analytics data and optionally request decisioning/personalization. Since this request is server-to-server, use the authenticated [`interact`](https://developer.adobe.com/data-collection-apis/docs/endpoints/interact/) endpoint as part of the [Data Collection APIs](https://developer.adobe.com/data-collection-apis/docs/). Adobe recommends using a [custom namespace](https://experienceleague.adobe.com/en/docs/platform-learn/implement-web-sdk/initial-configuration/configure-identities) to pass along the OpenAI unique identifier. Make sure that the namespace you create in the Identities UI and the identity namespace that you define in your call match (case-sensitive).

```sh
curl -X POST "https://server.adobedc.net/ee/v2/interact?datastreamId={DATASTREAM_ID}"
  -H "Authorization: Bearer {TOKEN}"
  -H "x-gw-ims-org-id: {ORG_ID}"
  -H "x-api-key: {API_KEY}"
  -H "Content-Type: application/json"
  -d '{
    "event": {
      "xdm": {
        "eventType": "office.details.view",
        "identityMap": {
          "{IDENTITY_NAMESPACE}": [
            { "id": "{PSEUDONYMOUS_SUBJECT_ID}", "primary": true }
          ]
        },
        "timestamp": "YYYY-02-20T19:00:00.000Z"
      }
    },
    "query": {
      "personalization": {
        "decisionScopes": ["__view__"]
      }
    },
    "meta": {
      "state": {
        "entries": [
          { "key": "kndctr_orgid_cluster", "value": "{CLUSTER_HINT_IF_KNOWN}" },
          { "key": "kndctr_orgid_identity", "value": "{ECID_BLOB_IF_KNOWN}" }
        ]
      }
    }
  }'
```

## Step 4: The Edge Network returns handles

When the Edge Network receives your `interact` call, it responds with a `handle` array. This array can include identity and personalization decisions, depending on your datastream configuration. An example response might look like the following:

```json
{
  "requestId": "60a2f...2294d",
  "handle": [
    {
      "type": "locationHint:result",
      "payload": [
        { "scope": "EdgeNetwork", "hint": "or2", "ttlSeconds": 1800 }
      ]
    },
    {
      "type": "state:store",
      "payload": [
        { "key": "kndctr_..._identity", "value": "CiYzM...snTI=", "maxAge": 34128000 },
        { "key": "kndctr_..._cluster", "value": "or2", "maxAge": 1800 }
      ]
    }
  ]
}
```

Your MCP server can then extract information from the Edge Network response to persist identity information:

```ts
type EdgeHandle = { type: string; payload?: Array<{ key?: string; value?: string }> };

export function extractStateStore(handles: EdgeHandle[]) {
  const store = handles.find(h => h.type === "state:store");
  const entries = store?.payload ?? [];

  const identity = entries.find(e => e.key?.includes("_identity"))?.value;
  const cluster  = entries.find(e => e.key?.includes("_cluster"))?.value;

  return { identity, cluster };
}
```

## Step 5: MCP server returns structured tool output plus Adobe metadata to ChatGPT

Your MCP tool response includes both the structured tool output and personalization from the Edge Network.

* The `structuredContent` object contains business data that ChatGPT can safely read and narrate from.
* The `_meta` object contains Adobe response handles and the server-computed `identityMap` so that the widget can read them without exposing that data to ChatGPT. Keeping this information in `_meta.adobe` allows you to be consistent on where that data is located. Passing the same `identityMap` forward helps the widget use the same custom identity on any later UI-side events.

```json
{
  "content": "Displayed details for office seattle.",
  "structuredContent": {
    "office": {
      "id": "seattle",
      "name": "Seattle",
      "amenities": ["Pet Friendly", "Cafe", "Bike Storage"]
    }
  },
  "_meta": {
    "adobe": {
      "identityMap": {
        "{IDENTITY_NAMESPACE}": [
          { "id": "{PSEUDONYMOUS_SUBJECT_ID}", "primary": true }
        ]
      },
      "handles": [
        {
          "type": "state:store",
          "payload": [
            { "key": "kndctr_..._identity", "value": "..." }
          ]
        },
        {
          "type": "personalization:decisions",
          "payload": [
            { "id": "..." }
          ]
        }
      ]
    }
  }
}
```

See [Tool results](https://developers.openai.com/apps-sdk/reference/#tool-results) in the OpenAI Developer reference for more information.

## Step 6: Widget renders the result and applies `_adobe.handles` using `applyResponse`

The widget renders the business data from `structuredContent`, then reads the Adobe metadata from `_meta.adobe`. In ChatGPT, the same data is available to the widget through the compatibility layer:

* `window.openai.toolOutput` contains `structuredContent`
* `window.openai.toolResponseMetadata` contains `_meta`

The widget uses the Web SDK JavaScript library's [`applyResponse`](../../js/commands/applyresponse.md) command to hydrate client-side state and render personalization decisions returned by the server-side `interact` call. Make sure that you call the [`configure`](../../js/commands/configure/overview.md) command before calling `applyResponse`. Since your MCP server performed an `interact` call, you do not need to immediately call the [`sendEvent`](../../js/commands/sendevent/overview.md) command for the tool invocation's interaction.

```js
// Configure the Web SDK before any other commands.
alloy("configure", {
  datastreamId: "YOUR_DATASTREAM_ID",
  orgId: "YOUR_EXPERIENCE_CLOUD_ORG_ID"
});

// Business data exposed to ChatGPT and the widget.
const { office } = window.openai?.toolOutput ?? {};

// Adobe metadata available only to the widget.
const adobe = window.openai?.toolResponseMetadata?.adobe ?? {};
const { identityMap, handles } = adobe;

// Hydrate client-side state and render personalization decisions from the
// server-side interact response.
alloy("applyResponse", {
  renderDecisions: true,
  responseBody: { handle: handles ?? [] }
});
```

If the widget later sends additional UI-side events, you can include the same `identityMap` on those calls:

```js
alloy("sendEvent", {
  xdm: {
    eventType: "office.details.widgetView",
    identityMap
  }
});
```

This pattern keeps the server-side and UI-side identity usage aligned while still allowing the server-side `interact` call to remain the source of truth for analytics collection and decisioning.

## Validation

Once all of the above steps are configured, you can validate the following:

* **Data collection:** Verify that events are reaching the desired dataset and that each event is processed as expected.
* **Personalization:** Verify that decisions are returned by the Edge Network, and that those decisions are rendered by your widget.

## Security and privacy considerations

* Treat ChatGPT's identifiers as sensitive, even though they are pseudonymous.
* Make sure that you apply your organization's consent and data governance practices to this workflow.
* Adobe recommends using OAuth 2.1 workflows for authorization.
* Ensure that access tokens and secrets never reach the client or UI.
