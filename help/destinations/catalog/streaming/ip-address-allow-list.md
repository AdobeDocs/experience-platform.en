---
keywords: IP address, IP range, allow list destinations, allowlist, allowlist streaming destinations
title: IP address allow list for streaming destinations 
type: Documentation
description: This page provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to your HTTP REST API endpoint.
---
# IP address allow list for streaming destinations {#ip-address-allow-list}

>[!IMPORTANT]
>
> * Adobe recommends that you bookmark this page and revisit it every three months to check for the latest IP addresses. Adobe does not provide notification of new IP ranges.
> * The list of IPs documented here *does not* apply to any destinations you build using [[!DNL Destination SDK]](/help/destinations/destination-sdk/overview.md).

## Overview {#overview}

The IP ranges documented here apply to the following destinations:

* [HTTP API destination](./http-destination.md)
* [[!DNL Amazon Kinesis]](/help/destinations/catalog/cloud-storage/amazon-kinesis.md)
* [[!DNL Azure Event Hubs]](/help/destinations/catalog/cloud-storage/azure-event-hubs.md)

Outbound traffic from Experience Platform to these destinations always goes through the IPs listed on this page.

This page provides IP ranges that you can add to your allow list, to safely export data from Experience Platform to your HTTP endpoint, [!DNL Amazon Kinesis], or [!DNL Azure Event Hubs] instance. This functionality is especially useful if your HTTP endpoint is located behind an enterprise firewall or if your company security and compliance standards require a list of IP ranges to be allow listed.

You can define network access controls through your network firewall. By specifying the appropriate IP range, you can allow traffic for the data transfer service.

Adobe recommends that you add the following IP ranges to an allow list prior to working with the destinations mentioned above on this page. Failing to add your region-specific IP range to your allow list may lead to errors or non-performance when using these streaming destinations.

## VA7: US and Americas customers {#us-americas}

`20.186.185.239`
`40.70.154.136/29`
`52.254.106.160/28`
`52.254.106.176/28`
`52.254.105.192/28`
`20.186.185.181`
`52.254.107.64/28`
`52.254.107.80/28`
`52.254.106.144/28`
`52.254.106.0/28`
`52.254.107.16/28`
`52.254.107.32/28`
`52.254.106.224/28`
`20.186.185.227`
`52.254.106.192/28`
`52.254.107.128/28`
`52.254.106.208/28`
`52.254.106.240/28`
`52.254.107.0/28`
`52.254.107.144/28`

## NLD2: EMEA customers {#emea}

`40.74.4.160/28`
`40.74.6.128/28`
`40.74.7.128/28`
`40.74.4.176/28`
`51.144.184.248/29`
`40.74.7.208/28`
`52.142.236.87`
`20.50.23.153`
`40.74.4.144/28`
`40.74.7.160/28`
`40.74.3.176/28`
`40.74.6.144/28`
`40.74.6.80/28`
`40.74.5.128/28`
`40.74.7.144/28`
`40.74.7.176/28`
`40.74.6.96/28`
`40.74.6.112/28`
`51.105.144.1`
`40.74.7.192/28`
`51.105.144.81`
`51.124.70.4`

## AUS5: APAC customers {#apac}

`20.43.104.80/28`
`20.43.104.16/28`
`20.43.104.128/28`
`20.40.188.166`
`20.40.191.224/28`
`20.43.104.176/28`
`20.43.104.0/28`
`20.43.105.0/28`
`20.43.105.48/28`
`20.40.191.240/28`
`20.43.104.192/28`
`20.40.188.227`
`20.40.188.194`
`20.43.104.144/28`
`20.43.104.160/28`
`20.43.104.96/28`
`20.43.105.32/28`
`20.43.104.112/28`
`20.43.105.16/28`
`20.43.104.48/28`
`20.40.191.96/28`
`20.43.104.32/28`
`20.43.104.64/28`