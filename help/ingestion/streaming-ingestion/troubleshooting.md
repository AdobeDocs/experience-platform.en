---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Streaming ingestion troubleshooting
topic: troubleshooting
---

# Streaming ingestion troubleshooting guide

This document provides answers to frequently asked questions about streaming ingestion on Adobe Experience Platform. For questions and troubleshooting related to other Platform services, including those that are encountered across all Platform APIs, please refer to the [Experience Platform troubleshooting guide](../../landing/troubleshooting.md).

Adobe Experience Platform Data Ingestion provides RESTful APIs that you can use to ingest data into Experience Platform. The ingested data is used to update individual customer profiles in near real-time, allowing you to deliver personalized, relevant experiences across multiple channels. Please read the [Data Ingestion overview](../home.md) for more information on the service and the different ingestion methods. For steps on how to use streaming ingestion APIs, please read the [streaming ingestion overview](../streaming-ingestion/overview.md).

- **Streaming data to Platform**
    - [How do I know that the payload I'm sending is formatted properly?](#how-do-i-know-that-the-payload-im-sending-is-formatted-properly)
    - [Can I validate a request payload before sending it to Platform?](#can-i-validate-a-request-payload-before-sending-it-to-platform)
    - [What happens when synchronous validation is requested on an edge that does not support it?](#what-happens-when-synchronous-validation-is-requested-on-an-edge-that-does-not-support-it)
    - [How do I authenticate sent data?](#how-do-i-authenticate-sent-data)
    - [What is the latency for streaming data to Real-time Customer Profile?](#what-is-the-latency-for-streaming-data-to-real-time-customer-profile)
    - [Can I include multiple messages in the same API request?](#can-i-include-multiple-messages-in-the-same-api-request)
- **Response handling and data management**
    - [How do I know if the data I'm sending is being received?](#how-do-i-know-if-the-data-im-sending-is-being-received)
    - [Why is my streaming data not available in the Data Lake?](#why-is-my-streaming-data-not-available-in-the-data-lake)
    - [How do I parse the response returned for the API request?](#how-do-i-parse-the-response-returned-for-the-api-request)
    - [Why are my sent messages not being received by Real-time Customer Profile?](#why-are-my-sent-messages-not-being-received-by-real-time-customer-profile)

## FAQ

The following is a list of answers to frequently asked questions about streaming ingestion.

### How do I know that the payload I'm sending is formatted properly?

Data Ingestion leverages Experience Data Model (XDM) schemas to validate the format of incoming data. Sending data that does not conform to the structure of a pre-defined XDM schema will cause ingestion to fail. For more information on XDM and its use in Experience Platform, see the [XDM System overview](../schema_registry/xdm_system/xdm_system_in_experience_platform.md).

Streaming ingestion supports two modes of validation: synchronous and asynchronous. Each validation method handles failed data differently.

**Synchronous validation** should be used during your development process. Records that fail validation are dropped and return an error message as to why they failed (for example: "Invalid XDM Message Format").

**Asynchronous validation** should be used in production. Any malformed data that does not pass validation is sent to the Data Lake as a failed batch file, where it can be retrieved later for further analysis.

For more information on synchronous and asynchronous validation, see the [streaming validation overview](../quality/streaming-validation.md). For steps on how to view batches that fail validation, please refer to the guide on [retrieving failed batches](../quality/retrieve-failed-batches.md).

### Can I validate a request payload before sending it to Platform?

Request payloads can only be evaluated after they have been sent to Platform. When performing synchronous validation, valid payloads return populated JSON objects while invalid payloads return error messages. During asynchronous validation, the service detects and sends any malformed data to the Data Lake where it can later be retrieved for analysis. See the [streaming validation overview](../quality/streaming-validation.md) for more information.

### What happens when synchronous validation is requested on an edge that does not support it?

When synchronous validation is not supported for the requested location, a 501 error response is returned. Please see the [streaming validation overview](../quality/streaming-validation.md) for more information on synchronous validation.

<!-- ## How do I authenticate sent data?

Experience Platform supports secured data collection. When authenticated data collection is enabled, clients must send a JSON Web Token (JWT) and their IMS Organization ID as request headers. For more information on how to send authenticated data to Platform, please see the guide on [authenticated data collection][Authenticated Data Collection]. -->

### What is the latency for streaming data to Real-time Customer Profile?

Streamed events are generally reflected in Real-time Customer Profile in under 60 seconds. Actual latencies can vary due to data volume, message size, and bandwidth limitations.

### Can I include multiple messages in the same API request?

You can group multiple messages within a single request payload and stream them to Platform. When used correctly, grouping multiple messages within a single request is an excellent way to optimize your data operations. Please read the tutorial on [sending multiple messages in a request](../tutorials/streaming-multiple-messages.md) for more information. 

### How do I know if the data I'm sending is being received?

All data that is sent to Platform (successfully or otherwise) is stored as batch files before being persisted in datasets. The processing status of batches appear within the dataset they were sent to.

You can verify if data has been successfully ingested by checking dataset activity using the [Experience Platform user interface](https://platform.adobe.com). Click **Datasets** in the left-navigation to display a list of datasets. Select the dataset you are streaming to from the displayed list to open its *Dataset activity* page, showing all batches sent during a selected time period. For more information about using Experience Platform to monitor data streams, see the guide on [monitoring streaming data flows](../quality/monitor-data-flows.md).

If your data failed to ingest and you want to recover it from Platform, you can retrieve the failed batches by sending their IDs to the [Data Access API][Data Access Service API]. See the guide on [retrieving failed batches](../quality/retrieve-failed-batches.md) for more information.

### Why is my streaming data not available in the Data Lake?

There are a variety of reasons why batch ingestion may fail to reach the Data Lake, such as invalid formatting, missing data, or system errors. To determine why your batch failed, you must retrieve the batch using the [Data Ingestion Service API][Data Ingestion Service] and view its details. For detailed steps on retrieving a failed batch, see the guide on [retrieving failed batches](../quality/retrieve-failed-batches.md).

### How do I parse the response returned for the API request?

You can parse through a response by first checking the server response code to determine whether your request was accepted. If a successful response code is returned, you can then review the `responses` array object to determine the status of the ingestion task.

A successful single-message API request returns status code 200. A successful (or partially successful) batched message API request returns status code 207.

The following JSON is an example response object for an API request with two messages: one successful and one failed. Messages that successfully stream return an `xactionId` property. Messages that fail to stream return a `statusCode` property and a response `message` with more information.

```JSON
{
    "inletId": "9b0cb233972f3b0092992284c7353f5eead496218e8441a79b25e9421ea127f5",
    "batchId": "1565638336649:1750:244",
    "receivedTimeMs": 1565638336705,
    "responses": [
        {
            "xactionId": "1565650704337:2124:92:3"
        },
        {
            "statusCode": 400,
            "message": "inletId: [9b0cb233972f3b0092992284c7353f5eead496218e8441a
                79b25e9421ea127f5] 
                imsOrgId: [{IMS_ORG}] 
                Message has unknown xdm format"
        }
    ]
}
```

### Why are my sent messages not being received by Real-time Customer Profile? 

If Real-time Customer Profile rejects a message, it is most likely due to incorrect identity information. This can be the result of providing an invalid value or namespace for an identity.

There are two types of identity namespaces: default and custom. When using custom namespaces, make sure the namespace has been registered within Identity Service. See the [identity namespace overview](../../identity-service/namespaces.md) for more information on using default and custom namespaces.

You can use the [Experience Platform UI](https://platform.adobe.com) to see more information on why a message failed ingestion. Click **Monitoring** in the left-navigation, then view the _Streaming end-to-end_ tab to see message batches streamed during a selected time period.