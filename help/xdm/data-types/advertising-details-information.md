---
title: Advertising Details Information Data Type
description: Learn about the Advertising Details Information Experience Data Model (XDM) data type.
---
# [!UICONTROL Advertising Details Information] data type

[!UICONTROL Advertising Details Information] is a standard Experience Data Model (XDM) data type that captures key attributes related to advertisements. It includes information such as the ad ID, advertiser and campaign IDs, length, position within a sequence, details about the player rendering the ad, and so on. You can use this data type to track and analyze various aspects of ad performance and engagement, and provide insights into how audiences interact with and respond to different advertisements.

+++Select to display a diagram of the Advertising Details Information data type.
![A diagram of the Advertising Details Information data type.](../images/data-types/advertising-details-information.png)
+++

| Display name               | Property        | Data type | Description                                                                                   |
|----------------------------|-----------------|-----------|-----------------------------------------------------------------------------------------------|
| [!UICONTROL Ad Name]                   | `friendlyName`| string    | **Required** The human readable name of the ad. In reporting, "Ad Name" is the classification and "Ad Name (variable)" is the eVar. |
| [!UICONTROL Ad ID]                      | `name`        | string    | The ID of the ad. Any integer and/or letter combination.                                           |
| [!UICONTROL Ad Length Or Duration]      | `length`      | integer   | **Required** The length of video ad in seconds.                                                                 |
| [!UICONTROL Ad In Pod Position (Ad Start)] | `podPosition` | integer   | **Required** The index of the ad inside the parent ad start, for example, the first ad has index 0 and the second ad has index 1. |
| [!UICONTROL Ad Player Name]             | `playerName`  | string    | **Required** The name of the player responsible for rendering the ad.                                       |
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
