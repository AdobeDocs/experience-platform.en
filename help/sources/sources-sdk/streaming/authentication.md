---
title: Configure Authentication For A Streaming SDK Connector
description: Learn how to configure authentication for a Streaming SDK source connector.
---
# Configure authentication for a Streaming SDK connector

Authentication is required for all connectors built with the Streaming SDK. Before you submit or release a connector, configure **one supported authentication mechanism**:

| Mechanism | Use when |
| --- | --- |
| OAuth 2.0 | The connector uses Adobe credentials, scopes, or customer authorization to access Adobe APIs. |
| HMAC | The connector signs each event with a shared secret before sending it to the Streaming Ingestion API. |

Configure the mechanism that matches your connector's integration model. Do not leave authentication without configuring your authentication type.

## Before you begin

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

First, you must create or select Adobe Developer Console credential required by your connector.

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
Authorization: Bearer {ACCESS_TOKEN}
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

### 1. Configure the shared secret

Create or obtain the shared secret required by the connector and configure it in the connector or webhook setup.

The secret must be:

- Stored securely.
- Available to the signing code at runtime.
- Excluded from source control and logs.
- Rotated according to your security policy.

<!--

Publishing note: Confirm the exact configuration field names and the supported secret-rotation behavior before publishing this section.

-->

### 2. Serialize the event

Serialize the event before calculating the signature.

The signature must be calculated from the same serialized message that the connector sends in the request body.

`serializedMessage = serialize(event)` Do not calculate the signature from one representation of the event and send another representation. Changes to whitespace, property order, escaping, encoding, or line endings can cause signature validation to fail.

### 3. Calculate the HMAC-SHA256 signature

Calculate the HMAC-SHA256 value using:

Key: The configured shared secret.

Message: The serialized request body.

signature = HMAC-SHA256(secret, serializedMessage)

<!--
Publishing note: Confirm whether the signature must be encoded as lowercase hexadecimal, uppercase hexadecimal, or Base64. The current ticket example uses a hexadecimal-looking value, but the required output encoding must be confirmed by Engineering.

-->

### 4. Add the HMAC header

Add the calculated signature to the request using the following header:

```json
{ 
     "x-hmac-sha256": "5f2c8b7e0d9c3a4e6b1f2d3c4a5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3" 
} 
```

POST <streaming-ingestion-endpoint> Content-Type: application/json x-hmac-sha256: {CALCULATED_SIGNATURE}

<serialized-message> The header value must represent the HMAC-SHA256 calculation for the exact request body sent to Adobe.

### 5. Send the request

Send the signed request over HTTPS to the Streaming Ingestion API endpoint.

The Streaming Ingestion API verifies the signature before processing the event. Requests with a missing or invalid signature are rejected.

### 6. Rotate the secret safely

When rotating a secret:

The following is a generic sequence, subject to confirmation of the actual Streaming SDK behavior:

Create a new secret in the credential-management system.
Keep the existing secret active while the new secret is being deployed, if overlapping secrets are supported.
Update the connector configuration with the new secret.
Deploy or save the configuration.
Send a test request and verify that authentication succeeds.
Monitor for authentication failures, then revoke the old secret after all connector instances use the new one.

<!-- Publishing note: Confirm whether the Streaming SDK HMAC implementation supports simultaneous current and previous secrets during rotation. -->

## Verify the connector

Test the connector with both successful and unsuccessful authentication scenarios.

>[!BEGINTABS]

>[!TAB OAuth test scenarios]

| Test | Expected result |
| --- | --- |
| Request with a valid access token | The event is accepted and processed. |
| Request without an access token | The request is rejected. |
| Request with an expired access token | The request is rejected or the connector obtains a new token and retries according to its retry policy. |
| Request with an invalid access token | The request is rejected. |
| Request with insufficient scopes | The request is rejected. |
| Request after credential rotation | The connector obtains and uses the new credential successfully. |

>[!TAB HMAC test scenarios]

| Test | Expected result |
| --- | --- |
| Request with a valid signature and current secret | The event is accepted and processed. |
| Request without `x-hmac-sha256` | The request is rejected. |
| Request with an invalid signature | The request is rejected. |
| Request signed with the wrong secret | The request is rejected. |
| Request body modified after signature generation | The request is rejected. |
| Request signed with a valid previous secret during rotation | The result follows the documented secret-rotation behavior. |
| Request signed with a removed secret | The request is rejected. |

Record the following for each test:

- Request method and endpoint.
- Request headers, with secrets and tokens redacted.
- Serialized request body.
- Authentication mechanism used.
- Response status and body.
- Timestamp and correlation or trace identifier, if available.
- Whether the event was ingested successfully.

>[!ENDTABS]

## Troubleshooting

### OAuth authentication failures

Check the following:

- The access token was generated for the correct Adobe organization and environment.
- The client ID and client secret belong to the configured credential.
- The requested scopes are correct.
- The access token has not expired.
- The token is sent using the Authorization: Bearer scheme.
- The connector is using the correct token endpoint.
- The credential has access to the required API or product profile.

### HMAC authentication failures

Check the following:

- The `x-hmac-sha256` header is present.
- The header name and value are spelled correctly.
- The connector is using the correct secret.
- The signature is calculated with HMAC-SHA256.
- The signature is calculated over the exact serialized request body.
- The request body is not reformatted after the signature is calculated.
- The required signature encoding and letter case are correct.
- The connector is using the correct current or previous secret during rotation.
- The secret is available to the runtime and has not been truncated or altered.

## Submission requirements

## Related documentation