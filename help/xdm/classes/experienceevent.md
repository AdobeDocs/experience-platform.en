---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: XDM ExperienceEvent class
topic: overview
description: This document provides an overview of the XDM ExperienceEvent class.
---

# [!DNL XDM ExperienceEvent] class

[!DNL XDM ExperienceEvent] is a standard XDM class which allows you to create a timestamped snapshot of the system when a specific event occurs or a certain set of conditions have been reached.

An Experience Event is a fact record of what occurred, including the point in time and identity of the individual involved. Events can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation.

The [!DNL XDM ExperienceEvent] class itself provides several time-series-related fields to a schema. The values of some of these fields are automatically populated when data is ingested:

<img src='../images/classes/experienceevent.png' width=650 /><br />

| Property | Description |
| --- | --- |
| `_id` | A unique, system-generated string identifier for the record, used for lookup purposes in the API. |
| `eventMergeId` | The ID of the ingested batch that caused the record to be created. This field is automatically populated by the system upon data ingestion. |
| `eventType` | A string that indicates the primary event type for the record. Accepted values and their definitions are provided in the [appendix section](#eventType). |
| `identityMap` | A map field that contains a set of namespaced identities for the individual the event applies to. This field is automatically updated by the system as identity data is ingested. In order to properly utilize this field for [Real-time Customer Profile](../../profile/home.md), do not attempt to manually update the field's contents in your data operations.<br /><br />See the section on identity maps in the [basics of schema composition](../schema/composition.md#identityMap) for more information on their use case. |
| `timestamp` | The time when the event or observation occurred. |

## Compatible mixins {#mixins}

Adobe provides several standard mixins for use with the [!DNL XDM ExperienceEvent] class. The following is a list of some commonly used mixins for the class:

* [[!UICONTROL ExperienceEvent EndUserIDs]](../mixins/event/enduserids.md)
* [[!UICONTROL ExperienceEvent environment details]](../mixins/event/environment-details.md)

## Appendix

The following section contains additional information about the [!UICONTROL XDM ExperienceEvent] class.

### Accepted values for xdm:eventType {#eventType}

The following table outlines the accepted values for `xdm:eventType`, along with their definitions:

| Value | Definition |
| --- | --- |
|`advertising.completes` | A timed media asset has been watched to completion. This does not necessarily mean the viewer watched the whole video, as the viewer could have skipped ahead. |
|`advertising.timePlayed` | Describes the amount of time spent by a user on a specific timed media asset. |
|`advertising.federated` | Indicates if an Experience Event was created through data federation (data sharing between customers). |
|`advertising.clicks` | Click action(s) on an advertisement. |
|`advertising.conversions` | Pre-defined action(s) performed by a customer which triggers an event for performance evaluation. |
|`advertising.firstQuartiles` | A digital video ad has played through 25% of its duration at normal speed. |
|`advertising.impressions` | Impression(s) of an advertisement to a customer with the potential of being viewed. |
|`advertising.midpoints` | A digital video ad has played through 50% of its duration at normal speed. |
|`advertising.starts` | A digital video ad has started playing. |
|`advertising.thirdQuartiles` | A digital video ad has played through 75% of its duration at normal speed. |
|`web.webpagedetails.pageViews` | A webpage has received one or more views. |
|`web.webinteraction.linkClicks` | A link has received one or more clicks. |
|`commerce.checkouts` | A checkout event has occurred for a product list. There can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps, the timestamp and referenced page/experience for each event are used to identify the each individual event (step), represented in order. |
|`commerce.productListAdds` | A product has been added to the product list or shopping cart. |
|`commerce.productListOpens` | A new product list (shopping cart) has been initialized or created. |
|`commerce.productListRemovals` | One or more product entries have been removed from a product list or shopping cart. |
|`commerce.productListReopens` | A product list (shopping cart) that was no longer accessible (abandoned) has been re-activated by a customer, such as via a re-marketing activity. |
|`commerce.productListViews` | A product list or shopping cart has received one or more views. |
|`commerce.productViews` | A product has received one or more views. |
|`commerce.purchases` | An order has been accepted. This is the only required action in a commerce conversion. A purchase event must have a product list referenced. |
|`commerce.saveForLaters` | A product list has been saved for future use, such a product wishlist. |
|`delivery.feedback` | Feedback events for a delivery, such as an email delivery. |
|`message.feedback` | Feedback events like sent/bounce/error for messages sent to a customer. |
|`message.tracking` | Tracking events like open/click/custom actions on messages sent to a customer. |