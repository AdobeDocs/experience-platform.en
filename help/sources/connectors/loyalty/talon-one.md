---
title: Talon.One Source Overview
description: Learn about the Talon.One sources on Adobe Experience Platform
badge: Beta
hide: true
hidefromtoc: true
exl-id: 92ed180a-6175-45e2-a831-0f40fd8606b0
---
# [!DNL Talon.One]

>[!AVAILABILITY]
>
>The [!DNL Talon.One] sources are in beta. Read the [terms and conditions](../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

With [!DNL Talon.One], you can easily create, manage, and optimize personalized marketing campaigns tailored to your customers. Use this powerful platform to run discounts, distribute coupons, launch referral programs, set up loyalty programs, and offer gamified incentives—all from one scalable system designed to help you engage and reward your audience.

You can use the [!DNL Talon.One] sources in the Adobe Experience Platform sources catalog to ingest both batch and streaming loyalty data from your [!DNL Talon.One] account.

* [Talon.One Streaming Events](../../tutorials/ui/create/loyalty/talon-one-streaming.md)
* [Talon.One Batch Source Connector](../../tutorials/ui/create/loyalty/talon-one-batch.md)

>[!TIP]
>
>Loyalty data refers to your end users' loyalty program information such as loyalty points, spent loyalty points, current tier, coupons granted, referrals, and achievements.

## Prerequisites {#prerequisites}

Provide values for the following credentials to authenticate and connect the [!DNL Talon.One Batch Source Connector].

| Credential | Description | Example |
| --- | --- | --- |
| Domain | The unique URL associated with your [!DNL Talon.One] application environment. Ensure that you do not include the protocol or path when inputting your domain. | `acmetalonone.us-east4` |
| [!DNL Talon.One] Management API Key | The Management API Key is a credential used to authenticate and authorize access to [!DNL Talon.One]'s Management API. This handles operations such as: <ul><li>Importing coupons</li><li>Retrieving campaign data</li><li>Managing applications and endpoints</li></ul> | `ManagementKey-v1 {YOUR_MANAGEMENT_KEY}` |

## Mapping {#mapping}

To help you map each effect object based on its unique `effectType` value, you can use the data prep `array_to_map` function. This allows you to easily convert an unordered array of effects into key-value pairs that match your requirements. See the example below for guidance.

You can also use the standardized loyalty field groups that Adobe provides to model your loyalty-program concepts in a consistent way. 

>[!BEGINTABS]

>[!TAB Loyalty Details]

This is a standard XDM field group for XDM Individual Profile, used to describe the loyalty membership status of a person by capturing their record attributes, rather than event data. Use this field group in your Profile schemas to capture:

* **Who** the member is in the program (`loyaltyID`, `program`, `status`, `tier`)
* Their **current & lifetime balances** (`points`, `lifetimePoints`, `expiredPoints`, etc.)
* Key **membership dates** (`joinDate`, `upgradeDate`, `tierExpiryDate`)

>[!TAB Loyalty Event Details]

The Loyalty Event Details field group is designed to capture loyalty activity at the event level, such as points earned or redeemed in a specific transaction. This field group includes fields like `xdm:points`, `xdm:pointsRedeemed`, `xdm:pointsAsOfDate`, and `xdm:program`. Use this event-level field group in your Experience Event schemas to capture:

* **Per‑event movements** in points (gained, redeemed, expired)
* **Discounts** that were driven by loyalty coupons or referrals
* **Program IDs** and transaction IDs for reconciliation with the loyalty provider.

>[!ENDTABS]

| Source | Destination |
| ---- | --- |
| `array_to_map(data.effects, "effectType").addLoyaltyPoints.campaignId` | `_{TENANT_ID}.loyalty.pointsGained[0].promotionId` |
| `array_to_map(data.effects, "effectType").addLoyaltyPoints.props.value`| `_{TENANT_ID}.loyalty.pointsGained[0].value` |
| `array_to_map(data.effects, "effectType").deductLoyaltyPoints.campaignId` | `_{TENANT_ID}.loyalty.pointsRedemption[0].promotionId` |
| `array_to_map(data.effects, "effectType").acceptCoupon.campaignId` | `_{TENANT_ID}.loyalty.couponRedemption[0].campaignId` |
| `array_to_map(data.effects, "effectType").deductLoyaltyPoints.props.value` | `_{TENANT_ID}.loyalty.pointsRedemption[0].value`|
| `array_to_map(data.effects, "effectType").acceptCoupon.props.value` | `_{TENANT_ID}.loyalty.couponRedemption[0].id` |
| `array_to_map(data.effects, "effectType").setDiscount.campaignId` | `_{TENANT_ID}.loyalty.discounts[0].promotionId`|
| `array_to_map(data.effects, "effectType").setDiscount.props.value` | `_{TENANT_ID}.loyalty.discounts[0].value` |
| `data.created` | `timestamp` |
| `data.attributes.params.profileId` | `personID` |
| `data.attributes.integrationId` | `_id` |
| `data.attributes.params.cartItems[*].name` | `productListItems[*].name`  |
| `data.attributes.params.cartItems[*].category` | `productListItems[*].productCategories[0].categoryID` |
| `data.attributes.params.cartItems[*].sku` | `productListItems[*].SKU` |

{style="table-layout:auto"}

## Next steps

Read the following documentation to learn how you can connect your [!DNL Talon.One] account to Experience Platform and ingest both batch and streaming loyalty data.

* [Talon.One Streaming Events](../../tutorials/ui/create/loyalty/talon-one-streaming.md)
* [Talon.One Batch Source Connector](../../tutorials/ui/create/loyalty/talon-one-batch.md)
