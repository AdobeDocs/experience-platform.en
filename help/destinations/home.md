---
title: Destinations overview
description: Destinations are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use Destinations in the Adobe Experience Platform to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
exl-id: afd07ddc-652e-4e22-b298-feba27332462
---
# [!DNL Destinations] overview {#overview}

![Destinations overview banner.](./assets/overview/destinations-overview-banner.png)

**[!DNL Destinations]** are pre-built integrations with destination platforms that allow for the seamless activation of data from Adobe Experience Platform. You can use destinations to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

<div id="recs-overview-body-1"></div>
<div id="recs-overview-body-2"></div>
<div id="recs-overview-body-3"></div>
<div id="recs-overview-body-4"></div>
<div id="recs-overview-body-5"></div>
<div id="recs-overview-body-6"></div>

## Destinations and sources {#destinations-and-sources}

One of the core functionalities of Experience Platform is ingesting your first-party data and activating it for your business needs. Use [sources](../sources/home.md) to ingest data into Experience Platform and destinations to export data from Experience Platform. 

## Destinations steps {#steps}

* Choose from a [self-service catalog](./catalog/overview.md) of all the destinations available in Experience Platform.
* Use destinations to send audiences or datasets to marketing automation platforms, digital advertising platforms, and more.
* Schedule data exports to your preferred destinations at regular times.

## Controls {#controls}

The controls in the [destinations workspace](./ui/destinations-workspace.md) allow you to:

* Browse the catalog of destination platforms where you can activate your data;
* Create, edit, activate, and disable data flows to the destinations in the catalog;
* Create an account in a storage location or link Experience Platform to the account in the destination platform;
* Select which audiences or datasets should be activated to destinations;
* Select which [Experience Data Model (XDM) fields](../xdm/home.md) to export when activating audiences to certain destinations like email marketing destinations, CRM platforms, cloud storage locations, and more.
* Activate different types of profiles and audiences to destinations - people, accounts, and prospects. 

## Destination types and categories {#types-and-categories}

With Experience Platform, you can activate data to various types of destinations, to satisfy your activation use cases. Destinations range from API-based integrations, to integrations with file reception systems, profile lookup destinations, and more. For detailed information about all available destinations, read the [destination types and categories overview](./destination-types.md).

## Adobe-built and partner-built destinations {#adobe-and-partner-built-destinations}

Some of the connectors in the Experience Platform destinations catalog are built and maintained by Adobe, while others are built and maintained by partner companies using [Destination SDK](/help/destinations/destination-sdk/overview.md). A note at the top of the documentation page for each partner-built connector calls out if a destination is created and maintained by the partner. For example, the [Amazon S3 connector](/help/destinations/catalog/cloud-storage/amazon-s3.md) is created by Adobe, while the [TikTok connector](/help/destinations/catalog/social/tiktok.md) is created and maintained by the TikTok team. 

For partner-authored and maintained connectors, this means that issues with the connector might need to be resolved by the partner team (contact method provided in the note in the documentation page). For issues with Adobe-authored and maintained connectors, contact your Adobe representative or Customer Care.

## Destinations and access controls {#access-controls}

The destinations functionality in Experience Platform works with Adobe Experience Platform access control permissions. Depending on your user's permission level, you can view, manage, and activate destinations. For information about the individual permissions, go to [access control in Adobe Experience Platform](../access-control/home.md) and scroll down to the table at the bottom of the page.

The following table outlines the permissions and permission combinations required to perform certain actions on destinations.

