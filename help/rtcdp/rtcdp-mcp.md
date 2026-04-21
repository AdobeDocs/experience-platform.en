---
solution: Real-Time Customer Data Platform
product: real-time customer data platform
title: Work with MCP clients (Beta)
description: Learn how to connect Adobe Real-Time CDP to MCP clients using the MCP server
feature: Integrations
topic: Content Management, Artificial Intelligence
badge: label="Beta" type="Informative"
role: User, Developer
level: Beginner, Intermediate
hide: true
hidefromtoc: true
exl-id: 48dba0d2-7df9-4d76-bc87-5af49a8a40cc
---
# Work with MCP clients (Beta) {#rtcdp-mcp}

You can use the Adobe Real-Time CDP MCP integration to query audiences, destinations, and activation health using plain-language prompts — without writing API calls or navigating product screens. This page explains how the integration works, what you can do with it, and how to get started.

>[!AVAILABILITY]
>
>The Real-Time CDP MCP server is distributed as a **remote HTTP transport server** that users install and configure in supported MCP clients and app platforms (for example, Claude, ChatGPT, Claude Code, Codex, Cursor, or VS Code). Authentication is handled through a **browser-based login flow** — when your client first connects to the server, it opens your default browser so you can sign in with your Adobe credentials and authorize access.

## Beta, security, and legal notices {#mcp-notices}

**Beta documentation notice:** This documentation covers a Beta feature and does not constitute final documentation. The content described herein relates to a Beta release and is subject to change prior to general availability. Adobe makes no representations about the completeness or accuracy of this documentation.

By using the Adobe Real-Time CDP MCP Server (Beta) ("Beta"), You hereby acknowledge that the Beta is provided **"as is" without warranty of any kind**. Adobe shall have no obligation to maintain, correct, update, change, modify or otherwise support the Beta. You are advised to use caution and not to rely in any way on the correct functioning or performance of such Beta and/or accompanying materials. The Beta is considered Confidential Information of Adobe. Any "Feedback" (information regarding the Beta including but not limited to problems or defects you encounter while using the Beta, suggestions, improvements, and recommendations) provided by You to Adobe is hereby assigned to Adobe including all rights, title, and interest in and to such Feedback.

>[!WARNING]
>
>The Model Context Protocol (MCP) is an emerging open-source standard and may present security or reliability risks. Adobe MCP server integrations and related documentation are provided "as is," without warranties of any kind.
>
>Connecting MCP clients or servers to Adobe products is a customer-elected configuration. Customers are responsible for evaluating the security and suitability of any MCP integration. Adobe is not responsible for issues arising from misconfiguration, misuse of the MCP, vulnerabilities in third-party implementations, or unintended actions performed through MCP-enabled workflows.
>
>To reduce risk, Adobe encourages testing integrations in a sandbox environment prior to productive use, and carefully reviewing and validating all MCP-initiated actions and responses before confirming or relying on them.

## What is the model context protocol? {#mcp-overview}

Marketing, data, and customer-experience teams increasingly rely on chat-based applications and developer tools — such as Anthropic Claude, OpenAI ChatGPT, Cursor, and Microsoft Copilot Studio — to streamline their day-to-day work. These applications support the **Model Context Protocol (MCP)**, an open standard that lets applications expose back-end tools to large language models (LLMs) in a uniform way.

Real-Time CDP now provides an MCP server that surfaces audience, destination, and activation operations directly inside any MCP-compatible application. With the Real-Time CDP MCP integration, different personas can collaborate around the same segmentation and activation data — without writing queries against the Adobe Experience Platform REST APIs or navigating multiple UI screens. Customers can describe their intent conversationally and let the LLM invoke the appropriate MCP tools.

## Key capabilities {#mcp-capabilities}

The Real-Time CDP MCP server lets you inspect, summarize, and troubleshoot audiences and destinations directly from your AI assistant. All operations are **read-only** — the MCP server surfaces retrieve APIs as plain-language answers so you can:

