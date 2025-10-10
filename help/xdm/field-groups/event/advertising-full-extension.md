---
title: Adobe Advertising Cloud ExperienceEvent Full Extension Schema Field Group
description: Learn about the Adobe Advertising Cloud ExperienceEvent Full Extension schema field group.
badgeBeta: label="Beta" type="Informative"
exl-id: 4a9f6bff-6098-424a-b8f4-0f14ec52d906
---
# [!UICONTROL Adobe Advertising Cloud ExperienceEvent Full Extension] schema field group

>[!AVAILABILITY]
>
>The [!UICONTROL Adobe Advertising Cloud ExperienceEvent Full Extension] field group is currently in beta. The documentation and the functionality are subject to change.

[!UICONTROL Adobe Advertising Cloud ExperienceEvent Full Extension] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md), which captures common metrics that are collected by Adobe Advertising (formerly called "[!DNL Advertising Cloud]").

This document describes the structure and use case of the [!DNL Advertising Cloud] extension field group.

>[!NOTE]
>
>You can also look up this field group [in the Experience Platform UI](../../ui/explore.md) or view the complete schema in the [public XDM repository](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/analytics/experienceevent-all.schema.json).

## Field group structure

The field group provides a single `_experience` object to a schema, which itself contains a single `adcloud` object.

![Top-level fields for the [!DNL Advertising Cloud] field group](../../images/field-groups/advertising-full-extension/full-schema.png "Top-level fields for the [!DNL Advertising Cloud] field group")

