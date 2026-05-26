---
title: Advertising Details Reporting Data Type
description: Learn about the Advertising Details Reporting Experience Data Model (XDM) data type.
exl-id: fbca5b2a-a9bd-4f76-a494-d682cb2cbfbc
TQID: https://experienceleague.adobe.com/wkThCeraKu7iBC4JR2d4PnxSq41BdCpnnUwTIeHnO6k
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# [!UICONTROL Advertising Details] Reporting data type

[!UICONTROL Advertising Details] Reporting is a standard Experience Data Model (XDM) data type that captures key attributes related to advertisements. It includes information such as the ad ID, advertiser and campaign IDs, length, position within a sequence, details about the player rendering the ad, and so on. You can use this data type to track and analyze various aspects of ad performance and engagement, and provide insights into how audiences interact with and respond to different advertisements.

+++Select to display a diagram of the Advertising Details Reporting data type.
![A diagram of the Advertising Details Reporting data type.](../images/data-types/advertising-details-information.png)
+++

| Display name                           | Property        | Data type | Description                                                                                   |
|----------------------------------------|-----------------|-----------|-----------------------------------------------------------------------------------------------|
| [!UICONTROL Ad Name]                   | `friendlyName`| string    | The human readable name of the ad. In reporting, "Ad Name" is the classification and "Ad Name (variable)" is the eVar. |
| [!UICONTROL Ad ID]                      | `name`        | string    | The ID of the ad. Any integer and/or letter combination.                                           |
| [!UICONTROL Ad Length Or Duration]      | `length`      | integer   | The length of video ad in seconds.                                                                 |
| [!UICONTROL Ad In Pod Position (Ad Start)] | `podPosition` | integer   | The index of the ad inside the parent ad start, for example, the first ad has index 0 and the second ad has index 1. |
| [!UICONTROL Ad Player Name]             | `playerName`  | string    | The name of the player responsible for rendering the ad.                                       |
| [!UICONTROL Ad Advertiser]              | `advertiser`  | string    | The company or brand whose product is featured in the ad.                                             |
| [!UICONTROL Ad Campaign]                | `campaignID`  | string    | The ID of the ad campaign.                                                                         |
| [!UICONTROL Ad Creative ID]             | `creativeID`  | string    | The ID of the ad creative.                                                                         |
| [!UICONTROL Ad Site ID]                 | `siteID`      | string    | The ID of the ad site.                                                                             |
| [!UICONTROL Ad Creative URL]            | `creativeURL` | string    | The URL of the ad creative.                                                                       |
| [!UICONTROL Ad Placement ID]            | `placementID` | string    | The placement ID of the ad.                                                                        |
| [!UICONTROL Ad Completed]               | `isCompleted` | boolean   | Tracks whether the ad has completed.                                                                               |
| [!UICONTROL Ad Started]                 | `isStarted`   | boolean   | Tracks whether the Ad has started.                                                                                 |
| [!UICONTROL Ad Time Played]             | `timePlayed`  | integer   | The total amount of time, in seconds, spent watching the ad (that is, the number of seconds played). |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/advertisingdetails.schema.json)
