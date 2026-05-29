---
title: Private Link for [!DNL Azure] destinations
description: Learn how to use Azure Private Link to route data exports from Experience Platform to your Azure resources over the Microsoft Azure private network instead of the public internet.
---

# Private Link for [!DNL Azure] destinations

[!DNL Azure] Private Link lets you route data exports from [!DNL Adobe Experience Platform] to your [!DNL Azure] resources over private IP addresses on the [!DNL Microsoft Azure] backbone, instead of over the public internet. Your activation data never traverses public infrastructure.

[!DNL Adobe] creates and manages a Private Endpoint in an Adobe-owned virtual network (VNet) that points to your [!DNL Azure] resource. When [!DNL Azure] brokers the connection request, you approve it from your [!DNL Azure] portal. After approval, all activation traffic for that resource routes through the private endpoint.

>[!IMPORTANT]
>
>[!DNL Azure] Private Link for destinations has no self-service UI. To request setup, contact your Adobe account manager.

## Supported destinations {#supported-destinations}

[!DNL Azure] Private Link is supported for the following destinations:

* [[!DNL Azure Blob Storage]](./azure-blob.md)
* [[!DNL Azure Data Lake Storage Gen2]](./adls-gen2.md)
* [[!DNL Azure Event Hubs]](./azure-event-hubs.md)

## Prerequisites {#prerequisites}

[!DNL Azure] Private Link for destinations requires an [Adobe Healthcare Shield](https://www.adobe.com/trust/compliance/hipaa-ready.html) or Adobe Privacy & Security Shield entitlement.

## How Azure Private Link works {#how-it-works}

[!DNL Adobe Experience Platform] maintains a dedicated Private Connectivity Hub VNet. When you request Private Link setup, [!DNL Adobe] provisions a Private Endpoint in this VNet that targets your [!DNL Azure] resource. [!DNL Azure] then brokers a pending approval request to you.

After you approve the request in your [!DNL Azure] portal, all existing and new destination dataflows for that resource route through the private endpoint over the [!DNL Microsoft Azure] backbone. Your [!DNL Azure] resource does not need to accept connections from public Adobe IP addresses.

The private routing is transparent to your existing destination configuration in Experience Platform. You do not need to update hostnames, credentials, or any other destination settings after the Private Endpoint is approved.

If Private Link is deactivated, traffic reverts automatically to the public internet. Existing dataflows continue without interruption.

## Guardrails {#guardrails}

>[!IMPORTANT]
>
>Confirm exact limits with your Adobe account team before publishing or relying on them for capacity planning. These values are subject to change.

| Guardrail | Limit |
|-----------|-------|
| Data transfer | Up to 2 TB per year across all sandboxes and organizations. Exceeding this limit may incur additional charges. |
| Production sandbox endpoints | Maximum of 10 endpoints per organization |
| Development sandbox endpoints | Maximum of 1 endpoint per organization |

## Request Private Link setup {#request-setup}

Private Link for destinations has no self-service UI. Contact your Adobe account manager to request setup. Your account manager creates an internal task that routes to the Adobe technical team, who configure the connection on your behalf. Provide the following information:

* [!DNL Azure] Resource ID of your Event Hubs namespace or storage account
* Namespace or storage hostname (FQDN)
* [!DNL Azure] region (align with your Experience Platform data region for best performance)
* Authentication details: [!DNL Microsoft Entra ID] (formerly [!DNL Azure Active Directory]) or Shared Access Signature (SAS)
* Target resource name

[!DNL Adobe] engineers create the Private Endpoint and notify you when the approval request is available in your [!DNL Azure] portal.

## Approve the Private Endpoint {#approve-private-endpoint}

After [!DNL Adobe] creates the Private Endpoint, a pending approval request appears in your [!DNL Azure] portal. To approve it:

1. In your [!DNL Azure] portal, go to your Event Hubs namespace or storage account.
1. Select **[!UICONTROL Networking]**, then select **[!UICONTROL Private endpoint connections]**.
1. Locate the pending connection from [!DNL Adobe] and select **[!UICONTROL Approve]**.

Within minutes, all existing and new destination dataflows for that resource route over the private endpoint.

If you select **[!UICONTROL Reject]** instead, data continues to flow over public infrastructure.

## Best practices {#best-practices}

* You do not need to create a dedicated VNet or open your network to [!DNL Adobe]. The Private Endpoint lives entirely in Adobe's VNet.
* Align your [!DNL Azure] resource region with your Experience Platform data region for best performance.
* After the Private Endpoint is active, disable public network access to your [!DNL Azure] resource for full security benefit.
* No reconfiguration of your destination in Experience Platform is needed after approval. Routing changes transparently.

## Limitations {#limitations}

* Private Link is available for [!DNL Azure] destinations only. [!DNL AWS] and [!DNL GCP] destinations are not supported.
* Setup requires [!DNL Adobe] engineer involvement. Self-service provisioning is planned for a future release.
* Requires an Adobe Healthcare Shield or Adobe Privacy & Security Shield entitlement.

## Before deleting your Azure resource {#resource-deletion}

>[!WARNING]
>
>Do not delete an [!DNL Azure] resource that has an active Private Endpoint without first notifying [!DNL Adobe].

When you delete the resource, the Private Endpoint becomes orphaned. An orphaned endpoint has a **Disconnected** status, cannot deliver data, and continues to incur charges on Adobe's infrastructure. Contact [!DNL Adobe] before deleting any [!DNL Azure] resource that has an active Private Endpoint.
