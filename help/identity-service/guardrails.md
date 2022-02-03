---
keywords: Experience Platform;identity;identity service;troubleshooting;guardrails;guidelines;limit;
title: Guardrails for Identity Service
description: This document provides information on use and rate limits for Identity Service data to help you optimize your use of the identity graph.
---
# Guardrails for [!DNL Identity Service] data

This document provides information on use and rate limits for [!DNL Identity Service] data to help you optimize your use of the identity graph. When reviewing the following guardrails, it is assumed that you have modeled the data correctly. If you have questions on how to model your data, please contact your customer service representative.

## Getting started

The following Experience Platform services are involved with modeling Identity data: 

* [Identities](home.md): Bridge identities from disparate data sources as they are ingested into Platform.
* [[!DNL Real-time Customer Profile]](../profile/home.md): Create unified consumer profiles using data from multiple sources.

## Data model limits

| Guardrail | Limit | Description |
| --- | --- | --- |
| Number of identities in a graph | 150 | The identity graph will not be updated once the limit is reached. |
| Number of links to an identity | 100 | The identity will be marked invalid after the limit is reached. |
| Number of identities in an XDM record | 20 |
| Batch failure rate | 10% | If 10% of the batch records fail, then the entire batch will result in failure. |

## Next steps

See the following documentation for more information on [!DNL Identity Service]:

* [[!DNL Identity Service] overview](home.md)
* [Identity graph viewer](ui/identity-graph-viewer.md)
