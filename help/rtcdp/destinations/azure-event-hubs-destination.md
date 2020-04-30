---
title: Azure Event Hubs destination
seo-title: Azure Event Hubs destination
description: Create a live outbound connection to your Azure Event Hubs storage to stream data from Experience Platform.
seo-description: Create a live outbound connection to your Azure Event Hubs storage to stream data from Experience Platform.
---

# Azure Event Hubs destination

## Overview

Azure Event Hubs is a big data streaming platform and event ingestion service. It can receive and process millions of events per second. Data sent to an event hub can be transformed and stored by using any real-time analytics provider or batching/storage adapters.

You can create a live outbound connection to your Azure Event Hubs storage to stream data from Adobe Experience Platform.

* For more information about Azure Event Hubs, see the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about).
* To connect to Azure Event Hubs using API calls, see [Streaming destinations API tutorial](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md).
* To connect to Azure Event Hubs using the Adobe Real-time CDP user interface, see the sections below.

![AWS Kinesis in the UI](/help/rtcdp/destinations/assets/azure-event-hubs-destination.png)

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including Azure Event Hubs. 

For Azure Event Hubs destinations, enter the following information in the create destination workflow:

### In the Authentication step

* **SAS Key Name** and **SAS Key**: Fill in your SAS key name and key. Learn about authenticating to Azure Event Hubs with SAS keys in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/event-hubs/authenticate-shared-access-signature).
* **Namespace**: Fill in your Azure Event Hubs namespace. Learn about Azure Event Hubs namespaces in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create#create-an-event-hubs-namespace).

![Input required in the authentication step](/help/rtcdp/destinations/assets/event-hubs-authentication-step.png)

### In the Setup step

* **Name**: Fill in a name for the connection to Azure Event Hubs
* **Description**: Provide a description of the connection.  Examples: "Premium tier customers", "Males interested in kitesurfing"
* **eventHubName**: Provide a name for the stream to your Azure Event Hubs destination
* **namespace**: Fill in your Azure Event Hubs namespace, where you will be streaming data. 

![Data required in the setup step](/help/rtcdp/destinations/assets/event-hubs-setup-step.png)

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.


## Exported data

Mention here the format in which customers should expect their data to land in Azure Event Hubs. 


>[!MORELIKETHIS]
>
>* Link to Azure Event Hubs API tutorial
>* [AWS Kinesis destination](/help/rtcdp/destinations/aws-kinesis-destination.md)
>* [Destination types and categories](/help/rtcdp/destinations/destination-types.md) 