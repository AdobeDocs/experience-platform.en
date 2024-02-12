---
keywords: custom personalization; destination; experience platform custom destination;
title: Custom personalization connection
description: This destination provides external personalization, content management systems, ad servers, and other applications that are running on your site a way to retrieve audience information from Adobe Experience Platform. This destination provides real-time personalization based on user profile audience membership.
exl-id: 2382cc6d-095f-4389-8076-b890b0b900e3
---

# Custom personalization connection {#custom-personalization-connection} 

## Destination changelog {#changelog}

|Release month|Update type|Description|
|---|---|---|
|May 2023|Functionality and documentation update| As of May 2023, the **[!UICONTROL Custom personalization]** connection supports [attribute-based personalization](../../ui/activate-edge-personalization-destinations.md#map-attributes) and is generally available to all customers.|

{style="table-layout:auto"}

>[!IMPORTANT]
>
>Profile attributes may contain sensitive data. To protect this data, the  you must use the [Edge Network Server API](/help/server-api/overview.md) when configuring the **[!UICONTROL Custom Personalization]** destination for attribute-based personalization. All the Server API calls must be made in an [authenticated context](../../../server-api/authentication.md).
>
><br>If you are already using Web SDK or Mobile SDK for your integration, you can retrieve attributes via the Server API by adding a server-side integration.
>
><br>If you do not follow the requirements above, personalization will be based on audience membership only.

## Overview {#overview}

Set up this destination to allow external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites to retrieve audience information from Adobe Experience Platform.

## Prerequisites {#prerequisites}

This integration is powered by the [Adobe Experience Platform Web SDK](../../../edge/home.md) or the [Adobe Experience Platform Mobile SDK](https://developer.adobe.com/client-sdks/documentation/). You must be using one of these SDKs to use this destination.

>[!IMPORTANT]
>
>Before creating a custom personalization connection, read the guide on how to [activate audience data to edge personalization destinations](../../ui/activate-edge-personalization-destinations.md). This guide takes you through the required configuration steps for same-page and next-page personalization use cases, across multiple Experience Platform components.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!DNL Profile request]** | You are requesting all the audiences that are mapped in the custom personalization destination for a single profile. Different custom personalization destinations can be set up for different [Adobe Data Collection datastreams](../../../datastreams/overview.md).|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

## Connect to the destination {#connect}

>[!CONTEXTUALHELP]
>id="platform_destinations_custom_personalization_datastream"
>title="About datastream IDs"
>abstract="This option determines in which data collection datastream the audiences will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. You must configure a datastream before you can configure your destination."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/datastreams/configure.html" text="Learn how to configure a datastream"

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
*  **[!UICONTROL Integration alias]**: This value is sent to the Experience Platform Web SDK as a JSON object name. 
*  **[!UICONTROL Datastream ID]**: This determines in which Data Collection datastream the audiences will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](../../../datastreams/overview.md) for more details.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and audiences edge personalization destinations](../../ui/activate-edge-personalization-destinations.md) for instructions on activating audiences to this destination.

## Exported data {#exported-data}

If you are using [Tags in Adobe Experience Platform](../../../tags/home.md) to deploy the Experience Platform Web SDK, use the [send event complete](../../../tags/extensions/client/web-sdk/event-types.md) functionality and your custom code action will have an `event.destinations` variable that you can use to see the exported data.

Here is a sample value for the `event.destinations` variable:

```
[
   {
      "type":"profileLookup",
      "destinationId":"7bb4cb8d-8c2e-4450-871d-b7824f547111",
      "alias":"personalizationAlias",
      "segments":[
         {
            "id":"399eb3e7-3d50-47d3-ad30-a5ad99e8ab77"
         },
         {
            "id":"499eb3e7-3d50-47d3-ad30-a5ad99e8ab77"
         }
      ]
   }
]
```

If you are not using [Tags](../../../tags/home.md) to deploy the Experience Platform Web SDK, use the [handling responses from events](../../../edge/fundamentals/tracking-events.md#handling-responses-from-events) functionality to see the exported data.

The JSON response from Adobe Experience Platform can be parsed to find the corresponding integration alias of the application you are integrating with Adobe Experience Platform. The audience IDs can be passed into the application's code as targeting parameters. Below is a sample of what this would look like specific to the destination response.

```
alloy("sendEvent", {
  "renderDecisions": true,
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  }
}).then(function(result) {
    if(result.destinations) { // Looking to see if the destination results are there
 
        // Get the destination with a particular alias
        var personalizationDestinations = result.destinations.filter(x => x.alias == "personalizationAlias")
        if(personalizationDestinations.length > 0) {
             // Code to pass the audience IDs into the system that corresponds to personalizationAlias
        }
        var adServerDestinations = result.destinations.filter(x => x.alias == "adServerAlias")
        if(adServerDestinations.length > 0) {
            // Code to pass the audience IDs into the system that corresponds to adServerAlias
        }
     }
   })
  .catch(function(error) {
    // Tracking the event failed.
  });
```

### Example response for [!UICONTROL Custom Personalization With Attributes]

When using **[!UICONTROL Custom Personalization With Attributes]**, the API response will look similar to the example below.

The difference between **[!UICONTROL Custom Personalization With Attributes]** and **[!UICONTROL Custom Personalization]** is the inclusion of the `attributes` section in the API response.

```json
[
    {
        "type": "profileLookup",
        "destinationId": "7bb4cb8d-8c2e-4450-871d-b7824f547130",
        "alias": "personalizationAlias",
        "attributes": {
             "countryCode": {
                   "value" : "DE"
              },
             "membershipStatus": {
                   "value" : "PREMIUM"
              }
         },         
        "segments": [
            {
                "id": "399eb3e7-3d50-47d3-ad30-a5ad99e8ab77"
            },
            {
                "id": "499eb3e7-3d50-47d3-ad30-a5ad99e8ab77"
            }
        ]
    }
]
```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](../../../data-governance/home.md).
