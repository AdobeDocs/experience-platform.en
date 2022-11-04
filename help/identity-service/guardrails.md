---
keywords: Experience Platform;identity;identity service;troubleshooting;guardrails;guidelines;limit;
title: Guardrails for Identity Service
description: This document provides information on use and rate limits for Identity Service data to help you optimize your use of the identity graph.
exl-id: bd86d8bf-53fd-4d76-ad01-da473a1999ab
---
# Guardrails for [!DNL Identity Service] data

This document provides information on use and rate limits for [!DNL Identity Service] data to help you optimize your use of the identity graph. When reviewing the following guardrails, it is assumed that you have modeled the data correctly. If you have questions on how to model your data, please contact your customer service representative.

## Getting started

The following Experience Platform services are involved with modeling Identity data: 

* [Identities](home.md): Bridge identities from disparate data sources as they are ingested into Platform.
* [[!DNL Real-time Customer Profile]](../profile/home.md): Create unified consumer profiles using data from multiple sources.

## Data model limits

The tables below provide guidance on guardrails for static limits as well as validation rules to consider for identity namespaces.

### Static limits

The following table outlines static limits applied to identity data.

| Guardrail | Limit | Notes |
| --- | --- | --- |
| Number of identities in a graph | 50 | When a graph with 50 linked identities is updated, Identity Service will apply a "first-in, first-out" mechanism and deletes the oldest identity to make space for the newest identity. Deletion is based on identity type and timestamp. Read the [appendix](#appendix) for more information on the deletion logic applied to identities when full graphs are updated. |
| Number of identities in an XDM record | 20 | The minimum number of XDM records required is two. |
| Number of custom namespaces | None | There are no limits to the number of custom namespaces you can create. |
| Number of graphs | None | There are no limits to the number of identity graphs you can create. |
| Number of characters for a namespace display name or identity symbol | None | There are no limits to the number of characters of a namespace display name or identity symbol. |

### Identity value validation

The following table outlines existing rules you must follow to ensure a successful validation of your identity value.

| Namespace | Validation rule | System behavior when rule is violated |
| --- | --- | --- |
| ECID | <ul><li>The identity value of an ECID must be exactly 38 characters.</li><li>The identity value of an ECID must consist of numbers only.</li></ul> | <ul><li>If the identity value of ECID is not exactly 38 characters, then the record is skipped.</li><li>If the identity value of ECID contains non-numerical characters, then the record is skipped.</li></ul> |
| Non-ECID | The identity value cannot exceed 1024 characters. | If the identity value exceeds 1024 characters, then the record is skipped. |

### Identity namespace ingestion

Starting January 31, 2023, Identity Service will block the ingestion of Adobe Analytics ID (AAID) for new customers. This identity is typically ingested through the [Adobe Analytics source](../sources/connectors/adobe-applications/analytics.md) and the [Adobe Audience Manager source](../sources//connectors/adobe-applications/audience-manager.md) and is redundant because the ECID represents the same web browser. If you would like to change this default configuration, please contact your account manager.

## Next steps

See the following documentation for more information on [!DNL Identity Service]:

* [[!DNL Identity Service] overview](home.md)
* [Identity graph viewer](ui/identity-graph-viewer.md)

## Appendix {#appendix}

The following section contains additional information on guardrails for Identity Service.

### Understanding the deletion logic when an identity graph at capacity is updated

When a full identity graph is updated, Identity Service deletes the oldest identity in the graph before adding the latest identity. This is to maintain accuracy and relevance of identity data. This process of deletion follows two primary rules:

#### Rule #1 Deletion is based on a priority hierarchy of identity types

The deletion priority is as follows:

1. Partner IDs
2. Cookie IDs: Cookie IDs identify web browsers. These identities are critical for expansion and constitute the majority of the identity graph. However, by nature they decay fast and lose their value over time. 
3. Device IDs: Device IDs identify hardware devices, such as IDFA (iPhone and iPad), GAID (Android), and RIDA (Roku), and can be shared by multiple people in households.
4. Cross-Device IDs, Email, and Phone

#### Rule #2 Deletion is based on the timestamp stored on the identity

Each identity linked in a graph has its own corresponding timestamp. When a full graph is updated, Identity Service deletes the identity with the oldest timestamp.

When a full graph is updated with a new identity, these two rules work in tandem to designate which older identity will be deleted. Identity Service first deletes the oldest Partner ID. If that does not exist, then Identity Service will delete the oldest Cookie ID, then the oldest Device ID, and finally the oldest Cross-Device ID/Email/Phone. 

>[!NOTE]
>
>If the identity designated to be deleted is linked to multiple other identities in the graph, then the links connecting that identity will also be deleted.
