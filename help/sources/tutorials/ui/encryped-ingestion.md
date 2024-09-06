---
title: Ingest Encrypted Data in the Sources UI Workspace
description: Learn how to ingest encrypted data in the sources UI workspace.
badge: Beta
hide: true
hidefromtoc: true
exl-id: 34aaf9b6-5c39-404b-a70a-5553a4db9cdb
---
# Ingest encrypted data in the sources UI

>[!AVAILABILITY]
>
>Support for encrypted data ingestion in the sources UI is in beta and may not be available to your organization. The feature and documentation are subject to change.

You can ingested encrypted data files and folders to Adobe Experience Platform using cloud storage batch sources. With encrypted data ingestion, you can leverage asymmetric encryption mechanisms to securely transfer batch data into Experience Platform. Currently, the supported asymmetric encryption mechanisms are PGP and GPG.

This feature is available to the following sources:

* [Amazon S3]
* [Azure Blob]
* [Azure Data Lake Storage Gen2]
* [Azure File Storage]
* [Data Landing Zone]
* [FTP]
* [Google Cloud Storage]
* [HDFS]
* [Oracle Object Storage]
* [SFTP]

Read this guide to learn how you can ingest encrypted data with cloud storage batch sources using the UI.

## Get started

It is helpful to have an understanding of the following Experience Platform features and concepts before working with encrypted data ingestion in the UI:

* [Sources](../../home.md): Use sources in Experience Platform to ingest data from an Adobe Application or a third-party data source.
* [Dataflows](../../../dataflows/home.md): Dataflows are representations of data jobs that move data across Experience Platform. You can use the sources workspace to create dataflows that ingest data from a given source to Experience Platform.
* [Sandboxes](../../../sandboxes/home.md): Use sandboxes in Experience Platform to create virtual partitions between your Experience Platform instances and create environments dedicated to development or production.

### High-level outline

1. Create an encryption key pair using the sources workspace in the Experience Platform UI. Optionally, you may also create sign verification key pair to provide an additional layer of security to your encrypted data.
2. Use the public key to encrypt your data.
3. Place your encrypted data in your cloud storage provider. During this step, you must also ensure that you have a sample file that can be used as a reference to map your source data to an Experience Data Model (XDM) schema.
4. Ingest your encrypted data to Experience Platform by creating a source connection.
5. While creating your source connection, provide the key ID that corresponds with the public key that you used to encrypt your data. If you also used the sign verification key pair mechanism, then you must also provide the sign verification key ID that corresponds to your encrypted data.
6. Proceed to the dataflow creation steps.

## Ingest encrypted data {#ingest-encrypted-data}

>[!CONTEXTUALHELP]
>id="platform_sources_encrypted_isFileEncrypted"
>title="Is the file encrypted?"
>abstract="Select this toggle if you are ingesting file that is already encrypted."

>[!CONTEXTUALHELP]
>id="platform_sources_encrypted_sampleFile"
>title="Select sample file"
>abstract="You must ingest a sample file when ingesting encrypted data in order to create a mapping."

>[!CONTEXTUALHELP]
>id="platform_sources_encrypted_encryptionKeyId"
>title="Encryption Key ID"
>abstract="Provide the encryption key ID that corresponds with your encryption key that was used to encrypt your source data."

>[!CONTEXTUALHELP]
>id="platform_sources_encrypted_signVerificationKeyId"
>title="Sign Verification Key ID"
>abstract="Provide the sign verification key ID that corresponds with your signed, encrypted source data."

## Create an encryption key pair

* In the Platform UI, navigate to the sources workspace and then select [!UICONTROL Key Pairs] from the top header.
* You are taken to a page that displays a list of existing encryption key pairs in your organization. This page provides information on a given key's title, ID, type, encryption algorithm, expiry, and status. To create a new key pair, select **[!UICONTROL Create Key]**.
* Next, choose the key type that you want to make. To create an encryption key, select **[!UICONTROL Encryption Key]** and then provide a title and a passphrase for your encryption key. The passphrase is an additional layer of protection for your encryption keys. Upon creation, Experience Platform stores the passphrase in a different secure vault from the public key. You must provide a non-empty string as a passphrase.



<!-- 
## Outline

Sections:

* Create public key
* Create customer key
* Create sources flow to ingest encrypted data
  * File ingestion
  * Folder ingestion
* Updated encrypted flow

* Select [!UICONTROL Key Pairs] from the header in the sources UI workspace.
  * You are taken to the [!UICONTROL Key Pairs] page:
    * Select **[!UICONTROL Encryption key]** for list of key pairs that you have created and managed.
    * Select **[!UICONTROL Customer key]** for a list of key pairs that your customers have created and managed.
* Key Pair functions:
  * Select **[!UICONTROL Key details]** to view key details.
  * Select **[!UICONTROL Delete]** to delete.
* Select [!UICONTROL Create key] to create either an encryption key or a customer key

## Questions and clarifications

* Public key vs. customer key
* Verify E2E:
  * Create keys (encryption key or customer key)
  * Use these keys to encrypt your data
  * Place your encrypted data in your cloud storage (Amazon S3 or Google Cloud Storage)
  * Ingest that encrypted data to Experience Platform by creating a source connection
    * Select the encrypted source data
    * Enable "Is the file encrypted"
    * Select/upload sample file for mapping
    * Use the encryption key name that corresponds with the key used to encrypt the source data
      * If the data was encrypted using customer key, provide the sign verification key.
  * Proceed with source connection creation flow -->
