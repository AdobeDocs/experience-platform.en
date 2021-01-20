---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Marketo Engage connector
topic: overview
description: This document provides an overview of Marketo Engage.
---

# Marketo Engage connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting [!DNL Marketo Engage] data into Adobe Experience Platform.

## Authenticate your [!DNL Marketo] connector

In order to connect [!DNL Marketo] to Platform, you must first retrieve values for your `munchkinId`, `clientId`, and `clientSecret`.

### Get your Munchkin ID

To retrieve your Munchkin ID, log in to [!DNL Marketo] and select **[!UICONTROL Admin]** from the top navigation bar.

![home](./images/marketo/home.png)

From the admin page, you can access several features of your [!DNL Marketo] instance. Select **[!UICONTROL Munchkin]** from the [!UICONTROL Integration] panel to retrieve your Munchkin ID.

![admin-munchkin](./images/marketo/admin-munchkin.png)

The [!UICONTROL Munchkin] page appears, with your unique Munchkin ID listed at the top of the panel. 

![munchkin-Id](./images/marketo/munchkin-id.png)

### Get your client ID and client secret

You can retrieve your client ID and client secret from the [!DNL Marketo] admin page. Under the integration panel, select [!UICONTROL LaunchPoint].

![admin-launchpoint](./images/marketo/admin-launchpoint.png)

The [!UICONTROL Installed services] page contains a list of installed services available to you.

![services](./images/marketo/services.png)

Locate the service you need to access from the list and then select **[!UICONTROL View Details]**.

![client-keys](./images/marketo/client-keys.png)

Combined with your Munchkin ID, you can use the newly retrieved client ID and client secret to connect your [!DNL Marketo] instance to Platform.

## Experience Data Model (XDM)

XDM is a publicly documented specification that provides common structures and definitions for an application to use to communicate with services on Experience Platform.

Adhering to XDM standards allows data to be uniformly incorporated, making it easier to deliver data and gather information.

To learn more about XDM, please see the [XDM System overview](../../../xdm/home.md).

## Field mapping from [!DNL Marketo] to XDM

When a source connection is established for bringing [!DNL Marketo] data into Experience Platform using the Platform user interface, data fields are automatically mapped and ingested into [!DNL Real-time Customer Profile] within minutes. For instructions on creating a source connection with [!DNL Marketo] using the Platform UI, see the [Marketo connector tutorial](../../tutorials/ui/create/adobe-applications/marketo.md).

See the following documents for detailed information on the field mapping that occurs between [!DNL Marketo] datasets and Platform:

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

| Marketo Data | Expected Latency |
| ------------ | ---------------- |
| New streaming data to Data Lake | < 1 minute |
| New batch data to Data Lake | < 5 minutes |
| New data to B2B CDP | < 15 minutes |

## Connect [!DNL Marketo] to Platform

The documentation below provides information on how to connect [!DNL Marketo] to Platform through the UI.

### Using APIs

* [Create a Marketo source connector in the UI](../../tutorials/ui/create/adobe-applications/marketo.md)