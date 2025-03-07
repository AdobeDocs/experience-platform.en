---
title: Connect Demandbase Intent To Experience Platform Using The UI
description: Learn how to connect Demandbase Intent to Experience Platform
hide: true
hidefromtoc: true
exl-id: 7dc87067-cdf6-4dde-b077-19666dcb12e2
---
# Connect [!DNL Demandbase Intent] to Experience Platform using the UI

Read this guide to learn how to connect your [!DNL Demandbase Intent] account to Adobe Experience Platform using the user interface.

## Get started

This tutorial requires a working understanding of the following components of Experience Platform:

* [Real-Time CDP B2B Edition](../../../../../rtcdp/b2b-overview.md): Real-Time CDP B2B Edition is purpose-built for marketers operating in a business-to-business service model. It brings together data from multiple sources and combines it into a single view of people and account profiles. This unified data allows marketers to precisely target specific audiences and engage those audiences across all available channels. 
* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Navigate the sources catalog {#navigate}

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace. You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Select **[!DNL Demandbase Intent]** under the *[!UICONTROL B2B]* category, and then select **[!UICONTROL Set up]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account exists, this option changes to **[!UICONTROL Add data]**.

![The sources catalog with the "Demandbase Intent" card selected.]

## Use an existing account {#existing}

## Create a new account {#create}

## Provide dataflow details {#provide-dataflow-details}

>[!CONTEXTUALHELP]
>id="platform_sources_demandbase_domain"
>title="Domain source"
>abstract="While Adobe uses the XDM accountOrganization.website, there may be customers who use custom fields for their respective websites. Therefore, you must ensure that your domain source is the domain/website field that will match your Demandbase account records against Experience Platform accounts."

## Schedule dataflow {#schedule-dataflow}

>[!CONTEXTUALHELP]
>id="platform_sources_demandbase_schedule"
>title="Schedule your dataflow"
>abstract="Demandbase drops data once a week on Monday morning at 5:00 PM UTC. Therefore, you must configure your ingestion start time after 5:00PM UTC. Additionally, you must confirm the ingestion time with Demandbase as they may alter their schedule, when dropping files to Adobe."

## Review dataflow {#review-dataflow}
