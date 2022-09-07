---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Create a LinkedIn Ads source connection in the UI
description: Learn how to create a LinkedIn Ads source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Beta Create a [!DNL LinkedIn Ads] source connection in the UI

>[!NOTE]
>
>The [!DNL LinkedIn Ads] source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

This tutorial provides steps for creating a [!DNL LinkedIn Ads] source connector using the Platform user interface.

## Overview

[[!DNL LinkedIn Ads]](https://business.linkedin.com/marketing-solutions/ads) is a marketing solution by LinkedIn that can reach over 830 million professionals on the world's largest professional network. The LinkedIn Reporting & ROI APIs provide key insights on performance such as clicks, impressions, and ad spend, as well as demographic information like metrics by demographic values at the account, campaign, and creative levels.

This Adobe Experience Platform [source](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [LinkedIn Reporting & ROI APIs](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) to retrieve your LinkedIn campaign data, along with all performance and metrics. You can then bring that data to Experience Platform, where you can execute analytics. The data is returned from a specified date within the six month default retention period for daily data. Refer to [guardrails](#guardrails) for details.

[!DNL LinkedIn Ads] uses bearer tokens as an authentication mechanism to communicate with the LinkedIn Reporting & ROI APIs.

## Prerequisites

The first step in creating a [!DNL LinkedIn Ads] source connection is to ensure that you have a LinkedIn developer account. If you do not have one already, see the [Login](https://www.linkedin.com/signup/cold-join?session_redirect=%2Fdevelopers%2FloginRedirect.html) page to register and create your account.

You should also have a LinkedIn Developer application as you will require its access token. If you have not created one, click [create a new application](https://www.linkedin.com/developer/apps/new) and create one. This step is part of the LinkedIn [Authorization Code Flow (3-legged OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow) process.

### Gather required credentials

In order to connect [!DNL LinkedIn Ads] to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| *`Host`* | LinkedIn API endpoint. | `https://api.linkedin.com` |
| *`Access Token`* | Assuming you have a LinkedIn Developer Application follow this LinkedIn tutorial [Authorization Code Flow (3-legged OAuth)](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow) to generate the access token. | `AQV4FClIuE2BbDkQeDatkhMFs................qNAmFmlcr9A` |
| *`Account IDs`* | You can find guidance to obtain the Account ID [here](https://www.linkedin.com/help/lms/answer/a424270). | `508670032` |
| *`Campaign Group IDs`* | Campaign Group IDs can be obtained by navigating to the Campaign Groups page and selecting the desired CIDs. | `611138362` |
| *`Campaign IDs`* | You can find guidance to obtain the Campaign ID [here](https://www.linkedin.com/help/lms/answer/a424270). | `1991010101,1992020202` |

### Guardrails {#guardrails}

See the Retention, Restrictions, Delays and Accuracy sections on the [LinkedIn Reporting & ROI APIs](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) page. 

>[!Note]
>
>[!DNL LinkedIn Ads] only allows data retrieval from active campaigns. The data is returned from a specified date within the six month default retention period for daily data.

### Create Platform Schema

Create a Platform [schema](/help/xdm/schema/composition.md) required for Linked In Ads.
![Platform UI screenshot showing an example Schema](../../../../images/tutorials/create/linkedin-ads/schema.png?lang=en)

## Connect your LinkedIn Ads account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Advertising* category, select *[!DNL LinkedIn Ads]*, and then select **[!UICONTROL Add data]**.

![Platform UI screenshot for catalog with LinkedIn Ads card](../../../../images/tutorials/create/linkedin-ads/catalog.png?lang=en)

The **[!UICONTROL Connect LinkedIn Ads account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the [!DNL LinkedIn Ads] account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![Platform UI screenshot for Connect LinkedIn Ads account with an existing account](../../../../images/tutorials/create/linkedin-ads/existing.png?lang=en)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![Platform UI screenshot for Connect LinkedIn Ads account with a new account](../../../../images/tutorials/create/linkedin-ads/new.png?lang=en)

Next, Depending on how you want the data to be grouped you must select a *pivot* value as one of the below:
   * ACCOUNT
   * CAMPAIGN GROUP
   * CAMPAIGN
   * CREATIVE
Grouping by an element is known as a pivot. Choosing one of these options enables you to restrict export to the specified Account IDs, Campaign Group IDs or Campaign IDs. Refer to [LinkedIn Reporting & ROI API Query Parameters](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) for further details on pivoting.

Finally, you must provide as a mandatory input one or more of the field values below:
| Field | Description |
| --- | --- |
| `accountIds` | Your LinkedIn account IDs. |
| `campaignGroupIds` | Your LinkedIn Campaign Group IDs. |
| `campaignIds` | Your LinkedIn Campaign IDs. |

>[!NOTE]
>
>Multiple IDs can be specified by passing comma separated values.

If you fail to provide a value on selecting **[!UICONTROL Select]** you will get a `Failed to parse JSON.` or `Unknown error while processing request.` error message.

![Platform UI screenshot for LinkedIn Ads showing configuration](../../../../images/tutorials/create/linkedin-ads/configuration.png?lang=en)

## Next steps

By following this tutorial, you have established a connection to your [!DNL LinkedIn Ads] account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](/help/sources/ui-tutorials/dataflow/crm.md).

>[!NOTE]
>
>On the **[!UICONTROL Scheduling]** step you need to set one of the below to ensure that daily data will be retrieved.
>| Frequency | Interval |
>| --- | --- |
>| `Day` | 1 |
>| `Hour` | 24 |

![Platform UI screenshot for LinkedIn Ads showing scheduling](../../../../images/tutorials/create/linkedin-ads/scheduling.png?lang=en)

## Additional resources

### Validation {#validation}

To validate that you have correctly set up the source and [!DNL LinkedIn Ads] events are being ingested, follow the steps below:

1. In the Platform UI, select View Dataflows besides the [!DNL LinkedIn Ads] card menu on the Catalog page. You can then select [!UIControl Preview dataset] to verify the data that was ingested.
![Platform UI screenshot for LinkedIn Ads Preview Dataset](../../../../images/tutorials/create/linkedin-ads/preview-dataset.png?lang=en)

1. You can verify the aggregated data against the counts visible on the [!DNL LinkedIn Ads] Creative, Campaign, Campaign Group or Account pages. 
![](../../../../images/tutorials/create/linkedin-ads/linkedin-campaign-group.png?lang=en)

### LinkedIn Ads schema

* The table below lists the supported mappings that must be set up for [!DNL LinkedIn Ads]. 
* Refer to [LinkedIn Reporting & ROI APIs](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) for the API.

   | Source | Type |
   |---|---|
   |`approximateUniqueImpressions`|Long|
   |`clicks`|Long|
   |`comments`|Long|
   |`externalWebsiteConversions`|Long|
   |`follows`|Long|
   |`impressions`|Long|
   |`landingPageClicks`|Long|
   |`likes`|Long|
   |`pivotValue`|Long|
   |`shares`|Long|
   |`totalEngagements`|Long|
   |`dateRange.end.day`|Long|
   |`dateRange.end.month`|Long|
   |`dateRange.end.year`|Long|
   |`dateRange.start.day`|Long|
   |`dateRange.start.month`|Long|
   |`dateRange.start.year`|Long|

### Useful Links
* [Refresh Tokens with OAuth 2.0](https://docs.microsoft.com/en-us/linkedin/shared/authentication/programmatic-refresh-tokens)
* [Build an Ad Campaign](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/getting-started)
