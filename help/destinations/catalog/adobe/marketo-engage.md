---
title: Marketo Engage Destination
description: Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.
exl-id: 5ae5f114-47ba-4ff6-8e42-f8f43eb079f7
---
# (Beta) Marketo Engage destination {#beta-marketo-engage-destination}

>[!IMPORTANT]
>
>The Marketo Engage Destination in Adobe Experience Platform is currently in Beta. The documentation and functionality are subject to change.

## Overview {#overview}

Marketo Engage is the only end-to-end customer experience management (CXM) solution for marketing, advertising, analytics, and commerce. It lets you automate and manage activities from CRM lead management and customer engagement to account-based marketing and revenue attribution.

The segment connector enables marketers to push segments created in Adobe Experience Platform to Marketo where they will appear as static lists.

## Supported identities {#supported-identities}

|Target Identity|Description|
|---|---|
|ECID|A namespace that represents ECID. This namespace can also be referred to by the following aliases: “Adobe Marketing Cloud ID”, “Adobe Experience Cloud ID”, “Adobe Experience Platform ID”. See the following document on [ECID](/help/identity-service/ecid.md) for more information.|
|Email|A namespace that represents an email address. This type of namespace is often associated to a single person and therefore can be used to identify that person across different channels.|

## Export type {#export-type}

Segment Export - you are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the Marketo Engage destination.

## Set Up {#set-up}

Instructions on how to set up the destination [can be found here](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/static-lists/push-an-adobe-experience-cloud-segment-to-a-marketo-static-list.html?lang=en).

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

## Data Usage and Governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [data governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).

## Activate segments to this destination {#activate}

See [Activate audience data to streaming segment export destinations](../../ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.
