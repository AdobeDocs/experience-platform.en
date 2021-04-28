---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: XDM ExperienceEvent Class
topic-legacy: overview
description: This document provides an overview of the XDM ExperienceEvent class.
exl-id: a8e59413-b52f-4ea5-867b-8d81088a3321
---
# [!DNL XDM ExperienceEvent] class

[!DNL XDM ExperienceEvent] is a standard XDM class which allows you to create a timestamped snapshot of the system when a specific event occurs or a certain set of conditions have been reached.

An Experience Event is a fact record of what occurred, including the point in time and identity of the individual involved. Events can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation. For more high-level information on the use of this class in the Platform ecosystem, refer to the [XDM overview](../home.md#data-behaviors).

The [!DNL XDM ExperienceEvent] class itself provides several time-series-related fields to a schema. The values of some of these fields are automatically populated when data is ingested:

![](../images/classes/experienceevent/structure.png)

| Property | Description |
| --- | --- |
| `_id` | A unique string identifier for the event. This field is used to track the uniqueness of an individual event, prevent duplication of data, and to look up that event in downstream services. Typically, this should be a [Universally Unique Identifier (UUID)](https://tools.ietf.org/html/rfc4122) or [Globally Unique Identifier (GUID)](https://docs.microsoft.com/en-us/dotnet/api/system.guid?view=net-5.0).<br><br>It is important to distinguish that this field **does not** represent an identity related to an individual person, but rather the record of data itself. Identity data relating to a person should be relegated to [identity fields](../schema/composition.md#identity) instead. |
| `eventMergeId` | The ID of the ingested batch that caused the record to be created. This field is automatically populated by the system upon data ingestion. |
| `eventType` | A string that indicates the type or category for the event. This field can be used if you want to distinguish different event types within the same schema and dataset, such as distinguishing a product view event from an add-to-shopping-cart event for a retail company.<br><br>Standard values for this property are provided in the [appendix section](#eventType), including descriptions of their intended use case. This field is a soft enum, however, meaning that you can also use your own event type strings to categorize the events you are tracking. |
| `producedBy` | A string value that describes the producer or origin of the event. This field can be used to filter out certain event producers if needed for segmentation purposes.<br><br>Some suggested values for this property are provided in the [appendix section](#producedBy). This field is a soft enum, however, meaning that you can also use your own strings to represent different event producers. |
| `identityMap` | A map field that contains a set of namespaced identities for the individual the event applies to. This field is automatically updated by the system as identity data is ingested. In order to properly utilize this field for [Real-time Customer Profile](../../profile/home.md), do not attempt to manually update the field's contents in your data operations.<br /><br />See the section on identity maps in the [basics of schema composition](../schema/composition.md#identityMap) for more information on their use case. |
| `timestamp` | An ISO 8601 timestamp of when the event occurred, formatted as per [RFC 3339 Section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6). This timestamp must occur in the past. See the section below on [timestamps](#timestamps) for best practices on the use of this field. |

## Best practices for event modeling

The following sections cover best practices for designing your event-based Experience Data Model (XDM) schemas in Adobe Experience Platform.

### Timestamps {#timestamps}

The root `timestamp` field of an event schema can **only** represent the observation of the event itself, and must occur in the past. If your segmentation use cases require the use of timestamps that may occur in the future, these values must be constrained elsewhere in your Experience Event schema.

For example, if a business in the travel and hospitality industry is modeling a flight reservation event, the class-level `timestamp` field represents the time when the reservation event was observed. Other timestamps that are related to the event, such as the start date of the travel reservation, should be captured in separate fields provided by standard or custom mixins.

![](../images/classes/experienceevent/timestamps.png)

By keeping the class-level timestamp separate from other related datetime values in your event schemas, you can implement flexible segmentation use cases while preserving a timestamped account of customer journeys in your experience application.

### Using calculated fields

Certain interactions in your experience applications can result in multiple related events that technically share the same event timestamp. For example, if a customer views a product on your website, this can result in both a "product view" event and a generic "page view" event. In these cases, you can use calculated fields to capture the most important event whenever multiple events are observed.

[Adobe Experience Platform Data Prep](../../data-prep/home.md) allows you to map, transform, and validate data to and from XDM. Using the available [mapping functions](../../data-prep/functions.md) provided by the service you can invoke logical operators to prioritize, transform, and/or consolidate data from multiple events when being ingested into Experience Platform.

If you are manually ingesting data into Platform via the UI, see the guide on [mapping a CSV file to XDM](../../ingestion/tutorials/map-a-csv-file.md) for specific steps on how to create calculated fields.

If you are streaming data to Platform using a source connection, you can configure the source to utilize calculated fields instead. Refer to the [documentation for your particular source](../../sources/home.md) for instructions on how to implement calculated fields when configuring the connection.

## Compatible mixins {#mixins}

>[!NOTE]
>
>The names of several mixins have changed. See the document on [mixin name updates](../mixins/name-updates.md) for more information.

Adobe provides several standard mixins for use with the [!DNL XDM ExperienceEvent] class. The following is a list of some commonly used mixins for the class:

* [[!UICONTROL End User ID Details]](../mixins/event/enduserids.md)
* [[!UICONTROL Environment Details]](../mixins/event/environment-details.md)

## Appendix

The following section contains additional information about the [!UICONTROL XDM ExperienceEvent] class.

### Accepted values for `eventType` {#eventType}

The following table outlines the accepted values for `eventType`, along with their definitions:

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
|`web.webinteraction.linkClicks` | A link has been selected one or more times. |
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

### Suggested values for `producedBy` {#producedBy}

The following table outlines some accepted values for `producedBy`:

| Value | Definition |
| --- | --- |
| `self` | Self |
| `system` | System |
| `salesRef` | Sales Representative |
| `customerRep` | Customer Representative |
