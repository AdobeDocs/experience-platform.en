---
title: Partner Prospect Details (Sample) Field Group
description: Learn about the Partner Prospect Details (Sample) field group (XDM) schema field group.
exl-id: 2de1eb7a-2e44-4417-9bdd-7a8a4b2d3a7f
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
| [!UICONTROL cableTv]                  | `cableTv`                   | string    | Indicates engagement with cable television.                 |
| [!UICONTROL domestics]                | `domestics`                 | string    | Preferences or engagement in domestic activities.|
| [!UICONTROL electronics]              | `electronics`               | string    | Interest or engagement in electronic devices.      |
| [!UICONTROL foodAndBeverage]          | `foodAndBeverage`           | string    | Preferences or involvement in food/beverage.      |
| [!UICONTROL footwear]                 | `footwear`                  | string    | Interest or involvement in footwear.              |
| [!UICONTROL healthFoods]              | `healthFoods`               | string    | Preferences or involvement in health foods.       |
| [!UICONTROL hiking]                   | `hiking`                    | string    | Interest or involvement in hiking activities.     |
| [!UICONTROL householdId]              | `householdId`               | string    | A unique identifier for the household.              |
| [!UICONTROL individualId]             | `individualId`              | string    | A unique identifier for the individual.             |
| [!UICONTROL inferredCardHolder]       | `inferredCardHolder`        | string    | The inference of being a cardholder.                  |
| [!UICONTROL inferredPremiumCardholder]| `inferredPremiumCardholder]`| string    | The inference of being a premium cardholder.        |
| [!UICONTROL matchLevelFlag]           | `matchLevelFlag`            | string    | An indicator of the matching level.                  |
| [!UICONTROL BuyerRating]              | `buyerRating`               | string    | A rating related to buying behavior.                |
| [!UICONTROL DonorRating]              | `donorRating`               | string    | A rating related to donor behavior.                 |
| [!UICONTROL InvestmentRating]         | `investmentRating`          | string    | A rating related to investment behavior.             |
| [!UICONTROL ResponderRating]          | `responderRating`           | string    | A rating related to responder behavior.             |
| [!UICONTROL SpendingVelocity]         | `spendingVelocity`          | string    | The speed or rate of spending.                        |
| [!UICONTROL SpendingVolume]           | `spendingVolume`            | string    | The amount or volume of spending.                     |
| [!UICONTROL recordId]                 | `recordId`                  | string    | A unique identifier for the record.                 |
| [!UICONTROL residenceId]              | `residenceId`               | string    | A unique identifier for the residence.              |
| [!UICONTROL sailing]                  | `sailing`                   | string    | Indicates the interest or involvement in sailing activities.    |
| [!UICONTROL seasonalHolidayProducts]  | `seasonalHolidayProducts`   | string    | Indicates the preferences or involvement in holiday products. |
| [!UICONTROL skiing]                   | `skiing`                    | string    | Indicates the interest or involvement in skiing activities.     |
| [!UICONTROL tennis]                   | `tennis`                    | string    | Indicates the interest or involvement in tennis activities.     |
| [!UICONTROL tvShoppers]               | `tvShoppers`                | string    | Indicates engagement with TV shopping.                      |

{style="table-layout:auto"}

For more details on the field group, refer to the [full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/partner-prospect/merkle/prospect-details-partner-sample.schema.json) on the public XDM repository.
