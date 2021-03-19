---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Marketo Engage connector
topic: overview
description: This document provides an overview of the Marketo Engage source connector, including information about its authentication, mapping, and data latency.
---

# Marketo Engage connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[Marketo Engage](https://www.marketo.com/software/) (hereinafter referred to as "Marketo") is a complete solution for lead management and B2B marketers looking to transform customer experiences by engaging across every stage of complex buying journeys.

With the Marketo source connector, you can bring B2B data from Marketo to Platform and keep this data up to date using Platform-connected applications.

This document provides an overview of the Marketo source connector, including information about how to authenticate the connector, how to map Marketo fields to Experience Data Model (XDM), and the connector's data latency.

## Authenticate your Marketo connector

In order to connect Marketo to Platform, you must first retrieve values for your `munchkinId`, `clientId`, and `clientSecret`.

See the steps outlined in the [Authenticate your Marketo source connector](./marketo-auth.md) document to retrieve your credentials.

## Experience Data Model (XDM)

XDM is a publicly documented specification that provides common structures and definitions that allow you to ingest data from third-party sources for use in downstream Platform services.

Adhering to XDM standards allows data to be uniformly incorporated into the Platform ecosystem, making it easier to deliver data and gather information.

To learn more about XDM and its role in Platform, please see the [XDM System overview](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html?lang=en).

## Field mapping from Marketo to XDM

To establish a source connection between Marketo and Platform, the Marketo source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

For more information on mapping rules for Marketo datasets, open the **Mappings** folder and select the dataset you want to use.

* Activities
* Campaigns
* Campaign memberships
* Companies
* Marketing lists
* Marketing list memberships
* Named Accounts
* Opportunities
* Opportunity person relations
* Persons

You can manage restricted permissions on the API when creating roles with Marketo. Instead of selecting "Access API", you can provide a role with the minimum level of access by selecting the following permissions:

* Read-Only Activity
* Read-Only Assets
* Read-Only Campaign
* Read-Only Company
* Read-Only Custom Object
* Read-Only Custom Object Type
* Read-Only Named Account
* Read-Only Named Account List
* Read-Only Opportunity
* Read-Only Person
* Read-Only Sales Person

## Expected latency of Marketo data on Platform

The following table outlines the expected latency for bringing Marketo data into Platform, based on the nature of ingestion and the desired destination:

| Destination | Expected Latency |
| ----------- | ---------------- |
| Real-time Customer Profile | < 1 minute |
| Data Lake | < 60 minutes |

## Connect Marketo to Platform

To learn how to connect your Marketo data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../tutorials/ui/create/adobe-applications/marketo.md).
