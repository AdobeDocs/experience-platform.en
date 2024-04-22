---
title: PathFacory Source Overview
description: Learn how to connect PathFactory to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2024-04-20
badge: Beta
exl-id: 
---
# [!DNL PathFactory]

>[!NOTE]
>
>The [!DNL PathFactory] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data third-party marketing automation system. Support for marketing automation providers includes [!DNL PathFactory].

[[!DNL PathFactory]](https://www.pathfactory.com/) offers a cloud-based platform that helps businesses manage content journeys and drive engagement through intelligent content insights. This guide details how you can integrate data from PathFactory into your Experience Platform, utilizing PathFactory's connectors for optimal data ingestion.

You can ingest data from [[!DNL PathFactory]](https://www.pathfactory.com/) using three primary sources:

1. [!DNL Visitors]: Ingest customer and contact data as records to better understand your audience.
2. [!DNL Sessions]: Time series events that track individual user session activities on your platform.
3. [!DNL Page Views]: Time series events that provide insights into which pages are being viewed, helping you analyze content performance.

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you begin integrating [[!DNL PathFactory]](https://www.pathfactory.com/) connectors with your Experience Platform, ensure you meet the following prerequisites:

* **A [PathFactory account]**.
  * Contact [PathFactory](https://www.pathfactory.com/portal/company/contactus.shtml) if you do not already have a valid account.
* **An active subscription** to any PathFactory product.
* **Username, password, domain**.
  * These credentials are required to access your PathFactory account and its data.
* **Access Token** and **API Endpoints**.
  * These are necessary for authenticating and interfacing with PathFactory APIs. Detailed endpoint information is provided below.

### How to Obtain Credentials and Access Tokens {#gather-credentials}

To connect PathFactory to your Platform, you must provide the following credentials:

| Credential | Description | Endpoint |
| --- | --- | --- |
| Username | Your PathFactory account username. | Not applicable |
| Password | Your PathFactory account password. | Not applicable |
| Domain | The domain associated with your PathFactory account. | Not applicable |
| Access Token | A unique token used for API authentication. | Not applicable |
| Visitors Endpoint | API endpoint for visitor data. | `/api/public/v3/data_lake_apis/visitors.json` |
| Sessions Endpoint | API endpoint for session data. | `/api/public/v3/data_lake_apis/sessions.json` |
| Page Views Endpoint | API endpoint for page view data. | `/api/public/v3/data_lake_apis/page_views.json` |

For detailed instructions on how to obtain your username, password, domain, and access token, visit the [PathFactory Support Center](https://support.pathfactory.com/categories/adobe/). This resource provides comprehensive guides on retrieving and managing your credentials.

>[!IMPORTANT]
>
>Ensure that you have the necessary permissions to access and manage API credentials within your PathFactory account before attempting to connect to the Experience Platform.

## Connect [!DNL PathFactory] to Platform {#pathfactory-connect}

The documentation below provides information on how to connect [!DNL PathFactory] to Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL PathFactory] data to Platform using APIs](../../tutorials/api/create/marketing-automation/pathfactory.md).
* [Connect your [!DNL PathFactory] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/pathfactory.md).
* [Create a dataflow for a source connection using the UI](../../tutorials/ui/dataflow/marketing-automation.md).
