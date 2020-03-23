---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Authenticate and Access Experience Platform APIs
topic: tutorial
---

# Authenticate and access Experience Platform APIs

This document provides a step-by-step tutorial for gaining access to an Adobe Experience Platform developer account in order to make calls to Experience Platform APIs. 

## Authenticate to make API calls

To maintain the security of your applications and users, all requests to Adobe I/O APIs must be authenticated and authorized using standards such as OAuth and JSON Web Tokens (JWT). The JWT is then used along with client specific information to generate your personal access token.

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

1. Go to [Adobe I/O Console](https://console.adobe.io)
2. Click **create a new account**
3. Complete the sign up process


### Become a developer and user for Experience Platform for an organization

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


## One time setup

The following steps will only need to be done once:

* Login to Adobe I/O Console
* Create Integration
* Copy Down Access Values

Once you have your integration and access values, you will be able to reuse them for authentication in the future. Each step is covered in detail below.

### Log in to Adobe I/O Console

Go to [Adobe I/O Console](https://console.adobe.io/) and sign in with your Adobe ID.

Once you are logged in, click the **Integrations** tab at the top of the screen. An Integration is a service account that is created for the selected IMS Organization. You are only allowed to make calls for the IMS Organization in which the Integration is created.

>[!NOTE]
>If your account is associated with multiple Organizations, the drop-down menu on the top right of the screen allows you to easily switch between them.

### Create integration

From the **Integrations** page, click **New Integration** to start the process. The process contains three steps:
* Choose type of integration
* Choose what Adobe service to integrate with
* Add integration details, public key, and product profile

![](images/authentication/integrations.png)

#### Choose type of integration

The next screen asks if you want to access an API or receive near-real time events. Select **Access an API** and then **Continue**.

![](images/authentication/create-new-integration.png)

#### Choose what Adobe service to integrate with

If your account is associated with multiple IMS organizations, you can switch between them by using the drop-down menu on the top right. Select **Workshop** and **Experience Platform API** under **Adobe Experience Platform** to access the APIs.

![](images/authentication/integration-select-service.png)

Click **Continue** to move to the next section.

#### Add integration details, public key, and product profile

The next screen prompts you to fill in your integration details, enter your public key certificate, and select a product profile.

![](images/authentication/integration-details.png)

First, enter your integration details. Next, select a product profile. Product profiles grant granular access to a group of features belonging to the service that you selected in previous steps.

For the certificate section, you must generate a certificate:

**For MacOS & Linux platforms:**

Open the command line and execute the following command:  

`openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt`


**For Windows platforms:**

1. Download an openssl client to generate public certificates (for example, [Openssl windows client](https://bintray.com/vszakats/generic/download_file?file_path=openssl-1.1.1-win64-mingw.zip))

1. Extract the folder and copy it to C:/libs/ location.

1. Open Command Line Prompt and execute the following commands:

    `set OPENSSL_CONF=C:/libs/openssl-1.1.1-win64-mingw/openssl.cnf`

    `cd C:/libs/openssl-1.1.1-win64-mingw/`

    `openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt`

You will get a response similar to the following which prompts you to enter some information about yourself:

```
Generating a 2048 bit RSA private key
.................+++
.......................................+++
writing new private key to 'private.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:
State or Province Name (full name) []:
Locality Name (eg, city) []:
Organization Name (eg, company) []:
Organizational Unit Name (eg, section) []:
Common Name (eg, fully qualified host name) []:
Email Address []:
```

After entering the information, two files are generated: `certificate_pub.crt` and `private.key`.

>[!NOTE]
>`certificate_pub.crt` will expire in 365 days. You can make the period longer by changing the value of `days` in the `openssl` command above, but rotating credentials periodically is a good security practice.

The `private.key` will be used to generate our JWT in the later section.

The `certificate_pub.crt` is used to create an API key. Go back to Adobe I/O Console and click **Select a File** to upload your `certificate_pub.crt` file. 

Click **Create Integration** to complete the process.

### Copy down access values

After creating your integration, you can view its details. Click **Retrieve Client Secret** and your screen will look similar to this:

![](images/authentication/access-values.png)

Copy down the values for `{API KEY}`, `{IMS ORG}` which is the Organization ID, and `{CLIENT SECRET}` as these will be used in the next step.

## Authentication for each session

The final step is to generate your `{ACCESS_TOKEN}` which will be used to authenticate your API calls. The access token must be included in the Authorization header of every API call you make to Adobe Experience Platform. Access tokens expire after 24 hours, after which new tokens must be generated to continue using the APIs.

### Create JWT

While in your integration's detail page in Adobe I/O Console, navigate to the **JWT** tab:

![](images/authentication/generate-jwt.png)

The page prompts you to enter the `private.key` you created in the previous section. Open the command line to view the contents of your `private.key` file:

```shell
cat private.key
```

Your output will look something like this:

```shell
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCYjPj18NrVlmrc
H+YUTuwWrlHTiPfkBGM0P1HbIOdwrlSTCmPhmaNNG5+mEiULJLWlrhQpx/7uQVNW
......
xbWgBWatJ2hUhU5/K2iFlNJBVXyNy7rN0XzOagLRJ1uS2CM6Hn3vBOqLbHRG4Pen
J1LvEocGunT12UJekLdEaQR4AKodIyjv5opvewrzxUZhVvUIIgeU5vUpg9smCXai
wPW5MQjmygodzCh7+eGLrg==
-----END PRIVATE KEY-----
```

Copy the entire output and paste it into the text field, then click **Generate JWT**. Copy down your generated JWT for the next step.

![](images/authentication/generated-jwt.png)

### Generate access token

You can generate an access token through a cURL command. If you do not have cURL installed, you can install it using `npm install curl`. You can read more about cURL [here](https://curl.haxx.se/)

Once cURL is installed, you will need to swap the fields in the following command with your own `{API_KEY}`, `{CLIENT_SECRET}`, and `{JWT_TOKEN}`:

```SHELL
curl -X POST "https://ims-na1.adobelogin.com/ims/exchange/jwt/" \
  -F "client_id={API_KEY}" \
  -F "client_secret={CLIENT_SECRET}" \
  -F "jwt_token={JWT_TOKEN}"
```

If successful, the output will look something like this:

```JSON
{
  "token_type":"bearer",
  "access_token":"eyJ4NXUiOiJpbXNfbmExLXN0ZzEta2V5LT2VyIiwiYWxnIjoiUlMyNTYifQ.eyJpZCI6IjE1MjAzMDU0ODY5MDhfYzMwM2JkODMtMWE1My00YmRiLThhNjctMWDhhNDJiNTE1X3VlMSIsImNsaWVudF9pZCI6ImYwNjY2Y2M4ZGVhNzQ1MWNiYzQ2ZmI2MTVkMzY1YzU0IiwidXNlcl9pZCI6IjA0ODUzMkMwNUE5ODg2QUQwQTQ5NDEzOUB0ZWNoYWNjdC5hZG9iZS5jb20iLCJzdGF0ZSI6IntcInNlc3Npb25cIjpcImh0dHBzOi8vaW1zLW5hMS1zdGcxLmFkb2JlbG9naW4uY29tL2ltcy9zZXNzaW9uL3YxL05UZzJZemM1TVdFdFlXWTNaUzAwT1RWaUxUZ3lPVFl0WkdWbU5EUTVOelprT0dFeUxTMHdORGcxTXpKRPVGc0TmtGRU1FRTBPVFF4TXpsQWRHVmphR0ZqWTNRdVlXUnZZbVV1WTI5dFwifSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJhcyI6Imltcy1uYTEtc3RnMSIsImZnIjoiU0hRUlJUQ0ZTWFJJTjdSQjVVQ09NQ0lBWVU9PT09PT0iLCJtb2kiOiJhNTYwOWQ5ZiIsImMiOiJMeksySTBuZ2F2M1BhWWIxV0J3d3FRPT0iLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6Im9wZW5pZCxzZXNzaW9uLEFkb2JlSUQscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNTIwMzA1NDg2OTA4In0.EBgpw0JyKVzbjIBmH6fHDZUvJpvNG8xf8HUHNCK2l-dnVJqXxdi0seOk_kjVodkIa3evC54V560N60vi_mzt7gef-g954VH6l3gFh6XQ7yqRJD2LMW7G1lhQGhga4hrQCnJlfSQoztvIp9hkar9Zcu-MYgyEB5UlwK3KtB3elu7vJGk35F3T9OnqVL4PFj0Ix6zcuN_4gikgQgmtoUjuXULinbtu9Bkmdf7so9FvhapUd5ZTUTTMrAfJ36gEOQPqsuzlu9oUQaYTAn8v4B9TgoS0Paslo6WIksc4f_rSVWsbO6_TSUqIOi0e_RyL6GkMBA1ELA-Dkgbs-jUdkw",
  "expires_in":86399947
}
```

Your access token is the value under the `access_token` key. This access token `expires_in` 86399947 milliseconds (24 hours). Afterwards, you will have to generate a new access token by following the same steps above.

You are now ready to make API requests in Adobe Experience Platform!

### Test access code

To test if your access token is valid, you can try to make the following API call. This call will list all classes within the `global` container:

>[!NOTE]
>`{API_KEY}` and `{IMS_ORG}` refer to the values you generated above.

**Request**

```SHELL
curl -X GET https://platform.adobe.io/data/foundation/schemaregistry/global/classes \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```


If your response is similar to the one shown below, then your `access_token` is valid and working. (This response has been truncated for space.)

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