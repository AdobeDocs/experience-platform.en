---
title: Getting Started with the Privacy Service API
description: Learn how to authenticate to the Privacy Service API and how to interpret example API calls in the documentation.
exl-id: c1d05e30-ef8f-4adf-87e0-1d6e3e9e9f9e
---
# Getting started with the Privacy Service API

This guide provides an introduction to the core concepts you need to know before attempting to make calls to the Adobe Experience Platform Privacy Service API.

## Prerequisites {#prerequisites}

This guide requires a working understanding of [Privacy Service](../home.md) and how it allows you to manage access and delete requests from your data subjects (customers) across Adobe Experience Cloud applications.

In order to create access credentials for the API, an administrator within your organization must have previously set up product profiles for Privacy Service within Adobe Admin Console. The product profile you assign to an API integration determines what permissions that integration has when accessing Privacy Service capabilities. See the guide on [managing Privacy Service permissions](../permissions.md) for more information.

## Gather values for required headers {#gather-values-required-headers}

In order to make calls to the Privacy Service API, you must first gather your access credentials to be used in required headers:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

These values are generated using [Adobe Developer Console](https://developer.adobe.com/console). Your `{ORG_ID}` and `{API_KEY}` only need to be generated once and can be reused in future API calls. However, your `{ACCESS_TOKEN}` is temporary and must be regenerated every 24 hours.

The steps for generating these values are covered in detail below.

### One-time setup {#one-time-setup}

Go to [Adobe Developer Console](https://developer.adobe.com/console) and sign in with your Adobe ID. Next, follow the steps outlined in the tutorial on [creating an empty project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/) in the Developer Console documentation.

Once you have created a new project, select **[!UICONTROL Add to Project]** and choose **[!UICONTROL API]** from the dropdown menu.

![The API option being selected from the [!UICONTROL Add to Project] dropdown from the project details page in Developer Console](../images/api/getting-started/add-api-button.png)

#### Select the Privacy Service API {#select-privacy-service-api}

The **[!UICONTROL Add an API]** screen appears. Select **[!UICONTROL Experience Cloud]** to narrow the list of available APIs, then select the card for **[!UICONTROL Privacy Service API]** before selecting **[!UICONTROL Next]**.

![The Privacy Service API card being selected from the list of available APIs](../images/api/getting-started/add-privacy-service-api.png)

>[!TIP]
>
>Select the **[!UICONTROL View docs]** option to navigate in a separate browser window to the complete [Privacy Service API reference documentation](https://developer.adobe.com/experience-platform-apis/references/privacy-service/).

Next, select the authentication type to generate access tokens and access the Privacy Service API.

>[!IMPORTANT]
>
>Select the **[!UICONTROL OAuth Server-to-Server]** method as will be the only method supported moving forward. The **[!UICONTROL Service Account (JWT)]** method is deprecated. While integrations using the JWT authentication method will continue to work until January 1st, 2025, Adobe strongly recommends that you migrate existing integrations to the new OAuth Server-to-Server method before that date. Get more information in the section [!BADGE Deprecated]{type=negative} [Generate a JSON Web Token (JWT)](/help/landing/api-authentication.md#jwt).

![Select Oauth Server-to-Server authentication method.](/help/privacy-service/images/api/getting-started/select-oauth-authentication.png
)

#### Assign permissions through product profiles {#product-profiles}

The final configuration step is to select the product profiles that this integration will inherit its permissions from. If you select more than one profile, their permission sets will be combined for the integration.

>[!NOTE]
>
>Product profiles and the granular permissions they provide are created and managed by administrators through Adobe Admin Console. See the guide on [Privacy Service permissions](../permissions.md) for more information.

When finished, select **[!UICONTROL Save configured API]**.

![A single product profile being selected from the list before saving the configuration](../images/api/getting-started/select-product-profiles.png)

Once the API has been added to the project, the project page reappears on the **Privacy Service API overview** page. From here, scroll down to the **[!UICONTROL Service Account (JWT)]** section, which provides the following access credentials that are required in all calls to the Privacy Service API:

* **[!UICONTROL CLIENT ID]**: The Client ID is the required `{API_KEY}` that must be provided in the `x-api-key` header.
* **[!UICONTROL ORGANIZATION ID]**: The Organization ID is the `{ORG_ID}` value that must be used in the `x-gw-ims-org-id` header.

![The Client ID and Organization ID values as they appear on the project overview page after the API has been configured](../images/api/getting-started/jwt-credentials.png)

### Authentication for each session

The final required credential you must gather is your `{ACCESS_TOKEN}`, which is used in the Authorization header. Unlike the values for `{API_KEY}` and `{ORG_ID}`, a new token must be generated every 24 hours to continue using the API.

In general, there are two methods of generating an access token:

* [Generate the token manually](#manual-token) for testing and development.
* [Automate token generation](#auto-token) for API integrations.

#### Generate a token manually {#manual-token}

To manually generate a new `{ACCESS_TOKEN}`, open the previously downloaded private key and paste its contents into the text box beside **[!UICONTROL Generate access token]** before selecting **[!UICONTROL Generate Token]**.

![The previously generated access token being pasted on the project's overview page, with the [!UICONTROL Generate Token] button being selected after](../images/api/getting-started/paste-private-key.png)

A new access token is generated, and a button to copy the token to your clipboard is provided. This value is used for the required Authorization header, and must be provided in the format `Bearer {ACCESS_TOKEN}`.

![The generated access token being copied from the UI](../images/api/getting-started/generated-access-token.png)

#### Automate token generation {#auto-token}

You can generate new access tokens for automated processes by sending a JSON Web Token (JWT) through a POST request to Adobe Identity Management Service (IMS). See the Developer Console document on [JWT authentication](https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/) for detailed steps.

## Reading sample API calls

Each endpoint guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/api-guide.md#sample-api) in the getting started guide for Platform APIs.

## Next steps

Now that you understand what headers to use, you are ready to begin making calls to the Privacy Service API. Select one of the endpoint guides to get started:

* [Privacy jobs](./privacy-jobs.md)
* [Consent](./consent.md)
