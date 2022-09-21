---
keywords: Experience Platform;home;popular topics;Adobe Campaign Managed Services;campaign;campaign managed services
title: Adobe Campaign Managed Services
description: Learn how to connect Campaign Managed Services to Platform using the user interface
---
# Adobe Campaign Managed Services

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Adobe Campaign Managed Cloud Services provides a Managed Services platform for designing cross-channel customer experiences and provides an environment for visual campaign orchestration, real time interaction management and cross channel execution. Visit the [Adobe Campaign v8 documentation](https://experienceleague.adobe.com/docs/campaign/campaign-v8/campaign-home.html?lang=en) for more information.

The Adobe Campaign Managed Services source allows you to bring Adobe Campaign v8 delivery logs and tracking logs data to Adobe Experience Platform.

## Prerequisites 

Before you can create a source connection to bring your Adobe Campaign Managed Services data to Experience Platform, you must first complete the following prerequisites:

* Set up your event log import using the Adobe Campaign client console
* Create an XDM ExperienceEvent schema
* Create a dataset

### View your tracking log data

>[!IMPORTANT]
>
>You must have access to the Adobe Campaign v8 Client Console in order to view your log data in Campaign. Visit the [Campaign v8 documentation](https://experienceleague.adobe.com/docs/campaign/campaign-v8/deploy/connect.html?lang=en) for information on how to download and install the client console.

Log in to your Campaign v8 instance through the Client Console. Under the [!DNL Explorer] tab, select [!DNL Administration] and then select [!DNL Configuration]. Next, select [!DNL Data schemas] and then apply the `broadLog` filter for name or label. In the list that appears, select the Recipient delivery logs source schema with the name `broadLogRcp`.

![step one explorer]

Select the **Data** tab.

![data tab]

Next, right-click in the data pane to open the contextual menu. From here, select **Configure list...**

![configure]

The list configuration window appears, providing you with an interface where you can add any desired fields to the pre-existing list to view the data in the data pane.

![list configuration]



## Create an Adobe Campaign Managed Services source connection using the Platform UI

For detailed instructions on how to bring your Campaign v8 delivery logs and tracking logs data to Experience Platfrom, read the guide on [creating a Campaigned Managed Services source connection in the UI](../../tutorials/ui/create/adobe-applications/campaign.md).