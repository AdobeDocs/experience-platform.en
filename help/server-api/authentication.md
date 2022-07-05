---
title: Authentication
description: Learn how to configure authentication for the Adobe Experience Platform Edge Network Server API.
exl-id: 73c7a186-9b85-43fe-a586-4c6260b6fa8c
---
# Authentication {#authentication}

## Overview 

The [!DNL Edge Network Server API] handles both authenticated and unauthenticated data collection, depending on the source of events and the API collection domain.

For each request, the [!DNL Server API] verifies the datastream [!DNL access type] setting. Using this setting, customers can configure a datastream to accept either authenticated data, or both authenticated and unauthenticated data. By default, both types of data are accepted.

For details on configuring the datastream access type, see the documentation on how to [create and configure a datastream](../edge/datastreams/overview.md#create).

Below is a summary of the behavior, based on the datastream [!DNL Access Type] configuration and the endpoint on which the request is received.

| [!DNL Access Type]    | edge.adobedc.net              | server.adobedc.net    |
|-----------------|-------------------------------|-----------------------|
| mixed (default) | Does not authenticate request  | Authenticates request |
| authenticated   | Authenticates request         | Authenticates request |

API calls coming from a private server on `server.adobedc.net` should always be authenticated.

## Prerequisites {#prerequisites}

Before you can make calls to the [!DNL Server API], make sure you meet the following prerequisites:

* You have an IMS Organization account with access to Adobe Experience Platform.
* Your Experience Platform account has the `developer` and `user` roles enabled for the Adobe Experience Platform API product profile. Contact your [Admin Console](../access-control/home.md) administrator to enable these roles for your account.
* You have an Adobe ID. If you do not have an Adobe ID, go to the [Adobe Developer Console](https://developer.adobe.com/console) and create a new account.

## Gather credentials {#credentials}

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../landing/api-authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{ORG_ID}`

Resources in Experience Platform can be isolated to specific virtual sandboxes. In requests to Platform APIs, you can specify the name and ID of the sandbox that the operation will take place in. These are optional parameters.

*   x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Experience Platform, see the [sandbox overview documentation](../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Configure dataset write permissions {#dataset-write-permissions}

To configure dataset write permissions, go to the [Admin Console](https://adminconsole.adobe.com), locate the product profile attached to your API key, and set the following permissions:

* In the [!UICONTROL Sandboxes] section, select the datastream sandbox.
* In the [!UICONTROL Data Management] section, select the **[!UICONTROL Manage Datasets]** permission.

## Troubleshooting authorization errors {#troubleshooting-authorization}

| Error code | Error message | Description |
| --- | --- | --- |
| `EXEG-0500-401` | Invalid authorization token | This error message is displayed in any of the following situations:  <ul><li>The `authorization` header value is missing.</li><li>The `authorization` header value does not include the required `Bearer` token.</li><li>The provided authorization token has an invalid format.</li><li>The datastream requires authentication but the request is missing required headers.</li></ul> |
| `EXEG-0501-401` | Invalid user authorization token | This error message is displayed in any of the following situations: <ul><li>The API call is missing the required `x-user-token` header.</li><li>The provided user token has an invalid format.</li></ul> |
| `EXEG-0502-401` | Invalid authorization token | This error message is displayed when the provided authorization token has a valid format (JWT), but its signature is invalid. Check the [authentication tutorial](../landing/api-authentication.md) to learn how to get a valid JWT token. |
| `EXEG-0503-401` | Invalid authorization token | This error message is displayed when the provided authorization token is expired. Go through the [authentication tutorial](../landing/api-authentication.md) to generate a new token. |
| `EXEG-0504-401` | Required product context is missing | This error message is displayed in any of the following situations:  <ul><li>The developer account does not have access to Adobe Experience Platform product context.</li><li>The company account is not yet entitled to Adobe Experinece Platform.</li></ul>|
| `EXEG-0505-401` | Required authorization token scope is missing | This error applies only to service account authentication. The error message is displayed when the the service authorization token included in the call belongs to a service account which does not have access to the `acp.foundation` IMS scope.|
| `EXEG-0506-401` | Sandbox not accessible for write | This error message is displayed when the developer account does not have `WRITE` access to the Experience Platform sandbox in which the datastream is defined. |
