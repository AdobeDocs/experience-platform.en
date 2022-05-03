---
keywords: Experience Platform;home;popular topics;data prep;Data Prep;streaming;upsert;streaming upsert
title: Streaming Upserts in Data Prep
description: This document provides information on how to use streaming upserts in Data Prep.
---
# Streaming Upserts in [!DNL Data Prep]

Through streaming upserts, [!DNL Data Prep] allows you to retain the format of your data while translating data to Profile Service PATCH requests in flight, during ingestion. Based on the inputs you provide, [!DNL Data Prep] allows you to send a single API payload and translate them to both Profile Service PATCH and Identity Service CREATE requests. 

This document provides information on how to stream upserts in [!DNL Data Prep].

<!--
The goal of Streaming Upserts support in Data Prep is to extend this functionality by allowing customers to retain their data formats as-is and translate that data format to Profile Patch requests in flight during ingestion and eventually to CDC when CDC is available. Data Prep will support receiving a single payload API from customers and translate them to Profile Patch requests and Identity Create requests based on the inputs given. This effort does not change any other existing behavior of Profile Patch requests or other ingestion processes. All other considerations and limitations will remain as is and will be addressed as part of the CDC integration or other initiatives.
-->

## Getting started

This overview requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Data Prep]](./home.md): Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).
* [[!DNL Identity Service]](../identity-service/home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
* [[Real-time Customer Profile]](../profile/home.md): Provides a unified, customer profile in real time based on aggregated data from multiple sources.

## How to use Streaming Upserts in [!DNL Data Prep]

>[!NOTE]
>
>The following sources support the use of Streaming Upserts:<ul><li>[[!DNL Amazon Kinesis]](../sources/connectors/cloud-storage/kinesis.md)</li><li>[[!DNL Azure Event Hubs]](../sources/connectors/cloud-storage/eventhub.md)</li><li>[[!DNL HTTP API]](../sources/connectors/streaming/http.md)</li></ul>

### Streaming Upserts high-level workflow

* You must create and enable a dataset for [!DNL Profile] consumption;
* If identity stitching is required, then you must create an additional dataset **with the same schema** as the dataset that you created and enabled for [!DNL Profile];
* A dataflow must be created to map your incoming request to the [!DNL Profile] dataset;
* Next, you must update the incoming request to include the necessary headers. These headers define:
  * The data operation that is needed to be performed with [!DNL Profile]: Create and Merge;
  * The optional identity operation to be performed with [!DNL Identity Service]: Create.

### Configuring the identity dataset

If identity stitching is required, then you must create and pass an additional dataset in the incoming payload. The identity dataset must meet the following criteria:

* The identity dataset must have its associated schema as the [!DNL Profile] dataset. A mismatch of schemas may lead to inconsistent system behavior;
* However, you must ensure that the identity dataset is different from the [!DNL Profile] dataset. If the datasets are the same, then data will be treated as "overwrite" and not as upsert;
* While the initial dataset must be enabled for [!DNL Profile], the identity dataset **cannot** be enabled for [!DNL Profile]. Otherwise, data will also be treated as overwrite, instead of upsert.

