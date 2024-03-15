---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;event modeling;event modelling;best practices;event;events;
solution: Experience Platform
title: XDM ExperienceEvent Class
description: Learn about the XDM ExperienceEvent class, and best practices for event data modeling.
exl-id: a8e59413-b52f-4ea5-867b-8d81088a3321
---
# [!DNL XDM ExperienceEvent] class

[!DNL XDM ExperienceEvent] is a standard Experience Data Model (XDM) class. Use this class to create a timestamped snapshot of the system when a specific event occurs or a certain set of conditions have been reached.

An Experience Event is a fact record of what occurred, including the point in time and identity of the individual involved. Events can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation. For more high-level information on the use of this class in the Platform ecosystem, refer to the [XDM overview](../home.md#data-behaviors).

The [!DNL XDM ExperienceEvent] class itself provides several time-series-related fields to a schema. Two of these fields (`_id` and `timestamp`) are **required** for all schemas based on this class, while the rest are optional. The values of some of the fields are automatically populated when data is ingested.

![The structure of XDM ExperienceEvent as it appears in the Platform UI.](../images/classes/experienceevent/structure.png)

| Property | Description |
| --- | --- |
| `_id`<br>**(Required)** | The Experience Event Class `_id` field uniquely identifies individual events that are ingested into Adobe Experience Platform. This field is used to track the uniqueness of an individual event, prevent duplication of data, and look up that event in downstream services.<br><br>Where duplicate events are detected, Platform applications and services may handle the duplication differently. For example, duplicate events in Profile Service are dropped if the event with the same `_id` already exists in the Profile Store.<br><br>In some cases, `_id` can be a [Universally Unique Identifier (UUID)](https://datatracker.ietf.org/doc/html/rfc4122) or [Globally Unique Identifier (GUID)](https://learn.microsoft.com/en-us/dotnet/api/system.guid?view=net-5.0).<br><br>If you are streaming data from a source connection or ingesting directly from a Parquet file, you should generate this value by concatenating a certain combination of fields that make the event unique. Examples of events that could be concatenated include primary ID, timestamp, event type, and so on. The concatenated value must be a `uri-reference` formatted string, meaning any colon characters must be removed. Afterwards, the concatenated value should be hashed using SHA-256 or another algorithm of your choice.<br><br>It is important to distinguish that **this field does not represent an identity related to an individual person**, but rather the record of data itself. Identity data relating to a person should be relegated to [identity fields](../schema/composition.md#identity) provided by compatible field groups instead. |
| `eventMergeId` | If using the [Adobe Experience Platform Web SDK](/help/web-sdk/home.md) to ingest data, this represents the ID of the ingested batch that caused the record to be created. This field is automatically populated by the system upon data ingestion. The use of this field outside of the context of a Web SDK implementation is not supported. |
| `eventType` | A string that indicates the type or category for the event. This field can be used if you want to distinguish different event types within the same schema and dataset, such as distinguishing a product view event from an add-to-shopping-cart event for a retail company.<br><br>Standard values for this property are provided in the [appendix section](#eventType), including descriptions of their intended use case. This field is an extensible enum, meaning that you can also use your own event type strings to categorize the events you are tracking.<br><br>`eventType` limits you to using only a single event per hit on your application, and therefore you must use calculated fields to let the system know which event is most important. For more information, see the section on [best practices for calculated fields](#calculated). |
| `producedBy` | A string value that describes the producer or origin of the event. This field can be used to filter out certain event producers if needed for segmentation purposes.<br><br>Some suggested values for this property are provided in the [appendix section](#producedBy). This field is an extensible enum, meaning that you can also use your own strings to represent different event producers. |
| `identityMap` | A map field that contains a set of namespaced identities for the individual that the event applies to. This field is automatically updated by the system as identity data is ingested. To properly utilize this field for [Real-Time Customer Profile](../../profile/home.md), do not attempt to manually update the field's contents in your data operations.<br /><br />See the section on identity maps in the [basics of schema composition](../schema/composition.md#identityMap) for more information on their use case. |
| `timestamp`<br>**(Required)** | An ISO 8601 timestamp of when the event occurred, formatted as per [RFC 3339 Section 5.6](https://datatracker.ietf.org/doc/html/rfc3339). This timestamp **must** occur in the past, but **must** take place from 1970 onwards. See the section below on [timestamps](#timestamps) for best practices on the use of this field. |

{style="table-layout:auto"}

## Best practices for event modeling

The following sections cover best practices for designing your event-based Experience Data Model (XDM) schemas in Adobe Experience Platform.

### Timestamps {#timestamps}

The root `timestamp` field of an event schema can **only** represent the observation of the event itself, and must occur in the past. However, the event **must** take place from 1970 onwards. If your segmentation use cases require the use of timestamps that may occur in the future, these values must be constrained elsewhere in your Experience Event schema.

For example, if a business in the travel and hospitality industry is modeling a flight reservation event, the class-level `timestamp` field represents the time when the reservation event was observed. Other timestamps that are related to the event, such as the start date of the travel reservation, should be captured in separate fields provided by standard or custom field groups.

![A sample Experience Event schema with Flight Reservation and Start Date highlighted.](../images/classes/experienceevent/timestamps.png)

By keeping the class-level timestamp separate from other related datetime values in your event schemas, you can implement flexible segmentation use cases while preserving a timestamped account of customer journeys in your experience application.

### Using calculated fields {#calculated}

Certain interactions in your experience applications can result in multiple related events that technically share the same event timestamp, and can therefore be represented as a single event record. For example, if a customer views a product on your website, this can result in an event record that has two potential `eventType` values: a "product view" event (`commerce.productViews`) or a generic "page view" event (`web.webpagedetails.pageViews`). In these cases, you can use calculated fields to capture the most important attributes when multiple events are captured in a single hit.

Use [Adobe Experience Platform Data Prep](../../data-prep/home.md) to map, transform, and validate data to and from XDM. Using the available [mapping functions](../../data-prep/functions.md) provided by the service you can invoke logical operators to prioritize, transform, and/or consolidate data from multi-event records when being ingested into Experience Platform. In the example above, you could designate `eventType` as a calculated field that would prioritize a "product view" over a "page view" whenever they both occur.

If you are manually ingesting data into Platform via the UI, see the guide on [calculated fields](../../data-prep/ui/mapping.md#calculated-fields) for specific steps on how to create calculated fields.

If you are streaming data to Platform using a source connection, you can configure the source to utilize calculated fields instead. Refer to the [documentation for your particular source](../../sources/home.md) for instructions on how to implement calculated fields when configuring the connection.

## Compatible schema field groups {#field-groups}

>[!NOTE]
>
>The names of several field groups have changed. See the document on [field group name updates](../field-groups/name-updates.md) for more information.

Adobe provides several standard field groups for use with the [!DNL XDM ExperienceEvent] class. The following is a list of some commonly used field groups for the class:

* [[!UICONTROL Adobe Analytics ExperienceEvent Full Extension]](../field-groups/event/analytics-full-extension.md)
* [[!UICONTROL Balance Transfers]](../field-groups/event/balance-transfers.md)
* [[!UICONTROL Campaign Marketing Details]](../field-groups/event/campaign-marketing-details.md)
* [[!UICONTROL Card Actions]](../field-groups/event/card-actions.md)
* [[!UICONTROL Channel Details]](../field-groups/event/channel-details.md)
* [[!UICONTROL Commerce Details]](../field-groups/event/commerce-details.md)
* [[!UICONTROL Deposit Details]](../field-groups/event/deposit-details.md)
* [[!UICONTROL Device Trade-In Details]](../field-groups/event/device-trade-in-details.md)
* [[!UICONTROL Dining Reservation]](../field-groups/event/dining-reservation.md)
* [[!UICONTROL End User ID Details]](../field-groups/event/enduserids.md)
* [[!UICONTROL Environment Details]](../field-groups/event/environment-details.md)
* [[!UICONTROL Flight Reservation]](../field-groups/event/flight-reservation.md)
* [[!UICONTROL IAB TCF 2.0 Consent]](../field-groups/event/iab.md)
* [[!UICONTROL Lodging Reservation]](../field-groups/event/lodging-reservation.md)
* [[!UICONTROL MediaAnalytics Interaction Details]](../field-groups/event/mediaanalytics-interaction.md)
* [[!UICONTROL Quote Request Details]](../field-groups/event/quote-request-details.md)
* [[!UICONTROL Reservation Details]](../field-groups/event/reservation-details.md)
* [[!UICONTROL Web Details]](../field-groups/event/web-details.md)

## Appendix

The following section contains additional information about the [!UICONTROL XDM ExperienceEvent] class.

### Accepted values for `eventType` {#eventType}

The following table outlines the accepted values for `eventType`, along with their definitions:

| Value | Definition |
| --- | --- |
|`advertising.clicks` | This event tracks when an action to select an advertisement occurs. |
|`advertising.completes` | This event tracks when a timed media asset has been watched to completion. This does not necessarily mean that the viewer watched the whole video, as the viewer could have skipped ahead. |
|`advertising.conversions` | This event tracks a pre-defined action performed by a customer that triggers an event for performance evaluation. |
|`advertising.federated` | This event tracks whether an Experience Event was created through data federation (data sharing between customers). |
|`advertising.firstQuartiles` | This event tracks when a digital video ad has played through 25% of its duration at normal speed. |
|`advertising.impressions` | This event tracks the impressions of an advertisement to a customer with the potential of being viewed. |
|`advertising.midpoints` | This event tracks when a digital video ad has played through 50% of its duration at normal speed. |
|`advertising.starts` | This event tracks when a digital video ad has started playing. |
|`advertising.thirdQuartiles` | This event tracks when a digital video ad has played through 75% of its duration at normal speed. |
|`advertising.timePlayed` | This event tracks the amount of time spent by a user on a specific timed media asset. |
|`application.close` | This event tracks when an application was closed or sent into the background. |
|`application.launch` | This event tracks when an application was launched or brought into the foreground. |
|`commerce.backofficeCreditMemoIssued` | This event tracks when a notice of credit has been issued to a customer. |
|`commerce.backofficeOrderCancelled` | This event tracks when a previously initiated purchase process has been terminated before completion. |
|`commerce.backofficeOrderItemsShipped` | This event tracks when the purchased items have been physically shipped to the customer. |
|`commerce.backofficeOrderPlaced` | This event tracks the placement of an order. |
|`commerce.backofficeShipmentCompleted` | This event tracks the successful completion of the entire shipment process. |
|`commerce.checkouts` | This event tracks when a checkout event has occurred for a product list. There can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps, the timestamp and referenced page/experience for each event are used to identify each individual event (step), represented in order. |
|`commerce.productListAdds` | This event tracks when a product has been added to the product list or shopping cart. |
|`commerce.productListOpens` | This event tracks when a new product list (shopping cart) has been initialized or created. |
|`commerce.productListRemovals` | This event tracks when a product entry has been removed from a product list or shopping cart. |
|`commerce.productListReopens` | This event tracks when a product list (shopping cart) that was no longer accessible (abandoned) has been reactivated by a customer, such as via a re-marketing activity. |
|`commerce.productListViews` | This event tracks when a product list or shopping cart has received a view. |
|`commerce.productViews` | This event tracks when a product has received one or more views. |
|`commerce.purchases` | This event tracks when an order has been accepted. This is the only required action in a commerce conversion. A purchase event must have a product list referenced. |
|`commerce.saveForLaters` | This event tracks when a product list has been saved for future use, such a product wishlist. |
|`decisioning.propositionDisplay` | This event tracks when a decisioning proposition was displayed to a person. |
|`decisioning.propositionDismiss` | This event tracks when a decision has been made not to engage with the presented offer. |
|`decisioning.propositionInteract` | This event tracks when a person interacted with a decisioning proposition. |
|`decisioning.propositionSend` | This event tracks when it has been decided to send to a prospective customer a recommendation or offer for consideration. |
|`decisioning.propositionTrigger` | This event tracks the activation of a proposition process. A certain condition or action has occurred to prompt the presentation of an offer. |
|`delivery.feedback` | This event tracks feedback events for a delivery, such as an email delivery. |
|`directMarketing.emailBounced` | This event tracks when an email to a person bounced. |
|`directMarketing.emailBouncedSoft` | This event tracks when an email to a person soft-bounced. |
|`directMarketing.emailClicked` | This event tracks when a person clicked a link in a marketing email. |
|`directMarketing.emailDelivered` | This event tracks when an email was successfully delivered to a person's email service. |
|`directMarketing.emailOpened` | This event tracks when a person opened a marketing email. |
|`directMarketing.emailSent` | This event tracks when a marketing email has been sent to a person. |
|`directMarketing.emailUnsubscribed` | This event tracks when a person unsubscribed from a marketing email. |
|`inappmessageTracking.dismiss` | This event tracks when an in-app message was dismissed. |
|`inappmessageTracking.display` | This event tracks when an in-app message was displayed. |
|`inappmessageTracking.interact` | This event tracks when an in-app message was interacted with. |
|`leadOperation.callWebhook` | This event tracks when a webhook was called in response to a lead. |
|`leadOperation.changeCampaignStream` | This event signifies a shift in the marketing or engagement strategy for a particular business lead. |
|`leadOperation.changeEngagementCampaignCadence` | This event tracks when there has been a change in how often a lead is engaged with as part of a campaign. |
|`leadOperation.convertLead` | This event tracks when a lead was converted. |
|`leadOperation.interestingMoment` | This event tracks when an interesting moment was recorded for a person. |
|`leadOperation.mergeLeads` | This event tracks when information from multiple leads that refer to the same entity were consolidated. |
|`leadOperation.newLead` | This event tracks when a lead was created. |
|`leadOperation.scoreChanged` | This event tracks when the value of the lead's score attribute was changed. |
|`leadOperation.statusInCampaignProgressionChanged` | This event tracks when a lead's status in a campaign has changed. |
|`listOperation.addToList` | This event tracks when a person was added to a marketing list. |
|`listOperation.removeFromList` | This event tracks when a person was removed from a marketing list. |
|`media.adBreakComplete` | This event tracks when an `adBreakComplete` event has occurred. This event is triggered at the start of an ad break. |
|`media.adBreakStart` | This event tracks when an `adBreakStart` event has occurred. This event is triggered at the end of an ad break. |
|`media.adComplete` | This event tracks when an `adComplete` event has occurred. This event is triggered when an advert has been completed.|
|`media.adSkip` | This event tracks when an `adSkip` event has occurred. This event is triggered when an advert has been skipped. |
|`media.adStart` | This event tracks when an `adStart` event has occurred. This event is triggered when an advert has begun.|
|`media.bitrateChange` | This event tracks when a `bitrateChange` event has occurred. This event is triggered when there is a change in the bit rate. |
|`media.bufferStart` |This event tracks when a `bufferStart` event has occurred. This event is triggered when media has begun to buffer. |
|`media.chapterComplete` |This event tracks when a `chapterComplete` event has occurred. This event is triggered at the completion of a chapter in the media. |
|`media.chapterSkip` | This event tracks when a `chapterSkip` event has occurred. This event is triggered when a user skips forward or backward to another section or chapter within the media content. |
|`media.chapterStart` | This event tracks when a `chapterStart` event has occurred. This event is triggered at the start of a specific section or chapter within the media content. |
|`media.downloaded` | This event tracks when media downloaded content has occurred. |
|`media.error` | This event tracks when an `error` event has occurred. This event is triggered when an error or issue occurs during media playback. |
|`media.pauseStart` | This event tracks when a `pauseStart` event has occurred. This event is triggered when a user initiates a pause in the media playback. |
|`media.ping` |This event tracks when an `ping` event has occurred. This verifies the availability of a media resource. |
|`media.play` | This event tracks when a `play` event has occurred. This event is triggered when the media content is playing, indicating active consumption by the user. |
|`media.sessionComplete` |This event tracks when a `sessionComplete` event has occurred. This event marks the end of a media playback session. |
|`media.sessionEnd` | This event tracks when a `sessionEnd` event has occurred. This event indicates the conclusion of a media session. This conclusion could involve closing the media player or stopping playback. |
|`media.sessionStart` | This event tracks when a `sessionStart` event has occurred. This event marks the beginning of a media playback session. It is triggered when a user starts playing a media file. |
|`media.statesUpdate` | This event tracks when a `statesUpdate` event has occurred. The player state tracking capabilities can be attached to an audio or video stream. The standard states are: fullscreen, mute, closedCaptioning, pictureInPicture, and inFocus. |
|`opportunityEvent.addToOpportunity` | This event tracks when a person was added to an opportunity. |
|`opportunityEvent.opportunityUpdated` | This event tracks when an opportunity was updated. |
|`opportunityEvent.removeFromOpportunity` | This event tracks when a person was removed from an opportunity. |
|`pushTracking.applicationOpened` | This event tracks when a person opened an application from a push notification. |
|`pushTracking.customAction` | This event tracks when a person selected a custom action in a push notification. |
|`web.formFilledOut` | This event tracks when a person filled out a form on a web page. |
|`web.webinteraction.linkClicks` | This event tracks when a link has been selected one or more times. |
|`web.webpagedetails.pageViews` | This event tracks when a webpage has received one or more views. |
|`location.entry` | This event tracks the entry of a person or device at a specific location. |
|`location.exit` | This event tracks the exit of a person or device from a specific location. |

{style="table-layout:auto"}

### Suggested values for `producedBy` {#producedBy}

The following table outlines some accepted values for `producedBy`:

| Value | Definition |
| --- | --- |
| `self` | Self |
| `system` | System |
| `salesRef` | Sales Representative |
| `customerRep` | Customer Representative |
