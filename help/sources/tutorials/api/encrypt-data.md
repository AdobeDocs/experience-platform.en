---
title: Encrypted Data Ingestion
description: Encrypted data ingestion allows you to ingest encrypted files through cloud storage batch sources in the Adobe Experience Platform sources catalog
hide: true
hidefromtoc: true
---
# Encrypted data ingestion

Encrypted data ingestion allows you to ingest encrypted files through cloud storage batch sources in the Adobe Experience Platform sources catalog. With encrypted data ingestion, you can leverage asymmetric encryption mechanisms to securely transfer batch data into Experience Platform. Currently, the supported asymmetric encryption mechanisms are PGP and GPG.

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
          "passPhrase": "{PASSPHRASE}"
      }
  }'
```

| Parameter | Description |
| --- | --- |
| `encryptionAlgorithm` |
| `params.passPhrase` |

**Response**

A successful response returns your public key, public key ID, and the expiry time.

```json
{
    ​"publicKey": "{PUBLIC_KEY}",
    ​"publicKeyId": "{PUBLIC_KEY_ID}",
    ​"expiryTime": "1684843168"
}
```

## Retrieve a list of encryption key pairs

Make a GET request to the `/encryption/keys` endpoint to retrieve a list of encryption key pairs in your organization.

**API format**

```http
GET /data/foundation/connectors/encryption/keys
```

**Request**

The following request retrieves a list of encryption key pairs in your organization.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/connectors/encryption/keys' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' 
```

**Response**

A successful response returns a list of all encryption key pairs in your organization.

```json
[
  ​{
    ​"encryptionAlgorithm": "PGP",
    ​"publicKey": "<BASE64_Encoded_Public_Key>",
    ​"publicKeyId": "<Public-Key-Id>",
    ​"expiryTime": "<Expiry-Time>"
  },
  ​{
    ​"encryptionAlgorithm": "PGP",
    ​"publicKey": "<BASE64_Encoded_Public_Key>",
    ​"publicKeyId": "<Public-Key-Id>",
    ​"expiryTime": "<Expiry-Time>"
  }​
]​
```

## Connect your cloud storage source to Experience Platform using the [!DNL Flow Service] API

Once you have retrieved your encryption key pair, you can now proceed and create a source connection for your cloud storage source and bring your encrypted data to Platform. 

First, you must create a base connection to authenticate your source against Platform. To create a base connection and authenticate your source, select the source you would like to use from the list below:

* [Amazon S3](../api/create/cloud-storage/s3.md)
* [[!DNL Apache HDFS]](../api/create/cloud-storage/hdfs.md)
* [Azure Blob](../api/create/cloud-storage/blob.md)
* [Azure Data Lake Storage Gen2](../api/create/cloud-storage/adls-gen2.md)
* [Azure File Storage](../api/create/cloud-storage/azure-file-storage.md)
* [Data Landing Zone](../api/create/cloud-storage/data-landing-zone.md)
* [Google Cloud Storage](../api/create/cloud-storage/google.md)
* [Oracle Object Storage](../api/create/cloud-storage/oracle-object-storage.md)

After creating a base connection, you must then follow the steps outlined in the tutorial for [creating a source connection for a cloud storage source](../api/collect/cloud-storage.md) in order to create a source connection, a target connection, and a mapping.

## Create a dataflow for encrypted data ingestion

>[!NOTE]
>
>You must have the following, in order to create a dataflow for encrypted data ingestion:<ul><li>Encryption key pair (public key and public key ID)</li><li>Encryption algorithm</li><li>Source connection ID</li><li>Target connection ID</li><li>Mapping ID</li></ul>

To ingest encrypted data to Platform, you must add an `encryption` section to the `transformations` parameter and provide the `publicKeyId` that corresponds with your encryption key pair.

**API format**

```http
POST /flows
```

**Request**

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "ACME Customer Data",
      "description: "ACME encrypted data ingestion",
      "flowSpec": {
          "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
          "version": "1.0"
      },
      "sourceConnectionIds": [
          "26b53912-1005-49f0-b539-12100559f0e2"
      ],
      "targetConnectionIds": [
        "f7eb08fa-5f04-4e45-ab08-fa5f046e45ee"
      ],
      "transformations": [
          {
              "name": "Mapping",
              "params": {
                  "mappingId": "bf5286a9c1ad4266baca76ba3adc9366",
                  "mappingVersion": 0
              }
          },
          {
              "name": "Encryption",
              "params": {
                  "publicKeyId": 512e686e-543e-4354-bcba-e1403ddcc532
          }
  }
      ],
      "scheduleParams": {
          "startTime": "1597784298",
          "frequency": "once"
      }
  }'
```

| Property | Description |
| --- | --- |
| `flowSpec.id` | The flow spec ID that corresponds with cloud storage sources. |
| `sourceConnectionIds` | The source connection ID. This ID represents the transfer of data from source to Platform. |
| `targetConnectionIds` | The target connection ID. This ID represents where the data lands once it is brought over to Platform. |
| `transformations.params.mappingId` | The mapping ID.|
| `transformations.name` |
| `transformations.params.publicKeyId` |
| `scheduleParams.startTime` | The start time for the dataflow in epoch time. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |