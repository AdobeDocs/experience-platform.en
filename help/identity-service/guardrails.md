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
* [[!DNL Real-Time Customer Profile]](../profile/home.md): Create unified consumer profiles using data from multiple sources.

## Data model limits

The tables below provide guidance on guardrails for static limits as well as validation rules to consider for identity namespaces.

### Static limits

The following table outlines static limits applied to identity data.

| Guardrail | Limit | Notes |
| --- | --- | --- |
| (Current behavior) Number of identities in a graph | 150 | The limit is applied at the sandbox level. Once the number of identities reaches 150 or more, no new identities will be added, and the identity graph will not be updated. Graphs may show identities greater than 150 as a result of linking one or more graphs with less than 150 identities. **Note**: The maximum number of identities in an identity graph **for an individual merged profile** is 50. Merged profiles that are based off identity graphs with more than 50 identities are excluded from Real-Time Customer Profile. For more information, read the guide on [guardrails for Profile data](../profile/guardrails.md). |
| (Upcoming behavior) Number of identities in a graph [!BADGE Beta]{type=Informative} | 50 | When a graph with 50 linked identities is updated, Identity Service will apply a "first-in, first-out" mechanism and deletes the oldest identity to make space for the newest identity. Deletion is based on identity type and timestamp. The limit is applied at the sandbox level. Read the [appendix](#appendix) for more information on how Identity Service deletes identities once the limit is reached. |
| Number of identities in an XDM record | 20 | The minimum number of XDM records required is two. |
| Number of custom namespaces | None | There are no limits to the number of custom namespaces you can create. |
| Number of characters for a namespace display name or identity symbol | None | There are no limits to the number of characters of a namespace display name or identity symbol. |

### Identity value validation

The following table outlines existing rules you must follow to ensure a successful validation of your identity value.

| Namespace | Validation rule | System behavior when rule is violated |
| --- | --- | --- |
| ECID | <ul><li>The identity value of an ECID must be exactly 38 characters.</li><li>The identity value of an ECID must consist of numbers only.</li></ul> | <ul><li>If the identity value of ECID is not exactly 38 characters, then the record is skipped.</li><li>If the identity value of ECID contains non-numerical characters, then the record is skipped.</li></ul> |
| Non-ECID | The identity value cannot exceed 1024 characters. | If the identity value exceeds 1024 characters, then the record is skipped. |

### Identity namespace ingestion

Starting March 31, 2023, Identity Service will block the ingestion of Adobe Analytics ID (AAID) for new customers. This identity is typically ingested through the [Adobe Analytics source](../sources/connectors/adobe-applications/analytics.md) and the [Adobe Audience Manager source](../sources//connectors/adobe-applications/audience-manager.md) and is redundant because the ECID represents the same web browser. If you would like to change this default configuration, please contact your Adobe account team.

## Next steps

See the following documentation for more information on [!DNL Identity Service]:

* [[!DNL Identity Service] overview](home.md)
* [Identity graph viewer](ui/identity-graph-viewer.md)


## Appendix {#appendix}

The following section contains additional information on guardrails for Identity Service.

### [!BADGE Beta]{type=Informative} Understanding the deletion logic when an identity graph at capacity is updated {#deletion-logic}

>[!IMPORTANT]
>
>The following deletion logic is an upcoming behavior of Identity Service. Please contact your account representative to request a change in identity type if your production sandbox contains:
>
> * A custom namespace where the person identifiers (such as CRM IDs) are configured as cookie/device identity type.
> * A custom namespace where cookie/device identifiers are configured as cross-device identity type.


When a full identity graph is updated, Identity Service deletes the oldest identity in the graph before adding the latest identity. This is to maintain accuracy and relevance of identity data. This process of deletion follows two primary rules:

#### Rule #1 Deletion is prioritized based on the identity type of a namespace

The deletion priority is as follows:

1. Cookie ID
2. Device ID
3. Cross-Device ID, Email, and Phone

#### Rule #2 Deletion is based on the timestamp stored on the identity

Each identity linked in a graph has its own corresponding timestamp. When a full graph is updated, Identity Service deletes the identity with the oldest timestamp.

When a full graph is updated with a new identity, these two rules work in tandem to designate which older identity will be deleted. Identity Service first deletes the oldest Cookie ID, then the oldest Device ID, and finally the oldest Cross-Device ID/Email/Phone. 

>[!NOTE]
>
>If the identity designated to be deleted is linked to multiple other identities in the graph, then the links connecting that identity will also be deleted.

>[!BEGINSHADEBOX]

**A visual representation of the deletion logic**

![An example of the oldest identity being deleted to accommodate the latest identity](./images/graph-limits-v3.png)

*Diagram notes:*

* `t` = timestamp. 
* The value of a timestamp corresponds with the recency of a given identity. For example, `t1` represents the first linked identity (oldest) and `t51` would represent the newest linked identity.

In this example, before the graph on the left can be updated with a new identity, Identity Service first deletes the existing identity with the oldest timestamp. However, because the oldest identity is a device ID, Identity Service skips that identity until it gets to the namespace with a type that is higher on the deletion priority list, which in this case is `ecid-3`. Once the oldest identity with a higher deletion priority type is removed, the graph then gets updated with a new link, `ecid-51`.

* In the rare case that there are two identities with the same timestamp and identity type, Identity Service will sort the IDs based on [XID](./api/list-native-id.md) and conduct deletion.

>[!ENDSHADEBOX]