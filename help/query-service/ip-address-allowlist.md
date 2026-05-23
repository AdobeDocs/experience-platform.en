---
keywords: IP address, IP range, allow list, allowlist, Query Service, network access
title: IP Address Allowlist for Query Service
description: This page provides updated IP ranges that you can add to your allowlist for secure access to the Query Service.
exl-id: f6745e0f-d387-45f2-9f72-054e721016ff
TQID: https://experienceleague.adobe.com/29vuxFP4lB-AJy1I68P2Cxtt6HzMgE8Azz0F-gUXgI4
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
---
# IP address allowlist {#ip-address-allow-list}

>[!IMPORTANT]
>
> * Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.
> * As of 15-Oct-2024, only the new IP ranges are valid for Query Service access. Outdated IP addresses no longer work. Ensure that your allowlist includes only the new IPs to avoid service disruptions.

## Overview {#overview}

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for Query Service access.

As part of ongoing improvements, Adobe has updated the IP ranges for network access to the Query Service. The previous IP addresses are now deprecated, and only the new IP addresses are valid. It is essential to update your allowlist to include the following new IP ranges to maintain uninterrupted service.

Adobe recommends that you add the following region-specific IP ranges to an allowlist depending on your region. Failing to add these region-specific IP ranges may lead to errors or service disruptions.

## VA7: US and America's customers {#us-americas}

**New IP:** 4.152.211.251

## NLD2: EMEA customers {#emea}

**New IP:** 108.141.12.47

## AUS5: APAC customers {#apac}

**New IP:** 40.82.220.111

## CAN2: Canadian customers {#can2}

**New IP:** 4.172.28.20

## GBR9: United Kingdom customers {#gbr9}

**New IP:** 20.254.80.141

## Set up IP-based restrictions {#set-ip-restrictions}

Use the [Data Distiller Authorization API guides](./auth-api/overview.md) to set up IP-based restrictions. These IP-based restrictions ensure that only approved networks and client machines can access data via SQL in Adobe Experience Platform. Learn how to configure, enforce, and monitor IP restrictions to uphold high security standards, with capabilities for real-time access tracking and alerting.

* [Getting Started guide](./auth-api/getting-started.md)
* [IP Access Endpoint guide](./auth-api/ip-access.md)
* [IP Validation Endpoint guide](./auth-api/validate.md)