| Permission level | Description |
| ---- | ---- |
| **[!UICONTROL View Destinations]** | To access the destinations tab in the Experience Platform UI, you need the **[!UICONTROL View Destinations]** [access control permission](/help/access-control/home.md#permissions). |
| **[!UICONTROL View Destinations]**, **[!UICONTROL Manage Destinations]** | To connect to destinations, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). |
| **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** | To activate audiences to destinations and enable the [mapping step](ui/activate-batch-profile-destinations.md#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). |
| **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Segments without Mapping]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** | To add or remove audiences from existing dataflows without having access to the [mapping step](ui/activate-batch-profile-destinations.md#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Segments without Mapping]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). |
| **[!UICONTROL View Destinations]**, **[!UICONTROL Manage and Activate Dataset Destinations]** | To export datasets to destinations, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage and Activate Dataset Destinations]** [access control permissions](/help/access-control/home.md#permissions). |
| **[!UICONTROL View Identity Graph]** | To export *identities* to destinations, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"} |

{style="table-layout:auto"}

The diagram below visually displays which permissions you need depending on the operations that you want to perform on destinations.

![Diagram showing the required permissions to perform certain actions on destinations.](/help/destinations/assets/overview/permissions-diagram.png)

For more information about access controls, see the [Access control user guide](../access-control/ui/overview.md).

### Attribute-based access control for destinations {#attribute-based-access}

Attribute-based access control in Adobe Experience Platform allows administrators to control access to specific objects and/or capabilities based on attributes. 

With attribute-based access control, you can apply mapping configurations to fields that you have permissions to. Furthermore, you cannot export data to a destination if you do not have access to all fields in the dataset.

For more information on how destinations work with attribute-based access controls, read the [attribute-based access control overview](../access-control/abac/overview.md#destinations).

## Profile removal from destinations {#profile-removal}

When a profile is removed from an audience that is activated to a destination, that profile is also removed from the corresponding audience in the destination platform. For example, if a profile is removed from an audience that was previously activated to LinkedIn, that profile will be removed from the associated [!UICONTROL LinkedIn Matched Audience].

Profile removal from destinations — also referred to as unsegmentation — occurs on the same cadence as segmentation. As soon as a profile is removed from an audience in Experience Platform, the next scheduled dataflow to the destination reflects that change and removes the profile from the destination audience.

The actual speed at which profile removal takes effect in the destination platform may vary based on the destination's ingestion and processing behavior.

## Destinations monitoring {#destinations-monitoring}

After establishing a connection to a destination and completing the activation workflow, you can monitor the data exports to your reception system. Read the [guide on monitoring dataflows to destinations in the UI](/help/dataflows/ui/monitor-destinations.md) for more information.

![Destinations monitoring page example.](./assets/overview/monitoring-page-example.png)

You can also validate if data is coming through successfully to your destination. Most destination documentation pages in the catalog have a *Validate data export section*, which indicates how you can check in the destination platform that data is being successfully brought in from Experience Platform. View an example of this section for the [Amazon Ads destination](/help/destinations/catalog/advertising/amazon-ads.md#exported-data).

## Data governance restrictions on activating data to destinations {#data-governance}

Data governance is enforced for Experience Platform destinations through:

* *Marketing actions* that you can select in the create destinations workflow;
* *Data usage policies* that restrict data containing certain usage labels from being activated to destinations with certain marketing actions.
  
See the Data Governance in Experience Platform documentation for more information about [marketing actions](../data-governance/policies/overview.md) and [resolving data policy violations](../data-governance/enforcement/auto-enforcement.md).

For more information about selecting marketing actions in the create destination workflow, see the following pages for the different destination types in Experience Platform:

* [Advertising destinations - Google Ad Manager ](./catalog/advertising/google-ad-manager.md)
* [Advertising destinations - Google Ads](./catalog/advertising/google-ads-destination.md)
* [Advertising destinations - Google Display & Video 360 ](./catalog/advertising/google-dv360.md)
* [Cloud storage destinations](./catalog/cloud-storage/overview.md)
* [Email marketing destinations](./catalog/email-marketing/overview.md)
* [Social destinations](./catalog/social/overview.md)

For more information about data policy violations in the audience activation workflow, see the **[!UICONTROL Review]** step in the following guides:

* [Activate audience data to streaming audiences export destinations](./ui/activate-segment-streaming-destinations.md#review)
* [Activate audience data to streaming profile export destinations](./ui/activate-streaming-profile-destinations.md#review)
* [Activate audience data to batch profile export destinations](./ui/activate-batch-profile-destinations.md#review)

## Terms and conditions {#terms-and-conditions}

By using any of the Destinations labeled as beta ("Beta"), You hereby acknowledge that the Beta is provided ***"as is" without warranty of any kind***.

Adobe shall have no obligation to maintain, correct, update, change, modify, or otherwise support the Beta. You are advised to use Informative and not to rely in any way on the correct functioning or performance of such Beta and/or accompanying materials. The Beta is considered Confidential Information of Adobe.

Any "Feedback" (information regarding the Beta including but not limited to problems or defects you encounter while using the Beta, suggestions, improvements, and recommendations) provided by You to Adobe is hereby assigned to Adobe including all rights, title, and interest in and to such Feedback.

Submit Open Feedback or create a Support Ticket to share your suggestions or report a bug, seek a feature enhancement.