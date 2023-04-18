---
keywords: Experience Platform;home;popular topics;Authenticate;access
solution: Experience Platform
title: Authenticate and Access Experience Platform APIs
type: Tutorial
description: This document provides a step-by-step tutorial for gaining access to an Adobe Experience Platform developer account in order to make calls to Experience Platform APIs.
exl-id: dfe8a7be-1b86-4d78-a27e-87e4ed8b3d42
---

# Authenticate and access Experience Platform APIs

This document provides a step-by-step tutorial for gaining access to an Adobe Experience Platform developer account in order to make calls to Experience Platform APIs. At the end of this tutorial, you will have generated the following credentials that are required for all Platform API calls:

* `{ACCESS_TOKEN}`
* `{API_KEY}`
* `{ORG_ID}`

To maintain the security of your applications and users, all requests to Adobe I/O APIs must be authenticated and authorized using standards such as OAuth and JSON Web Tokens (JWT). A JWT is used along with client-specific information to generate your personal access token.

This tutorial covers how to gather the required credentials to authenticate Platform API calls, as outlined in the following flowchart:

![](./images/api-authentication/authentication-flowchart.png)

## Prerequisites

In order to successfully make calls to Experience Platform APIs, you must have the following:

* An organization with access to Adobe Experience Platform.
* An Admin Console administrator that is able to add you as a developer and a user for a product profile.

You must also have an Adobe ID to complete this tutorial. If you do not have an Adobe ID, you can create one using the following steps:

