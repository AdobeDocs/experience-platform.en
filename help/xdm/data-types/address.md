---
title: Postal Address Data Type
description: Learn about the Postal Address Experience Data Model (XDM) data type.
exl-id: 92385cd8-60c8-4360-a8e7-e6224e85e4d4
---
# [!UICONTROL Postal Address] data type

[!UICONTROL Postal Address] is a standard Experience Data Model (XDM) data type that provides address details.

![A diagram of the [!UICONTROL Postal Address] data type.](../images/data-types/postal-address.png)

| Display name                       | Property         | Data type | Description                                                                                   |
|------------------------------------|------------------|-----------|-----------------------------------------------------------------------------------------------|
| [!UICONTROL Primary]               | `primary`        | boolean   | Primary address indicator. A profile can have only one `primary` address at a given point of time.  |
| [!UICONTROL Label]                 | `label`          | string    | Free form name of the address.                                                                |
| [!UICONTROL Street 1]              | `street1`        | string    | Primary street level information, apartment number, street number, and street name.           |
| [!UICONTROL Street 2]              | `street2`        | string    | Optional street information second line.                                                       |
| [!UICONTROL Street 3]              | `street3`        | string    | Optional street information third line.                                                        |
| [!UICONTROL Street 4]              | `street4`        | string    | Optional street information fourth line.                                                       |
| [!UICONTROL Region]                | `region`         | string    | The region, county, or district portion of the address.                                        |
| [!UICONTROL Post office box]       | `postOfficeBox`  | string    | Post office box of the address.                                                               |
| [!UICONTROL Country]               | `country`        | string    | The name of the government-administered territory. Other than ``countryCode``, this is a free-form field that can have the country name in any language. |
| [!UICONTROL State]                 | `state`          | string    | The name of the State. This is a free-form field.                                              |
| [!UICONTROL Status]                | `status`         | string    | An indication as to the ability to use the address.                                             |
| [!UICONTROL Status reason]         | `statusReason`   | string    | A description of the current status.                                                           |
| [!UICONTROL Last verified date]    | `lastVerifiedDate` | string  | The date that the address was last verified as still associated with the person.               |

{style="table-layout:auto"}

For more details on the data type, refer to the [full schema](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/address.schema.json) on the public XDM repository:
