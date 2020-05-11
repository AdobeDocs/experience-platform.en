---
title: AWS Kinesis destination
seo-title: AWS Kinesis destination
description: Create a real-time outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.
seo-description: Create a real-time outbound connection to your AWS Kinesis storage to stream data from Adobe Experience Platform.
---

# AWS Kinesis destination

## Overview

The [!DNL Kinesis Data Streams] service by AWS allows you to collect and process large streams of data records in real time. 

You can create a real-time outbound connection to your [!DNL AWS Kinesis] storage to stream data from Adobe Experience Platform. 

* For more information about [!DNL Amazon Kinesis], see the [Amazon documentation](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).
* To connect to [!DNL AWS Kinesis] using API calls, see the [Streaming destinations API tutorial].
* To connect to [!DNL AWS Kinesis] using the Adobe Real-time CDP user interface, see the sections below.

![AWS Kinesis in the UI](/help/rtcdp/destinations/assets/aws-kinesis-destination.png)

## Connect destination {#connect-destination}

See [Cloud storage destinations workflow ](/help/rtcdp/destinations/cloud-storage-destinations-workflow.md)for instructions on how to connect to your cloud storage destinations, including those supported by [!DNL AWS]. 

For [!DNL AWS Kinesis] destinations, enter the following information in the create destination workflow:

### In the Authentication step

* **AWS Kinesis access key and secret key**: In [!DNL AWS Kinesis], generate an access key - secret access key pair to grant Adobe Real-time CDP access to your [!DNL AWS Kinesis] account. Learn more in the [AWS Kinesis documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **region**: Indicate which [!DNL AWS] region to stream data to.

![Input fields in the authentication step](/help/rtcdp/destinations/assets/aws-kinesis-authentication-step.png)

### In the Setup step

* **Name**: Provide a name for your connection to [!DNL AWS Kinesis]
* **Description**: Provide a description for your connection to [!DNL AWS Kinesis].
* **stream**: Provide a name for the stream to your [!DNL AWS Kinesis] destination

![Input fields in the setup step](/help/rtcdp/destinations/assets/aws-kinesis-setup-step.png)

<!--

>[!IMPORTANT]
>
>Adobe Real-time CDP needs `write` permissions on the bucket object where the export files will be delivered.

-->

## Activate segments {#activate-segments}

See [Activate profiles and segments to a destination](/help/rtcdp/destinations/activate-destinations.md) for information about the segment activation workflow.

## Exported data

Your exported Experience Platform data lands in [!DNL AWS Kinesis] in JSON format. For example, an event containing the hashed email identity of an audience that has exited a certain segment could look like this:

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
},

```



>[!MORELIKETHIS]
>
>* Link to AWS Kinesis API tutorial
>* [Azure Event Hubs destination](/help/rtcdp/destinations/azure-event-hubs-destination.md)
>* [Destination types and categories](/help/rtcdp/destinations/destination-types.md) 
