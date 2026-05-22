---
solution: Real-Time Customer Data Platform
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
>The Real-Time CDP MCP server is distributed as a **remote HTTP transport server** that users install and configure in supported MCP clients and app platforms (for example, Claude, ChatGPT, Claude Code, Codex, Cursor, or VS Code). Authentication is handled through a **browser-based login flow** — when your client first connects to the server, it opens your default browser so you can sign in with your Adobe credentials and authorize access. Please contact your Adobe representative to access this Beta program.

## Beta, security, and legal notices {#mcp-notices}

**Beta documentation notice:** This documentation covers an Beta feature and does not constitute final documentation. The content described herein relates to an Beta release and is subject to change prior to general availability. Adobe makes no representations about the completeness or accuracy of this documentation.

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

The Real-Time CDP MCP server is a **read-only** monitoring and triage surface. It exposes retrieve APIs across audiences, destinations, sources, identity, and profile resolution as plain-language answers inside your AI assistant — without writing queries or navigating product screens. No data can be created, modified, or deleted through the MCP server.

>[!IMPORTANT]
>
>All tools in the current Beta are **read-only**. Write operations — including creating, activating, updating, or deleting audiences, destinations, or dataflows — are not supported.

The Beta release includes the following 18 tools, grouped by domain:

### Audiences

| Tool | Description |
| --- | --- |
| `search_audiences` | Look up audiences by ID, name, entity type, lifecycle state, identity namespace, or origin. Supports single-ID lookup and paginated filtered catalog browsing. |
| `preview_audience_membership` | Submit a PQL or SDD segment expression and get a size estimate and confidence interval before saving it as an audience. |
| `inspect_audience_evaluation_jobs` | Retrieve segment job records to diagnose why a batch audience isn't refreshing, confirm recent evaluation, or check job status and failure reasons. |
| `inspect_audience_export_jobs` | Retrieve audience export job records to confirm exports are completing successfully or to surface failure details. |

### Destinations

| Tool | Description |
| --- | --- |
| `search_destination_connectors` | Browse the catalog of available destination connector types — the classes you can activate audiences to (e.g. Amazon S3, Google Ads, Salesforce CRM). |
| `search_destination_accounts` | Inspect authenticated destination accounts — base connections holding credentials and connection state for a configured destination connector. |
| `search_destination_input_connections` | Retrieve the AEP-side input of a destination flow — the audience or dataset being exported. |
| `search_destination_output_connections` | Retrieve the external endpoint of a destination flow — the target path, file format, and connection configuration where audience data is delivered. |
| `search_destination_flows` | Inspect configured destination activation flows — the full orchestration layer tying together an account, source, target, mappings, schedule, and state. |
| `inspect_flow_runs` | Retrieve execution history for destination activation flows — each run record includes status, timing, record counts, and failure details. |

### Sources

| Tool | Description |
| --- | --- |
| `search_source_connectors` | Browse the catalog of available source connector types — the classes you can authenticate against and ingest data from. |
| `search_source_accounts` | Inspect authenticated source accounts — base connections holding credentials for a configured source connector. |
| `search_source_input_connections` | Retrieve the data selection layer of a source flow — what data is being pulled from an account (table, file path, or schema). |
| `search_source_output_connections` | Retrieve the AEP dataset destination of a source flow — where ingested data lands inside Adobe Experience Platform. |
| `search_source_flows` | Inspect configured source ingestion pipelines — the orchestration layer tying together an account, ingest connection, target dataset, mappings, and schedule. |

### Identity

| Tool | Description |
| --- | --- |
| `search_identity_namespaces` | Return identity namespace definitions configured in your sandbox — both Adobe-provided standard namespaces (Email, Phone, ECID) and custom namespaces your organization has created. |

### Profile

| Tool | Description |
| --- | --- |
| `search_merge_policies` | Return merge policy records that control how Real-Time Customer Profiles are assembled from profile fragments across datasets — including which dataset takes precedence and how identity stitching is applied. |

### Organizations

| Tool | Description |
| --- | --- |
| `search_organizations` | Return the list of Adobe IMS organizations accessible to the authenticated user. Use this at the start of a session to identify your IMS Org ID if you don't know it. |

## Use cases {#mcp-use-cases}

The Real-Time CDP MCP server is designed for **monitoring and triage** — ask your AI assistant in plain language and get structured answers grounded in your live tenant data. The following use cases are supported in the current Beta.

### Audiences

| Goal | Example prompt |
| --- | --- |
| **Discover and filter audiences** | "Show me all streaming audiences in the `prod` sandbox that are currently active." |
| **Look up a specific audience** | "What is the definition and current lifecycle state of the audience named `High-Value Loyalty Members`?" |
| **Diagnose evaluation failures** | "Why isn't my batch audience refreshing? Show me the most recent evaluation jobs for audience `Weekly Churn Risk`." |
| **Check export job status** | "Did the export job for my `Q2 Reactivation` audience complete successfully? If not, what failed?" |
| **Audit audience size** | "Which audiences in my sandbox have zero members? Which are larger than 500,000 profiles?" |
| **Estimate audience size before saving** | "Estimate the size of this PQL query before I create an audience from it: `homeAddress.country = 'US' and loyalty.tier = 'gold'`." |

### Destinations

| Goal | Example prompt |
| --- | --- |
| **Discover available destination types** | "What destination connectors are available in my sandbox? Is TikTok available?" |
| **Inventory configured destinations** | "List all my Amazon S3 destinations. Do I have any dataset export destinations configured?" |
| **Trace a full activation chain** | "Walk me through the full activation chain for my `Weekly Loyalty Export` flow — from the source audience to the external endpoint." |
| **Audit destination configuration** | "Which S3 bucket and file path is my `Loyalty Export` destination writing to?" |
| **Check destination account health** | "Are any of my destination accounts in an error state or showing expired credentials?" |
| **Monitor recent activation runs** | "Which destinations had failed runs in the last 24 hours?" |
| **Investigate an activation failure** | "Show me the last 10 run records for my `Facebook Retargeting` flow and explain any failures." |
| **Audit audience activation footprint** | "Which of my audiences are activated to more than 5 destinations? Which destination has the most audiences activated to it?" |

### Sources

| Goal | Example prompt |
| --- | --- |
| **Monitor ingestion pipeline health** | "Show me the status of all my source flows. Are any failing or disabled?" |
| **Trace where ingested data lands** | "Which AEP dataset does my `Salesforce CRM` source flow write to?" |
| **Audit what a source is pulling** | "What tables or file paths is my `Snowflake` source account ingesting?" |
| **Investigate an ingestion failure** | "Show me recent failed runs for my `Adobe Analytics` source flow and summarize the errors." |

### Identity

| Goal | Example prompt |
| --- | --- |
| **Look up identity namespaces** | "What identity namespaces are configured in my sandbox? Do I have a custom namespace for loyalty IDs?" |

### Merge policies

| Goal | Example prompt |
| --- | --- |
| **Inspect profile assembly rules** | "What merge policies are configured in my sandbox? Which one is the default, and what dataset-precedence order does it use?" |

### Organizations

| Goal | Example prompt |
| --- | --- |
| **Find your IMS Org ID** | "List the Adobe IMS organizations I have access to." |

## Access and enablement {#mcp-access}

The Real-Time CDP MCP server is in Beta and is not open for self-service enrollment. Access is by invitation only and requires your Adobe IMS Organization to be explicitly allowlisted before you can connect.

To request access:

1. Contact your Adobe account representative (CSM, TAM, or AE) and express your interest in the Real-Time CDP MCP Beta program.
2. Your Adobe representative will coordinate with the product team to evaluate eligibility and enable your IMS Org ID.
3. Once enabled, your Adobe representative will confirm access and provide any additional onboarding materials.

>[!NOTE]
>
>Only IMS Organizations that have been explicitly enabled can connect to the Real-Time CDP MCP server. Attempting to connect before enablement will result in an authentication error.

## Prerequisites {#mcp-prerequisites}

Before connecting the Real-Time CDP MCP server to your MCP client, ensure the following:

