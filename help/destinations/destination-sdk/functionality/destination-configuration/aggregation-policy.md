---
description: Learn how to configure the aggregation policy settings for destinations built with Destination SDK.
title: Aggregation policy
---

# Aggregation policy

This section allows you to set the aggregation policies that Experience Platform should use when exporting data to your destination.

![Aggregation policy in the configuration template](assets/aggregation-configuration.png)

An aggregation policy determines how the exported profiles are combined in the data exports. Available options are:

* Best effort aggregation
* Configurable aggregation (shown in the configuration above)

Read the section on [using templating](./message-format.md#using-templating) and the [aggregation key examples](./message-format.md#template-aggregation-key) to understand how to include the aggregation policy in your message transformation template based on your selected aggregation policy. 

## Best effort aggregation {#best-effort-aggregation}

>[!TIP]
>
>Use this option if your API endpoint accepts fewer than 100 profiles per API call.

This option works best for destinations which prefer fewer profiles per request and would rather take more requests with less data than fewer requests with more data.

Use the `maxUsersPerRequest` parameter to specify the maximum number of profiles that your destination can take in a request.

## Configurable aggregation {#configurable-aggregation}

This option works best if you'd rather take large batches, with thousands of profiles on the same call. This option also allows you to aggregate the exported profiles based on complex aggregation rules.

This option allows you to:

* Set the maximum time and maximum number of profiles to aggregate before an API call is made to your destination.
* Aggregate the exported profiles mapped to the destination based on:
    * Segment ID;
    * Segment status;
    * Identity or groups of identities.

>[!NOTE]
>
>When using the configurable aggregation option for your destination, be mindful of the minimum and maximum values that you can use for the two parameters `maxBatchAgeInSecs` (minimum 1,800 and maximum 3,600) and `maxNumEventsInBatch` (minimum 1,000, maximum 10,000).

For detailed explanations of the aggregation parameters, refer to the [create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md) reference page, where each parameter is described.
