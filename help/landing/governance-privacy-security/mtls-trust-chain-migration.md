---
title: Updating your mTLS trust chain
description: Learn how to update your trust store to trust Adobe's new mTLS certificate authority hierarchy ahead of an upcoming certificate migration.
role: Developer, Admin
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---

# Updating your mTLS trust chain {#updating-your-mtls-trust-chain}

Adobe is updating the certificate authority (CA) hierarchy used to issue the client certificates for outbound Mutual Transport Layer Security (mTLS) connections to your endpoints. If your systems validate Adobe's mTLS client certificate, you need to add Adobe's new root and intermediate CA certificates to your trust store before Adobe begins presenting certificates issued from the new hierarchy. This guide explains what is changing, why, and how to update your trust store across common platforms.

>[!IMPORTANT]
>
>This update is a one-time change to your trust store. It is separate from, and does not replace, the automated certificate retrieval and lifecycle you already use through the [mTLS Service API](../../data-governance/mtls-api/overview.md). You do not need to request, download, or replace Adobe's client certificate as part of this migration.

## What is changing {#what-is-changing}

Adobe issues mTLS client certificates to authenticate outbound connections to endpoints you control, such as an [HTTP API destination](../../destinations/catalog/streaming/http-destination.md) receiving endpoint, an Adobe Journey Optimizer custom action, or an Event Forwarding integration. Adobe is moving these certificates from a certificate hierarchy shared between server and client authentication to a hierarchy dedicated solely to client authentication.

This means the root and intermediate certificate authority behind Adobe's mTLS client certificate is changing. The certificate itself continues to work the same way it does today, and how you configure mTLS in your Adobe integrations does not change.

## Why this is changing {#why-this-is-changing}

Industry certificate authority standards now require that certificates used for server authentication and certificates used for client authentication be issued from separate hierarchies. A certificate intended only for client authentication should not also be valid for server authentication, and vice versa. Separating the hierarchies reduces the risk that a certificate could be misused outside its intended purpose. This requirement applies across the industry to all major public certificate authorities, so it is not specific to Adobe or to any single integration.

## Who is affected {#who-is-affected}

This change affects any endpoint you manage that validates Adobe's mTLS client certificate, including receiving endpoints for HTTP API destinations, Adobe Journey Optimizer custom actions, and Event Forwarding integrations. If you already use mTLS with any Adobe Experience Platform integration, review this guide and complete the trust store update described below.

## What you need to do {#what-you-need-to-do}

Add Adobe's new root and intermediate CA certificates to the trust store or trusted CA bundle used by the endpoint that validates Adobe's mTLS client certificate. Add the new certificates alongside your existing trusted certificates rather than replacing them, and don't remove your current trusted hierarchy until you've confirmed the new one is in place and verified.

This is a trust store update only. You do not need to:

- Request a new client certificate from Adobe.
- Change how mTLS is enabled or configured in your Adobe integrations.
- Modify how you retrieve certificates through the mTLS Service API.

## The new trust chain {#new-trust-chain}

The following table compares the current certificate hierarchy to the new one.

| | Current hierarchy | New hierarchy |
| --- | --- | --- |
| Extended key usage | TLS Web Server Authentication + TLS Web Client Authentication | TLS Web Client Authentication only |
| Intermediate CA | [!DNL DigiCert Global G2 TLS RSA SHA256 2020 CA1] | [!DNL DigiCert Assured ID Client CA G2] |
| Root CA | [!DNL DigiCert Global Root G2] | [!DNL DigiCert Assured ID Root G2] |

{style="table-layout:auto"}

Both hierarchies are issued by [!DNL DigiCert], but they are separate root programs. A trust store that only trusts [!DNL DigiCert Global Root G2] will not trust a certificate issued from the new hierarchy.

### Download the new CA certificates {#download-certificates}

Add both of the following certificates to your trust store. Depending on your platform, you may only need the root certificate if your system performs automatic intermediate certificate chasing — adding both is the safest option.

| Certificate | Type | Common name |
| --- | --- | --- |
| [!DNL DigiCert Assured ID Root G2] | Root | `DigiCert Assured ID Root G2` |
| [!DNL DigiCert Assured ID Client CA G2] | Intermediate | `DigiCert Assured ID Client CA G2` |

{style="table-layout:auto"}

>[!NOTE]
>
>Download links and certificate fingerprints will be confirmed and added here before publication.

<!-- TODO: confirm final download link hosting approach (direct DigiCert links vs. Adobe-mirrored) before publication. -->

## When to complete this update {#when-to-update}

Complete this update as soon as possible rather than waiting for a specific connection to be affected. Because a trust store can hold multiple valid hierarchies at the same time, adding the new root and intermediate now has no effect on your current, working connections.

Adobe expects to begin transitioning individual connections to the new hierarchy gradually, with the full transition across all Adobe mTLS-issued certificates completing over the following months. Check the [release notes](../../release-notes/latest.md) for the current schedule.

<!-- TODO: confirm the correct release notes cross-link once the announcement is published. -->

## What happens if you don't update {#what-happens-if-you-dont-update}

Once Adobe presents a certificate issued from the new hierarchy on a connection to your endpoint, the TLS handshake will fail if your trust store doesn't yet include the new root and intermediate certificates. This surfaces as a connection or delivery failure on the affected integration — for example, a destination delivery failure or a failed custom action call — until you update your trust store.

## Update your trust store {#update-trust-store}

The steps to add a new CA certificate to your trust store depend on the platform or software that terminates the mTLS connection at your endpoint. The following sections cover common platforms and configurations.

### Linux and OpenSSL {#linux-openssl}

Covers adding the new certificates to the system-wide CA bundle used by OpenSSL and most TLS libraries on common Linux distributions.

<!-- TODO: add implementation steps. -->

### Custom CA bundle files {#custom-ca-bundle}

Covers appending the new certificates to a custom CA bundle file referenced directly by your application or service (for example, via `--cacert`, `SSL_CERT_FILE`, or `CURL_CA_BUNDLE`).

<!-- TODO: add implementation steps. -->

### Java (keytool) {#java-keytool}

Covers importing the new certificates into a Java trust store using `keytool`, for applications that use their own trust store rather than the operating system's.

<!-- TODO: add implementation steps. -->

### nginx {#nginx}

Covers adding the new certificates to the CA bundle referenced by the `ssl_client_certificate` directive in an nginx server block.

<!-- TODO: add implementation steps. -->

### Apache httpd {#apache-httpd}

Covers adding the new certificates to the CA bundle referenced by the `SSLCACertificateFile` directive in an Apache virtual host configuration.

<!-- TODO: add implementation steps. -->

### Windows {#windows}

Covers adding the new certificates to the Windows certificate store using `certutil` or the Certificates MMC snap-in.

<!-- TODO: add implementation steps. -->

### AWS {#aws}

Covers updating the trust store used for mutual TLS on Amazon API Gateway custom domains and on Application/Network Load Balancer listeners, including guidance for infrastructure-as-code (CloudFormation and Terraform) configurations.

<!-- TODO: add implementation steps. -->

### Azure {#azure}

Covers updating trusted client certificates on Azure Application Gateway SSL profiles and Azure API Management, including guidance for Terraform configurations.

<!-- TODO: add implementation steps. -->

### Google Cloud {#google-cloud}

Covers updating a Certificate Manager `TrustConfig` and associated `ServerTlsPolicy` used by Google Cloud Load Balancing for mutual TLS.

<!-- TODO: add implementation steps. -->

## Verify your trust store update {#verify}

After updating your trust store, confirm that it correctly validates a certificate issued from the new hierarchy.

<!-- TODO: add verification commands. -->

At minimum, verification should confirm that the intermediate certificate validates against the new root, and that a sample client-authentication certificate validates successfully against the combined chain.

## Troubleshooting {#troubleshooting}

Use the following symptoms to identify whether a connection failure is related to this migration.

| Symptom | Likely cause |
| --- | --- |
| TLS handshake failures on a previously working mTLS connection, with no other configuration changes made | Your trust store doesn't yet include the new root and intermediate CA certificates. |
| Certificate validation errors referencing an unknown or untrusted issuer | Your trust store is missing the intermediate certificate, the root certificate, or both. |
| Failures affecting only some mTLS-authenticated connections and not others | Individual connections transition to the new hierarchy at different times; endpoints without the updated trust store will fail only for connections already using the new hierarchy. |

{style="table-layout:auto"}

If you continue to see failures after adding both the new root and intermediate certificates, verify the certificates were added to the correct trust store or bundle used by the specific service terminating the connection, and confirm the service has reloaded or restarted to pick up the change where required.

## Frequently asked questions {#faq}

**Do I need to do anything?**

Yes. If your endpoint validates Adobe's mTLS client certificate, add Adobe's new root and intermediate CA certificates to your trust store. No other configuration changes are required.

**Is this related to the automated certificate retrieval available through the mTLS Service API?**

No. The [mTLS Service API](../../data-governance/mtls-api/overview.md) automates retrieval and lifecycle of Adobe's client certificate, and that automation is unaffected by this change. Updating your trust store to include the new CA hierarchy is a separate, one-time action you take on your own systems.

**Will my existing integration stop working?**

Not immediately. Your integration is only affected once the specific connection transitions to a certificate issued from the new hierarchy, and only if your trust store hasn't been updated by then.

**Do I need to replace my client certificate?**

No. Adobe's client certificate is issued and rotated automatically, as it is today. Your responsibility is limited to trusting the new issuing CA hierarchy on your side.

**Can I add the new CA hierarchy before Adobe starts using it?**

Yes, and Adobe recommends doing so. Trust stores can hold both the current and new hierarchies at the same time, so adding the new one early doesn't disrupt your existing connections.

**When will this affect my integration?**

The transition happens gradually rather than on a single date. See the [release notes](../../release-notes/latest.md) for the current schedule.

## Related documentation {#next-steps}

- [Data encryption in Adobe Experience Platform](./encryption.md) for a broader overview of how Experience Platform encrypts data in transit and at rest, including mTLS support.
- [mTLS Service API overview](../../data-governance/mtls-api/overview.md) for retrieving Adobe's public client certificate programmatically.
- [Public certificate endpoint](../../data-governance/mtls-api/public-certificate-endpoint.md) for details on the automated certificate lifecycle.
- [HTTP API destination](../../destinations/catalog/streaming/http-destination.md) for configuring mTLS on an HTTP API destination.
