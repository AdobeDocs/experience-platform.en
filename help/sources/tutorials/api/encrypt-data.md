---
title: Encrypted Data Ingestion
description: Learn how to ingest encrypted files through cloud storage batch sources using the API.
hide: true
hidefromtoc: true
exl-id: 83a7a154-4f55-4bf0-bfef-594d5d50f460
---
# Encrypted data ingestion

Adobe Experience Platform allows you to ingest encrypted files through cloud storage batch sources. With encrypted data ingestion, you can leverage asymmetric encryption mechanisms to securely transfer batch data into Experience Platform. Currently, the supported asymmetric encryption mechanisms are PGP and GPG.

The encrypted data ingestion process is as follows:

1. [Create an encryption key pair using Experience Platform APIs](#create-encryption-key-pair). The encryption key pair consists of a private key and a public key. Once created, you can copy or download the public key, alongside its corresponding public key ID and Expiry Time. During this process, the private key will be stored by Experience Platform in a secure vault. **NOTE:** The public key in the response is Base64-encoded and must be decrypted prior to using.
2. Use the public key to encrypt the data file that you want to ingest.
3. Place your encrypted file in your cloud storage.
4. Once the encrypted file is ready, [create a source connection and a dataflow for your cloud storage source](#create-a-dataflow-for-encrypted-data). During the flow creation step, you must provide an `encryption` parameter and include your public key ID. 
5. Experience Platform retrieves the private key from the secure vault to decrypt the data at the time of ingestion.

>[!IMPORTANT]
>
>The maximum size of a single encrypted file is 1 GB. For example, you can ingest 2 GBs worth of data in a single dataflow run, however, any individual file in that data cannot exceed 1 GB.

This document provides steps on how to generate a encryption key pair to encrypt your data, and ingest that encrypted data to Experience Platform using cloud storage sources.

## Getting started

This tutorial requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
  * [Cloud storage sources](../api/collect/cloud-storage.md): Create a dataflow to bring batch data from your cloud storage source to Experience Platform.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

### Supported file extensions for encrypted files

The list of supported file extensions for encrypted files are as follows:

* .csv
* .tsv
* .json
* .parquet
* .csv.gpg
* .tsv.gpg
* .json.gpg
* .parquet.gpg
* .csv.pgp
* .tsv.pgp
* .json.pgp
* .parquet.pgp
* .gpg
* .pgp

>[!NOTE]
>
>Encrypted file ingestion in Adobe Experience Platform Sources supports openPGP and not any specific proprietary version of PGP.

## Create encryption key pair {#create-encryption-key-pair}

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
  -H 'Authorization: Bearer {{ACCESS_TOKEN}}' \
  -H 'x-api-key: {{API_KEY}}' \
  -H 'x-gw-ims-org-id: {{ORG_ID}}' \
  -H 'x-sandbox-name: {{SANDBOX_NAME}}' \
  -H 'Content-Type: application/json' 
  -d '{
      "encryptionAlgorithm": "PGP",
      "params": {
          "passPhrase": "{{PASSPHRASE}}"
      }
  }'
```

| Parameter | Description |
| --- | --- |
| `encryptionAlgorithm` | The type of encryption algorithm that you are using. The supported encryption types are `PGP` and `GPG`. |
| `params.passPhrase` | The passphrase provides an additional layer of protection for your encryption keys. Upon creation, Experience Platform stores the passphrase in a different secure vault from the public key. You must provide a non-empty string as a passphrase. |

**Response**

A successful response returns your Base64-encoded public key, public key ID, and the expiry time of your keys. The expiry time automatically sets to 180 days after the date of key generation. Expiry time is currently not configurable.

```json
{
    ​"publicKey": "{PUBLIC_KEY}",
    ​"publicKeyId": "{PUBLIC_KEY_ID}",
    ​"expiryTime": "1684843168"
}
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

## Create a dataflow for encrypted data {#create-a-dataflow-for-encrypted-data}

>[!NOTE]
>
>You must have the following, in order to create a dataflow for encrypted data ingestion:
>
>* [Public key ID](#create-encryption-key-pair)
>* [Source connection ID](../api/collect/cloud-storage.md#source)
>* [Target connection ID](../api/collect/cloud-storage.md#target)
>* [Mapping ID](../api/collect/cloud-storage.md#mapping)

To create a dataflow, make a POST request to the `/flows` endpoint of the [!DNL Flow Service] API. To ingest encrypted data, you must add an `encryption` section to the `transformations` property and include the `publicKeyId` that was created in an earlier step.

**API format**

```http
POST /flows
```

**Request**

The following request creates a dataflow to ingest encrypted data for a cloud storage source.

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/flows' \
  -H 'x-api-key: {{API_KEY}}' \
  -H 'x-gw-ims-org-id: {{ORG_ID}}' \
  -H 'x-sandbox-name: {{SANDBOX_NAME}}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "ACME Customer Data",
    "description": "ACME Customer Data (Encrypted)",
    "flowSpec": {
        "id": "9753525b-82c7-4dce-8a9b-5ccfce2b9876",
        "version": "1.0"
    },
    "sourceConnectionIds": [
        "655f7c1b-1977-49b3-a429-51379ecf0e15"
    ],
    "targetConnectionIds": [
        "de688225-d619-481c-ae3b-40c250fd7c79"
    ],
    "transformations": [
        {
            "name": "Mapping",
            "params": {
                "mappingId": "6b6e24213dbe4f57bd8207d21034ff03",
                "mappingVersion":"0"
            }
        },
        {
            "name": "Encryption",
            "params": {
                "publicKeyId":"311ef6f8-9bcd-48cf-a9e9-d12c45fb7a17"
            }
        }
    ],
    "scheduleParams": {
        "startTime": "1675793392",
        "frequency": "once"
    }
}'
```

| Property | Description |
| --- | --- |
| `flowSpec.id` | The flow spec ID that corresponds with cloud storage sources. |
| `sourceConnectionIds` | The source connection ID. This ID represents the transfer of data from source to Platform. |
| `targetConnectionIds` | The target connection ID. This ID represents where the data lands once it is brought over to Platform. |
| `transformations[x].params.mappingId` | The mapping ID.|
| `transformations.name` | When ingesting encrypted files, you must provide `Encryption` as an additional transformations parameter for your dataflow. |
| `transformations[x].params.publicKeyId` | The public key ID that you created. This ID is one half of the encryption key pair used to encrypt your cloud storage data. |
| `scheduleParams.startTime` | The start time for the dataflow in epoch time. |
| `scheduleParams.frequency` | The frequency at which the dataflow will collect data. Acceptable values include: `once`, `minute`, `hour`, `day`, or `week`. |
| `scheduleParams.interval` | The interval designates the period between two consecutive flow runs. The interval's value should be a non-zero integer. Interval is not required when frequency is set as `once` and should be greater than or equal to `15` for other frequency values. |

**Response**

A successful response returns the ID (`id`) of the newly created dataflow for your encrypted data.

```json
{
    "id": "dbc5c132-bc2a-4625-85c1-32bc2a262558",
    "etag": "\"8e000533-0000-0200-0000-5f3c40fd0000\""
}
```

## Next steps

By following this tutorial, you have created an encryption key pair for your cloud storage data, and a dataflow to ingested your encrypted data using the [!DNL Flow Service API]. For status updates on your dataflow's completeness, errors, and metrics, read the the guide on [monitoring your dataflow using the [!DNL Flow Service] API](./monitor.md).
