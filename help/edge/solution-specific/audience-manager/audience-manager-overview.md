---
title: Sending Data to Adobe Audience Manager
seo-title: Sending Data to Adobe Audience Manager with Adobe Experience Platform Web SDK
description: Learn how to send Data to Adobe Audience Manager with Experience Platform Web SDK
seo-description: Learn how to send Data to Adobe Audience Manager with Experience Platform Web SDK
---

# Audience Manager on the Experience Platform Edge Network

The Adobe Experience Platform Web SDK is integrated with Adobe Audience Manager and supports sending and receiving data from Audience Manager, Cookie & URL destinations and ID syncing.

## Enabling Audience Manager

To enable Audience Manager you will need to do the following:

- Enable Audience Manager in your [edge configuration](../../fundamentals/edge-configuration.md).
- Enable or disable Cookie & URL destinations.
- Specify your ID Sync Container for external partner syncs (Optional)

## Syncing Identities

The Adobe Experience Platform Web SDK supports the ability to declare customer IDs and their authentication states via the [SyncIdentity](../../fundamentals/identity.md) command.

The syncIdentity method uses [Identity Service Namespaces](../../../identity/../identity-service/namespaces.md) to indicate the context to which an identity relates. As an Audience Manager customer, all your existing Data Sources that use ID Type: Cross-Device will automatically have a corresponding Identity Namespace. To find the corresponding Identity Namespace for your Audience Manager Data Source, log in to the Adobe Experience Platform and navigate to the Identities section.

![View of the Namespaces UI](../../../assets/edge_configuration_identity.png)

Here you can search for your Audience Manager Data Source by Name. The syncIdentity method uses the Identity Symbol in order to state the Namespace.

Any new Audience Manager Data Source that uses ID Type: Cross-Device will generate a corresponding Identity Namespace. Data Source ID Types Cookie and Device Advertising ID are not currently supported. Additionally, any Identity Namespace created in Adobe Experience Platform will generate a corresponding Audience Manager Data Source but note that the syncIdentity method only supports Namespace Identity Symbols.
