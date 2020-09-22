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

The [!DNL XDM ExperienceEvent] class itself provides several system-generated values that are automatically populated when data is ingested, whereas all other fields must be added through the use of [compatible mixins](#mixins):

<img src='../images/classes/experienceevent.png' width=650 /><br />

| Property | Description |
| --- | --- |
| `_id` | A unique string identifier for the record, used for lookup purposes in the API. |
| `eventMergeId` | The ID of the ingested batch that caused the record to be created. |
| `eventType` | A string that indicates the primary event type for the record. Accepted values and their definitions are provided in the [appendix section](#eventType). |
| `identityMap` | A map field that contains a set of namespaced identities for the individual the event applies to. This field is automatically updated by the system as identity data is ingested. In order to properly utilize this field for [Real-time Customer Profile](../../profile/home.md), do not attempt to manually update the field's contents in your data operations.<br /><br />See the section on identity maps in the [basics of schema composition](../schema/composition.md#identityMap) for more information on their use case. |
| `timestamp` | The time when the event or observation occurred. |

## Compatible mixins {#mixins}

Adobe provides several standard mixins for use with the [!DNL XDM ExperienceEvent] class. The following is a list of the most commonly used mixins for the class:

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
|`web.webpagedetails.pageViews` | View(s) of a webpage has occurred. |
|`web.webinteraction.linkClicks` | Click of a web-link has occurred. |
|`commerce.checkouts` | An action during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order. |
|`commerce.productListAdds` | Addition of a product to the product list. Example a product is added to a shopping cart. |
|`commerce.productListOpens` | Initializations of a new product list. Example a shopping cart is created. |
|`commerce.productListRemovals` | Removal(s) of a product entry from a product list. Example a product is removed from a shopping cart. |
|`commerce.productListReopens` | A product list that was no longer accessible(abandoned) has been re-activated by the user. Example via a re-marketing activity. |
|`commerce.productListViews` | View(s) of a product-list has occurred. |
|`commerce.productViews` | View(s) of a product have occurred. |
|`commerce.purchases` | An order has been accepted. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced. |
|`commerce.saveForLaters` | Product list is saved for future use. Example a product wish list. |
|`delivery.feedback` | Feedback events for a delivery. Example feedback events for an email delivery. |
|`message.feedback` | Feedback events like sent/bounce/error for messages sent to a user. |
|`message.tracking` | Tracking events like open/click/custom action on messages sent to a user. |