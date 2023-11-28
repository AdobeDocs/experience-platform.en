---
title: Zeta Marketing Platform
description: The Zeta Marketing Platform, henceforth ZMP, is a cloud-based system with the tools to help you acquire, grow, and retain customers more efficiently, powered by intelligence (proprietary data and AI). For more details, refer to [Zeta Global](https://zetaglobal.com/). 

---

# Zeta Marketing Platform {#zeta-marketing-platform}

## Overview {#overview}

The Zeta Marketing Platform, henceforth ZMP, is a cloud-based system with the tools to help you acquire, grow, and retain customers more efficiently, powered by intelligence (proprietary data and AI). For more details, refer to [Zeta Global](https://zetaglobal.com/). 

With the ZMP connector available in Adobe Experience Platform, you can seamlessly synchronize your audiences from Experience Platform to the ZMP. 
>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the *Zeta Global* team. For any inquiries or update requests, please contact the team at [Contact Us](https://zetaglobal.com/about/contact-us/).

## Use cases {#use-cases}

### Use case #1 {#use-case-1}
A marketer wants to build unique audience profiles, identify their most valuable segments, and use them across any digital channel that the ZMP supports. They want to create a true 360 view of a consumer profile, build and activate meaningful audiences. More details on which channels the ZMP supports can be found [here](https://zetaglobal.com/platform/integrations/).

### Use case #2 {#use-case-2}
An advertiser wants to target users in audiences with ads through the Zeta DSP as the user interacts with their brands. More information on the Zeta DSP and other DSPs that the ZMP supports can be found [here](https://knowledgebase.zetaglobal.com/programmatic-user-guide/).

## Prerequisites {#prerequisites}

### Zeta Marketing Platform prerequisites

* Before configuring a new destination, ensure that you have a shell customer list already created in the ZMP. You will need to select one of these customer lists when sending the platform audience over to the ZMP
* The username and password to configure the destination will be **api** and the **REST API Key** that you can view in your ZMP account by navigating to **Settings** > **Integrations** > **Keys & Apps** section. More information can be found [here](https://knowledgebase.zetaglobal.com/zmp/integrations).
* Note that even though the Adobe Experience Platform supports activating multiple audience to a specific ZMP destination instance, each ZMP destination instance should only receive one and only one Experience Platform audience.

## Supported identities {#supported-identities}

The ZMP destination connector will allow you to map any platform identities to the identities that are set in your ZMP account. The connector automagically fills out the target fields that you can choose during the mapping step.

ADD IMAGE FOR EXPLANATION

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ Are you sure?| Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

*Add the fields that customers must fill in when authenticating to your destination. These fields are destination-specific and depend on your configuration in Destination SDK. Your destination's fields may not be the same as the ones listed below. Please also include a screenshot similar to the sample screenshot shown below.*

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* Enter the **[!UICONTROL Username]** as **api**
* Enter the **[!UICONTROL Password]** as your **[!UICONTROL REST API Key]** that you can view in your ZMP account by navigating to **Settings** > **Integrations** > **Keys & Apps** section. More information can be found [here](https://knowledgebase.zetaglobal.com/zmp/integrations).

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

ADD IMAGE

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account Site ID]**: Your ZMP **Site Id** where you want to send your audiences to.
*  **[!UICONTROL Select Segment]**: The static segment in your ZMP Site Id that you want to be updated with the Platform audience.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

*Add information about supported mappings between source and target fields in the Mapping step of the activation workflow. Your destination might support exporting profile attributes, identity namespaces, or both. Some fields might be mandatory. Target attributes might be predefined or custom. Call out the important caveats and use examples, preferably with screenshots. Two examples of destination pages which you can use as reference are:*

* *[Pega](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/pega.html?lang=en#mapping-example)*
* *[Medallia](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/voice/medallia-connector.html?lang=en#map)*

## Exported data / Validate data export {#exported-data}

*Add a paragraph about how data is exported to your destination. This would help the customer make sure that they have correctly integrated with your destination. For example, you could provide a sample JSON like the one below. Or, you could provide screenshots and information from your destination's interface that show how customers should expect segments to be populating in the destination platform.*

```
{
  "person": {
    "email": "yourstruly@adobe.com"
  },
  "segmentMembership": {
    "ups": {
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93": {
        "lastQualificationTime": "2020-05-25T21:24:39Z",
        "status": "exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae": {
        "lastQualificationTime": "2020-05-25T23:37:33Z",
        "status": "existing"
      }
    }
  },
  "identityMap": {
    "ecid": [
      {
        "id": "14575006536349286404619648085736425115"
      },
      {
        "id": "66478888669296734530114754794777368480"
      }
    ],
    "email_lc_sha256": [
      {
        "id": "655332b5fa2aea4498bf7a290cff017cb4"
      },
      {
        "id": "66baf76ef9de8b42df8903f00e0e3dc0b7"
      }
    ]
  }
}

```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

*You can provide further links to your product documentation or any other resources that you consider important for the customer to be successful.*

