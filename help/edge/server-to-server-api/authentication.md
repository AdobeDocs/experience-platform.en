---
description: Learn how to configure authentication for Experience Edge Server-to-Server API
title: Authentication
---

# Authentication {#authentication}

## Overview 

[!DNL Experience Edge] handles both authenticated and unauthenticated data collection, depending on the source of events and the API collection domain.

For each request, Konductor verifies the datastream [*access_type* setting](https://git.corp.adobe.com/experience-edge/blackbird/blob/master/manifests/src/main/resources/schemas/apiv2/edge/datastreams/v1/edgeSettings.json#L13-L18). Using this setting, a customer can configure a datastream to accept only authenticated data, or both authenticated and non-authenticated (_mixed_, which is the default)

Below is a summary of the behavior, based on the *access_type* configuration and the endpoint on which the request is received:

| access_type     | edge.adobedc.net              | server.adobedc.net    |
|-----------------|-------------------------------|-----------------------|
| mixed (default) | doesn't authenticate request  | authenticates request |
| authenticated   | authenticates request         | authenticates request |

API calls coming from a (private) server on **`server.adobedc.net` should always be authenticated**.


## Step 1: Prerequisites {#prerequisites}

Before you can make calls to the Adobe Experience Platform APIs, make sure you meet the following prerequisites:

* You have an IMS Organization account with access to Adobe Experience Platform.
* Your Experience Platform account has the `developer` and `user` roles enabled for the Adobe Experience Platform API product profile. Contact your [Admin Console](../../access-control/home.md) administrator to enable these roles for your account.
* You have an Adobe ID. If you do not have an Adobe ID, go to the [Adobe Developer Console](https://developer.adobe.com/console) and create a new account.

## Step 2: Gather credentials {#credentials}

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

Resources in Experience Platform can be isolated to specific virtual sandboxes. In requests to Platform APIs, you can specify the name and ID of the sandbox that the operation will take place in. These are optional parameters.

*   x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Experience Platform, see the [sandbox overview documentation](../../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`
















## API keys

All calls must be accompanied by an API key, sent in the `x-api-key` request header. The key identifies the calling
application.

The API key must be set up to access Experience Edge APIs. To do so:

* subscribe the API key to the `Experience Platform API`;
* for service tokens, request the associated client ID to be enabled by the Edge Gateway team via
  [e-mail](mailto:ee-konductor-engineering@adobe.com) or via Slack on channel #konductor.

## Using user tokens

User tokens may be used to access the API resources, provided that:

* the user token is passed in the `Authorization` request header
* a client API key is passed in the `x-api-key` request header
* an IMS Org ID is passed in the `x-gw-ims-org-id` request header
* the IMS Org is provisioned for Adobe Experience Platform (`acp` product context)
* the user is part of the organisation
* the user has, through the Product Profile attached to the API key, _Dataset write permissions_ for the AEP Sandbox in
  which the data-stream is defined

?> For configuring the _Dataset write permissions_, go to [Admin Console](https://adminconsole.adobe.com), locate the
Product Profile attached to the API key and set the following permissions:<br>- choose the data-stream sandbox in
the `Sandboxes` section;<br>- choose the `Manage Datasets` permission in the `Data Management` section.

?> Make sure to go through
the [authentication tutorial](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html)
, which covers step-by-step the process of obtaining credentials.

## Troubleshooting authorization errors

| Error Code | Short Message | Possible causes |
| --- | --- | --- |
| `EXEG-0500-401` | Invalid authorization token | <ul><li>The `authorization` header values is missing</li><li>The `authorization` header value does not include the required `Bearer` scheme</li><li>The provided authorization token has an invalid format</li><li>The datastream requires authentication but the request is missing required headers</li></ul> |
| `EXEG-0501-401` | Invalid user authorization token | <ul><li>The service call does not include the required user token in the `x-user-token` header</li><li>The forwarded user token has an invalid format</li></ul> |
| `EXEG-0502-401` | Invalid authorization token | <ul><li>The provided authorization token has a valid format (JWT), but its signature is invalid<li>Check the [authentication tutorial](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html) to learn how to get a valid JWT token</li></ul> |
| `EXEG-0503-401` | Invalid authorization token | <ul><li>The provided authorization token is expired</li><li>Use the refresh token to get a new access token</li></ul> |
| `EXEG-0504-401` | Required product context is missing | <ul><li>The developer account does not have access to AEP (`acp` product context)</li><li>The company account is not yet entitled to AEP</li></ul>|
| `EXEG-0505-401` | Required authorization token scope is missing | <ul><li>The service authorization token included in the call belongs to a service account which does not have access to the `acp.foundation` IMS scope</li><li>This error concerns only service accounts</li></ul>|
| `EXEG-0506-401` | Sandbox not accessible for write | <ul><li>The developer account does not have `WRITE` access to the AEP sandbox in which the data-stream is defined</li></ul> |
