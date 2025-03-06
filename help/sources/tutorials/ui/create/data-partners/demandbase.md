---
title: Connect Demandbase Intent To Experience Platform Using The UI
description: Learn how to connect Demandbase Intent to Experience Platform
hide: true
hidefromtoc: true
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
>abstract=""

The domain the user needs to add is the domain field needed to match the Demandbase/Bombora account records to the AEP accounts. We use the XDM accountOrganization.website. However, some customers have other custom fields that they use for website. They may have called it MyFooWebsite (whatever field is used to stored the website). We need to instruct the user which "website" field to use.

Your domain source is the domain/website field that is needed to match your Demandbase account records to Experience Platform accounts. 

While Adobe uses the XDM accountOrganization.website, there may be customers who use custom fields for their respective websites. Therefore, you must ensure that your domain source is the domain/website field that will match your Demandbase account records against Experience Platform accounts.

## Schedule dataflow {#schedule-dataflow}

>[!CONTEXTUALHELP]
>id="platform_sources_demandbase_schedule"
>title=""
>abstract=""

"hey, this is the time that the system to should schedule the start time. Demandbase and Bombora drops the data once a week on Monday morning, 5:00PM UTC" so the start time needs to be after 5:00PM UTC. Customer should also confirm the drop time with Demandbase or Bombora since the vendors might change the time when they drop the files to Adobe.

Demandbase ingests data once a week on Monday morning at 5:00 PM UTC. Therefore, you must configure your starttime after 5:00PM UTC. Additionally, you must confirm the ingestion time with Demandbase as they may alter the schedule, when ingesting files to Experience Platform.

## Review dataflow {#review-dataflow}