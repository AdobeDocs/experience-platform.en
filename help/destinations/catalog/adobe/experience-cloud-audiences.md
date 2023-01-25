---
title: (Beta) Experience Cloud Audiences
description: Learn how to share segments from Experience Platform to various Experience Platform solutions.
---

# (Beta) [!UICONTROL Experience Cloud Audiences] connection

This destination allows you to share segments from Experience Platform to various Experience Cloud solutions, like Audience Manager, Analytics, Advertising Cloud, Adobe Campaign, Target, or Marketo.

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

Use the new self-service segment sharing integration via the Experience Cloud Audiences destination to select which segments to export to Audience Manager and beyond. This allows you to determine which segments you want to share with other Experience Cloud solutions and which segments you want to keep in Experience Platform exclusively.

The legacy segment sharing integration did not allow for a granular control of which segments should be exported to Audience Manager and beyond.

### Share Experience Platform segments with further Experience Cloud solutions {#share-segments-with-other-solutions}

Apart from sharing segments with Audience Manager, the Experience Platform Audiences destination card enables you to share segments with any other Experience Cloud solution that you are provisioned for, including: 

* Adobe Campaign
* Adobe Target
* Advertising Cloud
* Analytics
* Marketo

<!--

Note: briefly talk about when to share segments to these destinations using the existing destination cards and when to share using the new Experience Cloud Audiences destination. 

-->

## Prerequisites {#prerequisites}

>[!IMPORTANT]
>
> * This destination is available to [Adobe Real-Time Customer Data Platform Prime and Ultimate](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) customers.
> * You need an Audience Manager license to enable the Data Management Platform use cases mentioned in the section above.
> * You *do not need* an Audience Manager license to share Experience Platform segments with Adobe Advertising Cloud, Adobe Target, Marketo, and other Experience Cloud solutions, via the Experience Cloud Audiences integration.

### For customers who are using the legacy segment sharing solution

If you are already sharing segments from Experience Platform to Audience Manager and other Experience Cloud solutions via the [legacy segment sharing integration](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#aep-segments-in-aam), you must contact either Customer Care or your Customer Success Manager to disable the legacy integration. Customer Care and Customer Support Management teams must file a Jira ticket (see template ticket AAM-52354) to disable the integration. 

<!--What is the turnaround time for the Jira to be resolved?-->

After the existing legacy integration has been disabled, you can proceed to creating a connection via the self-service destination card. 

>[!IMPORTANT]
>
>The segment export from Experience Platform to your other solutions will be stopped in the time between the Jira ticket resolution and the time a new connection is established through the destination card. You can minimize this downtime by creating the connection via the card as soon as the Jira ticket is closed.  

## Known limitations and callouts {#known-limitations}

Note the following known limitations and important callouts in the beta release of the Experience Cloud Audiences card:

* [Dataflows monitoring](/help/dataflows/ui/monitor-destinations.md) is not supported.
* When connecting to the destination, you can see an option to [enable dataflow alerts](#enable-alerts). Though visible in the UI, the **enable alerts option is not supported** in the beta release.
* **Backfills are not supported**. The first export to Audience Manager or other Experience Cloud solutions does not include a historical population of the segments. 
* In the beta release, you can create **a single destination connection to the Experience Cloud Audiences destination**, across all sandboxes belonging to your Experience Platform organization.
* There is a **four-hour latency** between the time that data is activated in Experience Platform and the time that data is ready to be used in Audience Manager and other Experience Cloud solutions.

### Permissions management in Audience Manager

Segments and traits in Audience Manager are subject to [Role-Based Access Controls](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/administration/administration-overview.html?lang=en) (RBAC). 

Segments exported from Experience Platform are assigned to a specific datasource in Audience Manager called **[!UICONTROL Experience Platform Segments]**.

You can apply access controls to the segments belonging to the datasource. This means that data governance settings from Experience Platform are not carried over in Audience Manager. You must set new access control permissions in Audience Manager for these segments and traits created from Experience Platform segments.

## Supported identities {#supported-identities}

The profiles that are exported to the [!UICONTROL Experience Cloud Audiences] destination are mapped to the identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|ECID|Experience Cloud ID| A namespace that represents ECID. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID". See the following document on [ECID](/help/identity-service/ecid.md) for more information.|
|GAID|Google Advertising ID| Profiles ingested into Experience Platform with a primary identity of Google Advertising ID (GAID) can be exported to this destination.|
|IDFA|Apple ID for Advertisers| Profiles ingested into Experience Platform with a primary identity of Apple ID for Advertisers (IDFA) can be exported to this destination.|
|email_lc_sha256| Email addresses hashed with the SHA256 algorithm|Profiles ingested into Experience Platform with a primary identity of hashed email address can be exported to this destination.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) keyed off the identities listed in the section above.|
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

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination. Note that no [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping) is required and no [scheduling step](/help/destinations/ui/activate-segment-streaming-destinations.md#scheduling) is available for this destination.

## Validate data export {#exported-data}

To validate successful data export, you can check that your segments have successfully made it through to your desired Experience Cloud solution.

### Validate data in Audience Manager

Your Experience Platform segments appear in Audience Manager as [signals](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#aep-segments-as-aam-signals), [traits](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#aep-segments-as-aam-traits), and [segments](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html?lang=en#aep-segments-as-aam-segments). You can verify in Audience Manager if the data has appeared as described in the documentation links above. 

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).