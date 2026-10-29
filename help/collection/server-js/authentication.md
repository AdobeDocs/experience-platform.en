---
title: Authentication
description: Set up OAuth Server-to-Server credentials so that the Server SDK can send authenticated events to the Edge Network.
badge: Alpha
---
# Authentication

The Server SDK runs in a trusted environment that you control. Because of this, it sends events to the authenticated [Edge Network Server API](https://developer.adobe.com/data-collection-apis/docs/getting-started/authentication) instead of the unauthenticated endpoint that browsers use. Authenticated requests let the Edge Network trust the data that your server sends.

To authenticate, the SDK needs an **OAuth Server-to-Server credential** from the Adobe Developer Console. You pass it to [`configure`](methods/configure/overview.md) using the [`edgeCredentials`](methods/configure/edgecredentials.md) option, which is required. The SDK uses the credential to request an access token from Adobe, then adds the token to each authenticated request.

## Create an OAuth Server-to-Server credential {#create-credential}

To create a credential, you must be a developer and a user for Adobe Experience Platform in your organization. Then complete the following steps:

1. Log in to the [Adobe Developer Console](https://developer.adobe.com/console) and select your organization.
1. Navigate to **[!UICONTROL Projects]** and select an existing project, or create a new one.
1. Add the **[!UICONTROL Experience Platform API]** to the project and select **[!UICONTROL OAuth Server-to-Server]** as the authentication type.
1. Select the product profiles for the credential.
1. On the credential's page, copy the following values:
    * **[!UICONTROL Client ID]**
    * **[!UICONTROL Client Secret]**. Select **[!UICONTROL Retrieve client secret]** to reveal it.
    * **[!UICONTROL Scopes]**

See [Authenticate and access Experience Platform APIs](/help/landing/api-authentication.md) for detailed instructions and screenshots for each step, including how to gain developer and user access.

## Configure the SDK with your credential {#configure}

Pass the values that you copied to the `edgeCredentials` option when you call `configure`. Read them from environment variables or a secrets manager instead of placing them in source code.

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  }
});
```

If you omit `edgeCredentials`, `configure` rejects with an error. See [`edgeCredentials`](methods/configure/edgecredentials.md) for the full list of properties.

Use the same organization for the credential and the [`orgId`](methods/configure/orgid.md) option. The SDK sends `orgId` in the `x-gw-ims-org-id` header of each authenticated request.

## Which requests are authenticated {#authenticated-requests}

Only `sendEvent` uses the authenticated Server API. The Server API doesn't provide equivalent endpoints for identity and consent requests, so those methods send unauthenticated requests to the standard Edge Network endpoint, the same way the Web SDK does. The SDK chooses the endpoint for you.

| Method | Endpoint | Authenticated |
| --- | --- | --- |
| [`sendEvent`](methods/sendevent/overview.md) | `server.adobedc.net` | Yes |
| [`getIdentity`](methods/getidentity.md) | The domain set in [`edgeDomain`](methods/configure/edgedomain.md) | No |
| [`appendIdentityToUrl`](methods/appendidentitytourl.md) | The domain set in `edgeDomain`, if the SDK needs to request an identity | No |
| [`setConsent`](methods/setconsent.md) | The domain set in `edgeDomain` | No |

When [`thirdPartyCookiesEnabled`](methods/configure/thirdpartycookiesenabled.md) is `true`, which is the default, a visitor's first unauthenticated request goes to `adobedc.demdex.net` instead of the `edgeDomain`.

Each authenticated request includes the following headers:

* `Authorization`: The access token that the SDK obtained with your credential.
* `x-api-key`: The `clientId` from your credential.
* `x-gw-ims-org-id`: The `orgId` that you configured.

## Set the datastream access type {#datastream-access-type}

Datastreams have an **[!UICONTROL Access Type]** setting that controls whether the Edge Network accepts unauthenticated requests. See [Configure advanced options](/help/datastreams/configure.md#advanced-options) in the datastreams guide.

* **[!UICONTROL Mixed Authentication]**: Accepts both authenticated and unauthenticated requests. Use this setting if you call `getIdentity`, `appendIdentityToUrl`, or `setConsent`, or if your browser pages send data to the same datastream with the Web SDK.
* **[!UICONTROL Authenticated Only]**: Accepts only authenticated requests. Use this setting only if you call nothing but `sendEvent` with this datastream.

## Include a primary identity in events {#primary-identity}

The Edge Network can't read cookies from the visitor's browser on a server-to-server request. Because of this, every event that the Server API receives must include a primary identity in the event's `identityMap`. If an event doesn't include one, the Edge Network rejects it with the error code `EXEG-0306-400`.

```js
await visitor.sendEvent({
  xdm: {
    eventType: "web.webpagedetails.pageViews",
    identityMap: {
      Email: [{ id: "visitor@example.com", primary: true }]
    }
  }
});
```

See [`xdm`](methods/sendevent/xdm.md#primary-identity) for more information.

## Access token caching {#token-caching}

The SDK requests an access token from Adobe Identity Management Service (IMS) the first time it sends an authenticated request, not when you call `configure`. It then reuses the token until five minutes before the token expires. Every [`forRequest`](methods/forrequest.md) handle that an instance creates shares one cached token. The top-level instance caches its own token separately, which matters only if you also send events from it directly. Access tokens are valid for about 24 hours, so a busy server requests a new token about once a day instead of once per visitor.

If several requests need a token at the same time, they share a single token request. If the token request fails, for example because the client secret is wrong, the method that triggered it rejects with an error whose message includes `Failed to acquire an IMS access token`.

## Protect your credentials {#protect-credentials}

The client secret grants access to your organization's data. Follow these practices:

* Store the client ID, client secret, and scopes in environment variables or a secrets manager. Don't commit them to source control.
* Never send the client secret to a browser. Use the Server SDK only in server code that visitors can't download or inspect.
* Rotate the client secret in the Adobe Developer Console if you think that it was exposed.

The SDK redacts the client secret, replacing it with `[REDACTED]`, in its debug logs and in the configuration that [`getLibraryInfo`](methods/getlibraryinfo.md) returns.
