---
keywords: custom personalization; destination; experience platform custom destination;
title: Custom personalization connection
description: This destination provides external personalization, content management systems, ad servers, and other applications that are running on your site a way to retrieve segment information from Adobe Experience Platform. This destination provides real-time personalization based on user profile segment membership.
exl-id: 2382cc6d-095f-4389-8076-b890b0b900e3
---
# Custom personalization connection {#custom-personalization-connection} 

## Overview {#overview}

This destination provides a way to retrieve segment information from Adobe Experience Platform to external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites.

## Prerequisites {#prerequisites}

This integration is powered by the [Adobe Experience Platform Web SDK](../../../edge/home.md) or the [Adobe Experience Platform Mobile SDK](https://aep-sdks.gitbook.io/docs/). You must be using one of these SDKs to use this destination.

>[!IMPORTANT]
>
>Before creating a custom personalization connection, read the guide on how to [configure personalization destinations for same-page and next-page personalization](../../ui/configure-personalization-destinations.md). This guide takes you through the required configuration steps for same-page and next-page personalization use cases, across multiple Experience Platform components.

## Export type {#export-type}

**Profile request** - you are requesting all the segments that are mapped in the custom personalization destination for a single profile. Different custom personalization destinations can be set up for different [Adobe Data Collection datastreams](../../../edge/fundamentals/datastreams.md).

## Use cases {#use-cases}

This destination shares audiences with ad servers and non-Adobe personalization applications, to be used in real-time, for deciding which advertisement users should see on a website.

### Use Case #1

**Personalizing a home page**

A home rental and sales website wants to personalize their home page based on segment qualifications in Adobe Experience Platform. The company can select what audiences should get a personalized experience and map those to the custom personalization destination that had been set up for their non-Adobe personalization application as targeting criteria.

**Targeted on-site advertising**

Using a separate custom personalization destination for their ad server, the same website can target on-site advertising using a different set of segments from Adobe Experience Platform as targeting criteria.

## Connect to the destination {#connect}

>[!CONTEXTUALHELP]
>id="platform_destinations_custom_personalization_datastream"
>title="About datastream IDs"
>abstract="This option determines in which data collection datastream the segments will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. You must configure a datastream before you can configure your destination."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en" text="Learn how to configure a datastream."

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
*  **[!UICONTROL Integration alias]**: This value is sent to the Experience Platform Web SDK as a JSON object name. 
*  **[!UICONTROL Datastream ID]**: This determines in which Data Collection datastream the segments will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](../../../edge/fundamentals/datastreams.md) for more details.

## Activate segments to this destination {#activate}

Read [Activate profiles and segments to profile request destinations](../../ui/activate-profile-request-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

If you are using [Tags in Adobe Experience Platform](../../../tags/home.md) to deploy the Experience Platform Web SDK, use the [send event complete](../../../edge/extension/event-types.md) functionality and your custom code action will have an `event.destinations` variable that you can use to see the exported data.

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

The JSON response from Adobe Experience Platform can be parsed to find the corresponding integration alias of the application you are integrating with Adobe Experience Platform. The segment IDs can be passed into the application's code as targeting parameters. Below is a sample of what this would look like specific to the destination response.

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
        var personalizationDestinations = result.destinations.filter(x => x.alias == “personalizationAlias”)
        if(personalizationDestinations.length > 0) {
             // Code to pass the segment IDs into the system that corresponds to personalizationAlias
        }
        var adServerDestinations = result.destinations.filter(x => x.alias == “adServerAlias”)
        if(adServerDestinations.length > 0) {
            // Code to pass the segment ids into the system that corresponds to adServerAlias
        }
     }
   })
  .catch(function(error) {
    // Tracking the event failed.
  });
```


## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](../../../data-governance/home.md).
