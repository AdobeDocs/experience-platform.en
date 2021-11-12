---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Submit Your Source (Beta)
topic-legacy: overview
description: The following document provides steps on how to test and verify a new source using the Flow Service API and integrate a new source through Sources SDK.
hide: true
hidefromtoc: true
---
# Submit your source (Beta)

>[!IMPORTANT]
>
>Sources SDK is currently in beta and your organization may not have access to it yet. The functionality described in this documentation is subject to change.

The final step to integrating your new source to Adobe Experience Platform using [!DNL Sources SDK] is to test your source for verification. Once successful, you can then submit your new source by contacting your Adobe representative.

The following document provides steps on how to test and debug your source using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

* For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).
* For information on how to generate your credentials for Platform APIs, see the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md).
* For information on how to set up [!DNL Postman] for Platform APIs, see the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md).
* To help your testing and debugging process, download the [[!DNL Sources SDK] verification collection and environment here](../assets/sdk-verification.zip) and follow the steps outlined below.

## Test your source

To test your source, you must run the [[!DNL Sources SDK] verification collection and environment](../assets/sdk-verification.zip) collection on [!DNL Postman] while providing the appropriate environment variables that pertain to your source.

| Variable | Description | Example |
| --- | --- | --- |
| `x-api-key` | A unique identifier used to authenticate calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `x-api-key`. | `c8d9a2f5c1e03789bd22e8efdd1bdc1b` |
| `x-gw-ims-org-id` | A corporate entity that can own or license products and services and allow access to its members. See the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md) for instructions on how to retrieve your `x-gw-ims-org-id` information. | `ABCEH0D9KX6A7WA7ATQE0TE@adobeOrg` |
| `authorizationToken` | The authorization token required to complete calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `authorizationToken`. | `Bearer authorizationToken` |
| `schemaId` | In order for the source data to be used in Platform, a target schema must be created to structure the source data according to your needs. For detailed steps on how to create a target XDM schema, see the tutorial on [creating a schema using the API](../../../xdm/api/schemas.md). | `https://ns.adobe.com/{TENANT_ID}/schemas/995dabbea86d58e346ff91bd8aa741a9f36f29b1019138d4` |
| `schemaVersion` | The unique version that corresponds with your schema. | `application/vnd.adobe.xed-full-notext+json; version=1` |
| `schemaAltId` | The `meta:altId` that is returned alongside the  `schemaId` when creating a new schema. | `_{TENANT_ID}.schemas.0ef4ce0d390f0809fad490802f53d30b` |
| `dataSetId` | For detailed steps on how to create a target dataset, see the tutorial on [creating a dataset using the API](../../../catalog/api/create-dataset.md). | `5f3c3cedb2805c194ff0b69a` |
| `mappings` | Mapping sets can be used to define how data in a source schema maps to that of a destination schema. For detailed steps on how to create a mapping, see the tutorial on [creating a mapping set using the API](../../../data-prep/api/mapping-set.md).  | `[{"destinationXdmPath":"person.name.firstName","sourceAttribute":"email.email_id","identity":false,"version":0},{"destinationXdmPath":"person.name.lastName","sourceAttribute":"email.activity.action","identity":false,"version":0}]` |
| `mappingId` | The unique ID that corresponds with your mapping set. | `bf5286a9c1ad4266baca76ba3adc9366` |
| `connectionSpecId` | The connection specification ID that corresponds with your source. This is the ID that you generated after [creating a new connection specification](./create.md). |
| `flowSpecificationId` | The flow specification ID of `RestStorageToAEP`. **This is a fixed value**. | `6499120c-0b15-42dc-936e-847ea3c24d72` |
| `targetConnectionSpecId` | The target connection ID of the data lake where ingested data lands in. **This is a fixed value**. | `c604ff05-7f1a-43c0-8e18-33bf874cb11c` |
| `verifyWatTimeInSecond` |
| `startTime` | The designated start time for your dataflow. The start time must be formatted in unix time. |  `1597784298` |
| `interval` |

Additionally, you must provide variables and values for properties defined as required in your connection specification. For example, if your source defined `authSpec.name` as basic authentication, then you must provide the required credentials for basic authentication.


In the [!DNL Postman] interface, select the ellipses (**...**) beside [!DNL Sources SDK Verification Collection] and then select **Run collection**.

![runner]

The [!DNL Runner] interface appears, allowing you to configure the run order of your dataflow. Select **Run SSS Verification Collection** to run the collection.

![run-collection]

>[!NOTE]
>
>You can disable **Delete Flow** from the run order checklist if you prefer to use the sources monitoring dashboard in Platform UI. However, once you are finished with testing, you must ensure that your test flows are deleted.

## Submit your source

Once your source is able to complete the entire workflow you can proceed to contact your Adobe representative and submit your source for integration.