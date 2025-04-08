---
title: PathFactory Source Overview
description: Learn how to connect PathFactory to Adobe Experience Platform using APIs or the user interface.
last-substantial-update: 2024-04-30
badge: Beta
exl-id: befb73c4-fd6a-4512-9124-d23a1c27e0e0
---
# [!DNL PathFactory]

>[!NOTE]
>
>The [!DNL PathFactory] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

[[!DNL PathFactory]](https://www.pathfactory.com/) offers a cloud-based platform that helps businesses manage content journeys and drive engagement through intelligent content insights. This guide details how you can integrate data from PathFactory into Experience Platform, utilizing PathFactory's connectors for optimal data ingestion.

You can ingest data from [[!DNL PathFactory]](https://www.pathfactory.com/) using three primary sources:

* **[!DNL Visitors]**: Ingest customer and contact data as records to better understand your audience.
* **[!DNL Sessions]**: Time series events that track individual user session activities on your platform.
* **[!DNL Page Views]**: Time series events that provide insights into which pages are being viewed, helping you analyze content performance.

Read the document below for information on how you can set up your [!DNL PathFactory] source account.

## IP address allow list {#ip-allow-list}

A list of IP addresses may require to be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Prerequisites {#prerequisites}

Before you begin integrating [[!DNL PathFactory]](https://www.pathfactory.com/) connectors with Experience Platform, ensure you meet the following prerequisites:

* **A [PathFactory account]**.
  * Contact [[!DNL PathFactory]](https://www.pathfactory.com/portal/company/contactus.shtml) if you do not already have a valid account.
* **An active subscription** to any [!DNL PathFactory] product.
* **Username, password, and domain**.
  * These credentials are required to access your [!DNL PathFactory] account and its data.
* **Access Token** and **API Endpoints**.
  * These are necessary for connecting with [!DNL PathFactory] APIs. 

### How to Obtain Credentials and Access Tokens {#gather-credentials}

To connect [!DNL PathFactory] to Experience Platform, you must provide the following credentials:

| Credential | Description | Endpoint |
| --- | --- | --- |
| Username | Your [!DNL PathFactory] account username. | Not applicable |
| Password | Your [!DNL PathFactory] account password. | Not applicable |
| Domain | The domain associated with your [!DNL PathFactory] account. | Not applicable |
| Access Token | A unique token used for API authentication. | Not applicable |
| Visitors Endpoint | The API endpoint for visitor data. | `/api/public/v3/data_lake_apis/visitors.json` |
| Sessions Endpoint | The API endpoint for session data. | `/api/public/v3/data_lake_apis/sessions.json` |
| Page Views Endpoint | The API endpoint for page view data. | `/api/public/v3/data_lake_apis/page_views.json` |

For detailed instructions on how to obtain your username, password, domain, and access token, visit the [[!DNL PathFactory] Support Center](https://support.pathfactory.com/categories/adobe/). This resource provides comprehensive guides on retrieving and managing your credentials.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL PathFactory] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

## Connect [!DNL PathFactory] to Experience Platform {#pathfactory-connect}

The documentation below provides information on how to connect [!DNL PathFactory] to Experience Platform using APIs or the user interface:

* [Create a source connection and dataflow to bring [!DNL PathFactory] data to Experience Platform using APIs](../../tutorials/api/create/marketing-automation/pathfactory.md).
* [Connect your [!DNL PathFactory] account to Experience Platform using the UI](../../tutorials/ui/create/marketing-automation/pathfactory.md).
* [Create a dataflow for a source connection using the UI](../../tutorials/ui/dataflow/marketing-automation.md).