* You have an active Real-Time CDP license.
* Your Adobe IMS Organization has been enabled for the Beta program by your Adobe representative (see [Access and enablement](#mcp-access)).
* You have access to a supported MCP client such as Claude, ChatGPT, Claude Code, Codex, Cursor, or VS Code.
* You have your IMS Organization ID and the name of the sandbox you want to query.
* You have the necessary permissions in Adobe Experience Platform to view audiences, destinations, and flow service entities.

## Connect the Real-Time CDP MCP server {#mcp-connect}

The Real-Time CDP MCP server endpoint is:

```
https://rtcdp-mcp.adobe.io/mcp
```

The server uses a **remote HTTP (Streamable HTTP) transport** with a **browser-based Adobe sign-in flow**. In every client, the setup pattern is the same:

1. Add the server URL: `https://rtcdp-mcp.adobe.io/mcp`
2. Save or enable the connection.
3. Complete the **browser-based Adobe login** the first time the client invokes a tool.
4. Provide `imsOrgId` and `sandboxName` at the start of each session.

### General JSON configuration {#mcp-connect-json}

For clients that accept a JSON-based MCP server configuration — such as Claude Desktop (`claude_desktop_config.json`), VS Code, or any client that reads a `mcp.json` file — use one of the following formats depending on whether your client supports native remote HTTP or requires a local bridge:

**Via `mcp-remote` bridge (Claude Desktop and other clients that require a local bridge)**

```json
{
  "mcpServers": {
    "rtcdp": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://rtcdp-mcp.adobe.io/mcp"
      ]
    }
  }
}
```

**Native remote HTTP (clients that support it directly)**

```json
{
  "mcpServers": {
    "rtcdp": {
      "url": "https://rtcdp-mcp.adobe.io/mcp",
      "transport": "http"
    }
  }
}
```

>[!NOTE]
>
>No API keys, bearer tokens, or additional headers are required in the configuration. Authentication is handled entirely through the browser-based Adobe sign-in flow on first use.

### Install in UI-based clients {#mcp-connect-ui}

#### Claude

For `claude.ai` and Claude Desktop, add the Real-Time CDP MCP server as a **custom connector** using the server URL `https://rtcdp-mcp.adobe.io/mcp`.

- **Individual plans** — In Claude, navigate to **Customize → Connectors**, click **Add connector**, and enter the server URL.
- **Team and Enterprise plans** — A workspace **Owner** or **Primary Owner** adds the connector under **Organization settings → Connectors**. Once added, each user enables it in their own Claude settings.

After the connector is added, enable it in a conversation and complete the Adobe browser sign-in on first use. Claude discovers Adobe IMS as the authorization server automatically — no Client ID or Client Secret is required.

#### ChatGPT

In ChatGPT, add the Real-Time CDP MCP server as a **custom connector**:

1. Navigate to **Settings → Connectors** (or **Settings → Apps & Connectors**, depending on your plan).
2. Click **Add connector** and enter `https://rtcdp-mcp.adobe.io/mcp` as the server URL.
3. Save the connector. Depending on your ChatGPT plan, this step may require **Developer mode** or workspace admin approval.
4. Once the connector is enabled, authenticate through the Adobe browser sign-in when prompted on first use.

#### Cursor

In Cursor, add the Real-Time CDP MCP server as a remote MCP server:

1. Open **Settings → MCP**.
2. Click **Add new server** and enter `https://rtcdp-mcp.adobe.io/mcp` as the server URL.
3. Select **connect** to trigger the browser-based Adobe sign-in and authenticate.

Once connected, Real-Time CDP tools are available in Cursor's Composer and Agent modes.

#### Other UI-based clients

For clients such as VS Code or other desktop and web applications with remote MCP support, add the Real-Time CDP MCP server as a **remote HTTP** server using `https://rtcdp-mcp.adobe.io/mcp`. If the client supports optional headers or bearer tokens, leave them empty — authentication is handled through the browser-based Adobe sign-in flow on first use.

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

Select the `rtcdp` server and complete the Adobe login flow in your browser. If you already added the server in `claude.ai`, it may appear automatically in Claude Code when both are signed in to the same account.

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

Every tool call requires two parameters that scope the request to your Adobe Experience Platform tenant:

* `imsOrgId` — your Organization ID, mapped to the `x-gw-ims-org-id` header on downstream Experience Platform API calls.
* `sandboxName` — the Experience Platform sandbox name, mapped to the `x-sandbox-name` header.

Provide these at the start of each session. For example:

> "Use org `1234ABCD@AdobeOrg` and sandbox `prod` for this session."

If you don't know your IMS Org ID, ask your AI assistant to call `search_organizations` — it will return every org your Adobe credentials can access.

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

The Real-Time CDP MCP server works with any client that supports remote MCP servers or custom connectors — including Claude, ChatGPT, Claude Code, Codex, Cursor, and VS Code. The setup flow depends on the client: UI-based clients typically add the server from a settings or connectors panel, while technical clients such as Claude Code and Codex can add it from the command line or configuration files.
+++

+++How do I get access?

Access is by invitation only during the Beta. Contact your Adobe account representative (CSM, TAM, or AE) to request enrollment. Your Adobe representative will coordinate with the product team to enable your IMS Organization. See [Access and enablement](#mcp-access) for details.
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
