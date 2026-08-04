---
title: Configure Authentication For A Streaming SDK Connector
description:
---
# Configure authentication for a Streaming SDK connector

Authentication is required for all connectors built with the Streaming SDK.

Before you submit or release a connector, configure **one supported authentication mechanism**:

- OAuth 2.0
- HMAC-based authentication

Unauthenticated Streaming SDK connectors are not supported for GA.

## Choose an authentication mechanism

| Mechanism | Use when |
| --- | --- |
| OAuth 2.0 | The connector uses Adobe credentials, scopes, or customer authorization to access Adobe APIs. |
| HMAC | The connector signs each event with a shared secret before sending it to the Streaming Ingestion API. |

Configure the mechanism that matches your connector's integration model. Do not leave authentication without configuring your authentication type.

### Before you begin

Make sure that you have:

- A completed Streaming SDK connector implementation.
- A staging or test Streaming Ingestion API endpoint.
- A test Adobe organization and sandbox.
- A test event payload.
- A plan for storing and rotating credentials securely.
- A way to capture request and response details without exposing secrets.

### Additional OAuth requirements

If you use OAuth 2.0, make sure that you have:

- Access to Adobe Developer Console.
- The required API or product profile for the connector.
- The client ID and client secret for the selected credential.
- The required scopes.
- The OAuth flow and token endpoint required by the connector.

For the appropriate Adobe credential type and implementation details, see:

- [Adobe Developer Console authentication guide](https://developer.adobe.com/developer-console/docs/guides/authentication/AdminAuthentication/)
- [Implement Adobe Developer Console authentication](https://developer.adobe.com/developer-console/docs/guides/authentication/AdminAuthentication/implementation/)
- [Server-to-server submission](https://developer.adobe.com/developer-distribution/experience-cloud/docs/guides/submission/server-to-server-submission)

>[!IMPORTANT]
>
>Confirm whether your connector uses Adobe Admin Authentication or OAuth Server-to-Server authentication before creating the credential. These flows have different setup and consent requirements.

### Additional HMAC requirements

If you use HMAC, make sure that you have:

- A shared secret configured for the webhook or connector.
- A secure location for storing the secret.
- Code that can calculate an HMAC-SHA256 signature.
- The exact serialized event body that will be sent to Adobe.
- A test procedure for valid, invalid, missing, and rotated secrets.

## Configure OAuth 2.0

### 1. Create or select an Adobe credential

Create or select the Adobe Developer Console credential required by your connector.

Configure:

- The credential type.
- The required Adobe API or product profile.
- The required scopes.
- The redirect or consent settings, if applicable to the selected OAuth flow.

Do not use a credential type that is not supported by the connector's integration model.

### 2. Store the OAuth configuration securely

Store the following values securely:

- Client ID.
- Client secret.
- Required scopes.
- Token endpoint.
- Any connector-specific tenant, organization, or environment values.

Do not commit client secrets to source control or include them in logs, error messages, screenshots, or test results.

### 3. Add OAuth configuration to the connector

Add the OAuth configuration fields required by the Streaming SDK connector.

Use the field names defined by the current SDK schema:

| Configuration value | SDK field |
| --- | --- |
| Authentication type | |
| Client ID | |
| Client secret | |
| Scopes | |
| Token endpoint | |
| Additional tenant or organization value | |

### 4. Obtain an access token

Implement the OAuth flow documented for your credential type.

The connector must:

1. Authenticate using the configured OAuth credentials.
2. Request the scopes required by the Streaming SDK integration.
3. Store the access token in memory or another secure location.
4. Refresh or reacquire the token according to the token lifetime.
5. Avoid logging the token or the client secret.

### 5. Add the access token to requests

Include the access token as a bearer token on requests sent by the connector:

```https
Authorization: Bearer <access-token>
```

Use HTTPS for all requests.

### 6. Handle token failures

The connector should detect and handle authentication failures, including:

- Missing access tokens.
- Expired access tokens.
- Invalid client credentials.
- Insufficient scopes.
- Revoked or disabled credentials.

When a token expires, obtain a new token using the documented OAuth flow and retry only when the operation is safe to retry.

## Configure HMAC-based authentication



## Validate authentication

## Submission requirements

## Related documentation