---
title: Syncing Identities Between Audience Manager and Adobe Experience Platform Using the Platform Web SDK
description: Learn how to sync identities between Audience Manager and Adobe Experience Platform using the Platform Web SDK
seo-description: Learn how to sync identities with Adobe Audience Manager with Experience Platform Web SDK
keywords: audience manager;aam;identities;sync identities;namespace;
---

# Syncing identities between Audience Manager and Experience Platform

Adobe Experience Platform Web SDK supports the ability to declare customer IDs and their authentication states via the [sendEvent](./overview.md#syncing-identities) command.

Choose your namespaces from the [Identity Service Namespaces](../../identity/../identity-service/namespaces.md) to indicate the context to which an identity relates, by using the values in the Identity Symbol column:

![View of the Namespaces UI](../assets/identity/edge_namespaceUI_identity-symbol.png)

As an Audience Manager customer, all your existing Data Sources that use ID Type: Cross-Device automatically have a corresponding Identity Namespace. To find the corresponding Identity Namespace for your Audience Manager Data Source, log into Adobe Experience Platform and navigate to the Identities section.

Any new [!DNL Audience Manager] Data Source that uses ID Type: Cross-Device will generate a corresponding Identity Namespace. Data Source ID Types Cookie and Device Advertising ID are not currently supported. Additionally, any Identity Namespace created in Adobe Experience Platform will generate a corresponding [!DNL Audience Manager] Data Source but note that the syncIdentity method only supports Namespace Identity Symbols.
