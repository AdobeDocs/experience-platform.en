---
title: Getting started with the Reactor API
description: Learn how to get started with the Reactor API, including steps to generate required access credentials.
exl-id: fc1acc1d-6cfb-43c1-9ba9-00b2730cad5a
---
# Getting started with the Reactor API

In order to use the [Reactor API](https://developer.adobe.com/experience-platform-apis/references/reactor/) to create and manage Tags extensions, each request must include the following authentication headers:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

This guide covers how to use the Adobe Developer Console to gather the values for each of these headers so you can start making calls to the Reactor API.

## Gain developer access to Adobe Experience Platform {#gain-developer-access}

Before you can generate authentication values for the Reactor API, you must have developer access to Experience Platform. To gain developer access, follow the beginning steps in the [Experience Platform authentication tutorial](/help/landing/api-authentication.md). Once you have completed the [Gain User Access](/help/landing/api-authentication.md#gain-user-access) step, return to this tutorial to generate the credentials specific to the Reactor API.

## Generate access credentials {#generate-access-credentials}

Using Adobe Developer Console, you must generate the following three access credentials:

* `{ORG_ID}`
* `{API_KEY}`
* `{ACCESS_TOKEN}`

Your organization's ID (`{ORG_ID}`) and API key (`{API_KEY}`) can be reused in future API calls after they have been initially generated. However, your access token (`{ACCESS_TOKEN}`) is temporary and must be regenerated every 24 hours.

The steps for generating these values are covered in detail below.

### One-time setup {#one-time-setup}

Go to [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui) and sign in with your Adobe ID. Next, follow the steps outlined in the tutorial on [creating an empty project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/) in the Developer Console documentation.

Once you have created a project, select **Add API** on the **Project Overview** screen.

![](../images/api/getting-started/add-api-button.png)

The **Add an API** screen appears. Select **Experience Platform Launch API** from the list of available APIs before selecting **Next**.

![](../images/api/getting-started/add-launch-api.png)

Next, select the authentication type to generate access tokens and access the Experience Platform API.

>[!IMPORTANT]
>
>Select the **[!UICONTROL OAuth Server-to-Server]** method as this will be the only method supported moving forward. The **[!UICONTROL Service Account (JWT)]** method is deprecated. While integrations using the JWT authentication method will continue to work until January 1st, 2025, Adobe strongly recommends that you migrate existing integrations to the new OAuth Server-to-Server method before that date. Get more information in the section [!BADGE Deprecated]{type=negative} [Generate a JSON Web Token (JWT)](/help/landing/api-authentication.md#jwt) in the Platform API authentication tutorial.

Select **Next** to continue.

![Select OAuth Server-to-Server authentication method.](/help/tags/images/api/getting-started/oauth-authentication-method.png)

The next screen prompts you to select one or more product profiles to associate with the API integration.

>[!NOTE]
>
>Product profiles are managed by your organization through the Adobe Admin Console, and contain specific sets of permissions for granular features. Product profiles and their permissions can only be managed by users with administrator privileges within your organization. If you are unsure which product profiles to select for the API, contact your administrator.

Select the desired product profiles from the list, then select **Save configured API** to complete the API registration.

![](../images/api/getting-started/select-product-profile.png)

### Gather credentials {#gather-credentials}

Once the API has been added to the project, the **[!UICONTROL Experience Platform API]** page for the project displays the following credentials that are required in all calls to Experience Platform APIs:

![Integration information after adding an API in Developer Console.](/help/tags/images/api/getting-started/api-integration-information.png)

* `{API_KEY}` ([!UICONTROL Client ID])
* `{ORG_ID}` ([!UICONTROL Organization ID])

### Generate an access token {#generate-access-token}

The next step is to generate an `{ACCESS_TOKEN}` credential for use in Platform API calls. Unlike the values for `{API_KEY}` and `{ORG_ID}`, a new token must be generated every 24 hours to continue using Platform APIs. 

>[!TIP]
>
>These tokens expire after 24 hours. If you are using this integration for an application, it is a good idea to obtain your bearer token programmatically from within your application.

You have two options to generate your access tokens, depending on your use case:

* [Generate tokens manually](#manual)
* [Automate token generation](#auto-token)

#### Generate access tokens manually {#manual}

To manually generate a new `{ACCESS_TOKEN}`, navigate to **[!UICONTROL Credentials]** > **[!UICONTROL OAuth Server-to-Server]** and select **[!UICONTROL Generate access token]**, as shown below.

![Screen recording of how and access token is generated in the Developer Console UI.](/help/tags/images/api/getting-started/generate-access-token.gif)

A new access token is generated, and a button to copy the token to your clipboard is provided. This value is used for the required Authorization header, and must be provided in the format `Bearer {ACCESS_TOKEN}`.

#### Automate token generation {#auto-token}

You can also use a Postman environment and collection to generate access tokens. For more information, read the section about [using Postman to authenticate and test API calls](/help/landing/api-authentication.md#use-postman) in the Experience Platform API authentication guide.

## Test API credentials {#test-api-credentials}

By following the steps in this tutorial, you should have valid values for `{ORG_ID}`, `{API_KEY}`, and `{ACCESS_TOKEN}`. You can now test these values by using them in a simple cURL request to the Reactor API.

Start by attempting to make an API call to [list all companies](./endpoints/companies.md#list). 

>[!NOTE]
>
>You may not have any companies in your organization, in which case the response will be HTTP status 404 (Not Found). As long as you do not get a 403 (Forbidden) error, your access credentials are valid and working.

Once you confirm that your access credentials are working, continue to explore the other API reference documentation to learn the API's many capabilities.

## Reading sample API calls {#read-sample-api-calls}

Each endpoint guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/api-guide.md#sample-api) in the getting started guide for Platform APIs.

## Next steps {#next-steps}

Now that you understand what headers to use, you are ready to begin making calls to the Reactor API. Select one of the endpoint guides to get started:

* [Reactor API reference documentation](https://developer.adobe.com/experience-platform-apis/references/reactor/)
* [Reactor API guide overview](/help/tags/api/overview.md)
