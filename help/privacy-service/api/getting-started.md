---
title: Getting Started with the Privacy Service API
description: Learn how to authenticate to the Privacy Service API and how to interpret example API calls in the documentation.
topic-legacy: developer guide
exl-id: c1d05e30-ef8f-4adf-87e0-1d6e3e9e9f9e
---
# Getting started with the Privacy Service API

This guide provides an introduction to the core concepts you need to know before attempting to make calls to the Privacy Service API.

## Prerequisites

This guide requires a working understanding the following features:

* [Adobe Experience Platform Privacy Service](../home.md): Provides a RESTful API and user interface that allow you to manage access and delete requests from your data subjects (customers) across Adobe Experience Cloud applications.

## Gather values for required headers

In order to make calls to the Privacy Service API, you must first gather your access credentials to be used in required headers:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

This involves obtaining developer permissions for Adobe Experience Platform in Adobe Admin Console, and then generating the credentials in Adobe Developer Console.

### Gain developer access to Experience Platform

To gain developer access to [!DNL Platform], follow the beginning steps in the [Experience Platform authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Once you arrive at the step "Generate access credentials in Adobe Developer Console", return to this tutorial to generate the credentials specific to Privacy Service.

### Generate access credentials

Using Adobe Developer Console, you must generate the following three access credentials:

* `{ORG_ID}`
* `{API_KEY}`
* `{ACCESS_TOKEN}`

Your `{ORG_ID}` and `{API_KEY}` only need to be generated once and can be reused in future API calls. However, your `{ACCESS_TOKEN}` is temporary and must be regenerated every 24 hours.

The steps for generating these values are covered in detail below.

#### One-time setup

Go to [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui) and sign in with your Adobe ID. Next, follow the steps outlined in the tutorial on [creating an empty project](https://www.adobe.io/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/projects-empty.md) in the Adobe Developer Console documentation.

Once you have created a new project, select **[!UICONTROL Add API]** on the **[!UICONTROL Project Overview]** screen.

![](../images/api/getting-started/add-api-button.png)

The **[!UICONTROL Add an API]** screen appears. Select **[!UICONTROL Privacy Service API]** from the list of available APIs before selecting **[!UICONTROL Next]**.

![](../images/api/getting-started/add-privacy-service-api.png)

The **[!UICONTROL Configure API]** screen appears. Select the option to **[!UICONTROL Generate a key pair]**, then select **[!UICONTROL Generate keypair]** in the bottom-right corner.

![](../images/api/getting-started/generate-key-pair.png)

The key pair is automatically generated, and a ZIP file containing a private key and a public certificate are downloaded to your local machine (to be used in a later step). Select **[!UICONTROL Save configured API]** to complete the configuration.

![](../images/api/getting-started/key-pair-generated.png)

Once the API has been added to the project, the project page reappears on the **Privacy Service API overview** page. From here, scroll down to the **[!UICONTROL Service Account (JWT)]** section, which provides the following access credentials that are required in all calls to the Privacy Service API:

* **[!UICONTROL CLIENT ID]**: The Client ID is the required `{API_KEY}` for that must be provided in the x-api-key header.
* **[!UICONTROL ORGANIZATION ID]**: The Organization ID is the `{ORG_ID}` value that must be used in the x-gw-ims-org-id header.

![](../images/api/getting-started/jwt-credentials.png)

#### Authentication for each session

The final required credential you must gather is your `{ACCESS_TOKEN}`, which is used in the Authorization header. Unlike the values for `{API_KEY}` and `{ORG_ID}`, a new token must be generated every 24 hours to continue using [!DNL Platform] APIs.

To generate a new `{ACCESS_TOKEN}`, open the previously downloaded private key and paste its contents into the text box beside **[!UICONTROL Generate access token]** before selecting **[!UICONTROL Generate Token]**.

![](../images/api/getting-started/paste-private-key.png)

A new access token is generated, and a button to copy the token to your clipboard is provided. This value is used for the required Authorization header, and must be provided in the format `Bearer {ACCESS_TOKEN}`.

![](../images/api/getting-started/generated-access-token.png)

## Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/api-guide.md#sample-api) in the getting started guide for Platform APIs.

## Next steps

Now that you understand what headers to use, you are ready to begin making calls to the Privacy Service API. Select one of the endpoint guides to get started:

* [Privacy jobs](./privacy-jobs.md)
* [Consent](./consent.md)
