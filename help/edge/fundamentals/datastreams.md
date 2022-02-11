---
title: Configure your Datastream for the Experience Platform Web SDK
description: Learn how to configure the Datatstreams. 
keywords: configuration;datastreams;datastreamId;edge;datastream id;Environment Settings;edgeConfigId;identity;id sync enabled;ID Sync Container ID;Sandbox;Streaming Inlet;Event Dataset;target;client code;Property Token;Target Environment ID;Cookie Destinations;url Destinations;Analytics Settings Blockreport suite id;
exl-id: 736c75cb-e290-474e-8c47-2a031f215a56
---

# Configure a datastream

A datastream represents the server-side configuration when implementing the Adobe Experience Platform Web and Mobile SDKs. While the [configure command](configuring-the-sdk.md) in the SDK controls things that must be handled on the client (such as the `edgeDomain`), datastreams handle all other configurations for the SDK. When a request is sent to the Adobe Experience Platform Edge Network, the `edgeConfigId` is used to reference the datastream. This allows you to update the server-side configuration without having to make code changes on your website. 

This document covers the steps for configuring a datastream in the Data Collection UI. 

>[!NOTE]
>
>Your organization must be provisioned for this feature in order to access it in the UI. If you do not have access, please contact your Customer Success Manager (CSM) to get put on the allowlist.

## Access the [!UICONTROL Datastreams] workspace

You can create and manage datastreams in the Data Collection UI by selecting **[!UICONTROL Datastreams]** in the left navigation.

![Datastreams tab in the Data Collection UI](../images/datastreams/datastreams-tab.png)

>[!NOTE]
>
>While you can access the [!UICONTROL Datastreams] tab regardless of whether you use Platform's tag management capabilities, you must have developer permissions to manage datastreams themselves. See the [user permissions](../../tags/ui/administration/user-permissions.md) article in the tags documentation for more details.

