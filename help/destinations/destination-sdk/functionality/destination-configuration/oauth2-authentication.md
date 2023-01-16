---
description: This page describes the various OAuth 2 authentication flows supported by Destination SDK, and provides instructions to set up OAuth 2 authentication for your destination.
title: OAuth 2 authentication
exl-id: 280ecb63-5739-491c-b539-3c62bd74e433
---
# OAuth 2 authentication 

## Overview {#overview}

Use Destination SDK to allow Adobe Experience Platform to connect to your destination by using the [OAuth 2 authentication framework](https://tools.ietf.org/html/rfc6749).

This page describes the various OAuth 2 authentication flows supported by Destination SDK, and provides instructions to set up OAuth 2 authentication for your destination.

## How to add OAuth 2 authentication details to your destination configuration {#how-to-setup}

### Prerequisites in your system {#prerequisites}

As a first step, you must create an app in your system for Adobe Experience Platform, or otherwise register Experience Platform in your system. The goal is to generate a client ID and client secret, which are needed to authenticate Experience Platform to your destination. As part of this configuration in your system, you need the Adobe Experience Platform OAuth 2 redirect/callback URLs, which you can get from the list below.

* `https://platform-va7.adobe.io/data/core/activation/oauth/api/v1/callback`
* `https://platform-nld2.adobe.io/data/core/activation/oauth/api/v1/callback`
* `https://platform-aus5.adobe.io/data/core/activation/oauth/api/v1/callback`

>[!IMPORTANT]
>
>The step to register a redirect/callback URL for Adobe Experience Platform in your system is required only for the [OAuth 2 with Authorization Code](./oauth2-authentication.md#authorization-code) grant type. For the other two supported grant types (password and client credentials), you can skip this step.

At the end of this step, you should have:
* A client ID;
* A client secret;
* Adobe's callback URL (for the authorization code grant).

### What you need to do in Destination SDK {#to-do-in-destination-sdk}

To set up OAuth 2 authentication for your destination in Experience Platform, you must add your OAuth 2 details to the [destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md), under the `customerAuthenticationConfigurations` parameter. See [customer authentication](../../functionality/destination-configuration/customer-authentication.md) for detailed examples. Specific instructions about which fields you need to add to your configuration template, depending on your OAuth 2 authentication grant type, are further below on this page.

## Supported OAuth 2 grant types {#oauth2-grant-types}

Experience Platform supports the three OAuth 2 grant types in the table below. If you have a custom OAuth 2 setup, Adobe is able to support it with the help of custom fields in your integration. Refer to the sections for each grant type for more information.

>[!IMPORTANT]
>
>* You provide the input parameters as instructed in the sections below. Adobe-internal systems connect to your platform's authentication system and grab output parameters, which are used to authenticate the user and maintain authentication to your destination.
>* The input parameters highlighted in bold in the table are required parameters in the OAuth 2 authentication flow. The other parameters are optional. There are other custom input parameters that are not shown here, but are described at length in the sections [Customize your OAuth 2 configuration](#customize-configuration) and [Access token refresh](#access-token-refresh). 

|OAuth 2 Grant | Inputs | Outputs |
|---------|----------|---------|
| Authorization Code | <ul><li><b>clientId</b></li><li><b>clientSecret</b></li><li>scope</li><li><b>authorizationUrl</b></li><li><b>accessTokenUrl</b></li><li>refreshTokenUrl</li></ul> | <ul><li><b>accessToken</b></li><li>expiresIn</li><li>refreshToken</li><li>tokenType</li></ul> |
| Password | <ul><li><b>clientId</b></li><li><b>clientSecret</b></li><li>scope</li><li><b>accessTokenUrl</b></li><li><b>username</b></li><li><b>password</b></li></ul> | <ul><li><b>accessToken</b></li><li>expiresIn</li><li>refreshToken</li><li>tokenType</li></ul> |
| Client Credential | <ul><li><b>clientId</b></li><li><b>clientSecret</b></li><li>scope</li><li><b>accessTokenUrl</b></li></ul> | <ul><li><b>accessToken</b></li><li>expiresIn</li><li>refreshToken</li><li>tokenType</li></ul> |

{style="table-layout:auto"}

The above table lists the fields that are used in standard OAuth 2 flows. In addition to these standard fields, various partner integrations may require additional inputs and outputs. Adobe has designed a flexible OAuth 2 authentication/authorization framework for Destination SDK that can handle variations to the above standard fields pattern while supporting a mechanism to automatically regenerate invalid outputs, such as expired access tokens.

The output in all cases includes an access token, which is used by Experience Platform to authenticate and maintain authentication to your destination.

The system that Adobe has designed for OAuth 2 authentication:
* Supports all three OAuth 2 grants while accounting for any variations in them, such as additional data fields, non-standard API calls, and more.
* Supports access tokens with varying lifetime values, be it 90 days, 30 minutes, or any other lifetime value that you specify.
* Supports OAuth 2 authorization flows with or without refresh tokens.

## OAuth 2 with Authorization Code {#authorization-code}

If your destination supports a standard OAuth 2.0 Authorization Code flow (read the [RFC standards specs](https://tools.ietf.org/html/rfc6749#section-4.1)) or a variation of it, consult the required and optional fields below:

|OAuth 2 Grant | Inputs | Outputs |
|---------|----------|---------|
| Authorization Code | <ul><li><b>clientId</b></li><li><b>clientSecret</b></li><li>scope</li><li><b>authorizationUrl</b></li><li><b>accessTokenUrl</b></li><li>refreshTokenUrl</li></ul> | <ul><li><b>accessToken</b></li><li>expiresIn</li><li>refreshToken</li><li>tokenType</li></ul> |

{style="table-layout:auto"}

To set up this authentication method for your destination, add the following lines to your configuration, in the `/destinations` [endpoint](./destination-configuration.md):

``` json

{
//...
  "customerAuthenticationConfigurations": [
    {
      "authType": "OAUTH2",
      "grant": "OAUTH2_AUTHORIZATION_CODE",
      "accessTokenUrl": "https://api.moviestar.com/OAuth/access_token",
      "authorizationUrl": "https://www.moviestar.com/dialog/OAuth",
      "refreshTokenUrl": "https://api.moviestar.com/OAuth/refresh_token",
      "clientId": "Experience-Platform-client-id",
      "clientSecret": "Experience-Platform-client-secret",
      "scope": ["read", "write"]
    }
  ]
//...
}

```

|Parameter | Type | Description|
|---------|----------|------|
|`authType` | String | Use "OAUTH2". |
|`grant` | String | Use "OAUTH2_AUTHORIZATION_CODE". |
|`accessTokenUrl` | String | The URL on your side, which issues access tokens and, optionally, refresh tokens.|
|`authorizationUrl` | String | The URL of your authorization server, where you redirect the user to log in to your application. |
|`refreshTokenUrl` | String | *Optional.* The URL on your side, which issues refresh tokens. Often, the `refreshTokenUrl` is the same as the `accessTokenUrl`. |
|`clientId` | String | The client ID that your system assigns to Adobe Experience Platform. |
|`clientSecret` | String | The client secret that your system assigns to Adobe Experience Platform. |
|`scope` | List of Strings | *Optional*. Set the scope of what the access token allows Experience Platform to perform on your resources. Example: "read, write". |

{style="table-layout:auto"}

## OAuth 2 with Password Grant

For the OAuth 2 Password grant (read the [RFC standards specs](https://tools.ietf.org/html/rfc6749#section-4.3)), Experience Platform requires the user's username and password. In the authentication flow, Experience Platform exchanges these credentials for an access token and, optionally, a refresh token.
Adobe makes use of the standard inputs below to simplify destination configuration, with the ability to override values:

|OAuth 2 Grant | Inputs | Outputs |
|---------|----------|---------|
|Password | <ul><li><b>clientId</b></li><li><b>clientSecret</b></li><li>scope</li><li><b>accessTokenUrl</b></li><li><b>username</b></li><li><b>password</b></li></ul> | <ul><li><b>accessToken</b></li><li>expiresIn</li><li>refreshToken</li><li>tokenType</li></ul> |

{style="table-layout:auto"}

>[!NOTE]
>
> You don't need to add any parameters for `username` and `password` in the configuration below. When you add `"grant": "OAUTH2_PASSWORD"` in the destination configuration, the system will request the user to provide a username and password in the Experience Platform UI, when they authenticate to your destination.

To set up this authentication method for your destination, add the following lines to your configuration, in the `/destinations` [endpoint](./destination-configuration.md):

``` json

{
//...
  "customerAuthenticationConfigurations": [
    {
      "authType": "OAUTH2",
      "grant": "OAUTH2_PASSWORD",
      "accessTokenUrl": "https://api.moviestar.com/OAuth/access_token",
      "clientId": "Experience-Platform-client-id",
      "clientSecret": "Experience-Platform-client-secret",
      "scope": ["read", "write"]
    }
  ]

```

|Parameter | Type | Description|
|---------|----------|------|
|`authType` | String | Use "OAUTH2". |
|`grant` | String | Use "OAUTH2_PASSWORD". |
|`accessTokenUrl` | String | The URL on your side, which issues access tokens and, optionally, refresh tokens.|
|`clientId` | String | The client ID that your system assigns to Adobe Experience Platform.  |
|`clientSecret` | String | The client secret that your system assigns to Adobe Experience Platform. |
|`scope` | List of Strings | *Optional*. Set the scope of what the access token allows Experience Platform to perform on your resources. Example: "read, write". |

{style="table-layout:auto"}

## OAuth 2 with Client Credentials Grant

You can configure an OAuth 2 Client Credentials (read the [RFC standards specs](https://tools.ietf.org/html/rfc6749#section-4.4)) destination, which supports the standard inputs and outputs listed below. You have the ability to customize the values. See [Customize your OAuth 2 configuration](./oauth2-authentication.md#customize-configuration) for details.

|OAuth 2 Grant | Inputs | Outputs |
|---------|----------|---------|
|Client Credentials | <ul><li><b>clientId</b></li><li><b>clientSecret</b></li><li>scope</li><li><b>accessTokenUrl</b></li></ul> | <ul><li><b>accessToken</b></li><li>expiresIn</li><li>refreshToken</li><li>tokenType</li></ul> |

{style="table-layout:auto"}

To set up this authentication method for your destination, add the following lines to your configuration, in the `/destinations` [endpoint](./destination-configuration.md):

``` json

{
//...
  "customerAuthenticationConfigurations": [
    {
      "authType": "OAUTH2",
      "grant": "OAUTH2_CLIENT_CREDENTIALS",
      "accessTokenUrl": "https://api.moviestar.com/OAuth/access_token",
      "refreshTokenUrl": "https://api.moviestar.com/OAuth/refresh_token",
      "clientId": "Experience-Platform-client-id",
      "clientSecret": "Experience-Platform-client-secret",
      "scope": ["read", "write"]
    }
  ]
//...
}

```

|Parameter | Type | Description|
|---------|----------|------|
|`authType` | String | Use "OAUTH2". |
|`grant` | String | Use "OAUTH2_CLIENT_CREDENTIALS". |
|`accessTokenUrl` | String | The URL of your authorization server, which issues an access token and an optional refresh token.|
|`refreshTokenUrl` | String | *Optional.* The URL on your side, which issues refresh tokens. Often, the `refreshTokenUrl` is the same as the `accessTokenUrl`. |
|`clientId` | String | The client ID that your system assigns to Adobe Experience Platform.  |
|`clientSecret` | String | The client secret that your system assigns to Adobe Experience Platform. |
|`scope` | List of Strings | *Optional*. Set the scope of what the access token allows Experience Platform to perform on your resources. Example: "read, write". |

{style="table-layout:auto"}

## Customize your OAuth 2 configuration {#customize-configuration}

The configurations described in the sections above describe standard OAuth 2 grants. However, the system designed by Adobe provides flexibility so you can use custom parameters for any variations in the OAuth 2 grant. To customize the standard OAuth 2 settings, use the `authenticationDataFields` parameters, as shown in the examples below.

### Example 1: Using `authenticationDataFields` to capture information coming from the authentication response {#example-1}

In this example, a destination platform has refresh tokens that expire after a certain amount of time. In this case, the partner sets up the `refreshTokenExpiration` custom field to get the refresh token expiration from the `refresh_token_expires_in` field in the API response. 

```json
{
   "customerAuthenticationConfigurations":[
      {
         "authType":"OAUTH2",
         "options":{
            
         },
         "grant":"OAUTH2_AUTHORIZATION_CODE",
         "accessTokenUrl":"https://api.moviestar.com/OAuth/access_token",
         "authorizationUrl":"https://api.moviestar.com/OAuth/authorization",
         "scope":[
            "read",
            "write",
            "delete"
         ],
         "refreshTokenUrl":"https://api.moviestar.com/OAuth/accessToken",
         "clientSecret":"client-secret-here",
         "authenticationDataFields":[
            {
               "name":"refreshTokenExpiration",
               "title":"Refresh Token Expires In",
               "description":"Time in seconds when the refresh token will expire",
               "type":"string",
               "isRequired":false,
               "source":"CUSTOMER",
               "authenticationResponsePath":"refresh_token_expires_in"
            }
         ]
      }
   ]
}  


```

### Example 2: Using `authenticationDataFields` to provide a special refresh token {#example-2}

In this example, a partner sets up their destination to provide a special refresh token. Furthermore, the expiration date for access tokens is not returned in the API response so they can hardcode a default value, in this case 3600 seconds.

```json
      "authenticationDataFields": [
        {
            "name": "refreshToken",
            "value": "special_refresh_token"
        },
        {
            "name": "expiresIn",
            "value": 3600
        } 
      ]
```

### Example 3: The user inputs client ID and client secret when they configure the destination {#example-3}

In this example, instead of creating a global client ID and client secret as shown in the section [Prerequisites in your system](./oauth2-authentication.md#prerequisites), the customer is required to input client ID, client secret, and account ID (the ID that the customer uses to log into the destination)

```json

{
    //...
    "customerAuthenticationConfigurations": [
        {
            "authType": "OAUTH2",
            "grant": "OAUTH2_CLIENT_CREDENTIALS",
            "authenticationDataFields": [
                {
                    "name": "clientId",
                    "title": "Client ID",
                    "description": "Client ID",
                    "type": "string",
                    "isRequired": true,
                    "source": "CUSTOMER"
                },
                {
                    "name": "clientSecret",
                    "title": "Client Secret",
                    "description": "Client Secret",
                    "type": "string",
                    "isRequired": true,
                    "format": "password",
                    "source": "CUSTOMER"
                },
                {
                    "name": "moviestarId",
                    "title": "Moviestar ID",
                    "description": "Moviestar ID",
                    "type": "string",
                    "isRequired": true,
                    "source": "CUSTOMER"
                }
            ],
            "accessTokenRequest": {
                "destinationServerType": "URL_BASED",
                "urlBasedDestination": {
                    "url": {
                        "templatingStrategy": "PEBBLE_V1",
                        "value": "https://{{ authData.moviestarId }}.yourdestination.com/identity/oauth/token"
                    }
                },
                "httpTemplate": {
                    "requestBody": {
                        "templatingStrategy": "PEBBLE_V1",
                        "value": "{{ formUrlEncode('grant_type', 'client_credentials', 'client_id', authData.clientId, 'client_secret', authData.clientSecret) | raw }}"
                    },
                    "httpMethod": "POST",
                    "contentType": "application/x-www-form-urlencoded"
                },
                "responseFields": [
                    {
                        "templatingStrategy": "PEBBLE_V1",
                        "value": "{{ response.body.access_token }}",
                        "name": "accessToken"
                    },
                    {
                        "templatingStrategy": "PEBBLE_V1",
                        "value": "{{ response.body.scope }}",
                        "name": "scope"
                    },
                    {
                        "templatingStrategy": "PEBBLE_V1",
                        "value": "{{ response.body.token_type }}",
                        "name": "tokenType"
                    },
                    {
                        "templatingStrategy": "PEBBLE_V1",
                        "value": "{{ response.body.expires_in }}",
                        "name": "expiresIn"
                    }
                ]
            }
        }
    ]
//...
}

```



You can use the following parameters in `authenticationDataFields` to customize your OAuth 2 configuration:

|Parameter | Type | Description|
|---------|----------|------|
|`authenticationDataFields.name` | String | The name of the custom field. |
|`authenticationDataFields.title` | String | A title that you can provide for the custom field. |
|`authenticationDataFields.description` | String | A description of the custom data field that you set up. |
|`authenticationDataFields.type` | String | Defines the type of the custom data field. <br> Accepted values: `string`, `boolean`, `integer` |
|`authenticationDataFields.isRequired` | Boolean | Specifies whether the custom data field is required in the authentication flow. |
|`authenticationDataFields.format` | String | When you select `"format":"password"`, Adobe encrypts the value of the authentication data field. When used with `"fieldType": "CUSTOMER"`, this also hides the input in the UI when the user types into the field. |
|`authenticationDataFields.fieldType` | String | Indicates whether the input comes from the partner (you) or from the user, when they set up your destination in Experience Platform.  |
|`authenticationDataFields.value` | String. Boolean. Integer | The value of the custom data field. The value matches the chosen type from `authenticationDataFields.type`.  |
|`authenticationDataFields.authenticationResponsePath` | String | Indicates which field from the API response path you are referencing. |

{style="table-layout:auto"}

## Access token refresh {#access-token-refresh}

Adobe has designed a system which refreshes expired access tokens without requiring the user to log back into your platform. The system is able to generate a new token so that the activation to your destination will continue seamlessly for the customer.

To set up access token refresh, you may need to configure a templatized HTTP request that allows Adobe to get a new access token, using a refresh token. If the access token has expired, Adobe takes the templated request provided by you, adding the parameters you supplied. Use the `accessTokenRequest` parameter to configure an access token refresh mechanism.


```json

{
   "customerAuthenticationConfigurations":[
      {
         "authType":"OAUTH2",
         "grant":"OAUTH2_CLIENT_CREDENTIALS",
         "accessTokenRequest":{
            "destinationServerType":"URL_BASED",
            "urlBasedDestination":{
               "url":{
                  "templatingStrategy":"PEBBLE_V1",
                  "value":"https://{{authData.customerId}}.yourdestination.com/identity/oauth/token"
               }
            },
            "httpTemplate":{
               "requestBody":{
                  "templatingStrategy":"PEBBLE_V1",
                  "value":"{{ formUrlEncode('grant_type', 'client_credentials', 'client_id', authData.clientId, 'client_secret', authData.clientSecret) | raw }}"
               },
               "httpMethod":"POST",
               "contentType":"application/x-www-form-urlencoded",
               "headers":[
                  
               ]
            },
            "responseFields":[
               {
                  "templatingStrategy":"PEBBLE_V1",
                  "value":"{{ response.body.expires_in }}",
                  "name":"expiresIn"
               },
               {
                  "templatingStrategy":"PEBBLE_V1",
                  "value":"{{ response.body.access_token }}",
                  "name":"accessToken"
               }
            ],
            "validations":[
               {
                  "name":"access_token validation",
                  "actualValue":{
                     "templatingStrategy":"PEBBLE_V1",
                     "value":"{{response.body.access_token is empty }}"
                  },
                  "expectedValue":{
                     "templatingStrategy":"PEBBLE_V1",
                     "value":"false"
                  }
               },
               {
                  "name":"response status",
                  "actualValue":{
                     "templatingStrategy":"PEBBLE_V1",
                     "value":"{{ response.status }}"
                  },
                  "expectedValue":{
                     "templatingStrategy":"PEBBLE_V1",
                     "value":"200"
                  }
               }
            ]
         }
      }
   ]
}


```

You can use the following parameters in `accessTokenRequest` to customize your token refresh process:

|Parameter | Type | Description|
|---------|----------|------|
|`accessTokenRequest.destinationServerType` | String | Use `URL_BASED`. |
|`accessTokenRequest.urlBasedDestination.url.templatingStrategy` | String | <ul><li>Use `PEBBLE_V1` if you use templates for the value in `accessTokenRequest.urlBasedDestination.url.value`.</li><li> Use `NONE` if the value in the field `accessTokenRequest.urlBasedDestination.url.value` is a constant. </li></li>  |
|`accessTokenRequest.urlBasedDestination.url.value` | String | The URL where Experience Platform requests the access token. |
|`accessTokenRequest.httpTemplate.requestBody.templatingStrategy` | String | <ul><li>Use `PEBBLE_V1` if you use templates for the values in `accessTokenRequest.httpTemplate.requestBody.value`.</li><li> Use `NONE` if the value in the field `accessTokenRequest.httpTemplate.requestBody.value` is a constant. </li></li> |
|`accessTokenRequest.httpTemplate.requestBody.value` | String | Use templating language to customize fields in the HTTP request to the access token endpoint. For information on how to use templating to customize fields, refer to the [templating conventions](./oauth2-authentication.md#templating-conventions) section. |
|`accessTokenRequest.httpTemplate.httpMethod` | String | Specifies the HTTP method used to call your access token endpoint. In most cases, this value is `POST`. |
|`accessTokenRequest.httpTemplate.contentType` | String | Specifies the content type of the HTTP call to your access token endpoint. <br> For example: `application/x-www-form-urlencoded` or `application/json`. |
|`accessTokenRequest.httpTemplate.headers` | String | Specifies if any headers should be added to the HTTP call to your access token endpoint. |
|`accessTokenRequest.responseFields.templatingStrategy` | String | <ul><li>Use `PEBBLE_V1` if you use templates for the values in `accessTokenRequest.responseFields.value`.</li><li> Use `NONE` if the value in the field `accessTokenRequest.responseFields.value` is a constant. </li></li> |
|`accessTokenRequest.responseFields.value` | String | Use templating language to access fields in the HTTP response from your access token endpoint. For information on how to use templating to customize fields, refer to the [templating conventions](./oauth2-authentication.md#templating-conventions) section. |
|`accessTokenRequest.validations.name` | String | Indicates the name you provided for this validation. |
|`accessTokenRequest.validations.actualValue.templatingStrategy` | String | <ul><li>Use `PEBBLE_V1` if you use templates for the values in `accessTokenRequest.validations.actualValue.value`.</li><li> Use `NONE` if the value in the field `accessTokenRequest.validations.actualValue.value` is a constant. </li></li>  |
|`accessTokenRequest.validations.actualValue.value` | String | Use templating language to access fields in the HTTP response. For information on how to use templating to customize fields, refer to the [templating conventions](./oauth2-authentication.md#templating-conventions) section. |
|`accessTokenRequest.validations.expectedValue.templatingStrategy` | String | <ul><li>Use `PEBBLE_V1` if you use templates for the values in `accessTokenRequest.validations.expectedValue.value`.</li><li> Use `NONE` if the value in the field `accessTokenRequest.validations.expectedValue.value` is a constant. </li></li>  |
|`accessTokenRequest.validations.expectedValue.value` | String | Use templating language to access fields in the HTTP response. For information on how to use templating to customize fields, refer to the [templating conventions](./oauth2-authentication.md#templating-conventions) section. |

{style="table-layout:auto"}

## Templating conventions {#templating-conventions}

Depending on your authentication customization, you might need to access data fields in the authentication response, as shown in the previous section. To do that, please familiarize yourself with the [Pebble templating language](https://pebbletemplates.io/) used by Adobe and refer to the templating conventions below to customize your OAuth 2 implementation.


|Prefix | Description | Example |
|---------|----------|---------|
| authData | Access any partner or customer data field's value. | ``{{ authData.accessToken }}`` |
| response.body | HTTP response body | ``{{ response.body.access_token }}`` |
| response.status | HTTP response status | ``{{ response.status }}`` |
| response.headers | HTTP response headers | ``{{ response.headers.server[0] }}`` |
| userContext | Access information about the current authentication attempt | <ul><li>`{{ userContext.sandboxName }} `</li><li>`{{ userContext.sandboxId }} `</li><li>`{{ userContext.imsOrgId }} `</li><li>`{{ userContext.client }} // the client executing the authentication attempt `</li></ul> |

{style="table-layout:auto"}

## Next steps {#next-steps}

By reading this article, you now have an understanding of the OAuth 2 authentication patterns supported by Adobe Experience Platform and know how to configure your destination with OAuth 2 authentication support. Next, you can set up your OAuth 2-supported destination using Destination SDK. Read [Use Destination SDK to configure your destination](../../guides/configure-destination-instructions.md) for next steps.
