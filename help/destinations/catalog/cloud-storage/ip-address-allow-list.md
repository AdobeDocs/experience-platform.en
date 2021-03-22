---
keywords: IP address, IP range, allow list destinations
title: IP address allow list for cloud storage destinations 
type: Documentation
description: This page provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to your SFTP server, Amazon S3, or Azure Blob storage.
---

# IP address allow list for cloud storage destinations {#ip-address-allow-list}

## Overview {#overview}

>[!IMPORTANT]
>
> Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.

This page provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to your [SFTP server](./sftp.md), [Amazon S3](./amazon-s3.md), or [Azure Blob](./azure-blob.md) storage.

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

You can add the following IP ranges to an allow list prior to working with cloud storage destination connections. Failing to add your region-specific IP range to your allow list may lead to errors or non-performance when using the cloud storage destination connections.

## US customers

* `52.252.71.64/29`

## EMEA customers

* `51.137.8.208/29`

## APAC customers

* `20.53.201.168/29`