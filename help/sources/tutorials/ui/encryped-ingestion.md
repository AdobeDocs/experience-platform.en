---
title: Ingest Encrypted Data in the Sources UI Workspace
description: Learn how to ingest encrypted data in the sources UI workspace.
hide: true
hidefromtoc: true
exl-id: 34aaf9b6-5c39-404b-a70a-5553a4db9cdb
---
# Ingest encrypted data in the sources UI

Read this guide to learn how you can ingest encrypted data to Adobe Experience Platform using cloud storage sources for batch data.

## Prerequisites

* Encrypt your data

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
