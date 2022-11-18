---
title: AWS Extension Overview
description: Learn about the AWS extension for event forwarding in Adobe Experience Platform.
---
# [!DNL AWS] extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

Amazon Web Services (AWS) is a cloud computing platform provided by Amazon that includes a mixture of infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS) and packaged-software-as-a-service (SaaS) offerings. AWS services can offer an organization tools such as compute power, database storage and content delivery services.
The AWS [event forwarding](../../../ui/event-forwarding/overview.md) extension leverages the [Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/introduction.html) service to send events from the Adobe Experience Platform Edge Network to AWS for further processing.

## Prerequisites

In order to use this extension, you must...

You must have an AWS account in order to use this extension.
You also need to [create a kinesis data stream using the AWS Management Console](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-create-a-stream.html).

## Install the extension {#install}

To install the AWS extension in the UI, navigate to Event Forwarding and select a property to add the extension to, or create a new property instead.
Once you have selected or created the desired property, navigate to Extensions > Catalog. Search for "Microsoft Azure", and then select Install on the Azure Extension.
Inside the extension configuration view, you need to provide the connection credentials. [Learn how to get your access key ID and secret access key](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html).
An access policy needs to be attached to the user used to generate the access key ID ad the access key. The policy needs to be configured so that it gives access rights to the Kinesis data stream. Check the Example 2 in this [page](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html#kinesis-using-iam-examples) to see how the policy needs to look.

## Configure an event forwarding rule {#rule}

Start creating a new event forwarding [rule](../../../ui/managing-resources/rules.md) and configure its conditions as desired. When selecting the actions for the rule, select the Microsoft Azure extension, then select the Send Data to Event Hubs action type.

When setting up the action configuration, you are prompted to assign data elements to the various properties that will be sent to the Azure event hub:

### Kinesis Data Stream Details

Stream Name - The name of the stream to put the data record into.

AWS Region - The AWS region where the Kinesis data stream is created.

Partition Key - A partition key is used to group data by shard within a stream.

Kinesis Data Streams segregates the data records belonging to a stream into multiple shards. It uses the partition key that is associated with each data record to determine which shard a given data record belongs to. When an application puts data into a stream, it must specify a partition key.

A good partition key for distributing customers might be the customer number, since it is different for each customer. A poor partition key might their zip code because they all live in the same area nearby. The simple rule is that you should choose a Partition Key that has a range of different values.

Read more about how to scale your Kinesis data streams.

### Data

Payload - This field contains the data that will be forwarded to the Kinesis Data Stream. The data can be a JSON, or a data element.
