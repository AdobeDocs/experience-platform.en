---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;measure;datatype;data-type;data type;
solution: Experience Platform
title: Measure Data Type
description: Learn about the Measure Experience Data Model (XDM) data type.
exl-id: 5d6cc15d-63cf-4af5-9ae9-12c886dd6735
---
# [!UICONTROL Measure] data type

[!UICONTROL Measure] is a standard Experience Data Model (XDM) data type that contains a concrete quantifiable data point of a particular metric. A measure is composed of a unique identifier and a value.

<img src='../images/data-types/measure.PNG' width=500 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `id` | String | The unique identifier of this measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough randomness. <br><br> If information such as timestamp, device ID, IP, MAC address, or other potentially user-identifying values are incorporated in the generation of the `id`, the result should be hashed. This ensures that no PII is encoded in the value, as the goal is not to identify a user or device, but the specific measure in time. |
| `value` | Double | The quantifiable value of this measure. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/data/measure.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/data/measure.schema.json)
