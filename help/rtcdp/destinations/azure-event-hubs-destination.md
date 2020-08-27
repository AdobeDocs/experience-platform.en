---
keywords: Azure event hub destination;azure event hub;azure eventhub
title: (Beta) Azure Event Hubs destination
seo-title: (Beta) Azure Event Hubs destination
description: Create a real-time outbound connection to your Azure Event Hubs storage to stream data from Experience Platform.
seo-description: Create a real-time outbound connection to your Azure Event Hubs storage to stream data from Experience Platform.
---

# (Beta) [!DNL Azure Event Hubs] destination

>[!IMPORTANT]
>
>The [!DNL Azure Event Hubs] destination in Adobe Real-time CDP is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

[!DNL Azure Event Hubs] is a big data streaming platform and event ingestion service. It can receive and process millions of events per second. Data sent to an event hub can be transformed and stored by using any real-time analytics provider or batching/storage adapters.

You can create a real-time outbound connection to your [!DNL Azure Event Hubs] storage to stream data from Adobe Experience Platform.

* For more information about [!DNL Azure Event Hubs], see the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about).
* To connect to [!DNL Azure Event Hubs] using API calls, see the [Streaming destinations API tutorial](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md).
* To connect to [!DNL Azure Event Hubs] using the Adobe Real-time CDP user interface, see the sections below.

![AWS Kinesis in the UI](/help/rtcdp/destinations/assets/azure-event-hubs-destination.png)

## Use Cases {#use-cases}

By using streaming destinations such as [!DNL Azure Event Hubs], you can easily feed high-value segmentation events and associated profile attributes into your systems of choice.

For example, a prospect downloaded a white-paper which qualifies them into a "high-propensity to convert" segment. By mapping the segment that the prospect falls in to the [!DNL Azure Event Hubs] destination, you would receive this event in [!DNL Azure Event Hubs]. There, you can employ a do-it-yourself approach and describe business logic on top of the event, as you think would work best with your enterprise IT systems.

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including [!DNL Azure Event Hubs]. 

For [!DNL Azure Event Hubs] destinations, enter the following information in the create destination workflow:

### In the Authentication step {#authentication-step}

* **[!UICONTROL SAS Key Name]** and **[!UICONTROL SAS Key]**: Fill in your SAS key name and key. Learn about authenticating to [!DNL Azure Event Hubs] with SAS keys in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/event-hubs/authenticate-shared-access-signature).
* **[!UICONTROL Namespace]**: Fill in your [!DNL Azure Event Hubs] namespace. Learn about [!DNL Azure Event Hubs] namespaces in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create#create-an-event-hubs-namespace).

![Input required in the authentication step](/help/rtcdp/destinations/assets/event-hubs-authentication.png)

### In the Setup step {#setup-step}

* **[!UICONTROL Name]**: Fill in a name for the connection to [!DNL Azure Event Hubs].
* **[!UICONTROL Description]**: Provide a description of the connection.  Examples: "Premium tier customers", "Males interested in kitesurfing".
* **[!UICONTROL eventHubName]**: Provide a name for the stream to your [!DNL Azure Event Hubs] destination.

![Data required in the setup step](/help/rtcdp/destinations/assets/event-hubs-setup-step.png)

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.


## Exported data {#exported-data}

Your exported [!DNL Experience Platform] data lands in [!DNL Azure Event Hubs] in JSON format. For example, the event below contains the email address profile attribute of an audience that has qualified for a certain segment and exited another segment. The identities for this prospect are ECID and email.

```json
{
  "person": {
    "email": "yourstruly@adobe.con"
  },
  "segmentMembership": {
    "ups": {
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93": {
        "lastQualificationTime": "2020-05-25T21:24:39Z",
        "status": "exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae": {
        "lastQualificationTime": "2020-05-25T23:37:33Z",
        "status": "existing"
      }
    }
  },
  "identityMap": {
    "ecid": [
      {
        "id": "14575006536349286404619648085736425115"
      },
      {
        "id": "66478888669296734530114754794777368480"
      }
    ],
    "email_lc_sha256": [
      {
        "id": "655332b5fa2aea4498bf7a290cff017cb4"
      },
      {
        "id": "66baf76ef9de8b42df8903f00e0e3dc0b7"
      }
    ]
  }
}

```


>[!MORELIKETHIS]
>
>* [Connect to Azure Event Hubs and activate data using API calls](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md)
>* [AWS Kinesis destination](/help/rtcdp/destinations/amazon-kinesis-destination.md)
>* [Destination types and categories](/help/rtcdp/destinations/destination-types.md) 