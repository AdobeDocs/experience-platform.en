---
title: IP address allow list SFTP destinations
type: Documentation
description: This page provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to your SFTP server.
exl-id: 0b8086aa-786e-4244-b2a5-a3f57ad59a8b
---
# IP address allowlist for SFTP destinations {#ip-address-allow-list-sftp}

>[!IMPORTANT]
>
> * Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.
> * While Adobe supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL Azure Blob].

## Overview {#overview}

This page provides IP ranges that you can add to your allowlist, to safely export data from Experience Platform to your [SFTP server](./sftp.md).

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

Adobe recommends that you add the following IP ranges to an allowlist prior to working with cloud storage destination connections. Failing to add your region-specific IP range to your allowlist may lead to errors or non-performance when using the cloud storage destination connections.

## Required for all customers

* `52.247.108.70`

## US customers

* `52.252.71.64/29`

## EMEA customers

* `51.137.8.208/29`

## APAC customers

* `20.53.201.168/29`
