---
title: B2B Source Data Type
description: This document provides an overview of the B2B Source Experience Data Model (XDM) data type.
---
# [!UICONTROL B2B Source] data type

>[!NOTE]
>
>This data type is only available for organizations that have access to the B2B edition of Real-time Customer Data Platform.

[!UICONTROL B2B Source] is a standard Experience Data Model (XDM) data type that captures a B2B or CRM source identifier.

![](../images/data-types/b2b-source.png)

| Property | Data type | Description |
| --- | --- | --- |
| `sourceID` | String | A unique ID for the source record. |
| `sourceInstanceID` | String | The instance or organization ID of the source data. |
| `sourceKey` | String | A unique identifier composed of the `sourceType`, `sourceInstanceId`, and `sourceId` concatenated together. |
| `sourceType` | String | The name of the platform that provides the source data. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/b2b/b2b-source.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/b2b/b2b-source.schema.json)
