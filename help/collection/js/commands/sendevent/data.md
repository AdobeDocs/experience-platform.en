---
title: data
description: Learn how to send non-XDM data to Adobe, through the data object.
exl-id: 537fc34e-3cda-4aa7-ae0d-0d3ef4b89848
TQID: https://experienceleague.adobe.com/42nSK16mE8kHI8pGzqHNlRgZl-XdvVP-wDrJAzosroU
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a8b0238e-1d43-4679-a3b4-5ba1bad83baa
    internal-label: Implementation
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `data`

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
