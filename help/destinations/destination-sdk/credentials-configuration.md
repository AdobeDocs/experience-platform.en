---
description: This configuration determines how Adobe Experience Platform users authenticate to your destination endpoint to activate data.
title: Configuration options for credentials in Destination SDK
exl-id: 33eaab24-f867-4744-b424-4ba71727373c
---
# Authentication configuration {#credentials}

## Supported authentication types {#supported-authentication-types}

Adobe Experience Platform supports several authentication types:

* Bearer authentication
* OAuth 2 with authorization code
* OAUth 2 with password grant
* OAuth 2 with client credentials grant

For the various supported OAuth 2 flows, as well as for custom OAuth 2 support, read the Destination SDK documentation on [OAuth 2 authentication](./oauth2-authentication.md).

You can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint. Refer to the [customer authentication configurations section](./destination-configuration.md#customer-authentication-configurations) in the destination configuration article.

## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you *do not* need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

Use the `activation/authoring/credentials` API endpoint and select `PLATFORM_AUTHENTICATION` in the [destination configuration](./destination-configuration.md#destination-delivery) if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the `/credentials` API endpoint. Read [Credentials API endpoint operations](./credentials-configuration-api.md) for a complete list of operations you can perform on the `/credentials` endpoint.
