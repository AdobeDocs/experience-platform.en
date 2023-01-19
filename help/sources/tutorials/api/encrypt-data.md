---
title: Encrypted Data Ingestion
description: Encrypted data ingestion allows you to ingest encrypted files through cloud storage batch sources in the Adobe Experience Platform sources catalog
hide: true
hidefromtoc: true
---
# Encrypted data ingestion

Encrypted data ingestion allows you to ingest encrypted files through cloud storage batch sources in the Adobe Experience Platform sources catalog. With encrypted data ingestion, you can leverage asymmetric encryption mechanisms to securely transfer batch data into Experience Platform. Currently, the supported asymmetric encryption mechanisms are PGP and GPG.

Encrypted data ingestion process:

* Create an encryption key pair using Experience Platform APIs. The encryption key pair consists of a Private Key and a Public Key. Once created, you can copy or download the Public Key, alongside its corresponding Public Key ID and Expiry Time. During this process, the Private Key will be stored by Experience Platform in a secure vault.
* Use the Public Key to encrypt the data file that you want to ingest.
* Then, place your encrypted file in your cloud storage.
* Once the encrypted file is ready, create a source connection and a dataflow for your cloud storage source. During the flow creation step, you must provide an `encryption` parameter and include your Public Key ID. 
* Experience Platform retrieves the Private Key from the secure vault to decrypt the data at the time of ingestion.

This document provide steps on how to generate a encryption key pair to encrypt your data, and ingest that encrypted data to Experience Platform using cloud storage sources.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
  * [Cloud storage sources](../api/collect/cloud-storage.md): Create a dataflow to bring batch data from your cloud storage source to Experience Platform.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Create encryption key pair {#create-keys}

The first step in ingesting encrypted data to Experience Platform is to create your encryption key pair by making a POST request to the `/encryption/keys` endpoint of the [!DNL Connectors] API.

**API format**

```http
POST /data/foundation/connectors/encryption/keys
```

**Request**

The following request generates a encryption key pair using the PGP encryption algorithm.

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
| `encryptionAlgorithm` | The type of encryption algorithm that you are using. The supported encryption types are `PGP` and `GPG`. |
| `params.passPhrase` | The passphrase provides an additional layer of protection for your encryption keys. Upon creation, Experience Platform stores the passphrase in a different secure vault from the Public Key. You must provide a non-empty string as a passphrase. |

**Response**

A successful response returns your Public Key, Public Key ID, and the expiry time of your keys. The expiry time automatically sets to 180 days after the date of key generation. Expiry time is currently not configurable.

```json
{
    ​"publicKey": "{PUBLIC_KEY}",
    ​"publicKeyId": "{PUBLIC_KEY_ID}",
    ​"expiryTime": "1684843168"
}
```

## Retrieve a list of Public Keys and Public Key IDs

Make a GET request to the `/encryption/keys` endpoint to retrieve a list of Public Keys and Public Key IDs in your organization.

**API format**

```http
GET /data/foundation/connectors/encryption/keys
```

**Request**

The following request retrieves a list of Public Keys and Public Key IDs in your organization.

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

A successful response returns a list of all Public Keys and Public Key IDs in your organization.

```json
[
  ​{
    ​"encryptionAlgorithm": "PGP",
    ​"publicKey": "{PUBLIC_KEY}",
    ​"publicKeyId": "{PUBLIC_KEY_ID}",
    ​"expiryTime": "1684843168"
  },
  ​{
    ​"encryptionAlgorithm": "PGP",
    ​"publicKey": "{PUBLIC_KEY}",
    ​"publicKeyId": "{PUBLIC_KEY_ID}",
    ​"expiryTime": "1684843168"
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
* [FTP](../api/create/cloud-storage/ftp.md)
* [Google Cloud Storage](../api/create/cloud-storage/google.md)
* [Oracle Object Storage](../api/create/cloud-storage/oracle-object-storage.md)
* [SFTP](../api/create/cloud-storage/sftp.md)

After creating a base connection, you must then follow the steps outlined in the tutorial for [creating a source connection for a cloud storage source](../api/collect/cloud-storage.md) in order to create a source connection, a target connection, and a mapping.

## Create a dataflow for encrypted data ingestion

>[!NOTE]
>
>You must have the following, in order to create a dataflow for encrypted data ingestion:<ul><li>[Public Key ID](#create-keys)</li><li>[Source connection ID](../api/collect/cloud-storage.md#source)</li><li>[Target connection ID](../api/collect/cloud-storage.md#target)</li><li>[Mapping ID](../api/collect/cloud-storage.md#mapping)</li></ul>

To ingest encrypted data to Platform, you must add an `encryption` section to the `transformations` parameter and provide the `publicKeyId` that was created in an earlier step.

**API format**

```http
POST /flows
```

**Request**

The following request creates a dataflow to ingest encrypted data for a cloud storage source.

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
| `transformations.name` | When ingesting encrypted files, you must provide `Encryption` as an additional transformations parameter for your dataflow. |
| `transformations.params.publicKeyId` | The Public Key ID that you created. This ID is one half of the encryption key pair used to encrypt your cloud storage data. |
| `scheduleParams.startTime` | The start time for the dataflow in epoch time. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |