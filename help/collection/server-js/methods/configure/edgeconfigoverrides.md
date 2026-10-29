---
title: edgeConfigOverrides (Server SDK, configure)
description: Override datastream settings for every request that the Server SDK sends.
badge: Alpha
---
# `edgeConfigOverrides` (Server SDK, `configure`)

>[!BEGINSHADEBOX]

*This page describes `edgeConfigOverrides` in the Server SDK `configure` method. For the Web SDK, see [`edgeConfigOverrides`](/help/collection/js/commands/configure/edgeconfigoverrides.md).*

>[!ENDSHADEBOX]

The `edgeConfigOverrides` object lets you override datastream settings for every request that an instance sends. For example, you can send data to a different Experience Platform dataset, Analytics report suite, or Target property than the datastream's defaults. This is useful when one server handles several websites or business units that share a datastream. To override settings for a single event, use the [`edgeConfigOverrides` object in `sendEvent`](../sendevent/edgeconfigoverrides.md) instead.

Overriding datastream settings takes two steps:

1. Define the overrides that you want to allow when you [configure the datastream](/help/datastreams/configure.md). See [Datastream configuration overrides](/help/datastreams/overrides.md) for instructions.
1. Set the `edgeConfigOverrides` object in your code.

When you set `edgeConfigOverrides` in `configure`, it applies to every request from the instance and from every [`forRequest`](../forrequest.md) handle that the instance creates. The following methods also accept an `edgeConfigOverrides` object for a single call:

* [`sendEvent`](../sendevent/edgeconfigoverrides.md)
* [`setConsent`](../setconsent.md)
* [`getIdentity`](../getidentity.md)
* [`appendIdentityToUrl`](../appendidentitytourl.md)

If a method call includes its own `edgeConfigOverrides` object, the SDK combines it with the object from `configure` for that call. For each top-level property, such as `com_adobe_analytics`, the value from the method call replaces the whole value from `configure`. Top-level properties that you set only in `configure` still apply.

For example, if `configure` sets `com_adobe_analytics` and `com_adobe_target`, and a `sendEvent` call sets only `com_adobe_analytics`, that event uses `com_adobe_analytics` from `sendEvent` and `com_adobe_target` from `configure`. Properties nested inside a top-level property aren't combined, so include every nested property that you need, such as both `enabled` and `reportSuites`.

## Example

The following example overrides the Experience Platform dataset, the Analytics report suites, and the Target property for every request:

```js
await alloy.configure({
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  edgeCredentials: {
    clientId: process.env.ADOBE_CLIENT_ID,
    clientSecret: process.env.ADOBE_CLIENT_SECRET,
    scopes: process.env.ADOBE_SCOPES.split(",")
  },
  edgeConfigOverrides: {
    com_adobe_experience_platform: {
      datasets: {
        event: {
          datasetId: "64b6f930753dd41ca8d4fd77"
        }
      }
    },
    com_adobe_analytics: {
      reportSuites: ["examplersid1", "examplersid2"]
    },
    com_adobe_target: {
      propertyToken: "01dbc634-07c1-d8f9-ca69-b489a5ac5e94"
    }
  }
});
```

## Supported overrides {#properties}

| Property | Type | Description |
| --- | --- | --- |
| `com_adobe_experience_platform.enabled` | Boolean | Determines whether data is sent to Adobe Experience Platform. |
| `com_adobe_experience_platform.datasets.event.datasetId` | String | The dataset that receives event data. |
| `com_adobe_experience_platform.com_adobe_edge_ode.enabled` | Boolean | Determines whether data is sent to Offer Decisioning. |
| `com_adobe_experience_platform.com_adobe_edge_segmentation.enabled` | Boolean | Determines whether data is sent to Edge Segmentation. |
| `com_adobe_experience_platform.com_adobe_edge_destinations.enabled` | Boolean | Determines whether data is sent to Edge Destinations. |
| `com_adobe_experience_platform.com_adobe_edge_ajo.enabled` | Boolean | Determines whether data is sent to Adobe Journey Optimizer. |
| `com_adobe_analytics.enabled` | Boolean | Determines whether data is sent to Adobe Analytics. |
| `com_adobe_analytics.reportSuites` | Array of strings | The report suites that receive Analytics data. |
| `com_adobe_audience_manager.enabled` | Boolean | Determines whether data is sent to Adobe Audience Manager. |
| `com_adobe_identity.idSyncContainerId` | Integer | The Audience Manager third-party ID sync container to use. Requires `com_adobe_audience_manager.enabled` to be `true`. |
| `com_adobe_target.enabled` | Boolean | Determines whether data is sent to Adobe Target. |
| `com_adobe_target.propertyToken` | String | The token for the Adobe Target property. |
| `com_adobe_launch_ssf.enabled` | Boolean | Determines whether data is sent to event forwarding. |

You can override only the settings that you allowed in the datastream configuration. See [Datastream configuration overrides](/help/datastreams/overrides.md).
