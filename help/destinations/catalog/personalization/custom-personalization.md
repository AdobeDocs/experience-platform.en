---
keywords: custom personalization; destination; experience platform custom destination;
title: Custom Personalization Connection
description: Learn how to set up the Custom Personalization destination to retrieve audience data from Adobe Experience Platform for real-time on-site personalization.
exl-id: 2382cc6d-095f-4389-8076-b890b0b900e3
---

# Custom Personalization Connection {#custom-personalization-connection}

## Destination changelog {#changelog}

Use this changelog to track updates to the Custom Personalization destination.

| Release month | Update type | Description |
| --- | --- | --- |
| May 2023 | Functionality and documentation update | As of May 2023, the **[!UICONTROL Custom personalization]** connection supports [attribute-based personalization](/help/destinations/ui/activate-edge-personalization-destinations.md#map-attributes) and is generally available to all customers. |

{style="table-layout:auto"}

>[!IMPORTANT]
>
>Profile attributes may contain sensitive data. To protect this data, use the [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) when configuring the **[!UICONTROL Custom Personalization]** destination for attribute-based personalization. All Edge Network API calls must be made in an [authenticated context](https://developer.adobe.com/data-collection-apis/docs/getting-started/authentication).
>
>Retrieve profile attributes via the [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) by adding a server-side integration that uses the same datastream you are already using for your Web or Mobile SDK implementation.
>
>If you do not follow the requirements above, personalization is based on audience membership only.

## Overview {#overview}

Set up this destination to allow external personalization platforms, content management systems, ad servers, and other applications running on customer websites to retrieve audience information from [!DNL Adobe Experience Platform].

## Prerequisites {#prerequisites}

This destination requires one of the following data collection methods, depending on your implementation:

* Use the [Adobe Experience Platform Web SDK](/help/collection/js/js-overview.md) to collect data from your website.
* Use the [Adobe Experience Platform Mobile SDK](https://developer.adobe.com/client-sdks/documentation/) to collect data from your mobile application.
* Use the [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) if you are not using the Web SDK or Mobile SDK, or if you want to personalize the user experience based on profile attributes.

>[!IMPORTANT]
>
>**Attribute-based personalization requirements:** To personalize based on profile attributes (not just audience membership), you **must** use the [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) with authenticated server-side integration, regardless of whether you are also using Web SDK or Mobile SDK for data collection.
>
>Web SDK and Mobile SDK alone support personalization based on audience membership only. The Edge Network API is **required** to securely retrieve profile attributes for personalization.

>[!IMPORTANT]
>
>Before creating a Custom Personalization connection, read the guide on how to [activate audience data to edge personalization destinations](/help/destinations/ui/activate-edge-personalization-destinations.md). This guide takes you through the required configuration steps for same-page and next-page personalization use cases, across multiple Experience Platform components.

## Supported audiences {#supported-audiences}

The following table lists the audience types you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](/help/segmentation/home.md). |
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li>custom upload audiences [imported](/help/segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li>look-alike audiences,</li><li>federated audiences,</li><li>audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer],</li><li>and more.</li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Target specific groups of people based on customer profiles. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

The following table describes the export type and frequency for this destination.

| Item | Type | Notes |
| --- | --- | --- |
| Export type | **[!UICONTROL Profile request]** | Requests all audiences mapped in the Custom Personalization destination for a single profile. Different Custom Personalization destinations can be set up for different [Adobe Data Collection datastreams](/help/datastreams/overview.md). |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are always-on API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!CONTEXTUALHELP]
>id="platform_destinations_custom_personalization_datastream"
>title="About datastreams"
>abstract="This option determines in which data collection datastream the audiences will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. You must configure a datastream before you can configure your destination."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/datastreams/configure.html" text="Learn how to configure a datastream"

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](/help/destinations/ui/connect-destination.md) this destination, you must provide the following information:

* **[!UICONTROL Name]**: Fill in the preferred name for this destination.
* **[!UICONTROL Description]**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
* **[!UICONTROL Integration alias]**: A required string that identifies this destination in the personalization response. The alias value is returned to your website or app together with the audiences (and, if configured, attributes) associated with this destination. Use the alias in your client-side or server-side code to locate and process the correct personalization object when multiple personalization destinations are active on the same datastream. The alias must be unique within a sandbox across all Custom Personalization destinations.
* **[!UICONTROL Datastream]**: This determines in which Data Collection datastream the audiences will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](/help/datastreams/overview.md) for more details.

### Enable alerts {#enable-alerts}

Enable alerts to receive notifications on the status of your dataflow to this destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](/help/destinations/ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and audiences to edge personalization destinations](/help/destinations/ui/activate-edge-personalization-destinations.md) for instructions on activating audiences to this destination.

## Exported data {#exported-data}

If you are using [Tags in Adobe Experience Platform](/help/tags/home.md) to deploy the Experience Platform Web SDK, use the [send event complete](/help/tags/extensions/client/web-sdk/event-types.md) functionality. Your custom code action will have an `event.destinations` variable that you can use to see the exported data.

Here is a sample value for the `event.destinations` variable:

```json
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

If you are not using [Tags](/help/tags/home.md) to deploy the Experience Platform Web SDK, use [command responses](/help/collection/js/commands/command-responses.md) to see the exported data.

Parse the JSON response from [!DNL Adobe Experience Platform] to find the integration alias of the application you are integrating with [!DNL Adobe Experience Platform]. Pass the audience IDs into the application's code as targeting parameters. Below is a sample of what this looks like specific to the destination response.

```js
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

### Example response for Custom Personalization With Attributes {#example-response-attributes}

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

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
