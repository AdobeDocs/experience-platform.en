---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Authenticate and Access Experience Platform APIs
topic: tutorial
---

# Authenticate and access Experience Platform APIs

This document provides a step-by-step tutorial for gaining access to an Adobe Experience Platform developer account in order to make calls to Experience Platform APIs. 

## Authenticate to make API calls

To maintain the security of your applications and users, all requests to Adobe I/O APIs must be authenticated and authorized using standards such as OAuth and JSON Web Tokens (JWT). The JWT is then used along with client-specific information to generate your personal access token.

This tutorial covers the steps of authentication through the creation of an access token outlined in the following flowchart:
![](images/authentication/authentication-flowchart.png)

## Prerequisites

In order to successfully make calls to Experience Platform APIs, you require the following:

* An IMS Organization with access to Adobe Experience Platform
* A registered Adobe ID account
* An Admin Console administrator to add you as a **developer** and a **user** for a product.

The following sections walk through the steps to create an Adobe ID and become a developer and user for an organization.

### Create an Adobe ID

If you do not have an Adobe ID, you can create one using the following steps:

1. Go to [Adobe Developer Console](https://console.adobe.io)
2. Click **create a new account**
3. Complete the sign up process

## Become a developer and user for Experience Platform for an organization

Before creating integrations on Adobe I/O, your account must have developer permissions for a product in an IMS Organization. Detailed information about developer accounts on the Admin Console can be found in the [support document](https://helpx.adobe.com/enterprise/using/manage-developers.html) for managing developers.

**Gain developer access**

Contact an Admin Console administrator in your Organization to add you as a developer for one of your Organization's products using the [Admin Console](https://adminconsole.adobe.com/).

 ![](images/authentication/assign-developer.png)

The administrator must assign you as a developer to at least one product profile to proceed.

 ![](images/authentication/add-developer.png)

Once you are assigned as a developer, you will have access privileges to create integrations on [Adobe I/O](https://console.adobe.io/). These integrations are a pipeline from external apps and services to the Adobe API.

**Gain user access**

Your Admin Console administrator must also add you to the product as a user. 

![](images/authentication/assign-users.png)

Similar to the process for adding a developer, the administrator must assign you to at least one product profile in order to proceed.

![](images/authentication/assign-user-details.png)


## Generate access credentials in Adobe Developer Console

Using Adobe Developer Console, you must generate the following three access credentials:

* `{IMS_ORG}`
* `{API_KEY}`
* `{ACCESS_TOKEN}`

Your `{IMS_ORG}` and `{API_KEY}` only need to be generated once and can be reused in future Platform API calls. However, your `{ACCESS_TOKEN}` is temporary and must be regenerated every 24 hours.

The steps are covered in detail below.

### One-time setup

Go to [Adobe Developer Console](https://console.adobe.io/) and sign in with your Adobe ID. Next, follow the steps outlined in the tutorial on [creating an empty project](https://www.adobe.io/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/projects-empty.md) in the Adobe Developer Console documentation.

Once you have created a new project, click **[!UICONTROL Add API]** on the _Project Overview_ screen.

![](images/authentication/add-api-button.png)

The _Add an API_ screen appears. Click the product icon for Adobe Experience Platform, then select **[!UICONTROL Experience Platform API]** before clicking **[!UICONTROL Next]**.

![](images/authentication/add-platform-api.png)

Once you have selected Experience Platform as the API to be added to the project, follow the steps outlined in the tutorial on [adding an API to a project using a service account (JWT)](https://www.adobe.io/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/services-add-api-jwt.md) (starting from the "Configure API" step) to finish the process. 

Once the API has been added to the project, the _Project overview_ page displays the following credentials that are required in all calls to Experience Platform APIs:

* `{API_KEY}` (Client ID)
* `{IMS_ORG}` (Organization ID)

![](./images/authentication/api-key-ims-org.png)

### Authentication for each session

The final required credential you must gather is your `{ACCESS_TOKEN}`. Unlike the values for `{API_KEY}` and `{IMS_ORG}`, a new token must be generated every 24 hours to continue using Platform APIs.

To generate a new `{ACCESS_TOKEN}`, follow the steps to [generate a JWT token](https://www.adobe.io/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/credentials.md) in the Developer Console credentials guide.

## Test access credentials

Once you have gathered all three required credentials, you can try to make the following API call. This call will list all Experience Data Model (XDM) classes within the Schema Registry's `global` container:

**API format**

```http
GET /global/classes
```

**Request**

```SHELL
curl -X GET https://platform.adobe.io/data/foundation/schemaregistry/global/classes \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

If your response is similar to the one shown below, then your credentials are valid and working. (This response has been truncated for space.)

**Response**

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

## Use Postman for JWT authentication and API calls

[Postman](https://www.getpostman.com/) is a popular tool to work with RESTful APIs. This [Medium post](https://medium.com/adobetech/using-postman-for-jwt-authentication-on-adobe-i-o-7573428ffe7f) describes how you can set up postman to automatically perform JWT authentication and use it to consume Adobe Experience Platform APIs.

## Next steps

By reading this document, you have gathered and successfully tested your access credentials for Platform APIs. You can now follow along with the example API calls provided throughout the [documentation](../landing/documentation/overview.md).

In addition to the authentication values you have gathered in this tutorial, many Platform APIs also require a valid `{SANDBOX_NAME}` to be provided as a header. See the [sandboxes overview](../sandboxes/home.md) for more information.