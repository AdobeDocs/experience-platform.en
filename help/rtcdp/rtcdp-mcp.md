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

The Real-Time CDP MCP server is a **read-only** monitoring and triage surface. It exposes retrieve APIs across audiences, destinations, sources, identity, and profile resolution as plain-language answers inside your AI assistant — without writing queries or navigating product screens. No data can be created, modified, or deleted through the MCP server.

>[!IMPORTANT]
>
>All tools in the current Beta are **read-only**. Write operations — including creating, activating, updating, or deleting audiences, destinations, or dataflows — are not supported.

The Beta release includes the following 18 tools:

| Tool | Description |
| --- | --- |
| `search_audiences` | List and look up audiences by name, entity type, lifecycle state, identity namespace, or origin. |
| `preview_audience_membership` | Estimate the size of a PQL or SDD segment expression before saving it as an audience. |
| `inspect_audience_evaluation_jobs` | Retrieve segment evaluation job records to diagnose why a batch audience isn't refreshing or to confirm recent evaluation history. |
| `inspect_audience_export_jobs` | Retrieve audience export job records to confirm exports completed or to surface failure details. |
| | |
| `search_destination_connectors` | List the destination connector types available in the platform (e.g. Amazon S3, Google Ads, Salesforce CRM). |
| `search_destination_accounts` | List authenticated destination accounts — configured instances of a destination connector type. |
| `search_destination_input_connections` | Retrieve the AEP-side input of a destination flow — the audience or dataset being exported. |
| `search_destination_output_connections` | Retrieve the external endpoint of a destination flow — target path, file format, and delivery configuration. |
| `search_destination_flows` | List and inspect configured destination activation flows including their state, mappings, and schedule. |
| `inspect_flow_runs` | Retrieve execution history for source and destination flows — status, timing, record counts, and failure details per run. |
| | |
| `search_source_connectors` | List the source connector types available in the platform. |
| `search_source_accounts` | List authenticated source accounts — configured instances of a source connector type. |
| `search_source_input_connections` | Retrieve the data selection layer of a source flow — what is being pulled from an account. |
| `search_source_output_connections` | Retrieve the AEP dataset destination of a source flow — where ingested data lands. |
| `search_source_flows` | List and inspect configured source ingestion pipelines including their state, mappings, and schedule. |
| | |
| `search_identity_namespaces` | List identity namespace definitions in your sandbox — both Adobe-standard and custom namespaces. |
| `search_merge_policies` | List merge policy records that control how Real-Time Customer Profiles are assembled from profile fragments. |
| `search_organizations` | List the Adobe IMS organizations accessible to the authenticated user. |

## Use cases {#mcp-use-cases}

The Real-Time CDP MCP server is designed for **monitoring and triage**. Because the server works with IDs rather than names, a typical workflow starts with a list — ask Claude to show you what's available, pick the item you want, then ask follow-up questions using the ID it returns.

| Goal | Example prompt |
| --- | --- |
| **List your audiences** | "List my audiences in the `prod` sandbox." |
| **Inspect a specific audience** | "Show me the details and lifecycle state for audience ID `abc123`." |
| **Diagnose an evaluation failure** | "Show me the most recent evaluation jobs and flag any failures." |
| **Check an export job** | "List recent audience export jobs and show me the status of each." |
| **Estimate audience size** | "Estimate the size of this PQL expression before I save it: `homeAddress.country = 'US'`." |
| | |
| **List destination connector types** | "What destination connector types are available in my sandbox?" |
| **List configured destination accounts** | "List my destination accounts and their connection state." |
| **List destination flows** | "List my destination activation flows and show which are enabled or disabled." |
| **Inspect a destination flow** | "Show me the full configuration for destination flow ID `xyz789`." |
| **Check destination account health** | "List my destination accounts and flag any that are in an error state." |
| **Monitor recent activation runs** | "Show me flow runs from the last 24 hours and flag any failures." |
| **Investigate a failed run** | "Show me the run history for flow ID `xyz789` and summarize any errors." |
| | |
| **List source flows** | "List my source ingestion flows and show their current state." |
| **Inspect a source flow** | "Show me the configuration for source flow ID `src456` — what is it ingesting and where does it land?" |
| **Check ingestion run health** | "Show me recent run history for source flow ID `src456` and flag failures." |
| | |
| **List identity namespaces** | "What identity namespaces are configured in my sandbox?" |
| **List merge policies** | "List my merge policies and show which is the default." |
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
| **IMS Org ID required at session start** | Every tool call (except `search_organizations`) requires `imsOrgId` and `sandboxName` as explicit parameters. If these are not provided, tool calls will fail. | At the start of each session, tell your AI assistant: "Use org `<YOUR_ORG_ID>` and sandbox `<SANDBOX_NAME>` for this session." If you don't know your IMS Org ID, call `search_organizations` first — it will return the orgs your credentials can access. |

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
