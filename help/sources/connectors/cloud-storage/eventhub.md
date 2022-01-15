---
keywords: Experience Platform;home;popular topics;Azure Event Hubs;azure event hubs;Event Hubs;event hubs
solution: Experience Platform
title: Azure Event Hubs Source Connector Overview
topic-legacy: overview
description: Learn how to connect Azure Event Hubs to Adobe Experience Platform using APIs or the user interface.
exl-id: b4d4bc7f-2241-482d-a5c2-4422c31705bf
---

# [!DNL Azure Event Hubs] connector

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure]. You can bring your data from these systems into Platform.

Cloud storage sources can bring your own data into Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow. Platform allows you to bring in data from [!DNL Event Hubs] in real time.

## Scaling with [!DNL Event Hubs]

The scale factor of your [!DNL Event Hubs] instance must be increased if you need to ingress high volume data, increase parallelism, or raise the speed of the ingestion Platform.

### Ingress higher volume data

Currently, the maximum volume of data that you can bring from your [!DNL Event Hubs] account to Platform is 2000 records per second. To scale up and ingest higher volume data, please contact your Adobe representative.

### Increase parallelism on [!DNL Event Hubs] and Platform

Parallelism refers to the simultaneous execution of the same tasks on multiple processing units in order to increase speed and performance. You can increase parallelism on the [!DNL Event Hubs] side by increasing partition or by acquiring more processing units for your [!DNL Event Hubs] account. See this [[!DNL Event Hubs] document on scaling](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-scalability) for more information.

To increase the rate of speed of ingestion on the Platform side, Platform must increase the number of tasks in the source connector to read from your [!DNL Event Hubs] partitions. Once you have increased parallelism on the [!DNL Event Hubs] side, please contact your Adobe representative to scale Platform tasks based on your new partition. Currently, this process is not automated.

## Use a virtual network to connect to [!DNL Event Hubs] to Platform

You can set up a virtual network to connect [!DNL Event Hubs] to Platform while having your firewall measures enabled. To set up a virtual network, head to this [[!DNL Event Hubs] network rule set document](https://docs.microsoft.com/en-us/rest/api/eventhub/preview/namespaces-network-rule-set/create-or-update-network-rule-set#code-try-0) and then select **Try It** from the REST API panel. Next, authenticate your [!DNL Azure] account using your credentials and then select the [!DNL Event Hubs] namespace, resource group, and subscription that you want to bring to Platform.

Once set up, update the **request body** with the JSON that corresponds to your network region, from the list below:

>[!TIP]
>
>You must make a backup of your existing firewall IP filtering rules as they will be deleted after this call.

### VA7: North America

```json
{
  "properties": {
    "defaultAction": "Deny",
    "virtualNetworkRules": [
      {
        "subnet": {
          "id": "/subscriptions/93f21779-b1fd-49ee-8547-2cdbc979a44f/resourceGroups/ethos_12_prod_va7_network/providers/Microsoft.Network/virtualNetworks/ethos_12_prod_va7_network_10_19_144_0_22/subnets/ethos_12_prod_va7_network_10_19_144_0_22"
        },
        "ignoreMissingVnetServiceEndpoint": true
      },
    ],
    "ipRules": []
  }
}
```

### NLD2: Europe

```json
{
  "properties": {
    "defaultAction": "Deny",
    "virtualNetworkRules": [
      {
        "subnet": {
          "id": "/subscriptions/40bde086-46ad-44c3-afba-c306f54b64ec/resourceGroups/ethos_12_prod_va7_network/providers/Microsoft.Network/virtualNetworks/ethos_12_prod_nld2_network_10_20_40_0_23/subnets/ethos_12_prod_nld2_network_10_20_40_0_23"
        },
        "ignoreMissingVnetServiceEndpoint": true
      },
    ],
    "ipRules": []
  }
}
```

### AUS5: Australia

```json
{
  "properties": {
    "defaultAction": "Deny",
    "virtualNetworkRules": [
      {
        "subnet": {
          "id": "/subscriptions/1618ef18-9edc-48bf-88dd-61cc979629b5/resourceGroups/ethos_12_prod_aus5_network/providers/Microsoft.Network/virtualNetworks/ethos_12_prod_aus5_network_10_21_116_0_22/subnets/ethos_12_prod_aus5_network_10_21_116_0_22"
        },
        "ignoreMissingVnetServiceEndpoint": true
      },
    ],
    "ipRules": []
  }
}
```

See the following [[!DNL Event Hubs] document](https://docs.microsoft.com/en-us/rest/api/eventhub/preview/namespaces-network-rule-set/create-or-update-network-rule-set) for more information on network rule sets.

## Connect [!DNL Event Hubs] to Platform

The documentation below provides information on how to connect [!DNL Event Hubs] to Platform using APIs or the user interface:

### Using APIs

- [Create a Event Hubs source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/eventhub.md)
- [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

- [Create a Event Hubs source connection in the UI](../../tutorials/ui/create/cloud-storage/eventhub.md)
- [Configure a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)
