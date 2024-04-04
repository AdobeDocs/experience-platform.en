---
title: Advertising Details Collection Data Type
description: Learn about the Advertising Details Collection Experience Data Model (XDM) data type.
exl-id: 3f6bf1f9-c728-46af-804a-cb41eb29951b
---
# [!UICONTROL Advertising Details] Collection data type

[!UICONTROL Advertising Details] Collection is a standard Experience Data Model (XDM) data type that captures key attributes related to advertisements. It includes information such as the ad ID, advertiser and campaign IDs, length, position within a sequence, details about the player rendering the ad, and so on. You can use this data type to track and analyze various aspects of ad performance and engagement, and provide insights into how audiences interact with and respond to different advertisements. This information you provide is used to track your streaming data.

+++Select to display a diagram of the Advertising Details Collection data type.
![A diagram of the Advertising Details Collection data type.](../images/data-types/advertising-details-collection.png)
+++

>[!NOTE]
>
>Each display name contains a link to further information on its audio and video parameters. The linked pages contain details on the video ad data collected by Adobe, implementation values, network parameters, reporting, and important considerations. 

| Display name                                                                                                                                                    | Property        | Data type | Required | Description                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| [[!UICONTROL Ad Advertiser]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#advertiser)              | `advertiser`  | string    |   No     | The company or brand whose product is featured in the ad.                                             | 
| [[!UICONTROL Ad Campaign]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#campaign-id)                | `campaignID`  | string    |   No     | The ID of the ad campaign.                                                                         |
| [[!UICONTROL Ad Creative ID]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#creative-id)             | `creativeID`  | string    |   No     | The ID of the ad creative.                                                                         |
| [[!UICONTROL Ad Creative URL]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#creative-url)            | `creativeURL` | string    |   No     | The URL of the ad creative.                                                                       |
| [[!UICONTROL Ad In Pod Position (Ad Start)]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#ad-start) | `podPosition` | integer|  Yes     | The index of the ad inside the parent ad start, for example, the first ad has index 0 and the second ad has index 1. |
| [[!UICONTROL Ad Length Or Duration]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#ad-length)      | `length`      | integer   |  Yes     | The length of video ad in seconds.                                                                 |
| [[!UICONTROL Ad Name]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#ad-name)                   | `friendlyName`| string    |   Yes    | The human readable name of the ad. In reporting, "Ad Name" is the classification and "Ad Name (variable)" is the eVar. |
| [[!UICONTROL Ad Placement ID]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#placement-id)            | `placementID` | string    |   No     | The placement ID of the ad.                                                                        |
| [[!UICONTROL Ad Player Name]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#ad-player-name)             | `playerName`  | string    |  Yes     | The name of the player responsible for rendering the ad.                                       |
| [[!UICONTROL Ad Site ID]](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/variables/ad-parameters.html#site-id)                 | `siteID`      | string    |   No     | The ID of the ad site.                                                                             |
