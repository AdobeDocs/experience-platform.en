---
title: Secrets
description: Learn the fundamentals of how to configure secrets for use in event forwarding.
---
# Secrets

In the Reactor API, a secret is a resource that represents an authentication credential. Secrets are used in event forwarding to authenticate to another system for secure data exchange. Therefore, secrets can only be created within event forwarding properties (properties whose `platform` attribute is set to `edge`).

There are currently three supported secret types denoted in the `type_of` attribute:

| Secret type | Description |
| --- | --- |
| `token` | A single string of characters that is known and understood by both systems. |
| `simple-http` | Contains two string attributes for a username and password, respectively. |
| `oauth2` | Contains several attributes to support the [OAuth](https://datatracker.ietf.org/doc/html/rfc6749) authentication spec. Event forwarding will ask you for the required information, then will handle the renewal of these tokens for you on a specified interval |

{style="table-layout:auto"}

This guide provides a high-level overview of how to configure secrets for use in event forwarding. For detailed guidance on how to manage secrets in the Reactor API, including example JSON of a secret's structure, refer to the [secrets endpoint guide](../endpoints/secrets.md).

## Credentials

Each secret contains a `credentials` attribute that holds its respective credential values. Each type of secret has different required attributes, as shown in the sections below.

### `token`

Secrets with a `type_of` value of `token` only require a single attribute under `credentials`:

| Credential attribute | Data type | Description |
| --- | --- | --- |
| `token` | String | A secret token that is understood by the destination system. |

{style="table-layout:auto"}

The token is stored as a static value, and therefore the secret's `expires_at` and `refresh_at` properties are set to `null` when the secret is created.

### `simple-http`

Secrets with a `type_of` value of `simple-http` require the following attributes under `credentials`:

| Credential attribute | Data type | Description |
| --- | --- | --- |
| `username` | String | A username. |
| `password` | String | A password. This value is not included in the API response. |

{style="table-layout:auto"}

When the secret is created, the two attributes are exchanged with a BASE64 encoding of `username:password`. After the exchange, the secret's `expires_at` and `refresh_at` properties are set to `null`.

### `oauth2`

>[!NOTE]
>
>Currently, only the [Client Credentials grant type](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) is supported for OAuth secrets.

Secrets with a `type_of` value of `oauth2` require the following attributes under `credentials`:

| Credential attribute | Data type | Description |
| --- | --- | --- |
| `client_id` | String | The client ID for the OAuth integration. |
| `client_secret` | String | The client secret for the OAuth integration. This value is not included in the API response. |
| `authorization_url` | String | The authorization URL for the OAuth integration. |
| `refresh_offset` | Integer | *(Optional)* The value, in seconds, to offset the refresh operation by. If this attribute is omitted when creating the secret, the value is implicitly set to `14400` (four hours) instead. |
| `options` | Object | *(Optional)* Specifies additional options for the OAuth integration:<ul><li>`scope`: A string that represents the [OAuth 2.0 scope](https://oauth.net/2/scope/) for the credentials.</li><li>`audience`: A string that represents an [Auth0 access token](https://auth0.com/docs/protocols/protocol-oauth2).</li></ul> |

When an `oauth2` secret is created or updated, the `client_id` and `client_secret` (and possibly `options`) are exchanged in a POST request to the `authorization_url`, according to the Client Credentials flow of the OAuth protocol. If the authorization service responds with `200 OK` and a JSON response body, the body is parsed and `access_token` and `expires_in` are included in the Reactor API response.

>[!NOTE]
>
>It is expected that the authorization service response body is compatible with the OAuth protocol.

A credentials exchange is considered successful under the following conditions:

* `expires_in` is greater than `28800` (eight hours).
* `refresh_offset` is less than the value of `expires_in` minus `14400`. For example, if `expires_in` is `36000` (ten hours), and the `refresh_offset` is `28800` (eight hours), the exchange is considered failed because `28800` is less than `36000` - `14400` (`21600`).

If the the exchange is successful, the secret's status attribute is set to `succeeded` and values for `expires_at` and `refresh_at` are set:

* `expires_at` is the current UTC time plus the value of `expires_in`.
* `refresh_at` is the current UTC time plus the value of `expires_in`, minus the value of `refresh_offset`.

If the exchange fails for any reason, the `status_details` attribute in the `meta` object updates with relevant information.

### Refreshing an `oauth2` secret

If an `oauth2` secret has been assigned to an environment and its status is `succeeded` (the credentials were exchanged successfully), a new exchange is performed automatically on `refresh_at`.

If the exchange is successful, the `refresh_status` attribute in the `meta` object is set to `succeeded` while `expires_at`, `refresh_at`, and `activated_at` are updated accordingly.

If the exchange fails, the operation is attempted three more times with the last attempt no more than two hours before the access token expires. If all attempts fail, the `refresh_status_details` attribute from the `meta` object updates with relevant details.

## Environment relationship

When you create a secret, you must specify the [environment](../endpoints/environments.md) in which it will exist. Secrets are immediately deployed to the environment in which they are created.

A secret can only be associated with one environment. Once the relationship between a secret and an environment is established, the secret cannot be cleared from the environment, and the secret cannot be associated with a different environment.

>[!NOTE]
>
>The only exception to this rule is if the environment in question is deleted. In this case, the relationship is cleared and the secret can be assigned to a different environment.  

After a secret's credentials have been successfully exchanged, for a secret to be associated with an environment, the exchange artifact (the token string for `token`, the BASE64 encoded string for `simple-http`, or the access token for `oauth2`) is securely saved on the environment.

After the exchange artifact is successfully saved on the environment, the secret's `activated_at` attribute is set to the current UTC time, and can now be referenced using a data element.

## Referencing secrets

In order to reference a secret, you must create a data element of type "[!UICONTROL Secret]" (provided by the [Core extension](../../extensions/web/core/overview.md)). When configuring this data element, you are prompted to indicate which secret to use for each environment. You can then create rules that reference a secret data element, such as within the header for an HTTP call.

Event forwarding makes a best attempt to prevent you from referencing secrets that do not exist in a given environment.

## Secret data element

A secret can be used in a library only through a data element of type "[!UICONTROL Secret]", available in the [!UICONTROL Core] extension for event forwarding properties. This data element type can configure secrets for each environment: [!UICONTROL Development], [!UICONTROL Staging], and [!UICONTROL Production].

![Secret data element](../../images/api/guides/secrets/data-element.png)

>[!NOTE]
>
>In order to add a secret data element to a library, you must have at least one `succeeded` secret associated with the environment on which the library is being built. For example, if a library has a secret data element that does not have a `succeeded` secret configured for the [!UICONTROL Staging Secret] section, attempting to build that library in the staging environment will result in an error.

At runtime, the secret data element is replaced with the corresponding secret exchange artifact saved on the environment.

## Next steps

This guide covered the fundamentals of working with secrets in the Reactor API. For details on how to manage secrets using API calls, see the [secrets endpoint guide](../endpoints/secrets.md).
