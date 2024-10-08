---
title: IP address allow list for file-based cloud storage destinations
type: Documentation
description: This page provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to cloud storage destinations.
exl-id: 0b8086aa-786e-4244-b2a5-a3f57ad59a8b
---
# IP address allowlist for file-based cloud storage destinations {#ip-address-allow-list-cloud-storage}

>[!IMPORTANT]
>
> * Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.
> * While Adobe supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL Azure Blob].

## Applicability {#applicability}

The IP range information on this page applies to the following file-based cloud storage connectors in the destinations catalog:

* [[!UICONTROL Amazon S3]](./amazon-s3.md)
* [[!UICONTROL Google Cloud Storage]](google-cloud-storage.md)
* [SFTP](./sftp.md)

>[!IMPORTANT]
>
>The IP ranges documented on this page are *not* supported for the following file-based cloud storage destinations: [!UICONTROL Azure Blob], [!UICONTROL Azure Data Lake Storage Gen2] and [!UICONTROL Data Landing Zone].

## Overview {#overview}

This page provides IP ranges that you can add to your allowlist, to safely export data from Experience Platform to several cloud storage destinations.

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

Adobe recommends that you add the following IP ranges to an allowlist prior to working with cloud storage destination connections. Failing to add your region-specific IP range to your allowlist may lead to errors or non-performance when using the cloud storage destination connections.

## Required for all customers {#all-customers}

* `52.247.108.70`

## US customers {#us-customers}

* `52.252.71.64/29`

## Canada customers {#canada-customers}

* `20.220.135.16/29`

## EMEA customers {#emea-customers}

* `51.137.8.208/29`

## UK customers {#uk-customers}

* `20.26.133.96/29`

## APAC customers {#apac-customers}

* `20.53.201.168/29`
