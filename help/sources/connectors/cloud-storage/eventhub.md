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

## Use a virtual network to connect to [!DNL Event Hubs] to Platform

You can set up a virtual network to connect [!DNL Event Hubs] to Platform while having firewall measures enabled. To set up a virtual network, you must update the **request body** to the JSON below, when authenticating to [!DNL Azure] and establishing a network rule set for your [!DNL Event Hubs] namespace.

The example payload below is specific to the `VA7` region network. When setting up a virtual network, you must update `subnet.id` with your corresponding region network. The following are the various domains and their corresponding accounts URLs:<ul><li>North America: `VA7`</li><li>Europe: `NLD2`</li><li>Australia: `AUS5`</li></ul>

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

>[!TIP]
>
>You must make a backup of your existing firewall IP filtering rules as they will be deleted after this call.

See the following [[!DNL Event Hubs] document](https://docs.microsoft.com/en-us/rest/api/eventhub/preview/namespaces-network-rule-set/create-or-update-network-rule-set) for more information on network rule sets.

## Connect [!DNL Event Hubs] to Platform

The documentation below provides information on how to connect [!DNL Event Hubs] to Platform using APIs or the user interface:

### Using APIs

- [Create a Event Hubs source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/eventhub.md)
- [Collect streaming data using the Flow Service API](../../tutorials/api/collect/streaming.md)

### Using the UI

- [Create a Event Hubs source connection in the UI](../../tutorials/ui/create/cloud-storage/eventhub.md)
- [Configure a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/streaming/cloud-storage-streaming.md)
