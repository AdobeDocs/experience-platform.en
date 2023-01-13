---
title: Encrypted data ingestion
description:
hide: true
hidefromtoc: true
---
# Encrypted data ingestion

Encrypted data ingestion allows you to ingested data from encrypted files through the cloud storage batch sources in the Adobe Experience Platform sources catalog. With encrypted data ingestion, you can leverage asymmetric encryption mechanisms to securely transfer batch data into Experience Platform. Currently, the supported asymmetric encryption mechanisms are PGP and GPG.

Encrypted data ingestion process:

* Create a private/public key pair using Experience Platform APIs. Once created, the private/public key pair will be available for you to download or copy.
* You will use the public key ID to encrypt the data file that you want to ingest.
* The private key will be stored by Experience Platform in a secure key vault.
* You will then place the encrypted file to your cloud storage account.
* Once the encrypted file is ready, you will create a dataflow for your corresponding cloud storage source and provide the encryption algorithm and public key ID as parameters during the flow creation step.
* Experience Platform then retrieves the private key from the secure vault using the provided public key ID.
* Finally, Experience Platform decrypts the file using the private/public key pair and then ingests it into a dataset.

This document provide steps on how to generate a private/public key pair to encrypt your data, and ingest that encrypted data to Experience Platform using cloud storage sources.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
  * [Cloud storage sources](../api/collect/cloud-storage.md): Create a dataflow to bring batch data from your cloud storage source to Experience Platform.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Create encryption key pair

The first step in ingesting encrypted data to Experience Platform is to create your private/public key pair by making a POST request to the `/encryption/keys` endpoint of the [!DNL Connectors] API.

**API format**

```http
POST /data/foundation/connectors/encryption/keys
```

**Request**

The following request generates a private/public key pair using the PGP encryption algorithm.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/connectors/encryption/keys' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' 
  -d '{
      "encryptionAlgorithm": "PGP",
      "params": {
          "passPhrase": "<passphrase>"
      }
  }'
```

| Parameter | Description |
| --- | --- |

**Response**

A successful response returns 

```json
{
    ​"publicKey": "<Public-Key>",
    ​"publicKeyId": "<BASE64_Encoded_Public_Key>",
    ​"expiryTime": "<Expiry-Time>"
}
```
