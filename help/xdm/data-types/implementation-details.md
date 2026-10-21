---
title: Implementation Details Data Type
description: Learn about the Implementation details Experience Data Model (XDM) data type.
exl-id: d3d16bae-196b-489d-8590-fd22150eedf1
TQID: 'https://experienceleague.adobe.com/Z3qrTLOz6olUq4Ei1Xcw0TJpAs5P5PN5P-kAycerbyE'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: ''
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
---
# [!UICONTROL Implementation details] data type

[!UICONTROL Implementation details] is a standard Experience Data Model (XDM) data type that describes a technology implementation, such as an API or an SDK.

![Data type structure](../images/data-types/implementation-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `environment` | String | The environment of the implementation. |
| `name` | String | The identifier for the SDK or endpoint. All SDKs or endpoints are identified through a URI, including extensions. |
| `version` | String | The version of the API or SDK. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/industry-verticals/implementationdetails.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/industry-verticals/implementationdetails.schema.json)