1. Go to [Adobe Developer Console](https://console.adobe.io).
2. Select **[!UICONTROL Create a new account]**.
3. Complete the sign-up process.

## Gain developer and user access for Experience Platform

Before creating integrations on Adobe Developer Console, your account must have developer and user permissions for an Experience Platform product profile in Adobe Admin Console.

### Gain developer access

Contact an [!DNL Admin Console] administrator in your organization to add you as a developer to an Experience Platform product profile using the [[!DNL Admin Console]](https://adminconsole.adobe.com/). See the [!DNL Admin Console] documentation for specific instructions on how to [manage developer access for product profiles](https://helpx.adobe.com/enterprise/admin-guide.html/enterprise/using/manage-developers.ug.html).

Once you are assigned as a developer, you can start creating integrations in [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui). These integrations are a pipeline from external apps and services to Adobe APIs.

### Gain user access

Your [!DNL Admin Console] administrator must also add you as a user to the same product profile. See the guide on [managing user groups in [!DNL Admin Console]](https://helpx.adobe.com/enterprise/admin-guide.html/enterprise/using/user-groups.ug.html) for more information.

## Generate an API key, organization ID, and client secret {#api-ims-secret}

>[!NOTE]
>
>If you are following this document from the [Privacy Service API guide](../privacy-service/api/getting-started.md), you can now return to that guide to generate the access credentials unique to [!DNL Privacy Service].

After you have been given developer and user access to Platform through [!DNL Admin Console], the next step is to generate your `{ORG_ID}` and `{API_KEY}` credentials in Adobe Developer Console. These credentials only need to be generated once and can be reused in future Platform API calls.

### Add Experience Platform to a project

Go to [Adobe Developer Console](https://www.adobe.com/go/devs_console_ui) and sign in with your Adobe ID. Next, follow the steps outlined in the tutorial on [creating an empty project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/) in the Adobe Developer Console documentation.

Once you have created a new project, select **[!UICONTROL Add API]** on the **[!UICONTROL Project Overview]** screen.

![](./images/api-authentication/add-api.png)

The **[!UICONTROL Add an API]** screen appears. Select the product icon for Adobe Experience Platform, then choose **[!UICONTROL Experience Platform API]** before selecting **[!UICONTROL Next]**.

![](./images/api-authentication/platform-api.png)

From here, follow the steps outlined in the tutorial on [adding an API to a project using a service account (JWT)](https://www.adobe.io/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/services-add-api-jwt.md) (starting from the "Configure API" step) to finish the process.

>[!IMPORTANT]
>
>At a certain step during the process linked above, your browser automatically downloads a private key and an associated public certificate. Note where this private key is stored on your machine, since it is required in a later step in this tutorial.

### Gather credentials

Once the API has been added to the project, the **[!UICONTROL Experience Platform API]** page for the project displays the following credentials that are required in all calls to Experience Platform APIs:

* `{API_KEY}` ([!UICONTROL Client ID])
* `{ORG_ID}` ([!UICONTROL Organization ID])

![](././images/api-authentication/api-key-ims-org.png)

In addition to the above credentials, you also need the generated **[!UICONTROL Client Secret]** for a future step. Select **[!UICONTROL Retrieve client secret]** to reveal the value, and then copy it for later use.

![](././images/api-authentication/client-secret.png)

## Generate a JSON Web Token (JWT) {#jwt}

The next step is to generate a JSON Web Token (JWT) based on your account credentials. This value is used to generate your `{ACCESS_TOKEN}` credential for use in Platform API calls, which must be regenerated every 24 hours.

>[!IMPORTANT]
>
>For the purposes of this tutorial, the steps below outline how to generate a JWT within Developer Console. However, this generation method should only be used for testing and evaluation purposes.
>
>For regular use, the JWT must be generated automatically. For more information on how to programmatically generate JWTs, see the [service account authentication guide](https://www.adobe.io/developer-console/docs/guides/authentication/JWT/) on Adobe Developer.

Select **[!UICONTROL Service Account (JWT)]** in the left navigation, then select **[!UICONTROL Generate JWT]**.

![](././images/api-authentication/generate-jwt.png)

In the textbox provided under **[!UICONTROL Generate custom JWT]**, paste the contents of the private key that you previously generated when adding the Platform API to your service account. Then, select **[!UICONTROL Generate Token]**.

![](././images/api-authentication/paste-key.png)

The page updates to show the generated JWT, along with a sample cURL command that allows you to generate an access token. For the purposes of this tutorial, select **[!UICONTROL Copy]** next to **[!UICONTROL Generated JWT]** to copy the token to your clipboard.

![](././images/api-authentication/copy-jwt.png)

## Generate an access token

Once you have generated a JWT, you can use it in an API call to generate your `{ACCESS_TOKEN}`. Unlike the values for `{API_KEY}` and `{ORG_ID}`, a new token must be generated every 24 hours to continue using Platform APIs.

**Request**

The following request generates a new `{ACCESS_TOKEN}` based on the credentials provided in the payload. This endpoint only accepts form data as its payload, and therefore it must be given a `Content-Type` header of `multipart/form-data`.

```shell
curl -X POST https://ims-na1.adobelogin.com/ims/exchange/jwt \
  -H 'Content-Type: multipart/form-data' \
  -F 'client_id={API_KEY}' \
  -F 'client_secret={SECRET}' \
  -F 'jwt_token={JWT}'
```

| Property | Description |
| --- | --- |
| `{API_KEY}` | The `{API_KEY}` ([!UICONTROL Client ID]) that you retrieved in a [previous step](#api-ims-secret). |
| `{SECRET}` | The client secret that you retrieved in a [previous step](#api-ims-secret). |
| `{JWT}` | The JWT that you generated in a [previous step](#jwt). |

>[!NOTE]
>
>You can use the same API key, client secret, and JWT to generate a new access token for each session. This allows you to automate access token generation in your applications.

**Response**

```json
{
  "token_type": "bearer",
  "access_token": "{ACCESS_TOKEN}",
  "expires_in": 86399992
}
```

| Property | Description |
| --- | --- |
| `token_type` | The type of token being returned. For access tokens, this value is always `bearer`. |
| `access_token` | The generated `{ACCESS_TOKEN}`. This value, prefixed with the word `Bearer`, is required as the `Authentication` header for all Platform API calls. |
| `expires_in` | The number of milliseconds remaining until the access token expires. Once this value reaches 0, a new access token must be generated to continue using Platform APIs. |

## Test access credentials

Once you have gathered all three required credentials, you can try to make the following API call. This call lists all standard [!DNL Experience Data Model] (XDM) classes available to your organization.

**Request**

```SHELL
curl -X GET https://platform.adobe.io/data/foundation/schemaregistry/global/classes \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

If your response is similar to the one shown below, then your credentials are valid and working. (This response has been truncated for space.)

```JSON
{
  "results": [
    {
        "title": "XDM ExperienceEvent",
        "$id": "https://ns.adobe.com/xdm/context/experienceevent",
        "meta:altId": "_xdm.context.experienceevent",
        "version": "1"
    },
    {
        "title": "XDM Individual Profile",
        "$id": "https://ns.adobe.com/xdm/context/profile",
        "meta:altId": "_xdm.context.profile",
        "version": "1"
    }
  ]
}
```

## Use Postman to authenticate and test API calls

[Postman](https://www.postman.com/) is a popular tool that allows developers to explore and test RESTful APIs. This [Medium post](https://medium.com/adobetech/using-postman-for-jwt-authentication-on-adobe-i-o-7573428ffe7f) describes how you can set up Postman to automatically perform JWT authentication and use it to consume Platform APIs.

## Developer and API access control with Experience Platform permissions

>[!NOTE]
>
>Only system administrators have the ability to view and manage API credentials in Permissions.

Before creating integrations on Adobe Developer Console, your account must have developer and user permissions for an Experience Platform product profile in Adobe Admin Console.

### Add developers to product profile

Go to [[!DNL Admin Console]](https://adminconsole.adobe.com/) and sign in with your Adobe ID.

Select **[!UICONTROL Products]**, then select **[!UICONTROL Adobe Experience Platform]** from the list of products.

![Products list on Admin Console](././images/api-authentication/products.png)

From the **[!UICONTROL Product Profiles]** tab select **[!UICONTROL AEP-Default-All-Users]**. Alternatively, use the search bar to search for the product profile by entering the name.

![Search for the product profile](././images/api-authentication/select-product-profile.png)

Select the **[!UICONTROL Developers]** tab, then select **[!UICONTROL Add Developer]**.

![Add developer from the Developers tab](././images/api-authentication/add-developer1.png)

Enter the developer's **[!UICONTROL Email or username]**. A valid [!UICONTROL Email or username] will display developer details. Select **[!UICONTROL Save]**.

![Add developer using their email or username](././images/api-authentication/add-developer-email.png)

The developer has been successfully added and appears on the [!UICONTROL Developers] tab.

![Developers listed on the Developers tab](././images/api-authentication/developer-added.png)

### Setup an API

A developer can add and configure an API within a project in the Adobe Developer Console.

Select your project, then select **[UICONTROL Add API]**.

![Add API to a project](././images/api-authentication/add-api-project.png)

In the **[!UICONTROL Add an API]** dialog box select **[!UICONTROL Adobe Experience Platform]**, then select **[!UICONTROL Experience Platform API].

![Add an API in Experience Platform](././images/api-authentication/add-api-platform.png)

In the **[!UICONTROL Configure API]** screen, select **[!UICONTROL AEP-Default-All-Users]**.

### Assign API to a role

A system admin can assign API's to roles in the [!UICONTROL Permissions] UI. 

Select the role you want to add the API to and select the **[!UICONTROL API credentials]** tab, then select **[!UICONTROL Add API credentials]**.

![API credentials tab in selected role](././images/api-authentication/api-credentials.png)

Select the API you would like to add to the role then select **[!Save].

![Select the API from the list](././images/api-authentication/select-api.png)

You are returned to the [!UICONTROL API credentials] tab, where the newly added API is listed.

![API credentials tab with newly added API](././images/api-authentication/api-credentials-with-added-api.png)

## Next steps

By reading this document, you have gathered and successfully tested your access credentials for Platform APIs. You can now follow along with the example API calls provided throughout the [documentation](../landing/documentation/overview.md).

In addition to the authentication values you have gathered in this tutorial, many Platform APIs also require a valid `{SANDBOX_NAME}` to be provided as a header. See the [sandboxes overview](../sandboxes/home.md) for more information.