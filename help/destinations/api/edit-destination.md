---
solution: Experience Platform
title: Edit destination connections using the Flow Service API
type: Tutorial
description: Learn how to how to edit various components of a destination connection using the Flow Service API.
---
# Edit destination connections using the Flow Service API

This tutorial covers the steps for editing various components of a destination connection. Learn how to update authentication credentials, export location, and more by using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

>[!NOTE]
>
> The edit operations described in this tutorial are currently only supported through the Flow Service API.

## Getting started {#get-started}

This tutorial requires you to have a valid dataflow ID. If you do not have a valid dataflow ID, select your destination of choice from the [destinations catalog](../catalog/overview.md) and follow the steps outlined to [connect to the destination](../ui/connect-destination.md) and [activate data](../ui/activation-overview.md) before attempting this tutorial.

>[!NOTE]
>
> The terms *flow* and *dataflow* are used interchangeably in this tutorial. In the context of this tutorial, they have the same meaning.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Destinations](../home.md): [!DNL Destinations] are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
* [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully update your dataflow using the [!DNL Flow Service] API.

### Reading sample API calls {#reading-sample-api-calls}

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers {#gather-values-for-required-headers}

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in Experience Platform, including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>If the `x-sandbox-name` header is not specified, requests are resolved under the `prod` sandbox.

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Look up dataflow details {#look-up-dataflow-details}

The first step in editing your destination connection is to retrieve dataflow details using your flow ID. You can view the current details of an existing dataflow by making a GET request to the `/flows` endpoint.

>[!TIP]
>
>You can use the Experience Platform UI to get the desired dataflow ID of a destination. Go to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**, select the desired destination dataflow and find the destination ID in the right rail. The destination ID is the value that you will use as flow ID in the next step.
>
> ![Get destination ID using the Experience Platform UI](/help/destinations/assets/api/edit-destination/get-destination-id.png)

>[!BEGINSHADEBOX]

**API format**

```http
GET /flows/{FLOW_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{FLOW_ID}` | The unique `id` value for the destination dataflow you want to retrieve. |

**Request**

The following request retrieves information regarding your flow ID.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/flows/226fb2e1-db69-4760-b67e-9e671e05abfc' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the current details of your dataflow including its version, unique identifier (`id`), and other relevant information. Most relevant for this tutorial are the target connection and base connection IDs highlighted in the response below. You will use these IDs in the next sections to update various components of the destination connection.

```json {line-numbers="true" start-line="1" highlight="27,38"}
{
   "items":[
      {
         "id":"226fb2e1-db69-4760-b67e-9e671e05abfc",
         "createdAt":"{CREATED_AT}",
         "updatedAt":"{UPDATED_BY}",
         "createdBy":"{CREATED_BY}",
         "updatedBy":"{UPDATED_BY}",
         "createdClient":"{CREATED_CLIENT}",
         "updatedClient":"{UPDATED_CLIENT}",
         "sandboxId":"{SANDBOX_ID}",
         "sandboxName":"prod",
         "imsOrgId":"{ORG_ID}",
         "name":"2021 winter campaign",
         "description":"ACME company holiday campaign for high fidelity customers",
         "flowSpec":{
            "id":"71471eba-b620-49e4-90fd-23f1fa0174d8",
            "version":"1.0"
         },
         "state":"enabled",
         "version":"\"8b0351ca-0000-0200-0000-61c4d6700000\"",
         "etag":"\"8b0351ca-0000-0200-0000-61c4d6700000\"",
         "sourceConnectionIds":[
            "5e45582a-5336-4ea1-9ec9-d0004a9f344a"
         ],
         "targetConnectionIds":[
            "8ce3dc63-3766-4220-9f61-51d2f8f14618"
         ],
         "inheritedAttributes":{
            "sourceConnections":[
               {
                  "id":"5e45582a-5336-4ea1-9ec9-d0004a9f344a",
                  "connectionSpec":{
                     "id":"8a9c3494-9708-43d7-ae3f-cda01e5030e1",
                     "version":"1.0"
                  },
                  "baseConnection":{
                     "id":"0a82f29f-b457-47f7-bb30-33856e2ae5aa",
                     "connectionSpec":{
                        "id":"8a9c3494-9708-43d7-ae3f-cda01e5030e1",
                        "version":"1.0"
                     }
                  },
                  "typeInfo":{
                     "type":"ProfileFragments",
                     "id":"ups"
                  }
               }
            ],
            "targetConnections":[
               {
                  "id":"8ce3dc63-3766-4220-9f61-51d2f8f14618",
                  "connectionSpec":{
                     "id":"0b23e41a-cb4a-4321-a78f-3b654f5d7d97",
                     "version":"1.0"
                  },
                  "baseConnection":{
                     "id":"7fbf542b-83ed-498f-8838-8fde0c4d4d69",
                     "connectionSpec":{
                        "id":"0b23e41a-cb4a-4321-a78f-3b654f5d7d97",
                        "version":"1.0"
                     }
                  }
               }
            ]
         },
         "transformations":[
            "shortened for brevity"
         ]
      }
   ]
```

>[!ENDSHADEBOX]

## Edit target connection components (storage location and other components) {#patch-target-connection}

The components of a target connection differ by destination. For example, for [!DNL Amazon S3] destinations, you can update the bucket and path where files are exported. For [!DNL Pinterest] destinations, you can update your [!DNL Pinterest Advertiser ID] and for [!DNL Google Customer Match] you can update your [!DNL Pinterest Account ID].

To update components of a target connection, perform a PATCH request to the `/targetConnections/{TARGET_CONNECTION_ID}` endpoint while providing your target connection ID, version, and the new values you want to use. Remember, you got your target connection ID in the previous step, when you inspected an existing dataflow to your desired destination.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the target connection you want to update. The etag value updates with every successful update of a flow entity such as dataflow, target connection, and others.
>
> To get the latest version of the etag value, perform a GET request to the `/targetConnections/{TARGET_CONNECTION_ID}` endpoint, where `{TARGET_CONNECTION_ID}` is the target connection ID that you are looking to update.

Below are a few examples of updating parameters in the target connection spec for different types of destinations. But the general rule to update parameters for any destination is as follows: 

Get the dataflow ID of the connection > obtain the target connection ID > PATCH the target connection with updated values for the desired parameters.

>[!BEGINSHADEBOX]

**API format**

```http
PATCH /targetConnections/{TARGET_CONNECTION_ID}
```

>[!BEGINTABS]

>[!TAB Amazon S3]

**Request**

The following request updates the `bucketName` and `path` parameters of an [[!DNL Amazon S3]](/help/destinations/catalog/cloud-storage/amazon-s3.md#destination-details) destination connection.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections/b2cb1407-3114-441c-87ea-2c1a3c84d0b0' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
  {
    "op": "replace",
    "path": "/params",
    "value": {
      "bucketName": "newBucketName",
      "path": "updatedPath"
    }
  }
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your target connection ID and an updated Etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your target connection ID.

```json
{
    "id": "b2cb1407-3114-441c-87ea-2c1a3c84d0b0",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

>[!TAB Google Ad Manager and Google Ad Manager 360]

**Request**

The following request updates the parameters of a [[!DNL Google Ad Manager]](/help/destinations/catalog/advertising/google-ad-manager.md) or [[!DNL Google Ad Manager 360] destination](/help/destinations/catalog/advertising/google-ad-manager-360-connection.md#destination-details) connection to add the new [**[!UICONTROL Append audience ID to audience name]**](/help/release-notes/2023/april-2023.md#destinations) field.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections/b2cb1407-3114-441c-87ea-2c1a3c84d0b0' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
  {
    "op": "add",
    "path": "/params/appendSegmentId",
    "value": true
  }
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your target connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your target connection ID.

```json
{
    "id": "b2cb1407-3114-441c-87ea-2c1a3c84d0b0",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

>[!TAB Pinterest]

**Request**

The following request updates the `advertiserId` parameter of a [[!DNL Pinterest] destination connection](/help/destinations/catalog/advertising/pinterest.md#parameters).

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections/b2cb1407-3114-441c-87ea-2c1a3c84d0b0' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
  {
    "op": "replace",
    "path": "/params",
    "value": {
      "advertiser_id": "1234567890"
    }
  }
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your target connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your target connection ID.

```json
{
    "id": "b2cb1407-3114-441c-87ea-2c1a3c84d0b0",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

>[!ENDTABS]

>[!ENDSHADEBOX]

## Edit base connection components (authentication parameters and other components) {#patch-base-connection}

Edit the base connection when you want to update a destination's credentials. The components of a base connection differ by destination. For example, for [!DNL Amazon S3] destinations, you can update the access key and secret key to your [!DNL Amazon S3] location. 

To update components of a base connection, perform a PATCH request to the `/connections` endpoint while providing your base connection ID, version, and the new values you want to use.

Remember, you got your base connection ID in a [previous step](#look-up-dataflow-details), when you inspected an existing dataflow to your desired destination for the parameter `baseConnection`.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the base connection you want to update. The etag value updates with every successful update of a flow entity such as dataflow, base connection, and others.
>
> To get the latest version of the Etag value, perform a GET request to the `/connections/{BASE_CONNECTION_ID}` endpoint, where `{BASE_CONNECTION_ID}` is the base connection ID that you are looking to update.

Below are a few examples of updating parameters in the base connection spec for different types of destinations. But the general rule to update parameters for any destination is as follows: 

Get the dataflow ID of the connection > obtain the base connection ID > PATCH the base connection with updated values for the desired parameters.

>[!BEGINSHADEBOX]

**API format**

```http
PATCH /connections/{BASE_CONNECTION_ID}
```

>[!BEGINTABS]

>[!TAB Amazon S3]

**Request**

The following request updates the `accessId` and `secretKey` parameters of an [[!DNL Amazon S3]](/help/destinations/catalog/cloud-storage/amazon-s3.md#destination-details) destination connection.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections/b2cb1407-3114-441c-87ea-2c1a3c84d0b0' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
  {
    "op": "add",
    "path": "/auth/params",
    "value": {
      "accessId": "exampleAccessId",
      "secretKey": "exampleSecretKey"
    }
  }
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your base connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your base connection ID.

```json
{
    "id": "b2cb1407-3114-441c-87ea-2c1a3c84d0b0",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

>[!TAB Azure Blob]

**Request**

The following request updates the parameters of an [[!DNL Azure Blob] destination](/help/destinations/catalog/cloud-storage/azure-blob.md#authenticate) connection to update the connection string required to connect to an Azure Blob instance.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/targetConnections/b2cb1407-3114-441c-87ea-2c1a3c84d0b0' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: "1a0037e4-0000-0200-0000-602e06f60000"' \
    -d '[
  {
    "op": "add",
    "path": "/auth/params",
    "value": {
      "connectionString": "updatedString"
    }
  }
]'
```

| Property | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the dataflow. Operations include: `add`, `replace`, and `remove`. |
| `path` | Defines the part of the flow that is to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your base connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your base connection ID.

```json
{
    "id": "b2cb1407-3114-441c-87ea-2c1a3c84d0b0",
    "etag": "\"50014cc8-0000-0200-0000-6036eb720000\""
}
```

>[!ENDTABS]

>[!ENDSHADEBOX]

## API error handling {#api-error-handling}

The API endpoints in this tutorial follow the general Experience Platform API error message principles. Refer to [API status codes](/help/landing/troubleshooting.md#api-status-codes) and [request header errors](/help/landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide for more information on interpreting error responses.

## Next steps {#next-steps}

By following this tutorial, you have learned how to update various components of a destination connection using the [!DNL Flow Service] API. For more information on destinations, see the [destinations overview](../home.md).
