---
description: Learn how to set up an aggregation policy to determine how HTTP requests to your destination should be grouped and batched.
title: Aggregation policy
exl-id: 2dfa8815-2d69-4a22-8938-8ea41be8b9c5
---
# Aggregation policy

To ensure maximum efficiency when exporting data to your API endpoint, you can use various settings to aggregate exported profiles into larger or smaller batches, group them by identity, and other use cases. This also allows you to tailor data exports to any downstream limitations on your API endpoint (rate limiting, number of identities per API call, etc.).

Use configurable aggregation to dive deep into the settings provided by Destination SDK or use best effort aggregation to tell Destination SDK to batch the API calls as best as it can.

When building a real-time (streaming) destination with Destination SDK, you can configure how the exported profiles should be combined in the resulting exports. This behavior is determined by the aggregation policy settings.

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the guide on how to [use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-destination-configuration).

You can configure the aggregation policy settings via the `/authoring/destinations` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)

This article describes all the supported aggregation policy settings that you can use for your destination.

After reading through this document, refer to the documentation on [using templating](../../functionality/destination-server/message-format.md#using-templating) and the [aggregation key examples](../../functionality/destination-server/message-format.md#template-aggregation-key) to understand how to include the aggregation policy in your message transformation template based on your selected aggregation policy.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | No |

## Best effort aggregation {#best-effort-aggregation}

Best effort aggregation works best for destinations which prefer fewer profiles per request and would rather take in more requests with less data than fewer requests with more data.

The example configuration below shows a best effort aggregation configuration. For an example of configurable aggregation, see the [configurable aggregation](#configurable-aggregation) section. The parameters applicable to best effort aggregation are documented in the table below.

```json
"aggregation":{
   "aggregationType":"BEST_EFFORT",
   "bestEffortAggregation":{
      "maxUsersPerRequest":10,
      "splitUserById":false
   }
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`aggregationType` | String | Indicates the type of aggregation policy that your destination should use. Supported aggregation types: <ul><li>`BEST_EFFORT`</li><li>`CONFIGURABLE_AGGREGATION`</li></ul>  |
|`bestEffortAggregation.maxUsersPerRequest` | Integer | Experience Platform can aggregate multiple exported profiles in a single HTTP call. <br><br>This value indicates the maximum number of profiles that your endpoint should receive in a single HTTP call. Note that this is a best effort aggregation. For example, if you specify the value 100, Platform might send any number of profiles smaller than 100 on a call. <br><br> If your server does not accept multiple users per request, set this value to `1`.|
|`bestEffortAggregation.splitUserById` | Boolean | Use this flag if the call to the destination should be split by identity. Set this flag to `true` if your server only accepts one identity per call, for a given identity namespace. |

{style="table-layout:auto"}

>[!TIP]
>
>Use best effort aggregation if your API endpoint accepts fewer than 100 profiles per API call.

## Configurable aggregation {#configurable-aggregation}

Configurable aggregation works best if you'd rather take in large batches, with thousands of profiles on the same call. This option also allows you to aggregate the exported profiles based on complex aggregation rules.

The example configuration below shows a configurable aggregation configuration. For an example of best effort aggregation, see the [best effort aggregation](#best-effort-aggregation) section. The parameters applicable to configurable aggregation are documented in the table below.

```json
"aggregation":{
   "aggregationType":"CONFIGURABLE_AGGREGATION",
   "configurableAggregation":{
      "splitUserById":true,
      "maxBatchAgeInSecs":2400,
      "maxNumEventsInBatch":5000,
      "aggregationKey":{
         "includeSegmentId":true,
         "includeSegmentStatus":true,
         "includeIdentity":true,
         "oneIdentityPerGroup":true,
         "groups":[
            {
               "namespaces":[
                  "IDFA",
                  "GAID"
               ]
            },
            {
               "namespaces":[
                  "EMAIL"
               ]
            }
         ]
      }
   }
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`aggregationType` | String | Indicates the type of aggregation policy that your destination should use. Supported aggregation types: <ul><li>`BEST_EFFORT`</li><li>`CONFIGURABLE_AGGREGATION`</li></ul> |
|`configurableAggregation.splitUserById` | Boolean | Use this flag if the call to the destination should be split by identity. Set this flag to `true` if your server only accepts one identity per call, for a given identity namespace. |
|`configurableAggregation.maxBatchAgeInSecs` | Integer | Used in conjuction with `maxNumEventsInBatch`, this parameter determines how long Experience Platform should wait until sending an API call to your endpoint. <ul><li>Minimum value (seconds): 1800</li><li>Maximum value (seconds): 3600</li></ul> For example, if you use the maximum value for both parameters, Experience Platform will wait either 3600 seconds OR until there are 10000 qualified profiles before making the API call, whichever happens first. |
|`configurableAggregation.maxNumEventsInBatch` | Integer | Used in conjunction with `maxBatchAgeInSecs`, this parameter determines how many qualified profiles should be aggregated in an API call. <ul><li>Minimum value: 1000</li><li>Maximum value: 10000</li></ul> For example, if you use the maximum value for both parameters, Experience Platform will wait either 3600 seconds OR until there are 10000 qualified profiles before making the API call, whichever happens first. |
|`configurableAggregation.aggregationKey` | - | Allows you to aggregate the exported profiles mapped to the destination based on the parameters described below. |
|`configurableAggregation.aggregationKey.includeSegmentId` | Boolean | Set this parameter to `true` if you want to group profiles exported to your destination by audience ID. |
|`configurableAggregation.aggregationKey.includeSegmentStatus` | Boolean | Set both this parameter and `includeSegmentId` to `true`, if you want to group profiles exported to your destination by audience ID and audience status. |
|`configurableAggregation.aggregationKey.includeIdentity` | Boolean | Set this parameter to `true` if you want to group profiles exported to your destination by identity namespace. |
|`configurableAggregation.aggregationKey.oneIdentityPerGroup` | Boolean | Set this paramter to `true` if you want the exported profiles to be aggregated into groups based on a single identity (GAID, IDFA, phone numbers, email, etc.). |
|`configurableAggregation.aggregationKey.groups` | Array | Create lists of identity groups if you want to group profiles exported to your destination by groups of identity namespaces. For example, you could combine profiles that contain the IDFA and GAID mobile identifiers into one call to your destination and emails into another by using the configuration shown in the example above. |

{style="table-layout:auto"}

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how you can configure aggregation policies for your destination.

To learn more about the other destination components, see the following articles:

* [Customer authentication configuration](customer-authentication.md)
* [OAuth2 authorization](oauth2-authorization.md)
* [Customer data fields](customer-data-fields.md)
* [UI attributes](ui-attributes.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Supported mapping configurations](supported-mapping-configurations.md)
* [Destination delivery](destination-delivery.md)
* [Audience metadata configuration](audience-metadata-configuration.md)
* [Batch configuration](batch-configuration.md)
* [Historical profile qualifications](historical-profile-qualifications.md)
