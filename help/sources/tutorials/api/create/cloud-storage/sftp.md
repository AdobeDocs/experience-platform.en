---
keywords: Experience Platform;home;popular topics;SFTP;sftp;Secure File Transfer Protocol;secure file transfer protocol
solution: Experience Platform
title: Create an SFTP Source Connection Using the Flow Service API
topic: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to an SFTP (Secure File Transfer Protocol) server using the Flow Service API.
exl-id: b965b4bf-0b55-43df-bb79-c89609a9a488
---
# Create an SFTP source connection using the [!DNL Flow Service] API

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect Experience Platform to an SFTP (Secure File Transfer Protocol) server.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

>[!IMPORTANT]
>
>It is recommended to avoid newlines or carriage returns when ingesting JSON objects with an SFTP source connection. To work around the limitation, use a single JSON object per line and use multi-lines for ensuing files.

The following sections provide additional information that you will need to know in order to successfully connect to an SFTP server using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect to SFTP, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The name or IP address associated with your SFTP server. |
| `username` | The username with access to your SFTP server. |
| `password` | The password for your SFTP server. |
| `privateKeyContent` | The Base64 encoded SSH private key content. The type of OpenSSH key must be classified as either RSA or DSA. |
| `passPhrase` | The pass phrase or password to decrypt the private key if the key file or the key content is protected by a pass phrase. If PrivateKeyContent is password protected, this parameter needs to be used with the PrivateKeyContent's passphrase as value. |

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required as it can be used to create multiple dataflows to bring in different data.

### Create an SFTP connection using basic authentication

To create an SFTP connection using basic authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `host`, `userName`, and `password`.

**API format**

```http
POST /connections
```

**Request**

In order to create an SFTP connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for SFTP is `b7bf2577-4520-42c9-bae9-cad01560f7bc`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d  '{
        "name": "SFTP connector with password",
        "description": "SFTP connector password",
        "auth": {
            "specName": "Basic Authentication for sftp",
            "params": {
                "host": "{HOST}",
                "userName": "{USERNAME}",
                "password": "{PASSWORD}"
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
| `auth.params.username` | The username associated with your SFTP server. |
| `auth.params.password` | The password associated with your SFTP server. |
| `connectionSpec.id` | The SFTP server connection specification ID: `b7bf2577-4520-42c9-bae9-cad01560f7bc` |

**Response**

A successful response returns the unique identifier (`id`) of the newly created connection. This ID is required to explore your SFTP server in the next tutorial.

```json
{
    "id": "bf367b0d-3d9b-4060-b67b-0d3d9bd06094",
    "etag": "\"1700cc7b-0000-0200-0000-5e3b3fba0000\""
}
```

### Create an SFTP connection using SSH public key authentication

To create an SFTP connection using SSH public key authentication, make a POST request to the [!DNL Flow Service] API while providing values for your connection's `host`, `userName`, `privateKeyContent`, and `passPhrase`.

>[!IMPORTANT]
>
>The SFTP connector supports an RSA or DSA type OpenSSH key. Ensure that your key file content starts with `"-----BEGIN [RSA/DSA] PRIVATE KEY-----"` and ends with `"-----END [RSA/DSA] PRIVATE KEY-----"`. If the private key file is a PPK-format file, use the PuTTY tool to convert from PPK to OpenSSH format.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "SFTP connector with SSH authentication",
        "description": "SFTP connector with SSH authentication",
        "auth": {
            "specName": "SSH PublicKey Authentication for sftp",
            "params": {
                "host": "{HOST}",
                "userName": "{USERNAME}",
                "privateKeyContent": "{PRIVATE_KEY_CONTENT}",
                "passPhrase": "{PASSPHRASE}"
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
| `auth.params.username` | The username associated with your SFTP server. |
| `auth.params.privateKeyContent` | The Base64 encoded SSH private key content. The type of OpenSSH key must be classified as either RSA or DSA.  |
| `auth.params.passPhrase` | The pass phrase or password to decrypt the private key if the key file or the key content is protected by a pass phrase. If PrivateKeyContent is password protected, this parameter needs to be used with the PrivateKeyContent's passphrase as value. |
| `connectionSpec.id` | The SFTP server connection specification ID: `b7bf2577-4520-42c9-bae9-cad01560f7bc` |

**Response**

A successful response returns the unique identifier (`id`) of the newly created connection. This ID is required to explore your SFTP server in the next tutorial.

```json
{
    "id": "bf367b0d-3d9b-4060-b67b-0d3d9bd06094",
    "etag": "\"1700cc7b-0000-0200-0000-5e3b3fba0000\""
}
```

## Next steps

By following this tutorial, you have created an SFTP connection using the [!DNL Flow Service] API, and have obtained the connection's unique ID value. You can use this connection ID to [explore cloud storages using the Flow Service API](../../explore/cloud-storage.md) or [ingest Parquet data using the Flow Service API](../../cloud-storage-parquet.md).
