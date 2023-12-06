---
title: Custom Metadata Details Information Data Type
description: This document provides an overview of the Custom Metadata Details Information Experience Data Model (XDM) data type.
---
# [!UICONTROL Custom Metadata Details Information] data type

[!UICONTROL Custom Metadata Details Information] is a standard Experience Data Model (XDM) data type defines a structure for storing custom metadata. It includes fields for the name and value of custom metadata associated with content or interactions, and allows flexibility in adding and organizing additional information beyond the standard predefined properties.

![A diagram of the  Custom Metadata Details Information data type.](../images/data-types/custom-metadata-details-information.png)

| Display name                               | Property         | Data type | Description                             |
|--------------------------------------------|------------------|-----------|-----------------------------------------|
| [!UICONTROL Custom Metadata Field Name]    | `name`           | string    | The name of the custom field.           |
| [!UICONTROL Custom Metadata Field Value]   | `value`          | string    | The value of the custom field.          |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/custommetadatadetails.schema.json)
