---
title: IP Allowlisting For Streaming Ingestion API
description: Learn how to secure access to the Streaming Ingestion API by allowing only specified IP addresses through allowlisting. This guide explains how to set up, enable, and manage IP-based restrictions for API security.
hide: true
hidefromtoc: true
badge: beta
---
# IP Address allowlisting for Streaming Ingestion API

>[!AVAILABILITY]
>
>Support for IP address allowlisting for Streaming Ingestion API is in beta and your organization may not have access to it yet. The functionality and documentation are subject to change.

You can now allowlist IP addresses for the Streaming Ingestion API. Use this feature to secure your ingestion endpoints by restricting access to only the IP addresses that you specify.

## How IP allowlisting works

The IP allowlisting feature works as follows:

1. **Submit IP addresses:** You provide a list of trusted IP addresses, mapped to your sandboxes.
2. **Configuration:** Adobe configures the allowlist at the organization and sandbox level for your organization.
3. **Enforcement:** Incoming requests are evaluated against your provided allowlist:
   * If the IP matches your allowlist, the request is processed normally.
   * If the IP is not on the allowlist, the request is blocked and returns an HTTP 403 or 401 error.

## Key considerations

* The IP allowlisting feature applies only to the [Streaming Ingestion API](https://developer.adobe.com/experience-platform-apis/references/streaming-ingestion/) (`dcs.adobedc.net`) and does **not** apply to `server.adobedc.net` or `edge.adobedc.net`.
* New sandboxes are open by default until allowlisting is enabled.
* Removing a sandbox from the allowlist will reopen it to the internet.
* You must maintain the complete list of sandbox-to-IP mappings on your side and always submit the full list in the IP allowlisting form. Incremental updates are not supported.

## Enable IP allowlisting

Follow the steps below to enable IP allowlisting for your organization:

1. Download and complete the [IP allowlisting form](../images/assets/ip_allowlisting_aep.xlsx.zip).
2. Open a support ticket and file the subject as **AEP DCS & Streaming Ingestion - IP Allowlisting request**. Attach the completed form to this ticket.
3. After submitting your ticket, Adobe Customer Care will forward your request to engineering.
4. Engineers enable allowlisting and confirms setup.
5. You then validate access and confirm using the support ticket.

| Organization | Sandbox name | Allowed IPs |
| --- | --- | --- |
| ACME | Prod | 203.0.113.42, 198.51.100.25, 192.0.2.10 |
| ACME | Dev | 203.0.113.43, 198.51.100.26, 192.0.2.11 |
| LUMA | Prod | 203.0.113.46, 198.51.100.29, 192.0.2.14 |

## FAQ

Read the following for answers to frequently asked questions regarding IP address allowlisting for the Streaming Ingestion API.

### Which APIs are covered?

Only the `dcs.adobedc.net` Streaming Ingestion API endpoints.

## What happens if my request comes from an unlisted IP?

It is blocked with an HTTP 403/401 error.

### Are new sandboxes protected automatically?

No. They are open until you provide IP mappings via the allowlisting form.

### Can I send only updated IPs when my allowlist changes?

No. You must always send the complete list of sandbox and IP mappings. Partial (incremental) updates are not accepted.