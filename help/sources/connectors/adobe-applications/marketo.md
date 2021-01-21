---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Marketo Engage connector
topic: overview
description: This document provides an overview of the Marketo Engage source connector, including information about its authentication, mapping, and data latency.
---

# Marketo Engage connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[[!DNL Marketo Engage]](https://www.marketo.com/software/) (hereinafter referred to as "[!DNL Marketo]") is a complete solution for lead management and B2B marketers looking to transform customer experiences by engaging across every stage of complex buying journeys.

With the [!DNL Marketo] source connector, you can bring B2B data from [!DNL Marketo] to Platform and keep this data up to date using Platform-connected applications.

This document provides an overview of the [!DNL Marketo] source connector, including information about how to authenticate the connector, how to map [!DNL Marketo] fields to Experience Data Model (XDM), and the connector's data latency.

## Authenticate your [!DNL Marketo] connector

In order to connect [!DNL Marketo] to Platform, you must first retrieve values for your `munchkinId`, `clientId`, and `clientSecret`.

### Get your Munchkin ID

To retrieve your Munchkin ID, log in to [!DNL Marketo] and select **[!DNL Admin]** from the top navigation bar.

![home](./images/marketo/home.png)

From the admin page, you can access several features of your [!DNL Marketo] instance. Select **[!DNL Munchkin]** from the [!DNL Integration] panel to retrieve your Munchkin ID.

![admin-munchkin](./images/marketo/admin-munchkin.png)

The [!DNL Munchkin] page appears, with your unique Munchkin ID listed at the top of the panel. 

![munchkin-Id](./images/marketo/munchkin-id.png)

### Get your client ID and client secret

You can retrieve your client ID and client secret from the [!DNL Marketo] admin page. Under the integration panel, select [!DNL LaunchPoint].

![admin-launchpoint](./images/marketo/admin-launchpoint.png)

The [!DNL Installed services] page contains a list of installed services available to you. Locate the service you need to access from the list and then select **[!DNL View Details]**.

![services](./images/marketo/services.png)

A popover panel appears, containing your client ID and client secret.

![client-keys](./images/marketo/client-keys.png)

Combined with your Munchkin ID, you can use the newly retrieved client ID and client secret to connect your [!DNL Marketo] instance to Platform.

## Experience Data Model (XDM)

XDM is a publicly documented specification that provides common structures and definitions that allow you to ingest data from third-party sources for use in downstream Platform services.

Adhering to XDM standards allows data to be uniformly incorporated into the Platform ecosystem, making it easier to deliver data and gather information.

To learn more about XDM and its role in Platform, please see the [XDM System overview](../../../xdm/home.md).

## Field mapping from [!DNL Marketo] to XDM

To establish a source connection between [!DNL Marketo] and Platform, the Marketo source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

See the following documents for detailed information on the field mapping rules between [!DNL Marketo] datasets and Platform:

* [Activities](./marketo-mapping/activities.md)
* [Campaigns](./marketo-mapping/campaigns.md)
* [Campaign memberships](./marketo-mapping/campaign-memberships.md)
* [Companies](./marketo-mapping/companies.md)
* [Marketing lists](./marketo-mapping/marketing-lists.md)
* [Marketing list memberships](./marketo-mapping/marketing-list-memberships.md)
* [Named Accounts](./marketo-mapping/named-accounts.md)
* [Opportunities](./marketo-mapping/opportunities.md)
* [Opportunity person relations](./marketo-mapping/opportunity-person-relations.md)
* [Persons](./marketo-mapping/persons.md)

## Expected latency of [!DNL Marketo] data on Platform

The following table outlines the expected latency for bringing [!DNL Marketo] data into Platform, based on the nature of ingestion and the desired destination:

| Marketo Data | Expected Latency |
| ------------ | ---------------- |
| New streaming data to Data Lake | < 1 minute |
| New batch data to Data Lake | < 5 minutes |
| New data to B2B CDP | < 15 minutes |

## Connect [!DNL Marketo] to Platform

To learn how to connect your [!DNL Marketo] data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../tutorials/ui/create/adobe-applications/marketo.md).
