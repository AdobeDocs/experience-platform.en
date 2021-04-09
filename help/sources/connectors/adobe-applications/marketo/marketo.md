---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Marketo Engage connector
topic: overview
description: This document provides an overview of the Marketo Engage source connector, including information about its authentication, mapping, and data latency.
---

# (Alpha) [!DNL Marketo Engage] connector

>[!IMPORTANT]
>
>The [!DNL Marketo] source is currently in alpha. Its features and the documentation are subject to change.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[[!DNL Marketo Engage]](https://www.marketo.com/software/) (hereinafter referred to as "[!DNL Marketo]") is a complete solution for lead management and B2B marketers looking to transform customer experiences by engaging across every stage of complex buying journeys.

With the [!DNL Marketo] source connector, you can bring B2B data from [!DNL Marketo] to Platform and keep this data up to date using Platform-connected applications.

This document provides an overview of the [!DNL Marketo] source connector, including information about how to authenticate the connector, how to map [!DNL Marketo] fields to Experience Data Model (XDM), and the connector's data latency.

## Authenticate your [!DNL Marketo] connector

In order to connect [!DNL Marketo] to Platform, you must first retrieve values for your `munchkinId`, `clientId`, and `clientSecret`.

See the steps outlined in the [Authenticate your Marketo source connector](./marketo-auth.md) document to retrieve your credentials.

## Experience Data Model (XDM)

XDM is a publicly documented specification that provides common structures and definitions that allow you to ingest data from third-party sources for use in downstream Platform services.

Adhering to XDM standards allows data to be uniformly incorporated into the Platform ecosystem, making it easier to deliver data and gather information.

To learn more about XDM and its role in Platform, please see the [XDM System overview](../../../../xdm/home.md).

## Field mapping from [!DNL Marketo] to XDM

To establish a source connection between [!DNL Marketo] and Platform, the Marketo source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

See the following documents for detailed information on the field mapping rules between [!DNL Marketo] datasets and Platform:

* [Activities](../mapping/marketo.md#activities)
* [Campaigns](../mapping/marketo.md#campaigns)
* [Campaign memberships](../mapping/marketo.md#campaign-memberships)
* [Companies](../mapping/marketo.md#companies)
* [Marketing lists](../mapping/marketo.md#marketing-lists)
* [Marketing list memberships](../mapping/marketo.md#marketing-list-memberships)
* [Named Accounts](../mapping/marketo.md#named-accounts)
* [Opportunities](../mapping/marketo.md#opportunities)
* [Opportunity person relations](../mapping/marketo.md#opportunity-person-relations)
* [Persons](../mapping/marketo.md#persons)

## Expected latency of [!DNL Marketo] data on Platform

The following table outlines the expected latency for bringing [!DNL Marketo] data into Platform, based on the nature of ingestion and the desired destination:

| Destination | Expected Latency |
| ----------- | ---------------- |
| [!DNL Real-time Customer Profile] | < 1 minute |
| Data Lake | < 60 minutes |

## Connect [!DNL Marketo] to Platform

To learn how to connect your [!DNL Marketo] data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../../tutorials/ui/create/adobe-applications/marketo.md).
