---
title: edgeCredentials (Server SDK)
description: Provide the OAuth Server-to-Server credential that the Server SDK uses to authenticate events.
badge: Alpha
---
# `edgeCredentials` (Server SDK)

The `edgeCredentials` object contains the OAuth Server-to-Server credential that the Server SDK uses to authenticate with Adobe. The SDK exchanges the credential for an access token, then uses the token to send events to the authenticated Edge Network Server API. **This property is required.** The Web SDK doesn't use this property, because a browser can't keep a client secret private.

See [Authentication](../../authentication.md) to learn how to create a credential in the Adobe Developer Console and how the SDK uses it.

## Properties {#properties}

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | String | Yes | The **[!UICONTROL Client ID]** of your OAuth Server-to-Server credential. The SDK also sends it in the `x-api-key` header of authenticated requests. |
| `clientSecret` | String | Yes | The **[!UICONTROL Client Secret]** of your credential. |
| `scopes` | Array of strings | Yes | The **[!UICONTROL Scopes]** listed for your credential in the Adobe Developer Console. Include at least one scope. |
| `imsHost` | String | No | The Adobe Identity Management Service (IMS) host that issues access tokens. Defaults to `ims-na1.adobelogin.com`. Change it only if Adobe instructs you to. |

## Code example

Set the `edgeCredentials` object when you call `configure`. Read the values from environment variables or a secrets manager instead of placing them in source code.

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

In this example, the `ADOBE_SCOPES` environment variable holds a comma-separated list of scopes, such as the list that the Adobe Developer Console shows for your credential.

## Validation and errors {#errors}

* If `edgeCredentials` is missing, `configure` rejects with an error that says the SDK requires `edgeCredentials`.
* If `clientId`, `clientSecret`, or `scopes` is missing or empty, `configure` rejects with an error that names the missing property.
* `configure` doesn't check whether the credential is valid. The SDK requests an access token the first time it sends an authenticated event. If Adobe rejects the credential, that method rejects with an error whose message includes `Failed to acquire an IMS access token`.

The SDK replaces `clientSecret` with `[REDACTED]` in its debug logs and in the configuration that [`getLibraryInfo`](../getlibraryinfo.md) returns.
