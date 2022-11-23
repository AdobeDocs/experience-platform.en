---
title: Identity handling in the destinations activation workflow
description: Learn how identity export is handled in the activation workflow, depending on destination type
---
# Identity handling in the destinations activation workflow

This page describes the particularities of how identities are exported to different destination types, and which identities are available for export depending on destination.

>[!TIP]
>
> For extensive information about identities, identity namespaces, and definitions of identity-related terms, read the [identity service overview](/help/identity-service/home.md).

Each destination in the [catalog](/help/destinations/catalog/overview.md) is slightly different, so there is no one-size-fits-all setup across all destinations. However, there are a few patterns that guide the setup of  destinations and their identity requirements, as described in the sections below.

## File-based destinations {#file-based}

[File-based destinations](/help/destinations/destination-types.md#file-based) (for example Amazon S3, SFTP, most email marketing destinations such as Adobe Campaign, Oracle Eloqua, Salesforce Marketing Cloud): Identity setup in most of these destinations is open as long as a primary key is specified. 

Note that only a single identity from the [identity namespace](/help/identity-service/ui/identity-graph-viewer.md#access-identity-graph-viewer) can be selected in an export. When you select an identity for export, it is automatically selected as a [mandatory attribute](/help/destinations/ui/activate-batch-profile-destinations.md#mandatory-attributes) and [deduplication key](/help/destinations/ui/activate-batch-profile-destinations.md#deduplication-keys).

![An identity selected as mandatory attribute and deduplication key.](/help/destinations/assets/how-destinations-work/selected-identity.png)

As a workaround, you can add more identities to the export if these are have been ingested into Experience Platform as attributes. See below an example where the XDM attribute email address was selected for export, in addition to the identity namespace `Phone_E.164`.

![Example of email address attribute selected for export.](/help/destinations/assets/how-destinations-work/email-selected.png)

## API-based streaming destinations {#streaming-destinations}

[API-based streaming destinations](/help/destinations/destination-types.md#streaming-destination) built with [Destination SDK](/help/destinations/destination-sdk/overview.md) (for example Facebook, Google Customer Match, Pinterest, Braze, and others) only support specific IDs for export. For detailed information about the specific identities that can be exported to each destination, read the *supported identities* section in each destination documentation page (for example, see the [supported identities section](/help/destinations/catalog/advertising/pinterest.md) in the Pinterest destination page). 

Note, however, that you have the flexibility to use data from either private graphs or from attributes as identities. This means that you can map XDM attributes to the identity field required by the destination. See below an example for the Pinterest destination, where the XDM attribute email is mapped to the required Pinterest identity `pinterest_audience`.

![Example of email address attribute mapped to identity field for Pinterest destination.](/help/destinations/assets/how-destinations-work/email-mapped-to-identity.png)

### Advertising destinations relying on third-party cookie integrations {#third-party-cookie-destinations}

Advertising destinations relying on third party cookies (for example: Google Ads, Google Ad Manager, Google DV360, Bing, The Trade Desk) do not require customers to select IDs in the activation workflow. For these destinations, when setting up an activation workflow, Experience Platform automatically looks up the match table constructed by the [Experience Cloud ID service](https://experienceleague.adobe.com/docs/id-service/using/intro/overview.html?lang=en). 

These destinations require an ID sync to happen through either the Experience Cloud ID service or through Experience Platform Web SDK. 

If you are using Experience Platform Web SDK and the legacy Experience Cloud ID service is not implemented on the page, then you need to ensure that the datastream for the website in question is enabled to allow for Third Party ID syncing, as outlined in the [configure datastream documentation](/help/edge/datastreams/configure.md#create).

When configuring a datastream as described in the documentation linked above, you need to ensure that the **[!UICONTROL Third Party ID Sync]** slider is enabled. Most customers would leave the `container_id` field blank (it will default to 0). You only need to change this value if your legacy Audience Manager implementation used a specific container ID (note, however, that this would be the vast minority of customers).

>[!NOTE]
>
>Most of these advertising destinations are supported in Audience Manager (these destination types are known in Audience Manager as device-based destinations. See a [list of all supported device-based destinations in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/device-based/device-based-destinations-list.html?lang=en)). Only a few are listed in Experience Platform. For information about sharing data between Experience Platform and Audience Manager, read the section on [enabling data sharing from Experience Platform to Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#enable-aep-to-aam-data). Currently, there is no plan to support more third-party cookie destinations. 

## Enterprise destinations {#enterprise-destinations}

[Advanced enterprise destinations](/help/destinations/destination-types.md#streaming-profile-export) (Amazon Kinesis, Azure Event Hubs, HTTP API) do not require specific IDs, as these are designed for enterprise integration use cases.

## Personalization destinations {#personalization-destinations}

[Personalization (or edge) destinations](/help/destinations/destination-types.md#edge-personalization-destinations) (for example: Adobe Target, Custom Personalization) do not require identity selection as the integration is a profile lookup. The client (Target, Web SDK, etc) queries the [Edge](/help/collection/home.md#edge) and pulls the profile information that it needs for on-site personalization.

<!--
![Table with all supported identities](/help/destinations/assets/how-destinations-work/identities-table.png)

-->