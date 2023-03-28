---
description: Use the supported authentication configurations in Adobe Experience Platform Destination SDK to authenticate users and activate data to your destination endpoint.
title: Authentication configuration
exl-id: 33eaab24-f867-4744-b424-4ba71727373c
---
# Authentication configuration {#credentials}

## Supported authentication types {#supported-authentication-types}

The authentication configuration that you select determines how Experience Platform authenticates to your destination, in the Platform UI.

Adobe Experience Platform Destination SDK supports several authentication types:

* [Bearer authentication](#bearer)
* [Basic authentication](#basic)
* [[!DNL Amazon S3] authentication](#s3)
* [[!DNL Azure Blob] Storage](#blob)
* [[!DNL Azure Data Lake Storage]](#adls)
* [[!DNL Google Cloud Storage]](#gcs)
* [SFTP with SSH key](#sftp-ssh)
* [SFTP with password](#sftp-password)
* [OAuth 2 with authorization code](#oauth2)
* [OAUth 2 with password grant](#oauth2)
* [OAuth 2 with client credentials grant](#oauth2)

You can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

Refer to the following sections for authentication configuration details for each type of destination:

* [Authentication configurations for streaming destinations](destination-configuration.md#customer-authentication-configurations)
* [Authentication configurations for file-based destinations](file-based-destination-configuration.md#customer-authentication-configurations)

## Basic authentication {#basic}

Basic authentication is supported for streaming destinations in Experience Platform.

When you configure the basic authentication type, users are required to input a username and password to connect to your destination.

To set up basic authentication for your destination, configure the `customerAuthenticationConfigurations` section via the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"BASIC"
   }
]
```

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

## [!DNL Amazon S3] authentication {#s3}

[!DNL Amazon S3] authentication is supported for file-based destinations in Experience Platform.

To set up [!DNL Amazon S3] authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"S3"
   }
]
```

## [!DNL Azure Blob Storage] {#blob}

[!DNL Azure Blob Storage] authentication is supported for file-based destinations in Experience Platform.

To set up [!DNL Azure Blob] authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"AZURE_CONNECTION_STRING"
   }
]
```

## [!DNL Azure Data Lake Storage] {#adls}

[!DNL Azure Data Lake Storage] authentication is supported for file-based destinations in Experience Platform.

To set up [!DNL Azure Data Lake Storage] (ADLS) authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"AZURE_SERVICE_PRINCIPAL"
   }
]
```

## [!DNL Google Cloud Storage] {#gcs}

[!DNL Google Cloud Storage] authentication is supported for file-based destinations in Experience Platform.

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"GOOGLE_CLOUD_STORAGE"
   }
]
```


## [!DNL SFTP] authentication with [!DNL SSH] key {#sftp-ssh}

[!DNL SFTP] authentication with [!DNL SSH] key is supported for file-based destinations in Experience Platform.

To set up SFTP authentication with SSH key for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"SFTP_WITH_SSH_KEY"
   }
]
```

## [!DNL SFTP] authentication with password {#sftp-password}

[!DNL SFTP] authentication with password is supported for file-based destinations in Experience Platform.

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

For information how to set up the various supported [!DNL OAuth 2] flows, as well as for custom [!DNL OAuth 2] support, read the Destination SDK documentation on [[!DNL OAuth 2] authentication](./oauth2-authentication.md).


## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you *do not* need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

The `/credentials` API endpoint is provided to destination developers for the cases when there is a global authentication system between Adobe and your destination and [!DNL Platform] customers do not need to provide any authentication credentials to connect to your destination.

In this case, you must create a credentials object by using the `/credentials` API endpoint. You must also select `PLATFORM_AUTHENTICATION` in the [destination configuration](./destination-configuration.md#destination-delivery). Read [Credentials API endpoint operations](./credentials-configuration-api.md) for a complete list of operations that you can perform on the `/credentials` endpoint.
