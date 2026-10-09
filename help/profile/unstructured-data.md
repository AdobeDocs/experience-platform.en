---
title: Real-Time Customer Profile with Unstructured Data
description:
hide: true
---

# Real-Time Customer Profile with unstructured data

>[!AVAILABILITY]
>
>This feature is currently in **beta**. The functionality and documentation are subject to change. For more information, contact Adobe Customer Care.

In Adobe Experience Platform, Real-Time Customer Profile lets you consolidate your customer data into a unified view by combining data from multiple channels. With support for unstructured data, Experience Platform extends these capabilities, semantically letting you use conversational and other unstructured customer data as part of the profile building blocks.

## Understanding Profile with unstructured data {#understanding}

Real-Time Customer Profile currently combines structured data from multiple channels, including online, offline, CRM, and third party, consolidating this data into a unified view that offers an actionable and timestamped account of every customer interaction. However, this doesn't cover unstructured data ingestion, meaning data from conversations, transcripts, or other multi-modal data (such as PDFs or images) are unavailable to be used with Profile.

Semantic profiles allows Experience Platform profiles have access to unstructured data, which lets you better personalize conversations since the customer context will continue to be shared across multiple platforms, including Brand Concierge. 

## Access prerequisites {#prerequisites}

To use Profile with unstructured data, you **must** meet the following prerequisites:

- Already an existing Adobe Experience Platform user
- Do **not** have the Healthcare Shield add-on
- Have a use case in one of the three following areas:
  - Profile context for AI agents
    - Surface customer profile context to an AI agent so you can personalize interactions in real-time.
  - Unstructured data ingestion
    - Bring unstructured data, such as call transcripts, chat logs, survey responses, or emails into Profile, so it can be used to inform downstream experiences.
  - CDP-powered decisioning on AI agents
    - Use Real-Time CDP to help determine the next-best action, offer, or content for an individual customer or AI agent.

If you fulfill all of these prerequisites, contact Adobe Customer Care for more information on requesting enablement for Profile with unstructured data and Personalization within Brand Concierge.

## Setup {#setup}

Before continuing Profile with unstructured data set up, you'll need to complete the following steps:

- Have an organization with entitlements to the following products:
  - Brand Concierge
  - Access to either Real-Time CDP or Adobe Journey Optimizer
- Create a Brand Concierge configuration
- Enable [Identity Graph Linking Rules](/help/identity-service/identity-graph-linking-rules/overview.md)
- Create a profile-enabled dataset
  - Ingest sample profiles into this dataset

Once you've completed the prerequisite steps, you can configure and validate the profile context. You can either do this through CX Coworker or using the API.

>[!BEGINTABS]

>[!TAB CX Coworker]

Within CX Coworker, select **Customizations** followed by **Integrations**.

IMAGE

The **Integrations** page appears. You'll need to add the `rtcdp-mcp` integration to Coworker. Select **Add server** to add an integration.

IMAGE

The **Add integration** popover appears. Add the following details to the popover, then select **Add**.

| Field | Description |
| ----- | ----------- |
| Server name | The name of the server. Set this value to `rtcdp-mcp`. |
| Source URL | The source URL for the MCP. Set this value to `https://cx-enterprise.adobe.io/mcp/server/rtcdp`. |
| Connection type | The method for the MCP to connect to Coworker. Select **HTTP**. |
| Tool timeout | How long it takes for the tool to timeout. Keep this value at 60 seconds. |
| Authentication | How the MCP authenticates. Since this is configured for everyone, select `passthrough`. |

>[!TAB API calls]

>[!ENDTABS]

## Sample flow {#sample-flow}

## Use cases {#use-cases}

## Frequently asked questions {#faq}