---
title: Marketo Engage Destination
description: Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.
exl-id: 5ae5f114-47ba-4ff6-8e42-f8f43eb079f7
---
# Marketo Engage destination {#beta-marketo-engage-destination}

>[!IMPORTANT]
>
>With the release of the [enhanced Marketo V2 destination connector](/help/release-notes/2022/july-2022.md#destinations), you are now seeing two Marketo cards in the destinations catalog.
>* If you are already activating data to the Marketo V1 destination: Please create new dataflows to the Marketo V2 destination and delete existing dataflows to the Marketo V1 destination by February 2023. As of that date, the Marketo V1 destination card will be removed.
>* If you have not yet created any dataflows to the Marketo V1 destination, please use the new Marketo V2 card to connect to and export data to Marketo.

![Image of the two Marketo destination cards in a side-by-side view.](/help/destinations/assets/catalog/adobe/marketo-side-by-side-view.png)
Also, further below we need to talk about:  Fields returned in the Describe API call what we display in AEP https://developers.marketo.com/rest-api/lead-database/leads/#describe

## Overview {#overview}

Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.

The destination enables marketers to push segments created in Adobe Experience Platform to Marketo where they will appear as static lists.

## Supported identities and attributes {#supported-identities-attributes}

>[!NOTE]
>
>In the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) of the activate destination workflow, it is *mandatory* to map identities and *optional* to map attributes. Mapping Email and/or ECID from the Identity Namespace tab is the most important thing to do to ensure the person is matched in Marketo. Mapping Email ensures the highest match rate.

### Supported identities {#supported-identities}

|Target Identity|Description|
|---|---|
|ECID|A namespace that represents ECID. This namespace can also be referred to by the following aliases: “Adobe Marketing Cloud ID”, “Adobe Experience Cloud ID”, “Adobe Experience Platform ID”. See the following document on [ECID](/help/identity-service/ecid.md) for more information.|
|Email|A namespace that represents an email address. This type of namespace is often associated to a single person and therefore can be used to identify that person across different channels.|

{style="table-layout:auto"}

### Supported attributes {#supported-attributes}

You can map attributes from Experience Platform to any of the attributes that your organization has access to in Marketo. In Marketo, you can use the [Describe API request](https://developers.marketo.com/rest-api/lead-database/leads/#describe) to retrieve the attribute fields that your organization has access to.

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (email, ECID) used in the Marketo Engage destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Set up destination and activate segments {#set-up}

>[!IMPORTANT]
> 
>* To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions).
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

For detailed instructions on how to set up the destination and activate segments, read [Push an Adobe Experience Platform Segment to a Marketo Static List](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/static-lists/push-an-adobe-experience-cloud-segment-to-a-marketo-static-list.html?lang=en) in the Marketo documentation.

The video below also demonstrates the steps to configure a Marketo destination and activate segments.

>[!NOTE]
>
>The Experience Platform user interface is frequently updated and may have changed since the recording of this video. For the most up-to-date information, please refer to the guide linked above.

>[!VIDEO](https://video.tv.adobe.com/v/338248?quality=12)

<!--

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

-->

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [data governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

<!--

## Activate segments to this destination {#activate}

See [Activate audience data to streaming segment export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

-->
