---
title: Create an SFTP Base Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to an SFTP (Secure File Transfer Protocol) server using the Flow Service API.
exl-id: b965b4bf-0b55-43df-bb79-c89609a9a488
---
# Create an SFTP base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL SFTP] (Secure File Transfer Protocol) using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

>[!IMPORTANT]
>
>It is recommended to avoid newlines or carriage returns when ingesting JSON objects with an [!DNL SFTP] source connection. To work around the limitation, use a single JSON object per line and use multi-lines for ensuing files.

The following sections provide additional information that you will need to know in order to successfully connect to an [!DNL SFTP] server using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to [!DNL SFTP], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your [!DNL SFTP] server. |
| `port` | The SFTP server port you're connecting to. If unprovided, the value defaults to `22`. |
| `username` | The username with access to your [!DNL SFTP] server. |
| `password` | The password for your [!DNL SFTP] server. |
| `privateKeyContent` | The Base64 encoded SSH private key content. The type of OpenSSH key must be classified as either RSA or DSA. |
| `passPhrase` | The pass phrase or password to decrypt the private key if the key file or the key content is protected by a pass phrase. If the `privateKeyContent` is password protected, this parameter needs to be used with the private key content's passphrase as value. |
| `maxConcurrentConnections` | This parameter allows you to specify a maximum limit for the number of concurrent connections Platform will create when connecting to your SFTP server. You must set this value to be less than the limit set by SFTP. **Note**: When this setting is enabled for an existing SFTP account, it will only affect future dataflows and not existing dataflows. |
| `folderPath` | The path to the folder that you want to provide access to. [!DNL SFTP] source, you can provide the folder path to specify user access to sub folder of your choice. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL SFTP] is: `b7bf2577-4520-42c9-bae9-cad01560f7bc`. |

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

>[!TIP]
>
>Once created, you cannot change the authentication type of an [!DNL SFTP] base connection. To change the authentication type, you must create a new base connection.

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

The [!DNL SFTP] source supports both basic authentication and authentication via SSH public key. During this step, you can also designate the path to the sub folder that you want to provide access to.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL SFTP] authentication credentials as part of the request parameters.

>[!IMPORTANT]
>
>The [!DNL SFTP] connector supports an RSA or DSA type OpenSSH key. Ensure that your key file content starts with `"-----BEGIN [RSA/DSA] PRIVATE KEY-----"` and ends with `"-----END [RSA/DSA] PRIVATE KEY-----"`. If the private key file is a PPK-format file, use the PuTTY tool to convert from PPK to OpenSSH format.

**API format**

```http
POST /connections
```

>[!BEGINTABS]

>[!TAB Basic authentication]

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d  '{
      "name": "SFTP connector with password",
      "description": "SFTP connector password",
      "auth": {
          "specName": "Basic Authentication for sftp",
          "params": {
              "host": "{HOST}",
              "port": 22,
              "userName": "{USERNAME}",
              "password": "{PASSWORD}",
              "maxConcurrentConnections": 5,
              "folderPath": "acme/business/customers/holidaySales"
          }
      },
      "connectionSpec": {
          "id": "b7bf2577-4520-42c9-bae9-cad01560f7bc",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.host` | The host name of your SFTP server. |
| `auth.params.port` | The port of the SFTP server. This integer value defaults to 22. |
| `auth.params.username` | The username associated with your SFTP server. |
| `auth.params.password` | The password associated with your SFTP server. |
| `auth.params.maxConcurrentConnections` | The maximum number of concurrent connections specified when connecting Platform to SFTP. When enabled, this value must be set to at least 1. |
| `auth.params.folderPath` | The path to the folder that you want to provide access to. |
| `connectionSpec.id` | The SFTP server connection specification ID: `b7bf2577-4520-42c9-bae9-cad01560f7bc` |

+++

+++Response

A successful response returns the unique identifier (`id`) of the newly created connection. This ID is required to explore your SFTP server in the next tutorial.

```json
{
    "id": "bf367b0d-3d9b-4060-b67b-0d3d9bd06094",
    "etag": "\"1700cc7b-0000-0200-0000-5e3b3fba0000\""
}
```

+++

>[!TAB SSH public key authentication]

+++Request

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "SFTP connector with SSH authentication",
      "description": "SFTP connector with SSH authentication",
      "auth": {
          "specName": "SSH PublicKey Authentication for sftp",
          "params": {
              "host": "{HOST}",
              "port": 22,
              "userName": "{USERNAME}",
              "privateKeyContent": "{PRIVATE_KEY_CONTENT}",
              "passPhrase": "{PASSPHRASE}",
              "maxConcurrentConnections": 5,
              "folderPath": "acme/business/customers/holidaySales"
          }
      },
      "connectionSpec": {
          "id": "b7bf2577-4520-42c9-bae9-cad01560f7bc",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.host` | The host name of your [!DNL SFTP] server. |
| `auth.params.port` | The port of the SFTP server. This integer value defaults to 22. |
| `auth.params.username` | The username associated with your [!DNL SFTP] server. |
| `auth.params.privateKeyContent` | The Base64 encoded SSH private key content. The type of OpenSSH key must be classified as either RSA or DSA.  |
| `auth.params.passPhrase` | The pass phrase or password to decrypt the private key if the key file or the key content is protected by a pass phrase. If PrivateKeyContent is password protected, this parameter needs to be used with the PrivateKeyContent's passphrase as value. |
| `auth.params.maxConcurrentConnections` | The maximum number of concurrent connections specified when connecting Platform to SFTP. When enabled, this value must be set to at least 1. |
| `auth.params.folderPath` | The path to the folder that you want to provide access to. |
| `connectionSpec.id` | The [!DNL SFTP] server connection specification ID: `b7bf2577-4520-42c9-bae9-cad01560f7bc` |

+++

+++Response

A successful response returns the unique identifier (`id`) of the newly created connection. This ID is required to explore your SFTP server in the next tutorial.

```json
{
    "id": "bf367b0d-3d9b-4060-b67b-0d3d9bd06094",
    "etag": "\"1700cc7b-0000-0200-0000-5e3b3fba0000\""
}
```

+++

>[!ENDTABS]

## Next steps

By following this tutorial, you have created an [!DNL SFTP] connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md).
