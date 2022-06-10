---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Self-service documentation template for the UI
description: Learn how to create a Mixpanel source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a *Mixpanel* source connection in the UI

This tutorial provides steps for creating a *Mixpanel* source connector using the Platform user interface.

## Overview

[Mixpanel](https://www.mixpanel.com) is a product analytics tool that enables capturing data on how users interact with a digital product. Mixpanel allows you to analyze this product data with simple, interactive reports that let you query and visualize the data with just a few clicks.

This Adobe Experience Platform [source](https://experienceleague.adobe.com/docs/experience-platform/sources/home.html?lang=en) leverages the [Mixpanel Event Export API > Download](https://developer.mixpanel.com/reference/raw-event-export) to download your event data as it is received and stored within Mixpanel, along with all event properties (including distinct_id) and the exact timestamp the event was fired into Experience Platform.

Mixpanel uses bearer tokens as an authentication mechanism to communicate with the Mixpanel Event Export API.

## Prerequisites

The first step in creating a Mixpanel source connection is to ensure that you have a Mixpanel account. If you do not have one already, see the [Mixpanel register](https://mixpanel.com/register/) page to register and create your account.

### Gather required credentials

In order to connect *Mixpanel* to Platform, you must provide values for the following connection properties:

| Credential | Description | Example |
| --- | --- | --- |
| Host | Mixpanel Raw Data Export API endpoint. <br/><br/>Refer to the [Mixpanel API reference](https://developer.mixpanel.com/reference/overview) page, then scroll to the *Raw Data Export API* section if you require any guidance. | *https://data.mixpanel.com*|
| Username | Service account Username. <br/><br/>Refer to the [Service Accounts](https://developer.mixpanel.com/reference/service-accounts#authenticating-with-a-service-account) page if you require any guidance. | *Test8.6d4ee7.mp-service-account* |
| Password | Service account Password. | *dLlidiKHpCZtJhQDyN2RECKudMeTItX1* |
| projectId | Mixpanel Project Id. <br/><br/>Refer to the pages below if you require any guidance. <br/>[Project Settings](https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings) <br/>[Create and Manage Projects](https://help.mixpanel.com/hc/en-us/articles/115004505106-Create-and-Manage-Projects) | *2384945* |
| timezone | Select the timezone to correspond to your project within the Mixpanel account. <br/><br/>Refer to the [Project Settings](https://help.mixpanel.com/hc/en-us/articles/115004490503-Project-Settings) page if you require any guidance.| *Pacific Standard Time* |

You can retrieve your Mixpanel Project ID and configure your Timezone by navigating to the Project Details page of your account in the Mixpanel UI.

![Mixpanel Project Details](../../../../images/tutorials/create/mixpanel-export-events/mixpanel-project-settings.png?lang=en)

To retrieve your Mixpanel service account credentials, navigate to the Service Accounts in the Mixpanel UI.

![Mixpanel Service Account](../../../../images/tutorials/create/mixpanel-export-events/mixpanel-service-account.png?lang=en)

>[!TIP]
>
>* It is suggested to use a service account that doesn't [expire](https://developer.mixpanel.com/reference/service-accounts#service-account-expiration).

Finally, create a Platform [schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html) required for the Mixpanel Event Export API. Refer also to the [limits](#limits) section further below on this page.
![Create Schema](../../../../images/tutorials/create/mixpanel-export-events/schema.png?lang=en)

## Connect your *Mixpanel* account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the *Analytics* category, select *Mixpanel*, and then select **[!UICONTROL Add data]**.

![catalog](../../../../images/tutorials/create/mixpanel-export-events/catalog.png?lang=en)

The **[!UICONTROL Connect Mixpanel account]** page appears. On this page, you can either use new credentials or existing credentials.

### Existing account

To use an existing account, select the *Mixpanel* account you want to create a new dataflow with, then select **[!UICONTROL Next]** to proceed.

![existing](../../../../images/tutorials/create/mixpanel-export-events/existing.png?lang=en)

### New account

If you are creating a new account, select **[!UICONTROL New account]**, and then provide a name, an optional description, and your credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![new](../../../../images/tutorials/create/mixpanel-export-events/new.png?lang=en)

Next, add the projectId and select the timezone.

![configuration](../../../../images/tutorials/create/mixpanel-export-events/authentication-configuration.png?lang=en)

## Next steps

By following this tutorial, you have established a connection to your *Mixpanel* account. You can now continue on to the next tutorial and [configure a dataflow to bring data into Platform](https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/dataflow/crm.html).

## Additional resources

### Validation {#validation}

To validate that you have correctly set up the source; and Mixpanel events are being ingested, follow the steps below:

1. In the Platform UI, select **[!UICONTROL Datasets]** from the left navigation bar to access the [!UICONTROL Datasets] workspace. The [!UICONTROL Dataset Activity] screen displays the details of executions.
![Activity page](../../../../images/tutorials/create/mixpanel-export-events/dataset-activity.png?lang=en)

1. Next, select the dataflow run ID of the dataflow that you want to view, to see specific details about that dataflow run.
![Dataflow page](../../../../images/tutorials/create/mixpanel-export-events/dataflow-monitoring.png?lang=en)

1. Finally, select the **[!UICONTROL Preview dataset]** button to display the data that was ingested.
![Mixpanel dataset](../../../../images/tutorials/create/mixpanel-export-events/preview-dataset.png?lang=en)

1. You can verify this data against the data on the Mixpanel > Events page. Also refer to [Mixpanel documentation](https://help.mixpanel.com/hc/en-us/articles/4402837164948-Events-formerly-Live-View-).
![](../../../../images/tutorials/create/mixpanel-export-events/mixpanel-events.png?lang=en)

### Mixpanel schema

* The table below lists the supported mappings that must be set up for Mixpanel. 
* Click [Event Export API > Download](https://developer.mixpanel.com/reference/raw-event-export) for the link to the API.

   | Source | Type |
   |---|---|
   |`distinct_id`|string|
   |`event_name`|string|
   |`import`|boolean|
   |`insert_id`|string|
   |`item_id`|string|
   |`item_name`|string|
   |`item_price`|string|
   |`mp_api_endpoint`|string|
   |`mp_api_timestamp_ms`|integer|
   |`mp_processing_time_ms`|integer|
   |`time`|integer|

### Limits {#limits}
* A maximum of 100 concurrent queries, and 60 queries per hour as indicated on [Export API Rate Limits](https://help.mixpanel.com/hc/en-us/articles/115004602563-Rate-Limits-for-API-Endpoints).