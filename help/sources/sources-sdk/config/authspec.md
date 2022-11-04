---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configure authentication specifications for Self-Serve Sources (Batch SDK)
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Self-Serve Sources (Batch SDK).
exl-id: 68ed22fe-1f22-46d2-9d58-72ad8a9e6b98
---
# Configure authentication specifications for Self-Serve Sources (Batch SDK)

Authentication specifications define how Adobe Experience Platform users can connect to your source.

The `authSpec` array contains information on the authentication parameters required to connect a source to Platform. Any given source can support multiple different types of authentication.

## Authentication specifications

Self-Serve Sources (Batch SDK) supports OAuth 2 refresh codes and basic authentication. See the tables below for guidance on using an OAuth 2 refresh code and basic authentication

### OAuth 2 refresh code

An OAuth 2 refresh code allows for secure access to an application by generating a temporary access token and a refresh token. The access token allows you to securely access your resources without having to provide other credentials, while the refresh token allows you to generate a new access token, once the access token expires.

```json
{
  "name": "OAuth2 Refresh Code",
  "type": "OAuth2RefreshCode",
  "spec": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "description": "Define auth params required for connecting to generic rest using oauth2 authorization code.",
    "properties": {
      "authorizationTestUrl": {
        "description": "Authorization test url to validate accessToken.",
        "type": "string"
      },
      "clientId": {
        "description": "Client id of user account.",
        "type": "string"
      },
      "clientSecret": {
        "description": "Client secret of user account.",
        "type": "string",
        "format": "password"
      },
      "accessToken": {
        "description": "Access Token",
        "type": "string",
        "format": "password"
      },
      "refreshToken": {
        "description": "Refresh Token",
        "type": "string",
        "format": "password"
      },
      "expirationDate": {
        "description": "Date of token expiry.",
        "type": "string",
        "format": "date",
        "uiAttributes": {
          "hidden": true
        }
      },
      "accessTokenUrl": {
        "description": "Access token url to fetch access token.",
        "type": "string"
      },
      "requestParameterOverride": {
        "type": "object",
        "description": "Specify parameter to override.",
        "properties": {
          "accessTokenField": {
            "description": "Access token field name to override.",
            "type": "string"
          },
          "refreshTokenField": {
            "description": "Refresh token field name to override.",
            "type": "string"
          },
          "expireInField": {
            "description": "ExpireIn field name to override.",
            "type": "string"
          },
          "authenticationMethod": {
            "description": "Authentication method override.",
            "type": "string",
            "enum": [
              "GET",
              "POST"
            ]
          },
          "clientId": {
            "description": "ClientId field name override.",
            "type": "string"
          },
          "clientSecret": {
            "description": "ClientSecret field name override.",
            "type": "string"
          }
        }
      }
    },
    "required": [
      "accessToken"
    ]
  }
}
```

| Property| Description | Example |
| --- | --- | --- |
| `authSpec.name` | Displays the name of the supported authentication type. | `oAuth2-refresh-code` |
| `authSpec.type` | Defines the type of authentication supported by the source. | `oAuth2-refresh-code` |
| `authSpec.spec` | Contains information on the authentication's schema, data type, and properties. |
| `authSpec.spec.$schema` | Defines the schema used for the authentication. | `http://json-schema.org/draft-07/schema#` |
| `authSpec.spec.type` | Defines the data type of the schema. | `object` |
| `authSpec.spec.properties` | Contains information on the credentials used for the authentication. |
| `authSpec.spec.properties.description` | Displays a brief description on the credential. |
| `authSpec.spec.properties.type` | Defines the data type of the credential. | `string` |
| `authSpec.spec.properties.clientId` | The client ID associated with your application. The client ID is used in conjunction with your client secret to retrieve your access token. |
| `authSpec.spec.properties.clientSecret` | The client secret associated with your application. The client secret is used in conjunction with your client ID to retrieve your access token. |
| `authSpec.spec.properties.accessToken` | The access token authorizes your secure access to your application. |
| `authSpec.spec.properties.refreshToken` | The refresh token is used to generate a new access token, when the access token expires. |
| `authSpec.spec.properties.expirationDate` | Defines the expiration date of the access token. |
| `authSpec.spec.properties.refreshTokenUrl` | The URL used to retrieve your refresh token. |
| `authSpec.spec.properties.accessTokenUrl` | The URL used to retrieve your refresh token. |
| `authSpec.spec.properties.requestParameterOverride` | Allows you to specify credential parameters to override when authenticating. |
| `authSpec.spec.required` | Displays the credentials required in order to authenticate. | `accessToken` |

{style="table-layout:auto"}


### Basic authentication

Basic authentication is an authentication type that allows you to access your application by using a combination of your account username and your account password.

```json
{
  "name": "Basic Authentication",
  "type": "BasicAuthentication",
  "spec": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "description": "defines auth params required for connecting to rest service.",
    "properties": {
      "username": {
        "description": "Username to connect rest endpoint.",
        "type": "string"
      },
      "password": {
        "description": "Password to connect rest endpoint.",
        "type": "string",
        "format": "password"
      }
    },
    "required": [
      "username",
      "password"
    ]
  }
}
```

| Property| Description | Example |
| --- | --- | --- |
| `authSpec.name` | Displays the name of the supported authentication type. | `Basic Authentication` |
| `authSpec.type` | Defines the type of authentication supported by the source. | `BasicAuthentication` |
| `authSpec.spec` | Contains information on the authentication's schema, data type, and properties. |
| `authSpec.spec.$schema` | Defines the schema used for the authentication. | `http://json-schema.org/draft-07/schema#` |
| `authSpec.spec.type` | Defines the data type of the schema. | `object` |
| `authSpec.spec.description` | Displays further information specific to your authentication type. |
| `authSpec.spec.properties` | Contains information on the credentials used for the authentication. |
| `authSpec.spec.properties.username` | The account username associated with your application. |
| `authSpec.spec.properties.password` | The account password associated with your application. |
| `authSpec.spec.required` | Specifies the fields required as mandatory values to be inputted in Platform. | `username` |

{style="table-layout:auto"}

## Example authentication specification

The following is an example of a completed authentication specification using a [[!DNL MailChimp Members]](../../tutorials/api/create/marketing-automation/mailchimp-members.md) source.

```json
  "authSpec": [
    {
      "name": "OAuth2 Refresh Code",
      "type": "OAuth2RefreshCode",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "Define auth params required for connecting to generic rest using oauth2 authorization code.",
        "properties": {
          "authorizationTestUrl": {
            "description": "Authorization test url to validate accessToken.",
            "type": "string"
          },
          "accessToken": {
            "description": "Access Token of mailChimp endpoint.",
            "type": "string",
            "format": "password"
          }
        },
        "required": [
          "accessToken"
        ]
      }
    },
    {
      "name": "Basic Authentication",
      "type": "BasicAuthentication",
      "spec": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "description": "defines auth params required for connecting to rest service.",
        "properties": {
          "username": {
            "description": "Username to connect mailChimp endpoint.",
            "type": "string"
          },
          "password": {
            "description": "Password to connect mailChimp endpoint.",
            "type": "string",
            "format": "password"
          }
        },
        "required": [
          "username",
          "password"
        ]
      }
    }
  ],
```

## Next steps

With your authentication specifications populated, you can proceed to configure the source specifications for the source that you want to integrate to Platform. See the the document on [configuring source specifications](./sourcespec.md) for more information.
