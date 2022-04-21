---
description: Use the supported authentication configurations in Adobe Experience Platform Destination SDK to authenticate users and activate data to your destination endpoint.
title: Authentication configuration
exl-id: 33eaab24-f867-4744-b424-4ba71727373c
---
# Authentication configuration {#credentials}

## Supported authentication types {#supported-authentication-types}

The authentication configuration that you select determines how Experience Platform authenticates to your destination, in the Platform UI.

Adobe Experience Platform Destination SDK supports several authentication types:

* Bearer authentication
* (Beta) Amazon S3 authentication
* (Beta) Azure connection string
* (Beta) Azure service principal
* (Beta) SFTP with SSH key
* (Beta) SFTP with password
* OAuth 2 with authorization code
* OAUth 2 with password grant
* OAuth 2 with client credentials grant

You can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

Refer to the following sections for authentication configuration details for each type of destination:

* [Authentication configurations for streaming destinations](destination-configuration.md#customer-authentication-configurations)
* [Authentication configurations for file-based destinations](file-based-destination-configuration.md#customer-authentication-configurations)

## Bearer authentication {#bearer}

Bearer authentication is supported for streaming destinations in Experience Platform.

To set up bearer type authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
   "customerAuthenticationConfigurations":[
      {
         "authType":"BEARER"
      }
   ]
```

## (Beta) [!DNL Amazon S3] authentication {#s3}

[!DNL Amazon S3] authentication is supported for file-based destinations in Experience Platform.

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

To set up Amazon S3 authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
   "customerAuthenticationConfigurations":[
      {
         "authType":"S3"
      }
   ]
```

## (Beta) [!DNL Azure Blob Storage] {#blob}

[!DNL Azure Blob Storage] authentication is supported for file-based destinations in Experience Platform.

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

To set up [!DNL Azure Blob] authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
   "customerAuthenticationConfigurations":[
     {
        "authType":"AZURE_CONNECTION_STRING"
     }
  ]
```

## (Beta) [!DNL Azure Data Lake Storage] {#adls}

[!DNL Azure Data Lake Storage] authentication is supported for file-based destinations in Experience Platform.

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

To set up [!DNL Azure Data Lake Storage] (ADLS) authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
   "customerAuthenticationConfigurations":[
     {
        "authType":"AZURE_SERVICE_PRINCIPAL"
     }
  ]
```

## (Beta) [!DNL SFTP] authentication with [!DNL SSH] key {#sftp-ssh}

[!DNL SFTP] authentication with [!DNL SSH] key is supported for file-based destinations in Experience Platform.

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

To set up SFTP authentication with SSH key for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
   "customerAuthenticationConfigurations":[
      {
         "authType":"SFTP_WITH_SSH_KEY"
      }
   ]
```

## (Beta) [!DNL SFTP] authentication with password {#sftp-password}

[!DNL SFTP] authentication with password is supported for file-based destinations in Experience Platform.

>[!IMPORTANT]
>
>File-based destination support in Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

To set up SFTP authentication with password for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
   "customerAuthenticationConfigurations":[
      {
         "authType":"SFTP_WITH_PASSWORD"
      }
   ]
```

## [!DNL OAuth 2] authentication {#oauth2}

[!DNL OAuth 2] authentication is supported for streaming destinations in Experience Platform.

For information how to set up the various supported OAuth 2 flows, as well as for custom OAuth 2 support, read the Destination SDK documentation on [OAuth 2 authentication](./oauth2-authentication.md).


## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you *do not* need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

The `/credentials` API endpoint is provided to destination developers for the cases when there is a global authentication system between Adobe and your destination and [!DNL Platform] customers do not need to provide any authentication credentials to connect to your destination.

In this case, you must create a credentials object by using the `/credentials` API endpoint. You must also select `PLATFORM_AUTHENTICATION` in the [destination configuration](./destination-configuration.md#destination-delivery). Read [Credentials API endpoint operations](./credentials-configuration-api.md) for a complete list of operations that you can perform on the `/credentials` endpoint.
