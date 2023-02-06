---
title: Identity handling in the destinations activation workflow
description: Learn how identity export is handled in the activation workflow, depending on destination type
---
# Identity handling in the destinations activation workflow

This page describes the particularities of how identities are exported to different destination types and teaches you how to find which identities are available for export depending on destination.

>[!TIP]
>
> For extensive information about identities, identity namespaces, and definitions of identity-related terms, read the [identity service overview](/help/identity-service/home.md).

Each destination in the [catalog](/help/destinations/catalog/overview.md) is slightly different, so there is no one-size-fits-all setup across all destinations. However, there are a few patterns that guide the setup of  destinations and their identity requirements, as described in the sections below.

## File-based destinations {#file-based}

For [file-based destinations](/help/destinations/destination-types.md#file-based) (for example [!DNL Amazon S3], SFTP, most email marketing destinations such as [!DNL Adobe Campaign], [!DNL Oracle Eloqua], [!DNL Salesforce Marketing Cloud]), the identity setup in most of these destinations is open, meaning that you are not required to select any identity in the [Select attributes](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes) step of the batch activation workflow.

If you choose to add identities to your file exports, note that only a single identity from the [identity namespace](/help/identity-service/ui/identity-graph-viewer.md#access-identity-graph-viewer) can be selected in an export. When you select an identity for export, it is automatically selected as a [mandatory attribute](/help/destinations/ui/activate-batch-profile-destinations.md#mandatory-attributes) and [deduplication key](/help/destinations/ui/activate-batch-profile-destinations.md#deduplication-keys).

![An identity selected as mandatory attribute and deduplication key.](/help/destinations/assets/how-destinations-work/selected-identity.png)

As a workaround, you can add more identities to the export if these have been ingested into Experience Platform as attributes. See below an example where the XDM attribute email address was selected for export, in addition to the identity namespace `Phone_E.164`.

![Example of email address attribute selected for export.](/help/destinations/assets/how-destinations-work/email-selected.png)

## Exporting an identity from an identity map versus exporting an identity as an XDM attribute - the differences {#identity-map-or-attribute}

The number of exported records can differ, based on whether you select for export identities from the identity map or identities which have been ingested as attributes into Experience Platform. [Merge policies](/help/profile/merge-policies/overview.md) also play an important role in the number of records that get exported when you select identities from the identity map.

For example, consider that from two different datasets, you have the following profile fragments which will be merged into a single customer profile:

**Profile fragment one**

|Identity map | First Name| Last Name| Email attribute|
|---------|----------|---------|--------|
| email1, Loyalty ID1 | John | Doe | email 1|


**Profile fragment two**

|Identity map | First Name| Last Name| Email attribute|
|---------|----------|---------|--------|
| email2, Loyalty ID1 | John | Doe | email 2|

The merged profile would look like below:

|Identity map | First Name| Last Name| Email attribute|
|---------|----------|---------|--------|
| email 1, email2, Loyalty ID1 | John | Doe | email 2|

The export behavior differs based on whether you select `IdentityMap: Email` or `xdm: personalEmail.address` for export. 

If a customer activates `IdentityMap: Email`, there will be two records in the exported file, one for email1, and another for email2.

However, if a customer activates `xdm: personalEmail.address`, only email2 will be present in the record, since the email attribute field only includes email2. These situations can address different use cases where you might want to activate to all email addresses that you have on file for a customer, or just to the most recent email address that you have on file for the customer.

The takeaway is that the number of records you export depends on your chosen merge policies and whether you select identities or attributes in the export.

## API-based streaming destinations {#streaming-destinations}

[API-based streaming destinations](/help/destinations/destination-types.md#streaming-destination) built with [Destination SDK](/help/destinations/destination-sdk/overview.md) (for example [!DNL Facebook], [!DNL Google Customer Match], [!DNL Pinterest], [!DNL Braze], and others) only support specific IDs for export. For detailed information about the specific identities that can be exported to each destination, read the *supported identities* section in each destination documentation page (for example, see the [supported identities section](/help/destinations/catalog/advertising/pinterest.md) in the [!DNL Pinterest] destination page). 

Note, however, that you have the flexibility to use data from either [private graphs](/help/profile/merge-policies/overview.md#id-stitching) or from attributes as identities. This means that you can map XDM attributes to the identity field required by the destination. See below an example for the [!DNL Pinterest] destination, where the XDM attribute `personalEmail.address` is mapped to the required [!DNL Pinterest] identity `pinterest_audience`.

>[!TIP]
>
>When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option to have Experience Platform automatically hash the data on activation. Read more about the **[!UICONTROL Apply transformation]** option in the [streaming destinations activation tutorial](/help/destinations/ui/activate-segment-streaming-destinations.md#apply-transformation).

![Example of email address attribute mapped to identity field for Pinterest destination.](/help/destinations/assets/how-destinations-work/email-mapped-to-identity.png)

### Advertising destinations relying on third-party cookie integrations {#third-party-cookie-destinations}

Advertising destinations relying on third party cookies (for example: [!DNL Google Ads], [!DNL Google Ad Manager], [!DNL Google DV360], [!DNL Bing], [!DNL The Trade Desk]) do not require customers to select IDs in the activation workflow. For these destinations, when setting up an activation workflow, Experience Platform automatically looks up the identity match table constructed by the [[!UICONTROL Experience Cloud ID service]](https://experienceleague.adobe.com/docs/id-service/using/intro/overview.html?lang=en) and exports all identities that are available for a profile and supported by the destination. 

These destinations require an ID sync to happen through either the [!UICONTROL Experience Cloud ID service] or through [!UICONTROL Experience Platform Web SDK]. 

If you are using [!UICONTROL Experience Platform Web SDK] and the legacy [!UICONTROL Experience Cloud ID service] is not implemented on the page, then you need to ensure that the datastream for the website in question is enabled to allow for Third Party ID syncing, as outlined in the [configure datastream documentation](/help/edge/datastreams/configure.md#create).

When configuring a datastream as described in the documentation linked above, you need to ensure that the **[!UICONTROL Third Party ID Sync]** slider is enabled. Most customers would leave the `container_id` field blank (it will default to 0). You only need to change this value if your legacy Audience Manager implementation used a specific container ID (note, however, that this would be the vast minority of customers).

>[!NOTE]
>
>Most of these advertising destinations are supported in Audience Manager (these destination types are known in Audience Manager as device-based destinations. See a [list of all supported device-based destinations in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/device-based/device-based-destinations-list.html?lang=en)). Only a few are listed in Experience Platform. For information about sharing data between Experience Platform and Audience Manager, read the section on [enabling data sharing from Experience Platform to Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#enable-aep-to-aam-data). Currently, there is no plan to support more third-party cookie destinations. 

## Enterprise destinations {#enterprise-destinations}

[Enterprise destinations](/help/destinations/destination-types.md#streaming-profile-export) ([!DNL Amazon Kinesis], [!DNL Azure Event Hubs], HTTP API) do not require specific IDs in the data export, as these are designed for enterprise integration use cases. However, you can export identities as XDM attributes or from the identity map, if you wish. View an [example of exported data to the HTTP destination](/help/destinations/catalog/streaming/http-destination.md#exported-data), which includes both the `personalEmail.address` XDM attribute, and the identities `ECID` and `email_lc_sha256` (hashed email address) from the identity map.

## Personalization destinations {#personalization-destinations}

[Personalization (or edge) destinations](/help/destinations/destination-types.md#edge-personalization-destinations) (for example: Adobe Target, [!DNL Custom Personalization]) do not require any identity selection in the activation workflow, as the integration is a profile lookup. The client ([!DNL Target], [!DNL Web SDK], or others) queries the [[!UICONTROL Edge]](/help/collection/home.md#edge) and pulls the profile information that it needs for on-site personalization.

<!--
![Table with all supported identities](/help/destinations/assets/how-destinations-work/identities-table.png)

-->

## Next steps {#next-steps}

After reading this document, you now know how to find out which identities are supported or required for individual destinations. You now also know how identity selection works for each destination type. 

Next, you can read about which [export settings](/help/destinations/how-destinations-work/destinations-configurations.md) for destinations are common across destination types, which can be configured on an individual destination level by developers, and which settings can be edited by users in the activation workflow.