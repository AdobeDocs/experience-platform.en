---
keywords: IP address, IP range, allow list, allowlist, Query Service, network access
title: IP Address Allowlist for Query Service
description: This page provides updated IP ranges that you can add to your allowlist for secure access to the Query Service.
exl-id: f6745e0f-d387-45f2-9f72-054e721016ff
---
# IP address allowlist {#ip-address-allow-list}

>[!IMPORTANT]
>
> * Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.
> * While Adobe supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL Azure Blob].
> * From 15-Oct-2024, new IP ranges have replaced the existing ones. Please ensure that both old and new IPs are added to your allowlist before this date to avoid any disruption in service.

## Overview {#overview}

This page provides IP addresses that you can add to your allowlist to safely export data from Experience Platform to your [SFTP server](../destinations/catalog/cloud-storage/sftp.md).

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

As part of ongoing improvements, Adobe has updated the IP ranges used for network access to the Query Service on 15-Oct-2024. The existing IP addresses will be deprecated, and new IP addresses will take their place. It is crucial to add both the old and new IP ranges to your allowlist during the transition period to ensure uninterrupted service.

Adobe recommends that you add the following region-specific IP ranges to an allowlist depending on your region. Failing to add your region-specific IP ranges to your allowlist may lead to errors or non-performance.

## VA7: US and Americas customers {#us-americas}

**Old IP:** 20.14.241.153  
**New IP:** 4.152.211.251

## NLD2: EMEA customers {#emea}

**Old IP:** 20.101.233.128  
**New IP:** 108.141.12.47

## AUS5: APAC customers {#apac}

**Old IP:** 20.248.220.69  
**New IP:** 40.82.220.111

## CAN2: Canadian customers {#can2}

**Old IP:** 4.172.1.139  
**New IP:** 4.172.28.20

## GBR9: United Kingdom customers {#gbr9}

**Old IP:** 20.108.200.9  
**New IP:** 20.254.80.141

