---
keywords: IP address, IP range, allow list, allowlist
title: IP Address Allowlist for Query Service 
description: This page provides IP ranges that you can add to your allow list.
---
# IP address allowlist {#ip-address-allow-list}

>[!IMPORTANT]
>
> * Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.
> * While Adobe supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL Azure Blob].

## Overview {#overview}

<!-- I believe that the sentence below needs to be updated. -->

This page provides IP addresses that you can add to your allowlist, to safely export data from Experience Platform to your [SFTP server](../destinations/catalog/cloud-storage/sftp.md).

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

Adobe recommends that you add the following IP ranges to an allowlist depending on your region. Failing to add your region-specific IP range to your allowlist may lead to errors or non-performance.

## VA7: US and Americas customers {#us-americas}

* 52.138.119.167

## NLD2: EMEA customers {#emea}

* 51.124.70.4

## AUS5: APAC customers {#apac}

* 20.193.36.37

## CAN2: Canadian customers {#can2}

* 20.104.5.248
