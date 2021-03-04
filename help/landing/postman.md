---
keywords: Experience Platform;home;popular topics;Adobe Experience Platform;api guide;platform api guide;introduction to platform;developer guide
solution: Experience Platform
title: Postman in Adobe Experience Platform
topic: api guide
description: This document contains steps outlining how to set up a Postman environment, import Postman collections, and a list of available collections for each Platform service.
---

# Postman in Adobe Experience Platform

Postman is a collaboration platform for API development that allows you to set up environments with preset variables, share API collections, streamline CRUD requests, and more. Most Platform API services have Postman collections which can be used to assist with making API calls.

## How to set up a Postman environment for Experience Platform

The following video guide outlines creating and setting up your Postman environment. A Postman environment contains all the required headers you need to make API calls to the various collections provided below. Once set up, any time a value expires (such as an `ACCESS_TOKEN`) you can update the current value in the environment, and this new value is used across all your collections.

>[!VIDEO](https://video.tv.adobe.com/v/28832)

## Import a Postman collection

In order to utilize a [Postman collection](#collections), you need to have an environment set up. Once you have completed your environment setup, select the **[!DNL Manage Environments]** selector in the top-right corner.

![manage environment selector](./images/api-guide/environment-selector.png)

A popover appears and displays all of your current environments. To import a collection, select **[!DNL import]** .

![import button](./images/api-guide/import-collection.png)

You are asked to choose a file to import. Select the Postman collection file you wish to import. Once selected, the collection populates in the left rail under the Collections tab.

![populated collection](./images/api-guide/imported-collection.png)

Each collection has different key-value pairs that may be required to perform a successful CRUD operation. Please review the service's [API developer guide](api-guide.md#api-guides) to learn about required values, tips, and see examples.

To learn more about the Postman UI and its available features, visit the [Postman documentation](https://learning.postman.com/docs/getting-started/navigating-postman/).

### Generate an access token with Postman for non-production use

>[!WARNING]
>
>As noted in the Adobe I/O access token generation Postman collection, the denoted generation methods are suitable for **non-production use**. Local signing loads a JavaScript library from a third-party host, and remote signing sends the private key to a web service that is owned and operated by Adobe. While Adobe does not store this private key, production keys should never be shared with anyone.

The video below uses the [Adobe I/O access token generation collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/ims/Adobe%20IO%20Access%20Token%20Generation.postman_collection.json) which can be downloaded from the public GitHub repository.

>[!VIDEO](https://video.tv.adobe.com/v/29698/?quality=12&learn=on)

## Postman collections {#collections}

The following services have Postman collections available. To download a Postman collection, select **[!DNL Raw]** from the GitHub page to load the raw JSON file in a new tab. Then, right-click and select **[!DNL Save as]** to save the file to a local destination of your choice.

![raw Json](./images/api-guide/raw-collection.PNG)

- [[!DNL Access Control] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Access%20Control%20API.postman_collection.json)
- [[!DNL Catalog Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Catalog%20Service%20API.postman_collection.json)
- [[!DNL Data Access] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Data%20Access%20API.postman_collection.json)
- [[!DNL Data Ingestion] Service Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Data%20Ingestion%20API.postman_collection.json)
- [[!DNL Flow Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Flow%20Service%20API.postman_collection.json)
- [[!DNL Identity Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Identity%20Service.postman_collection.json)
- [[!DNL Mapping Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Mapping%20Service%20API%20Resource.postman_collection.json)
- [[!DNL Observability Insights] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Observability%20Insights%20API.postman_collection.json)
- [[!DNL Offer Decisioning] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Observability%20Insights%20API.postman_collection.json)
- [[!DNL Policy Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Policy%20Service%20API.postman_collection.json)
- [[!DNL Privacy Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Privacy%20Service%20API.postman_collection.json)
- [[!DNL Query Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Query%20Service%20API.postman_collection.json)
- [Real-time Customer Profile Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Real-time%20Customer%20Profile%20API.postman_collection.json)
- [Sandbox API Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Sandbox%20API.postman_collection.json)
- [[!DNL Schema Registry] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Schema%20Registry%20API.postman_collection.json)
- [[!DNL Segmentation Service] Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Segmentation%20Service%20API.postman_collection.json)
- [[!DNL Sensei Machine Learning] API Postman collection](https://github.com/adobe/experience-platform-postman-samples/blob/master/apis/experience-platform/Sensei%20Machine%20Learning%20API.postman_collection.json)