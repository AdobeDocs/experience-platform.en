---
title: Amazon Kinesis destination
seo-title: Amazon Kinesis destination
description: Create a real-time outbound connection to your Amazon Kinesis storage to stream data from Adobe Experience Platform.
seo-description: Create a real-time outbound connection to your Amazon Kinesis storage to stream data from Adobe Experience Platform.
---

# (Beta) Amazon Kinesis destination


>[!IMPORTANT]
>
>The [!DNL Amazon Kinesis] destination in Adobe Real-time CDP is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

The [!DNL Kinesis Data Streams] service by Amazon Web Services allows you to collect and process large streams of data records in real time. 

You can create a real-time outbound connection to your [!DNL Amazon Kinesis] storage to stream data from Adobe Experience Platform. 

* For more information about [!DNL Amazon Kinesis], see the [Amazon documentation](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).
* To connect to [!DNL Amazon Kinesis] using API calls, see the [Streaming destinations API tutorial](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md).
* To connect to [!DNL Amazon Kinesis] using the Adobe Real-time CDP user interface, see the sections below.

![Amazon Kinesis in the UI](/help/rtcdp/destinations/assets/aws-kinesis-destination.png)


## Use Cases {#use-cases}

By using streaming destinations such as Amazon Kinesis, you can easily feed high-value segmentation events and associated profile attributes into your systems of choice.

For example, a prospect downloaded a white-paper which qualifies them into a "high-propensity to convert" segment. By mapping the segment that the prospect falls in to the Amazon Kinesis destination, you would receive this event in Amazon Kinesis. There, you can employ a do-it-yourself approach and describe business logic on top of the event, as you think would work best with your enterprise IT systems.

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including those supported by [!DNL Amazon]. 

For [!DNL Amazon Kinesis] destinations, enter the following information in the create destination workflow:

### In the Account step {#account-step}

* **Amazon Web Services access key and secret key**: In [!DNL Amazon Web Services], generate an access key - secret access key pair to grant Adobe Real-time CDP access to your [!DNL Amazon Kinesis] account. Learn more in the [Amazon Web Services documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **region**: Indicate which [!DNL Amazon Web Services] region to stream data to.

![Input fields in the account step](/help/rtcdp/destinations/assets/aws-kinesis-account-step.png)

### In the Authentication step {#authentication-step}

* **Name**: Provide a name for your connection to [!DNL Amazon Kinesis]
* **Description**: Provide a description for your connection to [!DNL Amazon Kinesis].
* **stream**: Provide the name of your existing data stream in your [!DNL Amazon Kinesis] account. Adobe Real-time CDP will export data to this stream.

![Input fields in the authentication step](/help/rtcdp/destinations/assets/aws-kinesis-authentication-step.png)

<!--

>[!IMPORTANT]
>
>Adobe Real-time CDP needs `write` permissions on the bucket object where the export files will be delivered.

-->

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.

## Exported data {#exported-data}

Your exported Experience Platform data lands in [!DNL Amazon Kinesis] in JSON format. For example, an event containing the hashed email identity of an audience that has exited a certain segment could look like this:

```

{
   "segmentMembership":{
      "ups":{
         "7841ba61-23c1-4bb3-a495-00d695fe1e93":{
            "lastQualificationTime":"2020-03-03T21:24:39Z",
            "status":"exited"
         }
      }
   }
},
"identityMap":{
   "email_lc_sha256":[
      {
         "id":"655332b5fa2aea4498bf7a290cff017cb4"
      },
      {
         "id":"66baf76ef9de8b42df8903f00e0e3dc0b7"
      }
   ]
}

```

As another example, the event below contains the hashed email address and the last name profile attribute of an audience that has qualified for a certain segment.

```
{
   {
      "segmentMembership":{
         "ups":{
            "7841ba61-23c1-4bb3-a495-00d695fe1e93":{
               "lastQualificationTime":"2020-03-03T21:24:39Z",
               "status":"qualified"
            }
         }
      }
   },
   "identityMap":{
      "email_lc_sha256":[
         {
            "id":"655332b5fa2aea4498bf7a290cff017cb4"
         },
         {
            "id":"66baf76ef9de8b42df8903f00e0e3dc0b7"
         },
         {
            "id":"12335ds29gr33433jk5733f00e05ghtjaa"
         }
      ]
   },
   "person": [
      {
         "lastname":"smith"
      },
      {
         "lastname":"robinson"
      },
      {
         "lastname":"williams"
      },
   ]
}

```



>[!MORELIKETHIS]
>
>* [Connect to Amazon Kinesis and activate data using API calls](/help/rtcdp/destinations/streaming-destinations-api-tutorial.md)
>* [Azure Event Hubs destination](/help/rtcdp/destinations/azure-event-hubs-destination.md)
>* [Destination types and categories](/help/rtcdp/destinations/destination-types.md) 
