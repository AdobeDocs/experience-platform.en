---
description: Learn how to configure the customer authentication configuration for destinations built with Destination SDK.
title: Customer authentication configuration
---

# Customer authentication configuration

The customer authentication configuration section in the destinations configuration generates the [Configure new destination](./help/destinations/ui/connect-destination.md) page in the Experience Platform user interface, where users connect Experience Platform to the accounts they have with your destination. Depending on which authentication option you indicate in the `authType` field, the Experience Platform page is generated for the users as shown below.

## Bearer authentication

When you configure the bearer authentication type, users are required to input the bearer token that they obtain from your destination.

![UI render with bearer authentication](assets/bearer-authentication-ui.png)

To set up bearer type authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"BEARER"
   }
]
```

## OAuth 2 authentication

Users select **[!UICONTROL Connect to destination]** to trigger the OAuth 2 authentication flow to your destination, as shown in the example below for the Twitter Custom Audiences destination. For detailed information on configuring OAuth 2 authentication to your destination endpoint, read the dedicated [Destination SDK OAuth 2 authentication page](oauth2-authentication.md).

![UI render with OAuth 2 authentication](assets/oauth2-authentication-ui.png)

|Parameter | Type | Description|
|---------|----------|------|
|`customerAuthenticationConfigurations` | String | Indicates the configuration used to authenticate Experience Platform customers to your server. See `authType` below for accepted values. |
|`authType` | String | Accepted values for streaming destinations are:<ul><li>`BEARER`. If your destination supports bearer authentication, set `"authType":"Bearer"` and  `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li><li>`OAUTH2`. If your destination supports OAuth 2 authentication, set `"authType":"OAUTH2"` and add the required fields for OAuth 2, as shown in the [Destination SDK OAuth 2 authentication page](./oauth2-authentication.md). Additionally, set `"authenticationRule":"CUSTOMER_AUTHENTICATION"` in the [destination delivery section](./destination-configuration.md).</li>|

{style="table-layout:auto"}

## Amazon S3 authentication {#s3}

[!DNL Amazon S3] authentication is supported for file-based destinations in Experience Platform.

When you configure the Amazon S3 authentication type, users are required to input the S3 credentials.

![UI render with S3 authentication](assets/s3-authentication-ui.png)

To set up [!DNL Amazon S3] authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"S3"
   }
]
```

## Azure Blob authentication  {#blob}

[!DNL Azure Blob Storage] authentication is supported for file-based destinations in Experience Platform.

When you configure the Azure Blob authentication type, users are required to input the connection string.

![UI render with Blob authentication](assets/blob-authentication-ui.png)

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

When you configure the [!DNL Azure Data Lake Storage] authentication type, users are required to input the Azure Service Principal credentials and their tenant information.

![UI render with [!DNL Azure Data Lake Storage] authentication](assets/adls-authentication-ui.png)

To set up [!DNL Azure Data Lake Storage] (ADLS) authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"AZURE_SERVICE_PRINCIPAL"
   }
]
```


## SFTP with password authentication

[!DNL SFTP] authentication with password is supported for file-based destinations in Experience Platform.

When you configure the SFTP with password authentication type, users are required to input the SFTP username and password, as well as the SFTP domain and port (default port is 22).

![UI render with SFTP with password authentication](assets/sftp-password-authentication-ui.png)

To set up SFTP authentication with password for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"SFTP_WITH_PASSWORD"
   }
]
```




## SFTP with SSH key authentication

[!DNL SFTP] authentication with [!DNL SSH] key is supported for file-based destinations in Experience Platform.

When you configure the SFTP with SSH key authentication type, users are required to input the SFTP username and SSH key, as well as the SFTP domain and port (default port is 22).

![UI render with SFTP with SSH key authentication](assets/sftp-key-authentication-ui.png)

To set up SFTP authentication with SSH key for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"SFTP_WITH_SSH_KEY"
   }
]
```

## [!DNL Google Cloud Storage] {#gcs}

[!DNL Google Cloud Storage] authentication is supported for file-based destinations in Experience Platform.

When you configure the [!DNL Google Cloud Storage] authentication type, users are required to input their [!DNL Google Cloud Storage] [!UICONTROL access key ID] and [!UICONTROL secret access key].

![UI render with Google Cloud Storage authentication](assets/google-cloud-storage-ui.png)

To set up [!DNL Google Cloud Storage] authentication for your destination, configure the `customerAuthenticationConfigurations` parameter in the `/destinations` endpoint as shown below:

```json
"customerAuthenticationConfigurations":[
   {
      "authType":"GOOGLE_CLOUD_STORAGE"
   }
]
```

## When to use the `/credentials` API endpoint {#when-to-use}

>[!IMPORTANT]
>
>In most cases, you *do not* need to use the `/credentials` API endpoint. Instead, you can configure the authentication information for your destination via the `customerAuthenticationConfigurations` parameters of the `/destinations` endpoint.

The `/credentials` API endpoint is provided to destination developers for the cases when there is a global authentication system between Adobe and your destination and [!DNL Platform] customers do not need to provide any authentication credentials to connect to your destination.

In this case, you must create a credentials object by using the `/credentials` API endpoint. You must also select `PLATFORM_AUTHENTICATION` in the [destination configuration](./destination-configuration.md#destination-delivery). Read [Credentials API endpoint operations](./credentials-configuration-api.md) for a complete list of operations that you can perform on the `/credentials` endpoint.