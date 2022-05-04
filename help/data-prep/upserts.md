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
* While the initial dataset must be enabled for [!DNL Profile], the identity dataset **should not** be enabled for [!DNL Profile]. Otherwise, data will also be treated as overwrite, instead of upsert.

#### Required fields in the schemas associated with the identity dataset

If your schema contains required fields, validation of the dataset must be suppressed in order to enable [!DNL Identity Service] to receive just the identities. You can suppress validation by applying the `disabled` value to the `acp_validationContext` parameter, as shown below:

```shell
curl --location --request PATCH 'https://platform.adobe.io/data/foundation/catalog/dataSets/62257bef7a75461948ebcaaa' \
--header 'x-gw-ims-org-id: C6420AAF5CD2749D0A495C60@AdobeOrg' \
--header 'Authorization: Bearer <token>' \
--header 'x-api-key: acp_core_validation' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tags":{
        "acp_validationContext": ["disabled"]
        }
}'
```

>[!TIP]
>
>You do not need to do any additional configuration if the schema associated with the identity dataset does not have any required fields.

## Understanding the incoming payload structure 

### With identity stitching

```shell
{
  "header": {
    "flowId": "923e2ac3-3869-46ec-9e6f-7012c4e23f69",
    "imsOrgId": "C6420AAF5CD2749D0A495C60@AdobeOrg",
    "datasetId": "621fc19ab33d941949af16c8",
    "operations": {
        "data": "create" (default)/"merge"/"delete",
        "identity": "create",
        "identityDatasetId": "621fc19ab33d941949af16d9"
    }
  }
... //the raw data attributes goes in here as "body"
}
```

| Parameter | Description |
| --- | --- |
| `flowId` | The `flowId` that corresponds with your dataflow. This dataflow should correspond to the source connection created with [!DNL Amazon Kinesis], [!DNL Azure Event Hubs], or [!DNL HTTP API]. This dataflow should also have a [!DNL Profile]-enabled dataset as the target dataset and the [!DNL Profile] dataset should match the `datasetId` parameter. |
| `imsOrgId` | The ID that corresponds with your organization. |
| `datasetId` | The ID [!DNL Profile]-enabled target dataset of your dataflow. |
| `operations` | This parameter outlines the actions that [!DNL Data Prep] will take based on the incoming request. |
| `operations.data` | Defines the actions need to be performed in the [!DNL Profile Service]. |
| `operations.identity` | Defines the operations permitted by the [!DNL Identity Service] on the data.  |
| `operations.identityDatasetId` | (Optional) The ID of the identity dataset that is required only if identity stitching is needed. |

#### Supported operations

The following operations are supported by [!DNL Profile Service]:

| Operations | Description |
| --- | --- | 
| `create` | The default operation. This generates an XDM Entity Create operation for [!DNL Profile Service]. |
| `merge` | This generates an  XDM Entity Update for [!DNL Profile Service]. |
| `delete` | This generates an XDM Entity Delete for [!DNL Profile Service] and permanently removes the data from the [!DNL Profile Store]. |

The following operations are supported by [!DNL Identity Service]:

| Operations | Descriptions |
| --- | --- |
| `create` | The only permitted operation for this parameter. If `create` is passed as value for `operations.identity`, then [!DNL Data Prep] generates an XDM Entity Create request for [!DNL Identity Service]. If the identity already exists, then the identity is ignored. **Note:** If `operations.identity` is set to `create`, then the `identityDatasetId` must also be specified. The XDM Entity Create message generated internally by [!DNL Data Prep] component will be generated for this dataset id. |

### Without identity stitching

If identity stitching is not required, then you can omit the `identity` and `identityDatasetId` parameters in the operations. Doing so sends data only to [!DNL Profile Service] and skips the [!DNL Identity Service]. See the payload below for an example:

```shell

{
  "header": {
    "flowId": "923e2ac3-3869-46ec-9e6f-7012c4e23f69",
    "imsOrgId": "C6420AAF5CD2749D0A495C60@AdobeOrg",
    "datasetId": "621fc19ab33d941949af16c8",
    "operations": {
        "data": "create"/"merge"/"delete",
    }
  }
... //the raw data attributes goes in here as "body"
}
```

