---
title: data (Web SDK)
description: Learn how to send non-XDM data to Adobe, through the data object.
exl-id: 537fc34e-3cda-4aa7-ae0d-0d3ef4b89848
TQID: 'https://experienceleague.adobe.com/42nSK16mE8kHI8pGzqHNlRgZl-XdvVP-wDrJAzosroU'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: 621f6477-babf-5055-94ad-fe96051a14ec
    internal-label: AEP Edge
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `data` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `data` in the Web SDK `sendEvent` command. For the Server SDK, see [`data`](/help/collection/server-js/methods/sendevent/data.md).*

>[!ENDSHADEBOX]

The `data` object allows you to send a payload to Adobe that does not match an XDM schema. It is useful in non-XDM scenarios, such as sending data directly to Adobe Analytics, Adobe Target, or Adobe Audience Manager. When data arrives at the datastream, you can use [Data Prep mapping](/help/data-prep/ui/mapping.md) to assign XDM fields to each field in the `data` object. If a product is already configured by Adobe to detect fields within the `data` object, you can send that data as-is to a datastream.

>[!IMPORTANT]
>
>Data within this object must have at least one of the following actions:
>
>* A service in the datastream must be configured to retrieve data from a given property in the `data` object.
>* The given property must be mapped to an XDM field using data prep.
>
>If a given property is not mapped to an XDM field or used by a configured service, that data is permanently lost.

Set the `data` object as part of the JSON object within the parameter of the `sendEvent` command. For data that you plan to map in the datastream, you can structure this object however you'd like. For data used by certain services, make sure that the object hierarchy matches what the service expects. You can include both the `data` object and the [`xdm`](xdm.md) object in the same `sendEvent` command.

```javascript
alloy("sendEvent", {
  "data": dataObject
});
```

## Use the `data` object with Adobe Analytics {#analytics}

You can use the `data` object with Adobe Analytics to send data to a report suite without an XDM schema. Variables are configured to use the same syntax as AppMeasurement variables, simplifying the upgrade process to the Web SDK. See [Data object variable mapping to Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/data-var-mapping) in the Adobe Analytics implementation guide for more information.

## Use the `data` object using the Web SDK tag extension

The `data` object is available as a [Variable data element](/help/tags/extensions/client/web-sdk/data-element-types.md#variable) when using the Web SDK tag extension.
