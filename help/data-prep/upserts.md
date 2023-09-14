---
keywords: Experience Platform;home;popular topics;data prep;Data Prep;streaming;upsert;streaming upsert
title: Send Partial Row Updates To Real-Time Customer Profile Using Data Prep
description: Learn how to send partial row updates to Real-Time Customer Profile using Data Prep.
exl-id: f9f9e855-0f72-4555-a4c5-598818fc01c2
---
# Send partial row updates to [!DNL Real-Time Customer Profile] using [!DNL Data Prep]

Streaming upserts in [!DNL Data Prep] allows you to send partial row updates to [!DNL Real-Time Customer Profile] data while also creating and establishing new identity links with a single API request.

By streaming upserts, you can retain the format of your data while translating that data to [!DNL Real-Time Customer Profile] PATCH requests during ingestion. Based on the inputs you provide, [!DNL Data Prep] allows you to send a single API payload and translate the data to both [!DNL Real-Time Customer Profile] PATCH and [!DNL Identity Service] CREATE requests. 

This document provides information on how to stream upserts in [!DNL Data Prep].

## Getting started

This overview requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Data Prep]](./home.md): [!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).
* [[!DNL Identity Service]](../identity-service/home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
* [Real-Time Customer Profile](../profile/home.md): Provides a unified, customer profile in real-time based on aggregated data from multiple sources.
* [Sources](../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.

## Use streaming upserts in [!DNL Data Prep] {#streaming-upserts-in-data-prep}

>[!NOTE]
>
>The following sources support the use of streaming upserts:<ul><li>[[!DNL Amazon Kinesis]](../sources/connectors/cloud-storage/kinesis.md)</li><li>[[!DNL Azure Event Hubs]](../sources/connectors/cloud-storage/eventhub.md)</li><li>[[!DNL HTTP API]](../sources/connectors/streaming/http.md)</li></ul>

### Streaming upserts high-level workflow

Streaming upserts in [!DNL Data Prep] works as follows:

* You must first create and enable a dataset for [!DNL Profile] consumption. See the guide on [enabling a dataset for [!DNL Profile]](../catalog/datasets/enable-for-profile.md) for more information.
* If new identities must be linked, then you must also create an additional dataset **with the same schema** as your [!DNL Profile] dataset.
* Once your dataset(s) are prepared, you must create a dataflow to map your incoming request to the [!DNL Profile] dataset;
* Next, you must update the incoming request to include the necessary headers. These headers define:
    * The data operation that is needed to be performed with [!DNL Profile]: `create`, `merge`, and `delete`.
    * The optional identity operation to be performed with [!DNL Identity Service]: `create`.

### Configure the identity dataset

If new identities must be linked, then you must create and pass an additional dataset in the incoming payload. When creating an identity dataset, you must ensure that the following requirements are met:

* The identity dataset must have its associated schema as the [!DNL Profile] dataset. A mismatch of schemas may lead to inconsistent system behavior.
* However, you must ensure that the identity dataset is different from the [!DNL Profile] dataset. If the datasets are the same, then data will be overwritten instead of updated.
* While the initial dataset must be enabled for [!DNL Profile], the identity dataset **should not be enabled** for [!DNL Profile]. Otherwise, data will also be overwritten instead of updated. However, the identity dataset **should be enabled** for [!DNL Identity Service].

#### Required fields in the schemas associated with the identity dataset {#identity-dataset-required-fileds}

If your schema contains required fields, validation of the dataset must be suppressed in order to enable [!DNL Identity Service] to only receive the identities. You can suppress validation by applying the `disabled` value to the `acp_validationContext` parameter. See the example below:

```shell
curl -X POST 'https://platform.adobe.io/data/foundation/catalog/dataSets/62257bef7a75461948ebcaaa' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \ 
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "tags": {
        "acp_validationContext": [
            "disabled"
        ],
        "unifiedProfile": [
            "enabled:false"
        ],
        "unifiedIdentity": [
            "enabled:true"
        ]
    }
}'
```

>[!TIP]
>
>You do not need to do any additional configuration if the schema associated with the identity dataset does not have any required fields.

## Incoming payload structure 

The following displays an example of an incoming payload structure that establishes new identity links.

### Payload with identity configuration

```shell
{
  "header": {
    "flowId": "923e2ac3-3869-46ec-9e6f-7012c4e23f69",
    "imsOrgId": "{ORG_ID}",
    "datasetId": "621fc19ab33d941949af16c8",
    "operations": {
        "data": "create" (default)/"merge"/"delete",
        "identity": "create",
        "identityDatasetId": "621fc19ab33d941949af16d9"
    }
  }
... //The raw data attributes are included here as the key/value pairs of the "body" property.
}
```

| Parameter | Description |
| --- | --- |
| `flowId` | A unique ID to identify a dataflow. This dataflow ID should correspond to the source connection created with [!DNL Amazon Kinesis], [!DNL Azure Event Hubs], or [!DNL HTTP API]. This dataflow should also have a [!DNL Profile]-enabled dataset as the target dataset. **Note**: The ID of the [!DNL Profile]-enabled target dataset is also used as your `datasetId` parameter. |
| `imsOrgId` | The ID that corresponds with your organization. |
| `datasetId` | The ID of the [!DNL Profile]-enabled target dataset of your dataflow. **Note**: This is the same ID as the [!DNL Profile]-enabled target dataset ID found in your dataflow.  |
| `operations` | This parameter outlines the actions that [!DNL Data Prep] will take based on the incoming request. |
| `operations.data` | Defines the actions that must be performed in [!DNL Real-Time Customer Profile]. |
| `operations.identity` | Defines the operations permitted  on the data by [!DNL Identity Service].  |
| `operations.identityDatasetId` | (Optional) The ID of the identity dataset that is required only if new identities must be linked. |

#### Supported operations

The following operations are supported by [!DNL Real-Time Customer Profile]:

| Operations | Description |
| --- | --- | 
| `create` | The default operation. This generates an XDM entity create method for [!DNL Real-Time Customer Profile]. |
| `merge` | This generates an XDM entity update method for [!DNL Real-Time Customer Profile]. |
| `delete` | This generates an XDM entity delete method for [!DNL Real-Time Customer Profile] and permanently removes the data from the [!DNL Profile Store]. |

The following operations are supported by [!DNL Identity Service]:

| Operations | Descriptions |
| --- | --- |
| `create` | The only permitted operation for this parameter. If `create` is passed as a value for `operations.identity`, then [!DNL Data Prep] generates an XDM entity create request for [!DNL Identity Service]. If the identity already exists, then the identity is ignored. **Note:** If `operations.identity` is set to `create`, then the `identityDatasetId` must also be specified. The XDM entity create message generated internally by [!DNL Data Prep] component will be generated for this dataset id. |

### Payload without identity configuration

If new identities do not need to be linked, then you can omit the `identity` and `identityDatasetId` parameters in the operations. Doing so sends data only to [!DNL Real-Time Customer Profile] and skips the [!DNL Identity Service]. See the payload below for an example:

```shell

{
  "header": {
    "flowId": "923e2ac3-3869-46ec-9e6f-7012c4e23f69",
    "imsOrgId": "{ORG_ID}",
    "datasetId": "621fc19ab33d941949af16c8",
    "operations": {
        "data": "create"/"merge"/"delete",
    }
  }
... //The raw data attributes are included here as the key/value pairs of the "body" property.
}
```

## Dynamically pass primary identities

For XDM updates, the schema must be enabled for [!DNL Profile] and contain a primary identity. You can specify the primary identity of an XDM schema in two ways:

* Designate a static field as the primary identity in the XDM schema;
* Designate one of the identity fields as the primary identity through the identity map field group in the XDM schema.

### Designate a static field as the primary identity field in the XDM schema

In the example below, `state`, `homePhone.number` and other attributes are upserted with their respective given values into the [!DNL Profile] with the primary identity of `sampleEmail@gmail.com`. An XDM entity update message is then generated by the streaming [!DNL Data Prep] component. [!DNL Real-Time Customer Profile] then confirms that XDM update message to upsert the profile record.

>[!NOTE]
>
>In this example, identities will not get linked together as there are no operations defined for identity.

```shell
curl -X POST 'https://dcs.adobedc.net/collection/9aba816d350a69c4abbd283eb5818ec3583275ffce4880ffc482be5a9d810c4b' \
  -H 'Content-Type: application/json' \
  -H 'x-adobe-flow-id: d5262d48-0f47-4949-be6d-795f06933527' \
  -d '{
    "header": {
        "flowId" : "d5262d48-0f47-4949-be6d-795f06933527",
        "imsOrgId": "{ORG_ID}",
        "datasetId": "62259f817f62d71947929a7b",
        "operations": {
         "data": "create"
     }
    },
    {
        "body": {
        "homeAddress": {
            "country": "US",
            "state": "GA",
            "region": "va7"
        },
        "homePhone": {
            "number": "123.456.799"
        },
        "identityMap": {
            "Email": [{
                "id": "sampleEmail@gmail.com",
                "primary": true
            }]
        },
      "personalEmail": {
            "address": "sampleEmail@gmail.com",
            "primary": true
       },
      "personID": "346576345",
      "_id": "346576345",
      "timestamp": "2021-05-05T17:51:45.1880+02",
      "workEmail": "sampleWorkEmail@gmail.com"
  }
}'
```

### Designate one of the identity fields as the primary identity through the identity map field group in the XDM schema

In this example, the header contains the `operations` attribute with the `identity` and `identityDatasetId` properties. This allows data to be merged with [!DNL Real-Time Customer Profile] and also for identities to be passed to [!DNL Identity Service].

```shell
curl -X POST 'https://dcs.adobedc.net/collection/9aba816d350a69c4abbd283eb5818ec3583275ffce4880ffc482be5a9d810c4b' \
  -H 'Content-Type: application/json' \
  -H 'x-adobe-flow-id: d5262d48-0f47-4949-be6d-795f06933527' \
  -d '{
    "header": {
        "flowId" : "d5262d48-0f47-4949-be6d-795f06933527",
        "imsOrgId": "{ORG_ID}",
        "datasetId": "62259f817f62d71947929a7b",
        "operations": {          
            "data": "merge",
            "identity": "create",
            "identityDatasetId": "6254a93b851ecd194b64af9e"
      }
    },
    {        
       "body": {
        "homeAddress": {
            "country": "US",
            "state": "GA",
            "region": "va7"
        },
        "homePhone": {
            "number": "123.456.799"
        },
        "identityMap": {
            "Email": [{
                "id": "sampleEmail@gmail.com",
                "primary": true
            }]
        },
      "personalEmail": {
            "address": "sampleEmail@gmail.com",
            "primary": true
       },
      "personID": "346576345",
      "_id": "346576345",
      "timestamp": "2021-05-05T17:51:45.1880+02",
      "workEmail": "sampleWorkEmail@gmail.com"
  }
 }'
```

## Known limitations and key considerations

The following outlines a list of known limitations to consider when streaming upserts with [!DNL Data Prep]:

* The streaming upserts method should only be used when sending partial row updates to [!DNL Real-Time Customer Profile]. Partial row updates are **not** consumed by data lake.
* The streaming upserts method does not support updating, replacing, and removing identities. New identities are created if they do not exist. Hence the `identity` operation must always be set to create. If an identity already exists, the operation is a no-op.
* The streaming upserts method currently does not support [Adobe Experience Platform Web SDK](https://experienceleague.adobe.com/docs/experience-platform/edge/home.html?lang=en) and [Adobe Experience Platform Mobile SDK](https://developer.adobe.com/client-sdks/documentation/).

## Next steps

By reading this document, you should now understand how to stream upserts in [!DNL Data Prep] to send partial row updates to your [!DNL Real-Time Customer Profile] data, while also creating and linking identities with a single API request. For more information on other [!DNL Data Prep] features, please read the [[!DNL Data Prep] overview](./home.md). To learn how to use mapping sets within the [!DNL Data Prep] API, please read the [[!DNL Data Prep] developer guide](./api/overview.md).
