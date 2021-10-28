---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configure authentication specifications for Sources SDK
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Sources SDK.
---

# Configure authentication specifications for Sources SDK

Authentication specifications define how Adobe Experience Platform users can connect to your source.

The `authSpec` array contains information on the authentication parameters required to connect a source to Platform. Any given source can support multiple different types of authentication.

[!DNL Sources SDK] supports OAuth 2 refresh code and basic authentication.

## OAuth 2 refresh code


```json
{
  "name": "oAuth2-refresh-code",
  "type": "oAuth2-refresh-code",
  "spec": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "description": "defines auth params required for connecting to rest service using authorization flow.",
    "links": [
      {
        "rel": "specificationLink",
        "href": "https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"
      }
    ],
    "properties": {
      "clientId": {
        "description": "Client id of user app. Needed to generate accessToken post its expiry.",
        "type": "string"
      },
      "clientSecret": {
        "description": "Client secret of user app. Needed to generate accessToken post its expiry.",
        "type": "string",
        "format": "password"
      },
      "accessToken": {
        "description": "Access Token",
        "type": "string",
        "format": "password"
      },
      "refreshToken": {
        "description": "Refresh Token. Needed to generate accessToken once it expires.",
        "type": "string",
        "format": "password"
      },
      "expirationDate": {
        "description": "Date when accessToken will expire",
        "type": "string",
        "format": "date"
      },
      "refreshTokenUrl": {
        "description": "Refresh token url to fetch refresh token.",
        "type": "string"
      },
      "accessTokenUrl": {
        "description": "Access token url to fetch access token.",
        "type": "object"
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
| `authSpec.spec.properties.format` | Defines the format of the credential. | `format` |
| `authSpec.spec.properties.clientId` |
| `authSpec.spec.properties.clientSecret` |
| `authSpec.spec.properties.accessToken` |
| `authSpec.spec.properties.refreshToken` |
| `authSpec.spec.properties.expirationDate` |
| `authSpec.spec.properties.refreshTokenUrl` |
| `authSpec.spec.properties.accessTokenUrl` |
| `authSpec.spec.required` | Displays the credentials required in order to authenticate. | `accessToken` |

## Basic authentication

```json
{
  "name": "Basic Authentication",
  "type": "BasicAuthentication",
  "spec": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "description": "defines auth params required for connecting to rest service.",
    "properties": {
      "host": {
        "type": "string",
        "description": "Enter resource url host path"
      },
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
      "host",
      "username",
      "password"
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
| `authSpec.spec.properties.host` |
| `authSpec.spec.properties.username` |
| `authSpec.spec.properties.password` |
| `authSpec.spec.required` | Displays the credentials required in order to authenticate. | `host` |