* **Get instant audience visibility** — Ask about audience definitions, lifecycle state, and namespace in plain language without navigating menus or pulling reports manually.
* **Estimate audience size before activation** — Preview membership counts and confidence intervals for a PQL or SDD segment query before you commit to building an audience.
* **Audit your activation portfolio** — Review configured destinations, the dataflows feeding them, and the source/target connections behind each flow — without parsing JSON or jumping across product screens.
* **Spot activation problems early** — Surface failed or in-progress destination runs the moment you ask, so your team can act fast.
* **Collaborate around live data** — Marketers, data engineers, and stakeholders can all query the same live Real-Time CDP data through their AI assistant, making it easier to align, decide, and move together.

## Available tools {#mcp-tools}

The following tools are exposed by the Real-Time CDP MCP server:

| Tool | Description |
| --- | --- |
| **Search Existing Audiences** | List audiences with optional filters (name, entity type, lifecycle state, namespace, origin) or fetch a specific audience by ID. |
| **Preview Audience Membership** | Estimate the size of a segment query (PQL for profile audiences, SDD for relational/account audiences) including confidence interval metadata. |
| **List Destination Types** | View the catalog of destination connector types available in your sandbox. |
| **List Configured Accounts** | Browse configured destination accounts (base connections) and their authentication details. |
| **List Configured Destinations** | Browse destination dataflows, filterable by name, state, flow spec, or source/target connection. |
| **List Source Connections** | Inspect source connections that hold the dataset mapping information for a destination dataflow. |
| **List Target Connections** | Inspect target connections that hold the data format and path configuration for a destination. |
| **Inspect Activation Runs** | Review destination dataflow run history, filterable by flow ID, status (success, failed, inProgress), and completion time range. |

>[!NOTE]
>
>All tools are **read-only**. Write operations (creating, updating, or deleting audiences, destinations, or dataflows) are not supported in the current Beta release.

## Use cases {#mcp-use-cases}

The following examples show how to interact with the [!DNL Adobe Real-Time CDP] MCP server using natural language:

| Goal | Example prompt |
| --- | --- |
| **Destination catalog discovery** | "Is TikTok available as a destination in my sandbox?" / "Which destination types do I already have accounts configured for?" |
| **Destination inventory by type** | "List all my Amazon S3 destinations." / "Do I have any dataset export destinations set up?" |
| **Destination configuration audit** | "Which bucket is my `Loyalty S3 Export` destination writing to?" / "Show me the target path and file format for dataflow [ID]." |
| **Account health** | "Which of my destination accounts have expired credentials?" / "Are any Pinterest or Facebook accounts in an error state?" |
| **Activation health — last 24 hours** | "List every destination with a failed run in the last 24 hours." / "Did my dataset export destination send any data in the past 24 hours?" |
| **Activation history by destination** | "Did `Weekly Loyalty Export` export anything in the past 30 days?" / "Show me the full run history for destination {NAME}." |
| **Failure analysis** | "What's the most common failure reason across my file-based destinations this week?" / "Group recent failed runs by error type." |
| **Audience discovery & filtering** | "List every CSV-based audience in the `marketing-prod` sandbox." / "Which audiences have an external audience ID defined?" |
| **Audience sizing audit** | "Show me every audience with size 0." / "Which audiences are larger than 1,000 profiles?" |
| **Audience expiration audit** | "Which destinations have audiences whose end date has already passed?" / "List audiences scheduled to expire in the next 7 days." |
| **Audience activation footprint** | "Which destinations have more than 10 audiences activated to them?" / "Which audience is activated to the most destinations?" |
| **Cross-filter: audience × activation** | "Show me audiences with size greater than 1,000 that are activated on at least 2 destinations." / "Large audiences that are only activated to a single destination." |
| **Audience membership preview** | "Preview the membership size for audience `High-Value Loyalty Members`." / "Estimate the size of this PQL query before I save it: {EXPRESSION}." |

