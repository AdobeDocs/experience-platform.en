---
description: Use the supported authentication configurations in Adobe Experience Platform Destination SDK to authenticate users and activate data to your destination endpoint.
title: Authentication configuration
exl-id: 33eaab24-f867-4744-b424-4ba71727373c
---
# Authentication configuration {#credentials}

## Supported authentication types {#supported-authentication-types}

Adobe Experience Platform Destination SDK supports several authentication types:

* Bearer authentication
* Amazon S3
* Azure connection string
* Azure service principal
* SFTP with SSH key
* SFTP with password
* OAuth 2 with authorization code
* OAUth 2 with password grant
* OAuth 2 with client credentials grant

You can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint. Refer to the [customer authentication configurations section](./destination-configuration.md#customer-authentication-configurations) in the destination configuration article and the sections below for specifics around the configurations for each authentication type.

## Bearer authentication {#bearer}

To set up bearer type authentication for your destinations, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json

   "customerAuthenticationConfigurations":[
      {
         "authType":"BEARER"
      }
   ]

```

## Amazon S3 authentication {#s3}

To set up Amazon S3 authentication for your destinations, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json

   "customerAuthenticationConfigurations":[
      {
         "authType":"S3"
      }
   ]

```

## Azure connection string {#blob}

To set up [!DNL Azure Blob] authentication for your destinations, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json

   "customerAuthenticationConfigurations":[
     {
        "authType":"AZURE_CONNECTION_STRING"
     }
  ]

```

## Azure service principal {#adls}

To set up [!DNL Azure Data Lake Storage] (ADLS) for your destinations, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json

   "customerAuthenticationConfigurations":[
     {
        "authType":"AZURE_SERVICE_PRINCIPAL"
     }
  ]

```


## SFTP authentication with SSH key {#sftp-ssh}

To set up SFTP authentication with SSH key for your destinations, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json

   "customerAuthenticationConfigurations":[
      {
         "authType":"SFTP_WITH_SSH_KEY"
      }
   ]

```

## SFTP authentication with password {#sftp-password}

To set up SFTP authentication with password for your destinations, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json

   "customerAuthenticationConfigurations":[
      {
         "authType":"SFTP_WITH_PASSWORD"
      }
   ]

```

## OAuth 2 authentication {#oauth2}

For information how to set up the various supported OAuth 2 flows, as well as for custom OAuth 2 support, read the Destination SDK documentation on [OAuth 2 authentication](./oauth2-authentication.md).


## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you *do not* need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

The `/credentials` API endpoint is provided to destination developers for the cases when there is a global authentication system between Adobe and your destination and [!DNL Platform] customers do not need to provide any authentication credentials to connect to your destination.

In this case, you must create a credentials object by using the `/credentials` API endpoint. You must also select `PLATFORM_AUTHENTICATION` in the [destination configuration](./destination-configuration.md#destination-delivery). Read [Credentials API endpoint operations](./credentials-configuration-api.md) for a complete list of operations that you can perform on the `/credentials` endpoint.
