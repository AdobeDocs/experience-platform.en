---
title: Partner Prospect Details (Sample) Field Group
description: This document provides an overview of the Partner Prospect Details (Sample) field group (XDM) schema field group.
---
# [!UICONTROL Partner Prospect Details (Sample)] field group

[!UICONTROL Partner Prospect Details (Sample)] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The [!UICONTROL Partner Prospect Details (Sample)] provides a sample framework for various details related to a prospect's profile. This framework streamlines the process of organizing and managing diverse prospect-related information. 

This field group extends the [Individual Prospect Profile class](https://experienceleague.adobe.com/docs/experience-platform/xdm/classes/prospect.html) within the context of a partner. 

![A diagram of the [!UICONTROL Partner Prospect Details (Sample)] field group.](../../images/field-groups/partner/partner-prospect-details-sample.png)

| Display name                          | Property                    | Data type | Description                                      |
|---------------------------------------|-----------------------------|-----------|--------------------------------------------------|
| [!UICONTROL ageRangeInHousehold]      | `ageRangeInHousehold`       | string    | Age range within the household.                   |
| [!UICONTROL apparelAccessories]       | `apparelAccessories`        | string    | Preferences or involvement in apparel/accessories.|
| [!UICONTROL bicycling]                | `bicycling`                 | string    | Interest or involvement in bicycling activities.  |
| [!UICONTROL cableTv]                  | `cableTv`                   | string    | Engagement with cable television.                 |
| [!UICONTROL domestics]                | `domestics`                 | string    | Preferences or engagement in domestic activities.|
| [!UICONTROL electronics]              | `electronics`               | string    | Interest or engagement in electronic devices.      |
| [!UICONTROL foodAndBeverage]          | `foodAndBeverage`           | string    | Preferences or involvement in food/beverage.      |
| [!UICONTROL footwear]                 | `footwear`                  | string    | Interest or involvement in footwear.              |
| [!UICONTROL healthFoods]              | `healthFoods`               | string    | Preferences or involvement in health foods.       |
| [!UICONTROL hiking]                   | `hiking`                    | string    | Interest or involvement in hiking activities.     |
| [!UICONTROL householdId]              | `householdId`               | string    | Unique identifier for the household.              |
| [!UICONTROL individualId]             | `individualId`              | string    | Unique identifier for the individual.             |
| [!UICONTROL inferredCardHolder]       | `inferredCardHolder`        | string    | Inference of being a cardholder.                  |
| [!UICONTROL inferredPremiumCardholder]| `inferredPremiumCardholder]`| string    | Inference of being a premium cardholder.        |
| [!UICONTROL matchLevelFlag]           | `matchLevelFlag`            | string    | Indicator of the matching level.                  |
| [!UICONTROL BuyerRating]              | `buyerRating`               | string    | Rating related to buying behavior.                |
| [!UICONTROL DonorRating]              | `donorRating`               | string    | Rating related to donor behavior.                 |
| [!UICONTROL InvestmentRating]         | `investmentRating`          | string    | Rating related to investment behavior.             |
| [!UICONTROL ResponderRating]          | `responderRating`           | string    | Rating related to responder behavior.             |
| [!UICONTROL SpendingVelocity]         | `spendingVelocity`          | string    | Speed or rate of spending.                        |
| [!UICONTROL SpendingVolume]           | `spendingVolume`            | string    | Amount or volume of spending.                     |
| [!UICONTROL recordId]                 | `recordId`                  | string    | Unique identifier for the record.                 |
| [!UICONTROL residenceId]              | `residenceId`               | string    | Unique identifier for the residence.              |
| [!UICONTROL sailing]                  | `sailing`                   | string    | Interest or involvement in sailing activities.    |
| [!UICONTROL seasonalHolidayProducts]  | `seasonalHolidayProducts`   | string    | Preferences or involvement in holiday products. |
| [!UICONTROL skiing]                   | `skiing`                    | string    | Interest or involvement in skiing activities.     |
| [!UICONTROL tennis]                   | `tennis`                    | string    | Interest or involvement in tennis activities.     |
| [!UICONTROL tvShoppers]               | `tvShoppers`                | string    | Engagement with TV shopping.                      |

{style="table-layout:auto"}

For more details on the field group, refer to the [full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/partner-prospect/merkle/prospect-details-partner-sample.schema.json) on the public XDM repository.

<!-- no populated example available -->