## Prerequisites {#mcp-prerequisites}

Before connecting the Real-Time CDP MCP server to your MCP client, ensure the following:

* You have an active Real-Time CDP license.
* You have access to a supported client that can connect to a remote MCP server or custom MCP app, such as Claude, ChatGPT, Claude Code, Codex, Cursor, or VS Code.
* You have your Organization ID and the name of the sandbox you want to query.
* You have the necessary permissions in Adobe Experience Platform to view audiences, destinations, and flow service entities.

## Connect the Real-Time CDP MCP server {#mcp-connect}

>[!NOTE]
>
>This integration is in Beta. Client menus, plan requirements, and admin controls may vary by application and version.

Before you start, make sure you have the following:

* The MCP server endpoint URL: `https://rtcdp-mcp.adobe.io/mcp`.
* Confirmation that your Adobe user has access to the target Experience Platform organization and sandbox.

The Real-Time CDP MCP server is a **remote HTTP MCP server**. In every client, setup follows the same pattern:

1. Add the server URL.
2. Save or enable the connection.
3. Complete the **browser-based Adobe login** the first time the client invokes a tool.
4. Provide `imsOrgId` and `sandboxName` with each request.

### Install in UI-based clients {#mcp-connect-ui}

#### Claude

For `claude.ai` and Claude Desktop, add the Real-Time CDP MCP server as a **custom connector** using `https://rtcdp-mcp.adobe.io/mcp`. In individual Claude plans, add it under **Customize > Connectors**. In Team and Enterprise plans, an owner may need to add it first under **Organization settings > Connectors**, after which each user connects it in their own Claude settings. Once configured, enable the connector in a conversation and complete the Adobe browser login on first use.

#### ChatGPT

In ChatGPT, add the Real-Time CDP MCP server as a **custom app/connector** using `https://rtcdp-mcp.adobe.io/mcp`. Depending on your ChatGPT plan, this may require **Developer mode** and workspace admin approval. After the app/connector is created or enabled, connect it from **Settings > Apps** or **Settings > Apps & Connectors**, then authenticate through the Adobe browser login when prompted.

#### Other UI-based clients

For clients such as Cursor, VS Code, or other desktop and web applications with remote MCP support, add the Real-Time CDP MCP server as a **remote HTTP** server and use `https://rtcdp-mcp.adobe.io/mcp`. If the client supports optional headers or bearer tokens, leave them empty unless Adobe specifically instructs otherwise; authentication is handled through the browser-based Adobe sign-in flow on first use.

### Install in technical clients {#mcp-connect-technical}

#### Claude Code

Add the server from the terminal:

```bash
claude mcp add --transport http rtcdp https://rtcdp-mcp.adobe.io/mcp
```

Then start Claude Code and run:

```text
/mcp
```

Select the `rtcdp` server and complete the Adobe login flow in your browser. If you already added the server in `claude.ai`, it can also appear automatically in Claude Code when both are using the same account.

#### Codex

Add the server from the terminal:

```bash
codex mcp add rtcdp --url https://rtcdp-mcp.adobe.io/mcp
```

Authenticate the server:

```bash
codex mcp login rtcdp
```

Verify the configuration:

```bash
codex mcp list
```

You can also add the server directly to `~/.codex/config.toml`:

```toml
[mcp_servers.rtcdp]
url = "https://rtcdp-mcp.adobe.io/mcp"
```

### Required request parameters {#mcp-connect-params}

Every tool call requires two parameters that scope the request:

* `imsOrgId` — your Organization ID, mapped to the `x-gw-ims-org-id` header on downstream Experience Platform API calls.
* `sandboxName` — the Experience Platform sandbox name, mapped to the `x-sandbox-name` header.

## Known limitations (Beta) {#mcp-limitations}

The following limitations apply to the current Beta release of the [!DNL Adobe Real-Time CDP] MCP server:

