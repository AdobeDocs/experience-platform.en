---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Submit Your Source
topic-legacy: overview
description: The following document provides steps on how to test and verify a new source using the Flow Service API and integrate a new source through Self-Serve Sources (Batch SDK).
exl-id: 9e945ba1-51b6-40a9-b92f-e0a52b3f92fa
---
# Submit your source

The final step to integrating your new source to Adobe Experience Platform using Self-Serve Sources (Batch SDK) is to test your source for verification. Once successful, you can then submit your new source by contacting your Adobe representative.

The following document provides steps on how to test and debug your source using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

* For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).
* For information on how to generate your credentials for Platform APIs, see the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md).
* For information on how to set up [!DNL Postman] for Platform APIs, see the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md).
* To help your testing and debugging process, download the [Self-Serve Sources verification collection and environment here](../assets/sdk-verification.zip) and follow the steps outlined below.

## Test your source

To test your source, you must run the [Self-Serve Sources verification collection and environment](../assets/sdk-verification.zip) on [!DNL Postman] while providing the appropriate environment variables that pertain to your source.

To start testing, you must first set up the collection and environment on [!DNL Postman]. Next, specify the connection specification ID that you want to test.

### Specify `authSpecName`

Once you have entered your connection specification ID, you must then specify the `authSpecName` that you are using for your base connection. Depending on your choice, this could be either `OAuth 2 Refresh Code` or  `Basic Authentication`. Once you specify your `authSpecName`, you must then include its required credentials in your environment. For example, if you specify `authSpecName` as `OAuth 2 Refresh Code`,  then you must provide the required credentials for OAuth 2, which are `host` and `accessToken`.

### Specify `sourceSpec`

With your authentication specification parameters added, you must next add required properties from your source specification. You can find the required properties in `sourceSpec.spec.properties`. In the case of the [!DNL MailChimp Members] example below, the only required property is `listId`, which means `listId` and it's corresponding ID value to your [!DNL Postman] environment.

```json
"spec": {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "description": "Define user input parameters to fetch resource values.",
  "properties": {
    "listId": {
      "type": "string",
      "description": "listId for which members need to fetch."
    }
  }
}
```

Once your authentication and source specification parameters are provided, you can start populating the rest of your environment variables, see the table below for reference:

>[!NOTE]
>
>All of the example variables below are placeholder values that you must update, except for `flowSpecificationId` and `targetConnectionSpecId`, which are fixed values.

| Parameter | Description | Example |
| --- | --- | --- |
| `x-api-key` | A unique identifier used to authenticate calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `x-api-key`. | `c8d9a2f5c1e03789bd22e8efdd1bdc1b` |
| `x-gw-ims-org-id` | A corporate entity that can own or license products and services and allow access to its members. See the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md) for instructions on how to retrieve your `x-gw-ims-org-id` information. | `ABCEH0D9KX6A7WA7ATQE0TE@adobeOrg` |
| `authorizationToken` | The authorization token required to complete calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `authorizationToken`. | `Bearer authorizationToken` |
| `schemaId` | In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../xdm/api/schemas.md). | `https://ns.adobe.com/{TENANT_ID}.schemas.0ef4ce0d390f0809fad490802f53d30b` |
| `schemaVersion` | The unique version that corresponds with your schema. | `application/vnd.adobe.xed-full-notext+json; version=1` |
| `schemaAltId` | The `meta:altId` that is returned alongside the  `schemaId` when creating a new schema. | `_{TENANT_ID}.schemas.0ef4ce0d390f0809fad490802f53d30b` |
| `dataSetId` | For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../catalog/api/create-dataset.md). | `5f3c3cedb2805c194ff0b69a` |
| `mappings` | Mapping sets can be used to define how data in a source schema maps to that of a destination schema. For detailed steps on how to create a mapping, see the tutorial on [creating a mapping set using the API](../../../data-prep/api/mapping-set.md).  | `[{"destinationXdmPath":"person.name.firstName","sourceAttribute":"email.email_id","identity":false,"version":0},{"destinationXdmPath":"person.name.lastName","sourceAttribute":"email.activity.action","identity":false,"version":0}]` |
| `mappingId` | The unique ID that corresponds with your mapping set. | `bf5286a9c1ad4266baca76ba3adc9366` |
| `connectionSpecId` | The connection specification ID that corresponds with your source. This is the ID that you generated after [creating a new connection specification](./create.md). | `2e8580db-6489-4726-96de-e33f5f60295f` |
| `flowSpecificationId` | The flow specification ID of `RestStorageToAEP`. **This is a fixed value**. | `6499120c-0b15-42dc-936e-847ea3c24d72` |
| `targetConnectionSpecId` | The target connection ID of the data lake where ingested data lands in. **This is a fixed value**. | `c604ff05-7f1a-43c0-8e18-33bf874cb11c` |
| `verifyWatTimeInSecond` | The designated time interval to follow when checking for the completion of a flow run. | `40` |
| `startTime` | The designated start time for your dataflow. The start time must be formatted in unix time. |  `1597784298` |

Once you have provided all of your environment variables, you can start running the collection using the [!DNL Postman] interface. In the [!DNL Postman] interface, select the ellipses (**...**) beside [!DNL Sources SSSs Verification Collection] and then select **Run collection**.

![runner](../assets/runner.png)

The [!DNL Runner] interface appears, allowing you to configure the run order of your dataflow. Select **Run SSS Verification Collection** to run the collection.

>[!NOTE]
>
>You can disable **Delete Flow** from the run order checklist if you prefer to use the sources monitoring dashboard in Platform UI. However, once you are finished with testing, you must ensure that your test flows are deleted.

![run-collection](../assets/run-collection.png)

## Submit your source

Once your source is able to complete the entire workflow you can proceed to contact your Adobe representative and submit your source for integration.