The [!UICONTROL Datastreams] tab displays a list of existing datastreams, including their friendly name, ID, and last modified date. Select the name of of a datastream to [view its details and configure services](#view-details).

Select the "more" icon (**...**) for a particular datastream to reveal more options. Select **[!UICONTROL Edit]** to update the [basic configuration](#configure) for the datastream, or select **[!UICONTROL Delete]** to remove the datastream.

![Options to edit or delete and existing datastream](../images/datastreams/edit-datastream.png)

## Create a new datastream {#create}

To create a datastream, start by selecting **[!UICONTROL New Datastream]**.

![Select New Datastream](../images/datastreams/new-datastream-button.png)

### [!UICONTROL Configure] {#configure}

The datastream creation workflow appears, starting at the configuration step. From here, you must provide a name and optional description for the datastream.

If you are configuring this datastream for use in Experience Platform, you must also select an [event-based Experience Data Model (XDM) schema](../../xdm/classes/experienceevent.md) to represent the data you plan on ingesting.

![Basic configuration for a datastream](../images/datastreams/configure.png)

>[!IMPORTANT]
>
>The rest of this section focuses on the steps to map data to a selected Platform event schema. If you are not configuring your datastream for Platform, select **[!UICONTROL Save]** before proceeding to the next section on [adding services to the datastream](#add-services).

### [!UICONTROL Select data]

If you chose to map your data to a schema, the **[!UICONTROL Select data]** step appears. From here, you must provide a sample JSON object that represents the structure of the data you plan on sending to Platform. You can select the option to upload the object as a file, or paste the raw object into the provided textbox instead.

If the JSON is valid, a preview schema is displayed in the right panel. Select **[!UICONTROL Next]** to continue.

![JSON sample of expected incoming data](../images/datastreams/select-data.png)

### [!UICONTROL Mapping]

The **[!UICONTROL Mapping]** step appears, allowing you to map the fields in your source data to that of the target event schema in Platform. To get started, select **[!UICONTROL Add new mapping]** to create a new mapping row.

![Adding a new mapping](../images/datastreams/add-new-mapping.png)

Select the source icon (![Source icon](../images/datastreams/source-icon.png)), and in the dialog that appears select the source field that you want to map in the provided canvas. Once you have chosen a field, use the **[!UICONTROL Select]** button to continue.

![Selecting the field to be mapped in the source schema](../images/datastreams/source-mapping.png)

Next, select the schema icon (![Schema icon](../images/datastreams/schema-icon.png)) to open a similar dialog for the target event schema. Choose the field that you want to map the data to before confirming with **[!UICONTROL Select]**.

![Selecting the field to be mapped in the target schema](../images/datastreams/target-mapping.png)

The mapping page reappears with the completed field mapping shown. The **[!UICONTROL Mapping progress]** section updates to reflect the total number of fields that have been successfully mapped.

![Field successfully mapped with progress reflected](../images/datastreams/field-mapped.png)

Continue following the above steps to map the rest of the fields to the target schema. While you do not have to map all available source fields, any fields in the target schema that are set as required must be mapped in order to complete this step. The **[!UICONTROL Required fields]** counter indicates how many required fields are not yet mapped in the current configuration.

Once the required fields count reaches zero and you are satisfied with your mapping, select **[!UICONTROL Save]** to finalize your changes.

![Mapping complete](../images/datastreams/mapping-complete.png)

## View datastream details {#view-details}

After configuring a new datastream or selecting an existing one to view, the details page for that datastream appears. Here you can find further information about the datastream, including its ID.

![Details page for a created datastream](../images/datastreams/view-details.png)

When a datastream is created, three associated environments are automatically created with identical settings. These three environments are `dev`, `stage`, and `prod`, which correspond to the [default environments for tags](../../tags/ui/publishing/environments.md). When you build a tag library to a `dev` environment, the library automatically uses the `dev` environment from the datastream. You can freely edit the settings in individual environments to suit your needs.

In SDK implementations, an `edgeConfigId` is a composite ID that specifies the datastream and the particular environment within that datastream. For example, to specify the `stage` environment for a datastream with ID `1c86778b-cdba-4684-9903-750e52912ad1`, use the `edgeConfigId` `1c86778b-cdba-4684-9903-750e52912ad1:stage`.

>[!IMPORTANT]
>
>If no environment is present in the composite ID, then the production environment (`prod`) is used.

From the datastream details screen, you can [add services](#add-services) to enable capabilities from the Adobe Experience Cloud products you have access to.

## Add services to a datastream {#add-services}

On the details page of a datastream, select **[!UICONTROL Add Service]** to start adding available services for that datastream.

![Select Add Service to continue](../images/datastreams/add-service.png)

On the next screen, use the dropdown menu to select a service to configure for this datastream. Only the services that you have access to will appear in this list.

![Select a service from the list](../images/datastreams/service-selection.png)

The subsections below describe the configuration options for each service.

>[!NOTE]
>
>Each service configuration contains an **[!UICONTROL Enabled]** toggle that is automatically activated when the service is selected. To disable the selected service for this datastream, select the **[!UICONTROL Enabled]** toggle again.

### Adobe Analytics settings

This service controls whether and how data is sent to Adobe Analytics. Additional details can be found in the guide on [sending data to Analytics](../data-collection/adobe-analytics/analytics-overview.md).

![Adobe Analytics settings Block](../images/datastreams/analytics-config.png)

| Setting | Description |
| --- | --- |
| [!UICONTROL Report Suite ID] | **(Required)** The ID of the Analytics report suite that you want to send data to. This ID can be found in the Adobe Analytics UI under [!UICONTROL Admin] > [!UICONTROL ReportSuites]. If multiple report suites are specified, then data is copied to each report suite. | 

### Adobe Audience Manager settings

This service controls whether and how data is sent to Adobe Audience Manager. All that is needed to send data to Audience Manager is to enable this section. The other settings are optional but encouraged.

![Adobe Audience Manage settings block](../images/datastreams/audience-manager-config.png)

| Setting | Description |
| --- | --- |
| [!UICONTROL Cookie Destinations Enabled] | Allows the SDK to share segment information via [cookie destinations](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/custom-destinations/create-cookie-destination.html) from [!DNL Audience Manager]. |
| [!UICONTROL URL Destinations Enabled] | Allows the SDK to share segment information via [URL destinations](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/custom-destinations/create-url-destination.html) from [!DNL Audience Manager]. |

### Adobe Experience Platform settings

>[!IMPORTANT]
>
>When enabling a datastream for Platform, take note of the Platform sandbox that you are currently using, as displayed in the top ribbon of the Data Collection UI.
>
>![Selected sandbox](../images/datastreams/platform-sandbox.png)
>
>Sandboxes are virtual partitions in Adobe Experience Platform that allow you to isolate your data and implementations from others in your organization. Once a datastream is created, its sandbox cannot be changed. For more details about the role of sandboxes in Experience Platform, see the [sandboxes documentation](../../sandboxes/home.md). 

This service controls whether and how data is sent to Adobe Experience Platform.

![Adobe Experience Platform settings block](../images/datastreams/platform-config.png)

| Setting | Description |
| --- | --- |
| [!UICONTROL Event Dataset] | **(Required)** Select the Platform dataset that customer event data will be streamed to. This schema must use the [XDM ExperienceEvent class](../../xdm/classes/experienceevent.md). |
| [!UICONTROL Profile Dataset] | Select the Platform dataset that customer attribute data will be sent to. This schema must use the [XDM Individual Profile class](../../xdm/classes/individual-profile.md). |
| [!UICONTROL Offer Decisioning] | Select this checkbox to enable Offer Decisioning for a Platform Web SDK implementation. See the guide on [using Offer Decisioning with the Platform Web SDK](../personalization/offer-decisioning/offer-decisioning-overview.md) for more implementation details. For more information on Offer Decisioning capabilities, refer to the [Adobe Journey Optimizer documentation](https://experienceleague.adobe.com/docs/journey-optimizer/using/offer-decisioniong/get-started/starting-offer-decisioning.html). |
| [!UICONTROL Edge Segmentation] | Select this checkbox to enable [edge segmentation](../../segmentation/ui/edge-segmentation.md) for this datastream. When the SDK sends data through an edge-segmentation-enabled datastream, any updated segment memberships for the profile in question are sent back in the response.<br><br>This option can be used in combination with [!UICONTROL Personalization Destinations] for [next-page personalization use cases](../../destinations/ui/configure-personalization-destinations.md). |
| [!UICONTROL Personalization Destinations] | When used in combination with the [!UICONTROL Edge Segmentation] checkbox, this option allows the datastream to connect to personalization engines like Adobe Target. Refer to the destinations documentation for specific steps on [configuring personalization destinations](../../destinations/ui/configure-personalization-destinations.md). |

### Adobe Target settings

This service controls whether and how data is sent to Adobe Target.

![Adobe Target settings block](../images/datastreams/target-config.png)

| Setting | Description |
| --- | --- |
| [!UICONTROL Property Token] | [!DNL Target] allows customers to control permissions through the use of properties. For more information on properties, see the guide on [configuring enterprise permissions](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/properties-overview.html) section of the [!DNL Target] documentation.<br><br>The property token can be found in the Adobe Target UI under [!UICONTROL Setup] > [!UICONTROL Properties]. |
| [!UICONTROL Target Environment ID] | [Environments in Adobe Target](https://experienceleague.adobe.com/docs/target/using/administer/hosts.html) help you manage your implementation through all stages of development. This setting specifies which environment you are going to use with this datastream.<br><br>Best practice is to set this differently for each of your `dev`, `stage`, and `prod` datastream environments to keep things simple. However, if you already have Adobe Target environments defined, you can use those. |
| [!UICONTROL Target Third Party ID namespace] | The identity namespace for the `mbox3rdPartyId` you want to use for this datastream. See the guide on [implementing `mbox3rdPartyId` with the Web SDK](../personalization/adobe-target/using-mbox-3rdpartyid.md) for more information. |

### [!UICONTROL Event Forwarding] settings

![Event Forwarding section of the configuration UI](../images/datastreams/event-forwarding-config.png)

### [!UICONTROL Third Party ID Sync] settings

The third party ID section is the only section that is always on. It has two available settings: "[!UICONTROL Third Party ID Sync Enabled]" and "[!UICONTROL Third Party ID Sync Container ID]".

![Third Party ID Sync section of the configuration UI](../images/datastreams/third-party-id-sync-config.png)

#### [!UICONTROL Third Party ID Sync Enabled]

Controls whether or not the SDK performs identity syncs with 3rd-party partners.

#### [!UICONTROL Third Party ID Sync Container ID]

ID syncs can be grouped into containers to allow different ID syncs to be run at different times. This controls which container of ID syncs is run for a given configuration ID.