| Limitation | Description | Workaround |
| --- | --- | --- |
| **Read-only surface** | The MCP server only exposes retrieve APIs. You cannot create, update, activate, or delete audiences, destinations, or dataflows. | Use the Real-Time CDP UI or the AEP REST APIs for write operations. |
| **No engagement or delivery metrics** | The MCP server does not return downstream delivery stats, engagement, or conversion metrics from destination platforms. | Use the destination platform's own reporting, Customer Journey Analytics MCP, or Adobe Analytics MCP for engagement and conversion data. |
| **Segment query must be authored externally** | `Preview Audience Membership` requires a valid PQL or SDD expression as input; the MCP server does not compose the query for you. | Author the PQL/SDD expression in the Segment Builder UI or via the Segmentation Service API, then paste into the MCP prompt. |
| **Pagination via continuation tokens** | List tools return paginated results. Full enumeration across very large sandboxes requires chaining `continuationToken` calls. | Narrow queries using filters (name, state, connection spec, time range) rather than enumerating the full list. |
| **Activation run filtering is time-based only** | `Inspect Activation Runs` supports filtering by status and completion timestamp (epoch ms UTC), but not by error type or destination platform directly. | Filter by `flowId` first (obtained from `List Configured Destinations`) to scope runs to a specific destination. |
| **Region configuration required** | Tool calls will fail with HTTP 403 "User region is missing" if the MCP gateway is not configured for your user's region. | Contact your Adobe representative to confirm the gateway is configured for your region before first use. |

## Frequently asked questions {#mcp-faq}

+++Which MCP clients are supported?

The Real-Time CDP MCP server works with supported clients that can connect to remote MCP servers or custom MCP apps — including Claude, ChatGPT, Claude Code, Codex, Cursor, and VS Code. The setup flow depends on the client: UI-based clients typically add the server from settings, while technical clients such as Claude Code and Codex can add it from the command line or configuration files.
+++

+++How does authentication work?

Authentication is handled through a **browser-based login**. When your MCP client first invokes a tool, it opens your default browser to an Adobe sign-in page. After you authenticate and authorize the client, the session is established and subsequent tool calls reuse it. No API keys or long-lived credentials need to be stored in your client configuration.
+++

+++What Real-Time CDP objects can I access via MCP?

You can access audiences, destination types, configured destination accounts, destination dataflows, source and target connections, and activation run history. Operations are read-only (retrieve APIs); write operations are not supported in the current release.
+++

+++Do I need developer access to use the Real-Time CDP MCP server?

No. The MCP server is designed for both marketing and technical personas. Marketers can interact with it using natural language prompts in any supported MCP client, while data engineers and developers can use it in developer tools that support MCP.
+++

+++Is my data sent to the MCP client provider?

When you submit a prompt, the MCP client may send relevant context (including Real-Time CDP data returned by the MCP server) to its model for processing. Review the privacy and data-handling policies of your MCP client provider before connecting to production data.
+++

+++What permissions do I need in Real-Time CDP?

You need at minimum **View** permissions for the objects you want to query — audiences, destinations, and flow service entities. No write permissions are required because the MCP server only performs read operations. Contact your [!DNL Adobe Experience Platform] administrator if you are unsure about your current access level.
+++

+++Can I use the MCP server in sandbox environments?

Yes. Every tool call requires a `sandboxName` parameter, so the MCP server always respects your [!DNL Adobe Experience Platform] sandbox configuration. You can query any sandbox you have access to by specifying its name in your prompt.
+++

+++What's the difference between Preview Audience Membership and Search Existing Audiences?

`Search Existing Audiences` returns audiences that have already been authored and saved in your sandbox. `Preview Audience Membership` takes a raw PQL or SDD segment expression and returns a size estimate for it — useful for sizing a query *before* you save it as an audience.
+++

+++Can I query account audiences as well as profile audiences?

Yes. Both `Search Existing Audiences` and `Preview Audience Membership` support an entity type parameter. Profile audiences can be expressed in PQL or SDD; account audiences always use SDD (relational) syntax.
+++