| Property | Data type | Description |
| --- | --- | --- |
| `adDeliveryDetails` | Object | Ad delivery details. See the [subsection below on the `adDeliveryDetails` object](#adDeliveryDetails) for more information on the contents of this object. |
| `advertisement` | Object | Digital advertisement details. See the [subsection below on the advertisement object](#advertisement) for more information on the contents of this object. |
| `campaign` | Object | Campaign hierarchy details. See the [subsection below on the campaign object](#campaign-campaign) for more information on the contents of this object. |
| `conversionDetails` | Object | Conversion details for an ad. See the [subsection below](#conversionDetails) for more information on the contents of this object. |
| `eventType` | String | The Adobe Advertising event type. |
| `fees` | Object | Advertising fee details. See the [subsection below on the fees object](#fees) for more information on the contents of this object. |
| `inventory` | Object | Inventory details. See the [subsection below](#inventory) for more information on the contents of this object. |
| `productDetails` | Object | Product ad details. See the [subsection below on the productDetails object](#productDetails) for more information on the contents of this object. |
| `stitchId` | String | ID from the Adobe Advertising ad servers to track click-through conversions on browsers that block third-party cookies. |

## `adDeliveryDetails` {#adDeliveryDetails}

The adDeliveryDetails object provides information about where and how the advertisement was delivered, including placement websites and location identifiers.

![Schema diagram showing the `adDeliveryDetails` object and its fields.](../../images/field-groups/advertising-full-extension/adDeliveryDetails.png)

| Property | Data type | Description |
| --- | --- | --- |
| `placementWebsite` | String | The website where the advertisement was shown. |
| `siteLinkText` | String | The actual site link selected in the advertisement. |
| `interestLocationID` | String | The location inferred from the search query. For example, a query for "Hotel in Goa" returns the ID for Goa, regardless of the user's actual browsing location.|
| `physicalLocationID` | String | The user's browsing location, represented by a reference ID from the ad network. This ID is not a readable location name (such as a city or country) but a code assigned by the ad network to identify a geographic target. |

## `advertisement` {#advertisement}

The advertisement object describes details about the digital advert, such as its identifiers, type, creative, targeting, and associated keywords.

![Schema diagram showing the `advertisement` object and its fields.](../../images/field-groups/advertising-full-extension/advertisement.png)

| Property | Data type | Description |
| --- | --- | --- |
| `adId` | String | The identifier for the ad associated with this event. This ID is not related to the Ad-ID industry standard. |
| `runtime` | String | The runtime of the ad unit, distinct from the runtime of the browser or the operating system. Possible values include: `unknown` and `HTML5`. |
| `adClass` | String | The ad class of the driving event: `display`, `video`, or `social`. |
| `adUnitType` | String | The identifier for the code that renders the ad in a browser or device. Possible values include:<ul><li>`linearVideo`: Linear video</li><li>`interactiveVideo`: Interactive video</li><li>`banner`: Banner,</li><li>`richMediaBanner`: Rich media banner,</li><li>`newsFeedVideo`: News feed video,</li><li>`newsFeedDisplay`: News feed display,</li><li>`HTML5`: HTML5,</li><li>`inPageVideo`: In page video,</li><li>`inPageDisplay`: In page display,</li><li>`facebook`: Facebook,</li><li>`twitter`: Twitter,</li><li>`linearTv`: Linear TV,</li><li>`vod`: Video on Demand</li></ul> |
| `promotedAssetId` | String | The identifier for the asset promoted in the ad associated with this event. |
| `creativeID` | String | The identifier for the advertisement creative (such as a banner, video, or social ad) associated with this event. |
| `keywordID` | String | The identifier for the keyword entered by the user in a search query that triggered this event. |
| `keyword` | String | The listing keyword that the customer bid on. |
| `isDynamicSearchAd` | Boolean | Indicates whether the event comes from a dynamic search advertisement. |
| `audienceID` | String | The identifier for the audience segment targeted by the ad. |
| `adGroupID` | String | The identifier for the ad group associated with the ad that triggered this event. |
| `campaignID` | String | The identifier for the campaign associated with the ad that triggered this event. |
| `networkType` | String | The network type where the event occurred. Possible values include: <ul><li>`search`: The advertisement was displayed on the Search Network.</li><li>`content`: The advertisement was displayed on the Content Network.</li></ul> |
| `matchType` | String | The keyword match type. Possible values include: <ul><li>`exact`: Exact match of the keyword</li><li>`broad`: Broad match of the keyword</li><li>`phrase`: Phrase match of the keyword</li></ul> |

## `campaign` {#campaign}

The campaign object defines the ad campaign hierarchy, including account, advertiser, placement, and package identifiers, along with currency details.

![Schema diagram showing the `campaign` object and its fields.](../../images/field-groups/advertising-full-extension/campaign.png)

| Property | Data type | Description |
| --- | --- | --- |
| `accountId` | String | The identifier for the account. |
| `dspId` | String | The identifier for the Demand Side Platform (DSP) in which the campaign is defined. Usually, this identifier is the ID for Adobe Advertising Cloud DSP. |
| `campaignId` | String | The identifier for the campaign. |
| `placementId` | String | The identifier for the placement. |
| `packageId` | String | The identifier for the Advertising DSP package. |
| `advertiserId` | String | The identifier for the advertiser. |
| `experimentId` | String | The identifier for the experiment. |
| `sampleGroupId` | String | The identifier for the sample group. |
| `currency` | String | The ISO 4217 billing currency code for the account. Uses the regular expression pattern ^[A-Z]{3}$ (three uppercase letters). For example: USD, EUR. |

## `conversionDetails` {#conversionDetails}

The conversionDetails object captures tracking information for ad conversions, including tracking codes, identities, and conversion properties.

![Schema diagram showing the `conversionDetails` object and its fields.](../../images/field-groups/advertising-full-extension/conversionDetails.png "conversionDetails field")

| Property | Data type | Description |
| --- | --- | --- |
| `trackingCode` | String | The conversion tracking code for the event. For a list of possible formats, see [AMO ID Formats](https://experienceleague.adobe.com/en/docs/advertising/integrations/customer-journey-analytics/ids#amo-id-formats). |
| `trackingIdentities` | String | The EF ID, or tracking identity details for an event. For a list of possible formats, see [EF ID Formats](https://experienceleague.adobe.com/en/docs/advertising/integrations/customer-journey-analytics/ids#ef-id-formats). |
| `conversionProperties` | Object | A map of conversion properties, represented as an array of key-value pair strings (such as `subscriptions=253`). |

## `fees` {#fees}

The fees object captures media, data, and other advertising costs, broken down by Advertising DSP, account, and advertiser.

![Schema diagram showing the `fees` object and its fields.](../../images/field-groups/advertising-full-extension/fees.png)

| Property | Data type | Description |
| --- | --- | --- |
| `DSPMediaFees` | Number | The media fees billable by Advertising DSP. |
| `DSPDataFees` | Number | The data fees billable by Advertising DSP. |
| `DSPOtherFees` | Number | Other fees billable by Advertising DSP. |
| `accountMediaFees` | Number | The media fees for the account but not billable by Advertising DSP. |
| `accountDataFees` | Number | The data fees for the account but not billable by Advertising DSP. |
| `accountOtherFees` | Number | Other fees for the account but not billable by Advertising DSP. |
| `advertiserMediaFees` | Number | The media advertiser fees charged to the advertiser from the account. |
| `advertiserDataFees` | Number | Other advertiser fees charged to the advertiser from the account. |
| `advertiserOtherFees` | Number | Other advertiser fees charged to the advertiser from the account. |
| `billableMediaNetSpend` | Number | The billable net spend for media advertising. |
| `totalMediaNetSpend` | Number | The total net spend for media advertising. |
| `billableDataNetSpend` | Number | The billable net spend for data advertising. |
| `billableOtherNetSpend` | Number | The billable net spend for other types of advertising. |
| `totalBillableNetSpend` | Number | The total billable net spend. |
| `totalNonBillableNetSpend` | Number | The total non-billable net spend. |
| `totalNetSpend` | Number | The total net spend. |

## `inventory` {#inventory}

The inventory object records details about the ad inventory opportunity, including session data, partner codes, site IDs, cost currency, and segmentation rules.

![Schema diagram showing the `inventory` object and its fields.](../../images/field-groups/advertising-full-extension/inventory.png)

| Property | Data type | Description |
| --- | --- | --- |
| `sessionId` | String | The session ID associated with an experience event, used to link independent events that occurred in the same session. |
| `feedID` | String | A composite ID of the publisher, ad exchange, and other features.|
| `sspPartnerCode` | String | The partner (exchange) through which Adobe Advertising Cloud receives the inventory opportunity. |
| `siteID` | String | The identifier for the website where the ad impression was served. |
| `costCurrency` | String | The ISO 4217 currency code used to pay a partner for an ad opportunity. The value must follow the regular expression pattern ^[A-Z]{3}$ (three uppercase letters). For example: USD, EUR. |
| `inventorySourceId` | String | The ID of the Adobe Advertising Cloud inventory source on which this opportunity was delivered. |
| `segment` | Object | Details associated with user segmentation rules. Its properties include:<ul><li>`attributablePartnerId` (String): The identifier for the segment provider who owns the attributableSegmentId.</li><li>`attributableSegmentId` (String): The segment credited for user targeting in the placement's targeting rule. This is used for the purposes of tracking costs and paying partners.</li><li>`segments` (String): The intersection of the user segments a\) to which the user belonged, and b\) that the ad was targeting. This is not the full list of segments to which the user belonged at the time of the auction.</li></ul> |
| `optimizationTag` | String | The tag related to optimization. |
| `attributableDeviceGraphId` | String | The identifier for the device graph attributed to a conversion event. |

## `productDetails` {#productDetails}

The `productDetails` object contains information about products featured in shopping ads for [!DNL Adobe Advertising Search, Social, & Commerce], including product identifiers, country, language, partition, title, and ad type.

![Schema diagram showing the `productDetails` object and its fields.](../../images/field-groups/advertising-full-extension/productDetails.png)

| Property | Data type | Description |
| --- | --- | --- |
| `productID` | String | The identifier for the product featured in the ad associated with this event. |
| `country` | String | The country of sale for the product featured in the ad associated with the event. |
| `language` | String | The language of your product information, as indicated in client's Merchant Center data feed. |
| `partitionID` | String | The identifier for the product group associated with the ad in this event. |
| `title` | String | The product title shown in the advertisement. |
| `adType` | String | The ad type for the product used in [!DNL Google] Shopping campaigns. Possible values include:<ul><li>`pla_with_pog`: When the event came from a purchase through a shopping ad</li><li>`pla`: When the event came from a shopping ad.</li><li>`pla_multichannel`: When the event from a shopping ad included options for both "online" and "local" shopping channels.</li><li>`pla_with_promotion`: When the event from a shopping ad displayed a merchant promotion.</li></ul> |

## Next steps

This document covered the structure and use case for the [!DNL Advertising Cloud] extension field group. For more details on the field group itself, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/extensions/adobe/experience/adcloud/experienceevent-all.schema.json).

If you are using this field group to collect [!DNL Advertising] data using the Adobe Experience Platform Web SDK, see the guide on [configuring a datastream](../../../datastreams/overview.md) to learn how to map data to XDM on the server side.
