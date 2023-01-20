---
title: (Beta) Experience Cloud Audiences
description: Learn how to share segments from Experience Platform to various Experience Platform solutions
---

# (Beta) [!UICONTROL Experience Cloud Audiences] connection {#your-destination}

This destination allows you to share segments from Experience Platform to various Experience Platform solutions, like Audience Manager, Analytics, Advertising Cloud, Adobe Campaign, Target, or Marketo.

![The Experience Cloud Audiences destination, highlighted in the destinations catalog.](/help/destinations/assets/catalog/adobe/experience-cloud-audiences/experience-cloud-audiences-destination-catalog.png)

>[!IMPORTANT]
>
>* This destination replaces the [legacy segment sharing integration](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#aep-segments-in-aam) from Experience Platform to various Experience Cloud solutions. 
>* This destination is currently in beta. The documentation and functionality are subject to change.

## Use cases and benefits {#use-cases}

To help you better understand how and when you should use the [!UICONTROL Experience Cloud Audiences] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Enable Data Management Platform use cases {#dmp-use-cases}

In Audience Manager, you can use Experience Platform segments for Data Management Platform use cases, such as:

* Add [third party data](https://experienceleague.adobe.com/docs/audience-manager/user-guide/overview/data-types-collected.html?lang=en#third-party-data) to your segments;
* [Algorithmic modeling](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/algorithmic-models/look-alike-modeling/understanding-models.html?lang=en);
* Activate your segments to cookie-based destinations that are not yet supported in the Experience Platform destinations catalog.

### Granular control of exported segments {#segments-control}

Using the new self-service segment sharing integration via the Experience Cloud Audiences destination, you can select which segments to export to Audience Manager and beyond. The legacy segment sharing integration did not allow for a granular control of which segments should be exported to the solutions.

### Durable IDs or cookie IDs {#use-case-1}

Talk about durable IDs for other destinations and cookie IDs for this one. 

### Share  {#use-case-1}

## Prerequisites {#prerequisites}

>[!IMPORTANT]
>
> * You need an Audience Manager license to enable the Data Management Platform use cases mentioned in the section above.
> * You *do not need* an Audience Manager license to share Experience Platform segments with Adobe Advertising Cloud, Adobe Target, Marketo, and other Experience Cloud solutions, via the Core Services integration.

You need to be provisioned for and have a fully working instance of Audience Manager, Target, Ad Cloud etc.

### For customers who were already on the legacy segment sharing solution

If you are already sharing segments from Experience Platform to Audience Manager and other Core Services solutions via the [legacy segment sharing integration](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#aep-segments-in-aam), you need to create a Jira ticket to deprovision the existing integration. See a template for a deprovisioning Jira ticket here: AAM-xxxxx. What is the turnaround time for the Jira to be resolved?

After the existing legacy integration has been disabled, you can proceed to creating a connection via the self-service destination card. 

>[!IMPORTANT]
>
>* The segment export from Experience Platform to your other solutions will be stopped in the time between the Jira ticket resolution and the time a new connection is established through the destination card. You can minimize this downtime by creating the connection via the card as soon as the Jira ticket is closed.  

## Known limitations {#known-limitations}

Note the following known limitations in the beta release of the Core Services card:

* [Dataflows monitoring](/help/dataflows/ui/monitor-destinations.md) is not supported.
* When connecting to the destination, you can see an option to [enable dataflow alerts](#enable-alerts). Though visible in the UI, the enable alerts option is not supported in the beta release.
* Backfills are not supported. The first export to Audience Manager or other Experience Cloud solutions does not include a historical population of the segments. 
* In the beta release, you can create a single destination connection to the Experience Cloud Audiences destination, across all sandboxes belonging to your Experience Platform organization.

### Permissions management in Audience Manager

Segments and traits in Audience Manager are protected by RBAC controls. Segments coming through Segue from AEP to AAM is assigned to a specific datasource called "Experience Platform Segments" or something similar.
Customers can apply Segment RBAC within AAM based on this Datasource. This means AEP permissions will not be carried over in AAM. They have to set new permissions in AAM for these segments

## Supported identities {#supported-identities}

TBD - are all values supported??

*Add information in this section about the identities supported by your destination. We have prefilled the table with some standard values. Delete the values that don't apply to your destination and any values that are not prefilled.*

*YourDestination* supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select the GAID target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select the IDFA target identity when your source identity is an IDFA namespace.|
|ECID|Experience Cloud ID|A namespace that represents ECID. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID". See the following document on [ECID](/help/identity-service/ecid.md) for more information.|
|phone_sha256|Phone numbers hashed with the SHA256 algorithm|Both plain text and SHA256 hashed phone numbers are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|extern_id|Custom user IDs|Select this target identity when your source identity is a custom namespace.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the *YourDestination* destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

>[!IMPORTANT]
> 
>In the beta release, you can create a single destination connection to the Experience Cloud Audiences destination, across all sandboxes belonging to your Experience Platform organization.

### Authenticate to destination {#authenticate}

To authenticate to the destination, select **[!UICONTROL Set up]** in the destination card view in the catalog and select **[!UICONTROL Connect to destination]**.

![View of the Connect to destination option for the Experience Cloud Audiences destination.](/help/destinations/assets/catalog/adobe/experience-cloud-audiences/experience-cloud-audiences-authenticate-to-destination.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Configure new destination screen showing the required and optional settings to connect to the Experience Cloud Audiences destination.](/help/destinations/assets/catalog/adobe/experience-cloud-audiences/connect-to-destination.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

<!--

Commenting this part out for the duration of the beta program

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).
-->

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.


## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination. Note that no mapping step is required for this destination.

## Exported data / Validate data export {#exported-data}

To validate successful data export, you can check that your segments have successfully made it through to your desired Experience Cloud solution.

### Validate Audience Manager

show screenshot and blurb about how data landed successfullt



## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Link to legacy segment sharing doc